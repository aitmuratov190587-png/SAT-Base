/**
 * SATBase Universal Knowledge Base — Cosmo AI Engine
 *
 * Comprehensive in-memory index codifying:
 * - All 4 SAT Math domains (Algebra, Advanced Math, PSDA, Geometry & Trigonometry)
 * - Official SAT Math Reference Sheet formulas & geometric theorems
 * - All 4 SAT Reading & Writing domains (Craft & Structure, Information & Ideas, SEC, Expression of Ideas)
 * - Test Strategies (Official Desmos tricks, pacing targets, elimination, guessing rules)
 * - SATBase Platform Guide (10x micro-scaled SA-ELO, FlashRush mock exams, Error Bank, 14-day Study Plan)
 * - Quick Action Pills catalog (universal & contextual practice pills)
 */

export type KnowledgeDomain = 'math' | 'reading-writing' | 'strategy' | 'platform';

export interface ReferenceFormula {
  id: string;
  name: string;
  category: '2D Geometry' | 'Right Triangles' | '3D Geometry' | 'Circle Theorems' | 'Algebra & Functions' | 'Statistics';
  latex: string;
  ascii: string;
  variables: Record<string, string>;
  description: string;
  usageTips?: string[];
  example?: string;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  domain: KnowledgeDomain;
  category: string;
  keywords: string[];
  summary: string;
  content: string;
  formulas?: string[];
  tips?: string[];
  commonTraps?: string[];
  relatedTopicIds?: string[];
}

export interface QuickActionPill {
  id: string;
  label: string;
  prompt: string;
  category: 'universal' | 'practice' | 'math' | 'reading-writing' | 'strategy' | 'platform';
  icon?: string;
  description?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. OFFICIAL SAT MATH REFERENCE SHEET FORMULAS & THEOREMS
// ─────────────────────────────────────────────────────────────────────────────

export const SAT_REFERENCE_FORMULAS: ReferenceFormula[] = [
  {
    id: 'formula-circle-area',
    name: 'Area of a Circle',
    category: '2D Geometry',
    latex: 'A = \\pi r^2',
    ascii: 'A = pi * r^2',
    variables: {
      A: 'Area of the circle',
      r: 'Radius of the circle (half the diameter)',
      '\\pi': 'Mathematical constant approximately 3.14159',
    },
    description: 'Calculates the 2D surface area enclosed by a circle of radius r.',
    usageTips: [
      'If given diameter d, divide by 2 first: r = d / 2.',
      'Leave in terms of \\pi unless the question asks for a rounded decimal.',
    ],
    example: 'For a circle with radius 4, Area = \\pi (4)^2 = 16\\pi.',
  },
  {
    id: 'formula-circle-circumference',
    name: 'Circumference of a Circle',
    category: '2D Geometry',
    latex: 'C = 2\\pi r = \\pi d',
    ascii: 'C = 2 * pi * r',
    variables: {
      C: 'Circumference (perimeter around the circle)',
      r: 'Radius',
      d: 'Diameter (2r)',
    },
    description: 'Calculates the distance around the outer perimeter of a circle.',
    usageTips: [
      'Arc length is a fractional portion of circumference: s = (\\theta / 360^\\circ) * 2\\pi r.',
    ],
    example: 'A circle of radius 5 has circumference C = 2\\pi(5) = 10\\pi.',
  },
  {
    id: 'formula-rectangle-area',
    name: 'Area of a Rectangle',
    category: '2D Geometry',
    latex: 'A = lw',
    ascii: 'A = l * w',
    variables: {
      A: 'Area',
      l: 'Length',
      w: 'Width',
    },
    description: 'Calculates the area enclosed by a rectangle or square (where l = w).',
    usageTips: [
      'Perimeter is P = 2l + 2w.',
      'Square diagonal formula: d = s\\sqrt{2}.',
    ],
    example: 'A rectangle of length 8 and width 3 has area A = 8 * 3 = 24.',
  },
  {
    id: 'formula-triangle-area',
    name: 'Area of a Triangle',
    category: '2D Geometry',
    latex: 'A = \\frac{1}{2}bh',
    ascii: 'A = 1/2 * b * h',
    variables: {
      A: 'Area of triangle',
      b: 'Base length',
      h: 'Perpendicular height to base',
    },
    description: 'Calculates the area of any 2D triangle given base and perpendicular height.',
    usageTips: [
      'Height must be perpendicular (90 degrees) to the chosen base.',
      'For right triangles, base and height are simply the two perpendicular legs.',
      'Equilateral triangle area formula: A = (s^2 * \\sqrt{3}) / 4.',
    ],
    example: 'A triangle with base 10 and perpendicular height 6 has area A = 0.5 * 10 * 6 = 30.',
  },
  {
    id: 'formula-pythagorean',
    name: 'Pythagorean Theorem',
    category: 'Right Triangles',
    latex: 'c^2 = a^2 + b^2 \\iff c = \\sqrt{a^2 + b^2}',
    ascii: 'c^2 = a^2 + b^2',
    variables: {
      a: 'First leg of right triangle',
      b: 'Second leg of right triangle',
      c: 'Hypotenuse (longest side opposite the 90 degree angle)',
    },
    description: 'Fundamental relationship between the three sides of any right triangle.',
    usageTips: [
      'Only applies to right-angled triangles.',
      'Common SAT Pythagorean triples: 3-4-5, 5-12-13, 7-24-25, 8-15-17 (and their multiples like 6-8-10).',
    ],
    example: 'If legs are 6 and 8, c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10.',
  },
  {
    id: 'formula-special-right-30-60-90',
    name: 'Special Right Triangle: 30-60-90',
    category: 'Right Triangles',
    latex: 'x : x\\sqrt{3} : 2x',
    ascii: '30-60-90 ratio: x : x*sqrt(3) : 2x',
    variables: {
      x: 'Short leg (opposite the 30 degree angle)',
      'x\\sqrt{3}': 'Long leg (opposite the 60 degree angle)',
      '2x': 'Hypotenuse (opposite the 90 degree angle)',
    },
    description: 'Side length proportions for right triangles with acute angles 30 and 60 degrees.',
    usageTips: [
      'Always identify the short leg x first.',
      'Hypotenuse is always exactly double the short leg: c = 2x.',
      'Long leg is short leg multiplied by \\sqrt{3}.',
    ],
    example: 'If side opposite 30 deg is 5, long leg is 5\\sqrt{3} and hypotenuse is 10.',
  },
  {
    id: 'formula-special-right-45-45-90',
    name: 'Special Right Triangle: 45-45-90 (Isosceles Right)',
    category: 'Right Triangles',
    latex: 's : s : s\\sqrt{2}',
    ascii: '45-45-90 ratio: s : s : s*sqrt(2)',
    variables: {
      s: 'Both congruent legs (opposite the 45 degree angles)',
      's\\sqrt{2}': 'Hypotenuse (opposite the 90 degree angle)',
    },
    description: 'Side proportions for isosceles right triangles formed by dividing a square along its diagonal.',
    usageTips: [
      'Both legs are equal in length: a = b = s.',
      'To find a leg when given hypotenuse h: s = h / \\sqrt{2} = (h\\sqrt{2}) / 2.',
    ],
    example: 'If legs are 7, hypotenuse is 7\\sqrt{2}.',
  },
  {
    id: 'formula-rect-prism-volume',
    name: 'Volume of a Rectangular Prism',
    category: '3D Geometry',
    latex: 'V = lwh',
    ascii: 'V = l * w * h',
    variables: {
      V: 'Volume',
      l: 'Length',
      w: 'Width',
      h: 'Height',
    },
    description: 'Calculates the 3D capacity of a box or rectangular solid.',
    usageTips: [
      'Total surface area of rectangular prism: SA = 2lw + 2lh + 2wh.',
      'Space diagonal inside a box: d = \\sqrt{l^2 + w^2 + h^2}.',
    ],
    example: 'A box with length 5, width 4, and height 3 has volume V = 5 * 4 * 3 = 60.',
  },
  {
    id: 'formula-cylinder-volume',
    name: 'Volume of a Right Circular Cylinder',
    category: '3D Geometry',
    latex: 'V = \\pi r^2 h',
    ascii: 'V = pi * r^2 * h',
    variables: {
      V: 'Volume of cylinder',
      r: 'Radius of circular base',
      h: 'Perpendicular height',
    },
    description: 'Calculates the volume of a cylinder (base area multiplied by height).',
    usageTips: [
      'Notice base area is circle area \\pi r^2.',
      'Lateral surface area (excluding caps): A_{lat} = 2\\pi rh.',
    ],
    example: 'A cylinder with radius 3 and height 10 has volume V = \\pi (3)^2(10) = 90\\pi.',
  },
  {
    id: 'formula-sphere-volume',
    name: 'Volume of a Sphere',
    category: '3D Geometry',
    latex: 'V = \\frac{4}{3}\\pi r^3',
    ascii: 'V = (4/3) * pi * r^3',
    variables: {
      V: 'Volume of sphere',
      r: 'Radius of sphere',
    },
    description: 'Calculates the 3D volume enclosed by a spherical ball.',
    usageTips: [
      'Remember the radius is cubed (r^3), not squared.',
      'Surface area of sphere formula: SA = 4\\pi r^2.',
      'Hemisphere volume is half: V = \\frac{2}{3}\\pi r^3.',
    ],
    example: 'A sphere with radius 3 has volume V = (4/3)\\pi(27) = 36\\pi.',
  },
  {
    id: 'formula-cone-volume',
    name: 'Volume of a Right Circular Cone',
    category: '3D Geometry',
    latex: 'V = \\frac{1}{3}\\pi r^2 h',
    ascii: 'V = (1/3) * pi * r^2 * h',
    variables: {
      V: 'Volume of cone',
      r: 'Radius of circular base',
      h: 'Perpendicular height',
    },
    description: 'Calculates the volume of a cone (exactly one-third of a cylinder with identical base and height).',
    usageTips: [
      'Always use perpendicular height h, NOT slant height l.',
      'Relationship between slant height l, radius r, and height h: l^2 = r^2 + h^2.',
    ],
    example: 'A cone with radius 6 and height 8 has volume V = (1/3)\\pi(36)(8) = 96\\pi.',
  },
  {
    id: 'formula-pyramid-volume',
    name: 'Volume of a Rectangular Pyramid',
    category: '3D Geometry',
    latex: 'V = \\frac{1}{3}lwh = \\frac{1}{3}Bh',
    ascii: 'V = (1/3) * l * w * h',
    variables: {
      V: 'Volume of pyramid',
      l: 'Base length',
      w: 'Base width',
      h: 'Perpendicular vertical height',
      B: 'Base area (l * w)',
    },
    description: 'Calculates the 3D volume of a pyramid with rectangular or polygonal base.',
    usageTips: [
      'Applies to any pyramid: Volume = (1/3) * Base Area * Height.',
    ],
    example: 'A pyramid with square base 6x6 and height 10 has volume V = (1/3)(36)(10) = 120.',
  },
  {
    id: 'formula-circle-theorems',
    name: 'Circle Angle & Degree/Radian Theorems',
    category: 'Circle Theorems',
    latex: '360^\\circ = 2\\pi \\text{ radians}; \\quad \\text{Arc } s = r\\theta; \\quad \\text{Sector } A = \\frac{1}{2}r^2\\theta',
    ascii: '360 deg = 2*pi rad; Arc s = r*theta',
    variables: {
      '\\theta': 'Central angle (radians or degrees)',
      s: 'Arc length along circumference',
      r: 'Radius of circle',
      A: 'Sector area',
    },
    description: 'Key angular facts: total degrees in circle = 360, total radians = 2pi, sum of triangle angles = 180.',
    usageTips: [
      'To convert degrees to radians: multiply by (\\pi / 180^\\circ).',
      'To convert radians to degrees: multiply by (180^\\circ / \\pi).',
      'Inscribed angle theorem: an inscribed angle is exactly half the central angle intercepting the same arc.',
    ],
    example: 'An angle of 90 degrees equals 90 * (\\pi / 180) = \\pi / 2 radians.',
  },
  {
    id: 'formula-quadratic-formula',
    name: 'Quadratic Formula & Discriminant',
    category: 'Algebra & Functions',
    latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}; \\quad \\Delta = b^2 - 4ac',
    ascii: 'x = (-b +- sqrt(b^2 - 4ac)) / (2a); Discriminant = b^2 - 4ac',
    variables: {
      a: 'Quadratic coefficient (a \\neq 0)',
      b: 'Linear coefficient',
      c: 'Constant term',
      '\\Delta': 'Discriminant (b^2 - 4ac)',
    },
    description: 'Solves any quadratic equation ax^2 + bx + c = 0 and determines number and nature of roots.',
    usageTips: [
      'If \\Delta > 0: two distinct real solutions (two x-intercepts).',
      'If \\Delta = 0: exactly one real solution / repeated root (vertex touches x-axis).',
      'If \\Delta < 0: zero real solutions (two complex conjugate roots, no x-intercepts).',
      'Vertex x-coordinate formula: x = -b / (2a).',
    ],
    example: 'For x^2 - 6x + 9 = 0: \\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0, so 1 root: x = 3.',
  },
  {
    id: 'formula-trig-soh-cah-toa',
    name: 'Right Triangle Trigonometry (SOH-CAH-TOA) & Co-Function Identity',
    category: 'Right Triangles',
    latex: '\\sin\\theta = \\frac{O}{H}, \\quad \\cos\\theta = \\frac{A}{H}, \\quad \\tan\\theta = \\frac{O}{A}; \\quad \\sin(x^\\circ) = \\cos(90^\\circ - x^\\circ)',
    ascii: 'sin = O/H, cos = A/H, tan = O/A; sin(x) = cos(90 - x)',
    variables: {
      O: 'Opposite side relative to angle',
      A: 'Adjacent side relative to angle',
      H: 'Hypotenuse (opposite 90 deg angle)',
      '\\theta': 'Acute angle in right triangle',
    },
    description: 'Fundamental trigonometric ratios and complementary angle identities frequently tested on the SAT.',
    usageTips: [
      'Complementary angle identity: if sin(A) = cos(B) in right triangle, then A + B = 90 degrees.',
      'tan(\\theta) = sin(\\theta) / cos(\\theta).',
    ],
    example: 'If \\sin(3x - 10^\\circ) = \\cos(2x + 25^\\circ), then (3x - 10) + (2x + 25) = 90, so 5x + 15 = 90 => x = 15.',
  },
  {
    id: 'formula-circle-equation',
    name: 'Standard Equation of a Circle',
    category: 'Circle Theorems',
    latex: '(x - h)^2 + (y - k)^2 = r^2',
    ascii: '(x - h)^2 + (y - k)^2 = r^2',
    variables: {
      '(h, k)': 'Center coordinates of the circle',
      r: 'Radius of the circle (r > 0)',
      'r^2': 'Square of the radius',
    },
    description: 'Cartesian equation representing all points (x, y) at constant distance r from center (h, k).',
    usageTips: [
      'Watch signs: (x + 3)^2 means h = -3, not +3.',
      'The number on the right is r^2, not r! Take the square root to get the radius.',
      'If given general form x^2 + y^2 + Dx + Ey + F = 0, complete the square for both x and y.',
    ],
    example: 'For (x - 2)^2 + (y + 5)^2 = 49: center is (2, -5) and radius is \\sqrt{49} = 7.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. COMPREHENSIVE SAT CURRICULUM TOPICS (MATH & READING/WRITING)
// ─────────────────────────────────────────────────────────────────────────────

export const KNOWLEDGE_TOPICS: KnowledgeItem[] = [
  // ── Math: Algebra ──
  {
    id: 'math-alg-linear-one',
    title: 'Linear Equations in One Variable',
    domain: 'math',
    category: 'Algebra',
    keywords: ['linear equation', 'one variable', 'isolate', 'solution', 'no solution', 'infinite solutions', 'like terms'],
    summary: 'Solving first-degree equations ax + b = c, combining like terms, and analyzing solution count (0, 1, or infinitely many).',
    content: `Linear equations in one variable involve isolating the variable using inverse operations.
• **Standard form**: $ax + b = c$.
• **Single solution**: $x = \\frac{c - b}{a}$ when $a \\neq 0$.
• **No solution**: When variable terms cancel ($0x = k$ where $k \\neq 0$, e.g., $5 = 8$). Lines would be parallel.
• **Infinitely many solutions (identity)**: When both sides simplify to the exact same expression ($0x = 0$, e.g., $3x + 4 = 3x + 4$).`,
    formulas: ['$ax + b = c$', '$0x = k \\implies \\text{no solution}$', '$0x = 0 \\implies \\text{infinite solutions}$'],
    tips: [
      'Clear fractions early by multiplying the entire equation by the least common denominator.',
      'For questions asking "for what value of k does the equation have no solution", match coefficients of x on both sides while ensuring constant terms differ.',
    ],
    commonTraps: [
      'Sign errors when distributing negative numbers across parentheses, e.g. -2(x - 4) is -2x + 8.',
      'Confusing no solution (false statement like 0 = 5) with x = 0 (which is a valid single solution).',
    ],
    relatedTopicIds: ['m-alg-1', 'math-alg-1'],
  },
  {
    id: 'math-alg-linear-two',
    title: 'Linear Equations in Two Variables & Slope',
    domain: 'math',
    category: 'Algebra',
    keywords: ['slope', 'slope-intercept', 'rate of change', 'intercept', 'standard form', 'point-slope', 'parallel', 'perpendicular'],
    summary: 'Mastering linear relations y = mx + b, calculating slope, and finding parallel and perpendicular lines.',
    content: `A linear equation in two variables graphs as a straight line in the coordinate plane.
• **Slope-intercept form**: $y = mx + b$, where $m$ is slope (rate of change) and $b$ is the $y$-intercept $(0, b)$.
• **Slope formula**: $m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$.
• **Standard form**: $Ax + By = C$, where slope is $m = -\\frac{A}{B}$ and $y$-intercept is $(0, \\frac{C}{B})$.
• **Point-slope form**: $y - y_1 = m(x - x_1)$.
• **Parallel lines**: Have equal slopes ($m_1 = m_2$) and different $y$-intercepts.
• **Perpendicular lines**: Have opposite reciprocal slopes ($m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$).`,
    formulas: ['$y = mx + b$', '$m = \\frac{y_2 - y_1}{x_2 - x_1}$', '$Ax + By = C$', '$m_1 \\cdot m_2 = -1$'],
    tips: [
      'In word problems, $m$ represents the per-unit rate of change, while $b$ represents the flat fee or initial value at $x = 0$.',
      'Horizontal lines have slope $m = 0$ ($y = k$); vertical lines have undefined slope ($x = h$).',
    ],
    commonTraps: [
      'Inverting the slope formula (putting $\\Delta x$ over $\\Delta y$). Always remember: rise over run.',
      'Forgetting to negate when converting $Ax + By = C$ to slope: $m = -A/B$.',
    ],
    relatedTopicIds: ['m-alg-2', 'm-alg-3', 'math-alg-2', 'math-alg-3'],
  },
  {
    id: 'math-alg-systems',
    title: 'Systems of Two Linear Equations',
    domain: 'math',
    category: 'Algebra',
    keywords: ['systems of equations', 'elimination', 'substitution', 'intersections', 'infinite solutions', 'no solution', 'parallel'],
    summary: 'Solving pairs of linear equations via substitution, elimination, or Desmos graphing, and identifying zero, one, or infinite solutions.',
    content: `A system of two linear equations represents two lines on a plane.
• **1 unique solution**: Lines intersect at a single point $(x, y)$. Slopes are distinct ($m_1 \\neq m_2$).
• **No solution**: Lines are parallel and never intersect. Slopes are identical ($m_1 = m_2$), but $y$-intercepts differ ($b_1 \\neq b_2$).
• **Infinitely many solutions**: Lines are coincident (the same line). Both slopes and $y$-intercepts are identical ($m_1 = m_2, b_1 = b_2$).

**Methods**:
1. **Elimination**: Multiply one or both equations to cancel one variable when added.
2. **Substitution**: Isolate a variable with coefficient 1 and substitute into the second equation.
3. **Desmos**: Type both equations directly into Desmos and click the point of intersection!`,
    formulas: [
      '\\text{No solution: } \\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}',
      '\\text{Infinite solutions: } \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}',
    ],
    tips: [
      'On Digital SAT, plug both equations straight into the Desmos calculator to find the intersection point in 5 seconds.',
      'For "no solution" questions with $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$, set $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$.',
    ],
    commonTraps: [
      'Not solving for what the question asks: SAT often asks for $x + y$ or $2x - y$, NOT just $x$.',
    ],
    relatedTopicIds: ['m-alg-4', 'math-alg-4'],
  },
  {
    id: 'math-alg-inequalities',
    title: 'Linear Inequalities and Systems of Inequalities',
    domain: 'math',
    category: 'Algebra',
    keywords: ['inequality', 'shading', 'boundary line', 'feasible region', 'flip sign', 'system of inequalities'],
    summary: 'Solving, graphing, and analyzing linear inequalities, boundary conditions, and solution test points.',
    content: `Linear inequalities divide the Cartesian plane into half-planes separated by a boundary line.
• **Boundary line**: Solid for $\\le$ or $\\ge$; dashed for $<$ or $>$.
• **Golden rule**: When multiplying or dividing both sides by a negative number, FLIP the inequality sign ($< \\leftrightarrow >$).
• **Testing regions**: Plug in test point $(0, 0)$ (if not on boundary). If $(0,0)$ makes the inequality true, shade the side containing $(0,0)$.
• **Systems of inequalities**: The solution set is the overlapping shaded region.`,
    formulas: ['$y > mx + b \\implies \\text{dashed line, shade above}$', '$y \\le mx + b \\implies \\text{solid line, shade below}$'],
    tips: [
      'On Desmos, type the inequality exactly as written (e.g. $y \\ge 2x - 3$), and Desmos will automatically render the correct dashed/solid line and shaded half-plane.',
    ],
    commonTraps: [
      'Forgetting to reverse the inequality direction when dividing by a negative value.',
    ],
    relatedTopicIds: ['m-alg-5', 'math-alg-5'],
  },

  // ── Math: Advanced Math ──
  {
    id: 'math-adv-quadratics',
    title: 'Quadratic Equations, Forms & Discriminant',
    domain: 'math',
    category: 'Advanced Math',
    keywords: ['quadratic', 'parabola', 'vertex form', 'factored form', 'discriminant', 'roots', 'zeros', 'maximum', 'minimum'],
    summary: 'The 3 key quadratic forms (vertex, factored, standard), discriminant rules, vertex coordinates, and parabolic symmetry.',
    content: `Quadratic functions graph as parabolas with a vertical axis of symmetry.
• **Standard form**: $y = ax^2 + bx + c$.
  - Axis of symmetry: $x = -\\frac{b}{2a}$.
  - $y$-intercept is $(0, c)$. Parabola opens upward if $a > 0$, downward if $a < 0$.
• **Vertex form**: $y = a(x - h)^2 + k$.
  - Vertex is $(h, k)$. Minimum value is $k$ (if $a > 0$); Maximum value is $k$ (if $a < 0$).
• **Factored form**: $y = a(x - p)(x - q)$.
  - $x$-intercepts (roots/zeros) are $(p, 0)$ and $(q, 0)$.
  - Axis of symmetry is halfway between roots: $x = \\frac{p + q}{2}$.
• **Discriminant**: $\\Delta = b^2 - 4ac$.
  - $\\Delta > 0$: 2 real solutions.
  - $\\Delta = 0$: 1 real solution (tangent to $x$-axis).
  - $\\Delta < 0$: 0 real solutions (does not cross $x$-axis).`,
    formulas: [
      'x = -\\frac{b}{2a}',
      'y = a(x - h)^2 + k',
      'y = a(x - p)(x - q)',
      '\\Delta = b^2 - 4ac',
    ],
    tips: [
      'When the question asks which equation reveals the minimum or maximum as a constant or coefficient, choose vertex form.',
      'When the question asks which reveals the zeros or x-intercepts, choose factored form.',
    ],
    commonTraps: [
      'Signs in vertex form: in $y = 3(x + 4)^2 - 5$, the vertex is $(-4, -5)$, NOT $(+4, -5)$.',
    ],
    relatedTopicIds: ['m-adv-1', 'm-adv-2', 'm-adv-3', 'math-adv-1', 'math-adv-2', 'math-adv-3'],
  },
  {
    id: 'math-adv-exponents-radicals',
    title: 'Exponents, Radicals & Exponential Functions',
    domain: 'math',
    category: 'Advanced Math',
    keywords: ['exponents', 'radicals', 'exponential growth', 'decay', 'power rules', 'half-life', 'fractional exponents'],
    summary: 'Exponent product/quotient/power laws, converting rational exponents x^(m/n), and modeling exponential growth y = a(1 + r)^t.',
    content: `Rules of exponents and exponential models are central to Advanced Math on the SAT.
• **Product rule**: $x^a \\cdot x^b = x^{a+b}$.
• **Quotient rule**: $\\frac{x^a}{x^b} = x^{a-b}$.
• **Power rule**: $(x^a)^b = x^{ab}$.
• **Negative exponent**: $x^{-a} = \\frac{1}{x^a}$.
• **Rational exponent**: $x^{\\frac{m}{n}} = \\sqrt[n]{x^m} = (\\sqrt[n]{x})^m$.
• **Exponential growth/decay**: $y = a(1 \\pm r)^t = ab^t$.
  - $a$ is initial amount (at $t = 0$).
  - $b > 1$ represents growth (growth rate $r = b - 1$).
  - $0 < b < 1$ represents decay (decay rate $r = 1 - b$).`,
    formulas: ['$x^{\\frac{m}{n}} = \\sqrt[n]{x^m}$', '$y = a(1 + r)^t$', '$y = a(1 - r)^t$'],
    tips: [
      'To convert time periods (e.g. population doubles every 5 years): $y = a(2)^{\\frac{t}{5}}$.',
      'When solving equations with exponents like $2^{3x} = 8^{x-1}$, express both sides with the same base: $8 = 2^3$.',
    ],
    commonTraps: [
      'Confusing $(x^a)^b = x^{ab}$ with $x^a \\cdot x^b = x^{a+b}$.',
      'Thinking $a^0 = 0$; remember any nonzero number raised to the zero power is 1 ($a^0 = 1$).',
    ],
    relatedTopicIds: ['m-adv-1', 'math-adv-1'],
  },

  // ── Math: Problem-Solving and Data Analysis (PSDA) ──
  {
    id: 'math-psda-percentages',
    title: 'Percentages, Ratios, Rates & Proportions',
    domain: 'math',
    category: 'Problem-Solving and Data Analysis',
    keywords: ['percentage', 'percent change', 'ratio', 'unit rate', 'conversion', 'proportions', 'increase', 'decrease'],
    summary: 'Mastering unit conversions, percent change formulas, successive percentage changes, and dimensional analysis.',
    content: `PSDA questions test proportional thinking, rates, and percentage manipulation.
• **Percent change formula**: $\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%$.
• **Percent multipliers**:
  - Increase by $p\\%$: multiply by $(1 + \\frac{p}{100})$ (e.g., $+20\\% \\implies \\times 1.20$).
  - Decrease by $p\\%$: multiply by $(1 - \\frac{p}{100})$ (e.g., $-15\\% \\implies \\times 0.85$).
• **Successive changes**: An item increased by 20% then discounted by 20% does NOT return to original price: $1.20 \\times 0.80 = 0.96$ (a 4% net loss).
• **Unit conversion**: Use conversion factors where units cancel diagonally: $\\text{miles} \\times \\frac{\\text{feet}}{\\text{mile}} \\times \\frac{\\text{inches}}{\\text{foot}}$.`,
    formulas: [
      '\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%',
      '\\text{Multiplier} = 1 \\pm \\frac{p}{100}',
    ],
    tips: [
      'Always identify the base ("of what?") in percentage questions. Percent of X means X is the denominator.',
    ],
    commonTraps: [
      'Dividing by the new value instead of the original/old value in percent change calculations.',
      'Adding successive percentages directly (e.g. $+10\\%$ then $+10\\%$ is $+21\\%$, not $+20\\%$).',
    ],
    relatedTopicIds: ['m-dat-1', 'm-dat-2', 'math-psa-1', 'math-psa-2'],
  },
  {
    id: 'math-psda-statistics',
    title: 'One-Variable Statistics & Two-Variable Data Models',
    domain: 'math',
    category: 'Problem-Solving and Data Analysis',
    keywords: ['mean', 'median', 'mode', 'standard deviation', 'range', 'outlier', 'scatterplots', 'line of best fit', 'residuals'],
    summary: 'Measures of center and spread, outlier resistance, line of best fit interpretations, and residuals.',
    content: `Statistics on the SAT focuses on conceptual understanding of data distributions and models.
• **Measures of Center**:
  - **Mean**: Arithmetic average (sensitive to outliers).
  - **Median**: Middle value when ordered (resistant/robust to outliers).
• **Outlier effect**:
  - A high outlier pulls the mean UP, while median stays nearly unchanged (Mean > Median).
  - A low outlier pulls the mean DOWN (Mean < Median).
• **Measures of Spread**:
  - **Range**: $\\text{Max} - \\text{Min}$.
  - **Standard Deviation**: Measure of how spread out data values are around the mean. Larger spread = larger standard deviation.
• **Scatterplots & Line of Best Fit**:
  - Slope represents predicted rate of change of $y$ per 1 unit increase in $x$.
  - Residual: $\\text{Residual} = \\text{Observed } y - \\text{Predicted } y$. A point above line has positive residual.`,
    formulas: ['\\text{Mean} = \\frac{\\sum x}{n}', '\\text{Residual} = y_{\\text{actual}} - y_{\\text{predicted}}'],
    tips: [
      'You do NOT need to calculate standard deviation by hand on the SAT; just compare which dataset is more clustered versus more spread out.',
    ],
    commonTraps: [
      'Assuming that adding a value to a dataset always increases the mean. It only increases the mean if the new value is greater than the current mean.',
    ],
    relatedTopicIds: ['m-dat-3', 'm-dat-4', 'math-psa-3', 'math-psa-4'],
  },
  {
    id: 'math-psda-probability-studies',
    title: 'Probability, Sampling, Margin of Error & Study Types',
    domain: 'math',
    category: 'Problem-Solving and Data Analysis',
    keywords: ['probability', 'conditional probability', 'margin of error', 'confidence interval', 'random sample', 'observational study', 'experiment', 'causation'],
    summary: 'Conditional probability from two-way tables, random sampling generalization, margin of error rules, and correlation vs causation.',
    content: `Understanding experimental design and probability on the SAT:
• **Conditional probability**: $P(A \\mid B) = \\frac{\\text{Count in } A \\text{ and } B}{\\text{Total in Condition } B}$.
  - In two-way tables, identify the subgroup specified in "given that" or "of the students who...". This becomes your denominator!
• **Random sampling & Generalization**:
  - A sample must be **randomly selected** from a population to generalize findings to that entire population.
  - Results can only be generalized to the population from which the sample was drawn (e.g. students at School X cannot generalize to all high schoolers nationwide).
• **Margin of Error & Sample Size**:
  - Margin of error depends inversely on sample size: **Larger sample size $\\implies$ smaller margin of error**.
  - A confidence interval is: $\\text{Estimate} \\pm \\text{Margin of Error}$.
• **Observational Studies vs Randomized Experiments**:
  - **Observational study**: Shows **association / correlation ONLY**. CANNOT prove causation due to confounding variables.
  - **Randomized controlled experiment**: With random assignment to treatment/control groups, CAN establish **cause-and-effect causation**.`,
    formulas: [
      'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}',
      '\\text{Confidence Interval} = \\bar{x} \\pm \\text{MOE}',
    ],
    tips: [
      'Look for the words "random assignment". If treatments were randomly assigned, choose the answer that states a causal claim. If subjects were merely observed, choose the answer that states association only.',
    ],
    commonTraps: [
      'Selecting an answer claiming "X causes Y" when the study was only observational.',
      'Using the grand total table denominator instead of the row/column condition denominator in conditional probability.',
    ],
    relatedTopicIds: ['m-dat-5', 'm-dat-6', 'm-dat-7', 'math-psa-5', 'math-psa-6'],
  },

  // ── Math: Geometry & Trigonometry ──
  {
    id: 'math-geo-circles-theorems',
    title: 'Circle Equations, Arc Length & Sector Area',
    domain: 'math',
    category: 'Geometry and Trigonometry',
    keywords: ['circle', 'arc length', 'sector area', 'radians', 'inscribed angle', 'tangent line', 'completing the square'],
    summary: 'Standard circle form (x-h)^2 + (y-k)^2 = r^2, radian conversions, arc length s = r*theta, and circle angle theorems.',
    content: `Circles appear frequently in both Module 1 and Module 2 Math.
• **Standard form**: $(x - h)^2 + (y - k)^2 = r^2$, center is $(h, k)$, radius is $r$.
• **Completing the square**: For $x^2 + y^2 - 6x + 8y = 0$:
  - $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 9 + 16 \\implies (x - 3)^2 + (y + 4)^2 = 25$. Center $(3, -4)$, radius $r = 5$.
• **Arc length**: $s = \\frac{\\theta^\\circ}{360^\\circ} \\cdot 2\\pi r = r\\theta_{\\text{rad}}$.
• **Sector area**: $A = \\frac{\\theta^\\circ}{360^\\circ} \\cdot \\pi r^2 = \\frac{1}{2}r^2\\theta_{\\text{rad}}$.
• **Tangent line property**: A line tangent to a circle is always perpendicular ($90^\\circ$) to the radius drawn to the point of tangency.
• **Inscribed angle theorem**: An inscribed angle has measure equal to half its intercepted arc. A triangle inscribed in a semicircle with diameter as hypotenuse is ALWAYS a right triangle ($90^\\circ$).`,
    formulas: [
      '(x - h)^2 + (y - k)^2 = r^2',
      's = r\\theta',
      'A_{\\text{sector}} = \\frac{1}{2}r^2\\theta',
    ],
    tips: [
      'Enter general circle equations directly into Desmos! Desmos will plot the circle, and you can visually click the center and read the radius.',
    ],
    commonTraps: [
      'Taking the right-hand constant as radius instead of square root of radius.',
    ],
    relatedTopicIds: ['m-geo-4', 'math-geo-4'],
  },

  // ── Reading & Writing: Craft and Structure ──
  {
    id: 'rw-craft-cross-text',
    title: 'Cross-Text Connections (Dual Passages)',
    domain: 'reading-writing',
    category: 'Craft and Structure',
    keywords: ['cross-text', 'dual passages', 'text 1 and text 2', 'author perspective', 'agreement', 'disagreement'],
    summary: 'Comparing, contrasting, and synthesizing arguments across two paired passages (Text 1 and Text 2).',
    content: `Cross-Text Connections present two short texts addressing the same topic from different or nuanced angles.
• **Question formats**:
  - "Based on the texts, how would Author 2 most likely respond to the claim made by Author 1?"
  - "Which choice best describes the relationship between the two texts?"
• **Step-by-step strategy**:
  1. Read Text 1: Note the author's primary claim and tone (+, -, or neutral).
  2. Read Text 2: Determine if Text 2 **agrees**, **disagrees**, **qualifies/limits**, or provides an alternative explanation for Text 1.
  3. Pre-phrase the relationship before reading the answer choices.
  4. Eliminate choices that misattribute claims or exaggerate the conflict.`,
    tips: [
      'Digital SAT authors rarely attack each other aggressively; disagreements are usually polite qualifications, methodological differences, or pointing out unexamined variables.',
    ],
    commonTraps: [
      'Answering what YOU think rather than what Author 2 specifically states.',
      'Selecting an answer that describes Text 1 when the question asked for Author 2\'s view of Text 1.',
    ],
    relatedTopicIds: ['rw-crf-1'],
  },
  {
    id: 'rw-craft-words-in-context',
    title: 'Words in Context (Vocabulary in Nuance)',
    domain: 'reading-writing',
    category: 'Craft and Structure',
    keywords: ['words in context', 'vocabulary', 'connotation', 'collocation', 'tier 2 words', 'tone'],
    summary: 'Selecting the most precise academic vocabulary word based on surrounding context, tone, and syntax.',
    content: `Words in Context questions test high-utility academic vocabulary in genuine literary or scientific prose.
• **Strategy**:
  1. Read the passage and blank out the underlined word.
  2. Identify the contextual clue words (e.g. contrast words like "while", "unlike", or parallel lists).
  3. Formulate your own simple replacement word that makes sense in the sentence.
  4. Match your simple word to the closest choice.
• **Beware secondary definitions**: A word might be a correct dictionary definition in ordinary speech, but completely ill-suited to the formal academic register or contextual meaning here.`,
    tips: [
      'Check if the sentence requires a positive, negative, or neutral word.',
      'Read the sentence with your chosen word plugged back in to ensure natural syntax and meaning.',
    ],
    commonTraps: [
      'Choosing a familiar word because you recognize it, even though its meaning doesn\'t match the sentence clues.',
    ],
    relatedTopicIds: ['rw-crf-3'],
  },
  {
    id: 'rw-craft-structure-purpose',
    title: 'Text Structure and Purpose',
    domain: 'reading-writing',
    category: 'Craft and Structure',
    keywords: ['text structure', 'purpose', 'function', 'main argument', 'rhetorical shift'],
    summary: 'Analyzing the overall rhetorical purpose of a text or the specific structural function of an underlined sentence.',
    content: `Text Structure and Purpose questions assess your understanding of why an author wrote a text or included a specific piece of information.
• **Overall Purpose**: Why does this passage exist? (e.g., to criticize a theory, to outline an experiment, to introduce a historical figure).
• **Underlined Sentence Function**: What role does this specific sentence play?
  - Does it provide evidence?
  - Introduce an objection or counterargument?
  - Offer a concession?
  - Elaborate on a previously mentioned concept?`,
    tips: [
      'Pay close attention to structural indicators: "However" signals a pivot; "Furthermore" signals continuation; "Specifically" signals evidence/detail.',
    ],
    commonTraps: [
      'Confusing content (what the sentence says) with function (what the sentence DOES in the argument).',
    ],
    relatedTopicIds: ['rw-crf-2'],
  },

  // ── Reading & Writing: Information and Ideas ──
  {
    id: 'rw-info-central-ideas',
    title: 'Central Ideas and Details',
    domain: 'reading-writing',
    category: 'Information and Ideas',
    keywords: ['central idea', 'main idea', 'summary', 'supporting details', 'explicit facts'],
    summary: 'Synthesizing the core thesis of a passage and identifying factual information explicitly stated.',
    content: `Central Ideas questions ask you to state the overarching thesis or primary point of a passage.
• **The Golden Rule**: The correct answer MUST be directly substantiated by the text.
• **Scope criteria**:
  - Too broad: Extrapolates far beyond the passage subject.
  - Too narrow: Captures only one supporting detail from line 2 rather than the whole passage.
  - Opposite or distorted: Contradicts an explicit qualification made by the author.`,
    tips: [
      'In scientific/informational passages, the central finding is almost always near the end of the passage.',
    ],
    commonTraps: [
      'Choosing a choice that is factually true in real life but is never mentioned or supported in the passage.',
    ],
    relatedTopicIds: ['rw-cte-1'],
  },
  {
    id: 'rw-info-command-evidence',
    title: 'Command of Evidence (Textual & Quantitative)',
    domain: 'reading-writing',
    category: 'Information and Ideas',
    keywords: ['command of evidence', 'textual evidence', 'quantitative evidence', 'graphs', 'tables', 'hypothesis', 'support', 'weaken'],
    summary: 'Selecting the exact quotation, finding, or data point from a graph that supports or weakens a researcher\'s hypothesis.',
    content: `Command of Evidence tests your ability to link claims with rigorous supporting evidence.
• **Textual Evidence**:
  - Identify the specific hypothesis or claim stated in the prompt (e.g., "Which finding, if true, would most strongly support Dr. Aris's hypothesis?").
  - Test each answer choice directly against that exact hypothesis.
• **Quantitative Evidence**:
  - Carefully examine the graph/table title, axis labels, units, and legend.
  - Locate the exact variables mentioned in the question prompt.
  - Verify that the numbers in the choice accurately reflect the graph data AND directly support the argument.`,
    tips: [
      'Read the prompt hypothesis TWICE. The most common error is picking evidence that is true on the graph but supports a different claim than the one asked.',
    ],
    commonTraps: [
      'Selecting a choice that misreads the graph (e.g. confusing percentage with raw count).',
    ],
    relatedTopicIds: ['rw-coe-1', 'rw-coe-2'],
  },
  {
    id: 'rw-info-inferences',
    title: 'Inferences and Logical Completion',
    domain: 'reading-writing',
    category: 'Information and Ideas',
    keywords: ['inferences', 'complete the text', 'logical conclusion', 'unstated deduction', 'evidence'],
    summary: 'Drawing the single most defensible logical conclusion to complete an unfinished passage.',
    content: `Inference questions typically end with a blank line: "Which choice most logically completes the text?"
• **The SAT Inference Principle**: On the SAT, an inference is NOT an imaginative guess. It is the next inevitable, logically necessary conclusion directly resulting from the preceding facts.
• **Look for the Pivot**: If the passage sets up a contrast with "although" or "nevertheless", the completion must resolve that contrast.
• **Avoid Extreme Language**: Words like "impossible", "always", "entirely", or "none" are almost always incorrect in inference answers unless the passage explicitly used identical absolute terms.`,
    tips: [
      'The correct answer will usually be phrased conservatively with qualifiers like "may", "suggests", "is likely", or "tends to".',
    ],
    commonTraps: [
      'Wild speculation: jumping two steps ahead rather than taking the single logical next step directly supported by the text.',
    ],
    relatedTopicIds: ['rw-inf-1'],
  },

  // ── Reading & Writing: Standard English Conventions ──
  {
    id: 'rw-sec-boundaries',
    title: 'Sentence Boundaries & Punctuation',
    domain: 'reading-writing',
    category: 'Standard English Conventions',
    keywords: ['boundaries', 'comma splice', 'run-on', 'semicolon', 'colon', 'dash', 'fanboys', 'independent clause'],
    summary: 'Mastering independent vs dependent clauses, semicolons, colons, dashes, and eliminating comma splices.',
    content: `Sentence Boundaries questions test the rules for joining or separating clauses.
• **Independent Clause (IC)**: Contains a subject and a verb and can stand alone as a complete sentence.
• **Dependent Clause (DC)**: Contains a subordinating conjunction (e.g. although, because, since) and cannot stand alone.
• **Joining Two Independent Clauses**:
  1. Period: IC. IC.
  2. Semicolon: IC; IC.
  3. Comma + FANBOYS (for, and, nor, but, or, yet, so): IC, and IC.
  4. Colon or Single Dash: IC: explanation/list/IC. (Clause before colon MUST be independent!)
• **Comma Splice Error**: IC, IC. (Two independent clauses joined by only a comma without FANBOYS is an error!)`,
    formulas: [
      '\\text{IC. IC.}',
      '\\text{IC; IC.}',
      '\\text{IC, [FANBOYS] IC.}',
      '\\text{IC: [Explanation/List/IC]}',
    ],
    tips: [
      'If you see a semicolon (;) and a period (.) in two different choices with identical wording, both are usually wrong, because semicolons and periods are grammatically interchangeable on the SAT.',
    ],
    commonTraps: [
      'Using a colon after an incomplete sentence (e.g. "My favorite colors are: blue and red" is incorrect; must be a full independent clause before the colon).',
    ],
    relatedTopicIds: ['rw-sec-1'],
  },
  {
    id: 'rw-sec-form-structure',
    title: 'Form, Structure, Sense: Subject-Verb Agreement & Modifiers',
    domain: 'reading-writing',
    category: 'Standard English Conventions',
    keywords: ['subject-verb agreement', 'modifiers', 'dangling modifier', 'verb tense', 'pronoun agreement', 'parallelism'],
    summary: 'Subject-verb agreement through intervening prepositional phrases, introductory modifier rules, and verb tense consistency.',
    content: `Form, Structure, and Sense covers grammatical agreement and syntax precision.
• **Subject-Verb Agreement**:
  - The subject and verb must agree in number (singular subject $\\implies$ singular verb ending in -s; plural subject $\\implies$ plural verb without -s).
  - Cross out intervening prepositional phrases: "The collection [of antique silver coins] **was** sold" (collection is singular, not coins).
• **Introductory Modifiers (Dangling Modifiers)**:
  - When a sentence opens with a descriptive modifying phrase (e.g., "Walking through the museum..."), the noun immediately following the comma MUST be the entity performing that action!
  - Incorrect: "Walking through the museum, the paintings impressed Sarah." (The paintings were not walking).
  - Correct: "Walking through the museum, Sarah was impressed by the paintings."
• **Verb Tense Consistency**:
  - Maintain consistent tense (past, present, future) unless a clear time-marker word (e.g. "yesterday", "now", "by 2050") indicates a temporal shift.`,
    tips: [
      'To easily find the subject, find the verb first and ask "WHO or WHAT is doing this action?"',
    ],
    commonTraps: [
      'Letting the closest noun right before the verb fool you instead of the true subject.',
    ],
    relatedTopicIds: ['rw-fsu-1'],
  },

  // ── Reading & Writing: Expression of Ideas ──
  {
    id: 'rw-exp-transitions',
    title: 'Transitions (Connecting Thoughts)',
    domain: 'reading-writing',
    category: 'Expression of Ideas',
    keywords: ['transitions', 'however', 'furthermore', 'therefore', 'consequently', 'similarly', 'contrast', 'cause and effect'],
    summary: 'Categorizing transition words (additive, contrastive, causal, exemplifying) and evaluating inter-sentence logic.',
    content: `Transition questions ask you to select the word that best captures the logical relationship between two sentences.
• **The 4 Transition Categories**:
  1. **Contrast / Contradiction**: However, nevertheless, on the other hand, conversely, nonetheless, despite this.
  2. **Addition / Continuation**: Furthermore, moreover, in addition, additionally, also.
  3. **Cause & Effect / Result**: Therefore, consequently, thus, as a result, hence, accordingly.
  4. **Exemplification / Clarification**: For example, for instance, specifically, in other words, that is.
• **Strategy**:
  1. Read Sentence 1 and Sentence 2 without looking at the transition word.
  2. Ask: Does Sentence 2 agree/add to S1, contradict S1, or result from S1?
  3. Pick the transition belonging to that logical category.`,
    tips: [
      'If two answer choices belong to the EXACT same category (e.g. "Furthermore" and "Moreover"), eliminate both! They cancel each other out.',
    ],
    commonTraps: [
      'Choosing a transition based on how it sounds rather than analyzing the strict logical relationship between the sentences.',
    ],
    relatedTopicIds: ['rw-tr-1'],
  },
  {
    id: 'rw-exp-rhetorical-synthesis',
    title: 'Rhetorical Synthesis (Bullet-Point Notes)',
    domain: 'reading-writing',
    category: 'Expression of Ideas',
    keywords: ['rhetorical synthesis', 'bullet points', 'student notes', 'goal', 'research notes'],
    summary: 'Synthesizing bulleted research notes to accomplish a specific stated rhetorical goal.',
    content: `Rhetorical Synthesis questions provide 4-6 bullet-pointed student research notes followed by a specific prompt goal.
• **The Magic Trick**:
  - **Read the goal FIRST!** The prompt always specifies an exact goal:
    - "The student wants to emphasize a difference between..."
    - "The student wants to introduce the discovery to an audience unfamiliar with..."
    - "The student wants to explain how the telescope works..."
  - Only ONE answer choice actually satisfies the specific goal asked in the prompt, regardless of whether the other choices are factually accurate according to the notes!`,
    tips: [
      'You usually do not need to read the bullet points in detail. Read the goal in the last sentence, then find the choice that directly accomplishes that goal.',
    ],
    commonTraps: [
      'Picking a choice that accurately summarizes all bullets but FAILS the specific prompt goal (e.g. summarizing everything when asked only to emphasize a difference).',
    ],
    relatedTopicIds: ['rw-rh-1'],
  },

  // ── Test Strategies ──
  {
    id: 'strat-desmos-mastery',
    title: 'Official Desmos Calculator Mastery & Tricks',
    domain: 'strategy',
    category: 'Test Strategies',
    keywords: ['desmos', 'calculator', 'graphing', 'regression', 'sliders', 'roots', 'intersection', 'table'],
    summary: 'Advanced tricks for the built-in College Board Desmos calculator: finding intersections, regressions, sliders, and roots.',
    content: `The Digital SAT embeds a full College Board version of Desmos directly into every Math question.
• **1. Solving Systems of Equations in 5 Seconds**:
  - Type Equation 1 on Line 1 (e.g. $2x + 3y = 12$).
  - Type Equation 2 on Line 2 (e.g. $y = 3x - 4$).
  - Click the point where the lines cross to read $(x, y)$ instantly.
• **2. Finding Line or Curve of Best Fit (Regression)**:
  - Add a table and enter coordinates $(x_1, y_1)$.
  - Type $y_1 \\sim mx_1 + b$ for linear regression, or $y_1 \\sim ax_1^2 + bx_1 + c$ for quadratic regression. Desmos will solve parameters $m, b, a$ with maximum precision!
• **3. Using Sliders for Unknown Constants**:
  - When given an equation with an unknown parameter like $kx - 4 = 2x + 7$, type the equation and click "add slider: k". Drag $k$ to test which value produces no solution or infinite solutions.
• **4. Finding Zeros, Vertices & Intercepts**:
  - Type any function $f(x)$. Click on the gray dots on the graph to reveal zeros (x-intercepts), y-intercept, and vertex coordinates.`,
    tips: [
      'Desmos accepts equations in any form — you do NOT need to isolate y first! You can type $3x - 5y = 14$ directly.',
      'To quickly convert a decimal answer to an exact fraction, click the fraction button next to the result.',
    ],
    commonTraps: [
      'Forgetting that Desmos angle mode defaults to radians. If calculating sine or cosine of degrees, check the wrench settings icon to ensure Degree mode is selected.',
    ],
    relatedTopicIds: ['calculator', 'desmos'],
  },
  {
    id: 'strat-pacing-timing',
    title: 'Pacing, Timing & Time Bank Strategy',
    domain: 'strategy',
    category: 'Test Strategies',
    keywords: ['pacing', 'time management', 'target time', '80s math', '65s rw', 'flashrush', 'time bank'],
    summary: 'Official section target pacing: 80s Math / 65s RW, banking time for hard questions, and avoiding rushed guessing.',
    content: `Digital SAT pacing requires deliberate time management:
• **Math Section**:
  - 22 questions in 35 minutes (~95 seconds average per question).
  - **Target pace**: Spend 60-80s on early Easy/Medium questions (1-15) to bank a reserve of 120s+ for multi-step Hard questions (16-22).
• **Reading & Writing Section**:
  - 27 questions in 32 minutes (~71 seconds average per question).
  - **Target pace**: Spend 45-60s on Standard English Conventions and Transitions to bank 85-90s for dense Cross-Text and Evidence passages.
• **The 15-Second Rush Trap**:
  - SATBase telemetry penalizes questions answered in under 15s because reckless guessing harms score reliability. Always take at least 15-20s to read the full question.`,
    tips: [
      'If you have spent more than 2 minutes on any single question without progress, eliminate obvious distractors, flag the question, make an educated guess, and move on. Return to it if time permits.',
    ],
    commonTraps: [
      'Getting bogged down on question 18 and leaving questions 20-22 completely unread.',
    ],
    relatedTopicIds: ['pacing', 'timing'],
  },
  {
    id: 'strat-elimination-guessing',
    title: 'Process of Elimination & Digital SAT Guessing Rules',
    domain: 'strategy',
    category: 'Test Strategies',
    keywords: ['elimination', 'guessing', 'no penalty', 'distractor traps', 'extreme words', 'strikethrough'],
    summary: 'The 4 canonical distractor traps, zero wrong-answer penalty rules, and intelligent elimination.',
    content: `Mastering elimination turns 25% random guesses into 50% or 100% correct answers.
• **No Wrong Answer Penalty**:
  - The Digital SAT has **ZERO penalty** for incorrect answers.
  - **Never leave any question blank!** Before the module timer expires, ensure every single question has an answer selected.
• **The 4 Canonical Distractor Traps**:
  1. **Too Extreme**: Uses words like "always", "never", "entirely", "in every case" when the text only stated "some" or "often".
  2. **Opposite**: States the exact reverse of what the author or data claims.
  3. **Half-Right / Half-Wrong**: Begins with accurate facts from the passage but slips in an unsupported assumption in the second half of the choice.
  4. **Out of Scope**: Introduces plausible outside concepts that are never mentioned or supported in the prompt.`,
    tips: [
      'Use the SATBase on-screen strikethrough tool to visually eliminate wrong choices so your brain focuses exclusively on the viable options.',
    ],
    commonTraps: [
      'Leaving questions blank when time runs out. Even a pure guess has a 25% chance of being right!',
    ],
    relatedTopicIds: ['elimination', 'guessing'],
  },

  // ── Platform Navigation Guide ──
  {
    id: 'plat-sa-elo-system',
    title: 'SA-ELO 10x Micro-Rating System & Academic Tiers',
    domain: 'platform',
    category: 'Platform Navigation',
    keywords: ['sa-elo', 'elo', 'rating', 'tiers', 'k-factor', 'pacing factor', 'foundational', 'ivy league'],
    summary: 'How SATBase calculates your live SA-ELO micro-rating (200.0-800.0) across 5 academic tiers with adaptive K-factor and pacing multipliers.',
    content: `SATBase uses the proprietary SA-ELO micro-rating engine to track your true academic ability with 1 decimal place of precision.
• **Scale**: 200.0 to 800.0 per section (Composite: 400 to 1600).
• **Question Baselines**: Easy (360), Medium (520), Hard (680).
• **Adaptive K-Factor**:
  - $< 50$ questions: $K = 4.8$ (Calibration phase — faster rating movement).
  - $50 - 200$ questions: $K = 3.2$ (Refinement phase).
  - $> 200$ questions: $K = 1.6$ (Anchor / Mastery phase).
• **Pacing Multiplier ($P$)**:
  - Rushed ($< 15$s): Wrong answer penalized $1.3\\times$; lucky correct discounted to $0.7\\times$.
  - Overtime ($> 1.7\\times$ target): Damped to $0.85\\times$.
  - Normal pace: $1.0\\times$.
• **5 Academic Tiers**:
  1. **Foundational** (400–900): Initial diagnostic stage; focusing on core rules.
  2. **Developing Scholar** (910–1100): Building grammatical boundaries and linear operations.
  3. **Proficient Candidate** (1110–1300): Solid foundational command across both sections.
  4. **Advanced Competitor** (1310–1450): Strong mastery of complex algebra and rhetoric.
  5. **Ivy League / Elite Tier** (1460–1600): 99th percentile readiness for top global institutions.`,
    formulas: [
      'E = \\frac{1}{1 + 10^{\\frac{R_{\\text{question}} - R_{\\text{user}}}{400}}}',
      '\\Delta = K \\times P \\times (S - E)',
    ],
    tips: [
      'Your SA-ELO updates after every question in Practice Arena and FlashRush Mocks.',
      'Delta per question is clamped between $\\pm 0.1$ and $\\pm 2.5$ points to prevent sudden volatility.',
    ],
    commonTraps: [
      'Rushing through questions in under 15 seconds: wrong answers will deduct $1.3\\times$ more points due to the anti-rush penalty!',
    ],
    relatedTopicIds: ['sa-elo', 'analytics', 'tiers'],
  },
  {
    id: 'plat-flashrush-mock-exams',
    title: 'FlashRush Mock Exams & Exam Quiet Mode',
    domain: 'platform',
    category: 'Platform Navigation',
    keywords: ['flashrush', 'mock tests', 'bluebook', 'exam quiet mode', 'practice test', 'timed test'],
    summary: 'Official Bluebook exam simulation with 2 timed modules, strict exam conditions, and post-exam diagnostic review.',
    content: `FlashRush is SATBase's high-fidelity College Board Bluebook simulation test.
• **Test Structure**:
  - Module 1: Reading & Writing (10 questions, 600s timer).
  - Module Break: Quick rest period.
  - Module 2: Math (10 questions, 600s timer) with built-in Desmos and Math Reference Sheet.
• **Cosmo Exam Quiet Mode**:
  - During active mock tests, Cosmo AI assistance is **intentionally locked** to preserve authentic test-day conditions.
  - After completing both modules, you enter the **FlashRush Results view**, where Cosmo unlocks to provide full question-by-question explanations, mistake analyses, and score breakdowns.`,
    tips: [
      'Treat FlashRush as a real exam: do not look at notes, use only the embedded Desmos calculator, and manage your 600s per module strictly.',
    ],
    commonTraps: [
      'Attempting to use AI assistance during a mock exam: Cosmo is restricted until exam completion to uphold exam integrity.',
    ],
    relatedTopicIds: ['flashrush', 'mock-tests'],
  },
  {
    id: 'plat-error-bank-drills',
    title: 'Error Bank Drills & Spaced Repetition',
    domain: 'platform',
    category: 'Platform Navigation',
    keywords: ['error bank', 'mistakes', 'review', 'drills', 'spaced repetition', 're-drills'],
    summary: 'How SATBase tracks every missed question in your Error Bank for targeted re-drills and permanent concept mastery.',
    content: `The SATBase Error Bank automatically collects every question you miss across Practice Arenas and Mock Tests.
• **Automatic Logging**: Any time you submit an incorrect answer, that question is saved to your Error Bank with its topic tag and timestamp.
• **Spaced Re-Drills**:
  - Access your Error Bank from the sidebar (/error-bank).
  - Drill through unresolved mistakes with step-by-step Socratic assistance from Cosmo.
• **Mastery Resolution**: Once you successfully solve a missed question during an Error Bank review session, it is marked resolved and moved to your Mastered Archive.`,
    tips: [
      'Reviewing your Error Bank twice weekly is proven to be the fastest way to raise your SAT score by 100+ points.',
    ],
    commonTraps: [
      'Only doing new questions while ignoring your Error Bank. Repeating the same conceptual error is the #1 reason score plateaus occur.',
    ],
    relatedTopicIds: ['error-bank', 'drills'],
  },
  {
    id: 'plat-study-plan-planner',
    title: 'Dynamic 14-Day Study Plan & Diagnostics',
    domain: 'platform',
    category: 'Platform Navigation',
    keywords: ['study plan', 'planner', 'schedule', 'tasks', 'diagnostic', 'weakest skills', 'calendar'],
    summary: 'Automated 14-day study plan scheduling daily practice sessions, weekly diagnostics, and focus on weakest skills.',
    content: `The SATBase Study Planner builds an adaptive 14-day calendar tailored to your upcoming test date and target score.
• **Dynamic Task Distribution**:
  - Focuses on your top 3 weakest skills identified by your performance analytics.
  - Schedules a full diagnostic mock test at the start of each week.
  - Schedules Error Bank review sessions twice per week.
  - Includes 1 mandatory rest day per 7-day cycle to prevent student burnout.
• **Daily Minute Goals**: Tasks are calibrated to fit your chosen daily study budget (e.g. 30, 45, or 60 minutes).`,
    tips: [
      'Check off your tasks each day to maintain your study streak and keep your readiness score climbing.',
    ],
    commonTraps: [
      'Skipping rest days. Cognitive science shows memory consolidation and pattern recognition happen during rest periods!',
    ],
    relatedTopicIds: ['study-plan', 'planner'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. QUICK ACTION PILLS CATALOG
// ─────────────────────────────────────────────────────────────────────────────

export const UNIVERSAL_QUICK_ACTIONS: QuickActionPill[] = [
  {
    id: 'pill-explain-concept',
    label: 'Explain Concept',
    prompt: 'Can you explain the core concepts and rules tested on the SAT?',
    category: 'universal',
    icon: 'book',
    description: 'Get clear conceptual explanations for any SAT topic',
  },
  {
    id: 'pill-math-formulas',
    label: 'Math Reference Sheet',
    prompt: 'Show me the official SAT Math reference formulas and key equations.',
    category: 'math',
    icon: 'formula',
    description: 'View all 2D, 3D, and trigonometry formulas provided on test day',
  },
  {
    id: 'pill-desmos-tricks',
    label: 'Desmos Tricks',
    prompt: 'What are the best Desmos calculator shortcuts for systems, regressions, and roots?',
    category: 'strategy',
    icon: 'calculator',
    description: 'Learn how to solve equations visually in seconds on Desmos',
  },
  {
    id: 'pill-pacing-strategy',
    label: 'Pacing Strategy',
    prompt: 'What are the recommended pacing targets and timing strategies for Math and Reading & Writing?',
    category: 'strategy',
    icon: 'clock',
    description: 'Master the 80s Math / 65s RW pacing guidelines',
  },
  {
    id: 'pill-platform-tour',
    label: 'Platform Tour',
    prompt: 'How does SATBase work? Give me an overview of the Error Bank, Study Plan, and Mocks.',
    category: 'platform',
    icon: 'compass',
    description: 'Explore SATBase features and learning workflows',
  },
  {
    id: 'pill-score-elo-analysis',
    label: 'SA-ELO & Score Tiers',
    prompt: 'How does the SA-ELO 10x micro-rating system work and what are the 5 Academic Tiers?',
    category: 'platform',
    icon: 'award',
    description: 'Understand your live micro-rating and academic progression',
  },
];

export const PRACTICE_QUICK_ACTIONS: QuickActionPill[] = [
  {
    id: 'pill-hint-1',
    label: 'Give me Hint 1/3',
    prompt: 'Could you give me a first gentle hint on where to begin?',
    category: 'practice',
    icon: 'lightbulb',
    description: 'Get an initial nudge on identifying the core concept',
  },
  {
    id: 'pill-hint-2',
    label: 'Give me Hint 2/3',
    prompt: 'I see that first part. Can you give me hint 2 to narrow down the next step?',
    category: 'practice',
    icon: 'lightbulb',
    description: 'Narrow down the algebraic or logical setup',
  },
  {
    id: 'pill-hint-3',
    label: 'Give me Hint 3/3',
    prompt: 'Can you give me hint 3 to guide me toward the final connection?',
    category: 'practice',
    icon: 'lightbulb',
    description: 'Final Socratic clue before the conclusion',
  },
  {
    id: 'pill-check-step',
    label: 'Check My Step',
    prompt: 'Here is my reasoning so far: ',
    category: 'practice',
    icon: 'check',
    description: 'Have Cosmo verify your intermediate work',
  },
  {
    id: 'pill-full-solution',
    label: 'Full Solution',
    prompt: 'I have worked through all three hints. Please show me the complete, step-by-step official solution.',
    category: 'practice',
    icon: 'key',
    description: 'Unlock complete official explanation after hint 3',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. RETRIEVAL & SEARCH FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Searches the in-memory knowledge base by keyword matching, title similarity, and domain filtering.
 */
export function searchKnowledge(query: string, domain?: KnowledgeDomain): KnowledgeItem[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return [];

  const tokens = normalizedQuery
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (tokens.length === 0) return [];

  const scored = KNOWLEDGE_TOPICS.filter((item) => !domain || item.domain === domain).map((item) => {
    let score = 0;
    const titleLower = item.title.toLowerCase();
    const summaryLower = item.summary.toLowerCase();
    const contentLower = item.content.toLowerCase();

    // Direct title hit
    if (titleLower.includes(normalizedQuery)) score += 50;

    for (const token of tokens) {
      if (titleLower.includes(token)) score += 15;
      if (item.category.toLowerCase().includes(token)) score += 10;
      if (item.keywords.some((k) => k.toLowerCase().includes(token))) score += 12;
      if (summaryLower.includes(token)) score += 5;
      if (contentLower.includes(token)) score += 2;
    }

    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.item);
}

/**
 * Finds the single best matching knowledge base topic or null if no confident match.
 */
export function findBestKnowledgeMatch(query: string, domain?: KnowledgeDomain): KnowledgeItem | null {
  const results = searchKnowledge(query, domain);
  return results.length > 0 ? results[0] : null;
}

/**
 * Looks up a reference formula by name or keyword (e.g. 'circle area', 'volume', 'pythagorean').
 */
export function getFormulaByName(nameOrKeyword: string): ReferenceFormula | undefined {
  const normalized = nameOrKeyword.toLowerCase().trim();
  return SAT_REFERENCE_FORMULAS.find((f) => {
    const fName = f.name.toLowerCase();
    const fCat = f.category.toLowerCase();
    return (
      fName.includes(normalized) ||
      fCat.includes(normalized) ||
      normalized.includes(fName) ||
      (normalized.includes('circle') && fName.includes('circle') && normalized.includes('area') && fName.includes('area')) ||
      (normalized.includes('circumference') && fName.includes('circumference')) ||
      (normalized.includes('pythagorean') && fName.includes('pythagorean')) ||
      (normalized.includes('30-60-90') && fName.includes('30-60-90')) ||
      (normalized.includes('45-45-90') && fName.includes('45-45-90')) ||
      (normalized.includes('cylinder') && fName.includes('cylinder')) ||
      (normalized.includes('sphere') && fName.includes('sphere')) ||
      (normalized.includes('cone') && fName.includes('cone')) ||
      (normalized.includes('quadratic') && fName.includes('quadratic')) ||
      (normalized.includes('trig') && fName.includes('trigonometry'))
    );
  });
}

/**
 * Returns all codified SAT Math Reference Formulas.
 */
export function getAllReferenceFormulas(): ReferenceFormula[] {
  return [...SAT_REFERENCE_FORMULAS];
}

/**
 * Retrieves a topic by its exact ID or topicId mapping.
 */
export function getTopicById(id: string): KnowledgeItem | undefined {
  return KNOWLEDGE_TOPICS.find((t) => t.id === id || t.relatedTopicIds?.includes(id));
}

/**
 * Returns contextually relevant Quick Action Pills based on current mode and question state.
 */
export function getSuggestedQuickActions(
  mode: 'general' | 'practice' | 'results' | 'mock' = 'general',
  hintLevel = 0
): QuickActionPill[] {
  if (mode === 'mock') {
    return [
      {
        id: 'pill-mock-status',
        label: 'Mock Test In Progress',
        prompt: 'Cosmo is locked during mock exams to preserve authentic testing conditions.',
        category: 'platform',
      },
      {
        id: 'pill-mock-desmos',
        label: 'Open Desmos Calculator',
        prompt: 'How do I open the Desmos calculator in Bluebook?',
        category: 'strategy',
      },
    ];
  }

  if (mode === 'practice') {
    const pills: QuickActionPill[] = [];
    if (hintLevel < 1) {
      pills.push(PRACTICE_QUICK_ACTIONS[0]); // Hint 1
    } else if (hintLevel === 1) {
      pills.push(PRACTICE_QUICK_ACTIONS[1]); // Hint 2
    } else if (hintLevel === 2) {
      pills.push(PRACTICE_QUICK_ACTIONS[2]); // Hint 3
    }

    pills.push(PRACTICE_QUICK_ACTIONS[3]); // Check my step
    if (hintLevel >= 3) {
      pills.push(PRACTICE_QUICK_ACTIONS[4]); // Full solution
    }

    // Add math formulas and explain concept as helper pills
    pills.push(UNIVERSAL_QUICK_ACTIONS[0]); // Explain concept
    pills.push(UNIVERSAL_QUICK_ACTIONS[1]); // Math formulas
    return pills;
  }

  if (mode === 'results') {
    return [
      {
        id: 'pill-results-mistakes',
        label: 'Analyze My Mistakes',
        prompt: 'Can you analyze the questions I missed on this test and explain the patterns?',
        category: 'universal',
      },
      {
        id: 'pill-results-error-bank',
        label: 'Add to Error Bank',
        prompt: 'How do I add my missed questions from this exam to my Error Bank?',
        category: 'platform',
      },
      UNIVERSAL_QUICK_ACTIONS[5], // SA-ELO analysis
      UNIVERSAL_QUICK_ACTIONS[3], // Pacing strategy
    ];
  }

  // General mode default
  return [...UNIVERSAL_QUICK_ACTIONS];
}
