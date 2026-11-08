export interface AnalyticsFactsInput {
  totalAnswers: number;
  mathAccuracy: number;
  englishAccuracy: number;
  mathDelta?: number;
  englishDelta?: number;
  weakestSkills: Array<{ name: string; count: number }>;
  avgTimeSec?: number;
  streak: number;
  daysToExam?: number;
  currentScore?: number;
  targetScore?: number;
}

export interface PlanFactsInput {
  daysToExam?: number;
  dailyMinutes: number;
  weeklyTargetMinutes: number;
  focusSkills: string[];
  restDays: number;
  plannedTasksCount: number;
  hasDiagnosticWeekly?: boolean;
}

/**
 * Builds safe, compact facts for Analytics.
 * Strictly whitelists aggregate numerical metrics only.
 * Strips any user identifiable info (names, emails, raw text).
 */
export function buildAnalyticsFacts(input: AnalyticsFactsInput): Record<string, unknown> {
  const safeWeakSkills = (input.weakestSkills || [])
    .slice(0, 3)
    .map((s) => ({
      name: String(s.name || '').slice(0, 80),
      count: Number(s.count) || 0,
    }));

  const facts: Record<string, unknown> = {
    totalAnswers: Math.max(0, Math.floor(input.totalAnswers || 0)),
    mathAccuracy: Math.min(100, Math.max(0, Math.round(input.mathAccuracy || 0))),
    englishAccuracy: Math.min(100, Math.max(0, Math.round(input.englishAccuracy || 0))),
    streak: Math.max(0, Math.floor(input.streak || 0)),
    weakestSkills: safeWeakSkills,
  };

  if (typeof input.mathDelta === 'number' && Number.isFinite(input.mathDelta)) {
    facts.mathDelta = Math.round(input.mathDelta);
  }
  if (typeof input.englishDelta === 'number' && Number.isFinite(input.englishDelta)) {
    facts.englishDelta = Math.round(input.englishDelta);
  }
  if (typeof input.avgTimeSec === 'number' && Number.isFinite(input.avgTimeSec)) {
    facts.avgTimeSec = Math.round(input.avgTimeSec);
  }
  if (typeof input.daysToExam === 'number' && Number.isFinite(input.daysToExam)) {
    facts.daysToExam = Math.max(0, Math.floor(input.daysToExam));
  }
  if (typeof input.currentScore === 'number' && Number.isFinite(input.currentScore)) {
    facts.currentScore = Math.floor(input.currentScore);
  }
  if (typeof input.targetScore === 'number' && Number.isFinite(input.targetScore)) {
    facts.targetScore = Math.floor(input.targetScore);
  }

  // Ensure JSON size limit < 3000 chars
  const serialized = JSON.stringify(facts);
  if (serialized.length > 3000) {
    facts.weakestSkills = safeWeakSkills.slice(0, 1);
  }

  return facts;
}

/**
 * Builds safe, compact facts for Study Plan.
 * Strictly whitelists plan structure numbers and skill titles only.
 */
export function buildPlanFacts(input: PlanFactsInput): Record<string, unknown> {
  const safeFocusSkills = (input.focusSkills || [])
    .slice(0, 3)
    .map((s) => String(s).slice(0, 80));

  const facts: Record<string, unknown> = {
    dailyMinutes: Math.max(15, Math.min(180, Math.floor(input.dailyMinutes || 60))),
    weeklyTargetMinutes: Math.max(0, Math.floor(input.weeklyTargetMinutes || 0)),
    restDays: Math.max(0, Math.floor(input.restDays || 1)),
    plannedTasksCount: Math.max(0, Math.floor(input.plannedTasksCount || 0)),
    focusSkills: safeFocusSkills,
  };

  if (typeof input.daysToExam === 'number' && Number.isFinite(input.daysToExam)) {
    facts.daysToExam = Math.max(0, Math.floor(input.daysToExam));
  }
  if (input.hasDiagnosticWeekly !== undefined) {
    facts.hasDiagnosticWeekly = Boolean(input.hasDiagnosticWeekly);
  }

  // Ensure JSON size limit < 3000 chars
  const serialized = JSON.stringify(facts);
  if (serialized.length > 3000) {
    facts.focusSkills = safeFocusSkills.slice(0, 1);
  }

  return facts;
}
