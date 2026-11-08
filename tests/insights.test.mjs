import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

async function moduleFrom(entry) {
  const { outputFiles } = await build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
  });
  return import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));
}

const { buildAnalyticsFacts, buildPlanFacts } = await moduleFrom('src/lib/factsBuilder.ts');

test('buildAnalyticsFacts produces only allowed fields and strictly strips PII', () => {
  const rawInput = {
    totalAnswers: 42,
    mathAccuracy: 85,
    englishAccuracy: 70,
    mathDelta: 30,
    englishDelta: -10,
    streak: 5,
    daysToExam: 24,
    currentScore: 1250,
    targetScore: 1450,
    weakestSkills: [
      { name: 'Linear equations in one variable', count: 9 },
      { name: 'Cross-text connections', count: 6 },
      { name: 'Transitions', count: 4 },
      { name: 'Fourth skill to truncate', count: 2 },
    ],
    // Forbidden PII fields that must not be in facts
    userName: 'John Doe',
    email: 'john@example.com',
    userId: 'user-1234',
    rawAnswers: ['A', 'B', 'C'],
  };

  const facts = buildAnalyticsFacts(rawInput);

  // Allowed fields check
  assert.equal(facts.totalAnswers, 42);
  assert.equal(facts.mathAccuracy, 85);
  assert.equal(facts.englishAccuracy, 70);
  assert.equal(facts.streak, 5);
  assert.equal(facts.daysToExam, 24);
  assert.equal(facts.currentScore, 1250);
  assert.equal(facts.targetScore, 1450);

  // Weakest skills capped at 3
  assert.equal(facts.weakestSkills.length, 3);
  assert.equal(facts.weakestSkills[0].name, 'Linear equations in one variable');

  // PII must be absent
  assert.equal(facts.userName, undefined);
  assert.equal(facts.email, undefined);
  assert.equal(facts.userId, undefined);
  assert.equal(facts.rawAnswers, undefined);

  // Size limit check
  const jsonStr = JSON.stringify(facts);
  assert.ok(jsonStr.length < 3000, `Facts size ${jsonStr.length} exceeds 3000 chars`);
});

test('buildPlanFacts produces allowed plan structure and respects size limit', () => {
  const planInput = {
    dailyMinutes: 60,
    weeklyTargetMinutes: 360,
    daysToExam: 18,
    restDays: 1,
    plannedTasksCount: 12,
    focusSkills: [
      'Linear equations in one variable',
      'Nonlinear functions',
      'Cross-text connections',
      'Superfluous extra skill',
    ],
    hasDiagnosticWeekly: true,
    // Forbidden fields
    studentNotes: 'private student notes',
    examCenter: 'Tashkent Test Center',
  };

  const facts = buildPlanFacts(planInput);

  assert.equal(facts.dailyMinutes, 60);
  assert.equal(facts.weeklyTargetMinutes, 360);
  assert.equal(facts.daysToExam, 18);
  assert.equal(facts.restDays, 1);
  assert.equal(facts.plannedTasksCount, 12);
  assert.equal(facts.hasDiagnosticWeekly, true);

  // Focus skills capped at 3
  assert.equal(facts.focusSkills.length, 3);
  assert.equal(facts.focusSkills[0], 'Linear equations in one variable');

  // Forbidden fields absent
  assert.equal(facts.studentNotes, undefined);
  assert.equal(facts.examCenter, undefined);

  // Size limit
  const jsonStr = JSON.stringify(facts);
  assert.ok(jsonStr.length < 3000, `Facts size ${jsonStr.length} exceeds 3000 chars`);
});
