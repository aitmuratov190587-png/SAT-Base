import { ArrowRight, BookOpenCheck, Clock3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudyLoadingScreen() {
  return (
    <main className="study-loading-screen relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 bg-paper text-ink transition-colors duration-200">
      <section className="relative z-10 w-full max-w-xl text-center">
        <div className="relative mx-auto grid h-24 w-24 place-items-center">
          <div className="loading-orbit absolute inset-0 rounded-full border border-line border-t-accent" />
          <img src="/images/avatar-blue.png" alt="" className="h-14 w-14 object-contain animate-float" />
        </div>
        <p className="mt-7 text-[10px] font-mono uppercase tracking-[.23em] text-accent">SATBASE · YOUR STUDY SPACE</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-ink font-display">Getting your workspace ready</h1>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-2">Focused practice, realistic mock tests, and progress you can follow—together in one place.</p>
        <div className="mx-auto mt-7 h-1 w-48 overflow-hidden rounded-full bg-paper-2"><div className="loading-bar h-full w-1/3 rounded-full bg-accent" /></div>

        <div className="mt-12 grid grid-cols-3 gap-2 text-left sm:gap-3">
          <div className="rounded-2xl border border-line bg-surface p-3 sm:p-4"><BookOpenCheck className="h-4 w-4 text-cobalt" /><p className="mt-3 text-[10px] font-semibold text-ink sm:text-xs">Topic practice</p><p className="mt-1 hidden text-[10px] leading-4 text-ink-2 sm:block">Build skills in small steps.</p></div>
          <div className="rounded-2xl border border-line bg-surface p-3 sm:p-4"><Clock3 className="h-4 w-4 text-berry" /><p className="mt-3 text-[10px] font-semibold text-ink sm:text-xs">Mock exams</p><p className="mt-1 hidden text-[10px] leading-4 text-ink-2 sm:block">Get comfortable with timing.</p></div>
          <div className="rounded-2xl border border-line bg-surface p-3 sm:p-4"><Target className="h-4 w-4 text-moss" /><p className="mt-3 text-[10px] font-semibold text-ink sm:text-xs">Your progress</p><p className="mt-1 hidden text-[10px] leading-4 text-ink-2 sm:block">See your own work add up.</p></div>
        </div>
        <Link to="/welcome" className="mt-7 inline-flex items-center gap-2 text-[11px] text-ink-2 transition hover:text-ink">Explore SATBase while you wait <ArrowRight className="h-3.5 w-3.5" /></Link>
      </section>
    </main>
  );
}
