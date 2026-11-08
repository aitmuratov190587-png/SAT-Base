/**
 * Pure date calculations for SATBase onboarding test date selector.
 */

export interface TestDateItem {
  date: string; // YYYY-MM-DD
  label: string; // e.g. "November 7, 2026"
}

/**
 * Parses YYYY-MM-DD calendar difference in days relative to an anchor date (defaults to today).
 * Avoids UTC timezone parsing shifts by extracting date components directly.
 */
export function getCalendarDayDiff(targetDateStr: string, anchorDateStr?: string): number {
  const anchor = anchorDateStr || getLocalTodayStr();
  const [targetY, targetM, targetD] = targetDateStr.split('-').map(Number);
  const [anchorY, anchorM, anchorD] = anchor.split('-').map(Number);

  const targetUtc = Date.UTC(targetY, targetM - 1, targetD);
  const anchorUtc = Date.UTC(anchorY, anchorM - 1, anchorD);

  return Math.round((targetUtc - anchorUtc) / (1000 * 60 * 60 * 24));
}

/**
 * Returns YYYY-MM-DD in local time
 */
export function getLocalTodayStr(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formats day difference into sentence-style label with grammar:
 * - 0 => "Today"
 * - 1 => "1 day"
 * - n => "{n} days"
 */
export function formatDaysAway(diff: number): string {
  if (diff === 0) return 'Today';
  if (diff === 1) return '1 day';
  if (diff > 1) return `${diff} days`;
  if (diff === -1) return '1 day ago';
  return `${Math.abs(diff)} days ago`;
}

/**
 * Splits official test dates into upcoming (selectable, diff >= 0) and past (disabled, diff < 0).
 */
export function categorizeTestDates(
  dates: TestDateItem[],
  anchorDateStr?: string
): {
  upcoming: Array<TestDateItem & { daysAway: number; formattedAway: string }>;
  past: Array<TestDateItem & { daysAway: number; formattedAway: string }>;
} {
  const upcoming: Array<TestDateItem & { daysAway: number; formattedAway: string }> = [];
  const past: Array<TestDateItem & { daysAway: number; formattedAway: string }> = [];

  for (const item of dates) {
    const diff = getCalendarDayDiff(item.date, anchorDateStr);
    const enriched = {
      ...item,
      daysAway: diff,
      formattedAway: formatDaysAway(diff),
    };
    if (diff >= 0) {
      upcoming.push(enriched);
    } else {
      past.push(enriched);
    }
  }

  return { upcoming, past };
}
