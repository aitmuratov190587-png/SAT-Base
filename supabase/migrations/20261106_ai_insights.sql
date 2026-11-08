-- Migration: 20261106_ai_insights.sql
-- Description: Cache table for Cosmo AI insights and separate insight rate limiting

-- 1. Add insight_count column to public.ai_usage if not exists
ALTER TABLE public.ai_usage
ADD COLUMN IF NOT EXISTS insight_count integer NOT NULL DEFAULT 0;

-- 2. Create public.ai_insights table for 24-hour response caching
CREATE TABLE IF NOT EXISTS public.ai_insights (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind text NOT NULL CHECK (kind IN ('analytics', 'plan')),
  facts_hash text NOT NULL,
  text text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for rapid 24-hour cache resolution
CREATE INDEX IF NOT EXISTS idx_ai_insights_lookup
ON public.ai_insights(user_id, kind, facts_hash, created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.ai_insights ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'ai_insights' AND policyname = 'Users can select own ai insights'
  ) THEN
    CREATE POLICY "Users can select own ai insights"
    ON public.ai_insights FOR SELECT
    USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'ai_insights' AND policyname = 'Users can insert own ai insights'
  ) THEN
    CREATE POLICY "Users can insert own ai insights"
    ON public.ai_insights FOR INSERT
    WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'ai_insights' AND policyname = 'Users can update own ai insights'
  ) THEN
    CREATE POLICY "Users can update own ai insights"
    ON public.ai_insights FOR UPDATE
    USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'ai_insights' AND policyname = 'Users can delete own ai insights'
  ) THEN
    CREATE POLICY "Users can delete own ai insights"
    ON public.ai_insights FOR DELETE
    USING (auth.uid() = user_id);
  END IF;
END $$;
