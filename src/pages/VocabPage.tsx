import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export interface SatVocabWord {
  id: string;
  word: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb';
  phonetic: string;
  connotation: 'positive' | 'negative' | 'neutral';
  definition: string;
  nuance: string;
  sampleSentence: string;
  trapSynonyms: string[];
  quiz: {
    sentenceWithBlank: string;
    options: { letter: string; text: string }[];
    correctLetter: string;
    explanation: string;
  };
}

export const SAT_CORE_VOCABULARY: SatVocabWord[] = [
  {
    id: 'vocab-1',
    word: 'Inaugurate',
    pos: 'verb',
    phonetic: '/ɪˈnɔː.ɡjə.reɪt/',
    connotation: 'positive',
    definition: 'To initiate, launch, or formally introduce a notable new era, institution, or cultural movement.',
    nuance: 'Implies not merely starting something, but doing so with ceremony, enduring significance, or lasting historical impact.',
    sampleSentence: "Scott Joplin's syncopated piano rags effectively inaugurated the burgeoning genre of ragtime in mainstream American culture.",
    trapSynonyms: ['Subvert (negative)', 'Repudiate (rejecting)', 'Deplore (condemning)'],
    quiz: {
      sentenceWithBlank: "Rather than following conventional 19th-century march conventions, Joplin's polyrhythms effectively _______ the ragtime movement in American music.",
      options: [
        { letter: 'A', text: 'subverted' },
        { letter: 'B', text: 'inaugurated' },
        { letter: 'C', text: 'deplored' },
        { letter: 'D', text: 'repudiated' },
      ],
      correctLetter: 'B',
      explanation: "'Inaugurated' signifies introducing or initiating a notable new cultural genre. The others carry contradictory negative connotations.",
    },
  },
  {
    id: 'vocab-2',
    word: 'Ambivalence',
    pos: 'noun',
    phonetic: '/æmˈbɪv.ə.ləns/',
    connotation: 'neutral',
    definition: 'The coexistence of opposing attitudes, emotions, or feelings toward an object, person, or idea.',
    nuance: 'Unlike apathy (caring zero), ambivalence means caring strongly in two conflicting directions at the same time.',
    sampleSentence: 'The biographer captures the statesman’s profound ambivalence toward public adulation, which he simultaneously craved and resented.',
    trapSynonyms: ['Apathy (indifference)', 'Antipathy (dislike)', 'Certainty (resolve)'],
    quiz: {
      sentenceWithBlank: 'While acknowledging the economic advantages of urban expansion, the environmentalist expressed _______ regarding its ecological consequences.',
      options: [
        { letter: 'A', text: 'ambivalence' },
        { letter: 'B', text: 'indifference' },
        { letter: 'C', text: 'certitude' },
        { letter: 'D', text: 'elation' },
      ],
      correctLetter: 'A',
      explanation: "'Ambivalence' conveys simultaneous appreciation of advantages alongside serious concern about consequences.",
    },
  },
  {
    id: 'vocab-3',
    word: 'Substantiate',
    pos: 'verb',
    phonetic: '/səbˈstæn.ʃi.eɪt/',
    connotation: 'positive',
    definition: 'To provide empirical evidence or proof supporting the truth of a claim or hypothesis.',
    nuance: 'Essential on Digital SAT Command of Evidence questions; refers to rigorous validation through quantitative or archival data.',
    sampleSentence: 'Subsequent geological core samples substantiated Dr. Alvarez’s hypothesis that an asteroid impact caused the cretaceous extinction.',
    trapSynonyms: ['Fabricate (falsify)', 'Conjecture (speculate)', 'Discredit (undermine)'],
    quiz: {
      sentenceWithBlank: 'Subsequent isotopic analysis failed to _______ the team’s assertion that the volcanic ash originated from a local eruption.',
      options: [
        { letter: 'A', text: 'obviate' },
        { letter: 'B', text: 'substantiate' },
        { letter: 'C', text: 'conflate' },
        { letter: 'D', text: 'circumvent' },
      ],
      correctLetter: 'B',
      explanation: "'Substantiate' means to verify or confirm through concrete empirical evidence.",
    },
  },
  {
    id: 'vocab-4',
    word: 'Ephemeral',
    pos: 'adjective',
    phonetic: '/ɪˈfem.ər.əl/',
    connotation: 'neutral',
    definition: 'Lasting for a very brief period; transient or fleeting in nature.',
    nuance: 'Often used in SAT literary or biological passages contrasting brief lifespans or seasonal blossoms against enduring permanence.',
    sampleSentence: 'Desert wildflowers thrive in an ephemeral burst following rare winter rains before withering under the scorching summer sun.',
    trapSynonyms: ['Perennial (long-lasting)', 'Static (unchanging)', 'Indelible (permanent)'],
    quiz: {
      sentenceWithBlank: 'Unlike marble monuments engineered for antiquity, ice sculptures are inherently _______ creations designed to melt away.',
      options: [
        { letter: 'A', text: 'ephemeral' },
        { letter: 'B', text: 'perpetual' },
        { letter: 'C', text: 'impervious' },
        { letter: 'D', text: 'ponderous' },
      ],
      correctLetter: 'A',
      explanation: "'Ephemeral' describes transient beauty that lasts only for a short time before disappearing.",
    },
  },
  {
    id: 'vocab-5',
    word: 'Scrutinize',
    pos: 'verb',
    phonetic: '/ˈskruː.tɪ.naɪz/',
    connotation: 'neutral',
    definition: 'To examine or inspect with meticulous care and thorough critical attention.',
    nuance: 'More rigorous than simply looking or observing; carries the expectation of seeking hidden flaws, inconsistencies, or details.',
    sampleSentence: 'Auditors scrutinized every line of the corporate ledger before certifying the quarterly earnings report.',
    trapSynonyms: ['Glance (brief look)', 'Condone (excuse)', 'Neglect (ignore)'],
    quiz: {
      sentenceWithBlank: 'Before accepting the centuries-old manuscript into the university collection, conservators _______ the parchment under ultraviolet light.',
      options: [
        { letter: 'A', text: 'scrutinized' },
        { letter: 'B', text: 'dismissed' },
        { letter: 'C', text: 'obfuscated' },
        { letter: 'D', text: 'conceded' },
      ],
      correctLetter: 'A',
      explanation: "'Scrutinized' denotes inspecting and evaluating with close, rigorous scrutiny.",
    },
  },
  {
    id: 'vocab-6',
    word: 'Pragmatic',
    pos: 'adjective',
    phonetic: '/præɡˈmæt.ɪk/',
    connotation: 'positive',
    definition: 'Dealing with matters sensibly and realistically based on practical considerations rather than theoretical ideals.',
    nuance: 'Highlights actionable utility, measurable real-world outcomes, and cost-effective viability over ideological perfection.',
    sampleSentence: 'The urban council adopted a pragmatic zoning compromise that accommodated business expansion while preserving historical green space.',
    trapSynonyms: ['Dogmatic (rigid ideology)', 'Utopian (unrealistic ideal)', 'Flippant (careless)'],
    quiz: {
      sentenceWithBlank: 'Rejecting rigid dogma, the chief architect proposed a _______ design that optimized local timber and current construction budgets.',
      options: [
        { letter: 'A', text: 'pragmatic' },
        { letter: 'B', text: 'quixotic' },
        { letter: 'C', text: 'speculative' },
        { letter: 'D', text: 'recalcitrant' },
      ],
      correctLetter: 'A',
      explanation: "'Pragmatic' means practical and realistic, contrasting sharply with rigid theoretical dogma.",
    },
  },
  {
    id: 'vocab-7',
    word: 'Mitigate',
    pos: 'verb',
    phonetic: '/ˈmɪt.ɪ.ɡeɪt/',
    connotation: 'positive',
    definition: 'To make less severe, serious, painful, or damaging.',
    nuance: 'Often paired on SAT science and civic texts with risks, ecological impacts, climate hazards, or structural deficits.',
    sampleSentence: 'Restoring coastal wetlands provides a natural buffer that mitigates hurricane storm surge damage.',
    trapSynonyms: ['Exacerbate (worsen)', 'Aggravate (intensify)', 'Provoke (incite)'],
    quiz: {
      sentenceWithBlank: 'Civil engineers installed retention basins along the riverbank to _______ the hazard of catastrophic seasonal flooding.',
      options: [
        { letter: 'A', text: 'mitigate' },
        { letter: 'B', text: 'exacerbate' },
        { letter: 'C', text: 'perpetuate' },
        { letter: 'D', text: 'induce' },
      ],
      correctLetter: 'A',
      explanation: "'Mitigate' means to diminish or alleviate the severity of a hazard.",
    },
  },
  {
    id: 'vocab-8',
    word: 'Bolster',
    pos: 'verb',
    phonetic: '/ˈboʊl.stər/',
    connotation: 'positive',
    definition: 'To support, strengthen, prop up, or reinforce.',
    nuance: 'Commonly appears in SAT Rhetorical and Command of Evidence prompts referring to strengthening an argument or thesis.',
    sampleSentence: 'The economist introduced fresh labor census data to bolster her central thesis regarding industrial automation.',
    trapSynonyms: ['Undermine (weaken)', 'Compromise (endanger)', 'Obviate (eliminate)'],
    quiz: {
      sentenceWithBlank: 'Rather than weakening the historian’s premise, newly discovered letters served to _______ his interpretation of the treaty.',
      options: [
        { letter: 'A', text: 'bolster' },
        { letter: 'B', text: 'undermine' },
        { letter: 'C', text: 'deride' },
        { letter: 'D', text: 'preclude' },
      ],
      correctLetter: 'A',
      explanation: "'Bolster' means to reinforce or support an existing argument with new evidence.",
    },
  },
  {
    id: 'vocab-9',
    word: 'Equivocal',
    pos: 'adjective',
    phonetic: '/ɪˈkwɪv.ə.kəl/',
    connotation: 'negative',
    definition: 'Open to more than one interpretation; ambiguous or deliberately misleading.',
    nuance: 'Indicates uncertainty, intentional vagueness, or hesitation rather than clear, decisive candor.',
    sampleSentence: 'The minister gave an equivocal response when asked whether public funding for the telescope project would be renewed.',
    trapSynonyms: ['Unequivocal (clear/direct)', 'Explicit (stated directly)', 'Lucid (clear)'],
    quiz: {
      sentenceWithBlank: 'Frustrated by the politician’s _______ statements, reporters demanded a plain and straightforward answer.',
      options: [
        { letter: 'A', text: 'equivocal' },
        { letter: 'B', text: 'lucid' },
        { letter: 'C', text: 'resolute' },
        { letter: 'D', text: 'categorical' },
      ],
      correctLetter: 'A',
      explanation: "'Equivocal' means ambiguous or vague, leaving listeners confused about the speaker's true intent.",
    },
  },
  {
    id: 'vocab-10',
    word: 'Evocative',
    pos: 'adjective',
    phonetic: '/ɪˈvɑː.kə.tɪv/',
    connotation: 'positive',
    definition: 'Bringing strong images, memories, or feelings to mind.',
    nuance: 'Frequent in SAT literary fiction passages describing imagery, poetic metaphors, or resonant sensory descriptions.',
    sampleSentence: 'Toni Morrison’s evocative prose summons the textures, aromas, and spiritual memory of 19th-century rural communities.',
    trapSynonyms: ['Sterile (lacking feeling)', 'Pedestrian (dull/ordinary)', 'Opaque (obscure)'],
    quiz: {
      sentenceWithBlank: 'The poet’s _______ descriptions of autumnal orchards stirred deep nostalgia in her readers.',
      options: [
        { letter: 'A', text: 'evocative' },
        { letter: 'B', text: 'pedestrian' },
        { letter: 'C', text: 'prosaic' },
        { letter: 'D', text: 'perfunctory' },
      ],
      correctLetter: 'A',
      explanation: "'Evocative' characterizes language that powerfully calls forth vivid memories and resonant sensations.",
    },
  },
];

export default function VocabPage() {
  const navigate = useNavigate();
  const { openAITutor } = useApp();

  const [activeTab, setActiveTab] = useState<'study' | 'quiz'>('study');
  const [selectedConnotation, setSelectedConnotation] = useState<'all' | 'positive' | 'negative' | 'neutral'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Quiz state
  const [activeWordId, setActiveWordId] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  const filteredWords = useMemo(() => {
    return SAT_CORE_VOCABULARY.filter((item) => {
      if (activeTab === 'quiz' && activeWordId && item.id !== activeWordId) {
        return false;
      }
      if (selectedConnotation !== 'all' && item.connotation !== selectedConnotation) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesWord = item.word.toLowerCase().includes(q);
        const matchesDef = item.definition.toLowerCase().includes(q);
        const matchesNuance = item.nuance.toLowerCase().includes(q);
        if (!matchesWord && !matchesDef && !matchesNuance) return false;
      }
      return true;
    });
  }, [selectedConnotation, searchQuery, activeTab, activeWordId]);

  const handleSelectQuizOption = (wordId: string, letter: string) => {
    if (quizSubmitted[wordId]) return;
    setQuizAnswers((prev) => ({ ...prev, [wordId]: letter }));
  };

  const handleSubmitQuizOption = (wordId: string) => {
    if (!quizAnswers[wordId]) return;
    setQuizSubmitted((prev) => ({ ...prev, [wordId]: true }));
  };

  const handleAskCosmoNuance = (word: SatVocabWord) => {
    openAITutor(
      {
        mode: 'practice',
        topicName: 'Words in Context (Vocabulary)',
        questionText: `SAT Vocabulary Word: ${word.word} (${word.pos}). Definition: ${word.definition}. Sample context: "${word.sampleSentence}".`,
        hintLevel: 1,
      },
      `How does the SAT test the nuanced academic meaning of "${word.word}", and what trap synonyms should I watch out for in Words in Context questions?`
    );
  };

  return (
    <div className="vocab-page space-y-8 max-w-5xl mx-auto font-sans pb-16">
      {/* ── 1. Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[11px] font-bold mb-2 uppercase tracking-wide">
            <BookOpen className="w-3 h-3" />
            <span>Digital SAT Verbal Syllabus</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
            Words in Context · SAT Vocabulary
          </h1>
          <p className="text-sm text-ink-2 font-sans mt-1">
            Master high-frequency Tier 2 academic vocabulary and connotation nuances tested on the Digital SAT.
          </p>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={() => navigate('/practice/rw-crf-3')}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Practice in Arena
        </Button>
      </div>

      {/* ── 2. Top View Controls ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Study Mode vs Quiz Mode */}
        <div className="inline-flex items-center rounded-xl border border-line bg-surface p-1 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('study')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'study'
                ? 'bg-accent text-accent-contrast shadow-2xs'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Word Index &amp; Nuance ({SAT_CORE_VOCABULARY.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-accent text-accent-contrast shadow-2xs'
                : 'text-ink-2 hover:text-ink'
            }`}
          >
            Words in Context Quiz Mode
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-2">
          {/* Tone filter */}
          <div className="inline-flex items-center rounded-xl border border-line bg-surface p-1 text-xs">
            {(['all', 'positive', 'neutral', 'negative'] as const).map((tone) => (
              <button
                key={tone}
                type="button"
                onClick={() => setSelectedConnotation(tone)}
                className={`px-2.5 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                  selectedConnotation === tone
                    ? 'bg-paper-2 text-ink font-semibold border border-line shadow-2xs'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-48 sm:w-56">
            <Search className="w-3.5 h-3.5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search words…"
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-line bg-surface text-xs text-ink placeholder:text-ink-muted focus:outline-hidden focus:border-accent"
            />
          </div>
        </div>
      </div>

      {/* ── 3. Study Mode Word Cards ── */}
      {activeTab === 'study' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWords.map((item) => {
            const connotationColor =
              item.connotation === 'positive'
                ? 'bg-moss/10 text-moss border-moss/20'
                : item.connotation === 'negative'
                ? 'bg-berry/10 text-berry border-berry/20'
                : 'bg-cobalt/10 text-cobalt border-cobalt/20';

            return (
              <Card
                key={item.id}
                className="p-5 space-y-4 hover:border-line-strong transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top: Word, POS, Connotation */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <h2 className="font-display font-bold text-xl text-ink">
                          {item.word}
                        </h2>
                        <span className="text-xs text-ink-muted font-serif italic">
                          {item.pos}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-ink-muted">
                        {item.phonetic}
                      </span>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold capitalize ${connotationColor}`}
                    >
                      {item.connotation} Tone
                    </span>
                  </div>

                  {/* Definition */}
                  <p className="text-xs sm:text-sm text-ink leading-relaxed">
                    {item.definition}
                  </p>

                  {/* Semantic Nuance Box */}
                  <div className="p-3 rounded-xl bg-paper-2/70 border border-line text-xs space-y-1">
                    <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider block">
                      SAT Nuance Insight
                    </span>
                    <p className="text-ink-2 leading-relaxed">
                      {item.nuance}
                    </p>
                  </div>

                  {/* College Board Style Sentence */}
                  <div className="text-xs text-ink leading-relaxed italic border-l-2 border-accent/40 pl-3 py-0.5">
                    “{item.sampleSentence}”
                  </div>

                  {/* Common Trap Synonyms */}
                  <div className="pt-1">
                    <span className="text-[10px] font-mono text-ink-muted uppercase block mb-1">
                      Distractor Synonyms to Avoid:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.trapSynonyms.map((trap, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-paper border border-line text-[11px] text-ink-2 font-sans"
                        >
                          {trap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-line/60 flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleAskCosmoNuance(item)}
                    leftIcon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
                    className="text-xs"
                  >
                    Ask Cosmo Nuance
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setActiveTab('quiz');
                      setActiveWordId(item.id);
                    }}
                    rightIcon={<ArrowRight className="w-3 h-3" />}
                    className="text-xs"
                  >
                    Test in Context
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* ── 4. Words in Context Quiz Mode ── */}
      {activeTab === 'quiz' && (
        <div className="space-y-5">
          <div className="p-4 rounded-xl bg-paper-2 border border-line text-xs sm:text-sm text-ink flex items-center justify-between">
            <div>
              <span className="font-semibold text-ink">Words in Context Simulation:</span> Choose the option that most precisely and logically completes the text based on tone, syntax, and collocational nuance.
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setQuizAnswers({});
                setQuizSubmitted({});
              }}
              className="text-xs shrink-0 ml-3"
            >
              Reset Quiz
            </Button>
          </div>

          <div className="space-y-4">
            {filteredWords.map((item, idx) => {
              const selected = quizAnswers[item.id];
              const submitted = quizSubmitted[item.id];
              const isCorrect = selected === item.quiz.correctLetter;

              return (
                <Card
                  key={item.id}
                  className="p-6 space-y-4 border-line hover:border-line-strong transition-all"
                >
                  <div className="flex items-center justify-between border-b border-line/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent">
                        Question {idx + 1}
                      </span>
                      <span className="text-xs text-ink-muted">·</span>
                      <span className="text-xs font-semibold text-ink">
                        Target Word: {item.word}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAskCosmoNuance(item)}
                      leftIcon={<Sparkles className="w-3.5 h-3.5 text-accent" />}
                      className="text-xs"
                    >
                      Ask Cosmo
                    </Button>
                  </div>

                  {/* Question Stem */}
                  <div className="text-sm sm:text-base text-ink font-display leading-relaxed">
                    {item.quiz.sentenceWithBlank}
                  </div>

                  {/* Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.quiz.options.map((opt) => {
                      const isOptionSelected = selected === opt.letter;
                      const isOptionCorrect = opt.letter === item.quiz.correctLetter;

                      let choiceClass = 'border-line bg-surface hover:border-line-strong text-ink';
                      if (submitted) {
                        if (isOptionCorrect) {
                          choiceClass = 'border-moss bg-moss/10 text-moss font-semibold';
                        } else if (isOptionSelected) {
                          choiceClass = 'border-berry bg-berry/10 text-berry font-semibold';
                        } else {
                          choiceClass = 'border-line/40 bg-surface/40 text-ink-muted opacity-60';
                        }
                      } else if (isOptionSelected) {
                        choiceClass = 'border-accent bg-accent/10 text-accent font-semibold ring-1 ring-accent/30';
                      }

                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          disabled={submitted}
                          onClick={() => handleSelectQuizOption(item.id, opt.letter)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${choiceClass}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono font-bold text-xs uppercase px-1.5 py-0.5 rounded bg-paper-2 border border-line">
                              {opt.letter}
                            </span>
                            <span>{opt.text}</span>
                          </div>
                          {submitted && isOptionCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-moss shrink-0" />
                          )}
                          {submitted && isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-berry shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Submission & Rationale */}
                  {!submitted ? (
                    <div className="flex items-center justify-end pt-2">
                      <Button
                        variant="accent"
                        size="sm"
                        disabled={!selected}
                        onClick={() => handleSubmitQuizOption(item.id)}
                      >
                        Check Answer
                      </Button>
                    </div>
                  ) : (
                    <div
                      className={`p-3.5 rounded-xl border text-xs leading-relaxed animate-fade-in ${
                        isCorrect
                          ? 'bg-moss/10 border-moss/30 text-moss'
                          : 'bg-berry/10 border-berry/30 text-berry'
                      }`}
                    >
                      <div className="font-bold mb-1">
                        {isCorrect ? 'Correct!' : `Incorrect. The correct choice is (${item.quiz.correctLetter}).`}
                      </div>
                      <p className="text-ink-2">
                        {item.quiz.explanation}
                      </p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
