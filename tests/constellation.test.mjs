import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

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

const cacheDir = path.resolve('node_modules/.cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

const combinedBundlePath = path.join(cacheDir, 'skill_constellation_test_bundle.mjs');
await build({
  stdin: {
    contents: `
      export { default, CONSTELLATION_CELL_LAYOUTS, CELL_VIEWBOX, boxesIntersect, getDomainCellBoundingBoxes } from './src/components/SkillConstellation';
      export { AuthProvider } from './src/contexts/AuthContext';
    `,
    resolveDir: process.cwd(),
    loader: 'tsx',
  },
  bundle: true,
  outfile: combinedBundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
  define: {
    'import.meta.env.VITE_SUPABASE_URL': '"https://mock.supabase.co"',
    'import.meta.env.VITE_SUPABASE_ANON_KEY': '"mock-key"',
  },
});

const {
  getStarState,
  getDeterministicStarPosition,
  ALL_CONSTELLATION_STARS,
  CONSTELLATION_DOMAINS,
  aggregateConstellationStats,
  findWeakestDomain,
} = await moduleFrom('src/lib/constellation.ts');

const { DEMO_STAR_EVENTS } = await moduleFrom('src/components/skillConstellationDemo.ts');

const constellationMod = await import(pathToFileURL(combinedBundlePath).href);
const SkillConstellation = constellationMod.default;
const {
  CONSTELLATION_CELL_LAYOUTS,
  CELL_VIEWBOX,
  boxesIntersect,
  getDomainCellBoundingBoxes,
  AuthProvider,
} = constellationMod;

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
    { topic_id: 'm-alg-1', question_id: 'q1', is_correct: true, created_at: '2026-11-01T10:00:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'm-alg-1', question_id: 'q2', is_correct: true, created_at: '2026-11-01T10:01:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'm-alg-1', question_id: 'q3', is_correct: true, created_at: '2026-11-01T10:02:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'm-alg-1', question_id: 'q4', is_correct: true, created_at: '2026-11-01T10:03:00Z', time_seconds: 30, source: 'practice' },
    { topic_id: 'math-alg-1', question_id: 'q5', is_correct: true, created_at: '2026-11-01T10:04:00Z', time_seconds: 30, source: 'practice' },

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

  assert.equal(stats['m-alg-2'].total, 0);
  assert.equal(stats['m-alg-2'].accuracy, null);
  assert.equal(stats['m-alg-2'].state, 'not_started');

  assert.equal(stats['m-geo-1'].state, 'coming_soon');

  const weakest = findWeakestDomain(stats);
  assert.equal(weakest.id, 'advanced-math');
});

test('Cosmo & Star Bounding Box Collision Guard across all 8 domains (desktop & mobile)', () => {
  for (const width of [220, 260, 310]) {
    for (const domain of CONSTELLATION_DOMAINS) {
      const { titleBox, cosmoBox, starBoxes, cellBounds } = getDomainCellBoundingBoxes(domain.id, width);

      // 1. Cosmo's reserved corner box NEVER overlaps domain title box
      assert.equal(
        boxesIntersect(cosmoBox, titleBox),
        false,
        `Cosmo overlaps title in ${domain.id} at cellWidth=${width}`
      );

      // 2. Cosmo's reserved corner stays strictly inside cell boundaries
      assert.ok(cosmoBox.x >= 0 && cosmoBox.x + cosmoBox.width <= cellBounds.width);
      assert.ok(cosmoBox.y >= 0 && cosmoBox.y + cosmoBox.height <= cellBounds.height);

      // 3. Every star + ring box has zero overlap with Cosmo, zero overlap with title, and fits inside cell
      for (let i = 0; i < starBoxes.length; i++) {
        const a = starBoxes[i];
        assert.equal(
          boxesIntersect(a.box, cosmoBox),
          false,
          `Star ${a.id} collides with Cosmo corner in ${domain.id}`
        );
        assert.equal(
          boxesIntersect(a.box, titleBox),
          false,
          `Star ${a.id} collides with title box in ${domain.id}`
        );
        assert.ok(
          a.box.x >= 0 && a.box.x + a.box.width <= cellBounds.width &&
          a.box.y >= 0 && a.box.y + a.box.height <= cellBounds.height,
          `Star ${a.id} overflows cell boundary in ${domain.id}`
        );

        // 4. No two stars in the same domain intersect each other
        for (let j = i + 1; j < starBoxes.length; j++) {
          const b = starBoxes[j];
          assert.equal(
            boxesIntersect(a.box, b.box),
            false,
            `Stars ${a.id} and ${b.id} overlap in ${domain.id} at cellWidth=${width}`
          );
        }
      }

      // 5. SVG coordinates stay well-padded inside CELL_VIEWBOX
      const layout = CONSTELLATION_CELL_LAYOUTS[domain.id];
      assert.ok(layout, `Missing layout for domain ${domain.id}`);
      assert.equal(layout.stars.length, domain.stars.length);
      for (const s of layout.stars) {
        assert.ok(s.x >= 22 && s.x <= CELL_VIEWBOX.width - 22, `${s.id} x=${s.x} too close to SVG edge`);
        assert.ok(s.y >= 20 && s.y <= CELL_VIEWBOX.height - 20, `${s.id} y=${s.y} too close to SVG edge`);
      }

      // 6. Domains with only 2 skills must include a non-linear arcGuide (never a straight 2-point line)
      if (domain.stars.length <= 2) {
        assert.ok(layout.arcGuide && layout.arcGuide.paths.length >= 2, `${domain.id} must have multi-leg curved arcGuide`);
      }
    }
  }
});

test('Demo stars fixture covers all 6 states and preserves Dashboard copy', () => {
  const stats = aggregateConstellationStats(DEMO_STAR_EVENTS);
  const states = new Set(Object.values(stats).map((s) => s.state));

  assert.ok(states.has('strong'), 'Fixture must include strong skills');
  assert.ok(states.has('getting_there'), 'Fixture must include getting_there skills');
  assert.ok(states.has('needs_work'), 'Fixture must include needs_work skills');
  assert.ok(states.has('not_started'), 'Fixture must include not_started skills');
  assert.ok(states.has('coming_soon'), 'Fixture must include coming_soon skills');

  // Improving skill m-alg-4: overall < 70% yet trendDelta >= 10 -> boosted to getting_there
  const improvingStat = stats['m-alg-4'];
  assert.ok((improvingStat.accuracy ?? 100) < 70, 'm-alg-4 should have <70% overall accuracy');
  assert.ok(improvingStat.trendDelta >= 10, 'm-alg-4 should have >=10 recent trend improvement');
  assert.equal(improvingStat.state, 'getting_there', 'Improving skill must resolve to getting_there');

  const weakest = findWeakestDomain(stats);
  assert.equal(weakest.id, 'advanced-math', 'Advanced math should be weakest domain in fixture');

  // Render full markup with SSR to verify copy, 4x2 domain cells, accessible table & stars
  const html = renderToStaticMarkup(
    React.createElement(
      AuthProvider,
      null,
      React.createElement(
        MemoryRouter,
        null,
        React.createElement(SkillConstellation, { events: DEMO_STAR_EVENTS, demoData: true })
      )
    )
  );

  assert.ok(html.includes('6 of 29 skills are shining'), 'Headline must preserve "{n} of {total} skills are shining"');
  assert.ok(html.includes('Each star is a skill. Answer questions to light them up.'), 'Subtitle copy must match requirement');
  assert.ok(!html.includes('Your celestial mastery map across 8 Digital SAT domains.'), 'Old subtitle must be replaced');
  assert.ok(html.includes('lg:grid-cols-4'), 'Desktop layout must use 4-column grid');
  assert.ok(html.includes('max-w-[1200px]'), 'Inner map must expand up to 1200px');
  assert.ok(html.includes('Skill Constellation Status'), 'Hidden accessible table must stay rendered');
});

test('Constellation Contrast Verification: Light and Dark AA compliance', () => {
  function hexToRgb(h) {
    const n = parseInt(h.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(c1, c2, w1) {
    return [
      Math.round(c1[0] * w1 + c2[0] * (1 - w1)),
      Math.round(c1[1] * w1 + c2[1] * (1 - w1)),
      Math.round(c1[2] * w1 + c2[2] * (1 - w1)),
    ];
  }
  function lum([r, g, b]) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }
  function ratio(c1, c2) {
    const l1 = lum(c1);
    const l2 = lum(c2);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }

  const themes = {
    light: { bg: '#FFFFFF', ink: '#181511', berry: '#9E2A2B', mustard: '#D48B17', moss: '#2D6A4F' },
    dark: { bg: '#181B22', ink: '#F4F1EA', berry: '#E06D6E', mustard: '#F3B552', moss: '#52B788' },
  };

  for (const [themeName, t] of Object.entries(themes)) {
    const bg = hexToRgb(t.bg);
    const ink = hexToRgb(t.ink);
    const berry = hexToRgb(t.berry);
    const mustardFill = mix(hexToRgb(t.mustard), ink, 0.9);
    const mustardStroke = mix(hexToRgb(t.mustard), ink, 0.76);
    const moss = hexToRgb(t.moss);
    const notStarted = mix(ink, bg, 0.55);
    const litLine = mix(ink, bg, 0.55);

    assert.ok(ratio(ink, bg) >= 4.5, `${themeName} domain title fails AA text contrast`);
    assert.ok(ratio(notStarted, bg) >= 3.0, `${themeName} not_started star fails AA graphic contrast`);
    assert.ok(ratio(berry, bg) >= 3.0, `${themeName} needs_work (berry) fails AA graphic contrast`);
    assert.ok(ratio(mustardFill, bg) >= 3.0, `${themeName} getting_there fill fails AA graphic contrast`);
    assert.ok(ratio(mustardStroke, bg) >= 3.0, `${themeName} getting_there stroke fails AA graphic contrast`);
    assert.ok(ratio(moss, bg) >= 3.0, `${themeName} strong (moss) fails AA graphic contrast`);
    assert.ok(ratio(litLine, bg) >= 3.0, `${themeName} lit connecting line fails AA graphic contrast`);
  }
});
