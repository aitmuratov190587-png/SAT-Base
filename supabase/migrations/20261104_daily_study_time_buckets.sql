-- Keep study time attributed to the local calendar day when it was accumulated.
BEGIN;

ALTER TABLE public.study_sessions ADD COLUMN IF NOT EXISTS study_day DATE NOT NULL
  DEFAULT ((NOW() AT TIME ZONE 'Asia/Tashkent')::DATE);

CREATE OR REPLACE FUNCTION public.guard_study_session_increment()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.duration_seconds NOT BETWEEN 1 AND 60 THEN RAISE EXCEPTION 'Invalid study time increment'; END IF;
    NEW.started_at := NOW();
    NEW.last_activity_at := NOW();
    NEW.study_day := (NOW() AT TIME ZONE 'Asia/Tashkent')::DATE;
  ELSE
    IF NEW.user_id <> OLD.user_id OR NEW.session_id <> OLD.session_id OR
       NEW.duration_seconds - OLD.duration_seconds NOT BETWEEN 1 AND 60 THEN
      RAISE EXCEPTION 'Invalid study time increment';
    END IF;
    NEW.last_activity_at := NOW();
    NEW.study_day := OLD.study_day;
  END IF;
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.guard_study_session_increment() FROM PUBLIC, anon, authenticated;

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
         COALESCE(SUM(duration_seconds) FILTER (WHERE study_day = today_local), 0),
         COALESCE(SUM(duration_seconds) FILTER (WHERE study_day >= today_local - 6), 0)
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
      SELECT study_day::TIMESTAMP
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
