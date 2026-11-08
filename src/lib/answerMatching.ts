function numericValue(value: string): number | null {
  const cleaned = value.trim().replace(/,/g, '').replace(/−/g, '-');
  const fraction = cleaned.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*\/\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/);
  if (fraction) {
    const denominator = Number(fraction[2]);
    return denominator === 0 ? null : Number(fraction[1]) / denominator;
  }
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(cleaned)) return null;
  return Number(cleaned);
}

export function answersMatch(actual: string, expected: string): boolean {
  if (actual.trim().toUpperCase() === expected.trim().toUpperCase()) return true;
  const actualNumber = numericValue(actual);
  const expectedNumber = numericValue(expected);
  return actualNumber !== null && expectedNumber !== null && Math.abs(actualNumber - expectedNumber) <= 0.0001;
}
