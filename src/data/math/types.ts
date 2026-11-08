export type QuestionSource = 'collegeboard' | 'original' | 'unknown';

export interface MathOption {
  letter: string;
  text: string;
}

export interface MathQuestion {
  id: string;
  source: QuestionSource;
  license_note: string;
  num: number;
  topicId: string;
  topic: string;
  domain: string;
  section: 'math';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  difficultyTag: string;
  prompt: string;
  options: MathOption[];
  correctAnswer: string;
  correctValue: string;
  explanation: string;
  sourceFile: string;
  text1?: string;
  text2?: string;
}
