import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const cacheDir = path.resolve('node_modules/.cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

// Bundle AITutorDrawer for testing
const drawerBundlePath = path.join(cacheDir, 'drawer_test_bundle.mjs');
await build({
  entryPoints: {
    bundle: 'src/components/ai/AITutorDrawer.tsx',
  },
  bundle: true,
  outfile: drawerBundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
  define: {
    'import.meta.env.VITE_SUPABASE_URL': '"https://mock.supabase.co"',
    'import.meta.env.VITE_SUPABASE_ANON_KEY': '"mock-key"',
  },
});

// Bundle CosmoUniversalAssistant for testing
const assistantBundlePath = path.join(cacheDir, 'assistant_test_bundle.mjs');
await build({
  entryPoints: {
    bundle: 'src/components/ai/CosmoUniversalAssistant.tsx',
  },
  bundle: true,
  outfile: assistantBundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
  define: {
    'import.meta.env.VITE_SUPABASE_URL': '"https://mock.supabase.co"',
    'import.meta.env.VITE_SUPABASE_ANON_KEY': '"mock-key"',
  },
});

const { default: AITutorDrawer } = await import(pathToFileURL(drawerBundlePath).href);
const { default: CosmoUniversalAssistant } = await import(pathToFileURL(assistantBundlePath).href);

test('AITutorDrawer renders live animated CosmoMascot in header with assistant states', () => {
  // Idle state
  const idleHtml = renderToStaticMarkup(
    React.createElement(AITutorDrawer, {
      isOpen: true,
      onClose: () => {},
      context: { mode: 'general' },
    })
  );

  assert.match(idleHtml, /role="dialog"/);
  assert.match(idleHtml, /aria-modal="true"/);
  assert.match(idleHtml, /aria-label="Cosmo AI Assistant"/);
  assert.match(idleHtml, /data-mascot-state="idle"/);
  assert.match(idleHtml, /Universal guide/);

  // Mock exam state -> sleeping mascot
  const mockHtml = renderToStaticMarkup(
    React.createElement(AITutorDrawer, {
      isOpen: true,
      onClose: () => {},
      context: { mode: 'mock' },
    })
  );

  assert.match(mockHtml, /data-mascot-state="sleeping"/);
  assert.match(mockHtml, /Exam quiet mode/);
  assert.match(mockHtml, /Cosmo is off during mock tests/);
});

test('AITutorDrawer Universal Mode renders 6 quick action pills and feature guidance', () => {
  const html = renderToStaticMarkup(
    React.createElement(AITutorDrawer, {
      isOpen: true,
      onClose: () => {},
      context: { mode: 'general' },
    })
  );

  // 6 Universal quick actions must be present
  assert.match(html, /Explain concept/i);
  assert.match(html, /Math Reference Sheet/i);
  assert.match(html, /Desmos Tricks/i);
  assert.match(html, /Pacing Strategy/i);
  assert.match(html, /Platform Tour/i);
  assert.match(html, /SA-ELO &amp; Score Tiers|SA-ELO & Score Tiers/i);

  // Input placeholder
  assert.match(html, /placeholder="Ask Cosmo a question/);
});

test('AITutorDrawer Practice Mode renders Socratic hint ladder and practice actions', () => {
  const html = renderToStaticMarkup(
    React.createElement(AITutorDrawer, {
      isOpen: true,
      onClose: () => {},
      context: {
        mode: 'practice',
        questionNumber: 4,
        topicName: 'Linear Equations',
        hintLevel: 1,
      },
    })
  );

  // Context chip
  assert.match(html, /Question 4/);
  assert.match(html, /Linear Equations/);
  assert.match(html, /Hint/);
  assert.match(html, /1\/3/);

  // Practice quick action buttons
  assert.match(html, /Give me hint 2/);
  assert.match(html, /Check my step/);
  assert.match(html, /Explain concept/);
  assert.match(html, /Full solution/);
});

test('AITutorDrawer responsive classes support desktop slide-over and mobile bottom sheet', () => {
  const html = renderToStaticMarkup(
    React.createElement(AITutorDrawer, {
      isOpen: true,
      onClose: () => {},
      context: { mode: 'general' },
    })
  );

  // Desktop slide-over drawer
  assert.match(html, /md:w-\[440px\]/);
  assert.match(html, /md:h-full/);
  assert.match(html, /md:shadow-notebook/);

  // Mobile bottom sheet
  assert.match(html, /h-\[88vh\]/);
  assert.match(html, /rounded-t-2xl/);
});

test('CosmoUniversalAssistant integrates collision-free launcher at bottom-20 md:bottom-6', () => {
  // Mock react-router-dom and AppContext in test harness
  const mockAppContext = {
    isAITutorOpen: false,
    openAITutor: () => {},
    closeAITutor: () => {},
    tutorContext: undefined,
    tutorInitialMessage: undefined,
  };

  // Check code layout and fixed positioning in component source
  const source = fs.readFileSync(
    path.resolve('src/components/ai/CosmoUniversalAssistant.tsx'),
    'utf-8'
  );

  assert.match(source, /fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40/);
  assert.match(source, /useApp\(\)/);
  assert.match(source, /useLocation\(\)/);
  assert.match(source, /isFlashrushExam/);
  assert.match(source, /sleeping/);
  assert.match(source, /<AITutorDrawer/);
  assert.match(source, /<CosmoLauncher/);
});

test('App.tsx mounts CosmoUniversalAssistant globally inside BrowserRouter', () => {
  const appSource = fs.readFileSync(path.resolve('src/App.tsx'), 'utf-8');

  assert.match(appSource, /import CosmoUniversalAssistant from '\.\/components\/ai\/CosmoUniversalAssistant'/);
  assert.match(appSource, /<BrowserRouter>[\s\S]*?<CosmoUniversalAssistant \/>/);
});

test('DashboardLayout has removed duplicate drawer mount to avoid double-rendering', () => {
  const layoutSource = fs.readFileSync(path.resolve('src/layouts/DashboardLayout.tsx'), 'utf-8');

  assert.doesNotMatch(layoutSource, /<AITutorDrawer/);
  assert.doesNotMatch(layoutSource, /import AITutorDrawer/);
});
