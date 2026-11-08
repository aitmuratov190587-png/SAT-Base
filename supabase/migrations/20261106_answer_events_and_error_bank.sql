-- ============================================================
-- SATBase.uz — Migration: Answer Events & Error Bank
-- Supports granular analytics telemetry and persistent error vault.
-- ============================================================
BEGIN;

-- ── 1. ANSWER EVENTS TABLE ──────────────────────────────────
-- Records every single answer event across practice arenas and mock tests.
CREATE TABLE IF NOT EXISTS public.answer_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_seconds INTEGER NOT NULL DEFAULT 0 CHECK (time_seconds >= 0),
  source TEXT NOT NULL CHECK (source IN ('practice', 'mock')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_answer_events_user_created ON public.answer_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_answer_events_user_topic ON public.answer_events(user_id, topic_id);

ALTER TABLE public.answer_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own answer events" ON public.answer_events;
CREATE POLICY "Users can view own answer events"
  ON public.answer_events FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can insert own answer events" ON public.answer_events;
CREATE POLICY "Users can insert own answer events"
  ON public.answer_events FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

REVOKE ALL ON public.answer_events FROM anon;
GRANT SELECT, INSERT ON public.answer_events TO authenticated;


-- ── 2. ERROR BANK TABLE ──────────────────────────────────────
-- Persistent cloud store for saved mistake review.
CREATE TABLE IF NOT EXISTS public.error_bank (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  topic_id TEXT,
  added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  resolved_at TIMESTAMPTZ NULL,
  UNIQUE(user_id, question_id)
);

CREATE INDEX IF NOT EXISTS idx_error_bank_user_unresolved ON public.error_bank(user_id) WHERE resolved_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_error_bank_user_question ON public.error_bank(user_id, question_id);

ALTER TABLE public.error_bank ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own error bank" ON public.error_bank;
CREATE POLICY "Users can view own error bank"
  ON public.error_bank FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can insert own error bank" ON public.error_bank;
CREATE POLICY "Users can insert own error bank"
  ON public.error_bank FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can update own error bank" ON public.error_bank;
CREATE POLICY "Users can update own error bank"
  ON public.error_bank FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can delete own error bank" ON public.error_bank;
CREATE POLICY "Users can delete own error bank"
  ON public.error_bank FOR DELETE TO authenticated
  USING ((select auth.uid()) = user_id);

REVOKE ALL ON public.error_bank FROM anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.error_bank TO authenticated;

COMMIT;
