import {
  getPracticeTestConfig,
  type FullMockScoreResult,
} from '../data/mockTests/index.ts';
import type { MockModuleConfig } from '../data/mockTests/pt1_types.ts';

export type ModuleIndex = 0 | 1 | 2 | 3;

export interface FullMockSession {
  testId: string;
  testNumber: number;
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
  testNumber: number;
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

export function getModuleConfigByIndex(
  testNum: number,
  index: ModuleIndex
): MockModuleConfig {
  const config = getPracticeTestConfig(testNum);
  const key = MODULE_ORDER[index];
  return config.modules[key];
}

export function createFullMockSession(testNum: number = 1): FullMockSession {
  const config = getPracticeTestConfig(testNum);
  const rw1Config = config.modules.rw1;
  const now = Date.now();
  return {
    testId: `practice-test-${testNum}`,
    testNumber: testNum,
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

export function getSessionStorageKey(testNum: number = 1): string {
  return `satbase_full_mock_session_pt${testNum}`;
}

export function getResultStorageKey(testNum: number = 1): string {
  return `satbase_full_mock_result_pt${testNum}`;
}

export function saveFullMockSession(
  session: FullMockSession | null,
  testNum: number = 1
): void {
  try {
    const key = getSessionStorageKey(testNum);
    if (session === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(session));
    }
  } catch (err) {
    console.error('Failed to save full mock session to localStorage:', err);
  }
}

export function loadFullMockSession(testNum: number = 1): FullMockSession | null {
  try {
    const key = getSessionStorageKey(testNum);
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as FullMockSession;
    if (parsed.testNumber !== testNum) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearFullMockSession(testNum: number = 1): void {
  try {
    const key = getSessionStorageKey(testNum);
    localStorage.removeItem(key);
  } catch (err) {
    console.error('Failed to clear full mock session:', err);
  }
}

export function saveFullMockResult(
  result: FullMockSavedResult,
  testNum: number = 1
): void {
  try {
    const key = getResultStorageKey(testNum);
    localStorage.setItem(key, JSON.stringify(result));
  } catch (err) {
    console.error('Failed to save full mock result:', err);
  }
}

export function loadFullMockResult(testNum: number = 1): FullMockSavedResult | null {
  try {
    const key = getResultStorageKey(testNum);
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as FullMockSavedResult;
  } catch {
    return null;
  }
}
