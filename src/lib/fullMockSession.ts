import { PRACTICE_TEST_1, type FullMockScoreResult } from '../data/mockTests/mockPracticeTest1.ts';
import type { MockModuleConfig } from '../data/mockTests/pt1_types.ts';

export const FULL_MOCK_SESSION_KEY = 'satbase_full_mock_session_pt1';
export const FULL_MOCK_RESULT_KEY = 'satbase_full_mock_result_pt1';

export type ModuleIndex = 0 | 1 | 2 | 3;

export interface FullMockSession {
  testId: 'practice-test-1';
  currentModuleIndex: ModuleIndex; // 0: rw1, 1: rw2, 2: math1, 3: math2
  currentQuestionIndex: number;
  phase: 'test' | 'review' | 'break' | 'complete';
  moduleDeadline: number; // Unix timestamp ms when current module expires
  moduleDurationSeconds: number; // initial seconds for this module
  userAnswers: Record<string, string>; // questionId -> answer
  flagged: string[]; // questionIds marked for review
  eliminated: Record<string, string[]>; // questionId -> string[] of eliminated letters
  startedAt: number;
  completedAt?: number;
  timeSpentSeconds: {
    rw1: number;
    rw2: number;
    math1: number;
    math2: number;
  };
}

export interface FullMockSavedResult {
  attemptId: string;
  testId: string;
  completedAt: string;
  userAnswers: Record<string, string>;
  scores: FullMockScoreResult;
  timeSpentSeconds: {
    rw: number;
    math: number;
    total: number;
  };
}

export const MODULE_ORDER: Array<'rw1' | 'rw2' | 'math1' | 'math2'> = [
  'rw1',
  'rw2',
  'math1',
  'math2',
];

export function getModuleConfigByIndex(index: ModuleIndex): MockModuleConfig {
  const key = MODULE_ORDER[index];
  return PRACTICE_TEST_1.modules[key];
}

export function createFullMockSession(): FullMockSession {
  const rw1Config = PRACTICE_TEST_1.modules.rw1;
  const now = Date.now();
  return {
    testId: 'practice-test-1',
    currentModuleIndex: 0,
    currentQuestionIndex: 0,
    phase: 'test',
    moduleDeadline: now + rw1Config.timeSeconds * 1000,
    moduleDurationSeconds: rw1Config.timeSeconds,
    userAnswers: {},
    flagged: [],
    eliminated: {},
    startedAt: now,
    timeSpentSeconds: {
      rw1: 0,
      rw2: 0,
      math1: 0,
      math2: 0,
    },
  };
}

export function saveFullMockSession(session: FullMockSession | null): void {
  try {
    if (session === null) {
      localStorage.removeItem(FULL_MOCK_SESSION_KEY);
    } else {
      localStorage.setItem(FULL_MOCK_SESSION_KEY, JSON.stringify(session));
    }
  } catch (err) {
    console.error('Failed to save full mock session to localStorage:', err);
  }
}

export function loadFullMockSession(): FullMockSession | null {
  try {
    const raw = localStorage.getItem(FULL_MOCK_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as FullMockSession;
    if (parsed.testId !== 'practice-test-1') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearFullMockSession(): void {
  try {
    localStorage.removeItem(FULL_MOCK_SESSION_KEY);
  } catch (err) {
    console.error('Failed to clear full mock session:', err);
  }
}

export function saveFullMockResult(result: FullMockSavedResult): void {
  try {
    localStorage.setItem(FULL_MOCK_RESULT_KEY, JSON.stringify(result));
  } catch (err) {
    console.error('Failed to save full mock result:', err);
  }
}

export function loadFullMockResult(): FullMockSavedResult | null {
  try {
    const raw = localStorage.getItem(FULL_MOCK_RESULT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as FullMockSavedResult;
  } catch {
    return null;
  }
}
