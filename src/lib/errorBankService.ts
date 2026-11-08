import { supabase } from './supabaseClient';

const LOCAL_STORAGE_KEY = 'satbase_error_bank';

export interface ErrorBankItem {
  id?: string;
  user_id: string;
  question_id: string;
  topic_id?: string | null;
  added_at?: string;
  resolved_at?: string | null;
}

/**
 * Reads offline error bank set from localStorage
 */
export function getLocalErrorBank(): Set<string> {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

/**
 * Writes error bank set to localStorage
 */
function setLocalErrorBank(set: Set<string>): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    // ignore
  }
}

/**
 * Fetches all unresolved errors for user, syncing with local cache.
 * Automatically migrates any offline-added items to Supabase on first run.
 */
export async function fetchErrorBank(userId: string): Promise<string[]> {
  const localSet = getLocalErrorBank();

  if (!userId || userId === 'guest') {
    return [...localSet];
  }

  try {
    // Fetch from Supabase
    const { data, error } = await supabase
      .from('error_bank')
      .select('question_id, topic_id')
      .eq('user_id', userId)
      .is('resolved_at', null);

    if (error) {
      console.warn('Supabase error fetching error_bank:', error.message);
      return [...localSet];
    }

    const cloudSet = new Set((data || []).map((row) => row.question_id));

    // Migrate offline items that are in local storage but not in cloud
    const toMigrate: string[] = [];
    localSet.forEach((qId) => {
      if (!cloudSet.has(qId)) {
        toMigrate.push(qId);
      }
    });

    if (toMigrate.length > 0) {
      const inserts = toMigrate.map((qId) => ({
        user_id: userId,
        question_id: qId,
        added_at: new Date().toISOString(),
      }));
      void supabase
        .from('error_bank')
        .upsert(inserts, { onConflict: 'user_id,question_id' })
        .then(({ error: insertErr }) => {
          if (insertErr) console.warn('Error migrating offline error bank:', insertErr.message);
        });
    }

    // Merge cloud and local, update local storage cache
    const merged = new Set([...localSet, ...cloudSet]);
    setLocalErrorBank(merged);
    return [...merged];
  } catch (err) {
    console.error('Error in fetchErrorBank:', err);
    return [...localSet];
  }
}

/**
 * Adds a question to the Error Bank (updates local storage immediately, then cloud)
 */
export async function addToErrorBank(
  userId: string,
  questionId: string,
  topicId?: string
): Promise<void> {
  const localSet = getLocalErrorBank();
  localSet.add(questionId);
  setLocalErrorBank(localSet);

  if (!userId || userId === 'guest') return;

  try {
    const { error } = await supabase.from('error_bank').upsert(
      {
        user_id: userId,
        question_id: questionId,
        topic_id: topicId || null,
        added_at: new Date().toISOString(),
        resolved_at: null,
      },
      { onConflict: 'user_id,question_id' }
    );
    if (error) {
      console.warn('Error saving to error_bank:', error.message);
    }
  } catch (err) {
    console.error('Error in addToErrorBank:', err);
  }
}

/**
 * Removes or resolves an item from the Error Bank
 */
export async function removeFromErrorBank(userId: string, questionId: string): Promise<void> {
  const localSet = getLocalErrorBank();
  localSet.delete(questionId);
  setLocalErrorBank(localSet);

  if (!userId || userId === 'guest') return;

  try {
    const { error } = await supabase
      .from('error_bank')
      .delete()
      .eq('user_id', userId)
      .eq('question_id', questionId);

    if (error) {
      console.warn('Error removing from error_bank:', error.message);
    }
  } catch (err) {
    console.error('Error in removeFromErrorBank:', err);
  }
}
