import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BluebookHeader from '../components/bluebook/BluebookHeader';
import BluebookFooter, { QuestionStatus } from '../components/bluebook/BluebookFooter';
import MathReferenceModal from '../components/bluebook/MathReferenceModal';
import CalculatorModal from '../components/bluebook/CalculatorModal';
import ModuleReviewScreen from '../components/bluebook/ModuleReviewScreen';
import ModuleBreakModal from '../components/bluebook/ModuleBreakModal';
import KatexMath, { FormattedMathText } from '../components/ui/KatexMath';
import { useApp } from '../contexts/AppContext';
import { Bookmark, Slash } from 'lucide-react';
import {
  answerQuestion,
  createSession,
  isFlashRushSession,
  remainingSeconds,
  startMath,
  submitModule,
  type FlashRushSession,
} from '../lib/flashRushSession';
import { readStored, writeStored } from '../lib/storage';
import { trackSiteEvent } from '../lib/activityTracking';

const FLASH_RUSH_SESSION_KEY = 'flashrush_session';
const FLASH_RUSH_RESULT_KEY = 'flashrush_result';

export default function FlashRushMockTest() {
  const navigate = useNavigate();
  const { profile } = useApp();

  const [session, setSession] = useState<FlashRushSession>(() =>
    readStored('sessionStorage', FLASH_RUSH_SESSION_KEY, isFlashRushSession) ?? createSession()
  );
  const [now, setNow] = useState(() => Date.now());
  const [timerVisible, setTimerVisible] = useState(true);

  // Focus Mode State (clean & calm Bluebook focus mode, replaces gaming Hardcore mode)
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isHighlightActive, setIsHighlightActive] = useState(false);

  // Draggable Split Divider State for Reading & Writing (percentage for left passage)
  const [splitPercent, setSplitPercent] = useState<number>(50);
  const isDraggingSplit = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Strikethrough/eliminate state for choices: map questionId -> Set of eliminated originalIds
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, Set<string>>>({});

  // Modals & Screens
  const [isReviewScreenOpen, setIsReviewScreenOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const completionHandled = useRef(false);
  const testStartTracked = useRef(false);

  useEffect(() => {
    if (session.phase === 'test' && !testStartTracked.current) {
      testStartTracked.current = true;
      void trackSiteEvent('test_started', { test: 'flashrush' });
    }
  }, [session.phase]);

  const questions = session.questions;
  const currentModule = session.currentModule;
  const currentQuestionIndex = session.currentQuestionIndex;
  const userAnswers = session.userAnswers;
  const flaggedQuestions = new Set(session.flagged);
  const isBreakOpen = session.phase === 'break';
  const isReviewOpen = isReviewScreenOpen && !isBreakOpen;

  const currentModuleQuestions = questions.filter(
    (q) => q.module === currentModule
  );
  const activeQuestion = currentModuleQuestions[currentQuestionIndex];

  // Active timer
  const activeSeconds = remainingSeconds(session, now);

  // Persist answers and module state so a reload at the break cannot lose work.
  useEffect(() => {
    writeStored('sessionStorage', FLASH_RUSH_SESSION_KEY, session.phase === 'complete' ? null : session);
  }, [session]);

  // Use a deadline clock so background tab throttling cannot extend a module.
  useEffect(() => {
    if (session.phase !== 'test') return;
    const refreshClock = () => setNow(Date.now());
    const interval = window.setInterval(refreshClock, 1000);
    document.addEventListener('visibilitychange', refreshClock);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', refreshClock);
    };
  }, [session.phase]);

  const completeTest = (completedSession: FlashRushSession) => {
    if (completionHandled.current) return;
    completionHandled.current = true;
    const result = {
      attemptId: completedSession.id,
      questions: completedSession.questions,
      userAnswers: completedSession.userAnswers,
      timeSpent: completedSession.timeSpent,
      completedAt: completedSession.completedAt || new Date().toISOString(),
    };
    writeStored('sessionStorage', FLASH_RUSH_RESULT_KEY, result);
    writeStored('sessionStorage', FLASH_RUSH_SESSION_KEY, null);
    navigate('/mock-tests/flashrush/results', { replace: true });
  };

  // Automatically advance the first module to its break, or finish the test.
  useEffect(() => {
    if (session.phase !== 'test' || activeSeconds > 0) return;
    const completedModule = submitModule(session, now);
    setSession(completedModule);
    if (completedModule.phase === 'break') setIsReviewScreenOpen(false);
    if (completedModule.phase === 'complete') completeTest(completedModule);
  }, [session, activeSeconds, now]);

  const toggleMarkForReview = useCallback(() => {
    if (!activeQuestion) return;
    setSession((prev) => {
      const next = new Set(prev.flagged);
      if (next.has(activeQuestion.id)) {
        next.delete(activeQuestion.id);
      } else {
        next.add(activeQuestion.id);
      }
      return { ...prev, flagged: [...next] };
    });
  }, [activeQuestion]);

  const handleSelectOption = useCallback((originalId: string) => {
    if (!activeQuestion) return;
    // If the option is eliminated, un-eliminate it when selected
    setEliminatedOptions((prev) => {
      const currentElim = prev[activeQuestion.id];
      if (currentElim && currentElim.has(originalId)) {
        const next = new Set(currentElim);
        next.delete(originalId);
        return { ...prev, [activeQuestion.id]: next };
      }
      return prev;
    });

    setSession((prev) => answerQuestion(prev, activeQuestion.id, originalId, Date.now()));
  }, [activeQuestion]);

  const toggleEliminateOption = useCallback((originalId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeQuestion) return;
    setEliminatedOptions((prev) => {
      const currentSet = new Set(prev[activeQuestion.id] || []);
      if (currentSet.has(originalId)) {
        currentSet.delete(originalId);
      } else {
        currentSet.add(originalId);
        // If it was currently selected, clear the answer
        if (userAnswers[activeQuestion.id] === originalId) {
          setSession((s) => answerQuestion(s, activeQuestion.id, '', Date.now()));
        }
      }
      return { ...prev, [activeQuestion.id]: currentSet };
    });
  }, [activeQuestion, userAnswers]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setSession((prev) => ({ ...prev, currentQuestionIndex: Math.max(0, prev.currentQuestionIndex - 1) }));
    }
  }, [currentQuestionIndex]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < currentModuleQuestions.length - 1) {
      setSession((prev) => ({ ...prev, currentQuestionIndex: Math.min(currentModuleQuestions.length - 1, prev.currentQuestionIndex + 1) }));
    } else {
      setIsReviewScreenOpen(true);
    }
  }, [currentQuestionIndex, currentModuleQuestions.length]);

  const handleSubmitModule = () => {
    if (currentModule === 1) {
      setIsReviewScreenOpen(false);
      setSession((prev) => submitModule(prev, Date.now()));
    } else {
      const completed = submitModule(session, Date.now());
      setSession(completed);
      completeTest(completed);
    }
  };

  const handleStartMath = () => {
    setSession((prev) => startMath(prev, Date.now()));
    setIsReviewScreenOpen(false);
  };

  // ── Keyboard Shortcuts (Requirement 9) ──
  // A-D: select option, ArrowLeft/ArrowRight: navigate, F: toggle mark for review
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input, textarea, or contentEditable
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }
      if (isReviewOpen || isBreakOpen) return;

      const key = e.key.toUpperCase();

      // Flag toggle with 'F'
      if (key === 'F' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        toggleMarkForReview();
        return;
      }

      // Arrow navigation
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
        return;
      }

      // Choice selection with A, B, C, D
      if (['A', 'B', 'C', 'D'].includes(key) && activeQuestion?.shuffledOptions) {
        const option = activeQuestion.shuffledOptions.find((o) => o.letter === key);
        if (option) {
          e.preventDefault();
          handleSelectOption(option.originalId);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeQuestion,
    handleNext,
    handlePrev,
    handleSelectOption,
    isBreakOpen,
    isReviewOpen,
    toggleMarkForReview,
  ]);

  // ── Draggable Split Screen Handler (Mouse & Touch) ──
  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingSplit.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingSplit.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = moveEvent.clientX - rect.left;
      const newPercent = Math.max(28, Math.min(72, (offsetX / rect.width) * 100));
      setSplitPercent(newPercent);
    };

    const onMouseUp = () => {
      isDraggingSplit.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  if (!activeQuestion) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center text-ink">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs font-sans text-ink-2">
            Loading practice test...
          </p>
        </div>
      </div>
    );
  }

  const questionStatuses: QuestionStatus[] = currentModuleQuestions.map((q, idx) => ({
    number: idx + 1,
    isAnswered: Boolean(userAnswers[q.id]),
    isFlagged: flaggedQuestions.has(q.id),
    isCurrent: idx === currentQuestionIndex && !isReviewOpen,
  }));

  const isMath = currentModule === 2;
  const sectionTitle =
    currentModule === 1
      ? 'Section 1, Module 1: Reading and Writing'
      : 'Section 2, Module 1: Math';

  const currentElimSet = eliminatedOptions[activeQuestion.id] || new Set<string>();

  return (
    <div className="min-h-screen flex flex-col justify-between select-none font-sans bg-paper text-ink transition-colors duration-200">
      {/* ── Top Bluebook Header (calm, neutral, Focus mode) ── */}
      <BluebookHeader
        sectionTitle={sectionTitle}
        secondsRemaining={activeSeconds}
        timerVisible={timerVisible}
        onToggleTimer={() => setTimerVisible(!timerVisible)}
        isMarkedForReview={flaggedQuestions.has(activeQuestion.id)}
        onToggleMarkForReview={toggleMarkForReview}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenReference={() => setIsReferenceOpen(true)}
        isMathSection={isMath}
        isFocusMode={isFocusMode}
        onToggleFocusMode={() => setIsFocusMode(!isFocusMode)}
        onToggleHighlight={() => setIsHighlightActive(!isHighlightActive)}
        isHighlightActive={isHighlightActive}
      />

      {/* ── Main Area: Review Screen OR Calm Bluebook Test View ── */}
      <main className="flex-1 pb-20 overflow-y-auto">
        {isReviewOpen ? (
          <ModuleReviewScreen
            sectionName={sectionTitle}
            moduleNumber={currentModule}
            items={questionStatuses}
            onSelectQuestion={(idx) => {
              setSession((prev) => ({ ...prev, currentQuestionIndex: idx }));
              setIsReviewScreenOpen(false);
            }}
            onReturnToTest={() => setIsReviewScreenOpen(false)}
            onSubmitModule={handleSubmitModule}
            isLastModule={currentModule === 2}
          />
        ) : isMath ? (
          /* ── Math: Single centered column (max-w-[720px]) ── */
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-8">
            {/* Question Header: Number in ink square + Mark for Review */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-line">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-[4px] bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {currentQuestionIndex + 1}
                </span>
                <span className="text-xs font-sans text-ink-2 font-medium">
                  Question {currentQuestionIndex + 1}
                </span>
              </div>

              <button
                onClick={toggleMarkForReview}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  flaggedQuestions.has(activeQuestion.id)
                    ? 'text-mustard font-semibold bg-mustard/10'
                    : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                }`}
                title="Mark for review (Shortcut: F)"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    flaggedQuestions.has(activeQuestion.id)
                      ? 'fill-mustard text-mustard'
                      : 'text-ink-2'
                  }`}
                />
                <span className="hidden sm:inline font-sans">
                  {flaggedQuestions.has(activeQuestion.id) ? 'For review' : 'Mark for review'}
                </span>
              </button>
            </div>

            {/* Math Question Stimulus with KaTeX (Equations rendered cleanly, no raw mono) */}
            <div className="space-y-6">
              {activeQuestion.equations && activeQuestion.equations.length > 0 && (
                <div className="bg-surface rounded-xl p-5 border border-line text-center space-y-3">
                  {activeQuestion.equations.map((eq, i) => (
                    <div key={i} className="text-lg sm:text-xl font-serif text-ink py-1">
                      <KatexMath math={eq} displayMode={true} />
                    </div>
                  ))}
                </div>
              )}

              {/* Math Table Stimulus if applicable */}
              {activeQuestion.tableData && (
                <div className="overflow-x-auto rounded-xl border border-line bg-surface">
                  <table className="w-full text-sm text-left font-sans">
                    <thead className="bg-paper-2 text-ink border-b border-line font-medium text-xs">
                      <tr>
                        {activeQuestion.tableData.headers.map((h, i) => (
                          <th key={i} className="px-4 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {activeQuestion.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-surface' : 'bg-paper-2'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-2 font-mono text-xs text-ink">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Question Prompt */}
              <div className="text-base sm:text-[17px] font-sans font-medium text-ink leading-relaxed select-text">
                <FormattedMathText text={activeQuestion.questionPrompt} />
              </div>

              {/* Answer Options: Full-width, letter circle A-D, 1px border-line, selected = ink border + ink 6% fill */}
              <div className="space-y-2.5 pt-2">
                {activeQuestion.shuffledOptions.map((option) => {
                  const isSelected = userAnswers[activeQuestion.id] === option.originalId;
                  const isEliminated = currentElimSet.has(option.originalId);

                  return (
                    <div
                      key={option.letter}
                      onClick={() => !isEliminated && handleSelectOption(option.originalId)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer group ${
                        isEliminated
                          ? 'opacity-40 line-through bg-paper-2 border-line cursor-not-allowed'
                          : isSelected
                          ? 'border-ink bg-ink/[0.06] shadow-xs'
                          : 'border-line bg-surface hover:border-ink/30 hover:bg-paper-2 text-ink'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Letter circle A-D */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-ink text-paper'
                              : 'border border-line text-ink-2 group-hover:border-ink/40'
                          }`}
                        >
                          {option.letter}
                        </div>

                        {/* Option text rendered with KaTeX */}
                        <div className="pt-0.5 text-sm sm:text-[15px] leading-relaxed text-ink flex-1">
                          <FormattedMathText text={option.text} />
                        </div>
                      </div>

                      {/* Eliminate (strikethrough) toggle button on the right */}
                      <button
                        type="button"
                        onClick={(e) => toggleEliminateOption(option.originalId, e)}
                        className={`p-1.5 rounded text-xs transition-colors shrink-0 ${
                          isEliminated
                            ? 'text-accent bg-accent-subtle font-bold opacity-100'
                            : 'text-ink-2/70 hover:text-ink hover:bg-paper-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 focus:opacity-100'
                        }`}
                        title={isEliminated ? 'Restore option' : 'Eliminate option'}
                        aria-label={`Eliminate option ${option.letter}`}
                      >
                        <Slash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* ── Reading & Writing: Split Screen with Draggable Divider ── */
          <div
            ref={containerRef}
            className="h-[calc(100vh-3.5rem-4rem)] flex flex-col lg:flex-row overflow-hidden relative"
          >
            {/* Left Column: Passage Panel (Fraunces body 18/30) */}
            <div
              style={{ width: `${splitPercent}%` }}
              className="w-full lg:h-full overflow-y-auto px-6 sm:px-10 py-6 border-b lg:border-b-0 select-text"
            >
              {/* Passage Stimulus in Fraunces body 18/30 */}
              {activeQuestion.passage && (
                <div className="font-display text-[18px] leading-[30px] text-ink select-text whitespace-pre-line max-w-prose">
                  {activeQuestion.passage}
                </div>
              )}
            </div>

            {/* Draggable Divider Line */}
            <div
              onMouseDown={handleDividerMouseDown}
              className="hidden lg:flex w-2.5 hover:w-3 bg-transparent hover:bg-accent/15 cursor-col-resize items-center justify-center relative select-none group transition-all z-10 shrink-0"
              title="Drag to resize passage and question panels"
            >
              <div className="w-[1px] h-full bg-line group-hover:bg-accent transition-colors" />
            </div>

            {/* Right Column: Question and Answer Options */}
            <div
              style={{ width: `${100 - splitPercent}%` }}
              className="w-full lg:h-full overflow-y-auto px-6 sm:px-8 py-6 select-text"
            >
              <div className="max-w-xl space-y-6">
                {/* Question Header: Number in ink square + Mark for Review */}
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-[4px] bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {currentQuestionIndex + 1}
                    </span>
                    <span className="text-xs font-sans text-ink-2 font-medium">
                      Question {currentQuestionIndex + 1}
                    </span>
                  </div>

                  <button
                    onClick={toggleMarkForReview}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      flaggedQuestions.has(activeQuestion.id)
                        ? 'text-mustard font-semibold bg-mustard/10'
                        : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                    }`}
                    title="Mark for review (Shortcut: F)"
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        flaggedQuestions.has(activeQuestion.id)
                          ? 'fill-mustard text-mustard'
                          : 'text-ink-2'
                      }`}
                    />
                    <span className="hidden sm:inline font-sans">
                      {flaggedQuestions.has(activeQuestion.id) ? 'For review' : 'Mark for review'}
                    </span>
                  </button>
                </div>

                {/* Question Prompt in Instrument Sans */}
                <p className="text-base sm:text-[17px] font-sans font-medium text-ink leading-relaxed select-text">
                  {activeQuestion.questionPrompt}
                </p>

                {/* Answer Options: Full-width, letter circle A-D, 1px border-line, selected = ink border + ink 6% fill */}
                <div className="space-y-2.5 pt-1">
                  {activeQuestion.shuffledOptions.map((option) => {
                    const isSelected = userAnswers[activeQuestion.id] === option.originalId;
                    const isEliminated = currentElimSet.has(option.originalId);

                    return (
                      <div
                        key={option.letter}
                        onClick={() => !isEliminated && handleSelectOption(option.originalId)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer group ${
                          isEliminated
                            ? 'opacity-40 line-through bg-paper-2 border-line cursor-not-allowed'
                            : isSelected
                            ? 'border-ink bg-ink/[0.06] shadow-xs'
                            : 'border-line bg-surface hover:border-ink/30 hover:bg-paper-2 text-ink'
                        }`}
                      >
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {/* Letter circle A-D */}
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-ink text-paper'
                                : 'border border-line text-ink-2 group-hover:border-ink/40'
                            }`}
                          >
                            {option.letter}
                          </div>

                          {/* Option text */}
                          <div className="pt-0.5 text-sm sm:text-[15px] leading-relaxed text-ink flex-1">
                            {option.text}
                          </div>
                        </div>

                        {/* Eliminate (strikethrough) toggle button on the right */}
                        <button
                          type="button"
                          onClick={(e) => toggleEliminateOption(option.originalId, e)}
                          className={`p-1.5 rounded text-xs transition-colors shrink-0 ${
                            isEliminated
                              ? 'text-accent bg-accent-subtle font-bold opacity-100'
                              : 'text-ink-2/70 hover:text-ink hover:bg-paper-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 focus:opacity-100'
                          }`}
                          title={isEliminated ? 'Restore option' : 'Eliminate option'}
                          aria-label={`Eliminate option ${option.letter}`}
                        >
                          <Slash className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── Bottom Bar: Official Bluebook Footer ── */}
      <BluebookFooter
        candidateName={profile?.name || 'Student'}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={currentModuleQuestions.length}
        questionStatuses={questionStatuses}
        onSelectQuestion={(idx) => {
          setSession((prev) => ({ ...prev, currentQuestionIndex: idx }));
          setIsReviewScreenOpen(false);
        }}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenReview={() => setIsReviewScreenOpen(true)}
        isPracticeMode={false}
      />

      {/* ── Math Reference Sheet Modal ── */}
      <MathReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      {/* ── Scientific Calculator Modal ── */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* ── Module Transition Break Modal ── */}
      <ModuleBreakModal
        isOpen={isBreakOpen}
        onStartNextModule={handleStartMath}
      />
    </div>
  );
}
