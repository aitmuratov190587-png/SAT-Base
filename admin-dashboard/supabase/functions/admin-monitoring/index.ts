import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Vary': 'Origin',
}
const rateWindow = new Map<string, number[]>()

function rateLimited(userId: string) {
  const now = Date.now()
  const recent = (rateWindow.get(userId) ?? []).filter((time) => now - time < 60_000)
  if (recent.length >= 60) return true
  recent.push(now)
  rateWindow.set(userId, recent)
  return false
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

function tashkentDate(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tashkent', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date)
}

function addDays(day: string, delta: number) {
  const date = new Date(`${day}T12:00:00Z`)
  date.setUTCDate(date.getUTCDate() + delta)
  return date.toISOString().slice(0, 10)
}

function streakFrom(days: string[], today: string) {
  const active = new Set(days)
  let cursor = active.has(today) ? today : active.has(addDays(today, -1)) ? addDays(today, -1) : ''
  let count = 0
  while (cursor && active.has(cursor)) {
    count += 1
    cursor = addDays(cursor, -1)
  }
  return count
}

async function allRows<T>(queryFactory: (from: number, to: number) => PromiseLike<{ data: T[] | null; error: { message: string } | null }>) {
  const rows: T[] = []
  for (let page = 0; page < 100; page += 1) {
    const from = page * 1000
    const { data, error } = await queryFactory(from, from + 999)
    if (error) throw new Error(error.message)
    const batch = data ?? []
    rows.push(...batch)
    if (batch.length < 1000) return rows
  }
  throw new Error('Too many records to load safely in one request')
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (!['GET', 'POST'].includes(req.method)) return json({ error: 'Method not allowed' }, 405)

  try {
    const url = Deno.env.get('SUPABASE_URL')
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')
      ?? JSON.parse(Deno.env.get('SUPABASE_PUBLISHABLE_KEYS') ?? '{}').default
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
      ?? JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}').default
    if (!url || !anonKey || !serviceKey) throw new Error('Required Supabase function keys are missing')

    const authorization = req.headers.get('Authorization')
    const token = authorization?.replace(/^Bearer\s+/i, '')
    if (!token) return json({ error: 'Sign in is required' }, 401)

    const authClient = createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false } })
    const { data: authData, error: authError } = await authClient.auth.getUser(token)
    const caller = authData.user
    if (authError || !caller) return json({ error: 'Your session is invalid or expired' }, 401)
    if (caller.app_metadata?.role !== 'admin') return json({ error: 'Admin role is required' }, 403)
    if (rateLimited(caller.id)) return json({ error: 'Rate limit exceeded. Try again shortly.' }, 429)

    const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } })
    const today = tashkentDate()
    const studentId = req.method === 'POST' ? (await req.json().catch(() => ({}))).userId : null

    if (studentId) {
      const [profileResult, userResult] = await Promise.all([
        admin.from('profiles').select('id, full_name, avatar_url, email, phone, role, sat_date, current_score_math, current_score_english, target_score_math, target_score_english, starting_score_math, starting_score_english, is_setup_complete, tests_taken, questions_solved, created_at, updated_at, first_visit_at, last_active_at, country, city, device_type, browser, operating_system, traffic_source, account_status, subscription_plan').eq('id', studentId).maybeSingle(),
        admin.auth.admin.getUserById(studentId),
      ])
      if (profileResult.error) throw new Error(profileResult.error.message)
      if (userResult.error) throw new Error(userResult.error.message)
      const profile = profileResult.data
      if (!profile || profile.role !== 'student') return json({ error: 'Student not found' }, 404)

      const [sessions, attempts, answers, progress, errors, tasks] = await Promise.all([
        allRows((from, to) => admin.from('study_sessions').select('session_id, duration_seconds, started_at, last_activity_at, study_day').eq('user_id', studentId).order('study_day', { ascending: false }).range(from, to)),
        allRows((from, to) => admin.from('flashrush_attempts').select('attempt_id, math, english, answered, correct, created_at').eq('user_id', studentId).order('created_at', { ascending: false }).range(from, to)),
        allRows((from, to) => admin.from('answer_events').select('id, topic_id, question_id, is_correct, time_seconds, source, created_at').eq('user_id', studentId).order('created_at', { ascending: false }).range(from, to)),
        allRows((from, to) => admin.from('user_question_progress').select('id, topic_id, question_id, selected_option, is_correct, time_seconds, updated_at').eq('user_id', studentId).order('updated_at', { ascending: false }).range(from, to)),
        allRows((from, to) => admin.from('error_bank').select('id, question_id, topic_id, added_at, resolved_at').eq('user_id', studentId).order('added_at', { ascending: false }).range(from, to)),
        allRows((from, to) => admin.from('study_plan_tasks').select('id, plan_date, task_type, title, topic_id, target_minutes, done_at').eq('user_id', studentId).order('plan_date', { ascending: true }).range(from, to)),
      ])
      const dayTotals = new Map<string, number>()
      for (const session of sessions) dayTotals.set(session.study_day, (dayTotals.get(session.study_day) ?? 0) + session.duration_seconds)
      const studyDays = [...dayTotals.keys()].sort()
      const totalSeconds = sessions.reduce((sum, session) => sum + session.duration_seconds, 0)
      const topicMap = new Map<string, { topicId: string; answered: number; correct: number; seconds: number }>()
      for (const answer of answers) {
        const topicId = answer.topic_id || 'Uncategorized'
        const topic = topicMap.get(topicId) ?? { topicId, answered: 0, correct: 0, seconds: 0 }
        topic.answered += 1
        topic.correct += answer.is_correct ? 1 : 0
        topic.seconds += answer.time_seconds ?? 0
        topicMap.set(topicId, topic)
      }

      return json({
        generatedAt: new Date().toISOString(),
        student: {
          ...profile,
          lastSignInAt: userResult.data.user.last_sign_in_at,
          emailConfirmedAt: userResult.data.user.email_confirmed_at,
          streak: streakFrom(studyDays, today),
          lastActivityAt: sessions.reduce<string | null>((latest, session) => !latest || session.last_activity_at > latest ? session.last_activity_at : latest, null),
          study: { totalSeconds, sessionCount: sessions.length, activeDays: studyDays.length, days: [...dayTotals].map(([date, seconds]) => ({ date, seconds })).sort((a, b) => a.date.localeCompare(b.date)) },
          flashrush: { attempts, attemptCount: attempts.length, answered: attempts.reduce((sum, item) => sum + item.answered, 0), correct: attempts.reduce((sum, item) => sum + item.correct, 0) },
          answers: { events: answers, total: answers.length, correct: answers.filter((item) => item.is_correct).length, topics: [...topicMap.values()].sort((a, b) => b.answered - a.answered), progress },
          errorBank: { open: errors.filter((item) => !item.resolved_at).length, resolved: errors.filter((item) => item.resolved_at).length, items: errors },
          tasks,
        },
      })
    }

    const [profiles, sessions, allStudySessions, recentAttempts] = await Promise.all([
      allRows((from, to) => admin.from('profiles').select('id, full_name, avatar_url, email, phone, role, sat_date, current_score_math, current_score_english, target_score_math, target_score_english, starting_score_math, starting_score_english, is_setup_complete, tests_taken, questions_solved, created_at, first_visit_at, last_active_at, country, city, device_type, browser, operating_system, traffic_source, account_status, subscription_plan').eq('role', 'student').order('created_at', { ascending: false }).range(from, to)),
      allRows((from, to) => admin.from('study_sessions').select('user_id, duration_seconds, last_activity_at, study_day').gte('study_day', addDays(today, -90)).range(from, to)),
      allRows((from, to) => admin.from('study_sessions').select('duration_seconds, study_day').range(from, to)),
      allRows((from, to) => admin.from('flashrush_attempts').select('user_id, attempt_id, math, english, correct, answered, created_at').gte('created_at', new Date(Date.now() - 24 * 60 * 60_000).toISOString()).order('created_at', { ascending: false }).range(from, to)),
    ])
    const authUsers = new Map<string, { last_sign_in_at: string | null; email_confirmed_at: string | null }>()
    for (let page = 1; page <= 100; page += 1) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 })
      if (error) throw new Error(error.message)
      for (const user of data.users) authUsers.set(user.id, { last_sign_in_at: user.last_sign_in_at ?? null, email_confirmed_at: user.email_confirmed_at ?? null })
      if (data.users.length < 1000) break
    }
    const activity = new Map<string, { seconds90d: number; days: Set<string>; lastActivityAt: string | null }>()
    const daily = new Map<string, { seconds: number; students: Set<string> }>()
    for (const session of sessions) {
      const item = activity.get(session.user_id) ?? { seconds90d: 0, days: new Set<string>(), lastActivityAt: null }
      item.seconds90d += session.duration_seconds
      item.days.add(session.study_day)
      if (!item.lastActivityAt || session.last_activity_at > item.lastActivityAt) item.lastActivityAt = session.last_activity_at
      activity.set(session.user_id, item)
      const day = daily.get(session.study_day) ?? { seconds: 0, students: new Set<string>() }
      day.seconds += session.duration_seconds
      day.students.add(session.user_id)
      daily.set(session.study_day, day)
    }
    const registrations = new Map<string, number>()
    for (const profile of profiles) {
      const date = tashkentDate(new Date(profile.created_at))
      registrations.set(date, (registrations.get(date) ?? 0) + 1)
    }
    const studyTotals = new Map<string, number>()
    for (const session of allStudySessions) studyTotals.set(session.study_day, (studyTotals.get(session.study_day) ?? 0) + session.duration_seconds)
    let registered = 0
    const userGrowth = [...registrations].sort(([a], [b]) => a.localeCompare(b)).map(([date, dailyCount]) => {
      registered += dailyCount
      return { date, daily: dailyCount, cumulative: registered }
    })
    let cumulativeSeconds = 0
    const totalStudyTimeByDay = [...studyTotals].sort(([a], [b]) => a.localeCompare(b)).map(([date, seconds]) => {
      cumulativeSeconds += seconds
      return { date, seconds, cumulativeSeconds }
    })
    return json({
      generatedAt: new Date().toISOString(),
      students: profiles.map((profile) => {
        const usage = activity.get(profile.id) ?? { seconds90d: 0, days: new Set<string>(), lastActivityAt: null }
        return { ...profile, lastSignInAt: authUsers.get(profile.id)?.last_sign_in_at ?? null, emailConfirmed: Boolean(authUsers.get(profile.id)?.email_confirmed_at), studySeconds90d: usage.seconds90d, streak: streakFrom([...usage.days], today), lastActivityAt: usage.lastActivityAt }
      }),
      activity90d: [...daily].map(([date, item]) => ({ date, seconds: item.seconds, activeStudents: item.students.size })).sort((a, b) => a.date.localeCompare(b.date)),
      userGrowth,
      totalStudyTimeByDay,
      realtime: {
        online: new Set(sessions.filter((item) => Date.now() - new Date(item.last_activity_at).getTime() < 3 * 60_000).map((item) => item.user_id)).size,
        events: recentAttempts.map((attempt) => ({ id: attempt.attempt_id, user_id: attempt.user_id, page: '/mock-tests/flashrush/results', event_type: 'test_completed', event_data: { score: attempt.math + attempt.english, correct: attempt.correct, answered: attempt.answered }, created_at: attempt.created_at, full_name: profiles.find((profile) => profile.id === attempt.user_id)?.full_name ?? null, email: profiles.find((profile) => profile.id === attempt.user_id)?.email ?? null })),
      },
    })
  } catch (error) {
    console.error('admin-monitoring failed', error)
    return json({ error: error instanceof Error ? error.message : 'Unexpected server error' }, 500)
  }
})
