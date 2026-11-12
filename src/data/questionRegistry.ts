import { CROSS_TEXT_QUESTIONS, CrossTextQuestion } from './crossTextQuestions';
import {
  LINEAR_EQUATIONS_ONE_QUESTIONS,
  LINEAR_EQUATIONS_TWO_QUESTIONS,
  LINEAR_FUNCTIONS_QUESTIONS,
  SYSTEMS_OF_EQUATIONS_QUESTIONS,
  LINEAR_INEQUALITIES_QUESTIONS,
  EQUIVALENT_EXPRESSIONS_QUESTIONS,
  NONLINEAR_EQUATIONS_QUESTIONS,
  NONLINEAR_FUNCTIONS_QUESTIONS,
  PROBLEMSOLVINGRATIOS_QUESTIONS,
  PROBLEMSOLVINGPERCENTAGES_QUESTIONS,
  PROBLEMSOLVINGONEVARIABLEDATA_QUESTIONS,
  PROBLEMSOLVINGTWOVARIABLEDATA_QUESTIONS,
  PROBLEMSOLVINGPROBABILITY_QUESTIONS,
  PROBLEMSOLVINGINFERENCE_QUESTIONS,
  PROBLEMSOLVINGSTUDIES_QUESTIONS,
  MathQuestion,
} from './math';

export type PracticeQuestion = CrossTextQuestion | MathQuestion;

export interface TopicQuestionMeta {
  topicId: string;
  topicName: string;
  domainId: string;
  domainName: string;
  section: 'reading_writing' | 'math';
  totalQuestions: number;
  route?: string;
  questions?: PracticeQuestion[];
}

/**
 * Kill switch build flag: when false, only questions with source === 'original'
 * are included. Questions marked 'collegeboard' or 'unknown' are filtered out.
 */
const envFlag =
  (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_INCLUDE_COLLEGEBOARD_QUESTIONS) ||
  (typeof process !== 'undefined' && process.env?.VITE_INCLUDE_COLLEGEBOARD_QUESTIONS);

export const INCLUDE_COLLEGEBOARD_QUESTIONS: boolean = envFlag === 'false' ? false : true;

const filterAllowed = <T extends PracticeQuestion>(list: T[]): T[] => {
  if (INCLUDE_COLLEGEBOARD_QUESTIONS) return list;
  return list.filter((q) => q.source === 'original');
};

const activeCrossText = filterAllowed(CROSS_TEXT_QUESTIONS);
const activeLinearEq1 = filterAllowed(LINEAR_EQUATIONS_ONE_QUESTIONS);
const activeLinearEq2 = filterAllowed(LINEAR_EQUATIONS_TWO_QUESTIONS);
const activeLinearFunc = filterAllowed(LINEAR_FUNCTIONS_QUESTIONS);
const activeSystemsEq = filterAllowed(SYSTEMS_OF_EQUATIONS_QUESTIONS);
const activeLinearIneq = filterAllowed(LINEAR_INEQUALITIES_QUESTIONS);
const activeEquivExp = filterAllowed(EQUIVALENT_EXPRESSIONS_QUESTIONS);
const activeNonlinearEq = filterAllowed(NONLINEAR_EQUATIONS_QUESTIONS);
const activeNonlinearFunc = filterAllowed(NONLINEAR_FUNCTIONS_QUESTIONS);
const activePsdaRatios = filterAllowed(PROBLEMSOLVINGRATIOS_QUESTIONS);
const activePsdaPercentages = filterAllowed(PROBLEMSOLVINGPERCENTAGES_QUESTIONS);
const activePsda1Var = filterAllowed(PROBLEMSOLVINGONEVARIABLEDATA_QUESTIONS);
const activePsda2Var = filterAllowed(PROBLEMSOLVINGTWOVARIABLEDATA_QUESTIONS);
const activePsdaProb = filterAllowed(PROBLEMSOLVINGPROBABILITY_QUESTIONS);
const activePsdaInf = filterAllowed(PROBLEMSOLVINGINFERENCE_QUESTIONS);
const activePsdaStudies = filterAllowed(PROBLEMSOLVINGSTUDIES_QUESTIONS);

/**
 * Registry of topics that currently have actual loaded question files in the project.
 * If a topic is not loaded or has no file yet, totalQuestions is 0.
 */
export const QUESTION_REGISTRY: Record<string, TopicQuestionMeta> = {
  // Reading & Writing -> Craft and Structure
  'rw-crf-1': {
    topicId: 'rw-crf-1',
    topicName: 'Cross-Text Connections',
    domainId: 'craft-structure',
    domainName: 'Craft and Structure',
    section: 'reading_writing',
    totalQuestions: activeCrossText.length,
    route: '/practice/cross-text',
    questions: activeCrossText,
  },
  'rw-crf-2': {
    topicId: 'rw-crf-2',
    topicName: 'Text Structure and Purpose',
    domainId: 'craft-structure',
    domainName: 'Craft and Structure',
    section: 'reading_writing',
    totalQuestions: 0,
  },
  'rw-crf-3': {
    topicId: 'rw-crf-3',
    topicName: 'Words in Context',
    domainId: 'craft-structure',
    domainName: 'Craft and Structure',
    section: 'reading_writing',
    totalQuestions: 0,
  },

  // Reading & Writing -> Expression of Ideas
  'rw-exp-1': {
    topicId: 'rw-exp-1',
    topicName: 'Rhetorical Synthesis',
    domainId: 'expression-ideas',
    domainName: 'Expression of Ideas',
    section: 'reading_writing',
    totalQuestions: 0,
  },
  'rw-exp-2': {
    topicId: 'rw-exp-2',
    topicName: 'Transitions',
    domainId: 'expression-ideas',
    domainName: 'Expression of Ideas',
    section: 'reading_writing',
    totalQuestions: 0,
  },

  // Reading & Writing -> Information and Ideas
  'rw-inf-1': {
    topicId: 'rw-inf-1',
    topicName: 'Central Ideas and Details',
    domainId: 'information-ideas',
    domainName: 'Information and Ideas',
    section: 'reading_writing',
    totalQuestions: 0,
  },
  'rw-inf-2': {
    topicId: 'rw-inf-2',
    topicName: 'Command of Evidence',
    domainId: 'information-ideas',
    domainName: 'Information and Ideas',
    section: 'reading_writing',
    totalQuestions: 0,
  },
  'rw-inf-3': {
    topicId: 'rw-inf-3',
    topicName: 'Inferences',
    domainId: 'information-ideas',
    domainName: 'Information and Ideas',
    section: 'reading_writing',
    totalQuestions: 0,
  },

  // Reading & Writing -> Standard English Conventions
  'rw-sec-1': {
    topicId: 'rw-sec-1',
    topicName: 'Boundaries',
    domainId: 'standard-english',
    domainName: 'Standard English Conventions',
    section: 'reading_writing',
    totalQuestions: 0,
  },
  'rw-sec-2': {
    topicId: 'rw-sec-2',
    topicName: 'Form, Structure, and Sense',
    domainId: 'standard-english',
    domainName: 'Standard English Conventions',
    section: 'reading_writing',
    totalQuestions: 0,
  },

  // Math -> Algebra
  'm-alg-1': {
    topicId: 'm-alg-1',
    topicName: 'Linear equations in one variable',
    domainId: 'algebra',
    domainName: 'Algebra',
    section: 'math',
    totalQuestions: activeLinearEq1.length,
    route: '/practice/m-alg-1',
    questions: activeLinearEq1,
  },
  'm-alg-2': {
    topicId: 'm-alg-2',
    topicName: 'Linear functions',
    domainId: 'algebra',
    domainName: 'Algebra',
    section: 'math',
    totalQuestions: activeLinearFunc.length,
    route: '/practice/m-alg-2',
    questions: activeLinearFunc,
  },
  'm-alg-3': {
    topicId: 'm-alg-3',
    topicName: 'Linear equations in two variables',
    domainId: 'algebra',
    domainName: 'Algebra',
    section: 'math',
    totalQuestions: activeLinearEq2.length,
    route: '/practice/m-alg-3',
    questions: activeLinearEq2,
  },
  'm-alg-4': {
    topicId: 'm-alg-4',
    topicName: 'Systems of two linear equations in two variables',
    domainId: 'algebra',
    domainName: 'Algebra',
    section: 'math',
    totalQuestions: activeSystemsEq.length,
    route: '/practice/m-alg-4',
    questions: activeSystemsEq,
  },
  'm-alg-5': {
    topicId: 'm-alg-5',
    topicName: 'Linear inequalities in one or two variables',
    domainId: 'algebra',
    domainName: 'Algebra',
    section: 'math',
    totalQuestions: activeLinearIneq.length,
    route: '/practice/m-alg-5',
    questions: activeLinearIneq,
  },

  // Math -> Advanced Math
  'm-adv-1': {
    topicId: 'm-adv-1',
    topicName: 'Equivalent expressions',
    domainId: 'advanced-math',
    domainName: 'Advanced Math',
    section: 'math',
    totalQuestions: activeEquivExp.length,
    route: '/practice/m-adv-1',
    questions: activeEquivExp,
  },
  'm-adv-2': {
    topicId: 'm-adv-2',
    topicName: 'Nonlinear equations in one variable and systems of equations in two variables',
    domainId: 'advanced-math',
    domainName: 'Advanced Math',
    section: 'math',
    totalQuestions: activeNonlinearEq.length,
    route: '/practice/m-adv-2',
    questions: activeNonlinearEq,
  },
  'm-adv-3': {
    topicId: 'm-adv-3',
    topicName: 'Nonlinear functions',
    domainId: 'advanced-math',
    domainName: 'Advanced Math',
    section: 'math',
    totalQuestions: activeNonlinearFunc.length,
    route: '/practice/m-adv-3',
    questions: activeNonlinearFunc,
  },

  // Math -> Problem-Solving and Data Analysis
  'm-dat-1': {
    topicId: 'm-dat-1',
    topicName: 'Ratios, rates, proportional relationships, and units',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsdaRatios.length,
    route: '/practice/m-dat-1',
    questions: activePsdaRatios,
  },
  'm-dat-2': {
    topicId: 'm-dat-2',
    topicName: 'Percentages',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsdaPercentages.length,
    route: '/practice/m-dat-2',
    questions: activePsdaPercentages,
  },
  'm-dat-3': {
    topicId: 'm-dat-3',
    topicName: 'One-variable data: Distributions and measures of center and spread',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsda1Var.length,
    route: '/practice/m-dat-3',
    questions: activePsda1Var,
  },
  'm-dat-4': {
    topicId: 'm-dat-4',
    topicName: 'Two-variable data: Models and scatterplots',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsda2Var.length,
    route: '/practice/m-dat-4',
    questions: activePsda2Var,
  },
  'm-dat-5': {
    topicId: 'm-dat-5',
    topicName: 'Probability and conditional probability',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsdaProb.length,
    route: '/practice/m-dat-5',
    questions: activePsdaProb,
  },
  'm-dat-6': {
    topicId: 'm-dat-6',
    topicName: 'Inference from sample statistics and margin of error',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsdaInf.length,
    route: '/practice/m-dat-6',
    questions: activePsdaInf,
  },
  'm-dat-7': {
    topicId: 'm-dat-7',
    topicName: 'Evaluating statistical claims: Observational studies and experiments',
    domainId: 'problem-solving',
    domainName: 'Problem-Solving and Data Analysis',
    section: 'math',
    totalQuestions: activePsdaStudies.length,
    route: '/practice/m-dat-7',
    questions: activePsdaStudies,
  },

  // Math -> Geometry and Trigonometry
  'm-geo-1': {
    topicId: 'm-geo-1',
    topicName: 'Area and volume',
    domainId: 'geometry-trig',
    domainName: 'Geometry and Trigonometry',
    section: 'math',
    totalQuestions: 0,
  },
  'm-geo-2': {
    topicId: 'm-geo-2',
    topicName: 'Lines, angles, and triangles',
    domainId: 'geometry-trig',
    domainName: 'Geometry and Trigonometry',
    section: 'math',
    totalQuestions: 0,
  },
  'm-geo-3': {
    topicId: 'm-geo-3',
    topicName: 'Right triangles and trigonometry',
    domainId: 'geometry-trig',
    domainName: 'Geometry and Trigonometry',
    section: 'math',
    totalQuestions: 0,
  },
  'm-geo-4': {
    topicId: 'm-geo-4',
    topicName: 'Circles',
    domainId: 'geometry-trig',
    domainName: 'Geometry and Trigonometry',
    section: 'math',
    totalQuestions: 0,
  },
};

/**
 * Returns exact number of loaded questions for a topic.
 */
export function getTopicTotalQuestions(topicId: string): number {
  return QUESTION_REGISTRY[topicId]?.totalQuestions ?? 0;
}

/**
 * Sum of all loaded active questions in the registry.
 */
export const TOTAL_LOADED_TOPIC_QUESTIONS = Object.values(QUESTION_REGISTRY).reduce(
  (sum, topic) => sum + topic.totalQuestions,
  0
);
