import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

const cacheDir = path.resolve('node_modules/.cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

const bundlePath = path.join(cacheDir, 'pricing_page_test_bundle.mjs');
await build({
  stdin: {
    contents: `
      export { default as PricingPage } from './src/pages/PricingPage';
      export * from './src/pages/pricing/pricingFormat';
      export { AuthProvider } from './src/contexts/AuthContext';
      export { AppProvider } from './src/contexts/AppContext';
    `,
    resolveDir: process.cwd(),
    loader: 'tsx',
  },
  bundle: true,
  outfile: bundlePath,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  jsx: 'automatic',
  loader: { '.css': 'empty' },
  define: {
    'import.meta.env.VITE_SUPABASE_URL': '"https://mock.supabase.co"',
    'import.meta.env.VITE_SUPABASE_ANON_KEY': '"mock-key"',
  },
});

const pricingMod = await import(pathToFileURL(bundlePath).href);
const {
  PricingPage,
  AuthProvider,
  AppProvider,
  THIN_NBSP,
  UZ_OKINA,
  UZS_UNIT,
  NBSP,
  NB_HYPHEN,
  COMPARISON_ROWS,
  formatNumberWithThinSpace,
  formatPriceParts,
  getPaymentMethodsForCurrency,
  getPricingFaqMetrics,
} = pricingMod;

test('Pricing currency & number formatter uses U+202F, U+02BB, and immutable plan amounts', () => {
  assert.equal(UZ_OKINA, '\u02BB');
  assert.equal(THIN_NBSP, '\u202F');
  assert.equal(UZS_UNIT, 'so\u02BBm');
  assert.equal(formatNumberWithThinSpace(50000), '50\u202F000');
  assert.equal(formatNumberWithThinSpace(200000), '200\u202F000');

  const freeUzs = formatPriceParts('free', 'UZS');
  assert.equal(freeUzs.amount, 0);
  assert.equal(freeUzs.inlineLabel, `0${NBSP}so\u02BBm`);
  assert.equal(freeUzs.period, 'forever');

  const proUzs = formatPriceParts('pro', 'UZS');
  assert.equal(proUzs.amount, 50000);
  assert.equal(proUzs.numberText, '50\u202F000');
  assert.equal(proUzs.unitText, 'so\u02BBm');
  assert.equal(proUzs.inlineLabel, `50\u202F000${NBSP}so\u02BBm`);
  assert.equal(proUzs.monthlyActionLabel, `50\u202F000${NBSP}so\u02BBm/mo`);

  const ultraUzs = formatPriceParts('ultra_pro', 'UZS');
  assert.equal(ultraUzs.amount, 200000);
  assert.equal(ultraUzs.inlineLabel, `200\u202F000${NBSP}so\u02BBm`);

  const proUsd = formatPriceParts('pro', 'USD');
  assert.equal(proUsd.amount, 4);
  assert.equal(proUsd.inlineLabel, '$4');
  assert.equal(proUsd.monthlyActionLabel, '$4/mo');

  const ultraUsd = formatPriceParts('ultra_pro', 'USD');
  assert.equal(ultraUsd.amount, 16);
  assert.equal(ultraUsd.inlineLabel, '$16');
  assert.equal(ultraUsd.monthlyActionLabel, '$16/mo');
});

test('Payment methods helper filters strictly by active currency and matches payment schema', () => {
  const uzsMethods = getPaymentMethodsForCurrency('UZS').map((m) => m.label);
  assert.deepEqual(uzsMethods, ['Uzum Pay', 'Click', 'Payme']);

  const usdMethods = getPaymentMethodsForCurrency('USD').map((m) => m.label);
  assert.deepEqual(usdMethods, ['Visa', 'MasterCard', 'Google Pay']);
  assert.ok(!usdMethods.includes('Apple Pay'));
});

test('Pricing comparison table and FAQ metrics keep immutable plan limits consistent', () => {
  const metrics = getPricingFaqMetrics();
  assert.equal(metrics.freeMocks, 6);
  assert.equal(metrics.freeTutor, 15);
  assert.equal(metrics.proTutor, 50);
  assert.equal(metrics.ultraTutor, 100);
  assert.equal(metrics.proUzs, `50\u202F000${NBSP}so\u02BBm`);
  assert.equal(metrics.ultraUzs, `200\u202F000${NBSP}so\u02BBm`);

  const insightsRow = COMPARISON_ROWS.find((r) => r.id === 'diagnostic-insights');
  assert.ok(insightsRow);
  assert.equal(insightsRow.free.kind, 'excluded');
  assert.equal(insightsRow.free.text, '—');
  assert.equal(insightsRow.pro.text, '10 / day');
  assert.equal(insightsRow.ultraPro.text, '20 / day + weekly report');
});

test('PricingPage SSR markup enforces typography, copy, accordion FAQ, and no legacy so‘m/Apple Pay copy', () => {
  const html = renderToStaticMarkup(
    React.createElement(
      MemoryRouter,
      { initialEntries: ['/pricing'] },
      React.createElement(
        AuthProvider,
        null,
        React.createElement(AppProvider, null, React.createElement(PricingPage))
      )
    )
  );

  // Non-breaking hyphen in hero heading
  assert.ok(html.includes(`test${NB_HYPHEN}prep`), 'Expected U+2011 non-breaking hyphen in test-prep');

  // Consistent U+02BB and U+202F, zero legacy so‘m / so'm variants inside PricingPage
  assert.ok(html.includes(`50\u202F000`), 'Expected U+202F thousands separator');
  assert.ok(html.includes(`so\u02BBm`), 'Expected U+02BB modifier letter');
  assert.ok(!html.includes('so‘m'), 'Must not contain U+2018 curly so‘m variant');
  assert.ok(!html.includes("so'm"), 'Must not contain ASCII apostrophe so\'m variant');

  // Consistent copy fixes
  const plainText = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.ok(html.includes('Everything you need for full-length practice and pacing mastery.'));
  assert.ok(!html.includes('reach 1400+'));
  assert.ok(plainText.includes('Pacing analytics: your tempo vs target time per question'));
  assert.ok(html.includes('Cosmo AI diagnostic insights: <strong class="font-semibold text-ink">20</strong> / day + weekly report'));
  assert.ok(html.includes('Upgrade to Pro — 50\u202F000\u00A0so\u02BBm/mo'));
  assert.ok(html.includes('Upgrade to Ultra Pro — 200\u202F000\u00A0so\u02BBm/mo'));
  assert.ok(!html.includes('Apple Pay'), 'FAQ/badges must not advertise unsupported Apple Pay');

  // Navigation button consistency (guest view renders "Back to home" in both header and bottom CTA)
  const backHomeMatches = html.match(/Back to home/g) || [];
  assert.ok(backHomeMatches.length >= 2, 'Expected consistent Back to home labels');

  // Accessible FAQ accordion: 3 triggers, first expanded by default
  assert.ok(html.includes('aria-expanded="true"'));
  assert.ok(html.includes('aria-expanded="false"'));

  // Inline SVG flag replaces Windows "uz" emoji text
  assert.ok(!html.includes('🇺🇿'));
  assert.ok(!html.includes('🌐'));

  // No sub-13px utility classes inside PricingPage source
  const source = fs.readFileSync(path.resolve('src/pages/PricingPage.tsx'), 'utf-8');
  assert.ok(!/text-\[(10|11|12)px\]/.test(source), 'PricingPage should not use sub-13px arbitrary font sizes');
});
