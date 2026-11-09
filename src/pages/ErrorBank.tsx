import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Search,
  Check,
  ArrowLeft,
  XCircle,
  Zap,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { fetchErrorBank, markResolvedInErrorBank } from '../lib/errorBankService';
import { resolveQuestionById, ResolvedQuestion } from '../lib/questionResolver';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EmptyState from '../components/ui/EmptyState';
import Skeleton from '../components/ui/Skeleton';
import { FormattedMathText } from '../components/ui/KatexMath';

export default function ErrorBank() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { openAITutor } = useApp();
  const userId = user?.id || 'guest';

  const [loading, setLoading] = useState(true);
  const [errorQuestionIds, setErrorQuestionIds] = useState<string[]>([]);
  const [masteredCount, setMasteredCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('satbase_error_bank_mastered_count');
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [selectedSection, setSelectedSection] = useState<'all' | 'reading_writing' | 'math'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Drill Mode State
  const [isDrillActive, setIsDrillActive] = useState(false);
  const [activeDrillQuestions, setActiveDrillQuestions] = useState<ResolvedQuestion[]>([]);
  const [resolvedInSession, setResolvedInSession] = useState<Set<string>>(new Set());
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillSelectedOption, setDrillSelectedOption] = useState<string | null>(null);
  const [drillSubmitted, setDrillSubmitted] = useState(false);
  const [drillFeedback, setDrillFeedback] = useState<'correct' | 'incorrect' | null>(null);

  // Load error bank questions
  useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoading(true);
      try {
        const ids = await fetchErrorBank(userId);
        if (isMounted) {
          setErrorQuestionIds(ids);
        }
      } catch (err) {
        console.warn('Failed to load error bank:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  // Resolve questions for all error IDs
  const resolvedQuestions: ResolvedQuestion[] = useMemo(() => {
    return errorQuestionIds.map((id) => resolveQuestionById(id));
  }, [errorQuestionIds]);

  // Filtered list
  const filteredQuestions = useMemo(() => {
    return resolvedQuestions.filter((q) => {
      if (selectedSection !== 'all' && q.section !== selectedSection) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesPrompt = q.prompt.toLowerCase().includes(query);
        const matchesDomain = q.domain.toLowerCase().includes(query);
        const matchesSkill = q.skill.toLowerCase().includes(query);
        const matchesId = q.id.toLowerCase().includes(query);
        if (!matchesPrompt && !matchesDomain && !matchesSkill && !matchesId) {
          return false;
        }
      }
      return true;
    });
  }, [resolvedQuestions, selectedSection, searchQuery]);

  // Active question in drill session
  const currentDrillQ: ResolvedQuestion | undefined = activeDrillQuestions[drillIndex];

  // Resolve item as mastered from list view
  const handleResolve = async (questionId: string) => {
    setErrorQuestionIds((prev) => prev.filter((id) => id !== questionId));
    setMasteredCount((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem('satbase_error_bank_mastered_count', String(next));
      } catch {}
      return next;
    });
    await markResolvedInErrorBank(userId, questionId);
  };

  // Start Drill Mode with a frozen snapshot of target questions
  const startDrill = (startIdx = 0) => {
    const questionsToDrill = filteredQuestions.length > 0 ? filteredQuestions : resolvedQuestions;
    if (questionsToDrill.length === 0) return;
    setActiveDrillQuestions(questionsToDrill);
    setResolvedInSession(new Set());
    setDrillIndex(Math.min(startIdx, questionsToDrill.length - 1));
    setDrillSelectedOption(null);
    setDrillSubmitted(false);
    setDrillFeedback(null);
    setIsDrillActive(true);
  };

  // Finish Drill session and commit resolved items to error list
  const finishDrill = () => {
    setIsDrillActive(false);
    if (resolvedInSession.size > 0) {
      setErrorQuestionIds((prev) => prev.filter((id) => !resolvedInSession.has(id)));
    }
  };

  // Submit answer during drill
  const handleDrillSubmit = () => {
    if (!currentDrillQ || !drillSelectedOption || drillSubmitted) return;
    const isCorrect = drillSelectedOption === currentDrillQ.correctAnswerLetter;
    setDrillSubmitted(true);
    setDrillFeedback(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      setResolvedInSession((prev) => new Set(prev).add(currentDrillQ.id));
      setMasteredCount((prev) => {
        const next = prev + 1;
        try {
          localStorage.setItem('satbase_error_bank_mastered_count', String(next));
        } catch {}
        return next;
      });
      void markResolvedInErrorBank(userId, currentDrillQ.id);
    }
  };

  // Next drill question
  const handleDrillNext = () => {
    if (drillIndex < activeDrillQuestions.length - 1) {
      setDrillIndex((prev) => prev + 1);
      setDrillSelectedOption(null);
      setDrillSubmitted(false);
      setDrillFeedback(null);
    } else {
      finishDrill();
    }
  };

  // Open Cosmo Socratic Tutor for question
  const handleAskCosmo = (q: ResolvedQuestion) => {
    openAITutor(
      {
        mode: 'practice',
        questionId: q.id,
        topicName: q.skill || q.domain,
        questionText: q.prompt,
        passage: q.passage,
        choices: q.options.map((opt) => ({ key: opt.letter, text: opt.text })),
        hintLevel: 1,
      },
      `I missed question ${q.id} in my practice. Can you give me a Socratic hint without spoiling the final answer?`
    );
  };

  const totalErrors = errorQuestionIds.length;
  const totalEncountered = totalErrors + masteredCount;
  const masteryRate = totalEncountered > 0 ? Math.round((masteredCount / totalEncountered) * 100) : 100;

  return (
    <div className="error-bank-page space-y-8 max-w-5xl mx-auto font-sans pb-16">
      {/* ── 1. Header (Cosmo Notebook title + stats + review action) ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-berry/10 text-berry font-mono text-[11px] font-bold mb-2 uppercase tracking-wide">
            <RotateCcw className="w-3 h-3" />
            <span>Spaced Repetition Drills</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
            Error Bank
          </h1>
          <p className="text-sm text-ink-2 font-sans mt-1">
            Every missed question is tracked here until you master it through spaced re-drills.
          </p>
        </div>

        {totalErrors > 0 && !isDrillActive && (
          <Button
            variant="accent"
            size="md"
            onClick={() => startDrill(0)}
            leftIcon={<Zap className="w-4 h-4 text-white" />}
          >
            Start Drill Session ({totalErrors})
          </Button>
        )}
      </div>

      {/* ── 2. Top Stats Strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-ink-2 mb-1">
            <span>Open Mistakes</span>
            <AlertCircle className="w-4 h-4 text-berry" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-ink">
            {totalErrors}
          </div>
          <p className="text-[11px] text-ink-muted mt-1">Ready for re-drilling</p>
        </Card>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-ink-2 mb-1">
            <span>Mastered</span>
            <CheckCircle2 className="w-4 h-4 text-moss" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-moss">
            {masteredCount}
          </div>
          <p className="text-[11px] text-ink-muted mt-1">Resolved through drills</p>
        </Card>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-ink-2 mb-1">
            <span>Mastery Rate</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-accent">
            {masteryRate}%
          </div>
          <p className="text-[11px] text-ink-muted mt-1">Resolved vs total missed</p>
        </Card>

        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between text-xs text-ink-2 mb-1">
            <span>Drill Schedule</span>
            <RotateCcw className="w-4 h-4 text-cobalt" />
          </div>
          <div className="font-mono text-base sm:text-lg font-bold text-ink truncate mt-1">
            {totalErrors > 0 ? 'Twice / week' : 'Up to date'}
          </div>
          <p className="text-[11px] text-ink-muted mt-1">Algorithmic spacing</p>
        </Card>
      </div>

      {/* ── 3. INTERACTIVE DRILL SESSION MODE (When Active) ── */}
      {isDrillActive && currentDrillQ ? (
        <Card className="p-6 sm:p-8 space-y-6 border-accent/40 shadow-notebook animate-fade-in">
          {/* Drill Top Bar */}
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={finishDrill}
                className="p-1.5 rounded-lg border border-line bg-surface hover:bg-paper-2 text-ink-2 hover:text-ink transition-colors cursor-pointer"
                title="Exit Drill Session"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div>
                <span className="text-xs font-mono text-accent font-semibold uppercase">
                  Drill {drillIndex + 1} of {activeDrillQuestions.length}
                </span>
                <h3 className="font-display font-semibold text-base text-ink">
                  {currentDrillQ.skill || currentDrillQ.domain}
                </h3>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleAskCosmo(currentDrillQ)}
              leftIcon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
              className="text-xs"
            >
              Ask Cosmo Hint
            </Button>
          </div>

          {/* Passage (if reading) */}
          {currentDrillQ.passage && (
            <div className="p-4 rounded-xl bg-paper-2/60 border border-line text-xs sm:text-sm text-ink leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto">
              <FormattedMathText text={currentDrillQ.passage} />
            </div>
          )}

          {/* Question Prompt */}
          <div className="font-display font-medium text-sm sm:text-base text-ink leading-relaxed">
            <FormattedMathText text={currentDrillQ.prompt} />
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-2.5">
            {currentDrillQ.options.map((opt) => {
              const isSelected = drillSelectedOption === opt.letter;
              const isCorrectLetter = opt.letter === currentDrillQ.correctAnswerLetter;

              let optionStyle = 'border-line bg-surface hover:border-line-strong text-ink';
              if (drillSubmitted) {
                if (isCorrectLetter) {
                  optionStyle = 'border-moss bg-moss/10 text-moss font-semibold';
                } else if (isSelected) {
                  optionStyle = 'border-berry bg-berry/10 text-berry font-semibold';
                } else {
                  optionStyle = 'border-line/40 bg-surface/40 text-ink-muted opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'border-accent bg-accent/10 text-accent font-semibold ring-1 ring-accent/30';
              }

              return (
                <button
                  key={opt.letter}
                  type="button"
                  disabled={drillSubmitted}
                  onClick={() => setDrillSelectedOption(opt.letter)}
                  className={`w-full p-3.5 sm:px-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                >
                  <span className="font-mono font-bold text-xs uppercase px-1.5 py-0.5 rounded bg-paper-2 border border-line shrink-0">
                    {opt.letter}
                  </span>
                  <span className="flex-1 leading-snug">
                    <FormattedMathText text={opt.text} />
                  </span>
                  {drillSubmitted && isCorrectLetter && (
                    <CheckCircle2 className="w-4 h-4 text-moss shrink-0" />
                  )}
                  {drillSubmitted && isSelected && !isCorrectLetter && (
                    <XCircle className="w-4 h-4 text-berry shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Drill Feedback Banner */}
          {drillSubmitted && (
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in ${
                drillFeedback === 'correct'
                  ? 'bg-moss/10 border-moss/30 text-moss'
                  : 'bg-berry/10 border-berry/30 text-berry'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {drillFeedback === 'correct' ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <div>
                  <div className="font-bold">
                    {drillFeedback === 'correct'
                      ? 'Correct! Question resolved and marked mastered.'
                      : `Incorrect. The correct answer was (${currentDrillQ.correctAnswerLetter}).`}
                  </div>
                  <p className="text-[11px] text-ink-2 mt-0.5">
                    {currentDrillQ.explanation}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleAskCosmo(currentDrillQ)}
                  leftIcon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
                  className="text-xs"
                >
                  Ask Cosmo Why
                </Button>
                <Button variant="accent" size="sm" onClick={handleDrillNext} rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  {drillIndex < activeDrillQuestions.length - 1 ? 'Next Question' : 'Complete Drill'}
                </Button>
              </div>
            </div>
          )}

          {/* Drill Actions (Submit) */}
          {!drillSubmitted && (
            <div className="flex items-center justify-between pt-2 border-t border-line/60">
              <span className="text-xs text-ink-muted">
                Select an option and submit to test your concept mastery.
              </span>
              <Button
                variant="accent"
                size="md"
                onClick={handleDrillSubmit}
                disabled={!drillSelectedOption}
              >
                Submit Answer
              </Button>
            </div>
          )}
        </Card>
      ) : null}

      {/* ── 4. Main Question List & Filter Controls ── */}
      {!isDrillActive && (
        <div className="space-y-4">
          {/* Controls: Section Switcher + Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Section tabs */}
            <div className="inline-flex items-center rounded-xl border border-line bg-surface p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedSection('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSection === 'all'
                    ? 'bg-accent text-accent-contrast shadow-2xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                All Sections ({totalErrors})
              </button>
              <button
                type="button"
                onClick={() => setSelectedSection('reading_writing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSection === 'reading_writing'
                    ? 'bg-accent text-accent-contrast shadow-2xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                Reading & Writing
              </button>
              <button
                type="button"
                onClick={() => setSelectedSection('math')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSection === 'math'
                    ? 'bg-accent text-accent-contrast shadow-2xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                Math
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search missed questions…"
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-line bg-surface text-xs text-ink placeholder:text-ink-muted focus:outline-hidden focus:border-accent"
              />
            </div>
          </div>

          {/* Question Cards List */}
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-28 w-full rounded-2xl" />
              <Skeleton className="h-28 w-full rounded-2xl" />
              <Skeleton className="h-28 w-full rounded-2xl" />
            </div>
          ) : filteredQuestions.length === 0 ? (
            <div className="py-12">
              <EmptyState
                headline={totalErrors === 0 ? 'Your Error Bank is completely clean!' : 'No questions match your filter'}
                description={
                  totalErrors === 0
                    ? 'Any questions you answer incorrectly during Topic Practice or Mock Tests will appear here for spaced repetition drills.'
                    : 'Try selecting a different section or clearing your search term.'
                }
                actionLabel={totalErrors === 0 ? 'Practice Questions' : 'Clear Filters'}
                onAction={() => {
                  if (totalErrors === 0) {
                    navigate('/questions');
                  } else {
                    setSelectedSection('all');
                    setSearchQuery('');
                  }
                }}
                mascotSrc="/images/avatar/avatar-celebrate.png"
              />
            </div>
          ) : (
            <div className="space-y-3">
              {filteredQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-line bg-surface hover:border-line-strong transition-all shadow-2xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-berry/10 border border-berry/20 text-berry font-mono text-[10px] font-bold uppercase">
                        {q.section === 'math' ? 'Math' : 'Reading & Writing'}
                      </span>
                      <span className="text-xs font-semibold text-ink">
                        {q.domain}
                      </span>
                      <span className="text-xs text-ink-muted">·</span>
                      <span className="text-xs text-ink-2 truncate">
                        {q.skill}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] text-ink-muted">
                      ID: {q.id}
                    </span>
                  </div>

                  {/* Question snippet */}
                  <p className="text-xs sm:text-sm text-ink leading-relaxed line-clamp-3">
                    <FormattedMathText text={q.prompt} />
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAskCosmo(q)}
                      leftIcon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
                      className="text-xs"
                    >
                      Ask Cosmo Hint
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleResolve(q.id)}
                        leftIcon={<Check className="w-3.5 h-3.5 text-moss" />}
                        className="text-xs text-ink-2 hover:text-moss"
                      >
                        Mark Mastered
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => startDrill(idx)}
                        rightIcon={<ArrowRight className="w-3 h-3" />}
                        className="text-xs"
                      >
                        Drill Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
