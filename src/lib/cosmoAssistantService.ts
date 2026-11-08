/**
 * SATBase Universal Assistant Service — Cosmo AI Engine
 *
 * Provides:
 * - 3-Layer context ingestion: Knowledge Base (Layer 1) + User Telemetry (Layer 2) + Active Route/Question Context (Layer 3)
 * - Fast local response resolver (`getLocalKnowledgeResponse`): instantly answers platform FAQs, formulas, pacing rules,
 *   and curriculum definitions without burning daily API quota or when offline/network failure occurs
 * - Remote AI resolver (`queryCosmoAssistant`): connects to the Supabase `tutor` edge function / Gemini API with structured prompt composition,
 *   handling quota exhaustion (30 msgs/day), rate limits, and fallback
 * - Socratic practice mode guard: strictly upholds hint levels and avoids spoiling answers during practice
 * - Exam mode lock: detects mock exam conditions (`/mock-tests/flashrush`) and returns polite exam integrity lock reply
 */

import { supabase } from './supabaseClient';
import {
  getFormulaByName,
  getAllReferenceFormulas,
  findBestKnowledgeMatch,
  getSuggestedQuickActions,
  KnowledgeItem,
  ReferenceFormula,
} from './cosmoKnowledge';
import { getAcademicTier } from './saEloService';

export interface CosmoQueryContext {
  mode: 'general' | 'practice' | 'results' | 'mock';
  currentPath?: string;
  questionId?: string;
  questionPrompt?: string;
  subjectDomain?: 'math' | 'reading-writing' | 'strategy' | 'platform';
  userScoreTarget?: number;
  currentElo?: number;
  // TutorContext fields from practice / question arena
  questionText?: string;
  passage?: string;
  choices?: Record<string, string> | Array<{ key: string; text: string }>;
  correctAnswer?: string;
  officialExplanation?: string;
  userAnswer?: string;
  hintLevel?: number; // 0 - 3
}

export interface CosmoAnswer {
  reply: string;
  source: 'ai_edge' | 'knowledge_base' | 'mock_locked';
  remainingQuota?: number;
  suggestedActions?: string[];
  error?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Mock Exam Condition Detection
// ─────────────────────────────────────────────────────────────────────────────

export function isMockExamLocked(context: CosmoQueryContext): boolean {
  if (context.mode === 'mock') return true;
  if (context.currentPath) {
    const path = context.currentPath.toLowerCase();
    if (path.includes('/mock-tests/flashrush') || path === '/mock-tests' || path.startsWith('/mock-tests/')) {
      // Exclude results view from lock
      if (!path.includes('/results')) {
        return true;
      }
    }
  }
  return false;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Format Formula for Local Response
// ─────────────────────────────────────────────────────────────────────────────

function formatFormulaResponse(formula: ReferenceFormula): string {
  const variableLines = Object.entries(formula.variables)
    .map(([v, desc]) => `• $${v}$: ${desc}`)
    .join('\n');

  const tipsLines = formula.usageTips?.map((t) => `• ${t}`).join('\n') || '';

  return `### 📐 ${formula.name} (${formula.category})

**Formula**:
$$${formula.latex}$$

**Variables**:
${variableLines}

${formula.description}

${formula.example ? `**Example**:\n${formula.example}\n` : ''}${tipsLines ? `**Key Test Tips**:\n${tipsLines}\n` : ''}You can also open the full College Board Reference Sheet at any time using the calculator and reference modal during practice.`;
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: Format Knowledge Topic for Local Response
// ─────────────────────────────────────────────────────────────────────────────

function formatKnowledgeResponse(topic: KnowledgeItem): string {
  let text = `### 🌟 ${topic.title} (${topic.category})\n\n${topic.content}\n\n`;

  if (topic.formulas && topic.formulas.length > 0) {
    text += `**Key Formulas & Relationships**:\n${topic.formulas.map((f) => `• ${f}`).join('\n')}\n\n`;
  }

  if (topic.tips && topic.tips.length > 0) {
    text += `**Pro Strategy Tips**:\n${topic.tips.map((t) => `• ${t}`).join('\n')}\n\n`;
  }

  if (topic.commonTraps && topic.commonTraps.length > 0) {
    text += `**Common Traps to Avoid**:\n${topic.commonTraps.map((c) => `• ⚠️ ${c}`).join('\n')}\n\n`;
  }

  return text.trim();
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. FAST LOCAL RESPONSE RESOLVER
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Resolves queries instantly from the local knowledge base without consuming API quota.
 * Returns null if the query requires external AI generation.
 */
export function getLocalKnowledgeResponse(
  query: string,
  context: CosmoQueryContext
): CosmoAnswer | null {
  // 1. Exam mode quiet lock
  if (isMockExamLocked(context)) {
    return {
      reply:
        "Cosmo is currently resting during your mock test. Mock exams simulate real test-day Bluebook conditions without AI assistance. Once you complete your exam, I'll be ready in the Results view to review every question and analysis with you!",
      source: 'mock_locked',
      suggestedActions: ['Continue Mock Exam', 'View Reference Sheet', 'Open Desmos Calculator'],
    };
  }

  const q = query.toLowerCase().trim();
  if (!q) return null;

  // 2. Direct Reference Formula Query Check
  const formulaMatch = getFormulaByName(q);
  if (formulaMatch) {
    return {
      reply: formatFormulaResponse(formulaMatch),
      source: 'knowledge_base',
      suggestedActions: [
        'View all reference formulas',
        'Desmos Calculator Tricks',
        'Practice this topic',
      ],
    };
  }

  // 2b. Requesting all formulas / reference sheet
  if (
    (q.includes('formula') && (q.includes('all') || q.includes('sheet') || q.includes('reference') || q.includes('list'))) ||
    q === 'math reference sheet' ||
    q === 'reference formulas'
  ) {
    const all = getAllReferenceFormulas();
    const formulaList = all
      .map((f) => `• **${f.name}**: $${f.latex}$`)
      .join('\n');

    return {
      reply: `### 📐 Official SAT Math Reference Sheet & Canonical Formulas\n\nThe following formulas are officially provided on the College Board Digital SAT Math section:\n\n${formulaList}\n\n💡 *Tip: You can ask me for detailed examples and breakdown of any formula (e.g., "how to use the 30-60-90 triangle" or "sphere volume formula").*`,
      source: 'knowledge_base',
      suggestedActions: [
        'Area of a Circle',
        'Pythagorean Theorem',
        'Special Right Triangles',
        'Volume of a Cylinder',
      ],
    };
  }

  // 3. Desmos Calculator queries
  if (
    q.includes('desmos') ||
    (q.includes('calculator') && (q.includes('trick') || q.includes('shortcut') || q.includes('how to use') || q.includes('graphing')))
  ) {
    const desmosTopic = findBestKnowledgeMatch('desmos calculator tricks', 'strategy');
    if (desmosTopic) {
      return {
        reply: formatKnowledgeResponse(desmosTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'How to solve systems in Desmos',
          'How to do regression in Desmos',
          'Pacing Strategy',
        ],
      };
    }
  }

  // 4. Pacing & Timing queries
  if (
    q.includes('pace') ||
    q.includes('pacing') ||
    (q.includes('time') && (q.includes('how long') || q.includes('per question') || q.includes('strategy') || q.includes('target')))
  ) {
    const pacingTopic = findBestKnowledgeMatch('pacing timing targets 80s math 65s rw', 'strategy');
    if (pacingTopic) {
      return {
        reply: formatKnowledgeResponse(pacingTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'Desmos Calculator Tricks',
          'Process of Elimination',
          'SA-ELO & Score Tiers',
        ],
      };
    }
  }

  // 5. Guessing & Elimination queries
  if (
    q.includes('guess') ||
    q.includes('guessing') ||
    q.includes('penalty') ||
    q.includes('eliminate') ||
    q.includes('elimination') ||
    q.includes('distractor')
  ) {
    const elimTopic = findBestKnowledgeMatch('elimination guessing penalty distractor traps', 'strategy');
    if (elimTopic) {
      return {
        reply: formatKnowledgeResponse(elimTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'Pacing Strategy',
          'Desmos Calculator Tricks',
          'Math Reference Sheet',
        ],
      };
    }
  }

  // 6. Platform Navigation queries (SA-ELO, Error Bank, FlashRush, Study Plan)
  if (
    q.includes('sa-elo') ||
    q.includes('rating system') ||
    (q.includes('elo') && (q.includes('how') || q.includes('what') || q.includes('work') || q.includes('tier'))) ||
    q.includes('academic tier')
  ) {
    const eloTopic = findBestKnowledgeMatch('sa-elo rating system tiers', 'platform');
    if (eloTopic) {
      return {
        reply: formatKnowledgeResponse(eloTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'FlashRush Mock Exams',
          'Error Bank Drills',
          'Dynamic 14-Day Study Plan',
        ],
      };
    }
  }

  if (q.includes('error bank') || q.includes('missed question')) {
    const ebTopic = findBestKnowledgeMatch('error bank drills review', 'platform');
    if (ebTopic) {
      return {
        reply: formatKnowledgeResponse(ebTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'Dynamic 14-Day Study Plan',
          'SA-ELO & Score Tiers',
          'FlashRush Mock Exams',
        ],
      };
    }
  }

  if (q.includes('flashrush') || (q.includes('mock') && (q.includes('how') || q.includes('what') || q.includes('exam')))) {
    const mockTopic = findBestKnowledgeMatch('flashrush mock exams bluebook quiet mode', 'platform');
    if (mockTopic) {
      return {
        reply: formatKnowledgeResponse(mockTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'Pacing Strategy',
          'Desmos Calculator Tricks',
          'Error Bank Drills',
        ],
      };
    }
  }

  if (q.includes('study plan') || q.includes('study planner') || (q.includes('schedule') && q.includes('sat'))) {
    const planTopic = findBestKnowledgeMatch('study plan planner tasks 14 days', 'platform');
    if (planTopic) {
      return {
        reply: formatKnowledgeResponse(planTopic),
        source: 'knowledge_base',
        suggestedActions: [
          'Error Bank Drills',
          'SA-ELO & Score Tiers',
          'FlashRush Mock Exams',
        ],
      };
    }
  }

  if (q.includes('platform tour') || q === 'how does satbase work?' || q === 'how satbase works') {
    return {
      reply: `### 🚀 Welcome to SATBase with Cosmo!

SATBase is built to deliver authentic College Board Bluebook testing and adaptive SAT mastery:

1. **SA-ELO Micro-Rating Engine**: Tracks your skill with micro-precision (200.0 to 800.0) across 5 Academic Tiers from Foundational to Ivy League.
2. **FlashRush Mock Exams**: High-fidelity 2-module timed test simulation matching Bluebook interface, embedded Desmos, and scoring.
3. **Error Bank**: Every question you miss is automatically saved for targeted re-drills and spaced repetition until permanently mastered.
4. **Dynamic 14-Day Study Plan**: An adaptive daily schedule focusing on your top 3 weakest skills with scheduled weekly diagnostics.
5. **Cosmo AI Tutor**: Your Socratic guide who offers progressive hints (1 to 3), step checks, and never spoils answers during practice!`,
      source: 'knowledge_base',
      suggestedActions: [
        'SA-ELO & Score Tiers',
        'Math Reference Sheet',
        'Desmos Calculator Tricks',
        'Pacing Strategy',
      ],
    };
  }

  // 7. Curriculum Domain Inquiries (e.g. "what is algebra", "cross-text connections", "rhetorical synthesis")
  const match = findBestKnowledgeMatch(q);
  if (match) {
    // Check if match has high keyword relevance to the user's explicit query
    const matchTokens = match.keywords.map((k) => k.toLowerCase());
    const isDirectMatch = matchTokens.some((kw) => q.includes(kw)) || match.title.toLowerCase().includes(q) || q.includes(match.title.toLowerCase());

    if (isDirectMatch) {
      return {
        reply: formatKnowledgeResponse(match),
        source: 'knowledge_base',
        suggestedActions: [
          'Show math formulas',
          'Desmos Calculator Tricks',
          'Pacing Strategy',
        ],
      };
    }
  }

  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. REMOTE AI RESOLVER WITH 3-LAYER CONTEXT INGESTION & FALLBACK
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Friendly error messages translated from Edge Function / Gemini status codes.
 */
function getFriendlyErrorMessage(code?: string, rawMessage?: string): string {
  switch (code) {
    case 'missing_secret':
      return 'Cosmo AI key is not configured in Supabase. Please ensure GEMINI_API_KEY is configured in Supabase project secrets.';
    case 'model_unavailable':
      return 'Cosmo AI is temporarily busy. Please try again in a few moments.';
    case 'gemini_rate_limited':
      return 'Cosmo AI received high traffic from Gemini. Please wait one minute and retry.';
    case 'gemini_blocked':
      return 'Cosmo AI is temporarily unavailable. Please verify API key permissions in Supabase.';
    case 'bad_input':
      return rawMessage || 'Invalid question format or message length. Please adjust your inquiry and retry.';
    case 'unauthorized':
      return 'Please sign in to chat with Cosmo.';
    case 'limit_reached':
      return 'You used your 30 messages for today. Come back tomorrow for more AI tutoring!';
    default:
      if (rawMessage?.includes('30 messages') || rawMessage?.includes('rate limit')) {
        return 'You used your 30 messages for today. Come back tomorrow for more AI tutoring!';
      }
      return rawMessage || 'Cosmo is temporarily resting. Please try again shortly.';
  }
}

/**
 * Connects to the Supabase Edge Function 'tutor' or Gemini API.
 * Synthesizes 3 layers of context (Knowledge Base + User Telemetry + View Context).
 * Gracefully recovers on rate limits, quota exhaustion, and network errors.
 */
export async function queryCosmoAssistant(
  message: string,
  context: CosmoQueryContext
): Promise<CosmoAnswer> {
  const trimmed = message.trim();

  // 1. Check Exam Mode Lock
  if (isMockExamLocked(context)) {
    return getLocalKnowledgeResponse(trimmed, context)!;
  }

  // 2. Validate Message Content
  if (!trimmed) {
    return {
      reply: "Please type a question or select a topic pill, and I'll be glad to help you!",
      source: 'knowledge_base',
      error: 'Message content is required',
      suggestedActions: getSuggestedQuickActions(context.mode, context.hintLevel).map((p) => p.label),
    };
  }

  // 3. Socratic Practice Mode Guard
  if (context.mode === 'practice') {
    const lower = trimmed.toLowerCase();
    const currentHint = context.hintLevel ?? 0;
    const asksForSolution =
      lower.includes('full solution') ||
      lower.includes('show me the answer') ||
      lower.includes('what is the answer') ||
      lower.includes('what is the correct answer') ||
      lower.includes('tell me the answer') ||
      lower.includes('give me the answer') ||
      lower.includes('which option is right') ||
      lower.includes('which option is correct') ||
      lower.includes('just solve it');

    if (asksForSolution && currentHint < 3) {
      const nextHint = Math.min(3, currentHint + 1);
      return {
        reply: `In Socratic practice mode, I want to help you discover the method yourself so you can crush it on test day! 🌟

Let's start with **Hint ${nextHint}/3** instead of spoiling the final answer right away. Once you work through all 3 hints, you can unlock the full solution!`,
        source: 'knowledge_base',
        suggestedActions: [
          `Give me Hint ${nextHint}/3`,
          'Check my step',
          'Explain the concept',
          'Show math formula',
        ],
      };
    }
  }

  // 4. Check for Fast Instant Local Knowledge Resolution
  // (Provides 0ms latency for formula, desmos, pacing, and platform inquiries)
  const localMatch = getLocalKnowledgeResponse(trimmed, context);
  if (localMatch && context.mode === 'general') {
    return localMatch;
  }

  // 5. Ingest 3-Layer Context Pipeline
  // Layer 1: Knowledge Base Match
  const knowledgeMatch = findBestKnowledgeMatch(trimmed, context.subjectDomain);
  const relevantFormula = getFormulaByName(trimmed);

  // Layer 2: User Telemetry
  const userScoreTarget = context.userScoreTarget || 1400;
  const currentElo = context.currentElo || 540;
  const academicTier = getAcademicTier(currentElo * 2); // composite estimate

  // Layer 3: Active View & Question Context
  const safeContext: Record<string, unknown> = {
    mode: context.mode,
    hintLevel: context.hintLevel ?? 0,
    currentPath: context.currentPath || '/practice',
    userTelemetry: {
      targetScore: userScoreTarget,
      currentElo: currentElo,
      academicTier: academicTier.tier,
    },
  };

  if (context.questionId) safeContext.questionId = context.questionId;
  if (context.questionPrompt) safeContext.questionText = context.questionPrompt;
  if (context.questionText) safeContext.questionText = context.questionText;
  if (context.passage) safeContext.passage = context.passage;
  if (context.choices) safeContext.choices = context.choices;
  if (context.correctAnswer) safeContext.correctAnswer = context.correctAnswer;
  if (context.officialExplanation) safeContext.officialExplanation = context.officialExplanation;
  if (context.userAnswer) safeContext.userAnswer = context.userAnswer;

  // Add Layer 1 Knowledge ground truth into context if available
  if (knowledgeMatch) {
    safeContext.knowledgeGroundTruth = {
      title: knowledgeMatch.title,
      category: knowledgeMatch.category,
      summary: knowledgeMatch.summary,
      keyFormulas: knowledgeMatch.formulas || [],
    };
  }
  if (relevantFormula) {
    safeContext.referenceFormula = {
      name: relevantFormula.name,
      latex: relevantFormula.latex,
      category: relevantFormula.category,
    };
  }

  // 6. Invoke Remote Edge Function / Gemini API
  try {
    const { data: { session } } = await supabase.auth.getSession();
    const headers: Record<string, string> = {};
    if (session?.access_token) {
      headers['Authorization'] = `Bearer ${session.access_token}`;
    }

    const { data, error } = await supabase.functions.invoke('tutor', {
      headers,
      body: {
        message: trimmed,
        context: safeContext,
      },
    });

    if (error) {
      let errStr = error.message || 'Failed to communicate with Cosmo';
      let errCode: string | undefined = undefined;

      try {
        if (typeof error === 'object' && 'context' in error) {
          const ctxError = error as { context?: { json?: () => Promise<{ error?: string; code?: string }> } };
          if (ctxError.context && typeof ctxError.context.json === 'function') {
            const bodyJson = await ctxError.context.json();
            if (bodyJson.error) errStr = bodyJson.error;
            if (bodyJson.code) errCode = bodyJson.code;
          }
        }
      } catch {
        // ignore JSON parse error
      }

      // Quota exhausted: fallback to local knowledge if available
      if (errCode === 'limit_reached' || errStr.includes('30 messages')) {
        if (localMatch) {
          return {
            reply: `*[Daily AI quota reached — answered from Cosmo Universal Knowledge Base]*\n\n${localMatch.reply}`,
            source: 'knowledge_base',
            remainingQuota: 0,
            suggestedActions: localMatch.suggestedActions,
          };
        }
        return {
          reply: 'You used your 30 messages for today. Come back tomorrow for more interactive AI tutoring! In the meantime, you can ask me about SAT formulas, Desmos tricks, and platform guides anytime without burning quota.',
          source: 'knowledge_base',
          remainingQuota: 0,
          suggestedActions: [
            'Math Reference Sheet',
            'Desmos Calculator Tricks',
            'Pacing Strategy',
            'Platform Tour',
          ],
        };
      }

      // Connection/Edge error: fallback to local knowledge
      if (localMatch) {
        return localMatch;
      }

      const friendlyMsg = getFriendlyErrorMessage(errCode, errStr);
      return {
        reply: friendlyMsg,
        source: 'knowledge_base',
        error: errStr,
        suggestedActions: getSuggestedQuickActions(context.mode, context.hintLevel).map((p) => p.label),
      };
    }

    if (data?.error) {
      if (data.code === 'limit_reached' || String(data.error).includes('30 messages')) {
        if (localMatch) {
          return {
            reply: `*[Daily AI quota reached — answered from Cosmo Universal Knowledge Base]*\n\n${localMatch.reply}`,
            source: 'knowledge_base',
            remainingQuota: 0,
            suggestedActions: localMatch.suggestedActions,
          };
        }
        return {
          reply: 'You used your 30 messages for today. Come back tomorrow for more interactive AI tutoring! In the meantime, you can ask me about SAT formulas, Desmos tricks, and platform guides anytime without burning quota.',
          source: 'knowledge_base',
          remainingQuota: 0,
          suggestedActions: [
            'Math Reference Sheet',
            'Desmos Calculator Tricks',
            'Pacing Strategy',
          ],
        };
      }

      if (localMatch) {
        return localMatch;
      }

      const friendlyMsg = getFriendlyErrorMessage(data.code, data.error);
      return {
        reply: friendlyMsg,
        source: 'knowledge_base',
        error: data.error,
        suggestedActions: getSuggestedQuickActions(context.mode, context.hintLevel).map((p) => p.label),
      };
    }

    // Success response
    if (data?.reply) {
      const suggested = getSuggestedQuickActions(context.mode, context.hintLevel).map((p) => p.label);
      return {
        reply: data.reply,
        source: 'ai_edge',
        remainingQuota: typeof data.remaining === 'number' ? data.remaining : undefined,
        suggestedActions: suggested,
      };
    }

    // Fallback if data format unexpected
    if (localMatch) return localMatch;

    return {
      reply: 'Cosmo processed your inquiry, but no response was returned. Please try rephrasing or asking about a specific formula or strategy.',
      source: 'knowledge_base',
      suggestedActions: getSuggestedQuickActions(context.mode, context.hintLevel).map((p) => p.label),
    };
  } catch (err: unknown) {
    // Graceful offline/network failure recovery
    if (localMatch) {
      return localMatch;
    }

    const errStr = err instanceof Error ? err.message : 'Network connection unavailable';
    return {
      reply:
        'Cosmo is temporarily offline or experiencing network difficulty. You can still ask me about SAT reference formulas, Desmos tricks, pacing rules, and platform guides using the local knowledge base!',
      source: 'knowledge_base',
      error: errStr,
      suggestedActions: [
        'Math Reference Sheet',
        'Desmos Calculator Tricks',
        'Pacing Strategy',
        'Platform Tour',
      ],
    };
  }
}
