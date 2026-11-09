import { useState, useEffect } from 'react';
import {
  X,
  User,
  Crown,
  Zap,
  Calendar,
  Target,
  Mail,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';
import Button from './Button';

export interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { user } = useAuth();
  const { profile, updateProfile, plan, isVip } = useAppContext();

  const [name, setName] = useState(profile?.name || '');
  const [satDate, setSatDate] = useState(profile?.satDate || '');
  const [targetMath, setTargetMath] = useState(profile?.targetScore?.math || 700);
  const [targetEnglish, setTargetEnglish] = useState(profile?.targetScore?.english || 700);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (profile) {
      setName(profile.name || '');
      setSatDate(profile.satDate || '');
      setTargetMath(profile.targetScore?.math || 700);
      setTargetEnglish(profile.targetScore?.english || 700);
    }
  }, [profile]);

  if (!isOpen) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    const targetTotal = Number(targetMath) + Number(targetEnglish);
    const res = await updateProfile({
      name: name.trim() || profile?.name || 'Scholar',
      satDate: satDate || profile?.satDate || '',
      targetScore: {
        math: Number(targetMath),
        english: Number(targetEnglish),
        total: targetTotal,
      },
    });

    setIsSaving(false);
    if (res.success) {
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        onClose();
      }, 900);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-xs animate-fade-in font-sans">
      <div className="relative w-full max-w-lg bg-surface border border-line rounded-2xl p-6 sm:p-7 shadow-notebook max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-line">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-paper-2 border border-line shrink-0">
            <img
              src="/images/avatar-blue.png"
              alt="Cosmo Mascot"
              className="w-10 h-10 object-contain select-none pointer-events-none"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-serif font-bold text-lg text-ink truncate">
                {profile?.name || 'Student'}
              </h2>
              {isVip ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-mustard/20 border border-mustard/40 text-mustard font-mono font-bold text-[10px] uppercase">
                  <Crown className="w-3 h-3 text-mustard" /> VIP
                </span>
              ) : plan === 'ultra_pro' ? (
                <span className="px-2 py-0.5 rounded-full bg-cobalt/15 border border-cobalt/40 text-cobalt font-mono font-bold text-[10px] uppercase">
                  Ultra Pro
                </span>
              ) : plan === 'pro' ? (
                <span className="px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono font-bold text-[10px] uppercase">
                  Pro
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-paper-2 border border-line text-ink-2 font-mono font-medium text-[10px] uppercase">
                  Free
                </span>
              )}
            </div>
            <p className="text-xs text-ink-2 flex items-center gap-1.5 mt-0.5 truncate">
              <Mail className="w-3.5 h-3.5 text-ink-muted shrink-0" />
              <span className="truncate">{user?.email || profile?.email || 'scholar@satbase.org'}</span>
            </p>
          </div>
        </div>

        {/* Current Plan Summary Card */}
        <div className="mb-6 p-4 rounded-xl bg-paper-2 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-ink">
              {isVip ? <Crown className="w-4 h-4 text-mustard" /> : <Zap className="w-4 h-4 text-accent" />}
              <span>{isVip ? 'VIP Creator Plan' : plan === 'ultra_pro' ? 'Ultra Pro Plan ($20/mo)' : plan === 'pro' ? 'Pro Plan ($5/mo)' : 'Free Plan ($0)'}</span>
            </div>
            <p className="text-[11px] text-ink-2 mt-1 leading-relaxed">
              {isVip
                ? 'All 30 mock tests, unlimited Cosmo AI questions & screenshot analysis active.'
                : plan === 'pro'
                ? 'All 30 mock tests, 50 daily AI questions and 15 screenshot uploads.'
                : plan === 'ultra_pro'
                ? 'All 30 mock tests, 100 daily AI questions and 100 screenshot uploads.'
                : '6 free mock tests, 15 daily AI questions and 2 screenshot uploads.'}
            </p>
          </div>
          <Link
            to="/pricing"
            onClick={onClose}
            className="flex items-center gap-1 text-xs font-semibold text-accent hover:underline shrink-0"
          >
            <span>View plans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Profile Settings Form */}
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          {/* Display Name */}
          <div>
            <label className="block font-medium text-ink mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-accent" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Carter"
              className="w-full px-3.5 py-2 rounded-xl bg-paper border border-line text-ink text-xs sm:text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Target SAT Exam Date */}
          <div>
            <label className="block font-medium text-ink mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>Target SAT Exam Date</span>
            </label>
            <input
              type="date"
              value={satDate}
              onChange={(e) => setSatDate(e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
              className="w-full px-3.5 py-2 rounded-xl bg-paper border border-line text-ink text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Target Score */}
          <div>
            <label className="block font-medium text-ink mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-accent" />
                <span>Target Composite Score</span>
              </span>
              <span className="font-mono font-bold text-accent text-sm">
                {Number(targetMath) + Number(targetEnglish)} / 1600
              </span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[11px] text-ink-2 block mb-1">Math (200-800)</span>
                <input
                  type="number"
                  min="200"
                  max="800"
                  step="10"
                  value={targetMath}
                  onChange={(e) => setTargetMath(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-paper border border-line font-mono text-ink text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <span className="text-[11px] text-ink-2 block mb-1">Reading &amp; Writing (200-800)</span>
                <input
                  type="number"
                  min="200"
                  max="800"
                  step="10"
                  value={targetEnglish}
                  onChange={(e) => setTargetEnglish(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-paper border border-line font-mono text-ink text-xs sm:text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Feedback */}
          {saveSuccess && (
            <div className="p-3 rounded-xl bg-moss/10 border border-moss/30 text-moss flex items-center gap-2 text-xs animate-fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Profile updated successfully!</span>
            </div>
          )}

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-line">
            <Button type="button" variant="ghost" size="sm" onClick={onClose} disabled={isSaving}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm" disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
