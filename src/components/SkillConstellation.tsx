import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { AnswerEvent } from '../lib/analytics';
import {
  CONSTELLATION_DOMAINS,
  ALL_CONSTELLATION_STARS,
  ConstellationStarDef,
  ConstellationDomainDef,
  SkillUserStat,
  StarState,
  aggregateConstellationStats,
  findWeakestDomain,
} from '../lib/constellation';
import Button from './ui/Button';
import Skeleton from './ui/Skeleton';

export interface SkillConstellationProps {
  events?: AnswerEvent[];
  demoData?: boolean;
  className?: string;
  onSelectSkill?: (skill: ConstellationStarDef) => void;
}

export const CELL_VIEWBOX = {
  width: 240,
  height: 148,
} as const;

export interface CellStarCoords {
  id: string;
  x: number;
  y: number;
}

export interface CellArcGuide {
  /** Curved quadratic Bezier or secondary arc connecting 2 stars so 2-skill domains never read as a straight dash */
  paths: string[];
  /** Optional non-interactive celestial waypoint dot/crosshair (clearly not a skill star) */
  waypoint?: { x: number; y: number };
}

export interface CellDomainLayout {
  stars: CellStarCoords[];
  arcGuide?: CellArcGuide;
}

/**
 * Per-domain cell coordinates in local 240 x 148 SVG space.
 * Designed so:
 * - Every constellation fills its cell proportionally with >= 22px edge margin.
 * - No two stars in any cell are closer than 58 SVG units.
 * - Domains with 2-3 skills form clear arcs or triangles (never a bare straight 2-point line).
 */
export const CONSTELLATION_CELL_LAYOUTS: Record<string, CellDomainLayout> = {
  algebra: {
    stars: [
      { id: 'm-alg-1', x: 42, y: 62 },
      { id: 'm-alg-2', x: 112, y: 24 },
      { id: 'm-alg-3', x: 198, y: 48 },
      { id: 'm-alg-4', x: 166, y: 114 },
      { id: 'm-alg-5', x: 62, y: 118 },
    ],
  },
  'advanced-math': {
    stars: [
      { id: 'm-adv-1', x: 38, y: 40 },
      { id: 'm-adv-2', x: 202, y: 50 },
      { id: 'm-adv-3', x: 118, y: 118 },
    ],
  },
  'problem-solving': {
    stars: [
      { id: 'm-dat-1', x: 28, y: 56 },
      { id: 'm-dat-2', x: 80, y: 26 },
      { id: 'm-dat-3', x: 146, y: 32 },
      { id: 'm-dat-4', x: 210, y: 62 },
      { id: 'm-dat-5', x: 176, y: 116 },
      { id: 'm-dat-6', x: 112, y: 92 },
      { id: 'm-dat-7', x: 46, y: 120 },
    ],
  },
  'geometry-trig': {
    stars: [
      { id: 'm-geo-1', x: 42, y: 36 },
      { id: 'm-geo-2', x: 196, y: 26 },
      { id: 'm-geo-3', x: 182, y: 114 },
      { id: 'm-geo-4', x: 54, y: 118 },
    ],
  },
  'craft-structure': {
    stars: [
      { id: 'rw-crf-1', x: 38, y: 44 },
      { id: 'rw-crf-2', x: 198, y: 34 },
      { id: 'rw-crf-3', x: 108, y: 118 },
    ],
  },
  'information-ideas': {
    stars: [
      { id: 'rw-inf-1', x: 122, y: 26 },
      { id: 'rw-inf-2', x: 204, y: 108 },
      { id: 'rw-inf-3', x: 38, y: 114 },
    ],
  },
  'standard-english': {
    stars: [
      { id: 'rw-sec-1', x: 44, y: 102 },
      { id: 'rw-sec-2', x: 196, y: 94 },
    ],
    arcGuide: {
      paths: [
        'M 44 102 L 118 32 L 196 94',
        'M 44 102 Q 120 124 196 94',
      ],
      waypoint: { x: 118, y: 32 },
    },
  },
  'expression-ideas': {
    stars: [
      { id: 'rw-exp-1', x: 46, y: 44 },
      { id: 'rw-exp-2', x: 196, y: 50 },
    ],
    arcGuide: {
      paths: [
        'M 46 44 L 122 116 L 196 50',
        'M 46 44 Q 121 22 196 50',
      ],
      waypoint: { x: 122, y: 116 },
    },
  },
};

export interface RectBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function boxesIntersect(a: RectBox, b: RectBox): boolean {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

/**
 * Pure geometry model of a rendered domain cell (at canonical cell size 260 x 216)
 * used by unit tests to prove zero collisions between title label, Cosmo's
 * reserved top-right corner, and all stars + rings across all 8 domains.
 */
export function getDomainCellBoundingBoxes(domainId: string, cellWidth = 260) {
  const headerHeight = 52;
  const padding = 16;
  const cosmoSize = 36;
  const headerGap = 8;

  const titleBox: RectBox = {
    x: padding,
    y: padding,
    width: cellWidth - padding * 2 - cosmoSize - headerGap,
    height: headerHeight - padding,
  };

  const cosmoBox: RectBox = {
    x: cellWidth - padding - cosmoSize,
    y: padding,
    width: cosmoSize,
    height: cosmoSize,
  };

  const svgTop = headerHeight + 4;
  const innerSvgW = cellWidth - padding * 2;
  const scale = innerSvgW / CELL_VIEWBOX.width;
  const svgHeight = CELL_VIEWBOX.height * scale;
  const starBoxRadius = 15; // Covers max 22px star + outer strong/focus rings

  const layout = CONSTELLATION_CELL_LAYOUTS[domainId];
  const starBoxes: Array<{ id: string; box: RectBox }> = (layout?.stars || []).map((s) => {
    const cx = padding + s.x * scale;
    const cy = svgTop + s.y * scale;
    return {
      id: s.id,
      box: {
        x: cx - starBoxRadius,
        y: cy - starBoxRadius,
        width: starBoxRadius * 2,
        height: starBoxRadius * 2,
      },
    };
  });

  const cellBounds: RectBox = {
    x: 0,
    y: 0,
    width: cellWidth,
    height: svgTop + svgHeight + padding,
  };

  return { titleBox, cosmoBox, starBoxes, cellBounds };
}

function buildFourPointStarPath(radius: number): string {
  const r = Number(radius.toFixed(2));
  const inner = Number((radius * 0.31).toFixed(2));
  return `M 0 ${-r} L ${inner} ${-inner} L ${r} 0 L ${inner} ${inner} L 0 ${r} L ${-inner} ${inner} L ${-r} 0 L ${-inner} ${-inner} Z`;
}

function isLitState(state: StarState): boolean {
  return state === 'needs_work' || state === 'getting_there' || state === 'strong';
}

function renderLegendStarIcon(state: StarState) {
  const path = buildFourPointStarPath(6);
  const fill =
    state === 'strong'
      ? 'var(--color-moss)'
      : state === 'getting_there'
      ? 'color-mix(in srgb, var(--color-mustard) 90%, var(--color-ink) 10%)'
      : state === 'needs_work'
      ? 'var(--color-berry)'
      : 'transparent';

  const stroke =
    state === 'strong'
      ? 'var(--color-moss)'
      : state === 'getting_there'
      ? 'color-mix(in srgb, var(--color-mustard) 76%, var(--color-ink) 24%)'
      : state === 'needs_work'
      ? 'var(--color-berry)'
      : 'var(--color-ink)';

  const strokeOpacity = state === 'not_started' ? 0.55 : state === 'coming_soon' ? 0.46 : 1;

  return (
    <svg width="16" height="16" viewBox="-9 -9 18 18" className="shrink-0" aria-hidden="true">
      {state === 'strong' && (
        <circle
          cx="0"
          cy="0"
          r="7.8"
          fill="none"
          stroke="var(--color-moss)"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
      )}
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeOpacity={strokeOpacity}
        strokeDasharray={state === 'coming_soon' ? '2,2' : undefined}
        strokeLinejoin="round"
      />
    </svg>
  );
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

  const isPreviewFixture = Boolean(propEvents) && demoData;

  const [fetchedEvents, setFetchedEvents] = useState<AnswerEvent[] | null>(null);
  const [loading, setLoading] = useState<boolean>(!propEvents && !demoData);
  const [focusedStarId, setFocusedStarId] = useState<string | null>(null);
  const [hoveredStar, setHoveredStar] = useState<ConstellationStarDef | null>(null);

  // Track inner map width and actual cell SVG width so star size stays strictly 16-22px
  const gridContainerRef = useRef<HTMLDivElement | null>(null);
  const firstSvgRef = useRef<SVGSVGElement | null>(null);
  const [sectionWidth, setSectionWidth] = useState<number>(960);
  const [cellSvgWidth, setCellSvgWidth] = useState<number>(210);

  const starRefs = useRef<Record<string, SVGGElement | null>>({});

  useEffect(() => {
    const el = gridContainerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const next = Math.round(el.getBoundingClientRect().width);
      if (next > 0) setSectionWidth(next);
      const svgW = firstSvgRef.current ? Math.round(firstSvgRef.current.getBoundingClientRect().width) : 0;
      if (svgW > 0) setCellSvgWidth(svgW);
    };
    updateWidth();

    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => {
      updateWidth();
    });
    ro.observe(el);
    if (firstSvgRef.current) ro.observe(firstSvgRef.current);
    return () => ro.disconnect();
  }, [loading]);

  // ── 1. Telemetry Loading (Skipped cleanly in demo / propEvents mode) ──
  useEffect(() => {
    if (propEvents !== undefined || demoData) {
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
          progressRes.data.forEach(
            (p: {
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
            }
          );
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

  // ── 2. Active Answer Events ──
  const activeEvents = useMemo<AnswerEvent[]>(() => {
    if (propEvents !== undefined) return propEvents;
    if (demoData) {
      return [
        { topic_id: 'm-alg-1', question_id: 'd1', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:00:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd2', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:01:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd3', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:02:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd4', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:03:00Z' },
        { topic_id: 'm-alg-1', question_id: 'd5', is_correct: true, time_seconds: 35, source: 'practice', created_at: '2026-10-01T00:04:00Z' },
      ];
    }
    return fetchedEvents ?? [];
  }, [propEvents, demoData, fetchedEvents]);

  // ── 3. Stats & Weakest Domain Calculation (Preserves exact data logic & states) ──
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

  // ── 4. Star Size Scaling (Strict 16-22px physical CSS size scaling with section width) ──
  const starGeometry = useMemo(() => {
    const clampedSectionW = Math.min(Math.max(sectionWidth, 280), 1200);
    // Scales smoothly from ~17.5px on 375px mobile up to ~21.2px at 1200px desktop
    const targetDiameterPx = Math.min(21.2, Math.max(17.4, 16.2 + (clampedSectionW / 1200) * 5.0));

    const effectiveSvgW = Math.max(cellSvgWidth, 140);
    const svgScale = effectiveSvgW / CELL_VIEWBOX.width;
    const radiusSvg = Math.max(5.5, Math.min(14.5, targetDiameterPx / 2 / svgScale));
    const starPath = buildFourPointStarPath(radiusSvg);

    return {
      targetDiameterPx,
      radiusSvg,
      starPath,
    };
  }, [sectionWidth, cellSvgWidth]);

  // ── 5. Keyboard Navigation across Stars (in strict 4x2 domain order) ──
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
        case 'Escape':
          e.preventDefault();
          setFocusedStarId(null);
          setHoveredStar(null);
          starRefs.current[star.id]?.blur();
          return;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (isPreviewFixture) return;
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
    [isPreviewFixture, onSelectSkill, navigate]
  );

  // ── 6. Star Click Handler ──
  const handleStarClick = (star: ConstellationStarDef) => {
    setHoveredStar(star);
    if (isPreviewFixture) return;
    if (onSelectSkill) {
      onSelectSkill(star);
    } else if (star.isAvailable) {
      navigate(star.practiceRoute);
    }
  };

  if (loading) {
    return (
      <div className={`w-full rounded-2xl border border-line bg-surface p-5 sm:p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <Skeleton width="240px" height="28px" />
          <Skeleton width="180px" height="20px" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} width="100%" height="196px" className="rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`skill-constellation-container w-full rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-2xs font-sans transition-colors ${className}`}
    >
      {/* ── STYLES: Gentle Twinkle & Entrance (prefers-reduced-motion safe) ── */}
      <style>{`
        @keyframes starFadeIn {
          0% { opacity: 0; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes starTwinkleSoftA {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.72; transform: scale(0.96); }
        }
        @keyframes starTwinkleSoftB {
          0%, 100% { opacity: 0.75; transform: scale(0.96); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .star-item-enter {
          animation: starFadeIn 380ms cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: center;
        }
        .star-twinkle-a {
          animation: starTwinkleSoftA 4.4s ease-in-out infinite;
          transform-origin: center;
        }
        .star-twinkle-b {
          animation: starTwinkleSoftB 5.0s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .star-item-enter, .star-twinkle-a, .star-twinkle-b {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* ── INNER WRAPPER: Full width of card up to 1200px ── */}
      <div ref={gridContainerRef} className="w-full max-w-[1200px] mx-auto">
        {/* ── TOP HEADER BAR: Summary Headline, Subtitle & Sentence-Case Legend ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-line">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <h2 className="font-display font-semibold text-xl sm:text-2xl text-ink tracking-tight">
                {totalShining} of {ALL_CONSTELLATION_STARS.length} skills are shining
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-ink-2 mt-0.5">
              Each star is a skill. Answer questions to light them up.
            </p>
          </div>

          {/* Legend in Sentence Case matching exact Star glyphs */}
          <div
            className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs font-sans text-ink-2"
            aria-label="Constellation legend"
          >
            <div className="flex items-center gap-1.5">
              {renderLegendStarIcon('not_started')}
              <span>Not started</span>
            </div>
            <div className="flex items-center gap-1.5">
              {renderLegendStarIcon('needs_work')}
              <span>Needs work</span>
            </div>
            <div className="flex items-center gap-1.5">
              {renderLegendStarIcon('getting_there')}
              <span>Getting there</span>
            </div>
            <div className="flex items-center gap-1.5">
              {renderLegendStarIcon('strong')}
              <span>Strong</span>
            </div>
            <div className="flex items-center gap-1.5">
              {renderLegendStarIcon('coming_soon')}
              <span>Coming soon</span>
            </div>
          </div>
        </div>

        {/* ── COMPACT EMPTY USER BAR (Only when 0 real answers & not demo fixture) ── */}
        {!hasAnyAnswers && !demoData && (
          <div className="mt-4 p-3.5 sm:px-4 rounded-xl bg-paper-2 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-ink">
                Start practicing to light up your first star
              </p>
              <p className="text-xs text-ink-2">
                Answer 5 questions in any skill to unlock its accuracy rating.
              </p>
            </div>
            <Button
              variant="accent"
              size="sm"
              onClick={() => navigate('/practice/cross-text')}
              className="shrink-0 self-start sm:self-auto font-bold shadow-2xs"
            >
              <span>Start practicing</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        )}

        {/* ── 4x2 GRID OF EQUAL-SIZE DOMAIN CELLS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-3.5 sm:gap-4 pt-4">
          {CONSTELLATION_DOMAINS.map((domain, domainIdx) => {
            const cellLayout = CONSTELLATION_CELL_LAYOUTS[domain.id];
            const coordsById: Record<string, { x: number; y: number }> = {};
            (cellLayout?.stars || []).forEach((s) => {
              coordsById[s.id] = { x: s.x, y: s.y };
            });

            const isWeakest = domain.id === weakestDomain.id;
            const tooltipStarInCell =
              hoveredStar && hoveredStar.domainId === domain.id ? hoveredStar : null;
            const tooltipCoord = tooltipStarInCell ? coordsById[tooltipStarInCell.id] : null;
            const tooltipStat = tooltipStarInCell ? statsBySkill[tooltipStarInCell.id] : null;

            return (
              <div
                key={domain.id}
                data-domain-cell={domain.id}
                className={`relative flex flex-col justify-between rounded-xl border p-4 h-full transition-colors ${
                  isWeakest
                    ? 'border-accent/35 bg-paper/75'
                    : 'border-line bg-paper/45'
                }`}
              >
                {/* Cell Header Row: Domain Name (Fraunces 18-19px) + Reserved Free Corner for Cosmo */}
                <div className="flex items-start justify-between gap-2 min-h-[46px] mb-1">
                  <h3 className="font-display font-semibold text-[18px] lg:text-[19px] leading-[1.2] text-ink flex-1 min-w-0">
                    {domain.sentenceCaseName}
                  </h3>

                  {/* Reserved 36x36 free corner box — zero overlap with title or stars */}
                  <div
                    className="w-9 h-9 shrink-0 flex items-center justify-center"
                    data-cosmo-slot={isWeakest ? 'active' : 'reserved'}
                  >
                    {isWeakest && (
                      <div
                        className="w-9 h-9 rounded-full bg-surface border border-line shadow-2xs flex items-center justify-center"
                        title={`Cosmo recommends practicing ${domain.sentenceCaseName}`}
                      >
                        <img
                          src="/images/avatar-blue.png"
                          alt={`Cosmo focusing on ${domain.sentenceCaseName}`}
                          className="w-7 h-7 object-contain pointer-events-none select-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Cell Constellation SVG Canvas */}
                <div className="relative w-full">
                  <svg
                    ref={domainIdx === 0 ? firstSvgRef : undefined}
                    viewBox={`0 0 ${CELL_VIEWBOX.width} ${CELL_VIEWBOX.height}`}
                    className="w-full h-auto block select-none overflow-visible text-ink"
                    role="img"
                    aria-label={`${domain.sentenceCaseName} constellation`}
                  >
                    {/* 1. Connecting Lines (1.5px dotted; 30% ink base, 55% ink between lit stars) */}
                    {cellLayout?.arcGuide ? (
                      <>
                        {cellLayout.arcGuide.paths.map((d, pathIdx) => {
                          const allDomainLit =
                            domain.stars.length > 0 &&
                            domain.stars.every((s) =>
                              isLitState(
                                statsBySkill[s.id]?.state ||
                                  (s.isAvailable ? 'not_started' : 'coming_soon')
                              )
                            );
                          return (
                            <path
                              key={`${domain.id}-arc-${pathIdx}`}
                              d={d}
                              fill="none"
                              stroke="var(--color-ink)"
                              strokeOpacity={pathIdx === 0 ? (allDomainLit ? 0.55 : 0.3) : 0.24}
                              strokeWidth={1.5}
                              strokeDasharray="2,3.5"
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          );
                        })}
                        {cellLayout.arcGuide.waypoint && (
                          <g
                            transform={`translate(${cellLayout.arcGuide.waypoint.x}, ${cellLayout.arcGuide.waypoint.y})`}
                            aria-hidden="true"
                            className="pointer-events-none"
                          >
                            <circle
                              r="2"
                              fill="var(--color-ink)"
                              fillOpacity="0.38"
                            />
                          </g>
                        )}
                      </>
                    ) : (
                      domain.connections.map(([srcIdx, dstIdx], lineIdx) => {
                        const srcStar = domain.stars[srcIdx];
                        const dstStar = domain.stars[dstIdx];
                        if (!srcStar || !dstStar) return null;

                        const srcPos = coordsById[srcStar.id];
                        const dstPos = coordsById[dstStar.id];
                        if (!srcPos || !dstPos) return null;

                        const srcState: StarState =
                          statsBySkill[srcStar.id]?.state ||
                          (srcStar.isAvailable ? 'not_started' : 'coming_soon');
                        const dstState: StarState =
                          statsBySkill[dstStar.id]?.state ||
                          (dstStar.isAvailable ? 'not_started' : 'coming_soon');

                        const bothLit = isLitState(srcState) && isLitState(dstState);

                        return (
                          <line
                            key={`${domain.id}-edge-${lineIdx}`}
                            x1={srcPos.x}
                            y1={srcPos.y}
                            x2={dstPos.x}
                            y2={dstPos.y}
                            stroke="var(--color-ink)"
                            strokeOpacity={bothLit ? 0.55 : 0.3}
                            strokeWidth={1.5}
                            strokeDasharray="2,3.5"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        );
                      })
                    )}

                    {/* 2. Domain Skill Stars (16-22px rendered size, AA contrast compliant) */}
                    {domain.stars.map((star, localIdx) => {
                      const pos = coordsById[star.id];
                      if (!pos) return null;

                      const stat = statsBySkill[star.id];
                      const state: StarState =
                        stat?.state || (star.isAvailable ? 'not_started' : 'coming_soon');
                      const globalIndex = ALL_CONSTELLATION_STARS.findIndex(
                        (s) => s.id === star.id
                      );
                      const isFocused = focusedStarId === star.id;
                      const isHovered = hoveredStar?.id === star.id;

                      const twinkleClass =
                        state === 'strong'
                          ? localIdx % 2 === 0
                            ? 'star-twinkle-a'
                            : 'star-twinkle-b'
                          : '';

                      // Hit target circle ensures comfortable click & tap without crowding neighbors
                      const hitRadius = Math.max(15, starGeometry.radiusSvg + 4);

                      return (
                        <g
                          key={star.id}
                          ref={(el) => {
                            starRefs.current[star.id] = el;
                          }}
                          data-star-id={star.id}
                          data-star-state={state}
                          tabIndex={0}
                          role="button"
                          aria-label={`${star.name}: ${
                            state === 'coming_soon'
                              ? 'Coming soon'
                              : stat?.accuracy !== null && stat?.accuracy !== undefined
                              ? `${stat.accuracy}% accuracy, ${stat.total} answers`
                              : `Not started, ${stat?.total || 0} answers`
                          }`}
                          transform={`translate(${pos.x}, ${pos.y})`}
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => {
                            if (focusedStarId !== star.id) {
                              setHoveredStar((prev) => (prev?.id === star.id ? null : prev));
                            }
                          }}
                          onFocus={() => {
                            setFocusedStarId(star.id);
                            setHoveredStar(star);
                          }}
                          onBlur={() => {
                            setFocusedStarId((prev) => (prev === star.id ? null : prev));
                            setHoveredStar((prev) => (prev?.id === star.id ? null : prev));
                          }}
                          onKeyDown={(e) => handleKeyDown(e, star, globalIndex)}
                          className={`star-node outline-none ${
                            star.isAvailable ? 'cursor-pointer' : 'cursor-default'
                          }`}
                        >
                          {/* Transparent generous hit target */}
                          <circle r={hitRadius} fill="transparent" />

                          {/* Keyboard Focus Ring */}
                          {isFocused && (
                            <circle
                              r={starGeometry.radiusSvg + 5.5}
                              fill="none"
                              stroke="var(--color-accent)"
                              strokeWidth={2}
                              strokeDasharray="3,2.5"
                              vectorEffect="non-scaling-stroke"
                            />
                          )}

                          {/* Thin Soft Ring for Strong Stars */}
                          {state === 'strong' && (
                            <circle
                              r={starGeometry.radiusSvg + 3.5}
                              fill="none"
                              stroke="var(--color-moss)"
                              strokeWidth={1.25}
                              strokeOpacity={0.5}
                              vectorEffect="non-scaling-stroke"
                            />
                          )}

                          {/* Hover halo */}
                          {isHovered && !isFocused && (
                            <circle
                              r={starGeometry.radiusSvg + 4.5}
                              fill="none"
                              stroke="var(--color-ink)"
                              strokeWidth={1.25}
                              strokeOpacity={0.28}
                              vectorEffect="non-scaling-stroke"
                            />
                          )}

                          {/* Star Glyph */}
                          <g
                            className={`star-item-enter ${twinkleClass}`}
                            style={{
                              animationDelay:
                                state === 'strong'
                                  ? `${(globalIndex % 5) * 650}ms`
                                  : `${globalIndex * 25}ms`,
                            }}
                          >
                            {state === 'coming_soon' && (
                              <path
                                d={starGeometry.starPath}
                                fill="transparent"
                                stroke="var(--color-ink)"
                                strokeOpacity={0.46}
                                strokeWidth={1.5}
                                strokeDasharray="2.5,2.5"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                            )}

                            {state === 'not_started' && (
                              <path
                                d={starGeometry.starPath}
                                fill="transparent"
                                stroke="var(--color-ink)"
                                strokeOpacity={0.55}
                                strokeWidth={1.5}
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                            )}

                            {state === 'needs_work' && (
                              <path
                                d={starGeometry.starPath}
                                fill="var(--color-berry)"
                                stroke="var(--color-berry)"
                                strokeWidth={1.5}
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                            )}

                            {state === 'getting_there' && (
                              <path
                                d={starGeometry.starPath}
                                fill="color-mix(in srgb, var(--color-mustard) 90%, var(--color-ink) 10%)"
                                stroke="color-mix(in srgb, var(--color-mustard) 76%, var(--color-ink) 24%)"
                                strokeWidth={1.5}
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                            )}

                            {state === 'strong' && (
                              <path
                                d={starGeometry.starPath}
                                fill="var(--color-moss)"
                                stroke="var(--color-moss)"
                                strokeWidth={1.5}
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                            )}
                          </g>
                        </g>
                      );
                    })}
                  </svg>

                  {/* ── TOOLTIP NEAR THE STAR (Edge-aware flip so it never clips) ── */}
                  {tooltipStarInCell && tooltipCoord && (
                    <div
                      role="tooltip"
                      data-testid={`star-tooltip-${tooltipStarInCell.id}`}
                      className="absolute pointer-events-none z-40 transition-opacity duration-150"
                      style={{
                        left: `${(tooltipCoord.x / CELL_VIEWBOX.width) * 100}%`,
                        top: `${(tooltipCoord.y / CELL_VIEWBOX.height) * 100}%`,
                        transform: `translate(${
                          tooltipCoord.x < 72 ? '-12%' : tooltipCoord.x > 168 ? '-88%' : '-50%'
                        }, ${tooltipCoord.y < 52 ? '16px' : 'calc(-100% - 14px)'})`,
                      }}
                    >
                      <div className="bg-surface border border-line-strong rounded-xl px-3 py-2 shadow-notebook text-left min-w-[184px] max-w-[232px]">
                        <span className="font-semibold text-xs text-ink block leading-snug">
                          {tooltipStarInCell.name}
                        </span>

                        <div className="mt-1.5 pt-1.5 border-t border-line flex items-center justify-between gap-2 text-[11px]">
                          {tooltipStat?.state === 'coming_soon' ? (
                            <>
                              <span className="font-medium text-ink-2">Coming soon</span>
                              <span className="font-mono text-ink-muted">0 answers</span>
                            </>
                          ) : tooltipStat && tooltipStat.total >= 5 ? (
                            <>
                              <span className="font-mono font-bold text-ink">
                                {tooltipStat.accuracy}% accuracy
                              </span>
                              <span className="font-mono text-ink-2">
                                {tooltipStat.total} {tooltipStat.total === 1 ? 'answer' : 'answers'}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-ink-2">Not rated yet</span>
                              <span className="font-mono text-ink-2">
                                {tooltipStat?.total || 0}/5 answers
                              </span>
                            </>
                          )}
                        </div>

                        {tooltipStat &&
                          tooltipStat.total >= 5 &&
                          tooltipStat.trendDelta >= 10 &&
                          (tooltipStat.accuracy ?? 0) < 70 && (
                            <div className="mt-1 text-[10px] font-mono font-semibold text-mustard">
                              Improving (+{tooltipStat.trendDelta}% recent)
                            </div>
                          )}

                        {!isPreviewFixture && tooltipStarInCell.isAvailable && (
                          <div className="mt-1 text-[10px] text-accent font-medium">
                            Click to practice →
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ACCESSIBLE ALTERNATIVE: Visually Hidden Table for Screen Readers ── */}
      <div className="sr-only">
        <table>
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
                  <td>
                    {stat?.accuracy !== null && stat?.accuracy !== undefined
                      ? `${stat.accuracy}%`
                      : 'No rating'}
                  </td>
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
