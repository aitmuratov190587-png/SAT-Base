import fs from 'fs';

const files = [
  'src/data/mockTests/pt4_rw_module1.ts',
  'src/data/mockTests/pt4_rw_module2.ts',
  'src/data/mockTests/pt4_math_module1.ts',
  'src/data/mockTests/pt4_math_module2.ts',
  'src/data/mockTests/pt5_rw_module1.ts',
  'src/data/mockTests/pt5_rw_module2.ts',
  'src/data/mockTests/pt5_math_module1.ts',
  'src/data/mockTests/pt5_math_module2.ts'
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  let count = 0;
  content = content.replace(/("id":\s*"(pt[45]-[^\"]+)",)(\r?\n)(\s*)/g, (match, idLine, idVal, nl, indent) => {
    count++;
    return `${idLine}${nl}${indent}"source": "original",${nl}${indent}"license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",${nl}${indent}`;
  });
  fs.writeFileSync(f, content, 'utf8');
  console.log(`Updated ${f} with ${count} questions.`);
}

// Also update mockPracticeTest4.ts and mockPracticeTest5.ts
for (const testNum of [4, 5]) {
  const cfgPath = `src/data/mockTests/mockPracticeTest${testNum}.ts`;
  let cfgContent = fs.readFileSync(cfgPath, 'utf8');
  if (!cfgContent.includes("source: 'original'")) {
    cfgContent = cfgContent.replace(
      /subtitle:\s*('[^']+'|"[^"]+"),/,
      `subtitle: $1,\n  source: 'original',\n  license_note: 'SATBase 100% Original Full-Length Practice Examination designed to College Board specifications',`
    );
    fs.writeFileSync(cfgPath, cfgContent, 'utf8');
    console.log(`Updated config in ${cfgPath}`);
  }
}
