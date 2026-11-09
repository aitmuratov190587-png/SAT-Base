-- 1. Ensure plan and plan_expires_at columns exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'plan'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN plan text NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'ultra_pro', 'vip'));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'profiles' AND column_name = 'plan_expires_at'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN plan_expires_at timestamptz NULL;
  END IF;
END $$;

-- 2. Create security trigger on profiles to block client updates to plan / subscription_plan / plan_expires_at
CREATE OR REPLACE FUNCTION public.protect_user_plan_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check if executed by regular authenticated or anon user
  IF current_setting('request.jwt.claim.role', true) IS DISTINCT FROM 'service_role' 
     AND current_user NOT IN ('postgres', 'supabase_admin') THEN
    
    IF NEW.plan IS DISTINCT FROM OLD.plan THEN
      RAISE EXCEPTION 'Permission denied: Users cannot change their subscription plan.';
    END IF;

    IF NEW.subscription_plan IS DISTINCT FROM OLD.subscription_plan THEN
      RAISE EXCEPTION 'Permission denied: Users cannot change their subscription plan.';
    END IF;

    IF NEW.plan_expires_at IS DISTINCT FROM OLD.plan_expires_at THEN
      RAISE EXCEPTION 'Permission denied: Users cannot change plan expiration.';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS tr_protect_user_plan_change ON public.profiles;
CREATE TRIGGER tr_protect_user_plan_change
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_user_plan_change();

-- 3. Set aitmuratov190587@gmail.com to VIP status
UPDATE public.profiles
SET plan = 'vip', subscription_plan = 'vip'
WHERE email = 'aitmuratov190587@gmail.com';

-- 4. Create plan_limits table
CREATE TABLE IF NOT EXISTS public.plan_limits (
  plan text PRIMARY KEY CHECK (plan IN ('free', 'pro', 'ultra_pro', 'vip')),
  tutor_per_day int NOT NULL,
  insights_per_day int NOT NULL,
  mocks_limit int NULL,
  auto_plan boolean NOT NULL DEFAULT false,
  full_analytics boolean NOT NULL DEFAULT false,
  image_uploads_per_day int NOT NULL DEFAULT 2
);

ALTER TABLE public.plan_limits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view plan limits" ON public.plan_limits;
CREATE POLICY "Anyone can view plan limits"
  ON public.plan_limits FOR SELECT
  USING (true);

INSERT INTO public.plan_limits (plan, tutor_per_day, insights_per_day, mocks_limit, auto_plan, full_analytics, image_uploads_per_day)
VALUES
  ('free', 15, 0, 6, false, false, 2),
  ('pro', 50, 10, NULL, true, true, 15),
  ('ultra_pro', 100, 20, NULL, true, true, 100),
  ('vip', 999999, 999999, NULL, true, true, 999999)
ON CONFLICT (plan) DO UPDATE SET
  tutor_per_day = EXCLUDED.tutor_per_day,
  insights_per_day = EXCLUDED.insights_per_day,
  mocks_limit = EXCLUDED.mocks_limit,
  auto_plan = EXCLUDED.auto_plan,
  full_analytics = EXCLUDED.full_analytics,
  image_uploads_per_day = EXCLUDED.image_uploads_per_day;

-- 5. Global limits & Circuit breaker
CREATE TABLE IF NOT EXISTS public.app_limits (
  key text PRIMARY KEY,
  value int NOT NULL
);
ALTER TABLE public.app_limits ENABLE ROW LEVEL SECURITY;

INSERT INTO public.app_limits (key, value)
VALUES ('ai_global_daily_cap', 2000)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

CREATE TABLE IF NOT EXISTS public.ai_usage_global (
  day date PRIMARY KEY DEFAULT CURRENT_DATE,
  count int NOT NULL DEFAULT 0
);
ALTER TABLE public.ai_usage_global ENABLE ROW LEVEL SECURITY;

-- 6. Table for recording user waitlist interest
CREATE TABLE IF NOT EXISTS public.plan_interest (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  plan text NOT NULL,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE public.plan_interest ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can insert own plan interest" ON public.plan_interest;
CREATE POLICY "Users can insert own plan interest"
  ON public.plan_interest FOR INSERT
  WITH CHECK (auth.uid() = user_id);
