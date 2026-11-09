import React, { useState, useMemo, useRef, KeyboardEvent } from 'react';
import {
  Calendar,
  Target,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Check,
  HelpCircle,
} from 'lucide-react';
import { SAT_TEST_DATES, ScoreBreakdown, useApp } from '../contexts/AppContext';
import { Modal } from './ui/Modal';
import Button from './ui/Button';
import Toast from './ui/Toast';
import { categorizeTestDates } from '../lib/onboardingDates';

type Step = 'date' | 'current' | 'goal';

export default function GoalSetupModal() {
  const { showSetupModal, setShowSetupModal, updateProfile, completeSetup } = useApp();
  const [step, setStep] = useState<Step>('date');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [knowsScore, setKnowsScore] = useState<boolean | null>(null);
  const [currentMath, setCurrentMath] = useState('');
  const [currentEnglish, setCurrentEnglish] = useState('');
  const [goalMath, setGoalMath] = useState('');
  const [goalEnglish, setGoalEnglish] = useState('');
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Categorize dates once using pure helper
  const { upcoming: upcomingDates, past: pastDates } = useMemo(() => {
    return categorizeTestDates(SAT_TEST_DATES);
  }, []);

  // Refs for keyboard navigation across date rows
  const dateRowRefs = useRef<(HTMLDivElement | null)[]>([]);



  if (!showSetupModal) return null;

  const currentTotal = (parseInt(currentMath, 10) || 0) + (parseInt(currentEnglish, 10) || 0);
  const goalTotal = (parseInt(goalMath, 10) || 0) + (parseInt(goalEnglish, 10) || 0);

  const canProceedFromDate = selectedDate !== '';
  const canProceedFromCurrent =
    knowsScore === false ||
    (knowsScore === true &&
      parseInt(currentMath, 10) >= 200 &&
      parseInt(currentMath, 10) <= 800 &&
      parseInt(currentEnglish, 10) >= 200 &&
      parseInt(currentEnglish, 10) <= 800);

  const canFinish =
    parseInt(goalMath, 10) >= 200 &&
    parseInt(goalMath, 10) <= 800 &&
    parseInt(goalEnglish, 10) >= 200 &&
    parseInt(goalEnglish, 10) <= 800;

  // Step 1: Save selected date and proceed
  const handleContinueFromDate = async () => {
    if (!selectedDate) return;
    setSaving(true);
    setErrorMessage(null);

    const res = await updateProfile({ satDate: selectedDate });
    setSaving(false);

    if (res && !res.success) {
      setErrorMessage(res.error || 'Failed to sync target date with cloud; saved locally.');
    }
    setStep('current');
  };

  // Step 1: Skip date selection without breaking the flow
  const handleSkipDate = () => {
    setErrorMessage(null);
    setStep('current');
  };

  // Step 3: Complete entire onboarding setup
  const handleFinish = async () => {
    setSaving(true);
    setErrorMessage(null);

    const current: ScoreBreakdown = knowsScore
      ? { math: parseInt(currentMath, 10), english: parseInt(currentEnglish, 10), total: currentTotal }
      : { math: 0, english: 0, total: 0 };

    const target: ScoreBreakdown = {
      math: parseInt(goalMath, 10),
      english: parseInt(goalEnglish, 10),
      total: goalTotal,
    };

    const res = await completeSetup({
      satDate: selectedDate,
      currentScore: current,
      targetScore: target,
    });
    setSaving(false);

    if (res && !res.success) {
      setErrorMessage(res.error || 'Setup saved to your session.');
    }
  };

  // Keyboard navigation for date list (arrow keys, space, enter)
  const handleDateKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number, dateStr: string) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % upcomingDates.length;
      setSelectedDate(upcomingDates[nextIndex].date);
      dateRowRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + upcomingDates.length) % upcomingDates.length;
      setSelectedDate(upcomingDates[prevIndex].date);
      dateRowRefs.current[prevIndex]?.focus();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      setSelectedDate(dateStr);
    }
  };

  const stepIndex = ['date', 'current', 'goal'].indexOf(step);

  // Custom Cosmo Notebook Paper Header with Fraunces & 3-circle indicator
  const headerContent = (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
            Welcome to SATBase
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-ink-2 font-sans">
            Let's set up your SAT preparation goals.
          </p>
        </div>

        {/* Step indicator: 3 small circles */}
        <div className="flex items-center gap-2 mr-2" aria-label={`Step ${stepIndex + 1} of 3`}>
          {(['date', 'current', 'goal'] as Step[]).map((s, i) => {
            const isDone = stepIndex > i;
            const isCurrent = stepIndex === i;
            return (
              <React.Fragment key={s}>
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-200 flex items-center justify-center ${
                    isDone
                      ? 'bg-ink'
                      : isCurrent
                      ? 'bg-accent ring-2 ring-accent ring-offset-2 ring-offset-surface'
                      : 'bg-line border border-line-strong'
                  }`}
                  title={`Step ${i + 1}: ${s}`}
                  aria-current={isCurrent ? 'step' : undefined}
                />
                {i < 2 && (
                  <div
                    className={`w-5 sm:w-7 h-0.5 transition-colors ${
                      stepIndex > i ? 'bg-ink' : 'bg-line'
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {errorMessage && (
        <div className="mt-3">
          <Toast
            variant="warning"
            title="Notice"
            description={errorMessage}
            onDismiss={() => setErrorMessage(null)}
          />
        </div>
      )}
    </div>
  );

  return (
    <Modal
      isOpen={showSetupModal}
      onClose={() => setShowSetupModal(false)}
      headerContent={headerContent}
      maxWidth="lg"
      className="goal-setup-modal font-sans"
      footer={
        step === 'date' ? (
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSkipDate}
              type="button"
              className="text-ink-2 hover:text-ink"
            >
              Skip for now
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleContinueFromDate}
              disabled={!canProceedFromDate || saving}
              type="button"
            >
              {saving ? 'Saving…' : 'Continue'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        ) : step === 'current' ? (
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setStep('date');
                setKnowsScore(null);
              }}
              type="button"
              className="text-ink-2 hover:text-ink"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setStep('goal')}
              disabled={!canProceedFromCurrent}
              type="button"
            >
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep('current')}
              type="button"
              className="text-ink-2 hover:text-ink"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleFinish}
              disabled={!canFinish || saving}
              type="button"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-paper border-t-transparent rounded-full animate-spin mr-2" />
                  Saving…
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Start Preparing!
                </>
              )}
            </Button>
          </div>
        )
      }
    >
      {/* ── STEP 1: TEST DATE ── */}
      {step === 'date' && (
        <div className="space-y-4 animate-fade-in text-ink">
          <div>
            <h3 className="text-base font-semibold text-ink flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-accent" />
              When are you taking the SAT?
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 font-sans">
              Select your target test date from the official 2026–2027 schedule.
            </p>
          </div>

          <div
            className="space-y-2 mt-4"
            role="radiogroup"
            aria-label="Target test date from official schedule"
          >
            {upcomingDates.length > 0 && (
              <>
                <p className="text-xs font-medium text-ink-muted mb-2 font-sans">
                  Upcoming dates
                </p>
                {(() => {
                  const isSelectedInUpcoming = upcomingDates.some((item) => item.date === selectedDate);
                  return upcomingDates.map((d, index) => {
                    const isSelected = selectedDate === d.date;
                    return (
                      <div
                        key={d.date}
                        ref={(el) => (dateRowRefs.current[index] = el)}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={isSelected || (!isSelectedInUpcoming && index === 0) ? 0 : -1}
                        onClick={() => setSelectedDate(d.date)}
                        onKeyDown={(e) => handleDateKeyDown(e, index, d.date)}
                        className={`
                          w-full flex items-center justify-between px-4 py-3.5 rounded-[var(--radius-md)]
                          transition-all text-left cursor-pointer select-none
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1
                          ${
                            isSelected
                              ? 'border-2 border-ink bg-ink/[0.06] shadow-xs'
                              : 'border border-line bg-surface hover:border-line-strong hover:bg-paper-2/50'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          {/* Radio outer ring + accent dot */}
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                              isSelected
                                ? 'border-accent bg-transparent'
                                : 'border-line-strong bg-transparent'
                            }`}
                            aria-hidden="true"
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-accent animate-scale-in" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-ink">
                            {d.label}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-ink-2">
                          {d.formattedAway}
                        </span>
                      </div>
                    );
                  });
                })()}
              </>
            )}

            {pastDates.length > 0 && (
              <>
                <p className="text-xs font-medium text-ink-muted mb-2 font-sans mt-4">
                  Past dates
                </p>
                {pastDates.map((d) => (
                  <div
                    key={d.date}
                    aria-disabled="true"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-[var(--radius-md)] border border-line/60 bg-paper-2/30 opacity-45 cursor-not-allowed select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-line-strong/50 shrink-0" />
                      <span className="text-sm font-medium text-ink-muted line-through">
                        {d.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-ink-muted">
                      {d.formattedAway}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* ── STEP 2: STARTING SCORE ── */}
      {step === 'current' && (
        <div className="space-y-5 animate-fade-in text-ink">
          <div>
            <h3 className="text-base font-semibold text-ink flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-accent" />
              What's your starting SAT score?
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 font-sans">
              If you've taken the SAT or a practice test before, enter your scores below.
            </p>
          </div>

          {knowsScore === null && (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setKnowsScore(true)}
                className="w-full flex items-center gap-4 p-4 rounded-[var(--radius-md)] border border-line bg-surface hover:border-line-strong hover:bg-paper-2/50 transition-all text-left cursor-pointer"
              >
                <div className="bg-paper-2 p-2.5 rounded-[var(--radius-sm)] border border-line shrink-0">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">I know my score</p>
                  <p className="text-xs text-ink-2 mt-0.5">
                    I've taken the SAT or a practice test before
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setKnowsScore(false)}
                className="w-full flex items-center gap-4 p-4 rounded-[var(--radius-md)] border border-line bg-surface hover:border-line-strong hover:bg-paper-2/50 transition-all text-left cursor-pointer"
              >
                <div className="bg-paper-2 p-2.5 rounded-[var(--radius-sm)] border border-line shrink-0">
                  <HelpCircle className="w-5 h-5 text-ink-2" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">I don't know my score</p>
                  <p className="text-xs text-ink-2 mt-0.5">
                    Take a diagnostic test to find out your starting baseline
                  </p>
                </div>
              </button>
            </div>
          )}

          {knowsScore === true && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-ink-2">Enter section scores:</span>
                <button
                  type="button"
                  onClick={() => setKnowsScore(null)}
                  className="text-accent hover:underline font-medium"
                >
                  Change option
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                    Math score <span className="text-ink-muted font-normal font-mono">(200–800)</span>
                  </label>
                  <input
                    type="number"
                    min={200}
                    max={800}
                    step={10}
                    value={currentMath}
                    onChange={(e) => setCurrentMath(e.target.value)}
                    placeholder="e.g. 580"
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] border border-line bg-surface text-ink font-mono text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                    R&amp;W score <span className="text-ink-muted font-normal font-mono">(200–800)</span>
                  </label>
                  <input
                    type="number"
                    min={200}
                    max={800}
                    step={10}
                    value={currentEnglish}
                    onChange={(e) => setCurrentEnglish(e.target.value)}
                    placeholder="e.g. 520"
                    className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] border border-line bg-surface text-ink font-mono text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>
              </div>

              {currentTotal > 0 && (
                <div className="bg-paper-2/60 border border-line rounded-[var(--radius-md)] px-4 py-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-ink-2">Calculated starting total</span>
                  <span
                    className={`text-base font-bold font-mono ${
                      currentTotal >= 400 && currentTotal <= 1600 ? 'text-ink' : 'text-berry'
                    }`}
                  >
                    {currentTotal}
                  </span>
                </div>
              )}
            </div>
          )}

          {knowsScore === false && (
            <div className="bg-paper-2/60 border border-line rounded-[var(--radius-md)] p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-ink">No baseline yet? No problem!</p>
                    <button
                      type="button"
                      onClick={() => setKnowsScore(null)}
                      className="text-xs text-accent hover:underline font-medium"
                    >
                      Change
                    </button>
                  </div>
                  <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                    You can take an authentic <strong>SATBase Diagnostic Test</strong> to measure your starting score.
                    We'll tailor your schedule with baseline practice questions first.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── STEP 3: GOAL SCORE ── */}
      {step === 'goal' && (
        <div className="space-y-5 animate-fade-in text-ink">
          <div>
            <h3 className="text-base font-semibold text-ink flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-accent" />
              Set your target SAT score
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 font-sans">
              What score are you aiming for? Be ambitious but realistic!
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  Math goal <span className="text-ink-muted font-normal font-mono">(200–800)</span>
                </label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={goalMath}
                  onChange={(e) => setGoalMath(e.target.value)}
                  placeholder="e.g. 750"
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] border border-line bg-surface text-ink font-mono text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-2 mb-1.5">
                  R&amp;W goal <span className="text-ink-muted font-normal font-mono">(200–800)</span>
                </label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={goalEnglish}
                  onChange={(e) => setGoalEnglish(e.target.value)}
                  placeholder="e.g. 700"
                  className="w-full px-3.5 py-2.5 rounded-[var(--radius-sm)] border border-line bg-surface text-ink font-mono text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
              </div>
            </div>

            {goalTotal > 0 && (
              <div className="bg-paper-2/70 border border-line rounded-[var(--radius-md)] p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-ink-2">Your target goal</span>
                  <span className="text-2xl font-bold font-mono text-ink">{goalTotal}</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-surface border border-line rounded-[var(--radius-sm)] p-2.5 text-center">
                    <p className="text-[10px] font-mono text-ink-muted uppercase">Math</p>
                    <p className="text-base font-bold font-mono text-ink mt-0.5">{goalMath || '—'}</p>
                  </div>
                  <div className="flex-1 bg-surface border border-line rounded-[var(--radius-sm)] p-2.5 text-center">
                    <p className="text-[10px] font-mono text-ink-muted uppercase">R&amp;W</p>
                    <p className="text-base font-bold font-mono text-ink mt-0.5">{goalEnglish || '—'}</p>
                  </div>
                </div>
                {currentTotal > 0 && (
                  <p className="text-xs text-accent font-medium mt-3 text-center">
                    +{goalTotal - currentTotal} points from your current score
                  </p>
                )}
              </div>
            )}

            <div>
              <p className="text-xs text-ink-muted font-medium mb-2">Quick presets:</p>
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: '1200', m: '600', e: '600' },
                  { label: '1350', m: '680', e: '670' },
                  { label: '1400', m: '700', e: '700' },
                  { label: '1500', m: '760', e: '740' },
                  { label: '1550', m: '790', e: '760' },
                  { label: '1600', m: '800', e: '800' },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setGoalMath(preset.m);
                      setGoalEnglish(preset.e);
                    }}
                    className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-mono font-medium border transition-colors cursor-pointer ${
                      goalTotal === parseInt(preset.label, 10)
                        ? 'border-accent bg-accent/10 text-accent font-bold'
                        : 'border-line text-ink-2 hover:border-line-strong hover:bg-paper-2'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
