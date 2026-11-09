import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  PLAN_LIMITS,
  isMockTestUnlocked,
  canUseFeature,
  resolveUserPlan,
} from '../src/lib/plans.ts';

describe('STEP 14: Subscription Plans & Entitlements', () => {
  it('correctly defines daily limits across all 4 tiers', () => {
    assert.equal(PLAN_LIMITS.free.tutor_per_day, 15);
    assert.equal(PLAN_LIMITS.free.image_uploads_per_day, 2);
    assert.equal(PLAN_LIMITS.free.mocks_limit, 6);
    assert.equal(PLAN_LIMITS.free.full_analytics, false);
    assert.equal(PLAN_LIMITS.free.auto_plan, false);

    assert.equal(PLAN_LIMITS.pro.tutor_per_day, 50);
    assert.equal(PLAN_LIMITS.pro.image_uploads_per_day, 15);
    assert.equal(PLAN_LIMITS.pro.mocks_limit, null);
    assert.equal(PLAN_LIMITS.pro.full_analytics, true);
    assert.equal(PLAN_LIMITS.pro.auto_plan, true);

    assert.equal(PLAN_LIMITS.ultra_pro.tutor_per_day, 100);
    assert.equal(PLAN_LIMITS.ultra_pro.image_uploads_per_day, 100);
    assert.equal(PLAN_LIMITS.ultra_pro.mocks_limit, null);
    assert.equal(PLAN_LIMITS.ultra_pro.full_analytics, true);
    assert.equal(PLAN_LIMITS.ultra_pro.auto_plan, true);

    assert.equal(PLAN_LIMITS.vip.tutor_per_day, 999999);
    assert.equal(PLAN_LIMITS.vip.image_uploads_per_day, 999999);
    assert.equal(PLAN_LIMITS.vip.mocks_limit, null);
    assert.equal(PLAN_LIMITS.vip.full_analytics, true);
    assert.equal(PLAN_LIMITS.vip.auto_plan, true);
  });

  it('enforces mock exam gating: free gets tests 1..6 only, pro/ultra/vip get all 30', () => {
    // Free tests
    assert.equal(isMockTestUnlocked('free', 1), true);
    assert.equal(isMockTestUnlocked('free', 6), true);
    assert.equal(isMockTestUnlocked('free', 7), false);
    assert.equal(isMockTestUnlocked('free', 30), false);

    // Pro tests
    assert.equal(isMockTestUnlocked('pro', 1), true);
    assert.equal(isMockTestUnlocked('pro', 7), true);
    assert.equal(isMockTestUnlocked('pro', 30), true);

    // Ultra Pro tests
    assert.equal(isMockTestUnlocked('ultra_pro', 7), true);
    assert.equal(isMockTestUnlocked('ultra_pro', 30), true);

    // VIP tests
    assert.equal(isMockTestUnlocked('vip', 7), true);
    assert.equal(isMockTestUnlocked('vip', 30), true);
  });

  it('gates advanced features: full_analytics and auto_plan require pro/ultra/vip', () => {
    // Free plan
    assert.equal(canUseFeature('free', 'topic_practice'), true);
    assert.equal(canUseFeature('free', 'error_bank'), true);
    assert.equal(canUseFeature('free', 'mock_exams'), true);
    assert.equal(canUseFeature('free', 'full_analytics'), false);
    assert.equal(canUseFeature('free', 'auto_plan'), false);

    // Pro plan
    assert.equal(canUseFeature('pro', 'full_analytics'), true);
    assert.equal(canUseFeature('pro', 'auto_plan'), true);

    // Ultra Pro plan
    assert.equal(canUseFeature('ultra_pro', 'full_analytics'), true);
    assert.equal(canUseFeature('ultra_pro', 'auto_plan'), true);

    // VIP plan
    assert.equal(canUseFeature('vip', 'full_analytics'), true);
    assert.equal(canUseFeature('vip', 'auto_plan'), true);
  });

  it('guarantees creator account aitmuratov190587@gmail.com is always VIP', () => {
    const creatorProfile = {
      id: '9df3d52e-dee8-4745-beeb-415783a5167a',
      email: 'aitmuratov190587@gmail.com',
      plan: 'free', // even if marked free in cache
    };
    assert.equal(resolveUserPlan(creatorProfile), 'vip');

    // Case insensitive email check
    assert.equal(resolveUserPlan({ email: 'AITMURATOV190587@GMAIL.COM' }), 'vip');
  });

  it('falls back to free when plan expires', () => {
    const expiredProfile = {
      id: 'other-user',
      plan: 'pro',
      plan_expires_at: '2020-01-01T00:00:00Z',
    };
    assert.equal(resolveUserPlan(expiredProfile), 'free');

    const activeProfile = {
      id: 'other-user',
      plan: 'pro',
      plan_expires_at: '2099-01-01T00:00:00Z',
    };
    assert.equal(resolveUserPlan(activeProfile), 'pro');
  });
});
