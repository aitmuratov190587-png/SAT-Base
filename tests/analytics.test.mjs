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

const {
  accuracyBySkill,
  avgTimeBySkill,
  weakestSkills,
  scoreHistory,
  studyMinutesByDay,
  streak,
  trend,
} = await moduleFrom('src/lib/analytics.ts');

test('accuracyBySkill computes percentage accuracy correctly', () => {
  const events = [
    { topic_id: 'rw-crf-1', question_id: 'q1', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-11-01T10:00:00Z' },
    { topic_id: 'rw-crf-1', question_id: 'q2', is_correct: false, time_seconds: 60, source: 'practice', created_at: '2026-11-01T10:01:00Z' },
    { topic_id: 'rw-crf-1', question_id: 'q3', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-11-01T10:02:00Z' },
    { topic_id: 'rw-crf-1', question_id: 'q4', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-11-01T10:03:00Z' },
    { topic_id: 'math-alg-1', question_id: 'm1', is_correct: false, time_seconds: 90, source: 'mock', created_at: '2026-11-01T10:04:00Z' },
  ];

  const res = accuracyBySkill(events);
  assert.equal(res['rw-crf-1'].total, 4);
  assert.equal(res['rw-crf-1'].correct, 3);
  assert.equal(res['rw-crf-1'].accuracy, 75);
  assert.equal(res['rw-crf-1'].skillName, 'Cross-Text Connections');

  assert.equal(res['math-alg-1'].total, 1);
  assert.equal(res['math-alg-1'].correct, 0);
  assert.equal(res['math-alg-1'].accuracy, 0);
  assert.equal(res['math-alg-1'].section, 'math');
});

test('avgTimeBySkill calculates mean duration per topic', () => {
  const events = [
    { topic_id: 'rw-crf-1', question_id: 'q1', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-11-01T10:00:00Z' },
    { topic_id: 'rw-crf-1', question_id: 'q2', is_correct: false, time_seconds: 80, source: 'practice', created_at: '2026-11-01T10:01:00Z' },
  ];

  const res = avgTimeBySkill(events);
  assert.equal(res['rw-crf-1'], 60);
});

test('weakestSkills filters by minimum answers and sorts ascending', () => {
  const events = [
    // 5 answers for skill A -> 20%
    ...Array(4).fill(null).map((_, i) => ({ topic_id: 'rw-crf-1', question_id: `a${i}`, is_correct: false, time_seconds: 30, source: 'practice', created_at: '2026-11-01T10:00:00Z' })),
    { topic_id: 'rw-crf-1', question_id: 'a5', is_correct: true, time_seconds: 30, source: 'practice', created_at: '2026-11-01T10:00:00Z' },
    // 5 answers for skill B -> 60%
    ...Array(3).fill(null).map((_, i) => ({ topic_id: 'math-alg-1', question_id: `b${i}`, is_correct: true, time_seconds: 30, source: 'practice', created_at: '2026-11-01T10:00:00Z' })),
    ...Array(2).fill(null).map((_, i) => ({ topic_id: 'math-alg-1', question_id: `b_f${i}`, is_correct: false, time_seconds: 30, source: 'practice', created_at: '2026-11-01T10:00:00Z' })),
    // 2 answers for skill C -> 0% (less than minAnswered=5, should be excluded)
    { topic_id: 'rw-inf-1', question_id: 'c1', is_correct: false, time_seconds: 30, source: 'practice', created_at: '2026-11-01T10:00:00Z' },
    { topic_id: 'rw-inf-1', question_id: 'c2', is_correct: false, time_seconds: 30, source: 'practice', created_at: '2026-11-01T10:00:00Z' },
  ];

  const weakest = weakestSkills(events, 5, 5);
  assert.equal(weakest.length, 2);
  assert.equal(weakest[0].topicId, 'rw-crf-1');
  assert.equal(weakest[0].accuracy, 20);
  assert.equal(weakest[1].topicId, 'math-alg-1');
  assert.equal(weakest[1].accuracy, 60);
});

test('scoreHistory normalizes and orders attempts chronologically', () => {
  const attempts = [
    { attempt_id: 'att-2', math: 600, english: 550, answered: 20, correct: 15, created_at: '2026-11-05T12:00:00Z' },
    { attempt_id: 'att-1', math: 500, english: 500, answered: 20, correct: 10, created_at: '2026-10-25T12:00:00Z' },
  ];

  const hist = scoreHistory(attempts);
  assert.equal(hist.length, 2);
  assert.equal(hist[0].total, 1000);
  assert.equal(hist[1].total, 1150);
});

test('scoreHistory numbers attempts sharing the same day', () => {
  const attempts = [
    { attempt_id: 'att-1', math: 500, english: 500, answered: 20, correct: 10, created_at: '2026-11-06T09:00:00Z' },
    { attempt_id: 'att-2', math: 600, english: 550, answered: 20, correct: 15, created_at: '2026-11-06T15:00:00Z' },
  ];

  const hist = scoreHistory(attempts);
  assert.equal(hist.length, 2);
  assert.equal(hist[0].displayDate, 'Nov 6 #1');
  assert.equal(hist[1].displayDate, 'Nov 6 #2');
});

test('studyMinutesByDay maps seconds to minutes per calendar date', () => {
  const sessions = [
    { study_day: '2026-11-06', duration_seconds: 1800 },
    { study_day: '2026-11-06', duration_seconds: 600 },
    { study_day: '2026-11-05', duration_seconds: 1200 },
  ];

  const map = studyMinutesByDay(sessions, 7, '2026-11-06');
  assert.equal(map['2026-11-06'], 40); // (1800 + 600) / 60
  assert.equal(map['2026-11-05'], 20); // 1200 / 60
  assert.equal(map['2026-11-04'], 0);
});

test('streak accurately computes unbroken days up to anchor date', () => {
  assert.equal(streak(['2026-11-06', '2026-11-05', '2026-11-04'], '2026-11-06'), 3);
  assert.equal(streak(['2026-11-05', '2026-11-04'], '2026-11-06'), 2); // yesterday counts as current
  assert.equal(streak(['2026-11-04'], '2026-11-06'), 0); // broken (2 days ago)
  assert.equal(streak([], '2026-11-06'), 0);
});

test('trend compares last 20 vs previous 20 answers', () => {
  const events = [];
  // previous 20: 10 correct = 50%
  for (let i = 0; i < 20; i++) {
    events.push({ topic_id: 'rw-crf-1', question_id: `prev_${i}`, is_correct: i < 10, time_seconds: 30, source: 'practice', created_at: `2026-10-${String(i + 1).padStart(2, '0')}T10:00:00Z` });
  }
  // recent 20: 16 correct = 80%
  for (let i = 0; i < 20; i++) {
    events.push({ topic_id: 'rw-crf-1', question_id: `rec_${i}`, is_correct: i < 16, time_seconds: 30, source: 'practice', created_at: `2026-11-${String(i + 1).padStart(2, '0')}T10:00:00Z` });
  }

  const tr = trend(events, 'rw-crf-1');
  assert.equal(tr.recentAccuracy, 80);
  assert.equal(tr.previousAccuracy, 50);
  assert.equal(tr.delta, 30);
  assert.equal(tr.direction, 'up');
});
