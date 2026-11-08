# Cosmo AI Assistant Test Infrastructure & Quality Architecture

## 1. Test Philosophy: Opaque-Box & Requirement-Driven

The testing strategy for the Cosmo Universal AI Assistant is strictly **opaque-box** (black-box / specification-driven) and anchored directly to the user requirements in `ORIGINAL_REQUEST.md` and architectural specifications in `PROJECT.md`.

- **Specification as Oracle**: Every test verifies behavioral contracts, input/output mappings, and state transitions against the formal interfaces defined in `PROJECT.md` rather than coupling to internal implementation details.
- **Independence & Isolation**: Each test is hermetic, self-contained, sets up its own mock context/state, and produces no side effects or cross-test state leakage.
- **Progressive Testability**: The test harness gracefully accommodates progressive milestone implementation, utilizing runtime feature detection or modular bundling so that verified subsystems pass cleanly without false failures.
- **Adversarial Rigor**: In addition to happy paths, the suite subjects every interface to adversarial inputs (extreme strings, mathematical LaTeX edge cases, boundary quotas, route spoofing, offline network simulations).

---

## 2. Test Methodologies

### 2.1 Category-Partition Method
Input spaces and system contexts are systematically partitioned into discrete behavioral equivalence classes:
1. **Query Modes**:
   - `general`: Platform navigation, study strategies, formula lookups, score tiers.
   - `practice`: Socratic question guidance, multi-level hint ladders (Hint 1, Hint 2, Hint 3), answer checking.
   - `results`: Post-diagnostic analysis, mistake rationale, error review.
   - `mock`: Official Bluebook simulation conditions, silent exam lockout mode.
2. **Knowledge Domains**:
   - SAT Math: Algebra (`m-alg-1` to `m-alg-5`), Advanced Math (`m-adv-1` to `m-adv-3`), PSDA (`m-dat-1` to `m-dat-7`), Geometry & Trigonometry (`m-geo-1` to `m-geo-4`), Canonical Formulas.
   - SAT Reading & Writing: Craft & Structure (`rw-crf-1` to `rw-crf-3`), Information & Ideas (`rw-inf-1` to `rw-inf-3`), Standard English Conventions (`rw-sec-1` to `rw-sec-2`), Expression of Ideas (`rw-exp-1` to `rw-exp-2`).
   - Strategy: Pacing targets (80s Math, 65s RW), Desmos calculator mastery, Process of Elimination, Guessing strategies (zero wrong-answer penalty).
   - Platform: SA-ELO micro-rating (200.0–800.0), Error Bank auto-sync, 14-day Study Plan schedule, FlashRush mock tests.
3. **Mascot Behavioral States**:
   - `idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`.

### 2.2 Boundary Value Analysis (BVA)
Tests probe exact boundary conditions across all operational parameters:
- **Message Lengths**: Empty string `""`, whitespace only `"   \t\n"`, single character `"a"`, typical question (100–300 chars), maximum boundary (`1000` chars), over-limit (`1001` chars).
- **Context Payload**: Empty context `{}`, normal context (500 chars), threshold (`6000` chars), over-limit (`6001` chars).
- **SA-ELO Rating Scale**: Lower boundary `200.0`, default baseline `500.0`, section maximum `800.0`, composite bounds `400` to `1600`.
- **Message Quota**: Zero quota (`0` remaining), 1 remaining, full quota (`30` messages/day).
- **Hint Levels**: Uninitialized (`0`), Hint 1 (Direction/Concept), Hint 2 (Key Equation/Step), Hint 3 (Complete Strategy/Formula), Post-Hint 3 (Full Solution).

### 2.3 Pairwise Combinatorial Testing
Interaction matrices test pairwise orthogonal combinations of:
- `[Mode]` × `[Domain]` × `[Online/Offline Status]` × `[Quota State]`
- Ensures unexpected state combinations (e.g. offline query during practice mode with expired quota) degrade gracefully to deterministic fallback responses rather than unhandled rejections.

### 2.4 Real-World Student Workloads
Multi-step, stateful user journeys mirroring realistic student behaviors on SATBase:
1. **Onboarding & Exploration**: Student asks about score targets and SA-ELO tier mechanics.
2. **Curriculum Study**: Student looks up quadratic formulas and Desmos regression tricks.
3. **Active Practice**: Student works on a difficult Math question, requests Hint 1, requests Hint 2, checks a calculation step.
4. **Mock Exam Simulation**: Student begins a FlashRush mock exam; assistant enters exam mode and strictly locks responses.
5. **Post-Exam Review**: Student reviews missed questions in Error Bank; assistant provides Socratic diagnostic explanations.

---

## 3. Feature Coverage Targets (F1 – F11)

| Feature ID | Feature Name | Primary Target File | Min. Test Target | Verification Type |
|:---|:---|:---|:---:|:---|
| **F1** | Mascot CSS Animation System | `src/index.css` | 3 | Keyframe definitions (`@keyframes float`), motion utility classes, reduced-motion overrides |
| **F2** | Interactive SVG Mascot Component | `src/components/mascot/CosmoMascot.tsx` | 8 | 6 reactive states (`idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`), sizes (`xs`–`xl`), accessibility |
| **F3** | Floating Mascot Launcher Dock | `src/components/mascot/CosmoLauncher.tsx` | 4 | Collision-free positioning (`bottom-20 md:bottom-6`), click handler, open/closed states, unread badge |
| **F4** | SAT Curriculum Knowledge Base | `src/lib/cosmoKnowledge.ts` | 12 | 4 Math domains, formulas reference, 4 R&W domains, test strategies (Desmos, pacing, elimination) |
| **F5** | Platform Navigation Knowledge Base | `src/lib/cosmoKnowledge.ts` | 6 | SA-ELO rating system, FlashRush mocks, Error Bank, Study Plan guides |
| **F6** | Universal Assistant Engine & Fallback | `src/lib/cosmoAssistantService.ts` | 10 | Query resolution, context injection, instant offline local fallback, error code mapping |
| **F7** | Quick Action Pills Catalog | `src/lib/cosmoAssistantService.ts` / `cosmoKnowledge.ts` | 5 | Universal pills catalog, practice mode hint ladder (hints 1–3), contextual recommendations |
| **F8** | Universal Assistant Drawer UI | `src/components/ai/AITutorDrawer.tsx` | 4 | Synchronized mascot header, LaTeX/KaTeX formatting, responsive desktop/mobile drawer layout |
| **F9** | Global Mounting & Route Integration | `src/App.tsx` | 4 | Mount in app root, route/path tracking, silent lockout on `/mock-tests/flashrush` |
| **F10** | Comprehensive Automated Test Suite | `tests/cosmoAssistant.test.mjs` | Full Suite | 4 tiers, seamless integration into `node --test tests/*.test.mjs` |
| **F11** | Quality Gates & Verification | Repo-wide | 4 Gates | `check:tokens` (0 forbidden), `typecheck` (0 errors), `build` (success), `node --test` (100% pass) |

---

## 4. Test Suite Structure: 4-Tier Test Matrix

The test suite in `tests/cosmoAssistant.test.mjs` is structured into 4 distinct verification tiers:

### Tier 1: Feature Coverage (Core Capabilities)
- Mascot state machine validation (all 6 valid states: `idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`).
- Mascot size scale mappings (`xs`: 24px, `sm`: 32px, `md`: 44px, `lg`: 64px, `xl`: 96px, or custom number).
- SAT Curriculum coverage:
  - Math: Linear equations, quadratic equations, discriminant, exponent rules, circle formulas, trigonometry ratios.
  - Reading & Writing: Cross-text synthesis, transition words, sentence boundaries, punctuation rules.
  - Test Strategies: Pacing allocations (80s Math / 65s RW), Desmos calculator tricks, elimination heuristics.
  - Platform Knowledge: SA-ELO formula and tiers, Error Bank synchronization, Study Plan task generation.
- Universal Assistant Service core query handling and context ingestion.

### Tier 2: Boundary, Corner & Error Cases
- Empty string and whitespace-only query handling.
- Maximum character boundary enforcement (<=1000 characters).
- Context payload boundary enforcement (<=6000 characters).
- Unrecognized or nonsensical queries gracefully falling back with helpful suggestions.
- Mock mode lockout enforcement (`mode: 'mock'` or `currentPath: '/mock-tests/flashrush'`).
- Zero daily quota handling with fallback to platform FAQs.
- Network failure / offline fallback resilience (`source: 'knowledge_base'`).

### Tier 3: Cross-Feature Interactions
- Pacing strategy integrated with Desmos calculator workflows.
- Error bank mistake resolution connected to SA-ELO score tier progression.
- Practice arena question context feeding into the 3-level Socratic hint ladder.
- Mascot reactive state synchronization with query lifecycle (`idle` -> `thinking` -> `talking` -> `idle`).

### Tier 4: Real-World Student Workload Scenarios
- **Scenario A**: High-school student onboarding, discovering SA-ELO rating system and setting score goals.
- **Scenario B**: Hard algebra practice session utilizing progressive hints without answer spoiling.
- **Scenario C**: Mock exam attempt where Cosmo locks out to preserve testing integrity.
- **Scenario D**: Post-mock results analysis reviewing missed questions with Cosmo's diagnostic explanations.
- **Scenario E**: Offline study session where local knowledge base answers formulas and navigation without network connectivity.

---

## 5. Execution Environment & Harness Integration

- **Test Runner**: Node.js built-in test runner (`node:test`) and assertion library (`node:assert/strict`).
- **Compiler/Bundler**: `esbuild` in-memory ESM compilation for on-the-fly execution of TypeScript modules without requiring an external build step.
- **Execution Command**:
  ```powershell
  $env:PATH = "F:\Batyrbaev;" + $env:PATH
  node --test tests/cosmoAssistant.test.mjs
  ```
- **Unified Test Command**:
  ```powershell
  $env:PATH = "F:\Batyrbaev;" + $env:PATH
  node --test tests/*.test.mjs
  ```
- **Execution Performance**: Target total execution time for all test suites: `< 1500ms`.
