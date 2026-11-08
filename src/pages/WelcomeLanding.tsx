import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  CheckCircle2,
  Shield,
  Calculator,
  BookmarkCheck,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import { Button } from '../components/ui/Button';

// Real skill names from SATBase curriculum (src/lib/topics.ts)
interface Star {
  id: string;
  name: string;
  domain: string;
  x: number;
  y: number;
  lit: boolean;
  alwaysVisible?: boolean;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
}

const CONSTELLATION_STARS: Star[] = [
  { id: 'alg1', name: 'Linear Equations', domain: 'Math', x: 120, y: 60, lit: true, alwaysVisible: true, labelPosition: 'top' },
  { id: 'geom1', name: 'Lines, Angles & Triangles', domain: 'Math', x: 380, y: 75, lit: false, labelPosition: 'top' },
  { id: 'rw1', name: 'Cross-Text Connections', domain: 'Reading', x: 460, y: 210, lit: true, alwaysVisible: true, labelPosition: 'left' },
  { id: 'rw2', name: 'Inferences', domain: 'Reading', x: 440, y: 380, lit: false, labelPosition: 'left' },
  { id: 'alg2', name: 'Systems of Equations', domain: 'Math', x: 310, y: 490, lit: true, alwaysVisible: true, labelPosition: 'bottom' },
  { id: 'data1', name: 'Two-Variable Data', domain: 'Math', x: 140, y: 470, lit: false, labelPosition: 'bottom' },
  { id: 'rw3', name: 'Text Structure & Purpose', domain: 'Reading', x: 60, y: 340, lit: false, labelPosition: 'right' },
  { id: 'alg3', name: 'Nonlinear Functions', domain: 'Math', x: 75, y: 185, lit: true, labelPosition: 'right' },
];

const FAQS = [
  {
    q: 'Is it free to start practicing?',
    a: 'Yes. You can start practicing immediately with full access to 2,600+ questions, skill diagnostics, and our 14-day study scheduling at no cost.',
  },
  {
    q: 'How does SATBase compare to the actual Digital SAT?',
    a: 'SATBase replicates the Bluebook-style testing experience: the exact 2-module structure for Reading & Writing and Math, official module timing, question flagging, and the embedded College Board Desmos calculator.',
  },
  {
    q: 'Does Cosmo give away answers during practice or tests?',
    a: 'Never. Cosmo uses the Socratic method, offering progressive hints and asking guiding questions that help you spot the next step on your own. Furthermore, Cosmo is strictly disabled during timed mock tests.',
  },
  {
    q: 'How is my study data stored and used?',
    a: 'Your skill micro-ratings, practice attempts, and test timing are stored securely in your private account. AI hints are generated via secure API solely for your study queries. We never sell student data.',
  },
];

export default function WelcomeLanding() {
  const { user, signInWithGoogle } = useAuth();
  const [activeStar, setActiveStar] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Monitor scroll for mobile sticky CTA (appears once past hero ~400px)
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-paper text-ink transition-colors duration-200 selection:bg-accent/20 selection:text-ink">
      {/* ── 1. HEADER ── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-xs">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo: Fraunces SAT (ink) + BASE (accent) with small Cosmo head icon */}
          <Link
            to="/welcome"
            className="flex items-center gap-2 group py-1 select-none"
            title="SATBase - Digital SAT Preparation"
          >
            <img
              src="/images/avatar-blue.png"
              alt="Cosmo Mascot"
              width="28"
              height="28"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105 pointer-events-none"
            />
            <span className="font-display font-black text-2xl tracking-tight text-ink">
              SAT<span className="text-accent">BASE</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-2">
            <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
            <a href="#inside" className="hover:text-ink transition-colors">Inside</a>
            <a href="#cosmo" className="hover:text-ink transition-colors">Cosmo</a>
            <a href="#exam-feel" className="hover:text-ink transition-colors">Exam feel</a>
            <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          </nav>

          {/* Actions & Theme */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {!user ? (
              <>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={googleLoading}
                  className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-line bg-paper hover:bg-paper-2 text-ink text-xs font-semibold transition-colors shadow-xs cursor-pointer disabled:opacity-50"
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
                  <Button variant="accent" size="sm" className="font-bold text-xs shadow-xs">
                    Start practicing
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/">
                <Button variant="primary" size="sm" className="font-semibold text-xs shadow-xs">
                  Open workspace
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main>
        {/* ── 2. HERO SECTION ── */}
        <section className="relative overflow-hidden bg-paper pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Headline, subline, CTAs, facts */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-8">
                <h1 className="text-[44px] sm:text-6xl md:text-[clamp(72px,7.5vw,96px)] font-display font-bold tracking-tight text-ink leading-[1.02]">
                  Make every study session{' '}
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="relative z-10">count.</span>
                    {/* Hand-drawn orange circle SVG drawn strictly AROUND the word */}
                    <svg
                      className="absolute -inset-x-6 -inset-y-5 w-[calc(100%+48px)] h-[calc(100%+40px)] pointer-events-none text-accent"
                      viewBox="0 0 240 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M 28 52 C 26 22 78 8 130 8 C 195 8 232 24 232 50 C 232 76 182 92 124 92 C 60 92 12 78 14 48 C 16 26 72 12 140 10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="landing-hand-circle"
                      />
                    </svg>
                  </span>
                </h1>

                {/* Subline: exactly 14 words (max 18) */}
                <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-xl">
                  Bluebook-style practice, College Board Desmos, and Socratic AI coaching built specifically for the Digital SAT.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
                  <Link to={actionPath} className="w-full sm:w-auto">
                    <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold text-accent-contrast shadow-notebook hover:shadow-notebook-hover">
                      {user ? 'Open workspace' : 'Start practicing'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  {!user && (
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={googleLoading}
                      className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-line bg-paper-2 hover:bg-surface text-ink text-sm font-semibold transition-colors shadow-xs cursor-pointer disabled:opacity-50"
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
                </div>

                {/* True factual proof row */}
                <div className="pt-2 text-xs sm:text-sm text-ink-muted flex flex-wrap items-center gap-x-4 gap-y-1.5 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    2,600+ practice questions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    29 official skills
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Untimed practice & timed mocks
                  </span>
                </div>
              </div>

              {/* Right Column: Borderless constellation on paper (560-640px) with Cosmo big in center */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[560px] sm:max-w-[600px] aspect-square flex items-center justify-center select-none">
                  {/* Constellation lines SVG */}
                  <svg
                    viewBox="0 0 560 560"
                    className="absolute inset-0 w-full h-full text-line pointer-events-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Perimeter orbit connecting lines */}
                    <line x1="120" y1="60" x2="380" y2="75" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="380" y1="75" x2="460" y2="210" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="460" y1="210" x2="440" y2="380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="440" y1="380" x2="310" y2="490" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="310" y1="490" x2="140" y2="470" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="140" y1="470" x2="60" y2="340" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="60" y1="340" x2="75" y2="185" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="75" y1="185" x2="120" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Radial lines connecting to Cosmo center (280, 280) */}
                    <line x1="280" y1="280" x2="120" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                    <line x1="280" y1="280" x2="460" y2="210" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                    <line x1="280" y1="280" x2="310" y2="490" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                    <line x1="280" y1="280" x2="75" y2="185" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                  </svg>

                  {/* Center Floating Big Cosmo Mascot (>= 320px) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="landing-cosmo-float flex flex-col items-center">
                      <img
                        src="/images/avatar-blue.png"
                        alt="Cosmo Mascot"
                        width="340"
                        height="340"
                        className="w-64 h-64 sm:w-80 sm:h-80 md:w-[330px] md:h-[330px] object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Stars with labels (3 always visible, others on hover) */}
                  {CONSTELLATION_STARS.map((star) => {
                    const isHovered = activeStar === star.id;
                    const showLabel = star.alwaysVisible || isHovered;

                    return (
                      <div
                        key={star.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                        style={{
                          left: `${(star.x / 560) * 100}%`,
                          top: `${(star.y / 560) * 100}%`,
                        }}
                      >
                        <button
                          type="button"
                          onMouseEnter={() => setActiveStar(star.id)}
                          onMouseLeave={() => setActiveStar(null)}
                          onFocus={() => setActiveStar(star.id)}
                          onBlur={() => setActiveStar(null)}
                          aria-label={star.name}
                          className="relative p-2.5 group flex items-center justify-center cursor-pointer"
                        >
                          {/* Star point */}
                          <span
                            className={`block rounded-full transition-all duration-300 ${
                              star.lit
                                ? 'w-3.5 h-3.5 bg-accent shadow-[0_0_12px_rgba(255,91,46,0.6)]'
                                : 'w-2.5 h-2.5 bg-ink-2'
                            } ${isHovered ? 'scale-125 ring-2 ring-ink ring-offset-2 ring-offset-paper' : ''}`}
                          />

                          {/* Star label */}
                          {showLabel && (
                            <span
                              className={`absolute whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-semibold border pointer-events-none shadow-xs transition-opacity duration-200 ${
                                isHovered
                                  ? 'bg-ink text-paper border-ink z-30'
                                  : 'bg-paper-2/95 text-ink border-line backdrop-blur-xs'
                              } ${
                                star.labelPosition === 'top'
                                  ? 'bottom-full mb-1 left-1/2 -translate-x-1/2'
                                  : star.labelPosition === 'bottom'
                                  ? 'top-full mt-1 left-1/2 -translate-x-1/2'
                                  : star.labelPosition === 'left'
                                  ? 'right-full mr-1.5 top-1/2 -translate-y-1/2'
                                  : 'left-full ml-1.5 top-1/2 -translate-y-1/2'
                              }`}
                            >
                              {star.name}
                            </span>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. THE PROBLEM (Paper Background) ── */}
        <section className="border-t border-line bg-paper py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Statement (40-48px) with orange marker stroke highlights */}
              <div className="lg:col-span-8 space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  The Problem
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-display font-medium text-ink leading-[1.2]">
                  Most students prep for the Digital SAT trapped between{' '}
                  <span className="relative inline-block px-1 z-0">
                    <span className="absolute inset-x-0 bottom-1 top-2 bg-accent/20 -rotate-1 rounded-sm -z-10" />
                    scattered PDFs
                  </span>{' '}
                  and{' '}
                  <span className="relative inline-block px-1 z-0">
                    <span className="absolute inset-x-0 bottom-1 top-2 bg-accent/20 rotate-1 rounded-sm -z-10" />
                    random practice with no feedback
                  </span>
                  .
                </h2>
                <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-2xl">
                  You solve dozens of problems without knowing which micro-skill broke down, whether your pacing matched the module clock, or what to review before test day.
                </p>
              </div>

              {/* Right: 2 Floating Drifting Pills */}
              <div className="lg:col-span-4 flex flex-col gap-4 items-start lg:items-end">
                <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-line bg-paper-2 text-ink text-sm font-medium shadow-notebook -rotate-2 hover:rotate-0 transition-transform">
                  <span className="text-base">📄</span>
                  <span>300-page scattered PDFs with no answer keys</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-line bg-paper-2 text-ink text-sm font-medium shadow-notebook rotate-2 hover:rotate-0 transition-transform">
                  <span className="text-base">❓</span>
                  <span>50 questions solved, zero pacing feedback</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. HOW IT WORKS (Paper-2 Background) ── */}
        <section id="how-it-works" className="border-t border-line bg-paper-2 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="space-y-3 mb-16">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                How It Works
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[clamp(44px,4.5vw,56px)] font-display font-bold text-ink tracking-tight leading-[1.1]">
                Three connected tools for calm mastery.
              </h2>
            </div>

            {/* Three wide columns with huge Fraunces numerals & cropped UI details */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Column 01 */}
              <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7 flex flex-col justify-between shadow-notebook">
                <div className="space-y-4">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-display font-bold text-accent/70 leading-none select-none">
                    01
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink">
                    Practice by skill
                  </h3>
                  <p className="text-base text-ink-2 leading-relaxed">
                    Work untimed problem sets across 29 Digital SAT categories with Cosmo&apos;s progressive hint ladder when you get stuck.
                  </p>
                </div>
                <div className="mt-6 rounded-xl border border-line overflow-hidden bg-paper-2">
                  <img
                    src="/images/landing/ui-practice-crop.webp"
                    alt="SATBase Practice Question Detail"
                    width="600"
                    height="380"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Column 02 */}
              <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7 flex flex-col justify-between shadow-notebook">
                <div className="space-y-4">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-display font-bold text-accent/70 leading-none select-none">
                    02
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink">
                    Bluebook-style mock tests
                  </h3>
                  <p className="text-base text-ink-2 leading-relaxed">
                    Experience the authentic 2-module digital exam interface, module pacing clocks, and embedded College Board Desmos.
                  </p>
                </div>
                <div className="mt-6 rounded-xl border border-line overflow-hidden bg-paper-2">
                  <img
                    src="/images/landing/ui-mock-crop.webp"
                    alt="SATBase Mock Exam Header and Timer Detail"
                    width="640"
                    height="280"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Column 03 */}
              <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7 flex flex-col justify-between shadow-notebook">
                <div className="space-y-4">
                  <div className="text-7xl sm:text-8xl md:text-9xl font-display font-bold text-accent/70 leading-none select-none">
                    03
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink">
                    Follow progress & plan
                  </h3>
                  <p className="text-base text-ink-2 leading-relaxed">
                    Track your domain micro-ratings (200–800) and follow a dynamic 14-day study plan targeting your exact weaknesses.
                  </p>
                </div>
                <div className="mt-6 rounded-xl border border-line overflow-hidden bg-paper-2">
                  <img
                    src="/images/landing/ui-plan-crop.webp"
                    alt="SATBase Study Plan and Skill Rating Detail"
                    width="640"
                    height="340"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. INSIDE SATBASE (Paper Background) ── */}
        <section id="inside" className="border-t border-line bg-paper py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="space-y-3 mb-16 text-center sm:text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                Inside The Workspace
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[clamp(44px,4.5vw,56px)] font-display font-bold text-ink tracking-tight leading-[1.1]">
                Real screens from actual study sessions.
              </h2>
              <p className="text-lg text-ink-2 max-w-xl">
                Distraction-free notebook environment built for deep focus and honest practice.
              </p>
            </div>

            {/* 2 LARGE Screenshots in clean browser frame with 2px ink border, rotated, with captions and orange arrow */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-6 lg:grid lg:grid-cols-2 lg:overflow-visible">
              {/* Frame 1: Practice Arena */}
              <div className="min-w-[85vw] sm:min-w-[540px] lg:min-w-0 snap-center transition-transform duration-300 lg:-rotate-1.5 hover:rotate-0">
                <div className="rounded-2xl border-2 border-ink bg-surface shadow-notebook overflow-hidden">
                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-paper-2 border-b border-line text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-2/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-2/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-2/30" />
                    </div>
                    <span className="font-mono text-[11px] text-ink-muted">satbase.internal/practice</span>
                    <span className="w-4" />
                  </div>
                  {/* Screenshot 2x WebP */}
                  <img
                    src="/images/landing/screenshot-practice-large.webp"
                    alt="SATBase Targeted Practice Arena Screen"
                    width="1280"
                    height="760"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Handwritten caption + hand-drawn SVG arrow */}
                <div className="mt-4 px-2 flex items-start gap-3">
                  <svg className="w-8 h-8 text-accent shrink-0 -rotate-12 mt-0.5" viewBox="0 0 40 40" fill="none">
                    <path d="M 10 30 Q 25 25 28 10 M 20 12 L 28 10 L 30 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-serif italic text-base text-ink leading-snug">
                    Targeted skill arena with progressive Socratic hints whenever you encounter a roadblock.
                  </p>
                </div>
              </div>

              {/* Frame 2: Bluebook Mock Exam */}
              <div className="min-w-[85vw] sm:min-w-[540px] lg:min-w-0 snap-center transition-transform duration-300 lg:rotate-1.5 hover:rotate-0">
                <div className="rounded-2xl border-2 border-ink bg-surface shadow-notebook overflow-hidden">
                  {/* Browser chrome header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-paper-2 border-b border-line text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-2/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-2/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-ink-2/30" />
                    </div>
                    <span className="font-mono text-[11px] text-ink-muted">satbase.internal/mock-tests</span>
                    <span className="w-4" />
                  </div>
                  {/* Screenshot 2x WebP */}
                  <img
                    src="/images/landing/screenshot-mock-large.webp"
                    alt="SATBase Bluebook-style Mock Exam Screen"
                    width="1360"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Handwritten caption + hand-drawn SVG arrow */}
                <div className="mt-4 px-2 flex items-start gap-3">
                  <svg className="w-8 h-8 text-accent shrink-0 rotate-12 mt-0.5" viewBox="0 0 40 40" fill="none">
                    <path d="M 30 30 Q 15 25 12 10 M 20 12 L 12 10 L 10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-serif italic text-base text-ink leading-snug">
                    Bluebook-style exam screen featuring official module clocks and embedded College Board Desmos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. MEET COSMO (Paper-2 Background) ── */}
        <section id="cosmo" className="border-t border-line bg-paper-2 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left: Philosophy & Big Cosmo Mascot */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                  Socratic AI Coach
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-[clamp(44px,4.5vw,56px)] font-display font-bold text-ink tracking-tight leading-[1.1]">
                  Meet Cosmo: guides you, never spoils.
                </h2>
                <p className="text-lg text-ink-2 leading-relaxed">
                  Instead of simply giving away answers, Cosmo asks step-by-step questions that guide you to discover the solution on your own.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-ink-2">
                    <CheckCircle2 className="w-5 h-5 text-moss shrink-0 mt-0.5" />
                    <span>Breaks down complex problems into clear, manageable steps.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-ink-2">
                    <CheckCircle2 className="w-5 h-5 text-moss shrink-0 mt-0.5" />
                    <span>Builds lasting problem-solving intuition instead of dependency.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-ink-2">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Strictly locked during timed mock tests to protect authentic test conditions.</span>
                  </div>
                </div>

                {/* Big Cosmo Mascot beside chat */}
                <div className="pt-4 flex items-center gap-4">
                  <img
                    src="/images/avatar-blue.png"
                    alt="Cosmo Mascot"
                    width="120"
                    height="120"
                    className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-md landing-cosmo-float"
                  />
                  <div>
                    <div className="font-display font-bold text-lg text-ink">Cosmo</div>
                    <div className="text-xs text-ink-muted">Socratic Study Guide · Always patient</div>
                  </div>
                </div>
              </div>

              {/* Right: Big Socratic Chat Example */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border-2 border-ink bg-surface p-6 sm:p-7 shadow-notebook space-y-4">
                  <div className="flex items-center justify-between border-b border-line pb-3 text-xs text-ink-muted font-mono">
                    <span className="flex items-center gap-2 font-bold text-ink">
                      <span className="px-2 py-0.5 rounded-md bg-accent text-accent-contrast text-[11px]">
                        Example
                      </span>
                      Socratic Dialogue
                    </span>
                    <span>Untimed Practice</span>
                  </div>

                  {/* Student message 1 */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-paper-2 border border-line flex items-center justify-center text-xs font-mono text-ink font-bold shrink-0">
                      S
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-paper-2 p-3.5 text-sm text-ink max-w-[85%] leading-relaxed">
                      I got stuck on this quadratic: 2x² - 8x + 6 = 0. Should I jump straight to the quadratic formula?
                    </div>
                  </div>

                  {/* Cosmo hint 1 */}
                  <div className="flex gap-3 items-start">
                    <img
                      src="/images/avatar-blue.png"
                      alt="Cosmo"
                      width="28"
                      height="28"
                      className="w-7 h-7 object-contain shrink-0 mt-0.5"
                    />
                    <div className="rounded-2xl rounded-tl-none bg-accent/10 border border-accent/30 p-3.5 text-sm text-ink max-w-[85%] leading-relaxed">
                      You could! But take a close look at all three coefficients: <strong>2, -8, and 6</strong>. What happens if you divide the entire equation by 2 first?
                    </div>
                  </div>

                  {/* Student message 2 */}
                  <div className="flex gap-3 items-start">
                    <div className="w-7 h-7 rounded-full bg-paper-2 border border-line flex items-center justify-center text-xs font-mono text-ink font-bold shrink-0">
                      S
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-paper-2 p-3.5 text-sm text-ink max-w-[85%] leading-relaxed">
                      That leaves x² - 4x + 3 = 0... which factors easily into (x - 1)(x - 3) = 0!
                    </div>
                  </div>

                  {/* Cosmo hint 2 */}
                  <div className="flex gap-3 items-start">
                    <img
                      src="/images/avatar-blue.png"
                      alt="Cosmo"
                      width="28"
                      height="28"
                      className="w-7 h-7 object-contain shrink-0 mt-0.5"
                    />
                    <div className="rounded-2xl rounded-tl-none bg-accent/10 border border-accent/30 p-3.5 text-sm text-ink max-w-[85%] leading-relaxed">
                      Spot on! Factoring took ten seconds and saved you two valuable minutes on the module timer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. REAL EXAM FEEL (Full-Bleed Ink Band) ── */}
        <section id="exam-feel" className="bg-ink text-paper py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="space-y-3 mb-16 text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-accent text-accent-contrast text-xs font-mono uppercase tracking-widest font-bold">
                Authentic Conditions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[clamp(44px,4.5vw,56px)] font-display font-bold text-paper tracking-tight leading-[1.1]">
                Built to match the real test day.
              </h2>
              <p className="text-lg text-paper/80 max-w-xl">
                No surprises on Saturday morning. Bluebook exam feel down to every button, timer, and modal.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left: Big Test-Screen Crop in crisp dark container */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border-2 border-line/40 bg-paper/5 shadow-2xl">
                  <img
                    src="/images/landing/screenshot-mock-large.webp"
                    alt="Bluebook-style exam interface in SATBase"
                    width="1360"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right: Three verified facts in paper colour */}
              <div className="lg:col-span-5 space-y-7">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-paper/10 border border-paper/20 shrink-0 text-accent">
                    <Clock3 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-paper">Official 2-module structure</h3>
                    <p className="text-sm text-paper/80 mt-1 leading-relaxed">
                      Practice with official test timing: 27 questions per Reading & Writing module (32 min) and 22 questions per Math module (35 min).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-paper/10 border border-paper/20 shrink-0 text-accent">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-paper">College Board Desmos embedded</h3>
                    <p className="text-sm text-paper/80 mt-1 leading-relaxed">
                      Use the exact graphing calculator approved for the Digital SAT, with full plotting, table, and slider capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-paper/10 border border-paper/20 shrink-0 text-accent">
                    <BookmarkCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-paper">Module review screen</h3>
                    <p className="text-sm text-paper/80 mt-1 leading-relaxed">
                      Flag difficult questions for review, check unanswered questions at a glance, and check your selections before submitting each module.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. ACCESSIBLE FAQ (Paper-2 Background) ── */}
        <section id="faq" className="border-t border-line bg-paper-2 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[800px]">
            <div className="space-y-3 mb-12 text-center">
              <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[clamp(44px,4.5vw,56px)] font-display font-bold text-ink tracking-tight leading-[1.1]">
                Frequently asked questions.
              </h2>
              <p className="text-base text-ink-2">
                Honest answers about the platform, tools, and privacy.
              </p>
            </div>

            <div className="divide-y divide-line rounded-2xl border border-line bg-paper shadow-notebook">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="p-5 sm:p-6">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="flex w-full items-center justify-between text-left gap-4 font-display font-semibold text-base sm:text-lg text-ink hover:text-accent transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-ink-muted shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-accent' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${idx}`}
                        className="mt-3 text-sm sm:text-base text-ink-2 leading-relaxed"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA BAND (Ink Background) ── */}
        <section className="border-t border-line bg-ink text-paper py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-paper">
              Start your first practice today.
            </h2>
            <p className="text-base sm:text-lg text-paper/80 leading-relaxed max-w-xl mx-auto">
              Join students preparing for the Digital SAT with focused, calm practice. Pick a skill and see where you stand in five minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link to={actionPath} className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto font-bold text-accent-contrast shadow-notebook hover:shadow-notebook-hover"
                >
                  {user ? 'Open workspace' : 'Start practicing'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {!user && (
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={googleLoading}
                  className="text-sm text-paper/80 hover:text-paper underline underline-offset-4 cursor-pointer py-2 font-medium"
                >
                  Or continue with Google &rarr;
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ── 10. EDITORIAL FOOTER (Paper Background) ── */}
      <footer className="border-t border-line bg-paper py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
            {/* Minimal App Brand */}
            <div className="flex items-center gap-2">
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo"
                width="20"
                height="20"
                className="w-5 h-5 object-contain"
              />
              <span className="font-display font-bold text-sm text-ink">
                SAT<span className="text-accent">BASE</span>
              </span>
              <span className="text-ink-muted ml-2">· Digital SAT Preparation Workspace</span>
            </div>

            {/* Links */}
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

          {/* Trademark Disclaimer required by specification */}
          <div className="border-t border-line pt-4 text-xs text-ink-2 text-center sm:text-left leading-relaxed">
            SAT is a registered trademark of the College Board, which is not affiliated with SATBase.
          </div>
        </div>
      </footer>

      {/* ── 11. MOBILE FIRST STICKY CTA BAR ── */}
      {showStickyCta && (
        <div className="fixed bottom-0 inset-x-0 z-30 p-3 bg-paper/95 backdrop-blur-md border-t border-line flex items-center justify-between sm:hidden shadow-notebook animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center gap-2">
            <img
              src="/images/avatar-blue.png"
              alt="Cosmo"
              width="24"
              height="24"
              className="w-6 h-6 object-contain"
            />
            <span className="font-display font-bold text-sm text-ink">
              SAT<span className="text-accent">BASE</span>
            </span>
          </div>

          <Link to={actionPath}>
            <Button variant="accent" size="sm" className="font-bold text-xs shadow-xs">
              {user ? 'Open workspace' : 'Start practicing'}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
