import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from './AuthContext';
import { TutorContext } from '../lib/tutorValidator';
import {
  SubscriptionPlan,
  PlanLimits,
  PLAN_LIMITS,
  resolveUserPlan,
  canUseFeature,
  isMockTestUnlocked,
} from '../lib/plans';

// ── SAT Official Test Dates 2026-2027 ──
export const SAT_TEST_DATES = [
  { date: '2026-10-03', label: 'October 3, 2026' },
  { date: '2026-11-07', label: 'November 7, 2026' },
  { date: '2026-12-05', label: 'December 5, 2026' },
  { date: '2027-03-06', label: 'March 6, 2027' },
  { date: '2027-05-01', label: 'May 1, 2027' },
  { date: '2027-06-05', label: 'June 5, 2027' },
];

export interface ScoreBreakdown {
  math: number;
  english: number;
  total: number;
}

export interface FlashRushAttempt {
  attemptId: string;
  math: number;
  english: number;
  answered: number;
  correct: number;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'student' | 'teacher';
  targetScore: ScoreBreakdown;
  startingScore: ScoreBreakdown;
  currentScore: ScoreBreakdown;
  satDate: string;
  streak: number;
  totalStudyHours: number;
  testsTaken: number;
  questionsSolved: number;
  isSetupComplete: boolean;
  plan: SubscriptionPlan;
  planExpiresAt?: string | null;
}

export interface UserStatistics {
  streak: number;
  totalStudyHours: number;
  studySeconds: number;
  todayStudySeconds: number;
  weekStudySeconds: number;
  testsTaken: number;
  questionsSolved: number;
  correctAnswers: number;
  accuracy: number | null;
}

function getTashkentStudyDay() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

interface AppState {
  profile: UserProfile | null;
  profileLoading: boolean;
  statistics: UserStatistics | null;
  mockAttempts: FlashRushAttempt[];
  refreshStatistics: () => Promise<void>;
  sidebarOpen: boolean;
  showSetupModal: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  setShowSetupModal: (show: boolean) => void;
  updateProfile: (updates: Partial<UserProfile>) => Promise<{ success: boolean; error?: string }>;
  completeSetup: (data: {
    satDate: string;
    currentScore: ScoreBreakdown;
    targetScore: ScoreBreakdown;
  }) => Promise<{ success: boolean; error?: string }>;
  language: 'en' | 'uz';
  setLanguage: (lang: 'en' | 'uz') => void;
  isAITutorOpen: boolean;
  setIsAITutorOpen: (open: boolean) => void;
  tutorContext?: TutorContext;
  tutorInitialMessage?: string;
  openAITutor: (context?: TutorContext, initialMessage?: string) => void;
  closeAITutor: () => void;
  plan: SubscriptionPlan;
  isVip: boolean;
  canUse: (feature: 'auto_plan' | 'full_analytics' | 'insights' | 'all_mocks') => boolean;
  isMockUnlocked: (mockNumber: number) => boolean;
  planLimits: PlanLimits;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [statistics, setStatistics] = useState<UserStatistics | null>(null);
  const [mockAttempts, setMockAttempts] = useState<FlashRushAttempt[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);
  const [tutorContext, setTutorContext] = useState<TutorContext | undefined>(undefined);
  const [tutorInitialMessage, setTutorInitialMessage] = useState<string | undefined>(undefined);

  const openAITutor = useCallback((ctx?: TutorContext, initialMsg?: string) => {
    // Sanitize: ensure ctx is a valid TutorContext and NEVER a React SyntheticEvent or DOM Event
    const isSyntheticEvent =
      ctx &&
      typeof ctx === 'object' &&
      ('nativeEvent' in ctx || 'currentTarget' in ctx || 'target' in ctx);
    const validCtx = ctx && !isSyntheticEvent && typeof ctx === 'object' ? ctx : undefined;
    setTutorContext(validCtx);
    setTutorInitialMessage(typeof initialMsg === 'string' ? initialMsg : undefined);
    setIsAITutorOpen(true);
  }, []);
  const closeAITutor = useCallback(() => {
    setIsAITutorOpen(false);
    setTutorInitialMessage(undefined);
  }, []);

  // ── Language preference: default 'en' ──
  const [language, setLanguageState] = useState<'en' | 'uz'>(() => {
    try {
      const saved = localStorage.getItem('satbase_language');
      if (saved === 'en' || saved === 'uz') return saved;
    } catch {}
    return 'en';
  });

  const setLanguage = useCallback((lang: 'en' | 'uz') => {
    setLanguageState(lang);
    try {
      localStorage.setItem('satbase_language', lang);
    } catch {}
  }, []);

  // ── Theme preference: respect saved preference, fallback to system preference ──
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('satbase_theme') || localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('satbase_theme', theme);
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const refreshStatistics = useCallback(async () => {
    if (!user) {
      setStatistics(null);
      setMockAttempts([]);
      return;
    }

    const [statisticsResult, attemptsResult] = await Promise.all([
      supabase.rpc('get_my_statistics'),
      supabase
        .from('flashrush_attempts')
        .select('attempt_id, math, english, answered, correct, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(20),
    ]);
    const { data, error } = statisticsResult;
    if (error) {
      console.error('Error fetching study statistics:', error.message);
    } else {
      const next = data as UserStatistics;
      setStatistics(next);
      setProfile((prev) => prev ? {
        ...prev,
        streak: next.streak,
        totalStudyHours: next.totalStudyHours,
        testsTaken: next.testsTaken,
        questionsSolved: next.questionsSolved,
      } : prev);
    }

    if (attemptsResult.error) {
      console.error('Error fetching FlashRush history:', attemptsResult.error.message);
    } else {
      const attempts = (attemptsResult.data || []).map((attempt) => ({
        attemptId: attempt.attempt_id,
        math: attempt.math,
        english: attempt.english,
        answered: attempt.answered,
        correct: attempt.correct,
        createdAt: attempt.created_at,
      }));
      setMockAttempts(attempts);
      const latestAttempt = attempts[attempts.length - 1];
      if (latestAttempt) {
        setProfile((prev) => prev ? {
          ...prev,
          currentScore: {
            math: latestAttempt.math,
            english: latestAttempt.english,
            total: latestAttempt.math + latestAttempt.english,
          },
        } : prev);
      }
    }
  }, [user]);

  // Record only visible, authenticated study time. Small increments keep a
  // closed tab or lost network from inflating the user's total.
  useEffect(() => {
    if (!user) return;

    let sessionId = crypto.randomUUID();
    let sessionDay = getTashkentStudyDay();
    let pendingSeconds = 0;
    let saving = false;
    let lastTick = Date.now();

    const resetTick = () => { lastTick = Date.now(); };
    document.addEventListener('visibilitychange', resetTick);

    const interval = window.setInterval(async () => {
      const currentDay = getTashkentStudyDay();
      if (currentDay !== sessionDay) {
        sessionDay = currentDay;
        sessionId = crypto.randomUUID();
      }
      const now = Date.now();
      const elapsed = Math.max(0, Math.min(30, Math.floor((now - lastTick) / 1000)));
      lastTick = now;
      if (document.visibilityState !== 'visible' || elapsed === 0) return;
      pendingSeconds += elapsed;
      if (saving) return;

      const seconds = Math.min(pendingSeconds, 60);
      saving = true;
      const { error } = await supabase.rpc('record_study_time', {
        p_session_id: sessionId,
        p_seconds: seconds,
      });
      saving = false;
      if (!error) {
        pendingSeconds -= seconds;
        await refreshStatistics();
      } else {
        console.error('Error saving study time:', error.message);
      }
    }, 15_000);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener('visibilitychange', resetTick);
    };
  }, [user, refreshStatistics]);

  // ── Fetch profile from Supabase ──
  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setProfileLoading(false);
      return;
    }

    setProfileLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error.message);
      // Profile might not exist yet — create fallback from auth data
      const fallback: UserProfile = {
        id: user.id,
        name: user.user_metadata?.full_name || user.user_metadata?.name || 'Student',
        email: user.email || '',
        avatarUrl: '/images/avatar-blue.png',
        role: 'student',
        targetScore: { math: 0, english: 0, total: 0 },
        startingScore: { math: 0, english: 0, total: 0 },
        currentScore: { math: 0, english: 0, total: 0 },
        satDate: '',
        streak: 0,
        totalStudyHours: 0,
        testsTaken: 0,
        questionsSolved: 0,
        isSetupComplete: false,
        plan: user.email === 'aitmuratov190587@gmail.com' ? 'vip' : 'free',
        planExpiresAt: null,
      };
      setProfile(fallback);
      setShowSetupModal(true);
    } else if (data) {
      const p: UserProfile = {
        id: data.id,
        name: data.full_name || user.user_metadata?.full_name || 'Student',
        email: data.email || user.email || '',
        avatarUrl:
          data.avatar_url &&
          (data.avatar_url.startsWith('/images/avatar') || data.avatar_url === '/images/avatar-blue.png')
            ? data.avatar_url
            : '/images/avatar-blue.png',
        role: data.role || 'student',
        targetScore: {
          math: data.target_score_math || 0,
          english: data.target_score_english || 0,
          total: (data.target_score_math || 0) + (data.target_score_english || 0),
        },
        startingScore: {
          math: data.starting_score_math || 0,
          english: data.starting_score_english || 0,
          total: (data.starting_score_math || 0) + (data.starting_score_english || 0),
        },
        currentScore: {
          math: data.current_score_math || 0,
          english: data.current_score_english || 0,
          total: (data.current_score_math || 0) + (data.current_score_english || 0),
        },
        satDate: data.sat_date || '',
        streak: data.streak || 0,
        totalStudyHours: data.total_study_hours || 0,
        testsTaken: data.tests_taken || 0,
        questionsSolved: data.questions_solved || 0,
        isSetupComplete: data.is_setup_complete || false,
        plan: data.email === 'aitmuratov190587@gmail.com' ? 'vip' : resolveUserPlan(data),
        planExpiresAt: data.plan_expires_at || null,
      };
      setProfile(p);
      if (!p.isSetupComplete) {
        setShowSetupModal(true);
      }
    }
    await refreshStatistics();
    setProfileLoading(false);
  }, [user, refreshStatistics]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // ── Update profile in Supabase ──
  const updateProfile = async (updates: Partial<UserProfile>): Promise<{ success: boolean; error?: string }> => {
    // Keep local fallback in state immediately so the app is never blocked
    setProfile((prev) => (prev ? { ...prev, ...updates } : prev));

    if (!user) return { success: true };

    // Map UserProfile fields to DB columns
    const dbUpdates: Record<string, unknown> = {};
    if (updates.name !== undefined) dbUpdates.full_name = updates.name;
    if (updates.satDate !== undefined) dbUpdates.sat_date = updates.satDate || null;
    if (updates.currentScore !== undefined) {
      dbUpdates.current_score_math = updates.currentScore.math || null;
      dbUpdates.current_score_english = updates.currentScore.english || null;
    }
    if (updates.startingScore !== undefined) {
      dbUpdates.starting_score_math = updates.startingScore.math || null;
      dbUpdates.starting_score_english = updates.startingScore.english || null;
    }
    if (updates.targetScore !== undefined) {
      dbUpdates.target_score_math = updates.targetScore.math || null;
      dbUpdates.target_score_english = updates.targetScore.english || null;
    }
    if (updates.isSetupComplete !== undefined) dbUpdates.is_setup_complete = updates.isSetupComplete;

    try {
      const { error } = await supabase
        .from('profiles')
        .update(dbUpdates)
        .eq('id', user.id);

      if (error) {
        console.error('Error updating profile in Supabase:', error.message);
        return { success: false, error: error.message };
      }
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error';
      console.error('Error updating profile:', msg);
      return { success: false, error: msg };
    }
  };

  // ── Complete setup ──
  const completeSetup = async (data: {
    satDate: string;
    currentScore: ScoreBreakdown;
    targetScore: ScoreBreakdown;
  }): Promise<{ success: boolean; error?: string }> => {
    // Always apply locally and close modal so user is never trapped
    setProfile((prev) =>
      prev
        ? {
            ...prev,
            ...data,
            startingScore: data.currentScore,
            isSetupComplete: true,
          }
        : prev
    );
    setShowSetupModal(false);

    if (!user) return { success: true };

    const dbUpdates = {
      sat_date: data.satDate || null,
      current_score_math: data.currentScore.math || null,
      current_score_english: data.currentScore.english || null,
      starting_score_math: data.currentScore.math || null,
      starting_score_english: data.currentScore.english || null,
      target_score_math: data.targetScore.math,
      target_score_english: data.targetScore.english,
      is_setup_complete: true,
    };

    try {
      const { error } = await supabase
        .from('profiles')
        .update(dbUpdates)
        .eq('id', user.id);

      if (error) {
        console.error('Error saving setup to Supabase:', error.message);
        return { success: false, error: error.message };
      }
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error';
      console.error('Error saving setup:', msg);
      return { success: false, error: msg };
    }
  };

  const activePlan: SubscriptionPlan =
    profile?.plan || (user?.email === 'aitmuratov190587@gmail.com' ? 'vip' : 'free');
  const isVip = activePlan === 'vip' || user?.email === 'aitmuratov190587@gmail.com';
  const canUse = useCallback(
    (feature: 'auto_plan' | 'full_analytics' | 'insights' | 'all_mocks') => {
      return canUseFeature(activePlan, feature);
    },
    [activePlan]
  );
  const isMockUnlocked = useCallback(
    (mockNumber: number) => {
      return isMockTestUnlocked(activePlan, mockNumber);
    },
    [activePlan]
  );
  const planLimits: PlanLimits = PLAN_LIMITS[activePlan] || PLAN_LIMITS.free;

  return (
    <AppContext.Provider
      value={{
        profile,
        profileLoading,
        statistics,
        mockAttempts,
        refreshStatistics,
        sidebarOpen,
        showSetupModal,
        theme,
        toggleTheme,
        setSidebarOpen,
        setShowSetupModal,
        updateProfile,
        completeSetup,
        language,
        setLanguage,
        isAITutorOpen,
        setIsAITutorOpen,
        tutorContext,
        tutorInitialMessage,
        openAITutor,
        closeAITutor,
        plan: activePlan,
        isVip,
        canUse,
        isMockUnlocked,
        planLimits,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppState {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export const useAppContext = useApp;
