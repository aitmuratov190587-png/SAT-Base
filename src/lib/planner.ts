import { getSkillName as getTopicSkillName } from './topics';

export type TaskType = 'practice' | 'mock' | 'review' | 'rest';

export interface PlanTask {
  id?: string;
  user_id?: string;
  plan_date: string; // 'YYYY-MM-DD'
  task_type: TaskType;
  title: string;
  topic_id: string | null;
  target_minutes: number;
  done_at?: string | null;
  created_at?: string;
}

export interface WeakSkillInput {
  topicId: string;
  skillName?: string;
  accuracy?: number;
}

export interface GeneratePlanOptions {
  examDate?: string | null;
  goalScore?: number | null;
  currentScore?: number | null;
  weakSkills?: Array<string | WeakSkillInput>;
  dailyMinutes?: number;
  today?: string; // 'YYYY-MM-DD'
}

/**
 * Pure helper: add n calendar days to a 'YYYY-MM-DD' string safely in UTC.
 */
export function addDays(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + days));
  return date.toISOString().slice(0, 10);
}

/**
 * Pure helper: get readable skill name for a topic id from canonical dictionary.
 */
export function getSkillName(topicId: string): string {
  return getTopicSkillName(topicId);
}

/**
 * Formats a task title cleanly so it always displays human-readable skill name.
 */
export function formatTaskTitle(rawTitle: string, topicId?: string | null): string {
  if (topicId) {
    const readable = getSkillName(topicId);
    if (readable && readable !== topicId) {
      if (!rawTitle || rawTitle.includes(topicId) || rawTitle.startsWith('Practice')) {
        return `Practice: ${readable}`;
      }
    }
  }
  return rawTitle;
}

/**
 * Default fallback skills if user has no weak skills identified yet.
 */
const DEFAULT_FALLBACK_TOPICS = [
  'rw-crf-3', // Words in Context
  'm-alg-1', // Linear equations in one variable
  'm-dat-1', // Ratios, rates, proportional relationships, and units
  'rw-inf-1', // Central Ideas and Details
  'm-adv-1', // Equivalent expressions
];

/**
 * Pure function: generate a personalized 14-day study plan.
 * 
 * Rules enforced:
 * 1. Generates tasks for up to 14 days (days 0 to 13).
 * 2. Never schedules tasks after examDate.
 * 3. Total target_minutes on any day does not exceed dailyMinutes.
 * 4. Exactly one rest day per 7-day cycle (Day 6 and Day 13).
 * 5. Full diagnostic mock at the start of each week (Day 0 and Day 7).
 * 6. Review of the error bank twice per week (Days 2 & 5, Days 9 & 12).
 * 7. Weakest skills get the most practice sessions (weighted priority).
 * 8. Never schedule the same skill twice on the same day; spread skills across days.
 */
export function generatePlan(options: GeneratePlanOptions): PlanTask[] {
  const today = options.today || new Date().toISOString().slice(0, 10);
  const dailyMinutes = Math.max(15, options.dailyMinutes ?? 60);
  const examDate = options.examDate || null;

  // Extract clean list of weak topic IDs
  const rawSkills = options.weakSkills || [];
  const normalizedWeakTopics: string[] = [];

  for (const item of rawSkills) {
    if (typeof item === 'string') {
      if (item && !normalizedWeakTopics.includes(item)) {
        normalizedWeakTopics.push(item);
      }
    } else if (item && item.topicId) {
      if (!normalizedWeakTopics.includes(item.topicId)) {
        normalizedWeakTopics.push(item.topicId);
      }
    }
  }

  // Ensure at least 4 distinct topics are available
  for (const fallback of DEFAULT_FALLBACK_TOPICS) {
    if (normalizedWeakTopics.length >= 5) break;
    if (!normalizedWeakTopics.includes(fallback)) {
      normalizedWeakTopics.push(fallback);
    }
  }

  // Stagger pattern ensuring weakest skill is most frequent across the cycle:
  // e.g. [W0, W1, W0, W2, W0, W3, W0, W1, ...]
  const w0 = normalizedWeakTopics[0];
  const w1 = normalizedWeakTopics[1] || DEFAULT_FALLBACK_TOPICS[1];
  const w2 = normalizedWeakTopics[2] || DEFAULT_FALLBACK_TOPICS[2];
  const w3 = normalizedWeakTopics[3] || DEFAULT_FALLBACK_TOPICS[3];
  const others = normalizedWeakTopics.slice(4);

  const pattern = [w0, w1, w0, w2, w0, w3, w0, w1, ...(others.length ? others : [w2, w0])];
  let topicCursor = 0;

  /**
   * Helper to pick a topic for the day that is not already scheduled on that same day.
   */
  const pickDistinctTopicForDay = (alreadyUsedOnDay: Set<string>): string => {
    // Try next in pattern
    for (let attempts = 0; attempts < pattern.length; attempts++) {
      const candidate = pattern[(topicCursor + attempts) % pattern.length];
      if (!alreadyUsedOnDay.has(candidate)) {
        topicCursor = (topicCursor + attempts + 1) % pattern.length;
        alreadyUsedOnDay.add(candidate);
        return candidate;
      }
    }

    // Fallback: pick any from all known topics not used today
    for (const fb of [...normalizedWeakTopics, ...DEFAULT_FALLBACK_TOPICS]) {
      if (!alreadyUsedOnDay.has(fb)) {
        alreadyUsedOnDay.add(fb);
        return fb;
      }
    }

    // Absolute fallback (only happens if >10 sessions in a single day)
    const fallbackTopic = pattern[topicCursor % pattern.length];
    topicCursor++;
    return fallbackTopic;
  };

  const tasks: PlanTask[] = [];

  for (let dayOffset = 0; dayOffset < 14; dayOffset++) {
    const planDate = addDays(today, dayOffset);

    // Rule: never schedule after the exam date
    if (examDate && planDate > examDate) {
      break;
    }

    const dayInCycle = dayOffset % 7; // 0..6
    const dayUsedTopics = new Set<string>();

    // Rule: one rest day per 7 days (day 6 of week 1 and day 6 of week 2)
    if (dayInCycle === 6) {
      tasks.push({
        plan_date: planDate,
        task_type: 'rest',
        title: 'Rest and recovery',
        topic_id: null,
        target_minutes: 0,
        done_at: null,
      });
      continue;
    }

    // Rule: a full diagnostic at the start of each week (Day 0 and Day 7)
    if (dayInCycle === 0) {
      const mockMinutes = Math.min(dailyMinutes, 45);
      tasks.push({
        plan_date: planDate,
        task_type: 'mock',
        title: 'Diagnostic mock test',
        topic_id: null,
        target_minutes: mockMinutes,
        done_at: null,
      });

      const remaining = dailyMinutes - mockMinutes;
      if (remaining >= 15) {
        const practiceTopic = pickDistinctTopicForDay(dayUsedTopics);
        tasks.push({
          plan_date: planDate,
          task_type: 'practice',
          title: `Practice: ${getSkillName(practiceTopic)}`,
          topic_id: practiceTopic,
          target_minutes: remaining,
          done_at: null,
        });
      }
      continue;
    }

    // Rule: review of the error bank twice a week (Days 2 and 5 in each 7-day cycle)
    const isErrorBankDay = dayInCycle === 2 || dayInCycle === 5;
    let availableMinutes = dailyMinutes;

    if (isErrorBankDay) {
      const reviewMinutes = dailyMinutes <= 30 ? 15 : dailyMinutes <= 60 ? 20 : 30;
      tasks.push({
        plan_date: planDate,
        task_type: 'review',
        title: 'Review error bank',
        topic_id: null,
        target_minutes: reviewMinutes,
        done_at: null,
      });
      availableMinutes -= reviewMinutes;
    }

    // Fill remaining minutes with practice session(s), ensuring no same skill twice on same day
    if (availableMinutes > 0) {
      if (availableMinutes <= 35) {
        // Single session
        const topicId = pickDistinctTopicForDay(dayUsedTopics);
        tasks.push({
          plan_date: planDate,
          task_type: 'practice',
          title: `Practice: ${getSkillName(topicId)}`,
          topic_id: topicId,
          target_minutes: availableMinutes,
          done_at: null,
        });
      } else {
        // Split into 2 balanced sessions with DISTINCT skills
        const firstMins = Math.floor(availableMinutes / 2);
        const secondMins = availableMinutes - firstMins;

        const topicId1 = pickDistinctTopicForDay(dayUsedTopics);
        tasks.push({
          plan_date: planDate,
          task_type: 'practice',
          title: `Practice: ${getSkillName(topicId1)}`,
          topic_id: topicId1,
          target_minutes: firstMins,
          done_at: null,
        });

        const topicId2 = pickDistinctTopicForDay(dayUsedTopics);
        tasks.push({
          plan_date: planDate,
          task_type: 'practice',
          title: `Practice: ${getSkillName(topicId2)}`,
          topic_id: topicId2,
          target_minutes: secondMins,
          done_at: null,
        });
      }
    }
  }

  return tasks;
}
