import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import {
  Sun,
  Moon,
  ArrowRight,
  Compass,
  Sparkles,
  BookOpen,
  Award,
  Clock,
  Layers,
  Flame,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  ProgressBar,
  Input,
  SearchInput,
  Tabs,
  Tooltip,
  Modal,
  Toast,
  Skeleton,
  EmptyState,
  Stat,
} from '../components/ui';

export default function DesignSystemPage() {
  const { theme, toggleTheme } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progressVal, setProgressVal] = useState(65);

  const sampleTabs = [
    { id: 'overview', label: 'Overview', count: 12 },
    { id: 'practice', label: 'Practice Sessions', count: 4 },
    { id: 'analytics', label: 'Analytics & Trends' },
    { id: 'review', label: 'Error Log', count: 7 },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink p-6 sm:p-12 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* ── Top Bar with Theme Toggle ── */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-line">
          <div>
            <div className="flex items-center gap-2 text-ink-muted text-xs font-mono uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4 text-accent" />
              <span>Cosmo Notebook • Step 2 UI Components</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-semibold text-ink">
              Component Library & Design Tokens
            </h1>
            <p className="text-xs sm:text-sm text-ink-2 font-sans mt-1">
              Warm editorial paper, deep ink typography, and single Signal Orange accent (#FF5B2E).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
              leftIcon={
                theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-mustard" />
                ) : (
                  <Moon className="w-4 h-4 text-cobalt" />
                )
              }
            >
              <span>{theme === 'dark' ? 'Light Paper Mode' : 'Dark Star-Map Mode'}</span>
            </Button>

            <Link to="/">
              <Button variant="accent" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Back to App
              </Button>
            </Link>
          </div>
        </header>

        {/* ── 1. BUTTONS ── */}
        <section className="space-y-6">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              01 / Controls
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Buttons</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Primary (ink background with accent underline on hover), accent (Signal Orange), secondary, ghost, and icon variants with subtle 1px offset press effect.
            </p>
          </div>

          <Card variant="plain" className="p-6 space-y-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase text-ink-muted mb-3">Variants</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary (Ink)</Button>
                <Button variant="accent">Accent (Orange)</Button>
                <Button variant="secondary">Secondary (Paper)</Button>
                <Button variant="ghost">Ghost Action</Button>
                <Button variant="icon" aria-label="Settings icon">
                  <Sparkles className="w-4 h-4 text-accent" />
                </Button>
                <Button variant="accent" disabled>Disabled Accent</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="primary" isLoading>Loading State</Button>
              </div>
            </div>

            <div className="pt-4 border-t border-line/60">
              <p className="text-xs font-mono font-bold uppercase text-ink-muted mb-3">Sizes &amp; Icons</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="accent" size="sm" leftIcon={<BookOpen className="w-3.5 h-3.5" />}>
                  Small Action
                </Button>
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Medium Action
                </Button>
                <Button variant="secondary" size="lg" leftIcon={<Clock className="w-4 h-4" />}>
                  Large Diagnostic
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* ── 2. CARDS ── */}
        <section className="space-y-6">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              02 / Containers
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Cards</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Surface background, 1px line border, no heavy drop shadows. Hover raises border to 20% ink. Plain, ruled, and stamped variants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Plain Card */}
            <Card variant="plain" interactive>
              <CardHeader>
                <Badge variant="accent">Plain Variant</Badge>
                <CardTitle className="mt-2">Standard Editorial Card</CardTitle>
                <CardDescription>Clean paper surface for regular content blocks.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Hover over this card to see the subtle 20% ink border raise without any noisy gradient glow or glassmorphic blur.
                </p>
              </CardContent>
              <CardFooter>
                <span>Status: Active</span>
                <span className="font-mono text-accent">#01-CORE</span>
              </CardFooter>
            </Card>

            {/* Ruled Card */}
            <Card variant="ruled" interactive>
              <CardHeader>
                <Badge variant="cobalt">Ruled Variant</Badge>
                <CardTitle className="mt-2">Notebook Lines Card</CardTitle>
                <CardDescription>Faint horizontal lined paper for study notes.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Emulates physical notebook ruling at 28px increments. Ideal for explanation text, reading passages, and step-by-step math breakdowns.
                </p>
              </CardContent>
              <CardFooter>
                <span>Passage Reference</span>
                <span className="font-mono text-cobalt">#L24-L38</span>
              </CardFooter>
            </Card>

            {/* Stamped Card */}
            <Card variant="stamped" interactive>
              <CardHeader>
                <Badge variant="mustard">Stamped Variant</Badge>
                <CardTitle className="mt-2">Dashed Border Card</CardTitle>
                <CardDescription>Dashed outline for diagnostics and practice.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Used for interactive dropzones, optional diagnostics, mock test modules, or unstarted test blocks.
                </p>
              </CardContent>
              <CardFooter>
                <span>Module Status</span>
                <span className="font-mono text-mustard">20 Questions</span>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* ── 3. BADGES & PROGRESS BARS ── */}
        <section className="space-y-6">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              03 / Telemetry &amp; Feedback
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Badges &amp; Progress</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Pills with 1px borders in sentence case (12px). Thin 6px progress bars with 8% ink tracks and segmented module variants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Badges */}
            <Card variant="plain" className="p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-ink">Badge Pills</h3>
              <p className="text-xs text-ink-2">
                Sentence case difficulty indicators and category badges:
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Badge variant="easy" dot>Easy</Badge>
                <Badge variant="medium" dot>Medium</Badge>
                <Badge variant="hard" dot>Hard</Badge>
                <Badge variant="accent">Signal orange</Badge>
                <Badge variant="cobalt">Reading &amp; writing</Badge>
                <Badge variant="neutral">Weak area</Badge>
              </div>
            </Card>

            {/* Progress Bars */}
            <Card variant="plain" className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">Progress Bars</h3>
                <span className="font-mono text-xs text-ink-2">{progressVal}%</span>
              </div>
              <p className="text-xs text-ink-2">
                Continuous thin 6px bar with 8% ink track:
              </p>
              <ProgressBar value={progressVal} />

              <div className="pt-3">
                <div className="flex items-center justify-between text-xs text-ink-2 mb-1.5">
                  <span>Segmented Module Progress (2 Modules)</span>
                  <span className="font-mono">Module 1 done</span>
                </div>
                <ProgressBar segments={2} completedSegments={1} activeSegment={2} />
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-ink-2 mb-1.5">
                  <span>Full Adaptive Test (4 Modules)</span>
                  <span className="font-mono">2 of 4 modules</span>
                </div>
                <ProgressBar segments={4} completedSegments={2} activeSegment={3} />
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setProgressVal((v) => Math.max(0, v - 15))}
                >
                  -15%
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setProgressVal((v) => Math.min(100, v + 15))}
                >
                  +15%
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* ── 4. INPUTS, SEARCH & TABS ── */}
        <section className="space-y-6">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              04 / Form &amp; Navigation
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Inputs, Search &amp; Tabs</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Search input with keyboard "/" shortcut listener, clean form inputs, and underline-style editorial tabs.
            </p>
          </div>

          <Card variant="plain" className="p-6 space-y-6">
            <div className="space-y-4">
              <p className="text-xs font-mono font-bold uppercase text-ink-muted">Underline Tabs</p>
              <Tabs tabs={sampleTabs} activeTab={activeTab} onChange={setActiveTab} />
              <p className="text-xs text-ink-2">
                Active tab: <strong className="font-display italic text-ink">{activeTab}</strong>. Note the soft Fraunces serif italic and Signal Orange indicator.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-line/60">
              <SearchInput
                label="Global Search"
                helperText="Press the / key on your keyboard to instantly focus."
              />
              <Input
                label="Target SAT Score"
                placeholder="e.g. 1520"
                helperText="Enter your official College Board target score."
              />
            </div>
          </Card>
        </section>

        {/* ── 5. STATS & TELEMETRY ── */}
        <section className="space-y-6">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              05 / Data Display
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Stat Component</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Large JetBrains Mono numbers, clean label below, optional directional delta badge.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat
              kicker="Current estimate"
              value="1510"
              label="Scaled SAT Score"
              delta="+60 pts"
              deltaType="positive"
              deltaLabel="vs baseline"
              icon={<Award className="w-4 h-4" />}
            />
            <Stat
              kicker="Daily rhythm"
              value="14d"
              label="Active Study Streak"
              delta="+1 day"
              deltaType="positive"
              deltaLabel="today"
              icon={<Flame className="w-4 h-4 text-accent" />}
            />
            <Stat
              kicker="Recorded time"
              value="48h"
              label="Total Practice Time"
              delta="+2.5h"
              deltaType="positive"
              deltaLabel="this week"
              icon={<Clock className="w-4 h-4" />}
            />
            <Stat
              kicker="Error bank"
              value="12"
              label="Questions to Review"
              delta="-4 items"
              deltaType="positive"
              deltaLabel="resolved"
              icon={<Layers className="w-4 h-4 text-moss" />}
            />
          </div>
        </section>

        {/* ── 6. FEEDBACK: TOASTS, SKELETONS, TOOLTIPS, MODAL ── */}
        <section className="space-y-6">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              06 / Overlays &amp; States
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Feedback &amp; Overlays</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Toasts, tooltips, loading skeletons, and dialog modal dialogs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Toasts */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold uppercase text-ink-muted">Toasts</p>
              <Toast
                variant="success"
                title="Goal Score Updated"
                description="Your target score has been personalized across topic practice modules."
                onDismiss={() => {}}
              />
              <Toast
                variant="warning"
                title="Pacing Telemetry Notice"
                description="Average time on Advanced Algebra questions exceeded 1m 45s."
                onDismiss={() => {}}
              />
              <Toast
                variant="error"
                title="Answer Submission Stalled"
                description="Offline mode active. Your attempt is cached locally."
                onDismiss={() => {}}
              />
            </div>

            {/* Skeletons & Tooltip & Modal trigger */}
            <Card variant="plain" className="p-6 space-y-5">
              <div>
                <p className="text-xs font-mono font-bold uppercase text-ink-muted mb-3">
                  Loading Skeletons (Warm Paper Shimmer)
                </p>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Skeleton variant="text" className="w-3/4" />
                    <Skeleton variant="text" className="w-1/2" />
                  </div>
                  {/* Card Skeleton */}
                  <Skeleton variant="rectangular" height={68} className="w-full" />
                  {/* Circular Avatar + Text Lines */}
                  <div className="flex gap-3 pt-1 items-center">
                    <Skeleton variant="circular" width={40} height={40} />
                    <div className="flex-1 space-y-2">
                      <Skeleton variant="text" className="w-5/6" />
                      <Skeleton variant="text" className="w-2/3" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex flex-wrap items-center gap-4">
                <Tooltip content="College Board 2026 scoring scale calibration" position="top">
                  <Button variant="secondary" size="sm">
                    Hover for Tooltip
                  </Button>
                </Tooltip>

                <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
                  Open Modal Demo
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* ── 7. EMPTY STATE COMPONENT ── */}
        <section className="space-y-6 pb-16">
          <div>
            <span className="text-xs text-accent font-mono font-bold uppercase tracking-wider">
              07 / Mascot &amp; Empty State
            </span>
            <h2 className="text-2xl font-display font-semibold text-ink">Empty State Component</h2>
            <p className="text-sm text-ink-2 font-sans mt-1">
              Cosmo mascot illustration, Fraunces headline, one sentence explanation, and exactly one Signal Orange action.
            </p>
          </div>

          <EmptyState
            headline="Your Error Bank is completely clear."
            description="You've mastered every flagged problem in Craft & Structure. Start a new practice set to discover areas for growth."
            actionLabel="Start Reading Practice"
            onAction={() => alert('Starting practice set...')}
          />
        </section>

        {/* ── Modal Demo ── */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Review SAT Diagnostic Results"
          description="FlashRush Diagnostic Session #04 completed in 18 minutes."
          footer={
            <>
              <Button variant="secondary" size="sm" onClick={() => setIsModalOpen(false)}>
                Dismiss
              </Button>
              <Button
                variant="accent"
                size="sm"
                onClick={() => {
                  alert('Results confirmed');
                  setIsModalOpen(false);
                }}
              >
                Save to Profile
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="p-4 rounded-md bg-paper-2 border border-line">
              <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>Diagnostic Scaled Score</span>
                <span className="text-moss font-bold">+50 pts</span>
              </div>
              <div className="font-mono text-3xl font-bold text-ink mt-1">1490</div>
            </div>
            <p className="text-xs text-ink-2 leading-relaxed">
              Your accuracy across 10 Reading &amp; Writing items was 90%, and Math accuracy was 80%. Review incorrect problems to solidify question mechanics.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}
