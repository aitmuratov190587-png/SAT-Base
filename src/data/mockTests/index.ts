import type { FullMockTestConfig, MockTestQuestion } from './pt1_types.ts';
import { PRACTICE_TEST_1, ALL_PRACTICE_TEST_1_QUESTIONS } from './mockPracticeTest1.ts';
import { PRACTICE_TEST_2, ALL_PRACTICE_TEST_2_QUESTIONS } from './mockPracticeTest2.ts';
import { PRACTICE_TEST_3, ALL_PRACTICE_TEST_3_QUESTIONS } from './mockPracticeTest3.ts';

export const PRACTICE_TESTS: Record<number, FullMockTestConfig> = {
  1: PRACTICE_TEST_1,
  2: PRACTICE_TEST_2,
  3: PRACTICE_TEST_3,
};

export const ALL_QUESTIONS_BY_TEST: Record<number, MockTestQuestion[]> = {
  1: ALL_PRACTICE_TEST_1_QUESTIONS,
  2: ALL_PRACTICE_TEST_2_QUESTIONS,
  3: ALL_PRACTICE_TEST_3_QUESTIONS,
};

export function getPracticeTestConfig(testNum: number): FullMockTestConfig {
  return PRACTICE_TESTS[testNum] || PRACTICE_TEST_1;
}

export function getAllQuestionsForTest(testNum: number): MockTestQuestion[] {
  return ALL_QUESTIONS_BY_TEST[testNum] || ALL_PRACTICE_TEST_1_QUESTIONS;
}

export interface DomainScoreSummary {
  domain: string;
  section: 'reading_writing' | 'math';
  correct: number;
  total: number;
  percentage: number;
}

export interface FullMockScoreResult {
  rwCorrect: number;
  rwTotal: number;
  rwScore: number; // 200 - 800
  mathCorrect: number;
  mathTotal: number;
  mathScore: number; // 200 - 800
  totalCorrect: number;
  totalQuestions: number;
  totalScore: number; // 400 - 1600
  domainBreakdown: DomainScoreSummary[];
}

/**
 * Standard Digital SAT scoring curve for 54 RW questions and 44 Math questions.
 * Scaled 200-800 per section, composite 400-1600.
 */
export function calculateFullMockScores(
  testNum: number,
  userAnswers: Record<string, string>
): FullMockScoreResult {
  const questions = getAllQuestionsForTest(testNum);
  let rwCorrect = 0;
  const rwTotal = 54;
  let mathCorrect = 0;
  const mathTotal = 44;

  const domainMap: Record<string, { section: 'reading_writing' | 'math'; correct: number; total: number }> = {};

  for (const q of questions) {
    if (!domainMap[q.domain]) {
      domainMap[q.domain] = { section: q.section, correct: 0, total: 0 };
    }
    domainMap[q.domain].total += 1;

    const rawUserAns = userAnswers[q.id]?.trim();
    if (!rawUserAns) continue;

    let isCorrect = false;
    if (q.type === 'multiple_choice') {
      isCorrect = rawUserAns.toUpperCase() === q.correctAnswer.toUpperCase();
    } else {
      // Student-Produced Response (SPR) comparison
      const normalizedUser = rawUserAns.replace(/\s+/g, '').toLowerCase();
      const normalizedCorrect = q.correctAnswer.replace(/\s+/g, '').toLowerCase();

      if (normalizedUser === normalizedCorrect) {
        isCorrect = true;
      } else {
        const parseNum = (str: string): number | null => {
          if (str.includes('/')) {
            const [num, den] = str.split('/').map(Number);
            if (!isNaN(num) && !isNaN(den) && den !== 0) return num / den;
          }
          const val = parseFloat(str);
          return isNaN(val) ? null : val;
        };

        const uVal = parseNum(normalizedUser);
        const cVal = parseNum(normalizedCorrect);
        if (uVal !== null && cVal !== null && Math.abs(uVal - cVal) < 0.0001) {
          isCorrect = true;
        }
      }
    }

    if (isCorrect) {
      if (q.section === 'reading_writing') {
        rwCorrect += 1;
      } else {
        mathCorrect += 1;
      }
      domainMap[q.domain].correct += 1;
    }
  }

  const scaleSectionScore = (raw: number, total: number): number => {
    if (raw === 0) return 200;
    if (raw === total) return 800;
    const ratio = raw / total;
    const scaled = 200 + Math.round((ratio * 600) / 10) * 10;
    return Math.min(800, Math.max(200, scaled));
  };

  const rwScore = scaleSectionScore(rwCorrect, rwTotal);
  const mathScore = scaleSectionScore(mathCorrect, mathTotal);
  const totalScore = rwScore + mathScore;

  const domainBreakdown: DomainScoreSummary[] = Object.entries(domainMap).map(
    ([domain, data]) => ({
      domain,
      section: data.section,
      correct: data.correct,
      total: data.total,
      percentage: Math.round((data.correct / data.total) * 100),
    })
  );

  return {
    rwCorrect,
    rwTotal,
    rwScore,
    mathCorrect,
    mathTotal,
    mathScore,
    totalCorrect: rwCorrect + mathCorrect,
    totalQuestions: rwTotal + mathTotal,
    totalScore,
    domainBreakdown,
  };
}
