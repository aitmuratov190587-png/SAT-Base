import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  Sparkles,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileCheck2,
  RotateCcw,
  Coffee,
  Pencil,
  Trash2,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { supabase } from '../lib/supabaseClient';
import { TOPIC_MAP } from '../lib/topics';
import { generatePlan, addDays, formatTaskTitle, PlanTask, TaskType } from '../lib/planner';
import { buildPlanFacts } from '../lib/factsBuilder';
import { fetchAIInsight } from '../lib/insightsService';
import {
  fetchStudyPlanTasks,
  saveStudyPlanTask,
  toggleTaskDone,
  moveTaskDate,
  deleteStudyPlanTask,
  applyGeneratedPlan,
} from '../lib/studyPlanService';
import { AnswerEvent, weakestSkills } from '../lib/analytics';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { EmptyState } from '../components/ui/EmptyState';
import { Skeleton } from '../components/ui/Skeleton';
import { Modal } from '../components/ui/Modal';
import { Input } from '../components/ui/Input';
import UpgradeModal from '../components/ui/UpgradeModal';

/**
 * Pure date formatting helpers in UTC to avoid timezone shifts
 */
function getTodayString(): string {
  return new Date().toISOString().slice(0, 10);
}

function formatDayName(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
}

function formatDayFull(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
}

function formatDateShort(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

function formatDayNumber(dateStr: string): string {
  return dateStr.slice(8, 10);
}

function getDaysRemaining(examDateStr: string, todayStr: string): number {
  const [y1, m1, d1] = todayStr.split('-').map(Number);
  const [y2, m2, d2] = examDateStr.split('-').map(Number);
  const dToday = Date.UTC(y1, m1 - 1, d1);
  const dExam = Date.UTC(y2, m2 - 1, d2);
  const diffMs = dExam - dToday;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export default function StudyPlan() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, updateProfile, language, setLanguage, canUse } = useApp();
  const hasAutoPlan = canUse('auto_plan');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const userId = user?.id || 'guest';
  const todayStr = useMemo(() => getTodayString(), []);

  // Study plan state
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<PlanTask[]>([]);
  const [weakTopics, setWeakTopics] = useState<string[]>([]);

  // AI Plan Note state
  const [planNote, setPlanNote] = useState<string | null>(null);
  const [isLoadingPlanNote, setIsLoadingPlanNote] = useState(false);

  // Navigation: week offset from today (0 = current 7-day window, 7 = next week)
  const [weekOffset, setWeekOffset] = useState<number>(0);

  // Mobile selected day in the 7-day strip (0..6)
  const [mobileDayIndex, setMobileDayIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  // Drag and drop state
  const [dragOverDate, setDragOverDate] = useState<string | null>(null);

  // Modals state
  const [isAutoPlanOpen, setIsAutoPlanOpen] = useState(false);
  const [autoPlanDailyMinutes, setAutoPlanDailyMinutes] = useState<number>(60);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Partial<PlanTask> | null>(null);
  const [isExamDateModalOpen, setIsExamDateModalOpen] = useState(false);
  const [inputExamDate, setInputExamDate] = useState<string>(profile?.satDate || '');

  const handleOpenAutoPlan = () => {
    if (!hasAutoPlan) {
      setShowUpgradeModal(true);
    } else {
      setIsAutoPlanOpen(true);
    }
  };

  // Calculate 7 visible dates for the current view
  const visibleDates = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => addDays(todayStr, weekOffset + i));
  }, [todayStr, weekOffset]);

  // Load telemetry and study plan tasks
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    async function loadData() {
      try {
        const [loadedTasks, eventsRes, progressRes] = await Promise.all([
          fetchStudyPlanTasks(userId),
          userId && userId !== 'guest'
            ? supabase.from('answer_events').select('*').eq('user_id', userId)
            : Promise.resolve({ data: [] }),
          userId && userId !== 'guest'
            ? supabase.from('user_question_progress').select('*').eq('user_id', userId)
            : Promise.resolve({ data: [] }),
        ]);

        if (!isMounted) return;

        setTasks(loadedTasks);

        // Derive weak skills from telemetry
        const allEvents: AnswerEvent[] = [];
        if (eventsRes.data) {
          for (const ev of eventsRes.data) {
            allEvents.push({
              topic_id: ev.topic_id,
              question_id: ev.question_id,
              is_correct: ev.is_correct,
              time_seconds: ev.time_seconds,
              source: ev.source,
              created_at: ev.created_at,
            });
          }
        }
        if (progressRes.data) {
          for (const prog of progressRes.data) {
            allEvents.push({
              topic_id: prog.topic_id,
              question_id: prog.question_id,
              is_correct: prog.is_correct,
              time_seconds: prog.time_seconds || 0,
              source: 'practice',
              created_at: prog.created_at,
            });
          }
        }

        const calculatedWeak = weakestSkills(allEvents, 3, 1);
        if (calculatedWeak.length > 0) {
          setWeakTopics(calculatedWeak.map((s) => s.topicId));
        } else {
          // Default fallbacks
          setWeakTopics(['rw-crf-3', 'math-alg-1', 'rw-inf-1']);
        }
      } catch (err) {
        console.warn('Error loading study plan data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  // Group tasks by plan_date
  const tasksByDate = useMemo(() => {
    const map: Record<string, PlanTask[]> = {};
    for (const d of visibleDates) {
      map[d] = [];
    }
    for (const task of tasks) {
      if (map[task.plan_date]) {
        map[task.plan_date].push(task);
      }
    }
    return map;
  }, [tasks, visibleDates]);

  // Weekly stats for the visible 7 days
  const weeklyStats = useMemo(() => {
    let totalTargetMinutes = 0;
    let completedMinutes = 0;

    for (const d of visibleDates) {
      const dayTasks = tasksByDate[d] || [];
      for (const t of dayTasks) {
        totalTargetMinutes += t.target_minutes;
        if (t.done_at) {
          completedMinutes += t.target_minutes;
        }
      }
    }

    const percentage = totalTargetMinutes > 0
      ? Math.min(100, Math.round((completedMinutes / totalTargetMinutes) * 100))
      : 0;

    return { totalTargetMinutes, completedMinutes, percentage };
  }, [tasksByDate, visibleDates]);

  // Exam countdown calculation
  const satDate = profile?.satDate;
  const daysToExam = useMemo(() => {
    if (!satDate) return null;
    return getDaysRemaining(satDate, todayStr);
  }, [satDate, todayStr]);

  // Handle task completion toggle with pen-stroke animation
  const handleToggleDone = async (task: PlanTask) => {
    if (!task.id) return;
    const isNowDone = !task.done_at;

    // Optimistic UI update
    const updatedDoneAt = isNowDone ? new Date().toISOString() : null;
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, done_at: updatedDoneAt } : t))
    );

    await toggleTaskDone(userId, task.id, isNowDone);
  };

  // Handle drag and drop task move between dates
  const handleMoveTask = async (taskId: string, targetDate: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, plan_date: targetDate } : t))
    );
    await moveTaskDate(userId, taskId, targetDate);
  };

  // Delete task
  const handleDeleteTask = async (taskId: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
    await deleteStudyPlanTask(userId, taskId);
  };

  // Save manual task (add or edit)
  const handleSaveManualTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTask || !editingTask.title?.trim() || !editingTask.plan_date) return;

    const titleToSave = editingTask.topic_id
      ? formatTaskTitle(editingTask.title, editingTask.topic_id)
      : editingTask.title.trim();

    const saved = await saveStudyPlanTask(userId, {
      id: editingTask.id,
      plan_date: editingTask.plan_date,
      task_type: editingTask.task_type || 'practice',
      title: titleToSave,
      topic_id: editingTask.topic_id || null,
      target_minutes: editingTask.target_minutes ?? 30,
      done_at: editingTask.done_at || null,
    });

    setTasks((prev) => {
      const exists = prev.some((t) => t.id === saved.id);
      if (exists) {
        return prev.map((t) => (t.id === saved.id ? saved : t));
      }
      return [...prev, saved].sort((a, b) => a.plan_date.localeCompare(b.plan_date));
    });

    setIsTaskModalOpen(false);
    setEditingTask(null);
  };

  // Generate and apply auto-plan preview
  const previewGeneratedTasks = useMemo(() => {
    if (!isAutoPlanOpen) return [];
    return generatePlan({
      today: todayStr,
      examDate: satDate || null,
      dailyMinutes: autoPlanDailyMinutes,
      weakSkills: weakTopics,
    });
  }, [isAutoPlanOpen, todayStr, satDate, autoPlanDailyMinutes, weakTopics]);

  // Fallback plan note
  const fallbackPlanNote = useMemo(() => {
    if (language === 'uz') {
      return "Ushbu reja zaif mavzularga ko'proq mashg'ulot ajratadi, haftalik to'liq diagnostika bilan rivojlanishingizni tekshiradi va dam olish kunini saqlagan holda kunlik o'rganishni muvozanatlaydi.";
    }
    return "This plan balances daily targeted sessions on your weakest skills with a weekly diagnostic test and scheduled rest days to prevent burnout.";
  }, [language]);

  // Safe plan facts builder
  const currentPlanFacts = useMemo(() => {
    const focusNames = weakTopics.map((id) => TOPIC_MAP[id]?.skillName || id).slice(0, 3);
    return buildPlanFacts({
      daysToExam: daysToExam ?? undefined,
      dailyMinutes: autoPlanDailyMinutes,
      weeklyTargetMinutes: weeklyStats.totalTargetMinutes,
      focusSkills: focusNames,
      restDays: 1,
      plannedTasksCount: tasks.length,
      hasDiagnosticWeekly: true,
    });
  }, [daysToExam, autoPlanDailyMinutes, weeklyStats.totalTargetMinutes, weakTopics, tasks.length]);

  const handleRefreshPlanNote = useCallback(async () => {
    if (isLoadingPlanNote) return;
    setIsLoadingPlanNote(true);
    try {
      const res = await fetchAIInsight('plan', currentPlanFacts, language);
      if (res?.text) {
        setPlanNote(res.text);
      }
    } finally {
      setIsLoadingPlanNote(false);
    }
  }, [currentPlanFacts, language, isLoadingPlanNote]);

  // Load plan note on mount if tasks exist
  useEffect(() => {
    if (tasks.length === 0) return;
    let isMounted = true;
    setIsLoadingPlanNote(true);
    fetchAIInsight('plan', currentPlanFacts, language)
      .then((res) => {
        if (isMounted && res?.text) {
          setPlanNote(res.text);
        }
      })
      .finally(() => {
        if (isMounted) setIsLoadingPlanNote(false);
      });

    return () => {
      isMounted = false;
    };
  }, [tasks.length, currentPlanFacts, language]);

  const handleApplyAutoPlan = async () => {
    if (previewGeneratedTasks.length === 0) return;
    setLoading(true);
    try {
      const updated = await applyGeneratedPlan(userId, previewGeneratedTasks);
      setTasks(updated);
      setIsAutoPlanOpen(false);

      // Fetch fresh explanation for newly applied auto-plan
      const freshFacts = buildPlanFacts({
        daysToExam: daysToExam ?? undefined,
        dailyMinutes: autoPlanDailyMinutes,
        weeklyTargetMinutes: autoPlanDailyMinutes * 6,
        focusSkills: weakTopics.map((id) => TOPIC_MAP[id]?.skillName || id).slice(0, 3),
        restDays: 1,
        plannedTasksCount: updated.length,
        hasDiagnosticWeekly: true,
      });
      setIsLoadingPlanNote(true);
      fetchAIInsight('plan', freshFacts, language)
        .then((res) => {
          if (res?.text) setPlanNote(res.text);
        })
        .finally(() => setIsLoadingPlanNote(false));
    } catch (err) {
      console.warn('Error applying auto plan:', err);
    } finally {
      setLoading(false);
    }
  };

  // Save exam date from modal
  const handleSaveExamDate = async () => {
    if (!inputExamDate) return;
    await updateProfile({ satDate: inputExamDate });
    setIsExamDateModalOpen(false);
  };

  // Task type icon helper
  const renderTaskIcon = (type: TaskType) => {
    switch (type) {
      case 'mock':
        return <FileCheck2 className="w-4 h-4 text-cobalt shrink-0" />;
      case 'review':
        return <RotateCcw className="w-4 h-4 text-mustard shrink-0" />;
      case 'rest':
        return <Coffee className="w-4 h-4 text-ink-muted shrink-0" />;
      case 'practice':
      default:
        return <BookOpen className="w-4 h-4 text-accent shrink-0" />;
    }
  };

  // Task type badge styling helper
  const getTaskBadgeStyle = (type: TaskType) => {
    switch (type) {
      case 'mock':
        return 'bg-cobalt/10 text-cobalt border-cobalt/20';
      case 'review':
        return 'bg-mustard/10 text-mustard border-mustard/20';
      case 'rest':
        return 'bg-paper-2 text-ink-muted border-line';
      case 'practice':
      default:
        return 'bg-accent/10 text-accent border-accent/20';
    }
  };

  return (
    <div className="study-plan-page space-y-6 max-w-[1440px] mx-auto pb-12 font-sans text-ink">
      {/* ── 8. AI PLAN NOTE ("Why this plan") ───────────────────── */}
      {(tasks.length > 0 || planNote) && (
        <div
          id="ai-plan-note"
          data-slot="ai-plan-note"
          className="p-4 sm:p-5 rounded-xl bg-surface border border-line flex flex-col gap-2.5 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <h2 className="font-serif text-base sm:text-lg font-semibold text-ink">
                {language === 'uz' ? 'Nega aynan ushbu reja?' : 'Why this plan'}
              </h2>
              <span className="text-[10px] font-sans px-1.5 py-0.5 rounded-full bg-paper-2 border border-line text-ink-2">
                AI-generated
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'uz' : 'en')}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-paper-2 hover:bg-surface border border-line text-ink-2 hover:text-ink transition-colors"
                title="Change language"
              >
                {language.toUpperCase()}
              </button>
              <button
                type="button"
                onClick={handleRefreshPlanNote}
                disabled={isLoadingPlanNote}
                className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors disabled:opacity-40"
                title="Refresh note"
                aria-label="Refresh plan note"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingPlanNote ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {isLoadingPlanNote ? (
            <div className="space-y-2 animate-pulse py-1">
              <div className="h-4 bg-paper-2 rounded w-4/5" />
              <div className="h-4 bg-paper-2 rounded w-3/5" />
            </div>
          ) : (
            <p className="text-sm font-sans text-ink leading-relaxed">
              {planNote || fallbackPlanNote}
            </p>
          )}
        </div>
      )}

      {/* ── 1. HEADER ─────────────────────────────────────────── */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-line">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Study plan
          </h1>

          {/* Countdown / Date Picker prompt */}
          <div className="mt-1.5 flex items-center gap-2 text-sm text-ink-2">
            {satDate && daysToExam !== null ? (
              <div className="flex items-center gap-2">
                {daysToExam > 0 ? (
                  <>
                    <span className="font-mono text-base font-semibold text-accent">
                      {daysToExam}
                    </span>
                    <span>{daysToExam === 1 ? 'day' : 'days'} to your exam</span>
                    <span className="text-xs text-ink-muted font-mono">
                      ({formatDateShort(satDate)})
                    </span>
                  </>
                ) : daysToExam === 0 ? (
                  <span className="font-semibold text-accent">Your SAT exam is today!</span>
                ) : (
                  <span>Exam was {Math.abs(daysToExam)} {Math.abs(daysToExam) === 1 ? 'day' : 'days'} ago</span>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setInputExamDate(satDate);
                    setIsExamDateModalOpen(true);
                  }}
                  className="text-xs text-accent hover:underline ml-1 cursor-pointer"
                >
                  Change date
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>No exam date set.</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExamDateModalOpen(true)}
                  className="text-xs text-accent p-0 h-auto font-medium hover:bg-transparent"
                >
                  Set exam date
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center flex-wrap gap-2.5">
          <Button
            variant="accent"
            size="sm"
            onClick={handleOpenAutoPlan}
            leftIcon={<Sparkles className="w-3.5 h-3.5 text-white" />}
          >
            <span>Auto-plan</span>
            {!hasAutoPlan && (
              <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-white/20 text-[10px] uppercase font-mono font-bold tracking-wider">
                Pro
              </span>
            )}
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setEditingTask({
                plan_date: visibleDates[mobileDayIndex] || todayStr,
                task_type: 'practice',
                title: '',
                target_minutes: 30,
              });
              setIsTaskModalOpen(true);
            }}
            leftIcon={<Plus className="w-3.5 h-3.5" />}
          >
            Add task
          </Button>

          {/* Week offset controls */}
          <div className="flex items-center bg-surface border border-line rounded-[var(--radius-sm)] p-0.5 ml-1">
            <button
              type="button"
              onClick={() => setWeekOffset((prev) => prev - 7)}
              className="p-1.5 text-ink-2 hover:text-ink hover:bg-paper-2 rounded-[var(--radius-sm)] transition-colors cursor-pointer"
              aria-label="Previous week"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setWeekOffset(0)}
              className={`px-2.5 py-1 text-xs font-medium rounded-[var(--radius-sm)] transition-colors cursor-pointer ${
                weekOffset === 0
                  ? 'bg-paper-2 text-ink font-semibold'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              This week
            </button>
            <button
              type="button"
              onClick={() => setWeekOffset((prev) => prev + 7)}
              className="p-1.5 text-ink-2 hover:text-ink hover:bg-paper-2 rounded-[var(--radius-sm)] transition-colors cursor-pointer"
              aria-label="Next week"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT LAYOUT: LEFT RAIL + WEEK VIEW ───────── */}
      {satDate && daysToExam !== null && daysToExam <= 0 ? (
        <Card className="p-8 max-w-lg mx-auto text-center space-y-4 my-8">
          <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-ink">
            {daysToExam === 0 ? 'Your exam is today!' : 'Your exam date has passed'}
          </h2>
          <p className="text-xs sm:text-sm text-ink-2 max-w-md mx-auto">
            Select your upcoming official SAT exam date to generate your personalized study plan and start counting down.
          </p>
          <div className="max-w-xs mx-auto space-y-3 pt-2">
            <Input
              type="date"
              min={todayStr}
              value={inputExamDate}
              onChange={(e) => setInputExamDate(e.target.value)}
            />
            <Button
              variant="accent"
              size="md"
              className="w-full"
              onClick={handleSaveExamDate}
              disabled={!inputExamDate || inputExamDate <= todayStr}
            >
              Set upcoming exam date
            </Button>
          </div>
        </Card>
      ) : loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 space-y-4">
            <Skeleton className="h-44 w-full rounded-[var(--radius-md)]" />
            <Skeleton className="h-40 w-full rounded-[var(--radius-md)]" />
          </div>
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-7 gap-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-96 w-full rounded-[var(--radius-md)]" />
            ))}
          </div>
        </div>
      ) : tasks.length === 0 ? (
        <div className="py-12">
          <EmptyState
            headline="No plan yet."
            description="Let Auto-plan build your first week."
            actionLabel="Generate study plan"
            onAction={handleOpenAutoPlan}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ── 2. LEFT RAIL ─────────────────────────────────── */}
          <aside className="lg:col-span-3 space-y-5">
            {/* Weekly Target Progress Card */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-ink-muted">
                  Weekly progress
                </span>
                <span className="font-mono text-xs font-semibold text-accent">
                  {weeklyStats.percentage}%
                </span>
              </div>

              <ProgressBar value={weeklyStats.percentage} className="mb-3.5" />

              <div className="flex items-baseline justify-between text-xs">
                <span className="text-ink-2">Completed</span>
                <span className="font-mono text-ink font-medium">
                  {weeklyStats.completedMinutes} mins
                </span>
              </div>
              <div className="flex items-baseline justify-between text-xs mt-1 pt-1 border-t border-line/60">
                <span className="text-ink-2">Weekly target</span>
                <span className="font-mono text-ink font-medium">
                  {weeklyStats.totalTargetMinutes} mins
                </span>
              </div>
            </Card>

            {/* This Week's Focus Card */}
            <Card className="p-5">
              <div className="flex items-center gap-2 mb-3.5">
                <Target className="w-4 h-4 text-accent shrink-0" />
                <h3 className="font-display text-base font-semibold text-ink">
                  This week's focus
                </h3>
              </div>

              <p className="text-xs text-ink-muted leading-relaxed mb-4">
                Identified from your diagnostic and practice performance.
              </p>

              <div className="space-y-2.5">
                {weakTopics.slice(0, 3).map((topicId) => {
                  const info = TOPIC_MAP[topicId];
                  const skillTitle = info ? info.skillName : topicId;
                  const domainTitle = info ? info.domain : 'Core SAT Skill';

                  return (
                    <div
                      key={topicId}
                      className="p-3 rounded-[var(--radius-sm)] bg-paper-2 border border-line flex items-center justify-between gap-2 transition-colors hover:border-line-strong"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-medium text-ink truncate">
                          {skillTitle}
                        </div>
                        <div className="text-[11px] text-ink-muted truncate">
                          {domainTitle}
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/practice/${topicId}`)}
                        className="text-xs text-accent hover:text-accent-hover p-1 h-auto shrink-0"
                        rightIcon={<ArrowRight className="w-3 h-3" />}
                      >
                        Practice
                      </Button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </aside>

          {/* ── 3. WEEK VIEW (DESKTOP) & DAY STRIP (MOBILE) ──── */}
          <section className="lg:col-span-9 flex flex-col space-y-4">
            {/* Shortened plan notice if exam is within 14 days */}
            {daysToExam !== null && daysToExam > 0 && daysToExam <= 14 && (
              <div className="p-3.5 rounded-[var(--radius-sm)] bg-accent/10 border border-accent/20 text-xs text-ink flex items-center gap-2 font-sans">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span>
                  Your exam is in <strong className="font-mono">{daysToExam}</strong> {daysToExam === 1 ? 'day' : 'days'}, so this plan is shortened.
                </span>
              </div>
            )}

            {/* ── 6. MOBILE DAY STRIP (<768px) ────────────────── */}
            <div className="md:hidden">
              <div className="flex items-center justify-between gap-1 bg-surface border border-line rounded-[var(--radius-md)] p-1.5 overflow-x-auto">
                {visibleDates.map((dateStr, idx) => {
                  const isSelected = idx === mobileDayIndex;
                  const isToday = dateStr === todayStr;
                  const dayTasks = tasksByDate[dateStr] || [];
                  const hasTasks = dayTasks.length > 0;
                  const isAllDone = hasTasks && dayTasks.every((t) => t.done_at !== null);

                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => setMobileDayIndex(idx)}
                      className={`flex-1 py-2 px-1 rounded-[var(--radius-sm)] flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                        isSelected
                          ? 'bg-ink text-paper shadow-xs'
                          : 'text-ink-2 hover:bg-paper-2 hover:text-ink'
                      }`}
                    >
                      <span className="text-[11px] font-sans">
                        {formatDayName(dateStr)}
                      </span>
                      <span className="font-mono text-sm font-semibold mt-0.5">
                        {formatDayNumber(dateStr)}
                      </span>

                      {/* Today dot or task indicator */}
                      <div className="flex items-center gap-0.5 mt-1 h-1.5">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                        {hasTasks && !isToday && (
                          <span
                            className={`w-1 h-1 rounded-full ${
                              isAllDone ? 'bg-moss' : 'bg-ink-muted'
                            }`}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Single Day View Container with Touch Swipe */}
              <div
                className="mt-4"
                onTouchStart={(e) => {
                  touchStartX.current = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  if (touchStartX.current === null) return;
                  const diffX = e.changedTouches[0].clientX - touchStartX.current;
                  touchStartX.current = null;
                  if (diffX > 45 && mobileDayIndex > 0) {
                    setMobileDayIndex((prev) => prev - 1);
                  } else if (diffX < -45 && mobileDayIndex < 6) {
                    setMobileDayIndex((prev) => prev + 1);
                  }
                }}
              >
                {(() => {
                  const activeDate = visibleDates[mobileDayIndex];
                  const dayTasks = tasksByDate[activeDate] || [];
                  const isToday = activeDate === todayStr;

                  return (
                    <Card variant="ruled" className="p-4 border border-line">
                      <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={mobileDayIndex === 0}
                            onClick={() => setMobileDayIndex((p) => Math.max(0, p - 1))}
                            className="p-1 text-ink-2 disabled:opacity-30"
                            aria-label="Previous day"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <div>
                            <div className="font-display text-base font-semibold text-ink">
                              {formatDayFull(activeDate)}
                            </div>
                            <div className="text-xs text-ink-muted font-mono">
                              {formatDateShort(activeDate)}
                            </div>
                          </div>
                          <button
                            type="button"
                            disabled={mobileDayIndex === 6}
                            onClick={() => setMobileDayIndex((p) => Math.min(6, p + 1))}
                            className="p-1 text-ink-2 disabled:opacity-30"
                            aria-label="Next day"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        {isToday && (
                          <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[11px] font-medium">
                            Today
                          </span>
                        )}
                      </div>

                      {/* Task list for selected mobile day */}
                      <div className="space-y-2.5">
                        {dayTasks.length === 0 ? (
                          <div className="py-8 text-center text-xs text-ink-muted">
                            No tasks scheduled for this day.
                          </div>
                        ) : (
                          dayTasks.map((task) => (
                            <TaskItem
                              key={task.id || task.title}
                              task={task}
                              onToggleDone={handleToggleDone}
                              onEdit={() => {
                                setEditingTask(task);
                                setIsTaskModalOpen(true);
                              }}
                              onDelete={() => task.id && handleDeleteTask(task.id)}
                              renderIcon={renderTaskIcon}
                              getBadgeStyle={getTaskBadgeStyle}
                            />
                          ))
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-line/60">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setEditingTask({
                              plan_date: activeDate,
                              task_type: 'practice',
                              title: '',
                              target_minutes: 30,
                            });
                            setIsTaskModalOpen(true);
                          }}
                          className="w-full text-xs text-ink-2 hover:text-ink justify-center border border-dashed border-line"
                          leftIcon={<Plus className="w-3.5 h-3.5" />}
                        >
                          Add task to this day
                        </Button>
                      </div>
                    </Card>
                  );
                })()}
              </div>
            </div>

            {/* ── DESKTOP 7-COLUMN RULED PAPER VIEW (>=768px) ─── */}
            <div className="hidden md:grid md:grid-cols-7 gap-3">
              {visibleDates.map((dateStr) => {
                const dayTasks = tasksByDate[dateStr] || [];
                const isToday = dateStr === todayStr;
                const isDragOver = dragOverDate === dateStr;

                return (
                  <div
                    key={dateStr}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = 'move';
                      if (dragOverDate !== dateStr) setDragOverDate(dateStr);
                    }}
                    onDragLeave={() => {
                      if (dragOverDate === dateStr) setDragOverDate(null);
                    }}
                    onDrop={async (e) => {
                      e.preventDefault();
                      setDragOverDate(null);
                      try {
                        const raw = e.dataTransfer.getData('text/plain');
                        const data = JSON.parse(raw);
                        if (data.taskId && data.fromDate !== dateStr) {
                          await handleMoveTask(data.taskId, dateStr);
                        }
                      } catch (err) {
                        // ignore malformed drag event
                      }
                    }}
                    className="flex flex-col h-full"
                  >
                    <Card
                      variant="ruled"
                      className={`flex-1 p-3 flex flex-col justify-between transition-all ${
                        isToday
                          ? 'border-accent shadow-xs ring-1 ring-accent/30'
                          : 'border-line'
                      } ${
                        isDragOver
                          ? 'border-dashed border-accent bg-accent/5'
                          : ''
                      }`}
                    >
                      <div>
                        {/* Day Column Header */}
                        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-line/70">
                          <div>
                            <div className="text-xs font-semibold text-ink">
                              {formatDayName(dateStr)}
                            </div>
                            <div className="font-mono text-xs text-ink-muted">
                              {formatDateShort(dateStr)}
                            </div>
                          </div>

                          <div className="flex items-center gap-1">
                            {isToday && (
                              <span className="px-1.5 py-0.5 rounded-[var(--radius-sm)] bg-accent text-white text-[10px] font-medium leading-none">
                                Today
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                setEditingTask({
                                  plan_date: dateStr,
                                  task_type: 'practice',
                                  title: '',
                                  target_minutes: 30,
                                });
                                setIsTaskModalOpen(true);
                              }}
                              className="p-1 text-ink-muted hover:text-ink hover:bg-paper-2 rounded-[var(--radius-sm)] transition-colors cursor-pointer"
                              title="Add task"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Task List in Day Column */}
                        <div className="space-y-2">
                          {dayTasks.length === 0 ? (
                            <div className="py-6 text-center text-[11px] text-ink-muted italic">
                              No tasks
                            </div>
                          ) : (
                            dayTasks.map((task) => (
                              <TaskItem
                                key={task.id || task.title}
                                task={task}
                                onToggleDone={handleToggleDone}
                                onEdit={() => {
                                  setEditingTask(task);
                                  setIsTaskModalOpen(true);
                                }}
                                onDelete={() => task.id && handleDeleteTask(task.id)}
                                renderIcon={renderTaskIcon}
                                getBadgeStyle={getTaskBadgeStyle}
                              />
                            ))
                          )}
                        </div>
                      </div>

                      {/* Day summary minutes footer */}
                      <div className="mt-3 pt-2 border-t border-line/60 flex items-center justify-between text-[11px] text-ink-muted">
                        <span className="flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-ink-muted" />
                          {dayTasks.reduce((sum, t) => sum + t.target_minutes, 0)}m
                        </span>
                        <span className="font-mono">
                          {dayTasks.filter((t) => t.done_at !== null).length}/{dayTasks.length}
                        </span>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* ── 4. AUTO-PLAN MODAL WITH PREVIEW ──────────────────── */}
      <Modal
        isOpen={isAutoPlanOpen}
        onClose={() => setIsAutoPlanOpen(false)}
        title="Generate study plan"
        description="Creates a balanced 14-day schedule tailored to your target exam date and weak skills."
        maxWidth="lg"
        footer={
          <div className="flex items-center justify-end gap-3 w-full">
            <Button variant="ghost" size="sm" onClick={() => setIsAutoPlanOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="accent"
              size="sm"
              onClick={handleApplyAutoPlan}
              leftIcon={<Sparkles className="w-4 h-4 text-white" />}
            >
              Apply 14-day plan
            </Button>
          </div>
        }
      >
        <div className="space-y-5">
          {/* Daily minutes selection */}
          <div>
            <label className="block text-xs font-medium text-ink mb-2">
              How many minutes can you study each day?
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[30, 60, 90, 120].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setAutoPlanDailyMinutes(mins)}
                  className={`py-2 px-3 rounded-[var(--radius-sm)] border text-center transition-colors cursor-pointer ${
                    autoPlanDailyMinutes === mins
                      ? 'border-accent bg-accent/10 text-accent font-semibold'
                      : 'border-line bg-surface text-ink-2 hover:border-line-strong'
                  }`}
                >
                  <div className="font-mono text-sm">{mins}m</div>
                  <div className="text-[10px] text-ink-muted">
                    {mins === 60 ? 'Recommended' : `${mins / 60}h`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Study rules notice */}
          <div className="p-3.5 rounded-[var(--radius-sm)] bg-paper-2 border border-line text-xs text-ink-2 space-y-1">
            <div className="font-medium text-ink flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-moss shrink-0" />
              Study rules applied automatically:
            </div>
            <ul className="list-disc list-inside text-ink-muted pl-1 space-y-0.5">
              <li>Full diagnostic mock test at the start of each week</li>
              <li>Error bank review twice per week</li>
              <li>Weakest skills receive top priority practice sessions</li>
              <li>One scheduled rest and recovery day every 7 days</li>
              <li>Already completed tasks will not be overwritten</li>
            </ul>
          </div>

          {/* Plan preview list */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-ink">
                Plan preview (14 days)
              </span>
              <span className="font-mono text-xs text-ink-muted">
                {previewGeneratedTasks.length} tasks scheduled
              </span>
            </div>

            <div className="max-h-56 overflow-y-auto space-y-1.5 border border-line rounded-[var(--radius-sm)] p-2.5 bg-surface font-sans">
              {previewGeneratedTasks.map((t, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs py-2 px-2.5 rounded-[var(--radius-sm)] hover:bg-paper-2 font-sans transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-sans text-xs text-ink-2 shrink-0">
                      {formatDateShort(t.plan_date)}
                    </span>
                    <span className="truncate text-ink font-sans font-medium">
                      {formatTaskTitle(t.title, t.topic_id)}
                    </span>
                  </div>
                  <span className="font-sans text-xs text-ink-2 shrink-0 ml-3">
                    <span className="font-mono text-ink font-medium">{t.target_minutes}</span> min
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* ── MANUAL ADD / EDIT TASK MODAL ─────────────────────── */}
      <Modal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        title={editingTask?.id ? 'Edit task' : 'Add task'}
        description="Add a practice session, diagnostic mock, or review to your schedule."
        footer={
          <div className="flex items-center justify-end gap-3 w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsTaskModalOpen(false);
                setEditingTask(null);
              }}
            >
              Cancel
            </Button>
            <Button variant="accent" size="sm" onClick={handleSaveManualTask}>
              Save task
            </Button>
          </div>
        }
      >
        {editingTask && (
          <form onSubmit={handleSaveManualTask} className="space-y-4">
            {/* Task Type */}
            <div>
              <label className="block text-xs font-medium text-ink mb-1.5">
                Task type
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['practice', 'mock', 'review', 'rest'] as TaskType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      let defaultTitle = editingTask.title;
                      if (!defaultTitle || ['Practice session', 'Diagnostic mock test', 'Review error bank', 'Rest and recovery'].includes(defaultTitle)) {
                        if (type === 'mock') defaultTitle = 'Diagnostic mock test';
                        else if (type === 'review') defaultTitle = 'Review error bank';
                        else if (type === 'rest') defaultTitle = 'Rest and recovery';
                        else defaultTitle = 'Practice session';
                      }
                      setEditingTask({
                        ...editingTask,
                        task_type: type,
                        title: defaultTitle,
                        target_minutes: type === 'rest' ? 0 : editingTask.target_minutes || 30,
                      });
                    }}
                    className={`py-2 px-2 text-xs rounded-[var(--radius-sm)] border capitalize text-center transition-colors cursor-pointer ${
                      editingTask.task_type === type
                        ? 'border-accent bg-accent/10 text-accent font-semibold'
                        : 'border-line bg-surface text-ink-2 hover:border-line-strong'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div>
              <Input
                label="Task title"
                value={editingTask.title || ''}
                onChange={(e) =>
                  setEditingTask({ ...editingTask, title: e.target.value })
                }
                placeholder="e.g. Practice: Words in Context"
                required
              />
            </div>

            {/* Topic selector (if practice) */}
            {editingTask.task_type === 'practice' && (
              <div>
                <label className="block text-xs font-medium text-ink mb-1.5">
                  Topic (optional)
                </label>
                <select
                  value={editingTask.topic_id || ''}
                  onChange={(e) => {
                    const selId = e.target.value;
                    const info = TOPIC_MAP[selId];
                    setEditingTask({
                      ...editingTask,
                      topic_id: selId || null,
                      title: info ? `Practice: ${info.skillName}` : editingTask.title,
                    });
                  }}
                  className="w-full rounded-[var(--radius-sm)] bg-surface text-ink text-sm border border-line px-3.5 py-2 focus:outline-none focus:border-accent"
                >
                  <option value="">Select a topic...</option>
                  {Object.values(TOPIC_MAP).map((t) => (
                    <option key={t.topicId} value={t.topicId}>
                      {t.skillName} ({t.section === 'rw' ? 'RW' : 'Math'})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Date and Target Minutes */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  label="Date"
                  type="date"
                  value={editingTask.plan_date || todayStr}
                  onChange={(e) =>
                    setEditingTask({ ...editingTask, plan_date: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Input
                  label="Target minutes"
                  type="number"
                  min="0"
                  step="5"
                  value={editingTask.target_minutes ?? 30}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      target_minutes: parseInt(e.target.value, 10) || 0,
                    })
                  }
                />
              </div>
            </div>
          </form>
        )}
      </Modal>

      {/* ── EXAM DATE MODAL ──────────────────────────────────── */}
      <Modal
        isOpen={isExamDateModalOpen}
        onClose={() => setIsExamDateModalOpen(false)}
        title="Set your SAT exam date"
        description="Your exam countdown and study plan will align to this milestone."
        footer={
          <div className="flex items-center justify-end gap-3 w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExamDateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="accent"
              size="sm"
              onClick={handleSaveExamDate}
            >
              Save exam date
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <Input
            label="Exam date"
            type="date"
            min={todayStr}
            value={inputExamDate}
            onChange={(e) => setInputExamDate(e.target.value)}
            helperText="Official Digital SAT administrations usually take place on Saturdays."
          />
        </div>
      </Modal>

      {/* Upgrade Modal for Auto-plan feature gating */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        highlightPlan="pro"
      />
    </div>
  );
}

/**
 * Task item component with animated pen-stroke checkmark and drag-and-drop
 */
interface TaskItemProps {
  task: PlanTask;
  onToggleDone: (task: PlanTask) => void;
  onEdit: () => void;
  onDelete: () => void;
  renderIcon: (type: TaskType) => JSX.Element;
  getBadgeStyle: (type: TaskType) => string;
}

function TaskItem({
  task,
  onToggleDone,
  onEdit,
  onDelete,
  renderIcon,
  getBadgeStyle,
}: TaskItemProps) {
  const navigate = useNavigate();
  const isDone = Boolean(task.done_at);

  return (
    <div
      draggable={!isDone}
      onDragStart={(e) => {
        if (task.id) {
          e.dataTransfer.setData(
            'text/plain',
            JSON.stringify({ taskId: task.id, fromDate: task.plan_date })
          );
          e.dataTransfer.effectAllowed = 'move';
        }
      }}
      className={`group relative p-2.5 rounded-[var(--radius-sm)] border transition-all text-xs select-none ${
        isDone
          ? 'bg-paper-2/60 border-line/60 opacity-80'
          : 'bg-surface border-line hover:border-line-strong hover:shadow-xs cursor-grab active:cursor-grabbing'
      }`}
    >
      <div className="flex items-start gap-2">
        {/* Pen-stroke animated checkmark button */}
        <button
          type="button"
          onClick={() => onToggleDone(task)}
          className={`w-4 h-4 mt-0.5 rounded-[var(--radius-sm)] border flex items-center justify-center transition-all shrink-0 cursor-pointer ${
            isDone
              ? 'border-accent bg-accent/10 text-accent'
              : 'border-line hover:border-line-strong bg-surface'
          }`}
          aria-label={isDone ? 'Mark as pending' : 'Mark as completed'}
        >
          {isDone && (
            <svg
              className="w-3 h-3 stroke-accent stroke-[2.5] fill-none"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 8.5 L6.5 12 L13 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pen-stroke"
              />
            </svg>
          )}
        </button>

        {/* Task details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            {renderIcon(task.task_type)}
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full border ${getBadgeStyle(
                task.task_type
              )} font-medium capitalize`}
            >
              {task.task_type}
            </span>
          </div>

          <div
            className={`font-medium leading-snug break-words ${
              isDone ? 'line-through text-ink-muted' : 'text-ink'
            }`}
          >
            {task.task_type === 'practice' && task.topic_id ? (
              <button
                type="button"
                onClick={() => navigate(`/practice/${task.topic_id}`)}
                className="text-left hover:text-accent hover:underline cursor-pointer"
              >
                {formatTaskTitle(task.title, task.topic_id)}
              </button>
            ) : task.task_type === 'review' ? (
              <button
                type="button"
                onClick={() => navigate('/error-bank')}
                className="text-left hover:text-accent hover:underline cursor-pointer"
              >
                {formatTaskTitle(task.title, task.topic_id)}
              </button>
            ) : task.task_type === 'mock' ? (
              <button
                type="button"
                onClick={() => navigate('/mock-tests')}
                className="text-left hover:text-accent hover:underline cursor-pointer"
              >
                {formatTaskTitle(task.title, task.topic_id)}
              </button>
            ) : (
              formatTaskTitle(task.title, task.topic_id)
            )}
          </div>

          {task.target_minutes > 0 && (
            <div className="text-[10px] text-ink-muted mt-1 font-sans">
              <span className="font-mono">{task.target_minutes}</span> min
            </div>
          )}
        </div>

        {/* Hover action buttons (Edit & Delete) */}
        <div className="hidden group-hover:flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={onEdit}
            className="p-1 text-ink-muted hover:text-ink hover:bg-paper-2 rounded-[var(--radius-sm)] transition-colors cursor-pointer"
            title="Edit task"
          >
            <Pencil className="w-3 h-3" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="p-1 text-ink-muted hover:text-berry hover:bg-berry/10 rounded-[var(--radius-sm)] transition-colors cursor-pointer"
            title="Delete task"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
