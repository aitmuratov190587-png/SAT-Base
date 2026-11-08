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

const { validateTutorRequest } = await moduleFrom('src/lib/tutorValidator.ts');

test('validateTutorRequest strictly rejects requests in mock mode', () => {
  const res = validateTutorRequest({
    message: 'Can you help me solve this?',
    context: {
      mode: 'mock',
      questionId: 'm-1',
    },
  });

  assert.equal(res.isValid, false);
  assert.equal(res.error, 'Cosmo is off during mock tests.');
});

test('validateTutorRequest accepts valid practice and general requests', () => {
  const resPractice = validateTutorRequest({
    message: 'What should my first step be?',
    context: {
      mode: 'practice',
      questionId: 'rw-crf-3',
      hintLevel: 1,
    },
  });
  assert.equal(resPractice.isValid, true);

  const resGeneral = validateTutorRequest({
    message: 'How should I pace myself on the math section?',
    context: {
      mode: 'general',
    },
  });
  assert.equal(resGeneral.isValid, true);
});

test('validateTutorRequest rejects empty messages and character limits', () => {
  const emptyRes = validateTutorRequest({
    message: '   ',
    context: { mode: 'practice' },
  });
  assert.equal(emptyRes.isValid, false);
  assert.equal(emptyRes.error, 'Message content is required');

  const oversizedMessage = validateTutorRequest({
    message: 'a'.repeat(1001),
    context: { mode: 'general' },
  });
  assert.equal(oversizedMessage.isValid, false);
  assert.equal(oversizedMessage.error, 'Message exceeds 1000 characters limit');

  const oversizedContext = validateTutorRequest({
    message: 'Help please',
    context: {
      mode: 'practice',
      passage: 'x'.repeat(6100),
    },
  });
  assert.equal(oversizedContext.isValid, false);
  assert.equal(oversizedContext.error, 'Context data exceeds 6000 characters limit');
});
