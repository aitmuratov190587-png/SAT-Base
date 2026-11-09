import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Mail,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { getPublicSiteUrl } from '../lib/siteUrl';
import { verifyTelegramCode } from '../lib/telegramAuth';
import ThemeToggle from '../components/ThemeToggle';

export default function LoginPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  const [showTelegramInput, setShowTelegramInput] = useState(false);
  const [telegramCode, setTelegramCode] = useState('');
  const [telegramLoading, setTelegramLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  if (!loading && user) return <Navigate to="/" replace />;

  const handleGoogleSignIn = async () => {
    setErrorMessage('');
    setIsSigningIn(true);
    try {
      await signInWithGoogle();
    } catch {
      setErrorMessage('Google sign-in could not start. Please try again.');
      setIsSigningIn(false);
    }
  };

  const handleEmailSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim() || emailLoading) return;
    setEmailLoading(true);
    setErrorMessage('');
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email.trim(),
        options: { emailRedirectTo: getPublicSiteUrl() },
      });
      if (error) setErrorMessage(error.message);
      else setEmailSent(true);
    } catch {
      setErrorMessage('We couldn’t send the link just now. Please try again.');
    } finally {
      setEmailLoading(false);
    }
  };

  const handleTelegramSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    const clean = telegramCode.replace(/\D/g, '').trim();
    if (clean.length !== 6 || telegramLoading) return;
    setTelegramLoading(true);
    setErrorMessage('');
    try {
      const result = await verifyTelegramCode(clean);
      if (!result.success) {
        setErrorMessage(result.error || 'Invalid code. Please check and try again.');
      }
    } catch {
      setErrorMessage('Failed to connect to the authentication server. Please try again.');
    } finally {
      setTelegramLoading(false);
    }
  };

  const resetAllForms = () => {
    setShowEmailInput(false);
    setShowTelegramInput(false);
    setErrorMessage('');
    setTelegramCode('');
  };

  return (
    <main className="min-h-screen bg-paper text-ink transition-colors duration-200">
      <div className="grid min-h-screen lg:grid-cols-[1.05fr_.95fr]">
        <section className="relative flex min-h-[370px] flex-col justify-between overflow-hidden border-b border-line px-5 py-6 sm:px-9 sm:py-8 lg:min-h-screen lg:border-b-0 lg:border-r lg:border-line lg:px-12 xl:px-16 bg-surface/50">
          <div className="relative z-10 flex items-center justify-between">
            <Link to="/welcome" className="flex items-center gap-2" title="SATBase">
              <img
                src="/images/satbase-logo-full.png"
                alt="SATBase"
                className="h-9 w-auto object-contain dark:hidden select-none pointer-events-none"
              />
              <img
                src="/images/satbase-logo-dark.png"
                alt="SATBase"
                className="h-9 w-auto object-contain hidden dark:block select-none pointer-events-none"
              />
              <span className="rounded-md border border-line px-1.5 py-0.5 text-[8px] font-mono tracking-widest text-ink-2">EN</span>
            </Link>
            <ThemeToggle />
          </div>

          <div className="relative z-10 my-12 max-w-xl lg:my-auto lg:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-[9px] font-mono uppercase tracking-[.15em] text-ink-2"><Sparkles className="h-3.5 w-3.5 text-accent" /> YOUR STUDY SPACE, READY WHEN YOU ARE</div>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.04] tracking-[-.06em] text-ink font-display sm:text-5xl xl:text-[62px]">A clearer path to<br /><span className="text-accent">your SAT goal.</span></h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-ink-2">Practice with purpose, get comfortable with test timing, and keep your progress in view.</p>

            <div className="mt-9 grid max-w-md gap-2.5 sm:grid-cols-3">
              <div className="rounded-2xl border border-line bg-surface p-3.5 shadow-xs"><BookOpenCheck className="h-4 w-4 text-cobalt" /><p className="mt-3 text-[10px] font-semibold text-ink">Focused practice</p><p className="mt-1 text-[9px] text-ink-2">Choose a skill</p></div>
              <div className="rounded-2xl border border-line bg-surface p-3.5 shadow-xs"><Clock3 className="h-4 w-4 text-berry" /><p className="mt-3 text-[10px] font-semibold text-ink">Mock exams</p><p className="mt-1 text-[9px] text-ink-2">Train with a timer</p></div>
              <div className="rounded-2xl border border-line bg-surface p-3.5 shadow-xs"><Target className="h-4 w-4 text-moss" /><p className="mt-3 text-[10px] font-semibold text-ink">Real progress</p><p className="mt-1 text-[9px] text-ink-2">See your work add up</p></div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-5 text-[9px] text-ink-2">
            <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-moss" /> Your progress is saved to your account</span>
            <Link to="/welcome" className="shrink-0 transition hover:text-ink">About SATBase <ArrowRight className="ml-1 inline h-3 w-3" /></Link>
          </div>

          <div className="pointer-events-none absolute bottom-[9%] right-[7%] hidden w-[min(26vw,310px)] opacity-90 lg:block">
            <img src="/images/avatar/avatar-celebrate.png" alt="" className="w-full drop-shadow-sm" />
          </div>
        </section>

        <section className="relative flex min-h-[570px] items-center justify-center px-5 py-12 sm:px-10 lg:min-h-screen lg:px-12 bg-paper">
          <div className="relative z-10 w-full max-w-[410px]">
            <div className="mb-7 lg:hidden"><Link to="/welcome" className="text-xs text-ink-2 hover:text-ink">← Back to SATBase</Link></div>
            <p className="eyebrow">WELCOME BACK</p>
            <h2 className="mt-3 text-[30px] font-semibold tracking-[-.05em] text-ink font-display">Sign in to continue</h2>
            <p className="mt-2 text-sm leading-6 text-ink-2">Your practice, streak, and progress will be waiting here.</p>

            <div className="mt-8 rounded-[24px] border border-line bg-surface p-5 shadow-sm sm:p-7">
              {!showTelegramInput && !showEmailInput ? (
                <>
                  <button
                    onClick={handleGoogleSignIn}
                    disabled={isSigningIn}
                    className="flex w-full items-center justify-center gap-3 rounded-[14px] bg-paper-2 border border-line px-4 py-3.5 text-xs font-semibold text-ink transition hover:bg-surface disabled:opacity-60"
                  >
                    {isSigningIn ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-line-strong border-t-transparent" />
                    ) : (
                      <GoogleMark />
                    )}
                    {isSigningIn ? 'Connecting…' : 'Continue with Google'}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowTelegramInput(true);
                      setShowEmailInput(false);
                      setErrorMessage('');
                    }}
                    className="mt-2.5 flex w-full items-center justify-center gap-2.5 rounded-[14px] border border-cobalt/30 bg-cobalt/10 px-4 py-3.5 text-xs font-semibold text-ink transition hover:bg-cobalt/20"
                  >
                    <TelegramMark />
                    Continue with Telegram
                  </button>

                  <div className="my-5 flex items-center gap-3">
                    <span className="h-px flex-1 bg-line" />
                    <span className="text-[9px] font-mono uppercase tracking-[.14em] text-ink-2">or</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailInput(true);
                      setShowTelegramInput(false);
                      setErrorMessage('');
                    }}
                    className="flex w-full items-center justify-center gap-2.5 rounded-[14px] border border-line bg-paper-2 px-4 py-3.5 text-xs font-semibold text-ink transition hover:bg-surface"
                  >
                    <Mail className="h-4 w-4 text-ink-2" /> Continue with email
                  </button>
                </>
              ) : showTelegramInput ? (
                <div className="space-y-4">
                  <div className="rounded-[16px] border border-cobalt/30 bg-cobalt/10 p-4 text-left">
                    <div className="flex items-center gap-2.5">
                      <TelegramMark />
                      <p className="text-xs font-bold text-ink">Instant sign-in with Telegram</p>
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-ink-2">
                      1. Open our official Telegram bot and tap <span className="font-semibold text-ink">«🔑 Get login code»</span>:
                    </p>
                    <a
                      href="https://t.me/satbase_bot?start=login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 w-full rounded-[12px] bg-cobalt text-paper py-2.5 px-3 text-xs font-bold transition hover:bg-cobalt/90 shadow-xs"
                    >
                      <TelegramMark fill="#ffffff" />
                      Open @satbase_bot
                      <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                    </a>
                  </div>

                  <form onSubmit={handleTelegramSignIn} className="space-y-3">
                    <label htmlFor="tg-code" className="block text-[10px] font-medium text-ink-2">
                      6-digit one-time code from the bot
                    </label>
                    <input
                      id="tg-code"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      autoComplete="one-time-code"
                      value={telegramCode}
                      onChange={(event) =>
                        setTelegramCode(event.target.value.replace(/\D/g, '').slice(0, 6))
                      }
                      placeholder="• • • • • •"
                      autoFocus
                      required
                      className="w-full text-center text-xl font-mono tracking-[0.35em] rounded-[13px] border border-line bg-paper-2 px-3.5 py-3 text-ink outline-none transition placeholder:text-ink-2/40 focus:border-cobalt"
                    />
                    <button
                      type="submit"
                      disabled={telegramLoading || telegramCode.replace(/\D/g, '').length !== 6}
                      className="flex w-full items-center justify-center gap-2 rounded-[13px] bg-accent px-4 py-3 text-xs font-bold text-accent-contrast transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {telegramLoading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-contrast border-t-transparent" />
                          Verifying…
                        </>
                      ) : (
                        <>
                          Verify &amp; Sign in <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={resetAllForms}
                      className="w-full py-1 text-[10px] text-ink-2 hover:text-ink transition"
                    >
                      ← Choose another sign-in method
                    </button>
                  </form>
                </div>
              ) : emailSent ? (
                <div className="rounded-[14px] border border-moss/20 bg-moss/10 p-4 text-left">
                  <CheckCircle2 className="h-5 w-5 text-moss" />
                  <p className="mt-3 text-sm font-semibold text-ink">Check your inbox</p>
                  <p className="mt-1 text-xs leading-5 text-ink-2">
                    We sent a sign-in link to <span className="text-ink font-bold">{email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setEmailSent(false);
                      setEmail('');
                    }}
                    className="mt-3 text-[10px] text-moss hover:underline"
                  >
                    Use a different email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEmailSignIn} className="space-y-3">
                  <label htmlFor="email" className="block text-[10px] font-medium text-ink-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-[13px] border border-line bg-paper-2 px-3.5 py-3 text-xs text-ink outline-none transition placeholder:text-ink-2/60 focus:border-accent"
                  />
                  <button
                    type="submit"
                    disabled={emailLoading || !email.trim()}
                    className="flex w-full items-center justify-center gap-2 rounded-[13px] bg-accent px-4 py-3 text-xs font-bold text-accent-contrast transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {emailLoading ? 'Sending secure link…' : 'Send me a sign-in link'}{' '}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={resetAllForms}
                    className="w-full py-1 text-[10px] text-ink-2 hover:text-ink transition"
                  >
                    ← Choose another sign-in method
                  </button>
                </form>
              )}

              {errorMessage && (
                <p role="alert" className="mt-4 rounded-xl border border-berry/20 bg-berry/10 px-3 py-2.5 text-xs text-berry">
                  {errorMessage}
                </p>
              )}

              <div className="mt-6 flex items-center justify-center gap-2 border-t border-line pt-5 text-[9px] text-ink-2">
                <ShieldCheck className="h-3.5 w-3.5 text-moss" /> Secure sign-in · Your progress stays yours
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-ink-3">
                <Link to="/privacy" className="hover:text-ink underline transition-colors">
                  Privacy Policy
                </Link>
                <span>·</span>
                <Link to="/terms" className="hover:text-ink underline transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-[10px] text-ink-2">New to SATBase? <Link to="/welcome" className="text-ink transition hover:text-accent underline">Explore the platform</Link></p>
          </div>
        </section>
      </div>
    </main>
  );
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.75 3.28-8.09Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.23 1.06-3.72 1.06-2.87 0-5.3-1.94-6.17-4.55H2.15v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.83 14.09A6.6 6.6 0 0 1 5.48 12c0-.73.13-1.43.35-2.09V7.07H2.15A11 11 0 0 0 1 12c0 1.78.43 3.45 1.15 4.93l3.68-2.84Z" />
      <path fill="#EA4335" d="M12 5.36c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.85 6.07l3.68 2.84C6.7 7.3 9.13 5.36 12 5.36Z" />
    </svg>
  );
}

function TelegramMark({ fill = '#229ED9' }: { fill?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px]" style={{ fill }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .36z" />
    </svg>
  );
}
