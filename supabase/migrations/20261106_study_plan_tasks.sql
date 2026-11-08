-- ============================================================
-- SATBase.uz — Migration: Study Plan Tasks
-- Supports personalized schedule, day planner, and task tracking.
-- ============================================================
BEGIN;

CREATE TABLE IF NOT EXISTS public.study_plan_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_date DATE NOT NULL,
  task_type TEXT NOT NULL CHECK (task_type IN ('practice', 'mock', 'review', 'rest')),
  title TEXT NOT NULL,
  topic_id TEXT NULL,
  target_minutes INTEGER NOT NULL DEFAULT 30 CHECK (target_minutes >= 0),
  done_at TIMESTAMPTZ NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_study_plan_tasks_user_date ON public.study_plan_tasks(user_id, plan_date ASC);
CREATE INDEX IF NOT EXISTS idx_study_plan_tasks_user_done ON public.study_plan_tasks(user_id, done_at);

ALTER TABLE public.study_plan_tasks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own study plan tasks" ON public.study_plan_tasks;
CREATE POLICY "Users can view own study plan tasks"
  ON public.study_plan_tasks FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can insert own study plan tasks" ON public.study_plan_tasks;
CREATE POLICY "Users can insert own study plan tasks"
  ON public.study_plan_tasks FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can update own study plan tasks" ON public.study_plan_tasks;
CREATE POLICY "Users can update own study plan tasks"
  ON public.study_plan_tasks FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can delete own study plan tasks" ON public.study_plan_tasks;
CREATE POLICY "Users can delete own study plan tasks"
  ON public.study_plan_tasks FOR DELETE TO authenticated
  USING ((select auth.uid()) = user_id);

REVOKE ALL ON public.study_plan_tasks FROM anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_plan_tasks TO authenticated;

COMMIT;
