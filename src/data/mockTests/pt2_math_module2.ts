import type { MockTestQuestion } from './pt1_types.ts';

export const PT2_MATH_MODULE2_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt2-math-m2-q1",
    "section": "math",
    "module": 2,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 9(x + 3) - 8 = 64, what is the value of x + 3?",
    "options": [
      {
        "letter": "A",
        "text": "8"
      },
      {
        "letter": "B",
        "text": "5"
      },
      {
        "letter": "C",
        "text": "11"
      },
      {
        "letter": "D",
        "text": "72"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nAdd 8 to both sides of 9(x + 3) - 8 = 64 to obtain 9(x + 3) = 72. Dividing both sides by 9 yields x + 3 = 8.\n\n• Choice B is incorrect because 5 is the value of x (since x + 3 = 8 -> x = 5), not x + 3.\n\n• Choice C is incorrect because it adds 3 to 8.\n\n• Choice D is incorrect because 72 = 9(x + 3) before dividing by 9.\n\nCommon Mistake: Solving for x = 5 and selecting 5 rather than evaluating the grouped expression x + 3."
  },
  {
    "id": "pt2-math-m2-q2",
    "section": "math",
    "module": 2,
    "number": 2,
    "domain": "Advanced Math",
    "skill": "Operations with polynomials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (4x + 3)(5x - 2)?",
    "options": [
      {
        "letter": "A",
        "text": "20x^2 - 6"
      },
      {
        "letter": "B",
        "text": "20x^2 + 7x - 6"
      },
      {
        "letter": "C",
        "text": "20x^2 - 7x - 6"
      },
      {
        "letter": "D",
        "text": "20x^2 + 23x - 6"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nApply the distributive property (FOIL):\n\n(4x)(5x) + (4x)(-2) + (3)(5x) + (3)(-2) = 20x^2 - 8x + 15x - 6 = 20x^2 + 7x - 6.\n\n• Choice A is incorrect because it omits the middle cross-terms.\n\n• Choice C is incorrect because it miscalculates -8x + 15x as -7x.\n\n• Choice D is incorrect because it adds 8x + 15x = 23x.\n\nCommon Mistake: Sign error when combining -8x and +15x."
  },
  {
    "id": "pt2-math-m2-q3",
    "section": "math",
    "module": 2,
    "number": 3,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios, rates, and proportions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A commercial bakery recipe requires 2.5 cups of whole-wheat flour to bake 18 muffins. At this same rate, how many cups of whole-wheat flour are required to bake 108 muffins?",
    "options": [
      {
        "letter": "A",
        "text": "12"
      },
      {
        "letter": "B",
        "text": "13.5"
      },
      {
        "letter": "C",
        "text": "15"
      },
      {
        "letter": "D",
        "text": "18"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nSet up a proportion: (2.5 cups) / (18 muffins) = (x cups) / (108 muffins). Notice that 108 / 18 = 6, so the batch size is multiplied by 6. Multiply 2.5 * 6 = 15 cups.\n\n• Choice A is incorrect because 12 = 2 * 6.\n\n• Choice B is incorrect because 13.5 = 2.25 * 6.\n\n• Choice D is incorrect because 18 is the number of muffins per base batch.\n\nCommon Mistake: Dividing 108 by 18 incorrectly or miscalculating 2.5 * 6."
  },
  {
    "id": "pt2-math-m2-q4",
    "section": "math",
    "module": 2,
    "number": 4,
    "domain": "Algebra",
    "skill": "Linear functions in context",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A food scientist models the internal temperature T, in degrees Fahrenheit, of a freshly brewed cup of coffee m minutes after being poured using the equation T = 195 - 4.5m, for 0 <= m <= 20. Which of the following is the best interpretation of 4.5 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The initial temperature, in degrees Fahrenheit, of the coffee when poured"
      },
      {
        "letter": "B",
        "text": "The ambient room temperature, in degrees Fahrenheit"
      },
      {
        "letter": "C",
        "text": "The number of minutes it takes for the coffee to cool by 1 degree Fahrenheit"
      },
      {
        "letter": "D",
        "text": "The average decrease in the coffee's temperature, in degrees Fahrenheit, per minute"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nIn the linear equation T = 195 - 4.5m, 195 is the initial temperature at m = 0, and -4.5 is the slope (rate of change of T with respect to m). Thus, 4.5 represents the decrease in temperature, in degrees Fahrenheit, for each 1-minute increase in time.\n\n• Choice A describes the y-intercept (195).\n\n• Choice B is not represented in the linear equation.\n\n• Choice C inverts the rate (1/4.5 minutes per degree rather than 4.5 degrees per minute).\n\nCommon Mistake: Inverting the units of the slope (minutes per degree instead of degrees per minute)."
  },
  {
    "id": "pt2-math-m2-q5",
    "section": "math",
    "module": 2,
    "number": 5,
    "domain": "Advanced Math",
    "skill": "Complex numbers and quadratic equations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following is a solution to the equation x^2 + 8x + 41 = 0, where i = sqrt(-1)?",
    "options": [
      {
        "letter": "A",
        "text": "-4 + 5i"
      },
      {
        "letter": "B",
        "text": "4 + 5i"
      },
      {
        "letter": "C",
        "text": "-4 + 10i"
      },
      {
        "letter": "D",
        "text": "-8 + 5i"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nApply the quadratic formula x = (-b +/- sqrt(b^2 - 4ac)) / (2a) with a = 1, b = 8, c = 41:\n\nx = (-8 +/- sqrt(8^2 - 4(1)(41))) / 2\n\nx = (-8 +/- sqrt(64 - 164)) / 2\n\nx = (-8 +/- sqrt(-100)) / 2\n\nx = (-8 +/- 10i) / 2 = -4 +/- 5i.\n\nThus, -4 + 5i is a solution.\n\n• Choice B has the wrong sign on the real part (+4 instead of -4).\n\n• Choice C failed to divide the imaginary part (10i) by 2.\n\n• Choice D failed to divide the real part (-8) by 2.\n\nCommon Mistake: Forgetting to divide both the real term and the imaginary term by 2a = 2."
  },
  {
    "id": "pt2-math-m2-q6",
    "section": "math",
    "module": 2,
    "number": 6,
    "domain": "Algebra",
    "skill": "Systems of linear inequalities in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following ordered pairs (x, y) is a solution to the system of inequalities below?\ny < -3x + 7\ny >= 2x - 4",
    "options": [
      {
        "letter": "A",
        "text": "(2, 2)"
      },
      {
        "letter": "B",
        "text": "(1, 2)"
      },
      {
        "letter": "C",
        "text": "(3, 1)"
      },
      {
        "letter": "D",
        "text": "(0, -5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSubstitute each ordered pair into both inequalities:\n\nTesting (1, 2):\n\n• First inequality: 2 < -3(1) + 7 -> 2 < 4 (True)\n\n• Second inequality: 2 >= 2(1) - 4 -> 2 >= -2 (True)\n\nBoth inequalities hold true, so (1, 2) is a valid solution.\n\n• Choice A (2, 2): 2 < -3(2) + 7 -> 2 < 1 (False).\n\n• Choice C (3, 1): 1 < -3(3) + 7 -> 1 < -2 (False).\n\n• Choice D (0, -5): -5 >= 2(0) - 4 -> -5 >= -4 (False).\n\nCommon Mistake: Misreading strict vs. non-strict inequalities or sign errors with negative slopes."
  },
  {
    "id": "pt2-math-m2-q7",
    "section": "math",
    "module": 2,
    "number": 7,
    "domain": "Geometry and Trigonometry",
    "skill": "Similar triangles and proportionality",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Triangles ABC and DEF are similar, where angle A corresponds to angle D and angle B corresponds to angle E. If AB = 15, BC = 24, and DE = 10, what is the length of EF?",
    "options": [
      {
        "letter": "A",
        "text": "6.25"
      },
      {
        "letter": "B",
        "text": "15"
      },
      {
        "letter": "C",
        "text": "16"
      },
      {
        "letter": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nSince triangles ABC and DEF are similar, the ratio of corresponding sides is constant:\n\nDE / AB = EF / BC\n\n10 / 15 = EF / 24\n\nSimplify 10/15 to 2/3:\n\n2 / 3 = EF / 24\n\nCross-multiplying gives 3 * EF = 48 -> EF = 16.\n\n• Choice A calculates (10 / 24) * 15 = 6.25.\n\n• Choice B sets EF equal to AB.\n\n• Choice D inverts the scale factor: 24 * (3/2) = 36.\n\nCommon Mistake: Multiplying 24 by the inverted scale factor 15/10 = 1.5, obtaining 36 instead of 16."
  },
  {
    "id": "pt2-math-m2-q8",
    "section": "math",
    "module": 2,
    "number": 8,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Linear regression and scatterplots",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A linear regression model relating weekly advertising expenditure x, in hundreds of dollars, to weekly online orders y is given by y = 3.2x + 14.5. During a week when advertising expenditure was $800 (x = 8), the company received 37.4 thousand orders (y = 37.4). What is the residual for this observation (Residual = Observed y - Predicted y)?",
    "options": [
      {
        "letter": "A",
        "text": "2.7"
      },
      {
        "letter": "B",
        "text": "40.1"
      },
      {
        "letter": "C",
        "text": "-11.8"
      },
      {
        "letter": "D",
        "text": "-2.7"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Find the predicted value y_pred at x = 8:\n\ny_pred = 3.2(8) + 14.5 = 25.6 + 14.5 = 40.1.\n\nStep 2: Compute the residual:\n\nResidual = Observed y - Predicted y = 37.4 - 40.1 = -2.7.\n\n• Choice A reverses the subtraction order (40.1 - 37.4 = +2.7).\n\n• Choice B is the predicted value itself (40.1).\n\n• Choice C results from arithmetic error.\n\nCommon Mistake: Computing Predicted minus Observed (+2.7) instead of Observed minus Predicted (-2.7)."
  },
  {
    "id": "pt2-math-m2-q9",
    "section": "math",
    "module": 2,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Exponential equations and functions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "An investment account is modeled by V(t) = 12,000(1.025)^(4t), where V(t) is the account value in dollars t years after the initial deposit. Which of the following equivalent expressions displays the approximate annual percentage growth rate as an explicit constant in the base?",
    "options": [
      {
        "letter": "A",
        "text": "12,000(1 + 0.1038)^t"
      },
      {
        "letter": "B",
        "text": "12,000(1 + 0.025)^t"
      },
      {
        "letter": "C",
        "text": "12,000(1 + 0.10)^t"
      },
      {
        "letter": "D",
        "text": "12,000(1.1038)^(4t)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nApply the power-of-a-power exponent rule: (1.025)^(4t) = (1.025^4)^t.\n\nCalculate 1.025^4:\n\n1.025^2 = 1.050625\n\n(1.050625)^2 ≈ 1.103813.\n\nRewriting 1.1038 in the form (1 + r) gives (1 + 0.1038), which explicitly shows the effective annual growth rate of approximately 10.38%.\n\n• Choice B ignores the exponent 4.\n\n• Choice C uses simple multiplication 4 * 0.025 = 0.10 instead of compounding.\n\n• Choice D keeps the exponent 4t alongside the annual growth factor.\n\nCommon Mistake: Multiplying 0.025 * 4 = 0.10 instead of raising 1.025 to the 4th power."
  },
  {
    "id": "pt2-math-m2-q10",
    "section": "math",
    "module": 2,
    "number": 10,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, a and b are constants:\n5x - ay = 20\nbx - 12y = 30\nIf the system has infinitely many solutions (x, y), what is the value of a + b?",
    "options": [
      {
        "letter": "A",
        "text": "13.5"
      },
      {
        "letter": "B",
        "text": "15.5"
      },
      {
        "letter": "C",
        "text": "17.5"
      },
      {
        "letter": "D",
        "text": "19.5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, the ratio of corresponding coefficients and constants must be equal.\n\nCompare the constant terms: 20 / 30 = 2/3.\n\nSet the ratios of the x- and y-coefficients equal to 2/3:\n\n1. 5 / b = 2 / 3 -> 2b = 15 -> b = 7.5.\n\n2. (-a) / (-12) = 2 / 3 -> a / 12 = 2 / 3 -> 3a = 24 -> a = 8.\n\nSum the constants: a + b = 8 + 7.5 = 15.5.\n\n• Choice A, Choice C, and Choice D result from miscalculating the fractional proportion for b.\n\nCommon Mistake: Inverting the proportion for b (calculating b = 5 * (2/3) = 3.33) instead of 5 / (2/3) = 7.5."
  },
  {
    "id": "pt2-math-m2-q11",
    "section": "math",
    "module": 2,
    "number": 11,
    "domain": "Advanced Math",
    "skill": "Nonlinear systems of equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the horizontal line y = c intersects the parabola y = 3x^2 - 18x + 31 at exactly one point. What is the value of c?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "31"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "13"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nA horizontal line y = c intersects an upward-opening parabola at exactly one point if and only if it passes through the vertex (minimum point) of the parabola.\n\nFind the x-coordinate of the vertex using x = -B / (2A):\n\nx = -(-18) / (2 * 3) = 18 / 6 = 3.\n\nSubstitute x = 3 into the parabola's equation to find the y-coordinate of the vertex:\n\ny = 3(3)^2 - 18(3) + 31 = 3(9) - 54 + 31 = 27 - 54 + 31 = 4.\n\nTherefore, c = 4.\n\n• Choice A is the x-coordinate of the vertex rather than the y-coordinate.\n\n• Choice B is the y-intercept of the parabola.\n\n• Choice D results from arithmetic error.\n\nCommon Mistake: Reporting the x-coordinate of the vertex (3) instead of substituting it back to find the y-coordinate (4)."
  },
  {
    "id": "pt2-math-m2-q12",
    "section": "math",
    "module": 2,
    "number": 12,
    "domain": "Geometry and Trigonometry",
    "skill": "Circles, sector area, and radians",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A circle has a radius of 12. A sector of this circle has an area of 30pi. What is the measure of the central angle of this sector, in radians?",
    "options": [
      {
        "letter": "A",
        "text": "(5/24)pi"
      },
      {
        "letter": "B",
        "text": "(5/6)pi"
      },
      {
        "letter": "C",
        "text": "(12/5)pi"
      },
      {
        "letter": "D",
        "text": "(5/12)pi"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nThe area A of a circular sector with radius r and central angle theta (in radians) is given by A = (1/2) * r^2 * theta.\n\nSubstitute A = 30pi and r = 12:\n\n30pi = (1/2) * (12)^2 * theta\n\n30pi = (1/2) * 144 * theta\n\n30pi = 72 * theta\n\ntheta = (30pi) / 72 = (5/12)pi radians.\n\n• Choice A divides by 144 without multiplying by 1/2 (30/144 = 5/24).\n\n• Choice B doubles the angle (5/6 pi).\n\n• Choice C inverts the fraction (72/30 = 12/5).\n\nCommon Mistake: Forgetting the 1/2 factor in the radian sector area formula A = (1/2)r^2*theta, yielding (5/24)pi."
  },
  {
    "id": "pt2-math-m2-q13",
    "section": "math",
    "module": 2,
    "number": 13,
    "domain": "Advanced Math",
    "skill": "Rational expressions and equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The rational function g is defined by g(x) = (x^2 - 9) / (x^2 + x - 12). Which of the following describes all vertical asymptotes of the graph of y = g(x) in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "x = -4 only"
      },
      {
        "letter": "B",
        "text": "x = -4 and x = 3"
      },
      {
        "letter": "C",
        "text": "x = 3 only"
      },
      {
        "letter": "D",
        "text": "x = 4 and x = -3"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFactor both the numerator and denominator:\n\nNumerator: x^2 - 9 = (x - 3)(x + 3)\n\nDenominator: x^2 + x - 12 = (x + 4)(x - 3)\n\nThus, g(x) = [(x - 3)(x + 3)] / [(x + 4)(x - 3)].\n\nThe common factor (x - 3) cancels out for x != 3, which means x = 3 is a removable discontinuity (a hole), NOT a vertical asymptote. The remaining factor in the denominator, (x + 4), equals zero at x = -4, which produces a vertical asymptote at x = -4 only.\n\n• Choice B mistakenly classifies the hole at x = 3 as a vertical asymptote.\n\n• Choice C identifies the hole instead of the vertical asymptote.\n\n• Choice D has reversed signs on the denominator roots.\n\nCommon Mistake: Treating all zeros of the unsimplified denominator as vertical asymptotes without checking for common factors that create removable holes."
  },
  {
    "id": "pt2-math-m2-q14",
    "section": "math",
    "module": 2,
    "number": 14,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Statistical inference and sampling",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Researchers selected a random sample of 1,500 adult residents from the city of Oakridge and surveyed them about their support for expanding municipal solar microgrids. Based on the survey results, the researchers estimated that 68% of all adult residents of Oakridge support the expansion, with a margin of error of +/- 2.4%. Which of the following is the largest population to which these survey results can legitimately be generalized?",
    "options": [
      {
        "letter": "A",
        "text": "All adult residents in the state where Oakridge is located"
      },
      {
        "letter": "B",
        "text": "All adult residents of the city of Oakridge"
      },
      {
        "letter": "C",
        "text": "Only the 1,500 adult residents who participated in the survey"
      },
      {
        "letter": "D",
        "text": "All residents of Oakridge, including children under 18"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nStatistical inference allows results from a random sample to be generalized only to the specific population from which the sample was randomly drawn. Here, the sampling frame was adult residents of the city of Oakridge. Therefore, the findings can be generalized to all adult residents of Oakridge.\n\n• Choice A overgeneralizes beyond the sampled city to the entire state.\n\n• Choice C is overly restrictive, ignoring statistical inference from a random sample.\n\n• Choice D includes minors who were excluded from the adult sampling population.\n\nCommon Mistake: Overgeneralizing local municipal survey results to an entire state or nation."
  },
  {
    "id": "pt2-math-m2-q15",
    "section": "math",
    "module": 2,
    "number": 15,
    "domain": "Advanced Math",
    "skill": "Structure of quadratic expressions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the quadratic equation x^2 + kx + 36 = 0, k is a positive integer. If the equation has two distinct real integer solutions, what is the least possible value of k?",
    "options": [
      {
        "letter": "A",
        "text": "12"
      },
      {
        "letter": "B",
        "text": "15"
      },
      {
        "letter": "C",
        "text": "13"
      },
      {
        "letter": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nLet the two distinct integer roots be r1 and r2. Factoring gives (x - r1)(x - r2) = x^2 - (r1 + r2)x + r1*r2 = 0.\n\nThus, r1 * r2 = 36 and k = -(r1 + r2). Since k > 0, both roots must be negative integers. Let r1 = -a and r2 = -b where a and b are distinct positive integers with a * b = 36 and k = a + b.\n\nList the positive factor pairs of 36:\n\n• 1 * 36 = 36 -> k = 1 + 36 = 37\n\n• 2 * 18 = 36 -> k = 2 + 18 = 20\n\n• 3 * 12 = 36 -> k = 3 + 12 = 15\n\n• 4 * 9 = 36 -> k = 4 + 9 = 13\n\n• 6 * 6 = 36 -> k = 12 (NOT valid because the solutions must be DISTINCT)\n\nTherefore, the least possible value of k for two distinct real integer solutions is 13.\n\n• Choice A (12) corresponds to a repeated root x = -6, violating the 'distinct' condition.\n\n• Choice B (15) and Choice D (20) are valid values of k, but not the least.\n\nCommon Mistake: Choosing k = 12 from 6 * 6 = 36, overlooking the requirement that the two integer solutions must be distinct."
  },
  {
    "id": "pt2-math-m2-q16",
    "section": "math",
    "module": 2,
    "number": 16,
    "domain": "Algebra",
    "skill": "Linear inequalities and absolute value",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Which of the following absolute value inequalities has the solution set x < -3 or x > 9?",
    "options": [
      {
        "letter": "A",
        "text": "|x + 3| > 6"
      },
      {
        "letter": "B",
        "text": "|x - 6| > 3"
      },
      {
        "letter": "C",
        "text": "|x + 6| > 3"
      },
      {
        "letter": "D",
        "text": "|x - 3| > 6"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nAn outside interval x < a or x > b is expressed as |x - midpoint| > radius.\n\nCompute the midpoint: (-3 + 9) / 2 = 6 / 2 = 3.\n\nCompute the radius (distance from midpoint to either boundary): 9 - 3 = 6.\n\nTherefore, the inequality is |x - 3| > 6.\n\nVerification: x - 3 > 6 -> x > 9, and x - 3 < -6 -> x < -3.\n\n• Choice A gives x < -9 or x > 3.\n\n• Choice B gives x < 3 or x > 9.\n\n• Choice C gives x < -9 or x > -3.\n\nCommon Mistake: Swapping the midpoint (3) and the radius (6), selecting Choice B."
  },
  {
    "id": "pt2-math-m2-q17",
    "section": "math",
    "module": 2,
    "number": 17,
    "domain": "Geometry and Trigonometry",
    "skill": "Area and volume of solids",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Right circular Cone A and right circular Cone B have equal volumes. The height of Cone B is 44% greater than the height of Cone A. By what percentage is the radius of Cone A greater than the radius of Cone B?",
    "options": [
      {
        "letter": "A",
        "text": "20%"
      },
      {
        "letter": "B",
        "text": "22%"
      },
      {
        "letter": "C",
        "text": "30.56%"
      },
      {
        "letter": "D",
        "text": "44%"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nThe volume of a right circular cone is V = (1/3) * pi * r^2 * h.\n\nLet r_A, h_A and r_B, h_B be the radii and heights of Cones A and B.\n\nWe are given h_B = 1.44 * h_A.\n\nEquating the volumes:\n\n(1/3) * pi * (r_A)^2 * h_A = (1/3) * pi * (r_B)^2 * h_B\n\n(r_A)^2 * h_A = (r_B)^2 * (1.44 * h_A)\n\nDivide both sides by h_A:\n\n(r_A)^2 = 1.44 * (r_B)^2\n\nTake the square root of both sides:\n\nr_A = sqrt(1.44) * r_B = 1.2 * r_B.\n\nSince r_A = 1.2 * r_B, the radius of Cone A is 0.20 = 20% greater than the radius of Cone B.\n\n• Choice B takes half of 44% (22%) instead of taking the square root of 1.44.\n\n• Choice C calculates 1 - 1/1.44.\n\n• Choice D assumes a 1-to-1 ratio without squaring the radius.\n\nCommon Mistake: Dividing 44% by 2 to get 22% rather than taking the square root of the multiplicative factor 1.44."
  },
  {
    "id": "pt2-math-m2-q18",
    "section": "math",
    "module": 2,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the system of equations below, p is a constant:\n7x - 4y = 19\npx - 12y = 50\nIf the system has no solution, what is the value of p?",
    "correctAnswer": "21",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A system of two linear equations has no solution when the lines are parallel (same slope) and have different y-intercepts.\n\nStep 2: Compare the y-coefficients: multiplying the first equation's y-coefficient (-4) by 3 gives -12, which matches the second equation's y-coefficient.\n\nStep 3: For the slopes to match, the x-coefficient p must also be 3 times 7:\n\np = 7 * 3 = 21.\n\nStep 4: Check the constants: 19 * 3 = 57 != 50, confirming that the parallel lines do not coincide and thus have no solution.\n\nCommon Mistake: Sign errors with negative y-coefficients, yielding -21."
  },
  {
    "id": "pt2-math-m2-q19",
    "section": "math",
    "module": 2,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the quadratic equation 9x^2 + kx + 16 = 0, k is a positive constant. If the equation has exactly one real solution, what is the value of k?",
    "correctAnswer": "24",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A quadratic equation Ax^2 + Bx + C = 0 has exactly one real solution when its discriminant equals zero:\n\nDelta = B^2 - 4AC = 0.\n\nStep 2: Substitute A = 9, B = k, and C = 16:\n\nk^2 - 4(9)(16) = 0\n\nk^2 - 576 = 0\n\nk^2 = 576\n\nStep 3: Take the positive square root: k = sqrt(576) = 24.\n\nShortcut: Recognize a perfect square trinomial (3x + 4)^2 = 9x^2 + 2(3x)(4) + 16 = 9x^2 + 24x + 16, so k = 24.\n\nCommon Mistake: Forgetting the factor of 2 in 2ab when recognizing a perfect square trinomial, getting 3 * 4 = 12 instead of 24."
  },
  {
    "id": "pt2-math-m2-q20",
    "section": "math",
    "module": 2,
    "number": 20,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Measures of center and spread",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "A logistics company shipped two batches of packages. Batch 1 contained 15 packages with a mean weight of 64 pounds. Batch 2 contained 25 packages with a mean weight of 80 pounds. What is the mean weight, in pounds, of all 40 packages combined?",
    "correctAnswer": "74",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Find the total weight of Batch 1:\n\n15 * 64 = 960 pounds.\n\nStep 2: Find the total weight of Batch 2:\n\n25 * 80 = 2,000 pounds.\n\nStep 3: Sum the total weights of both batches:\n\n960 + 2,000 = 2,960 pounds.\n\nStep 4: Divide by the total number of packages (15 + 25 = 40):\n\nCombined Mean = 2,960 / 40 = 74 pounds.\n\nCommon Mistake: Taking the unweighted average (64 + 80) / 2 = 72 without accounting for the different batch sizes."
  },
  {
    "id": "pt2-math-m2-q21",
    "section": "math",
    "module": 2,
    "number": 21,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations in the coordinate plane",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, a circle has diameter endpoints at (-2, -5) and (6, 1). When the equation of the circle is written in the form (x - h)^2 + (y - k)^2 = R, what is the value of R?",
    "correctAnswer": "25",
    "explanation": "Step-by-Step Solution:\n\nStep 1: R represents r^2, the square of the radius.\n\nStep 2: Calculate the diameter squared d^2 using the distance formula between (-2, -5) and (6, 1):\n\nd^2 = (6 - (-2))^2 + (1 - (-5))^2 = 8^2 + 6^2 = 64 + 36 = 100.\n\nStep 3: Since d = 2r, we have d^2 = 4r^2 -> 100 = 4r^2 -> r^2 = 25.\n\nThus, R = 25.\n\nAlternatively: Find the center midpoint ((-2+6)/2, (-5+1)/2) = (2, -2). Then r^2 = (6 - 2)^2 + (1 - (-2))^2 = 4^2 + 3^2 = 16 + 9 = 25.\n\nCommon Mistake: Entering the radius r = 5 or the diameter squared d^2 = 100 instead of r^2 = 25."
  },
  {
    "id": "pt2-math-m2-q22",
    "section": "math",
    "module": 2,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = -2x + k is tangent to the parabola y = 3x^2 - 14x + 19 at exactly one point. What is the value of the constant k?",
    "correctAnswer": "7",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the line equation equal to the parabola equation:\n\n3x^2 - 14x + 19 = -2x + k\n\nStep 2: Move all terms to the left side to form Ax^2 + Bx + C = 0:\n\n3x^2 - 12x + (19 - k) = 0\n\nStep 3: For the line to be tangent (intersecting at exactly one point), the discriminant Delta = B^2 - 4AC must equal 0:\n\n(-12)^2 - 4(3)(19 - k) = 0\n\n144 - 12(19 - k) = 0\n\nDivide both sides by 12:\n\n12 - (19 - k) = 0\n\n12 - 19 + k = 0\n\n-7 + k = 0 -> k = 7.\n\nVerification: With k = 7, 3x^2 - 12x + 12 = 3(x - 2)^2 = 0, giving single tangency at x = 2.\n\nCommon Mistake: Sign errors when combining -14x + 2x = -12x or distributing -12 across (19 - k)."
  }
];
