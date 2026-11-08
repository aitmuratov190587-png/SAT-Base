# Scope: Milestone 2 — Knowledge Base & AI Engine

## Architecture
- Build comprehensive in-memory knowledge base (`src/lib/cosmoKnowledge.ts`) covering all 4 SAT Math domains (Algebra, Advanced Math, PSDA, Geometry/Trig), canonical formulas, 4 SAT Reading & Writing domains, test strategies (Desmos, pacing, elimination, guessing), and SATBase platform navigation (SA-ELO, Mocks, Error Bank, Study Plan).
- Build universal assistant service (`src/lib/cosmoAssistantService.ts`) providing 3-layer context ingestion, prompt composition, offline local fallback for platform/formula inquiries, Edge Function dispatch with Gemini model cascade, and error recovery.
- Define quick actions catalog (universal pills + practice hint ladder).
- Strictly adhere to Cosmo Notebook design tokens and TypeScript type safety.

## Code Layout Ownership
- `src/lib/cosmoKnowledge.ts`: Comprehensive SAT domains and platform knowledge base.
- `src/lib/cosmoAssistantService.ts`: Universal context ingestion, local fallback, and API client.

## Interface Contracts
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

## Completion Criteria
1. Comprehensive knowledge base in `src/lib/cosmoKnowledge.ts` covering Math, R&W, test strategies, and platform navigation.
2. Robust query resolution and context-aware responses in `src/lib/cosmoAssistantService.ts`.
3. Instant local fallback for common platform FAQs and formula lookups when offline or quota reached.
4. `npm run check:tokens` passes with 0 violations.
5. `npm run typecheck` passes with 0 errors.
