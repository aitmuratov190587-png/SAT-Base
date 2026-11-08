import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Target,
  Clock3,
  Compass,
  CheckCircle2,
  Sparkles,
  Shield,
  Calculator,
  BookmarkCheck,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import { Button } from '../components/ui/Button';

// Real skill names from SATBase curriculum (src/lib/topics.ts)
const CONSTELLATION_STARS = [
  { id: 'alg1', name: 'Linear Equations in One Variable', x: 80, y: 40, lit: true, domain: 'Math' },
  { id: 'geom1', name: 'Lines, Angles, and Triangles', x: 235, y: 50, lit: false, domain: 'Math' },
  { id: 'rw1', name: 'Cross-Text Connections', x: 305, y: 135, lit: true, domain: 'Reading & Writing' },
  { id: 'rw2', name: 'Inferences', x: 285, y: 245, lit: false, domain: 'Reading & Writing' },
  { id: 'alg2', name: 'Systems of Two Equations', x: 215, y: 315, lit: true, domain: 'Math' },
  { id: 'data1', name: 'Two-Variable Data', x: 95, y: 310, lit: false, domain: 'Math' },
  { id: 'rw3', name: 'Text Structure and Purpose', x: 35, y: 225, lit: false, domain: 'Reading & Writing' },
  { id: 'alg3', name: 'Nonlinear Functions', x: 45, y: 125, lit: true, domain: 'Math' },
];

const FAQS = [
  {
    q: 'Is it free to start?',
    a: 'You can start practicing for free. All 2,600+ questions, diagnostics, and study scheduling are open at no cost. Additional plans and pro features are coming later.',
  },
  {
    q: 'How is my study data used?',
    a: 'Your practice history, skill micro-ratings, and exam attempts are stored securely in Supabase. AI tutoring requests are processed through Google Gemini solely to generate hints. We never sell your personal data or share your study records with third parties.',
  },
  {
    q: 'Does the AI give me answers during a mock test?',
    a: 'No. To protect genuine test conditions, Cosmo is strictly disabled during timed mock tests and diagnostics. You get full Socratic hints only during untimed topic practice.',
  },
  {
    q: 'Which SAT format does SATBase prepare me for?',
    a: 'SATBase is built exclusively for the Digital SAT — matching the official 2-module adaptive format for both Reading & Writing and Math with College Board Desmos.',
  },
];

export default function WelcomeLanding() {
  const { user, signInWithGoogle } = useAuth();
  const [activeStar, setActiveStar] = useState<string | null>(CONSTELLATION_STARS[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [googleLoading, setGoogleLoading] = useState(false);

  const actionPath = user ? '/' : '/login';

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await signInWithGoogle();
    } catch (err) {
      console.error('Google sign in error:', err);
      setGoogleLoading(false);
    }
  };

  const selectedStarData = CONSTELLATION_STARS.find((s) => s.id === activeStar) || CONSTELLATION_STARS[0];

  return (
    <div className="relative min-h-screen bg-paper text-ink transition-colors duration-200">
      {/* ── 1. HEADER ── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-xs">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/welcome" className="flex items-center group py-1" title="SATBase">
            <img
              src="/images/satbase-logo-full.png"
              alt="SATBase - SAT Preparation Platform"
              width="144"
              height="48"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 select-none pointer-events-none dark:hidden"
            />
            <img
              src="/images/satbase-logo-dark.png"
              alt="SATBase - SAT Preparation Platform"
              width="144"
              height="48"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 select-none pointer-events-none hidden dark:block"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-ink-2">
            <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
            <a href="#inside" className="hover:text-ink transition-colors">Inside</a>
            <a href="#cosmo" className="hover:text-ink transition-colors">Cosmo</a>
            <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {!user ? (
              <>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={googleLoading}
                  className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-line bg-surface hover:bg-paper-2 text-ink text-xs font-medium transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                  title="Sign in with Google"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <Link to="/login">
                  <Button variant="primary" size="sm" className="font-semibold text-xs">
                    Start practicing
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/">
                <Button variant="primary" size="sm" className="font-semibold text-xs">
                  Open workspace
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* ── 2. HERO SECTION ── */}
        <section className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-ink leading-[1.08]">
                Make every study session{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">count.</span>
                  <svg
                    className="absolute -inset-x-2.5 -inset-y-2 w-[calc(100%+20px)] h-[calc(100%+16px)] pointer-events-none text-accent"
                    viewBox="0 0 140 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 12 28 C 14 14, 126 10, 128 26 C 130 42, 10 46, 20 28"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="landing-hand-circle"
                    />
                  </svg>
                </span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-ink-2 leading-relaxed">
                Authentic Bluebook practice with Socratic AI coaching, College Board Desmos, and clear mastery ratings across 2,600+ questions.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                <Link to={actionPath} className="inline-block">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold shadow-xs">
                    {user ? 'Open workspace' : 'Start practicing'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                {!user && (
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={googleLoading}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[12px] border border-line bg-surface hover:bg-paper-2 text-ink text-sm font-medium transition-colors shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                )}

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-ink-2 hover:text-ink transition-colors"
                >
                  See how it works &darr;
                </a>
              </div>

              {/* Real count proof line */}
              <div className="pt-2 text-xs text-ink-muted flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>✦ 2,600+ practice questions</span>
                <span>✦ 29 official skills</span>
                <span>✦ Zero score promises</span>
              </div>
            </div>

            {/* Right: Cosmo & Interactive Skill Constellation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-2xl border border-line bg-surface p-4 flex flex-col justify-between overflow-hidden shadow-notebook">
                {/* Constellation SVG Canvas */}
                <div className="relative flex-1 w-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 350 350"
                    className="w-full h-full text-line-strong/60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Constellation connecting lines */}
                    <line x1="80" y1="40" x2="235" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="235" y1="50" x2="305" y2="135" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="305" y1="135" x2="285" y2="245" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="285" y1="245" x2="215" y2="315" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="215" y1="315" x2="95" y2="310" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="95" y1="310" x2="35" y2="225" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="35" y1="225" x2="45" y2="125" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="45" y1="125" x2="80" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Lines connecting to Cosmo center (175, 175) */}
                    <line x1="175" y1="175" x2="80" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <line x1="175" y1="175" x2="305" y2="135" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <line x1="175" y1="175" x2="215" y2="315" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                    <line x1="175" y1="175" x2="45" y2="125" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                  </svg>

                  {/* Interactive Star Buttons */}
                  {CONSTELLATION_STARS.map((star) => {
                    const isSelected = activeStar === star.id;
                    return (
                      <button
                        key={star.id}
                        type="button"
                        onMouseEnter={() => setActiveStar(star.id)}
                        onFocus={() => setActiveStar(star.id)}
                        onClick={() => setActiveStar(star.id)}
                        aria-label={star.name}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-transform duration-200 cursor-pointer ${
                          isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                        }`}
                        style={{
                          left: `${(star.x / 350) * 100}%`,
                          top: `${(star.y / 350) * 100}%`,
                        }}
                      >
                        <span
                          className={`block rounded-full transition-all duration-200 ${
                            star.lit
                              ? 'w-3 h-3 bg-accent shadow-[0_0_8px_rgba(255,91,46,0.5)]'
                              : 'w-2.5 h-2.5 bg-ink-2'
                          } ${isSelected ? 'ring-2 ring-ink ring-offset-2 ring-offset-surface' : ''}`}
                        />
                      </button>
                    );
                  })}

                  {/* Center Floating Cosmo Mascot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                    <div className="landing-cosmo-float flex flex-col items-center">
                      <img
                        src="/images/avatar-blue.png"
                        alt="Cosmo Mascot"
                        width="72"
                        height="72"
                        className="h-16 w-16 sm:h-18 sm:w-18 object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Skill Name Hover Pill */}
                <div className="mt-2 border-t border-line pt-2 text-center">
                  <div className="text-[11px] font-semibold text-ink truncate">
                    {selectedStarData.name}
                  </div>
                  <div className="text-[10px] text-ink-muted">
                    {selectedStarData.domain} · Hover stars to inspect curriculum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. THE PROBLEM ── */}
        <section className="border-y border-line bg-paper-2/40 py-16 sm:py-20 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-ink">
              The standard way to study is broken.
            </h2>
            <p className="text-lg sm:text-xl font-display text-ink-2 leading-relaxed">
              Most students prep for the Digital SAT trapped between{' '}
              <span className="bg-accent-subtle text-ink font-semibold px-1.5 py-0.5 rounded-sm border-b-2 border-accent/40">
                scattered PDFs
              </span>{' '}
              and{' '}
              <span className="bg-accent-subtle text-ink font-semibold px-1.5 py-0.5 rounded-sm border-b-2 border-accent/40">
                random practice with no feedback
              </span>
              . You work through practice tests without knowing which micro-skill broke down, whether your pacing matched the module clock, or what to review next.
            </p>
          </div>
        </section>

        {/* ── 4. HOW IT WORKS ── */}
        <section id="how-it-works" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink">
              How SATBase works
            </h2>
            <p className="text-sm text-ink-2">
              Three connected tools designed to turn confusion into calm mastery.
            </p>
          </div>

          <div className="relative border-l-2 border-dashed border-line ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-line bg-surface text-ink font-mono text-xs font-bold shadow-xs">
                01
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-accent" />
                  <h3 className="text-base sm:text-lg font-semibold text-ink">
                    Practice by skill
                  </h3>
                </div>
                <p className="text-sm text-ink-2 leading-relaxed max-w-xl">
                  Focus on individual skills from our 29 Digital SAT categories. Work through untimed problem sets with Cosmo&apos;s progressive hint ladder when you get stuck.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-line bg-surface text-ink font-mono text-xs font-bold shadow-xs">
                02
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4 text-accent" />
                  <h3 className="text-base sm:text-lg font-semibold text-ink">
                    Take a Bluebook-style mock test
                  </h3>
                </div>
                <p className="text-sm text-ink-2 leading-relaxed max-w-xl">
                  Experience the real 2-module digital exam interface, timed pacing, question flagging, and the embedded College Board Desmos calculator.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-line bg-surface text-ink font-mono text-xs font-bold shadow-xs">
                03
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-accent" />
                  <h3 className="text-base sm:text-lg font-semibold text-ink">
                    Follow your progress and plan
                  </h3>
                </div>
                <p className="text-sm text-ink-2 leading-relaxed max-w-xl">
                  Track your domain micro-ratings (200–800) and follow a dynamic 14-day study plan that schedules more review for your weakest areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. INSIDE SATBASE (POLAROID SCREENSHOTS) ── */}
        <section id="inside" className="border-t border-line bg-paper-2/30 py-16 sm:py-24 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-2 mb-14">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink">
                Inside SATBase
              </h2>
              <p className="text-sm text-ink-2">
                Real screens from the workspace. Clean, quiet, and distraction-free.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Polaroid 1: Practice Arena */}
              <div className="group rounded-2xl border border-line bg-surface p-3.5 shadow-notebook transition-all duration-300 md:-rotate-1 hover:rotate-0 hover:shadow-notebook-hover">
                <div className="overflow-hidden rounded-lg border border-line/60 bg-paper">
                  <img
                    src="/images/landing/screenshot-practice.webp"
                    alt="SATBase Practice Arena Screen"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-3 px-1 text-center">
                  <p className="font-serif italic text-xs text-ink-2">
                    &ldquo;Targeted skill arena with progressive Socratic hints.&rdquo;
                  </p>
                </div>
              </div>

              {/* Polaroid 2: Mock Exam */}
              <div className="group rounded-2xl border border-line bg-surface p-3.5 shadow-notebook transition-all duration-300 md:rotate-1 hover:rotate-0 hover:shadow-notebook-hover">
                <div className="overflow-hidden rounded-lg border border-line/60 bg-paper">
                  <img
                    src="/images/landing/screenshot-mock.webp"
                    alt="SATBase Bluebook-style Mock Exam Screen"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-3 px-1 text-center">
                  <p className="font-serif italic text-xs text-ink-2">
                    &ldquo;Official Bluebook interface with College Board Desmos.&rdquo;
                  </p>
                </div>
              </div>

              {/* Polaroid 3: Analytics */}
              <div className="group rounded-2xl border border-line bg-surface p-3.5 shadow-notebook transition-all duration-300 md:-rotate-0.5 hover:rotate-0 hover:shadow-notebook-hover">
                <div className="overflow-hidden rounded-lg border border-line/60 bg-paper">
                  <img
                    src="/images/landing/screenshot-analytics.webp"
                    alt="SATBase Analytics Dashboard Screen"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="pt-3 px-1 text-center">
                  <p className="font-serif italic text-xs text-ink-2">
                    &ldquo;SA-ELO ratings, study streaks, and weakness tracking.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. MEET COSMO ── */}
        <section id="cosmo" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            {/* Left: Philosophy */}
            <div className="md:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink leading-tight">
                Meet Cosmo: an AI tutor that guides, never spoils
              </h2>
              <p className="text-sm text-ink-2 leading-relaxed">
                Cosmo is an AI study coach built on the Socratic method. Instead of handing you the final answer, Cosmo guides you through the exact mathematical logic or textual evidence with step-by-step questions.
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-ink-2">
                  <CheckCircle2 className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Breaks down complex problems into manageable reasoning steps.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-ink-2">
                  <CheckCircle2 className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Builds lasting problem-solving confidence instead of dependency.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-ink-2">
                  <Shield className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Strictly locked during timed mock tests so diagnostic scores stay 100% authentic.</span>
                </div>
              </div>
            </div>

            {/* Right: Socratic Chat Example */}
            <div className="md:col-span-6">
              <div className="rounded-2xl border border-line bg-surface p-4 sm:p-5 shadow-notebook space-y-3">
                <div className="flex items-center justify-between border-b border-line pb-2.5 text-[11px] text-ink-muted">
                  <span className="flex items-center gap-1.5 font-medium text-ink">
                    <Sparkles className="w-3.5 h-3.5 text-accent" /> Example Socratic Dialogue
                  </span>
                  <span>Untimed Practice</span>
                </div>

                {/* Turn 1: Student */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-paper-2 border border-line flex items-center justify-center text-[10px] font-mono text-ink-2 shrink-0">
                    S
                  </div>
                  <div className="rounded-xl rounded-tl-none bg-paper-2 p-2.5 text-xs text-ink max-w-[85%]">
                    I got stuck on this quadratic: $2x^2 - 8x + 6 = 0$. Should I use the quadratic formula?
                  </div>
                </div>

                {/* Turn 2: Cosmo */}
                <div className="flex gap-2.5 items-start">
                  <img
                    src="/images/avatar-blue.png"
                    alt="Cosmo"
                    width="24"
                    height="24"
                    className="h-6 w-6 object-contain shrink-0 mt-0.5"
                  />
                  <div className="rounded-xl rounded-tl-none bg-accent-subtle/70 border border-accent/20 p-2.5 text-xs text-ink max-w-[85%] leading-relaxed">
                    You could! But take a close look at all three coefficients: <strong>2, -8, and 6</strong>. What happens if you factor out or divide the entire equation by 2 first?
                  </div>
                </div>

                {/* Turn 3: Student */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-paper-2 border border-line flex items-center justify-center text-[10px] font-mono text-ink-2 shrink-0">
                    S
                  </div>
                  <div className="rounded-xl rounded-tl-none bg-paper-2 p-2.5 text-xs text-ink max-w-[85%]">
                    That gives $x^2 - 4x + 3 = 0$... and that factors easily into $(x-1)(x-3) = 0$!
                  </div>
                </div>

                {/* Turn 4: Cosmo */}
                <div className="flex gap-2.5 items-start">
                  <img
                    src="/images/avatar-blue.png"
                    alt="Cosmo"
                    width="24"
                    height="24"
                    className="h-6 w-6 object-contain shrink-0 mt-0.5"
                  />
                  <div className="rounded-xl rounded-tl-none bg-accent-subtle/70 border border-accent/20 p-2.5 text-xs text-ink max-w-[85%] leading-relaxed">
                    Spot on! Factoring took five seconds and saved you two minutes on the test clock.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. REAL EXAM FEEL ── */}
        <section className="border-t border-line bg-paper-2/40 py-16 sm:py-24 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink">
                Built to match the real test day
              </h2>
              <p className="text-sm text-ink-2">
                No surprises on exam morning. The exact Digital SAT flow and tools.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left: Bluebook Exam Screenshot */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-notebook">
                  <img
                    src="/images/landing/screenshot-mock.webp"
                    alt="Official Bluebook test layout in SATBase"
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right: 3 Verified Facts */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex gap-3">
                  <div className="p-2 rounded-xl bg-surface border border-line shrink-0 text-accent">
                    <Clock3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Official 2-module structure</h3>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Practice with authentic test timing: 27 questions per Reading & Writing module (32 min) and 22 questions per Math module (35 min).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-xl bg-surface border border-line shrink-0 text-accent">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">College Board Desmos embedded</h3>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Use the exact graphing calculator approved for the Digital SAT, with full formula plotting and slider capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-xl bg-surface border border-line shrink-0 text-accent">
                    <BookmarkCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Module review screen</h3>
                    <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                      Flag difficult questions for review, check unanswered items at a glance, and review choices before submitting each module.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. ACCESSIBLE FAQ ACCORDION ── */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink">
              Frequently asked questions
            </h2>
            <p className="text-sm text-ink-2">
              Honest answers about the platform, privacy, and tools.
            </p>
          </div>

          <div className="divide-y divide-line rounded-2xl border border-line bg-surface shadow-xs">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="p-4 sm:p-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="flex w-full items-center justify-between text-left gap-4 font-medium text-sm sm:text-base text-ink hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-ink-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-accent' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="mt-3 text-xs sm:text-sm text-ink-2 leading-relaxed"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 9. FINAL CTA BAND ── */}
        <section className="bg-ink text-paper py-16 sm:py-20 px-4 sm:px-6 text-center">
          <div className="mx-auto max-w-2xl space-y-5">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-paper">
              Start your first practice today.
            </h2>
            <p className="text-sm sm:text-base text-paper/80 leading-relaxed max-w-lg mx-auto">
              Join students preparing for the Digital SAT with focused, calm practice. Pick a skill and see where you stand in five minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <Link to={actionPath} className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto font-bold text-accent-contrast shadow-sm"
                >
                  {user ? 'Open workspace' : 'Create free account'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {!user && (
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={googleLoading}
                  className="text-xs text-paper/80 hover:text-paper underline underline-offset-4 cursor-pointer py-2"
                >
                  Or continue with Google &rarr;
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ── 10. MINIMAL EDITORIAL FOOTER ── */}
      <footer className="border-t border-line bg-paper py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <div className="font-serif italic text-ink-2 text-center sm:text-left">
            SATBase · Digital SAT Preparation Workspace
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-ink transition-colors underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-ink transition-colors underline">
              Terms of Service
            </Link>
            <span>·</span>
            <span className="text-ink-muted">Contact: hello@PROD_DOMAIN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
