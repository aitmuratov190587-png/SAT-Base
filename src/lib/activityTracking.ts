import { supabase } from './supabaseClient';

const SESSION_KEY = 'satbase_site_session_id';

function getSessionId() {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function browserInfo() {
  const ua = navigator.userAgent;
  const deviceType = /ipad|tablet/i.test(ua) ? 'tablet' : /mobile|android|iphone/i.test(ua) ? 'mobile' : 'desktop';
  const browser = /Edg\//.test(ua) ? 'Edge' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Other';
  const operatingSystem = /Windows/.test(ua) ? 'Windows' : /Mac OS/.test(ua) ? 'macOS' : /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iOS' : /Linux/.test(ua) ? 'Linux' : 'Other';
  const source = new URLSearchParams(location.search).get('utm_source');
  const referrer = document.referrer;
  const trafficSource = source || (referrer ? new URL(referrer).hostname : 'direct');
  return { deviceType, browser, operatingSystem, trafficSource };
}

export async function trackSiteEvent(eventType: 'visit' | 'login' | 'test_started' | 'test_completed' | 'question_answered' | 'page_view', eventData: Record<string, unknown> = {}) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  const sessionId = getSessionId();
  const page = location.pathname;
  const meta = browserInfo();
  await supabase.from('user_events').insert({ user_id: user.id, session_id: sessionId, page, event_type: eventType, event_data: eventData });
  const now = new Date().toISOString();
  await supabase.from('site_sessions').upsert({
    id: sessionId,
    user_id: user.id,
    page,
    session_end: null,
    device_type: meta.deviceType,
    browser: meta.browser,
    operating_system: meta.operatingSystem,
  }, { onConflict: 'id' });
  const { data: profile } = await supabase.from('profiles').select('first_visit_at').eq('id', user.id).maybeSingle();
  await supabase.from('profiles').update({ first_visit_at: profile?.first_visit_at ?? now, last_active_at: now, device_type: meta.deviceType, browser: meta.browser, operating_system: meta.operatingSystem, traffic_source: meta.trafficSource }).eq('id', user.id);
}

export async function closeSiteSession() {
  const { data: { user } } = await supabase.auth.getUser();
  const id = sessionStorage.getItem(SESSION_KEY);
  if (user && id) await supabase.from('site_sessions').update({ session_end: new Date().toISOString() }).eq('id', id).eq('user_id', user.id);
}
