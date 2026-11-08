-- Apply after 20260912_reliability.sql. Safe for existing SATBase databases.
-- Repairs progress deletion, restricts browser permissions, and resolves the
-- Supabase security and RLS-performance advisories for these tables.
BEGIN;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
    COALESCE(NEW.email, '')
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    avatar_url = EXCLUDED.avatar_url,
    email = EXCLUDED.email;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = '' AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.sync_profile_questions_solved()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  affected_user_id UUID;
BEGIN
  affected_user_id := CASE WHEN TG_OP = 'DELETE' THEN OLD.user_id ELSE NEW.user_id END;

  UPDATE public.profiles
  SET questions_solved = (
    SELECT COUNT(*) FROM public.user_question_progress WHERE user_id = affected_user_id
  )
  WHERE id = affected_user_id;

  IF TG_OP = 'DELETE' THEN RETURN OLD; END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.update_updated_at() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.sync_profile_questions_solved() FROM PUBLIC;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT TO authenticated
  USING ((select auth.uid()) = id);
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = id);

REVOKE ALL ON public.profiles FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.profiles FROM authenticated;
GRANT SELECT ON public.profiles TO authenticated;
GRANT INSERT (id, full_name, avatar_url, email) ON public.profiles TO authenticated;
GRANT UPDATE (full_name, avatar_url, sat_date, current_score_math, current_score_english,
  target_score_math, target_score_english, is_setup_complete) ON public.profiles TO authenticated;

DROP POLICY IF EXISTS "Users can view own question progress" ON public.user_question_progress;
CREATE POLICY "Users can view own question progress"
  ON public.user_question_progress FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);
DROP POLICY IF EXISTS "Users can insert own question progress" ON public.user_question_progress;
CREATE POLICY "Users can insert own question progress"
  ON public.user_question_progress FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);
DROP POLICY IF EXISTS "Users can update own question progress" ON public.user_question_progress;
CREATE POLICY "Users can update own question progress"
  ON public.user_question_progress FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);
DROP POLICY IF EXISTS "Users can delete own question progress" ON public.user_question_progress;
CREATE POLICY "Users can delete own question progress"
  ON public.user_question_progress FOR DELETE TO authenticated
  USING ((select auth.uid()) = user_id);

REVOKE ALL ON public.user_question_progress FROM anon;
REVOKE ALL ON public.user_question_progress FROM authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_question_progress TO authenticated;

COMMIT;
