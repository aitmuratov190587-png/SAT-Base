export interface Question {
  id: string;
  domain: string; // e.g. 'Algebra', 'Geometry and Trigonometry', 'Craft and Structure', etc.
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questionText: string; // The stimulus/prompt
  options: string[]; // 4 multiple choice options
  correctAnswer: string; // The exact matching correct option
  explanation: string; // Detailed step-by-step rationale for AI Tutor
  section?: 'Math' | 'Reading & Writing';
}

export const SAT_QUESTIONS_MOCK: Question[] = [
  {
    id: 'sat-q1',
    domain: 'Craft and Structure',
    section: 'Reading & Writing',
    difficulty: 'Medium',
    questionText:
      "In 1899, composer Scott Joplin published 'Maple Leaf Rag,' a piano composition that achieved unprecedented commercial popularity. Rather than strictly observing 19th-century European march conventions, Joplin's syncopated basslines and polyrhythmic textures synthesized African American folk idioms with formal music theory, effectively _______ the burgeoning genre of ragtime in mainstream American culture.",
    options: [
      'A) subverting',
      'B) inaugurating',
      'C) deploring',
      'D) repudiating',
    ],
    correctAnswer: 'B) inaugurating',
    explanation:
      "Context clues like 'unprecedented commercial popularity' and introducing 'a burgeoning genre into mainstream American culture' demand a verb indicating initiation, launching, or establishing something new. 'Inaugurating' directly means to initiate or begin something notable. 'Subverting' (overthrowing), 'deploring' (strongly condemning), and 'repudiating' (rejecting) all carry contradictory negative connotations.",
  },
  {
    id: 'sat-q2',
    domain: 'Algebra',
    section: 'Math',
    difficulty: 'Easy',
    questionText:
      'A carbon-neutral autonomous delivery courier assesses an initial base access fee of $4.50 plus an incremental rate of $1.25 for every kilometer d traversed. If an e-commerce order incurs a total delivery surcharge of $22.00, which equation models this transaction, and what is the total distance traveled in kilometers?',
    options: [
      'A) 4.50 + 1.25d = 22.00; d = 14',
      'B) 1.25 + 4.50d = 22.00; d = 4.5',
      'C) 4.50d + 1.25 = 22.00; d = 3.9',
      'D) 1.25d - 4.50 = 22.00; d = 21.2',
    ],
    correctAnswer: 'A) 4.50 + 1.25d = 22.00; d = 14',
    explanation:
      'The linear cost model is Total = Base Fee + (Rate × Distance), which yields 4.50 + 1.25d = 22.00. Isolating 1.25d: 22.00 - 4.50 = 17.50. Dividing both sides by 1.25 gives d = 17.50 / 1.25 = 14 kilometers.',
  },
  {
    id: 'sat-q3',
    domain: 'Geometry and Trigonometry',
    section: 'Math',
    difficulty: 'Hard',
    questionText:
      'In the xy-plane, a circle is modeled by the polynomial equation x² + y² - 8x + 6y = 56. What are the coordinates of the center (h, k) and the length of the radius r of this circle?',
    options: [
      'A) Center: (-4, 3), Radius: 8',
      'B) Center: (4, -3), Radius: 9',
      'C) Center: (4, -3), Radius: 81',
      'D) Center: (-8, 6), Radius: √56',
    ],
    correctAnswer: 'B) Center: (4, -3), Radius: 9',
    explanation:
      'Group the terms and complete the square: (x² - 8x + 16) + (y² + 6y + 9) = 56 + 16 + 9. This simplifies to (x - 4)² + (y + 3)² = 81. According to standard circle equation (x - h)² + (y - k)² = r², the center is (h, k) = (4, -3) and the radius is r = √81 = 9.',
  },
  {
    id: 'sat-q4',
    domain: 'Information and Ideas',
    section: 'Reading & Writing',
    difficulty: 'Hard',
    questionText:
      'Bioacousticians studying humpback whales (Megaptera novaeangliae) discovered that novel acoustic song themes emerge in western Australian populations and iteratively disseminate eastward across the South Pacific basin over multiple seasons. The researchers hypothesized that this regional horizontal cultural transmission is actively catalyzed by itinerant males during migratory convergence at shared southern polar feeding grounds, rather than diffuse coastal wanderings.\n\nWhich finding, if true, would most directly substantiate the researchers\' hypothesis?',
    options: [
      'A) Eastern Pacific whale pods display the novel song themes months prior to their seasonal polar departure.',
      'B) Migrating males recorded along sub-Antarctic migratory corridors exhibit hybrid transitional song themes before those themes are documented in eastern breeding grounds.',
      'C) Female humpback whales remain at the high-latitude feeding grounds significantly longer than reproductive males do.',
      'D) Song variations occur simultaneously across all Southern Hemisphere populations regardless of distance or migration pathways.',
    ],
    correctAnswer:
      'B) Migrating males recorded along sub-Antarctic migratory corridors exhibit hybrid transitional song themes before those themes are documented in eastern breeding grounds.',
    explanation:
      "To substantiate that roving males transmit songs during polar convergence, empirical evidence must demonstrate that song themes appear en route to or at the polar corridor before reaching the eastern destination. Option B provides this direct causal link, proving chronological precedence along the proposed transmission vector.",
  },
  {
    id: 'sat-q5',
    domain: 'Standard English Conventions',
    section: 'Reading & Writing',
    difficulty: 'Medium',
    questionText:
      "Astronomers calibrating the James Webb Space Telescope's Near-Infrared Camera (NIRCam) observed high-redshift emissions from the earliest cosmic structures in the _______ deep-field resolution enables astrophysicists to inspect protogalactic formations dating to within 300 million years of the Big Bang.",
    options: [
      'A) universe, its',
      'B) universe; its',
      'C) universe its',
      'D) universe, and whose',
    ],
    correctAnswer: 'B) universe; its',
    explanation:
      "The passage consists of two complete independent clauses: 'Astronomers calibrating... observed high-redshift emissions...' and 'its deep-field resolution enables astrophysicists to inspect...'. A semicolon correctly separates two syntactically complete independent clauses without requiring a coordinating conjunction. Option A creates a comma splice error, C produces a run-on sentence, and D introduces an ungrammatical relative clause.",
  },
];
