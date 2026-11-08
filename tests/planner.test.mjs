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

const { generatePlan, addDays, getSkillName, formatTaskTitle } = await moduleFrom('src/lib/planner.ts');

test('addDays safely handles day transitions in UTC', () => {
  assert.equal(addDays('2026-11-06', 0), '2026-11-06');
  assert.equal(addDays('2026-11-06', 1), '2026-11-07');
  assert.equal(addDays('2026-11-06', 25), '2026-12-01');
});

test('generatePlan creates tasks for the next 14 days by default', () => {
  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes: 60,
  });

  const uniqueDates = [...new Set(plan.map((t) => t.plan_date))];
  assert.equal(uniqueDates.length, 14);
  assert.equal(uniqueDates[0], '2026-11-06');
  assert.equal(uniqueDates[13], '2026-11-19');
});

test('generatePlan enforces max dailyMinutes on every day', () => {
  const dailyMinutes = 45;
  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes,
    weakSkills: ['rw-crf-3', 'math-alg-1'],
  });

  // Group by date
  const minutesByDate = {};
  for (const t of plan) {
    minutesByDate[t.plan_date] = (minutesByDate[t.plan_date] || 0) + t.target_minutes;
  }

  for (const [date, total] of Object.entries(minutesByDate)) {
    assert.ok(
      total <= dailyMinutes,
      `Day ${date} total minutes ${total} exceeded daily target ${dailyMinutes}`
    );
  }
});

test('generatePlan schedules exactly one rest day per 7-day cycle', () => {
  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes: 60,
  });

  const restTasks = plan.filter((t) => t.task_type === 'rest');
  assert.equal(restTasks.length, 2);
  assert.equal(restTasks[0].plan_date, '2026-11-12'); // Day 6
  assert.equal(restTasks[1].plan_date, '2026-11-19'); // Day 13
  assert.equal(restTasks[0].target_minutes, 0);
  assert.equal(restTasks[1].target_minutes, 0);
});

test('generatePlan places a full diagnostic at the start of each week', () => {
  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes: 60,
  });

  const day0Mocks = plan.filter((t) => t.plan_date === '2026-11-06' && t.task_type === 'mock');
  const day7Mocks = plan.filter((t) => t.plan_date === '2026-11-13' && t.task_type === 'mock');

  assert.equal(day0Mocks.length, 1);
  assert.equal(day7Mocks.length, 1);
  assert.ok(day0Mocks[0].target_minutes > 0);
  assert.ok(day7Mocks[0].target_minutes > 0);
});

test('generatePlan schedules error bank review twice per week', () => {
  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes: 60,
  });

  const week1Reviews = plan.filter((t) => {
    return t.task_type === 'review' && t.plan_date < '2026-11-13';
  });
  const week2Reviews = plan.filter((t) => {
    return t.task_type === 'review' && t.plan_date >= '2026-11-13';
  });

  assert.equal(week1Reviews.length, 2);
  assert.equal(week2Reviews.length, 2);
  assert.equal(week1Reviews[0].title, 'Review error bank');
});

test('generatePlan ensures weakest skills get the most practice sessions', () => {
  const weakSkills = [
    { topicId: 'rw-crf-3', accuracy: 40 }, // Weakest
    { topicId: 'math-alg-1', accuracy: 55 },
    { topicId: 'rw-inf-1', accuracy: 65 },
  ];

  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes: 60,
    weakSkills,
  });

  const practiceTasks = plan.filter((t) => t.task_type === 'practice');
  const counts = {};
  for (const t of practiceTasks) {
    if (t.topic_id) {
      counts[t.topic_id] = (counts[t.topic_id] || 0) + 1;
    }
  }

  assert.ok(counts['rw-crf-3'] > counts['math-alg-1']);
  assert.ok(counts['math-alg-1'] >= counts['rw-inf-1']);
});

test('generatePlan never schedules after the exam date', () => {
  const plan = generatePlan({
    today: '2026-11-06',
    examDate: '2026-11-09', // 4 days away
    dailyMinutes: 60,
  });

  const allDates = plan.map((t) => t.plan_date);
  for (const d of allDates) {
    assert.ok(d <= '2026-11-09', `Task date ${d} is after exam date 2026-11-09`);
  }
  assert.equal(allDates.includes('2026-11-10'), false);
  assert.equal(allDates.includes('2026-11-15'), false);
});

test('generatePlan never schedules the same skill twice on the same day', () => {
  const plan = generatePlan({
    today: '2026-11-06',
    dailyMinutes: 90, // multiple practice tasks per day
    weakSkills: ['m-dat-1', 'm-alg-1'],
  });

  const tasksByDate = {};
  for (const t of plan) {
    if (!tasksByDate[t.plan_date]) tasksByDate[t.plan_date] = [];
    tasksByDate[t.plan_date].push(t);
  }

  for (const [date, dayTasks] of Object.entries(tasksByDate)) {
    const practiceTopics = dayTasks
      .filter((t) => t.task_type === 'practice' && t.topic_id)
      .map((t) => t.topic_id);
    const unique = new Set(practiceTopics);
    assert.equal(
      practiceTopics.length,
      unique.size,
      `Day ${date} has duplicate practice topics: ${practiceTopics.join(', ')}`
    );
  }
});

test('getSkillName and formatTaskTitle resolve m-dat-1 and never expose raw ids', () => {
  const name1 = getSkillName('m-dat-1');
  assert.ok(name1.includes('Ratios') || name1.includes('proportional'));
  assert.equal(name1.includes('m-dat-1'), false);

  const title1 = formatTaskTitle('Practice: m-dat-1', 'm-dat-1');
  assert.equal(title1.includes('m-dat-1'), false);
  assert.ok(title1.startsWith('Practice: '));

  const name2 = getSkillName('m-alg-1');
  assert.equal(name2.toLowerCase(), 'linear equations in one variable');
});
