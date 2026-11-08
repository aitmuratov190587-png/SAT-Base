import { Bookmark, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface QuestionReviewItem {
  number: number;
  isAnswered: boolean;
  isFlagged: boolean;
}

interface ModuleReviewScreenProps {
  sectionName: string;
  moduleNumber: 1 | 2;
  items: QuestionReviewItem[];
  onSelectQuestion: (index: number) => void;
  onReturnToTest: () => void;
  onSubmitModule: () => void;
  isLastModule: boolean;
}

export default function ModuleReviewScreen({
  sectionName,
  moduleNumber,
  items,
  onSelectQuestion,
  onReturnToTest,
  onSubmitModule,
  isLastModule,
}: ModuleReviewScreenProps) {
  const answeredCount = items.filter((i) => i.isAnswered).length;
  const unansweredCount = items.length - answeredCount;
  const flaggedCount = items.filter((i) => i.isFlagged).length;

  return (
    <div className="min-h-[calc(100vh-3.5rem-4rem)] bg-paper p-6 sm:p-10 max-w-4xl mx-auto flex flex-col justify-between text-ink font-sans">
      <div>
        {/* Title */}
        <div className="mb-6">
          <p className="text-xs font-sans font-medium text-ink-2 mb-1">
            Module {moduleNumber} review
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink font-display">
            Check your work
          </h1>
          <p className="text-xs sm:text-sm text-ink-2 mt-1">
            {sectionName}. On test day, you can review questions in this module as long as time remains. Once you submit this module, you cannot return to it.
          </p>
        </div>

        {/* Status Metrics Bar */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-surface rounded-xl border border-line mb-8 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-moss/10 text-moss flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-ink-2 font-medium">Answered</p>
              <p className="text-base font-bold font-mono text-ink">
                {answeredCount} of {items.length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-mustard/15 text-mustard flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-ink-2 font-medium">For review</p>
              <p className="text-base font-bold font-mono text-ink">{flaggedCount}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-berry/10 text-berry flex items-center justify-center">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-ink-2 font-medium">Unanswered</p>
              <p className="text-base font-bold font-mono text-ink">{unansweredCount}</p>
            </div>
          </div>
        </div>

        {/* Question Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {items.map((item, idx) => (
            <button
              key={item.number}
              onClick={() => onSelectQuestion(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all hover:border-ink/40 relative cursor-pointer ${
                item.isFlagged
                  ? 'border-mustard bg-mustard/5'
                  : item.isAnswered
                  ? 'border-line bg-surface'
                  : 'border-dashed border-berry/40 bg-berry/5'
              }`}
            >
              {/* Flag Icon */}
              {item.isFlagged && (
                <div className="absolute top-2.5 right-2.5 text-mustard">
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                </div>
              )}

              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-6 h-6 rounded bg-paper-2 border border-line flex items-center justify-center font-mono font-bold text-xs text-ink">
                  {item.number}
                </span>
                <span className="text-[11px] font-sans text-ink-2">Question {item.number}</span>
              </div>

              <div className="text-xs">
                {item.isAnswered ? (
                  <span className="text-moss font-medium">Answered</span>
                ) : (
                  <span className="text-berry font-medium">Not answered</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-8 border-t border-line flex items-center justify-between mt-8">
        <button
          onClick={onReturnToTest}
          className="px-4 py-2 rounded-lg bg-paper-2 hover:bg-surface text-ink text-xs sm:text-sm font-semibold border border-line transition-all flex items-center gap-1.5 font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to questions</span>
        </button>

        <Button
          variant="accent"
          size="md"
          onClick={onSubmitModule}
          className="flex items-center gap-2 font-sans"
        >
          <span>{isLastModule ? 'Submit test' : 'Next section'}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
