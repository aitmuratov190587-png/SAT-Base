-- ============================================================
-- SATBase.uz — Migration: AI Usage & Rate Limiting
-- Tracks daily AI messages per user with 30 msgs/day quota.
-- ============================================================
BEGIN;

CREATE TABLE IF NOT EXISTS public.ai_usage (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  day DATE NOT NULL DEFAULT ((now() AT TIME ZONE 'Asia/Tashkent')::date),
  count INTEGER NOT NULL DEFAULT 0 CHECK (count >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, day)
);

CREATE INDEX IF NOT EXISTS idx_ai_usage_user_day ON public.ai_usage(user_id, day);

ALTER TABLE public.ai_usage ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own AI usage" ON public.ai_usage;
CREATE POLICY "Users can view own AI usage"
  ON public.ai_usage FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can insert own AI usage" ON public.ai_usage;
CREATE POLICY "Users can insert own AI usage"
  ON public.ai_usage FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can update own AI usage" ON public.ai_usage;
CREATE POLICY "Users can update own AI usage"
  ON public.ai_usage FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

REVOKE ALL ON public.ai_usage FROM anon;
GRANT SELECT, INSERT, UPDATE ON public.ai_usage TO authenticated;
GRANT ALL ON public.ai_usage TO service_role;

COMMIT;
