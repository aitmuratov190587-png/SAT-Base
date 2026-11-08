import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  Check,
  Clock3,
  Compass,
  Flame,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import { Button } from '../components/ui/Button';

const companions = [
  { id: 'blue', name: 'Cosmo', src: '/images/avatar-blue.png', color: '#38BDF8' },
  { id: 'study', name: 'Pico', src: '/images/avatar/avatar-study.png', color: '#E879F9' },
  { id: 'focus', name: 'Lumo', src: '/images/avatar/avatar-focus.png', color: '#34D399' },
  { id: 'celebrate', name: 'Nova', src: '/images/avatar/avatar-celebrate.png', color: '#FBBF24' },
];

export default function WelcomeLanding() {
  const { profile, updateProfile } = useApp();
  const { user } = useAuth();
  const [selected, setSelected] = useState(profile?.avatarUrl || companions[0].src);
  const actionPath = user ? '/' : '/login';
  const selectedCompanion = companions.find((item) => item.src === selected) || companions[0];

  useEffect(() => {
    if (profile?.avatarUrl) setSelected(profile.avatarUrl);
  }, [profile?.avatarUrl]);

  const chooseCompanion = (src: string) => {
    setSelected(src);
    if (user) void updateProfile({ avatarUrl: src });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink transition-colors duration-200">
      <header className="relative z-20 mx-auto flex h-[76px] max-w-7xl items-center justify-between border-b border-line px-5 sm:px-8">
        <Link to="/welcome" className="flex items-center gap-2.5">
          <img src="/images/avatar-blue.png" alt="" width="36" height="36" className="h-9 w-9 object-contain" />
          <span className="text-[15px] font-bold tracking-[-.04em] text-ink font-display">SAT<span className="text-accent">BASE</span></span>
          <span className="hidden rounded-md border border-line px-1.5 py-1 text-[8px] font-mono tracking-widest text-ink-2 sm:inline">UZ</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs text-ink-2 md:flex">
          <a href="#platform" className="transition hover:text-ink">Platform</a>
          <a href="#how-it-works" className="transition hover:text-ink">How it works</a>
          <a href="#companions" className="transition hover:text-ink">Study companion</a>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          {!user && <Link to="/login" className="hidden px-3 py-2 text-xs font-medium text-ink-2 transition hover:text-ink sm:inline-flex">Sign in</Link>}
          <Link to={actionPath} className="inline-flex items-center gap-2 rounded-xl bg-ink px-3.5 py-2.5 text-[11px] font-semibold text-paper shadow-xs transition hover:opacity-90 sm:px-4">
            {user ? 'Open workspace' : 'Start studying'} <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[.95fr_1.05fr] lg:gap-12 lg:pb-24 lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-[9px] font-mono uppercase tracking-[.15em] text-ink-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> A calmer way to prep for the SAT
          </div>

          <h1 className="mt-7 max-w-[650px] text-[42px] font-semibold leading-[1.02] tracking-[-.065em] text-ink font-display sm:text-6xl xl:text-[72px]">
            Make every
            <span className="block text-accent">study session</span>
            <span className="block">count.</span>
          </h1>

          <p className="mt-6 max-w-[510px] text-sm leading-7 text-ink-2 sm:text-[15px]">
            SATBase brings focused practice, Bluebook-style mock tests, and clear progress tracking into one thoughtful study space.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to={actionPath} className="inline-block">
              <Button
                variant="accent"
                size="lg"
                className="min-h-12 px-6 font-bold text-accent-contrast shadow-xs"
                rightIcon={<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}
              >
                Explore your workspace
              </Button>
            </Link>
            <a href="#platform" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-line px-5 text-xs font-semibold text-ink transition hover:border-line-strong hover:bg-surface">
              See what’s inside <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-ink-2">
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-moss" /> Practice at your pace</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-moss" /> Track real progress</span>
            <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-moss" /> Keep your focus</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[610px]">
          <div className="relative overflow-hidden rounded-[26px] bg-surface border border-line shadow-sm">
            <div className="flex h-12 items-center justify-between border-b border-line px-4 sm:px-5">
              <div className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-berry" /><i className="h-2 w-2 rounded-full bg-mustard" /><i className="h-2 w-2 rounded-full bg-moss" /></div>
              <span className="text-[9px] font-mono uppercase tracking-[.15em] text-ink-2">SATBASE · WORKSPACE PREVIEW</span>
              <span className="flex items-center gap-1 text-[9px] text-ink-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Preview</span>
            </div>

            <div className="grid gap-3 p-3.5 sm:grid-cols-[1fr_150px] sm:gap-4 sm:p-5">
              <div className="space-y-3">
                <div className="rounded-[18px] border border-line bg-paper-2/60 p-4 sm:p-5">
                  <div className="flex items-start justify-between">
                    <div><p className="text-[9px] font-mono uppercase tracking-[.15em] text-ink-2">Your study overview</p><p className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl font-display">One step at a time.</p></div>
                    <span className="grid h-8 w-8 place-items-center rounded-xl border border-line bg-surface text-ink"><Compass className="h-4 w-4" /></span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-surface border border-line p-2.5"><Flame className="h-3.5 w-3.5 text-accent" /><p className="mt-2 text-[9px] text-ink-2">Streak</p><p className="mt-1 text-[11px] font-semibold text-ink">Daily focus</p></div>
                    <div className="rounded-xl bg-surface border border-line p-2.5"><Target className="h-3.5 w-3.5 text-cobalt" /><p className="mt-2 text-[9px] text-ink-2">Progress</p><p className="mt-1 text-[11px] font-semibold text-ink">Your own pace</p></div>
                    <div className="rounded-xl bg-surface border border-line p-2.5"><BrainCircuit className="h-3.5 w-3.5 text-berry" /><p className="mt-2 text-[9px] text-ink-2">Guidance</p><p className="mt-1 text-[11px] font-semibold text-ink">In context</p></div>
                  </div>
                </div>

                <div className="rounded-[18px] border border-line bg-paper-2/60 p-4">
                  <div className="flex items-center justify-between"><div><p className="text-[9px] font-mono uppercase tracking-[.15em] text-ink-2">Quick start</p><p className="mt-1.5 text-sm font-semibold text-ink">Pick your next session</p></div><Zap className="h-4 w-4 text-mustard" /></div>
                  <div className="mt-3 flex gap-2">
                    <div className="flex flex-1 items-center gap-2 rounded-xl border border-line bg-surface p-2.5"><BookOpenCheck className="h-3.5 w-3.5 text-cobalt" /><span className="text-[10px] text-ink">Topic practice</span><ArrowUpRight className="ml-auto h-3 w-3 text-ink-2" /></div>
                    <div className="flex flex-1 items-center gap-2 rounded-xl border border-line bg-surface p-2.5"><Layers3 className="h-3.5 w-3.5 text-berry" /><span className="text-[10px] text-ink">Mock test</span><ArrowUpRight className="ml-auto h-3 w-3 text-ink-2" /></div>
                  </div>
                </div>
              </div>

              <div className="hidden flex-col items-center justify-between rounded-[18px] border border-line bg-paper-2/60 px-3 py-4 text-center sm:flex">
                <div><span className="mx-auto grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface text-accent"><Sparkles className="h-4 w-4" /></span><p className="mt-3 text-[9px] font-mono uppercase tracking-[.14em] text-ink-2">Your companion</p></div>
                <img src={selectedCompanion.src} alt="" className="h-24 w-24 object-contain drop-shadow-sm" />
                <div><p className="text-xs font-semibold text-ink">{selectedCompanion.name}</p><p className="mt-1 text-[9px] text-ink-2">Ready when you are</p></div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-line px-4 py-3 text-[9px] text-ink-2 sm:px-5">
              <ShieldCheck className="h-3.5 w-3.5 text-moss" /> Your practice and progress stay tied to your account.
              <span className="ml-auto hidden font-mono text-ink-2 sm:inline">BUILT FOR FOCUS</span>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="relative z-10 mx-auto max-w-7xl scroll-mt-10 px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="eyebrow">A STUDY SPACE THAT MAKES SENSE</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.04em] text-ink font-display sm:text-3xl">Everything you need. Nothing in your way.</h2></div>
          <p className="max-w-sm text-xs leading-6 text-ink-2">A clear place to practice, take a timed test, and see how your work adds up.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-[22px] p-5 sm:p-6 bg-surface border border-line"><span className="grid h-10 w-10 place-items-center rounded-[14px] border border-line bg-paper-2 text-cobalt"><BookOpenCheck className="h-5 w-5" /></span><h3 className="mt-5 text-sm font-semibold text-ink font-display">Practice with purpose</h3><p className="mt-2 text-xs leading-6 text-ink-2">Choose a topic, work through real questions, and review the reasoning behind each answer.</p></article>
          <article className="rounded-[22px] p-5 sm:p-6 bg-surface border border-line"><span className="grid h-10 w-10 place-items-center rounded-[14px] border border-line bg-paper-2 text-berry"><Clock3 className="h-5 w-5" /></span><h3 className="mt-5 text-sm font-semibold text-ink font-display">Feel test day</h3><p className="mt-2 text-xs leading-6 text-ink-2">Try a timed, two-module diagnostic with a focused Bluebook-style layout and review screen.</p></article>
          <article className="rounded-[22px] p-5 sm:p-6 bg-surface border border-line"><span className="grid h-10 w-10 place-items-center rounded-[14px] border border-line bg-paper-2 text-moss"><Target className="h-5 w-5" /></span><h3 className="mt-5 text-sm font-semibold text-ink font-display">See your progress</h3><p className="mt-2 text-xs leading-6 text-ink-2">Your answers, accuracy, study time, and streak are gathered in one personal dashboard.</p></article>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 mx-auto grid max-w-7xl gap-8 border-t border-line px-5 py-14 sm:px-8 md:grid-cols-[.75fr_1.25fr] md:items-center">
        <div><p className="eyebrow">THE STUDY LOOP</p><h2 className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-.04em] text-ink font-display">Focused practice becomes steady progress.</h2></div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-surface p-4"><span className="font-mono text-[10px] text-accent">01</span><p className="mt-3 text-xs font-semibold text-ink">Choose a skill</p><p className="mt-1.5 text-[10px] leading-5 text-ink-2">Pick a section or topic to work on.</p></div>
          <div className="rounded-2xl border border-line bg-surface p-4"><span className="font-mono text-[10px] text-accent">02</span><p className="mt-3 text-xs font-semibold text-ink">Practice &amp; review</p><p className="mt-1.5 text-[10px] leading-5 text-ink-2">Understand why an answer works.</p></div>
          <div className="rounded-2xl border border-line bg-surface p-4"><span className="font-mono text-[10px] text-accent">03</span><p className="mt-3 text-xs font-semibold text-ink">Build your rhythm</p><p className="mt-1.5 text-[10px] leading-5 text-ink-2">Return and let your progress add up.</p></div>
        </div>
      </section>

      <section id="companions" className="relative z-10 mx-auto grid max-w-7xl gap-8 border-t border-line px-5 py-14 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div><p className="eyebrow">MAKE IT YOURS</p><h2 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-ink font-display">Choose your study companion.</h2><p className="mt-2 max-w-md text-xs leading-6 text-ink-2">Pick the guide that fits your mood. You can change it later in your welcome space.</p></div>
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {companions.map((companion) => {
            const active = companion.src === selected;
            return <button key={companion.id} onClick={() => chooseCompanion(companion.src)} aria-pressed={active} className={`avatar-option ${active ? 'avatar-option-selected ring-2 ring-accent' : 'border border-line'} flex min-w-0 flex-col items-center rounded-2xl p-2.5 sm:p-4 bg-surface transition-all`}>
              <img src={companion.src} alt={companion.name} loading="lazy" decoding="async" width="64" height="64" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
              <span className="mt-1 truncate text-[9px] font-semibold text-ink sm:mt-2 sm:text-[11px]">{companion.name}</span>
            </button>;
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[24px] border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <div><p className="text-[9px] font-mono uppercase tracking-[.18em] text-accent">YOUR NEXT CHAPTER STARTS HERE</p><h2 className="mt-2 text-xl font-semibold tracking-tight text-ink font-display sm:text-2xl">Build a study routine that feels like yours.</h2></div>
          <Link to={actionPath} className="shrink-0">
            <Button
              variant="accent"
              size="md"
              className="font-bold text-accent-contrast shadow-xs"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Enter SATBase
            </Button>
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-line px-5 py-6 text-center text-xs text-ink-2 sm:px-8 space-y-2">
        <div>
          <span className="font-semibold text-ink font-display">SATBASE</span> <span className="px-1.5">·</span> A focused home for your Digital SAT prep.
        </div>
        <div className="flex items-center justify-center gap-4 text-[11px] text-ink-3">
          <Link to="/privacy" className="hover:text-ink transition-colors underline">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms" className="hover:text-ink transition-colors underline">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}
