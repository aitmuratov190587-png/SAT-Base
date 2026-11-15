import type { MockTestQuestion } from './pt1_types.ts';

export const PT5_MATH_MODULE2_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt5-math-m2-q1",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 12(4x - 7) - 15 = 81, what is the value of 4x - 7?",
    "options": [
      {
        "letter": "A",
        "text": "3.75"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "15"
      },
      {
        "letter": "D",
        "text": "96"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nAdd 15 to both sides of 12(4x - 7) - 15 = 81 to get 12(4x - 7) = 96. Dividing both sides by 12 gives 4x - 7 = 8.\n\n• Choice A is the value of x (since 4x - 7 = 8 -> 4x = 15 -> x = 3.75), not 4x - 7.\n\n• Choice C is 4x = 15.\n\n• Choice D is 12(4x - 7) = 96 before dividing by 12.\n\nCommon Mistake: Solving all the way for x = 3.75 instead of stopping at the grouped expression 4x - 7 = 8."
  },
  {
    "id": "pt5-math-m2-q2",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 2,
    "domain": "Advanced Math",
    "skill": "Operations with polynomials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (8x - 5)(3x + 7)?",
    "options": [
      {
        "letter": "A",
        "text": "24x^2 - 35"
      },
      {
        "letter": "B",
        "text": "24x^2 - 41x - 35"
      },
      {
        "letter": "C",
        "text": "24x^2 + 41x - 35"
      },
      {
        "letter": "D",
        "text": "24x^2 + 71x - 35"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nApply the distributive property (FOIL):\n\n(8x)(3x) + (8x)(7) + (-5)(3x) + (-5)(7) = 24x^2 + 56x - 15x - 35 = 24x^2 + 41x - 35.\n\n• Choice A omits the middle cross-terms.\n\n• Choice B calculates -56x + 15x = -41x.\n\n• Choice D adds 56x + 15x = 71x.\n\nCommon Mistake: Sign errors when combining the middle terms +56x and -15x."
  },
  {
    "id": "pt5-math-m2-q3",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 3,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios, rates, and proportions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "On a nautical navigation chart, a length of 1.5 inches represents an actual ocean distance of 45 nautical miles. Two islands are separated by 5.2 inches on the chart. What is the actual ocean distance, in nautical miles, between the two islands?",
    "options": [
      {
        "letter": "A",
        "text": "135"
      },
      {
        "letter": "B",
        "text": "234"
      },
      {
        "letter": "C",
        "text": "180"
      },
      {
        "letter": "D",
        "text": "156"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nSet up a proportion: (1.5 inches) / (45 nautical miles) = (5.2 inches) / (x nautical miles).\n\nNotice that each 1 inch represents 45 / 1.5 = 30 nautical miles. Multiply 5.2 * 30 = 156 nautical miles.\n\n• Choice A calculates 45 * 3 = 135.\n\n• Choice B is 45 * 5.2 = 234 before dividing by 1.5.\n\n• Choice C calculates 45 * 4 = 180.\n\nCommon Mistake: Multiplying 45 by 5.2 to get 234 and forgetting to divide by 1.5."
  },
  {
    "id": "pt5-math-m2-q4",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 4,
    "domain": "Algebra",
    "skill": "Linear functions in context",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A mechanical engineer models the internal air pressure P, in pounds per square inch (psi), of a pneumatic tank t hours after a release valve is opened using the equation P = 82 - 2.4t, for 0 <= t <= 30. Which of the following is the best interpretation of 2.4 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The average decrease in the tank's air pressure, in psi, per hour"
      },
      {
        "letter": "B",
        "text": "The initial air pressure, in psi, when the release valve was opened"
      },
      {
        "letter": "C",
        "text": "The total number of hours required to depressurize the tank completely"
      },
      {
        "letter": "D",
        "text": "The total decrease in air pressure over 30 hours"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nIn the linear equation P = 82 - 2.4t, 82 is the initial pressure at t = 0 and -2.4 is the rate of change (slope). Thus, 2.4 represents the average decrease in air pressure, in psi, for each 1-hour increase in time.\n\n• Choice B describes the y-intercept (82 psi).\n\n• Choice C describes the x-intercept (82 / 2.4 ≈ 34.17 hours).\n\n• Choice D calculates total pressure drop over 30 hours (2.4 * 30 = 72 psi).\n\nCommon Mistake: Confusing the hourly rate of change (slope) with total pressure drop or initial pressure."
  },
  {
    "id": "pt5-math-m2-q5",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 5,
    "domain": "Advanced Math",
    "skill": "Complex numbers and quadratic equations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following is a solution to the equation x^2 - 14x + 113 = 0, where i = sqrt(-1)?",
    "options": [
      {
        "letter": "A",
        "text": "-7 + 8i"
      },
      {
        "letter": "B",
        "text": "7 + 8i"
      },
      {
        "letter": "C",
        "text": "7 + 16i"
      },
      {
        "letter": "D",
        "text": "14 + 8i"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nApply the quadratic formula x = (-b +/- sqrt(b^2 - 4ac)) / (2a) with a = 1, b = -14, c = 113:\n\nx = (14 +/- sqrt((-14)^2 - 4(1)(113))) / 2\n\nx = (14 +/- sqrt(196 - 452)) / 2\n\nx = (14 +/- sqrt(-256)) / 2\n\nx = (14 +/- 16i) / 2 = 7 +/- 8i.\n\nThus, the two solutions are 7 + 8i and 7 - 8i. Choice B is 7 + 8i.\n\n• Choice A has a sign error on the real part (-7).\n\n• Choice C failed to divide 16i by 2.\n\n• Choice D failed to divide 14 by 2.\n\nCommon Mistake: Forgetting to divide both terms in the numerator by 2."
  },
  {
    "id": "pt5-math-m2-q6",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 6,
    "domain": "Algebra",
    "skill": "Systems of linear inequalities in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following ordered pairs (x, y) satisfies the system of inequalities below?\ny > 3x - 7\ny <= -2x + 9",
    "options": [
      {
        "letter": "A",
        "text": "(4, 4)"
      },
      {
        "letter": "B",
        "text": "(3, 2)"
      },
      {
        "letter": "C",
        "text": "(2, 3)"
      },
      {
        "letter": "D",
        "text": "(1, -5)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nSubstitute each candidate point into both inequalities:\n\nFor (2, 3):\n\n• Inequality 1: 3 > 3(2) - 7 -> 3 > -1 (True)\n\n• Inequality 2: 3 <= -2(2) + 9 -> 3 <= 5 (True)\n\nBoth inequalities hold true, so (2, 3) is a solution.\n\n• Choice A (4, 4): 4 <= -2(4) + 9 -> 4 <= 1 (False).\n\n• Choice B (3, 2): 2 > 3(3) - 7 -> 2 > 2 (False, strict inequality).\n\n• Choice D (1, -5): -5 > 3(1) - 7 -> -5 > -4 (False).\n\nCommon Mistake: Treating the strict inequality y > 3x - 7 as inclusive, selecting (3, 2)."
  },
  {
    "id": "pt5-math-m2-q7",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 7,
    "domain": "Geometry and Trigonometry",
    "skill": "Similar triangles and proportionality",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Triangles GHI and JKL are similar, where angle G corresponds to angle J and angle H corresponds to angle K. If GH = 25, HI = 40, and JK = 15, what is the length of KL?",
    "options": [
      {
        "letter": "A",
        "text": "30"
      },
      {
        "letter": "B",
        "text": "15"
      },
      {
        "letter": "C",
        "text": "66.67"
      },
      {
        "letter": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nBecause triangles GHI and JKL are similar, corresponding sides are proportional:\n\nJK / GH = KL / HI\n\n15 / 25 = KL / 40\n\nSimplify 15/25 to 3/5:\n\n3 / 5 = KL / 40\n\nCross-multiplying gives 5 * KL = 120 -> KL = 24.\n\n• Choice A subtracts 10 from 40 (40 - 10 = 30).\n\n• Choice B sets KL equal to JK.\n\n• Choice C inverts the scale factor: 40 * (5/3) = 66.67.\n\nCommon Mistake: Subtracting the side difference (25 - 15 = 10) from 40 instead of scaling by 15/25."
  },
  {
    "id": "pt5-math-m2-q8",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 8,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Linear regression and scatterplots",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A linear regression equation modeling the dissolved oxygen concentration y, in milligrams per liter, of a mountain stream at water temperature x, in degrees Celsius, is given by y = -3.4x + 92.8 (scaled by 10). At a water temperature of 14 degrees Celsius (x = 14), the observed scaled reading was 48.9. What is the residual for this observation (Residual = Observed y - Predicted y)?",
    "options": [
      {
        "letter": "A",
        "text": "3.7"
      },
      {
        "letter": "B",
        "text": "-3.7"
      },
      {
        "letter": "C",
        "text": "45.2"
      },
      {
        "letter": "D",
        "text": "13.1"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Compute the predicted value y_pred at x = 14:\n\ny_pred = -3.4(14) + 92.8 = -47.6 + 92.8 = 45.2.\n\nStep 2: Calculate the residual:\n\nResidual = Observed y - Predicted y = 48.9 - 45.2 = 3.7.\n\n• Choice B reverses the subtraction order (45.2 - 48.9 = -3.7).\n\n• Choice C is the predicted value (45.2) rather than the residual.\n\n• Choice D results from arithmetic error.\n\nCommon Mistake: Subtracting Observed from Predicted (-3.7) instead of Predicted from Observed (+3.7)."
  },
  {
    "id": "pt5-math-m2-q9",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Exponential equations and functions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A trust fund balance is modeled by B(t) = 18,000(1.03)^(4t), where B(t) is the balance in dollars t years after the fund was established. Which of the following equivalent expressions displays the approximate annual percentage growth rate as an explicit constant in the base?",
    "options": [
      {
        "letter": "A",
        "text": "18,000(1 + 0.03)^t"
      },
      {
        "letter": "B",
        "text": "18,000(1 + 0.1255)^t"
      },
      {
        "letter": "C",
        "text": "18,000(1 + 0.12)^t"
      },
      {
        "letter": "D",
        "text": "18,000(1.1255)^(4t)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nApply the power-of-a-power exponent rule: (1.03)^(4t) = (1.03^4)^t.\n\nCalculate 1.03^4:\n\n1.03^2 = 1.0609\n\n(1.0609)^2 ≈ 1.125509.\n\nRewriting 1.1255 in the form (1 + r) gives (1 + 0.1255), which explicitly displays the effective annual growth rate of approximately 12.55%.\n\n• Choice A ignores the exponent 4.\n\n• Choice C uses simple multiplication (4 * 0.03 = 0.12) instead of compounding.\n\n• Choice D keeps the exponent 4t alongside the annual growth factor.\n\nCommon Mistake: Multiplying 0.03 * 4 = 0.12 instead of raising 1.03 to the 4th power."
  },
  {
    "id": "pt5-math-m2-q10",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 10,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, a and b are constants:\n9x + ay = 30\nbx + 16y = 40\nIf the system has infinitely many solutions (x, y), what is the value of a + b?",
    "options": [
      {
        "letter": "A",
        "text": "18"
      },
      {
        "letter": "B",
        "text": "21"
      },
      {
        "letter": "C",
        "text": "24"
      },
      {
        "letter": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, all corresponding coefficients and constants must be in the exact same proportion.\n\nCompare the constant terms: 30 / 40 = 3/4.\n\nSet the x- and y-coefficient ratios equal to 3/4:\n\n1. 9 / b = 3 / 4 -> 3b = 36 -> b = 12.\n\n2. a / 16 = 3 / 4 -> 4a = 48 -> a = 12.\n\nSum the constants: a + b = 12 + 12 = 24.\n\n• Choice A and Choice B result from miscalculating the fractional proportions.\n\n• Choice D inverts the ratio (16 * 4/3 + 9 * 4/3).\n\nCommon Mistake: Inverting the ratio when solving for b (calculating b = 9 * 3/4 = 6.75 instead of 9 / (3/4) = 12)."
  },
  {
    "id": "pt5-math-m2-q11",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 11,
    "domain": "Advanced Math",
    "skill": "Nonlinear systems of equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the horizontal line y = c intersects the parabola y = -3x^2 + 24x - 37 at exactly one point. What is the value of c?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "-37"
      },
      {
        "letter": "C",
        "text": "19"
      },
      {
        "letter": "D",
        "text": "11"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nA horizontal line y = c intersects a downward-opening parabola at a single point if and only if it passes through the parabola's vertex (maximum point).\n\nFind the x-coordinate of the vertex using x = -B / (2A):\n\nx = -24 / (2 * -3) = -24 / -6 = 4.\n\nSubstitute x = 4 into the quadratic equation to find the maximum y-value:\n\ny = -3(4)^2 + 24(4) - 37 = -3(16) + 96 - 37 = -48 + 96 - 37 = 11.\n\nTherefore, c = 11.\n\n• Choice A is the x-coordinate of the vertex (4) rather than the y-coordinate.\n\n• Choice B is the y-intercept (-37).\n\n• Choice C results from arithmetic errors during evaluation.\n\nCommon Mistake: Selecting the vertex x-coordinate (4) instead of evaluating y at x = 4."
  },
  {
    "id": "pt5-math-m2-q12",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 12,
    "domain": "Geometry and Trigonometry",
    "skill": "Circles, arc length, and radians",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A circle has a radius of 30. A central angle theta intercepts an arc of length 25pi on the circle. What is the measure of angle theta, in radians?",
    "options": [
      {
        "letter": "A",
        "text": "(5/6)pi"
      },
      {
        "letter": "B",
        "text": "(6/5)pi"
      },
      {
        "letter": "C",
        "text": "(5/12)pi"
      },
      {
        "letter": "D",
        "text": "(5/3)pi"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nUse the radian arc length formula s = r * theta:\n\n25pi = 30 * theta\n\ntheta = (25pi) / 30 = (5/6)pi radians.\n\n• Choice B inverts the ratio to 30 / 25 = 6/5.\n\n• Choice C divides by 60 instead of 30.\n\n• Choice D doubles 5/6.\n\nCommon Mistake: Inverting the formula to theta = r / s = 30 / (25pi)."
  },
  {
    "id": "pt5-math-m2-q13",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 13,
    "domain": "Advanced Math",
    "skill": "Rational expressions and equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The rational function q is defined by q(x) = (x^2 - 36) / (x^2 - 3x - 18). Which of the following describes all vertical asymptotes of the graph of y = q(x) in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "x = -3 and x = 6"
      },
      {
        "letter": "B",
        "text": "x = -3 only"
      },
      {
        "letter": "C",
        "text": "x = 6 only"
      },
      {
        "letter": "D",
        "text": "x = 3 and x = -6"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nFactor both the numerator and denominator:\n\nNumerator: x^2 - 36 = (x - 6)(x + 6)\n\nDenominator: x^2 - 3x - 18 = (x - 6)(x + 3)\n\nThus, q(x) = [(x - 6)(x + 6)] / [(x - 6)(x + 3)].\n\nBecause the common factor (x - 6) cancels out for x != 6, x = 6 is a removable discontinuity (a hole), NOT a vertical asymptote. The remaining denominator factor (x + 3) equals zero at x = -3, producing a vertical asymptote at x = -3 only.\n\n• Choice A mistakenly classifies the hole at x = 6 as a vertical asymptote.\n\n• Choice C selects the hole instead of the vertical asymptote.\n\n• Choice D reverses the signs of the roots.\n\nCommon Mistake: Treating all zeros of the unsimplified denominator as vertical asymptotes without canceling common factors."
  },
  {
    "id": "pt5-math-m2-q14",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 14,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Statistical inference and margin of error",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A transportation commission surveyed a random sample of 1,000 adult residents in Metropolitan Area Z and estimated that 62% of all adult residents in Metropolitan Area Z support expanding regional light-rail transit, with an associated margin of error of +/- 3.1% at a 95% confidence level. Which of the following statements is best supported by these results?",
    "options": [
      {
        "letter": "A",
        "text": "Exactly 62% of all adult residents in the entire country support light-rail expansion."
      },
      {
        "letter": "B",
        "text": "It is impossible for the true percentage of adult residents in Metropolitan Area Z who support light-rail expansion to exceed 62%."
      },
      {
        "letter": "C",
        "text": "It is plausible that between 58.9% and 65.1% of all adult residents in Metropolitan Area Z support light-rail expansion."
      },
      {
        "letter": "D",
        "text": "If another random sample of 1,000 adults were surveyed, exactly 620 respondents would support light-rail expansion."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nA sample estimate of 62% with a margin of error of +/- 3.1% defines a 95% confidence interval of [62% - 3.1%, 62% + 3.1%] = [58.9%, 65.1%] for the sampled population (all adult residents in Metropolitan Area Z). Thus, any value in this interval is plausible.\n\n• Choice A overgeneralizes beyond Metropolitan Area Z to the entire country.\n\n• Choice B ignores the upper half of the confidence interval (62% to 65.1%).\n\n• Choice D ignores natural sampling variability across repeated random samples.\n\nCommon Mistake: Treating the point estimate (62%) as an exact, fixed constant rather than an interval estimate."
  },
  {
    "id": "pt5-math-m2-q15",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 15,
    "domain": "Advanced Math",
    "skill": "Structure of quadratic expressions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the equation x^2 + kx + 60 = 0, k is a negative integer. If the equation has two distinct real integer solutions, what is the greatest possible value of k?",
    "options": [
      {
        "letter": "A",
        "text": "-61"
      },
      {
        "letter": "B",
        "text": "-19"
      },
      {
        "letter": "C",
        "text": "-17"
      },
      {
        "letter": "D",
        "text": "-16"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nLet the two distinct integer roots be r1 and r2. Factoring gives (x - r1)(x - r2) = x^2 - (r1 + r2)x + r1*r2 = 0.\n\nThus, r1 * r2 = 60 and k = -(r1 + r2). Since k < 0, (r1 + r2) > 0, so both r1 and r2 must be positive integer factors of 60. To make k as large as possible (closest to 0), we must minimize the sum (r1 + r2).\n\nList the factor pairs of 60:\n\n• 1 and 60: sum = 61 -> k = -61\n\n• 2 and 30: sum = 32 -> k = -32\n\n• 3 and 20: sum = 23 -> k = -23\n\n• 4 and 15: sum = 19 -> k = -19\n\n• 5 and 12: sum = 17 -> k = -17\n\n• 6 and 10: sum = 16 -> k = -16\n\nSince 6 and 10 are distinct integers, the minimum sum is 16, giving the greatest negative value k = -16.\n\n• Choice A (-61) is the least possible value of k.\n\n• Choice B (-19) and Choice C (-17) correspond to non-minimal factor sums.\n\nCommon Mistake: Stopping early at 5 * 12 -> -17 instead of checking 6 * 10 -> -16."
  },
  {
    "id": "pt5-math-m2-q16",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 16,
    "domain": "Algebra",
    "skill": "Linear inequalities and absolute value",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Which of the following absolute value inequalities has the solution set -7 <= x <= 13?",
    "options": [
      {
        "letter": "A",
        "text": "|x - 3| <= 10"
      },
      {
        "letter": "B",
        "text": "|x + 3| <= 10"
      },
      {
        "letter": "C",
        "text": "|x - 10| <= 3"
      },
      {
        "letter": "D",
        "text": "|x + 10| <= 3"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nExpress the closed interval [-7, 13] in the form |x - midpoint| <= radius:\n\nMidpoint = (-7 + 13) / 2 = 6 / 2 = 3.\n\nRadius = (13 - (-7)) / 2 = 20 / 2 = 10.\n\nTherefore, the inequality is |x - 3| <= 10.\n\nVerification: -10 <= x - 3 <= 10 -> adding 3 gives -7 <= x <= 13.\n\n• Choice B gives -13 <= x <= 7.\n\n• Choice C gives 7 <= x <= 13.\n\n• Choice D gives -13 <= x <= -7.\n\nCommon Mistake: Interchanging the midpoint (3) and the radius (10), selecting Choice C."
  },
  {
    "id": "pt5-math-m2-q17",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 17,
    "domain": "Geometry and Trigonometry",
    "skill": "Area and volume of solids",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Right circular Cylinder M and right circular Cylinder N have equal volumes. The height of Cylinder N is 69% greater than the height of Cylinder M. By what percentage is the radius of Cylinder M greater than the radius of Cylinder N?",
    "options": [
      {
        "letter": "A",
        "text": "26%"
      },
      {
        "letter": "B",
        "text": "30%"
      },
      {
        "letter": "C",
        "text": "34.5%"
      },
      {
        "letter": "D",
        "text": "69%"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nThe volume of a right circular cylinder is V = pi * r^2 * h.\n\nLet r_M, h_M and r_N, h_N be the radii and heights of Cylinders M and N.\n\nWe are given h_N = 1.69 * h_M.\n\nEquating their volumes:\n\npi * (r_M)^2 * h_M = pi * (r_N)^2 * h_N\n\n(r_M)^2 * h_M = (r_N)^2 * (1.69 * h_M)\n\nDivide both sides by h_M:\n\n(r_M)^2 = 1.69 * (r_N)^2\n\nTake the square root of both sides:\n\nr_M = sqrt(1.69) * r_N = 1.3 * r_N.\n\nSince r_M = 1.3 * r_N, the radius of Cylinder M is 0.30 = 30% greater than the radius of Cylinder N.\n\n• Choice A calculates 1 - 1/1.35.\n\n• Choice C takes half of 69% (34.5%) instead of taking the square root of 1.69.\n\n• Choice D assumes a linear relationship without squaring the radius.\n\nCommon Mistake: Dividing 69% by 2 to get 34.5% rather than taking the square root of 1.69."
  },
  {
    "id": "pt5-math-m2-q18",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the system of equations below, m is a constant:\n15x + 25y = 42\n9x + my = 19\nIf the system has no solution, what is the value of m?",
    "correctAnswer": "15",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A system of two linear equations has no solution when the lines have identical slopes and distinct y-intercepts.\n\nStep 2: Equate the slopes (-A/B):\n\n-15 / 25 = -9 / m\n\nSimplify -15/25 to -3/5:\n\n-3 / 5 = -9 / m\n\nStep 3: Cross-multiply:\n\n-3m = -45 -> m = 15.\n\nStep 4: Verify distinct intercepts: multiplying the first equation by 3/5 gives 9x + 15y = 25.2 != 19, confirming no solution.\n\nCommon Mistake: Multiplying 25 by 3/5 incorrectly or sign errors."
  },
  {
    "id": "pt5-math-m2-q19",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the quadratic equation 36x^2 - kx + 49 = 0, k is a positive constant. If the equation has exactly one real solution, what is the value of k?",
    "correctAnswer": "84",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A quadratic equation Ax^2 + Bx + C = 0 has exactly one real solution when its discriminant equals zero:\n\nDelta = B^2 - 4AC = 0.\n\nStep 2: Substitute A = 36, B = -k, and C = 49:\n\n(-k)^2 - 4(36)(49) = 0\n\nk^2 = 4 * 36 * 49\n\nStep 3: Take the positive square root:\n\nk = sqrt(4) * sqrt(36) * sqrt(49) = 2 * 6 * 7 = 84.\n\nShortcut: Recognize the perfect square trinomial (6x - 7)^2 = 36x^2 - 2(6x)(7) + 49 = 36x^2 - 84x + 49, so k = 84.\n\nCommon Mistake: Forgetting the factor of 2 in 2ab, calculating 6 * 7 = 42 instead of 84."
  },
  {
    "id": "pt5-math-m2-q20",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 20,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Measures of center and spread",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "Two testing laboratories analyzed water hardness samples. Lab 1 analyzed 14 samples with a mean score of 68. Lab 2 analyzed 26 samples with a mean score of 88. What is the mean score of all 40 samples combined?",
    "correctAnswer": "81",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Calculate the sum of scores for Lab 1:\n\n14 * 68 = 952.\n\nStep 2: Calculate the sum of scores for Lab 2:\n\n26 * 88 = 2,288.\n\nStep 3: Add both sums together:\n\n952 + 2,288 = 3,240.\n\nStep 4: Divide by the total number of samples (14 + 26 = 40):\n\nCombined Mean = 3,240 / 40 = 81.\n\nCommon Mistake: Taking the simple unweighted average (68 + 88) / 2 = 78 without weighting by sample counts."
  },
  {
    "id": "pt5-math-m2-q21",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 21,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations in the coordinate plane",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, a circle has diameter endpoints at (-8, 5) and (10, -19). When the equation of the circle is written in the form (x - h)^2 + (y - k)^2 = R, what is the value of R?",
    "correctAnswer": "225",
    "explanation": "Step-by-Step Solution:\n\nStep 1: R represents r^2, the square of the radius.\n\nStep 2: Calculate the diameter squared d^2 using the distance formula between (-8, 5) and (10, -19):\n\nd^2 = (10 - (-8))^2 + (-19 - 5)^2 = 18^2 + (-24)^2 = 324 + 576 = 900.\n\nStep 3: Since d = 2r, we have d^2 = 4r^2 -> 900 = 4r^2 -> r^2 = 225.\n\nThus, R = 225.\n\nAlternatively: Find the center midpoint ((-8+10)/2, (5-19)/2) = (1, -7). Then r^2 = (10 - 1)^2 + (-19 - (-7))^2 = 9^2 + (-12)^2 = 81 + 144 = 225.\n\nCommon Mistake: Reporting the radius r = 15 or the diameter squared d^2 = 900 instead of r^2 = 225."
  },
  {
    "id": "pt5-math-m2-q22",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 2,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = 7x + k is tangent to the parabola y = 2x^2 - 9x + 41 at exactly one point. What is the value of the constant k?",
    "correctAnswer": "9",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the line equation equal to the parabola equation:\n\n2x^2 - 9x + 41 = 7x + k\n\nStep 2: Move all terms to the left side to form Ax^2 + Bx + C = 0:\n\n2x^2 - 16x + (41 - k) = 0\n\nStep 3: For a single point of intersection (tangency), the discriminant Delta = B^2 - 4AC must equal 0:\n\n(-16)^2 - 4(2)(41 - k) = 0\n\n256 - 8(41 - k) = 0\n\nDivide both sides by 8:\n\n32 - (41 - k) = 0\n\n32 - 41 + k = 0\n\n-9 + k = 0 -> k = 9.\n\nVerification: When k = 9, 2x^2 - 16x + 32 = 2(x - 4)^2 = 0, giving single tangency at x = 4.\n\nCommon Mistake: Sign errors when combining -9x - 7x = -16x or distributing -8 across (41 - k)."
  }
];
