import { CheckCircle2, AlertTriangle, Sparkles, Layers } from 'lucide-react';

interface MathExplanationDisplayProps {
  explanation: string;
  correctAnswerDisplay: string;
}

/**
 * Formats math explanations into structured pedagogical sections:
 * - Direct rationale & final answer
 * - Numbered step-by-step resolution
 * - Alternate / Desmos tips
 * - Trap answer breakdown
 */
export default function MathExplanationDisplay({
  explanation,
  correctAnswerDisplay,
}: MathExplanationDisplayProps) {
  if (!explanation) {
    return (
      <div className="text-ink-3 text-xs italic">
        Official explanation will be available shortly.
      </div>
    );
  }

  // Normalize formatting
  const clean = explanation.replace(/\r\n/g, '\n').replace(/—/g, '−').trim();

  // Check if explanation has numbered steps e.g. "1) ... 2) ... 3) ..."
  const hasNumberedSteps = /1\)\s*.*2\)\s*/s.test(clean);

  // Split into paragraphs
  const paragraphs = clean.split('\n\n').filter(Boolean);

  // Extract why other choices are incorrect (lines starting with "Choice A is incorrect" or "Choices A, B, and C")
  const incorrectParts: string[] = [];
  const primaryParts: string[] = [];
  const alternateParts: string[] = [];

  paragraphs.forEach((p) => {
    if (/^Choice [A-D] is incorrect|^Choices [A-D, and ]+ are incorrect/i.test(p.trim())) {
      incorrectParts.push(p.trim());
    } else if (/^Alternate approach:?/i.test(p.trim())) {
      alternateParts.push(p.trim());
    } else {
      primaryParts.push(p.trim());
    }
  });

  return (
    <div className="space-y-4 font-sans text-xs">
      {/* ── Highlighted Correct Answer Banner ── */}
      <div className="p-3.5 rounded-xl bg-moss/10 border border-moss/30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-moss shrink-0" />
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-moss font-bold block">
              Official Solution
            </span>
            <span className="text-xs font-mono font-bold text-ink">
              Correct Answer: {correctAnswerDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* ── Primary Walkthrough / Step-by-Step ── */}
      <div className="space-y-3">
        <h5 className="font-bold text-ink uppercase tracking-wider text-[11px] flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span>Step-by-Step Walkthrough</span>
        </h5>

        {hasNumberedSteps ? (
          <div className="space-y-2">
            {clean
              .split(/(?=[1-9]\)\s*)/)
              .filter((step) => /^[1-9]\)/.test(step.trim()))
              .map((step, idx) => {
                const match = step.trim().match(/^([1-9]\))\s*(.*)/s);
                const stepNum = match ? match[1] : `${idx + 1})`;
                const stepText = match ? match[2] : step;

                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-paper-2 border border-line flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="px-2 py-0.5 rounded-md bg-accent-subtle text-accent font-mono font-bold text-[11px] shrink-0 mt-0.5">
                      Step {stepNum.replace(')', '')}
                    </span>
                    <span className="text-ink font-mono sm:font-sans text-xs">
                      {stepText}
                    </span>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="space-y-2.5">
            {primaryParts.map((para, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-paper-2 border border-line text-ink leading-relaxed font-sans"
              >
                {para}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Alternate / Shortcut Approach (if present) ── */}
      {alternateParts.length > 0 && (
        <div className="p-3.5 rounded-xl bg-cobalt/10 border border-cobalt/30 space-y-1.5 text-ink">
          <div className="flex items-center gap-1.5 font-bold text-cobalt">
            <Sparkles className="w-3.5 h-3.5 text-cobalt" />
            <span>Alternate Strategy</span>
          </div>
          <div className="leading-relaxed font-sans text-xs">
            {alternateParts.join('\n\n')}
          </div>
        </div>
      )}

      {/* ── Why other choices are incorrect (Trap Analysis) ── */}
      {incorrectParts.length > 0 && (
        <div className="space-y-2 pt-1 border-t border-line">
          <h5 className="font-bold text-ink uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-mustard" />
            <span>Common Pitfalls & Trap Choices</span>
          </h5>
          <div className="p-3 rounded-xl bg-paper-2 border border-line text-ink-2 space-y-1.5 leading-relaxed text-xs">
            {incorrectParts.map((inc, i) => (
              <p key={i}>{inc}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
