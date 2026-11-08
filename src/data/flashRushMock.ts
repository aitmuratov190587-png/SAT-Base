export interface QuestionOption {
  id: string; // original id 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface MockQuestion {
  id: string;
  section: 'reading_writing' | 'math';
  module: 1 | 2;
  number: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number; // 60, 80, 100
  domain: string;
  skill: string;
  passage?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  equations?: string[];
  questionPrompt: string;
  options: QuestionOption[];
  correctAnswerId: string;
  explanation: string;
}

export const FLASH_RUSH_QUESTIONS: MockQuestion[] = [
  // ── SECTION 1: READING AND WRITING (10 QUESTIONS) ──
  {
    id: 'rw-1',
    section: 'reading_writing',
    module: 1,
    number: 1,
    difficulty: 'Easy',
    points: 60,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passage:
      'Because the archived letters of the 19th-century botanist were brittle and vulnerable to environmental degradation, the preservation team handled them with extreme _______ during the digitization process.',
    questionPrompt:
      'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'indifference' },
      { id: 'B', text: 'caution' },
      { id: 'C', text: 'haste' },
      { id: 'D', text: 'hostility' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The documents are described as "brittle and vulnerable," which logically requires the preservation team to act with "caution" (carefulness). Indifference, haste, and hostility contradict the need to protect delicate historic artifacts.',
  },
  {
    id: 'rw-2',
    section: 'reading_writing',
    module: 1,
    number: 2,
    difficulty: 'Easy',
    points: 60,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    passage:
      'During the solar eclipse, streetlights automatically illuminated across the city _______ many nocturnal animals briefly began their evening routines.',
    questionPrompt:
      'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      { id: 'A', text: 'city, and' },
      { id: 'B', text: 'city, so that' },
      { id: 'C', text: 'city and' },
      { id: 'D', text: 'city' },
    ],
    correctAnswerId: 'A',
    explanation:
      'The sentence contains two independent clauses ("streetlights automatically illuminated across the city" and "many nocturnal animals briefly began their evening routines"). Standard English requires a comma followed by a coordinating conjunction (", and") to link two independent clauses without creating a run-on sentence.',
  },
  {
    id: 'rw-3',
    section: 'reading_writing',
    module: 1,
    number: 3,
    difficulty: 'Easy',
    points: 60,
    domain: 'Craft and Structure',
    skill: 'Transitions',
    passage:
      'The desert pupfish can survive in geothermal pools where water temperatures exceed 100°F. _______, it can endure near-freezing temperatures during harsh desert winters, demonstrating remarkable physiological plasticity.',
    questionPrompt:
      'Which choice completes the text with the most logical transition?',
    options: [
      { id: 'A', text: 'However,' },
      { id: 'B', text: 'Likewise,' },
      { id: 'C', text: 'In contrast,' },
      { id: 'D', text: 'As a result,' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The second sentence provides an analogous, complementary example of the pupfish\'s extreme physiological endurance (surviving freezing waters, matching its ability to survive boiling geothermal pools). "Likewise" correctly signals this similarity between two examples.',
  },
  {
    id: 'rw-4',
    section: 'reading_writing',
    module: 1,
    number: 4,
    difficulty: 'Medium',
    points: 80,
    domain: 'Information and Ideas',
    skill: 'Central Ideas',
    passage:
      'Urban planning scholar Teresa Montoya argues that the economic vitality of mid-sized industrial cities is frequently mismeasured by traditional metrics such as commercial real estate values. According to Montoya, these indicators reflect speculative investments rather than sustainable community well-being. A more accurate appraisal requires tracking micro-enterprises, neighborhood civic organizations, and local employment retention rates — factors that reflect steady, distributed economic health rather than volatile asset bubbles.',
    questionPrompt: 'Which choice best states the main idea of the text?',
    options: [
      {
        id: 'A',
        text: 'Commercial real estate transactions provide the most reliable forecast for long-term municipal solvency.',
      },
      {
        id: 'B',
        text: 'Traditional economic metrics fail to reflect the true stability of mid-sized industrial cities, which is better evaluated through community-level indicators.',
      },
      {
        id: 'C',
        text: 'Mid-sized industrial cities face steeper economic declines than larger metropolitan areas due to speculative real estate investments.',
      },
      {
        id: 'D',
        text: 'Neighborhood civic organizations are primarily responsible for stabilizing municipal budgets in deindustrialized regions.',
      },
    ],
    correctAnswerId: 'B',
    explanation:
      'The passage contrasts misleading traditional metrics (commercial real estate) with community indicators (micro-enterprises, civic groups, retention rates) that better capture distributed economic health. Choice B accurately captures this central thesis.',
  },
  {
    id: 'rw-5',
    section: 'reading_writing',
    module: 1,
    number: 5,
    difficulty: 'Medium',
    points: 80,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    passage:
      'A team of geophysicists, analyzing seismic wave anomalies recorded along the subduction boundary, _______ discovered that the mantle transition zone contains far more trapped volatile water than previously estimated.',
    questionPrompt:
      'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      { id: 'A', text: 'have' },
      { id: 'B', text: 'has' },
      { id: 'C', text: 'are' },
      { id: 'D', text: 'were' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The simple grammatical subject of the sentence is the singular collective noun "A team" ("of geophysicists" is a prepositional phrase modifier). Therefore, it requires the singular auxiliary verb "has" discovered.',
  },
  {
    id: 'rw-6',
    section: 'reading_writing',
    module: 1,
    number: 6,
    difficulty: 'Medium',
    points: 80,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    passage:
      'Ecologist Dr. Liam Vance hypothesized that urban trees planted in isolated street pits experience significantly greater drought stress than trees planted in interconnected green corridors, primarily because fragmented root zones restrict soil moisture sharing via common mycorrhizal networks. To test this, Vance monitored pre-dawn leaf water potential (where lower, more negative values indicate greater water stress) in mature red oaks across both environments during an extended midsummer dry spell.',
    questionPrompt:
      'Which finding, if true, would most directly support Dr. Vance\'s hypothesis?',
    options: [
      {
        id: 'A',
        text: 'Red oaks in isolated street pits exhibited significantly lower pre-dawn leaf water potentials than red oaks in interconnected corridors.',
      },
      {
        id: 'B',
        text: 'Leaf water potentials remained identical across both groups of trees throughout the duration of the midsummer dry spell.',
      },
      {
        id: 'C',
        text: 'Trees in interconnected green corridors absorbed less total ground moisture because of increased competition among neighboring roots.',
      },
      {
        id: 'D',
        text: 'Isolated street pit trees displayed greater overall root mass development than trees growing in contiguous parkland soil.',
      },
    ],
    correctAnswerId: 'A',
    explanation:
      'The passage specifies that lower values indicate greater water stress. If trees in isolated street pits have lower water potentials, it directly corroborates Dr. Vance\'s hypothesis that they suffer greater drought stress.',
  },
  {
    id: 'rw-7',
    section: 'reading_writing',
    module: 1,
    number: 7,
    difficulty: 'Medium',
    points: 80,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    passage:
      'While the architectural firm initially maintained that its timber-frame stadium proposal was entirely practical, building regulators remained _______, pointing out that local fire codes explicitly prohibited mass timber structures of that scale.',
    questionPrompt:
      'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      { id: 'A', text: 'vindicated' },
      { id: 'B', text: 'dubitative' },
      { id: 'C', text: 'dubious' },
      { id: 'D', text: 'enthusiastic' },
    ],
    correctAnswerId: 'C',
    explanation:
      'The regulators questioned the feasibility because local fire codes prohibited mass timber. "Dubious" means hesitant or skeptical, accurately describing their attitude toward the claim that the project was practical.',
  },
  {
    id: 'rw-8',
    section: 'reading_writing',
    module: 1,
    number: 8,
    difficulty: 'Hard',
    points: 100,
    domain: 'Information and Ideas',
    skill: 'Inferences / Logic Completion',
    passage:
      'Philosophers of science often contrast reductionism — the premise that complex macroscopic phenomena can be fully explained by the behavior of their fundamental micro-constituents — with emergentism, which posits that novel macroscopic properties arise that are genuinely irreducible. While reductionist frameworks have proven exceptionally powerful in physical chemistry, their explanatory utility becomes problematic when applied to ecological trophic cascades. In an apex predator reintroduction, for instance, ecosystem restructuring is shaped by dynamic behavioral feedback loops across multiple trophic levels that cannot be deduced solely from the metabolic or genetic traits of individual organisms. Thus, treating trophic cascades strictly as aggregates of isolated component traits _______',
    questionPrompt: 'Which choice most logically completes the text?',
    options: [
      {
        id: 'A',
        text: 'validates the reductionist assumption that macroscopic systems mirror the fundamental properties of their constituent parts.',
      },
      {
        id: 'B',
        text: 'overlooks systemic interactions that determine the macroscopic behavior of the ecosystem.',
      },
      {
        id: 'C',
        text: 'demonstrates that individual metabolic characteristics are completely irrelevant to ecological modeling.',
      },
      {
        id: 'D',
        text: 'confirms that emergentist explanations are incompatible with empirical biological observation.',
      },
    ],
    correctAnswerId: 'B',
    explanation:
      'The text explains that trophic cascades involve multi-level dynamic feedback loops that cannot be derived from individual traits alone. Therefore, treating them only as aggregates of isolated traits ignores the systemic interactions that shape the ecosystem.',
  },
  {
    id: 'rw-9',
    section: 'reading_writing',
    module: 1,
    number: 9,
    difficulty: 'Hard',
    points: 100,
    domain: 'Information and Ideas',
    skill: 'Cross-Text Connections',
    passage:
      'Text 1:\nBehavioral economists have long championed automatic enrollment in corporate retirement plans as an unalloyed public good. By making participation the default option, companies leverage inertia to elevate employee enrollment rates from roughly 40% to upwards of 90%. Proponents maintain that default architecture systematically corrects the widespread human tendency to procrastinate on long-term financial security.\n\nText 2:\nFinancial analyst Elena Rostova cautions that default enrollment designs frequently produce unintended negative distortions. When enrolled automatically, the vast majority of employees never adjust the plan\'s conservative default contribution rates (typically 2% to 3%) or conservative asset allocation models. Over several decades, this "default anchoring" leaves employees with substantially less accumulated wealth than if they had been actively prompted to deliberate and select contribution rates matched to their actual retirement horizons.',
    questionPrompt:
      'Based on the texts, how would Elena Rostova (Text 2) most likely respond to the proponents\' view in Text 1?',
    options: [
      {
        id: 'A',
        text: 'By arguing that automatic enrollment fails to increase initial employee participation rates in retirement plans.',
      },
      {
        id: 'B',
        text: 'By contending that the psychological inertia leveraged by default enrollment ultimately locks participants into suboptimal savings trajectories.',
      },
      {
        id: 'C',
        text: 'By asserting that actively prompting employees always results in 100% participation across corporate retirement programs.',
      },
      {
        id: 'D',
        text: 'By disputing the idea that employees possess an innate tendency to procrastinate on personal financial planning.',
      },
    ],
    correctAnswerId: 'B',
    explanation:
      'While Text 1 celebrates inertia as a tool to boost participation, Rostova (Text 2) demonstrates that this same inertia anchors workers to inadequate contribution rates (2-3%), resulting in lower lifetime wealth.',
  },
  {
    id: 'rw-10',
    section: 'reading_writing',
    module: 1,
    number: 10,
    difficulty: 'Hard',
    points: 100,
    domain: 'Information and Ideas',
    skill: 'Rhetorical Synthesis',
    passage:
      'While researching historical linguistic evolution, a student collected the following notes on loanword assimilation in early modern trade dialects:\n\n• Language A (Maritime Malay) borrowed hundreds of naval technical terms from Portuguese between 1511 and 1640.\n• Morphological analysis indicates that 88% of these borrowings underwent immediate phonological adaptation to conform to indigenous phonetic constraints.\n• Language B (Ottoman Turkish) concurrently incorporated Persian administrative terminology, yet over 70% of these lexical items retained their original Persian phonology and orthography.\n• Linguists attribute this difference to the social prestige attached to Persian in elite Ottoman administrative courts, compared to the purely utilitarian nature of Portuguese maritime trade terms in Southeast Asia.',
    questionPrompt:
      'The student wants to contrast the linguistic treatment of borrowed terms between the two languages. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: [
      {
        id: 'A',
        text: 'While Language A rapidly modified Portuguese trade loanwords to match indigenous phonetics, Language B largely preserved original Persian phonology due to the elite prestige of Persian.',
      },
      {
        id: 'B',
        text: 'Between 1511 and 1640, Maritime Malay borrowed naval vocabulary from Portuguese, whereas Ottoman Turkish borrowed administrative terms from Persian.',
      },
      {
        id: 'C',
        text: 'Linguists study both Language A and Language B to examine how social prestige affects loanword assimilation.',
      },
      {
        id: 'D',
        text: 'Although 88% of Portuguese terms in Maritime Malay were phonologically adapted, Ottoman Turkish courts also required extensive specialized terminology.',
      },
    ],
    correctAnswerId: 'A',
    explanation:
      'Choice A directly contrasts how Language A adapted loanwords while Language B retained original forms, and incorporates the explanation regarding social prestige.',
  },

  // ── SECTION 2: MATH MODULE (10 QUESTIONS) ──
  {
    id: 'm-1',
    section: 'math',
    module: 2,
    number: 1,
    difficulty: 'Easy',
    points: 60,
    domain: 'Algebra',
    skill: 'Linear Equations in One Variable',
    equations: ['4(2x − 3) + 7 = 35'],
    questionPrompt: 'If 4(2x − 3) + 7 = 35, what is the value of 2x − 3?',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '7' },
      { id: 'C', text: '8' },
      { id: 'D', text: '11' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Subtract 7 from both sides: 4(2x − 3) = 28. Divide both sides by 4: 2x − 3 = 7. Notice that you do not need to solve for x, as the question directly asks for the value of (2x − 3).',
  },
  {
    id: 'm-2',
    section: 'math',
    module: 2,
    number: 2,
    difficulty: 'Easy',
    points: 60,
    domain: 'Advanced Math',
    skill: 'Operations on Polynomials',
    equations: ['(3x² + 5x − 7) − (x² − 2x + 4)'],
    questionPrompt:
      'Which of the following is equivalent to the expression (3x² + 5x − 7) − (x² − 2x + 4)?',
    options: [
      { id: 'A', text: '2x² + 3x − 11' },
      { id: 'B', text: '2x² + 7x − 11' },
      { id: 'C', text: '2x² + 7x − 3' },
      { id: 'D', text: '4x² + 3x − 3' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Distribute the negative sign across the second polynomial: 3x² + 5x − 7 − x² + 2x − 4. Combining like terms yields: (3 − 1)x² + (5 + 2)x + (−7 − 4) = 2x² + 7x − 11.',
  },
  {
    id: 'm-3',
    section: 'math',
    module: 2,
    number: 3,
    difficulty: 'Easy',
    points: 60,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Percentages and Proportions',
    questionPrompt:
      'A laboratory sample contains 450 grams of a chemical solution. If 36% of the solution by mass is distilled water, how many grams of distilled water are in the sample?',
    options: [
      { id: 'A', text: '125' },
      { id: 'B', text: '144' },
      { id: 'C', text: '162' },
      { id: 'D', text: '180' },
    ],
    correctAnswerId: 'C',
    explanation:
      'Multiply the total mass by the percentage of water: 450 × 0.36 = 162 grams.',
  },
  {
    id: 'm-4',
    section: 'math',
    module: 2,
    number: 4,
    difficulty: 'Medium',
    points: 80,
    domain: 'Algebra',
    skill: 'Systems of Linear Equations',
    equations: ['3x + 4y = 26', '6x − y = 7'],
    questionPrompt:
      'Consider the system of equations above. What is the value of the product xy?',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '10' },
      { id: 'C', text: '12' },
      { id: 'D', text: '15' },
    ],
    correctAnswerId: 'B',
    explanation:
      'From the second equation, y = 6x − 7. Substitute into the first equation: 3x + 4(6x − 7) = 26 => 3x + 24x − 28 = 26 => 27x = 54 => x = 2. Then y = 6(2) − 7 = 5. Therefore, xy = 2 × 5 = 10.',
  },
  {
    id: 'm-5',
    section: 'math',
    module: 2,
    number: 5,
    difficulty: 'Medium',
    points: 80,
    domain: 'Geometry and Trigonometry',
    skill: 'Circles and Coordinate Geometry',
    equations: ['x² + y² − 8x + 6y = 24'],
    questionPrompt:
      'In the xy-plane, a circle is defined by the equation x² + y² − 8x + 6y = 24. What is the length of the circle\'s radius?',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '7' },
      { id: 'C', text: '10' },
      { id: 'D', text: '49' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Complete the square for both x and y: (x² − 8x + 16) + (y² + 6y + 9) = 24 + 16 + 9 => (x − 4)² + (y + 3)² = 49. In standard form (x − h)² + (y − k)² = r², r² = 49, so the radius r = √49 = 7.',
  },
  {
    id: 'm-6',
    section: 'math',
    module: 2,
    number: 6,
    difficulty: 'Medium',
    points: 80,
    domain: 'Advanced Math',
    skill: 'Non-linear Functions & Rational Expressions',
    equations: ['f(x) = (2x² − 8) / (x² − 5x + 6)'],
    questionPrompt:
      'A rational function is given by f(x) = (2x² − 8) / (x² − 5x + 6). For which of the following values of x does f(x) have a removable discontinuity (a hole in the graph)?',
    options: [
      { id: 'A', text: 'x = −2' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x = 3' },
      { id: 'D', text: 'x = 4' },
    ],
    correctAnswerId: 'B',
    explanation:
      'Factor numerator and denominator: 2(x² − 4) / [(x − 2)(x − 3)] = [2(x − 2)(x + 2)] / [(x − 2)(x − 3)]. Because the factor (x − 2) cancels out from both the numerator and denominator, a removable discontinuity (hole) occurs at x = 2.',
  },
  {
    id: 'm-7',
    section: 'math',
    module: 2,
    number: 7,
    difficulty: 'Medium',
    points: 80,
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Two-Way Tables and Conditional Probability',
    tableData: {
      headers: ['Batch', 'Passed', 'Failed', 'Total'],
      rows: [
        ['Batch Alpha', 144, 16, 160],
        ['Batch Beta', 216, 24, 240],
        ['Total', 360, 40, 400],
      ],
    },
    questionPrompt:
      'If an item that passed inspection is selected at random from the quality control inventory, what is the probability that it came from Batch Alpha?',
    options: [
      { id: 'A', text: '0.36' },
      { id: 'B', text: '0.40' },
      { id: 'C', text: '0.45' },
      { id: 'D', text: '0.60' },
    ],
    correctAnswerId: 'B',
    explanation:
      'The sample space is restricted to items that passed inspection, which is 360 items in total. Among these, 144 came from Batch Alpha. Therefore, the conditional probability is 144 / 360 = 0.40.',
  },
  {
    id: 'm-8',
    section: 'math',
    module: 2,
    number: 8,
    difficulty: 'Hard',
    points: 100,
    domain: 'Advanced Math',
    skill: 'Quadratic Systems & Discriminants',
    equations: ['y = x² + kx + 13', 'y = 2x − 3'],
    questionPrompt:
      'For what positive value of k does the quadratic system above have exactly one real solution (x, y)?',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '8' },
      { id: 'C', text: '10' },
      { id: 'D', text: '12' },
    ],
    correctAnswerId: 'C',
    explanation:
      'Equate both expressions for y: x² + kx + 13 = 2x − 3 => x² + (k − 2)x + 16 = 0. For exactly one real solution, the discriminant must be zero: b² − 4ac = 0 => (k − 2)² − 4(1)(16) = 0 => (k − 2)² = 64. Thus k − 2 = ±8. Since k must be positive, k − 2 = 8, which gives k = 10.',
  },
  {
    id: 'm-9',
    section: 'math',
    module: 2,
    number: 9,
    difficulty: 'Hard',
    points: 100,
    domain: 'Geometry and Trigonometry',
    skill: 'Triangle Trigonometry & Similarity',
    questionPrompt:
      'In right triangle ABC, angle C is 90°. If sin(A) = 3/5 and the perimeter of triangle ABC is 72 units, what is the length of side BC (the side opposite angle A)?',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '18' },
      { id: 'C', text: '24' },
      { id: 'D', text: '30' },
    ],
    correctAnswerId: 'B',
    explanation:
      'In right triangle ABC with right angle at C, sin(A) = opposite / hypotenuse = BC / AB = 3/5. This represents a 3k-4k-5k right triangle where BC = 3k, AC = 4k, and AB = 5k. The perimeter is 3k + 4k + 5k = 12k = 72 => k = 6. The length of side BC is 3k = 3(6) = 18 units.',
  },
  {
    id: 'm-10',
    section: 'math',
    module: 2,
    number: 10,
    difficulty: 'Hard',
    points: 100,
    domain: 'Advanced Math',
    skill: 'Exponential Functions & Equivalent Forms',
    equations: [
      'N(t) = N₀ · (1/2)^(t/24)',
      'N(t) = N₀ · (1 − r)^(t/6)',
    ],
    questionPrompt:
      'A radioactive isotope decays according to N(t) = N₀ · (1/2)^(t/24), where t is time in hours and N₀ is the initial mass. If this relationship is rewritten in the equivalent form N(t) = N₀ · (1 − r)^(t/6), what is the value of r?',
    options: [
      { id: 'A', text: '1 − (1/2)^(1/4)' },
      { id: 'B', text: '(1/2)^(1/4)' },
      { id: 'C', text: '1 − (1/2)^4' },
      { id: 'D', text: '1/4' },
    ],
    correctAnswerId: 'A',
    explanation:
      'Rewrite the exponent t/24 in terms of t/6: (1/2)^(t/24) = (1/2)^((1/4) · (t/6)) = [(1/2)^(1/4)]^(t/6). Comparing with (1 − r)^(t/6) gives 1 − r = (1/2)^(1/4). Solving for r yields r = 1 − (1/2)^(1/4).',
  },
];

export interface ShuffledQuestion extends MockQuestion {
  shuffledOptions: {
    letter: 'A' | 'B' | 'C' | 'D';
    originalId: string;
    text: string;
  }[];
}

// Shuffles options for each session while keeping track of originalId
export function getShuffledFlashRushTest(): ShuffledQuestion[] {
  const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  return FLASH_RUSH_QUESTIONS.map((q) => {
    // Fisher-Yates shuffle on options copy
    const shuffled = [...q.options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return {
      ...q,
      shuffledOptions: shuffled.map((opt, idx) => ({
        letter: letters[idx],
        originalId: opt.id,
        text: opt.text,
      })),
    };
  });
}
