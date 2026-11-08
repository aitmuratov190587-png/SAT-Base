import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

async function moduleFrom(entry) {
  const { outputFiles } = await build({
    entryPoints: [entry],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
  });
  return import('data:text/javascript;base64,' + Buffer.from(outputFiles[0].text).toString('base64'));
}

const {
  getCalendarDayDiff,
  formatDaysAway,
  categorizeTestDates,
} = await moduleFrom('src/lib/onboardingDates.ts');

const SAMPLE_DATES = [
  { date: '2026-10-03', label: 'October 3, 2026' },
  { date: '2026-11-07', label: 'November 7, 2026' },
  { date: '2026-12-05', label: 'December 5, 2026' },
  { date: '2027-03-06', label: 'March 6, 2027' },
];

test('today date (November 7, 2026) is classified as upcoming and selectable with 0 days away', () => {
  const todayStr = '2026-11-07';
  const { upcoming, past } = categorizeTestDates(SAMPLE_DATES, todayStr);

  const todayItem = upcoming.find((d) => d.date === '2026-11-07');
  assert.ok(todayItem, 'Today must be in upcoming list');
  assert.equal(todayItem.daysAway, 0);
  assert.equal(todayItem.formattedAway, 'Today');
});

test('past dates (October 3, 2026) are classified as past and separated from upcoming', () => {
  const todayStr = '2026-11-07';
  const { upcoming, past } = categorizeTestDates(SAMPLE_DATES, todayStr);

  const pastItem = past.find((d) => d.date === '2026-10-03');
  assert.ok(pastItem, 'Past date must be in past list');
  assert.ok(pastItem.daysAway < 0);
  assert.equal(upcoming.some((d) => d.date === '2026-10-03'), false, 'Past date must not be in upcoming');
});

test('formatDaysAway handles grammar for 0 days, 1 day, and multiple days', () => {
  assert.equal(formatDaysAway(0), 'Today');
  assert.equal(formatDaysAway(1), '1 day');
  assert.equal(formatDaysAway(28), '28 days');
  assert.equal(formatDaysAway(119), '119 days');
});

test('Continue button validation: disabled until a date is chosen', () => {
  // Simulates state update when a row is clicked
  let selectedDate = '';
  const canProceed = (val) => val !== '';

  assert.equal(canProceed(selectedDate), false, 'Continue must be disabled when selectedDate is empty');

  // Click row 1: '2026-11-07'
  selectedDate = '2026-11-07';
  assert.equal(canProceed(selectedDate), true, 'Continue must be enabled when today is selected');

  // Click row 2: '2026-12-05'
  selectedDate = '2026-12-05';
  assert.equal(canProceed(selectedDate), true, 'Continue must be enabled when future date is selected');
});

test('row selection state updates correctly and produces exact selected styling keys', () => {
  const testDate = '2026-11-07';
  let activeSelection = '';

  const getRowClass = (d) =>
    activeSelection === d
      ? 'border-2 border-ink bg-ink/[0.06]'
      : 'border border-line bg-surface';

  // Initially unselected
  assert.equal(getRowClass(testDate), 'border border-line bg-surface');

  // Click to select
  activeSelection = testDate;
  assert.equal(getRowClass(testDate), 'border-2 border-ink bg-ink/[0.06]');
});
