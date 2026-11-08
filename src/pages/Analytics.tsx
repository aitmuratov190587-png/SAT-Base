import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flame,
  TrendingUp,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { supabase } from '../lib/supabaseClient';
import { buildAnalyticsFacts } from '../lib/factsBuilder';
import { fetchAIInsight } from '../lib/insightsService';
import {
  AnswerEvent,
  FlashRushAttempt,
  StudySessionItem,
  accuracyBySkill,
  weakestSkills,
  scoreHistory,
  studyMinutesByDay,
  streak,
} from '../lib/analytics';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';
import Skeleton from '../components/ui/Skeleton';

type DateRange = '7d' | '30d' | 'all';

export default function Analytics() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profile, language, setLanguage } = useApp();

  const [dateRange, setDateRange] = useState<DateRange>('30d');
  const [loading, setLoading] = useState(true);

  const [aiNote, setAiNote] = useState<string | null>(null);
  const [isLoadingAiNote, setIsLoadingAiNote] = useState(false);

  const [answerEvents, setAnswerEvents] = useState<AnswerEvent[]>([]);
  const [mockAttempts, setMockAttempts] = useState<FlashRushAttempt[]>([]);
  const [studySessions, setStudySessions] = useState<StudySessionItem[]>([]);

  const userId = user?.id;

  // Load telemetry data from Supabase Cloud
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    async function loadTelemetry() {
      if (!userId || userId === 'guest') {
        setLoading(false);
        return;
      }

      try {
        const [eventsRes, progressRes, attemptsRes, sessionsRes] = await Promise.all([
          supabase.from('answer_events').select('*').eq('user_id', userId),
          supabase.from('user_question_progress').select('*').eq('user_id', userId),
          supabase
            .from('flashrush_attempts')
            .select('attempt_id, math, english, answered, correct, created_at')
            .eq('user_id', userId)
            .order('created_at', { ascending: true }),
          supabase.from('study_sessions').select('*').eq('user_id', userId),
        ]);

        if (!isMounted) return;

        // Combine answer_events with legacy question progress for backwards compatibility
        const eventsList: AnswerEvent[] = [];
        const seenQuestions = new Set<string>();

        if (eventsRes.data) {
          eventsRes.data.forEach((e: AnswerEvent) => {
            eventsList.push(e);
            seenQuestions.add(e.question_id);
          });
        }

        // Add user_question_progress records if not already in answer_events
        if (progressRes.data) {
          progressRes.data.forEach((p: { topic_id: string; question_id: string; is_correct: boolean; time_seconds: number; created_at?: string; updated_at?: string }) => {
            if (!seenQuestions.has(p.question_id)) {
              eventsList.push({
                topic_id: p.topic_id,
                question_id: p.question_id,
                is_correct: p.is_correct,
                time_seconds: p.time_seconds || 0,
                source: 'practice',
                created_at: p.updated_at || p.created_at || new Date().toISOString(),
              });
              seenQuestions.add(p.question_id);
            }
          });
        }

        setAnswerEvents(eventsList);
        setMockAttempts((attemptsRes.data as FlashRushAttempt[]) || []);
        setStudySessions((sessionsRes.data as StudySessionItem[]) || []);
      } catch (err) {
        console.warn('Error loading analytics telemetry:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    void loadTelemetry();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  // Filter events based on active date range
  const filteredEvents = useMemo(() => {
    if (dateRange === 'all') return answerEvents;

    const days = dateRange === '7d' ? 7 : 30;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    return answerEvents.filter((e) => new Date(e.created_at) >= cutoff);
  }, [answerEvents, dateRange]);

  // Derived Analytics Computations
  const skillAccuracies = useMemo(() => accuracyBySkill(filteredEvents), [filteredEvents]);
  const topWeakest = useMemo(() => weakestSkills(filteredEvents, 5, 5), [filteredEvents]);
  const historyPoints = useMemo(() => scoreHistory(mockAttempts), [mockAttempts]);

  // Study heatmap (last 30 days)
  const heatmapDays = useMemo(() => studyMinutesByDay(studySessions, 28), [studySessions]);
  const activityDayList = useMemo(
    () => [
      ...studySessions.map((s) => s.study_day || s.started_at?.split('T')[0] || ''),
      ...answerEvents.map((e) => e.created_at.split('T')[0]),
    ],
    [studySessions, answerEvents]
  );
  const currentStreak = useMemo(() => streak(activityDayList), [activityDayList]);

  // Section level metrics
  const rwEvents = useMemo(
    () => filteredEvents.filter((e) => skillAccuracies[e.topic_id]?.section === 'rw'),
    [filteredEvents, skillAccuracies]
  );
  const mathEvents = useMemo(
    () => filteredEvents.filter((e) => skillAccuracies[e.topic_id]?.section === 'math'),
    [filteredEvents, skillAccuracies]
  );

  const rwAvgTime = useMemo(() => {
    if (rwEvents.length === 0) return 0;
    const sum = rwEvents.reduce((acc, e) => acc + (e.time_seconds || 0), 0);
    return Math.round(sum / rwEvents.length);
  }, [rwEvents]);

  const mathAvgTime = useMemo(() => {
    if (mathEvents.length === 0) return 0;
    const sum = mathEvents.reduce((acc, e) => acc + (e.time_seconds || 0), 0);
    return Math.round(sum / mathEvents.length);
  }, [mathEvents]);

  const targetScore: number =
    typeof profile?.targetScore === 'object' && profile?.targetScore !== null
      ? (profile.targetScore as { total?: number }).total || 1350
      : Number(profile?.targetScore) || 1350;

  // Compute period delta for facts
  const prevPeriodDiff = useMemo(() => {
    let prevEvents: typeof answerEvents = [];
    if (dateRange === '7d') {
      const start = new Date();
      start.setDate(start.getDate() - 14);
      const end = new Date();
      end.setDate(end.getDate() - 7);
      prevEvents = answerEvents.filter((e) => {
        const d = new Date(e.created_at);
        return d >= start && d < end;
      });
    } else if (dateRange === '30d') {
      const start = new Date();
      start.setDate(start.getDate() - 60);
      const end = new Date();
      end.setDate(end.getDate() - 30);
      prevEvents = answerEvents.filter((e) => {
        const d = new Date(e.created_at);
        return d >= start && d < end;
      });
    } else if (dateRange === 'all' && answerEvents.length >= 10) {
      const sorted = [...answerEvents].sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
      prevEvents = sorted.slice(0, Math.floor(sorted.length / 2));
    }

    if (prevEvents.length >= 3) {
      const prevCorrect = prevEvents.filter((e) => e.is_correct).length;
      const prevAcc = Math.round((prevCorrect / prevEvents.length) * 100);
      const curCorrect = filteredEvents.filter((e) => e.is_correct).length;
      const curAcc = Math.round((curCorrect / filteredEvents.length) * 100);
      return curAcc - prevAcc;
    }
    return undefined;
  }, [dateRange, answerEvents, filteredEvents]);

  // ── Plain-language summary sentence built strictly from computed facts (no AI) ──
  const summarySentence = useMemo(() => {
    if (filteredEvents.length < 5) {
      return 'Solve a few more questions to unlock insights.';
    }

    // 1. Overall accuracy per section
    const rwTotal = rwEvents.length;
    const rwCorrect = rwEvents.filter((e) => e.is_correct).length;
    const rwAcc = rwTotal > 0 ? Math.round((rwCorrect / rwTotal) * 100) : null;

    const mTotal = mathEvents.length;
    const mCorrect = mathEvents.filter((e) => e.is_correct).length;
    const mAcc = mTotal > 0 ? Math.round((mCorrect / mTotal) * 100) : null;

    let sectionText = '';
    if (rwAcc !== null && mAcc !== null) {
      sectionText = `Your accuracy in Reading and Writing is ${rwAcc}% and Math is ${mAcc}%`;
    } else if (mAcc !== null) {
      sectionText = `Your accuracy in Math is ${mAcc}%`;
    } else if (rwAcc !== null) {
      sectionText = `Your accuracy in Reading and Writing is ${rwAcc}%`;
    } else {
      const overallCorrect = filteredEvents.filter((e) => e.is_correct).length;
      const overallAcc = Math.round((overallCorrect / filteredEvents.length) * 100);
      sectionText = `Your overall accuracy is ${overallAcc}%`;
    }

    // 2. Change vs previous period (+/- points) if available
    let changeText = '';
    if (prevPeriodDiff !== undefined) {
      if (prevPeriodDiff > 0) {
        changeText = `, up ${prevPeriodDiff} points`;
      } else if (prevPeriodDiff < 0) {
        changeText = `, down ${Math.abs(prevPeriodDiff)} points`;
      }
    }

    // 3. Weakest skill with 5+ answers by readable skill name
    const weakestWith5 = weakestSkills(filteredEvents, 1, 5)[0];
    const weakestText = weakestWith5 ? ` ${weakestWith5.skillName} is your weakest skill.` : '';

    return `${sectionText}${changeText}.${weakestText}`;
  }, [filteredEvents, rwEvents, mathEvents, prevPeriodDiff]);

  // Aggregated safe facts for AI note
  const analyticsFacts = useMemo(() => {
    const weakList = weakestSkills(filteredEvents, 3, 1).map((s) => ({
      name: s.skillName,
      count: s.total,
    }));
    const rwCorrect = rwEvents.filter((e) => e.is_correct).length;
    const mCorrect = mathEvents.filter((e) => e.is_correct).length;

    let daysToSat: number | undefined = undefined;
    if (profile?.satDate) {
      const examTime = new Date(profile.satDate).getTime();
      const nowTime = new Date().setHours(0, 0, 0, 0);
      daysToSat = Math.max(0, Math.ceil((examTime - nowTime) / (1000 * 60 * 60 * 24)));
    }

    const currentScore =
      typeof profile?.currentScore === 'object' && profile?.currentScore !== null
        ? (profile.currentScore as { total?: number }).total
        : Number(profile?.currentScore) || undefined;

    return buildAnalyticsFacts({
      totalAnswers: filteredEvents.length,
      mathAccuracy: mathEvents.length > 0 ? Math.round((mCorrect / mathEvents.length) * 100) : 0,
      englishAccuracy: rwEvents.length > 0 ? Math.round((rwCorrect / rwEvents.length) * 100) : 0,
      mathDelta: prevPeriodDiff,
      weakestSkills: weakList,
      streak: currentStreak,
      daysToExam: daysToSat,
      currentScore,
      targetScore,
    });
  }, [filteredEvents, rwEvents, mathEvents, prevPeriodDiff, currentStreak, profile?.satDate, profile?.currentScore, targetScore]);

  // Asynchronous load for Cosmo's note
  const handleRefreshInsight = useCallback(async () => {
    if (isLoadingAiNote) return;
    setIsLoadingAiNote(true);
    try {
      const res = await fetchAIInsight('analytics', analyticsFacts, language);
      if (res?.text) {
        setAiNote(res.text);
      }
    } finally {
      setIsLoadingAiNote(false);
    }
  }, [analyticsFacts, language, isLoadingAiNote]);

  useEffect(() => {
    let isMounted = true;
    setIsLoadingAiNote(true);
    fetchAIInsight('analytics', analyticsFacts, language)
      .then((res) => {
        if (isMounted && res?.text) {
          setAiNote(res.text);
        }
      })
      .finally(() => {
        if (isMounted) setIsLoadingAiNote(false);
      });

    return () => {
      isMounted = false;
    };
  }, [analyticsFacts, language]);

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-200 py-6 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* ── 9. Cosmo's Note (AI-generated note with graceful fallback) ── */}
        <div id="ai-insight" className="p-4 sm:p-5 rounded-xl bg-surface border border-line flex flex-col gap-2.5 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <h2 className="font-serif text-base sm:text-lg font-semibold text-ink">Cosmo&apos;s note</h2>
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
                onClick={handleRefreshInsight}
                disabled={isLoadingAiNote}
                className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors disabled:opacity-40"
                title="Refresh note"
                aria-label="Refresh Cosmo's note"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingAiNote ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {isLoadingAiNote ? (
            <div className="space-y-2 animate-pulse py-1">
              <div className="h-4 bg-paper-2 rounded w-4/5" />
              <div className="h-4 bg-paper-2 rounded w-3/5" />
            </div>
          ) : (
            <p className="text-sm font-sans text-ink leading-relaxed">
              {aiNote || summarySentence}
            </p>
          )}
        </div>

        {/* ── 1. Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Analytics
            </h1>
            <p className="text-xs sm:text-sm text-ink-2 mt-1">
              Your preparation trajectory and skill-by-skill calibration.
            </p>
          </div>

          {/* Date range Tabs */}
          <div className="flex items-center gap-1 p-1 bg-surface border border-line rounded-lg text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setDateRange('7d')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                dateRange === '7d'
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              7 days
            </button>
            <button
              onClick={() => setDateRange('30d')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                dateRange === '30d'
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              30 days
            </button>
            <button
              onClick={() => setDateRange('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                dateRange === 'all'
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              All time
            </button>
          </div>
        </div>

        {/* ── 2. Editorial Plain-Language Summary Sentence ── */}
        <div className="p-4 sm:p-5 rounded-xl bg-surface border border-line flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-ink-muted font-sans font-medium mb-1">
              Performance observation
            </p>
            <p className="text-sm sm:text-base font-display text-ink leading-relaxed">
              {summarySentence}
            </p>
          </div>
        </div>

        {/* ── 3. Score Over Time (Chart or EmptyState) ── */}
        <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-sans font-semibold text-sm sm:text-base text-ink">
                Score over time
              </h3>
              <p className="text-xs text-ink-2 mt-0.5">
                Your mock test scores over time.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-ink-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
                Score
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 border-b-2 border-dashed border-ink-2 inline-block" />
                Goal ({targetScore})
              </span>
            </div>
          </div>

          {loading ? (
            <div className="h-48 flex items-center justify-center">
              <Skeleton width="100%" height="160px" />
            </div>
          ) : historyPoints.length === 0 ? (
            <EmptyState
              headline="No test results recorded yet"
              description="Take your first diagnostic to unlock this."
              actionLabel="Start diagnostic test"
              onAction={() => navigate('/mock-tests/flashrush')}
              className="py-10"
            />
          ) : (
            <div className="pt-4">
              {/* Minimal SVG Trail with 1.5px ink line, accent dots, dotted goal line */}
              <div className="relative w-full h-48 select-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 600 160">
                  {/* Dynamic Y Axis Range (actual data range with padding) */}
                  {(() => {
                    const allVals = [...historyPoints.map((p) => p.total), targetScore];
                    const rawMin = Math.min(...allVals);
                    const rawMax = Math.max(...allVals);
                    const minY = Math.max(200, Math.floor((rawMin - 100) / 100) * 100);
                    const maxY = Math.min(1600, Math.ceil((rawMax + 100) / 100) * 100);
                    const rangeY = Math.max(200, maxY - minY);
                    const midY = Math.round((minY + maxY) / 2);

                    const goalY = 120 - ((targetScore - minY) / rangeY) * 100;

                    const points = historyPoints.map((pt, i) => {
                      const x = historyPoints.length === 1
                        ? 310
                        : 50 + (i / (historyPoints.length - 1)) * 500;
                      const y = 120 - ((pt.total - minY) / rangeY) * 100;
                      return { x, y, pt };
                    });

                    const pathD = points
                      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
                      .join(' ');

                    return (
                      <>
                        {/* Grid Lines */}
                        <line x1="40" y1="20" x2="580" y2="20" stroke="var(--color-line)" strokeWidth="1" />
                        <line x1="40" y1="70" x2="580" y2="70" stroke="var(--color-line)" strokeWidth="1" />
                        <line x1="40" y1="120" x2="580" y2="120" stroke="var(--color-line)" strokeWidth="1" />

                        {/* Y Axis JetBrains Mono numbers */}
                        <text x="5" y="24" fill="var(--color-ink-2)" fontSize="10" fontFamily="JetBrains Mono">
                          {maxY}
                        </text>
                        <text x="5" y="74" fill="var(--color-ink-2)" fontSize="10" fontFamily="JetBrains Mono">
                          {midY}
                        </text>
                        <text x="15" y="124" fill="var(--color-ink-2)" fontSize="10" fontFamily="JetBrains Mono">
                          {minY}
                        </text>

                        {/* Dotted Target Goal Line */}
                        <line
                          x1="40"
                          y1={goalY}
                          x2="580"
                          y2={goalY}
                          stroke="var(--color-ink-2)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                        <text
                          x="530"
                          y={goalY - 6}
                          fill="var(--color-ink-2)"
                          fontSize="10"
                          fontFamily="Instrument Sans"
                        >
                          Goal {targetScore}
                        </text>

                        {/* Line Path */}
                        <path
                          d={pathD}
                          fill="none"
                          stroke="var(--color-ink)"
                          strokeWidth="1.5"
                        />

                        {/* Direct Points */}
                        {points.map((p, i) => (
                          <g key={i}>
                            <circle
                              cx={p.x}
                              cy={p.y}
                              r="5"
                              fill="var(--color-accent)"
                              stroke="var(--color-surface)"
                              strokeWidth="2"
                            />
                            <text
                              x={p.x}
                              y={p.y - 10}
                              textAnchor="middle"
                              fill="var(--color-ink)"
                              fontSize="11"
                              fontFamily="JetBrains Mono"
                              fontWeight="600"
                            >
                              {p.pt.total}
                            </text>
                            <text
                              x={p.x}
                              y="148"
                              textAnchor="middle"
                              fill="var(--color-ink-2)"
                              fontSize="10"
                              fontFamily="Instrument Sans"
                            >
                              {p.pt.displayDate}
                            </text>
                          </g>
                        ))}
                      </>
                    );
                  })()}
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* ── 4 & 5. Two Column Grid: Accuracy by Skill & Time per Question ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accuracy by Skill (Weakest first horizontal bars) */}
          <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
            <div>
              <h3 className="font-sans font-semibold text-sm sm:text-base text-ink">
                Accuracy by skill
              </h3>
              <p className="text-xs text-ink-2 mt-0.5">
                Ranked lowest first. Only skills with 5+ answers shown.
              </p>
            </div>

            {loading ? (
              <div className="space-y-3">
                <Skeleton width="100%" height="28px" />
                <Skeleton width="100%" height="28px" />
                <Skeleton width="100%" height="28px" />
              </div>
            ) : Object.keys(skillAccuracies).length === 0 ? (
              <p className="text-xs text-ink-2 py-4">
                No skill answers logged in this period.
              </p>
            ) : (
              <div className="space-y-3 pt-1">
                {Object.values(skillAccuracies)
                  .filter((s) => s.total >= 5)
                  .sort((a, b) => a.accuracy - b.accuracy)
                  .slice(0, 6)
                  .map((skill) => {
                    let barColor = 'bg-berry';
                    if (skill.accuracy >= 80) barColor = 'bg-moss';
                    else if (skill.accuracy >= 70) barColor = 'bg-mustard';

                    return (
                      <div key={skill.topicId} className="space-y-1">
                        <div className="flex justify-between items-baseline text-xs">
                          <span className="font-medium text-ink truncate max-w-[200px]">
                            {skill.skillName}
                          </span>
                          <span className="font-mono text-ink-2 text-[11px]">
                            {skill.correct}/{skill.total} ({skill.accuracy}%)
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-paper-2 border border-line overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                            style={{ width: `${Math.max(4, skill.accuracy)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}

                {Object.values(skillAccuracies).filter((s) => s.total >= 5).length === 0 && (
                  <div className="p-3 bg-paper-2 rounded-lg border border-line text-xs text-ink-2">
                    <p>
                      Fewer than 5 answers per skill. Solve more questions to unlock accuracy trends.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Time per Question by Section (RW target 71s, Math target 95s) */}
          <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
            <div>
              <h3 className="font-sans font-semibold text-sm sm:text-base text-ink">
                Pacing vs official targets
              </h3>
              <p className="text-xs text-ink-2 mt-0.5">
                Target pace: 71s per question (RW) and 95s per question (Math).
              </p>
            </div>

            {loading ? (
              <div className="space-y-3">
                <Skeleton width="100%" height="48px" />
                <Skeleton width="100%" height="48px" />
              </div>
            ) : (
              <div className="space-y-3 pt-1">
                {/* Reading and Writing Pacing Card */}
                <div className="p-3.5 rounded-xl bg-paper-2 border border-line flex items-center justify-between">
                  <div>
                    <span className="font-sans font-medium text-xs text-ink block">
                      Reading and Writing
                    </span>
                    <span className="text-[11px] text-ink-2">
                      Target: 71s per question
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="font-mono font-bold text-sm text-ink block">
                      {rwAvgTime > 0 ? `${rwAvgTime}s` : '—'}
                    </span>
                    <span
                      className={`text-[10px] font-medium ${
                        rwAvgTime === 0
                          ? 'text-ink-2'
                          : rwAvgTime <= 71
                          ? 'text-moss'
                          : 'text-berry'
                      }`}
                    >
                      {rwAvgTime === 0
                        ? 'No answers yet'
                        : rwAvgTime <= 71
                        ? 'On target pace'
                        : `+${rwAvgTime - 71}s slower than target`}
                    </span>
                  </div>
                </div>

                {/* Math Pacing Card */}
                <div className="p-3.5 rounded-xl bg-paper-2 border border-line flex items-center justify-between">
                  <div>
                    <span className="font-sans font-medium text-xs text-ink block">
                      Math
                    </span>
                    <span className="text-[11px] text-ink-2">
                      Target: 95s per question
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="font-mono font-bold text-sm text-ink block">
                      {mathAvgTime > 0 ? `${mathAvgTime}s` : '—'}
                    </span>
                    <span
                      className={`text-[10px] font-medium ${
                        mathAvgTime === 0
                          ? 'text-ink-2'
                          : mathAvgTime <= 95
                          ? 'text-moss'
                          : 'text-berry'
                      }`}
                    >
                      {mathAvgTime === 0
                        ? 'No answers yet'
                        : mathAvgTime <= 95
                        ? 'On target pace'
                        : `+${mathAvgTime - 95}s slower than target`}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── 6. Weakest 5 Skills List with Practice Button ── */}
        <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
          <div>
            <h3 className="font-sans font-semibold text-sm sm:text-base text-ink">
              Top priority skills to practice
            </h3>
            <p className="text-xs text-ink-2 mt-0.5">
              Identified from questions with lower accuracy.
            </p>
          </div>

          {topWeakest.length === 0 ? (
            <div className="p-4 bg-paper-2 rounded-xl border border-line text-xs text-ink-2 text-center">
              Practice at least 5 questions per skill to highlight priority weaknesses.
            </div>
          ) : (
            <div className="divide-y divide-line">
              {topWeakest.map((skill) => (
                <div
                  key={skill.topicId}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                >
                  <div>
                    <h4 className="font-sans font-medium text-xs sm:text-sm text-ink">
                      {skill.skillName}
                    </h4>
                    <p className="text-[11px] text-ink-2">
                      {skill.domain} · {skill.correct} of {skill.total} correct
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs text-berry">
                      {skill.accuracy}%
                    </span>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => navigate(skill.practiceRoute || `/practice/${skill.topicId}`)}
                    >
                      Practice now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── 7. Study Time Calendar Heatmap (Accent Tones) ── */}
        <div className="p-6 rounded-2xl bg-surface border border-line space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-sans font-semibold text-sm sm:text-base text-ink">
                Study consistency
              </h3>
              <p className="text-xs text-ink-2 mt-0.5">
                Daily practice minutes over the last 4 weeks.
              </p>
            </div>

            {/* Streak Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent/30 text-accent text-xs font-semibold self-start sm:self-auto">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{currentStreak}-day study streak</span>
            </div>
          </div>

          {/* 4-week Heatmap Grid */}
          <div className="pt-2">
            <div className="grid grid-cols-7 sm:grid-cols-14 gap-1.5">
              {Object.entries(heatmapDays).map(([dateStr, mins]) => {
                let cellTone = 'bg-paper-2 border-line text-ink-2';
                if (mins > 30) cellTone = 'bg-accent text-white font-bold';
                else if (mins > 15) cellTone = 'bg-accent/60 text-white font-medium';
                else if (mins > 0) cellTone = 'bg-accent/25 text-ink border-accent/40 font-medium';

                return (
                  <div
                    key={dateStr}
                    className={`h-9 rounded-lg border flex flex-col items-center justify-center text-[10px] transition-all hover:scale-105 cursor-default ${cellTone}`}
                    title={`${dateStr}: ${mins} minutes studied`}
                  >
                    <span className="font-mono text-[9px] opacity-70">
                      {dateStr.slice(8)}
                    </span>
                    {mins > 0 && (
                      <span className="font-mono text-[9px] leading-none">
                        {mins}m
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-end gap-2 pt-3 text-[11px] text-ink-2">
              <span>Less</span>
              <span className="w-3 h-3 rounded bg-paper-2 border border-line inline-block" />
              <span className="w-3 h-3 rounded bg-accent/25 border border-accent/40 inline-block" />
              <span className="w-3 h-3 rounded bg-accent/60 inline-block" />
              <span className="w-3 h-3 rounded bg-accent inline-block" />
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
