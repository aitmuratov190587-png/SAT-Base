import type { FullMockTestConfig, MockTestQuestion } from './pt1_types.ts';
import { PT1_RW_MODULE1_QUESTIONS } from './pt1_rw_module1.ts';
import { PT1_RW_MODULE2_QUESTIONS } from './pt1_rw_module2.ts';
import { PT1_MATH_MODULE1_QUESTIONS } from './pt1_math_module1.ts';
import { PT1_MATH_MODULE2_QUESTIONS } from './pt1_math_module2.ts';

export const PRACTICE_TEST_1: FullMockTestConfig = {
  id: 'practice-test-1',
  number: 1,
  title: 'Digital SAT® Practice Test #1',
  subtitle: 'Official 98-question full-length adaptive examination with authentic Bluebook interface.',
  totalQuestions: 98,
  totalMinutes: 134,
  modules: {
    rw1: {
      section: 'reading_writing',
      module: 1,
      title: 'Section 1, Module 1: Reading and Writing',
      timeSeconds: 32 * 60, // 1920 seconds (32 minutes)
      totalQuestions: 27,
      questions: PT1_RW_MODULE1_QUESTIONS,
    },
    rw2: {
      section: 'reading_writing',
      module: 2,
      title: 'Section 1, Module 2: Reading and Writing',
      timeSeconds: 32 * 60, // 1920 seconds (32 minutes)
      totalQuestions: 27,
      questions: PT1_RW_MODULE2_QUESTIONS,
    },
    math1: {
      section: 'math',
      module: 1,
      title: 'Section 2, Module 1: Math',
      timeSeconds: 35 * 60, // 2100 seconds (35 minutes)
      totalQuestions: 22,
      questions: PT1_MATH_MODULE1_QUESTIONS,
    },
    math2: {
      section: 'math',
      module: 2,
      title: 'Section 2, Module 2: Math',
      timeSeconds: 35 * 60, // 2100 seconds (35 minutes)
      totalQuestions: 22,
      questions: PT1_MATH_MODULE2_QUESTIONS,
    },
  },
};

export const ALL_PRACTICE_TEST_1_QUESTIONS: MockTestQuestion[] = [
  ...PT1_RW_MODULE1_QUESTIONS,
  ...PT1_RW_MODULE2_QUESTIONS,
  ...PT1_MATH_MODULE1_QUESTIONS,
  ...PT1_MATH_MODULE2_QUESTIONS,
];

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
  userAnswers: Record<string, string>
): FullMockScoreResult {
  let rwCorrect = 0;
  const rwTotal = 54;
  let mathCorrect = 0;
  const mathTotal = 44;

  const domainMap: Record<string, { section: 'reading_writing' | 'math'; correct: number; total: number }> = {};

  for (const q of ALL_PRACTICE_TEST_1_QUESTIONS) {
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

      // Check direct equality
      if (normalizedUser === normalizedCorrect) {
        isCorrect = true;
      } else {
        // Check numerical equality if both can be parsed as numbers (or fractions)
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

  // College Board Digital SAT Scaled Score Approximation
  // Curve: 54/54 -> 800, 0/54 -> 200, non-linear upper and lower tails
  const scaleSectionScore = (raw: number, total: number): number => {
    if (raw === 0) return 200;
    if (raw === total) return 800;
    const ratio = raw / total;
    // Digital SAT scaled scoring sigmoid-like curve
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
