import { build } from 'esbuild';
import assert from 'node:assert/strict';

async function moduleFrom(entry, options = {}) {
  const { outputFiles } = await build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    define: {
      'import.meta.env.VITE_SUPABASE_URL': '"https://mock.supabase.co"',
      'import.meta.env.VITE_SUPABASE_ANON_KEY': '"mock-key"',
      ...options.define,
    },
    external: options.external || [],
  });
  return import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));
}

const cosmoKnowledge = await moduleFrom('src/lib/cosmoKnowledge.ts');
const cosmoService = await moduleFrom('src/lib/cosmoAssistantService.ts');
const tutorValidator = await moduleFrom('src/lib/tutorValidator.ts');

console.log('--- EMPIRICAL CHALLENGE HARNESS ---');

// 1. Boundary testing: Empty & whitespace
const emptyRes = await cosmoService.queryCosmoAssistant('', { mode: 'general' });
console.log('Empty query response:', emptyRes);

const wsRes = await cosmoService.queryCosmoAssistant('    \n\t  ', { mode: 'general' });
console.log('Whitespace query response:', wsRes);

// 2. Length boundary: 1000 chars
const msg999 = 'A'.repeat(999);
const msg1000 = 'A'.repeat(1000);
const msg1001 = 'A'.repeat(1001);

const res999 = await cosmoService.queryCosmoAssistant(msg999, { mode: 'general' });
const res1001 = await cosmoService.queryCosmoAssistant(msg1001, { mode: 'general' });

console.log('res999 error:', res999.error);
console.log('res1001 error:', res1001.error);
console.log('res1001 reply:', res1001.reply);

// Compare with tutorValidator
const val1000 = tutorValidator.validateTutorRequest({ message: msg1000, context: { mode: 'general' } });
const val1001 = tutorValidator.validateTutorRequest({ message: msg1001, context: { mode: 'general' } });
console.log('validator 1000:', val1000);
console.log('validator 1001:', val1001);

// 3. Context boundary: 6000 chars
const ctx5900 = { mode: 'practice', passage: 'A'.repeat(5900) };
const ctx6500 = { mode: 'practice', passage: 'A'.repeat(6500) };

const resCtx5900 = await cosmoService.queryCosmoAssistant('test', ctx5900);
const resCtx6500 = await cosmoService.queryCosmoAssistant('test', ctx6500);
console.log('resCtx5900 error:', resCtx5900.error);
console.log('resCtx6500 error:', resCtx6500.error);
console.log('resCtx6500 reply:', resCtx6500.reply);

const valCtx5900 = tutorValidator.validateTutorRequest({ message: 'test', context: ctx5900 });
const valCtx6500 = tutorValidator.validateTutorRequest({ message: 'test', context: ctx6500 });
console.log('validator ctx 5900:', valCtx5900);
console.log('validator ctx 6500:', valCtx6500);
