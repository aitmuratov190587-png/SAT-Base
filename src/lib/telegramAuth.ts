import { supabase } from './supabaseClient';

export interface TelegramAuthResult {
  success: boolean;
  error?: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://qkobxopqcmyoqxrklpvg.supabase.co';

/**
 * Verifies a 6-digit OTP code obtained from @satbase_bot and signs the user in.
 */
export async function verifyTelegramCode(code: string): Promise<TelegramAuthResult> {
  const cleanCode = code.replace(/\D/g, '').trim();
  if (cleanCode.length !== 6) {
    return {
      success: false,
      error: 'Please enter the complete 6-digit code from the bot.',
    };
  }

  try {
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (supabaseAnonKey) {
      headers['apikey'] = supabaseAnonKey;
      headers['Authorization'] = `Bearer ${supabaseAnonKey}`;
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/telegram-auth`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ code: cleanCode }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.success) {
      return {
        success: false,
        error: data.error || 'Code is invalid or has expired. Please get a fresh code from @satbase_bot.',
      };
    }

    // 1. If valid session tokens are returned, set them on the client
    if (data.session?.access_token && data.session?.refresh_token) {
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });

      if (!sessionError) {
        return { success: true };
      }

      console.warn('setSession error, falling back to token_hash OTP:', sessionError);
    }

    // 2. Fallback to verifyOtp using token_hash
    if (data.token_hash) {
      const { error: otpError } = await supabase.auth.verifyOtp({
        token_hash: data.token_hash,
        type: 'magiclink',
      });

      if (otpError) {
        return {
          success: false,
          error: otpError.message || 'Failed to activate session. Please try again.',
        };
      }

      return { success: true };
    }

    return { success: true };
  } catch (err) {
    console.error('Telegram auth request failed:', err);
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Failed to connect to the authentication server. Please try again.',
    };
  }
}
