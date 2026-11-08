-- ============================================================
-- SATBase.uz — Database Schema (Full & Cloud Sync Ready)
-- Run this in Supabase SQL Editor:
-- Dashboard → SQL Editor → New Query → Paste & Run
-- ============================================================

-- ── 1. PROFILES TABLE ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  email TEXT,
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'teacher')),

  -- SAT Setup
  sat_date DATE,
  current_score_math INTEGER CHECK (current_score_math IS NULL OR current_score_math BETWEEN 200 AND 800),
  current_score_english INTEGER CHECK (current_score_english IS NULL OR current_score_english BETWEEN 200 AND 800),
  target_score_math INTEGER CHECK (target_score_math IS NULL OR target_score_math BETWEEN 200 AND 800),
  target_score_english INTEGER CHECK (target_score_english IS NULL OR target_score_english BETWEEN 200 AND 800),
  is_setup_complete BOOLEAN DEFAULT FALSE,

  -- Stats
  streak INTEGER DEFAULT 0,
  total_study_hours NUMERIC DEFAULT 0,
  tests_taken INTEGER DEFAULT 0,
  questions_solved INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Auto-update profiles updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = '';

DROP TRIGGER IF EXISTS profiles_updated_at ON profiles;
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Enable Row Level Security on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT TO authenticated
  USING ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = id);

-- Limit profile writes to fields that a student is allowed to edit. This
-- prevents an authenticated user from granting themselves a teacher role.
REVOKE ALL ON public.profiles FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.profiles FROM authenticated;
GRANT SELECT ON public.profiles TO authenticated;
GRANT INSERT (id, full_name, avatar_url, email) ON public.profiles TO authenticated;
GRANT UPDATE (full_name, avatar_url, sat_date, current_score_math, current_score_english,
  target_score_math, target_score_english, is_setup_complete) ON public.profiles TO authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at() FROM PUBLIC, anon, authenticated;


-- ── 2. USER QUESTION PROGRESS TABLE (MULTI-DEVICE CLOUD SYNC) ──
CREATE TABLE IF NOT EXISTS user_question_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL,          -- masalan: 'rw-crf-1' (Cross-Text Connections)
  question_id TEXT NOT NULL,       -- masalan: 'ctc-001'
  selected_option TEXT NOT NULL,   -- masalan: 'B'
  is_correct BOOLEAN NOT NULL,     -- true / false
  time_seconds INTEGER DEFAULT 0,  -- sarflangan soniyalar
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, question_id)     -- bitta foydalanuvchi bitta savol uchun 1 ta yozuv
);

-- Indexes for lightning fast lookups
CREATE INDEX IF NOT EXISTS idx_uqp_user_topic ON user_question_progress(user_id, topic_id);
CREATE INDEX IF NOT EXISTS idx_uqp_user_question ON user_question_progress(user_id, question_id);

-- Auto-update user_question_progress updated_at timestamp
DROP TRIGGER IF EXISTS user_question_progress_updated_at ON user_question_progress;
CREATE TRIGGER user_question_progress_updated_at
  BEFORE UPDATE ON user_question_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Auto-update profiles.questions_solved counter
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

DROP TRIGGER IF EXISTS on_question_progress_changed ON user_question_progress;
CREATE TRIGGER on_question_progress_changed
  AFTER INSERT OR UPDATE OR DELETE ON user_question_progress
  FOR EACH ROW EXECUTE FUNCTION public.sync_profile_questions_solved();
REVOKE ALL ON FUNCTION public.sync_profile_questions_solved() FROM PUBLIC, anon, authenticated;

-- Enable Row Level Security on user_question_progress
ALTER TABLE user_question_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own question progress" ON user_question_progress;
CREATE POLICY "Users can view own question progress"
  ON user_question_progress FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can insert own question progress" ON user_question_progress;
CREATE POLICY "Users can insert own question progress"
  ON user_question_progress FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can update own question progress" ON user_question_progress;
CREATE POLICY "Users can update own question progress"
  ON user_question_progress FOR UPDATE TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can delete own question progress" ON user_question_progress;
CREATE POLICY "Users can delete own question progress"
  ON user_question_progress FOR DELETE TO authenticated
  USING ((select auth.uid()) = user_id);

REVOKE ALL ON public.user_question_progress FROM anon;
REVOKE ALL ON public.user_question_progress FROM authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_question_progress TO authenticated;
