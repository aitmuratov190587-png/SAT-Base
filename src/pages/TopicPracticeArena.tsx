import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Bookmark,
  Slash,
  Sparkles,
  BookOpen,
  X,
  Send,
  Check,
  ArrowLeft,
} from 'lucide-react';
import { QUESTION_REGISTRY, PracticeQuestion } from '../data/questionRegistry';
import { EmptyState } from '../components/ui/EmptyState';
import { useAuth } from '../contexts/AuthContext';
import { useApp } from '../contexts/AppContext';
import { calculateSAElo, QuestionDifficulty, SATSection } from '../lib/saEloService';
import { fetchAllUserProgress, saveQuestionProgress } from '../lib/progressService';
import { addToErrorBank, removeFromErrorBank } from '../lib/errorBankService';
import CalculatorModal from '../components/bluebook/CalculatorModal';
import ReferenceModal from '../components/bluebook/ReferenceModal';
import BluebookHeader from '../components/bluebook/BluebookHeader';
import BluebookFooter, { QuestionStatus } from '../components/bluebook/BluebookFooter';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { FormattedMathText } from '../components/ui/KatexMath';
import { answersMatch } from '../lib/answerMatching';
import MathExplanationDisplay from '../components/practice/MathExplanationDisplay';
import AITutorDrawer from '../components/ai/AITutorDrawer';
import { TutorContext } from '../lib/tutorValidator';

interface QuestionStat {
  timeSeconds: number;
  selectedOption: string | null;
  isCorrect: boolean;
  markedForReview: boolean;
  eliminatedOptions: string[];
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const PRACTICE_SESSION_SIZE = 20;

export default function TopicPracticeArena() {
  const { topicId: urlTopicId } = useParams<{ topicId?: string }>();
  const activeTopicId = (!urlTopicId || urlTopicId === 'cross-text') ? 'rw-crf-1' : urlTopicId;
  const topicMeta = QUESTION_REGISTRY[activeTopicId] || QUESTION_REGISTRY['rw-crf-1'];
  const questions: PracticeQuestion[] = (topicMeta?.questions as PracticeQuestion[]) || [];

  const { user } = useAuth();
  const { profile, updateProfile, refreshStatistics } = useApp();
  const effectiveUserId = user?.id || 'guest';
  const [, setLastEloDelta] = useState<number | null>(null);

  // Active question index
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentQ: PracticeQuestion | undefined = questions[currentIndex] || questions[0];
  const isMath = topicMeta?.section === 'math' || Boolean(currentQ && !('text1' in currentQ) && !('passage' in currentQ));

  // Active session calculation (Requirement 7: Question counter must come from active session 20, NOT dataset 317)
  const sessionBatch = Math.floor(currentIndex / PRACTICE_SESSION_SIZE);
  const sessionStart = sessionBatch * PRACTICE_SESSION_SIZE;
  const sessionEnd = Math.min(sessionStart + PRACTICE_SESSION_SIZE, questions.length);
  const sessionQuestions = useMemo(
    () => questions.slice(sessionStart, sessionEnd),
    [questions, sessionStart, sessionEnd]
  );
  const sessionCurrentIndex = currentIndex - sessionStart;
  const sessionTotalQuestions = sessionQuestions.length;

  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState<boolean>(false);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [isHighlightActive, setIsHighlightActive] = useState<boolean>(false);

  // Draggable Split Divider State for Reading & Writing (percentage for left passage)
  const [splitPercent, setSplitPercent] = useState<number>(50);
  const isDraggingSplit = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset on topic change
  useEffect(() => {
    setCurrentIndex(0);
    setTentativeOption(null);
    setSeconds(0);
    setIsTimerRunning(true);
  }, [activeTopicId]);

  // Per-Question Timer state
  const [seconds, setSeconds] = useState<number>(0);
  const [, setIsTimerRunning] = useState<boolean>(true);
  const [isTimerHidden, setIsTimerHidden] = useState<boolean>(false);

  // Stored stats for each question by ID
  const [questionStats, setQuestionStats] = useState<Record<string, QuestionStat>>({});

  // Load progress from Supabase Cloud on mount & user change
  useEffect(() => {
    let isMounted = true;
    fetchAllUserProgress(effectiveUserId).then((summaries) => {
      if (!isMounted) return;
      const topicProg = summaries[activeTopicId];
      if (topicProg?.answers) {
        setQuestionStats((prev) => {
          const merged = { ...prev };
          Object.entries(topicProg.answers).forEach(([qId, ans]) => {
            merged[qId] = {
              timeSeconds: ans.timeSeconds,
              selectedOption: ans.selectedOption,
              isCorrect: ans.isCorrect,
              markedForReview: prev[qId]?.markedForReview || false,
              eliminatedOptions: prev[qId]?.eliminatedOptions || [],
            };
          });
          return merged;
        });
      }
    });
    return () => {
      isMounted = false;
    };
  }, [effectiveUserId, activeTopicId]);

  // Right Drawer state for AI Tutor & Explanation
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isTutorOpen, setIsTutorOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'ask' | 'explanation'>('ask');

  // Chat conversation state for Ask Preppy
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>({});
  const [chatInput, setChatInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Tentatively selected option before user clicks "Check" button
  const [tentativeOption, setTentativeOption] = useState<string | null>(null);

  // Get or initialize stats for the current question
  const currentStat: QuestionStat = questionStats[currentQ?.id] || {
    timeSeconds: 0,
    selectedOption: null,
    isCorrect: false,
    markedForReview: false,
    eliminatedOptions: [],
  };

  const isAnswered = currentStat.selectedOption !== null;

  // Memoized context for Cosmo Socratic AI Tutor
  const tutorContext: TutorContext = useMemo(() => {
    if (!currentQ) return { mode: 'practice' };
    const passage =
      'passage' in currentQ && typeof currentQ.passage === 'string'
        ? currentQ.passage
        : 'text1' in currentQ && typeof currentQ.text1 === 'string'
        ? `${currentQ.text1}\n\n${'text2' in currentQ && typeof currentQ.text2 === 'string' ? currentQ.text2 : ''}`
        : undefined;

    return {
      mode: 'practice',
      questionId: currentQ.id,
      questionNumber: currentIndex + 1,
      topicName: topicMeta?.topicName || 'Practice',
      questionText: currentQ.prompt,
      passage,
      choices: Array.isArray(currentQ.options)
        ? currentQ.options.map((o: { letter?: string; id?: string; text: string }) => ({
            key: o.letter || o.id || '',
            text: o.text,
          }))
        : undefined,
      correctAnswer: currentQ.correctAnswer,
      officialExplanation: currentQ.explanation,
      userAnswer: currentStat.selectedOption || undefined,
      hintLevel: 0,
    };
  }, [currentQ, currentIndex, topicMeta?.topicName, currentStat.selectedOption]);

  // Synchronize tentativeOption when question changes
  useEffect(() => {
    setTentativeOption(currentStat.selectedOption);
  }, [currentIndex, currentQ?.id, currentStat.selectedOption]);

  // Per-Question Timer Logic
  useEffect(() => {
    if (!currentQ) return;

    if (currentStat.selectedOption !== null) {
      setSeconds(currentStat.timeSeconds);
      setIsTimerRunning(false);
      return;
    }

    setSeconds(0);
    setIsTimerRunning(true);

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, currentQ?.id]);

  // Clicking an Option (Tentative Pre-selection)
  const handleOptionClick = useCallback(
    (letter: string) => {
      if (isAnswered) return;
      // If eliminated, restore it when clicked
      if (currentStat.eliminatedOptions?.includes(letter)) {
        setQuestionStats((prev) => ({
          ...prev,
          [currentQ.id]: {
            ...currentStat,
            eliminatedOptions: (currentStat.eliminatedOptions || []).filter((l) => l !== letter),
          },
        }));
      }
      setTentativeOption(letter);
    },
    [currentQ?.id, currentStat, isAnswered]
  );

  // Confirming the Selected Option ("Check" button clicked)
  const handleConfirmAnswer = useCallback(() => {
    if (isAnswered || !tentativeOption || !currentQ) return;

    setIsTimerRunning(false);

    const isCorrect = answersMatch(tentativeOption, currentQ.correctAnswer);
    setQuestionStats((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...currentStat,
        timeSeconds: seconds,
        selectedOption: tentativeOption,
        isCorrect,
      },
    }));

    // Auto-open explanation tab in drawer so the student can review
    setActiveTab('explanation');
    setIsDrawerOpen(true);

    // Persist to Supabase Cloud and local cache
    void saveQuestionProgress(
      effectiveUserId,
      activeTopicId,
      currentQ.id,
      tentativeOption,
      isCorrect,
      seconds
    ).then(refreshStatistics);

    // Sync with Error Bank: auto-log missed questions, resolve answered correctly
    if (!isCorrect) {
      void addToErrorBank(effectiveUserId, currentQ.id, activeTopicId);
    } else {
      void removeFromErrorBank(effectiveUserId, currentQ.id);
    }

    // Dynamic SAT-Adaptive ELO (SA-ELO) Calibration
    try {
      const section: SATSection = isMath ? 'math' : 'reading_writing';
      const userRating = isMath
        ? profile?.currentScore?.math || 600
        : profile?.currentScore?.english || 600;

      const eloCalc = calculateSAElo({
        userRating,
        difficulty: (currentQ.difficulty as QuestionDifficulty) || 'Medium',
        isCorrect,
        timeSeconds: seconds,
        section,
        questionsSolvedTotal: profile?.questionsSolved || 0,
      });

      setLastEloDelta(eloCalc.delta);

      if (updateProfile && profile) {
        const updatedMath = isMath ? Math.round(eloCalc.newRating) : profile.currentScore?.math || 600;
        const updatedEnglish = !isMath ? Math.round(eloCalc.newRating) : profile.currentScore?.english || 600;

        updateProfile({
          currentScore: {
            math: updatedMath,
            english: updatedEnglish,
            total: updatedMath + updatedEnglish,
          },
        });
      }
    } catch (err) {
      console.warn('SA-ELO update error:', err);
    }
  }, [
    activeTopicId,
    currentQ,
    currentStat,
    effectiveUserId,
    isAnswered,
    isMath,
    profile,
    refreshStatistics,
    seconds,
    tentativeOption,
    updateProfile,
  ]);

  // Strikethrough Elimination Toggle
  const handleToggleStrikethrough = useCallback(
    (letter: string, e: React.MouseEvent) => {
      e.stopPropagation();
      if (isAnswered || !currentQ) return;

      const currentElim = currentStat.eliminatedOptions || [];
      const updated = currentElim.includes(letter)
        ? currentElim.filter((l) => l !== letter)
        : [...currentElim, letter];

      // If user eliminated the tentatively selected option, clear tentative
      if (tentativeOption === letter) {
        setTentativeOption(null);
      }

      setQuestionStats((prev) => ({
        ...prev,
        [currentQ.id]: {
          ...currentStat,
          eliminatedOptions: updated,
        },
      }));
    },
    [currentQ, currentStat, isAnswered, tentativeOption]
  );

  // Mark for Review Toggle
  const handleToggleMarkForReview = useCallback(() => {
    if (!currentQ) return;
    setQuestionStats((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...currentStat,
        markedForReview: !currentStat.markedForReview,
      },
    }));
  }, [currentQ, currentStat]);

  // Navigation
  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleJumpToSessionQuestion = useCallback(
    (indexInSession: number) => {
      const targetGlobalIndex = sessionStart + indexInSession;
      if (targetGlobalIndex >= 0 && targetGlobalIndex < questions.length) {
        setCurrentIndex(targetGlobalIndex);
      }
    },
    [questions.length, sessionStart]
  );

  // ── Keyboard Shortcuts (Requirement 9) ──
  // A-D select, Left/Right arrows navigate, F flags/marks for review
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || (document.activeElement as HTMLElement)?.isContentEditable) {
        return;
      }

      const key = e.key.toUpperCase();

      // Flag toggle with 'F'
      if (key === 'F' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        handleToggleMarkForReview();
        return;
      }

      // Arrow navigation
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
        return;
      }

      // Choice selection with A, B, C, D
      if (['A', 'B', 'C', 'D'].includes(key)) {
        if (!isAnswered) {
          e.preventDefault();
          handleOptionClick(key);
        }
      } else if (e.key === 'Enter') {
        if (!isAnswered && tentativeOption) {
          e.preventDefault();
          handleConfirmAnswer();
        } else if (isAnswered && currentIndex < questions.length - 1) {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    currentIndex,
    handleConfirmAnswer,
    handleNext,
    handleOptionClick,
    handlePrev,
    handleToggleMarkForReview,
    isAnswered,
    questions.length,
    tentativeOption,
  ]);

  // Draggable Split Screen Handler (Mouse)
  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingSplit.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingSplit.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = moveEvent.clientX - rect.left;
      const newPercent = Math.max(28, Math.min(72, (offsetX / rect.width) * 100));
      setSplitPercent(newPercent);
    };

    const onMouseUp = () => {
      isDraggingSplit.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // AI Tutor chat
  const currentChat = chatMessages[currentQ?.id] || [];

  const handleSendPrompt = (promptText: string) => {
    if (!promptText.trim() || !currentQ) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: promptText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [...currentChat, userMsg];
    setChatMessages((prev) => ({
      ...prev,
      [currentQ.id]: updated,
    }));
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = '';

      if (!isAnswered) {
        if (isMath) {
          aiResponse = `Socratic Math Guidance:\n\n1. Identify the target variable or relationship.\n2. Isolate unknown expressions step-by-step.\n3. Verify your algebra with Desmos or substitution.\n\nSelect an option and click Check to see the complete solution!`;
        } else {
          aiResponse = `Reading & Writing Hint:\n\nPay close attention to where the author introduces contrasts or qualifications (look for 'while', 'however', 'yet').\n\nEliminate choices that state extreme absolutes!`;
        }
      } else {
        aiResponse = `Solution Walkthrough:\n\n${currentQ.explanation}\n\nCorrect answer: Choice ${currentQ.correctAnswer}`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatMessages((prev) => ({
        ...prev,
        [currentQ.id]: [...updated, aiMsg],
      }));
      setIsTyping(false);
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  if (!currentQ || questions.length === 0) {
    return (
      <div className="min-h-screen bg-paper flex flex-col font-sans">
        <header className="h-14 border-b border-line bg-paper/95 backdrop-blur px-6 flex items-center justify-between">
          <Link
            to="/questions"
            className="flex items-center gap-2 text-ink hover:text-accent font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Question Bank</span>
          </Link>
          <span className="text-sm font-medium text-ink-2">
            {topicMeta?.topicName || 'Practice Topic'}
          </span>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <EmptyState
            headline="More questions coming soon"
            description={`We are currently authoring and verifying original practice questions for ${topicMeta?.topicName || 'this topic'}. Check back soon!`}
            actionLabel="Back to Question Bank"
            actionHref="/questions"
          />
        </main>
      </div>
    );
  }

  // Active session question statuses for navigator grid
  const questionStatuses: QuestionStatus[] = sessionQuestions.map((q, idx) => {
    const stat = questionStats[q.id];
    return {
      number: idx + 1,
      isAnswered: Boolean(stat?.selectedOption),
      isFlagged: Boolean(stat?.markedForReview),
      isCurrent: idx === sessionCurrentIndex,
    };
  });

  const sectionTitle = topicMeta?.topicName || (isMath ? 'Section 2: Math Practice' : 'Section 1: Reading and Writing Practice');

  const difficultyVariant = (currentQ.difficulty?.toLowerCase() || 'medium') as 'easy' | 'medium' | 'hard';

  return (
    <div className="min-h-screen flex flex-col justify-between select-none font-sans bg-paper text-ink transition-colors duration-200">
      {/* ── Top Bluebook Header ── */}
      <BluebookHeader
        sectionTitle={sectionTitle}
        secondsRemaining={Math.max(0, 1200 - seconds)} // 20-min session countdown
        timerVisible={!isTimerHidden}
        onToggleTimer={() => setIsTimerHidden(!isTimerHidden)}
        isMarkedForReview={Boolean(currentStat.markedForReview)}
        onToggleMarkForReview={handleToggleMarkForReview}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenReference={() => setIsReferenceOpen(true)}
        isMathSection={isMath}
        isFocusMode={isFocusMode}
        onToggleFocusMode={() => setIsFocusMode(!isFocusMode)}
        isPracticeMode={true}
        onToggleHighlight={() => setIsHighlightActive(!isHighlightActive)}
        isHighlightActive={isHighlightActive}
      />

      {/* ── Main Workspace ── */}
      <main className="flex-1 pb-20 overflow-y-auto">
        {isMath ? (
          /* ── Math: Single Centered Column (max-w-[720px]) ── */
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-8">
            {/* Question Header: Number in ink square + Difficulty badge + Mark for Review */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-line">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-[4px] bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {sessionCurrentIndex + 1}
                </span>

                {/* Difficulty badge visible ONLY in practice mode */}
                <Badge variant={difficultyVariant}>
                  {currentQ.difficulty || 'Medium'}
                </Badge>

                {/* Domain / Skill as small sentence-case text in practice mode */}
                {topicMeta?.topicName && (
                  <span className="text-xs text-ink-2 font-medium hidden sm:inline">
                    {topicMeta.topicName}
                  </span>
                )}
              </div>

              <button
                onClick={handleToggleMarkForReview}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                  currentStat.markedForReview
                    ? 'text-mustard font-semibold bg-mustard/10'
                    : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                }`}
                title="Mark for review (Shortcut: F)"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    currentStat.markedForReview ? 'fill-mustard text-mustard' : 'text-ink-2'
                  }`}
                />
                <span className="hidden sm:inline font-sans">
                  {currentStat.markedForReview ? 'For review' : 'Mark for review'}
                </span>
              </button>
            </div>

            {/* Math Question Stimulus with KaTeX (Equations rendered cleanly, no raw mono) */}
            <div className="space-y-6">
              {/* Question Prompt with KaTeX math rendering */}
              <div className="text-base sm:text-[17px] font-sans font-medium text-ink leading-relaxed select-text">
                <FormattedMathText text={currentQ.prompt} />
              </div>

              {/* Answer Options: Full-width, letter circle A-D, 1px border-line, selected = ink border + ink 6% fill */}
              <div className="space-y-2.5 pt-2">
                {currentQ.options.map((option) => {
                  const isTentative = tentativeOption === option.letter;
                  const isConfirmed = currentStat.selectedOption === option.letter;
                  const isEliminated = currentStat.eliminatedOptions?.includes(option.letter);
                  const isCorrect = answersMatch(option.letter, currentQ.correctAnswer);

                  let optionStyle = 'border-line bg-surface hover:border-ink/30 hover:bg-paper-2 text-ink';
                  if (isEliminated && !isAnswered) {
                    optionStyle = 'opacity-40 line-through bg-paper-2 border-line cursor-not-allowed';
                  } else if (isAnswered) {
                    if (isCorrect) {
                      optionStyle = 'border-moss bg-moss/10 text-moss font-semibold';
                    } else if (isConfirmed) {
                      optionStyle = 'border-berry bg-berry/10 text-berry font-semibold';
                    } else {
                      optionStyle = 'border-line/60 bg-paper-2 opacity-50 text-ink-2';
                    }
                  } else if (isTentative) {
                    optionStyle = 'border-ink bg-ink/[0.06] shadow-xs';
                  }

                  return (
                    <div
                      key={option.letter}
                      onClick={() => !isEliminated && handleOptionClick(option.letter)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer group ${optionStyle}`}
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Letter circle A-D */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                            isAnswered && isCorrect
                              ? 'bg-moss text-white'
                              : isAnswered && isConfirmed
                              ? 'bg-berry text-white'
                              : isTentative
                              ? 'bg-ink text-paper'
                              : 'border border-line text-ink-2 group-hover:border-ink/40'
                          }`}
                        >
                          {option.letter}
                        </div>

                        {/* Option text rendered with KaTeX */}
                        <div className="pt-0.5 text-sm sm:text-[15px] leading-relaxed flex-1">
                          <FormattedMathText text={option.text} />
                        </div>
                      </div>

                      {/* Eliminate toggle on right */}
                      {!isAnswered && (
                        <button
                          type="button"
                          onClick={(e) => handleToggleStrikethrough(option.letter, e)}
                          className={`p-1.5 rounded text-xs transition-colors shrink-0 ${
                            isEliminated
                              ? 'text-accent bg-accent-subtle font-bold opacity-100'
                              : 'text-ink-2/70 hover:text-ink hover:bg-paper-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 focus:opacity-100'
                          }`}
                          title={isEliminated ? 'Restore option' : 'Eliminate option'}
                          aria-label={`Eliminate option ${option.letter}`}
                        >
                          <Slash className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Check Answer Confirmation Action */}
              {!isAnswered && tentativeOption && (
                <div className="pt-4 flex justify-end">
                  <Button
                    variant="accent"
                    size="md"
                    onClick={handleConfirmAnswer}
                    className="flex items-center gap-1.5 font-sans"
                  >
                    <span>Check answer</span>
                    <Check className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── Reading & Writing: Split Screen with Draggable Divider ── */
          <div
            ref={containerRef}
            className="h-[calc(100vh-3.5rem-4rem)] flex flex-col lg:flex-row overflow-hidden relative"
          >
            {/* Left Column: Passage Panel (Fraunces body 18/30) */}
            <div
              style={{ width: `${splitPercent}%` }}
              className="w-full lg:h-full overflow-y-auto px-6 sm:px-10 py-6 border-b lg:border-b-0 select-text"
            >
              {/* Practice Mode: Small sentence-case domain/topic info */}
              <div className="mb-4 text-xs text-ink-2 font-sans font-medium">
                {currentQ.domain && <span>{currentQ.domain} · </span>}
                {currentQ.topic && <span>{currentQ.topic}</span>}
              </div>

              {/* Dual Texts (Cross-Text Connections) or Single Passage */}
              {'text1' in currentQ && 'text2' in currentQ && currentQ.text1 && currentQ.text2 ? (
                <div className="space-y-6 max-w-prose">
                  <div>
                    <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-ink-2 mb-2">
                      Text 1
                    </h3>
                    <div className="font-display text-[18px] leading-[30px] text-ink select-text">
                      {String(currentQ.text1)}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-line">
                    <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-ink-2 mb-2">
                      Text 2
                    </h3>
                    <div className="font-display text-[18px] leading-[30px] text-ink select-text">
                      {String(currentQ.text2)}
                    </div>
                  </div>
                </div>
              ) : 'passage' in currentQ && currentQ.passage ? (
                <div className="font-display text-[18px] leading-[30px] text-ink select-text whitespace-pre-line max-w-prose">
                  {String((currentQ as Record<string, unknown>).passage)}
                </div>
              ) : null}
            </div>

            {/* Draggable Divider Line */}
            <div
              onMouseDown={handleDividerMouseDown}
              className="hidden lg:flex w-2.5 hover:w-3 bg-transparent hover:bg-accent/15 cursor-col-resize items-center justify-center relative select-none group transition-all z-10 shrink-0"
              title="Drag to resize passage and question panels"
            >
              <div className="w-[1px] h-full bg-line group-hover:bg-accent transition-colors" />
            </div>

            {/* Right Column: Question & Answer Choices */}
            <div
              style={{ width: `${100 - splitPercent}%` }}
              className="w-full lg:h-full overflow-y-auto px-6 sm:px-8 py-6 select-text"
            >
              <div className="max-w-xl space-y-6">
                {/* Question Header: Number in ink square + Difficulty badge + Mark for Review */}
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-[4px] bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {sessionCurrentIndex + 1}
                    </span>

                    {/* Difficulty badge visible ONLY in practice mode */}
                    <Badge variant={difficultyVariant}>
                      {currentQ.difficulty || 'Medium'}
                    </Badge>
                  </div>

                  <button
                    onClick={handleToggleMarkForReview}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      currentStat.markedForReview
                        ? 'text-mustard font-semibold bg-mustard/10'
                        : 'text-ink-2 hover:text-ink hover:bg-paper-2'
                    }`}
                    title="Mark for review (Shortcut: F)"
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        currentStat.markedForReview ? 'fill-mustard text-mustard' : 'text-ink-2'
                      }`}
                    />
                    <span className="hidden sm:inline font-sans">
                      {currentStat.markedForReview ? 'For review' : 'Mark for review'}
                    </span>
                  </button>
                </div>

                {/* Question Prompt */}
                <p className="text-base sm:text-[17px] font-sans font-medium text-ink leading-relaxed select-text">
                  {currentQ.prompt}
                </p>

                {/* Answer Options: Full-width, letter circle A-D, 1px border-line, selected = ink border + ink 6% fill */}
                <div className="space-y-2.5 pt-1">
                  {currentQ.options.map((option) => {
                    const isTentative = tentativeOption === option.letter;
                    const isConfirmed = currentStat.selectedOption === option.letter;
                    const isEliminated = currentStat.eliminatedOptions?.includes(option.letter);
                    const isCorrect = answersMatch(option.letter, currentQ.correctAnswer);

                    let optionStyle = 'border-line bg-surface hover:border-ink/30 hover:bg-paper-2 text-ink';
                    if (isEliminated && !isAnswered) {
                      optionStyle = 'opacity-40 line-through bg-paper-2 border-line cursor-not-allowed';
                    } else if (isAnswered) {
                      if (isCorrect) {
                        optionStyle = 'border-moss bg-moss/10 text-moss font-semibold';
                      } else if (isConfirmed) {
                        optionStyle = 'border-berry bg-berry/10 text-berry font-semibold';
                      } else {
                        optionStyle = 'border-line/60 bg-paper-2 opacity-50 text-ink-2';
                      }
                    } else if (isTentative) {
                      optionStyle = 'border-ink bg-ink/[0.06] shadow-xs';
                    }

                    return (
                      <div
                        key={option.letter}
                        onClick={() => !isEliminated && handleOptionClick(option.letter)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer group ${optionStyle}`}
                      >
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {/* Letter circle A-D */}
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                              isAnswered && isCorrect
                                ? 'bg-moss text-white'
                                : isAnswered && isConfirmed
                                ? 'bg-berry text-white'
                                : isTentative
                              ? 'bg-ink text-paper'
                              : 'border border-line text-ink-2 group-hover:border-ink/40'
                            }`}
                          >
                            {option.letter}
                          </div>

                          {/* Option text */}
                          <div className="pt-0.5 text-sm sm:text-[15px] leading-relaxed flex-1">
                            {option.text}
                          </div>
                        </div>

                        {/* Eliminate toggle on right */}
                        {!isAnswered && (
                          <button
                            type="button"
                            onClick={(e) => handleToggleStrikethrough(option.letter, e)}
                            className={`p-1.5 rounded text-xs transition-colors shrink-0 ${
                              isEliminated
                                ? 'text-accent bg-accent-subtle font-bold opacity-100'
                                : 'text-ink-2/70 hover:text-ink hover:bg-paper-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 focus:opacity-100'
                            }`}
                            title={isEliminated ? 'Restore option' : 'Eliminate option'}
                            aria-label={`Eliminate option ${option.letter}`}
                          >
                            <Slash className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Check Answer Confirmation Action */}
                {!isAnswered && tentativeOption && (
                  <div className="pt-4 flex justify-end">
                    <Button
                      variant="accent"
                      size="md"
                      onClick={handleConfirmAnswer}
                      className="flex items-center gap-1.5 font-sans"
                    >
                      <span>Check answer</span>
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── Bottom Bar: Official Bluebook Footer ── */}
      <BluebookFooter
        candidateName={profile?.name || 'Student'}
        currentQuestionIndex={sessionCurrentIndex}
        totalQuestions={sessionTotalQuestions}
        questionStatuses={questionStatuses}
        onSelectQuestion={handleJumpToSessionQuestion}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenReview={() => handleJumpToSessionQuestion(sessionTotalQuestions - 1)}
        isPracticeMode={true}
        onAskAiTutor={() => {
          setIsDrawerOpen(false);
          setIsTutorOpen(true);
        }}
        onToggleExplanation={() => {
          setActiveTab('explanation');
          setIsDrawerOpen(!isDrawerOpen);
        }}
        isExplanationOpen={isDrawerOpen && activeTab === 'explanation'}
      />

      {/* ── Slide-over Drawer for AI Tutor and Explanation (Practice Mode Only) ── */}
      {isDrawerOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-surface border-l border-line shadow-notebook flex flex-col font-sans animate-slide-left text-ink">
          {/* Drawer Top Header */}
          <div className="h-14 px-5 border-b border-line flex items-center justify-between shrink-0 bg-paper-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  setIsTutorOpen(true);
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors text-ink-2 hover:text-ink"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Ask AI Tutor</span>
              </button>

              <button
                onClick={() => setActiveTab('explanation')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'explanation'
                    ? 'bg-surface text-ink border border-line shadow-xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explanation</span>
              </button>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-1 rounded text-ink-2 hover:text-ink hover:bg-paper"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Body Content */}
          <div className="flex-1 overflow-y-auto p-5 select-text">
            {activeTab === 'explanation' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <span className="font-semibold text-xs uppercase tracking-wider text-ink-2">
                    Official Rationale
                  </span>
                  <Badge variant={isAnswered ? (currentStat.isCorrect ? 'moss' : 'berry') : 'neutral'}>
                    {isAnswered
                      ? currentStat.isCorrect
                        ? 'Correctly answered'
                        : 'Review needed'
                      : 'Attempt to unlock'}
                  </Badge>
                </div>

                {isMath ? (
                  <MathExplanationDisplay
                    explanation={currentQ.explanation}
                    correctAnswerDisplay={`Choice ${currentQ.correctAnswer}`}
                  />
                ) : (
                  <div className="space-y-3 text-sm text-ink leading-relaxed font-sans">
                    <p className="font-semibold text-accent">
                      Correct Answer: Choice {currentQ.correctAnswer}
                    </p>
                    <p className="text-ink-2 whitespace-pre-line select-text">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-3 overflow-y-auto mb-4">
                  <div className="p-3.5 rounded-xl bg-paper-2 border border-line text-xs text-ink-2 leading-relaxed">
                    👋 Ask me for Socratic hints, contrasting points, or elimination strategies without spoiling the answer!
                  </div>

                  {currentChat.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`p-3 rounded-xl text-xs max-w-[85%] whitespace-pre-line leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-ink text-paper'
                            : 'bg-paper-2 border border-line text-ink'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-ink-2 mt-1 px-1">{msg.timestamp}</span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="p-3 rounded-xl bg-paper-2 border border-line text-xs text-ink-2 w-24 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce delay-100" />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce delay-200" />
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendPrompt(chatInput);
                  }}
                  className="flex items-center gap-2 pt-3 border-t border-line"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 px-3 py-2 rounded-lg bg-surface border border-line text-ink text-xs focus:outline-none focus:border-accent"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim()}
                    className="p-2 rounded-lg bg-accent text-white disabled:opacity-40 hover:bg-accent-hover transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Floating Modals ── */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <ReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
        isAdvancedMath={isMath}
        topicName={topicMeta?.topicName}
      />

      {/* Socratic AI Tutor Drawer (Cosmo) */}
      <AITutorDrawer
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        context={tutorContext}
      />
    </div>
  );
}
