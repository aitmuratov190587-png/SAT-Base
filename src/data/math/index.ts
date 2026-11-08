export * from './types';
export * from './linearEquationsOne';
export * from './linearEquationsTwo';
export * from './linearFunctions';
export * from './systemsOfEquations';
export * from './linearInequalities';
export * from './satQuestionBankOcrReview';
export * from './advancedEquivalentExpressions';
export * from './advancedNonlinearEquations';
export * from './advancedNonlinearFunctions';
export * from './advancedMath';
export * from './advancedMathOcrReview';
export * from './psdaRatios';
export * from './psdaPercentages';
export * from './psdaOneVariableData';
export * from './psdaTwoVariableData';
export * from './psdaProbability';
export * from './psdaInference';
export * from './psdaStudies';

import { MathQuestion } from './types';
import { LINEAR_EQUATIONS_ONE_QUESTIONS } from './linearEquationsOne';
import { LINEAR_FUNCTIONS_QUESTIONS } from './linearFunctions';
import { LINEAR_EQUATIONS_TWO_QUESTIONS } from './linearEquationsTwo';
import { SYSTEMS_OF_EQUATIONS_QUESTIONS } from './systemsOfEquations';
import { LINEAR_INEQUALITIES_QUESTIONS } from './linearInequalities';

export const MATH_ALGEBRA_QUESTIONS: Record<string, MathQuestion[]> = {
  'm-alg-1': LINEAR_EQUATIONS_ONE_QUESTIONS,
  'm-alg-2': LINEAR_FUNCTIONS_QUESTIONS,
  'm-alg-3': LINEAR_EQUATIONS_TWO_QUESTIONS,
  'm-alg-4': SYSTEMS_OF_EQUATIONS_QUESTIONS,
  'm-alg-5': LINEAR_INEQUALITIES_QUESTIONS,
};
