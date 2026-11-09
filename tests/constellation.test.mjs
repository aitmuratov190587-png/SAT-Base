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
  getStarState,
  getDeterministicStarPosition,
  ALL_CONSTELLATION_STARS,
  CONSTELLATION_DOMAINS,
  aggregateConstellationStats,
  findWeakestDomain,
} = await moduleFrom('src/lib/constellation.ts');

test('Constellation Star States: verifies exact rating thresholds', () => {
  // 1. Unavailable skill => coming_soon
  assert.equal(
    getStarState({ isAvailable: false, totalAnswers: 0, accuracy: 0 }),
    'coming_soon'
  );
  assert.equal(
    getStarState({ isAvailable: false, totalAnswers: 20, accuracy: 85 }),
    'coming_soon'
  );

  // 2. Minimum 5 answers threshold for a rating: < 5 answers => not_started
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 0, accuracy: 0 }),
    'not_started'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 1, accuracy: 100 }),
    'not_started',
    '1 answer with 100% accuracy must still be not_started (min 5 required)'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 4, accuracy: 75 }),
    'not_started',
    '4 answers must still be not_started'
  );

  // 3. Under 70% => needs_work (berry)
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 5, accuracy: 68, trendDelta: 0 }),
    'needs_work'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 25, accuracy: 50, trendDelta: 4 }),
    'needs_work'
  );

  // 4. 70-79% => getting_there (mustard)
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 10, accuracy: 70, trendDelta: 0 }),
    'getting_there'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 15, accuracy: 79, trendDelta: 0 }),
    'getting_there'
  );

  // 5. Improving rule: under 70%, but improved by 10+ points over last 20 answers => getting_there (mustard)
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 20, accuracy: 65, trendDelta: 12 }),
    'getting_there',
    'Improving by 10+ points must boost under-70% to mustard (getting_there)'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 20, accuracy: 62, trendDelta: 10 }),
    'getting_there',
    'Exact 10 point improvement must trigger mustard'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 20, accuracy: 65, trendDelta: 9 }),
    'needs_work',
    'Improvement of 9 points is below threshold'
  );

  // 6. 80%+ => strong (moss)
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 5, accuracy: 80, trendDelta: 0 }),
    'strong'
  );
  assert.equal(
    getStarState({ isAvailable: true, totalAnswers: 30, accuracy: 96, trendDelta: -5 }),
    'strong'
  );
});

test('Deterministic Coordinates: same skill ID yields identical coordinates', () => {
  assert.equal(ALL_CONSTELLATION_STARS.length, 29);
  assert.equal(CONSTELLATION_DOMAINS.length, 8);

  // Call multiple times on sampled skills
  const testIds = ['m-alg-1', 'm-adv-2', 'm-dat-4', 'rw-crf-1', 'rw-inf-2', 'm-geo-3'];
  for (const id of testIds) {
    const pos1 = getDeterministicStarPosition(id);
    const pos2 = getDeterministicStarPosition(id);
    assert.deepEqual(pos1, pos2);
    assert.equal(typeof pos1.x, 'number');
    assert.equal(typeof pos1.y, 'number');
    assert.ok(pos1.x >= 0 && pos1.x <= 1000, `X coordinate out of SVG bounds: ${pos1.x}`);
    assert.ok(pos1.y >= 0 && pos1.y <= 560, `Y coordinate out of SVG bounds: ${pos1.y}`);
  }

  // Ensure every star in all domains has non-overlapping coordinates within its domain
  for (const domain of CONSTELLATION_DOMAINS) {
    const stars = domain.stars;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        assert.ok(
          dist >= 30,
          `Stars ${stars[i].id} and ${stars[j].id} in ${domain.name} are too close (distance: ${dist}px)`
        );
      }
    }
  }
});

test('aggregateConstellationStats correctly aggregates events and aliases', () => {
  const events = [
    // 5 answers for m-alg-1 (all correct = 100% -> strong)
    { topic_id: 'm-alg-1', question_id: 'q1', is_correct: true, created_at: '2026-11-01T10:00:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'm-alg-1', question_id: 'q2', is_correct: true, created_at: '2026-11-01T10:01:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'm-alg-1', question_id: 'q3', is_correct: true, created_at: '2026-11-01T10:02:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'm-alg-1', question_id: 'q4', is_correct: true, created_at: '2026-11-01T10:03:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'math-alg-1', question_id: 'q5', is_correct: true, created_at: '2026-11-01T10:04:00Z', time_seconds: 30, source: 'practice' }, // alias!

    // 5 answers for m-adv-1 (2 correct, 3 wrong = 40% -> needs_work)
    { topic_id: 'm-adv-1', question_id: 'q6', is_correct: true, created_at: '2026-11-02T10:00:00Z', time_seconds: 40, source: 'practice' },
    { topic_id: 'm-adv-1', question_id: 'q7', is_correct: true, created_at: '2026-11-02T10:01:00Z', time_seconds: 40, source: 'practice' },
    { topic_id: 'm-adv-1', question_id: 'q8', is_correct: false, created_at: '2026-11-02T10:02:00Z', time_seconds: 40, source: 'practice' },
    { topic_id: 'm-adv-1', question_id: 'q9', is_correct: false, created_at: '2026-11-02T10:03:00Z', time_seconds: 40, source: 'practice' },
    { topic_id: 'm-adv-1', question_id: 'q10', is_correct: false, created_at: '2026-11-02T10:04:00Z', time_seconds: 40, source: 'practice' },
  ];

  const stats = aggregateConstellationStats(events);
  assert.equal(stats['m-alg-1'].total, 5);
  assert.equal(stats['m-alg-1'].correct, 5);
  assert.equal(stats['m-alg-1'].accuracy, 100);
  assert.equal(stats['m-alg-1'].state, 'strong');

  assert.equal(stats['m-adv-1'].total, 5);
  assert.equal(stats['m-adv-1'].correct, 2);
  assert.equal(stats['m-adv-1'].accuracy, 40);
  assert.equal(stats['m-adv-1'].state, 'needs_work');

  // Unattempted available star => not_started
  assert.equal(stats['m-alg-2'].total, 0);
  assert.equal(stats['m-alg-2'].accuracy, null);
  assert.equal(stats['m-alg-2'].state, 'not_started');

  // Unattempted unavailable star => coming_soon
  assert.equal(stats['m-geo-1'].state, 'coming_soon');

  // Weakest domain must be Advanced Math (40% vs Algebra 100%)
  const weakest = findWeakestDomain(stats);
  assert.equal(weakest.id, 'advanced-math');
});
