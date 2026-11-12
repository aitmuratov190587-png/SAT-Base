import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PRACTICE_TESTS,
  ALL_QUESTIONS_BY_TEST,
  calculateFullMockScores,
  getPracticeTestConfig,
} from '../src/data/mockTests/index.ts';
import {
  createFullMockSession,
  getModuleConfigByIndex,
} from '../src/lib/fullMockSession.ts';

for (const testNum of [1, 2, 3]) {
  test(`Digital SAT Practice Test #${testNum} — Module Configuration & Timings`, () => {
    const config = getPracticeTestConfig(testNum);
    assert.equal(config.totalQuestions, 98);
    assert.equal(config.totalMinutes, 134);

    const { rw1, rw2, math1, math2 } = config.modules;
    assert.equal(rw1.totalQuestions, 27);
    assert.equal(rw1.timeSeconds, 32 * 60);
    assert.equal(rw2.totalQuestions, 27);
    assert.equal(rw2.timeSeconds, 32 * 60);
    assert.equal(math1.totalQuestions, 22);
    assert.equal(math1.timeSeconds, 35 * 60);
    assert.equal(math2.totalQuestions, 22);
    assert.equal(math2.timeSeconds, 35 * 60);

    const allQuestions = ALL_QUESTIONS_BY_TEST[testNum];
    assert.equal(allQuestions.length, 98);
  });

  test(`Digital SAT Practice Test #${testNum} — Question Integrity & Structure`, () => {
    const allQuestions = ALL_QUESTIONS_BY_TEST[testNum];
    const ids = new Set();
    for (const q of allQuestions) {
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
        const val = parseFloat(q.correctAnswer);
        assert.ok(!isNaN(val), `SPR answer ${q.correctAnswer} in ${q.id} must be numeric`);
      }
    }
  });

  test(`Digital SAT Practice Test #${testNum} — Scoring Algorithm`, () => {
    const allQuestions = ALL_QUESTIONS_BY_TEST[testNum];
    const perfectAnswers = {};
    for (const q of allQuestions) {
      perfectAnswers[q.id] = q.correctAnswer;
    }
    const perfectResult = calculateFullMockScores(testNum, perfectAnswers);
    assert.equal(perfectResult.totalCorrect, 98);
    assert.equal(perfectResult.rwScore, 800);
    assert.equal(perfectResult.mathScore, 800);
    assert.equal(perfectResult.totalScore, 1600);
    assert.equal(perfectResult.domainBreakdown.length, 8);

    const zeroResult = calculateFullMockScores(testNum, {});
    assert.equal(zeroResult.totalCorrect, 0);
    assert.equal(zeroResult.rwScore, 200);
    assert.equal(zeroResult.mathScore, 200);
    assert.equal(zeroResult.totalScore, 400);
  });
}

test('Digital SAT Practice Tests — Session Manager Multi-Test Support', () => {
  for (const testNum of [1, 2, 3]) {
    const session = createFullMockSession(testNum);
    assert.equal(session.testId, `practice-test-${testNum}`);
    assert.equal(session.testNumber, testNum);
    assert.equal(session.currentModuleIndex, 0);
    assert.equal(session.phase, 'test');
    assert.equal(session.currentQuestionIndex, 0);
    assert.ok(session.moduleDeadline > Date.now());

    const rw1 = getModuleConfigByIndex(testNum, 0);
    assert.equal(rw1.questions.length, 27);
    const math2 = getModuleConfigByIndex(testNum, 3);
    assert.equal(math2.questions.length, 22);
  }
});
