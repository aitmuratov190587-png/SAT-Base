import { getTopicMeta, SectionType } from './topics';

export interface AnswerEvent {
  id?: string;
  user_id?: string;
  topic_id: string;
  question_id: string;
  is_correct: boolean;
  time_seconds: number;
  source: 'practice' | 'mock';
  created_at: string;
}

export interface FlashRushAttempt {
  attempt_id: string;
  math: number;
  english: number;
  answered: number;
  correct: number;
  created_at: string;
}

export interface StudySessionItem {
  study_day?: string; // YYYY-MM-DD
  duration_seconds: number;
  started_at?: string;
}

export interface SkillAccuracy {
  topicId: string;
  skillName: string;
  domain: string;
  section: SectionType;
  total: number;
  correct: number;
  accuracy: number;
  practiceRoute?: string;
}

/**
 * Calculates total, correct, and percentage accuracy grouped by topic/skill.
 */
export function accuracyBySkill(events: AnswerEvent[]): Record<string, SkillAccuracy> {
  const result: Record<string, SkillAccuracy> = {};

  for (const ev of events) {
    if (!ev.topic_id) continue;
    if (!result[ev.topic_id]) {
      const meta = getTopicMeta(ev.topic_id);
      result[ev.topic_id] = {
        topicId: ev.topic_id,
        skillName: meta.skillName,
        domain: meta.domain,
        section: meta.section,
        total: 0,
        correct: 0,
        accuracy: 0,
        practiceRoute: meta.practiceRoute,
      };
    }

    const item = result[ev.topic_id];
    item.total += 1;
    if (ev.is_correct) {
      item.correct += 1;
    }
  }

  for (const topicId of Object.keys(result)) {
    const item = result[topicId];
    item.accuracy = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
  }

  return result;
}

/**
 * Calculates average time spent per question in seconds for each topic.
 */
export function avgTimeBySkill(events: AnswerEvent[]): Record<string, number> {
  const totals: Record<string, { totalTime: number; count: number }> = {};

  for (const ev of events) {
    if (!ev.topic_id) continue;
    if (!totals[ev.topic_id]) {
      totals[ev.topic_id] = { totalTime: 0, count: 0 };
    }
    totals[ev.topic_id].totalTime += Math.max(0, ev.time_seconds || 0);
    totals[ev.topic_id].count += 1;
  }

  const result: Record<string, number> = {};
  for (const topicId of Object.keys(totals)) {
    const { totalTime, count } = totals[topicId];
    result[topicId] = count > 0 ? Math.round(totalTime / count) : 0;
  }

  return result;
}

/**
 * Returns the n weakest skills (lowest accuracy) that have at least minAnswered questions.
 */
export function weakestSkills(
  events: AnswerEvent[],
  n = 5,
  minAnswered = 5
): SkillAccuracy[] {
  const bySkill = accuracyBySkill(events);
  const qualified = Object.values(bySkill).filter((s) => s.total >= minAnswered);

  qualified.sort((a, b) => {
    if (a.accuracy !== b.accuracy) {
      return a.accuracy - b.accuracy;
    }
    return b.total - a.total; // more attempts tie-breaker
  });

  return qualified.slice(0, n);
}

export interface ScorePoint {
  date: string;
  displayDate: string;
  total: number;
  math: number;
  rw: number;
}

/**
 * Normalizes previous mock test attempts into a chronologically sorted score history.
 */
export function scoreHistory(attempts: FlashRushAttempt[]): ScorePoint[] {
  if (!attempts || attempts.length === 0) return [];

  const sorted = [...attempts].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  // Group by base date to number attempts on same day (#1, #2)
  const dateCounts: Record<string, number> = {};
  const baseDates = sorted.map((att) => {
    const d = new Date(att.created_at);
    const base = !isNaN(d.getTime())
      ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
      : 'Test';
    dateCounts[base] = (dateCounts[base] || 0) + 1;
    return base;
  });

  const dateIndices: Record<string, number> = {};
  return sorted.map((att, i) => {
    const base = baseDates[i];
    let displayDate = base;
    if (dateCounts[base] > 1) {
      dateIndices[base] = (dateIndices[base] || 0) + 1;
      displayDate = `${base} #${dateIndices[base]}`;
    }

    return {
      date: att.created_at,
      displayDate,
      total: att.math + att.english,
      math: att.math,
      rw: att.english,
    };
  });
}

/**
 * Generates a day-by-day map of study minutes for the given day range (defaults to 30 days).
 */
export function studyMinutesByDay(
  sessions: StudySessionItem[],
  daysRange = 30,
  referenceDate?: string
): Record<string, number> {
  const result: Record<string, number> = {};
  const baseDate = referenceDate ? new Date(referenceDate) : new Date();

  // Initialize all days in range with 0 minutes
  for (let i = daysRange - 1; i >= 0; i--) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - i);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const key = `${yyyy}-${mm}-${dd}`;
    result[key] = 0;
  }

  for (const s of sessions) {
    let dayKey = s.study_day;
    if (!dayKey && s.started_at) {
      const d = new Date(s.started_at);
      if (!isNaN(d.getTime())) {
        dayKey = d.toISOString().split('T')[0];
      }
    }
    if (dayKey && dayKey in result) {
      result[dayKey] += Math.round((s.duration_seconds || 0) / 60);
    }
  }

  return result;
}

/**
 * Helper to safely subtract one calendar day in UTC without timezone drift.
 */
function getPreviousDateString(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() - 1);
  return dt.toISOString().split('T')[0];
}

/**
 * Computes unbroken activity day streak up to today or yesterday.
 */
export function streak(activityDays: string[], today?: string): number {
  if (!activityDays || activityDays.length === 0) return 0;

  const uniqueDays = Array.from(new Set(activityDays))
    .filter(Boolean)
    .sort()
    .reverse();

  if (uniqueDays.length === 0) return 0;

  const targetDateStr = today || new Date().toISOString().split('T')[0];
  const yesterdayStr = getPreviousDateString(targetDateStr);

  const mostRecent = uniqueDays[0];
  if (mostRecent !== targetDateStr && mostRecent !== yesterdayStr) {
    return 0; // Streak broken if no activity today or yesterday
  }

  const daySet = new Set(uniqueDays);
  let count = 0;
  let checkDay = mostRecent;

  while (daySet.has(checkDay)) {
    count += 1;
    checkDay = getPreviousDateString(checkDay);
  }

  return count;
}

export interface TrendResult {
  recentAccuracy: number;
  previousAccuracy: number;
  delta: number;
  direction: 'up' | 'down' | 'flat';
  totalEvaluated: number;
}

/**
 * Computes trend for a skill: compares accuracy of the last 20 answers vs previous 20 answers.
 */
export function trend(events: AnswerEvent[], topicId: string): TrendResult {
  const filtered = events
    .filter((e) => e.topic_id === topicId)
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());

  if (filtered.length === 0) {
    return {
      recentAccuracy: 0,
      previousAccuracy: 0,
      delta: 0,
      direction: 'flat',
      totalEvaluated: 0,
    };
  }

  const recentEvents = filtered.slice(-20);
  const previousEvents = filtered.slice(-40, -20);

  const recentCorrect = recentEvents.filter((e) => e.is_correct).length;
  const recentAccuracy = Math.round((recentCorrect / recentEvents.length) * 100);

  if (previousEvents.length === 0) {
    return {
      recentAccuracy,
      previousAccuracy: recentAccuracy,
      delta: 0,
      direction: 'flat',
      totalEvaluated: recentEvents.length,
    };
  }

  const prevCorrect = previousEvents.filter((e) => e.is_correct).length;
  const previousAccuracy = Math.round((prevCorrect / previousEvents.length) * 100);
  const delta = recentAccuracy - previousAccuracy;

  let direction: 'up' | 'down' | 'flat' = 'flat';
  if (delta > 2) direction = 'up';
  else if (delta < -2) direction = 'down';

  return {
    recentAccuracy,
    previousAccuracy,
    delta,
    direction,
    totalEvaluated: recentEvents.length + previousEvents.length,
  };
}
