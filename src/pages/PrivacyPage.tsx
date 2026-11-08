import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Sparkles } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function PrivacyPage() {
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
            This document outlines SATBase's privacy practices for students and educators. Please review and customize as needed before general public release.
          </p>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <p className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">
            LEGAL & TRANSPARENCY
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold font-display tracking-tight text-ink">
            Privacy Policy
          </h1>
          <p className="text-xs text-ink-3 font-mono">
            Last updated: November 8, 2026 · Effective Date: Launch
          </p>
        </div>

        {/* Content Body */}
        <article className="prose prose-sm max-w-none text-ink space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink flex items-center gap-2">
              <Shield className="w-5 h-5 text-moss" />
              <span>1. Overview & Commitment</span>
            </h2>
            <p className="text-ink-2">
              SATBase (<strong className="text-ink">https://PROD_DOMAIN</strong>) is an educational preparation platform designed to help students master the Digital SAT. We believe privacy should be simple, honest, and transparent. We only collect the minimal information necessary to deliver adaptive learning features, and <strong className="text-ink">we never sell your personal data</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              2. Information We Collect
            </h2>
            <p className="text-ink-2">We collect only what is directly needed to maintain your study profile:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-ink-2">
              <li>
                <strong className="text-ink">Account Credentials:</strong> When signing in with email (Magic Link) or Google Sign-In, we receive your email address, display name, and avatar URL via Supabase Auth.
              </li>
              <li>
                <strong className="text-ink">Study Progress & Metrics:</strong> Answers submitted, question timers, test scores, skill accuracy (SA-ELO micro-ratings), study streaks, and error bank entries are stored in our secure database.
              </li>
              <li>
                <strong className="text-ink">Operational Telemetry:</strong> Essential technical data (e.g. browser type, route timings) required for platform security and performance. We do not use third-party behavioral advertising trackers.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              3. How We Use Artificial Intelligence (Cosmo AI)
            </h2>
            <p className="text-ink-2">
              Our Socratic assistant, Cosmo, uses the Google Gemini API to analyze math and reading questions and generate guidance. When you interact with Cosmo:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-ink-2">
              <li>Only the prompt question, answer choices, and your inquiry are submitted to Google Gemini.</li>
              <li>We do not send your personal identity, email address, or billing information to Google Gemini.</li>
              <li>AI prompts are governed by Google's API data processing terms for business and enterprise customers, which prohibit training foundational models on your API inputs.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              4. Data Storage & Infrastructure
            </h2>
            <p className="text-ink-2">
              Your account and practice records are securely hosted on Supabase (PostgreSQL) with Row-Level Security (RLS) active. Only you can read and write your personal practice history and error vault.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              5. Data Ownership & Deletion
            </h2>
            <p className="text-ink-2">
              You own your study data. If you wish to delete your account or wipe your practice history, contact us or submit an account erasure request, and all associated database records will be permanently removed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold font-display text-ink">
              6. Contact Us
            </h2>
            <p className="text-ink-2">
              For any questions regarding this Privacy Policy or your data, please contact the SATBase team at <span className="font-mono text-ink">support@PROD_DOMAIN</span>.
            </p>
          </section>
        </article>

        {/* Footer */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-2">
          <span>&copy; {new Date().getFullYear()} SATBase. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/terms" className="hover:text-ink underline">Terms of Service</Link>
            <span>·</span>
            <Link to="/welcome" className="hover:text-ink underline">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
