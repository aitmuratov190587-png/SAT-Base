import type { MockTestQuestion } from './pt1_types.ts';

export const PT4_MATH_MODULE2_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt4-math-m2-q1",
    "section": "math",
    "module": 2,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 11(3x - 4) + 9 = 97, what is the value of 3x - 4?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "12"
      },
      {
        "letter": "C",
        "text": "88"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nSubtract 9 from both sides of 11(3x - 4) + 9 = 97 to get 11(3x - 4) = 88. Dividing both sides by 11 gives 3x - 4 = 8.\n\n• Choice A is the value of x (since 3x - 4 = 8 -> 3x = 12 -> x = 4), not 3x - 4.\n\n• Choice B is 3x = 12.\n\n• Choice C is 11(3x - 4) = 88 before dividing by 11.\n\nCommon Mistake: Solving all the way for x = 4 instead of stopping at the requested expression 3x - 4 = 8."
  },
  {
    "id": "pt4-math-m2-q2",
    "section": "math",
    "module": 2,
    "number": 2,
    "domain": "Advanced Math",
    "skill": "Operations with polynomials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following polynomials is equivalent to (7x - 3)(4x + 5)?",
    "options": [
      {
        "letter": "A",
        "text": "28x^2 + 23x - 15"
      },
      {
        "letter": "B",
        "text": "28x^2 - 15"
      },
      {
        "letter": "C",
        "text": "28x^2 - 23x - 15"
      },
      {
        "letter": "D",
        "text": "28x^2 + 47x - 15"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nApply the distributive property (FOIL):\n\n(7x)(4x) + (7x)(5) + (-3)(4x) + (-3)(5) = 28x^2 + 35x - 12x - 15 = 28x^2 + 23x - 15.\n\n• Choice B omits the middle cross-terms.\n\n• Choice C calculates -35x + 12x = -23x.\n\n• Choice D adds 35x + 12x = 47x.\n\nCommon Mistake: Sign error when combining +35x and -12x."
  },
  {
    "id": "pt4-math-m2-q3",
    "section": "math",
    "module": 2,
    "number": 3,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios, rates, and proportions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "On a regional railway map, 1.25 inches represents an actual track distance of 30 kilometers. If the railway line between two stations measures 4.5 inches on the map, what is the actual track distance, in kilometers, between the two stations?",
    "options": [
      {
        "letter": "A",
        "text": "90"
      },
      {
        "letter": "B",
        "text": "108"
      },
      {
        "letter": "C",
        "text": "120"
      },
      {
        "letter": "D",
        "text": "135"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSet up a proportion: (1.25 inches) / (30 km) = (4.5 inches) / (x km).\n\nCross-multiply: 1.25x = 30 * 4.5 = 135.\n\nDivide by 1.25 (which is 5/4): x = 135 / (5/4) = 135 * (4/5) = 27 * 4 = 108 kilometers.\n\n• Choice A calculates 30 * 3 = 90.\n\n• Choice C calculates 30 * 4 = 120.\n\n• Choice D is 30 * 4.5 = 135 before dividing by 1.25.\n\nCommon Mistake: Multiplying 30 by 4.5 to get 135 and forgetting to divide by 1.25."
  },
  {
    "id": "pt4-math-m2-q4",
    "section": "math",
    "module": 2,
    "number": 4,
    "domain": "Algebra",
    "skill": "Linear functions in context",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A hydrologist models the depth H, in inches, of a mountain snowpack t days after a winter storm using the equation H = 48 - 3.75t, for 0 <= t <= 12. Which of the following is the best interpretation of 3.75 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The initial snowpack depth, in inches, immediately after the storm"
      },
      {
        "letter": "B",
        "text": "The number of days it takes for the snowpack to melt completely"
      },
      {
        "letter": "C",
        "text": "The average decrease in snowpack depth, in inches, per day"
      },
      {
        "letter": "D",
        "text": "The total amount of snowpack melted over 12 days"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nIn the linear model H = 48 - 3.75t, 48 is the initial depth at t = 0 and -3.75 is the rate of change (slope). Thus, 3.75 represents the average decrease in snowpack depth, in inches, for each 1-day increase in time.\n\n• Choice A describes the y-intercept (48 inches).\n\n• Choice B describes the x-intercept (48 / 3.75 = 12.8 days).\n\n• Choice D calculates total melt (3.75 * 12 = 45 inches).\n\nCommon Mistake: Confusing the daily melt rate (slope) with total melt or initial depth."
  },
  {
    "id": "pt4-math-m2-q5",
    "section": "math",
    "module": 2,
    "number": 5,
    "domain": "Advanced Math",
    "skill": "Complex numbers and quadratic equations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following is a solution to the equation x^2 + 12x + 85 = 0, where i = sqrt(-1)?",
    "options": [
      {
        "letter": "A",
        "text": "6 + 7i"
      },
      {
        "letter": "B",
        "text": "-6 + 14i"
      },
      {
        "letter": "C",
        "text": "-12 + 7i"
      },
      {
        "letter": "D",
        "text": "-6 - 7i"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nApply the quadratic formula x = (-b +/- sqrt(b^2 - 4ac)) / (2a) with a = 1, b = 12, c = 85:\n\nx = (-12 +/- sqrt(12^2 - 4(1)(85))) / 2\n\nx = (-12 +/- sqrt(144 - 340)) / 2\n\nx = (-12 +/- sqrt(-196)) / 2\n\nx = (-12 +/- 14i) / 2 = -6 +/- 7i.\n\nThus, the two solutions are -6 + 7i and -6 - 7i. Choice D is -6 - 7i.\n\n• Choice A has a sign error on the real part (+6).\n\n• Choice B failed to divide 14i by 2.\n\n• Choice C failed to divide -12 by 2.\n\nCommon Mistake: Forgetting to divide both the real and imaginary parts by 2."
  },
  {
    "id": "pt4-math-m2-q6",
    "section": "math",
    "module": 2,
    "number": 6,
    "domain": "Algebra",
    "skill": "Systems of linear inequalities in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following ordered pairs (x, y) is a solution to the system of inequalities below?\ny < 4x - 5\ny >= -2x + 3",
    "options": [
      {
        "letter": "A",
        "text": "(3, 4)"
      },
      {
        "letter": "B",
        "text": "(2, 3)"
      },
      {
        "letter": "C",
        "text": "(1, 2)"
      },
      {
        "letter": "D",
        "text": "(4, -6)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nTest each candidate ordered pair in both inequalities:\n\nFor (3, 4):\n\n• Inequality 1: 4 < 4(3) - 5 -> 4 < 7 (True)\n\n• Inequality 2: 4 >= -2(3) + 3 -> 4 >= -3 (True)\n\nBoth inequalities are satisfied, so (3, 4) is a solution.\n\n• Choice B (2, 3): 3 < 4(2) - 5 -> 3 < 3 (False, strict inequality).\n\n• Choice C (1, 2): 2 < 4(1) - 5 -> 2 < -1 (False).\n\n• Choice D (4, -6): -6 >= -2(4) + 3 -> -6 >= -5 (False).\n\nCommon Mistake: Treating the strict inequality y < 4x - 5 as inclusive, choosing (2, 3)."
  },
  {
    "id": "pt4-math-m2-q7",
    "section": "math",
    "module": 2,
    "number": 7,
    "domain": "Geometry and Trigonometry",
    "skill": "Similar triangles and proportionality",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Triangles UVW and XYZ are similar, where angle U corresponds to angle X and angle V corresponds to angle Y. If UV = 20, VW = 32, and XY = 15, what is the length of YZ?",
    "options": [
      {
        "letter": "A",
        "text": "18"
      },
      {
        "letter": "B",
        "text": "24"
      },
      {
        "letter": "C",
        "text": "27"
      },
      {
        "letter": "D",
        "text": "42.67"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nBecause triangles UVW and XYZ are similar, corresponding sides are proportional:\n\nXY / UV = YZ / VW\n\n15 / 20 = YZ / 32\n\nSimplify 15/20 to 3/4:\n\n3 / 4 = YZ / 32\n\nCross-multiplying gives 4 * YZ = 96 -> YZ = 24.\n\n• Choice A subtracts 5 from 23.\n\n• Choice C subtracts 5 from 32 (32 - 5 = 27).\n\n• Choice D inverts the scale factor: 32 * (4/3) = 42.67.\n\nCommon Mistake: Subtracting the difference (20 - 15 = 5) from 32 instead of multiplying by the scale factor 15/20."
  },
  {
    "id": "pt4-math-m2-q8",
    "section": "math",
    "module": 2,
    "number": 8,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Linear regression and scatterplots",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A linear regression line modeling the annual maintenance cost y, in hundreds of dollars, of a delivery truck that is x years old is given by y = 4.6x + 18.2. A 12-year-old truck (x = 12) had an actual annual maintenance cost of $6,980 (y = 69.8). What is the residual for this truck (Residual = Actual y - Predicted y)?",
    "options": [
      {
        "letter": "A",
        "text": "3.6"
      },
      {
        "letter": "B",
        "text": "73.4"
      },
      {
        "letter": "C",
        "text": "-3.6"
      },
      {
        "letter": "D",
        "text": "-8.2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Compute the predicted value y_pred at x = 12:\n\ny_pred = 4.6(12) + 18.2 = 55.2 + 18.2 = 73.4.\n\nStep 2: Calculate the residual:\n\nResidual = Actual y - Predicted y = 69.8 - 73.4 = -3.6.\n\n• Choice A reverses the subtraction order (73.4 - 69.8 = +3.6).\n\n• Choice B is the predicted value (73.4) rather than the residual.\n\n• Choice D results from arithmetic error.\n\nCommon Mistake: Computing Predicted minus Actual (+3.6) instead of Actual minus Predicted (-3.6)."
  },
  {
    "id": "pt4-math-m2-q9",
    "section": "math",
    "module": 2,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Exponential equations and functions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A certificate of deposit is modeled by A(t) = 25,000(1.04)^(2t), where A(t) is the balance in dollars t years after the initial investment. Which of the following equivalent expressions displays the annual percentage growth rate as an explicit constant in the base?",
    "options": [
      {
        "letter": "A",
        "text": "25,000(1 + 0.04)^t"
      },
      {
        "letter": "B",
        "text": "25,000(1 + 0.08)^t"
      },
      {
        "letter": "C",
        "text": "25,000(1.0816)^(2t)"
      },
      {
        "letter": "D",
        "text": "25,000(1 + 0.0816)^t"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nApply the power-of-a-power rule: (1.04)^(2t) = (1.04^2)^t.\n\nCalculate 1.04^2 = 1.0816.\n\nRewriting 1.0816 in the form (1 + r) yields (1 + 0.0816), which explicitly shows the effective annual growth rate of 8.16%.\n\n• Choice A ignores the factor of 2 in the exponent.\n\n• Choice B uses simple interest multiplication (2 * 0.04 = 0.08) instead of compounding.\n\n• Choice C keeps the exponent 2t alongside the annual growth factor.\n\nCommon Mistake: Multiplying 0.04 by 2 to get 0.08 instead of squaring 1.04."
  },
  {
    "id": "pt4-math-m2-q10",
    "section": "math",
    "module": 2,
    "number": 10,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, a and b are constants:\n8x - ay = 28\nbx - 15y = 42\nIf the system has infinitely many solutions (x, y), what is the value of a + b?",
    "options": [
      {
        "letter": "A",
        "text": "22"
      },
      {
        "letter": "B",
        "text": "18"
      },
      {
        "letter": "C",
        "text": "25"
      },
      {
        "letter": "D",
        "text": "33"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, all corresponding coefficients and constants must be in the exact same proportion.\n\nCompare the constant terms: 28 / 42 = 2/3.\n\nSet the x- and y-coefficient ratios equal to 2/3:\n\n1. 8 / b = 2 / 3 -> 2b = 24 -> b = 12.\n\n2. (-a) / (-15) = 2 / 3 -> a / 15 = 2 / 3 -> 3a = 30 -> a = 10.\n\nSum the constants: a + b = 10 + 12 = 22.\n\n• Choice B and Choice C result from miscalculating the fractional proportions.\n\n• Choice D inverts the ratio (15 * 1.5 + 8 * 1.5 = 22.5 + 12).\n\nCommon Mistake: Inverting the proportion when solving for b (calculating b = 8 * (2/3) instead of 8 / (2/3))."
  },
  {
    "id": "pt4-math-m2-q11",
    "section": "math",
    "module": 2,
    "number": 11,
    "domain": "Advanced Math",
    "skill": "Nonlinear systems of equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the horizontal line y = c intersects the parabola y = 5x^2 - 30x + 53 at exactly one point. What is the value of c?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "53"
      },
      {
        "letter": "D",
        "text": "98"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nA horizontal line y = c intersects an upward-opening parabola at a single point if and only if it passes through the parabola's vertex (minimum point).\n\nFind the x-coordinate of the vertex using x = -B / (2A):\n\nx = -(-30) / (2 * 5) = 30 / 10 = 3.\n\nSubstitute x = 3 into the parabola's equation to find the minimum y-value:\n\ny = 5(3)^2 - 30(3) + 53 = 5(9) - 90 + 53 = 45 - 90 + 53 = 8.\n\nTherefore, c = 8.\n\n• Choice A is the x-coordinate of the vertex (3) rather than the y-coordinate.\n\n• Choice C is the y-intercept (53).\n\n• Choice D results from adding 45 + 53 without subtracting 90.\n\nCommon Mistake: Selecting the vertex x-coordinate (3) rather than evaluating y at x = 3."
  },
  {
    "id": "pt4-math-m2-q12",
    "section": "math",
    "module": 2,
    "number": 12,
    "domain": "Geometry and Trigonometry",
    "skill": "Circles, sector area, and radians",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A circle has a radius of 16. A sector of this circle has an area of 40pi. What is the measure of the central angle of this sector, in radians?",
    "options": [
      {
        "letter": "A",
        "text": "(5/32)pi"
      },
      {
        "letter": "B",
        "text": "(5/8)pi"
      },
      {
        "letter": "C",
        "text": "(5/16)pi"
      },
      {
        "letter": "D",
        "text": "(16/5)pi"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUse the radian sector area formula A = (1/2) * r^2 * theta:\n\n40pi = (1/2) * (16)^2 * theta\n\n40pi = (1/2) * 256 * theta\n\n40pi = 128 * theta\n\ntheta = (40pi) / 128 = (5/16)pi radians.\n\n• Choice A divides 40 by 256 without multiplying by 1/2 (40/256 = 5/32).\n\n• Choice B doubles the angle (5/8 pi).\n\n• Choice D inverts the fraction (128/40 = 16/5).\n\nCommon Mistake: Forgetting the 1/2 factor in A = (1/2)r^2*theta, obtaining (5/32)pi."
  },
  {
    "id": "pt4-math-m2-q13",
    "section": "math",
    "module": 2,
    "number": 13,
    "domain": "Advanced Math",
    "skill": "Rational expressions and equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The rational function f is defined by f(x) = (x^2 - 25) / (x^2 + 2x - 15). Which of the following describes all vertical asymptotes of the graph of y = f(x) in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "x = -5 and x = 3"
      },
      {
        "letter": "B",
        "text": "x = -5 only"
      },
      {
        "letter": "C",
        "text": "x = 5 and x = -3"
      },
      {
        "letter": "D",
        "text": "x = 3 only"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nFactor both the numerator and denominator:\n\nNumerator: x^2 - 25 = (x - 5)(x + 5)\n\nDenominator: x^2 + 2x - 15 = (x + 5)(x - 3)\n\nThus, f(x) = [(x - 5)(x + 5)] / [(x + 5)(x - 3)].\n\nThe common factor (x + 5) cancels out for x != -5, which means x = -5 is a removable discontinuity (a hole), NOT a vertical asymptote. The remaining factor in the denominator, (x - 3), equals zero at x = 3, producing a vertical asymptote at x = 3 only.\n\n• Choice A mistakenly classifies the hole at x = -5 as a vertical asymptote.\n\n• Choice B identifies the hole instead of the vertical asymptote.\n\n• Choice C reverses the signs of the roots.\n\nCommon Mistake: Treating every zero of the unsimplified denominator as a vertical asymptote without canceling common factors."
  },
  {
    "id": "pt4-math-m2-q14",
    "section": "math",
    "module": 2,
    "number": 14,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Statistical inference and sampling",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A nonpartisan research institute surveyed a random sample of 800 registered voters in Congressional District 4 and found that 58% supported a municipal bond measure, with a margin of error of +/- 3.4% at a 95% confidence level. Which of the following is the largest population to which these survey findings can legitimately be generalized?",
    "options": [
      {
        "letter": "A",
        "text": "All registered voters in Congressional District 4"
      },
      {
        "letter": "B",
        "text": "All adult residents in the entire state"
      },
      {
        "letter": "C",
        "text": "Only the 800 registered voters who completed the survey"
      },
      {
        "letter": "D",
        "text": "All residents of Congressional District 4, including unregistered residents"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nStatistical inference from a random sample applies exclusively to the specific population from which the sample was randomly selected. Because the sample was drawn randomly from registered voters in Congressional District 4, the estimate (58% +/- 3.4%) can be generalized to all registered voters in Congressional District 4.\n\n• Choice B overgeneralizes to the entire state.\n\n• Choice C ignores statistical inference from a representative random sample.\n\n• Choice D includes unregistered residents who were not part of the sampling frame.\n\nCommon Mistake: Overgeneralizing district-level survey results to an entire state or to unregistered residents."
  },
  {
    "id": "pt4-math-m2-q15",
    "section": "math",
    "module": 2,
    "number": 15,
    "domain": "Advanced Math",
    "skill": "Structure of quadratic expressions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the quadratic equation x^2 + kx + 54 = 0, k is a positive integer. If the equation has two distinct real integer solutions, what is the least possible value of k?",
    "options": [
      {
        "letter": "A",
        "text": "14"
      },
      {
        "letter": "B",
        "text": "15"
      },
      {
        "letter": "C",
        "text": "21"
      },
      {
        "letter": "D",
        "text": "29"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nLet the two distinct integer roots be r1 and r2. Factoring gives (x - r1)(x - r2) = x^2 - (r1 + r2)x + r1*r2 = 0.\n\nThus, r1 * r2 = 54 and k = -(r1 + r2). Since k > 0, both roots must be negative integers: let r1 = -a and r2 = -b where a and b are distinct positive integers with a * b = 54 and k = a + b.\n\nList the positive factor pairs of 54:\n\n• 1 * 54 = 54 -> k = 1 + 54 = 55\n\n• 2 * 27 = 54 -> k = 2 + 27 = 29\n\n• 3 * 18 = 54 -> k = 3 + 18 = 21\n\n• 6 * 9 = 54 -> k = 6 + 9 = 15\n\nAll four factor pairs consist of distinct integers, and the minimum sum is 6 + 9 = 15.\n\n• Choice A (14) is not the sum of any integer factor pair of 54.\n\n• Choice C (21) and Choice D (29) are valid values of k, but not the least.\n\nCommon Mistake: Forgetting to check all factor pairs up to sqrt(54) ≈ 7.35, stopping early at 3 * 18 -> 21."
  },
  {
    "id": "pt4-math-m2-q16",
    "section": "math",
    "module": 2,
    "number": 16,
    "domain": "Algebra",
    "skill": "Linear inequalities and absolute value",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Which of the following absolute value inequalities has the solution set x < -6 or x > 8?",
    "options": [
      {
        "letter": "A",
        "text": "|x + 1| > 7"
      },
      {
        "letter": "B",
        "text": "|x - 7| > 1"
      },
      {
        "letter": "C",
        "text": "|x - 1| > 7"
      },
      {
        "letter": "D",
        "text": "|x + 7| > 1"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nExpress the disjoint outside interval x < -6 or x > 8 in the form |x - midpoint| > radius:\n\nMidpoint = (-6 + 8) / 2 = 2 / 2 = 1.\n\nRadius = (8 - (-6)) / 2 = 14 / 2 = 7.\n\nTherefore, the inequality is |x - 1| > 7.\n\nVerification: x - 1 > 7 -> x > 8, and x - 1 < -7 -> x < -6.\n\n• Choice A gives x < -8 or x > 6.\n\n• Choice B gives x < 6 or x > 8.\n\n• Choice D gives x < -8 or x > -6.\n\nCommon Mistake: Swapping the midpoint (1) and the radius (7), selecting Choice B."
  },
  {
    "id": "pt4-math-m2-q17",
    "section": "math",
    "module": 2,
    "number": 17,
    "domain": "Geometry and Trigonometry",
    "skill": "Area and volume of solids",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Right circular Cone P and right circular Cone Q have equal volumes. The radius of Cone P is 20% less than the radius of Cone Q. By what percentage is the height of Cone P greater than the height of Cone Q?",
    "options": [
      {
        "letter": "A",
        "text": "20%"
      },
      {
        "letter": "B",
        "text": "36%"
      },
      {
        "letter": "C",
        "text": "44%"
      },
      {
        "letter": "D",
        "text": "56.25%"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nThe volume of a right circular cone is V = (1/3) * pi * r^2 * h.\n\nLet r_P, h_P and r_Q, h_Q be the radii and heights of Cones P and Q.\n\nSince r_P is 20% less than r_Q: r_P = 0.80 * r_Q = (4/5) * r_Q.\n\nEquating the volumes:\n\n(1/3) * pi * (r_P)^2 * h_P = (1/3) * pi * (r_Q)^2 * h_Q\n\n((4/5) * r_Q)^2 * h_P = (r_Q)^2 * h_Q\n\n(16/25) * h_P = h_Q\n\nh_P = (25/16) * h_Q = 1.5625 * h_Q.\n\nSince h_P = 1.5625 * h_Q, the height of Cone P is 0.5625 = 56.25% greater than the height of Cone Q.\n\n• Choice A (20%) ignores both squaring and the asymmetric percentage base.\n\n• Choice B (36%) is 1 - 0.64, which is how much shorter Q is than P.\n\n• Choice C (44%) calculates 1.2^2 - 1.\n\nCommon Mistake: Calculating 1 - 0.64 = 36% (percent decrease from P to Q) instead of 25/16 - 1 = 56.25% (percent increase from Q to P)."
  },
  {
    "id": "pt4-math-m2-q18",
    "section": "math",
    "module": 2,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the system of equations below, p is a constant:\n12x - 8y = 29\n9x - py = 17\nIf the system has no solution, what is the value of p?",
    "correctAnswer": "6",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A system of two linear equations has no solution when the lines are parallel (same slope) and have different y-intercepts.\n\nStep 2: Equate the slopes (-A/B):\n\n-12 / (-8) = -9 / (-p)\n\nSimplify 12/8 to 3/2:\n\n3 / 2 = 9 / p\n\nStep 3: Cross-multiply:\n\n3p = 18 -> p = 6.\n\nStep 4: Verify distinct intercepts: multiplying the first equation by 3/4 gives 9x - 6y = 21.75 != 17, confirming no solution.\n\nCommon Mistake: Sign error with negative y-coefficients, yielding -6."
  },
  {
    "id": "pt4-math-m2-q19",
    "section": "math",
    "module": 2,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the quadratic equation 25x^2 + kx + 36 = 0, k is a positive constant. If the equation has exactly one real solution, what is the value of k?",
    "correctAnswer": "60",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A quadratic equation Ax^2 + Bx + C = 0 has exactly one real solution when its discriminant equals zero:\n\nDelta = B^2 - 4AC = 0.\n\nStep 2: Substitute A = 25, B = k, and C = 36:\n\nk^2 - 4(25)(36) = 0\n\nk^2 - 3,600 = 0\n\nk^2 = 3,600\n\nStep 3: Take the positive square root: k = sqrt(3,600) = 60.\n\nShortcut: Recognize the perfect square trinomial (5x + 6)^2 = 25x^2 + 2(5x)(6) + 36 = 25x^2 + 60x + 36, so k = 60.\n\nCommon Mistake: Forgetting the factor of 2 in 2ab, calculating 5 * 6 = 30 instead of 60."
  },
  {
    "id": "pt4-math-m2-q20",
    "section": "math",
    "module": 2,
    "number": 20,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Measures of center and spread",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "Two groups of participants completed a standardized aptitude assessment. Group A had 16 participants with a mean score of 72. Group B had 24 participants with a mean score of 82. What is the mean score of all 40 participants combined?",
    "correctAnswer": "78",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Calculate the total score sum for Group A:\n\n16 * 72 = 1,152.\n\nStep 2: Calculate the total score sum for Group B:\n\n24 * 82 = 1,968.\n\nStep 3: Add both sums together:\n\n1,152 + 1,968 = 3,120.\n\nStep 4: Divide by the total number of participants (16 + 24 = 40):\n\nCombined Mean = 3,120 / 40 = 78.\n\nCommon Mistake: Taking the unweighted average (72 + 82) / 2 = 77 without weighting by group sizes."
  },
  {
    "id": "pt4-math-m2-q21",
    "section": "math",
    "module": 2,
    "number": 21,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations in the coordinate plane",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, a circle has diameter endpoints at (-4, 7) and (8, -9). When the equation of the circle is written in the form (x - h)^2 + (y - k)^2 = R, what is the value of R?",
    "correctAnswer": "100",
    "explanation": "Step-by-Step Solution:\n\nStep 1: R represents r^2, the square of the radius.\n\nStep 2: Calculate the diameter squared d^2 using the distance formula between (-4, 7) and (8, -9):\n\nd^2 = (8 - (-4))^2 + (-9 - 7)^2 = 12^2 + (-16)^2 = 144 + 256 = 400.\n\nStep 3: Since d = 2r, we have d^2 = 4r^2 -> 400 = 4r^2 -> r^2 = 100.\n\nThus, R = 100.\n\nAlternatively: Find the center midpoint ((-4+8)/2, (7-9)/2) = (2, -1). Then r^2 = (8 - 2)^2 + (-9 - (-1))^2 = 6^2 + (-8)^2 = 36 + 64 = 100.\n\nCommon Mistake: Reporting the radius r = 10 or the diameter squared d^2 = 400 instead of r^2 = 100."
  },
  {
    "id": "pt4-math-m2-q22",
    "section": "math",
    "module": 2,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = -5x + k is tangent to the parabola y = 2x^2 - 13x + 27 at exactly one point. What is the value of the constant k?",
    "correctAnswer": "19",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the line equation equal to the parabola equation:\n\n2x^2 - 13x + 27 = -5x + k\n\nStep 2: Move all terms to the left side to form Ax^2 + Bx + C = 0:\n\n2x^2 - 8x + (27 - k) = 0\n\nStep 3: For a single point of intersection (tangency), the discriminant Delta = B^2 - 4AC must equal 0:\n\n(-8)^2 - 4(2)(27 - k) = 0\n\n64 - 8(27 - k) = 0\n\nDivide both sides by 8:\n\n8 - (27 - k) = 0\n\n8 - 27 + k = 0\n\n-19 + k = 0 -> k = 19.\n\nVerification: When k = 19, 2x^2 - 8x + 8 = 2(x - 2)^2 = 0, giving single tangency at x = 2.\n\nCommon Mistake: Sign errors when combining -13x + 5x = -8x or distributing -8 across (27 - k)."
  }
];
