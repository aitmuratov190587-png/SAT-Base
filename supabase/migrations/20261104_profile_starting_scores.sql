-- Keep a student's original SAT baseline separate from their changing practice estimate.
BEGIN;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS starting_score_math INTEGER,
  ADD COLUMN IF NOT EXISTS starting_score_english INTEGER;

ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_starting_score_math_range,
  DROP CONSTRAINT IF EXISTS profiles_starting_score_english_range;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_starting_score_math_range
    CHECK (starting_score_math IS NULL OR starting_score_math BETWEEN 200 AND 800),
  ADD CONSTRAINT profiles_starting_score_english_range
    CHECK (starting_score_english IS NULL OR starting_score_english BETWEEN 200 AND 800);

GRANT UPDATE (starting_score_math, starting_score_english)
  ON public.profiles TO authenticated;

COMMIT;
