-- Keep activity writes inside per-user RLS policies and validate timer increments.
BEGIN;

DROP POLICY IF EXISTS "Users can insert own study sessions" ON public.study_sessions;
CREATE POLICY "Users can insert own study sessions"
  ON public.study_sessions FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);
DROP POLICY IF EXISTS "Users can update own study sessions" ON public.study_sessions;
CREATE POLICY "Users can update own study sessions"
  ON public.study_sessions FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);
REVOKE ALL ON public.study_sessions FROM anon, authenticated;
GRANT SELECT ON public.study_sessions TO authenticated;
GRANT INSERT (user_id, session_id, duration_seconds) ON public.study_sessions TO authenticated;
GRANT UPDATE (duration_seconds, last_activity_at) ON public.study_sessions TO authenticated;

CREATE OR REPLACE FUNCTION public.guard_study_session_increment()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.duration_seconds NOT BETWEEN 1 AND 60 THEN RAISE EXCEPTION 'Invalid study time increment'; END IF;
    NEW.started_at := NOW();
    NEW.last_activity_at := NOW();
  ELSE
    IF NEW.user_id <> OLD.user_id OR NEW.session_id <> OLD.session_id OR
       NEW.duration_seconds - OLD.duration_seconds NOT BETWEEN 1 AND 60 THEN
      RAISE EXCEPTION 'Invalid study time increment';
    END IF;
    NEW.last_activity_at := NOW();
  END IF;
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.guard_study_session_increment() FROM PUBLIC, anon, authenticated;
DROP TRIGGER IF EXISTS validate_study_session_increment ON public.study_sessions;
CREATE TRIGGER validate_study_session_increment
  BEFORE INSERT OR UPDATE ON public.study_sessions
  FOR EACH ROW EXECUTE FUNCTION public.guard_study_session_increment();

CREATE OR REPLACE FUNCTION public.record_study_time(p_session_id UUID, p_seconds INTEGER)
RETURNS VOID LANGUAGE plpgsql SECURITY INVOKER SET search_path = '' AS $$
DECLARE account_id UUID := auth.uid();
BEGIN
  IF account_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_session_id IS NULL OR p_seconds IS NULL OR p_seconds NOT BETWEEN 1 AND 60 THEN
    RAISE EXCEPTION 'Invalid study time increment';
  END IF;
  INSERT INTO public.study_sessions (user_id, session_id, duration_seconds)
  VALUES (account_id, p_session_id, p_seconds)
  ON CONFLICT (user_id, session_id) DO UPDATE SET
    duration_seconds = public.study_sessions.duration_seconds + EXCLUDED.duration_seconds,
    last_activity_at = NOW();
END;
$$;
REVOKE ALL ON FUNCTION public.record_study_time(UUID, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_study_time(UUID, INTEGER) TO authenticated;

DROP POLICY IF EXISTS "Users can insert own FlashRush attempts" ON public.flashrush_attempts;
CREATE POLICY "Users can insert own FlashRush attempts"
  ON public.flashrush_attempts FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);
REVOKE ALL ON public.flashrush_attempts FROM anon, authenticated;
GRANT SELECT ON public.flashrush_attempts TO authenticated;
GRANT INSERT (user_id, attempt_id, math, english, answered, correct)
  ON public.flashrush_attempts TO authenticated;
ALTER TABLE public.flashrush_attempts
  DROP CONSTRAINT IF EXISTS flashrush_attempts_correct_not_above_answered;
ALTER TABLE public.flashrush_attempts
  ADD CONSTRAINT flashrush_attempts_correct_not_above_answered CHECK (correct <= answered);

CREATE OR REPLACE FUNCTION public.sync_profile_flashrush_statistics()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE affected_user_id UUID := CASE WHEN TG_OP = 'DELETE' THEN OLD.user_id ELSE NEW.user_id END;
BEGIN
  UPDATE public.profiles SET
    tests_taken = (SELECT COUNT(*) FROM public.flashrush_attempts WHERE user_id = affected_user_id),
    questions_solved =
      (SELECT COUNT(*) FROM public.user_question_progress WHERE user_id = affected_user_id) +
      (SELECT COALESCE(SUM(answered), 0) FROM public.flashrush_attempts WHERE user_id = affected_user_id)
  WHERE id = affected_user_id;
  IF TG_OP = 'DELETE' THEN RETURN OLD; END IF;
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.sync_profile_flashrush_statistics() FROM PUBLIC, anon, authenticated;
DROP TRIGGER IF EXISTS sync_flashrush_profile_statistics ON public.flashrush_attempts;
CREATE TRIGGER sync_flashrush_profile_statistics
  AFTER INSERT OR DELETE ON public.flashrush_attempts
  FOR EACH ROW EXECUTE FUNCTION public.sync_profile_flashrush_statistics();

CREATE OR REPLACE FUNCTION public.record_flashrush_attempt(
  p_attempt_id UUID, p_math INTEGER, p_english INTEGER, p_answered INTEGER, p_correct INTEGER
)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY INVOKER SET search_path = '' AS $$
DECLARE account_id UUID := auth.uid();
DECLARE inserted_count INTEGER;
BEGIN
  IF account_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_attempt_id IS NULL OR p_math IS NULL OR p_english IS NULL OR p_answered IS NULL OR p_correct IS NULL OR
     p_math NOT BETWEEN 200 AND 800 OR p_math % 10 <> 0 OR
     p_english NOT BETWEEN 200 AND 800 OR p_english % 10 <> 0 OR
     p_answered NOT BETWEEN 0 AND 20 OR p_correct NOT BETWEEN 0 AND p_answered THEN
    RAISE EXCEPTION 'Invalid practice result';
  END IF;
  INSERT INTO public.flashrush_attempts (user_id, attempt_id, math, english, answered, correct)
  VALUES (account_id, p_attempt_id, p_math, p_english, p_answered, p_correct)
  ON CONFLICT (user_id, attempt_id) DO NOTHING;
  GET DIAGNOSTICS inserted_count = ROW_COUNT;
  RETURN inserted_count = 1;
END;
$$;
REVOKE ALL ON FUNCTION public.record_flashrush_attempt(UUID, INTEGER, INTEGER, INTEGER, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_flashrush_attempt(UUID, INTEGER, INTEGER, INTEGER, INTEGER) TO authenticated;

COMMIT;
