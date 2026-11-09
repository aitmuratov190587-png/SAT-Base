import { FormEvent, useMemo, useState } from 'react';
import {
  BookOpen,
  Zap,
  Clock3,
  Flame,
  Trophy,
  Target,
  XCircle,
  Edit3,
  Sparkles,
  ArrowRight,
  X,
  Compass,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import GoalSetupModal from '../components/GoalSetupModal';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Skeleton from '../components/ui/Skeleton';
import SkillConstellation from '../components/SkillConstellation';

function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

export default function Dashboard() {
  const {
    profile,
    statistics,
    mockAttempts,
    updateProfile,
    setShowSetupModal,
    profileLoading,
    openAITutor,
  } = useApp();

  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [savingScore, setSavingScore] = useState(false);
  const [startingMath, setStartingMath] = useState('');
  const [startingEnglish, setStartingEnglish] = useState('');
  const [askQuery, setAskQuery] = useState('');

  // Starting, Latest, Goal, and Progress Calculations
  const startingScore = profile?.startingScore?.total || 0;
  const firstMockScore = mockAttempts[0] ? mockAttempts[0].math + mockAttempts[0].english : 0;
  const displayedStartingScore = startingScore || firstMockScore || 0;

  const latestMock = mockAttempts[mockAttempts.length - 1];
  const latestMockScore = latestMock ? latestMock.math + latestMock.english : 0;
  const currentScore = profile?.currentScore?.total || latestMockScore || displayedStartingScore;

  const targetScore = profile?.targetScore?.total || 0;
  const skillRating = currentScore || (latestMock ? latestMock.math + latestMock.english : 0);
  const mistakes = Math.max(0, (statistics?.questionsSolved ?? 0) - (statistics?.correctAnswers ?? 0));
  const streak = statistics?.streak ?? profile?.streak ?? 0;
  const todayStudySeconds = statistics?.todayStudySeconds ?? 0;

  // ── FIX BUG: Progress-to-goal calculation ──
  // Formula: (latest - start) / (goal - start), clamped to 0–100%. Shows exactly 0% at baseline!
  const progressPercent = useMemo(() => {
    if (targetScore > displayedStartingScore && displayedStartingScore > 0) {
      const climb = targetScore - displayedStartingScore;
      const gained = Math.max(0, currentScore - displayedStartingScore);
      return Math.min(100, Math.max(0, Math.round((gained / climb) * 100)));
    }
    if (targetScore > 0 && displayedStartingScore === 0) {
      return Math.min(100, Math.max(0, Math.round((currentScore / targetScore) * 100)));
    }
    return 0;
  }, [currentScore, displayedStartingScore, targetScore]);

  // Context sentence from real data
  const pointsClimbed = Math.max(0, currentScore - displayedStartingScore);
  const totalClimb = targetScore > displayedStartingScore ? targetScore - displayedStartingScore : 0;

  let heroContext = '';
  if (totalClimb > 0) {
    heroContext = `You are ${pointsClimbed} points into a ${totalClimb}-point climb. Start with one 10-minute session.`;
  } else if (targetScore > 0) {
    heroContext = `Your goal of ${targetScore} is set. Complete one 10-minute session to set your pace.`;
  } else {
    heroContext = 'Small steps every day. Set your target score and start with one 10-minute session.';
  }

  // Greeting by time of day
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
  const firstName = profile?.name?.trim().split(' ')[0] || 'Scholar';

  // Weakest skill calculation based on real user data
  const mathScore = profile?.currentScore?.math ?? 0;
  const englishScore = profile?.currentScore?.english ?? 0;
  const hasTopicData = mathScore > 0 || englishScore > 0;
  const isMathWeaker = mathScore <= englishScore;
  const weakestSkill = isMathWeaker ? 'Advanced Math & Algebra' : 'Craft & Structure (Reading)';

  // Build recommendation text strictly from real data
  let recommendedTitle = '';
  if (mistakes > 0) {
    if (hasTopicData) {
      recommendedTitle =
        mistakes === 1
          ? `Review 1 flagged question in ${weakestSkill}`
          : `Review ${mistakes} flagged questions in ${weakestSkill}`;
    } else {
      recommendedTitle =
        mistakes === 1 ? 'Review your 1 saved mistake.' : `Review your ${mistakes} saved mistakes.`;
    }
  } else {
    recommendedTitle = `Master ${weakestSkill}`;
  }

  const recommendedPath = '/questions';

  // Save Starting SAT Score Handler
  const handleSaveStartingScore = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const math = Number(startingMath);
    const english = Number(startingEnglish);
    if (math < 200 || math > 800 || english < 200 || english > 800) return;
    setSavingScore(true);
    await updateProfile({
      startingScore: { math, english, total: math + english },
      currentScore: { math, english, total: math + english },
    });
    setSavingScore(false);
    setIsScoreModalOpen(false);
  };

  // Ask Cosmo submission handler
  const handleAskCosmo = (e: FormEvent) => {
    e.preventDefault();
    openAITutor({ mode: 'general' }, askQuery.trim() || undefined);
    setAskQuery('');
  };

  // ── SKELETON LOADING STATE ──
  if (profileLoading) {
    return (
      <div className="space-y-8 animate-pulse font-sans">
        {/* Hero Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
          <div className="space-y-3 w-full max-w-xl">
            <Skeleton variant="text" height={44} className="w-3/4" />
            <Skeleton variant="text" height={20} className="w-5/6" />
          </div>
          <Skeleton variant="circular" width={112} height={112} />
        </div>

        {/* Trail Skeleton */}
        <Skeleton variant="rectangular" height={160} className="w-full" />

        {/* Today Strip Skeleton */}
        <Skeleton variant="rectangular" height={96} className="w-full" />

        {/* Next Session Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton variant="rectangular" height={180} />
          <Skeleton variant="rectangular" height={180} />
        </div>
      </div>
    );
  }

  // ── FIRST-TIME USER EMPTY STATE (3-step onboarding path instead of zeros) ──
  const isFirstTimeUser =
    !displayedStartingScore &&
    mockAttempts.length === 0 &&
    (statistics?.questionsSolved ?? 0) === 0;

  return (
    <>
      <GoalSetupModal />

      {/* Starting SAT Score Modal */}
      {isScoreModalOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsScoreModalOpen(false);
          }}
        >
          <form
            onSubmit={handleSaveStartingScore}
            className="w-full max-w-md rounded-[var(--radius-lg)] border border-line bg-surface p-6 sm:p-7 text-ink shadow-notebook font-sans"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs text-accent font-medium font-sans">SAT baseline</span>
                <h2 className="mt-1 text-xl font-display font-semibold text-ink">Starting SAT score</h2>
                <p className="mt-1 text-xs text-ink-2">
                  Enter your latest official SAT or diagnostic baseline score.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                onClick={() => setIsScoreModalOpen(false)}
                className="rounded-[var(--radius-sm)] p-1.5 text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-ink">
                Math (200–800)
                <input
                  required
                  type="number"
                  min="200"
                  max="800"
                  step="10"
                  value={startingMath}
                  onChange={(event) => setStartingMath(event.target.value)}
                  className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-line bg-surface px-3 py-2 font-mono text-sm text-ink outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>
              <label className="text-xs font-medium text-ink">
                Reading &amp; Writing
                <input
                  required
                  type="number"
                  min="200"
                  max="800"
                  step="10"
                  value={startingEnglish}
                  onChange={(event) => setStartingEnglish(event.target.value)}
                  className="mt-1.5 w-full rounded-[var(--radius-sm)] border border-line bg-surface px-3 py-2 font-mono text-sm text-ink outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2.5">
              <Button variant="secondary" size="sm" type="button" onClick={() => setIsScoreModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="accent" size="sm" type="submit" disabled={savingScore}>
                {savingScore ? 'Saving…' : 'Save starting score'}
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-8 font-sans">
        {/* ── 1. HERO (No card, directly on warm paper) ── */}
        <section aria-label="Greeting and study overview" className="pt-2">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
                Good {timeOfDay},{' '}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">{firstName}.</span>
                  {/* Hand-drawn style orange marker underline */}
                  <svg
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2.5 text-accent pointer-events-none"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7 C 28 3, 72 9, 98 5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-ink-2 font-sans leading-relaxed">
                {heroContext}
              </p>
            </div>

            {/* Cosmo Mascot: Clean floating companion, NO card around it */}
            <div className="shrink-0 self-start sm:self-center">
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo Study Companion"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain animate-float select-none pointer-events-none"
              />
            </div>
          </div>
        </section>

        {/* ── FIRST-TIME USER 3-STEP ONBOARDING ROADMAP ── */}
        {isFirstTimeUser ? (
          <Card variant="ruled" className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs text-accent font-medium font-sans">Onboarding roadmap</span>
              <h2 className="text-2xl font-display font-semibold text-ink mt-1">
                Welcome to your SAT study journey
              </h2>
              <p className="text-sm text-ink-2 mt-1">
                Follow these three simple steps to prepare your personalized practice plan:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Step 1 */}
              <div className="p-4 rounded-[var(--radius-sm)] bg-surface border border-line space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-mono font-bold">
                    1
                  </span>
                  <span className="text-sm font-semibold text-ink">Set starting score</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Enter your latest official SAT score, PSAT, or take a quick diagnostic mock.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => setIsScoreModalOpen(true)}
                >
                  <Edit3 className="w-3.5 h-3.5 mr-1" /> Enter baseline
                </Button>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-[var(--radius-sm)] bg-surface border border-line space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-paper-2 border border-line text-ink flex items-center justify-center text-xs font-mono font-bold">
                    2
                  </span>
                  <span className="text-sm font-semibold text-ink">Set target goal</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Choose your target score (e.g. 1500) and your upcoming test date.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => setShowSetupModal(true)}
                >
                  <Target className="w-3.5 h-3.5 mr-1" /> Set goal score
                </Button>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-[var(--radius-sm)] bg-surface border border-line space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-paper-2 border border-line text-ink flex items-center justify-center text-xs font-mono font-bold">
                    3
                  </span>
                  <span className="text-sm font-semibold text-ink">First session</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Solve 5 practice problems to find your starting level.
                </p>
                <Link to="/questions" className="block">
                  <Button variant="accent" size="sm" className="w-full justify-center">
                    Start practice <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ) : (
          /* ── 2. SCORE JOURNEY HORIZONTAL TRAIL ── */
          <Card variant="plain" className="p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-display font-semibold text-ink">Score journey</h2>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<Edit3 className="w-3.5 h-3.5" />}
                  onClick={() => {
                    setStartingMath(
                      profile?.startingScore.math ? String(profile.startingScore.math) : ''
                    );
                    setStartingEnglish(
                      profile?.startingScore.english ? String(profile.startingScore.english) : ''
                    );
                    setIsScoreModalOpen(true);
                  }}
                >
                  {startingScore ? 'Edit baseline' : 'Enter baseline'}
                </Button>

                {!targetScore && (
                  <Button
                    variant="secondary"
                    size="sm"
                    leftIcon={<Target className="w-3.5 h-3.5" />}
                    onClick={() => setShowSetupModal(true)}
                  >
                    Set goal
                  </Button>
                )}

                <Link to="/mock-tests/flashrush">
                  <Button variant="secondary" size="sm" leftIcon={<Zap className="w-3.5 h-3.5" />}>
                    FlashRush mock
                  </Button>
                </Link>
              </div>
            </div>

            {/* Score Metrics Summary Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-line">
              <div>
                <span className="text-xs text-ink-2">Starting baseline</span>
                <p className="font-mono text-xl sm:text-2xl font-bold text-ink mt-0.5">
                  {displayedStartingScore || '—'}
                </p>
                <span className="text-[11px] text-ink-muted">
                  {startingScore ? 'Official SAT' : firstMockScore ? 'First diagnostic' : 'Not set'}
                </span>
              </div>

              <div>
                <span className="text-xs text-ink-2">Current estimate</span>
                <p className="font-mono text-xl sm:text-2xl font-bold text-ink mt-0.5">
                  {currentScore || '—'}
                </p>
                <span className="text-[11px] text-ink-muted">Latest performance</span>
              </div>

              <div>
                <span className="text-xs text-ink-2">Target goal</span>
                <p className="font-mono text-xl sm:text-2xl font-bold text-ink mt-0.5">
                  {targetScore || '—'}
                </p>
                <span className="text-[11px] text-ink-muted">Target score</span>
              </div>

              <div>
                <span className="text-xs text-ink-2">Progress to goal</span>
                <p className="font-mono text-xl sm:text-2xl font-bold text-accent mt-0.5">
                  {progressPercent}%
                </p>
                <span className="text-[11px] text-ink-muted">
                  {pointsClimbed} of {totalClimb || 1} pts climbed
                </span>
              </div>
            </div>

            {/* Horizontal Trail Graphic Component */}
            <ScoreTrailChart
              startScore={displayedStartingScore || 400}
              currentScore={currentScore}
              goalScore={targetScore || 1350}
              attempts={mockAttempts}
            />
          </Card>
        )}

        {/* ── 3. TODAY STRIP (One horizontal row, thin vertical dividers) ── */}
        <section aria-label="Today statistics and telemetry">
          <Card variant="plain" className="p-0 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-line">
              {/* 1. Study Streak */}
              <div className="p-4 sm:p-5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between text-xs text-ink-2">
                  <span>Study streak</span>
                  <Flame className="w-4 h-4 text-mustard" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-ink flex items-baseline gap-1.5">
                    {streak} <span className="text-xs font-sans font-normal text-ink-2">days</span>
                  </div>
                  <p className="text-[11px] text-ink-muted mt-1">One session keeps it active</p>
                </div>
              </div>

              {/* 2. Study Time */}
              <div className="p-4 sm:p-5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between text-xs text-ink-2">
                  <span>Study time</span>
                  <Clock3 className="w-4 h-4 text-cobalt" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-ink">
                    {formatDuration(todayStudySeconds)}
                  </div>
                  <p className="text-[11px] text-ink-muted mt-1">
                    {statistics?.correctAnswers ?? 0} correct answers recorded
                  </p>
                </div>
              </div>

              {/* 3. Error Bank */}
              <Link
                to="/questions"
                className="p-4 sm:p-5 flex flex-col justify-between space-y-2 group hover:bg-paper-2/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-ink-2">
                  <span>Error bank</span>
                  <XCircle className="w-4 h-4 text-berry" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-ink group-hover:text-accent transition-colors flex items-baseline gap-1.5">
                    {mistakes} <span className="text-xs font-sans font-normal text-ink-2">to review</span>
                  </div>
                  <p className="text-[11px] text-accent group-hover:underline mt-1 flex items-center gap-1">
                    Open review list <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </Link>

              {/* 4. Skill Rating (renamed from ELO) */}
              <div className="p-4 sm:p-5 flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between text-xs text-ink-2">
                  <span>Skill rating</span>
                  <Trophy className="w-4 h-4 text-mustard" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-ink">
                    {skillRating || '—'}
                  </div>
                  <p className="text-[11px] text-ink-muted mt-1">Scaled performance rating</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* ── 4. NEXT SESSION & 5. ASK COSMO ROW ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6" aria-label="Next study session and AI assistance">
          {/* Next Session Card */}
          <Card variant="plain" className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-ink">Your next session</h3>
                <Badge variant={isMathWeaker ? 'accent' : 'cobalt'}>
                  {isMathWeaker ? 'Math priority' : 'Reading priority'}
                </Badge>
              </div>
              <p className="text-xs text-ink-2 mt-1">
                Based on your recent answers.
              </p>

              {/* Primary Recommended Action (Large Accent Button) */}
              <div className="mt-5 p-4 rounded-[var(--radius-sm)] bg-paper-2 border border-line space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">{recommendedTitle}</h4>
                    <p className="text-xs text-ink-2 mt-0.5 leading-relaxed">
                      Step-by-step walkthroughs to build question accuracy.
                    </p>
                  </div>
                </div>

                <Link to={recommendedPath} className="block pt-1">
                  <Button variant="accent" size="lg" className="w-full justify-center">
                    Start 10-Minute Focus Session <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Secondary Options */}
            <div className="pt-2 border-t border-line">
              <span className="text-xs text-ink-muted">Other study modes:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                <Link to="/questions">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between"
                    leftIcon={<BookOpen className="w-3.5 h-3.5" />}
                  >
                    Topic practice
                    <ChevronRight className="w-3.5 h-3.5 text-ink-muted" />
                  </Button>
                </Link>

                <Link to="/mock-tests/flashrush">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between"
                    leftIcon={<Zap className="w-3.5 h-3.5" />}
                  >
                    Timed diagnostic
                    <ChevronRight className="w-3.5 h-3.5 text-ink-muted" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* 5. Ask Cosmo AI Panel (Replaces Reserved/Placeholder Box) */}
          <Card variant="plain" className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-[var(--radius-sm)] bg-surface border border-line flex items-center justify-center text-accent shadow-2xs">
                  <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Ask Cosmo</h3>
                  <p className="text-xs text-ink-2">Socratic reasoning engine</p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-ink-2 leading-relaxed">
                Stuck on a tricky quadratic system or reading inference? Cosmo deconstructs questions
                step-by-step without spoiling the final answer key.
              </p>

              {/* Interactive Ask Cosmo Input */}
              <form onSubmit={handleAskCosmo} className="mt-4 space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={askQuery}
                    onChange={(e) => setAskQuery(e.target.value)}
                    placeholder="Ask Cosmo about a formula, rule, or passage..."
                    className="w-full rounded-[var(--radius-sm)] bg-surface text-ink placeholder:text-ink-muted text-xs sm:text-sm font-sans border border-line pl-3.5 pr-20 py-2.5 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                  <div className="absolute right-1.5">
                    <Button variant="accent" size="sm" type="submit">
                      Ask
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Socratic Quick Prompts in Instrument Sans */}
            <div className="pt-3 border-t border-line space-y-2">
              <span className="text-xs text-ink-muted">Quick Socratic hints:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => openAITutor({ mode: 'general' }, 'Can you explain the quadratic discriminant rule?')}
                  className="px-2.5 py-1 rounded-[var(--radius-sm)] bg-paper-2 hover:bg-surface border border-line text-xs font-sans text-ink-2 hover:text-accent transition-colors text-left"
                >
                  Quadratic discriminant rule
                </button>
                <button
                  type="button"
                  onClick={() => openAITutor({ mode: 'general' }, 'How do I eliminate wrong transition words?')}
                  className="px-2.5 py-1 rounded-[var(--radius-sm)] bg-paper-2 hover:bg-surface border border-line text-xs font-sans text-ink-2 hover:text-accent transition-colors text-left"
                >
                  Transition word elimination
                </button>
                <button
                  type="button"
                  onClick={() => openAITutor({ mode: 'general' }, 'What pacing strategy works best for Module 2?')}
                  className="px-2.5 py-1 rounded-[var(--radius-sm)] bg-paper-2 hover:bg-surface border border-line text-xs font-sans text-ink-2 hover:text-accent transition-colors text-left"
                >
                  Module 2 pacing strategy
                </button>
              </div>
            </div>
          </Card>
        </section>

        {/* ── 8. Skill Constellation Section (Step 4b) ── */}
        <section data-section="star-map-step-4b" aria-label="Skill constellation" className="w-full">
          <SkillConstellation />
        </section>
      </div>
    </>
  );
}

/**
 * Score Trail Component
 * Horizontal milestone path from Start to Goal:
 * - Trail runs strictly from Start score to Goal score (e.g. 400 to 1350), NOT to 1600
 * - When start and current are the same value, renders ONE marker labeled "Start · now {score}" placed ABOVE the trail
 * - Goal marker placed ABOVE the trail at the right end (100%)
 * - Milestone ticks every 100 pts as small ticks with JetBrains Mono numbers BELOW the trail
 * - Mock results as visible filled dots (accent, 10px) on the trail with en-US date tooltip
 */
function ScoreTrailChart({
  startScore,
  currentScore,
  goalScore,
  attempts,
}: {
  startScore: number;
  currentScore: number;
  goalScore: number;
  attempts: Array<{ attemptId: string; math: number; english: number; createdAt: string }>;
}) {
  // Trail runs strictly from Start to Goal
  const minScore = startScore;
  const maxScore = goalScore > startScore ? goalScore : startScore + 400;
  const range = maxScore - minScore;

  const getPositionPercent = (score: number) => {
    if (range <= 0) return 0;
    const clamped = Math.max(minScore, Math.min(maxScore, score));
    return ((clamped - minScore) / range) * 100;
  };

  // Generate milestone numbers every 100 points strictly between start and goal
  const milestones = useMemo(() => {
    const list: number[] = [];
    const firstHundred = Math.floor(minScore / 100) * 100 + 100;
    for (let s = firstHundred; s < maxScore; s += 100) {
      const pct = ((s - minScore) / range) * 100;
      // Keep milestones away from extreme ends so they don't crowd Start/Goal
      if (pct >= 5 && pct <= 95) {
        list.push(s);
      }
    }
    return list;
  }, [minScore, maxScore, range]);

  // English (en-US) date formatting
  const formatEnDate = (dateStr: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(
        new Date(dateStr)
      );
    } catch {
      return dateStr;
    }
  };

  const isCurrentAtStart = currentScore === startScore;
  const currentPercent = getPositionPercent(currentScore);
  const goalPercent = 100;

  return (
    <div className="space-y-4 pt-3 pb-1 font-sans">
      {/* Horizontal Trail Container */}
      <div className="relative w-full pt-8 pb-8 select-none">
        {/* Dotted Track Line (Runs Start to Goal) */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-line-strong -translate-y-1/2"
        />

        {/* Highlighted Progress Segment (from Start 0% to Current %) */}
        {currentPercent > 0 && (
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-0 h-0.5 bg-accent -translate-y-1/2 transition-all duration-500"
            style={{ width: `${currentPercent}%` }}
          />
        )}

        {/* 100-point Milestone Ticks & Numbers BELOW Trail */}
        {milestones.map((milestone) => {
          const pct = getPositionPercent(milestone);
          return (
            <div
              key={milestone}
              className="absolute top-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
              style={{ left: `${pct}%` }}
            >
              {/* Small vertical tick line */}
              <div className="w-0.5 h-2 bg-line-strong -translate-y-1/2" />
              {/* JetBrains Mono number BELOW the trail */}
              <span className="mt-2 font-mono text-[10px] text-ink-muted">
                {milestone}
              </span>
            </div>
          );
        })}

        {/* Start / Current Markers (PLACED ABOVE THE TRAIL, NEVER OVERLAPPING) */}
        {isCurrentAtStart ? (
          /* When start and current are the same value: ONE combined marker ABOVE the trail */
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-start z-30"
          >
            <span className="absolute -top-7 text-xs font-mono font-semibold text-accent whitespace-nowrap bg-surface px-1.5 py-0.5 rounded border border-line shadow-xs">
              Start · now {startScore}
            </span>
            <div className="relative flex items-center justify-center">
              <span className="absolute w-5 h-5 rounded-full bg-accent/20 animate-ping" />
              <div className="w-3.5 h-3.5 rounded-full bg-accent border-2 border-surface shadow-xs" />
            </div>
          </div>
        ) : (
          /* When current is ahead of start: separate Start marker at 0% and Current marker at currentPercent */
          <>
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-start z-10"
            >
              <span className="absolute -top-7 text-xs font-mono text-ink-2 whitespace-nowrap bg-paper-2 px-1.5 py-0.5 rounded border border-line">
                Start {startScore}
              </span>
              <div className="w-3 h-3 rounded-full bg-surface border-2 border-ink" />
            </div>

            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30"
              style={{ left: `${currentPercent}%` }}
            >
              <span className="absolute -top-7 font-mono text-xs font-bold text-accent whitespace-nowrap bg-surface px-2 py-0.5 rounded border border-accent/40 shadow-xs">
                {currentScore} (now)
              </span>
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-accent/20 animate-ping" />
                <div className="w-3.5 h-3.5 rounded-full bg-accent border-2 border-surface shadow-xs" />
              </div>
            </div>
          </>
        )}

        {/* Mock Test Results: Visible filled dots (accent, 10px) on trail with en-US date tooltip */}
        {attempts.slice(-8).map((attempt, idx) => {
          const total = attempt.math + attempt.english;
          // Plot on trail if within start–goal boundaries
          if (total < minScore || total > maxScore) return null;
          const pct = getPositionPercent(total);
          const dateLabel = formatEnDate(attempt.createdAt);

          return (
            <div
              key={attempt.attemptId || idx}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-20 cursor-pointer"
              style={{ left: `${pct}%` }}
            >
              {/* Visible filled accent dot, 10px */}
              <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-surface shadow-xs hover:scale-125 transition-transform" />
              {/* Tooltip on hover with English date */}
              <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-paper text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap shadow-notebook pointer-events-none z-40">
                {total} pts · {dateLabel}
              </div>
            </div>
          );
        })}

        {/* Goal Marker at the right end (100%), PLACED ABOVE THE TRAIL */}
        {goalScore > 0 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-end z-10"
            style={{ left: `${goalPercent}%`, transform: 'translate(-100%, -50%)' }}
          >
            <span className="absolute -top-7 text-xs font-mono text-mustard font-semibold whitespace-nowrap bg-mustard/15 px-2 py-0.5 rounded border border-mustard/30">
              Goal {goalScore}
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-mustard border-2 border-surface shadow-xs" />
          </div>
        )}
      </div>

      {/* Clean Trail Legend (without increments label) */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-ink-2 pt-2 border-t border-line/60">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" /> Current score
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" /> Mock tests
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-mustard" /> Target goal
        </span>
      </div>
    </div>
  );
}
