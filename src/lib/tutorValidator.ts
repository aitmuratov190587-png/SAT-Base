export interface TutorContext {
  mode: 'practice' | 'results' | 'general' | 'mock';
  questionId?: string;
  questionNumber?: number;
  topicName?: string;
  questionText?: string;
  passage?: string;
  choices?: Record<string, string> | Array<{ key: string; text: string }>;
  correctAnswer?: string;
  officialExplanation?: string;
  userAnswer?: string;
  hintLevel?: number; // 0 - 3
}

export interface TutorPayload {
  message: string;
  history?: Array<{ role: 'user' | 'assistant' | 'model'; content: string }>;
  context?: TutorContext;
}

export function validateTutorRequest(payload: TutorPayload): { isValid: boolean; error?: string; code?: string } {
  const { message, context } = payload;

  if (context?.mode === 'mock') {
    return { isValid: false, error: 'Cosmo is off during mock tests.', code: 'bad_input' };
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return { isValid: false, error: 'Message content is required', code: 'bad_input' };
  }

  if (message.length > 1000) {
    return { isValid: false, error: 'Message exceeds 1000 characters limit', code: 'bad_input' };
  }

  const contextStr = JSON.stringify(context || {});
  if (contextStr.length > 6000) {
    return { isValid: false, error: 'Context data exceeds 6000 characters limit', code: 'bad_input' };
  }

  return { isValid: true };
}
