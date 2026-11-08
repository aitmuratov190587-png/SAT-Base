# Project: Cosmo Universal In-App AI Assistant & Interactive Mascot

## Architecture
- **Framework & Runtime**: Vite 6.0 SPA, React 18.3, TypeScript 5.6, Tailwind CSS 3.4 with Cosmo Notebook design tokens.
- **Mascot Engine**: Zero-dependency vector SVG + CSS keyframes React component (`CosmoMascot.tsx`) supporting 6 reactive states (`idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`) with responsive scaling and accessibility (`prefers-reduced-motion`).
- **Universal Assistant Engine**: 3-layer context pipeline (`cosmoKnowledge.ts`, `cosmoAssistantService.ts`) covering all 4 SAT Math domains, 4 SAT Reading & Writing domains, test strategies (Desmos, pacing, elimination), and SATBase platform navigation (SA-ELO, Mocks, Error Bank, Study Plan), with intelligent offline/local fallback and Supabase Edge Function Gemini integration.
- **Global UI Integration**: Root-mounted `<CosmoUniversalAssistant />` in `src/App.tsx` (wrapped by `<AppProvider>`). Collision-free floating positioning (`bottom-20 md:bottom-6 right-4 sm:right-6 z-40`) avoiding mobile tab bar (`h-16`) and dashboard layouts. Automatic exam mode lock on `/mock-tests/flashrush`.
- **Design Token Strictness**: 100% compliant with `scripts/check-tokens.mjs` (Cosmo Notebook tokens only, zero forbidden Tailwind scale classes or hardcoded hex).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | Mascot CSS Animation System | Define `@keyframes float` and motion classes in `src/index.css` for mascot floating physics across all app touchpoints | M1 | survey_1, survey_3 |
| F2 | Interactive SVG Mascot Component | Semantic SVG mascot (`CosmoMascot.tsx`) with 6 reactive states (`idle`, `hover`, `thinking`, `talking`, `celebrating`, `sleeping`), responsive sizes, and accessibility | M1 | survey_2, survey_3 |
| F3 | Floating Mascot Launcher Dock | Floating launcher FAB (`CosmoLauncher.tsx`) showing live animated Cosmo mascot with collision-free responsive positioning (`bottom-20 md:bottom-6`) | M1 | survey_1, survey_3 |
| F4 | SAT Curriculum Knowledge Base | Comprehensive in-memory knowledge index for all 4 Math domains, formulas, 4 R&W domains, and test strategies (`cosmoKnowledge.ts`) | M2 | survey_2 |
| F5 | Platform Navigation Knowledge Base | Feature guide for SA-ELO micro-rating, Bluebook mock tests, Error Bank, and Study Plan (`cosmoKnowledge.ts`) | M2 | survey_2, survey_3 |
| F6 | Universal Assistant Engine & Fallback | Context ingestion pipeline, prompt synthesizer, local offline fallback, and Edge Function dispatch with Gemini model cascade (`cosmoAssistantService.ts`) | M2 | survey_2 |
| F7 | Quick Action Pills Catalog | Universal quick action pills (concept explanation, formulas, Desmos tricks, pacing, platform tour, score analysis) and contextual practice hint ladder | M2 | survey_3 |
| F8 | Universal Assistant Drawer UI | Slide-over (desktop) and bottom-sheet (mobile) assistant panel (`CosmoAssistantDrawer.tsx`) with synchronized header mascot, math formatting, and ARIA accessibility | M3 | survey_1, survey_3 |
| F9 | Global Mounting & Route Integration | Root mounting in `src/App.tsx`, active view/route tracking, and mock exam quiet mode on `/mock-tests/flashrush` | M3 | survey_1, survey_2 |
| F10 | Comprehensive Automated Test Suite | Automated test suite in `tests/cosmoAssistant.test.mjs` covering mascot state machine, universal knowledge queries, mock test isolation, and quick actions | M4 | survey_1, survey_2, survey_3 |
| F11 | Quality Gates & Verification | Verify 100% pass across `tests/*.test.mjs`, `npm run check:tokens`, `npm run typecheck`, and `npm run build` | M4 | survey_1, survey_2, survey_3 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Mascot & CSS Motion Engine | F1, F2, F3: Define `@keyframes float`, build `<CosmoMascot />` and `<CosmoLauncher />` | none | DONE |
| M2 | Knowledge Base & AI Engine | F4, F5, F6, F7: Build `cosmoKnowledge.ts`, `cosmoAssistantService.ts`, and quick action system | none | DONE |
| M3 | Universal Assistant UI & App Integration | F8, F9: Upgrade `AITutorDrawer.tsx`, build `<CosmoUniversalAssistant />`, integrate in `App.tsx` | M1, M2 | DONE |
| M4 | Test Suite & E2E Hardening | F10, F11: Comprehensive automated tests, design token verification, build & typecheck validation | M1, M2, M3 | DONE |

## Interface Contracts

### Mascot State & Component (`CosmoMascot.tsx`)
```typescript
export type MascotState = 'idle' | 'hover' | 'thinking' | 'talking' | 'celebrating' | 'sleeping';

export interface CosmoMascotProps {
  state?: MascotState;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number; // xs: 24px, sm: 32px, md: 44px, lg: 64px, xl: 96px
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  showAura?: boolean;
}
```

### Knowledge Base & Assistant Service (`cosmoAssistantService.ts`)
```typescript
export interface CosmoQueryContext {
  mode: 'general' | 'practice' | 'results' | 'mock';
  currentPath?: string;
  questionId?: string;
  questionPrompt?: string;
  subjectDomain?: 'math' | 'reading-writing' | 'strategy' | 'platform';
  userScoreTarget?: number;
  currentElo?: number;
}

export interface CosmoAnswer {
  reply: string;
  source: 'ai_edge' | 'knowledge_base' | 'mock_locked';
  remainingQuota?: number;
  suggestedActions?: string[];
  error?: string;
}

export function queryCosmoAssistant(message: string, context: CosmoQueryContext): Promise<CosmoAnswer>;
export function getLocalKnowledgeResponse(query: string, context: CosmoQueryContext): CosmoAnswer | null;
```

### Floating Launcher & Assistant (`CosmoUniversalAssistant.tsx`)
```typescript
export interface CosmoUniversalAssistantProps {
  className?: string;
}
```

## Code Layout
- `src/components/mascot/CosmoMascot.tsx`: Vector SVG mascot component with 6 reactive states.
- `src/components/mascot/CosmoLauncher.tsx`: Floating FAB / launcher button with animated mascot.
- `src/components/ai/CosmoUniversalAssistant.tsx`: Root-level universal assistant wrapper.
- `src/components/ai/AITutorDrawer.tsx`: Upgraded universal + contextual assistant panel.
- `src/lib/cosmoKnowledge.ts`: Static in-memory curriculum & platform knowledge index.
- `src/lib/cosmoAssistantService.ts`: Context pipeline, local fallback logic, edge API caller.
- `src/index.css`: Added `@keyframes float`, `.animate-float`, and mascot motion classes.
- `src/App.tsx`: Mounts `<CosmoUniversalAssistant />`.
- `tests/cosmoAssistant.test.mjs`: Automated unit and integration test suite.
