export type Student = {
  id: string; full_name: string | null; avatar_url: string | null; email: string | null; role: string;
  sat_date: string | null; current_score_math: number | null; current_score_english: number | null;
  target_score_math: number | null; target_score_english: number | null; starting_score_math: number | null;
  starting_score_english: number | null; is_setup_complete: boolean; tests_taken: number; questions_solved: number;
  created_at: string; lastSignInAt: string | null; lastActivityAt: string | null; streak: number;
  studySeconds90d?: number; emailConfirmed?: boolean;
};

export type Overview = {
  generatedAt: string; students: Student[];
  activity90d: { date: string; seconds: number; activeStudents: number }[];
  userGrowth: { date: string; daily: number; cumulative: number }[];
  totalStudyTimeByDay: { date: string; seconds: number; cumulativeSeconds: number }[];
  realtime: { online: number; events: { id: string; user_id: string; event_type: string; page: string; created_at: string; full_name: string | null; email: string | null; event_data: Record<string, unknown> }[] };
};

export type StudentDetail = Student & {
  emailConfirmedAt: string | null;
  study: { totalSeconds: number; sessionCount: number; activeDays: number; days: { date: string; seconds: number }[] };
  flashrush: { attempts: { attempt_id: string; math: number; english: number; answered: number; correct: number; created_at: string }[]; attemptCount: number; answered: number; correct: number };
  answers: { events: { id: string; topic_id: string; question_id: string; is_correct: boolean; time_seconds: number; source: string; created_at: string }[]; total: number; correct: number; topics: { topicId: string; answered: number; correct: number; seconds: number }[]; progress: { id: string; topic_id: string; question_id: string; selected_option: string; is_correct: boolean; time_seconds: number; updated_at: string }[] };
  errorBank: { open: number; resolved: number; items: { id: string; question_id: string; topic_id: string | null; added_at: string; resolved_at: string | null }[] };
  tasks: { id: string; plan_date: string; task_type: string; title: string; topic_id: string | null; target_minutes: number; done_at: string | null }[];
};
