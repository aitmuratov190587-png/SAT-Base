import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const url = Deno.env.get('SUPABASE_URL');
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
      ?? JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}').default;

    if (!url || !serviceKey) {
      throw new Error('Supabase environment keys are missing');
    }

    const admin = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const body = await req.json().catch(() => ({}));
    const rawCode = String(body.code || '').replace(/\D/g, '').trim();

    if (!rawCode || rawCode.length !== 6) {
      return json({ error: 'Please enter the 6-digit verification code.' }, 400);
    }

    // 1. Search for matching valid code
    const nowIso = new Date().toISOString();
    const { data: codeRow, error: codeErr } = await admin
      .from('telegram_auth_codes')
      .select('*')
      .eq('code', rawCode)
      .eq('used', false)
      .gt('expires_at', nowIso)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (codeErr) {
      console.error('Error fetching telegram auth code:', codeErr);
      return json({ error: 'An unexpected server error occurred. Please try again.' }, 500);
    }

    if (!codeRow) {
      return json({
        error: 'The verification code is invalid or expired (10 min). Please get a fresh code from @satbase_bot.',
      }, 400);
    }

    // 2. Invalidate used code immediately
    await admin
      .from('telegram_auth_codes')
      .update({ used: true })
      .eq('id', codeRow.id);

    // 3. User account management
    const tgEmail = `tg_${codeRow.telegram_id}@telegram.satbase.uz`;
    const fullName = [codeRow.first_name, codeRow.last_name].filter(Boolean).join(' ').trim() ||
      (codeRow.username ? `@${codeRow.username}` : `SAT Student`);

    let user;
    const { data: created, error: createError } = await admin.auth.admin.createUser({
      email: tgEmail,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        telegram_id: codeRow.telegram_id,
        telegram_username: codeRow.username || '',
      },
    });

    if (created?.user) {
      user = created.user;
    } else {
      if (createError && !createError.message.toLowerCase().includes('already')) {
        console.warn('createUser notice:', createError.message);
      }
      const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
        type: 'magiclink',
        email: tgEmail,
      });
      if (linkErr) throw linkErr;
      user = linkData.user;
    }

    // Ensure profiles record is updated with telegram_id
    await admin
      .from('profiles')
      .update({
        telegram_id: codeRow.telegram_id,
        telegram_username: codeRow.username || null,
        full_name: fullName,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);

    // 4. Generate magic link token for session creation
    const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
      type: 'magiclink',
      email: tgEmail,
    });

    if (linkErr || !linkData?.properties?.hashed_token) {
      throw new Error(linkErr?.message || 'Failed to generate authentication token');
    }

    const hashedToken = linkData.properties.hashed_token;

    // 5. Verify token on server side to mint valid session tokens
    const authClient = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: sessionData } = await authClient.auth.verifyOtp({
      token_hash: hashedToken,
      type: 'magiclink',
    });

    return json({
      success: true,
      session: sessionData?.session || null,
      token_hash: hashedToken,
      email: tgEmail,
      user: {
        id: user.id,
        email: tgEmail,
        telegram_id: codeRow.telegram_id,
        full_name: fullName,
      },
    });
  } catch (error) {
    console.error('telegram-auth error:', error);
    return json({
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    }, 500);
  }
});
