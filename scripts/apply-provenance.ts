import fs from 'fs';
import path from 'path';

function processJsonLikeFile(filePath: string) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf-8');

  let updatedCount = 0;
  const newContent = content.replace(
    /("id":\s*"([^"]+)",)(\r?\n)(\s*)/g,
    (match, idLine, idValue, newline, indent) => {
      // Check if source is already added
      const sourceMatch = 'collegeboard';
      let source = 'unknown';
      let note = 'Unverified source origin; pending license review';

      if (idValue.startsWith('satqb-')) {
        source = 'collegeboard';
        note = 'College Board SAT Suite Question Bank export; not licensed for redistribution';
      } else if (idValue.startsWith('m-alg-')) {
        source = 'unknown';
        note = 'Unverified source origin (DOCX import); pending license review';
      } else if (idValue.startsWith('ctc-')) {
        source = 'unknown';
        note = 'Unverified source origin; pending license review';
      }

      updatedCount++;
      return `${idLine}${newline}${indent}"source": "${source}",${newline}${indent}"license_note": "${note}",${newline}${indent}`;
    }
  );

  fs.writeFileSync(fullPath, newContent, 'utf-8');
  console.log(`Updated ${filePath}: ${updatedCount} items`);
}

function processJsLikeFile(filePath: string, defaultSource: 'original', note: string) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf-8');

  let updatedCount = 0;
  const newContent = content.replace(
    /(id:\s*'([^']+)',)(\r?\n)(\s*)/g,
    (match, idLine, idValue, newline, indent) => {
      updatedCount++;
      return `${idLine}${newline}${indent}source: '${defaultSource}',${newline}${indent}license_note: '${note}',${newline}${indent}`;
    }
  );

  fs.writeFileSync(fullPath, newContent, 'utf-8');
  console.log(`Updated ${filePath}: ${updatedCount} items`);
}

const jsonLikeFiles = [
  'src/data/crossTextQuestions.ts',
  'src/data/math/linearEquationsOne.ts',
  'src/data/math/linearEquationsTwo.ts',
  'src/data/math/linearFunctions.ts',
  'src/data/math/systemsOfEquations.ts',
  'src/data/math/linearInequalities.ts',
  'src/data/math/advancedEquivalentExpressions.ts',
  'src/data/math/advancedNonlinearEquations.ts',
  'src/data/math/advancedNonlinearFunctions.ts',
  'src/data/math/psdaRatios.ts',
  'src/data/math/psdaPercentages.ts',
  'src/data/math/psdaOneVariableData.ts',
  'src/data/math/psdaTwoVariableData.ts',
  'src/data/math/psdaProbability.ts',
  'src/data/math/psdaInference.ts',
  'src/data/math/psdaStudies.ts',
  'src/data/math/satQuestionBankOcrReview.ts',
  'src/data/math/advancedMathOcrReview.ts',
];

for (const file of jsonLikeFiles) {
  processJsonLikeFile(file);
}

processJsLikeFile(
  'src/data/flashRushMock.ts',
  'original',
  'SATBase original diagnostic mock questions'
);

processJsLikeFile(
  'src/data/satQuestionsMock.ts',
  'original',
  'SATBase original demo questions'
);

console.log('Provenance field injection complete.');
