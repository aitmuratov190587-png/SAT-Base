export interface MockCatalogItem {
  id: string;
  number: string;
  testNumber: number;
  title: string;
  meta: string;
  isFree: boolean;
  status: 'available' | 'coming_soon';
  route?: string;
}

export const MOCK_TESTS_CATALOG: MockCatalogItem[] = Array.from({ length: 30 }, (_, i) => {
  const num = i + 1;
  const numStr = String(num).padStart(2, '0');
  const isFree = num <= 6;
  const isAvailable = num <= 5; // Tests 1, 2, 3, 4, and 5 are live full-length exams

  return {
    id: `mock-test-${num}`,
    number: numStr,
    testNumber: num,
    title: `Practice test ${num}`,
    meta: num <= 5 ? '98 questions · 134 min · Full-length Digital SAT' : '98 questions · 134 min · Adaptive',
    isFree,
    status: isAvailable ? 'available' : 'coming_soon',
    route: num <= 5 ? `/mock-tests/practice-${num}` : undefined,
  };
});
