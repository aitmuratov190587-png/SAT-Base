export type SectionType = 'rw' | 'math';

export interface TopicInfo {
  topicId: string;
  skillName: string;
  domain: string;
  section: SectionType;
  practiceRoute?: string;
}

export const TOPIC_MAP: Record<string, TopicInfo> = {
  // ── Reading & Writing: Craft and Structure ──
  'rw-crf-1': {
    topicId: 'rw-crf-1',
    skillName: 'Cross-Text Connections',
    domain: 'Craft and Structure',
    section: 'rw',
    practiceRoute: '/practice/cross-text',
  },
  'rw-crf-2': {
    topicId: 'rw-crf-2',
    skillName: 'Text Structure and Purpose',
    domain: 'Craft and Structure',
    section: 'rw',
    practiceRoute: '/practice/rw-crf-2',
  },
  'rw-crf-3': {
    topicId: 'rw-crf-3',
    skillName: 'Words in Context',
    domain: 'Craft and Structure',
    section: 'rw',
    practiceRoute: '/practice/rw-crf-3',
  },

  // ── Reading & Writing: Information and Ideas ──
  'rw-inf-1': {
    topicId: 'rw-inf-1',
    skillName: 'Inferences',
    domain: 'Information and Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-inf-1',
  },
  'rw-coe-1': {
    topicId: 'rw-coe-1',
    skillName: 'Command of Evidence (Textual)',
    domain: 'Information and Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-coe-1',
  },
  'rw-coe-2': {
    topicId: 'rw-coe-2',
    skillName: 'Command of Evidence (Quantitative)',
    domain: 'Information and Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-coe-2',
  },
  'rw-cte-1': {
    topicId: 'rw-cte-1',
    skillName: 'Central Ideas and Details',
    domain: 'Information and Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-cte-1',
  },

  // ── Reading & Writing: Expression of Ideas ──
  'rw-rh-1': {
    topicId: 'rw-rh-1',
    skillName: 'Rhetorical Synthesis',
    domain: 'Expression of Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-rh-1',
  },
  'rw-tr-1': {
    topicId: 'rw-tr-1',
    skillName: 'Transitions',
    domain: 'Expression of Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-tr-1',
  },

  // ── Reading & Writing: Standard English Conventions ──
  'rw-sec-1': {
    topicId: 'rw-sec-1',
    skillName: 'Boundaries',
    domain: 'Standard English Conventions',
    section: 'rw',
    practiceRoute: '/practice/rw-sec-1',
  },
  'rw-fsu-1': {
    topicId: 'rw-fsu-1',
    skillName: 'Form, Structure, and Sense',
    domain: 'Standard English Conventions',
    section: 'rw',
    practiceRoute: '/practice/rw-fsu-1',
  },

  // ── Math: Algebra ──
  'math-alg-1': {
    topicId: 'math-alg-1',
    skillName: 'Linear Equations in One Variable',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/math-alg-1',
  },
  'math-alg-2': {
    topicId: 'math-alg-2',
    skillName: 'Linear Equations in Two Variables',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/math-alg-2',
  },
  'math-alg-3': {
    topicId: 'math-alg-3',
    skillName: 'Linear Functions',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/math-alg-3',
  },
  'math-alg-4': {
    topicId: 'math-alg-4',
    skillName: 'Systems of Two Linear Equations',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/math-alg-4',
  },
  'math-alg-5': {
    topicId: 'math-alg-5',
    skillName: 'Linear Inequalities',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/math-alg-5',
  },

  // ── Math: Advanced Math ──
  'math-adv-1': {
    topicId: 'math-adv-1',
    skillName: 'Equivalent Expressions',
    domain: 'Advanced Math',
    section: 'math',
    practiceRoute: '/practice/math-adv-1',
  },
  'math-adv-2': {
    topicId: 'math-adv-2',
    skillName: 'Nonlinear Equations and Systems',
    domain: 'Advanced Math',
    section: 'math',
    practiceRoute: '/practice/math-adv-2',
  },
  'math-adv-3': {
    topicId: 'math-adv-3',
    skillName: 'Nonlinear Functions',
    domain: 'Advanced Math',
    section: 'math',
    practiceRoute: '/practice/math-adv-3',
  },

  // ── Math: Problem-Solving and Data Analysis ──
  'math-psa-1': {
    topicId: 'math-psa-1',
    skillName: 'Ratios, Rates, and Proportions',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/math-psa-1',
  },
  'math-psa-2': {
    topicId: 'math-psa-2',
    skillName: 'Percentages',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/math-psa-2',
  },
  'math-psa-3': {
    topicId: 'math-psa-3',
    skillName: 'One-Variable Data & Distributions',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/math-psa-3',
  },
  'math-psa-4': {
    topicId: 'math-psa-4',
    skillName: 'Two-Variable Data & Models',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/math-psa-4',
  },
  'math-psa-5': {
    topicId: 'math-psa-5',
    skillName: 'Probability and Conditional Probability',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/math-psa-5',
  },
  'math-psa-6': {
    topicId: 'math-psa-6',
    skillName: 'Inference and Statistics',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/math-psa-6',
  },

  // ── Math: Geometry and Trigonometry ──
  'math-geo-1': {
    topicId: 'math-geo-1',
    skillName: 'Area and Volume',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/math-geo-1',
  },
  'math-geo-2': {
    topicId: 'math-geo-2',
    skillName: 'Lines, Angles, and Triangles',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/math-geo-2',
  },
  'math-geo-3': {
    topicId: 'math-geo-3',
    skillName: 'Right Triangles and Trigonometry',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/math-geo-3',
  },
  'math-geo-4': {
    topicId: 'math-geo-4',
    skillName: 'Circles',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/math-geo-4',
  },

  // ── Canonical Question Registry Mappings (m-alg, m-adv, m-dat, m-geo, rw-exp, rw-inf, rw-sec) ──
  'm-alg-1': {
    topicId: 'm-alg-1',
    skillName: 'Linear equations in one variable',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/m-alg-1',
  },
  'm-alg-2': {
    topicId: 'm-alg-2',
    skillName: 'Linear functions',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/m-alg-2',
  },
  'm-alg-3': {
    topicId: 'm-alg-3',
    skillName: 'Linear equations in two variables',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/m-alg-3',
  },
  'm-alg-4': {
    topicId: 'm-alg-4',
    skillName: 'Systems of two linear equations in two variables',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/m-alg-4',
  },
  'm-alg-5': {
    topicId: 'm-alg-5',
    skillName: 'Linear inequalities in one or two variables',
    domain: 'Algebra',
    section: 'math',
    practiceRoute: '/practice/m-alg-5',
  },
  'm-adv-1': {
    topicId: 'm-adv-1',
    skillName: 'Equivalent expressions',
    domain: 'Advanced Math',
    section: 'math',
    practiceRoute: '/practice/m-adv-1',
  },
  'm-adv-2': {
    topicId: 'm-adv-2',
    skillName: 'Nonlinear equations and systems',
    domain: 'Advanced Math',
    section: 'math',
    practiceRoute: '/practice/m-adv-2',
  },
  'm-adv-3': {
    topicId: 'm-adv-3',
    skillName: 'Nonlinear functions',
    domain: 'Advanced Math',
    section: 'math',
    practiceRoute: '/practice/m-adv-3',
  },
  'm-dat-1': {
    topicId: 'm-dat-1',
    skillName: 'Ratios, rates, proportional relationships, and units',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-1',
  },
  'm-dat-2': {
    topicId: 'm-dat-2',
    skillName: 'Percentages',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-2',
  },
  'm-dat-3': {
    topicId: 'm-dat-3',
    skillName: 'One-variable data: Distributions and measures of center and spread',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-3',
  },
  'm-dat-4': {
    topicId: 'm-dat-4',
    skillName: 'Two-variable data: Models and scatterplots',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-4',
  },
  'm-dat-5': {
    topicId: 'm-dat-5',
    skillName: 'Probability and conditional probability',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-5',
  },
  'm-dat-6': {
    topicId: 'm-dat-6',
    skillName: 'Inference from sample statistics and margin of error',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-6',
  },
  'm-dat-7': {
    topicId: 'm-dat-7',
    skillName: 'Evaluating statistical claims: Observational studies and experiments',
    domain: 'Problem-Solving and Data Analysis',
    section: 'math',
    practiceRoute: '/practice/m-dat-7',
  },
  'm-geo-1': {
    topicId: 'm-geo-1',
    skillName: 'Area and volume',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/m-geo-1',
  },
  'm-geo-2': {
    topicId: 'm-geo-2',
    skillName: 'Lines, angles, and triangles',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/m-geo-2',
  },
  'm-geo-3': {
    topicId: 'm-geo-3',
    skillName: 'Right triangles and trigonometry',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/m-geo-3',
  },
  'm-geo-4': {
    topicId: 'm-geo-4',
    skillName: 'Circles',
    domain: 'Geometry and Trigonometry',
    section: 'math',
    practiceRoute: '/practice/m-geo-4',
  },
  'rw-exp-1': {
    topicId: 'rw-exp-1',
    skillName: 'Rhetorical synthesis',
    domain: 'Expression of Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-exp-1',
  },
  'rw-exp-2': {
    topicId: 'rw-exp-2',
    skillName: 'Transitions',
    domain: 'Expression of Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-exp-2',
  },
  'rw-inf-2': {
    topicId: 'rw-inf-2',
    skillName: 'Command of evidence',
    domain: 'Information and Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-inf-2',
  },
  'rw-inf-3': {
    topicId: 'rw-inf-3',
    skillName: 'Inferences',
    domain: 'Information and Ideas',
    section: 'rw',
    practiceRoute: '/practice/rw-inf-3',
  },
  'rw-sec-2': {
    topicId: 'rw-sec-2',
    skillName: 'Form, structure, and sense',
    domain: 'Standard English Conventions',
    section: 'rw',
    practiceRoute: '/practice/rw-sec-2',
  },
};

/**
 * Returns topic metadata for any given topic_id, falling back gracefully
 * to synthesized skill details if an unlisted ID is provided.
 */
export function getTopicMeta(topicId: string): TopicInfo {
  if (TOPIC_MAP[topicId]) {
    return TOPIC_MAP[topicId];
  }

  // Graceful fallback heuristics
  const isRw = topicId.startsWith('rw-');
  return {
    topicId,
    skillName: topicId
      .replace(/^[a-z]+-[a-z]+-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()) || 'General Skills',
    domain: isRw ? 'Reading and Writing' : 'Math',
    section: isRw ? 'rw' : 'math',
    practiceRoute: `/practice/${topicId}`,
  };
}

/**
 * Pure helper: returns the human-readable skill name for any topic ID.
 */
export function getSkillName(topicId: string): string {
  if (TOPIC_MAP[topicId]) {
    return TOPIC_MAP[topicId].skillName;
  }
  return getTopicMeta(topicId).skillName;
}
