import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CreditCard,
  Crown,
  Globe,
  HelpCircle,
  Info,
  Minus,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import PaymentModal from '../components/ui/PaymentModal';
import Tooltip from '../components/ui/Tooltip';
import ThemeToggle from '../components/ThemeToggle';
import { CurrencyCode, PLAN_LIMITS } from '../lib/plans';
import {
  COMPARISON_ROWS,
  ComparisonCell,
  NB_HYPHEN,
  UZ_OKINA,
  UZS_UNIT,
  formatPriceParts,
  getPaymentMethodsForCurrency,
  getPricingFaqMetrics,
} from './pricing/pricingFormat';
import './pricing/PricingPage.css';

function UzbekistanFlagIcon() {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      aria-hidden="true"
      className="rounded-[2px] border border-ink/15 shrink-0"
    >
      <rect width="18" height="4.2" fill="#0099B5" />
      <rect y="4.2" width="18" height="0.7" fill="#CE1126" />
      <rect y="4.9" width="18" height="3.2" fill="#FFFFFF" />
      <rect y="8.1" width="18" height="0.7" fill="#CE1126" />
      <rect y="8.8" width="18" height="4.2" fill="#1EB53A" />
      <circle cx="3.3" cy="2.1" r="1.1" fill="#FFFFFF" />
      <circle cx="3.75" cy="2.1" r="0.9" fill="#0099B5" />
    </svg>
  );
}

function renderComparisonCell(cell: ComparisonCell) {
  if (cell.kind === 'included') {
    return <span className="font-sans font-semibold text-moss">{cell.text}</span>;
  }

  if (cell.kind === 'excluded') {
    return (
      <span className="font-sans text-ink-muted" aria-label="Not included">
        {cell.text}
      </span>
    );
  }

  if (cell.kind === 'numeric') {
    if (cell.numericPrefix && cell.trailingLabel) {
      return (
        <span className="text-ink">
          <span className="font-mono tabular-nums font-medium">{cell.numericPrefix}</span>{' '}
          <span className="font-sans text-ink-2">{cell.trailingLabel}</span>
        </span>
      );
    }
    return <span className="font-mono tabular-nums font-medium text-ink">{cell.text}</span>;
  }

  return <span className="font-sans text-ink-2">{cell.text}</span>;
}

export default function PricingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { plan, isVip } = useAppContext();
  const [currency, setCurrency] = useState<CurrencyCode>('UZS');
  const [selectedHighlight, setSelectedHighlight] = useState<'pro' | 'ultra_pro'>('pro');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.body.classList.add('pricing-route');
    return () => {
      document.body.classList.remove('pricing-route');
    };
  }, []);

  const handleBack = () => {
    const hasInternalHistory =
      typeof window !== 'undefined' &&
      window.history.state &&
      typeof window.history.state.idx === 'number' &&
      window.history.state.idx > 0;

    if (hasInternalHistory) {
      navigate(-1);
    } else {
      navigate(user ? '/' : '/welcome');
    }
  };

  const handleSelectPlan = (targetPlan: 'pro' | 'ultra_pro') => {
    setSelectedHighlight(targetPlan);
    setShowPaymentModal(true);
  };

  const backLabel = user ? 'Back to dashboard' : 'Back to home';
  const freePrice = formatPriceParts('free', currency);
  const proPrice = formatPriceParts('pro', currency);
  const ultraPrice = formatPriceParts('ultra_pro', currency);
  const paymentBadges = getPaymentMethodsForCurrency(currency);
  const faqMetrics = getPricingFaqMetrics();

  const freeLimits = PLAN_LIMITS.free;
  const proLimits = PLAN_LIMITS.pro;
  const ultraLimits = PLAN_LIMITS.ultra_pro;

  const faqs = [
    {
      id: 'rationales',
      question: 'Are mock test rationales or explanations locked behind a paywall?',
      answer: (
        <>
          <strong className="text-ink">No, never.</strong> Every question you solve on SATBase
          includes complete step-by-step explanations and answer rationales, even on the Free plan.
          We only limit the number of full mock tests ({faqMetrics.freeMocks} free vs all 30 on Pro),
          never your ability to review and learn from mistakes.
        </>
      ),
    },
    {
      id: 'payments',
      question: 'How do local Uzbekistan and international payments work?',
      answer: (
        <>
          In Uzbekistan, you can pay via <strong className="text-ink">Uzum Pay</strong>,{' '}
          <strong className="text-ink">Click</strong>, or{' '}
          <strong className="text-ink">Payme</strong> in Uzbek {UZS_UNIT} (UZS):{' '}
          <strong className="text-ink whitespace-nowrap">{faqMetrics.proUzs}</strong> for Pro or{' '}
          <strong className="text-ink whitespace-nowrap">{faqMetrics.ultraUzs}</strong> for Ultra
          Pro. International students can pay via <strong className="text-ink">Visa</strong>,{' '}
          <strong className="text-ink">MasterCard</strong>, or{' '}
          <strong className="text-ink">Google Pay</strong> in USD ({faqMetrics.proUsd} or{' '}
          {faqMetrics.ultraUsd}). Activation is immediate upon confirmation.
        </>
      ),
    },
    {
      id: 'ai-limits',
      question: 'How do the daily AI question limits work?',
      answer: (
        <>
          Your Cosmo Socratic AI quota ({faqMetrics.freeTutor} questions / day on Free,{' '}
          {faqMetrics.proTutor} on Pro, {faqMetrics.ultraTutor} on Ultra Pro) resets every day at
          midnight in your local timezone. Even after using your daily quota, you can reference
          formulas, Desmos shortcuts, and study guides anytime with zero quota consumption.
        </>
      ),
    },
  ];

  return (
    <div className="pricing-page min-h-screen bg-paper text-ink transition-colors duration-200 font-sans selection:bg-accent/20">
      {/* Sticky Top Header Navigation */}
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleBack}
              aria-label={backLabel}
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl border border-line bg-surface hover:bg-paper-2 hover:border-line-strong text-sm font-semibold text-ink transition-colors shadow-xs group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-ink-2 group-hover:-translate-x-0.5 transition-transform" />
              <span>{backLabel}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle className="pricing-theme-toggle h-10 px-3.5" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8 sm:pt-12 md:pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto space-y-12 md:space-y-16">
          {/* VIP Creator Banner */}
          {isVip && (
            <div className="p-4 sm:p-6 rounded-2xl bg-mustard/15 border border-mustard/30 text-ink flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mustard/20 border border-mustard/40 flex items-center justify-center shrink-0">
                  <Crown className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-serif font-bold text-base text-ink">
                      VIP Creator status active
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-mustard text-ink text-[13px] font-semibold">
                      Unlimited
                    </span>
                  </div>
                  <p className="text-[13px] text-ink-2 mt-1">
                    All 30 mock exams, unlimited Cosmo Socratic AI &amp; screenshot uploads, and
                    full analytics unlocked.
                  </p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => navigate('/mock-tests')}
                className="pricing-cta-btn shrink-0 self-start sm:self-auto text-[13px] min-h-[40px]"
              >
                Open mock tests
              </Button>
            </div>
          )}

          {/* Hero Section */}
          <section className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-2 border border-line text-[13px] font-medium text-ink-2">
              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Honest, transparent SAT prep</span>
            </div>

            <h1 className="pricing-hero-title font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.14]">
              Invest in your score, not {`test${NB_HYPHEN}prep`} markups.
            </h1>

            <p className="text-[15px] sm:text-base text-ink-2 max-w-[640px] mx-auto leading-[1.65]">
              Practice questions, spaced error drills, and full mock score reviews are free forever.
              Upgrade to Pro for all 30 full-length mock exams, pacing calibration, and extended
              Cosmo Socratic AI guidance.
            </p>

            {/* Currency Switcher Toggle */}
            <div className="pt-2 flex justify-center">
              <div
                role="tablist"
                aria-label="Select pricing currency"
                className="inline-flex items-center rounded-2xl border border-line bg-surface p-1 shadow-xs"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={currency === 'UZS'}
                  onClick={() => setCurrency('UZS')}
                  className={`pricing-currency-tab inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] sm:text-sm font-semibold transition-colors cursor-pointer ${
                    currency === 'UZS'
                      ? 'bg-accent text-accent-contrast shadow-xs'
                      : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  <UzbekistanFlagIcon />
                  <span>{`O${UZ_OKINA}zbekiston (${UZS_UNIT})`}</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={currency === 'USD'}
                  onClick={() => setCurrency('USD')}
                  className={`pricing-currency-tab inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] sm:text-sm font-semibold transition-colors cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-accent text-accent-contrast shadow-xs'
                      : 'text-ink-2 hover:text-ink'
                  }`}
                >
                  <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Global (USD $)</span>
                </button>
              </div>
            </div>
          </section>

          {/* 3-Column Pricing Cards (Pro first when stacked on <=768px) */}
          <section
            aria-label="Subscription plans"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch"
          >
            {/* 1. FREE TIER */}
            <article className="pricing-card order-2 lg:order-1 flex flex-col h-full p-7 xl:p-8 rounded-2xl bg-surface border border-line shadow-xs hover:border-line-strong">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-serif font-bold text-xl text-ink">Free</h2>
                  {plan === 'free' && !isVip && (
                    <span className="px-2.5 py-0.5 rounded-full bg-paper-2 border border-line text-ink-2 text-[13px] font-semibold">
                      Current plan
                    </span>
                  )}
                </div>

                <p className="text-sm text-ink-2 leading-relaxed lg:min-h-[44px]">
                  Essential practice and diagnostic baseline for every SAT student.
                </p>

                <div className="pt-2 pb-5 border-b border-line flex items-baseline flex-wrap gap-x-2 gap-y-1">
                  <span className="inline-flex items-baseline whitespace-nowrap">
                    <span className="font-display font-bold text-[32px] xl:text-4xl text-ink tabular-nums">
                      {freePrice.numberText}
                    </span>
                    {freePrice.unitText && (
                      <span className="font-sans font-semibold text-base xl:text-lg text-ink-2 ml-1.5">
                        {freePrice.unitText}
                      </span>
                    )}
                  </span>
                  <span className="text-[13px] text-ink-muted whitespace-nowrap">
                    {freePrice.period}
                  </span>
                </div>
              </div>

              <ul className="pt-6 flex-1 flex flex-col gap-[14px] text-sm text-ink">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Unlimited topic practice &amp; full question bank</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Error bank with automatic spaced repetition</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-ink">
                      {freeLimits.mocks_limit ?? 6}
                    </strong>{' '}
                    authentic mock exams (Tests 1–{freeLimits.mocks_limit ?? 6})
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Full score breakdown &amp; question reviews (never locked)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Basic analytics (total accuracy &amp; score target)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Manual 14-day study plan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Cosmo Socratic AI:{' '}
                    <strong className="font-semibold text-ink">{freeLimits.tutor_per_day}</strong>{' '}
                    questions / day
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Screenshot question uploads:{' '}
                    <strong className="font-semibold text-ink">
                      {freeLimits.image_uploads_per_day}
                    </strong>{' '}
                    / day
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-ink-muted pt-1">
                  <Minus className="w-4 h-4 text-ink-muted shrink-0 mt-1" aria-hidden="true" />
                  <span className="line-through">Tempo &amp; pacing analytics</span>
                </li>
                <li className="flex items-start gap-2.5 text-ink-muted">
                  <Minus className="w-4 h-4 text-ink-muted shrink-0 mt-1" aria-hidden="true" />
                  <span className="line-through">28-day consistency calendar heatmap</span>
                </li>
                <li className="flex items-start gap-2.5 text-ink-muted">
                  <Minus className="w-4 h-4 text-ink-muted shrink-0 mt-1" aria-hidden="true" />
                  <span className="line-through">Algorithmic Auto-Plan</span>
                </li>
              </ul>

              <div className="mt-auto pt-7">
                {plan === 'free' && !isVip ? (
                  <Button
                    variant="secondary"
                    disabled
                    className="pricing-cta-btn w-full min-h-[48px] lg:min-h-[58px] xl:min-h-[48px] text-[13px] sm:text-sm"
                  >
                    Your current plan
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="pricing-cta-btn w-full min-h-[48px] lg:min-h-[58px] xl:min-h-[48px] text-[13px] sm:text-sm"
                    onClick={() => navigate(user ? '/questions' : '/login')}
                  >
                    {user ? 'Continue practicing' : 'Start free'}
                  </Button>
                )}
              </div>
            </article>

            {/* 2. PRO TIER (HIGHLIGHTED, FIRST ON MOBILE) */}
            <article className="pricing-card relative order-1 lg:order-2 flex flex-col h-full p-7 xl:p-8 rounded-2xl bg-surface border border-accent ring-1 ring-inset ring-accent shadow-notebook">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-accent text-accent-contrast text-[13px] font-sans font-semibold tracking-wide whitespace-nowrap shadow-xs">
                Most popular
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-serif font-bold text-xl text-ink">Pro</h2>
                    <Zap className="w-4 h-4 text-accent fill-accent shrink-0" aria-hidden="true" />
                  </div>
                  {plan === 'pro' && !isVip && (
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/40 pricing-accent-label text-[13px] font-semibold">
                      Current plan
                    </span>
                  )}
                </div>

                <p className="text-sm text-ink-2 leading-relaxed lg:min-h-[44px]">
                  Everything you need for full-length practice and pacing mastery.
                </p>

                <div className="pt-2 pb-5 border-b border-line flex items-baseline flex-wrap gap-x-2 gap-y-1">
                  <span className="inline-flex items-baseline whitespace-nowrap">
                    <span className="font-display font-bold text-[32px] xl:text-4xl text-ink tabular-nums">
                      {proPrice.numberText}
                    </span>
                    {proPrice.unitText && (
                      <span className="font-sans font-semibold text-base xl:text-lg text-ink-2 ml-1.5">
                        {proPrice.unitText}
                      </span>
                    )}
                  </span>
                  <span className="text-[13px] text-ink-muted whitespace-nowrap">
                    {proPrice.period}
                  </span>
                </div>
              </div>

              <ul className="pt-6 flex-1 flex flex-col gap-[14px] text-sm text-ink">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    All <strong className="font-semibold text-ink">30</strong> authentic mock exams
                    unlocked
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Pacing analytics: your tempo vs target time per{' '}
                    <span className="inline-flex items-center gap-1 whitespace-nowrap">
                      <span>question</span>
                      <Tooltip
                        content="Digital SAT pacing benchmarks: 71s per question (Reading & Writing) and 95s per question (Math)."
                        position="top"
                      >
                        <button
                          type="button"
                          aria-label="View target time per question benchmarks"
                          className="inline-flex items-center justify-center w-5 h-5 rounded-full text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors cursor-help align-middle"
                        >
                          <Info className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </Tooltip>
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Score progression trend line &amp; goal projection</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>28-day consistency calendar heatmap</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>Algorithmic Auto-Plan schedule generator</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Cosmo Socratic AI:{' '}
                    <strong className="font-semibold text-ink">{proLimits.tutor_per_day}</strong>{' '}
                    questions / day
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Screenshot question uploads:{' '}
                    <strong className="font-semibold text-ink">
                      {proLimits.image_uploads_per_day}
                    </strong>{' '}
                    / day
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Cosmo AI diagnostic insights:{' '}
                    <strong className="font-semibold text-ink">
                      {proLimits.insights_per_day}
                    </strong>{' '}
                    / day
                  </span>
                </li>
              </ul>

              <div className="mt-auto pt-7">
                {plan === 'pro' && !isVip ? (
                  <Button
                    variant="secondary"
                    disabled
                    className="pricing-cta-btn w-full min-h-[48px] lg:min-h-[58px] xl:min-h-[48px] text-[13px] sm:text-sm"
                  >
                    Your current plan
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    className="pricing-cta-btn w-full min-h-[48px] lg:min-h-[58px] xl:min-h-[48px] px-3 xl:px-4 text-[13px] shadow-md whitespace-normal text-center leading-snug"
                    onClick={() => handleSelectPlan('pro')}
                  >
                    Upgrade to Pro — {proPrice.monthlyActionLabel}
                  </Button>
                )}
              </div>
            </article>

            {/* 3. ULTRA PRO TIER */}
            <article className="pricing-card order-3 flex flex-col h-full p-7 xl:p-8 rounded-2xl bg-surface border border-line shadow-xs hover:border-line-strong">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <h2 className="font-serif font-bold text-xl text-ink">Ultra Pro</h2>
                    <Sparkles className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  </div>
                  {plan === 'ultra_pro' && !isVip && (
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/40 pricing-accent-label text-[13px] font-semibold">
                      Current plan
                    </span>
                  )}
                </div>

                <p className="text-sm text-ink-2 leading-relaxed lg:min-h-[44px]">
                  Intensive daily preparation with power AI tutoring and personalized coaching.
                </p>

                <div className="pt-2 pb-5 border-b border-line flex items-baseline flex-wrap gap-x-2 gap-y-1">
                  <span className="inline-flex items-baseline whitespace-nowrap">
                    <span className="font-display font-bold text-[32px] xl:text-4xl text-ink tabular-nums">
                      {ultraPrice.numberText}
                    </span>
                    {ultraPrice.unitText && (
                      <span className="font-sans font-semibold text-base xl:text-lg text-ink-2 ml-1.5">
                        {ultraPrice.unitText}
                      </span>
                    )}
                  </span>
                  <span className="text-[13px] text-ink-muted whitespace-nowrap">
                    {ultraPrice.period}
                  </span>
                </div>
              </div>

              <div className="pt-6 flex-1 flex flex-col gap-[14px]">
                <p className="text-[13px] font-medium text-ink-2">Everything in Pro, plus:</p>
                <ul className="flex flex-col gap-[14px] text-sm text-ink">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      Cosmo Socratic AI:{' '}
                      <strong className="font-semibold text-ink">
                        {ultraLimits.tutor_per_day}
                      </strong>{' '}
                      questions / day
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      Screenshot question uploads:{' '}
                      <strong className="font-semibold text-ink">
                        {ultraLimits.image_uploads_per_day}
                      </strong>{' '}
                      / day
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      Cosmo AI diagnostic insights:{' '}
                      <strong className="font-semibold text-ink">
                        {ultraLimits.insights_per_day}
                      </strong>{' '}
                      / day + weekly report
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-moss shrink-0 mt-1" aria-hidden="true" />
                    <span>Priority AI tutor queue &amp; faster responses</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-7">
                {plan === 'ultra_pro' && !isVip ? (
                  <Button
                    variant="secondary"
                    disabled
                    className="pricing-cta-btn w-full min-h-[48px] lg:min-h-[58px] xl:min-h-[48px] text-[13px] sm:text-sm"
                  >
                    Your current plan
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="pricing-cta-btn w-full min-h-[48px] lg:min-h-[58px] xl:min-h-[48px] px-3 xl:px-4 text-[13px] whitespace-normal text-center leading-snug"
                    onClick={() => handleSelectPlan('ultra_pro')}
                  >
                    Upgrade to Ultra Pro — {ultraPrice.monthlyActionLabel}
                  </Button>
                )}
              </div>
            </article>
          </section>

          {/* Currency-Relevant Supported Payment Methods Strip */}
          <section
            aria-label="Supported payment methods"
            className="p-6 sm:p-7 rounded-2xl bg-surface border border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center pricing-accent-label shrink-0">
                <CreditCard className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-semibold text-sm sm:text-base text-ink">
                  Supported payment methods ({currency})
                </h2>
                <p className="text-[13px] text-ink-2">
                  Instant activation for{' '}
                  {currency === 'UZS' ? `Uzbekistan (${UZS_UNIT})` : 'international USD'} payments
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {paymentBadges.map((method) => (
                <span
                  key={method.id}
                  className="h-9 px-3.5 rounded-xl border border-line bg-paper-2 text-[13px] font-semibold text-ink inline-flex items-center gap-2 shadow-xs"
                >
                  <span className={`w-2 h-2 rounded-full shrink-0 ${method.dotClass}`} />
                  <span>{method.label}</span>
                </span>
              ))}
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section aria-labelledby="compare-heading" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 id="compare-heading" className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                Compare all features side-by-side
              </h2>
              <p className="text-sm text-ink-2">
                Every tier includes genuine Bluebook-style question formats and instant scoring.
              </p>
            </div>

            <div
              role="region"
              aria-label="Plan comparison table"
              tabIndex={0}
              className="relative overflow-auto max-h-[820px] rounded-2xl border border-line bg-surface shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
            >
              <table className="w-full min-w-[680px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-line">
                    <th
                      scope="col"
                      className="pricing-table-corner sticky top-0 left-0 z-30 p-4 font-sans font-semibold text-sm text-ink text-left border-r border-line"
                    >
                      Capability
                    </th>
                    <th
                      scope="col"
                      className="pricing-table-header sticky top-0 z-20 p-4 font-sans font-semibold text-sm text-ink-2 text-center"
                    >
                      Free
                    </th>
                    <th
                      scope="col"
                      className="pricing-table-pro-header sticky top-0 z-20 p-4 font-sans font-semibold text-sm pricing-accent-label text-center"
                    >
                      Pro
                    </th>
                    <th
                      scope="col"
                      className="pricing-table-header sticky top-0 z-20 p-4 font-sans font-semibold text-sm text-ink-2 text-center"
                    >
                      Ultra Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.id}>
                      <td className="pricing-table-sticky-col sticky left-0 z-10 p-4 font-medium text-ink text-left border-r border-line">
                        {row.capability}
                      </td>
                      <td className="p-4 text-center">{renderComparisonCell(row.free)}</td>
                      <td className="pricing-table-pro-cell p-4 text-center">
                        {renderComparisonCell(row.pro)}
                      </td>
                      <td className="p-4 text-center">{renderComparisonCell(row.ultraPro)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Accessible FAQ Accordion */}
          <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 id="faq-heading" className="font-serif font-bold text-2xl sm:text-3xl text-ink">
                Frequently asked questions
              </h2>
              <p className="text-sm text-ink-2">
                Answers to common questions about plans, currency, and payments.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                const panelId = `pricing-faq-panel-${faq.id}`;
                const triggerId = `pricing-faq-trigger-${faq.id}`;

                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl bg-surface border border-line shadow-xs overflow-hidden transition-colors hover:border-line-strong"
                  >
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)]"
                      >
                        <span className="flex items-center gap-2.5 font-semibold text-sm sm:text-base text-ink">
                          <HelpCircle
                            className="w-4 h-4 text-accent shrink-0"
                            aria-hidden="true"
                          />
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown
                          className={`pricing-faq-chevron w-4 h-4 text-ink-2 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-ink' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      data-open={isOpen ? 'true' : 'false'}
                      className="pricing-faq-panel"
                    >
                      <div className="pricing-faq-panel-inner">
                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 pl-11 sm:pl-12 text-sm text-ink-2 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final CTA Strip */}
          <section
            aria-label="Get started"
            className="p-7 sm:p-8 md:p-12 rounded-2xl bg-paper-2 border border-line text-center space-y-4"
          >
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-ink">
              Ready to begin your diagnostic?
            </h2>
            <p className="text-sm sm:text-base text-ink-2 max-w-md mx-auto leading-relaxed">
              Take Test 1 today on the Free plan and calibrate your baseline score.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-xs sm:max-w-none mx-auto">
              <Button
                variant="primary"
                className="pricing-cta-btn w-full sm:w-auto min-h-[48px] px-5 text-sm"
                onClick={() => navigate(user ? '/mock-tests' : '/login')}
              >
                <span>Start practicing</span>
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Button>
              <Button
                variant="secondary"
                className="pricing-cta-btn w-full sm:w-auto min-h-[48px] px-5 text-sm"
                onClick={handleBack}
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" aria-hidden="true" />
                <span>{backLabel}</span>
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Payment Checkout Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={selectedHighlight}
        initialCurrency={currency}
      />
    </div>
  );
}
