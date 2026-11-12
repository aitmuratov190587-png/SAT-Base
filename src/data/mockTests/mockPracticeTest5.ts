import type { FullMockTestConfig, MockTestQuestion } from './pt1_types.ts';
import { PT5_RW_MODULE1_QUESTIONS } from './pt5_rw_module1.ts';
import { PT5_RW_MODULE2_QUESTIONS } from './pt5_rw_module2.ts';
import { PT5_MATH_MODULE1_QUESTIONS } from './pt5_math_module1.ts';
import { PT5_MATH_MODULE2_QUESTIONS } from './pt5_math_module2.ts';

export const PRACTICE_TEST_5: FullMockTestConfig = {
  id: 'practice-test-5',
  number: 5,
  title: 'Digital SAT® Practice Test #5',
  subtitle: '100% Original Full-Length Practice Examination designed strictly to College Board specifications.',
  totalQuestions: 98,
  totalMinutes: 134,
  modules: {
    rw1: {
      section: 'reading_writing',
      module: 1,
      title: 'Section 1, Module 1: Reading and Writing',
      timeSeconds: 32 * 60,
      totalQuestions: 27,
      questions: PT5_RW_MODULE1_QUESTIONS,
    },
    rw2: {
      section: 'reading_writing',
      module: 2,
      title: 'Section 1, Module 2: Reading and Writing',
      timeSeconds: 32 * 60,
      totalQuestions: 27,
      questions: PT5_RW_MODULE2_QUESTIONS,
    },
    math1: {
      section: 'math',
      module: 1,
      title: 'Section 2, Module 1: Math',
      timeSeconds: 35 * 60,
      totalQuestions: 22,
      questions: PT5_MATH_MODULE1_QUESTIONS,
    },
    math2: {
      section: 'math',
      module: 2,
      title: 'Section 2, Module 2: Math',
      timeSeconds: 35 * 60,
      totalQuestions: 22,
      questions: PT5_MATH_MODULE2_QUESTIONS,
    },
  },
};

export const ALL_PRACTICE_TEST_5_QUESTIONS: MockTestQuestion[] = [
  ...PT5_RW_MODULE1_QUESTIONS,
  ...PT5_RW_MODULE2_QUESTIONS,
  ...PT5_MATH_MODULE1_QUESTIONS,
  ...PT5_MATH_MODULE2_QUESTIONS,
];
