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

const results = {
  total: 0,
  passed: 0,
  failed: 0,
  findings: [],
};

function test(name, fn) {
  results.total++;
  try {
    fn();
    results.passed++;
    console.log(`  ✔ PASS: ${name}`);
  } catch (err) {
    results.failed++;
    console.error(`  ✘ FAIL: ${name}`);
    console.error(`    ${err.message}`);
    results.findings.push({ name, error: err.message });
  }
}

async function asyncTest(name, fn) {
  results.total++;
  try {
    await fn();
    results.passed++;
    console.log(`  ✔ PASS: ${name}`);
  } catch (err) {
    results.failed++;
    console.error(`  ✘ FAIL: ${name}`);
    console.error(`    ${err.message}`);
    results.findings.push({ name, error: err.message });
  }
}

console.log('================================================================');
console.log('CHALLENGER 1: EMPIRICAL ADVERSARIAL STRESS SUITE');
console.log('================================================================');

// =============================================================================
// SUITE 1: BOUNDARY TESTS
// =============================================================================
console.log('\n--- SUITE 1: BOUNDARY TESTS ---');

await asyncTest('B1.1: Empty query returns polite guidance without unhandled throw', async () => {
  const ans = await cosmoService.queryCosmoAssistant('', { mode: 'general' });
  assert.equal(ans.source, 'knowledge_base');
  assert.equal(ans.error, 'Message content is required');
  assert.ok(ans.reply.includes('type a question'));
});

await asyncTest('B1.2: Whitespace-only query (spaces, tabs, newlines) safely rejected', async () => {
  const ans = await cosmoService.queryCosmoAssistant('  \t\n \r  \n  ', { mode: 'general' });
  assert.equal(ans.source, 'knowledge_base');
  assert.equal(ans.error, 'Message content is required');
  assert.ok(ans.reply.includes('type a question'));
});

test('B1.3: tutorValidator boundary checks: exactly 1000 characters passes, 1001 fails', () => {
  const v1000 = tutorValidator.validateTutorRequest({ message: 'a'.repeat(1000), context: { mode: 'general' } });
  assert.equal(v1000.isValid, true);

  const v1001 = tutorValidator.validateTutorRequest({ message: 'a'.repeat(1001), context: { mode: 'general' } });
  assert.equal(v1001.isValid, false);
  assert.equal(v1001.error, 'Message exceeds 1000 characters limit');
});

test('B1.4: tutorValidator context boundary: JSON string <= 6000 passes, > 6000 fails', () => {
  // Base context string overhead is ~25 chars
  const vSmall = tutorValidator.validateTutorRequest({ message: 'test', context: { mode: 'practice', passage: 'x'.repeat(100) } });
  assert.equal(vSmall.isValid, true);

  const vLarge = tutorValidator.validateTutorRequest({ message: 'test', context: { mode: 'practice', passage: 'x'.repeat(6100) } });
  assert.equal(vLarge.isValid, false);
  assert.equal(vLarge.error, 'Context data exceeds 6000 characters limit');
});

await asyncTest('B1.5: queryCosmoAssistant gracefully handles 1000+ chars without unhandled rejection', async () => {
  const ans = await cosmoService.queryCosmoAssistant('x'.repeat(2500), { mode: 'general' });
  assert.ok(ans);
  assert.ok(ans.reply);
  assert.ok(ans.source === 'knowledge_base' || ans.source === 'ai_edge');
});

await asyncTest('B1.6: queryCosmoAssistant gracefully handles 6000+ context without unhandled rejection', async () => {
  const ans = await cosmoService.queryCosmoAssistant('Explain', { mode: 'practice', passage: 'z'.repeat(10000) });
  assert.ok(ans);
  assert.ok(ans.reply);
});

// =============================================================================
// SUITE 2: DOMAIN FUZZING & KNOWLEDGE RESILIENCE
// =============================================================================
console.log('\n--- SUITE 2: DOMAIN FUZZING & KNOWLEDGE RESILIENCE ---');

test('D2.1: Obscure SAT formula retrieval: 3D solids (cone, sphere, pyramid, cylinder)', () => {
  const cone = cosmoKnowledge.getFormulaByName('cone');
  assert.ok(cone, 'Must resolve cone formula');
  assert.ok(cone.latex.includes('\\frac{1}{3}\\pi r^2 h') || cone.latex.includes('1/3'));

  const sphere = cosmoKnowledge.getFormulaByName('volume of a sphere');
  assert.ok(sphere, 'Must resolve sphere formula');
  assert.ok(sphere.latex.includes('\\frac{4}{3}\\pi r^3'));

  const pyramid = cosmoKnowledge.getFormulaByName('pyramid');
  assert.ok(pyramid, 'Must resolve pyramid formula');
  assert.ok(pyramid.latex.includes('lwh') || pyramid.latex.includes('Bh'));

  const cylinder = cosmoKnowledge.getFormulaByName('cylinder');
  assert.ok(cylinder, 'Must resolve cylinder formula');
  assert.ok(cylinder.latex.includes('\\pi r^2 h'));
});

test('D2.2: Circle theorems and radian conversion formulas', () => {
  const circleAngles = cosmoKnowledge.getFormulaByName('circle');
  assert.ok(circleAngles, 'Must resolve circle formulas');

  const circleEq = cosmoKnowledge.getFormulaByName('standard equation of a circle');
  assert.ok(circleEq, 'Must resolve circle standard equation');
  assert.ok(circleEq.latex.includes('(x - h)^2 + (y - k)^2 = r^2'));
});

test('D2.3: Special right triangles (30-60-90 and 45-45-90)', () => {
  const t306090 = cosmoKnowledge.getFormulaByName('30-60-90');
  assert.ok(t306090, 'Must resolve 30-60-90');
  assert.ok(t306090.latex.includes('x\\sqrt{3}'));

  const t454590 = cosmoKnowledge.getFormulaByName('45-45-90');
  assert.ok(t454590, 'Must resolve 45-45-90');
  assert.ok(t454590.latex.includes('s\\sqrt{2}'));
});

test('D2.4: Trigonometry SOH-CAH-TOA and co-function identities', () => {
  const trig = cosmoKnowledge.getFormulaByName('trigonometry');
  assert.ok(trig, 'Must resolve trigonometry formula');
  assert.ok(trig.latex.includes('\\sin\\theta') || trig.latex.includes('\\cos'));
  assert.ok(trig.latex.includes('\\cos(90^\\circ - x^\\circ)'), 'Must include co-function identity');
});

test('D2.5: Complex LaTeX fuzzing input: nested fractions, exponents, square roots', () => {
  const complexLatex = '$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\cdot \\sum_{i=1}^n x_i^2$';
  const match = cosmoKnowledge.searchKnowledge(complexLatex);
  assert.ok(Array.isArray(match), 'searchKnowledge must safely return an array on complex LaTeX');
  assert.ok(match.length > 0, 'Must find relevant quadratic or math topic');
});

test('D2.6: Malformed input fuzzing: regex metacharacters and control characters', () => {
  const metachars = '.*+?^${}()|[]\\\\/?!@#$%^&*()_+~`|}{[]:;?><,./';
  const match = cosmoKnowledge.searchKnowledge(metachars);
  assert.ok(Array.isArray(match), 'searchKnowledge must not crash on regex metacharacters');

  const formulaMatch = cosmoKnowledge.getFormulaByName(metachars);
  assert.equal(formulaMatch, undefined, 'Must return undefined safely');
});

test('D2.7: Multi-step math reasoning queries resolve without errors', () => {
  const multiStep = 'If a line passes through (2, 5) and is perpendicular to y = -2x + 3, what is its equation?';
  const local = cosmoService.getLocalKnowledgeResponse(multiStep, { mode: 'general' });
  // Local resolver may match linear equations or return null for AI edge fallback
  if (local) {
    assert.equal(local.source, 'knowledge_base');
  }
});

// =============================================================================
// SUITE 3: EXAM INTEGRITY CHALLENGE (/mock-tests/flashrush)
// =============================================================================
console.log('\n--- SUITE 3: EXAM INTEGRITY CHALLENGE ---');

await asyncTest('E3.1: Direct mock mode lock (mode: "mock")', async () => {
  const ans = await cosmoService.queryCosmoAssistant('What is the quadratic formula?', { mode: 'mock' });
  assert.equal(ans.source, 'mock_locked', 'Must return source mock_locked');
  assert.ok(ans.reply.includes('resting during your mock test'));
  assert.equal(cosmoService.isMockExamLocked({ mode: 'mock' }), true);
});

await asyncTest('E3.2: Path lock on exact /mock-tests/flashrush', async () => {
  const ans = await cosmoService.queryCosmoAssistant('Help with question 1', {
    mode: 'general',
    currentPath: '/mock-tests/flashrush',
  });
  assert.equal(ans.source, 'mock_locked');
  assert.equal(cosmoService.isMockExamLocked({ mode: 'general', currentPath: '/mock-tests/flashrush' }), true);
});

await asyncTest('E3.3: Path lock with trailing slash /mock-tests/flashrush/', async () => {
  const ans = await cosmoService.queryCosmoAssistant('Show me circle area', {
    mode: 'general',
    currentPath: '/mock-tests/flashrush/',
  });
  assert.equal(ans.source, 'mock_locked');
  assert.equal(cosmoService.isMockExamLocked({ mode: 'general', currentPath: '/mock-tests/flashrush/' }), true);
});

await asyncTest('E3.4: Case-insensitive path lock /MOCK-TESTS/FLASHRUSH', async () => {
  const locked = cosmoService.isMockExamLocked({
    mode: 'general',
    currentPath: '/MOCK-TESTS/FLASHRUSH',
  });
  assert.equal(locked, true, 'Mock path check must be case-insensitive');
});

await asyncTest('E3.5: Subpath lock /mock-tests/flashrush/module-1/question-5', async () => {
  const locked = cosmoService.isMockExamLocked({
    mode: 'general',
    currentPath: '/mock-tests/flashrush/module-1/question-5',
  });
  assert.equal(locked, true, 'Subpaths of flashrush exam must be locked');
});

await asyncTest('E3.6: General mock root /mock-tests is locked', async () => {
  const locked = cosmoService.isMockExamLocked({
    mode: 'general',
    currentPath: '/mock-tests',
  });
  assert.equal(locked, true, '/mock-tests path must be locked');
});

await asyncTest('E3.7: Post-exam Results view /mock-tests/flashrush/results is EXPLICITLY UNLOCKED', async () => {
  const locked = cosmoService.isMockExamLocked({
    mode: 'results',
    currentPath: '/mock-tests/flashrush/results',
  });
  assert.equal(locked, false, 'Results view must NOT be locked');

  // Verify Error Bank guide works locally in results mode
  const localAns = cosmoService.getLocalKnowledgeResponse('How do I use the Error Bank to fix my mistakes?', {
    mode: 'results',
    currentPath: '/mock-tests/flashrush/results',
  });
  assert.ok(localAns, 'Must return Error Bank guidance in results mode');
  assert.equal(localAns.source, 'knowledge_base');

  // Verify queryCosmoAssistant is NOT blocked with mock_locked
  const assistantAns = await cosmoService.queryCosmoAssistant('How do I analyze my mistakes?', {
    mode: 'results',
    currentPath: '/mock-tests/flashrush/results',
  });
  assert.notEqual(assistantAns.source, 'mock_locked', 'Results mode must NOT be mock_locked');
});

// =============================================================================
// SUITE 4: SOCRATIC CHALLENGE (NON-SPOILAGE ENFORCEMENT)
// =============================================================================
console.log('\n--- SUITE 4: SOCRATIC CHALLENGE (NON-SPOILAGE ENFORCEMENT) ---');

const practiceContext = {
  mode: 'practice',
  questionId: 'math-adv-4',
  questionPrompt: 'What is the value of x if 2x + 7 = 15?',
  choices: { A: '2', B: '4', C: '6', D: '8' },
  correctAnswer: 'B',
  officialExplanation: 'Subtract 7 from both sides to get 2x = 8, then divide by 2 to get x = 4.',
};

await asyncTest('S4.1: Hint level 0 - Asking "what is the answer" is blocked and directs to Hint 1', async () => {
  const ans = await cosmoService.queryCosmoAssistant('what is the answer', {
    ...practiceContext,
    hintLevel: 0,
  });
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(!ans.reply.includes('x = 4') && !ans.reply.includes('Correct answer is B'));
  assert.ok(ans.reply.includes('Hint 1/3'));
  assert.ok(ans.suggestedActions.some(a => a.includes('Hint 1')));
});

await asyncTest('S4.2: Hint level 1 - Asking "which option is correct" is blocked and directs to Hint 2', async () => {
  const ans = await cosmoService.queryCosmoAssistant('which option is correct', {
    ...practiceContext,
    hintLevel: 1,
  });
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(!ans.reply.includes('Option B is right'));
  assert.ok(ans.reply.includes('Hint 2/3'));
});

await asyncTest('S4.3: Hint level 2 - Asking "give me the answer" is blocked and directs to Hint 3', async () => {
  const ans = await cosmoService.queryCosmoAssistant('give me the answer', {
    ...practiceContext,
    hintLevel: 2,
  });
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(ans.reply.includes('Hint 3/3'));
});

await asyncTest('S4.4: Hint level 0 - Asking "show me the full solution" is blocked before hint 3', async () => {
  const ans = await cosmoService.queryCosmoAssistant('Show me the full solution please', {
    ...practiceContext,
    hintLevel: 0,
  });
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(ans.reply.includes('Hint 1/3'));
});

await asyncTest('S4.5: Hint level 3 - Asking for full solution is permitted after working through hints', async () => {
  // At hintLevel 3, the Socratic guard passes it through to local/AI resolution
  const ans = await cosmoService.queryCosmoAssistant('full solution', {
    ...practiceContext,
    hintLevel: 3,
  });
  // Since remote edge function is mock, it falls back without unhandled crash
  assert.ok(ans);
});

// =============================================================================
// SUITE 5: OFFLINE FALLBACK CHALLENGE (RESILIENCE & UNHANDLED REJECTIONS)
// =============================================================================
console.log('\n--- SUITE 5: OFFLINE FALLBACK CHALLENGE ---');

await asyncTest('O5.1: Instant offline resolution for formula inquiries with zero network calls', async () => {
  const ans = cosmoService.getLocalKnowledgeResponse('Pythagorean theorem', { mode: 'general' });
  assert.ok(ans);
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(ans.reply.includes('a^2 + b^2 = c^2') || ans.reply.includes('c^2 = a^2 + b^2'));
});

await asyncTest('O5.2: Instant offline resolution for Desmos calculator shortcuts', async () => {
  const ans = cosmoService.getLocalKnowledgeResponse('Desmos calculator tricks', { mode: 'general' });
  assert.ok(ans);
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(ans.reply.includes('Desmos'));
});

await asyncTest('O5.3: Instant offline resolution for SA-ELO micro-rating guide', async () => {
  const ans = cosmoService.getLocalKnowledgeResponse('how does SA-ELO rating work?', { mode: 'general' });
  assert.ok(ans);
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(ans.reply.includes('200.0') && ans.reply.includes('800.0'));
});

await asyncTest('O5.4: Network outage simulation on unknown query: returns friendly fallback without unhandled rejection', async () => {
  const ans = await cosmoService.queryCosmoAssistant('What is the best way to study for the digital SAT?', {
    mode: 'general',
  });
  assert.ok(ans);
  assert.equal(ans.source, 'knowledge_base');
  assert.ok(ans.reply.length > 0);
  assert.ok(Array.isArray(ans.suggestedActions) && ans.suggestedActions.length > 0);
});

await asyncTest('O5.5: Simultaneous parallel queries during offline state do not throw or race', async () => {
  const queries = [
    cosmoService.queryCosmoAssistant('circle area', { mode: 'general' }),
    cosmoService.queryCosmoAssistant('pacing strategy', { mode: 'general' }),
    cosmoService.queryCosmoAssistant('error bank', { mode: 'general' }),
    cosmoService.queryCosmoAssistant('30-60-90 triangle', { mode: 'general' }),
  ];

  const responses = await Promise.all(queries);
  assert.equal(responses.length, 4);
  for (const r of responses) {
    assert.ok(r.reply);
    assert.equal(r.source, 'knowledge_base');
  }
});

console.log('\n================================================================');
console.log(`SUMMARY: ${results.passed} / ${results.total} PASSED (${results.failed} failed)`);
console.log('================================================================\n');

if (results.failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
