import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PRACTICE_TEST_1,
  ALL_PRACTICE_TEST_1_QUESTIONS,
  calculateFullMockScores,
} from '../src/data/mockTests/mockPracticeTest1.ts';
import {
  createFullMockSession,
  getModuleConfigByIndex,
} from '../src/lib/fullMockSession.ts';

test('Digital SAT Practice Test #1 — Module Configuration & Timings', () => {
  assert.equal(PRACTICE_TEST_1.totalQuestions, 98);
  assert.equal(PRACTICE_TEST_1.totalMinutes, 134);

  const { rw1, rw2, math1, math2 } = PRACTICE_TEST_1.modules;
  assert.equal(rw1.totalQuestions, 27);
  assert.equal(rw1.timeSeconds, 32 * 60);
  assert.equal(rw2.totalQuestions, 27);
  assert.equal(rw2.timeSeconds, 32 * 60);
  assert.equal(math1.totalQuestions, 22);
  assert.equal(math1.timeSeconds, 35 * 60);
  assert.equal(math2.totalQuestions, 22);
  assert.equal(math2.timeSeconds, 35 * 60);

  assert.equal(ALL_PRACTICE_TEST_1_QUESTIONS.length, 98);
});

test('Digital SAT Practice Test #1 — Question Integrity & Structure', () => {
  const ids = new Set();
  for (const q of ALL_PRACTICE_TEST_1_QUESTIONS) {
    assert.ok(q.id, 'Every question must have an id');
    assert.ok(!ids.has(q.id), `Duplicate question id found: ${q.id}`);
    ids.add(q.id);

    assert.ok(q.prompt && q.prompt.length > 5, `Question ${q.id} missing valid prompt`);
    assert.ok(q.correctAnswer && q.correctAnswer.length > 0, `Question ${q.id} missing correctAnswer`);
    assert.ok(q.explanation && q.explanation.length > 15, `Question ${q.id} missing explanation`);
    assert.ok(q.domain, `Question ${q.id} missing domain`);
    assert.ok(q.skill, `Question ${q.id} missing skill`);

    if (q.type === 'multiple_choice') {
      assert.ok(q.options && q.options.length === 4, `Question ${q.id} must have 4 options`);
      const letters = q.options.map(o => o.letter);
      assert.deepEqual(letters, ['A', 'B', 'C', 'D']);
      assert.ok(['A', 'B', 'C', 'D'].includes(q.correctAnswer));
    } else {
      assert.equal(q.type, 'student_produced_response');
      assert.ok(q.number >= 18, `SPR question ${q.id} should be Q18-22`);
      // SPR answer should be a valid number or fraction
      const val = parseFloat(q.correctAnswer);
      assert.ok(!isNaN(val), `SPR answer ${q.correctAnswer} in ${q.id} must be numeric`);
    }
  }
});

test('Digital SAT Practice Test #1 — Scoring Algorithm', () => {
  // Test perfect score
  const perfectAnswers = {};
  for (const q of ALL_PRACTICE_TEST_1_QUESTIONS) {
    perfectAnswers[q.id] = q.correctAnswer;
  }
  const perfectResult = calculateFullMockScores(perfectAnswers);
  assert.equal(perfectResult.totalCorrect, 98);
  assert.equal(perfectResult.rwScore, 800);
  assert.equal(perfectResult.mathScore, 800);
  assert.equal(perfectResult.totalScore, 1600);
  assert.equal(perfectResult.domainBreakdown.length, 8);

  // Test zero score
  const zeroResult = calculateFullMockScores({});
  assert.equal(zeroResult.totalCorrect, 0);
  assert.equal(zeroResult.rwScore, 200);
  assert.equal(zeroResult.mathScore, 200);
  assert.equal(zeroResult.totalScore, 400);

  // Test SPR equivalence with spaces, decimals, and fractions
  const mathAnswers = {};
  // Math M1 Q18 is 10
  mathAnswers['pt1-math-m1-q18'] = ' 10 ';
  // Math M2 Q20 is 83.5
  mathAnswers['pt1-math-m2-q20'] = '83.50';
  const customResult = calculateFullMockScores(mathAnswers);
  assert.equal(customResult.mathCorrect, 2);
});

test('Digital SAT Practice Test #1 — Session Manager Creation', () => {
  const session = createFullMockSession();
  assert.equal(session.testId, 'practice-test-1');
  assert.equal(session.currentModuleIndex, 0);
  assert.equal(session.phase, 'test');
  assert.equal(session.currentQuestionIndex, 0);
  assert.ok(session.moduleDeadline > Date.now());

  const rw1 = getModuleConfigByIndex(0);
  assert.equal(rw1.questions.length, 27);
  const math2 = getModuleConfigByIndex(3);
  assert.equal(math2.questions.length, 22);
});
