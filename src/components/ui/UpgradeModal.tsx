import { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import PaymentModal from './PaymentModal';

export interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
  description?: string;
  highlightPlan?: 'pro' | 'ultra_pro' | string;
}

export default function UpgradeModal({
  isOpen,
  onClose,
  featureName = 'This feature',
  description,
  highlightPlan = 'pro',
}: UpgradeModalProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  const isUltra = highlightPlan === 'ultra_pro';
  const planKey = isUltra ? 'ultra_pro' : 'pro';
  const planTitle = isUltra ? 'Ultra Pro Subscription' : 'Pro Subscription';
  const priceUzs = isUltra ? '200 000 so‘m' : '50 000 so‘m';
  const priceUsd = isUltra ? '$16' : '$4';
  const planSubtitle = description || (isUltra
    ? 'Unlock 100 daily AI questions, screenshot analysis, and personalized weekly diagnostics.'
    : 'Unlock all 30 full-length Bluebook mock tests, 50 daily AI hints with image uploads, and deep score analytics.');

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-xs animate-fade-in font-sans">
        <div className="relative w-full max-w-md bg-surface border border-line rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-notebook">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Mascot + Sparkle Badge */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full bg-accent/10 blur-xl pointer-events-none" />
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo Mascot"
                className="relative z-10 w-20 h-20 object-contain animate-float select-none pointer-events-none"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>SATBase Pro</span>
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {featureName} requires {isUltra ? 'Ultra Pro' : 'Pro'}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
              {planSubtitle}
            </p>

            {/* Pricing Highlight Pill */}
            <div className="mt-4 w-full p-4 rounded-xl bg-paper-2 border border-line flex items-center justify-between">
              <div className="text-left">
                <span className="text-xs font-semibold text-ink-2">{planTitle}</span>
                <div className="text-lg font-bold text-ink font-display flex items-baseline gap-1.5">
                  <span>{priceUzs}</span>
                  <span className="text-xs text-ink-muted font-normal">({priceUsd}) / oy</span>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-moss/10 text-moss font-bold">
                {isUltra ? 'Power AI' : 'Sweet Spot'}
              </span>
            </div>

            {/* Value Checklist */}
            <div className="mt-4 w-full space-y-2 text-left text-xs text-ink-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-moss shrink-0" />
                <span>All 30 Digital SAT Mock Tests unlocked</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-moss shrink-0" />
                <span>{isUltra ? '100' : '50'} Cosmo AI hints/day + Screenshot question analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-moss shrink-0" />
                <span>Pacing telemetry & automated study planner</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-6 w-full flex flex-col gap-2.5">
              <Button
                variant="accent"
                size="md"
                onClick={() => setShowCheckout(true)}
                className="w-full font-bold justify-center shadow-xs"
              >
                <Zap className="w-4 h-4 mr-1.5" />
                <span>Upgrade Now ({priceUzs})</span>
              </Button>

              <Link to="/pricing" onClick={onClose} className="w-full">
                <Button variant="secondary" size="md" className="w-full font-semibold justify-center">
                  <span>View All Plans &amp; FAQ</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>

              <button
                onClick={onClose}
                className="text-xs text-ink-muted hover:text-ink transition-colors py-1 cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <PaymentModal
          isOpen={showCheckout}
          onClose={() => {
            setShowCheckout(false);
            onClose();
          }}
          plan={planKey}
          initialCurrency="UZS"
        />
      )}
    </>
  );
}
