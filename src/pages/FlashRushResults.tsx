import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RefreshCw,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Target,
  BookOpen,
  Calendar,
  Check,
  Plus,
} from 'lucide-react';
import { ShuffledQuestion } from '../data/flashRushMock';
import { useApp } from '../contexts/AppContext';
import { supabase } from '../lib/supabaseClient';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import AITutorDrawer from '../components/ai/AITutorDrawer';
import { FormattedMathText } from '../components/ui/KatexMath';
import { TutorContext } from '../lib/tutorValidator';
import { trackSiteEvent } from '../lib/activityTracking';
import { recordAnswerEvent } from '../lib/offlineQueue';

interface TestResultData {
  attemptId: string;
  questions: ShuffledQuestion[];
  userAnswers: Record<string, string>;
  timeSpent: {
    rw: number;
    math: number;
  };
  completedAt: string;
}

export default function FlashRushResults() {
  const navigate = useNavigate();
  const { profile, updateProfile, refreshStatistics } = useApp();
  const [resultData, setResultData] = useState<TestResultData | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'rw' | 'math' | 'incorrect'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [isSavingScore, setIsSavingScore] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // AI Tutor Drawer state
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [tutorContext, setTutorContext] = useState<TutorContext | undefined>(undefined);

  // Error Bank local tracking
  const [errorBank, setErrorBank] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem('satbase_error_bank');
      return new Set(raw ? JSON.parse(raw) : []);
    } catch {
      return new Set();
    }
  });

  // Animated count-up score state
  const [animatedScore, setAnimatedScore] = useState<number>(0);
  const animationRan = useRef(false);

  useEffect(() => {
    const raw = sessionStorage.getItem('flashrush_result');
    if (!raw) {
      navigate('/mock-tests');
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Partial<TestResultData> &
        Pick<TestResultData, 'questions' | 'userAnswers' | 'timeSpent' | 'completedAt'>;
      const result: TestResultData = { ...parsed, attemptId: parsed.attemptId || crypto.randomUUID() };
      sessionStorage.setItem('flashrush_result', JSON.stringify(result));
      setResultData(result);

      if (parsed.questions.length > 0) {
        setExpandedQuestions(new Set([parsed.questions[0].id]));
      }
    } catch {
      navigate('/mock-tests');
    }
  }, [navigate]);

  useEffect(() => {
    if (!resultData) return;

    const rwEarned = resultData.questions
      .filter((q) => q.section === 'reading_writing')
      .reduce((sum, q) => sum + (resultData.userAnswers[q.id] === q.correctAnswerId ? q.points : 0), 0);
    const mathEarned = resultData.questions
      .filter((q) => q.section === 'math')
      .reduce((sum, q) => sum + (resultData.userAnswers[q.id] === q.correctAnswerId ? q.points : 0), 0);
    const answered = Object.keys(resultData.userAnswers).length;
    const correct = resultData.questions.filter((q) => resultData.userAnswers[q.id] === q.correctAnswerId).length;
    void trackSiteEvent('test_completed', { test: 'flashrush', score: mathEarned + rwEarned, correct, answered });

    void supabase
      .rpc('record_flashrush_attempt', {
        p_attempt_id: resultData.attemptId,
        p_math: Math.max(200, Math.min(800, mathEarned)),
        p_english: Math.max(200, Math.min(800, rwEarned)),
        p_answered: answered,
        p_correct: correct,
      })
      .then(({ error }) => {
        if (error) {
          console.error('Error saving FlashRush result:', error.message);
          return;
        }
        void refreshStatistics();

        // In addition to record_flashrush_attempt, record mock answer events for granular telemetry
        supabase.auth.getUser().then(({ data: authData }) => {
          const currentUserId = authData?.user?.id;
          if (!currentUserId) return;

          const events = resultData.questions.map((q) => ({
            user_id: currentUserId,
            topic_id: q.domain || (q.section === 'math' ? 'math-alg-1' : 'rw-crf-1'),
            question_id: q.id,
            is_correct: resultData.userAnswers[q.id] === q.correctAnswerId,
            time_seconds: Math.round(
              (q.section === 'math' ? resultData.timeSpent.math : resultData.timeSpent.rw) / 10
            ),
            source: 'mock' as const,
          }));

          for (const ev of events) {
            void recordAnswerEvent(ev);
          }
        });
      });
  }, [resultData, refreshStatistics]);

  const { questions, userAnswers, timeSpent } = (resultData || {
    questions: [],
    userAnswers: {} as Record<string, string>,
    timeSpent: { rw: 0, math: 0 },
  }) as {
    questions: ShuffledQuestion[];
    userAnswers: Record<string, string>;
    timeSpent: { rw: number; math: number };
  };

  const rwQuestions = useMemo(() => questions.filter((q) => q.section === 'reading_writing'), [questions]);
  const mathQuestions = useMemo(() => questions.filter((q) => q.section === 'math'), [questions]);

  const rwEarned = useMemo(
    () =>
      rwQuestions.reduce((acc, q) => {
        return userAnswers[q.id] === q.correctAnswerId ? acc + q.points : acc;
      }, 0),
    [rwQuestions, userAnswers]
  );

  const mathEarned = useMemo(
    () =>
      mathQuestions.reduce((acc, q) => {
        return userAnswers[q.id] === q.correctAnswerId ? acc + q.points : acc;
      }, 0),
    [mathQuestions, userAnswers]
  );

  const rwScore = Math.max(200, Math.min(800, rwEarned));
  const mathScore = Math.max(200, Math.min(800, mathEarned));
  const totalScore = rwScore + mathScore;

  const totalCorrect = questions.filter((q) => userAnswers[q.id] === q.correctAnswerId).length;
  const totalMinutes = Math.floor((timeSpent.rw + timeSpent.math) / 60);
  const totalSecs = (timeSpent.rw + timeSpent.math) % 60;

  const targetGoal = Number(profile?.targetScore) || 1350;
  const pointsFromGoal = targetGoal - totalScore;

  // ── Count-up animation for total score (800ms) ──
  useEffect(() => {
    if (!resultData || animationRan.current) return;
    animationRan.current = true;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setAnimatedScore(totalScore);
      return;
    }

    const duration = 800;
    const start = performance.now();
    const initial = 400; // Baseline minimum SAT score

    const frame = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(initial + (totalScore - initial) * eased);
      setAnimatedScore(current);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setAnimatedScore(totalScore);
      }
    };

    requestAnimationFrame(frame);
  }, [resultData, totalScore]);

  if (!resultData) {
    return null;
  }

  // Toggle question explanation expansion
  const toggleExpand = (id: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Save as starting score in profile
  const handleSaveAsStartingScore = async () => {
    if (!profile) return;
    setIsSavingScore(true);
    await updateProfile({
      startingScore: {
        math: mathScore,
        english: rwScore,
        total: totalScore,
      },
      currentScore: {
        math: mathScore,
        english: rwScore,
        total: totalScore,
      },
    });
    setIsSavingScore(false);
    setSavedSuccess(true);
  };

  // Add question to Error Bank
  const handleAddToErrorBank = (questionId: string) => {
    setErrorBank((prev) => {
      const next = new Set(prev);
      next.add(questionId);
      try {
        localStorage.setItem('satbase_error_bank', JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };

  // Ask Cosmo why handler
  const handleAskCosmoWhy = (q: ShuffledQuestion) => {
    const qNum = questions.indexOf(q) + 1;
    setTutorContext({
      mode: 'results',
      questionId: q.id,
      questionNumber: qNum,
      topicName: q.domain || q.skill || 'Diagnostic Question',
      questionText: q.questionPrompt,
      passage: q.passage,
      choices: q.shuffledOptions.map((o) => ({ key: o.letter, text: o.text })),
      correctAnswer: q.correctAnswerId,
      officialExplanation: q.explanation,
      userAnswer: userAnswers[q.id],
      hintLevel: 0,
    });
    setIsTutorOpen(true);
  };

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    const isCorrect = userAnswers[q.id] === q.correctAnswerId;
    if (activeFilter === 'rw') return q.section === 'reading_writing';
    if (activeFilter === 'math') return q.section === 'math';
    if (activeFilter === 'incorrect') return !isCorrect;
    return true;
  });

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-200 py-8 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* ── 1. Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Your diagnostic results
            </h1>
            <p className="text-xs sm:text-sm text-ink-2 mt-1 font-sans">
              10 Reading and Writing + 10 Math
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/mock-tests/flashrush')}
              className="flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retake test</span>
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5"
            >
              <span>Back to dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        {/* ── 2. Score Summary on Paper (no dark card) ── */}
        <div className="bg-surface border border-line rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Total Composite Score */}
            <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-line pb-6 md:pb-0 md:pr-6">
              <span className="text-xs font-semibold text-ink-2 uppercase tracking-wider font-sans">
                Total diagnostic score
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-5xl sm:text-6xl font-extrabold font-mono text-ink tracking-tight">
                  {animatedScore}
                </span>
                <span className="text-sm sm:text-base font-sans text-ink-2 font-medium">
                  out of 1600
                </span>
              </div>
              <p className="text-xs text-ink-2 mt-2 leading-relaxed">
                Scaled Digital SAT score based on the 20-minute diagnostic performance.
              </p>
            </div>

            {/* Section Progress Bars */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-ink font-sans">Reading and Writing</span>
                  <span className="font-mono font-bold text-ink">{rwScore}</span>
                </div>
                <ProgressBar value={((rwScore - 200) / 600) * 100} />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-ink font-sans">Math</span>
                  <span className="font-mono font-bold text-ink">{mathScore}</span>
                </div>
                <ProgressBar value={((mathScore - 200) / 600) * 100} />
              </div>
            </div>
          </div>

          {/* Three Plain Facts */}
          <div className="pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-paper-2 rounded-xl border border-line">
              <span className="text-ink-2 block mb-0.5">Correct answers</span>
              <span className="font-mono font-bold text-base text-ink">
                {totalCorrect} of {questions.length}
              </span>
            </div>

            <div className="p-3 bg-paper-2 rounded-xl border border-line">
              <span className="text-ink-2 block mb-0.5">Time spent</span>
              <span className="font-mono font-bold text-base text-ink">
                {totalMinutes}m {totalSecs}s / 20m
              </span>
            </div>

            <div className="p-3 bg-paper-2 rounded-xl border border-line flex flex-col justify-center">
              <span className="text-ink-2 block mb-0.5">Relative to target</span>
              <span className="font-medium text-ink leading-tight">
                {pointsFromGoal > 0
                  ? `You are ${pointsFromGoal} points from your goal of ${targetGoal}.`
                  : `You reached your goal of ${targetGoal}!`}
              </span>
            </div>
          </div>
        </div>

        {/* ── 3. Save as Starting Baseline Card ── */}
        <div className="bg-surface border border-line rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-sans font-semibold text-sm text-ink">
              Use this score as your starting point?
            </h3>
            <p className="text-xs text-ink-2 mt-0.5">
              This updates your dashboard.
            </p>
          </div>

          {savedSuccess ? (
            <div className="flex items-center gap-1.5 text-moss text-xs font-semibold bg-moss/10 border border-moss/30 px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4" />
              <span>Saved to your dashboard!</span>
            </div>
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={handleSaveAsStartingScore}
              disabled={isSavingScore}
              className="whitespace-nowrap"
            >
              {isSavingScore ? 'Saving...' : 'Save as starting score'}
            </Button>
          )}
        </div>

        {/* ── 4. Question Strip ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-2 uppercase tracking-wider font-sans">
              Question strip
            </span>
            <div className="flex items-center gap-3 text-[11px] text-ink-2">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-moss/30 border border-moss/60 inline-block" />
                Correct
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-berry/30 border border-berry/60 inline-block" />
                Wrong
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-paper-2 border border-dashed border-line inline-block" />
                Skipped
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 p-3 bg-surface border border-line rounded-xl">
            {questions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correctAnswerId;
              const isSkipped = !userChoice;

              let style = 'bg-berry/15 text-berry border-berry/40 hover:bg-berry/25';
              if (isCorrect) {
                style = 'bg-moss/15 text-moss border-moss/40 hover:bg-moss/25';
              } else if (isSkipped) {
                style = 'bg-paper-2 text-ink-2 border-line border-dashed hover:bg-surface';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setExpandedQuestions((prev) => new Set([...prev, q.id]));
                    document.getElementById(`question-review-${q.id}`)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    });
                  }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border transition-all cursor-pointer ${style}`}
                  title={`Jump to Question ${idx + 1} (${isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Wrong'})`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 5. Review List ── */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4">
            <h2 className="text-lg font-bold font-display text-ink">
              Review answers
            </h2>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-paper-2 border border-line rounded-lg text-xs font-medium text-ink">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-surface text-ink font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                All ({questions.length})
              </button>
              <button
                onClick={() => setActiveFilter('rw')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeFilter === 'rw'
                    ? 'bg-surface text-ink font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                Reading and Writing ({rwQuestions.length})
              </button>
              <button
                onClick={() => setActiveFilter('math')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeFilter === 'math'
                    ? 'bg-surface text-ink font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                Math ({mathQuestions.length})
              </button>
              <button
                onClick={() => setActiveFilter('incorrect')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeFilter === 'incorrect'
                    ? 'bg-surface text-berry font-semibold shadow-xs'
                    : 'text-ink-2 hover:text-berry'
                }`}
              >
                Incorrect ({questions.length - totalCorrect})
              </button>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-3">
            {filteredQuestions.map((q) => {
              const userChoiceId = userAnswers[q.id];
              const isCorrect = userChoiceId === q.correctAnswerId;
              const isExpanded = expandedQuestions.has(q.id);
              const isInErrorBank = errorBank.has(q.id);

              return (
                <div
                  key={q.id}
                  id={`question-review-${q.id}`}
                  className={`bg-surface rounded-xl border transition-colors overflow-hidden ${
                    isCorrect ? 'border-line' : 'border-berry/30 bg-berry/[0.02]'
                  }`}
                >
                  {/* Summary Bar Header */}
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                          isCorrect
                            ? 'bg-moss/15 text-moss'
                            : 'bg-berry/15 text-berry'
                        }`}
                      >
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                      </div>

                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-ink">
                            Question {q.number}
                          </span>
                          <span className="text-xs text-ink-2 font-medium font-sans">
                            · {q.domain || q.skill || (q.section === 'math' ? 'Math' : 'Reading and Writing')}
                          </span>
                        </div>
                        <p className="text-xs text-ink-2 truncate mt-0.5 font-sans">
                          {q.questionPrompt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right text-xs font-sans">
                        <span className="text-ink-2">Your answer: </span>
                        <span
                          className={`font-semibold ${
                            isCorrect ? 'text-moss' : 'text-berry'
                          }`}
                        >
                          {userChoiceId ? `Choice ${userChoiceId}` : 'Skipped'}
                        </span>
                        {!isCorrect && (
                          <span className="text-moss font-semibold ml-2">
                            (Correct: Choice {q.correctAnswerId})
                          </span>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-ink-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-ink-2" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-line space-y-4 text-sm animate-fade-in">
                      {/* Passage if any */}
                      {q.passage && (
                        <div className="p-4 bg-paper-2 rounded-xl text-ink text-xs sm:text-sm leading-relaxed border border-line font-display text-[16px] leading-[26px]">
                          {q.passage}
                        </div>
                      )}

                      {/* Equations if any */}
                      {q.equations && (
                        <div className="p-3 bg-paper-2 rounded-xl text-ink font-mono text-center font-bold border border-line">
                          {q.equations.map((eq, i) => (
                            <div key={i} className="py-0.5">
                              <FormattedMathText text={eq} />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Prompt */}
                      <div className="font-medium text-ink font-sans">
                        <FormattedMathText text={q.questionPrompt} />
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                        {q.options.map((opt) => {
                          const isThisCorrect = opt.id === q.correctAnswerId;
                          const isThisChosen = opt.id === userChoiceId;

                          let style = 'bg-paper-2 border-line text-ink';
                          if (isThisCorrect) {
                            style = 'bg-moss/10 border-moss/50 text-moss font-semibold';
                          } else if (isThisChosen && !isThisCorrect) {
                            style = 'bg-berry/10 border-berry/40 text-berry line-through';
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`p-3 rounded-lg border flex items-start gap-2.5 ${style}`}
                            >
                              <span className="font-bold">{opt.id})</span>
                              <span className="flex-1">
                                <FormattedMathText text={opt.text} />
                              </span>
                              {isThisCorrect && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-moss shrink-0 mt-0.5" />
                              )}
                              {isThisChosen && !isThisCorrect && (
                                <XCircle className="w-3.5 h-3.5 text-berry shrink-0 mt-0.5" />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Margin note explanation */}
                      <div className="border-l-2 border-accent pl-4 py-2 bg-paper-2/60 rounded-r-lg space-y-1">
                        <p className="text-xs font-semibold text-accent font-sans">
                          Explanation
                        </p>
                        <p className="text-xs sm:text-sm text-ink leading-relaxed font-sans select-text">
                          {q.explanation}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-line">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleAskCosmoWhy(q)}
                          className="flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-accent" />
                          <span>Ask Cosmo why</span>
                        </Button>

                        <button
                          type="button"
                          onClick={() => handleAddToErrorBank(q.id)}
                          disabled={isInErrorBank}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors ${
                            isInErrorBank
                              ? 'bg-paper-2 border-line text-ink-2 cursor-default'
                              : 'bg-surface hover:bg-paper-2 border-line text-ink'
                          }`}
                        >
                          {isInErrorBank ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-moss" />
                              <span>Added to error bank</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-accent" />
                              <span>Add to error bank</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 6. Bottom: Your next 3 moves ── */}
        <div className="space-y-3 pt-6 border-t border-line">
          <h2 className="text-lg font-bold font-display text-ink">
            Your next 3 moves
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Move 1: Weakest Skill */}
            <Link
              to="/practice/cross-text"
              className="p-4 rounded-xl bg-surface border border-line hover:border-ink/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-accent-subtle text-accent flex items-center justify-center mb-2.5">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-semibold text-xs sm:text-sm text-ink group-hover:text-accent transition-colors">
                  Practice weakest topics
                </h4>
                <p className="text-xs text-ink-2 mt-1">
                  Target questions where you lost points today in Cross-Text and Algebra.
                </p>
              </div>
              <span className="text-xs font-medium text-accent mt-3 flex items-center gap-1">
                Start practice <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Move 2: Study Plan */}
            <Link
              to="/study-plan"
              className="p-4 rounded-xl bg-surface border border-line hover:border-ink/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-mustard/15 text-mustard flex items-center justify-center mb-2.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-semibold text-xs sm:text-sm text-ink group-hover:text-accent transition-colors">
                  Follow your study plan
                </h4>
                <p className="text-xs text-ink-2 mt-1">
                  Structured daily 15-minute milestones aligned to your target goal.
                </p>
              </div>
              <span className="text-xs font-medium text-accent mt-3 flex items-center gap-1">
                View schedule <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Move 3: Retake in a week */}
            <Link
              to="/mock-tests"
              className="p-4 rounded-xl bg-surface border border-line hover:border-ink/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-moss/15 text-moss flex items-center justify-center mb-2.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-semibold text-xs sm:text-sm text-ink group-hover:text-accent transition-colors">
                  Retake in 7 days
                </h4>
                <p className="text-xs text-ink-2 mt-1">
                  Measure retention and track your score climb with another full trial.
                </p>
              </div>
              <span className="text-xs font-medium text-accent mt-3 flex items-center gap-1">
                Explore tests <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── AI Tutor Drawer (Cosmo) ── */}
      <AITutorDrawer
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        context={tutorContext}
      />
    </div>
  );
}
