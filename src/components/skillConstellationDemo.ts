import type { AnswerEvent } from '../lib/analytics';

/**
 * Dev-only constellation fixture for ?demo=stars.
 * Dynamically imported ONLY when import.meta.env.DEV is true so it is
 * completely excluded from production bundles and never writes to Supabase.
 *
 * Covers every state:
 * - strong (>= 80%, >= 5 answers): m-alg-1, m-alg-3, m-dat-1, m-dat-2, m-dat-6, rw-crf-1
 * - getting_there (70-79%): m-alg-2, m-dat-3
 * - improving (< 70% overall, trendDelta >= +10): m-alg-4 (53% overall, +25 trend -> getting_there)
 * - needs_work (< 70%): m-adv-1, m-adv-2, m-dat-4 (makes Advanced Math the weakest domain)
 * - not_started (< 5 answers): m-alg-5 (2 answers), m-adv-3 (0), m-dat-5 (3 answers), m-dat-7 (0)
 * - coming_soon (isAvailable: false): all geometry-trig & unavailable RW skills
 */
function makeBatch(
  topicId: string,
  total: number,
  correctCount: number,
  startIso: string
): AnswerEvent[] {
  const baseMs = new Date(startIso).getTime();
  return Array.from({ length: total }, (_, idx) => ({
    topic_id: topicId,
    question_id: `demo-${topicId}-${idx}-${baseMs}`,
    is_correct: idx >= total - correctCount,
    time_seconds: 38,
    source: 'practice',
    created_at: new Date(baseMs + idx * 60_000).toISOString(),
  }));
}

export const DEMO_STAR_EVENTS: AnswerEvent[] = [
  // Strong skills (6 total -> "6 of 29 skills are shining")
  ...makeBatch('m-alg-1', 10, 9, '2026-10-10T10:00:00Z'), // 90% strong
  ...makeBatch('m-alg-3', 10, 9, '2026-10-11T10:00:00Z'), // 90% strong
  ...makeBatch('m-dat-1', 5, 5, '2026-10-12T10:00:00Z'),  // 100% strong
  ...makeBatch('m-dat-2', 10, 8, '2026-10-13T10:00:00Z'), // 80% strong
  ...makeBatch('m-dat-6', 10, 9, '2026-10-14T10:00:00Z'), // 90% strong
  ...makeBatch('rw-crf-1', 10, 9, '2026-10-15T10:00:00Z'), // 90% strong

  // Getting there (70-79%)
  ...makeBatch('m-alg-2', 8, 6, '2026-10-16T10:00:00Z'),  // 75% getting_there
  ...makeBatch('m-dat-3', 10, 7, '2026-10-17T10:00:00Z'), // 70% getting_there

  // Improving (40 answers: previous 20 @ 40% -> recent 20 @ 65% => total 53%, +25 delta -> getting_there)
  ...makeBatch('m-alg-4', 20, 8, '2026-10-18T10:00:00Z'),
  ...makeBatch('m-alg-4', 20, 13, '2026-10-19T10:00:00Z'),

  // Needs work (< 70%, low trend)
  ...makeBatch('m-adv-1', 6, 2, '2026-10-20T10:00:00Z'),  // 33% needs_work
  ...makeBatch('m-adv-2', 6, 3, '2026-10-21T10:00:00Z'),  // 50% needs_work
  ...makeBatch('m-dat-4', 6, 3, '2026-10-22T10:00:00Z'),  // 50% needs_work

  // Not started (< 5 answers threshold)
  ...makeBatch('m-alg-5', 2, 1, '2026-10-23T10:00:00Z'),  // 2/5 not_started
  ...makeBatch('m-dat-5', 3, 2, '2026-10-24T10:00:00Z'),  // 3/5 not_started
];
