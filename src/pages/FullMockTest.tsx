import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bookmark, Slash, Info } from 'lucide-react';
import BluebookHeader from '../components/bluebook/BluebookHeader';
import BluebookFooter, { QuestionStatus } from '../components/bluebook/BluebookFooter';
import CalculatorModal from '../components/bluebook/CalculatorModal';
import MathReferenceModal from '../components/bluebook/MathReferenceModal';
import ModuleReviewScreen from '../components/bluebook/ModuleReviewScreen';
import ModuleBreakModal from '../components/bluebook/ModuleBreakModal';
import KatexMath, { FormattedMathText } from '../components/ui/KatexMath';
import { useApp } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import { trackSiteEvent } from '../lib/activityTracking';
import {
  FullMockSession,
  createFullMockSession,
  getModuleConfigByIndex,
  loadFullMockSession,
  saveFullMockSession,
  clearFullMockSession,
  saveFullMockResult,
  FullMockSavedResult,
} from '../lib/fullMockSession';
import {
  calculateFullMockScores,
  getPracticeTestConfig,
} from '../data/mockTests/index';

export default function FullMockTest() {
  const navigate = useNavigate();
  const { testNum: rawTestNum } = useParams<{ testNum?: string }>();
  const testNum = Math.min(5, Math.max(1, parseInt(rawTestNum || '1', 10) || 1));

  const { profile } = useApp();
  const { user } = useAuth();

  const testConfig = getPracticeTestConfig(testNum);

  // Initialize or resume existing session for this specific test
  const [session, setSession] = useState<FullMockSession>(() => {
    const existing = loadFullMockSession(testNum);
    if (existing && existing.phase !== 'complete') {
      return existing;
    }
    return createFullMockSession(testNum);
  });

  const [now, setNow] = useState<number>(() => Date.now());
  const [timerVisible, setTimerVisible] = useState<boolean>(true);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [isHighlightActive, setIsHighlightActive] = useState<boolean>(false);

  // Split-screen drag divider for Reading & Writing (default 50%)
  const [splitPercent, setSplitPercent] = useState<number>(50);
  const isDraggingSplit = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Modals
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState<boolean>(false);

  // Completion lock
  const completionHandled = useRef<boolean>(false);

  // Current module config & active question
  const currentModuleConfig = getModuleConfigByIndex(
    testNum,
    session.currentModuleIndex
  );
  const questions = currentModuleConfig.questions;
  const activeQuestionIndex = Math.min(
    session.currentQuestionIndex,
    questions.length - 1
  );
  const activeQuestion = questions[activeQuestionIndex];

  const isMathSection = currentModuleConfig.section === 'math';
  const flaggedSet = new Set(session.flagged);
  const userAnswers = session.userAnswers;

  // Active timer calculation
  const secondsRemaining = Math.max(
    0,
    Math.floor((session.moduleDeadline - now) / 1000)
  );

  // Ticking timer & auto-submission on expiration
  useEffect(() => {
    if (session.phase !== 'test') return;

    const interval = setInterval(() => {
      const currentNow = Date.now();
      setNow(currentNow);

      if (currentNow >= session.moduleDeadline) {
        handleAutoAdvanceModule();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [session.phase, session.moduleDeadline, session.currentModuleIndex]);

  // Save session state to localStorage on any change
  useEffect(() => {
    saveFullMockSession(session, testNum);
  }, [session, testNum]);

  // Track start of exam once
  useEffect(() => {
    void trackSiteEvent('test_started', {
      test: `practice-test-${testNum}`,
      module: session.currentModuleIndex,
    });
  }, [testNum]);

  // Split divider drag handlers
  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingSplit.current = true;
    document.addEventListener('mousemove', handleDividerMouseMove);
    document.addEventListener('mouseup', handleDividerMouseUp);
  };

  const handleDividerMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingSplit.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const newPercent = Math.min(75, Math.max(25, (relativeX / rect.width) * 100));
    setSplitPercent(newPercent);
  }, []);

  const handleDividerMouseUp = useCallback(() => {
    isDraggingSplit.current = false;
    document.removeEventListener('mousemove', handleDividerMouseMove);
    document.removeEventListener('mouseup', handleDividerMouseUp);
  }, [handleDividerMouseMove]);

  // Option selection
  const handleSelectOption = (letter: string) => {
    if (!activeQuestion) return;
    setSession((prev) => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [activeQuestion.id]: letter,
      },
    }));
  };

  // SPR input change (allows numbers, decimals, fractions, and negative signs)
  const handleSprChange = (val: string) => {
    if (!activeQuestion) return;
    const sanitized = val.replace(/[^0-9./-]/g, '').slice(0, 7);
    setSession((prev) => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [activeQuestion.id]: sanitized,
      },
    }));
  };

  // Flag toggle
  const toggleMarkForReview = () => {
    if (!activeQuestion) return;
    setSession((prev) => {
      const isFlagged = prev.flagged.includes(activeQuestion.id);
      return {
        ...prev,
        flagged: isFlagged
          ? prev.flagged.filter((id) => id !== activeQuestion.id)
          : [...prev.flagged, activeQuestion.id],
      };
    });
  };

  // Option strike-through / eliminate
  const toggleEliminateOption = (letter: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeQuestion) return;
    setSession((prev) => {
      const currentElim = prev.eliminated[activeQuestion.id] || [];
      const isElim = currentElim.includes(letter);
      const updated = isElim
        ? currentElim.filter((l) => l !== letter)
        : [...currentElim, letter];
      return {
        ...prev,
        eliminated: {
          ...prev.eliminated,
          [activeQuestion.id]: updated,
        },
      };
    });
  };

  // Advance to next module or break
  const advanceToNextModule = () => {
    const nowTs = Date.now();

    if (session.currentModuleIndex === 0) {
      // RW1 -> RW2
      const rw2Config = testConfig.modules.rw2;
      setSession((prev) => ({
        ...prev,
        currentModuleIndex: 1,
        currentQuestionIndex: 0,
        phase: 'test',
        moduleDeadline: nowTs + rw2Config.timeSeconds * 1000,
        moduleDurationSeconds: rw2Config.timeSeconds,
      }));
    } else if (session.currentModuleIndex === 1) {
      // RW2 -> 10-Minute Break!
      setSession((prev) => ({
        ...prev,
        phase: 'break',
      }));
    } else if (session.currentModuleIndex === 2) {
      // Math1 -> Math2
      const math2Config = testConfig.modules.math2;
      setSession((prev) => ({
        ...prev,
        currentModuleIndex: 3,
        currentQuestionIndex: 0,
        phase: 'test',
        moduleDeadline: nowTs + math2Config.timeSeconds * 1000,
        moduleDurationSeconds: math2Config.timeSeconds,
      }));
    } else if (session.currentModuleIndex === 3) {
      // Math2 completed -> Finish Exam
      finalizeExam(session);
    }
  };

  // Resume after 10-minute break -> Math Module 1
  const handleResumeAfterBreak = () => {
    const math1Config = testConfig.modules.math1;
    const nowTs = Date.now();
    setSession((prev) => ({
      ...prev,
      currentModuleIndex: 2,
      currentQuestionIndex: 0,
      phase: 'test',
      moduleDeadline: nowTs + math1Config.timeSeconds * 1000,
      moduleDurationSeconds: math1Config.timeSeconds,
    }));
  };

  const handleAutoAdvanceModule = () => {
    advanceToNextModule();
  };

  // Finalize test, compute score, save, and route to results
  const finalizeExam = (finalSession: FullMockSession) => {
    if (completionHandled.current) return;
    completionHandled.current = true;

    const scores = calculateFullMockScores(testNum, finalSession.userAnswers);
    const completedAt = new Date().toISOString();

    const resultPayload: FullMockSavedResult = {
      attemptId: `pt${testNum}-attempt-${Date.now()}`,
      testId: `practice-test-${testNum}`,
      testNumber: testNum,
      completedAt,
      userAnswers: finalSession.userAnswers,
      scores,
      timeSpentSeconds: {
        rw: 64 * 60,
        math: 70 * 60,
        total: 134 * 60,
      },
    };

    saveFullMockResult(resultPayload, testNum);
    clearFullMockSession(testNum);

    void trackSiteEvent('test_completed', {
      test: `practice-test-${testNum}`,
      totalScore: scores.totalScore,
      rwScore: scores.rwScore,
      mathScore: scores.mathScore,
    });

    navigate(`/mock-tests/practice-${testNum}/results`, { replace: true });
  };

  // Status list for Footer Navigator & Review Screen
  const questionStatuses: QuestionStatus[] = questions.map((q, idx) => ({
    number: q.number,
    isAnswered: Boolean(session.userAnswers[q.id]?.trim()),
    isFlagged: flaggedSet.has(q.id),
    isCurrent: idx === activeQuestionIndex,
  }));

  const reviewItems = questions.map((q) => ({
    number: q.number,
    isAnswered: Boolean(session.userAnswers[q.id]?.trim()),
    isFlagged: flaggedSet.has(q.id),
  }));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'j') {
        if (activeQuestionIndex < questions.length - 1) {
          setSession((prev) => ({
            ...prev,
            currentQuestionIndex: activeQuestionIndex + 1,
          }));
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        if (activeQuestionIndex > 0) {
          setSession((prev) => ({
            ...prev,
            currentQuestionIndex: activeQuestionIndex - 1,
          }));
        }
      } else if (e.key.toLowerCase() === 'f') {
        toggleMarkForReview();
      } else if (
        !isMathSection ||
        activeQuestion.type === 'multiple_choice'
      ) {
        const key = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(key)) {
          handleSelectOption(key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeQuestionIndex, questions.length, activeQuestion, isMathSection]);

  const candidateName = profile?.name || user?.email?.split('@')[0] || 'Student';

  return (
    <div className="min-h-screen bg-paper flex flex-col font-sans select-none overflow-x-hidden text-ink">
      {/* ── 1. Top Bluebook Header ── */}
      <BluebookHeader
        sectionTitle={currentModuleConfig.title}
        secondsRemaining={secondsRemaining}
        timerVisible={timerVisible}
        onToggleTimer={() => setTimerVisible((prev) => !prev)}
        isMarkedForReview={flaggedSet.has(activeQuestion?.id || '')}
        onToggleMarkForReview={toggleMarkForReview}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenReference={() => setIsReferenceOpen(true)}
        isMathSection={isMathSection}
        isFocusMode={isFocusMode}
        onToggleFocusMode={() => setIsFocusMode((prev) => !prev)}
        isHighlightActive={isHighlightActive}
        onToggleHighlight={() => setIsHighlightActive((prev) => !prev)}
      />

      {/* ── 2. Break Modal (10-minute break between Section 1 & Section 2) ── */}
      <ModuleBreakModal
        isOpen={session.phase === 'break'}
        onStartNextModule={handleResumeAfterBreak}
        breakDurationMinutes={10}
      />

      {/* ── 3. Calculator & Formula Reference Modals (for Math) ── */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
      <MathReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      {/* ── 4. Main Body: Review Screen OR Active Question ── */}
      <main className="flex-1 pb-20 pt-16 overflow-y-auto">
        {session.phase === 'review' ? (
          <ModuleReviewScreen
            sectionName={currentModuleConfig.title}
            moduleNumber={currentModuleConfig.module}
            items={reviewItems}
            onSelectQuestion={(idx) => {
              setSession((prev) => ({
                ...prev,
                currentQuestionIndex: idx,
                phase: 'test',
              }));
            }}
            onReturnToTest={() => {
              setSession((prev) => ({ ...prev, phase: 'test' }));
            }}
            onSubmitModule={advanceToNextModule}
            isLastModule={session.currentModuleIndex === 3}
          />
        ) : isMathSection ? (
          /* ── Math Section: Centered Column (max-w-[720px]) ── */
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-8">
            {/* Header: Question Number badge + Mark for Review */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-line">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-[4px] bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {activeQuestion.number}
                </span>
                <span className="text-xs font-sans text-ink-2 font-medium">
                  Question {activeQuestion.number} of {questions.length}
                </span>
              </div>

              <button
                onClick={toggleMarkForReview}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  flaggedSet.has(activeQuestion.id)
                    ? 'text-mustard font-semibold bg-mustard/10'
                    : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                }`}
                title="Mark for review (Shortcut: F)"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    flaggedSet.has(activeQuestion.id)
                      ? 'fill-mustard text-mustard'
                      : 'text-ink-2'
                  }`}
                />
                <span className="hidden sm:inline font-sans">
                  {flaggedSet.has(activeQuestion.id) ? 'For review' : 'Mark for review'}
                </span>
              </button>
            </div>

            {/* Stimulus & Prompt */}
            <div className="space-y-6">
              {activeQuestion.equations && activeQuestion.equations.length > 0 && (
                <div className="bg-surface rounded-xl p-5 border border-line text-center space-y-3 shadow-xs">
                  {activeQuestion.equations.map((eq, i) => (
                    <div key={i} className="text-lg sm:text-xl font-serif text-ink py-1">
                      <KatexMath math={eq} displayMode={true} />
                    </div>
                  ))}
                </div>
              )}

              {/* Math Table if applicable */}
              {activeQuestion.tableData && (
                <div className="overflow-x-auto rounded-xl border border-line bg-surface shadow-xs">
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
                <FormattedMathText text={activeQuestion.prompt} />
              </div>

              {/* Multiple Choice OR Student-Produced Response */}
              {activeQuestion.type === 'multiple_choice' ? (
                <div className="space-y-2.5 pt-2">
                  {activeQuestion.options?.map((option) => {
                    const isSelected = userAnswers[activeQuestion.id] === option.letter;
                    const isEliminated = (
                      session.eliminated[activeQuestion.id] || []
                    ).includes(option.letter);

                    return (
                      <div
                        key={option.letter}
                        onClick={() => handleSelectOption(option.letter)}
                        className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-sm transition-all cursor-pointer select-none ${
                          isSelected
                            ? 'border-ink bg-ink/5 shadow-xs font-medium'
                            : 'border-line bg-surface hover:bg-paper-2/60 hover:border-line-strong'
                        } ${isEliminated ? 'opacity-40 line-through' : ''}`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0 pr-3">
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-ink text-paper'
                                : 'border border-line-strong text-ink-2 group-hover:border-ink group-hover:text-ink'
                            }`}
                          >
                            {option.letter}
                          </span>
                          <div className="font-sans text-ink leading-normal select-text">
                            <FormattedMathText text={option.text} />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => toggleEliminateOption(option.letter, e)}
                          className={`p-1.5 rounded text-xs transition-colors shrink-0 ${
                            isEliminated
                              ? 'text-accent bg-accent/10 font-bold opacity-100'
                              : 'text-ink-2/60 hover:text-ink hover:bg-paper-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100'
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
              ) : (
                /* Student-Produced Response (SPR) Input Card */
                <div className="pt-2">
                  <div className="bg-surface rounded-2xl border border-line p-6 sm:p-8 space-y-6 shadow-xs">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display font-semibold text-sm sm:text-base text-ink">
                          Student-Produced Response
                        </h4>
                        <p className="text-xs text-ink-2 mt-1 leading-relaxed">
                          Enter your answer in the box below. For fractions, use <span className="font-mono font-semibold">/</span> (e.g. 3/4). For decimals, use a point <span className="font-mono font-semibold">.</span> (e.g. 0.75). Negative signs <span className="font-mono font-semibold">-</span> are allowed.
                        </p>
                      </div>
                    </div>

                    <div className="max-w-xs mx-auto space-y-3">
                      <label className="block text-xs font-mono uppercase text-ink-2 text-center tracking-wider font-semibold">
                        Your Answer
                      </label>
                      <input
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        value={userAnswers[activeQuestion.id] || ''}
                        onChange={(e) => handleSprChange(e.target.value)}
                        placeholder="e.g. 10"
                        className="w-full text-center font-mono font-bold text-2xl sm:text-3xl py-3 px-4 rounded-xl border-2 border-line focus:border-ink bg-paper text-ink transition-colors outline-hidden shadow-inner tracking-widest placeholder:text-ink-muted/40 placeholder:text-xl"
                      />
                      {userAnswers[activeQuestion.id] && (
                        <p className="text-center font-mono text-xs text-moss font-semibold">
                          Answer recorded: {userAnswers[activeQuestion.id]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── Reading & Writing: Split View with Draggable Divider ── */
          <div
            ref={containerRef}
            className="h-[calc(100vh-3.5rem-4rem)] flex flex-col lg:flex-row overflow-hidden relative"
          >
            {/* Left Column: Passage Panel (Fraunces serif 18/30) */}
            <div
              style={{ width: `${splitPercent}%` }}
              className="w-full lg:h-full overflow-y-auto px-6 sm:px-10 py-6 border-b lg:border-b-0 border-line select-text"
            >
              {activeQuestion.passage && (
                <div className="font-display text-[18px] leading-[30px] text-ink select-text whitespace-pre-line max-w-prose">
                  {activeQuestion.passage}
                </div>
              )}
            </div>

            {/* Draggable Divider */}
            <div
              onMouseDown={handleDividerMouseDown}
              className="hidden lg:flex w-2.5 hover:w-3 bg-transparent hover:bg-accent/15 cursor-col-resize items-center justify-center relative select-none group transition-all z-10 shrink-0"
              title="Drag to resize passage and question panels"
            >
              <div className="w-[1px] h-full bg-line group-hover:bg-accent transition-colors" />
            </div>

            {/* Right Column: Prompt & Choices */}
            <div
              style={{ width: `${100 - splitPercent}%` }}
              className="w-full lg:h-full overflow-y-auto px-6 sm:px-8 py-6 select-text"
            >
              <div className="max-w-xl space-y-6">
                {/* Header: Question Number badge + Mark for Review */}
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-[4px] bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {activeQuestion.number}
                    </span>
                    <span className="text-xs font-sans text-ink-2 font-medium">
                      Question {activeQuestion.number} of {questions.length}
                    </span>
                  </div>

                  <button
                    onClick={toggleMarkForReview}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      flaggedSet.has(activeQuestion.id)
                        ? 'text-mustard font-semibold bg-mustard/10'
                        : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                    }`}
                    title="Mark for review (Shortcut: F)"
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        flaggedSet.has(activeQuestion.id)
                          ? 'fill-mustard text-mustard'
                          : 'text-ink-2'
                      }`}
                    />
                    <span className="hidden sm:inline font-sans">
                      {flaggedSet.has(activeQuestion.id) ? 'For review' : 'Mark for review'}
                    </span>
                  </button>
                </div>

                {/* Prompt */}
                <div className="text-base font-sans font-medium text-ink leading-relaxed select-text">
                  <FormattedMathText text={activeQuestion.prompt} />
                </div>

                {/* Options A-D */}
                <div className="space-y-2.5 pt-2">
                  {activeQuestion.options?.map((option) => {
                    const isSelected = userAnswers[activeQuestion.id] === option.letter;
                    const isEliminated = (
                      session.eliminated[activeQuestion.id] || []
                    ).includes(option.letter);

                    return (
                      <div
                        key={option.letter}
                        onClick={() => handleSelectOption(option.letter)}
                        className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-sm transition-all cursor-pointer select-none ${
                          isSelected
                            ? 'border-ink bg-ink/5 shadow-xs font-medium'
                            : 'border-line bg-surface hover:bg-paper-2/60 hover:border-line-strong'
                        } ${isEliminated ? 'opacity-40 line-through' : ''}`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0 pr-3">
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-semibold shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-ink text-paper'
                                : 'border border-line-strong text-ink-2 group-hover:border-ink group-hover:text-ink'
                            }`}
                          >
                            {option.letter}
                          </span>
                          <div className="font-sans text-ink leading-normal select-text">
                            <FormattedMathText text={option.text} />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => toggleEliminateOption(option.letter, e)}
                          className={`p-1.5 rounded text-xs transition-colors shrink-0 ${
                            isEliminated
                              ? 'text-accent bg-accent/10 font-bold opacity-100'
                              : 'text-ink-2/60 hover:text-ink hover:bg-paper-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100'
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

      {/* ── 5. Bottom Bluebook Footer ── */}
      <BluebookFooter
        candidateName={candidateName}
        currentQuestionIndex={activeQuestionIndex}
        totalQuestions={questions.length}
        questionStatuses={questionStatuses}
        onSelectQuestion={(idx) => {
          setSession((prev) => ({
            ...prev,
            currentQuestionIndex: idx,
            phase: 'test',
          }));
        }}
        onPrev={() => {
          if (activeQuestionIndex > 0) {
            setSession((prev) => ({
              ...prev,
              currentQuestionIndex: activeQuestionIndex - 1,
            }));
          }
        }}
        onNext={() => {
          if (activeQuestionIndex < questions.length - 1) {
            setSession((prev) => ({
              ...prev,
              currentQuestionIndex: activeQuestionIndex + 1,
            }));
          } else {
            setSession((prev) => ({ ...prev, phase: 'review' }));
          }
        }}
        onOpenReview={() => {
          setSession((prev) => ({
            ...prev,
            phase: prev.phase === 'review' ? 'test' : 'review',
          }));
        }}
      />
    </div>
  );
}
