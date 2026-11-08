import { useState, useMemo, useEffect } from 'react';
import {
  Star,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import TopicPracticeModal from '../components/practice/TopicPracticeModal';
import { CROSS_TEXT_QUESTIONS } from '../data/crossTextQuestions';
import { useAuth } from '../contexts/AuthContext';
import { fetchAllUserProgress, TopicProgressSummary } from '../lib/progressService';
import { QUESTION_REGISTRY } from '../data/questionRegistry';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import Skeleton from '../components/ui/Skeleton';
import EmptyState from '../components/ui/EmptyState';
import { SearchInput } from '../components/ui/Input';

interface TopicItem {
  id: string;
  name: string;
  solved: number;
  total: number;
  accuracy: number | null; // null if unattempted
}

interface DomainSection {
  id: string;
  name: string;
  code: string;
  topics: TopicItem[];
}

interface SubjectCurriculum {
  id: 'math' | 'reading_writing';
  title: string;
  label: string;
  domains: DomainSection[];
}

// Digital SAT Official Syllabus Structure
const OFFICIAL_CURRICULUM: SubjectCurriculum[] = [
  {
    id: 'reading_writing',
    title: 'Reading and Writing',
    label: 'Verbal section',
    domains: [
      {
        id: 'craft-structure',
        name: 'Craft and Structure',
        code: 'CRF',
        topics: [
          { id: 'rw-crf-1', name: 'Cross-Text Connections', solved: 0, total: 0, accuracy: null },
          { id: 'rw-crf-2', name: 'Text Structure and Purpose', solved: 0, total: 0, accuracy: null },
          { id: 'rw-crf-3', name: 'Words in Context', solved: 0, total: 0, accuracy: null },
        ],
      },
      {
        id: 'information-ideas',
        name: 'Information and Ideas',
        code: 'INF',
        topics: [
          { id: 'rw-inf-1', name: 'Central Ideas and Details', solved: 0, total: 0, accuracy: null },
          { id: 'rw-inf-2', name: 'Command of Evidence', solved: 0, total: 0, accuracy: null },
          { id: 'rw-inf-3', name: 'Inferences', solved: 0, total: 0, accuracy: null },
        ],
      },
      {
        id: 'standard-english',
        name: 'Standard English Conventions',
        code: 'SEC',
        topics: [
          { id: 'rw-sec-1', name: 'Boundaries', solved: 0, total: 0, accuracy: null },
          { id: 'rw-sec-2', name: 'Form, Structure, and Sense', solved: 0, total: 0, accuracy: null },
        ],
      },
      {
        id: 'expression-ideas',
        name: 'Expression of Ideas',
        code: 'EXP',
        topics: [
          { id: 'rw-exp-1', name: 'Rhetorical Synthesis', solved: 0, total: 0, accuracy: null },
          { id: 'rw-exp-2', name: 'Transitions', solved: 0, total: 0, accuracy: null },
        ],
      },
    ],
  },
  {
    id: 'math',
    title: 'Math',
    label: 'Quantitative section',
    domains: [
      {
        id: 'algebra',
        name: 'Algebra',
        code: 'ALG',
        topics: [
          { id: 'm-alg-1', name: 'Linear equations in one variable', solved: 0, total: 0, accuracy: null },
          { id: 'm-alg-2', name: 'Linear functions', solved: 0, total: 0, accuracy: null },
          { id: 'm-alg-3', name: 'Linear equations in two variables', solved: 0, total: 0, accuracy: null },
          { id: 'm-alg-4', name: 'Systems of two linear equations in two variables', solved: 0, total: 0, accuracy: null },
          { id: 'm-alg-5', name: 'Linear inequalities in one or two variables', solved: 0, total: 0, accuracy: null },
        ],
      },
      {
        id: 'advanced-math',
        name: 'Advanced Math',
        code: 'ADV',
        topics: [
          { id: 'm-adv-1', name: 'Equivalent expressions', solved: 0, total: 0, accuracy: null },
          { id: 'm-adv-2', name: 'Nonlinear equations in one variable and systems of equations in two variables', solved: 0, total: 0, accuracy: null },
          { id: 'm-adv-3', name: 'Nonlinear functions', solved: 0, total: 0, accuracy: null },
        ],
      },
      {
        id: 'problem-solving',
        name: 'Problem-Solving and Data Analysis',
        code: 'DAT',
        topics: [
          { id: 'm-dat-1', name: 'Ratios, rates, proportional relationships, and units', solved: 0, total: 0, accuracy: null },
          { id: 'm-dat-2', name: 'Percentages', solved: 0, total: 0, accuracy: null },
          { id: 'm-dat-3', name: 'One-variable data: Distributions and measures of center and spread', solved: 0, total: 0, accuracy: null },
          { id: 'm-dat-4', name: 'Two-variable data: Models and scatterplots', solved: 0, total: 0, accuracy: null },
          { id: 'm-dat-5', name: 'Probability and conditional probability', solved: 0, total: 0, accuracy: null },
          { id: 'm-dat-6', name: 'Inference from sample statistics and margin of error', solved: 0, total: 0, accuracy: null },
          { id: 'm-dat-7', name: 'Evaluating statistical claims: Observational studies and experiments', solved: 0, total: 0, accuracy: null },
        ],
      },
      {
        id: 'geometry-trig',
        name: 'Geometry and Trigonometry',
        code: 'GEO',
        topics: [
          { id: 'm-geo-1', name: 'Area and volume', solved: 0, total: 0, accuracy: null },
          { id: 'm-geo-2', name: 'Lines, angles, and triangles', solved: 0, total: 0, accuracy: null },
          { id: 'm-geo-3', name: 'Right triangles and trigonometry', solved: 0, total: 0, accuracy: null },
          { id: 'm-geo-4', name: 'Circles', solved: 0, total: 0, accuracy: null },
        ],
      },
    ],
  },
];

type FilterMode = 'all' | 'needs_practice' | 'mastered' | 'unattempted';

export default function QuestionBank() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const effectiveUserId = user?.id || 'guest';

  const [activeSubject, setActiveSubject] = useState<'reading_writing' | 'math'>('reading_writing');
  const [selectedTopicIds, setSelectedTopicIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [collapsedDomains, setCollapsedDomains] = useState<Record<string, boolean>>({});

  // Real-time Cloud Progress from Supabase
  const [userProgress, setUserProgress] = useState<Record<string, TopicProgressSummary>>({});
  const [isLoadingProgress, setIsLoadingProgress] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetchAllUserProgress(effectiveUserId).then((res) => {
      if (!isMounted) return;
      setUserProgress(res);
      setIsLoadingProgress(false);
    });
    return () => {
      isMounted = false;
    };
  }, [effectiveUserId]);

  // Practice Modal State
  const [practiceModalOpen, setPracticeModalOpen] = useState<boolean>(false);
  const [activePracticeTopic, setActivePracticeTopic] = useState<{
    id: string;
    name: string;
    domain: string;
  } | null>(null);

  const handleOpenPractice = (topic: TopicItem, domainName: string) => {
    if (topic.total === 0) return;
    const meta = QUESTION_REGISTRY[topic.id];
    setActivePracticeTopic({ id: topic.id, name: topic.name, domain: domainName });
    if (meta?.route) {
      navigate(meta.route);
    } else {
      navigate('/practice/cross-text');
    }
  };

  // Dynamically compute exact counts from QUESTION_REGISTRY and Supabase Cloud
  const liveCurriculum = useMemo(() => {
    return OFFICIAL_CURRICULUM.map((subj) => ({
      ...subj,
      domains: subj.domains.map((domain) => ({
        ...domain,
        topics: domain.topics.map((topic) => {
          const total = QUESTION_REGISTRY[topic.id]?.totalQuestions ?? 0;
          const prog = userProgress[topic.id];
          const solved = prog?.solved ?? 0;
          const accuracy = prog?.accuracy ?? null;
          return {
            ...topic,
            total,
            solved,
            accuracy,
          };
        }),
      })),
    }));
  }, [userProgress]);

  const activeSubjectData = useMemo(() => {
    return liveCurriculum.find((s) => s.id === activeSubject)!;
  }, [liveCurriculum, activeSubject]);

  // Subject level calculations based on real data
  const subjectStats = useMemo(() => {
    const calc = (subj: SubjectCurriculum) => {
      let solved = 0;
      let total = 0;
      let accuracySum = 0;
      let accuracyCount = 0;

      subj.domains.forEach((d) => {
        d.topics.forEach((t) => {
          solved += t.solved;
          total += t.total;
          if (t.accuracy !== null) {
            accuracySum += t.accuracy;
            accuracyCount += 1;
          }
        });
      });

      const avgAccuracy = accuracyCount > 0 ? Math.round(accuracySum / accuracyCount) : null;
      const progressPercent = total > 0 ? Math.round((solved / total) * 100) : 0;
      return {
        solved,
        total,
        progressPercent,
        avgAccuracy,
        accuracyCount,
      };
    };

    return {
      math: calc(liveCurriculum.find((s) => s.id === 'math')!),
      reading_writing: calc(liveCurriculum.find((s) => s.id === 'reading_writing')!),
    };
  }, [liveCurriculum]);

  // Checkbox toggle logic
  const handleToggleTopic = (id: string) => {
    setSelectedTopicIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAllInDomain = (topics: TopicItem[]) => {
    setSelectedTopicIds((prev) => {
      const next = new Set(prev);
      const allSelected = topics.length > 0 && topics.every((t) => next.has(t.id));
      topics.forEach((t) => {
        if (allSelected) next.delete(t.id);
        else next.add(t.id);
      });
      return next;
    });
  };

  const clearSelection = () => setSelectedTopicIds(new Set());

  const toggleDomainCollapse = (domainId: string) => {
    setCollapsedDomains((prev) => ({ ...prev, [domainId]: !prev[domainId] }));
  };

  // Filter topics based on search & filterMode
  const filteredDomains = useMemo(() => {
    return activeSubjectData.domains
      .map((d) => {
        const filteredTopics = d.topics.filter((t) => {
          const matchesSearch =
            t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.name.toLowerCase().includes(searchQuery.toLowerCase());

          if (!matchesSearch) return false;

          if (filterMode === 'needs_practice') return t.accuracy !== null && t.accuracy < 70;
          if (filterMode === 'mastered') return t.accuracy !== null && t.accuracy >= 80;
          if (filterMode === 'unattempted') return t.accuracy === null || t.solved === 0;
          return true;
        });

        return { ...d, topics: filteredTopics };
      })
      .filter((d) => d.topics.length > 0 || searchQuery === '');
  }, [activeSubjectData, searchQuery, filterMode]);

  const filterOptions: { id: FilterMode; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'needs_practice', label: 'Weak (under 70%)' },
    { id: 'mastered', label: 'Mastered (80%+)' },
    { id: 'unattempted', label: 'Not started' },
  ];

  return (
    <div className="space-y-7 max-w-7xl mx-auto font-sans pb-24">
      {/* ── 1. Header (Fraunces H1, plain subtitle, accent diagnostic action) ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
            Practice
          </h1>
          <p className="text-sm text-ink-2 font-sans mt-1">
            Official SAT syllabus organized by chapter and skill.
          </p>
        </div>

        <Link to="/mock-tests/flashrush">
          <Button variant="accent" size="md">
            Take the 20-minute diagnostic
          </Button>
        </Link>
      </div>

      {/* ── 2. Two-Column Summary (Reading and Writing vs Math) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Reading and Writing Column */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveSubject('reading_writing')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveSubject('reading_writing');
            }
          }}
          className={`p-5 rounded-[var(--radius-md)] bg-surface text-ink transition-all select-none cursor-pointer ${
            activeSubject === 'reading_writing'
              ? 'border-2 border-ink shadow-xs'
              : 'border border-line hover:border-line-strong hover:bg-paper-2/40 shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-lg text-ink">
              Reading and Writing
            </h2>
            {activeSubject === 'reading_writing' && (
              <span className="text-xs text-ink-2 font-sans font-medium">Selected</span>
            )}
          </div>

          <div className="space-y-4">
            {/* Number 1: Coverage */}
            <div>
              <div className="flex items-center justify-between text-xs text-ink-2 mb-1.5">
                <span>Coverage</span>
                <span className="font-mono text-xs font-semibold text-ink">
                  {subjectStats.reading_writing.solved} of {subjectStats.reading_writing.total} questions
                </span>
              </div>
              <ProgressBar value={subjectStats.reading_writing.progressPercent} />
            </div>

            {/* Number 2: Accuracy */}
            <div className="pt-2 border-t border-line/60 flex items-baseline justify-between">
              <span className="text-xs text-ink-2 font-sans">Accuracy</span>
              {subjectStats.reading_writing.avgAccuracy !== null ? (
                <span className="font-mono text-xl sm:text-2xl font-bold text-ink">
                  {subjectStats.reading_writing.avgAccuracy}%
                </span>
              ) : (
                <span className="text-xs text-ink-muted font-sans">No answers yet</span>
              )}
            </div>
          </div>
        </div>

        {/* Math Column */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setActiveSubject('math')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setActiveSubject('math');
            }
          }}
          className={`p-5 rounded-[var(--radius-md)] bg-surface text-ink transition-all select-none cursor-pointer ${
            activeSubject === 'math'
              ? 'border-2 border-ink shadow-xs'
              : 'border border-line hover:border-line-strong hover:bg-paper-2/40 shadow-xs'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-lg text-ink">Math</h2>
            {activeSubject === 'math' && (
              <span className="text-xs text-ink-2 font-sans font-medium">Selected</span>
            )}
          </div>

          <div className="space-y-4">
            {/* Number 1: Coverage */}
            <div>
              <div className="flex items-center justify-between text-xs text-ink-2 mb-1.5">
                <span>Coverage</span>
                <span className="font-mono text-xs font-semibold text-ink">
                  {subjectStats.math.solved} of {subjectStats.math.total} questions
                </span>
              </div>
              <ProgressBar value={subjectStats.math.progressPercent} />
            </div>

            {/* Number 2: Accuracy */}
            <div className="pt-2 border-t border-line/60 flex items-baseline justify-between">
              <span className="text-xs text-ink-2 font-sans">Accuracy</span>
              {subjectStats.math.avgAccuracy !== null ? (
                <span className="font-mono text-xl sm:text-2xl font-bold text-ink">
                  {subjectStats.math.avgAccuracy}%
                </span>
              ) : (
                <span className="text-xs text-ink-muted font-sans">No answers yet</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Filters & Search (Quiet segmented control in Instrument Sans, SearchInput with "/") ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        {/* Quiet Segmented Control */}
        <div className="inline-flex items-center p-1 rounded-[var(--radius-sm)] bg-paper-2 border border-line gap-1 overflow-x-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFilterMode(opt.id)}
              className={`px-3 py-1.5 rounded-[calc(var(--radius-sm)-2px)] text-xs font-sans font-medium transition-colors whitespace-nowrap ${
                filterMode === opt.id
                  ? 'bg-surface text-ink font-semibold shadow-2xs'
                  : 'text-ink-2 hover:text-ink'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Search Field with "/" shortcut */}
        <div className="w-full sm:w-80">
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chapters or skills..."
            showSlashShortcut={true}
          />
        </div>
      </div>

      {/* ── 4. Topic List as a Textbook Index ── */}
      {isLoadingProgress ? (
        <div className="space-y-4 animate-pulse">
          <Skeleton variant="rectangular" height={160} className="w-full" />
          <Skeleton variant="rectangular" height={160} className="w-full" />
          <Skeleton variant="rectangular" height={160} className="w-full" />
        </div>
      ) : (
        <div className="space-y-5">
          {filteredDomains.map((domain, domainIdx) => {
            const isCollapsed = collapsedDomains[domain.id] || false;
            const chapterNum = String(domainIdx + 1).padStart(2, '0');
            const allDomainTopicsSelected =
              domain.topics.length > 0 &&
              domain.topics.every((t) => selectedTopicIds.has(t.id));

            return (
              <Card key={domain.id} variant="plain" className="overflow-hidden p-0">
                {/* Chapter Heading (Fraunces with chapter number 01, 02, collapsible) */}
                <div className="p-4 sm:px-5 bg-surface border-b border-line flex items-center justify-between select-none">
                  <div className="flex items-center gap-3">
                    {/* Domain Checkbox */}
                    <button
                      type="button"
                      onClick={() => handleSelectAllInDomain(domain.topics)}
                      className={`w-4 h-4 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors ${
                        allDomainTopicsSelected
                          ? 'bg-accent border-accent text-white'
                          : 'border-line-strong hover:border-ink bg-surface'
                      }`}
                      aria-label={`Select all skills in ${domain.name}`}
                    >
                      {allDomainTopicsSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </button>

                    <div className="flex items-baseline gap-2.5">
                      <span className="font-display text-sm sm:text-base font-semibold text-accent">
                        {chapterNum}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-semibold text-ink">
                        {domain.name}
                      </h3>
                      <span className="text-xs text-ink-muted font-sans">
                        ({domain.topics.length} {domain.topics.length === 1 ? 'skill' : 'skills'})
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleDomainCollapse(domain.id)}
                    className="p-1 rounded-[var(--radius-sm)] text-ink-muted hover:text-ink hover:bg-paper-2 transition-colors"
                    aria-label={isCollapsed ? `Expand ${domain.name}` : `Collapse ${domain.name}`}
                  >
                    {isCollapsed ? (
                      <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <ChevronUp className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </button>
                </div>

                {/* Chapter Skills List (Textbook Table of Contents) */}
                {!isCollapsed && (
                  <div className="divide-y divide-line/60 bg-surface">
                    {domain.topics.map((topic) => {
                      const isSelected = selectedTopicIds.has(topic.id);
                      const isMastered = topic.accuracy !== null && topic.accuracy >= 80;

                      return (
                        <div
                          key={topic.id}
                          className={`p-3.5 sm:px-5 flex items-center justify-between gap-3 transition-colors group ${
                            isSelected ? 'bg-accent-subtle/50' : 'hover:bg-paper-2/40'
                          }`}
                        >
                          {/* Left: Checkbox + Star + Skill Name */}
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            {/* Checkbox with tokens */}
                            <button
                              type="button"
                              onClick={() => handleToggleTopic(topic.id)}
                              className={`w-4 h-4 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-accent border-accent text-white'
                                  : 'border-line-strong hover:border-ink bg-surface'
                              }`}
                              aria-label={`Select ${topic.name}`}
                            >
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </button>

                            {/* Mastered Star Icon in Mustard */}
                            {isMastered && (
                              <Star
                                className="w-3.5 h-3.5 text-mustard fill-mustard shrink-0"
                                aria-label="Mastered skill"
                              />
                            )}

                            {/* Skill Name */}
                            <span
                              className={`text-sm font-sans truncate ${
                                topic.total === 0 ? 'text-ink-muted' : 'text-ink font-medium'
                              }`}
                            >
                              {topic.name}
                            </span>

                            {/* Dotted Leader Line (Textbook Table of Contents aesthetic) */}
                            <div
                              className="flex-1 mx-3 border-b border-dotted border-line-strong self-center hidden sm:block opacity-60"
                              aria-hidden="true"
                            />
                          </div>

                          {/* Right: Coverage + Accuracy + Practice Action */}
                          <div className="flex items-center gap-4 shrink-0">
                            {topic.total > 0 ? (
                              <>
                                {/* Coverage in JetBrains Mono: "5 / 317" */}
                                <span className="font-mono text-xs text-ink-2 min-w-[55px] text-right">
                                  {topic.solved} / {topic.total}
                                </span>

                                {/* Accuracy with color dot: berry under 70%, mustard 70-79%, moss 80%+ */}
                                {topic.accuracy !== null ? (
                                  <div className="flex items-center gap-1.5 min-w-[50px] justify-end">
                                    <span
                                      className={`w-2 h-2 rounded-full shrink-0 ${
                                        topic.accuracy < 70
                                          ? 'bg-berry'
                                          : topic.accuracy < 80
                                          ? 'bg-mustard'
                                          : 'bg-moss'
                                      }`}
                                    />
                                    <span className="font-mono text-xs font-semibold text-ink">
                                      {topic.accuracy}%
                                    </span>
                                  </div>
                                ) : (
                                  <span className="text-xs text-ink-muted font-sans min-w-[50px] text-right">
                                    —
                                  </span>
                                )}

                                {/* Small Practice Button: appears on hover (always visible on touch/mobile) */}
                                <div className="opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => handleOpenPractice(topic, domain.name)}
                                  >
                                    Practice
                                  </Button>
                                </div>
                              </>
                            ) : (
                              /* Skills with no questions yet: muted ink text "Coming soon" */
                              <span className="text-xs text-ink-muted font-sans pr-2">
                                Coming soon
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Card>
            );
          })}

          {/* ── Empty State with Cosmo Mascot when search/filter returns nothing ── */}
          {filteredDomains.length === 0 && (
            <EmptyState
              headline="No matching skills found"
              description="Try adjusting your search keywords or switching filter modes to discover other chapters."
              actionLabel="Reset filters"
              onAction={() => {
                setSearchQuery('');
                setFilterMode('all');
              }}
            />
          )}
        </div>
      )}

      {/* ── 5. Multi-Select Sticky Bottom Action Bar ── */}
      {selectedTopicIds.size > 0 && (
        <div className="fixed bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-40 bg-surface/95 backdrop-blur-md border border-line shadow-notebook rounded-[var(--radius-md)] px-5 py-3 flex items-center justify-between gap-4 sm:gap-6 animate-fade-in w-[92%] sm:w-auto text-ink font-sans">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-sans text-ink">
              <strong className="font-semibold text-ink font-mono">{selectedTopicIds.size}</strong>{' '}
              {selectedTopicIds.size === 1 ? 'skill selected' : 'skills selected'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={clearSelection}
              className="text-xs font-sans text-ink-2 hover:text-ink hover:underline transition-colors"
            >
              Clear
            </button>

            <Button
              variant="accent"
              size="sm"
              onClick={() => {
                const firstSelected = OFFICIAL_CURRICULUM.flatMap((s) => s.domains)
                  .flatMap((d) => d.topics)
                  .find((t) => selectedTopicIds.has(t.id));
                if (firstSelected) {
                  handleOpenPractice(firstSelected, 'Targeted Drill');
                }
              }}
            >
              Start session
            </Button>
          </div>
        </div>
      )}

      {/* Interactive Practice Session Modal with Per-Question Timer */}
      <TopicPracticeModal
        isOpen={practiceModalOpen}
        onClose={() => setPracticeModalOpen(false)}
        topicTitle={activePracticeTopic?.name || 'Cross-Text Connections'}
        domainTitle={activePracticeTopic?.domain || 'Craft and Structure'}
        questions={CROSS_TEXT_QUESTIONS}
      />
    </div>
  );
}
