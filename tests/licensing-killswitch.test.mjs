import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

async function loadQuestionRegistryWithFlag(flagValue) {
  const defineEnv = flagValue !== undefined ? {
    'import.meta.env.VITE_INCLUDE_COLLEGEBOARD_QUESTIONS': JSON.stringify(flagValue ? 'true' : 'false')
  } : {};

  const { outputFiles } = await build({
    entryPoints: ['src/data/questionRegistry.ts'],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    define: defineEnv,
  });

  return import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));
}

test('Kill switch ON (VITE_INCLUDE_COLLEGEBOARD_QUESTIONS=true) includes question bank with provenance fields', async () => {
  const mod = await loadQuestionRegistryWithFlag(true);
  assert.equal(mod.INCLUDE_COLLEGEBOARD_QUESTIONS, true);
  
  const total = Object.values(mod.QUESTION_REGISTRY).reduce((sum, t) => sum + t.totalQuestions, 0);
  assert.equal(total, 2682);

  // Check provenance field on sample questions
  const sampleCrossText = mod.QUESTION_REGISTRY['rw-crf-1'].questions[0];
  assert.equal(sampleCrossText.source, 'unknown');
  assert.ok(sampleCrossText.license_note);

  const sampleMath = mod.QUESTION_REGISTRY['m-alg-1'].questions[0];
  assert.ok(['collegeboard', 'unknown'].includes(sampleMath.source));
  assert.ok(sampleMath.license_note);
});

test('Kill switch OFF (VITE_INCLUDE_COLLEGEBOARD_QUESTIONS=false) excludes collegeboard and unknown questions', async () => {
  const mod = await loadQuestionRegistryWithFlag(false);
  assert.equal(mod.INCLUDE_COLLEGEBOARD_QUESTIONS, false);

  const total = Object.values(mod.QUESTION_REGISTRY).reduce((sum, t) => sum + t.totalQuestions, 0);
  assert.equal(total, 0, 'All collegeboard and unknown questions must be excluded from topic registry');

  for (const [topicId, meta] of Object.entries(mod.QUESTION_REGISTRY)) {
    assert.equal(meta.totalQuestions, 0, `Topic ${topicId} should have 0 active questions`);
    if (meta.questions) {
      assert.equal(meta.questions.length, 0, `Topic ${topicId} questions array should be empty`);
    }
  }
});
