BEGIN;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS first_visit_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS last_active_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS country TEXT,
  ADD COLUMN IF NOT EXISTS city TEXT,
  ADD COLUMN IF NOT EXISTS device_type TEXT CHECK (device_type IS NULL OR device_type IN ('mobile','desktop','tablet')),
  ADD COLUMN IF NOT EXISTS browser TEXT,
  ADD COLUMN IF NOT EXISTS operating_system TEXT,
  ADD COLUMN IF NOT EXISTS traffic_source TEXT,
  ADD COLUMN IF NOT EXISTS account_status TEXT NOT NULL DEFAULT 'active' CHECK (account_status IN ('active','inactive','blocked')),
  ADD COLUMN IF NOT EXISTS subscription_plan TEXT NOT NULL DEFAULT 'free' CHECK (subscription_plan IN ('free','premium'));

CREATE TABLE IF NOT EXISTS public.site_sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_start TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  session_end TIMESTAMPTZ,
  page TEXT NOT NULL DEFAULT '/',
  device_type TEXT CHECK (device_type IS NULL OR device_type IN ('mobile','desktop','tablet')),
  browser TEXT,
  operating_system TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (session_end IS NULL OR session_end >= session_start)
);

CREATE TABLE IF NOT EXISTS public.user_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id UUID,
  page TEXT NOT NULL DEFAULT '/',
  event_type TEXT NOT NULL CHECK (event_type IN ('visit','login','test_started','test_completed','question_answered','page_view')),
  event_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON public.profiles(created_at);
CREATE INDEX IF NOT EXISTS idx_profiles_first_visit ON public.profiles(first_visit_at);
CREATE INDEX IF NOT EXISTS idx_profiles_last_active ON public.profiles(last_active_at);
CREATE INDEX IF NOT EXISTS idx_site_sessions_user_start ON public.site_sessions(user_id, session_start DESC);
CREATE INDEX IF NOT EXISTS idx_site_sessions_start ON public.site_sessions(session_start DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_user_created ON public.user_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_created ON public.user_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_type_created ON public.user_events(event_type, created_at DESC);

ALTER TABLE public.site_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users manage own site sessions" ON public.site_sessions;
CREATE POLICY "Users manage own site sessions" ON public.site_sessions FOR ALL TO authenticated
  USING ((select auth.uid()) = user_id) WITH CHECK ((select auth.uid()) = user_id);
DROP POLICY IF EXISTS "Users can record own events" ON public.user_events;
CREATE POLICY "Users can record own events" ON public.user_events FOR INSERT TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);
DROP POLICY IF EXISTS "Users can read own events" ON public.user_events;
CREATE POLICY "Users can read own events" ON public.user_events FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);
GRANT SELECT, INSERT, UPDATE ON public.site_sessions TO authenticated;
GRANT SELECT, INSERT ON public.user_events TO authenticated;
REVOKE ALL ON public.site_sessions, public.user_events FROM anon;

COMMIT;
