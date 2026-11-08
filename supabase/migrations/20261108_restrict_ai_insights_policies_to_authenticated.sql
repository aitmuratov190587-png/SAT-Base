-- Migration: 20261108_restrict_ai_insights_policies_to_authenticated.sql
-- Restrict public.ai_insights policies to authenticated role

ALTER POLICY "Users can select own ai insights" ON public.ai_insights TO authenticated;
ALTER POLICY "Users can insert own ai insights" ON public.ai_insights TO authenticated;
ALTER POLICY "Users can update own ai insights" ON public.ai_insights TO authenticated;
ALTER POLICY "Users can delete own ai insights" ON public.ai_insights TO authenticated;
