import { supabase } from './supabaseClient';
import { trackSiteEvent } from './activityTracking';
import { recordAnswerEvent } from './offlineQueue';

export interface UserQuestionProgressRecord {
  id?: string;
  user_id: string;
  topic_id: string;
  question_id: string;
  selected_option: string;
  is_correct: boolean;
  time_seconds: number;
  created_at?: string;
  updated_at?: string;
}

export interface TopicProgressSummary {
  topicId: string;
  solved: number;
  correct: number;
  accuracy: number | null;
  answers: Record<
    string,
    {
      selectedOption: string;
      isCorrect: boolean;
      timeSeconds: number;
    }
  >;
}

const CACHE_KEY_PREFIX = 'satbase_progress_cache_';

/**
 * Get cached progress from localStorage for instantaneous rendering while fetching from Supabase
 */
function getLocalCache(userId: string): Record<string, UserQuestionProgressRecord> {
  try {
    const raw = localStorage.getItem(`${CACHE_KEY_PREFIX}${userId}`);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Save updated record to local cache
 */
function setLocalCache(userId: string, records: Record<string, UserQuestionProgressRecord>) {
  try {
    localStorage.setItem(`${CACHE_KEY_PREFIX}${userId}`, JSON.stringify(records));
  } catch {
    // ignore
  }
}

/**
 * Fetch all question progress records for the user from Supabase Cloud.
 * Returns a topic-indexed map of progress summary.
 */
export async function fetchAllUserProgress(
  userId: string
): Promise<Record<string, TopicProgressSummary>> {
  const localMap = getLocalCache(userId);

  try {
    const { data, error } = await supabase
      .from('user_question_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.warn('Supabase fetch progress error:', error.message);
      // Fallback to local cache if network/offline
      return buildTopicSummaries(Object.values(localMap));
    }

    if (data) {
      // Sync cloud data into local cache
      const freshMap: Record<string, UserQuestionProgressRecord> = {};
      data.forEach((row) => {
        freshMap[row.question_id] = row as UserQuestionProgressRecord;
      });
      setLocalCache(userId, freshMap);
      return buildTopicSummaries(data as UserQuestionProgressRecord[]);
    }
  } catch (err) {
    console.error('Error in fetchAllUserProgress:', err);
  }

  return buildTopicSummaries(Object.values(localMap));
}

/**
 * Save or update an answered question to Supabase Cloud and local cache
 */
export async function saveQuestionProgress(
  userId: string,
  topicId: string,
  questionId: string,
  selectedOption: string,
  isCorrect: boolean,
  timeSeconds: number
): Promise<boolean> {
  const record: UserQuestionProgressRecord = {
    user_id: userId,
    topic_id: topicId,
    question_id: questionId,
    selected_option: selectedOption,
    is_correct: isCorrect,
    time_seconds: timeSeconds,
    updated_at: new Date().toISOString(),
  };

  // 1. Immediately update local cache for zero UI lag
  const localMap = getLocalCache(userId);
  localMap[questionId] = record;
  setLocalCache(userId, localMap);

  // 2. Persist to Supabase Cloud
  try {
    const { error } = await supabase.from('user_question_progress').upsert(
      {
        user_id: userId,
        topic_id: topicId,
        question_id: questionId,
        selected_option: selectedOption,
        is_correct: isCorrect,
        time_seconds: timeSeconds,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,question_id' }
    );

    if (error) {
      console.error('Failed to save to Supabase:', error.message);
      return false;
    }

    // In addition to existing progress write, record granular answer event with offline queue
    if (userId && userId !== 'guest') {
      void trackSiteEvent('question_answered', { topicId, questionId, isCorrect });
      void recordAnswerEvent({
        user_id: userId,
        topic_id: topicId,
        question_id: questionId,
        is_correct: isCorrect,
        time_seconds: timeSeconds,
        source: 'practice',
      });
    }

    return true;
  } catch (err) {
    console.error('Network error saving to Supabase:', err);
    return false;
  }
}

/**
 * Helper to build topic summaries from a list of records
 */
function buildTopicSummaries(
  records: UserQuestionProgressRecord[]
): Record<string, TopicProgressSummary> {
  const summaries: Record<string, TopicProgressSummary> = {};

  records.forEach((rec) => {
    if (!summaries[rec.topic_id]) {
      summaries[rec.topic_id] = {
        topicId: rec.topic_id,
        solved: 0,
        correct: 0,
        accuracy: null,
        answers: {},
      };
    }

    const summary = summaries[rec.topic_id];
    summary.solved += 1;
    if (rec.is_correct) {
      summary.correct += 1;
    }
    summary.answers[rec.question_id] = {
      selectedOption: rec.selected_option,
      isCorrect: rec.is_correct,
      timeSeconds: rec.time_seconds,
    };
  });

  // Calculate percentage accuracy
  Object.values(summaries).forEach((s) => {
    s.accuracy = s.solved > 0 ? Math.round((s.correct / s.solved) * 100) : null;
  });

  return summaries;
}
