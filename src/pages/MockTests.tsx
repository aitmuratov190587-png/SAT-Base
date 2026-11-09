import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Trophy,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import Button from '../components/ui/Button';
import Tooltip from '../components/ui/Tooltip';
import EmptyState from '../components/ui/EmptyState';
import UpgradeModal from '../components/ui/UpgradeModal';
import { MOCK_TESTS_CATALOG } from '../data/mockCatalog';

export default function MockTests() {
  const { profile, mockAttempts, isMockUnlocked } = useApp();
  const [focusMode, setFocusMode] = useState(false);
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState('');

  // Score Calculations
  const latestMock = mockAttempts[mockAttempts.length - 1];
  const latestMockScore = latestMock ? latestMock.math + latestMock.english : 0;
  const estimatedScore = profile?.currentScore?.total || latestMockScore || profile?.startingScore?.total || 0;
  const skillRating = estimatedScore || 0;

  // History with Delta vs Previous Attempt
  const attemptsWithDelta = useMemo(() => {
    return [...mockAttempts]
      .map((attempt) => ({
        ...attempt,
        score: attempt.math + attempt.english,
      }))
      .map((attempt, index, arr) => {
        const prevScore = index > 0 ? arr[index - 1].score : null;
        const delta = prevScore !== null ? attempt.score - prevScore : null;
        return {
          ...attempt,
          delta,
        };
      })
      .reverse(); // Most recent first
  }, [mockAttempts]);

  return (
    <div className="mock-tests-page space-y-8 max-w-5xl mx-auto font-sans pb-16">
      {/* ── 1. Header (Fraunces H1, estimated score in JetBrains Mono, secondary skill rating) ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
            Mock exams
          </h1>
          <p className="text-sm text-ink-2 font-sans mt-1">
            Timed practice that feels like the real test.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-ink-2 font-sans">Estimated score</span>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-ink">
              {estimatedScore || '—'}
            </span>
          </div>

          {/* Secondary Skill Rating with Informative Tooltip */}
          <Tooltip content="Your estimated rating based on question difficulty, accuracy, and test pacing.">
            <div className="flex items-center gap-1.5 text-xs text-ink-muted cursor-help select-none">
              <Trophy className="w-3.5 h-3.5 text-mustard" strokeWidth={1.5} />
              <span className="font-sans">Skill rating:</span>
              <span className="font-mono font-semibold text-ink">{skillRating || '—'}</span>
            </div>
          </Tooltip>
        </div>
      </div>

      {/* ── 2. Featured Card: 20-minute diagnostic as a Ticket / Boarding-Pass Layout ── */}
      <div className="relative rounded-[var(--radius-lg)] border border-line bg-surface overflow-hidden shadow-xs">
        {/* Ticket Perforation Semicircle Notches (Desktop) */}
        <div
          className="hidden md:block absolute -top-3 right-72 w-6 h-6 rounded-full bg-paper border-b border-line z-20 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="hidden md:block absolute -bottom-3 right-72 w-6 h-6 rounded-full bg-paper border-t border-line z-20 pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex flex-col md:flex-row">
          {/* Main Ticket (Left) */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                20-minute diagnostic
              </h2>
              <p className="text-sm text-ink-2 font-sans mt-2 leading-relaxed">
                Estimate your official baseline SAT score with 10 Reading and Writing questions and 10 Math questions under realistic timing.
              </p>
            </div>

            {/* Focus Mode Switch with Helper Text */}
            <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={focusMode}
                  onChange={(e) => setFocusMode(e.target.checked)}
                  className="w-4 h-4 rounded border-line text-accent focus:ring-accent accent-[var(--color-accent)] cursor-pointer"
                />
                <span className="text-xs font-semibold text-ink font-sans">Focus mode</span>
              </label>
              <p className="text-xs text-ink-muted font-sans">
                Hides the on-screen timer and visual distractions during your test.
              </p>
            </div>
          </div>

          {/* Ticket Stub (Right, Separated by Dashed Perforation Line) */}
          <div className="border-t md:border-t-0 md:border-l border-dashed border-line-strong w-full md:w-72 p-6 sm:p-8 bg-paper-2/40 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2 font-sans">Duration</span>
                <span className="font-mono font-semibold text-ink">20 min</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2 font-sans">Questions</span>
                <span className="font-mono font-semibold text-ink">20</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-2 font-sans">Sections</span>
                <span className="font-sans text-xs text-ink text-right">Reading and Writing, Math</span>
              </div>
            </div>

            <Link
              to={focusMode ? '/mock-tests/flashrush?focus=1' : '/mock-tests/flashrush'}
              className="block w-full"
            >
              <Button variant="accent" size="lg" className="w-full justify-center">
                Begin
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── 3. Section: Full-length Practice Tests (Exam-Paper Rows) ── */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-display font-semibold text-ink">
            Full-length practice tests
          </h2>
          <p className="text-xs text-ink-2 font-sans mt-0.5">
            Standard 4-module adaptive exams aligned with College Board scoring.
          </p>
        </div>

        <div className="space-y-3">
          {MOCK_TESTS_CATALOG.map((test) => {
            const unlocked = isMockUnlocked(test.testNumber);
            return (
              <div
                key={test.id}
                className="p-4 sm:px-5 rounded-[var(--radius-sm)] border border-line bg-surface flex items-center justify-between gap-4 transition-colors hover:border-line-strong"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="font-display font-bold text-lg text-accent w-7 shrink-0">
                    {test.number}
                  </span>
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-semibold text-base text-ink truncate">
                        {test.title}
                      </h3>
                      {!unlocked && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-bold">
                          Pro
                        </span>
                      )}
                      {unlocked && test.testNumber <= 6 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-moss/10 text-moss font-bold">
                          Free
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs text-ink-2 mt-0.5">
                      {test.meta}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  {!unlocked ? (
                    <button
                      onClick={() => {
                        setUpgradeFeature(test.title);
                        setUpgradeOpen(true);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-accent/40 bg-accent/5 hover:bg-accent/10 text-accent font-semibold text-xs transition cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Unlock with Pro</span>
                    </button>
                  ) : test.status === 'coming_soon' ? (
                    <span className="text-xs text-ink-muted font-sans pr-2">
                      Coming soon
                    </span>
                  ) : (
                    <Link to={test.route || '/mock-tests/flashrush'}>
                      <Button variant="secondary" size="sm">
                        Start
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 4. Section: History (Attempts List with Delta vs Previous Attempt) ── */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-display font-semibold text-ink">
            History
          </h2>
          <p className="text-xs text-ink-2 font-sans mt-0.5">
            Past diagnostic attempts and score trajectory.
          </p>
        </div>

        {mockAttempts.length === 0 ? (
          <EmptyState
            headline="No attempts yet"
            description="Take the diagnostic to see your score here."
            actionLabel="Take the diagnostic"
            actionHref="/mock-tests/flashrush"
          />
        ) : (
          <div className="space-y-2.5">
            {attemptsWithDelta.map((attempt) => {
              const dateFormatted = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }).format(new Date(attempt.createdAt));

              return (
                <div
                  key={attempt.attemptId}
                  className="p-3.5 sm:px-5 rounded-[var(--radius-sm)] border border-line bg-surface flex items-center justify-between gap-4 transition-colors hover:border-line-strong"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm font-semibold text-ink">
                        20-minute diagnostic
                      </span>
                      <span className="font-sans text-xs text-ink-muted">
                        · {dateFormatted}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-ink-2 mt-0.5">
                      Reading and Writing: <span className="font-mono text-ink">{attempt.english}</span> · Math: <span className="font-mono text-ink">{attempt.math}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {/* Delta Arrow vs Previous Attempt */}
                    {attempt.delta !== null ? (
                      attempt.delta > 0 ? (
                        <span className="inline-flex items-center gap-0.5 text-xs font-mono font-medium text-moss">
                          <ArrowUpRight className="w-3.5 h-3.5" /> +{attempt.delta}
                        </span>
                      ) : attempt.delta < 0 ? (
                        <span className="inline-flex items-center gap-0.5 text-xs font-mono font-medium text-berry">
                          <ArrowDownRight className="w-3.5 h-3.5" /> {attempt.delta}
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-ink-muted">
                          0
                        </span>
                      )
                    ) : (
                      <span className="text-xs font-sans text-ink-muted">
                        Baseline
                      </span>
                    )}

                    {/* Total Score in JetBrains Mono */}
                    <span className="font-mono text-base sm:text-lg font-bold text-ink min-w-[55px] text-right">
                      {attempt.score}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Upgrade Modal for locked tests */}
      <UpgradeModal
        isOpen={upgradeOpen}
        onClose={() => setUpgradeOpen(false)}
        featureName={upgradeFeature}
        highlightPlan="pro"
      />
    </div>
  );
}
