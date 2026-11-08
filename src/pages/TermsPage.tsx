import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Sparkles } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-accent/20">
      {/* Top Header */}
      <header className="border-b border-line bg-surface/70 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link
            to="/welcome"
            className="flex items-center gap-2 text-xs font-semibold text-ink hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to SATBase</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-mustard/15 border border-mustard/30 text-mustard font-bold">
              Draft for Review
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Column */}
      <div className="max-w-3xl mx-auto px-5 py-10 sm:py-14 space-y-8">
        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-paper-2 border border-line text-xs text-ink-2 space-y-1">
          <div className="flex items-center gap-2 font-bold text-ink">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Notice: Draft for Review</span>
          </div>
          <p>
            These Terms of Service govern the use of SATBase. Please review and customize before public deployment.
          </p>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <p className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">
            LEGAL TERMS
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold font-display tracking-tight text-ink">
            Terms of Service
          </h1>
          <p className="text-xs text-ink-3 font-mono">
            Last updated: November 8, 2026 · Effective Date: Launch
          </p>
        </div>

        {/* Content Body */}
        <article className="prose prose-sm max-w-none text-ink space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p className="text-ink-2">
              By accessing or using SATBase (<strong className="text-ink">https://PROD_DOMAIN</strong>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              2. Description of Service
            </h2>
            <p className="text-ink-2">
              SATBase provides practice questions, test simulations, diagnostic scoring, study planning tools, and AI tutoring assistance designed to help students prepare for the College Board Digital SAT.
            </p>
            <p className="text-ink-2 text-xs italic">
              Disclaimer: SAT&reg; is a registered trademark of the College Board, which is not affiliated with, and does not endorse, this platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              3. User Accounts
            </h2>
            <p className="text-ink-2">
              When creating an account via email or Google OAuth:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-ink-2">
              <li>You agree to provide accurate and complete information.</li>
              <li>You are responsible for maintaining the confidentiality of your session and devices.</li>
              <li>You agree not to share accounts or reverse-engineer the platform's question repository.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              4. Fair Use & AI Tutor Guidelines
            </h2>
            <p className="text-ink-2">
              Cosmo AI is provided to assist your learning through Socratic inquiry. You agree not to abuse the AI service by sending automated spam, harmful or abusive content, or attempting prompt injection attacks against our AI providers. Rate limits are enforced for system reliability.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              5. Intellectual Property
            </h2>
            <p className="text-ink-2">
              The SATBase logo, branding, Cosmo mascot illustrations, application interfaces, and study software are the intellectual property of SATBase. Practice questions and explanations are curated strictly for educational preparation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              6. Limitation of Liability
            </h2>
            <p className="text-ink-2">
              SATBase is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. While we strive for realistic practice exams and accurate scoring estimates, we do not guarantee specific official exam scores or university admissions outcomes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              7. Contact Information
            </h2>
            <p className="text-ink-2">
              Questions regarding these Terms of Service should be directed to <span className="font-mono text-ink">support@PROD_DOMAIN</span>.
            </p>
          </section>
        </article>

        {/* Footer */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-2">
          <span>&copy; {new Date().getFullYear()} SATBase. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-ink underline">Privacy Policy</Link>
            <span>·</span>
            <Link to="/welcome" className="hover:text-ink underline">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
