-- ============================================================
-- SATBase.uz — Telegram Bot Authentication Setup
-- ============================================================

CREATE TABLE IF NOT EXISTS public.telegram_auth_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(10) NOT NULL,
  telegram_id BIGINT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  photo_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (timezone('utc'::text, now()) + interval '10 minutes'),
  used BOOLEAN NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_telegram_auth_codes_lookup 
  ON public.telegram_auth_codes (code, used, expires_at);

CREATE INDEX IF NOT EXISTS idx_telegram_auth_codes_user 
  ON public.telegram_auth_codes (telegram_id, used);

ALTER TABLE public.telegram_auth_codes ENABLE ROW LEVEL SECURITY;

-- Add telegram fields to profiles if not present
ALTER TABLE public.profiles 
  ADD COLUMN IF NOT EXISTS telegram_id BIGINT UNIQUE,
  ADD COLUMN IF NOT EXISTS telegram_username TEXT;

CREATE INDEX IF NOT EXISTS idx_profiles_telegram_id ON public.profiles (telegram_id);
