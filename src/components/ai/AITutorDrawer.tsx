import { useState, useEffect, useRef } from 'react';
import {
  X,
  Sparkles,
  Send,
  HelpCircle,
  AlertCircle,
  RefreshCw,
  Lightbulb,
  FileCheck,
  BookOpen,
  CheckCircle2,
  Lock,
  ImageIcon,
  Trash2,
  Crown,
} from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { TutorContext } from '../../lib/tutorValidator';
import KatexMath, { FormattedMathText } from '../ui/KatexMath';
import Button from '../ui/Button';
import { MascotState } from '../mascot/CosmoMascot';
import { queryCosmoAssistant } from '../../lib/cosmoAssistantService';
import { UNIVERSAL_QUICK_ACTIONS } from '../../lib/cosmoKnowledge';
import { useAppContext } from '../../contexts/AppContext';
import UpgradeModal from '../ui/UpgradeModal';

export interface AITutorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  context?: TutorContext;
  initialMessage?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isError?: boolean;
  image?: {
    previewUrl: string;
    name: string;
  };
}

/**
 * Message renderer supporting KaTeX display and inline math, markdown headers, and list formatting
 */
function TutorMessageRenderer({ content }: { content: string }) {
  const paragraphs = content.split(/\n\s*\n/);

  return (
    <div className="space-y-2.5 select-text leading-relaxed">
      {paragraphs.map((para, pIdx) => {
        const lines = para.split('\n');
        return (
          <div key={pIdx} className="space-y-1">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();

              // Display block math $$...$$
              if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
                const mathExpr = trimmed.slice(2, -2).trim();
                return (
                  <div
                    key={lIdx}
                    className="my-2 p-2.5 rounded-xl bg-surface border border-line text-center overflow-x-auto"
                  >
                    <KatexMath math={mathExpr} displayMode={true} />
                  </div>
                );
              }

              // Markdown subheader ### ...
              if (trimmed.startsWith('### ')) {
                return (
                  <h4
                    key={lIdx}
                    className="font-semibold text-xs sm:text-sm text-ink pt-1 pb-0.5 flex items-center gap-1.5"
                  >
                    <FormattedMathText text={trimmed.replace(/^###\s*/, '')} />
                  </h4>
                );
              }

              // Markdown subheader ## ...
              if (trimmed.startsWith('## ')) {
                return (
                  <h3
                    key={lIdx}
                    className="font-semibold text-sm text-ink pt-1.5 pb-0.5 flex items-center gap-1.5"
                  >
                    <FormattedMathText text={trimmed.replace(/^##\s*/, '')} />
                  </h3>
                );
              }

              const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');
              const cleanLine = isBullet ? trimmed.replace(/^[-•*]\s*/, '') : line;

              if (isBullet) {
                return (
                  <div key={lIdx} className="flex items-start gap-2 my-1 pl-1">
                    <span className="text-accent select-none mt-1 text-xs shrink-0">•</span>
                    <span className="flex-1">
                      <FormattedMathText text={cleanLine} />
                    </span>
                  </div>
                );
              }

              return (
                <div key={lIdx}>
                  <FormattedMathText text={line} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function AITutorDrawer({
  isOpen,
  onClose,
  context,
  initialMessage,
}: AITutorDrawerProps) {
  const { isVip, planLimits } = useAppContext();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputQuery, setInputQuery] = useState(initialMessage || '');
  const [isLoading, setIsLoading] = useState(false);
  const [mascotState, setMascotState] = useState<MascotState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [remainingMessages, setRemainingMessages] = useState<number | null>(null);
  const [remainingImages, setRemainingImages] = useState<number | null>(null);
  const [hintLevel, setHintLevel] = useState<number>(context?.hintLevel ?? 0);
  const [isConfirmingSolution, setIsConfirmingSolution] = useState(false);
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [attachedImage, setAttachedImage] = useState<{
    name: string;
    mimeType: string;
    base64: string;
    previewUrl: string;
  } | null>(null);

  const drawerRef = useRef<HTMLElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const talkingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isMockMode = context?.mode === 'mock';
  const isPracticeMode =
    !isMockMode &&
    (context?.mode === 'practice' || context?.mode === 'results' || Boolean(context?.questionId));
  const isUniversalMode = !isMockMode && !isPracticeMode;

  const dailyMessageCap = isVip ? 999999 : planLimits.tutor_per_day;
  const dailyImageCap = isVip ? 999999 : planLimits.image_uploads_per_day;

  // Cleanup talking animation timer on unmount
  useEffect(() => {
    return () => {
      if (talkingTimeoutRef.current) {
        clearTimeout(talkingTimeoutRef.current);
      }
    };
  }, []);

  // Accessibility: Escape key listener and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Load remaining messages and image uploads from ai_usage on open
  useEffect(() => {
    if (!isOpen || isMockMode) return;
    let isMounted = true;

    const fetchRemaining = async () => {
      if (isVip) {
        if (isMounted) {
          setRemainingMessages(999999);
          setRemainingImages(999999);
        }
        return;
      }

      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user || !isMounted) return;

        const tashkentToday = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'Asia/Tashkent',
        }).format(new Date());

        const { data } = await supabase
          .from('ai_usage')
          .select('count, image_count')
          .eq('user_id', user.id)
          .eq('day', tashkentToday)
          .maybeSingle();

        if (isMounted) {
          const used = data?.count ?? 0;
          const imgUsed = data?.image_count ?? 0;
          setRemainingMessages(Math.max(0, dailyMessageCap - used));
          setRemainingImages(Math.max(0, dailyImageCap - imgUsed));
        }
      } catch {
        if (isMounted) {
          setRemainingMessages(dailyMessageCap);
          setRemainingImages(dailyImageCap);
        }
      }
    };

    fetchRemaining();

    return () => {
      isMounted = false;
    };
  }, [isOpen, isMockMode, isVip, dailyMessageCap, dailyImageCap]);

  // Handle clipboard image paste
  const handlePaste = (e: React.ClipboardEvent) => {
    if (isMockMode || isLoading) return;
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          e.preventDefault();
          processImageFile(file);
          break;
        }
      }
    }
  };

  const processImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please select an image file (PNG, JPG, or WEBP).');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Image size exceeds 5MB limit. Please crop or choose a smaller screenshot.');
      return;
    }
    if (!isVip && remainingImages !== null && remainingImages <= 0) {
      setErrorMessage(`You have reached your daily limit of ${dailyImageCap} image uploads.`);
      setShowUpgradeModal(true);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setAttachedImage({
        name: file.name || 'screenshot.png',
        mimeType: file.type || 'image/jpeg',
        base64: result,
        previewUrl: result,
      });
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
  };

  // Sync hint level and reset errors when context changes
  useEffect(() => {
    if (context?.hintLevel !== undefined) {
      setHintLevel(context.hintLevel);
    } else {
      setHintLevel(0);
    }
    setErrorMessage(null);
    setLastFailedMessage(null);
  }, [context?.questionId, context?.mode]);

  // Handle initial message if supplied
  useEffect(() => {
    if (initialMessage && isOpen) {
      setInputQuery(initialMessage);
    }
  }, [initialMessage, isOpen]);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input on desktop
      if (window.innerWidth >= 768 && !isMockMode) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [isOpen, messages, isLoading]);

  if (!isOpen) return null;

  // Dispatch message via cosmoAssistantService
  const sendMessage = async (userText: string, overrideHintLevel?: number) => {
    const text = userText.trim();
    if ((!text && !attachedImage) || isLoading || isMockMode) return;

    if (!isVip && remainingMessages !== null && remainingMessages <= 0) {
      setErrorMessage(`You have reached your daily limit of ${dailyMessageCap} questions. Upgrade your plan for more!`);
      setShowUpgradeModal(true);
      return;
    }

    const currentHint = overrideHintLevel !== undefined ? overrideHintLevel : hintLevel;
    const currentImg = attachedImage;

    const userMessage: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      content: text || (currentImg ? 'Analyze this question screenshot' : ''),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      image: currentImg ? { previewUrl: currentImg.previewUrl, name: currentImg.name } : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setAttachedImage(null);
    setIsLoading(true);
    setMascotState('thinking');
    setErrorMessage(null);
    setLastFailedMessage(null);

    // Optimistically decrement question remaining (and image remaining if attached)
    if (!isVip && remainingMessages !== null) {
      setRemainingMessages(Math.max(0, remainingMessages - 1));
    }
    if (!isVip && currentImg && remainingImages !== null) {
      setRemainingImages(Math.max(0, remainingImages - 1));
    }

    try {
      const answer = await queryCosmoAssistant(text || 'Analyze this question screenshot', {
        mode: isMockMode
          ? 'mock'
          : isPracticeMode
          ? ((context?.mode as 'practice' | 'results') || 'practice')
          : 'general',
        currentPath: typeof window !== 'undefined' ? window.location.pathname : '/dashboard',
        hintLevel: currentHint,
        questionId: context?.questionId,
        questionText: context?.questionText,
        passage: context?.passage,
        choices: context?.choices,
        correctAnswer: context?.correctAnswer,
        officialExplanation: context?.officialExplanation,
        userAnswer: context?.userAnswer,
        image: currentImg ? { mimeType: currentImg.mimeType, data: currentImg.base64 } : undefined,
      });

      if (answer.error && !answer.reply) {
        setErrorMessage(answer.error);
        setLastFailedMessage(text);
        setMascotState('idle');
        if (answer.error.toLowerCase().includes('limit') || answer.error.toLowerCase().includes('upgrade')) {
          setShowUpgradeModal(true);
        }
        return;
      }

      if (answer.reply) {
        const assistantMessage: ChatMessage = {
          id: String(Date.now() + 1),
          role: 'assistant',
          content: answer.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMessage]);

        // Trigger talking animation on the mascot for 3 seconds
        setMascotState('talking');
        if (talkingTimeoutRef.current) clearTimeout(talkingTimeoutRef.current);
        talkingTimeoutRef.current = setTimeout(() => {
          setMascotState('idle');
        }, 3000);
      }

      if (typeof answer.remainingQuota === 'number') {
        setRemainingMessages(isVip ? 999999 : answer.remainingQuota);
      }
    } catch (err: unknown) {
      const errStr = err instanceof Error ? err.message : 'Connection failed';
      setErrorMessage(errStr);
      setLastFailedMessage(text);
      setMascotState('idle');
    } finally {
      setIsLoading(false);
    }
  };

  // Quick action: Give me a hint (increments ladder 1 -> 2 -> 3)
  const handleGiveHint = () => {
    if (hintLevel >= 3) return;
    const nextLevel = Math.min(3, hintLevel + 1);
    setHintLevel(nextLevel);
    sendMessage(
      nextLevel === 1
        ? 'Could you give me a first gentle hint on where to begin?'
        : nextLevel === 2
        ? 'I see that first part. Can you give me hint 2 to narrow down the next step?'
        : 'Can you give me hint 3 to guide me toward the final connection?',
      nextLevel
    );
  };

  // Quick action: Check my step
  const handleCheckStep = () => {
    setInputQuery('Here is my reasoning so far: ');
    inputRef.current?.focus();
  };

  // Quick action: Explain the concept
  const handleExplainConcept = () => {
    sendMessage('Can you explain the core concept tested by this question?');
  };

  // Quick action: Request full solution (confirmation needed, only after hint 3)
  const handleConfirmFullSolution = () => {
    setIsConfirmingSolution(false);
    setMascotState('celebrating');
    sendMessage(
      'I have worked through all three hints. Please show me the complete, step-by-step official solution.',
      3
    );
  };

  // Compute effective mascot state
  const effectiveMascotState: MascotState = isMockMode
    ? 'sleeping'
    : isLoading
    ? 'thinking'
    : mascotState;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-50 bg-ink/20 dark:bg-black/50 backdrop-blur-[2px] transition-opacity animate-fade-in"
      />

      {/* Drawer Container: Slide-over right on desktop, Bottom-sheet on mobile */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cosmo AI Assistant"
        className="fixed z-50 flex flex-col bg-surface border-line text-ink font-sans transition-all
          bottom-0 inset-x-0 h-[88vh] max-h-[760px] rounded-t-2xl border-t shadow-2xl
          md:inset-y-0 md:right-0 md:left-auto md:w-[440px] md:h-full md:max-h-none md:rounded-none md:border-l md:border-t-0 md:shadow-notebook"
      >
        {/* Mobile Pull Indicator */}
        <div className="w-12 h-1 bg-line rounded-full mx-auto mt-2.5 mb-1 md:hidden" />

        {/* Header with Live Synchronized Cosmo Mascot */}
        <div className="px-5 py-3.5 border-b border-line flex items-center justify-between shrink-0 bg-paper">
          <div className="flex items-center gap-3">
            <div
              className="relative w-9 h-9 flex items-center justify-center shrink-0"
              data-mascot-state={effectiveMascotState}
            >
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo"
                width="36"
                height="36"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-serif font-semibold text-ink leading-none">Cosmo</h2>
                <span className="text-[11px] font-sans px-1.5 py-0.5 rounded-full bg-paper-2 border border-line text-ink-2">
                  {isMockMode
                    ? 'Exam quiet mode'
                    : isPracticeMode
                    ? 'Socratic tutor'
                    : 'Universal guide'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5" id="cosmo-dialog-status">
                {isMockMode ? (
                  <span className="text-[11px] text-berry">Exam mode active</span>
                ) : isVip ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-accent">
                    <Crown className="w-3 h-3 text-accent" /> VIP Unlimited
                  </span>
                ) : remainingMessages !== null ? (
                  <span className="text-[11px] font-mono text-ink-2">
                    {remainingMessages} of {dailyMessageCap} questions left today
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-ink-2">{dailyMessageCap} questions/day</span>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Cosmo assistant"
            className="p-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Context Chip (Practice & Results Modes) */}
        {!isMockMode && isPracticeMode && (
          <div className="px-5 py-2 bg-paper-2 border-b border-line flex items-center justify-between text-xs text-ink-2">
            <div className="flex items-center gap-1.5 truncate">
              <HelpCircle className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="truncate font-medium text-ink">
                {context?.questionNumber ? `Question ${context.questionNumber}` : 'Current question'}
                {context?.topicName ? ` · ${context.topicName}` : ''}
              </span>
            </div>

            {/* Hint Ladder (1/3, 2/3, 3/3) */}
            <div
              className="flex items-center gap-1.5 shrink-0 ml-2"
              title={`Hint ladder: ${hintLevel}/3`}
            >
              <span className="text-[11px] text-ink-2">Hint</span>
              <span className="font-mono text-xs font-semibold text-accent">{hintLevel}/3</span>
              <div className="flex gap-1 items-center">
                {[1, 2, 3].map((step) => (
                  <span
                    key={step}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      step <= hintLevel ? 'bg-accent' : 'bg-line'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mock Mode Banner */}
        {isMockMode && (
          <div className="p-4 mx-5 my-4 rounded-xl bg-berry/10 border border-berry/20 text-berry text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-semibold">
              <Lock className="w-4 h-4" />
              <span>Cosmo is off during mock tests.</span>
            </div>
            <p className="text-ink-2 leading-relaxed">
              AI tutoring is disabled during official full-length mocks to preserve genuine test conditions. You can review all rationale and ask Cosmo questions after completing the exam.
            </p>
          </div>
        )}

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Universal Empty State: 6 Universal Quick Action Pills */}
          {messages.length === 0 && !isMockMode && isUniversalMode && (
            <div className="space-y-4 pt-1">
              <div className="p-4 rounded-2xl bg-paper-2 border border-line space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                  <Sparkles className="w-4 h-4" />
                  <span>Universal SAT & Platform Guide</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Hi! I&apos;m Cosmo. Ask me anything across SAT Math, Reading &amp; Writing, Desmos shortcuts, pacing strategies, or platform navigation (Error Bank, SA-ELO ratings, and Study Plan).
                </p>
              </div>

              {/* 6 Universal Quick Action Pills */}
              <div className="space-y-2">
                <span className="text-xs text-ink-2 font-medium">Quick suggestions:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {UNIVERSAL_QUICK_ACTIONS.map((pill) => (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => sendMessage(pill.prompt)}
                      disabled={isLoading}
                      className="text-left p-3 rounded-xl bg-paper hover:bg-paper-2 border border-line hover:border-accent/40 text-xs text-ink hover:text-accent transition-colors flex flex-col gap-1 group shadow-xs cursor-pointer"
                    >
                      <span className="font-medium flex items-center justify-between text-ink group-hover:text-accent">
                        <span>{pill.label}</span>
                        <span className="text-ink-muted group-hover:text-accent text-[11px] font-mono">→</span>
                      </span>
                      <span className="text-[11px] text-ink-2 leading-normal line-clamp-2">
                        {pill.description}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Practice Empty State: Socratic Guidance */}
          {messages.length === 0 && !isMockMode && isPracticeMode && (
            <div className="space-y-4 pt-1">
              <div className="p-4 rounded-2xl bg-paper-2 border border-line space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Socratic Guidance</span>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">
                  Hi! I&apos;m Cosmo. I won&apos;t spoil the final answer directly—instead, I&apos;ll break down concepts, check your intermediate steps, and guide you with hints so you master the pattern.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-ink-2 font-medium">Suggested practice prompts:</span>
                <div className="space-y-1.5">
                  {[
                    'Where is the best place to start on this question?',
                    'What formula or grammar rule is being tested here?',
                    'Can you give me hint 1 without spoiling the answer?',
                  ].map((prompt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      disabled={isLoading}
                      className="w-full text-left p-2.5 rounded-xl bg-paper hover:bg-paper-2 border border-line text-xs text-ink hover:text-accent transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span>{prompt}</span>
                      <span className="text-ink-2 group-hover:text-accent text-xs">→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Render Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`p-3.5 rounded-2xl text-xs sm:text-sm max-w-[88%] ${
                  msg.role === 'user'
                    ? 'bg-ink text-paper rounded-br-xs'
                    : 'bg-paper-2 border border-line text-ink rounded-bl-xs'
                }`}
              >
                {msg.role === 'user' ? (
                  <div className="space-y-2">
                    {msg.image && (
                      <div className="rounded-xl overflow-hidden border border-paper/20 max-w-[220px]">
                        <img
                          src={msg.image.previewUrl}
                          alt={msg.image.name}
                          className="w-full max-h-44 object-cover"
                        />
                      </div>
                    )}
                    <p className="whitespace-pre-wrap select-text">{msg.content}</p>
                  </div>
                ) : (
                  <TutorMessageRenderer content={msg.content} />
                )}
              </div>
              <span className="text-[10px] text-ink-2 mt-1 px-1 font-mono">{msg.timestamp}</span>
            </div>
          ))}

          {/* Typing Indicator with Animated Cosmo Thinking State */}
          {isLoading && (
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-paper-2 border border-line w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:300ms]" />
              <span className="text-xs text-ink-2 ml-1">Cosmo is thinking...</span>
            </div>
          )}

          {/* Error Message with Retry */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-berry/10 border border-berry/20 text-xs text-ink space-y-2">
              <div className="flex items-center gap-2 text-berry font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
              {lastFailedMessage && !errorMessage.includes('30 messages') && (
                <button
                  type="button"
                  onClick={() => sendMessage(lastFailedMessage)}
                  className="flex items-center gap-1.5 text-xs text-accent hover:underline font-medium pt-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retry last message</span>
                </button>
              )}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Confirmation Modal for Full Solution */}
        {isConfirmingSolution && (
          <div className="p-4 mx-5 mb-3 rounded-xl bg-paper-2 border border-line space-y-2.5 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink">
              <AlertCircle className="w-4 h-4 text-accent" />
              <span>Reveal full solution?</span>
            </div>
            <p className="text-xs text-ink-2 leading-relaxed">
              Cosmo will show the full step-by-step breakdown. We recommend trying to solve the problem after Hint 3 to build confidence before viewing the final answer.
            </p>
            <div className="flex items-center justify-end gap-2 pt-1">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsConfirmingSolution(false)}
              >
                Keep trying
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleConfirmFullSolution}
              >
                Show full solution
              </Button>
            </div>
          </div>
        )}

        {/* Practice Quick Actions Toolbar */}
        {!isMockMode && isPracticeMode && (
          <div className="px-5 py-2 border-t border-line bg-paper/60 flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={handleGiveHint}
              disabled={isLoading || hintLevel >= 3}
              className="px-2.5 py-1 rounded-lg bg-surface hover:bg-paper-2 border border-line text-xs text-ink-2 hover:text-accent disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-accent" />
              <span>
                {hintLevel >= 3 ? 'Hint 3/3 given' : `Give me hint ${hintLevel + 1}`}
              </span>
            </button>

            <button
              type="button"
              onClick={handleCheckStep}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-lg bg-surface hover:bg-paper-2 border border-line text-xs text-ink-2 hover:text-accent disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileCheck className="w-3.5 h-3.5 text-accent" />
              <span>Check my step</span>
            </button>

            <button
              type="button"
              onClick={handleExplainConcept}
              disabled={isLoading}
              className="px-2.5 py-1 rounded-lg bg-surface hover:bg-paper-2 border border-line text-xs text-ink-2 hover:text-accent disabled:opacity-40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Explain concept</span>
            </button>

            <button
              type="button"
              onClick={() => setIsConfirmingSolution(true)}
              disabled={isLoading || hintLevel < 3}
              title={hintLevel < 3 ? 'Unlocked after requesting 3 hints' : 'View full solution'}
              className="px-2.5 py-1 rounded-lg bg-surface hover:bg-paper-2 border border-line text-xs text-ink-2 hover:text-accent disabled:opacity-40 transition-colors flex items-center gap-1.5 ml-auto cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
              <span>Full solution</span>
            </button>
          </div>
        )}

        {/* Universal Quick Action Toolbar (when messages exist) */}
        {!isMockMode && isUniversalMode && messages.length > 0 && (
          <div className="px-5 py-2 border-t border-line bg-paper/60 flex items-center gap-1.5 overflow-x-auto">
            {UNIVERSAL_QUICK_ACTIONS.map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => sendMessage(pill.prompt)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-lg bg-surface hover:bg-paper-2 border border-line text-xs text-ink-2 hover:text-accent disabled:opacity-40 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{pill.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Daily limit reached upgrade banner */}
        {!isMockMode && !isVip && remainingMessages !== null && remainingMessages <= 0 && (
          <div className="mx-4 mb-2 p-3 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-between gap-2 shrink-0">
            <div className="text-xs">
              <span className="font-semibold text-ink">Daily limit reached ({dailyMessageCap} questions)</span>
              <p className="text-ink-2 text-[11px]">Upgrade to Pro or Ultra for up to 100 questions/day</p>
            </div>
            <Button size="sm" variant="primary" onClick={() => setShowUpgradeModal(true)}>
              Upgrade
            </Button>
          </div>
        )}

        {/* Chat Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(inputQuery);
          }}
          className="p-4 border-t border-line bg-paper flex flex-col gap-2 shrink-0"
        >
          {/* Screenshot image preview chip */}
          {attachedImage && (
            <div className="flex items-center gap-2.5 p-2 bg-paper-2 rounded-xl border border-line text-xs animate-fade-in">
              <img
                src={attachedImage.previewUrl}
                alt="Screenshot preview"
                className="w-10 h-10 object-cover rounded-lg border border-line shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-ink truncate">{attachedImage.name}</p>
                <p className="text-[10px] text-ink-2">Screenshot attached · Cosmo will analyze it</p>
              </div>
              <button
                type="button"
                onClick={() => setAttachedImage(null)}
                className="p-1 rounded-lg text-ink-2 hover:text-berry hover:bg-paper transition-colors cursor-pointer"
                title="Remove screenshot"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) processImageFile(file);
              e.target.value = '';
            }}
          />

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading || isMockMode || (!isVip && remainingImages !== null && remainingImages <= 0)}
              title={
                isVip
                  ? 'Attach screenshot (VIP Unlimited)'
                  : remainingImages !== null
                  ? `Attach screenshot (${remainingImages}/${dailyImageCap} left today)`
                  : 'Attach question screenshot'
              }
              className="p-2.5 rounded-xl border border-line bg-surface hover:bg-paper-2 text-ink-2 hover:text-accent disabled:opacity-40 transition-colors shrink-0 cursor-pointer"
            >
              <ImageIcon className="w-4 h-4" />
            </button>

            <input
              ref={inputRef}
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onPaste={handlePaste}
              disabled={isLoading || isMockMode || (!isVip && remainingMessages !== null && remainingMessages <= 0)}
              maxLength={1000}
              placeholder={
                isMockMode
                  ? 'Cosmo is disabled during mock tests...'
                  : !isVip && remainingMessages !== null && remainingMessages <= 0
                  ? 'Daily limit reached. Resets tomorrow.'
                  : attachedImage
                  ? 'Ask about this screenshot or press Enter to analyze...'
                  : 'Ask Cosmo a question (or paste screenshot)...'
              }
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-surface border border-line text-ink text-xs sm:text-sm placeholder:text-ink-2/60 focus:outline-none focus:border-accent disabled:opacity-50 transition-colors"
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={
                (!inputQuery.trim() && !attachedImage) ||
                isLoading ||
                isMockMode ||
                (!isVip && remainingMessages !== null && remainingMessages <= 0)
              }
              className="h-10 px-3.5 shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-ink-2 px-1">
            <span>Cosmo guides with hints and never spoils answers.</span>
            {isVip ? (
              <span className="font-mono text-accent font-semibold">VIP Unlimited</span>
            ) : remainingMessages !== null ? (
              <span className="font-mono">
                {remainingMessages} qs · {remainingImages ?? dailyImageCap} imgs left
              </span>
            ) : null}
          </div>
        </form>
      </aside>

      {/* Upgrade Modal for plan limits */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        highlightPlan="pro"
      />
    </>
  );
}
