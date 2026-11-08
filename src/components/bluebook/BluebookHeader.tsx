import { useState } from 'react';
import {
  Clock,
  Eye,
  EyeOff,
  Bookmark,
  Calculator,
  BookOpen,
  ChevronDown,
  Highlighter,
  MoreHorizontal,
  X,
  Info,
} from 'lucide-react';

interface BluebookHeaderProps {
  sectionTitle: string;
  secondsRemaining: number;
  timerVisible: boolean;
  onToggleTimer: () => void;
  isMarkedForReview?: boolean;
  onToggleMarkForReview?: () => void;
  onOpenCalculator?: () => void;
  onOpenReference?: () => void;
  isMathSection: boolean;
  // Focus Mode Props (formerly Hardcore Mode)
  isHardcoreMode?: boolean;
  onToggleHardcoreMode?: () => void;
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
  isPracticeMode?: boolean;
  onToggleHighlight?: () => void;
  isHighlightActive?: boolean;
}

export default function BluebookHeader({
  sectionTitle,
  secondsRemaining,
  timerVisible,
  onToggleTimer,
  isMarkedForReview = false,
  onToggleMarkForReview,
  onOpenCalculator,
  onOpenReference,
  isMathSection,
  isHardcoreMode = false,
  onToggleHardcoreMode,
  isFocusMode = false,
  onToggleFocusMode,
  isPracticeMode: _isPracticeMode = false,
  onToggleHighlight,
  isHighlightActive = false,
}: BluebookHeaderProps) {
  const [showDirections, setShowDirections] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Support both isFocusMode and legacy isHardcoreMode prop
  const focusModeActive = isFocusMode || isHardcoreMode;
  const toggleFocus = onToggleFocusMode || onToggleHardcoreMode;

  const minutes = Math.floor(Math.max(0, secondsRemaining) / 60);
  const seconds = Math.max(0, secondsRemaining) % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Last 5 minutes (300s) turns softly into berry, strictly no flashing/pulse
  const isLast5Minutes = secondsRemaining <= 300 && secondsRemaining > 0;

  return (
    <header className="relative bg-surface text-ink border-b border-line select-none transition-colors duration-200 z-30">
      {/* Main Top Bar */}
      <div className="h-13 px-4 sm:px-6 flex items-center justify-between gap-2">
        {/* Left: Section name in Instrument Sans (font-sans) + Directions dropdown */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <h1 className="font-sans font-semibold text-xs sm:text-sm text-ink truncate">
              {sectionTitle}
            </h1>
          </div>

          {/* Directions Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowDirections(!showDirections)}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs text-ink-2 hover:text-ink hover:bg-paper-2 border border-transparent hover:border-line transition-colors"
              title="View test directions"
              aria-expanded={showDirections}
            >
              <span className="font-sans font-medium">Directions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDirections ? 'rotate-180' : ''}`} />
            </button>

            {/* Directions Popover */}
            {showDirections && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowDirections(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-[340px] sm:w-[440px] p-4 bg-surface border border-line rounded-xl shadow-notebook z-50 text-ink animate-slide-up">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-line">
                    <div className="flex items-center gap-1.5 text-xs font-semibold font-sans text-ink">
                      <Info className="w-4 h-4 text-accent" />
                      <span>{isMathSection ? 'Math Directions' : 'Reading and Writing Directions'}</span>
                    </div>
                    <button
                      onClick={() => setShowDirections(false)}
                      className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-xs text-ink-2 leading-relaxed space-y-2">
                    {isMathSection ? (
                      <>
                        <p>
                          The questions in this section address key math skills. Use of a calculator is permitted for all questions.
                        </p>
                        <p>
                          A reference sheet and Desmos graphing calculator are available from the top bar. All scratch calculations can be done using standard notebook work.
                        </p>
                        <p>
                          Unless a question indicates otherwise, all real numbers apply and figures are drawn to scale unless noted.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          The questions in this section address important reading and writing skills. Each question includes one or more passages, tables, or graphs.
                        </p>
                        <p>
                          Read each passage and question carefully, then choose the single best answer based on the stimulus.
                        </p>
                        <p>
                          All questions have four answer choices (A, B, C, D) with only one correct response.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Center: Timer in JetBrains Mono with Hide toggle */}
        {!focusModeActive && (
          <div className="flex items-center gap-2">
            {timerVisible ? (
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs sm:text-sm font-mono font-semibold transition-colors ${
                  isLast5Minutes
                    ? 'bg-berry/10 border-berry/30 text-berry'
                    : 'bg-paper-2 border-line text-ink'
                }`}
                title={isLast5Minutes ? 'Less than 5 minutes remaining' : 'Time remaining'}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{timeFormatted}</span>
              </div>
            ) : null}

            <button
              onClick={onToggleTimer}
              className="text-xs text-ink-2 hover:text-ink px-2 py-1 rounded hover:bg-paper-2 transition-colors flex items-center gap-1 font-sans"
              title={timerVisible ? 'Hide timer' : 'Show timer'}
            >
              {timerVisible ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Hide</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono font-medium">Show timer</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Right Tools: Highlight, Calculator (Math only), Reference (Math only), More / Focus mode */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Highlight toggle */}
          {onToggleHighlight && (
            <button
              onClick={onToggleHighlight}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isHighlightActive
                  ? 'bg-accent-subtle border-accent text-accent'
                  : 'bg-paper-2 hover:bg-surface text-ink border-line'
              }`}
              title="Text Highlighter"
            >
              <Highlighter className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-sans">Highlight</span>
            </button>
          )}

          {/* Reference Sheet (Math only) */}
          {isMathSection && onOpenReference && (
            <button
              onClick={onOpenReference}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-paper-2 hover:bg-surface text-ink text-xs font-medium border border-line transition-colors"
              title="SAT Math Reference Sheet"
            >
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline font-sans">Reference</span>
            </button>
          )}

          {/* Calculator (Math only) */}
          {isMathSection && onOpenCalculator && (
            <button
              onClick={onOpenCalculator}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-paper-2 hover:bg-surface text-ink text-xs font-medium border border-line transition-colors"
              title="Graphing Calculator (Desmos)"
            >
              <Calculator className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline font-sans">Calculator</span>
            </button>
          )}

          {/* Mark for Review (Only in header if provided) */}
          {onToggleMarkForReview && (
            <button
              onClick={onToggleMarkForReview}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isMarkedForReview
                  ? 'bg-mustard/15 border-mustard text-mustard font-semibold'
                  : 'bg-paper-2 border-line text-ink hover:bg-surface'
              }`}
              title="Mark question for later review (Press F)"
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  isMarkedForReview ? 'fill-mustard text-mustard' : 'text-ink-2'
                }`}
              />
              <span className="hidden sm:inline font-sans">
                {isMarkedForReview ? 'For review' : 'Mark for review'}
              </span>
            </button>
          )}

          {/* More Menu / Focus mode trigger */}
          <div className="relative">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className={`p-1.5 rounded-lg border text-xs transition-colors ${
                focusModeActive
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-paper-2 hover:bg-surface text-ink border-line'
              }`}
              title="More options and Focus mode"
              aria-label="More options"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {showMoreMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowMoreMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-surface border border-line rounded-xl shadow-notebook z-50 text-ink animate-slide-up space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-line">
                    <span className="font-sans font-semibold text-xs text-ink">Options</span>
                    <button
                      onClick={() => setShowMoreMenu(false)}
                      className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper-2"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Focus mode switch (clean, calm, no red gaming HUD) */}
                  {toggleFocus && (
                    <div className="flex items-center justify-between py-1">
                      <div className="pr-2">
                        <p className="text-xs font-medium text-ink font-sans">Focus mode</p>
                        <p className="text-[11px] text-ink-2">Hides timer and quietens distractions</p>
                      </div>
                      <button
                        role="switch"
                        aria-checked={focusModeActive}
                        onClick={() => {
                          toggleFocus();
                          setShowMoreMenu(false);
                        }}
                        className={`w-10 h-5.5 rounded-full p-0.5 transition-colors focus:outline-none flex items-center ${
                          focusModeActive ? 'bg-accent justify-end' : 'bg-paper-2 border border-line justify-start'
                        }`}
                        title="Toggle focus mode"
                      >
                        <div
                          className={`w-4.5 h-4.5 rounded-full transition-all ${
                            focusModeActive ? 'bg-white shadow-xs' : 'bg-ink-2'
                          }`}
                        />
                      </button>
                    </div>
                  )}

                  <div className="pt-2 border-t border-line text-[11px] text-ink-2">
                    <p className="font-medium text-ink mb-1">Keyboard shortcuts</p>
                    <p><kbd className="font-mono px-1 py-0.5 rounded bg-paper-2 border border-line">A</kbd>–<kbd className="font-mono px-1 py-0.5 rounded bg-paper-2 border border-line">D</kbd> Select option</p>
                    <p className="mt-0.5"><kbd className="font-mono px-1 py-0.5 rounded bg-paper-2 border border-line">←</kbd> <kbd className="font-mono px-1 py-0.5 rounded bg-paper-2 border border-line">→</kbd> Navigate questions</p>
                    <p className="mt-0.5"><kbd className="font-mono px-1 py-0.5 rounded bg-paper-2 border border-line">F</kbd> Mark for review</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
