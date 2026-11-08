import { isRecord, readStored } from './storage';

export interface QuestionStat {
  timeSeconds: number;
  selectedOption: string | null;
  isCorrect: boolean;
  markedForReview: boolean;
  eliminatedOptions: string[];
}
export const practiceKey = (userId: string) => `satbase:practice:${userId}`;
export function isPracticeProgress(value: unknown): value is Record<string, QuestionStat> {
  return isRecord(value) && Object.values(value).every(stat => isRecord(stat) && Number.isInteger(stat.timeSeconds) && Number(stat.timeSeconds) >= 0 &&
    (stat.selectedOption === null || typeof stat.selectedOption === 'string' && /^[ABCD]$/.test(stat.selectedOption)) &&
    typeof stat.isCorrect === 'boolean' && typeof stat.markedForReview === 'boolean' && Array.isArray(stat.eliminatedOptions) && stat.eliminatedOptions.every(o => typeof o === 'string' && /^[ABCD]$/.test(o)));
}
export function readPracticeProgress(userId: string) {
  return readStored('localStorage', practiceKey(userId), isPracticeProgress) ?? {};
}
