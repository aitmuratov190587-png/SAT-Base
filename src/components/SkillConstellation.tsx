import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { AnswerEvent } from '../lib/analytics';
import {
  CONSTELLATION_DOMAINS,
  ALL_CONSTELLATION_STARS,
  ConstellationStarDef,
  ConstellationDomainDef,
  aggregateConstellationStats,
  findWeakestDomain,
  getTopWeakestDomains,
  SkillUserStat,
} from '../lib/constellation';
import Button from './ui/Button';
import Skeleton from './ui/Skeleton';
import { Modal } from './ui/Modal';

export interface SkillConstellationProps {
  events?: AnswerEvent[];
  demoData?: boolean;
  className?: string;
  onSelectSkill?: (skill: ConstellationStarDef) => void;
}

export default function SkillConstellation({
  events: propEvents,
  demoData = false,
  className = '',
  onSelectSkill,
}: SkillConstellationProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user?.id;

  const [fetchedEvents, setFetchedEvents] = useState<AnswerEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(!propEvents && !demoData);
  const [focusedStarId, setFocusedStarId] = useState<string | null>(null);
  const [hoveredStar, setHoveredStar] = useState<ConstellationStarDef | null>(null);
  const [isFullMapModalOpen, setIsFullMapModalOpen] = useState(false);

  const starRefs = useRef<Record<string, SVGElement | null>>({});

  // ── 1. Telemetry Loading: Answer events / progress ──
  useEffect(() => {
    if (propEvents || demoData) {
      setLoading(false);
      return;
    }

    if (!userId || userId === 'guest') {
      setFetchedEvents([]);
      setLoading(false);
      return;
    }

    let isMounted = true;
    async function loadUserEvents() {
      try {
        const [eventsRes, progressRes] = await Promise.all([
          supabase
            .from('answer_events')
            .select('topic_id, question_id, is_correct, time_seconds, source, created_at')
            .eq('user_id', userId),
          supabase
            .from('user_question_progress')
            .select('topic_id, question_id, is_correct, time_seconds, created_at, updated_at')
            .eq('user_id', userId),
        ]);

        if (!isMounted) return;

        const combined: AnswerEvent[] = [];
        const seen = new Set<string>();

        if (eventsRes.data) {
          eventsRes.data.forEach((e: AnswerEvent) => {
            combined.push(e);
            if (e.question_id) seen.add(e.question_id);
          });
        }

        if (progressRes.data) {
          progressRes.data.forEach((p: {
            topic_id: string;
            question_id: string;
            is_correct: boolean;
            time_seconds: number;
            created_at?: string;
            updated_at?: string;
          }) => {
            if (!seen.has(p.question_id)) {
              combined.push({
                topic_id: p.topic_id,
                question_id: p.question_id,
                is_correct: p.is_correct,
                time_seconds: p.time_seconds || 0,
                source: 'practice',
                created_at: p.updated_at || p.created_at || new Date().toISOString(),
              });
              seen.add(p.question_id);
            }
          });
        }

        setFetchedEvents(combined);
      } catch (err) {
        console.warn('Failed to load user answer events:', err);
        if (isMounted) setFetchedEvents([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    void loadUserEvents();
    return () => {
      isMounted = false;
    };
  }, [userId, propEvents, demoData]);

  // ── 2. Demo data generation if demoData mode ──
  const activeEvents = useMemo<AnswerEvent[]>(() => {
    if (demoData) {
      // Generic non-user demo events for welcome hero
      return [
        { topic_id: 'm-alg-1', question_id: 'd1', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:00:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd2', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:01:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd3', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:02:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd4', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:03:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd5', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:04:00Z' },
        { topic_id: 'm-adv-1', question_id: 'd6', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-10-02T00:00:00Z' },
        { topic_id: 'm-adv-1', question_id: 'd7', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-10-02T00:01:00Z' },
        { topic_id: 'm-adv-1', question_id: 'd8', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-10-02T00:02:00Z' },
        { topic_id: 'm-adv-1', question_id: 'd9', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-10-02T00:03:00Z' },
        { topic_id: 'm-adv-1', question_id: 'd10', is_correct: true, time_seconds: 40, source: 'practice', created_at: '2026-10-02T00:04:00Z' },
        { topic_id: 'rw-crf-1', question_id: 'd11', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-10-03T00:00:00Z' },
        { topic_id: 'rw-crf-1', question_id: 'd12', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-10-03T00:01:00Z' },
        { topic_id: 'rw-crf-1', question_id: 'd13', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-10-03T00:02:00Z' },
        { topic_id: 'rw-crf-1', question_id: 'd14', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-10-03T00:03:00Z' },
        { topic_id: 'rw-crf-1', question_id: 'd15', is_correct: true, time_seconds: 50, source: 'practice', created_at: '2026-10-03T00:04:00Z' },
      ];
    }
    return propEvents ?? fetchedEvents ?? [];
  }, [demoData, propEvents, fetchedEvents]);

  // ── 3. Stats & Metrics Aggregation ──
  const statsBySkill = useMemo<Record<string, SkillUserStat>>(() => {
    return aggregateConstellationStats(activeEvents);
  }, [activeEvents]);

  const totalShining = useMemo(() => {
    return Object.values(statsBySkill).filter((s) => s.state === 'strong').length;
  }, [statsBySkill]);

  const hasAnyAnswers = useMemo(() => {
    return Object.values(statsBySkill).some((s) => s.total > 0);
  }, [statsBySkill]);

  const weakestDomain = useMemo<ConstellationDomainDef>(() => {
    return findWeakestDomain(statsBySkill);
  }, [statsBySkill]);

  const top3WeakestDomains = useMemo<ConstellationDomainDef[]>(() => {
    return getTopWeakestDomains(statsBySkill, 3);
  }, [statsBySkill]);

  // Strong stars eligible for twinkle animation (at most two stars at a time)
  const twinklingStarIds = useMemo<string[]>(() => {
    return Object.values(statsBySkill)
      .filter((s) => s.state === 'strong')
      .slice(0, 2)
      .map((s) => s.skillId);
  }, [statsBySkill]);

  // ── 4. Keyboard Navigation across Stars ──
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, star: ConstellationStarDef, index: number) => {
      const allStars = ALL_CONSTELLATION_STARS;
      let nextIndex = -1;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          nextIndex = (index + 1) % allStars.length;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          nextIndex = (index - 1 + allStars.length) % allStars.length;
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (demoData) return;
          if (onSelectSkill) {
            onSelectSkill(star);
          } else if (star.isAvailable) {
            navigate(star.practiceRoute);
          }
          return;
        default:
          return;
      }

      if (nextIndex >= 0) {
        const nextStar = allStars[nextIndex];
        setFocusedStarId(nextStar.id);
        setHoveredStar(nextStar);
        starRefs.current[nextStar.id]?.focus();
      }
    },
    [demoData, onSelectSkill, navigate]
  );

  // ── 5. Star Selection & Click ──
  const handleStarClick = (star: ConstellationStarDef) => {
    if (demoData) return;
    if (onSelectSkill) {
      onSelectSkill(star);
    } else if (star.isAvailable) {
      navigate(star.practiceRoute);
    }
  };

  if (loading) {
    return (
      <div className={`w-full rounded-2xl border border-line bg-surface p-6 sm:p-8 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <Skeleton width="220px" height="28px" />
          <Skeleton width="140px" height="20px" />
        </div>
        <Skeleton width="100%" height="480px" className="rounded-xl" />
      </div>
    );
  }

  // Active tooltip target: either hovered or keyboard-focused star
  const activeTooltipStar = hoveredStar;
  const activeStat = activeTooltipStar ? statsBySkill[activeTooltipStar.id] : null;

  return (
    <div
      className={`skill-constellation-container w-full rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-2xs font-sans transition-colors ${className}`}
    >
      {/* ── STYLES: 40ms Staggered Fade-In & Subtle Twinkle (prefers-reduced-motion safe) ── */}
      <style>{`
        @keyframes starFadeIn {
          0% { opacity: 0; transform: scale(0.65); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes starTwinkleA {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.85); }
        }
        @keyframes starTwinkleB {
          0%, 100% { opacity: 0.5; transform: scale(0.88); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .star-item-enter {
          animation: starFadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: center;
        }
        .star-twinkle-0 {
          animation: starTwinkleA 3.6s ease-in-out infinite;
          transform-origin: center;
        }
        .star-twinkle-1 {
          animation: starTwinkleB 4.2s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .star-item-enter, .star-twinkle-0, .star-twinkle-1 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ── TOP BAR: Fraunces Summary Line & Legend ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent shrink-0" />
            <h2 className="font-display font-semibold text-lg sm:text-2xl text-ink tracking-tight">
              {totalShining} of 29 skills are shining
            </h2>
          </div>
          <p className="text-xs text-ink-2 mt-0.5">
            Your celestial mastery map across 8 Digital SAT domains.
          </p>
        </div>

        {/* Small Legend in Sentence Case */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-[11px] font-sans text-ink-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-line-strong bg-transparent shrink-0" />
            <span>Not started</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-berry shrink-0" />
            <span>Needs work</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-mustard shrink-0" />
            <span>Getting there</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-moss shrink-0 relative flex items-center justify-center">
              <span className="absolute -inset-0.5 rounded-full border border-moss/40" />
            </span>
            <span>Strong</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-dashed border-line-strong shrink-0" />
            <span>Coming soon</span>
          </div>
        </div>
      </div>

      {/* ── EMPTY STATE FOR NEW USERS (0 questions answered) ── */}
      {!hasAnyAnswers && !demoData && (
        <div className="my-4 p-4 rounded-xl bg-paper-2 border border-line flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center shrink-0">
              <img
                src="/images/avatar-blue.png"
                alt="Cosmo"
                className="w-6 h-6 object-contain pointer-events-none select-none"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-ink">
                Answer a few questions and your stars will light up.
              </p>
              <p className="text-[11px] text-ink-muted">
                Each star reflects your real practice accuracy, speed, and mastery.
              </p>
            </div>
          </div>
          <Button
            variant="accent"
            size="sm"
            onClick={() => navigate('/practice/cross-text')}
            className="shrink-0 self-start sm:self-auto shadow-2xs font-bold"
          >
            <span>Start practicing</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>
      )}

      {/* ── DESKTOP & TABLET VIEW: FULL 1000 x 560 CELESTIAL MAP ── */}
      <div className="hidden md:block relative w-full pt-4 overflow-hidden">
        <svg
          viewBox="0 0 1000 560"
          className="w-full h-auto max-h-[560px] select-none text-ink"
          role="img"
          aria-label="Skill constellation map"
        >
          {/* Subtle background celestial coordinate grid line (calm, minimal) */}
          <line
            x1="20"
            y1="280"
            x2="980"
            y2="280"
            stroke="var(--color-line)"
            strokeWidth="0.75"
            strokeDasharray="4,6"
            opacity="0.3"
          />

          {/* ── 8 Named Constellation Domains ── */}
          {CONSTELLATION_DOMAINS.map((domain) => {
            const isWeakest = domain.id === weakestDomain.id;

            return (
              <g key={domain.id} className="constellation-domain-group">
                {/* Domain Title in Fraunces (Sentence case) */}
                <text
                  x={domain.labelX}
                  y={domain.labelY}
                  className="font-serif font-bold text-sm tracking-tight fill-current opacity-85"
                  style={{
                    fontFamily:
                      'Fraunces, "Fraunces Fallback", Georgia, serif',
                    fontSize: '13.5px',
                  }}
                >
                  {domain.sentenceCaseName}
                </text>

                {/* Cosmo sitting small near the weakest domain */}
                {isWeakest && (
                  <g
                    transform={`translate(${domain.labelX + 185}, ${
                      domain.labelY - 14
                    })`}
                    className="cursor-help"
                  >
                    <title>Cosmo is focusing on {domain.sentenceCaseName}</title>
                    <image
                      href="/images/avatar-blue.png"
                      x="0"
                      y="0"
                      width="22"
                      height="22"
                      className="pointer-events-none select-none"
                    />
                  </g>
                )}

                {/* Thin Dotted Constellation Lines */}
                {domain.connections.map(([srcIdx, dstIdx], lineIdx) => {
                  const src = domain.stars[srcIdx];
                  const dst = domain.stars[dstIdx];
                  if (!src || !dst) return null;

                  return (
                    <line
                      key={`${domain.id}-line-${lineIdx}`}
                      x1={src.x}
                      y1={src.y}
                      x2={dst.x}
                      y2={dst.y}
                      stroke="var(--color-line-strong)"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.5"
                    />
                  );
                })}

                {/* Stars in Domain */}
                {domain.stars.map((star) => {
                  const stat = statsBySkill[star.id];
                  const state = stat?.state || (star.isAvailable ? 'not_started' : 'coming_soon');
                  const globalIndex = ALL_CONSTELLATION_STARS.findIndex((s) => s.id === star.id);
                  const isTwinkling = twinklingStarIds.includes(star.id);
                  const twinkleClass = isTwinkling
                    ? twinklingStarIds.indexOf(star.id) === 0
                      ? 'star-twinkle-0'
                      : 'star-twinkle-1'
                    : '';
                  const isFocused = focusedStarId === star.id;

                  return (
                    <g
                      key={star.id}
                      ref={(el) => (starRefs.current[star.id] = el)}
                      tabIndex={demoData ? -1 : 0}
                      role="button"
                      aria-label={`${star.name}: ${
                        state === 'coming_soon'
                          ? 'Coming soon'
                          : stat?.accuracy !== null && stat?.accuracy !== undefined
                          ? `${stat.accuracy}% accuracy`
                          : 'Not started'
                      }`}
                      transform={`translate(${star.x}, ${star.y})`}
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(null)}
                      onFocus={() => {
                        setFocusedStarId(star.id);
                        setHoveredStar(star);
                      }}
                      onBlur={() => {
                        setFocusedStarId(null);
                        setHoveredStar(null);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, star, globalIndex)}
                      className={`star-node ${
                        star.isAvailable && !demoData ? 'cursor-pointer' : 'cursor-default'
                      } outline-none`}
                    >
                      {/* Active Keyboard Focus Ring */}
                      {isFocused && (
                        <circle
                          r="15"
                          fill="none"
                          stroke="var(--color-accent)"
                          strokeWidth="1.5"
                          strokeDasharray="3,3"
                          className="animate-spin-slow"
                        />
                      )}

                      {/* Thin Soft Ring for Strong Stars (No glow blobs or gradients) */}
                      {state === 'strong' && (
                        <circle
                          r="11"
                          fill="none"
                          stroke="var(--color-moss)"
                          strokeWidth="1"
                          opacity="0.45"
                        />
                      )}

                      {/* Celestial Star Path with Staggered Entrance */}
                      <g
                        className={`star-item-enter ${twinkleClass}`}
                        style={{ animationDelay: `${globalIndex * 40}ms` }}
                      >
                        {state === 'coming_soon' && (
                          <path
                            d="M 0 -6 L 1.5 -1.5 L 6 0 L 1.5 1.5 L 0 6 L -1.5 1.5 L -6 0 L -1.5 -1.5 Z"
                            fill="transparent"
                            stroke="var(--color-line-strong)"
                            strokeWidth="1.2"
                            strokeDasharray="2,2"
                            opacity="0.4"
                          />
                        )}

                        {state === 'not_started' && (
                          <path
                            d="M 0 -6 L 1.5 -1.5 L 6 0 L 1.5 1.5 L 0 6 L -1.5 1.5 L -6 0 L -1.5 -1.5 Z"
                            fill="transparent"
                            stroke="var(--color-line-strong)"
                            strokeWidth="1.2"
                            opacity="0.45"
                          />
                        )}

                        {state === 'needs_work' && (
                          <path
                            d="M 0 -6.5 L 1.8 -1.8 L 6.5 0 L 1.8 1.8 L 0 6.5 L -1.8 1.8 L -6.5 0 L -1.8 -1.8 Z"
                            fill="var(--color-berry)"
                            stroke="var(--color-berry)"
                            strokeWidth="1"
                          />
                        )}

                        {state === 'getting_there' && (
                          <path
                            d="M 0 -7 L 2 -2 L 7 0 L 2 2 L 0 7 L -2 2 L -7 0 L -2 -2 Z"
                            fill="var(--color-mustard)"
                            stroke="var(--color-mustard)"
                            strokeWidth="1"
                          />
                        )}

                        {state === 'strong' && (
                          <path
                            d="M 0 -7.5 L 2.2 -2.2 L 7.5 0 L 2.2 2.2 L 0 7.5 L -2.2 2.2 L -7.5 0 L -2.2 -2.2 Z"
                            fill="var(--color-moss)"
                            stroke="var(--color-moss)"
                            strokeWidth="1"
                          />
                        )}
                      </g>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* ── TOOLTIP (Hover or Keyboard Focus) ── */}
        {activeTooltipStar && (
          <div
            className="absolute pointer-events-none z-30 transition-all duration-150 transform -translate-x-1/2 -translate-y-full mb-3"
            style={{
              left: `${(activeTooltipStar.x / 1000) * 100}%`,
              top: `${(activeTooltipStar.y / 560) * 100}%`,
            }}
          >
            <div className="bg-surface border border-line rounded-xl px-3 py-2 shadow-notebook text-left min-w-[170px] max-w-[240px]">
              <span className="font-semibold text-xs text-ink block leading-tight">
                {activeTooltipStar.name}
              </span>
              <span className="text-[10px] text-ink-muted block mt-0.5">
                {activeTooltipStar.domainName}
              </span>

              <div className="mt-1.5 pt-1.5 border-t border-line flex items-center justify-between text-[11px]">
                {activeStat?.state === 'coming_soon' ? (
                  <span className="font-mono text-ink-muted">Coming soon</span>
                ) : activeStat && activeStat.total >= 5 ? (
                  <>
                    <span className="font-mono font-bold text-ink">
                      {activeStat.accuracy}% accuracy
                    </span>
                    <span className="text-[10px] text-ink-2 font-mono">
                      {activeStat.total} answered
                    </span>
                  </>
                ) : (
                  <span className="text-ink-2 text-[10px]">
                    No rating yet ({activeStat?.total || 0}/5 answers)
                  </span>
                )}
              </div>

              {!demoData && (
                <div className="mt-1 text-[10px] text-accent font-medium flex items-center gap-1">
                  {activeTooltipStar.isAvailable ? (
                    <>
                      <span>Click to practice</span>
                      <span>→</span>
                    </>
                  ) : (
                    <span className="text-ink-muted">Questions coming soon</span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── MOBILE VIEW: 3 WEAKEST CONSTELLATIONS STACKED + MODAL BUTTON ── */}
      <div className="block md:hidden pt-3 space-y-4">
        <p className="text-xs text-ink-2">
          Your 3 priority constellations to work on:
        </p>

        {/* 3 Compact Stacked Constellation Cards */}
        <div className="space-y-3">
          {top3WeakestDomains.map((domain) => (
            <div
              key={`mobile-domain-${domain.id}`}
              className="p-3.5 rounded-xl bg-paper-2 border border-line"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="font-serif font-bold text-sm text-ink"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {domain.sentenceCaseName}
                </span>
                <span className="text-[10px] font-mono text-ink-muted uppercase">
                  {domain.section === 'math' ? 'Math' : 'Reading & Writing'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-1.5 pt-1">
                {domain.stars.map((star) => {
                  const stat = statsBySkill[star.id];
                  const state = stat?.state || (star.isAvailable ? 'not_started' : 'coming_soon');

                  return (
                    <button
                      key={`mob-star-${star.id}`}
                      type="button"
                      disabled={!star.isAvailable || demoData}
                      onClick={() => handleStarClick(star)}
                      className="flex items-center justify-between p-2 rounded-lg bg-surface border border-line/70 text-left text-xs text-ink hover:border-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {/* State Indicator Dot */}
                        {state === 'strong' ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-moss shrink-0 relative flex items-center justify-center">
                            <span className="absolute -inset-0.5 rounded-full border border-moss/50" />
                          </span>
                        ) : state === 'getting_there' ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-mustard shrink-0" />
                        ) : state === 'needs_work' ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-berry shrink-0" />
                        ) : state === 'coming_soon' ? (
                          <span className="w-2.5 h-2.5 rounded-full border border-dashed border-line-strong shrink-0" />
                        ) : (
                          <span className="w-2.5 h-2.5 rounded-full border border-line-strong shrink-0" />
                        )}
                        <span className="font-medium truncate">{star.name}</span>
                      </div>

                      <span className="font-mono text-[10px] text-ink-2 shrink-0 ml-2">
                        {state === 'coming_soon'
                          ? 'Soon'
                          : stat?.accuracy !== null && stat?.accuracy !== undefined
                          ? `${stat.accuracy}%`
                          : '—'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Button to open full interactive map in modal */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsFullMapModalOpen(true)}
          className="w-full justify-center shadow-2xs font-semibold"
        >
          <Compass className="w-4 h-4 mr-1.5 text-accent" />
          <span>See all skills</span>
        </Button>
      </div>

      {/* ── MOBILE MODAL: FULL CONSTELLATION MAP ── */}
      <Modal
        isOpen={isFullMapModalOpen}
        onClose={() => setIsFullMapModalOpen(false)}
        title="Full Skill Constellation"
        description="All 29 Digital SAT skills across 8 domains."
        maxWidth="xl"
      >
        <div className="w-full overflow-hidden p-2">
          <svg
            viewBox="0 0 1000 560"
            className="w-full h-auto select-none text-ink"
            role="img"
            aria-label="Full mobile constellation map"
          >
            {/* 8 Constellation Domains */}
            {CONSTELLATION_DOMAINS.map((domain) => (
              <g key={`modal-${domain.id}`}>
                <text
                  x={domain.labelX}
                  y={domain.labelY}
                  className="font-serif font-bold text-sm tracking-tight fill-current opacity-85"
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '13.5px',
                  }}
                >
                  {domain.sentenceCaseName}
                </text>

                {domain.connections.map(([srcIdx, dstIdx], lineIdx) => {
                  const src = domain.stars[srcIdx];
                  const dst = domain.stars[dstIdx];
                  if (!src || !dst) return null;

                  return (
                    <line
                      key={`modal-${domain.id}-line-${lineIdx}`}
                      x1={src.x}
                      y1={src.y}
                      x2={dst.x}
                      y2={dst.y}
                      stroke="var(--color-line-strong)"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.5"
                    />
                  );
                })}

                {domain.stars.map((star) => {
                  const stat = statsBySkill[star.id];
                  const state = stat?.state || (star.isAvailable ? 'not_started' : 'coming_soon');

                  return (
                    <g
                      key={`modal-${star.id}`}
                      transform={`translate(${star.x}, ${star.y})`}
                      onClick={() => {
                        setIsFullMapModalOpen(false);
                        handleStarClick(star);
                      }}
                      className={star.isAvailable ? 'cursor-pointer' : 'cursor-default'}
                    >
                      {state === 'strong' && (
                        <circle
                          r="11"
                          fill="none"
                          stroke="var(--color-moss)"
                          strokeWidth="1"
                          opacity="0.45"
                        />
                      )}
                      {state === 'coming_soon' ? (
                        <path
                          d="M 0 -6 L 1.5 -1.5 L 6 0 L 1.5 1.5 L 0 6 L -1.5 1.5 L -6 0 L -1.5 -1.5 Z"
                          fill="transparent"
                          stroke="var(--color-line-strong)"
                          strokeWidth="1.2"
                          strokeDasharray="2,2"
                          opacity="0.4"
                        />
                      ) : state === 'not_started' ? (
                        <path
                          d="M 0 -6 L 1.5 -1.5 L 6 0 L 1.5 1.5 L 0 6 L -1.5 1.5 L -6 0 L -1.5 -1.5 Z"
                          fill="transparent"
                          stroke="var(--color-line-strong)"
                          strokeWidth="1.2"
                          opacity="0.45"
                        />
                      ) : state === 'needs_work' ? (
                        <path
                          d="M 0 -6.5 L 1.8 -1.8 L 6.5 0 L 1.8 1.8 L 0 6.5 L -1.8 1.8 L -6.5 0 L -1.8 -1.8 Z"
                          fill="var(--color-berry)"
                          stroke="var(--color-berry)"
                          strokeWidth="1"
                        />
                      ) : state === 'getting_there' ? (
                        <path
                          d="M 0 -7 L 2 -2 L 7 0 L 2 2 L 0 7 L -2 2 L -7 0 L -2 -2 Z"
                          fill="var(--color-mustard)"
                          stroke="var(--color-mustard)"
                          strokeWidth="1"
                        />
                      ) : (
                        <path
                          d="M 0 -7.5 L 2.2 -2.2 L 7.5 0 L 2.2 2.2 L 0 7.5 L -2.2 2.2 L -7.5 0 L -2.2 -2.2 Z"
                          fill="var(--color-moss)"
                          stroke="var(--color-moss)"
                          strokeWidth="1"
                        />
                      )}
                    </g>
                  );
                })}
              </g>
            ))}
          </svg>
        </div>
      </Modal>

      {/* ── ACCESSIBLE ALTERNATIVE: Visually Hidden Table for Screen Readers ── */}
      <div className="sr-only">
        <table summary="List of SAT skills and current mastery status">
          <caption>Skill Constellation Status</caption>
          <thead>
            <tr>
              <th scope="col">Domain</th>
              <th scope="col">Skill</th>
              <th scope="col">Status</th>
              <th scope="col">Accuracy</th>
              <th scope="col">Answers</th>
            </tr>
          </thead>
          <tbody>
            {ALL_CONSTELLATION_STARS.map((star) => {
              const stat = statsBySkill[star.id];
              return (
                <tr key={`sr-${star.id}`}>
                  <td>{star.domainName}</td>
                  <td>{star.name}</td>
                  <td>{stat?.state || 'not_started'}</td>
                  <td>{stat?.accuracy !== null && stat?.accuracy !== undefined ? `${stat.accuracy}%` : 'No rating'}</td>
                  <td>{stat?.total || 0}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
