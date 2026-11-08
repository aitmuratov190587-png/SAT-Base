import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = path.resolve('src');

// Forbidden class patterns:
// 1. Numbered accent / primary / brand
// 2. Standard tailwind numbered scales for backgrounds, text, borders, rings
// 3. Hardcoded hex utilities
const FORBIDDEN_PATTERNS = [
  {
    name: 'Numbered accent/primary/brand scale',
    regex: /\b(?:bg|text|border|ring|fill|stroke|from|to|via)-(?:accent|primary|brand)-\d+\b/g,
  },
  {
    name: 'Tailwind default color palette scale (slate, blue, gray, emerald, etc.)',
    regex: /\b(?:bg|text|border|ring)-(?:slate|gray|zinc|neutral|stone|indigo|purple|violet|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|rose|pink|fuchsia)-(?:50|100|200|300|400|500|600|700|800|900|950)\b/g,
  },
  {
    name: 'Hardcoded hex color utility (e.g. bg-[#...], text-[#...])',
    regex: /\b(?:bg|text|border|ring|fill|stroke)-\[#[0-9a-fA-F]{3,8}\]/g,
  },
];

function walkDir(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else if (/\.(tsx|ts|jsx|js|css)$/.test(item)) {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = walkDir(SRC_DIR);
let violations = [];

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const relPath = path.relative('.', filePath).replace(/\\/g, '/');

  lines.forEach((line, lineIndex) => {
    for (const pattern of FORBIDDEN_PATTERNS) {
      const matches = line.match(pattern.regex);
      if (matches) {
        for (const m of matches) {
          violations.push({
            file: relPath,
            line: lineIndex + 1,
            match: m,
            rule: pattern.name,
          });
        }
      }
    }
  });
}

if (violations.length > 0) {
  console.error(`\x1b[31m[ERROR] check:tokens found ${violations.length} forbidden class violations in src/:\x1b[0m`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line} -> \x1b[33m${v.match}\x1b[0m (${v.rule})`);
  }
  console.error('\nPlease replace forbidden classes with Cosmo Notebook design tokens (bg-paper, bg-surface, bg-paper-2, text-ink, text-ink-2, border-line, moss/mustard/berry/cobalt).');
  process.exit(1);
} else {
  console.log('\x1b[32m[PASS] check:tokens: 0 forbidden classes found. All components strictly adhere to Cosmo Notebook design tokens.\x1b[0m');
  process.exit(0);
}
