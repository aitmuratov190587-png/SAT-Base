import { supabase } from './supabaseClient';

export interface InsightResult {
  text: string;
  cached: boolean;
  remaining?: number;
}

export async function fetchAIInsight(
  kind: 'analytics' | 'plan',
  facts: Record<string, unknown>,
  lang: 'en' | 'uz' = 'en'
): Promise<InsightResult | null> {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = {};
    if (session?.access_token) {
      headers['Authorization'] = `Bearer ${session.access_token}`;
    }

    const { data, error } = await supabase.functions.invoke('insights', {
      headers,
      body: {
        kind,
        facts,
        lang,
      },
    });

    if (error || data?.error) {
      return null;
    }

    if (data?.text && typeof data.text === 'string') {
      return {
        text: data.text.trim(),
        cached: Boolean(data.cached),
        remaining: typeof data.remaining === 'number' ? data.remaining : undefined,
      };
    }

    return null;
  } catch {
    // Non-blocking fallback
    return null;
  }
}
