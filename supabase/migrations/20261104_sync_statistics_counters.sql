-- Keep profile counters consistent with the real practice and test records.
BEGIN;

CREATE OR REPLACE FUNCTION public.sync_profile_questions_solved()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  affected_user_id UUID := CASE WHEN TG_OP = 'DELETE' THEN OLD.user_id ELSE NEW.user_id END;
BEGIN
  UPDATE public.profiles
  SET questions_solved =
    (SELECT COUNT(*) FROM public.user_question_progress WHERE user_id = affected_user_id) +
    (SELECT COALESCE(SUM(answered), 0) FROM public.flashrush_attempts WHERE user_id = affected_user_id)
  WHERE id = affected_user_id;
  IF TG_OP = 'DELETE' THEN RETURN OLD; END IF;
  RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.sync_profile_questions_solved() FROM PUBLIC, anon, authenticated;

UPDATE public.profiles p SET
  tests_taken = (SELECT COUNT(*) FROM public.flashrush_attempts f WHERE f.user_id = p.id),
  questions_solved =
    (SELECT COUNT(*) FROM public.user_question_progress q WHERE q.user_id = p.id) +
    (SELECT COALESCE(SUM(f.answered), 0) FROM public.flashrush_attempts f WHERE f.user_id = p.id);

COMMIT;
