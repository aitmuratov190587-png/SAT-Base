import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Check, Grid, Sparkles, BookOpen } from 'lucide-react';
import Button from '../ui/Button';

export interface QuestionStatus {
  number: number;
  isAnswered: boolean;
  isFlagged: boolean;
  isCurrent: boolean;
}

interface BluebookFooterProps {
  candidateName: string;
  currentQuestionIndex: number;
  totalQuestions: number;
  questionStatuses: QuestionStatus[];
  onSelectQuestion: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenReview: () => void;
  // Practice mode only props
  isPracticeMode?: boolean;
  onAskAiTutor?: () => void;
  onToggleExplanation?: () => void;
  isExplanationOpen?: boolean;
}

export default function BluebookFooter({
  candidateName,
  currentQuestionIndex,
  totalQuestions,
  questionStatuses,
  onSelectQuestion,
  onPrev,
  onNext,
  onOpenReview,
  isPracticeMode = false,
  onAskAiTutor,
  onToggleExplanation,
  isExplanationOpen = false,
}: BluebookFooterProps) {
  const [showNavigator, setShowNavigator] = useState(false);
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-15 bg-surface border-t border-line px-4 sm:px-6 flex items-center justify-between z-40 select-none text-ink transition-colors duration-200">
      {/* Left: Candidate info */}
      <div className="flex items-center gap-2 truncate max-w-[160px] sm:max-w-xs">
        <span className="font-sans text-xs text-ink font-medium truncate">
          {candidateName}
        </span>
      </div>

      {/* Center: Question Navigator trigger & grid popover */}
      <div className="relative">
        <button
          onClick={() => setShowNavigator(!showNavigator)}
          className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-paper-2 hover:bg-surface text-ink text-xs sm:text-sm font-semibold border border-line transition-all hover:border-ink/20 shadow-xs"
          title="Open question navigator grid"
          aria-expanded={showNavigator}
        >
          <Grid className="w-4 h-4 text-accent" />
          <span className="font-sans">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </button>

        {/* Navigator Popover */}
        {showNavigator && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowNavigator(false)}
            />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 bg-surface border border-line rounded-2xl p-4 sm:p-5 shadow-notebook w-[310px] sm:w-[380px] animate-slide-up text-ink font-sans">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-line">
                <span className="text-xs font-semibold text-ink">
                  Question navigator
                </span>
                <button
                  onClick={() => {
                    setShowNavigator(false);
                    onOpenReview();
                  }}
                  className="text-xs text-accent hover:underline font-medium transition-colors"
                >
                  Review screen →
                </button>
              </div>

              {/* Grid of questions */}
              <div className="grid grid-cols-5 gap-2 my-2 max-h-60 overflow-y-auto p-1">
                {questionStatuses.map((q, idx) => (
                  <button
                    key={q.number}
                    onClick={() => {
                      onSelectQuestion(idx);
                      setShowNavigator(false);
                    }}
                    className={`relative h-10 rounded-lg flex items-center justify-center font-mono font-medium text-xs sm:text-sm transition-all ${
                      q.isCurrent
                        ? 'bg-ink text-paper ring-2 ring-ink ring-offset-2 ring-offset-surface font-bold'
                        : q.isAnswered
                        ? 'bg-surface text-ink border border-line hover:border-ink/40'
                        : 'bg-paper-2 text-ink-2 border border-line/60 hover:bg-surface'
                    }`}
                  >
                    <span>{q.number}</span>

                    {/* Flag badge */}
                    {q.isFlagged && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-mustard text-ink rounded-full flex items-center justify-center shadow-xs">
                        <Bookmark className="w-2 h-2 fill-current" />
                      </span>
                    )}

                    {/* Answered check mark dot */}
                    {q.isAnswered && !q.isCurrent && (
                      <span className="absolute bottom-1 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-around pt-3 mt-3 border-t border-line text-[11px] text-ink-2 font-sans">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-ink" />
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-surface border border-line" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-paper-2 border border-line" />
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-mustard" />
                  <span>Flagged</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Practice-Only actions: Ask AI Tutor & Explanation (NEVER in mock mode) */}
        {isPracticeMode && (
          <div className="hidden md:flex items-center gap-2 mr-2 border-r border-line pr-2">
            {onAskAiTutor && (
              <button
                onClick={onAskAiTutor}
                className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-ink bg-paper-2 hover:bg-surface border border-line flex items-center gap-1.5 transition-colors"
                title="Ask AI Tutor for guidance"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Ask AI Tutor</span>
              </button>
            )}

            {onToggleExplanation && (
              <button
                onClick={onToggleExplanation}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                  isExplanationOpen
                    ? 'bg-accent text-white border-accent'
                    : 'bg-paper-2 hover:bg-surface text-ink border-line'
                }`}
                title="View full explanation"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explanation</span>
              </button>
            )}
          </div>
        )}

        {/* Back navigation */}
        <button
          onClick={onPrev}
          disabled={currentQuestionIndex === 0}
          className="px-3 sm:px-4 py-1.5 rounded-lg bg-paper-2 hover:bg-surface disabled:opacity-30 disabled:cursor-not-allowed text-ink text-xs sm:text-sm font-semibold border border-line transition-all flex items-center gap-1 font-sans"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Next / Review navigation */}
        {isLastQuestion ? (
          <Button
            variant="accent"
            size="sm"
            onClick={onOpenReview}
            className="flex items-center gap-1"
          >
            <span>Review</span>
            <Check className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant="accent"
            size="sm"
            onClick={onNext}
            className="flex items-center gap-1"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </footer>
  );
}
