export interface MockTestOption {
  letter: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface MockTestQuestion {
  id: string; // e.g. 'pt1-rw-m1-q1'
  section: 'reading_writing' | 'math';
  module: 1 | 2;
  number: number;
  domain: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'multiple_choice' | 'student_produced_response';
  passage?: string;
  equations?: string[];
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  prompt: string;
  options?: MockTestOption[];
  correctAnswer: string; // 'A' | 'B' | 'C' | 'D' or numerical string '10', '83.5'
  explanation: string;
}

export interface MockModuleConfig {
  section: 'reading_writing' | 'math';
  module: 1 | 2;
  title: string;
  timeSeconds: number;
  totalQuestions: number;
  questions: MockTestQuestion[];
}

export interface FullMockTestConfig {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  totalQuestions: 98;
  totalMinutes: 134;
  modules: {
    rw1: MockModuleConfig;
    rw2: MockModuleConfig;
    math1: MockModuleConfig;
    math2: MockModuleConfig;
  };
}
