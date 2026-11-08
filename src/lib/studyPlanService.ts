import { supabase } from './supabaseClient';
import { PlanTask, TaskType } from './planner';

const LOCAL_STORAGE_KEY = 'satbase_study_plan_tasks';

/**
 * Reads cached tasks from localStorage
 */
export function getLocalStudyPlanTasks(): PlanTask[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Writes tasks to localStorage
 */
export function setLocalStudyPlanTasks(tasks: PlanTask[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // ignore
  }
}

/**
 * Fetches all study plan tasks for the user from Supabase, syncing with offline cache.
 */
export async function fetchStudyPlanTasks(userId: string): Promise<PlanTask[]> {
  const localTasks = getLocalStudyPlanTasks();

  if (!userId || userId === 'guest') {
    return localTasks;
  }

  try {
    const { data, error } = await supabase
      .from('study_plan_tasks')
      .select('*')
      .eq('user_id', userId)
      .order('plan_date', { ascending: true })
      .order('created_at', { ascending: true });

    if (error) {
      console.warn('Supabase fetch error for study_plan_tasks:', error.message);
      return localTasks;
    }

    if (data) {
      const formatted: PlanTask[] = data.map((row) => ({
        id: row.id,
        user_id: row.user_id,
        plan_date: row.plan_date,
        task_type: row.task_type as TaskType,
        title: row.title,
        topic_id: row.topic_id,
        target_minutes: row.target_minutes,
        done_at: row.done_at,
        created_at: row.created_at,
      }));

      setLocalStudyPlanTasks(formatted);
      return formatted;
    }

    return localTasks;
  } catch (err) {
    console.warn('Network error fetching study plan tasks:', err);
    return localTasks;
  }
}

/**
 * Creates or updates a single task.
 */
export async function saveStudyPlanTask(
  userId: string,
  task: Partial<PlanTask> & { plan_date: string; task_type: TaskType; title: string }
): Promise<PlanTask> {
  const newTask: PlanTask = {
    id: task.id || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`),
    user_id: userId,
    plan_date: task.plan_date,
    task_type: task.task_type,
    title: task.title.trim(),
    topic_id: task.topic_id || null,
    target_minutes: Math.max(0, task.target_minutes ?? 30),
    done_at: task.done_at || null,
    created_at: task.created_at || new Date().toISOString(),
  };

  // Update local cache
  const local = getLocalStudyPlanTasks();
  const existingIdx = local.findIndex((t) => t.id === newTask.id);
  if (existingIdx >= 0) {
    local[existingIdx] = newTask;
  } else {
    local.push(newTask);
  }
  setLocalStudyPlanTasks(local);

  if (userId && userId !== 'guest') {
    try {
      const { data, error } = await supabase
        .from('study_plan_tasks')
        .upsert({
          id: newTask.id,
          user_id: userId,
          plan_date: newTask.plan_date,
          task_type: newTask.task_type,
          title: newTask.title,
          topic_id: newTask.topic_id,
          target_minutes: newTask.target_minutes,
          done_at: newTask.done_at,
        })
        .select()
        .single();

      if (!error && data) {
        return {
          id: data.id,
          user_id: data.user_id,
          plan_date: data.plan_date,
          task_type: data.task_type as TaskType,
          title: data.title,
          topic_id: data.topic_id,
          target_minutes: data.target_minutes,
          done_at: data.done_at,
          created_at: data.created_at,
        };
      }
    } catch (err) {
      console.warn('Error upserting task in Supabase:', err);
    }
  }

  return newTask;
}

/**
 * Toggles a task between done and pending.
 */
export async function toggleTaskDone(
  userId: string,
  taskId: string,
  isDone: boolean
): Promise<{ done_at: string | null }> {
  const doneAt = isDone ? new Date().toISOString() : null;

  // Update local cache
  const local = getLocalStudyPlanTasks();
  const target = local.find((t) => t.id === taskId);
  if (target) {
    target.done_at = doneAt;
    setLocalStudyPlanTasks(local);
  }

  if (userId && userId !== 'guest') {
    try {
      await supabase
        .from('study_plan_tasks')
        .update({ done_at: doneAt })
        .eq('id', taskId)
        .eq('user_id', userId);
    } catch (err) {
      console.warn('Error updating done_at in Supabase:', err);
    }
  }

  return { done_at: doneAt };
}

/**
 * Moves a task to another date (used in drag-and-drop).
 */
export async function moveTaskDate(
  userId: string,
  taskId: string,
  newDate: string
): Promise<void> {
  const local = getLocalStudyPlanTasks();
  const target = local.find((t) => t.id === taskId);
  if (target) {
    target.plan_date = newDate;
    setLocalStudyPlanTasks(local);
  }

  if (userId && userId !== 'guest') {
    try {
      await supabase
        .from('study_plan_tasks')
        .update({ plan_date: newDate })
        .eq('id', taskId)
        .eq('user_id', userId);
    } catch (err) {
      console.warn('Error updating plan_date in Supabase:', err);
    }
  }
}

/**
 * Deletes a task.
 */
export async function deleteStudyPlanTask(userId: string, taskId: string): Promise<void> {
  const local = getLocalStudyPlanTasks().filter((t) => t.id !== taskId);
  setLocalStudyPlanTasks(local);

  if (userId && userId !== 'guest') {
    try {
      await supabase
        .from('study_plan_tasks')
        .delete()
        .eq('id', taskId)
        .eq('user_id', userId);
    } catch (err) {
      console.warn('Error deleting task from Supabase:', err);
    }
  }
}

/**
 * Applies a generated batch of plan tasks without overwriting done tasks.
 */
export async function applyGeneratedPlan(
  userId: string,
  newTasks: PlanTask[]
): Promise<PlanTask[]> {
  const currentTasks = await fetchStudyPlanTasks(userId);

  // Group current tasks: preserve done tasks
  const doneTasks = currentTasks.filter((t) => t.done_at !== null);

  // Determine tasks to insert
  const toInsert: PlanTask[] = [];

  for (const t of newTasks) {
    // If user already completed a task on this date, we don't clobber it,
    // but we can append or replace undone tasks
    toInsert.push({
      ...t,
      id: (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `plan-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`),
      user_id: userId,
    });
  }

  if (userId && userId !== 'guest') {
    try {
      // Delete undone tasks in the date range of newTasks
      const dates = [...new Set(newTasks.map((t) => t.plan_date))];
      if (dates.length > 0) {
        await supabase
          .from('study_plan_tasks')
          .delete()
          .eq('user_id', userId)
          .is('done_at', null)
          .in('plan_date', dates);
      }

      // Insert new tasks
      const rows = toInsert.map((t) => ({
        id: t.id,
        user_id: userId,
        plan_date: t.plan_date,
        task_type: t.task_type,
        title: t.title,
        topic_id: t.topic_id,
        target_minutes: t.target_minutes,
        done_at: null,
      }));

      if (rows.length > 0) {
        await supabase.from('study_plan_tasks').insert(rows);
      }
    } catch (err) {
      console.warn('Error applying generated plan to Supabase:', err);
    }
  }

  // Combined local list
  const combined = [...doneTasks, ...toInsert].sort((a, b) => a.plan_date.localeCompare(b.plan_date));
  setLocalStudyPlanTasks(combined);
  return combined;
}

/**
 * Saves/updates user's SAT exam date in profiles.
 */
export async function updateProfileSatDate(userId: string, satDate: string): Promise<void> {
  if (!userId || userId === 'guest') return;
  try {
    await supabase
      .from('profiles')
      .update({ sat_date: satDate })
      .eq('id', userId);
  } catch (err) {
    console.warn('Error updating sat_date in profiles:', err);
  }
}
