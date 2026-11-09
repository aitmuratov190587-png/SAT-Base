export type SubscriptionPlan = 'free' | 'pro' | 'ultra_pro' | 'vip';
export type CurrencyCode = 'UZS' | 'USD';

export interface PlanLimits {
  plan: SubscriptionPlan;
  name: string;
  priceMonthly: number; // in USD (0, 4, 16)
  priceMonthlyUzs: number; // in UZS (0, 50_000, 200_000)
  tutor_per_day: number;
  tutorPerDay: number;
  insights_per_day: number;
  insightsPerDay: number;
  mocks_limit: number | null; // null means all mocks unlocked
  mocksLimit: number | null;
  auto_plan: boolean;
  autoPlan: boolean;
  full_analytics: boolean;
  fullAnalytics: boolean;
  image_uploads_per_day: number;
  imageUploadsPerDay: number;
}

export interface PlanPrice {
  amount: number;
  currency: CurrencyCode;
  formatted: string;
  period: string;
}

export const PLAN_PRICING: Record<SubscriptionPlan, Record<CurrencyCode, PlanPrice>> = {
  free: {
    UZS: { amount: 0, currency: 'UZS', formatted: '0 so‘m', period: 'forever' },
    USD: { amount: 0, currency: 'USD', formatted: '$0', period: 'forever' },
  },
  pro: {
    UZS: { amount: 50_000, currency: 'UZS', formatted: '50 000 so‘m', period: '/ month' },
    USD: { amount: 4, currency: 'USD', formatted: '$4', period: '/ month' },
  },
  ultra_pro: {
    UZS: { amount: 200_000, currency: 'UZS', formatted: '200 000 so‘m', period: '/ month' },
    USD: { amount: 16, currency: 'USD', formatted: '$16', period: '/ month' },
  },
  vip: {
    UZS: { amount: 0, currency: 'UZS', formatted: '0 so‘m', period: 'lifetime' },
    USD: { amount: 0, currency: 'USD', formatted: '$0', period: 'lifetime' },
  },
};

export function getPlanPrice(plan: SubscriptionPlan, currency: CurrencyCode): PlanPrice {
  return PLAN_PRICING[plan]?.[currency] || PLAN_PRICING.free[currency];
}

export const PLAN_LIMITS: Record<SubscriptionPlan, PlanLimits> = {
  free: {
    plan: 'free',
    name: 'Free',
    priceMonthly: 0,
    priceMonthlyUzs: 0,
    tutor_per_day: 15,
    tutorPerDay: 15,
    insights_per_day: 0,
    insightsPerDay: 0,
    mocks_limit: 6,
    mocksLimit: 6,
    auto_plan: false,
    autoPlan: false,
    full_analytics: false,
    fullAnalytics: false,
    image_uploads_per_day: 2,
    imageUploadsPerDay: 2,
  },
  pro: {
    plan: 'pro',
    name: 'Pro',
    priceMonthly: 4,
    priceMonthlyUzs: 50_000,
    tutor_per_day: 50,
    tutorPerDay: 50,
    insights_per_day: 10,
    insightsPerDay: 10,
    mocks_limit: null,
    mocksLimit: null,
    auto_plan: true,
    autoPlan: true,
    full_analytics: true,
    fullAnalytics: true,
    image_uploads_per_day: 15,
    imageUploadsPerDay: 15,
  },
  ultra_pro: {
    plan: 'ultra_pro',
    name: 'Ultra Pro',
    priceMonthly: 16,
    priceMonthlyUzs: 200_000,
    tutor_per_day: 100,
    tutorPerDay: 100,
    insights_per_day: 20,
    insightsPerDay: 20,
    mocks_limit: null,
    mocksLimit: null,
    auto_plan: true,
    autoPlan: true,
    full_analytics: true,
    fullAnalytics: true,
    image_uploads_per_day: 100,
    imageUploadsPerDay: 100,
  },
  vip: {
    plan: 'vip',
    name: 'VIP Creator',
    priceMonthly: 0,
    priceMonthlyUzs: 0,
    tutor_per_day: 999999,
    tutorPerDay: 999999,
    insights_per_day: 999999,
    insightsPerDay: 999999,
    mocks_limit: null,
    mocksLimit: null,
    auto_plan: true,
    autoPlan: true,
    full_analytics: true,
    fullAnalytics: true,
    image_uploads_per_day: 999999,
    imageUploadsPerDay: 999999,
  },
};

/**
 * Checks if a mock test number (1-based, e.g. 1 to 30) is unlocked for the user's plan.
 */
export function isMockTestUnlocked(plan: SubscriptionPlan, mockNumber: number): boolean {
  if (plan === 'vip' || plan === 'pro' || plan === 'ultra_pro') {
    return true;
  }
  const limit = PLAN_LIMITS.free.mocks_limit ?? 6;
  return mockNumber <= limit;
}

/**
 * Checks if a specific feature is enabled for the plan.
 */
export function canUseFeature(
  plan: SubscriptionPlan,
  feature: 'auto_plan' | 'full_analytics' | 'insights' | 'all_mocks' | 'topic_practice' | 'error_bank' | 'mock_exams'
): boolean {
  if (plan === 'vip') return true;
  const config = PLAN_LIMITS[plan] || PLAN_LIMITS.free;

  switch (feature) {
    case 'topic_practice':
    case 'error_bank':
    case 'mock_exams':
      return true;
    case 'auto_plan':
      return config.auto_plan;
    case 'full_analytics':
      return config.full_analytics;
    case 'insights':
      return config.insights_per_day > 0;
    case 'all_mocks':
      return config.mocks_limit === null;
    default:
      return false;
  }
}

/**
 * Resolves active plan from user profile data, treating expired plans as free.
 * Permanent VIP override for aitmuratov190587@gmail.com.
 */
export function resolveUserPlan(profile: {
  email?: string | null;
  plan?: string | null;
  subscription_plan?: string | null;
  plan_expires_at?: string | null;
} | null): SubscriptionPlan {
  if (!profile) return 'free';

  // Creator account permanent VIP check
  if (profile.email && profile.email.toLowerCase() === 'aitmuratov190587@gmail.com') {
    return 'vip';
  }

  const rawPlan = (profile.plan || profile.subscription_plan || 'free').toLowerCase();
  const validPlans: SubscriptionPlan[] = ['free', 'pro', 'ultra_pro', 'vip'];
  
  let plan: SubscriptionPlan = validPlans.includes(rawPlan as SubscriptionPlan)
    ? (rawPlan as SubscriptionPlan)
    : 'free';

  // Check expiration if set and not VIP
  if (plan !== 'vip' && profile.plan_expires_at) {
    const expires = new Date(profile.plan_expires_at).getTime();
    if (!isNaN(expires) && expires < Date.now()) {
      return 'free';
    }
  }

  return plan;
}
