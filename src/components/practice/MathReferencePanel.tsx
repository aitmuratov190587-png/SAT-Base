import { Calculator, Sparkles, BookOpen } from 'lucide-react';

interface MathReferencePanelProps {
  isAdvancedMath?: boolean;
  topicName?: string;
}

export default function MathReferencePanel({
  isAdvancedMath = false,
  topicName,
}: MathReferencePanelProps) {
  return (
    <div className="space-y-4 text-xs text-ink leading-relaxed overflow-y-auto pr-1 font-sans">
      {topicName && (
        <div className="text-[10px] font-mono uppercase tracking-wider text-ink-2 font-semibold">
          {topicName}
        </div>
      )}
      {isAdvancedMath ? (
        <>
          {/* ── Advanced Math: Quadratic & Parabola Rules ── */}
          <div className="p-3.5 bg-paper-2 border border-line rounded-xl space-y-2 text-ink">
            <div className="font-bold text-ink flex items-center gap-1.5 font-display">
              <Calculator className="w-4 h-4 text-accent" />
              <span>Quadratic & Nonlinear Equations</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Vertex Form:</strong>
                <code>y = a(x − h)² + k</code>
                <span className="block text-[10px] text-ink-2 font-sans">Vertex is (h, k)</span>
              </div>
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Quadratic Formula:</strong>
                <code>x = (−b ± √(b²−4ac)) / (2a)</code>
                <span className="block text-[10px] text-ink-2 font-sans">Roots of ax² + bx + c = 0</span>
              </div>
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Discriminant (b² − 4ac):</strong>
                <code>&gt; 0: 2 real roots</code>
                <code className="block">= 0: 1 root · &lt; 0: 0 roots</code>
              </div>
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Axis of Symmetry:</strong>
                <code>x = −b / (2a)</code>
                <span className="block text-[10px] text-ink-2 font-sans">x-coord of vertex</span>
              </div>
            </div>
          </div>

          {/* ── Exponent Laws & Factoring Identities ── */}
          <div className="p-3.5 bg-paper-2 border border-line rounded-xl space-y-2 text-ink">
            <div className="font-bold text-ink flex items-center gap-1.5 font-display">
              <BookOpen className="w-4 h-4 text-moss" />
              <span>Exponents & Factoring Identities</span>
            </div>
            <ul className="space-y-1.5 text-[11px] font-mono text-ink pl-2">
              <li>
                <span className="font-sans font-semibold text-ink">Product of Powers:</span>{' '}
                <code>xᵃ · xᵇ = xᵃ⁺ᵇ</code>
              </li>
              <li>
                <span className="font-sans font-semibold text-ink">Power of a Power:</span>{' '}
                <code>(xᵃ)ᵇ = xᵃᵇ</code>
              </li>
              <li>
                <span className="font-sans font-semibold text-ink">Negative Exponent:</span>{' '}
                <code>x⁻ⁿ = 1 / xⁿ</code>
              </li>
              <li>
                <span className="font-sans font-semibold text-ink">Difference of Squares:</span>{' '}
                <code>a² − b² = (a − b)(a + b)</code>
              </li>
              <li>
                <span className="font-sans font-semibold text-ink">Perfect Square:</span>{' '}
                <code>(a ± b)² = a² ± 2ab + b²</code>
              </li>
            </ul>
          </div>

          {/* ── Exponential Models ── */}
          <div className="p-3.5 bg-paper-2 border border-line rounded-xl space-y-2 text-ink">
            <div className="font-bold text-ink font-display">Exponential Growth & Decay</div>
            <p className="text-[11px] text-ink-2">
              Form: <code>f(t) = a(1 + r)ᵗ</code>, where <strong className="font-mono text-ink">a</strong> is initial value,{' '}
              <strong className="font-mono text-ink">r</strong> is growth rate (positive) or decay rate (negative).
            </p>
          </div>
        </>
      ) : (
        <>
          {/* ── Algebra: Linear Equations & Models ── */}
          <div className="p-3.5 bg-paper-2 border border-line rounded-xl space-y-2 text-ink">
            <div className="font-bold text-ink flex items-center gap-1.5 font-display">
              <Calculator className="w-4 h-4 text-accent" />
              <span>Algebra & Linear Models Rules</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Slope-Intercept:</strong>
                <code>y = mx + b</code>
                <span className="block text-[10px] text-ink-2 font-sans">m = slope, b = y-int</span>
              </div>
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Slope Formula:</strong>
                <code>m = (y₂ − y₁) / (x₂ − x₁)</code>
              </div>
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Standard Form:</strong>
                <code>Ax + By = C</code>
              </div>
              <div className="bg-surface p-2 rounded border border-line">
                <strong className="text-accent font-sans block mb-0.5">Parallel Lines:</strong>
                <code>m₁ = m₂ (same slope)</code>
              </div>
            </div>
          </div>

          {/* ── Linear Systems Solutions ── */}
          <div className="p-3.5 bg-paper-2 border border-line rounded-xl space-y-2 text-ink">
            <div className="font-bold text-ink font-display">Linear Systems: Solutions Guide</div>
            <ul className="space-y-1.5 text-[11px] list-disc pl-4 text-ink-2">
              <li>
                <strong className="text-ink">One Unique Solution:</strong> Lines intersect at exactly one point (different slopes).
              </li>
              <li>
                <strong className="text-ink">No Solution:</strong> Lines are parallel (same slope, different y-intercepts).
              </li>
              <li>
                <strong className="text-ink">Infinitely Many Solutions:</strong> Equations represent the exact same line.
              </li>
            </ul>
          </div>
        </>
      )}

      {/* ── Digital SAT Desmos Strategy Callout ── */}
      <div className="p-3.5 bg-accent-subtle border border-accent/20 rounded-xl text-[11px] space-y-1.5 text-ink">
        <div className="font-bold text-accent flex items-center gap-1.5 font-display">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Desmos Calculator Strategy</span>
        </div>
        <p className="leading-relaxed text-ink-2">
          On the Digital SAT Math section, you have built-in access to Desmos. You can graph any equation or system directly to visually find intersections, x-intercepts, or vertex coordinates!
        </p>
      </div>
    </div>
  );
}
