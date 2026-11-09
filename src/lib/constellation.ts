import { AnswerEvent, trend } from './analytics';

export type StarState = 'not_started' | 'needs_work' | 'getting_there' | 'strong' | 'coming_soon';

export interface ConstellationStarDef {
  id: string;
  name: string;
  domainId: string;
  domainName: string;
  section: 'math' | 'rw';
  practiceRoute: string;
  isAvailable: boolean;
  aliasIds: string[];
  x: number;
  y: number;
}

export interface ConstellationDomainDef {
  id: string;
  name: string; // Title / Display
  sentenceCaseName: string;
  section: 'math' | 'rw';
  labelX: number;
  labelY: number;
  stars: ConstellationStarDef[];
  connections: [number, number][]; // Line segments between star indices
  bounds: { minX: number; minY: number; maxX: number; maxY: number };
}

/**
 * Deterministic constellation map layout on a 1000 x 560 SVG canvas.
 * Exactly 8 official domains, 29 canonical skills.
 * All positions are fixed and seeded by skill IDs (no Math.random).
 */
export const CONSTELLATION_DOMAINS: ConstellationDomainDef[] = [
  // ── ROW 1: MATH & READING/WRITING DOMAINS ──
  {
    id: 'algebra',
    name: 'Algebra',
    sentenceCaseName: 'Algebra',
    section: 'math',
    labelX: 50,
    labelY: 58,
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [1, 3],
    ],
    bounds: { minX: 45, minY: 40, maxX: 235, maxY: 255 },
    stars: [
      {
        id: 'm-alg-1',
        name: 'Linear equations in one variable',
        domainId: 'algebra',
        domainName: 'Algebra',
        section: 'math',
        practiceRoute: '/practice/m-alg-1',
        isAvailable: true,
        aliasIds: ['math-alg-1'],
        x: 65,
        y: 115,
      },
      {
        id: 'm-alg-2',
        name: 'Linear functions',
        domainId: 'algebra',
        domainName: 'Algebra',
        section: 'math',
        practiceRoute: '/practice/m-alg-2',
        isAvailable: true,
        aliasIds: ['math-alg-3'],
        x: 130,
        y: 85,
      },
      {
        id: 'm-alg-3',
        name: 'Linear equations in two variables',
        domainId: 'algebra',
        domainName: 'Algebra',
        section: 'math',
        practiceRoute: '/practice/m-alg-3',
        isAvailable: true,
        aliasIds: ['math-alg-2'],
        x: 200,
        y: 120,
      },
      {
        id: 'm-alg-4',
        name: 'Systems of two linear equations',
        domainId: 'algebra',
        domainName: 'Algebra',
        section: 'math',
        practiceRoute: '/practice/m-alg-4',
        isAvailable: true,
        aliasIds: ['math-alg-4'],
        x: 160,
        y: 200,
      },
      {
        id: 'm-alg-5',
        name: 'Linear inequalities in one or two variables',
        domainId: 'algebra',
        domainName: 'Algebra',
        section: 'math',
        practiceRoute: '/practice/m-alg-5',
        isAvailable: true,
        aliasIds: ['math-alg-5'],
        x: 80,
        y: 220,
      },
    ],
  },
  {
    id: 'advanced-math',
    name: 'Advanced Math',
    sentenceCaseName: 'Advanced math',
    section: 'math',
    labelX: 290,
    labelY: 58,
    connections: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    bounds: { minX: 280, minY: 40, maxX: 475, maxY: 255 },
    stars: [
      {
        id: 'm-adv-1',
        name: 'Equivalent expressions',
        domainId: 'advanced-math',
        domainName: 'Advanced Math',
        section: 'math',
        practiceRoute: '/practice/m-adv-1',
        isAvailable: true,
        aliasIds: ['math-adv-1'],
        x: 315,
        y: 105,
      },
      {
        id: 'm-adv-2',
        name: 'Nonlinear equations and systems',
        domainId: 'advanced-math',
        domainName: 'Advanced Math',
        section: 'math',
        practiceRoute: '/practice/m-adv-2',
        isAvailable: true,
        aliasIds: ['math-adv-2'],
        x: 445,
        y: 125,
      },
      {
        id: 'm-adv-3',
        name: 'Nonlinear functions',
        domainId: 'advanced-math',
        domainName: 'Advanced Math',
        section: 'math',
        practiceRoute: '/practice/m-adv-3',
        isAvailable: true,
        aliasIds: ['math-adv-3'],
        x: 380,
        y: 215,
      },
    ],
  },
  {
    id: 'problem-solving',
    name: 'Problem-Solving and Data Analysis',
    sentenceCaseName: 'Problem solving and data analysis',
    section: 'math',
    labelX: 525,
    labelY: 58,
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [5, 1],
    ],
    bounds: { minX: 515, minY: 40, maxX: 735, maxY: 255 },
    stars: [
      {
        id: 'm-dat-1',
        name: 'Ratios, rates, and proportional relationships',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-1',
        isAvailable: true,
        aliasIds: ['math-psa-1'],
        x: 550,
        y: 105,
      },
      {
        id: 'm-dat-2',
        name: 'Percentages',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-2',
        isAvailable: true,
        aliasIds: ['math-psa-2'],
        x: 610,
        y: 85,
      },
      {
        id: 'm-dat-3',
        name: 'One-variable data and distributions',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-3',
        isAvailable: true,
        aliasIds: ['math-psa-3'],
        x: 680,
        y: 110,
      },
      {
        id: 'm-dat-4',
        name: 'Two-variable data and models',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-4',
        isAvailable: true,
        aliasIds: ['math-psa-4'],
        x: 720,
        y: 165,
      },
      {
        id: 'm-dat-5',
        name: 'Probability and conditional probability',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-5',
        isAvailable: true,
        aliasIds: ['math-psa-5'],
        x: 660,
        y: 215,
      },
      {
        id: 'm-dat-6',
        name: 'Inference from sample statistics',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-6',
        isAvailable: true,
        aliasIds: ['math-psa-6'],
        x: 595,
        y: 185,
      },
      {
        id: 'm-dat-7',
        name: 'Evaluating statistical claims and studies',
        domainId: 'problem-solving',
        domainName: 'Problem-Solving and Data Analysis',
        section: 'math',
        practiceRoute: '/practice/m-dat-7',
        isAvailable: true,
        aliasIds: [],
        x: 540,
        y: 235,
      },
    ],
  },
  {
    id: 'geometry-trig',
    name: 'Geometry and Trigonometry',
    sentenceCaseName: 'Geometry and trigonometry',
    section: 'math',
    labelX: 775,
    labelY: 58,
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [0, 2],
    ],
    bounds: { minX: 765, minY: 40, maxX: 965, maxY: 255 },
    stars: [
      {
        id: 'm-geo-1',
        name: 'Area and volume',
        domainId: 'geometry-trig',
        domainName: 'Geometry and Trigonometry',
        section: 'math',
        practiceRoute: '/practice/m-geo-1',
        isAvailable: false,
        aliasIds: ['math-geo-1'],
        x: 810,
        y: 110,
      },
      {
        id: 'm-geo-2',
        name: 'Lines, angles, and triangles',
        domainId: 'geometry-trig',
        domainName: 'Geometry and Trigonometry',
        section: 'math',
        practiceRoute: '/practice/m-geo-2',
        isAvailable: false,
        aliasIds: ['math-geo-2'],
        x: 935,
        y: 95,
      },
      {
        id: 'm-geo-3',
        name: 'Right triangles and trigonometry',
        domainId: 'geometry-trig',
        domainName: 'Geometry and Trigonometry',
        section: 'math',
        practiceRoute: '/practice/m-geo-3',
        isAvailable: false,
        aliasIds: ['math-geo-3'],
        x: 945,
        y: 205,
      },
      {
        id: 'm-geo-4',
        name: 'Circles',
        domainId: 'geometry-trig',
        domainName: 'Geometry and Trigonometry',
        section: 'math',
        practiceRoute: '/practice/m-geo-4',
        isAvailable: false,
        aliasIds: ['math-geo-4'],
        x: 825,
        y: 220,
      },
    ],
  },

  // ── ROW 2: READING & WRITING DOMAINS ──
  {
    id: 'craft-structure',
    name: 'Craft and Structure',
    sentenceCaseName: 'Craft and structure',
    section: 'rw',
    labelX: 50,
    labelY: 320,
    connections: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    bounds: { minX: 45, minY: 300, maxX: 235, maxY: 520 },
    stars: [
      {
        id: 'rw-crf-1',
        name: 'Cross-Text Connections',
        domainId: 'craft-structure',
        domainName: 'Craft and Structure',
        section: 'rw',
        practiceRoute: '/practice/cross-text',
        isAvailable: true,
        aliasIds: [],
        x: 75,
        y: 375,
      },
      {
        id: 'rw-crf-2',
        name: 'Text Structure and Purpose',
        domainId: 'craft-structure',
        domainName: 'Craft and Structure',
        section: 'rw',
        practiceRoute: '/practice/rw-crf-2',
        isAvailable: false,
        aliasIds: [],
        x: 195,
        y: 395,
      },
      {
        id: 'rw-crf-3',
        name: 'Words in Context',
        domainId: 'craft-structure',
        domainName: 'Craft and Structure',
        section: 'rw',
        practiceRoute: '/practice/rw-crf-3',
        isAvailable: false,
        aliasIds: [],
        x: 135,
        y: 485,
      },
    ],
  },
  {
    id: 'information-ideas',
    name: 'Information and Ideas',
    sentenceCaseName: 'Information and ideas',
    section: 'rw',
    labelX: 290,
    labelY: 320,
    connections: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    bounds: { minX: 280, minY: 300, maxX: 475, maxY: 520 },
    stars: [
      {
        id: 'rw-inf-1',
        name: 'Central Ideas and Details',
        domainId: 'information-ideas',
        domainName: 'Information and Ideas',
        section: 'rw',
        practiceRoute: '/practice/rw-inf-1',
        isAvailable: false,
        aliasIds: ['rw-cte-1'],
        x: 330,
        y: 370,
      },
      {
        id: 'rw-inf-2',
        name: 'Command of Evidence',
        domainId: 'information-ideas',
        domainName: 'Information and Ideas',
        section: 'rw',
        practiceRoute: '/practice/rw-inf-2',
        isAvailable: false,
        aliasIds: ['rw-coe-1', 'rw-coe-2'],
        x: 445,
        y: 410,
      },
      {
        id: 'rw-inf-3',
        name: 'Inferences',
        domainId: 'information-ideas',
        domainName: 'Information and Ideas',
        section: 'rw',
        practiceRoute: '/practice/rw-inf-3',
        isAvailable: false,
        aliasIds: [],
        x: 365,
        y: 490,
      },
    ],
  },
  {
    id: 'standard-english',
    name: 'Standard English Conventions',
    sentenceCaseName: 'Standard English conventions',
    section: 'rw',
    labelX: 525,
    labelY: 320,
    connections: [[0, 1]],
    bounds: { minX: 515, minY: 300, maxX: 735, maxY: 520 },
    stars: [
      {
        id: 'rw-sec-1',
        name: 'Boundaries',
        domainId: 'standard-english',
        domainName: 'Standard English Conventions',
        section: 'rw',
        practiceRoute: '/practice/rw-sec-1',
        isAvailable: false,
        aliasIds: [],
        x: 580,
        y: 415,
      },
      {
        id: 'rw-sec-2',
        name: 'Form, Structure, and Sense',
        domainId: 'standard-english',
        domainName: 'Standard English Conventions',
        section: 'rw',
        practiceRoute: '/practice/rw-sec-2',
        isAvailable: false,
        aliasIds: ['rw-fsu-1'],
        x: 690,
        y: 445,
      },
    ],
  },
  {
    id: 'expression-ideas',
    name: 'Expression of Ideas',
    sentenceCaseName: 'Expression of ideas',
    section: 'rw',
    labelX: 775,
    labelY: 320,
    connections: [[0, 1]],
    bounds: { minX: 765, minY: 300, maxX: 965, maxY: 520 },
    stars: [
      {
        id: 'rw-exp-1',
        name: 'Rhetorical Synthesis',
        domainId: 'expression-ideas',
        domainName: 'Expression of Ideas',
        section: 'rw',
        practiceRoute: '/practice/rw-exp-1',
        isAvailable: false,
        aliasIds: ['rw-rh-1'],
        x: 825,
        y: 415,
      },
      {
        id: 'rw-exp-2',
        name: 'Transitions',
        domainId: 'expression-ideas',
        domainName: 'Expression of Ideas',
        section: 'rw',
        practiceRoute: '/practice/rw-exp-2',
        isAvailable: false,
        aliasIds: ['rw-tr-1'],
        x: 935,
        y: 445,
      },
    ],
  },
];

/**
 * Flat list of all 29 canonical skills in the constellation.
 */
export const ALL_CONSTELLATION_STARS: ConstellationStarDef[] = CONSTELLATION_DOMAINS.flatMap(
  (d) => d.stars
);

/**
 * Map of canonical skill ID -> star definition.
 */
export const STAR_BY_ID_MAP: Record<string, ConstellationStarDef> = {};
ALL_CONSTELLATION_STARS.forEach((star) => {
  STAR_BY_ID_MAP[star.id] = star;
  star.aliasIds.forEach((alias) => {
    STAR_BY_ID_MAP[alias] = star;
  });
});

/**
 * Pure function: Deterministic coordinates check for a skill id.
 */
export function getDeterministicStarPosition(skillId: string): { x: number; y: number } {
  const star = STAR_BY_ID_MAP[skillId];
  if (star) {
    return { x: star.x, y: star.y };
  }
  // Deterministic fallback hash for unrecognized skills
  let hash = 0;
  for (let i = 0; i < skillId.length; i++) {
    hash = (hash << 5) - hash + skillId.charCodeAt(i);
    hash |= 0;
  }
  const posHash = Math.abs(hash);
  return {
    x: 80 + (posHash % 840),
    y: 70 + ((posHash >> 4) % 420),
  };
}

/**
 * Evaluates the star state from user metrics.
 * Rules:
 * - isAvailable === false => 'coming_soon'
 * - totalAnswers < 5 => 'not_started' (faint outline)
 * - accuracy >= 80 => 'strong' (moss, soft ring, twinkle)
 * - accuracy 70-79 OR trendDelta >= 10 => 'getting_there' (mustard)
 * - under 70 => 'needs_work' (berry)
 */
export function getStarState(params: {
  isAvailable: boolean;
  totalAnswers: number;
  accuracy: number;
  trendDelta?: number;
}): StarState {
  if (!params.isAvailable) {
    return 'coming_soon';
  }
  if (params.totalAnswers < 5) {
    return 'not_started';
  }
  if (params.accuracy >= 80) {
    return 'strong';
  }
  const delta = params.trendDelta ?? 0;
  if (params.accuracy >= 70 || delta >= 10) {
    return 'getting_there';
  }
  return 'needs_work';
}

export interface SkillUserStat {
  skillId: string;
  total: number;
  correct: number;
  accuracy: number | null; // null if 0 answers
  trendDelta: number;
  state: StarState;
}

/**
 * Aggregates all user answer events and maps them to canonical constellation skills.
 */
export function aggregateConstellationStats(
  events: AnswerEvent[]
): Record<string, SkillUserStat> {
  const rawBySkill: Record<
    string,
    { total: number; correct: number; events: AnswerEvent[] }
  > = {};

  for (const ev of events) {
    if (!ev.topic_id) continue;
    const canonicalStar = STAR_BY_ID_MAP[ev.topic_id];
    const canonicalId = canonicalStar ? canonicalStar.id : ev.topic_id;

    if (!rawBySkill[canonicalId]) {
      rawBySkill[canonicalId] = { total: 0, correct: 0, events: [] };
    }
    rawBySkill[canonicalId].total += 1;
    if (ev.is_correct) {
      rawBySkill[canonicalId].correct += 1;
    }
    rawBySkill[canonicalId].events.push(ev);
  }

  const result: Record<string, SkillUserStat> = {};

  for (const star of ALL_CONSTELLATION_STARS) {
    const raw = rawBySkill[star.id];
    const total = raw?.total || 0;
    const correct = raw?.correct || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : null;

    let trendDelta = 0;
    if (raw && raw.events.length > 0) {
      // Use standard trend calculation
      const t = trend(raw.events, star.id);
      trendDelta = t.delta;
    }

    const state = getStarState({
      isAvailable: star.isAvailable,
      totalAnswers: total,
      accuracy: accuracy ?? 0,
      trendDelta,
    });

    result[star.id] = {
      skillId: star.id,
      total,
      correct,
      accuracy,
      trendDelta,
      state,
    };
  }

  return result;
}

/**
 * Identifies the domain with the weakest performance (lowest accuracy with answers,
 * or first available domain if new user).
 */
export function findWeakestDomain(
  domainStats: Record<string, SkillUserStat>
): ConstellationDomainDef {
  let weakestDomain = CONSTELLATION_DOMAINS[0]; // Default: Algebra
  let lowestAccuracy = 101;
  let hasAnyQualifiedDomain = false;

  for (const domain of CONSTELLATION_DOMAINS) {
    let domainTotal = 0;
    let domainCorrect = 0;

    for (const star of domain.stars) {
      const stat = domainStats[star.id];
      if (stat && stat.total > 0) {
        domainTotal += stat.total;
        domainCorrect += stat.correct;
      }
    }

    if (domainTotal >= 3) {
      const avg = Math.round((domainCorrect / domainTotal) * 100);
      if (avg < lowestAccuracy) {
        lowestAccuracy = avg;
        weakestDomain = domain;
        hasAnyQualifiedDomain = true;
      }
    }
  }

  // If no domain has qualified answers, return Algebra or Craft and Structure
  if (!hasAnyQualifiedDomain) {
    return CONSTELLATION_DOMAINS[0];
  }

  return weakestDomain;
}

/**
 * Returns the top 3 weakest domains (for compact vertical stack on mobile).
 */
export function getTopWeakestDomains(
  domainStats: Record<string, SkillUserStat>,
  count = 3
): ConstellationDomainDef[] {
  const scored = CONSTELLATION_DOMAINS.map((domain) => {
    let total = 0;
    let correct = 0;

    for (const star of domain.stars) {
      const stat = domainStats[star.id];
      if (stat && stat.total > 0) {
        total += stat.total;
        correct += stat.correct;
      }
    }

    const acc = total > 0 ? (correct / total) * 100 : 50; // Neutral baseline for unattempted
    return {
      domain,
      total,
      accuracy: acc,
    };
  });

  // Sort by lowest accuracy first, with more attempts having priority
  scored.sort((a, b) => {
    if (a.total > 0 && b.total === 0) return -1;
    if (a.total === 0 && b.total > 0) return 1;
    return a.accuracy - b.accuracy;
  });

  return scored.slice(0, count).map((s) => s.domain);
}
