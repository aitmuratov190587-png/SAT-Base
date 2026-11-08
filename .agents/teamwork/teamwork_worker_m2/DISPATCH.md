## 2026-11-07T18:44:31Z
You are Worker 2 for Milestone 2: Universal Knowledge Base & AI Engine.
Your identity: teamwork_worker
Your working directory: f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m2\
Original request path: f:\Batyrbaev\SAT-Base\.agents\teamwork\ORIGINAL_REQUEST.md
Scope documents:
- f:\Batyrbaev\SAT-Base\PROJECT.md
- f:\Batyrbaev\SAT-Base\.agents\teamwork\sub_orch_m2\SCOPE.md
Investigation findings:
- f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_explorer_survey_2\handoff.md

You MUST read f:\Batyrbaev\SAT-Base\.agents\teamwork\ORIGINAL_REQUEST.md before starting work.
Keep progress.md updated in your working directory with a "Last visited: [timestamp]" header.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Execution Environment note:
Node and npm are located at F:\Batyrbaev\. When running commands in powershell, prepend:
$env:PATH = "F:\Batyrbaev;" + $env:PATH

Exclusive File Ownership:
- src/lib/cosmoKnowledge.ts
- src/lib/cosmoAssistantService.ts

Design Token Rule:
Strictly adhere to Cosmo Notebook tokens (bg-paper, bg-surface, bg-paper-2, text-ink, text-ink-2, border-line, moss, mustard, berry, cobalt, accent). NEVER use default Tailwind scales or hex codes. Running `node scripts/check-tokens.mjs` MUST pass with 0 forbidden classes.

Tasks:
1. Implement `src/lib/cosmoKnowledge.ts`:
   - Comprehensive in-memory knowledge base indexing:
     - All 4 SAT Math domains: Algebra (linear equations, systems, inequalities), Advanced Math (quadratics, exponents, functions), PSDA (rates, percentages, scatterplots, statistics, probability), Geometry & Trigonometry (formulas, circles, right triangles, SOH-CAH-TOA).
     - Official SAT Math Reference Sheet formulas ($A=\pi r^2$, $c^2=a^2+b^2$, special right triangles, volumes $V=lwh, \pi r^2h, \frac{4}{3}\pi r^3$).
     - All 4 SAT Reading & Writing domains: Craft and Structure (cross-text, text structure, words in context), Information and Ideas (central ideas, textual/quantitative evidence, inferences), Standard English Conventions (boundaries, punctuation, subject-verb), Expression of Ideas (transitions, rhetorical synthesis).
     - Test Strategies: Official Desmos tips (graphing intersections, regression, sliders), question pacing (80s Math / 65s RW targets), elimination strategies, guessing rules (no wrong answer penalty).
     - Platform Navigation Guide: 10x micro-scaled SA-ELO rating system (Foundational to Ivy League tiers), Bluebook mock exams (FlashRush), Error Bank drills, dynamic 14-day Study Plan.
     - Quick Action Pills Catalog (Universal: concept explanations, math formulas, Desmos tricks, pacing strategy, platform tour, score analysis; Practice: hints 1-3, step checker, full solution).
2. Implement `src/lib/cosmoAssistantService.ts`:
   - 3-Layer context ingestion: Knowledge Base (Layer 1) + User Telemetry (Layer 2) + Active Route/Question Context (Layer 3).
   - Fast local response resolver (`getLocalKnowledgeResponse`): instantly answers platform FAQs, formulas, pacing rules, and curriculum definitions without burning daily API quota or when offline/network failure occurs.
   - Remote AI resolver (`queryCosmoAssistant`): connects to the Supabase `tutor` edge function / Gemini API with structured prompt composition, handling quota exhaustion (30 msgs/day), rate limits, and fallback.
   - Socratic practice mode guard: strictly upholds hint levels and avoids spoiling answers during practice.
   - Exam mode lock: detects mock exam conditions (`/mock-tests/flashrush`) and returns polite exam integrity lock reply.
3. Verify your implementation:
   - Run `node scripts/check-tokens.mjs` (must pass with 0 errors).
   - Run `npx tsc -p tsconfig.app.json --noEmit` (must pass with 0 errors).
   - Run `node --test tests/*.test.mjs` (must pass cleanly).
4. Document changes and test results in f:\Batyrbaev\SAT-Base\.agents\teamwork\teamwork_worker_m2\handoff.md and notify orchestrator via send_message.
