import type { FullMockTestConfig, MockTestQuestion } from './pt1_types.ts';
import { PT2_RW_MODULE1_QUESTIONS } from './pt2_rw_module1.ts';
import { PT2_RW_MODULE2_QUESTIONS } from './pt2_rw_module2.ts';
import { PT2_MATH_MODULE1_QUESTIONS } from './pt2_math_module1.ts';
import { PT2_MATH_MODULE2_QUESTIONS } from './pt2_math_module2.ts';

export const PRACTICE_TEST_2: FullMockTestConfig = {
  id: 'practice-test-2',
  number: 2,
  title: 'Digital SAT® Practice Test #2',
  subtitle: '100% Original Full-Length Practice Examination aligned with College Board 2024+ specifications.',
  totalQuestions: 98,
  totalMinutes: 134,
  modules: {
    rw1: {
      section: 'reading_writing',
      module: 1,
      title: 'Section 1, Module 1: Reading and Writing',
      timeSeconds: 32 * 60,
      totalQuestions: 27,
      questions: PT2_RW_MODULE1_QUESTIONS,
    },
    rw2: {
      section: 'reading_writing',
      module: 2,
      title: 'Section 1, Module 2: Reading and Writing',
      timeSeconds: 32 * 60,
      totalQuestions: 27,
      questions: PT2_RW_MODULE2_QUESTIONS,
    },
    math1: {
      section: 'math',
      module: 1,
      title: 'Section 2, Module 1: Math',
      timeSeconds: 35 * 60,
      totalQuestions: 22,
      questions: PT2_MATH_MODULE1_QUESTIONS,
    },
    math2: {
      section: 'math',
      module: 2,
      title: 'Section 2, Module 2: Math',
      timeSeconds: 35 * 60,
      totalQuestions: 22,
      questions: PT2_MATH_MODULE2_QUESTIONS,
    },
  },
};

export const ALL_PRACTICE_TEST_2_QUESTIONS: MockTestQuestion[] = [
  ...PT2_RW_MODULE1_QUESTIONS,
  ...PT2_RW_MODULE2_QUESTIONS,
  ...PT2_MATH_MODULE1_QUESTIONS,
  ...PT2_MATH_MODULE2_QUESTIONS,
];
