import { useEffect, useMemo, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Activity, ArrowLeft, ArrowUpRight, Bell, BookOpen, CalendarDays, Check, CheckCircle2, ChevronDown, ChevronRight, CircleAlert, Clock3, Flame, LayoutDashboard, LogOut, Mail, RefreshCw, Search, ShieldCheck, Sparkles, Target, TrendingUp, Users, X, BarChart3 } from 'lucide-react';
import { configReady, supabase } from './supabase';
import type { Overview, Student, StudentDetail } from './types';

const uzDate = new Intl.DateTimeFormat('uz-UZ', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Tashkent' });
const shortDate = new Intl.DateTimeFormat('uz-UZ', { day: 'numeric', month: 'short', timeZone: 'Asia/Tashkent' });
const number = new Intl.NumberFormat('uz-UZ');
const dateLabel = (value: string | null | undefined, compact = false) => value ? (compact ? shortDate : uzDate).format(new Date(value.length === 10 ? `${value}T12:00:00` : value)) : 'Belgilanmagan';
const durationLabel = (seconds: number) => {
  const minutes = Math.floor(Math.max(0, seconds) / 60);
  if (minutes < 60) return `${number.format(minutes)} daq`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder ? `${hours} soat ${remainder} daq` : `${hours} soat`;
};
const fullName = (student: Student) => student.full_name || student.email?.split('@')[0] || 'Noma’lum foydalanuvchi';
const initials = (name: string) => name.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase();

function Score({ math, english }: { math: number | null; english: number | null }) {
  if (math == null && english == null) return <span className="muted-score">—</span>;
  const total = (math ?? 0) + (english ?? 0);
  return <strong className="score-value">{number.format(total)}<span>/1600</span></strong>;
}

function MiniBars({ data, days = 14 }: { data: { date: string; seconds: number; activeStudents?: number }[]; days?: number }) {
  const series = data.slice(-days);
  const max = Math.max(60, ...series.map((item) => item.seconds));
  return <div className="mini-bars" aria-label="Kunlik o‘qish vaqti">
    {series.map((item) => <div className="bar-col" key={item.date} title={`${dateLabel(item.date, true)} · ${durationLabel(item.seconds)} · ${item.activeStudents ?? ''}`}>
      <div className="bar-track"><div className="bar-fill" style={{ height: `${Math.max(item.seconds ? 7 : 2, item.seconds / max * 100)}%` }} /></div>
      <span>{new Date(`${item.date}T12:00:00`).getUTCDate()}</span>
    </div>)}
    {!series.length && <div className="empty-chart">Faollik ma’lumoti hali yo‘q</div>}
  </div>;
}

function LineChart({ points }: { points: { date: string; value: number }[] }) {
  const values = points.map((point) => point.value);
  const max = Math.max(1600, ...values);
  const min = Math.min(400, ...values);
  const span = Math.max(1, max - min);
  const coords = points.map((point, index) => ({ x: points.length < 2 ? 50 : 8 + index * 84 / (points.length - 1), y: 84 - (point.value - min) / span * 68 }));
  const path = coords.map((point, index) => `${index ? 'L' : 'M'} ${point.x} ${point.y}`).join(' ');
  return <div className="score-chart">
    {points.length > 1 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Mock test natijalari dinamikasi">
      <defs><linearGradient id="scoreArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#35d5bd" stopOpacity=".28"/><stop offset="100%" stopColor="#35d5bd" stopOpacity="0"/></linearGradient></defs>
      {[20, 42, 64, 86].map((y) => <line key={y} x1="0" y1={y} x2="100" y2={y} className="chart-grid"/>)}
      <path d={`${path} L ${coords[coords.length - 1]?.x ?? 92} 100 L ${coords[0]?.x ?? 8} 100 Z`} fill="url(#scoreArea)"/>
      <path d={path} className="score-line"/>
      {coords.map((point, index) => <circle key={index} cx={point.x} cy={point.y} r="1.7" className="score-dot"/>)}
    </svg> : <div className="chart-placeholder"><Activity size={19}/><span>Natijalar dinamikasi mocklar topshirilgach chiqadi</span></div>}
    {points.length > 1 && <div className="line-chart-labels"><span>{dateLabel(points[0].date, true)}</span><span>{dateLabel(points[points.length - 1].date, true)}</span></div>}
  </div>;
}

function TrendChart({ points, formatValue, color = '#35d5bd' }: { points: { date: string; value: number }[]; formatValue: (value: number) => string; color?: string }) {
  const series = points.slice(-60);
  const min = Math.min(0, ...series.map((item) => item.value));
  const max = Math.max(1, ...series.map((item) => item.value));
  const range = Math.max(1, max - min);
  const coords = series.map((point, index) => ({ x: series.length < 2 ? 50 : 4 + index * 92 / (series.length - 1), y: 82 - (point.value - min) / range * 66 }));
  const path = coords.map((point, index) => `${index ? 'L' : 'M'} ${point.x} ${point.y}`).join(' ');
  return <div className="trend-chart">
    {series.length ? <><div className="trend-axis"><span>{formatValue(max)}</span><span>{formatValue(Math.round(max / 2))}</span><span>{formatValue(min)}</span></div><svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Sana bo‘yicha o‘sish grafigi">{[16,49,82].map(y=><line key={y} x1="0" y1={y} x2="100" y2={y} className="chart-grid"/>)}{series.length>1&&<path d={`${path} L ${coords[coords.length-1].x} 100 L ${coords[0].x} 100 Z`} fill={`${color}18`}/>}<path d={path} fill="none" stroke={color} strokeWidth="1.7" vectorEffect="non-scaling-stroke"/>{coords.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r="1.4" fill="#101827" stroke={color} strokeWidth="1.2" vectorEffect="non-scaling-stroke"><title>{dateLabel(series[i].date)} · {formatValue(series[i].value)}</title></circle>)}</svg><div className="trend-dates"><span>{dateLabel(series[0].date)}</span><b>{series.length} sana</b><span>{dateLabel(series[series.length-1].date)}</span></div></>:<div className="empty-chart">Hozircha tarixiy ma’lumot yo‘q</div>}
  </div>;
}

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [overview, setOverview] = useState<Overview | null>(null);
  const [selected, setSelected] = useState<StudentDetail | null>(null);
  const [view, setView] = useState<'overview' | 'analytics' | 'realtime' | 'student'>('overview');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let alive = true;
    supabase.auth.getSession().then(({ data }) => { if (alive) { setSession(data.session); setAuthReady(true); } });
    const { data } = supabase.auth.onAuthStateChange((_event, value) => { setSession(value); setAuthReady(true); });
    return () => { alive = false; data.subscription.unsubscribe(); };
  }, []);

  const loadOverview = async () => {
    setLoading(true); setError('');
    const { data, error: requestError } = await supabase.functions.invoke('admin-monitoring', { method: 'GET' });
    if (requestError) setError(await readableError(requestError));
    else { setOverview(data as Overview); setSelected(null); }
    setLoading(false);
  };

  const loadStudent = async (student: Student) => {
    setSelected(null); setView('student'); setLoading(true); setError('');
    const { data, error: requestError } = await supabase.functions.invoke('admin-monitoring', { body: { userId: student.id } });
    if (requestError) setError(await readableError(requestError));
    else setSelected((data as { student: StudentDetail }).student);
    setLoading(false);
  };

  useEffect(() => { if (session) void loadOverview(); }, [session?.access_token]);
  useEffect(() => {
    if (!session) return;
    const timer = window.setInterval(() => { void loadOverview(); }, 10_000);
    return () => window.clearInterval(timer);
  }, [session?.access_token]);

  const filteredStudents = useMemo(() => (overview?.students ?? []).filter((student) => `${fullName(student)} ${student.email ?? ''}`.toLowerCase().includes(search.toLowerCase())), [overview, search]);
  const stats = useMemo(() => {
    const students = overview?.students ?? [];
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tashkent', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    const signedToday = students.filter((student) => student.lastSignInAt && new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tashkent', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(student.lastSignInAt)) === today).length;
    const upcoming = students.filter((student) => student.sat_date && student.sat_date >= today && student.sat_date <= new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)).length;
    const seconds = students.reduce((sum, student) => sum + (student.studySeconds90d ?? 0), 0);
    return { students: students.length, signedToday, upcoming, seconds };
  }, [overview]);

  const signIn = async () => {
    setBusy(true); setError('');
    const { error: authError } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } });
    if (authError) { setError(authError.message); setBusy(false); }
  };

  if (!authReady) return <div className="loading-screen"><div className="loader-orbit"><span/></div><p>Admin Console yuklanmoqda</p></div>;
  if (!configReady) return <div className="login-screen"><div className="login-card"><Brand/><h1>Ulanish sozlamalari kerak</h1><p>`admin-dashboard/.env.local` faylida Supabase URL va publishable key ko‘rsating.</p><ErrorBox error="VITE_SUPABASE_URL va VITE_SUPABASE_ANON_KEY qiymatlari topilmadi."/></div></div>;
  if (!session) return <Login busy={busy} error={error} onSignIn={signIn}/>;

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="sidebar-brand"><Brand/><span className="admin-pill">ADMIN</span></div>
      <div className="side-section-label">WORKSPACE</div>
      <button className={`nav-item ${view === 'overview' ? 'active' : ''}`} onClick={() => { setView('overview'); setSelected(null); }}><LayoutDashboard size={17}/><span>Umumiy ko‘rinish</span><ChevronRight className="nav-chevron" size={15}/></button>
      <button className={`nav-item ${view === 'student' ? 'active' : ''}`} onClick={() => setView('overview')}><Users size={17}/><span>Foydalanuvchilar</span><span className="nav-count">{overview?.students.length ?? '—'}</span></button>
      <button className={`nav-item ${view === 'analytics' ? 'active' : ''}`} onClick={() => setView('analytics')}><BarChart3 size={17}/><span>Statistika</span><ChevronRight className="nav-chevron" size={15}/></button>
      <button className={`nav-item ${view === 'realtime' ? 'active' : ''}`} onClick={() => setView('realtime')}><Activity size={17}/><span>Jonli faollik</span><ChevronRight className="nav-chevron" size={15}/></button>
      <div className="sidebar-bottom"><div className="security-note"><ShieldCheck size={17}/><div><b>Himoyalangan panel</b><span>Faqat admin uchun ochiq</span></div></div>
        <button className="admin-profile" onClick={() => void supabase.auth.signOut()}><div className="avatar admin-avatar">{initials(session.user.user_metadata?.full_name || session.user.email || 'AD')}</div><div className="admin-profile-copy"><b>{session.user.user_metadata?.full_name || 'Administrator'}</b><span>{session.user.email}</span></div><LogOut size={16}/></button>
      </div>
    </aside>
    <main className="main-area">
      <header className="topbar">
        <div className="crumbs"><span>Admin Console</span><ChevronRight size={14}/><b>{view === 'student' && selected ? fullName(selected) : view === 'student' ? 'Foydalanuvchi' : 'Monitoring'}</b></div>
        <div className="top-actions"><span className="live-dot"><i/> Jonli ma’lumot</span><button className="icon-button" onClick={() => view === 'student' && selected ? void loadStudent(selected) : void loadOverview()} title="Yangilash"><RefreshCw size={16} className={loading ? 'spin' : ''}/></button><button className="icon-button" title="Bildirishnomalar"><Bell size={16}/></button><div className="top-avatar">{initials(session.user.user_metadata?.full_name || session.user.email || 'AD')}</div><ChevronDown size={14} className="muted-icon"/></div>
      </header>
      <div className="content-wrap">
        {error && <ErrorBox error={error} onClose={() => setError('')}/>}
        {view === 'overview' ? <>
          <section className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> ADMIN MONITORING <span className="eyebrow-slash">/</span> <span className="eyebrow-muted">OVERVIEW</span></div><h1>O‘quvchilar holati <span>bir qarashda.</span></h1><p>O‘quvchilar faoliyati, SAT tayyorgarligi va natijalarini real vaqtda kuzating.</p></div><button className="refresh-button" onClick={() => void loadOverview()}><RefreshCw size={15} className={loading ? 'spin' : ''}/> Yangilash</button></section>
          <section className="stat-grid">
            <StatCard icon={<Users size={18}/>} label="JAMI O‘QUVCHILAR" value={number.format(stats.students)} note="Ro‘yxatdan o‘tgan profillar" tone="teal"/>
            <StatCard icon={<Activity size={18}/>} label="BUGUN KIRGAN" value={number.format(stats.signedToday)} note="Oxirgi 24 soat faolligi" tone="blue"/>
            <StatCard icon={<Clock3 size={18}/>} label="O‘QISH VAQTI · 90 KUN" value={durationLabel(stats.seconds)} note="Sessiya ma’lumotlari asosida" tone="violet"/>
            <StatCard icon={<CalendarDays size={18}/>} label="YAQIN SAT SANASI" value={number.format(stats.upcoming)} note="Keyingi 30 kun ichida" tone="amber"/>
          </section>
          <section className="overview-grid">
            <div className="panel activity-panel"><div className="panel-head"><div><div className="panel-kicker">FAOLLIK</div><h2>O‘qish ritmi</h2><p>Oxirgi 14 kun bo‘yicha barcha o‘quvchilar</p></div><div className="chart-legend"><i/> O‘qish vaqti</div></div><MiniBars data={overview?.activity90d ?? []}/><div className="chart-foot"><span><span className="legend-dot"/> Kunlik jami o‘qish vaqti</span><span>So‘nggi 14 kun</span></div></div>
            <div className="panel upcoming-panel"><div className="panel-head"><div><div className="panel-kicker">IMTIHONLAR</div><h2>SAT yaqinlashmoqda</h2><p>Keyingi 30 kun ichidagi imtihonlar</p></div><div className="round-icon amber"><CalendarDays size={17}/></div></div>
              <div className="upcoming-list">{(overview?.students ?? []).filter((student) => student.sat_date).sort((a,b) => (a.sat_date ?? '').localeCompare(b.sat_date ?? '')).slice(0,4).map((student) => <button className="upcoming-row" key={student.id} onClick={() => void loadStudent(student)}><div className="avatar small-avatar">{initials(fullName(student))}</div><div className="upcoming-name"><b>{fullName(student)}</b><span>{student.email}</span></div><div className="upcoming-date"><strong>{dateLabel(student.sat_date, true)}</strong><span>{student.sat_date! < new Date().toISOString().slice(0,10) ? 'Sana o‘tgan' : 'Imtihon sanasi'}</span></div><ChevronRight size={15}/></button>)}
                {!overview?.students.some((student) => student.sat_date) && <div className="empty-state slim"><CalendarDays size={19}/><span>SAT sanasi kiritilgan o‘quvchilar ko‘rinadi</span></div>}</div></div>
          </section>
          <section className="panel users-panel"><div className="panel-head users-head"><div><div className="panel-kicker">RO‘YXAT</div><h2>O‘quvchilar</h2><p>Tanlang va har bir o‘quvchining batafsil ko‘rsatkichlarini ko‘ring.</p></div><label className="search-box"><Search size={16}/><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ism yoki email bo‘yicha qidirish"/><kbd>⌘ K</kbd></label></div>
            <StudentsTable students={filteredStudents} onSelect={(student) => void loadStudent(student)}/></section>
          <div className="data-footnote"><ShieldCheck size={14}/> Ma’lumotlar Supabase’dan olinadi. Oxirgi yangilanish: {overview ? new Intl.DateTimeFormat('uz-UZ',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Tashkent'}).format(new Date(overview.generatedAt)) : '—'} (Toshkent)</div>
        </> : view === 'analytics' ? <AnalyticsView overview={overview}/> : view === 'realtime' ? <RealtimeView overview={overview}/> : <>
          <button className="back-link" onClick={() => { setView('overview'); setSelected(null); }}><ArrowLeft size={16}/> Umumiy ko‘rinishga qaytish</button>
          {loading && <div className="detail-loading"><span className="loader-orbit small"><span/></span><b>Foydalanuvchi ma’lumotlari olinmoqda…</b></div>}
          {selected && <StudentView student={selected}/>}
        </>}
      </div>
    </main>
  </div>;
}

function Brand() { return <div className="brand"><div className="brand-mark"><span>S</span><i/></div><div className="brand-text"><b>SAT<span>BASE</span></b><small>Admin workspace</small></div></div>; }
function Login({ busy, error, onSignIn }: { busy: boolean; error: string; onSignIn: () => void }) { return <div className="login-screen"><div className="login-grid"/><div className="login-card"><Brand/><div className="login-emblem"><ShieldCheck size={27}/><span/></div><div className="panel-kicker">PRIVATE WORKSPACE</div><h1>Admin panelga<br/><span>xush kelibsiz.</span></h1><p>O‘quvchilar faolligi va SAT tayyorgarligini ko‘rish uchun administrator hisobingiz orqali kiring.</p>{error && <ErrorBox error={error}/>}<button className="google-button" onClick={onSignIn} disabled={busy}><GoogleMark/>{busy ? 'Google hisobiga yo‘naltirilmoqda…' : 'Google orqali davom etish'}<ArrowUpRight size={16}/></button><div className="login-secure"><ShieldCheck size={14}/> Faqat ruxsat berilgan administratorlar kira oladi</div></div><div className="login-copyright">SATBASE · PRIVATE ADMIN CONSOLE</div></div>; }
function GoogleMark() { return <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.8 6-15z"/><path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.7-5.1c-1.8 1.2-4 2-6.8 2-5.2 0-9.6-3.5-11.2-8.2H5.9v5.2C9.3 39.6 16.1 44 24 44z"/><path fill="#4A90E2" d="M12.8 27.8a12 12 0 0 1 0-7.6V15H5.9a20 20 0 0 0 0 18l6.9-5.2z"/><path fill="#EA4335" d="M24 12.1c3 0 5.6 1 7.7 3.1l5.8-5.8A19.3 19.3 0 0 0 24 4 20 20 0 0 0 5.9 15l6.9 5.2C14.4 15.6 18.8 12 24 12z"/></svg>; }
function StatCard({ icon, label, value, note, tone }: { icon: React.ReactNode; label: string; value: string; note: string; tone: string }) { return <div className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><div className="stat-label">{label}</div><div className="stat-value">{value}</div><div className="stat-note">{note}</div><div className={`stat-accent ${tone}`}/></div>; }
function StudentsTable({ students, onSelect }: { students: Student[]; onSelect: (student: Student) => void }) { return <div className="table-scroll"><table><thead><tr><th>O‘QUVCHI</th><th>JORIY BALL</th><th>IMTIHON SANASI</th><th>FAOLLIK</th><th>TESTLAR</th><th/></tr></thead><tbody>{students.map((student) => <tr key={student.id} onClick={() => onSelect(student)} tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && onSelect(student)}><td><div className="student-cell"><div className="avatar">{initials(fullName(student))}</div><div><b>{fullName(student)}</b><span>{student.email || 'Email kiritilmagan'}</span></div></div></td><td><Score math={student.current_score_math} english={student.current_score_english}/></td><td><div className="table-date">{student.sat_date ? dateLabel(student.sat_date) : '—'}<span>{student.sat_date ? 'Rejalashtirilgan' : 'Sana belgilanmagan'}</span></div></td><td><div className="activity-cell"><span className={`activity-indicator ${student.lastActivityAt && Date.now() - new Date(student.lastActivityAt).getTime() < 86400000 ? 'online' : ''}`}/><div><b>{student.lastActivityAt ? dateLabel(student.lastActivityAt) : 'Hozircha yo‘q'}</b><span>{student.streak} kunlik streak <Flame size={12}/></span></div></div></td><td><span className="test-count">{number.format(student.tests_taken ?? 0)} <small>mock</small></span></td><td><button className="row-open" aria-label={`${fullName(student)} profilini ochish`}><ArrowUpRight size={16}/></button></td></tr>)}{!students.length && <tr><td colSpan={6}><div className="empty-state"><Users size={20}/><span>Qidiruv bo‘yicha foydalanuvchi topilmadi</span></div></td></tr>}</tbody></table></div>; }

function AnalyticsView({ overview }: { overview: Overview | null }) {
  const [period, setPeriod] = useState('12m');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');
  const cutoff = new Date();
  if (period === '7d') cutoff.setDate(cutoff.getDate() - 7);
  else if (period === '30d') cutoff.setDate(cutoff.getDate() - 30);
  else if (period === '90d') cutoff.setDate(cutoff.getDate() - 90);
  else cutoff.setMonth(cutoff.getMonth() - 12);
  const cutDay = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tashkent',year:'numeric',month:'2-digit',day:'2-digit'}).format(cutoff);
  const within = (date: string) => period === 'custom' ? (!customFrom || date >= customFrom) && (!customTo || date <= customTo) : date >= cutDay;
  const growth = (overview?.userGrowth ?? []).filter((item)=>within(item.date));
  const time = (overview?.totalStudyTimeByDay ?? []).filter((item)=>within(item.date));
  const newest = growth[growth.length - 1]?.cumulative ?? 0;
  const newestTime = time[time.length - 1]?.cumulativeSeconds ?? 0;
  const dailyPeak = Math.max(0, ...time.map((item) => item.seconds));
  const recent = time.slice(-14).map((item) => ({ date: item.date, value: item.seconds }));
  return <>
    <section className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> ADMIN MONITORING <span className="eyebrow-slash">/</span> <span className="eyebrow-muted">ANALYTICS</span></div><h1>O‘sish va faollik <span>sana bilan.</span></h1><p>Foydalanuvchilar qo‘shilishi va saytdagi jami o‘qish vaqtini tarix bo‘yicha kuzating.</p></div><div className="period-controls">{[['7d','7 kun'],['30d','30 kun'],['90d','90 kun'],['12m','12 oy'],['custom','Sana oralig‘i']].map(([id,label])=><button key={id} className={period===id?'selected':''} onClick={()=>setPeriod(id)}>{label}</button>)}{period==='custom'&&<><input type="date" value={customFrom} onChange={e=>setCustomFrom(e.target.value)}/><input type="date" value={customTo} onChange={e=>setCustomTo(e.target.value)}/></>}</div></section>
    <div className="analytics-kpis"><div className="analytics-kpi"><div className="round-icon teal"><Users size={18}/></div><span>JAMI RO‘YXATDAN O‘TGANLAR</span><b>{number.format(newest)}</b><small>{growth.length ? `Birinchi yozuv: ${dateLabel(growth[0].date)}` : 'Sana bo‘yicha yozuv yo‘q'}</small></div><div className="analytics-kpi"><div className="round-icon blue"><Clock3 size={18}/></div><span>SAYTDAGI JAMI VAQT</span><b>{durationLabel(newestTime)}</b><small>{time.length ? `Birinchi sessiya: ${dateLabel(time[0].date)}` : 'Sessiya yozuvlari hali yo‘q'}</small></div><div className="analytics-kpi"><div className="round-icon violet"><TrendingUp size={18}/></div><span>ENG FAOL KUN</span><b>{durationLabel(dailyPeak)}</b><small>{time.length ? dateLabel(time.reduce((a,b)=>a.seconds>=b.seconds?a:b).date) : 'Ma’lumot yetarli emas'}</small></div></div>
    <section className="analytics-charts"><div className="panel analytics-panel"><div className="panel-head"><div><div className="panel-kicker">FOYDALANUVCHILAR O‘SISHI</div><h2>Ro‘yxatdan o‘tganlar</h2><p>Sanaga ko‘ra kunlik va jami foydalanuvchilar soni</p></div><div className="round-icon teal"><Users size={17}/></div></div><div className="chart-legend-row"><span><i className="legend-dot"/> Jami foydalanuvchilar</span><span>Har bir sana ustiga olib boring</span></div><TrendChart points={growth.map((item)=>({date:item.date,value:item.cumulative}))} formatValue={(value)=>number.format(value)}/><div className="daily-table"><div className="daily-table-head"><span>SANA</span><span>YANGI HISOBLAR</span><span>JAMI</span></div>{[...growth].reverse().slice(0,8).map((item)=><div className="daily-table-row" key={item.date}><b>{dateLabel(item.date)}</b><span className="growth-chip">+{item.daily}</span><strong>{item.cumulative}</strong></div>)}{!growth.length&&<div className="empty-state">Ro‘yxatdan o‘tish tarixi topilmadi</div>}</div></div>
      <div className="panel analytics-panel"><div className="panel-head"><div><div className="panel-kicker">O‘QISH VAQTI</div><h2>Saytda yig‘ilgan vaqt</h2><p>Sana bo‘yicha kunlik vaqt va o‘sib boruvchi jami</p></div><div className="round-icon blue"><Clock3 size={17}/></div></div><div className="time-series-summary"><span>Jami sarflangan vaqt</span><b>{durationLabel(newestTime)}</b></div><div className="chart-legend-row"><span><i className="legend-dot blue-dot"/> Kunlik o‘qish vaqti</span><span>Oxirgi 14 faol sana</span></div><TrendChart points={recent} formatValue={(value)=>durationLabel(value)} color="#70aaff"/><div className="daily-table"><div className="daily-table-head"><span>SANA</span><span>KUNLIK VAQT</span><span>JAMI VAQT</span></div>{[...time].reverse().slice(0,8).map((item)=><div className="daily-table-row" key={item.date}><b>{dateLabel(item.date)}</b><span>{durationLabel(item.seconds)}</span><strong>{durationLabel(item.cumulativeSeconds)}</strong></div>)}{!time.length&&<div className="empty-state">O‘qish sessiyalari topilmadi</div>}</div></div></section>
    <div className="data-footnote"><ShieldCheck size={14}/> Har bir grafikdagi sana va qiymatlar Supabase yozuvlaridan hisoblanadi; grafik bo‘sh bo‘lsa, shu davrda yozuv yo‘q.</div>
  </>;
}

function RealtimeView({ overview }: { overview: Overview | null }) {
  const events = overview?.realtime.events ?? [];
  const online = overview?.realtime.online ?? 0;
  const recentStudents = (overview?.students ?? []).filter((student)=>student.lastActivityAt && Date.now()-new Date(student.lastActivityAt).getTime()<3*60_000).sort((a,b)=>(b.lastActivityAt??'').localeCompare(a.lastActivityAt??''));
  const labels: Record<string,string> = { visit:'Saytga kirdi',login:'Tizimga kirdi',test_started:'Testni boshladi',test_completed:'Testni yakunladi',question_answered:'Savolga javob berdi',page_view:'Sahifani ko‘rdi' };
  return <><section className="page-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> ADMIN MONITORING <span className="eyebrow-slash">/</span> <span className="eyebrow-muted">LIVE</span></div><h1>Hozir saytda <span>nimalar bo‘lyapti.</span></h1><p>Panel har 10 soniyada Supabase’dan yangilanadi.</p></div><div className="online-pill"><i/>{online} foydalanuvchi online</div></section><div className="realtime-grid"><section className="panel realtime-panel"><div className="panel-head"><div><div className="panel-kicker">HOZIR FAOL</div><h2>Online foydalanuvchilar</h2><p>Oxirgi 3 daqiqada ochiq sessiyasi borlar</p></div><div className="round-icon teal"><Users size={17}/></div></div><div className="online-list">{recentStudents.map(user=><div className="online-row" key={user.id}><div className="avatar">{initials(fullName(user))}</div><div><b>{fullName(user)}</b><span>{user.email} · {user.lastActivityAt?dateLabel(user.lastActivityAt):''}</span></div><i/></div>)}{!recentStudents.length&&<div className="empty-state">Hozir faol foydalanuvchi yo‘q</div>}</div></section><section className="panel realtime-panel event-panel"><div className="panel-head"><div><div className="panel-kicker">SO‘NGGI 24 SOAT</div><h2>Faollik oqimi</h2><p>Login, sahifa, savol va test hodisalari</p></div><span className="inline-count">Avto yangilanadi</span></div><div className="event-stream">{events.map((event)=><div className="event-row" key={event.id}><div className="event-dot-wrap"><i/></div><div className="event-copy"><b>{event.full_name||event.email||'Foydalanuvchi'}</b><span>{labels[event.event_type]||event.event_type}{event.event_data?.score?` · ${String(event.event_data.score)} ball`:''}</span><small>{event.page}</small></div><time>{new Intl.DateTimeFormat('uz-UZ',{hour:'2-digit',minute:'2-digit',day:'numeric',month:'short',timeZone:'Asia/Tashkent'}).format(new Date(event.created_at))}</time></div>)}{!events.length&&<div className="empty-state">Tracking yoqilgach yangi hodisalar shu yerda paydo bo‘ladi</div>}</div></section></div></>;
}

function StudentView({ student }: { student: StudentDetail }) {
  const composite = (student.current_score_math ?? 0) + (student.current_score_english ?? 0);
  const target = (student.target_score_math ?? 0) + (student.target_score_english ?? 0);
  const start = (student.starting_score_math ?? 0) + (student.starting_score_english ?? 0);
  const accuracy = student.answers.total ? Math.round(student.answers.correct / student.answers.total * 100) : 0;
  const upcomingTasks = student.tasks.filter((task) => !task.done_at).slice(0, 5);
  const scorePoints = [...student.flashrush.attempts].reverse().map((attempt) => ({ date: attempt.created_at, value: attempt.math + attempt.english }));
  return <>
    <section className="profile-hero"><div className="profile-hero-main"><div className="profile-ident"><div className="avatar profile-avatar">{initials(fullName(student))}</div><div><div className="eyebrow"><span className="eyebrow-line"/> STUDENT PROFILE <span className="eyebrow-slash">/</span> {student.is_setup_complete ? 'ACTIVE' : 'SETUP INCOMPLETE'}</div><h1>{fullName(student)}</h1><div className="profile-email"><Mail size={14}/>{student.email}<span className={`verify-badge ${student.emailConfirmedAt ? 'verified' : ''}`}>{student.emailConfirmedAt ? <><Check size={11}/> Tasdiqlangan</> : 'Tasdiqlanmagan'}</span></div></div></div><div className="profile-actions"><div className="streak-chip"><Flame size={16}/><b>{student.streak} kun</b><span>streak</span></div><div className="profile-id">ID · {student.id.slice(0, 8)}</div></div></div>
      <div className="profile-meta"><div><span>RO‘YXATDAN O‘TGAN</span><b>{dateLabel(student.created_at)}</b></div><div><span>OXIRGI KIRISH</span><b>{student.lastSignInAt ? dateLabel(student.lastSignInAt) : 'Kirish tarixi yo‘q'}</b></div><div><span>OXIRGI FAOLLIK</span><b>{student.lastActivityAt ? dateLabel(student.lastActivityAt) : 'Sessiya topilmadi'}</b></div><div><span>SAT IMTIHONI</span><b className="sat-date-strong"><CalendarDays size={14}/>{dateLabel(student.sat_date)}</b></div></div>
    </section>
    <section className="student-stats"><StatCard icon={<Clock3 size={18}/>} label="JAMI O‘QISH VAQTI" value={durationLabel(student.study.totalSeconds)} note={`${student.study.sessionCount} ta sessiya yozuvi`} tone="teal"/><StatCard icon={<CalendarDays size={18}/>} label="FAOL KUNLAR" value={number.format(student.study.activeDays)} note="Sessiya sanalari bo‘yicha" tone="blue"/><StatCard icon={<Target size={18}/>} label="SAVOL ANIQLIGI" value={`${accuracy}%`} note={`${student.answers.correct} / ${student.answers.total} javob to‘g‘ri`} tone="violet"/><StatCard icon={<BookOpen size={18}/>} label="YECHILGAN SAVOLLAR" value={number.format(student.questions_solved ?? 0)} note={`${student.errorBank.open} ta xatolar ro‘yxatida`} tone="amber"/></section>
    <section className="profile-grid">
      <div className="panel score-panel"><div className="panel-head"><div><div className="panel-kicker">SAT TAYYORGARLIGI</div><h2>Ballar va rivoj</h2><p>Saqlangan boshlang‘ich, joriy va maqsad ballari</p></div><div className="score-total"><b>{composite || '—'}</b><span>/ 1600</span></div></div><div className="score-sections"><ScoreSection title="Math" current={student.current_score_math} start={student.starting_score_math} target={student.target_score_math}/><ScoreSection title="Reading & Writing" current={student.current_score_english} start={student.starting_score_english} target={student.target_score_english}/></div><div className="score-baseline"><span><i className="baseline-dot start"/>Boshlang‘ich <b>{start || '—'}</b></span><span><i className="baseline-dot current"/>Joriy <b>{composite || '—'}</b></span><span><i className="baseline-dot target"/>Maqsad <b>{target || '—'}</b></span></div><div className="chart-divider"/><div className="panel-head compact"><div><div className="panel-kicker">FLASHRUSH MOCKS</div><h3>Natijalar tarixi</h3></div><span className="inline-count">{student.flashrush.attemptCount} mock</span></div><LineChart points={scorePoints}/></div>
      <div className="panel time-panel"><div className="panel-head"><div><div className="panel-kicker">O‘QISH FAOLLIGI</div><h2>Saytdagi vaqt</h2><p>Yig‘ilgan study sessionlar</p></div><div className="round-icon teal"><Clock3 size={17}/></div></div><div className="time-total">{durationLabel(student.study.totalSeconds)}<span>jami</span></div><MiniBars data={student.study.days.map((day) => ({ ...day, activeStudents: 1 }))} days={14}/><div className="time-summary"><span><b>{student.study.sessionCount}</b> sessiya</span><span><b>{student.study.activeDays}</b> faol kun</span><span><b>{student.streak}</b> kun streak</span></div><div className="panel-subhead"><div><div className="panel-kicker">TAYYORLANISH</div><h3>Test va savollar</h3></div><div className="round-icon violet"><Sparkles size={16}/></div></div><div className="test-metrics"><div><span>Flashrush urinishlari</span><b>{student.flashrush.attemptCount}</b></div><div><span>Flashrush to‘g‘ri javob</span><b>{student.flashrush.correct} <small>/ {student.flashrush.answered}</small></b></div><div><span>Savolga sarflangan vaqt</span><b>{durationLabel(student.answers.events.reduce((sum, answer) => sum + answer.time_seconds, 0))}</b></div></div></div>
      <div className="panel topic-panel"><div className="panel-head"><div><div className="panel-kicker">MAVZULAR</div><h2>Fanlar bo‘yicha natija</h2><p>Saqlangan javoblar statistikasi</p></div><div className="round-icon blue"><TrendingUp size={17}/></div></div><div className="topic-list">{student.answers.topics.slice(0, 7).map((topic) => <div className="topic-row" key={topic.topicId}><div className="topic-title"><span>{topic.topicId}</span><b>{topic.answered} savol</b></div><div className="topic-track"><i style={{ width: `${topic.answered ? topic.correct / topic.answered * 100 : 0}%` }}/></div><strong>{topic.answered ? Math.round(topic.correct / topic.answered * 100) : 0}%</strong></div>)}{!student.answers.topics.length && <div className="empty-state slim"><BookOpen size={18}/><span>Hali javoblar bo‘yicha mavzu statistikasi yig‘ilmagan</span></div>}</div><div className="topic-footer"><span><span className="legend-dot"/> To‘g‘ri javoblar</span><span>{student.answers.total} ta javob qayd etilgan</span></div></div>
      <div className="panel plan-panel"><div className="panel-head"><div><div className="panel-kicker">STUDY PLAN</div><h2>Rejadagi vazifalar</h2><p>Foydalanuvchining yaqin vazifalari</p></div><div className="round-icon amber"><Target size={17}/></div></div><div className="plan-list">{upcomingTasks.map((task) => <div className="plan-row" key={task.id}><div className={`plan-icon ${task.done_at ? 'done' : ''}`}>{task.done_at ? <CheckCircle2 size={16}/> : <BookOpen size={16}/>}</div><div className="plan-copy"><b>{task.title}</b><span>{dateLabel(task.plan_date, true)} · {task.target_minutes} daqiqa · {task.task_type}</span></div><span className={`plan-status ${task.done_at ? 'done' : ''}`}>{task.done_at ? 'Bajarilgan' : 'Kutilmoqda'}</span></div>)}{!upcomingTasks.length && <div className="empty-state slim"><CalendarDays size={18}/><span>Bajarilmagan reja vazifalari yo‘q</span></div>}</div><div className="panel-subhead error-subhead"><div><div className="panel-kicker">REVIEW LIST</div><h3>Xatolar ro‘yxati</h3></div><span className="error-count"><CircleAlert size={14}/>{student.errorBank.open} ochiq</span></div><div className="error-list">{student.errorBank.items.filter((item) => !item.resolved_at).slice(0, 4).map((item) => <div className="error-item" key={item.id}><CircleAlert size={14}/><span>{item.topic_id || item.question_id}</span><small>{dateLabel(item.added_at, true)}</small></div>)}{student.errorBank.open === 0 && <div className="empty-line"><CheckCircle2 size={14}/> Ochiq xato savollari yo‘q</div>}</div></div>
    </section>
    <section className="panel attempts-panel"><div className="panel-head"><div><div className="panel-kicker">MOCK TARIXI</div><h2>Flashrush urinishlari</h2><p>Har bir sinovda yig‘ilgan bo‘lim ballari va to‘g‘ri javoblar</p></div><span className="inline-count">{student.flashrush.attemptCount} urinish</span></div><div className="attempts-table-wrap"><table className="attempts-table"><thead><tr><th>SANA</th><th>MOCK</th><th>MATH</th><th>READING & WRITING</th><th>JAMI BALL</th><th>TO‘G‘RI JAVOB</th></tr></thead><tbody>{student.flashrush.attempts.map((attempt) => <tr key={attempt.attempt_id}><td>{dateLabel(attempt.created_at)}</td><td><span className="mock-badge">Flashrush</span></td><td>{attempt.math}</td><td>{attempt.english}</td><td><b>{attempt.math + attempt.english}</b><span className="muted-total"> / 1600</span></td><td><b>{attempt.correct}</b><span className="muted-total"> / {attempt.answered}</span></td></tr>)}{!student.flashrush.attempts.length && <tr><td colSpan={6}><div className="empty-state">Hozircha Flashrush mock natijalari yo‘q</div></td></tr>}</tbody></table></div></section>
    <div className="data-footnote"><ShieldCheck size={14}/> Barcha hisoblar Supabase yozuvlaridan tuzildi. Sessiya sanasi: Toshkent vaqti.</div>
  </>;
}

function ScoreSection({ title, current, start, target }: { title: string; current: number | null; start: number | null; target: number | null }) { const base = current ?? start ?? 200; const pct = Math.max(0, Math.min(100, ((base - 200) / 600) * 100)); return <div className="score-section"><div className="score-section-top"><span>{title}</span><b>{current ?? '—'}<small> / 800</small></b></div><div className="score-track"><i style={{ width: `${pct}%` }}/></div><div className="score-range"><span>Boshlanishi: {start ?? '—'}</span><span>Maqsad: {target ?? '—'}</span></div></div>; }
function ErrorBox({ error, onClose }: { error: string; onClose?: () => void }) { return <div className="error-box"><CircleAlert size={16}/><span>{error}</span>{onClose && <button onClick={onClose} aria-label="Yopish"><X size={15}/></button>}</div>; }
async function readableError(error: { message: string; context?: unknown }) { const context = error.context; if (context instanceof Response) { try { const payload = await context.clone().json() as { error?: string }; if (payload.error) return payload.error; } catch { /* use SDK message */ } } return error.message; }

export default App;
