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
  const isAvailable = num === 1; // Test 1 (FlashRush) is currently live, 2..30 are in catalog

  return {
    id: `mock-test-${num}`,
    number: numStr,
    testNumber: num,
    title: `Practice test ${num}`,
    meta: '98 questions · 134 min · Adaptive',
    isFree,
    status: isAvailable ? 'available' : 'coming_soon',
    route: num === 1 ? '/mock-tests/flashrush' : undefined,
  };
});
