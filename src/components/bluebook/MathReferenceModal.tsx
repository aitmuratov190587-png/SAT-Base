import { X } from 'lucide-react';

interface MathReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MathReferenceModal({ isOpen, onClose }: MathReferenceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs select-none">
      <div className="bg-surface text-ink rounded-2xl shadow-notebook max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-line">
        {/* Header */}
        <div className="bg-paper-2 text-ink border-b border-line px-6 py-4 flex items-center justify-between">
          <h2 className="text-base font-semibold tracking-wide flex items-center gap-2 font-display">
            <span>📐</span> College Board SAT Reference Sheet
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-paper text-ink-2 hover:text-berry transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-ink text-sm select-text">
          {/* 2D Formulas */}
          <div>
            <h3 className="text-xs font-bold text-ink-2 uppercase tracking-wider mb-3">
              Area & Circumference
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Circle Area</p>
                <p className="text-base font-mono font-bold text-ink mt-1">A = πr²</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Circumference</p>
                <p className="text-base font-mono font-bold text-ink mt-1">C = 2πr</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Rectangle Area</p>
                <p className="text-base font-mono font-bold text-ink mt-1">A = lw</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Triangle Area</p>
                <p className="text-base font-mono font-bold text-ink mt-1">A = ½bh</p>
              </div>
            </div>
          </div>

          {/* Right Triangles */}
          <div>
            <h3 className="text-xs font-bold text-ink-2 uppercase tracking-wider mb-3">
              Right Triangles & Trigonometry
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-paper-2 p-3 rounded-xl border border-line">
                <p className="font-semibold text-ink-2 text-xs">Pythagorean Theorem</p>
                <p className="text-base font-mono font-bold text-ink mt-1">c² = a² + b²</p>
                <p className="text-xs text-ink-muted mt-1">where c is hypotenuse</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line">
                <p className="font-semibold text-ink-2 text-xs">Special Right Triangle</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">30° - 60° - 90°</p>
                <p className="text-xs text-ink-muted mt-1">Ratio: x : x√3 : 2x</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line">
                <p className="font-semibold text-ink-2 text-xs">Special Right Triangle</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">45° - 45° - 90°</p>
                <p className="text-xs text-ink-muted mt-1">Ratio: s : s : s√2</p>
              </div>
            </div>
          </div>

          {/* 3D Volumes */}
          <div>
            <h3 className="text-xs font-bold text-ink-2 uppercase tracking-wider mb-3">
              Volume Formulas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Rectangular Prism</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">V = lwh</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Right Cylinder</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">V = πr²h</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Sphere</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">V = ⁴⁄₃πr³</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Right Cone</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">V = ⅓πr²h</p>
              </div>
              <div className="bg-paper-2 p-3 rounded-xl border border-line text-center">
                <p className="font-semibold text-ink-2 text-xs">Pyramid</p>
                <p className="text-sm font-mono font-bold text-ink mt-1">V = ⅓lwh</p>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="bg-paper-2 border border-line rounded-xl p-4 text-xs text-ink space-y-1.5">
            <p>• The number of degrees of arc in a circle is <strong>360°</strong>.</p>
            <p>• The number of radians of arc in a circle is <strong>2π</strong>.</p>
            <p>• The sum of the measures in degrees of the angles of a triangle is <strong>180°</strong>.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-paper-2 px-6 py-3 flex justify-end border-t border-line">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-ink hover:bg-ink/90 text-paper rounded-lg text-sm font-medium transition-colors"
          >
            Close Reference Sheet
          </button>
        </div>
      </div>
    </div>
  );
}
