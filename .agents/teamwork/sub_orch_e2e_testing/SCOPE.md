# Scope: E2E Testing Track

## Architecture & Test Philosophy
- Requirement-driven, opaque-box testing derived from ORIGINAL_REQUEST.md and PROJECT.md.
- Independent test suite covering all 11 inventoried features across 4 tiers:
  - Tier 1: Feature Coverage (>=5 per feature)
  - Tier 2: Boundary & Corner Cases (>=5 per feature)
  - Tier 3: Cross-Feature Interactions
  - Tier 4: Real-World Student Workload Scenarios
- Publishes `TEST_INFRA.md` and `TEST_READY.md`.
- Test harness execution: Node test runner (`node --test tests/*.test.mjs`).

## Feature Inventory Coverage Target
- F1: Float Animation & Mascot CSS Keyframes
- F2: Interactive SVG Mascot Component (`CosmoMascot.tsx`)
- F3: Floating Mascot Launcher FAB (`CosmoLauncher.tsx`)
- F4: SAT Curriculum Knowledge Base (`cosmoKnowledge.ts`)
- F5: Platform Navigation Feature Guide (`cosmoKnowledge.ts`)
- F6: Universal Assistant Engine & Fallback (`cosmoAssistantService.ts`)
- F7: Quick Action Pills Catalog
- F8: Universal Assistant Drawer UI (`CosmoAssistantDrawer.tsx`)
- F9: Global Mounting & Route Integration (`App.tsx`)
- F10: Automated Test Suite (`tests/cosmoAssistant.test.mjs`)
- F11: Quality Gates (tokens, types, build)

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| T1 | Test Infrastructure & Framework | Harness setup, runner scripts, TEST_INFRA.md | none | IN_PROGRESS |
| T2 | Tiers 1-4 Test Suite Creation | Tests across all features in tests/cosmoAssistant.test.mjs | T1 | PLANNED |
| T3 | Publish Test Ready | Validate test suite and emit TEST_READY.md | T2 | PLANNED |
