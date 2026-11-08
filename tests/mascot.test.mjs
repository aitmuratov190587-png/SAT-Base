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

const bundlePath = path.join(cacheDir, 'mascot_test_bundle.mjs');

await build({
  entryPoints: {
    bundle: 'src/components/mascot/CosmoLauncher.tsx',
  },
  bundle: true,
  outfile: bundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
});

// Also bundle CosmoMascot directly
const mascotBundlePath = path.join(cacheDir, 'mascot_only_bundle.mjs');
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

const { CosmoLauncher } = await import(pathToFileURL(bundlePath).href);
const { CosmoMascot } = await import(pathToFileURL(mascotBundlePath).href);

test('CSS Motion Engine defines keyframes and reduced-motion rules in index.css', () => {
  const css = fs.readFileSync(path.resolve('src/index.css'), 'utf-8');

  // Keyframes
  assert.match(css, /@keyframes float\b/);
  assert.match(css, /\.animate-float\b/);
  assert.match(css, /@keyframes gentleBob\b/);
  assert.match(css, /\.animate-gentle-bob\b/);
  assert.match(css, /@keyframes orbitalRing\b/);
  assert.match(css, /\.animate-orbital-ring\b/);
  assert.match(css, /@keyframes pulseAura\b/);
  assert.match(css, /\.animate-pulse-aura\b/);
  assert.match(css, /@keyframes mascotBlink\b/);
  assert.match(css, /@keyframes mascotTalk\b/);
  assert.match(css, /@keyframes starTwinkle\b/);
  assert.match(css, /@keyframes mascotSleepZ\b/);

  // Reduced motion support
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /\.animate-float[^}]*animation:\s*none\s*!important/);
});

test('CosmoMascot renders semantic SVG with helmet, ring, and peach-tipped antennae', () => {
  const html = renderToStaticMarkup(React.createElement(CosmoMascot, { state: 'idle', size: 'md' }));

  assert.match(html, /<svg[^>]*viewBox="0 0 100 100"/);
  assert.match(html, /aria-label="Cosmo Assistant Mascot"/);
  assert.match(html, /data-mascot-state="idle"/);
  // Helmet
  assert.match(html, /id="cosmo-head"/);
  // Antennae with glowing tips
  assert.match(html, /id="cosmo-antennae"/);
  assert.match(html, /fill="#FF8A65"/);
  // Orbital ring
  assert.match(html, /animate-orbital-ring/);
});

test('CosmoMascot handles all 6 reactive states accurately', () => {
  const states = ['idle', 'hover', 'thinking', 'talking', 'celebrating', 'sleeping'];

  for (const s of states) {
    const html = renderToStaticMarkup(React.createElement(CosmoMascot, { state: s }));
    assert.match(html, new RegExp(`data-mascot-state="${s}"`));
  }

  // Thinking state has inquisitive eyes and fast orbit
  const thinkingHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { state: 'thinking' }));
  assert.match(thinkingHtml, /id="cosmo-eyes-thinking"/);
  assert.match(thinkingHtml, /animate-orbital-ring-fast/);

  // Talking state has vocal waves and animated talking mouth
  const talkingHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { state: 'talking' }));
  assert.match(talkingHtml, /id="cosmo-talking-waves"/);
  assert.match(talkingHtml, /animate-mascot-talk/);

  // Celebrating state has joyful laughing eyes, blush, and star sparkles
  const celebHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { state: 'celebrating' }));
  assert.match(celebHtml, /id="cosmo-eyes-celebrating"/);
  assert.match(celebHtml, /id="cosmo-sparkles"/);
  assert.match(celebHtml, /id="cosmo-cheeks"/);

  // Sleeping state has peaceful resting eyes and floating Zs
  const sleepHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { state: 'sleeping' }));
  assert.match(sleepHtml, /id="cosmo-eyes-sleeping"/);
  assert.match(sleepHtml, /id="cosmo-sleep-z"/);
});

test('CosmoMascot accurately scales across preset sizes and custom numbers', () => {
  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 44,
    lg: 64,
    xl: 96,
  };

  for (const [key, val] of Object.entries(sizeMap)) {
    const html = renderToStaticMarkup(React.createElement(CosmoMascot, { size: key }));
    assert.match(html, new RegExp(`width="${val}"`));
    assert.match(html, new RegExp(`height="${val}"`));
  }

  const customHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { size: 120 }));
  assert.match(customHtml, /width="120"/);
  assert.match(customHtml, /height="120"/);
});

test('CosmoMascot accessibility and interactivity attributes', () => {
  // Non-clickable defaults to role="img"
  const imgHtml = renderToStaticMarkup(React.createElement(CosmoMascot, { state: 'idle' }));
  assert.match(imgHtml, /role="img"/);

  // Clickable sets role="button" and tabIndex="0"
  const buttonHtml = renderToStaticMarkup(
    React.createElement(CosmoMascot, { state: 'idle', onClick: () => {} })
  );
  assert.match(buttonHtml, /role="button"/);
  assert.match(buttonHtml, /tabindex="0"/);
});

test('CosmoLauncher renders interactive floating button with mascot', () => {
  const defaultHtml = renderToStaticMarkup(React.createElement(CosmoLauncher, { isOpen: false }));
  assert.match(defaultHtml, /aria-label="Open Cosmo Assistant"/);
  assert.match(defaultHtml, /aria-expanded="false"/);
  assert.match(defaultHtml, /aria-haspopup="dialog"/);
  assert.match(defaultHtml, /data-mascot-state="idle"/);

  // Open state
  const openHtml = renderToStaticMarkup(React.createElement(CosmoLauncher, { isOpen: true }));
  assert.match(openHtml, /aria-label="Close Cosmo Assistant"/);
  assert.match(openHtml, /aria-expanded="true"/);
  assert.match(openHtml, /data-mascot-state="talking"/);

  // Unread badge
  const unreadHtml = renderToStaticMarkup(React.createElement(CosmoLauncher, { unreadCount: 3 }));
  assert.match(unreadHtml, />3<\/span>/);
  assert.match(unreadHtml, /aria-label="3 unread messages"/);

  // Sleeping state during mock test
  const sleepingHtml = renderToStaticMarkup(React.createElement(CosmoLauncher, { state: 'sleeping' }));
  assert.match(sleepingHtml, /disabled=""/);
  assert.match(sleepingHtml, /Cosmo Assistant is resting during mock exam/);
  assert.match(sleepingHtml, /data-mascot-state="sleeping"/);
});
