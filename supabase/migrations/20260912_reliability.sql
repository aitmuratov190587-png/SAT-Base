-- Apply once using Supabase SQL Editor (safe to re-run).
-- Diagnostic scores are self-reported practice estimates, not verified exam scores.
BEGIN;

CREATE TABLE IF NOT EXISTS public.flashrush_attempts (
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  attempt_id UUID NOT NULL,
  math INTEGER NOT NULL CHECK (math BETWEEN 200 AND 800 AND math % 10 = 0),
  english INTEGER NOT NULL CHECK (english BETWEEN 200 AND 800 AND english % 10 = 0),
  answered INTEGER NOT NULL CHECK (answered BETWEEN 0 AND 20),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, attempt_id)
);
ALTER TABLE public.flashrush_attempts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Read own FlashRush attempts" ON public.flashrush_attempts;
CREATE POLICY "Read own FlashRush attempts" ON public.flashrush_attempts FOR SELECT TO authenticated USING (auth.uid() = user_id);
REVOKE ALL ON public.flashrush_attempts FROM anon, authenticated;
GRANT SELECT ON public.flashrush_attempts TO authenticated;

CREATE OR REPLACE FUNCTION public.save_flashrush_result(p_attempt_id UUID, p_math INTEGER, p_english INTEGER, p_answered INTEGER)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  account_id UUID := auth.uid();
  inserted_count INTEGER;
  result JSONB;
BEGIN
  IF account_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_attempt_id IS NULL OR p_math IS NULL OR p_english IS NULL OR p_answered IS NULL OR
     p_math NOT BETWEEN 200 AND 800 OR p_english NOT BETWEEN 200 AND 800 OR
     p_math % 10 <> 0 OR p_english % 10 <> 0 OR p_answered NOT BETWEEN 0 AND 20 THEN
    RAISE EXCEPTION 'Invalid practice result';
  END IF;
  -- Serialize attempts for the same profile and atomically avoid duplicate counters.
  PERFORM 1 FROM public.profiles WHERE id = account_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Profile not found'; END IF;
  INSERT INTO public.flashrush_attempts (user_id, attempt_id, math, english, answered)
  VALUES (account_id, p_attempt_id, p_math, p_english, p_answered)
  ON CONFLICT (user_id, attempt_id) DO NOTHING;
  GET DIAGNOSTICS inserted_count = ROW_COUNT;
  UPDATE public.profiles SET
    current_score_math = p_math, current_score_english = p_english,
    tests_taken = COALESCE(tests_taken, 0) + inserted_count,
    questions_solved = COALESCE(questions_solved, 0) + inserted_count * p_answered
  WHERE id = account_id;
  SELECT jsonb_build_object('tests_taken', tests_taken, 'questions_solved', questions_solved)
    INTO result FROM public.profiles WHERE id = account_id;
  RETURN result;
END;
$$;
REVOKE ALL ON FUNCTION public.save_flashrush_result(UUID, INTEGER, INTEGER, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.save_flashrush_result(UUID, INTEGER, INTEGER, INTEGER) TO authenticated;

-- Users may edit their own study profile, but not grant themselves teacher privileges.
REVOKE ALL ON public.profiles FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.profiles FROM authenticated;
GRANT SELECT ON public.profiles TO authenticated;
GRANT INSERT (id, full_name, avatar_url, email) ON public.profiles TO authenticated;
GRANT UPDATE (full_name, avatar_url, sat_date, current_score_math, current_score_english,
  target_score_math, target_score_english, is_setup_complete) ON public.profiles TO authenticated;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, email)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''), COALESCE(NEW.email, ''))
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
COMMIT;
