import {
  CurrencyCode,
  PLAN_LIMITS,
  PLAN_PRICING,
  SubscriptionPlan,
  getPlanPrice,
} from '../../lib/plans';

/** Unicode U+202F narrow non-breaking space for thousands separators */
export const THIN_NBSP = '\u202F';

/** Unicode U+02BB modifier letter turned comma for Uzbek "soʻm" */
export const UZ_OKINA = '\u02BB';

/** Unicode U+00A0 non-breaking space keeping numeric amounts paired with unit */
export const NBSP = '\u00A0';

/** Unicode U+2011 non-breaking hyphen for compound words like "test‑prep" */
export const NB_HYPHEN = '\u2011';

export const UZS_UNIT = `so${UZ_OKINA}m`;

export interface FormattedPriceParts {
  amount: number;
  currency: CurrencyCode;
  numberText: string;
  unitText: string | null;
  period: string;
  inlineLabel: string;
  monthlyActionLabel: string;
}

/**
 * Formats an integer with U+202F narrow non-breaking spaces every three digits.
 */
export function formatNumberWithThinSpace(amount: number): string {
  return Math.trunc(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, THIN_NBSP);
}

/**
 * Single source of truth for displaying SATBase plan prices across cards, CTAs,
 * tables, and FAQ copy on the Pricing page.
 */
export function formatPriceParts(
  plan: SubscriptionPlan,
  currency: CurrencyCode
): FormattedPriceParts {
  const raw = getPlanPrice(plan, currency);
  const amount = PLAN_PRICING[plan]?.[currency]?.amount ?? raw.amount;

  if (currency === 'UZS') {
    const numberText = formatNumberWithThinSpace(amount);
    const inlineLabel = `${numberText}${NBSP}${UZS_UNIT}`;
    return {
      amount,
      currency,
      numberText,
      unitText: UZS_UNIT,
      period: raw.period,
      inlineLabel,
      monthlyActionLabel: `${inlineLabel}/mo`,
    };
  }

  const numberText = `$${formatNumberWithThinSpace(amount)}`;
  return {
    amount,
    currency,
    numberText,
    unitText: null,
    period: raw.period,
    inlineLabel: numberText,
    monthlyActionLabel: `${numberText}/mo`,
  };
}

export interface PaymentMethodBadge {
  id: 'uzum' | 'click' | 'payme' | 'visa' | 'mastercard' | 'google_pay';
  label: string;
  dotClass: string;
}

/**
 * Payment badges filtered to methods supported by the active currency.
 * Matches PaymentModal / Supabase payments schema (UZS: Uzum/Click/Payme; USD: Visa/MasterCard/Google Pay).
 */
export function getPaymentMethodsForCurrency(currency: CurrencyCode): PaymentMethodBadge[] {
  if (currency === 'UZS') {
    return [
      { id: 'uzum', label: 'Uzum Pay', dotClass: 'bg-berry' },
      { id: 'click', label: 'Click', dotClass: 'bg-cobalt' },
      { id: 'payme', label: 'Payme', dotClass: 'bg-moss' },
    ];
  }

  return [
    { id: 'visa', label: 'Visa', dotClass: 'bg-accent' },
    { id: 'mastercard', label: 'MasterCard', dotClass: 'bg-mustard' },
    { id: 'google_pay', label: 'Google Pay', dotClass: 'bg-moss' },
  ];
}

export type ComparisonCellKind = 'included' | 'excluded' | 'numeric' | 'neutral';

export interface ComparisonCell {
  kind: ComparisonCellKind;
  text: string;
  numericPrefix?: string;
  trailingLabel?: string;
}

export interface ComparisonRow {
  id: string;
  capability: string;
  free: ComparisonCell;
  pro: ComparisonCell;
  ultraPro: ComparisonCell;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: 'question-bank',
    capability: 'Question bank & practice arena',
    free: { kind: 'included', text: 'Unlimited' },
    pro: { kind: 'included', text: 'Unlimited' },
    ultraPro: { kind: 'included', text: 'Unlimited' },
  },
  {
    id: 'error-bank',
    capability: 'Error bank with spaced repetition',
    free: { kind: 'included', text: 'Included' },
    pro: { kind: 'included', text: 'Included' },
    ultraPro: { kind: 'included', text: 'Included' },
  },
  {
    id: 'mock-exams',
    capability: 'Authentic full mock exams',
    free: { kind: 'numeric', text: `${PLAN_LIMITS.free.mocks_limit ?? 6} tests` },
    pro: { kind: 'included', text: 'All 30 tests' },
    ultraPro: { kind: 'included', text: 'All 30 tests' },
  },
  {
    id: 'explanations',
    capability: 'Full explanations & rationales',
    free: { kind: 'included', text: 'Included' },
    pro: { kind: 'included', text: 'Included' },
    ultraPro: { kind: 'included', text: 'Included' },
  },
  {
    id: 'cosmo-tutor',
    capability: 'Cosmo Socratic AI',
    free: { kind: 'numeric', text: `${PLAN_LIMITS.free.tutor_per_day} / day` },
    pro: { kind: 'numeric', text: `${PLAN_LIMITS.pro.tutor_per_day} / day` },
    ultraPro: { kind: 'numeric', text: `${PLAN_LIMITS.ultra_pro.tutor_per_day} / day` },
  },
  {
    id: 'screenshot-uploads',
    capability: 'Screenshot question uploads',
    free: { kind: 'numeric', text: `${PLAN_LIMITS.free.image_uploads_per_day} / day` },
    pro: { kind: 'numeric', text: `${PLAN_LIMITS.pro.image_uploads_per_day} / day` },
    ultraPro: { kind: 'numeric', text: `${PLAN_LIMITS.ultra_pro.image_uploads_per_day} / day` },
  },
  {
    id: 'pacing-analytics',
    capability: 'Tempo & pacing analytics',
    free: { kind: 'excluded', text: '—' },
    pro: { kind: 'included', text: 'Full access' },
    ultraPro: { kind: 'included', text: 'Full access' },
  },
  {
    id: 'heatmap',
    capability: '28-day consistency calendar heatmap',
    free: { kind: 'excluded', text: '—' },
    pro: { kind: 'included', text: 'Included' },
    ultraPro: { kind: 'included', text: 'Included' },
  },
  {
    id: 'auto-plan',
    capability: 'Algorithmic 14-day Auto-Plan',
    free: { kind: 'neutral', text: 'Manual only' },
    pro: { kind: 'included', text: 'Automated' },
    ultraPro: { kind: 'included', text: 'Automated' },
  },
  {
    id: 'diagnostic-insights',
    capability: 'Cosmo AI diagnostic insights',
    free: { kind: 'excluded', text: '—' },
    pro: { kind: 'numeric', text: `${PLAN_LIMITS.pro.insights_per_day} / day` },
    ultraPro: {
      kind: 'numeric',
      text: `${PLAN_LIMITS.ultra_pro.insights_per_day} / day + weekly report`,
      numericPrefix: `${PLAN_LIMITS.ultra_pro.insights_per_day} / day`,
      trailingLabel: '+ weekly report',
    },
  },
];

export interface PricingFaqItem {
  id: string;
  question: string;
  getAnswerParts: () => {
    proUzs: string;
    ultraUzs: string;
    proUsd: string;
    ultraUsd: string;
    freeMocks: number;
    freeTutor: number;
    proTutor: number;
    ultraTutor: number;
  };
}

export function getPricingFaqMetrics() {
  return {
    proUzs: formatPriceParts('pro', 'UZS').inlineLabel,
    ultraUzs: formatPriceParts('ultra_pro', 'UZS').inlineLabel,
    proUsd: formatPriceParts('pro', 'USD').inlineLabel,
    ultraUsd: formatPriceParts('ultra_pro', 'USD').inlineLabel,
    freeMocks: PLAN_LIMITS.free.mocks_limit ?? 6,
    freeTutor: PLAN_LIMITS.free.tutor_per_day,
    proTutor: PLAN_LIMITS.pro.tutor_per_day,
    ultraTutor: PLAN_LIMITS.ultra_pro.tutor_per_day,
  };
}
