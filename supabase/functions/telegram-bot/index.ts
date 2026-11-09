import { createClient } from 'npm:@supabase/supabase-js@2';

const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN') || '8858073685:AAFDdahm1V9O_00YZMHYYnaG1E3WZGYtQCM';
const REQUIRED_CHANNEL = Deno.env.get('REQUIRED_TELEGRAM_CHANNEL') || '@satbaseorg';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const defaultKeyboard = {
  keyboard: [
    [{ text: '🔑 Get login code' }],
  ],
  resize_keyboard: true,
  persistent: true,
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

async function sendTelegramMessage(chatId: number, text: string, replyMarkup?: unknown) {
  const payload: Record<string, unknown> = {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };
  if (replyMarkup) {
    payload.reply_markup = replyMarkup;
  }

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Telegram sendMessage error:', errorText);
  }
}

async function answerCallbackQuery(callbackQueryId: string, text?: string, showAlert = false) {
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text,
        show_alert: showAlert,
      }),
    });
  } catch (err) {
    console.error('answerCallbackQuery error:', err);
  }
}

/**
 * Checks whether user is subscribed to REQUIRED_CHANNEL.
 * Note: Bot must be added as an Administrator to the channel for this API to work.
 */
async function isUserSubscribed(userId: number): Promise<{ subscribed: boolean; notAdmin?: boolean }> {
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${encodeURIComponent(REQUIRED_CHANNEL)}&user_id=${userId}`
    );
    const data = await res.json();

    if (!data.ok) {
      console.warn('getChatMember error description:', data.description);
      if (data.description && data.description.includes('member list is inaccessible')) {
        // Bot is not admin in channel
        return { subscribed: false, notAdmin: true };
      }
      return { subscribed: false };
    }

    const status = data.result?.status;
    const isMember = ['creator', 'administrator', 'member', 'restricted'].includes(status);
    return { subscribed: isMember };
  } catch (err) {
    console.error('isUserSubscribed fetch failed:', err);
    return { subscribed: false };
  }
}

async function sendSubscriptionPrompt(chatId: number, notAdmin = false) {
  let warningNote = '';
  if (notAdmin) {
    warningNote = '\n\n⚠️ <i>(Notice: The bot must be made an administrator in the channel)</i>';
  }

  const text = 
`⚠️ <b>To receive your SATBase login code, please subscribe to our official channel:</b>

📢 <b>Channel:</b> ${REQUIRED_CHANNEL}${warningNote}

After joining, tap the <b>«✅ Check Subscription»</b> button below:`;

  const inlineKeyboard = {
    inline_keyboard: [
      [
        { text: "📢 Join Channel ↗", url: `https://t.me/${REQUIRED_CHANNEL.replace('@', '')}` },
      ],
      [
        { text: "✅ Check Subscription", callback_data: "check_sub" },
      ],
    ],
  };

  await sendTelegramMessage(chatId, text, inlineKeyboard);
}

// deno-lint-ignore no-explicit-any
async function issueAuthCode(chatId: number, fromUser: any, admin: any) {
  // 1. Generate clean 6-digit numeric code (e.g. 748192)
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // 2. Mark older active codes for this user as expired
  await admin
    .from('telegram_auth_codes')
    .update({ used: true })
    .eq('telegram_id', fromUser.id)
    .eq('used', false);

  // 3. Insert new auth code
  const { error: insertError } = await admin.from('telegram_auth_codes').insert({
    code,
    telegram_id: fromUser.id,
    first_name: fromUser.first_name || '',
    last_name: fromUser.last_name || '',
    username: fromUser.username || '',
  });

  if (insertError) {
    console.error('Failed to insert auth code:', insertError);
    await sendTelegramMessage(
      chatId,
      '⚠️ Error generating login code. Please try again.',
      defaultKeyboard
    );
    return;
  }

  const firstName = fromUser.first_name ? ` ${fromUser.first_name}` : '';
  const responseMessage = 
`👋 <b>Welcome${firstName}!</b>

🚀 <b>Your SATBase login code:</b>

<code>${code}</code>  <i>(tap code to copy)</i>

⏱ <b>Valid for:</b> 10 minutes
🌐 <b>Website:</b> <a href="https://satbase.uz/login">satbase.uz/login</a>

⚠️ <i>Do not share this one-time code. Enter it in the login screen to sign in!</i>`;

  await sendTelegramMessage(chatId, responseMessage, defaultKeyboard);
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method === 'GET') {
    return json({ status: 'ok', bot: 'satbase_bot', channel: REQUIRED_CHANNEL });
  }

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

    const update = await req.json().catch(() => null);
    if (!update) return json({ ok: true });

    // ───────────────────────────────────────────
    // 1. Handle Inline Button Callback (✅ Obunani tekshirish)
    // ───────────────────────────────────────────
    if (update.callback_query) {
      const cb = update.callback_query;
      const fromUser = cb.from;
      const chatId = cb.message?.chat?.id || fromUser.id;
      const data = cb.data;

      if (data === 'check_sub') {
        const check = await isUserSubscribed(fromUser.id);
        if (!check.subscribed) {
          await answerCallbackQuery(
            cb.id,
            `❌ You haven't subscribed to ${REQUIRED_CHANNEL} yet! Please join the channel first.`,
            true
          );
          return json({ ok: true });
        }

        await answerCallbackQuery(cb.id, '✅ Subscription confirmed!');
        await issueAuthCode(chatId, fromUser, admin);
        return json({ ok: true });
      }

      await answerCallbackQuery(cb.id);
      return json({ ok: true });
    }

    // ───────────────────────────────────────────
    // 2. Handle Text Messages and Commands
    // ───────────────────────────────────────────
    const message = update.message || update.edited_message;
    if (!message || !message.chat) return json({ ok: true });

    const chatId = message.chat.id;
    const fromUser = message.from;
    const text = (message.text || '').trim();

    if (!fromUser) return json({ ok: true });

    const isStart = text.startsWith('/start');
    const lower = text.toLowerCase();
    const isCodeRequest = 
      isStart ||
      lower.includes('code') ||
      lower.includes('login') ||
      lower.includes('kod') || 
      lower.includes('kirish') ||
      text === '🔑 Get login code' ||
      text === '🔑 Kirish kodi olish';

    if (isCodeRequest) {
      // Check mandatory channel subscription first
      const check = await isUserSubscribed(fromUser.id);
      if (!check.subscribed) {
        await sendSubscriptionPrompt(chatId, check.notAdmin);
        return json({ ok: true });
      }

      // If subscribed, issue auth code immediately
      await issueAuthCode(chatId, fromUser, admin);
      return json({ ok: true });
    }

    // Default help / greeting message
    const helpMessage = 
`👋 <b>Welcome to SATBase!</b>

Tap the <b>«🔑 Get login code»</b> button below or send /code to get your one-time verification code.`;

    await sendTelegramMessage(chatId, helpMessage, defaultKeyboard);
    return json({ ok: true });
  } catch (error) {
    console.error('telegram-bot webhook error:', error);
    return json({ error: error instanceof Error ? error.message : 'Unknown error' }, 500);
  }
});
