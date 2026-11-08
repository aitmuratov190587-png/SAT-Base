import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

async function moduleFrom(entry) {
  const { outputFiles } = await build({ entryPoints: [entry], bundle: true, write: false, format: 'esm', platform: 'node' });
  return import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));
}
const session = await moduleFrom('src/lib/flashRushSession.ts');
const { CROSS_TEXT_QUESTIONS } = await moduleFrom('src/data/crossTextQuestions.ts');
const { QUESTION_REGISTRY } = await moduleFrom('src/data/questionRegistry.ts');
const { LINEAR_EQUATIONS_TWO_QUESTIONS, LINEAR_FUNCTIONS_QUESTIONS } = await moduleFrom('src/data/math/index.ts');
const { localDate, localDateKey } = await moduleFrom('src/lib/dates.ts');

test('all question IDs and answer keys are valid and weighted sections total 800', () => {
  assert.equal(CROSS_TEXT_QUESTIONS.length, 248);
  assert.equal(new Set(CROSS_TEXT_QUESTIONS.map(q => q.id)).size, 248);
  for (const q of CROSS_TEXT_QUESTIONS) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options.map(o => o.letter)).size, 4);
    assert.ok(q.options.some(o => o.letter === q.correctAnswer));
    assert.ok(q.text1 && q.text2 && q.prompt && q.explanation);
  }
  for (const module of [1, 2]) assert.equal(session.createSession().questions.filter(q => q.module === module).reduce((sum, q) => sum + q.points, 0), 800);
});
test('shuffled options preserve scoring and pristine question data', () => {
  for (let run = 0; run < 15; run++) {
    const attempt = session.createSession(0);
    assert.ok(session.isFlashRushSession(attempt));
    for (const q of attempt.questions) attempt.userAnswers[q.id] = q.correctAnswerId;
    assert.equal(session.calculateScores(attempt).total, 1600);
  }
});
test('algebra topics point to their matching question sets', () => {
  const functions = QUESTION_REGISTRY['m-alg-2'];
  const twoVariableEquations = QUESTION_REGISTRY['m-alg-3'];
  assert.equal(functions.topicName, 'Linear functions');
  assert.deepEqual(functions.questions.map(q => q.id), LINEAR_FUNCTIONS_QUESTIONS.map(q => q.id));
  assert.equal(twoVariableEquations.topicName, 'Linear equations in two variables');
  assert.deepEqual(twoVariableEquations.questions.map(q => q.id), LINEAR_EQUATIONS_TWO_QUESTIONS.map(q => q.id));
});
test('timeout captures latest answers and remains idempotent', () => {
  let attempt = session.createSession(0);
  const rw = attempt.questions[0];
  attempt = session.answerQuestion(attempt, rw.id, rw.correctAnswerId, 599000);
  attempt = session.submitModule(attempt, 600000);
  assert.equal(attempt.phase, 'break');
  assert.equal(attempt.timeSpent.rw, 600);
  attempt = session.startMath(attempt, 660000);
  const math = attempt.questions.find(q => q.module === 2);
  attempt = session.answerQuestion(attempt, math.id, math.correctAnswerId, 1259999);
  const finished = session.submitModule(attempt, 1260000);
  assert.equal(finished.userAnswers[rw.id], rw.correctAnswerId);
  assert.equal(finished.userAnswers[math.id], math.correctAnswerId);
  assert.deepEqual(finished.timeSpent, { rw: 600, math: 600 });
  assert.equal(session.submitModule(finished, 1400000), finished);
  assert.ok(session.isFlashRushSession(finished));
});
test('clock uses deadlines after background throttling and rejects late answers', () => {
  const attempt = session.createSession(0);
  assert.equal(session.remainingSeconds(attempt, 455000), 145);
  assert.equal(session.remainingSeconds(attempt, 700000), 0);
  const late = session.answerQuestion(attempt, attempt.questions[0].id, 'A', 600001);
  assert.deepEqual(late.userAnswers, {});
  assert.equal(late.phase, 'break');
});
test('refresh restores ordering, answers, flags and elapsed time', () => {
  let attempt = session.createSession(1000);
  attempt = session.answerQuestion(attempt, attempt.questions[0].id, 'B', 2000);
  attempt.flagged.push(attempt.questions[0].id);
  const restored = JSON.parse(JSON.stringify(attempt));
  assert.ok(session.isFlashRushSession(restored));
  assert.equal(session.remainingSeconds(restored, 121000), 480);
  assert.deepEqual(restored, attempt);
});
test('malformed and tampered results are rejected instead of crashing the UI', () => {
  for (const invalid of [null, [], {}, { questions: null }, { ...session.createSession(), questions: [] }, { ...session.createSession(), deadline: NaN }]) assert.equal(session.isFlashRushSession(invalid), false);
  const modified = session.createSession();
  modified.questions[0].points = 99999;
  assert.equal(session.isFlashRushSession(modified), false);
});
test('unanswered diagnostic has finite baseline and calendar dates stay local', () => {
  assert.deepEqual(session.calculateScores(session.createSession()), { english: 200, math: 200, total: 400 });
  const date = localDate('2026-10-03');
  assert.equal(date.getDate(), 3);
  assert.equal(date.getHours(), 0);
  assert.equal(localDateKey(date), '2026-10-03');
});
