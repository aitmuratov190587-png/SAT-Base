import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Check,
  Sparkles,
  Crown,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  Zap,
} from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import UpgradeModal from '../components/ui/UpgradeModal';
import ThemeToggle from '../components/ThemeToggle';

export default function PricingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { plan, isVip } = useAppContext();
  const [selectedHighlight, setSelectedHighlight] = useState<'pro' | 'ultra_pro'>('pro');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleBack = () => {
    // If user arrived from an internal app route, navigate back in history.
    // Otherwise, safely fall back to dashboard (if authenticated) or welcome landing.
    const hasInternalHistory =
      typeof window !== 'undefined' &&
      window.history.state &&
      typeof window.history.state.idx === 'number' &&
      window.history.state.idx > 0;

    if (hasInternalHistory) {
      navigate(-1);
    } else {
      navigate(user ? '/dashboard' : '/welcome');
    }
  };

  const handleSelectPlan = (targetPlan: 'pro' | 'ultra_pro') => {
    setSelectedHighlight(targetPlan);
    setShowUpgradeModal(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-200 font-sans selection:bg-accent/20">
      {/* Sticky Top Header Navigation */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
          {/* Left: Back button */}
          <div className="flex items-center">
            <button
              onClick={handleBack}
              aria-label="Go back"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface hover:bg-paper-2 text-xs font-semibold text-ink transition-colors shadow-2xs group"
            >
              <ArrowLeft className="w-4 h-4 text-ink-2 group-hover:-translate-x-0.5 transition-transform" />
              <span>{user ? 'Back to App' : 'Back to Home'}</span>
            </button>
          </div>

          {/* Right: Theme toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
        {/* VIP Creator Banner */}
        {isVip && (
          <div className="p-4 sm:p-5 rounded-2xl bg-mustard/15 border border-mustard/30 text-ink flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-mustard/20 border border-mustard/40 text-mustard flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5 text-mustard" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-ink">
                    VIP Creator Status Active
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-mustard text-paper text-[10px] font-mono font-bold uppercase tracking-wider">
                    Unlimited
                  </span>
                </div>
                <p className="text-xs text-ink-2 mt-0.5">
                  All 30 mock exams, unlimited Cosmo AI questions & screenshot uploads, and full analytics unlocked.
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate('/mock-tests')}
              className="shrink-0 self-start sm:self-auto"
            >
              Open Mock Tests
            </Button>
          </div>
        )}

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-2 border border-line text-xs font-medium text-ink-2">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Honest, transparent SAT prep</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Invest in your score, not test-prep markups.
          </h1>
          <p className="text-sm sm:text-base text-ink-2 max-w-2xl mx-auto leading-relaxed">
            Practice questions, spaced error drills, and full mock score reviews are free forever.
            Upgrade to Pro for all 30 full-length mock exams, pacing calibration, and extended Socratic AI guidance.
          </p>
        </div>

        {/* 3-Column Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
          {/* 1. FREE TIER */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface border border-line shadow-2xs hover:border-line-strong transition-all">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif font-bold text-xl text-ink">Free</h2>
                  {plan === 'free' && !isVip && (
                    <span className="px-2 py-0.5 rounded-full bg-paper-2 border border-line text-ink-2 text-[10px] font-mono uppercase font-semibold">
                      Current Plan
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-2 min-h-[32px]">
                  Essential practice and diagnostic baseline for every SAT student.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-4xl text-ink">$0</span>
                <span className="text-xs text-ink-muted">forever</span>
              </div>

              <div className="space-y-3 pt-2 border-t border-line text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Unlimited topic practice &amp; full question bank</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Error bank with automatic spaced repetition</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span><strong>6 authentic mock exams</strong> (Tests 1–6)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Full score breakdown &amp; question reviews (never locked)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Basic analytics (total accuracy &amp; score target)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-0.5" />
                  <span>Manual 14-day study plan</span>
                </div>
                <div className="flex items-start gap-2.5 text-ink-2">
                  <Check className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
                  <span>Cosmo Socratic AI: 15 questions / day</span>
                </div>
                <div className="flex items-start gap-2.5 text-ink-2">
                  <Check className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
                  <span>Screenshot question uploads: 2 / day</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              {plan === 'free' && !isVip ? (
                <Button variant="ghost" disabled className="w-full opacity-60">
                  Your Current Plan
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => navigate(user ? '/questions' : '/login')}
                >
                  {user ? 'Continue Practicing' : 'Start Free'}
                </Button>
              )}
            </div>
          </div>

          {/* 2. PRO TIER (HIGHLIGHTED) */}
          <div className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface border-2 border-accent shadow-notebook scale-[1.02] z-10">
            {/* Most popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-sans font-semibold tracking-wide shadow-xs uppercase">
              Most Popular
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-serif font-bold text-xl text-ink">Pro</h2>
                    <Zap className="w-4 h-4 text-accent fill-accent" />
                  </div>
                  {plan === 'pro' && !isVip && (
                    <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-mono uppercase font-semibold">
                      Current Plan
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-2 min-h-[32px]">
                  Everything needed to reach 1400+ with complete simulation and pacing mastery.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-4xl text-ink">$5</span>
                <span className="text-xs text-ink-muted">/ month</span>
              </div>

              <div className="space-y-3 pt-2 border-t border-line text-xs">
                <div className="flex items-start gap-2.5 font-medium text-ink">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>All 30 authentic mock exams</strong> unlocked</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Full pacing analytics (tempo vs 71s/95s targets)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Score progression trend line &amp; goal projection</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>28-day consistency calendar heatmap</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Algorithmic Auto-Plan schedule generator</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Cosmo Socratic AI: <strong>50 questions / day</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Screenshot question uploads: <strong>15 / day</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Cosmo AI diagnostic insights: 10 / day</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              {plan === 'pro' && !isVip ? (
                <Button variant="ghost" disabled className="w-full opacity-60">
                  Your Current Plan
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="w-full shadow-md"
                  onClick={() => handleSelectPlan('pro')}
                >
                  Upgrade to Pro ($5/mo)
                </Button>
              )}
            </div>
          </div>

          {/* 3. ULTRA PRO TIER */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-surface border border-line shadow-2xs hover:border-line-strong transition-all">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-serif font-bold text-xl text-ink">Ultra Pro</h2>
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  {plan === 'ultra_pro' && !isVip && (
                    <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-mono uppercase font-semibold">
                      Current Plan
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-2 min-h-[32px]">
                  Intensive daily preparation with power AI tutoring and personalized coaching.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-4xl text-ink">$20</span>
                <span className="text-xs text-ink-muted">/ month</span>
              </div>

              <div className="space-y-3 pt-2 border-t border-line text-xs">
                <div className="flex items-start gap-2.5 font-medium text-ink">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Everything in Pro included</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Cosmo Socratic AI: <strong>100 questions / day</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Screenshot question uploads: <strong>100 / day</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Cosmo AI diagnostic insights: 20 / day</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Weekly comprehensive progress breakdown</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Priority AI tutor queue &amp; faster responses</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              {plan === 'ultra_pro' && !isVip ? (
                <Button variant="ghost" disabled className="w-full opacity-60">
                  Your Current Plan
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => handleSelectPlan('ultra_pro')}
                >
                  Upgrade to Ultra Pro ($20/mo)
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="pt-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif font-bold text-2xl text-ink">
              Compare all features side-by-side
            </h2>
            <p className="text-xs sm:text-sm text-ink-2">
              Every tier includes genuine Bluebook-style question formats and instant scoring.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-line bg-surface shadow-2xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-line bg-paper-2">
                  <th className="p-4 font-semibold text-ink w-2/5">Feature</th>
                  <th className="p-4 font-semibold text-ink text-center w-1/5">Free</th>
                  <th className="p-4 font-semibold text-accent text-center w-1/5 bg-accent/5">Pro ($5/mo)</th>
                  <th className="p-4 font-semibold text-ink text-center w-1/5">Ultra Pro ($20/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-4 font-medium text-ink">Topic Practice by Skill</td>
                  <td className="p-4 text-center text-moss font-semibold">Unlimited</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Unlimited</td>
                  <td className="p-4 text-center text-moss font-semibold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Error Bank Spaced Drills</td>
                  <td className="p-4 text-center text-moss font-semibold">Unlimited</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Unlimited</td>
                  <td className="p-4 text-center text-moss font-semibold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Full-Length Mock Tests (~30 total)</td>
                  <td className="p-4 text-center font-mono font-medium text-ink">6 Tests</td>
                  <td className="p-4 text-center font-mono font-bold text-accent bg-accent/5">All 30 Tests</td>
                  <td className="p-4 text-center font-mono font-bold text-accent">All 30 Tests</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Mock Scoring &amp; Question Review</td>
                  <td className="p-4 text-center text-moss font-semibold">Full (unlocked)</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Full (unlocked)</td>
                  <td className="p-4 text-center text-moss font-semibold">Full (unlocked)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Cosmo Socratic AI Tutor</td>
                  <td className="p-4 text-center font-mono text-ink">15 qs / day</td>
                  <td className="p-4 text-center font-mono font-bold text-accent bg-accent/5">50 qs / day</td>
                  <td className="p-4 text-center font-mono font-bold text-accent">100 qs / day</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Screenshot / Photo Uploads</td>
                  <td className="p-4 text-center font-mono text-ink">2 / day</td>
                  <td className="p-4 text-center font-mono font-bold text-accent bg-accent/5">15 / day</td>
                  <td className="p-4 text-center font-mono font-bold text-accent">100 / day</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Section Pacing Analysis (71s/95s)</td>
                  <td className="p-4 text-center text-ink-muted">—</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Included</td>
                  <td className="p-4 text-center text-moss font-semibold">Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Score Trend &amp; Goal Projection</td>
                  <td className="p-4 text-center text-ink-muted">—</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Included</td>
                  <td className="p-4 text-center text-moss font-semibold">Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">28-Day Consistency Calendar Heatmap</td>
                  <td className="p-4 text-center text-ink-muted">—</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Included</td>
                  <td className="p-4 text-center text-moss font-semibold">Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Algorithmic 14-Day Auto-Plan</td>
                  <td className="p-4 text-center text-ink-2">Manual only</td>
                  <td className="p-4 text-center text-moss font-semibold bg-accent/5">Automated</td>
                  <td className="p-4 text-center text-moss font-semibold">Automated</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-ink">Cosmo Diagnostic Insights</td>
                  <td className="p-4 text-center text-ink-muted">—</td>
                  <td className="p-4 text-center font-mono text-ink bg-accent/5">10 / day</td>
                  <td className="p-4 text-center font-mono text-ink">20 / day + Weekly Report</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-8 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h2 className="font-serif font-bold text-2xl text-ink">Frequently asked questions</h2>
            <p className="text-xs text-ink-2">Answers to common questions about plans and practice.</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-5 rounded-xl bg-surface border border-line space-y-2">
              <h3 className="font-semibold text-ink flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                Are mock test rationales or explanations locked behind a paywall?
              </h3>
              <p className="text-ink-2 leading-relaxed pl-6">
                <strong>No, never.</strong> Every question you take on SATBase includes complete official step-by-step explanations and rationale, even on the Free plan. We only gate the number of mock tests (6 free vs 30 on Pro), never your ability to learn from what you solved.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface border border-line space-y-2">
              <h3 className="font-semibold text-ink flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                How do the daily AI question limits work?
              </h3>
              <p className="text-ink-2 leading-relaxed pl-6">
                Your Cosmo Socratic AI quota (15 on Free, 50 on Pro, 100 on Ultra) resets every day at midnight in your local timezone. Even after using your daily AI questions, you can continue to query platform formulas, Desmos shortcuts, and platform guides anytime with 0 quota consumption.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface border border-line space-y-2">
              <h3 className="font-semibold text-ink flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                How can I upgrade or activate Pro?
              </h3>
              <p className="text-ink-2 leading-relaxed pl-6">
                Click any Upgrade button to submit your interest. While automated payment gateway checkout is being finalized, early access accounts are manually provisioned directly.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Strip */}
        <div className="p-8 rounded-2xl bg-paper-2 border border-line text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-ink">Ready to begin your diagnostic?</h3>
          <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
            Take Test 1 today on the Free plan and calibrate your baseline score.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Button variant="primary" onClick={() => navigate(user ? '/mock-tests' : '/login')}>
              <span>Start practicing</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button variant="secondary" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>{user ? 'Return to Dashboard' : 'Return to Home'}</span>
            </Button>
          </div>
        </div>
      </div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        highlightPlan={selectedHighlight}
      />
    </div>
  );
}
