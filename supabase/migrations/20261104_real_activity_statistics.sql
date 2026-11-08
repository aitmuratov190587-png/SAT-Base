-- Persist active study time and derive dashboard statistics from recorded activity.
BEGIN;

CREATE TABLE IF NOT EXISTS public.study_sessions (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL,
  duration_seconds INTEGER NOT NULL DEFAULT 0 CHECK (duration_seconds >= 0),
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_activity_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, session_id)
);

ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own study sessions" ON public.study_sessions;
CREATE POLICY "Users can view own study sessions"
  ON public.study_sessions FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);
REVOKE ALL ON public.study_sessions FROM anon, authenticated;
GRANT SELECT ON public.study_sessions TO authenticated;

ALTER TABLE public.flashrush_attempts
  ADD COLUMN IF NOT EXISTS correct INTEGER NOT NULL DEFAULT 0 CHECK (correct BETWEEN 0 AND 20);

DROP FUNCTION IF EXISTS public.save_flashrush_result(UUID, INTEGER, INTEGER, INTEGER);

CREATE OR REPLACE FUNCTION public.record_study_time(p_session_id UUID, p_seconds INTEGER)
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  account_id UUID := auth.uid();
BEGIN
  IF account_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_session_id IS NULL OR p_seconds IS NULL OR p_seconds NOT BETWEEN 1 AND 60 THEN
    RAISE EXCEPTION 'Invalid study time increment';
  END IF;

  INSERT INTO public.study_sessions (user_id, session_id, duration_seconds, started_at, last_activity_at)
  VALUES (account_id, p_session_id, p_seconds, NOW(), NOW())
  ON CONFLICT (user_id, session_id) DO UPDATE SET
    duration_seconds = public.study_sessions.duration_seconds + EXCLUDED.duration_seconds,
    last_activity_at = NOW();
END;
$$;
REVOKE ALL ON FUNCTION public.record_study_time(UUID, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_study_time(UUID, INTEGER) TO authenticated;

CREATE OR REPLACE FUNCTION public.record_flashrush_attempt(
  p_attempt_id UUID,
  p_math INTEGER,
  p_english INTEGER,
  p_answered INTEGER,
  p_correct INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  account_id UUID := auth.uid();
  inserted_count INTEGER;
BEGIN
  IF account_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_attempt_id IS NULL OR p_math NOT BETWEEN 200 AND 800 OR p_math % 10 <> 0 OR
     p_english NOT BETWEEN 200 AND 800 OR p_english % 10 <> 0 OR
     p_answered NOT BETWEEN 0 AND 20 OR p_correct NOT BETWEEN 0 AND p_answered THEN
    RAISE EXCEPTION 'Invalid practice result';
  END IF;

  PERFORM 1 FROM public.profiles WHERE id = account_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Profile not found'; END IF;

  INSERT INTO public.flashrush_attempts (user_id, attempt_id, math, english, answered, correct)
  VALUES (account_id, p_attempt_id, p_math, p_english, p_answered, p_correct)
  ON CONFLICT (user_id, attempt_id) DO NOTHING;
  GET DIAGNOSTICS inserted_count = ROW_COUNT;

  IF inserted_count = 1 THEN
    UPDATE public.profiles SET
      tests_taken = (SELECT COUNT(*) FROM public.flashrush_attempts WHERE user_id = account_id),
      questions_solved =
        (SELECT COUNT(*) FROM public.user_question_progress WHERE user_id = account_id) +
        (SELECT COALESCE(SUM(answered), 0) FROM public.flashrush_attempts WHERE user_id = account_id)
    WHERE id = account_id;
  END IF;
  RETURN inserted_count = 1;
END;
$$;
REVOKE ALL ON FUNCTION public.record_flashrush_attempt(UUID, INTEGER, INTEGER, INTEGER, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_flashrush_attempt(UUID, INTEGER, INTEGER, INTEGER, INTEGER) TO authenticated;

CREATE OR REPLACE FUNCTION public.get_my_statistics()
RETURNS JSONB
LANGUAGE plpgsql STABLE SECURITY INVOKER SET search_path = '' AS $$
DECLARE
  account_id UUID := auth.uid();
  today_local DATE := (NOW() AT TIME ZONE 'Asia/Tashkent')::DATE;
  total_questions INTEGER;
  correct_questions INTEGER;
  test_count INTEGER;
  total_seconds BIGINT;
  today_seconds BIGINT;
  week_seconds BIGINT;
  anchor_day DATE;
  streak_days INTEGER := 0;
  activity_days DATE[];
BEGIN
  IF account_id IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;

  SELECT COUNT(*) + COALESCE((SELECT SUM(answered) FROM public.flashrush_attempts WHERE user_id = account_id), 0),
         COUNT(*) FILTER (WHERE is_correct) + COALESCE((SELECT SUM(correct) FROM public.flashrush_attempts WHERE user_id = account_id), 0)
    INTO total_questions, correct_questions
    FROM public.user_question_progress WHERE user_id = account_id;

  SELECT COUNT(*) INTO test_count FROM public.flashrush_attempts WHERE user_id = account_id;
  SELECT COALESCE(SUM(duration_seconds), 0),
         COALESCE(SUM(duration_seconds) FILTER (WHERE (last_activity_at AT TIME ZONE 'Asia/Tashkent')::DATE = today_local), 0),
         COALESCE(SUM(duration_seconds) FILTER (WHERE (last_activity_at AT TIME ZONE 'Asia/Tashkent')::DATE >= today_local - 6), 0)
    INTO total_seconds, today_seconds, week_seconds
    FROM public.study_sessions WHERE user_id = account_id;

  SELECT ARRAY_AGG(day) INTO activity_days FROM (
    SELECT DISTINCT activity_at::DATE AS day FROM (
      SELECT updated_at AT TIME ZONE 'Asia/Tashkent' AS activity_at
        FROM public.user_question_progress WHERE user_id = account_id
      UNION ALL
      SELECT created_at AT TIME ZONE 'Asia/Tashkent'
        FROM public.flashrush_attempts WHERE user_id = account_id
      UNION ALL
      SELECT last_activity_at AT TIME ZONE 'Asia/Tashkent'
        FROM public.study_sessions WHERE user_id = account_id
    ) activities
  ) days;

  SELECT MAX(day) INTO anchor_day FROM UNNEST(COALESCE(activity_days, ARRAY[]::DATE[])) AS day
    WHERE day >= today_local - 1 AND day <= today_local;
  IF anchor_day IS NOT NULL THEN
    WHILE anchor_day - streak_days = ANY(COALESCE(activity_days, ARRAY[]::DATE[])) LOOP
      streak_days := streak_days + 1;
    END LOOP;
  END IF;

  RETURN JSONB_BUILD_OBJECT(
    'streak', streak_days,
    'totalStudyHours', ROUND(total_seconds::NUMERIC / 3600, 2),
    'studySeconds', total_seconds,
    'todayStudySeconds', today_seconds,
    'weekStudySeconds', week_seconds,
    'testsTaken', test_count,
    'questionsSolved', total_questions,
    'correctAnswers', correct_questions,
    'accuracy', CASE WHEN total_questions > 0 THEN ROUND(correct_questions::NUMERIC * 100 / total_questions) ELSE NULL END
  );
END;
$$;
REVOKE ALL ON FUNCTION public.get_my_statistics() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_my_statistics() TO authenticated;

COMMIT;
