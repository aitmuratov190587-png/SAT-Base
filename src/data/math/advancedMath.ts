import { MathQuestion } from './types';
import { EQUIVALENT_EXPRESSIONS_QUESTIONS } from './advancedEquivalentExpressions';
import { NONLINEAR_EQUATIONS_QUESTIONS } from './advancedNonlinearEquations';
import { NONLINEAR_FUNCTIONS_QUESTIONS } from './advancedNonlinearFunctions';

export const ADVANCED_MATH_QUESTIONS: Record<string, MathQuestion[]> = {
  'm-adv-1': EQUIVALENT_EXPRESSIONS_QUESTIONS,
  'm-adv-2': NONLINEAR_EQUATIONS_QUESTIONS,
  'm-adv-3': NONLINEAR_FUNCTIONS_QUESTIONS,
};
