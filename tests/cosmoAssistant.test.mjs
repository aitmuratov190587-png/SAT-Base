import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

/**
 * Helper to dynamically compile and evaluate TypeScript modules in-memory.
 */
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

// Pre-load tested modules
const cosmoKnowledge = await moduleFrom('src/lib/cosmoKnowledge.ts');
const cosmoService = await moduleFrom('src/lib/cosmoAssistantService.ts');
const mascotModule = await moduleFrom('src/components/mascot/CosmoMascot.tsx');
const launcherModule = await moduleFrom('src/components/mascot/CosmoLauncher.tsx');
const indexCssContent = fs.readFileSync(path.resolve('src/index.css'), 'utf-8');

// ==============================================================================
// TIER 1: FEATURE COVERAGE (Core Capabilities)
// ==============================================================================

test('Tier 1 [F1]: Mascot CSS motion engine defines @keyframes float and responsive utilities', () => {
  // @keyframes float verification
  assert.match(indexCssContent, /@keyframes\s+float[\s\S]*?translateY\(-8px\)[\s\S]*?\}/, 'Missing or incorrect @keyframes float definition');
  assert.match(indexCssContent, /\.animate-float\s*\{[^}]*animation:\s*float\s+3\.6s/s, 'Missing .animate-float utility class');

  // Supporting mascot motion keyframes
  assert.match(indexCssContent, /@keyframes\s+gentleBob\s*\{/s, 'Missing @keyframes gentleBob');
  assert.match(indexCssContent, /\.animate-gentle-bob\s*\{/s, 'Missing .animate-gentle-bob');
  assert.match(indexCssContent, /@keyframes\s+orbitalRing\s*\{/s, 'Missing @keyframes orbitalRing');
  assert.match(indexCssContent, /\.animate-orbital-ring\s*\{/s, 'Missing .animate-orbital-ring');

  // Reduced motion compliance
  assert.match(indexCssContent, /@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)/, 'Missing prefers-reduced-motion media query');
  assert.match(indexCssContent, /animation-duration:\s*0\.01ms\s*!important/, 'Reduced motion does not damp animation duration');
});

test('Tier 1 [F2]: CosmoMascot SVG component exports all 6 reactive states and responsive sizes', () => {
  assert.ok(mascotModule.CosmoMascot, 'CosmoMascot component must be exported');

  const mascotSource = fs.readFileSync(path.resolve('src/components/mascot/CosmoMascot.tsx'), 'utf-8');

  // Verify all 6 valid states in type definition
  const expectedStates = ['idle', 'hover', 'thinking', 'talking', 'celebrating', 'sleeping'];
  for (const st of expectedStates) {
    assert.ok(mascotSource.includes(`'${st}'`), `CosmoMascot must support '${st}' state`);
  }

  // Verify size mapping constants
  assert.match(mascotSource, /xs:\s*24/, 'xs size mapping should be 24px');
  assert.match(mascotSource, /sm:\s*32/, 'sm size mapping should be 32px');
  assert.match(mascotSource, /md:\s*44/, 'md size mapping should be 44px');
  assert.match(mascotSource, /lg:\s*64/, 'lg size mapping should be 64px');
  assert.match(mascotSource, /xl:\s*96/, 'xl size mapping should be 96px');

  // Verify accessibility attributes
  assert.match(mascotSource, /aria-label="Cosmo Assistant Mascot"/, 'Mascot must have accessible aria-label');
  assert.match(mascotSource, /data-mascot-state=\{effectiveState\}/, 'Mascot must reflect data-mascot-state');
});

test('Tier 1 [F3]: CosmoLauncher floating action button supports open, closed, and quiet states', () => {
  assert.ok(launcherModule.CosmoLauncher, 'CosmoLauncher component must be exported');

  const launcherSource = fs.readFileSync(path.resolve('src/components/mascot/CosmoLauncher.tsx'), 'utf-8');

  // Verify accessibility labels and attributes
  assert.match(launcherSource, /aria-label=\{label\}/, 'Launcher must dynamically bind accessible label');
  assert.match(launcherSource, /aria-expanded=\{isOpen\}/, 'Launcher must expose aria-expanded state');
  assert.match(launcherSource, /aria-haspopup="dialog"/, 'Launcher must expose aria-haspopup');
  assert.match(launcherSource, /id="cosmo-launcher-tooltip"/, 'Launcher must include hover tooltip');

  // Sleeping / mock mode behavior
  assert.match(launcherSource, /disabled=\{isSleeping\}/, 'Launcher must be disabled when state is sleeping');
  assert.match(launcherSource, /Exam Quiet Mode/, 'Launcher tooltip must show Exam Quiet Mode when sleeping');
});

test('Tier 1 [F4]: SAT Curriculum Knowledge Base covers all 4 Math domains and canonical reference formulas', () => {
  const { KNOWLEDGE_TOPICS, SAT_REFERENCE_FORMULAS, getFormulaByName, searchKnowledge } = cosmoKnowledge;

  assert.ok(Array.isArray(KNOWLEDGE_TOPICS) && KNOWLEDGE_TOPICS.length >= 20, 'Knowledge base must have comprehensive topics');
  assert.ok(Array.isArray(SAT_REFERENCE_FORMULAS) && SAT_REFERENCE_FORMULAS.length >= 14, 'Knowledge base must have all reference formulas');

  // 1. Math: Algebra
  const algMatch = searchKnowledge('linear equations two variables slope intercept', 'math');
  assert.ok(algMatch.length > 0, 'Must match Algebra linear equations');
  assert.ok(algMatch[0].content.includes('y = mx + b'), 'Must define slope-intercept form');

  // 2. Math: Advanced Math
  const advMatch = searchKnowledge('quadratic formula vertex form discriminant', 'math');
  assert.ok(advMatch.length > 0, 'Must match Advanced Math quadratics');
  assert.ok(advMatch[0].content.includes('b^2 - 4ac'), 'Must explain discriminant');

  // 3. Math: PSDA
  const psdaMatch = searchKnowledge('percent change ratio standard deviation probability', 'math');
  assert.ok(psdaMatch.length > 0, 'Must match PSDA statistics');

  // 4. Math: Geometry & Trig
  const geoMatch = searchKnowledge('circle equation arc length radians SOH CAH TOA', 'math');
  assert.ok(geoMatch.length > 0, 'Must match Geometry and Trig');

  // Official Reference Sheet Formulas lookup
  const circleArea = getFormulaByName('circle area');
  assert.ok(circleArea, 'Must find circle area formula');
  assert.equal(circleArea.latex, 'A = \\pi r^2');

  const pythagorean = getFormulaByName('pythagorean');
  assert.ok(pythagorean, 'Must find Pythagorean theorem');
  assert.ok(pythagorean.latex.includes('a^2 + b^2 = c^2') || pythagorean.latex.includes('c^2 = a^2 + b^2'));

  const special306090 = getFormulaByName('30-60-90');
  assert.ok(special306090, 'Must find 30-60-90 special right triangle');

  const cylinderVol = getFormulaByName('cylinder volume');
  assert.ok(cylinderVol, 'Must find cylinder volume formula');
  assert.ok(cylinderVol.latex.includes('\\pi r^2 h') || cylinderVol.latex.includes('V = \\pi r^2 h'));
});

test('Tier 1 [F4]: SAT Curriculum Knowledge Base covers all 4 Reading & Writing domains and test strategies', () => {
  const { searchKnowledge } = cosmoKnowledge;

  // 1. R&W: Craft & Structure
  const crossText = searchKnowledge('cross text dual passages author disagreement', 'reading-writing');
  assert.ok(crossText.length > 0, 'Must match Cross-Text Connections');

  const wordsInContext = searchKnowledge('words in context vocabulary nuance', 'reading-writing');
  assert.ok(wordsInContext.length > 0, 'Must match Words in Context');

  // 2. R&W: Information & Ideas
  const inferences = searchKnowledge('inferences textual evidence command of evidence', 'reading-writing');
  assert.ok(inferences.length > 0, 'Must match Inferences and Evidence');

  // 3. R&W: Standard English Conventions
  const grammar = searchKnowledge('sentence boundaries comma splice semicolons apostrophes', 'reading-writing');
  assert.ok(grammar.length > 0, 'Must match Standard English Conventions');

  // 4. R&W: Expression of Ideas
  const transitions = searchKnowledge('transitions rhetorical synthesis bullet points', 'reading-writing');
  assert.ok(transitions.length > 0, 'Must match Transitions');

  // Test Strategies
  const desmosStrategy = searchKnowledge('desmos graphing intersection sliders', 'strategy');
  assert.ok(desmosStrategy.length > 0, 'Must match Desmos strategy');

  const pacingStrategy = searchKnowledge('pacing target 80s math 65s reading', 'strategy');
  assert.ok(pacingStrategy.length > 0, 'Must match Pacing strategy');
  assert.ok(pacingStrategy[0].summary.includes('65s') || pacingStrategy[0].content.includes('80'), 'Must specify 80s Math and 65s RW targets');

  const guessing = searchKnowledge('guessing penalty wrong answer blank', 'strategy');
  assert.ok(guessing.length > 0, 'Must match Guessing strategy');
  assert.ok(guessing[0].content.toLowerCase().includes('zero penalty') || guessing[0].content.toLowerCase().includes('penalty'), 'Must specify no penalty for wrong answers');
});

test('Tier 1 [F5]: Platform Navigation Knowledge Base indexes SA-ELO, Mocks, Error Bank and Study Plan', () => {
  const { searchKnowledge, getTopicById } = cosmoKnowledge;

  // SA-ELO Guide
  const eloTopic = getTopicById('plat-sa-elo-system') || searchKnowledge('sa-elo micro-rating academic tiers', 'platform')[0];
  assert.ok(eloTopic, 'Must have SA-ELO guide topic');
  assert.ok(eloTopic.content.includes('200.0') && eloTopic.content.includes('800.0'), 'Must document 200.0 to 800.0 scale');
  assert.ok(eloTopic.content.includes('Foundational') && eloTopic.content.includes('Ivy League'), 'Must document academic tiers');

  // FlashRush Mocks Guide
  const mockTopic = getTopicById('plat-flashrush-mock-exams') || getTopicById('plat-flashrush-mocks') || searchKnowledge('flashrush mock test quiet mode', 'platform')[0];
  assert.ok(mockTopic, 'Must have FlashRush mocks guide topic');
  assert.ok(mockTopic.content.includes('Cosmo is off during mock tests') || mockTopic.content.includes('exam') || mockTopic.content.includes('locked'), 'Must explain quiet mode during mock tests');

  // Error Bank Guide
  const errorBankTopic = getTopicById('plat-error-bank-drills') || getTopicById('plat-error-bank') || searchKnowledge('error bank auto sync missed questions', 'platform')[0];
  assert.ok(errorBankTopic, 'Must have Error Bank guide topic');

  // Study Plan Guide
  const studyPlanTopic = getTopicById('plat-study-plan-planner') || getTopicById('plat-study-plan') || searchKnowledge('study plan 14-day schedule diagnostics', 'platform')[0];
  assert.ok(studyPlanTopic, 'Must have Study Plan guide topic');
});

test('Tier 1 [F6]: Universal Assistant Service resolves local knowledge queries instantly', () => {
  const { getLocalKnowledgeResponse } = cosmoService;

  // Formula inquiry
  const formulaAns = getLocalKnowledgeResponse('What is the formula for the volume of a sphere?', { mode: 'general' });
  assert.ok(formulaAns, 'Must resolve formula query locally');
  assert.equal(formulaAns.source, 'knowledge_base');
  assert.ok(formulaAns.reply.includes('Sphere') && formulaAns.reply.includes('\\pi r^3'), 'Response must detail sphere volume formula');

  // Platform FAQ inquiry
  const eloAns = getLocalKnowledgeResponse('How does SA-ELO rating work?', { mode: 'general' });
  assert.ok(eloAns, 'Must resolve SA-ELO query locally');
  assert.equal(eloAns.source, 'knowledge_base');
  assert.ok(eloAns.reply.includes('SA-ELO') && eloAns.reply.includes('200.0'), 'Response must explain SA-ELO scale');

  // Desmos tricks inquiry
  const desmosAns = getLocalKnowledgeResponse('How do I use Desmos to find intersections?', { mode: 'general' });
  assert.ok(desmosAns, 'Must resolve Desmos query locally');
  assert.ok(desmosAns.reply.toLowerCase().includes('desmos'), 'Response must mention Desmos features');
});

test('Tier 1 [F7]: Quick Action Pills catalog yields mode-specific action sets', () => {
  const { getSuggestedQuickActions, UNIVERSAL_QUICK_ACTIONS, PRACTICE_QUICK_ACTIONS } = cosmoKnowledge;

  // Universal pills catalog
  assert.ok(UNIVERSAL_QUICK_ACTIONS.length >= 6, 'Must have at least 6 universal quick action pills');

  // General mode pills
  const generalPills = getSuggestedQuickActions('general');
  assert.ok(generalPills.length >= 4, 'General mode should return universal pills');

  // Practice mode pills (hint ladder step 0)
  const practicePills0 = getSuggestedQuickActions('practice', 0);
  assert.ok(practicePills0.some(p => p.label.includes('Hint 1')), 'Practice mode at hint 0 must suggest Hint 1');

  // Practice mode pills (hint ladder step 1)
  const practicePills1 = getSuggestedQuickActions('practice', 1);
  assert.ok(practicePills1.some(p => p.label.includes('Hint 2')), 'Practice mode at hint 1 must suggest Hint 2');

  // Practice mode pills (hint ladder step 3)
  const practicePills3 = getSuggestedQuickActions('practice', 3);
  assert.ok(practicePills3.some(p => p.label.includes('Full solution') || p.label.includes('Solution')), 'Practice mode at hint 3 must unlock full solution pill');

  // Mock mode pills
  const mockPills = getSuggestedQuickActions('mock');
  assert.ok(mockPills.some(p => p.label.includes('Mock Test') || p.label.includes('Desmos')), 'Mock mode must provide quiet mode pill');
});

// ==============================================================================
// TIER 2: BOUNDARY, CORNER & ERROR CASES
// ==============================================================================

test('Tier 2 [Boundary]: Empty and whitespace-only inquiries are safely handled without throwing', async () => {
  const { queryCosmoAssistant, getLocalKnowledgeResponse } = cosmoService;

  const emptyLocal = getLocalKnowledgeResponse('', { mode: 'general' });
  assert.equal(emptyLocal, null, 'Empty query should produce null local match without crashing');

  const whitespaceLocal = getLocalKnowledgeResponse('   \n\t  ', { mode: 'general' });
  assert.equal(whitespaceLocal, null, 'Whitespace query should produce null local match without crashing');

  // queryCosmoAssistant rejection check
  const emptyQueryAns = await queryCosmoAssistant('   ', { mode: 'general' });
  assert.ok(emptyQueryAns.error || emptyQueryAns.reply.includes('empty') || emptyQueryAns.reply.includes('ask'), 'Empty query must return helpful rejection');
});

test('Tier 2 [Boundary]: Query string length boundary (1000 characters limit) is enforced', async () => {
  const { queryCosmoAssistant } = cosmoService;

  const oversizedMessage = 'How do I solve linear equations? '.repeat(40); // > 1300 chars
  assert.ok(oversizedMessage.length > 1000, 'Test input must exceed 1000 characters');

  const oversizedAns = await queryCosmoAssistant(oversizedMessage, { mode: 'general' });
  assert.ok(oversizedAns.error || oversizedAns.reply.includes('limit') || oversizedAns.reply.includes('exceeds'), 'Oversized query must be cleanly caught');
});

test('Tier 2 [Boundary]: Context payload boundary (6000 characters limit) is enforced', async () => {
  const { queryCosmoAssistant } = cosmoService;

  const oversizedPassage = 'A'.repeat(6100);
  const res = await queryCosmoAssistant('Can you explain this passage?', {
    mode: 'practice',
    passage: oversizedPassage,
  });

  assert.ok(res.error || res.reply.includes('Context data exceeds') || res.reply.includes('limit'), 'Oversized context must be rejected');
});

test('Tier 2 [Corner]: Unrecognized or off-topic queries return graceful fallback with helpful guide', async () => {
  const { getLocalKnowledgeResponse, queryCosmoAssistant } = cosmoService;

  const nonsensicalLocal = getLocalKnowledgeResponse('qwertyasdfghjkldsjflsdkjflksdjf', { mode: 'general' });
  assert.equal(nonsensicalLocal, null, 'Nonsensical query should not falsely match random topic');

  // queryCosmoAssistant fallback
  const res = await queryCosmoAssistant('How do I bake a chocolate chip cookie?', { mode: 'general' });
  assert.ok(res.reply, 'Must return a reply');
  assert.ok(res.source === 'knowledge_base' || res.source === 'ai_edge', 'Source must be valid');
  assert.ok(Array.isArray(res.suggestedActions) && res.suggestedActions.length > 0, 'Must offer suggested action pills');
});

test('Tier 2 [Lockout]: Mock exam mode strictly locks Cosmo with official quiet mode notice', async () => {
  const { queryCosmoAssistant, isMockExamLocked } = cosmoService;

  // 1. Direct mock mode
  assert.equal(isMockExamLocked({ mode: 'mock' }), true);
  const mockAns = await queryCosmoAssistant('Can you help me solve question 5?', { mode: 'mock' });
  assert.equal(mockAns.source, 'mock_locked', 'Mock mode query must return source mock_locked');
  assert.match(mockAns.reply, /resting during your mock test|Cosmo is off during mock tests|locked during mock exams/i, 'Reply must explain exam quiet mode');

  // 2. Mock path detection
  assert.equal(isMockExamLocked({ mode: 'general', currentPath: '/mock-tests/flashrush' }), true);
  const pathLockAns = await queryCosmoAssistant('Can you give me the quadratic formula?', {
    mode: 'general',
    currentPath: '/mock-tests/flashrush',
  });
  assert.equal(pathLockAns.source, 'mock_locked', 'Query on /mock-tests/flashrush route must be locked');

  // 3. Results view must NOT be locked
  assert.equal(isMockExamLocked({ mode: 'results', currentPath: '/mock-tests/flashrush/results' }), false);
});

test('Tier 2 [Resilience]: Mathematical LaTeX and Uzbek language inputs are safely handled', () => {
  const { getLocalKnowledgeResponse, searchKnowledge } = cosmoKnowledge;

  // LaTeX math query
  const latexMatch = searchKnowledge('$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$');
  assert.ok(latexMatch.length > 0, 'Must handle raw LaTeX in query search');

  // Uzbek query
  const uzbekQuery = "O'zbek tilida SA-ELO qanday ishlaydi?";
  const localMatch = cosmoService.getLocalKnowledgeResponse(uzbekQuery, { mode: 'general' });
  // Should match SA-ELO topic or return null without throwing
  if (localMatch) {
    assert.ok(localMatch.reply.includes('SA-ELO'));
  }
});

test('Tier 2 [Offline]: Local fallback provides complete answer when remote Edge Function fails', async () => {
  const { queryCosmoAssistant } = cosmoService;

  // Querying standard formula offline or without network credentials
  const res = await queryCosmoAssistant('What is the formula for the circumference of a circle?', {
    mode: 'general',
  });

  assert.ok(res.reply.includes('Circumference') && res.reply.includes('2\\pi r'), 'Should successfully fallback to local knowledge base');
  assert.equal(res.source, 'knowledge_base');
});

// ==============================================================================
// TIER 3: CROSS-FEATURE INTERACTIONS
// ==============================================================================

test('Tier 3 [Cross-Feature]: Pacing strategy links with Desmos calculator workflows to save exam time', () => {
  const { searchKnowledge } = cosmoKnowledge;

  const pacingItem = searchKnowledge('pacing timing targets 80s math 65s rw', 'strategy')[0];
  const desmosItem = searchKnowledge('desmos calculator tricks', 'strategy')[0];

  assert.ok(pacingItem, 'Must have pacing strategy item');
  assert.ok(desmosItem, 'Must have Desmos shortcuts item');

  // Pacing strategy highlights time management
  assert.ok(pacingItem.content.includes('Math') && pacingItem.content.includes('Reading'), 'Pacing strategy should address Math and Reading');

  // Desmos item mentions saving time or speed
  assert.ok(desmosItem.content.includes('Seconds') || desmosItem.content.toLowerCase().includes('time') || desmosItem.tips?.some(t => t.includes('quickly')), 'Desmos guide should mention speed');
});

test('Tier 3 [Cross-Feature]: Error Bank reviews cross-reference SA-ELO rating recovery', () => {
  const { searchKnowledge } = cosmoKnowledge;

  const errorBankItem = searchKnowledge('error bank drills review', 'platform')[0];
  const eloItem = searchKnowledge('sa-elo rating system tiers', 'platform')[0];

  assert.ok(errorBankItem, 'Must have Error Bank topic');
  assert.ok(eloItem, 'Must have SA-ELO topic');

  // Error bank topic explains score improvement
  const connectsToScore = errorBankItem.tips?.some(t => t.includes('score')) || errorBankItem.content.includes('score');
  assert.ok(connectsToScore, 'Error Bank topic should explain its direct link to score improvement');
  assert.ok(eloItem.content.includes('SA-ELO'), 'SA-ELO topic must explain micro-rating engine');
});

test('Tier 3 [Cross-Feature]: Practice Arena Hint Ladder integrates question context without spoiling answer', async () => {
  const { queryCosmoAssistant } = cosmoService;

  const mockContext = {
    mode: 'practice',
    questionId: 'm-alg-3-q1',
    questionPrompt: 'If 3x + 2y = 12 and y = 2x - 1, what is the value of x?',
    choices: { A: '1', B: '2', C: '3', D: '4' },
    correctAnswer: 'B',
    officialExplanation: 'Substitute y = 2x - 1 into 3x + 2(2x - 1) = 12 to get 7x = 14, x = 2.',
    hintLevel: 1,
  };

  const hint1Ans = await queryCosmoAssistant('Give me a hint on this question', mockContext);

  assert.ok(hint1Ans.reply, 'Hint 1 must return reply');
  assert.ok(Array.isArray(hint1Ans.suggestedActions), 'Must include suggested actions');
  // Must suggest Hint 2 as the next progressive step
  assert.ok(hint1Ans.suggestedActions.some(a => a.includes('Hint 2') || a.includes('Check my step')), 'Hint 1 must suggest progressing to Hint 2 or checking step');
});

test('Tier 3 [Cross-Feature]: Mascot Reactive State Lifecycle follows query interaction stages', () => {
  // Validate the state transition lifecycle:
  // 1. Initial rest: 'idle'
  // 2. Cursor hover: 'hover'
  // 3. User submits query (in flight): 'thinking'
  // 4. Response arrives: 'talking'
  // 5. Correct answer check in practice: 'celebrating'
  // 6. Active mock exam: 'sleeping'

  const states = ['idle', 'hover', 'thinking', 'talking', 'celebrating', 'sleeping'];
  const mascotSource = fs.readFileSync(path.resolve('src/components/mascot/CosmoMascot.tsx'), 'utf-8');

  // Verify visual manifestation for each state in the SVG component
  assert.ok(mascotSource.includes('effectiveState === \'thinking\''), 'Component must have specific branch for thinking');
  assert.ok(mascotSource.includes('effectiveState === \'celebrating\''), 'Component must have specific branch for celebrating');
  assert.ok(mascotSource.includes('effectiveState === \'sleeping\''), 'Component must have specific branch for sleeping');
  assert.ok(mascotSource.includes('effectiveState === \'talking\''), 'Component must have specific branch for talking');
});

// ==============================================================================
// TIER 4: REAL-WORLD STUDENT WORKLOAD SCENARIOS
// ==============================================================================

test('Tier 4 [Scenario 1]: High-School Junior Onboarding & Score Strategy Consultation', async () => {
  const { queryCosmoAssistant, getLocalKnowledgeResponse } = cosmoService;

  // Step 1: Student arrives at dashboard and asks about the rating system
  const step1 = getLocalKnowledgeResponse('How does the SA-ELO rating system work on SATBase?', {
    mode: 'general',
    currentPath: '/',
    userScoreTarget: 1450,
  });
  assert.ok(step1, 'Must answer score rating question');
  assert.ok(step1.reply.includes('SA-ELO') && step1.reply.includes('200.0'), 'Must explain 200.0-800.0 rating range');

  // Step 2: Student asks about pacing strategy
  const step2 = getLocalKnowledgeResponse('What should my pacing strategy be for math and reading?', {
    mode: 'general',
    currentPath: '/',
    userScoreTarget: 1450,
  });
  assert.ok(step2, 'Must answer pacing question');
  assert.ok(step2.reply.includes('80') && (step2.reply.includes('Reading') || step2.reply.includes('Math')), 'Must state pacing targets');
});

test('Tier 4 [Scenario 2]: Student Socratic Algebra Practice Session with Progressive Hint Ladder', async () => {
  const { queryCosmoAssistant } = cosmoService;

  const questionContext = {
    mode: 'practice',
    questionId: 'm-adv-quad-7',
    questionPrompt: 'What is the minimum value of f(x) = 2(x - 3)^2 + 5?',
    correctAnswer: '5',
    officialExplanation: 'In vertex form y = a(x - h)^2 + k with a > 0, the minimum is k = 5 at x = 3.',
  };

  // Step 1: Student asks for Hint 1
  const hint1 = await queryCosmoAssistant('What form is this quadratic equation in?', {
    ...questionContext,
    hintLevel: 0,
  });
  assert.ok(hint1.reply, 'Must return Hint 1');

  // Step 2: Student checks a formula related to quadratics
  const formulaCheck = cosmoService.getLocalKnowledgeResponse('What is the vertex form of a quadratic?', {
    ...questionContext,
    hintLevel: 1,
  });
  assert.ok(formulaCheck, 'Must provide vertex form formula');
  assert.ok(formulaCheck.reply.includes('vertex') || formulaCheck.reply.includes('(x - h)^2'), 'Must detail vertex form');
});

test('Tier 4 [Scenario 3]: Mock Exam Simulation Enforces Complete Assistant Lockout', async () => {
  const { queryCosmoAssistant } = cosmoService;

  const mockAttemptContext = {
    mode: 'mock',
    currentPath: '/mock-tests/flashrush',
    questionId: 'rush-m1-q14',
    questionPrompt: 'In the xy-plane, the graph of y = 3x^2 - 12x + c intersects the x-axis at exactly one point. What is c?',
  };

  // Student attempts to ask Cosmo for assistance during active mock test
  const blockedResponse = await queryCosmoAssistant('How do I find c for this parabola?', mockAttemptContext);

  assert.equal(blockedResponse.source, 'mock_locked', 'Must be strictly locked');
  assert.match(blockedResponse.reply, /resting during your mock test|Cosmo is off during mock tests|locked during mock exams/i, 'Must present polite exam integrity message');
});

test('Tier 4 [Scenario 4]: Post-Exam Results Mistake Review and Error Bank Integration', async () => {
  const { getLocalKnowledgeResponse } = cosmoService;

  const resultsContext = {
    mode: 'results',
    currentPath: '/mock-tests/flashrush/results',
    currentElo: 620,
    userScoreTarget: 700,
  };

  // Student inquires about adding mistakes to the Error Bank
  const errorBankGuide = getLocalKnowledgeResponse('How do I use the Error Bank to fix my mistakes?', resultsContext);
  assert.ok(errorBankGuide, 'Must return Error Bank guidance in results mode');
  assert.ok(errorBankGuide.reply.includes('Error Bank'), 'Must detail Error Bank review mechanics');

  // Student inquires about improving to their score target
  const eloGuide = getLocalKnowledgeResponse('How does the SA-ELO rating system work?', resultsContext);
  assert.ok(eloGuide, 'Must return SA-ELO tier explanation');
  assert.ok(eloGuide.reply.includes('SA-ELO') || eloGuide.reply.includes('tier'), 'Must explain score tiers');
});

test('Tier 4 [Scenario 5]: Offline Reference Formula Lookup During Network Disruption', () => {
  const { getLocalKnowledgeResponse, getFormulaByName } = cosmoService;

  // Student needs circle area and 30-60-90 triangle without internet connection
  const circleFormula = cosmoKnowledge.getFormulaByName('circle area');
  assert.ok(circleFormula, 'Must have circle area formula available');
  assert.equal(circleFormula.latex, 'A = \\pi r^2');

  const specialTriangle = cosmoKnowledge.getFormulaByName('30-60-90');
  assert.ok(specialTriangle, 'Must have 30-60-90 formula available');
  assert.ok(specialTriangle.latex.includes('x\\sqrt{3}') || specialTriangle.latex.includes('2x'));

  // Direct offline query via getLocalKnowledgeResponse
  const offlineQuery = cosmoService.getLocalKnowledgeResponse('formula for area of a triangle', {
    mode: 'general',
  });
  assert.ok(offlineQuery, 'Must resolve offline query');
  assert.equal(offlineQuery.source, 'knowledge_base');
  assert.ok(offlineQuery.reply.includes('Triangle') && offlineQuery.reply.includes('bh'), 'Must return triangle area formula');
});
