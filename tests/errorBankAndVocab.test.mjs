import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

async function moduleFrom(entry) {
  const { outputFiles } = await build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    define: {
      'import.meta.env.VITE_SUPABASE_URL': '"https://mock.supabase.co"',
      'import.meta.env.VITE_SUPABASE_ANON_KEY': '"mock-key"',
    },
  });
  return import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));
}

const { resolveQuestionById } = await moduleFrom('src/lib/questionResolver.ts');
const { SAT_CORE_VOCABULARY } = await moduleFrom('src/pages/VocabPage.tsx');
const { getLocalErrorBank } = await moduleFrom('src/lib/errorBankService.ts');

test('resolveQuestionById resolves questions across all platform datasets', () => {
  // 1. FlashRush question
  const flashQ = resolveQuestionById('rw-1');
  assert.equal(flashQ.id, 'rw-1');
  assert.equal(flashQ.section, 'reading_writing');
  assert.ok(flashQ.options.length >= 4);
  assert.ok(flashQ.correctAnswerLetter);
  assert.ok(flashQ.prompt);

  // 2. Cross-Text Question Registry
  const ctQ = resolveQuestionById('ctc-001');
  assert.equal(ctQ.id, 'ctc-001');
  assert.equal(ctQ.section, 'reading_writing');
  assert.ok(ctQ.passage.includes('Text 1'));
  assert.ok(ctQ.options.some((o) => o.letter === ctQ.correctAnswerLetter));

  // 3. SAT Mock question
  const satQ = resolveQuestionById('sat-q1');
  assert.equal(satQ.id, 'sat-q1');
  assert.ok(satQ.prompt.includes('Scott Joplin'));
  assert.equal(satQ.correctAnswerLetter, 'B');

  // 4. Safe fallback for unknown IDs
  const fallback = resolveQuestionById('non-existent-999', 'm-alg-1');
  assert.equal(fallback.id, 'non-existent-999');
  assert.equal(fallback.section, 'math');
  assert.ok(fallback.options.length >= 4);
});

test('SAT_CORE_VOCABULARY adheres to Digital SAT Words in Context curriculum', () => {
  assert.ok(SAT_CORE_VOCABULARY.length >= 10);
  for (const item of SAT_CORE_VOCABULARY) {
    assert.ok(item.word && item.word.length > 0);
    assert.ok(['noun', 'verb', 'adjective', 'adverb'].includes(item.pos));
    assert.ok(['positive', 'negative', 'neutral'].includes(item.connotation));
    assert.ok(item.definition && item.sampleSentence);
    assert.ok(item.quiz);
    assert.equal(item.quiz.options.length, 4);
    assert.ok(item.quiz.options.some((o) => o.letter === item.quiz.correctLetter));
    assert.ok(item.quiz.explanation);
  }
});

test('App.tsx and AppSidebar.tsx route and link to /error-bank and /vocab', () => {
  const appSource = fs.readFileSync(path.resolve('src/App.tsx'), 'utf-8');
  assert.match(appSource, /path="\/error-bank"/);
  assert.match(appSource, /path="\/vocab"/);
  assert.match(appSource, /import\('\.\/pages\/ErrorBank'\)/);
  assert.match(appSource, /import\('\.\/pages\/VocabPage'\)/);

  const sidebarSource = fs.readFileSync(path.resolve('src/components/navigation/AppSidebar.tsx'), 'utf-8');
  assert.match(sidebarSource, /path: '\/error-bank'/);
  assert.match(sidebarSource, /path: '\/vocab'/);

  const dashboardSource = fs.readFileSync(path.resolve('src/pages/Dashboard.tsx'), 'utf-8');
  assert.match(dashboardSource, /to="\/error-bank"/);
});

test('PaymentModal and UpgradeModal enforce proper modal dismissal (Escape key and backdrop click)', () => {
  const paymentModalSource = fs.readFileSync(path.resolve('src/components/ui/PaymentModal.tsx'), 'utf-8');
  assert.match(paymentModalSource, /e\.key === 'Escape'/);
  assert.match(paymentModalSource, /onMouseDown=\{\(e\) =>/);
  assert.match(paymentModalSource, /role="dialog"/);

  const upgradeModalSource = fs.readFileSync(path.resolve('src/components/ui/UpgradeModal.tsx'), 'utf-8');
  assert.match(upgradeModalSource, /e\.key === 'Escape'/);
  assert.match(upgradeModalSource, /onMouseDown=\{\(e\) =>/);
  assert.match(upgradeModalSource, /role="dialog"/);
});

test('ErrorBank preserves stable question session during active drills', () => {
  const errorBankSource = fs.readFileSync(path.resolve('src/pages/ErrorBank.tsx'), 'utf-8');
  assert.match(errorBankSource, /activeDrillQuestions/);
  assert.match(errorBankSource, /resolvedInSession/);
  assert.match(errorBankSource, /finishDrill/);
});

test('VocabPage links to /practice/rw-crf-3 and includes full reactivity dependencies', () => {
  const vocabSource = fs.readFileSync(path.resolve('src/pages/VocabPage.tsx'), 'utf-8');
  assert.match(vocabSource, /navigate\('\/practice\/rw-crf-3'\)/);
  assert.match(vocabSource, /\[selectedConnotation, searchQuery, activeTab, activeWordId\]/);
});

test('QuestionBank and AppHeader wire global search to query parameter', () => {
  const headerSource = fs.readFileSync(path.resolve('src/components/navigation/AppHeader.tsx'), 'utf-8');
  assert.match(headerSource, /navigate\(`\/questions\?search=\${encodeURIComponent\(val\)}`\)/);

  const qBankSource = fs.readFileSync(path.resolve('src/pages/QuestionBank.tsx'), 'utf-8');
  assert.match(qBankSource, /useSearchParams/);
  assert.match(qBankSource, /searchParams\.get\('search'\)/);
});

