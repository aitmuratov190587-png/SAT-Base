import { supabase } from './supabaseClient';

export interface QueuedAnswerEvent {
  user_id: string;
  topic_id: string;
  question_id: string;
  is_correct: boolean;
  time_seconds: number;
  source: 'practice' | 'mock' | 'drill';
  queued_at: string;
}

const STORAGE_KEY = 'satbase_offline_answer_events';
let isFlushing = false;

function getQueue(): QueuedAnswerEvent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveQueue(queue: QueuedAnswerEvent[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
  } catch (err) {
    console.warn('Failed to persist offline events to localStorage:', err);
  }
}

/**
 * Flush pending answer events stored in localStorage to Supabase
 */
export async function flushOfflineQueue(): Promise<void> {
  if (isFlushing || typeof window === 'undefined') return;
  if (!navigator.onLine) return;

  const queue = getQueue();
  if (queue.length === 0) return;

  isFlushing = true;
  try {
    // Check if user is authenticated
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      isFlushing = false;
      return;
    }

    // Process all events belonging to the current user
    const userEvents = queue.filter((e) => e.user_id === session.user.id);
    const otherEvents = queue.filter((e) => e.user_id !== session.user.id);

    if (userEvents.length === 0) {
      isFlushing = false;
      return;
    }

    // Insert payload without local metadata
    const payload = userEvents.map(({ user_id, topic_id, question_id, is_correct, time_seconds, source }) => ({
      user_id,
      topic_id,
      question_id,
      is_correct,
      time_seconds,
      source,
    }));

    const { error } = await supabase.from('answer_events').insert(payload);

    if (!error) {
      // Successfully written, keep only other events
      saveQueue(otherEvents);
    } else {
      console.warn('Failed to flush offline answer events:', error.message);
    }
  } catch (err) {
    console.warn('Error during offline queue flush:', err);
  } finally {
    isFlushing = false;
  }
}

/**
 * Record an answer event with automatic offline fallback and queueing
 */
export async function recordAnswerEvent(event: Omit<QueuedAnswerEvent, 'queued_at'>): Promise<void> {
  const fullEvent: QueuedAnswerEvent = {
    ...event,
    queued_at: new Date().toISOString(),
  };

  if (!navigator.onLine) {
    const queue = getQueue();
    queue.push(fullEvent);
    saveQueue(queue);
    return;
  }

  try {
    const { error } = await supabase.from('answer_events').insert({
      user_id: event.user_id,
      topic_id: event.topic_id,
      question_id: event.question_id,
      is_correct: event.is_correct,
      time_seconds: event.time_seconds,
      source: event.source,
    });

    if (error) {
      console.warn('Network write failed, queueing answer event offline:', error.message);
      const queue = getQueue();
      queue.push(fullEvent);
      saveQueue(queue);
    } else {
      // If write succeeded, also attempt to flush any earlier queued events
      void flushOfflineQueue();
    }
  } catch (err) {
    console.warn('Caught exception while sending answer event, queueing offline:', err);
    const queue = getQueue();
    queue.push(fullEvent);
    saveQueue(queue);
  }
}

// Auto-register window online listener
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    void flushOfflineQueue();
  });
}
