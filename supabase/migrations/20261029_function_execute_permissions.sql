-- Remove direct RPC access to internal trigger functions and restrict the
-- FlashRush result RPC to signed-in users only.
BEGIN;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.sync_profile_questions_solved() FROM PUBLIC, anon, authenticated;

REVOKE ALL ON FUNCTION public.save_flashrush_result(UUID, INTEGER, INTEGER, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.save_flashrush_result(UUID, INTEGER, INTEGER, INTEGER) TO authenticated;

DROP POLICY IF EXISTS "Read own FlashRush attempts" ON public.flashrush_attempts;
CREATE POLICY "Read own FlashRush attempts"
  ON public.flashrush_attempts FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

COMMIT;
