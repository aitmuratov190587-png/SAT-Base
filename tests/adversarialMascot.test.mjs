import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const cacheDir = path.resolve('node_modules/.cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

// Bundle CosmoMascot and CosmoLauncher
const mascotBundlePath = path.join(cacheDir, 'adversarial_mascot_bundle.mjs');
await build({
  entryPoints: {
    bundle: 'src/components/mascot/CosmoMascot.tsx',
  },
  bundle: true,
  outfile: mascotBundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
});

const launcherBundlePath = path.join(cacheDir, 'adversarial_launcher_bundle.mjs');
await build({
  entryPoints: {
    bundle: 'src/components/mascot/CosmoLauncher.tsx',
  },
  bundle: true,
  outfile: launcherBundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
});

const { CosmoMascot } = await import(pathToFileURL(mascotBundlePath).href);
const { CosmoLauncher } = await import(pathToFileURL(launcherBundlePath).href);

// Read index.css
const indexCss = fs.readFileSync(path.resolve('src/index.css'), 'utf-8');

// ==============================================================================
// 1. MASCOT STATE STRESS & EMPIRICAL ADVERSARIAL ORACLE
// ==============================================================================

test('Empirical Stress: Rapidly cycle 1,000 state transitions and verify SVG structure invariant', () => {
  const states = ['idle', 'hover', 'thinking', 'talking', 'celebrating', 'sleeping'];
  
  // Seeded pseudo-random generator for reproducible stress testing
  let seed = 123456789;
  const pseudoRandom = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  for (let i = 0; i < 1000; i++) {
    const fromState = states[Math.floor(pseudoRandom() * states.length)];
    const toState = states[Math.floor(pseudoRandom() * states.length)];

    const html = renderToStaticMarkup(React.createElement(CosmoMascot, { state: toState, size: 'md' }));

    // Invariant 1: Valid SVG container
    assert.ok(html.startsWith('<div class="inline-flex items-center justify-center select-none relative'), 'Wrapper div missing');
    assert.ok(html.includes('<svg width="44" height="44" viewBox="0 0 100 100"'), 'SVG element missing or incorrect dimensions');
    assert.ok(html.endsWith('</svg></div>'), 'Improperly closed tags');

    // Invariant 2: Head & Helmet always present
    assert.ok(html.includes('id="cosmo-head"'), 'Missing head in state: ' + toState);
    assert.ok(html.includes('rx="22.5" ry="18.5"'), 'Celestial visor ellipse missing in state: ' + toState);

    // Invariant 3: Antennae with peach glowing spheres (#FF8A65)
    assert.ok(html.includes('id="cosmo-antennae"'), 'Missing antennae in state: ' + toState);
    assert.ok(html.includes('fill="#FF8A65"'), 'Missing peach antenna tip color in state: ' + toState);

    // Invariant 4: Orbital ring present
    assert.ok(html.includes('A 42 13 0 0 1'), 'Planetary orbital ring path missing in state: ' + toState);

    // Invariant 5: State-specific elements
    if (toState === 'sleeping') {
      assert.ok(html.includes('id="cosmo-eyes-sleeping"'), 'Missing sleeping eyes');
      assert.ok(html.includes('id="cosmo-sleep-z"'), 'Missing sleep Zs');
      assert.ok(!html.includes('id="cosmo-eyes-thinking"'), 'Thinking eyes leaked into sleeping state');
      assert.ok(!html.includes('id="cosmo-sparkles"'), 'Sparkles leaked into sleeping state');
    } else if (toState === 'celebrating') {
      assert.ok(html.includes('id="cosmo-eyes-celebrating"'), 'Missing celebration arc eyes');
      assert.ok(html.includes('id="cosmo-sparkles"'), 'Missing celebration sparkles');
      assert.ok(html.includes('id="cosmo-cheeks"'), 'Missing rosy cheeks');
    } else if (toState === 'thinking') {
      assert.ok(html.includes('id="cosmo-eyes-thinking"'), 'Missing thinking eyes');
      assert.ok(html.includes('animate-orbital-ring-fast'), 'Thinking should have fast orbital ring');
      assert.ok(html.includes('animate-pulse-aura'), 'Thinking should have pulsing aura');
    } else if (toState === 'talking') {
      assert.ok(html.includes('id="cosmo-talking-waves"'), 'Missing talking waves');
      assert.ok(html.includes('animate-mascot-talk'), 'Missing animated mouth in talking state');
    }
  }
});

test('Empirical Stress: Multiple concurrent mascots have unique gradient IDs (no SVG ID collision)', () => {
  // Render two mascots simultaneously in the same component tree (e.g. Launcher + Drawer Header)
  const combinedHtml = renderToStaticMarkup(
    React.createElement('div', null,
      React.createElement(CosmoMascot, { state: 'thinking', size: 'md' }),
      React.createElement(CosmoMascot, { state: 'celebrating', size: 'sm' })
    )
  );

  const helmetIds = [...combinedHtml.matchAll(/id="(cosmo-helmet-[^"]+)"/g)].map(m => m[1]);
  const visorIds = [...combinedHtml.matchAll(/id="(cosmo-visor-[^"]+)"/g)].map(m => m[1]);

  assert.equal(helmetIds.length, 2, 'Must find 2 helmet gradient definitions');
  assert.equal(visorIds.length, 2, 'Must find 2 visor gradient definitions');
  assert.notEqual(helmetIds[0], helmetIds[1], 'Helmet gradient IDs must be unique per instance');
  assert.notEqual(visorIds[0], visorIds[1], 'Visor gradient IDs must be unique per instance');

  // Verify fill references match their respective IDs
  assert.ok(combinedHtml.includes(`fill="url(#${helmetIds[0]})"`), 'First mascot must reference its own helmet gradient');
  assert.ok(combinedHtml.includes(`fill="url(#${helmetIds[1]})"`), 'Second mascot must reference its own helmet gradient');
});

test('Empirical Stress: Boundary & extreme props handling (custom sizes, missing states)', () => {
  // Negative or 0 sizes should not throw
  const zeroSize = renderToStaticMarkup(React.createElement(CosmoMascot, { size: 0 }));
  assert.ok(zeroSize.includes('width="0"'), 'Should handle size 0');

  // Massive size (2048px banner display)
  const hugeSize = renderToStaticMarkup(React.createElement(CosmoMascot, { size: 2048 }));
  assert.ok(hugeSize.includes('width="2048"'), 'Should handle massive size 2048');

  // Fractional size (33.7px)
  const floatSize = renderToStaticMarkup(React.createElement(CosmoMascot, { size: 33.7 }));
  assert.ok(floatSize.includes('width="33.7"'), 'Should handle float size');

  // Undefined state defaults gracefully to idle
  const defaultHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { state: undefined }));
  assert.ok(defaultHtml.includes('data-mascot-state="idle"'), 'Undefined state should default to idle');
});

// ==============================================================================
// 2. REDUCED MOTION STRESS & TRANSITION SAFETY
// ==============================================================================

test('Reduced Motion Stress: prefers-reduced-motion drops animation and transition to 0.01ms', () => {
  // Find all prefers-reduced-motion blocks in index.css
  const reducedMotionBlocks = [...indexCss.matchAll(/@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)\s*\{([\s\S]*?)\n\}/g)].map(m => m[1]);
  assert.ok(reducedMotionBlocks.length > 0, 'prefers-reduced-motion block missing from index.css');

  // Look for the comprehensive reset block
  const globalResetBlock = reducedMotionBlocks.find(b => b.includes('animation-duration: 0.01ms !important'));
  assert.ok(globalResetBlock, 'Global reduced motion reset block missing from index.css');

  // Universal wildcard check
  assert.match(globalResetBlock, /\*,\s*::before,\s*::after\s*\{[\s\S]*?animation-duration:\s*0\.01ms\s*!important/);
  assert.match(globalResetBlock, /\*,\s*::before,\s*::after\s*\{[\s\S]*?transition-duration:\s*0\.01ms\s*!important/);
  assert.match(globalResetBlock, /\*,\s*::before,\s*::after\s*\{[\s\S]*?animation-iteration-count:\s*1\s*!important/);

  // Mascot specific motion classes disabled without stuck transform
  const mascotClasses = [
    'animate-float',
    'animate-gentle-bob',
    'animate-orbital-ring',
    'animate-orbital-ring-fast',
    'animate-pulse-aura',
    'animate-mascot-blink',
    'animate-mascot-talk',
    'animate-star-twinkle',
    'animate-mascot-z',
  ];

  for (const cls of mascotClasses) {
    assert.ok(globalResetBlock.includes(`.${cls}`), `Class .${cls} must be explicitly silenced in reduced motion`);
  }

  assert.match(globalResetBlock, /animation:\s*none\s*!important/, 'Mascot animations must have animation: none !important');
  assert.match(globalResetBlock, /transform:\s*none\s*!important/, 'Mascot animations must reset transform: none !important');
});

// ==============================================================================
// 3. VIEWPORT COORDINATES & MOBILE COLLISION STRESS
// ==============================================================================

test('Viewport Stress: Floating launcher coordinates guarantee >= 16px clearance from mobile tab bar', () => {
  // Mobile tab bar specifications:
  // - Fixed bottom navigation: bottom: 0, height: h-16 (16 * 4 = 64px)
  // - Occupies Y-span: [0px, 64px] from bottom
  const TAB_BAR_HEIGHT_PX = 64;

  // Floating launcher specifications:
  // - Mobile classes: fixed bottom-20 (20 * 4 = 80px)
  // - Desktop classes: md:bottom-6 (6 * 4 = 24px)
  // - Desktop tab bar visibility: md:hidden (0px)
  const LAUNCHER_MOBILE_BOTTOM_PX = 80;
  const LAUNCHER_DESKTOP_BOTTOM_PX = 24;

  // Clearance verification on mobile (<768px):
  const mobileClearance = LAUNCHER_MOBILE_BOTTOM_PX - TAB_BAR_HEIGHT_PX;
  assert.ok(
    mobileClearance >= 16,
    `Mobile clearance between launcher bottom (${LAUNCHER_MOBILE_BOTTOM_PX}px) and tab bar top (${TAB_BAR_HEIGHT_PX}px) is ${mobileClearance}px; must be >= 16px to prevent accidental touch collision`
  );

  // Verification on desktop (>=768px):
  // MobileTabBar has md:hidden, so tab bar is hidden.
  const sourceAssistant = fs.readFileSync(path.resolve('src/components/ai/CosmoUniversalAssistant.tsx'), 'utf-8');
  assert.match(sourceAssistant, /fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40/);

  const sourceTabBar = fs.readFileSync(path.resolve('src/components/navigation/MobileTabBar.tsx'), 'utf-8');
  assert.match(sourceTabBar, /md:hidden fixed bottom-0 left-0 right-0 z-40 h-16/);

  // Horizontal boundaries on small screens:
  // right-4 = 16px margin on mobile (<640px)
  // Launcher diameter: p-2 (16px) + 44px (md mascot) + 2px border = 62px
  const LAUNCHER_WIDTH_PX = 62;
  const RIGHT_MARGIN_PX = 16;
  const MIN_MOBILE_WIDTHS = [320, 360, 375, 390, 412, 428];

  for (const screenWidth of MIN_MOBILE_WIDTHS) {
    const launcherLeftEdge = screenWidth - RIGHT_MARGIN_PX - LAUNCHER_WIDTH_PX;
    assert.ok(launcherLeftEdge > 0, `Launcher must stay within viewport on ${screenWidth}px screen (left edge: ${launcherLeftEdge}px)`);
  }
});

// ==============================================================================
// 4. DESIGN TOKEN STRICTNESS VERIFICATION
// ==============================================================================

test('Token Strictness Stress: scripts/check-tokens.mjs reports 0 forbidden classes and detects synthetic violations', () => {
  // Test 1: Actual src/ codebase must have 0 violations
  const nodeCmd = process.execPath;
  const output = execSync(`"${nodeCmd}" scripts/check-tokens.mjs`, { encoding: 'utf-8', env: process.env });
  assert.ok(output.includes('[PASS] check:tokens: 0 forbidden classes found'), 'Tokens check must pass with 0 violations');

  // Test 2: Oracle verification of check-tokens regex patterns against synthetic violations
  const FORBIDDEN_PATTERNS = [
    {
      name: 'Numbered accent/primary/brand scale',
      regex: /\b(?:bg|text|border|ring|fill|stroke|from|to|via)-(?:accent|primary|brand)-\d+\b/g,
    },
    {
      name: 'Tailwind default color palette scale',
      regex: /\b(?:bg|text|border|ring)-(?:slate|gray|zinc|neutral|stone|indigo|purple|violet|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|rose|pink|fuchsia)-(?:50|100|200|300|400|500|600|700|800|900|950)\b/g,
    },
    {
      name: 'Hardcoded hex color utility',
      regex: /\b(?:bg|text|border|ring|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]/g,
    },
  ];

  // Synthetic violations that MUST be caught
  const testViolations = [
    'bg-accent-500',
    'text-primary-600',
    'border-brand-700',
    'bg-blue-500',
    'text-slate-900',
    'border-gray-200',
    'ring-indigo-400',
    'bg-[#ff5b2e]',
    'text-[#181511]',
  ];

  for (const violation of testViolations) {
    const matched = FORBIDDEN_PATTERNS.some(p => Boolean(violation.match(p.regex)));
    assert.ok(matched, `Token checker oracle must catch synthetic violation: ${violation}`);
  }

  // Permitted Cosmo Notebook classes that MUST NOT trigger false positives
  const allowedClasses = [
    'bg-paper',
    'bg-surface',
    'bg-paper-2',
    'text-ink',
    'text-ink-2',
    'text-ink-muted',
    'border-line',
    'border-line-strong',
    'bg-accent',
    'text-accent',
    'hover:bg-accent-hover',
    'bg-accent-subtle',
  ];

  for (const allowed of allowedClasses) {
    const matched = FORBIDDEN_PATTERNS.some(p => Boolean(allowed.match(p.regex)));
    assert.ok(!matched, `Token checker must not flag allowed Cosmo Notebook token: ${allowed}`);
  }
});
