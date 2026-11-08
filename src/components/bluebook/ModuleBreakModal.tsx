import { useState, useEffect } from 'react';
import { ArrowRight, Coffee } from 'lucide-react';
import Button from '../ui/Button';

interface ModuleBreakModalProps {
  isOpen: boolean;
  onStartNextModule: () => void;
  breakDurationMinutes?: number;
}

export default function ModuleBreakModal({
  isOpen,
  onStartNextModule,
  breakDurationMinutes = 10,
}: ModuleBreakModalProps) {
  const [secondsLeft, setSecondsLeft] = useState(breakDurationMinutes * 60);

  useEffect(() => {
    if (!isOpen) return;
    setSecondsLeft(breakDurationMinutes * 60);
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, breakDurationMinutes]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timerFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper p-4 select-none">
      <div className="bg-surface rounded-2xl shadow-notebook max-w-md w-full overflow-hidden border border-line p-6 sm:p-8 animate-slide-up text-ink font-sans text-center">
        {/* Calm Icon */}
        <div className="w-12 h-12 rounded-full bg-paper-2 border border-line text-ink flex items-center justify-center mx-auto mb-4">
          <Coffee className="w-6 h-6 text-accent" />
        </div>

        {/* Section completion notice */}
        <h2 className="text-xl sm:text-2xl font-bold font-display text-ink mb-2">
          Take a break
        </h2>
        <p className="text-xs sm:text-sm text-ink-2 leading-relaxed mb-6">
          You have completed Section 1. Feel free to rest your eyes, take a stretch, or take a quick sip of water before beginning Section 2: Math.
        </p>

        {/* Calm countdown timer */}
        <div className="bg-paper-2 border border-line rounded-xl py-4 px-6 mb-6">
          <p className="text-[11px] font-sans text-ink-2 uppercase tracking-wider mb-1">
            Break time remaining
          </p>
          <p className="font-mono text-3xl font-bold text-ink">
            {timerFormatted}
          </p>
        </div>

        {/* One single accent continue button */}
        <Button
          variant="accent"
          size="lg"
          onClick={onStartNextModule}
          className="w-full flex items-center justify-center gap-2 cursor-pointer font-sans"
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
