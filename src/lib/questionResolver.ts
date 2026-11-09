import { FLASH_RUSH_QUESTIONS } from '../data/flashRushMock';
import { QUESTION_REGISTRY, PracticeQuestion } from '../data/questionRegistry';
import { SAT_QUESTIONS_MOCK } from '../data/satQuestionsMock';

export interface ResolvedQuestionOption {
  letter: string;
  text: string;
}

export interface ResolvedQuestion {
  id: string;
  section: 'reading_writing' | 'math';
  domain: string;
  skill: string;
  passage?: string;
  prompt: string;
  options: ResolvedQuestionOption[];
  correctAnswerLetter: string;
  explanation: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

/**
 * Resolves any question by ID across FlashRush Mock tests, Question Registry topics,
 * and SAT mock questions. Returns a normalized, safe ResolvedQuestion object.
 */
export function resolveQuestionById(questionId: string, fallbackTopicId?: string | null): ResolvedQuestion {
  // 1. Search in FlashRush questions
  const flashQ = FLASH_RUSH_QUESTIONS.find((q) => q.id === questionId);
  if (flashQ) {
    return {
      id: flashQ.id,
      section: flashQ.section,
      domain: flashQ.domain,
      skill: flashQ.skill,
      passage: flashQ.passage,
      prompt: flashQ.questionPrompt,
      options: flashQ.options.map((opt) => ({ letter: opt.id, text: opt.text })),
      correctAnswerLetter: flashQ.correctAnswerId,
      explanation: flashQ.explanation,
      difficulty: flashQ.difficulty,
    };
  }

  // 2. Search in Question Registry topics
  for (const topic of Object.values(QUESTION_REGISTRY)) {
    if (!topic.questions) continue;
    const found = topic.questions.find((q: PracticeQuestion) => q.id === questionId);
    if (found) {
      const isCrossText = 'text1' in found;
      if (isCrossText) {
        return {
          id: found.id,
          section: 'reading_writing',
          domain: topic.domainName || 'Craft and Structure',
          skill: topic.topicName || 'Cross-Text Connections',
          passage: `Text 1:\n${found.text1}\n\nText 2:\n${found.text2}`,
          prompt: found.prompt,
          options: found.options.map((opt) => ({ letter: opt.letter, text: opt.text })),
          correctAnswerLetter: found.correctAnswer,
          explanation: found.explanation,
          difficulty: 'Medium',
        };
      } else {
        // Math question
        const mathQ = found as any;
        const optionsList: ResolvedQuestionOption[] = Array.isArray(mathQ.options)
          ? mathQ.options.map((opt: any, idx: number) => {
              if (typeof opt === 'string') {
                const match = opt.match(/^([A-D])\)\s*(.*)$/);
                if (match) return { letter: match[1], text: match[2] };
                const letters = ['A', 'B', 'C', 'D'];
                return { letter: letters[idx] || String(idx + 1), text: opt };
              }
              return { letter: opt.letter || opt.id || String(idx + 1), text: opt.text || String(opt) };
            })
          : [];

        const correctLetter =
          typeof mathQ.correctAnswer === 'string' && mathQ.correctAnswer.length === 1
            ? mathQ.correctAnswer
            : typeof mathQ.correctAnswerId === 'string'
            ? mathQ.correctAnswerId
            : 'A';

        return {
          id: mathQ.id,
          section: 'math',
          domain: topic.domainName || 'Math',
          skill: topic.topicName || 'Algebra',
          prompt: mathQ.questionPrompt || mathQ.prompt || 'Solve the problem:',
          options: optionsList,
          correctAnswerLetter: correctLetter,
          explanation: mathQ.explanation || 'Step-by-step mathematical derivation.',
          difficulty: mathQ.difficulty || 'Medium',
        };
      }
    }
  }

  // 3. Search in SAT mock questions
  const satQ = SAT_QUESTIONS_MOCK.find((q) => q.id === questionId);
  if (satQ) {
    const options: ResolvedQuestionOption[] = satQ.options.map((opt, idx) => {
      const match = opt.match(/^([A-D])\)\s*(.*)$/);
      if (match) return { letter: match[1], text: match[2] };
      const letters = ['A', 'B', 'C', 'D'];
      return { letter: letters[idx] || 'A', text: opt };
    });
    const correctMatch = satQ.correctAnswer.match(/^([A-D])\)/);
    const correctLetter = correctMatch ? correctMatch[1] : 'A';

    return {
      id: satQ.id,
      section: (satQ.section === 'Math' ? 'math' : 'reading_writing'),
      domain: satQ.domain,
      skill: satQ.domain,
      prompt: satQ.questionText,
      options,
      correctAnswerLetter: correctLetter,
      explanation: satQ.explanation,
      difficulty: satQ.difficulty,
    };
  }

  // 4. Safe structured fallback for any question ID
  const isMathTopic = fallbackTopicId?.startsWith('m-') || questionId.startsWith('m-') || questionId.includes('math');
  return {
    id: questionId,
    section: isMathTopic ? 'math' : 'reading_writing',
    domain: isMathTopic ? 'Advanced Math & Algebra' : 'Reading and Writing',
    skill: fallbackTopicId || 'SAT Diagnostic Review',
    prompt: `Review missed question (${questionId}). Analyze the core principles and solve step-by-step with Cosmo AI.`,
    options: [
      { letter: 'A', text: 'Option A' },
      { letter: 'B', text: 'Option B' },
      { letter: 'C', text: 'Option C' },
      { letter: 'D', text: 'Option D' },
    ],
    correctAnswerLetter: 'A',
    explanation: 'Detailed step-by-step Socratic solution available through Ask Cosmo.',
    difficulty: 'Medium',
  };
}
