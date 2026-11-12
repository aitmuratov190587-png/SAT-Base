import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  XCircle,
  MinusCircle,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import EmptyState from '../components/ui/EmptyState';
import { FormattedMathText } from '../components/ui/KatexMath';
import AITutorDrawer from '../components/ai/AITutorDrawer';
import { TutorContext } from '../lib/tutorValidator';
import {
  loadFullMockResult,
  clearFullMockSession,
} from '../lib/fullMockSession';
import { ALL_PRACTICE_TEST_1_QUESTIONS } from '../data/mockTests/mockPracticeTest1';
import { MockTestQuestion } from '../data/mockTests/pt1_types';

export default function FullMockResults() {
  const navigate = useNavigate();

  const [result] = useState(() => loadFullMockResult());
  const [activeFilter, setActiveFilter] = useState<'all' | 'rw' | 'math' | 'incorrect'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  // AI Tutor Drawer
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [tutorContext, setTutorContext] = useState<TutorContext | undefined>(undefined);

  // If no result recorded, show empty state
  if (!result) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <EmptyState
          headline="No test results found"
          description="You haven't completed Digital SAT Practice Test #1 yet, or the result was cleared."
          actionLabel="Start Practice Test 1"
          onAction={() => navigate('/mock-tests/practice-1')}
          mascotSrc="/images/avatar-blue.png"
          className="max-w-md w-full"
        />
      </div>
    );
  }

  const { scores, userAnswers, completedAt } = result;

  // Map questions with user status
  const analyzedQuestions = useMemo(() => {
    return ALL_PRACTICE_TEST_1_QUESTIONS.map((q) => {
      const userAns = userAnswers[q.id]?.trim();
      let isCorrect = false;
      const isOmitted = !userAns;

      if (!isOmitted) {
        if (q.type === 'multiple_choice') {
          isCorrect = userAns.toUpperCase() === q.correctAnswer.toUpperCase();
        } else {
          const normU = userAns.replace(/\s+/g, '').toLowerCase();
          const normC = q.correctAnswer.replace(/\s+/g, '').toLowerCase();
          if (normU === normC) {
            isCorrect = true;
          } else {
            const parseNum = (str: string): number | null => {
              if (str.includes('/')) {
                const [n, d] = str.split('/').map(Number);
                if (!isNaN(n) && !isNaN(d) && d !== 0) return n / d;
              }
              const v = parseFloat(str);
              return isNaN(v) ? null : v;
            };
            const uVal = parseNum(normU);
            const cVal = parseNum(normC);
            if (uVal !== null && cVal !== null && Math.abs(uVal - cVal) < 0.0001) {
              isCorrect = true;
            }
          }
        }
      }

      return {
        question: q,
        userAnswer: userAns || '—',
        isCorrect,
        isOmitted,
      };
    });
  }, [userAnswers]);

  // Filtered list
  const filteredList = useMemo(() => {
    return analyzedQuestions.filter((item) => {
      if (activeFilter === 'rw') return item.question.section === 'reading_writing';
      if (activeFilter === 'math') return item.question.section === 'math';
      if (activeFilter === 'incorrect') return !item.isCorrect;
      return true;
    });
  }, [analyzedQuestions, activeFilter]);

  const toggleExpand = (id: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleOpenTutor = (q: MockTestQuestion, userAns: string) => {
    setTutorContext({
      mode: 'results',
      questionId: q.id,
      questionNumber: q.number,
      questionText: q.prompt,
      passage: q.passage,
      userAnswer: userAns,
      correctAnswer: q.correctAnswer,
      officialExplanation: q.explanation,
      topicName: `${q.domain} — ${q.skill}`,
    });
    setIsTutorOpen(true);
  };

  const handleRetake = () => {
    clearFullMockSession();
    navigate('/mock-tests/practice-1');
  };

  const formattedDate = new Date(completedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 font-sans space-y-8 text-ink">
      {/* ── 1. Top Header & Breadcrumbs ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs text-ink-2 mb-1">
            <Link to="/mock-tests" className="hover:text-ink transition-colors">
              Mock exams
            </Link>
            <span>/</span>
            <span className="text-ink font-medium">Practice Test #1 Results</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight">
            Digital SAT® Practice Test #1
          </h1>
          <p className="text-xs sm:text-sm text-ink-2 mt-1">
            Completed on {formattedDate} · 98 questions · Official College Board curve
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleRetake}
            className="flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake exam</span>
          </Button>
          <Link to="/mock-tests">
            <Button variant="accent" size="sm">
              Back to mock exams
            </Button>
          </Link>
        </div>
      </div>

      {/* ── 2. Primary Score Banner ── */}
      <div className="bg-surface rounded-2xl border border-line p-6 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-line">
          {/* Total Composite Score */}
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-2">
              Composite Score
            </span>
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="text-5xl sm:text-6xl font-display font-bold text-ink">
                {scores.totalScore}
              </span>
              <span className="text-sm font-mono text-ink-2">/ 1600</span>
            </div>
            <p className="text-xs text-ink-2">
              Total correct: <strong className="text-ink font-semibold">{scores.totalCorrect}</strong> / 98 ({Math.round((scores.totalCorrect / 98) * 100)}%)
            </p>
          </div>

          {/* Reading & Writing Section */}
          <div className="pt-6 md:pt-0 md:pl-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-2">
                Reading and Writing
              </span>
              <span className="text-xs font-mono text-moss font-semibold">
                {scores.rwCorrect} / 54
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-display font-bold text-ink">
                {scores.rwScore}
              </span>
              <span className="text-xs font-mono text-ink-2">/ 800</span>
            </div>
            <ProgressBar
              value={scores.rwCorrect}
              max={54}
            />
          </div>

          {/* Math Section */}
          <div className="pt-6 md:pt-0 md:pl-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-2">
                Math
              </span>
              <span className="text-xs font-mono text-moss font-semibold">
                {scores.mathCorrect} / 44
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-display font-bold text-ink">
                {scores.mathScore}
              </span>
              <span className="text-xs font-mono text-ink-2">/ 800</span>
            </div>
            <ProgressBar
              value={scores.mathCorrect}
              max={44}
            />
          </div>
        </div>
      </div>

      {/* ── 3. Domain Performance Breakdown ── */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-display font-bold text-ink">
            Skill & domain breakdown
          </h2>
          <p className="text-xs text-ink-2">
            Your performance across the 8 official Digital SAT skill areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scores.domainBreakdown.map((item) => (
            <div
              key={item.domain}
              className="bg-surface rounded-xl border border-line p-4 space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-paper-2 text-ink-2 font-semibold">
                  {item.section === 'reading_writing' ? 'RW' : 'Math'}
                </span>
                <span className="font-mono text-xs font-bold text-ink">
                  {item.percentage}%
                </span>
              </div>
              <h3 className="font-display font-semibold text-sm text-ink truncate" title={item.domain}>
                {item.domain}
              </h3>
              <ProgressBar
                value={item.correct}
                max={item.total}
              />
              <p className="text-[11px] font-mono text-ink-2">
                {item.correct} of {item.total} correct
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Question-by-Question Review Section ── */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-display font-bold text-ink">
              Detailed question review
            </h2>
            <p className="text-xs text-ink-2">
              Review your answers, correct solutions, and official step-by-step rationales.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-paper-2 rounded-lg border border-line overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-surface text-ink shadow-xs border border-line'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              All (98)
            </button>
            <button
              onClick={() => setActiveFilter('rw')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'rw'
                  ? 'bg-surface text-ink shadow-xs border border-line'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              RW (54)
            </button>
            <button
              onClick={() => setActiveFilter('math')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'math'
                  ? 'bg-surface text-ink shadow-xs border border-line'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              Math (44)
            </button>
            <button
              onClick={() => setActiveFilter('incorrect')}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeFilter === 'incorrect'
                  ? 'bg-surface text-ink shadow-xs border border-line'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              Incorrect ({98 - scores.totalCorrect})
            </button>
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-3">
          {filteredList.map((item) => {
            const q = item.question;
            const isExpanded = expandedQuestions.has(q.id);

            return (
              <div
                key={q.id}
                className="bg-surface rounded-xl border border-line overflow-hidden transition-all shadow-xs"
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-paper-2/40 transition-colors select-none"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Status Icon */}
                    {item.isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-moss shrink-0" />
                    ) : item.isOmitted ? (
                      <MinusCircle className="w-5 h-5 text-ink-muted shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-berry shrink-0" />
                    )}

                    <span className="font-mono font-bold text-xs w-12 text-ink shrink-0">
                      M{q.module} Q{q.number}
                    </span>

                    <div className="min-w-0 truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-xs text-ink truncate">
                          {q.domain}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-paper-2 text-ink-2 shrink-0">
                          {q.skill}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-ink-2">
                      Your answer:{' '}
                      <strong
                        className={
                          item.isCorrect
                            ? 'text-moss font-bold'
                            : item.isOmitted
                            ? 'text-ink-muted'
                            : 'text-berry font-bold'
                        }
                      >
                        {item.userAnswer}
                      </strong>
                    </span>

                    <span className="text-xs font-mono text-ink-2 hidden sm:inline">
                      Correct:{' '}
                      <strong className="text-moss font-bold">
                        {q.correctAnswer}
                      </strong>
                    </span>

                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-ink-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-ink-2" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-5 border-t border-line bg-paper/50 space-y-4">
                    {/* Passage if applicable */}
                    {q.passage && (
                      <div className="bg-surface rounded-lg p-4 border border-line text-sm font-display text-ink leading-relaxed whitespace-pre-line select-text">
                        {q.passage}
                      </div>
                    )}

                    {/* Equations if applicable */}
                    {q.equations && q.equations.length > 0 && (
                      <div className="bg-surface rounded-lg p-3 border border-line text-center text-sm font-serif text-ink select-text">
                        {q.equations.map((eq, i) => (
                          <div key={i}>
                            <FormattedMathText text={eq} />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Prompt */}
                    <div className="text-sm font-sans font-medium text-ink select-text">
                      <FormattedMathText text={q.prompt} />
                    </div>

                    {/* Options list for Multiple Choice */}
                    {q.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt) => {
                          const isUserPick = item.userAnswer === opt.letter;
                          const isCorrectPick = q.correctAnswer === opt.letter;

                          return (
                            <div
                              key={opt.letter}
                              className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
                                isCorrectPick
                                  ? 'border-moss bg-moss/10 text-moss font-medium'
                                  : isUserPick && !item.isCorrect
                                  ? 'border-berry bg-berry/10 text-berry'
                                  : 'border-line bg-surface text-ink-2'
                              }`}
                            >
                              <span className="font-mono font-bold shrink-0">
                                {opt.letter})
                              </span>
                              <span className="select-text">
                                <FormattedMathText text={opt.text} />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Detailed Explanation */}
                    <div className="bg-surface rounded-xl p-4 border border-line space-y-2 select-text">
                      <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-accent flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Step-by-step solution
                      </h4>
                      <div className="text-xs sm:text-sm text-ink-2 leading-relaxed whitespace-pre-line">
                        <FormattedMathText text={q.explanation} />
                      </div>
                    </div>

                    {/* Socratic AI Tutor button */}
                    <div className="pt-1 flex items-center justify-end">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleOpenTutor(q, item.userAnswer)}
                        className="flex items-center gap-1.5 text-xs"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-accent" />
                        <span>Ask Cosmo about this question</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 5. AI Tutor Drawer ── */}
      {tutorContext && (
        <AITutorDrawer
          isOpen={isTutorOpen}
          onClose={() => setIsTutorOpen(false)}
          context={tutorContext}
        />
      )}
    </div>
  );
}
