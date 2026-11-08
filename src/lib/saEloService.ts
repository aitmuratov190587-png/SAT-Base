/**
 * SAT-Adaptive ELO (SA-ELO) Engine
 *
 * Micro-stepped ELO algorithm specifically calibrated for Digital SAT specifications.
 * Steps are scaled down by 10x to prevent rating inflation and keep the user
 * moving realistically within their empirical knowledge corridor.
 *
 * @see c:\Users\user\Downloads\gemini-code-1792729949575.md
 */

export type SATSection = 'math' | 'reading_writing';
export type QuestionDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface SAEloParams {
  userRating: number;              // Current section rating (200.0 - 800.0)
  difficulty: QuestionDifficulty;  // Easy (360), Medium (520), Hard (680)
  isCorrect: boolean;              // User's answer outcome
  timeSeconds: number;             // Response time in seconds
  section: SATSection;             // Section context for pacing calibration
  questionsSolvedTotal: number;    // Lifetime solved count for adaptive K-factor
}

export interface SAEloResult {
  previousRating: number;          // Float (200.0 - 800.0)
  newRating: number;               // Float (200.0 - 800.0)
  delta: number;                   // Clamped delta (-2.5 to +2.5, min |0.1|)
  expectedScore: number;           // Logistic probability E (0.0 to 1.0)
  kFactor: number;                 // Applied K-factor (4.8, 3.2, or 1.6)
  pacingFactor: number;            // Applied pacing multiplier (0.7, 0.85, 1.0, or 1.3)
  questionBaseline: number;        // R_savol (360, 520, or 680)
}

export interface AcademicTierInfo {
  tier: 'Foundational' | 'Developing Scholar' | 'Proficient Candidate' | 'Advanced Competitor' | 'Ivy League / Elite Tier';
  minScore: number;
  maxScore: number;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  description: string;
}

// ── Difficulty baseline ratings (R_savol) ──
export const DIFFICULTY_BASELINES: Record<QuestionDifficulty, number> = {
  Easy: 360,
  Medium: 520,
  Hard: 680,
};

// ── Section target response times (seconds) ──
export const TARGET_TIMES: Record<SATSection, number> = {
  math: 80,
  reading_writing: 65,
};

/**
 * Returns the adaptive K-factor based on total questions solved:
 * - < 50 questions: K = 4.8 (Calibration phase)
 * - 50 – 200 questions: K = 3.2 (Refinement phase)
 * - > 200 questions: K = 1.6 (Mastery / Anchor phase)
 */
export function getAdaptiveKFactor(questionsSolvedTotal: number): number {
  if (questionsSolvedTotal < 50) return 4.8;
  if (questionsSolvedTotal <= 200) return 3.2;
  return 1.6;
}

/**
 * Calculates pacing factor based on response time:
 * - Rushed (< 15s):
 *     - If wrong: 1.3 (penalize reckless guessing)
 *     - If right: 0.7 (discount probable lucky guess)
 * - Too slow (> 1.7x target time): 0.85 (mild fatigue/overtime damping)
 * - Normal: 1.0
 */
export function getPacingFactor(
  timeSeconds: number,
  isCorrect: boolean,
  section: SATSection
): number {
  const target = TARGET_TIMES[section] || 75;

  // Rushed threshold (< 15 seconds)
  if (timeSeconds < 15) {
    return isCorrect ? 0.7 : 1.3;
  }

  // Overtime threshold (> 1.7x target)
  if (timeSeconds > target * 1.7) {
    return 0.85;
  }

  return 1.0;
}

/**
 * Logistic probability function:
 * E = 1 / (1 + 10^((R_savol - R_user) / 400))
 */
export function calculateExpectedScore(userRating: number, questionRating: number): number {
  const exponent = (questionRating - userRating) / 400;
  return 1 / (1 + Math.pow(10, exponent));
}

/**
 * Computes the updated SA-ELO rating after answering a question.
 *
 * Rules:
 * - Scale: 200.0 - 800.0
 * - Maximum delta per question: ±2.5 points
 * - Minimum delta for correct answer: +0.1 points
 * - Minimum delta for incorrect answer: -0.1 points
 */
export function calculateSAElo(params: SAEloParams): SAEloResult {
  const {
    userRating,
    difficulty,
    isCorrect,
    timeSeconds,
    section,
    questionsSolvedTotal,
  } = params;

  // 1. Difficulty baseline
  const questionBaseline = DIFFICULTY_BASELINES[difficulty] || 520;

  // 2. Expected outcome (logistic probability)
  const expectedScore = calculateExpectedScore(userRating, questionBaseline);
  const actualScore = isCorrect ? 1.0 : 0.0;

  // 3. Adaptive K-factor & Pacing multiplier
  const kFactor = getAdaptiveKFactor(questionsSolvedTotal);
  const pacingFactor = getPacingFactor(timeSeconds, isCorrect, section);

  // 4. Raw micro-delta
  const rawDelta = kFactor * pacingFactor * (actualScore - expectedScore);

  // 5. Clamping:
  // - Absolute change capped at ±2.5
  // - Correct: at least +0.1, at most +2.5
  // - Incorrect: at most -0.1, at least -2.5
  let clampedDelta: number;
  if (isCorrect) {
    clampedDelta = Math.max(0.1, Math.min(2.5, rawDelta));
  } else {
    clampedDelta = Math.min(-0.1, Math.max(-2.5, rawDelta));
  }

  // 6. Apply to user rating & clamp to SAT bounds [200.0, 800.0]
  const unroundedNew = Math.max(200.0, Math.min(800.0, userRating + clampedDelta));

  // Keep precision to 1 decimal place (e.g. 542.4)
  const newRating = Math.round(unroundedNew * 10) / 10;
  const delta = Math.round((newRating - userRating) * 10) / 10;

  return {
    previousRating: userRating,
    newRating,
    delta,
    expectedScore: Math.round(expectedScore * 1000) / 1000,
    kFactor,
    pacingFactor,
    questionBaseline,
  };
}

/**
 * Returns the official Academic Tier definition for a given total SAT score (400 - 1600).
 *
 * Tiers:
 * - 400–900: Foundational
 * - 910–1100: Developing Scholar
 * - 1110–1300: Proficient Candidate
 * - 1310–1450: Advanced Competitor
 * - 1460–1600: Ivy League / Elite Tier
 */
export function getAcademicTier(totalScore: number): AcademicTierInfo {
  const score = Math.max(400, Math.min(1600, Math.round(totalScore)));

  if (score >= 1460) {
    return {
      tier: 'Ivy League / Elite Tier',
      minScore: 1460,
      maxScore: 1600,
      accentColor: 'var(--color-cobalt)',
      badgeBg: 'bg-cobalt/10',
      badgeBorder: 'border-cobalt/30',
      description: 'Exceptional academic mastery; 99th percentile readiness for top-tier global institutions.',
    };
  }

  if (score >= 1310) {
    return {
      tier: 'Advanced Competitor',
      minScore: 1310,
      maxScore: 1450,
      accentColor: 'var(--color-accent)',
      badgeBg: 'bg-accent-subtle',
      badgeBorder: 'border-accent/30',
      description: 'Strong mastery of complex algebraic structures and advanced rhetorical synthesis.',
    };
  }

  if (score >= 1110) {
    return {
      tier: 'Proficient Candidate',
      minScore: 1110,
      maxScore: 1300,
      accentColor: 'var(--color-moss)',
      badgeBg: 'bg-moss/10',
      badgeBorder: 'border-moss/30',
      description: 'Solid foundational command across both sections with consistent problem-solving pacing.',
    };
  }

  if (score >= 910) {
    return {
      tier: 'Developing Scholar',
      minScore: 910,
      maxScore: 1100,
      accentColor: 'var(--color-mustard)',
      badgeBg: 'bg-mustard/10',
      badgeBorder: 'border-mustard/30',
      description: 'Building core grammatical boundaries and foundational linear algebra operations.',
    };
  }

  return {
    tier: 'Foundational',
    minScore: 400,
    maxScore: 900,
    accentColor: 'var(--color-ink-2)',
    badgeBg: 'bg-paper-2',
    badgeBorder: 'border-line',
    description: 'Initial diagnostic stage; focused on core rules and untimed concept clarity.',
  };
}
