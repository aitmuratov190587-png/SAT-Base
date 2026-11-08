import { useState, useEffect } from 'react';
import {
  X,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Award,
  Check,
} from 'lucide-react';
import { PracticeQuestion } from '../../data/questionRegistry';
import { answersMatch } from '../../lib/answerMatching';
import MathQuestionDisplay, { StudentProducedResponseInput } from './MathQuestionDisplay';
import MathExplanationDisplay from './MathExplanationDisplay';
import { EmptyState } from '../ui/EmptyState';

interface TopicPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  domainTitle: string;
  questions: PracticeQuestion[];
}

export default function TopicPracticeModal({
  isOpen,
  onClose,
  topicTitle,
  domainTitle,
  questions,
}: TopicPracticeModalProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [tentativeOption, setTentativeOption] = useState<string | null>(null);

  // Statistics per question: { [questionId]: { timeSeconds: number; selectedOption: string; isCorrect: boolean } }
  const [recordedStats, setRecordedStats] = useState<
    Record<string, { timeSeconds: number; selectedOption: string; isCorrect: boolean }>
  >({});

  const currentQ = questions && questions.length > 0 ? (questions[currentIndex] || questions[0]) : undefined;
  const isMathQuestion = currentQ ? (('section' in currentQ && currentQ.section === 'math') || !currentQ?.text1) : false;
  const correctAnswerDisplay = currentQ
    ? currentQ.options.length
      ? `Choice ${currentQ.correctAnswer}`
      : 'correctValue' in currentQ
      ? currentQ.correctValue
      : currentQ.correctAnswer
    : '';

  // Per-Question Timer: Starts at 0 when question opens, runs until answer is selected
  useEffect(() => {
    if (!isOpen || !currentQ) return;

    // If this question was already answered, restore its recorded time and pause
    if (recordedStats[currentQ.id]) {
      setSeconds(recordedStats[currentQ.id].timeSeconds);
      setIsTimerRunning(false);
      return;
    }

    // Otherwise start fresh from 0 for this question
    setSeconds(0);
    setIsTimerRunning(true);

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, isOpen, currentQ?.id]);

  const currentRecord = currentQ ? recordedStats[currentQ.id] : undefined;
  const isAnswered = Boolean(currentRecord);

  useEffect(() => {
    setTentativeOption(currentRecord?.selectedOption || null);
  }, [currentIndex, currentQ?.id, currentRecord?.selectedOption]);

  if (!isOpen) return null;

  if (!currentQ || questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-xs animate-fade-in font-sans">
        <div className="relative w-full max-w-lg bg-surface border border-line rounded-[var(--radius-lg)] p-8 shadow-notebook">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <EmptyState
            headline="More questions coming soon"
            description={`We are currently authoring and verifying original practice questions for ${topicTitle}. Check back soon!`}
            actionLabel="Close"
            onAction={onClose}
          />
        </div>
      </div>
    );
  }

  // Handle clicking an option (tentative selection)
  const handleOptionClick = (letter: string) => {
    if (isAnswered) return;
    setTentativeOption(letter);
  };

  // Confirm selected option ("Check" button clicked)
  const handleConfirmAnswer = () => {
    if (isAnswered || !tentativeOption) return;

    setIsTimerRunning(false); // Stop timer immediately

    const isCorrect = answersMatch(tentativeOption, currentQ.correctAnswer);
    setRecordedStats((prev) => ({
      ...prev,
      [currentQ.id]: {
        timeSeconds: seconds,
        selectedOption: tentativeOption,
        isCorrect,
      },
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleResetCurrent = () => {
    setRecordedStats((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });
    setSeconds(0);
    setIsTimerRunning(true);
  };

  // Format mm:ss
  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Pacing insight based on time
  const getPacingLabel = (sec: number) => {
    if (sec <= 45) return { label: 'Optimal Speed', color: 'text-moss' };
    if (sec <= 75) return { label: 'Standard Pacing', color: 'text-cobalt' };
    return { label: 'High Time Spent', color: 'text-mustard' };
  };

  // Summary statistics across answered questions
  const totalAnswered = Object.keys(recordedStats).length;
  const correctCount = Object.values(recordedStats).filter((s) => s.isCorrect).length;
  const totalTimeSpent = Object.values(recordedStats).reduce((acc, s) => acc + s.timeSeconds, 0);
  const avgTimePerQuestion = totalAnswered > 0 ? Math.round(totalTimeSpent / totalAnswered) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/60 backdrop-blur-xs animate-fade-in select-none">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-surface border border-line rounded-2xl shadow-notebook overflow-hidden flex flex-col max-h-[92vh] my-auto text-ink font-sans">
        {/* ── Top Header Bar ── */}
        <div className="px-5 py-4 border-b border-line bg-paper-2 flex items-center justify-between gap-4 select-none">
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-subtle text-accent border border-accent/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent">
                  {domainTitle}
                </span>
                <span className="text-line">·</span>
                <span className="text-xs font-mono font-bold text-ink truncate max-w-[200px] sm:max-w-xs">
                  {topicTitle}
                </span>
              </div>
              <p className="text-[11px] font-mono text-ink-2">
                Question {currentIndex + 1} of {questions.length}
              </p>
            </div>
          </div>

          {/* Center / Right: Live Question Timer & Close */}
          <div className="flex items-center gap-3">
            {/* Real-time Question Timer */}
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono transition-all ${
                !isTimerRunning
                  ? 'bg-paper-2 border-line text-ink-2'
                  : 'bg-accent-subtle border-accent/30 text-accent shadow-xs'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm font-extrabold tracking-wider">{formatTime(seconds)}</span>
              {!isTimerRunning ? (
                <span className="text-[10px] uppercase font-bold text-ink-muted">Stopped</span>
              ) : (
                <span className="text-[10px] uppercase font-bold text-accent">Active</span>
              )}
            </div>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-ink-2 hover:text-berry hover:bg-paper transition-colors cursor-pointer"
              title="Close Practice Session"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Main Content Area (Scrollable) ── */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 select-text">
          {/* Metadata Row: Difficulty & Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase ${
                  currentQ.difficulty === 'Hard'
                    ? 'bg-berry/15 text-berry border border-berry/30'
                    : currentQ.difficulty === 'Medium'
                    ? 'bg-mustard/15 text-mustard border border-mustard/30'
                    : 'bg-moss/15 text-moss border border-moss/30'
                }`}
              >
                {currentQ.difficulty}
              </span>

              <span className="text-xs font-mono text-ink-2">
                Official Sourced Prompt
              </span>
            </div>

            {/* If answered, show recorded time summary */}
            {currentRecord && (
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-ink-2">
                  Question Time:{' '}
                  <strong className="text-ink font-bold">
                    {currentRecord.timeSeconds}s
                  </strong>
                </span>
                <span>·</span>
                <span className={`font-bold ${getPacingLabel(currentRecord.timeSeconds).color}`}>
                  {getPacingLabel(currentRecord.timeSeconds).label}
                </span>
                <button
                  onClick={handleResetCurrent}
                  title="Try this question again"
                  className="ml-2 text-ink-muted hover:text-ink p-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Dual Passage Split-Screen Box (Text 1 vs Text 2) - Only if passages exist */}
          {currentQ.text1 && currentQ.text2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Text 1 Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-paper-2 border border-line space-y-2 text-ink">
                <span className="px-2 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20 text-[10px] font-mono font-bold uppercase tracking-wider inline-block">
                  Text 1
                </span>
                <p className="text-sm sm:text-[14.5px] text-ink leading-relaxed font-serif">
                  {currentQ.text1}
                </p>
              </div>

              {/* Text 2 Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-paper-2 border border-line space-y-2 text-ink">
                <span className="px-2 py-0.5 rounded bg-accent-subtle text-accent border border-accent/20 text-[10px] font-mono font-bold uppercase tracking-wider inline-block">
                  Text 2
                </span>
                <p className="text-sm sm:text-[14.5px] text-ink leading-relaxed font-serif">
                  {currentQ.text2}
                </p>
              </div>
            </div>
          )}

          {/* Prompt Question with Math & System Rendering */}
          <MathQuestionDisplay prompt={currentQ.prompt} isMath={isMathQuestion} />

          {/* Student-Produced Response (Grid-in) when question has no choices */}
          {currentQ.options.length === 0 && (
            <StudentProducedResponseInput
              value={tentativeOption || ''}
              onChange={(val) => setTentativeOption(val)}
              onSubmit={handleConfirmAnswer}
              isAnswered={isAnswered}
              isCorrect={currentRecord?.isCorrect}
              correctAnswerDisplay={correctAnswerDisplay}
            />
          )}

          {/* Multiple Choice Options (A, B, C, D) */}
          {currentQ.options.length > 0 && (
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => {
              const isSubmitted = isAnswered && currentRecord?.selectedOption === opt.letter;
              const isTentativelySelected = !isAnswered && tentativeOption === opt.letter;
              const isCorrectOption = opt.letter.toUpperCase() === currentQ.correctAnswer.toUpperCase();

              let optClass =
                'border-line bg-surface hover:border-line-strong hover:bg-paper-2 text-ink shadow-xs';

              if (isAnswered) {
                if (isCorrectOption) {
                  optClass =
                    'border-moss bg-moss/10 text-ink ring-1 ring-moss font-semibold';
                } else if (isSubmitted && !isCorrectOption) {
                  optClass =
                    'border-berry bg-berry/10 text-ink ring-1 ring-berry font-semibold';
                } else {
                  optClass =
                    'border-line opacity-50 text-ink-muted';
                }
              } else if (isTentativelySelected) {
                optClass =
                  'border-accent bg-accent-subtle text-ink ring-1 ring-accent font-semibold shadow-xs';
              }

              return (
                <div
                  key={opt.letter}
                  onClick={() => handleOptionClick(opt.letter)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-sans flex items-start justify-between gap-3 transition-all cursor-pointer ${optClass}`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 ${
                        isTentativelySelected
                          ? 'bg-accent text-white border-accent'
                          : 'bg-paper-2 border-line text-ink-2'
                      }`}
                    >
                      {opt.letter}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                    {isTentativelySelected && !isAnswered && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleConfirmAnswer();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Confirm and check answer"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Check</span>
                      </button>
                    )}

                    {isAnswered && (
                      <>
                        {isCorrectOption && (
                          <CheckCircle2 className="w-5 h-5 text-moss" />
                        )}
                        {isSubmitted && !isCorrectOption && (
                          <XCircle className="w-5 h-5 text-berry" />
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          )}

          {/* ── Official Explanation (Revealed automatically once answer is chosen) ── */}
          {isAnswered && (
            <div className="p-5 rounded-xl bg-paper-2 border border-line space-y-2 animate-fade-in text-ink">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono font-bold text-accent text-xs uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>Solution & Explanation</span>
                </div>
                <span
                  className={`text-xs font-mono font-bold ${
                    currentRecord?.isCorrect ? 'text-moss' : 'text-berry'
                  }`}
                >
                  {currentRecord?.isCorrect ? '✓ Correct Choice' : '✗ Incorrect Choice'}
                </span>
              </div>

              {isMathQuestion ? (
                <MathExplanationDisplay
                  explanation={currentQ.explanation}
                  correctAnswerDisplay={correctAnswerDisplay}
                />
              ) : (
                <div className="text-xs sm:text-sm text-ink font-sans leading-relaxed whitespace-pre-line">
                  {currentQ.explanation}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-ink-2 border-t border-line">
                <span>
                  Correct Answer:{' '}
                  <strong className="font-extrabold text-ink">
                    {correctAnswerDisplay}
                  </strong>
                </span>
                <span>
                  Time Logged: <strong className="font-extrabold text-ink">{currentRecord?.timeSeconds ?? 0} seconds</strong>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer Navigation & Live Session Telemetry ── */}
        <div className="px-5 py-4 border-t border-line bg-paper-2 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          {/* Practice Session Stats */}
          <div className="flex items-center gap-4 text-xs font-mono text-ink-2">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-accent" />
              Accuracy:{' '}
              <strong className="text-ink">
                {totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0}%
              </strong>{' '}
              ({correctCount}/{totalAnswered})
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Avg Time: <strong className="text-ink">{avgTimePerQuestion}s</strong>
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-3.5 py-2 rounded-xl border border-line text-xs font-mono font-bold text-ink hover:bg-surface disabled:opacity-40 transition-all flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all disabled:opacity-40 cursor-pointer"
            >
              <span>Next Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
