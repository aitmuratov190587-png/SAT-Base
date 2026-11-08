import { CROSS_TEXT_QUESTIONS } from '../src/data/crossTextQuestions';
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
} from '../src/data/math';
import { FLASH_RUSH_QUESTIONS } from '../src/data/flashRushMock';
import { SAT_QUESTIONS_MOCK } from '../src/data/satQuestionsMock';

const datasets: Record<string, any[]> = {
  'crossTextQuestions': CROSS_TEXT_QUESTIONS,
  'linearEquationsOne': LINEAR_EQUATIONS_ONE_QUESTIONS,
  'linearEquationsTwo': LINEAR_EQUATIONS_TWO_QUESTIONS,
  'linearFunctions': LINEAR_FUNCTIONS_QUESTIONS,
  'systemsOfEquations': SYSTEMS_OF_EQUATIONS_QUESTIONS,
  'linearInequalities': LINEAR_INEQUALITIES_QUESTIONS,
  'equivalentExpressions': EQUIVALENT_EXPRESSIONS_QUESTIONS,
  'nonlinearEquations': NONLINEAR_EQUATIONS_QUESTIONS,
  'nonlinearFunctions': NONLINEAR_FUNCTIONS_QUESTIONS,
  'psdaRatios': PROBLEMSOLVINGRATIOS_QUESTIONS,
  'psdaPercentages': PROBLEMSOLVINGPERCENTAGES_QUESTIONS,
  'psdaOneVariableData': PROBLEMSOLVINGONEVARIABLEDATA_QUESTIONS,
  'psdaTwoVariableData': PROBLEMSOLVINGTWOVARIABLEDATA_QUESTIONS,
  'psdaProbability': PROBLEMSOLVINGPROBABILITY_QUESTIONS,
  'psdaInference': PROBLEMSOLVINGINFERENCE_QUESTIONS,
  'psdaStudies': PROBLEMSOLVINGSTUDIES_QUESTIONS,
  'flashRushMock': FLASH_RUSH_QUESTIONS,
  'satQuestionsMock': SAT_QUESTIONS_MOCK,
};

console.log('=== QUESTION INVENTORY SUMMARY ===');
let grandTotal = 0;

for (const [name, list] of Object.entries(datasets)) {
  const sample = list[0] || {};
  const sampleId = sample.id || 'none';
  const sampleSourceFile = sample.sourceFile || 'none';
  const samplePrompt = (sample.prompt || sample.questionPrompt || sample.questionText || '').slice(0, 60);
  
  // Look for any existing source or college board indicators
  const idPrefixes = new Set(list.map(q => (q.id || '').split('-').slice(0, 2).join('-')));
  const sourceFiles = new Set(list.map(q => q.sourceFile).filter(Boolean));

  console.log(`\n--- ${name} ---`);
  console.log(`Count: ${list.length}`);
  console.log(`Sample ID: ${sampleId}`);
  console.log(`ID Prefixes:`, Array.from(idPrefixes).slice(0, 5));
  console.log(`sourceFile values:`, Array.from(sourceFiles));
  console.log(`Sample prompt: "${samplePrompt}..."`);
  grandTotal += list.length;
}

console.log('\n==================================');
console.log(`GRAND TOTAL QUESTIONS ACROSS CODEBASE: ${grandTotal}`);
