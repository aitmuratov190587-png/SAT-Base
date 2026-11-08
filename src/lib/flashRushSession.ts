import { FLASH_RUSH_QUESTIONS, getShuffledFlashRushTest } from '../data/flashRushMock';
import type { ShuffledQuestion } from '../data/flashRushMock';
import { isRecord } from './storage';

export const MODULE_SECONDS = 600;
export interface FlashRushSession {
  version: 1;
  id: string;
  questions: ShuffledQuestion[];
  userAnswers: Record<string, string>;
  flagged: string[];
  currentModule: 1 | 2;
  currentQuestionIndex: number;
  phase: 'test' | 'break' | 'complete';
  deadline: number;
  timeSpent: { rw: number; math: number };
  completedAt: string;
}
export function createSession(now = Date.now()): FlashRushSession {
  return { version: 1, id: crypto.randomUUID(), questions: getShuffledFlashRushTest(), userAnswers: {}, flagged: [],
    currentModule: 1, currentQuestionIndex: 0, phase: 'test', deadline: now + MODULE_SECONDS * 1000,
    timeSpent: { rw: 0, math: 0 }, completedAt: '' };
}
export function remainingSeconds(session: FlashRushSession, now = Date.now()): number {
  return Math.max(0, Math.min(MODULE_SECONDS, Math.ceil((session.deadline - now) / 1000)));
}
export function submitModule(session: FlashRushSession, now = Date.now()): FlashRushSession {
  if (session.phase !== 'test') return session;
  return { ...session, phase: session.currentModule === 1 ? 'break' : 'complete',
    timeSpent: { ...session.timeSpent, [session.currentModule === 1 ? 'rw' : 'math']: MODULE_SECONDS - remainingSeconds(session, now) },
    completedAt: session.currentModule === 2 ? new Date(now).toISOString() : '' };
}
export function startMath(session: FlashRushSession, now = Date.now()): FlashRushSession {
  return session.phase === 'break' ? { ...session, phase: 'test', currentModule: 2, currentQuestionIndex: 0, deadline: now + MODULE_SECONDS * 1000 } : session;
}
export function answerQuestion(session: FlashRushSession, questionId: string, answerId: string, now = Date.now()): FlashRushSession {
  if (session.phase !== 'test') return session;
  if (remainingSeconds(session, now) === 0) return submitModule(session, now);
  const question = session.questions.find(q => q.id === questionId && q.module === session.currentModule);
  if (!question?.options.some(o => o.id === answerId)) return session;
  return { ...session, userAnswers: { ...session.userAnswers, [questionId]: answerId } };
}
export function isFlashRushSession(value: unknown): value is FlashRushSession {
  if (!isRecord(value) || value.version !== 1 || typeof value.id !== 'string' || !/^[0-9a-f-]{36}$/i.test(value.id) ||
    !Array.isArray(value.questions) || value.questions.length !== FLASH_RUSH_QUESTIONS.length ||
    !isRecord(value.userAnswers) || !Array.isArray(value.flagged) || !value.flagged.every(id => typeof id === 'string') ||
    (value.currentModule !== 1 && value.currentModule !== 2) || !['test', 'break', 'complete'].includes(String(value.phase)) ||
    !Number.isInteger(value.currentQuestionIndex) || Number(value.currentQuestionIndex) < 0 || Number(value.currentQuestionIndex) >= 10 ||
    typeof value.deadline !== 'number' || !Number.isFinite(value.deadline) ||
    !isRecord(value.timeSpent) || !['rw', 'math'].every(k => Number.isInteger((value.timeSpent as Record<string, unknown>)[k]) && Number((value.timeSpent as Record<string, unknown>)[k]) >= 0 && Number((value.timeSpent as Record<string, unknown>)[k]) <= MODULE_SECONDS) ||
    typeof value.completedAt !== 'string' || (value.phase === 'complete' && !Number.isFinite(Date.parse(value.completedAt)))) return false;
  const questions = value.questions;
  return FLASH_RUSH_QUESTIONS.every((canonical, index) => {
    const q = questions[index];
    if (!isRecord(q) || !Array.isArray(q.shuffledOptions)) return false;
    const { shuffledOptions, ...original } = q;
    if (JSON.stringify(original) !== JSON.stringify(canonical)) return false;
    return shuffledOptions.length === 4 && new Set(shuffledOptions.map(o => isRecord(o) ? o.originalId : null)).size === 4 &&
      shuffledOptions.every((o, i) => isRecord(o) && o.letter === 'ABCD'[i] && canonical.options.some(option => option.id === o.originalId && option.text === o.text));
  }) && Object.entries(value.userAnswers).every(([id, answer]) => FLASH_RUSH_QUESTIONS.some(q => q.id === id && q.options.some(o => o.id === answer)));
}
export function calculateScores(session: Pick<FlashRushSession, 'questions' | 'userAnswers'>) {
  const sectionScore = (module: 1 | 2) => Math.max(200, Math.min(800, session.questions
    .filter(q => q.module === module).reduce((sum, q) => sum + (session.userAnswers[q.id] === q.correctAnswerId ? q.points : 0), 0)));
  const english = sectionScore(1), math = sectionScore(2);
  return { english, math, total: english + math };
}
