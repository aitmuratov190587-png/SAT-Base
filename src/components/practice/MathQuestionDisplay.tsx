import { useState } from 'react';
import { Check, AlertCircle, CheckCircle2 } from 'lucide-react';

interface MathQuestionDisplayProps {
  prompt: string;
  isMath?: boolean;
  questionNumber?: number;
}

/**
 * Digital SAT Cosmo Notebook Question Display.
 * - Warm paper background, ink-dark typography
 * - Equations formatted in clear editorial callout box
 * - Math and typography follow Cosmo tokens
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function MathQuestionDisplay({ prompt, isMath: _isMath, questionNumber: _qn }: MathQuestionDisplayProps) {
  // Normalize whitespace and dash characters
  const cleanPrompt = prompt
    .replace(/\r\n/g, '\n')
    .replace(/[—–]/g, '−')
    .trim();

  const lines = cleanPrompt.split('\n').map((l) => l.trim()).filter(Boolean);

  /**
   * Detect if a line is a pure math expression (equation, formula, system line).
   * We deliberately stay CONSERVATIVE — only short lines with math operators
   * that do NOT start with an English sentence word.
   */
  const isEquationLine = (line: string): boolean => {
    if (line.length > 100) return false;
    // Skip obvious question sentences
    const isEnglish = /^(Which|What|If|Solve|Find|Consider|In the|A |The |For |How |Where |According|Given|Using|Let|Suppose|An |Each|When|On|At|By|From|To )/i.test(line);
    if (isEnglish) return false;

    const hasMathOp = /[=<>≤≥]/.test(line);
    const hasFunction = /^[fghFGH]\s*\([^)]+\)\s*=/.test(line);
    const isAlgExpr = /^[\d\s+\-*/^().a-z²³⁴⁵⁺⁻·√,=]+$/i.test(line)
      && /[+\-*/^²³√=]/.test(line)
      && !/[,]{2,}/.test(line);

    return hasMathOp || hasFunction || isAlgExpr;
  };

  // Partition lines: preamble → equations → trailing question
  const preambleLines: string[] = [];
  const equationLines: string[] = [];
  const trailingQuestionLines: string[] = [];
  let foundEquation = false;

  lines.forEach((line) => {
    if (isEquationLine(line)) {
      foundEquation = true;
      equationLines.push(line);
    } else if (!foundEquation) {
      preambleLines.push(line);
    } else {
      trailingQuestionLines.push(line);
    }
  });

  const hasEquations = equationLines.length > 0;
  const isSystem = equationLines.length >= 2;

  // If nothing was classified as an equation, show the whole prompt as one block
  const showFullPrompt = !hasEquations && preambleLines.length === lines.length;

  return (
    <div className="mb-6 space-y-5 select-text font-sans">
      {/* ── Preamble / intro text ── */}
      {preambleLines.length > 0 && !showFullPrompt && (
        <div className="text-[16px] leading-[1.7] text-ink font-normal">
          {preambleLines.map((line, idx) => (
            <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* ── Full-prompt fallback (single block of text with no equations) ── */}
      {showFullPrompt && (
        <div className="text-[16px] leading-[1.7] text-ink font-normal">
          {lines.map((line, idx) => (
            <p key={idx} className={idx > 0 ? 'mt-3' : ''}>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* ── Equation / System callout box ── */}
      {hasEquations && (
        <div
          className={`rounded-xl p-4 sm:p-5 bg-paper-2 border border-line ${
            isSystem ? 'border-l-4 border-l-accent' : ''
          }`}
        >
          <div
            className={`font-mono text-[15.5px] sm:text-[17px] font-semibold text-ink leading-[1.9] select-text ${
              isSystem ? 'space-y-1 pl-1' : 'text-center'
            }`}
          >
            {equationLines.map((eq, i) => (
              <div key={i}>{eq}</div>
            ))}
          </div>
        </div>
      )}

      {/* ── Trailing question stem ── */}
      {trailingQuestionLines.length > 0 && (
        <div className="text-[16px] sm:text-[17px] font-semibold leading-[1.65] text-ink pt-1">
          {trailingQuestionLines.map((line, idx) => (
            <p key={idx} className={idx > 0 ? 'mt-2' : ''}>
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Student-Produced Response (Grid-In) Input
// ─────────────────────────────────────────────────────────────────────────────

interface StudentProducedResponseInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  isAnswered: boolean;
  isCorrect?: boolean;
  correctAnswerDisplay: string;
}

/**
 * Digital SAT Student-Produced Response ("Grid-In") input.
 * Styled to match Cosmo Notebook.
 */
export function StudentProducedResponseInput({
  value,
  onChange,
  onSubmit,
  isAnswered,
  isCorrect,
  correctAnswerDisplay,
}: StudentProducedResponseInputProps) {
  const [inputVal, setInputVal] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isAnswered) return;
    setInputVal(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isAnswered && inputVal.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 mb-6 space-y-4 font-sans shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-paper-2 text-ink border border-line tracking-wide">
          Student-Produced Response
        </span>
        <span className="text-[11px] text-ink-2 font-mono">Digital SAT Grid-In</span>
      </div>

      {/* Instructions */}
      <p className="text-[13px] text-ink-2 leading-relaxed">
        Enter your numerical answer below. You may enter an integer, decimal, or fraction (for example:{' '}
        <strong className="text-ink font-mono">44</strong>,{' '}
        <strong className="text-ink font-mono">3.5</strong>, or{' '}
        <strong className="text-ink font-mono">7/2</strong>).
      </p>

      {!isAnswered ? (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputVal}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              disabled={isAnswered}
              aria-label="Enter your numerical answer"
              placeholder="e.g. 6 or 3/4"
              className="w-full rounded-xl border border-line bg-paper-2 px-4 py-3 text-base font-mono font-semibold text-ink placeholder:text-ink-muted outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>

          <button
            type="button"
            onClick={onSubmit}
            disabled={!inputVal.trim()}
            className="px-6 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0 shadow-xs"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>Check Answer</span>
          </button>
        </div>
      ) : (
        <div
          className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
            isCorrect
              ? 'bg-moss/10 border-moss/30 text-ink'
              : 'bg-berry/10 border-berry/30 text-ink'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                isCorrect ? 'bg-moss text-white' : 'bg-berry text-white'
              }`}
            >
              {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            </div>
            <div>
              <p className="text-sm font-bold">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              <p className="text-xs font-mono mt-0.5">
                Your answer: <strong>{value}</strong> · Correct: <strong>{correctAnswerDisplay}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
