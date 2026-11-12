import type { MockTestQuestion } from './pt1_types.ts';

export const PT3_MATH_MODULE2_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt3-math-m2-q1",
    "section": "math",
    "module": 2,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 8(2x - 5) + 11 = 75, what is the value of 2x - 5?",
    "options": [
      {
        "letter": "A",
        "text": "6.5"
      },
      {
        "letter": "B",
        "text": "13"
      },
      {
        "letter": "C",
        "text": "8"
      },
      {
        "letter": "D",
        "text": "64"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nSubtract 11 from both sides of 8(2x - 5) + 11 = 75 to obtain 8(2x - 5) = 64. Dividing both sides by 8 gives 2x - 5 = 8.\n\n• Choice A is the value of x (since 2x - 5 = 8 -> 2x = 13 -> x = 6.5), not 2x - 5.\n\n• Choice B is 2x = 13.\n\n• Choice D is 8(2x - 5) = 64 before dividing by 8.\n\nCommon Mistake: Solving all the way for x = 6.5 instead of stopping at the target expression 2x - 5 = 8."
  },
  {
    "id": "pt3-math-m2-q2",
    "section": "math",
    "module": 2,
    "number": 2,
    "domain": "Advanced Math",
    "skill": "Operations with polynomials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (6x - 5)(3x + 4)?",
    "options": [
      {
        "letter": "A",
        "text": "18x^2 - 20"
      },
      {
        "letter": "B",
        "text": "18x^2 - 9x - 20"
      },
      {
        "letter": "C",
        "text": "18x^2 + 39x - 20"
      },
      {
        "letter": "D",
        "text": "18x^2 + 9x - 20"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nUse the distributive property (FOIL):\n\n(6x)(3x) + (6x)(4) + (-5)(3x) + (-5)(4) = 18x^2 + 24x - 15x - 20 = 18x^2 + 9x - 20.\n\n• Choice A omits the middle cross-terms.\n\n• Choice B calculates -24x + 15x = -9x.\n\n• Choice C adds 24x + 15x = 39x.\n\nCommon Mistake: Sign errors when combining the middle terms +24x and -15x."
  },
  {
    "id": "pt3-math-m2-q3",
    "section": "math",
    "module": 2,
    "number": 3,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios, rates, and proportions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "On a regional topographic map, a distance of 0.75 inches represents an actual ground distance of 12 miles. Two mountain peaks are separated by 3.25 inches on the map. What is the actual ground distance, in miles, between the two peaks?",
    "options": [
      {
        "letter": "A",
        "text": "52"
      },
      {
        "letter": "B",
        "text": "39"
      },
      {
        "letter": "C",
        "text": "48"
      },
      {
        "letter": "D",
        "text": "56"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nSet up a proportion: (0.75 inches) / (12 miles) = (3.25 inches) / (x miles).\n\nCross-multiply: 0.75x = 12 * 3.25 = 39.\n\nDivide by 0.75 (which is 3/4): x = 39 / (3/4) = 39 * (4/3) = 13 * 4 = 52 miles.\n\n• Choice B is 12 * 3.25 = 39 before dividing by 0.75.\n\n• Choice C calculates 12 * 4 = 48.\n\n• Choice D calculates 14 * 4 = 56.\n\nCommon Mistake: Multiplying 12 by 3.25 to get 39 and forgetting to divide by 0.75."
  },
  {
    "id": "pt3-math-m2-q4",
    "section": "math",
    "module": 2,
    "number": 4,
    "domain": "Algebra",
    "skill": "Linear functions in context",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A software engineer models the remaining battery charge B, as a percentage of full capacity, of a laptop t hours after unplugging it using the equation B = 100 - 6.25t, for 0 <= t <= 16. Which of the following is the best interpretation of 6.25 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The total number of hours the laptop battery lasts on a full charge"
      },
      {
        "letter": "B",
        "text": "The decrease in the laptop's battery charge, in percentage points, per hour"
      },
      {
        "letter": "C",
        "text": "The initial battery percentage when the laptop was unplugged"
      },
      {
        "letter": "D",
        "text": "The number of hours required for the battery charge to drop by 1 percentage point"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nIn the linear equation B = 100 - 6.25t, 100 is the initial charge at t = 0 and -6.25 is the rate of change (slope). Thus, 6.25 represents the decrease in battery percentage for each 1-hour increase in time.\n\n• Choice A describes the x-intercept (100 / 6.25 = 16 hours).\n\n• Choice C describes the y-intercept (100%).\n\n• Choice D inverts the slope (1 / 6.25 = 0.16 hours per percentage point).\n\nCommon Mistake: Confusing the slope (percentage lost per hour) with total battery runtime (16 hours)."
  },
  {
    "id": "pt3-math-m2-q5",
    "section": "math",
    "module": 2,
    "number": 5,
    "domain": "Advanced Math",
    "skill": "Complex numbers and quadratic equations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following is a solution to the equation x^2 - 10x + 61 = 0, where i = sqrt(-1)?",
    "options": [
      {
        "letter": "A",
        "text": "-5 + 6i"
      },
      {
        "letter": "B",
        "text": "5 + 12i"
      },
      {
        "letter": "C",
        "text": "5 - 6i"
      },
      {
        "letter": "D",
        "text": "10 - 6i"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUse the quadratic formula x = (-b +/- sqrt(b^2 - 4ac)) / (2a) with a = 1, b = -10, c = 61:\n\nx = (10 +/- sqrt((-10)^2 - 4(1)(61))) / 2\n\nx = (10 +/- sqrt(100 - 244)) / 2\n\nx = (10 +/- sqrt(-144)) / 2\n\nx = (10 +/- 12i) / 2 = 5 +/- 6i.\n\nThus, the two solutions are 5 + 6i and 5 - 6i. Choice C is 5 - 6i.\n\n• Choice A has a sign error on the real part (-5).\n\n• Choice B failed to divide 12i by 2.\n\n• Choice D failed to divide 10 by 2.\n\nCommon Mistake: Forgetting to divide both terms in the numerator by 2."
  },
  {
    "id": "pt3-math-m2-q6",
    "section": "math",
    "module": 2,
    "number": 6,
    "domain": "Algebra",
    "skill": "Systems of linear inequalities in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following ordered pairs (x, y) satisfies the system of inequalities below?\ny > -2x + 5\ny <= 3x - 2",
    "options": [
      {
        "letter": "A",
        "text": "(1, 2)"
      },
      {
        "letter": "B",
        "text": "(2, 5)"
      },
      {
        "letter": "C",
        "text": "(4, -4)"
      },
      {
        "letter": "D",
        "text": "(3, 4)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nTest each candidate point in both inequalities:\n\nFor (3, 4):\n\n• Inequality 1: 4 > -2(3) + 5 -> 4 > -1 (True)\n\n• Inequality 2: 4 <= 3(3) - 2 -> 4 <= 7 (True)\n\nBoth inequalities are satisfied, so (3, 4) is a solution.\n\n• Choice A (1, 2): 2 > -2(1) + 5 -> 2 > 3 (False).\n\n• Choice B (2, 5): 5 <= 3(2) - 2 -> 5 <= 4 (False).\n\n• Choice C (4, -4): -4 > -2(4) + 5 -> -4 > -3 (False).\n\nCommon Mistake: Sign errors when multiplying negative slopes by x-coordinates."
  },
  {
    "id": "pt3-math-m2-q7",
    "section": "math",
    "module": 2,
    "number": 7,
    "domain": "Geometry and Trigonometry",
    "skill": "Similar triangles and proportionality",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In triangles JKL and MNO, angle J is congruent to angle M and angle K is congruent to angle N. If JK = 18, JL = 27, and MN = 12, what is the length of MO?",
    "options": [
      {
        "letter": "A",
        "text": "18"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "21"
      },
      {
        "letter": "D",
        "text": "40.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nBy Angle-Angle (AA) similarity, triangle JKL is similar to triangle MNO. Set up a proportion of corresponding sides:\n\nMN / JK = MO / JL\n\n12 / 18 = MO / 27\n\nSimplify 12/18 to 2/3:\n\n2 / 3 = MO / 27\n\nCross-multiplying gives 3 * MO = 54 -> MO = 18.\n\n• Choice B calculates (12 / 27) * 18 = 8.\n\n• Choice C subtracts 6 from 27 (27 - 6 = 21).\n\n• Choice D inverts the scale factor: 27 * (3/2) = 40.5.\n\nCommon Mistake: Using the inverted scale factor 18/12 = 1.5 to get 27 * 1.5 = 40.5."
  },
  {
    "id": "pt3-math-m2-q8",
    "section": "math",
    "module": 2,
    "number": 8,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Linear regression and scatterplots",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A linear model for the fuel efficiency y, in miles per gallon, of a sedan traveling at a highway speed of x miles per hour above 50 mph is given by y = -1.8x + 76.4. During a test drive at 65 mph (x = 15), the sedan achieved an observed fuel efficiency of 53.1 miles per gallon. What is the residual for this test drive (Residual = Observed y - Predicted y)?",
    "options": [
      {
        "letter": "A",
        "text": "-3.7"
      },
      {
        "letter": "B",
        "text": "3.7"
      },
      {
        "letter": "C",
        "text": "49.4"
      },
      {
        "letter": "D",
        "text": "12.5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Compute the predicted value y_pred at x = 15:\n\ny_pred = -1.8(15) + 76.4 = -27 + 76.4 = 49.4.\n\nStep 2: Calculate the residual:\n\nResidual = Observed y - Predicted y = 53.1 - 49.4 = 3.7.\n\n• Choice A reverses the subtraction order (49.4 - 53.1 = -3.7).\n\n• Choice C is the predicted value (49.4) rather than the residual.\n\n• Choice D results from arithmetic error.\n\nCommon Mistake: Subtracting Observed from Predicted (-3.7) instead of Predicted from Observed (+3.7)."
  },
  {
    "id": "pt3-math-m2-q9",
    "section": "math",
    "module": 2,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Exponential equations and functions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The population P(t) of a regional town t years after 2020 is modeled by P(t) = 8,500(0.6561)^(t/4). Which of the following equivalent expressions displays the annual percentage decrease as an explicit constant in the base?",
    "options": [
      {
        "letter": "A",
        "text": "8,500(1 - 0.3439)^t"
      },
      {
        "letter": "B",
        "text": "8,500(1 - 0.086)^t"
      },
      {
        "letter": "C",
        "text": "8,500(1 - 0.10)^t"
      },
      {
        "letter": "D",
        "text": "8,500(0.90)^(t/4)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nRewrite (0.6561)^(t/4) using exponent laws as ((0.6561)^(1/4))^t.\n\nSince 0.9^2 = 0.81 and 0.81^2 = 0.6561, we have (0.6561)^(1/4) = 0.90.\n\nExpressing 0.90 in the form (1 - r) gives (1 - 0.10), which explicitly displays the annual decrease of 10%.\n\n• Choice A applies the 4-year decay rate (1 - 0.6561 = 0.3439) annually.\n\n• Choice B divides 0.3439 by 4 linearly instead of taking the fourth root.\n\n• Choice D keeps the fractional exponent t/4 alongside the annual retention factor.\n\nCommon Mistake: Dividing the 4-year decay rate by 4 linearly rather than taking the fourth root of 0.6561."
  },
  {
    "id": "pt3-math-m2-q10",
    "section": "math",
    "module": 2,
    "number": 10,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, a and b are constants:\nax + 14y = 24\n9x + by = 36\nIf the system has infinitely many solutions (x, y), what is the value of a + b?",
    "options": [
      {
        "letter": "A",
        "text": "15"
      },
      {
        "letter": "B",
        "text": "20"
      },
      {
        "letter": "C",
        "text": "23"
      },
      {
        "letter": "D",
        "text": "27"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, all corresponding coefficients and constants must share the exact same ratio.\n\nCompare the constant terms: 24 / 36 = 2/3.\n\nSet the x- and y-coefficient ratios equal to 2/3:\n\n1. a / 9 = 2 / 3 -> 3a = 18 -> a = 6.\n\n2. 14 / b = 2 / 3 -> 2b = 42 -> b = 21.\n\nAdd a and b: a + b = 6 + 21 = 27.\n\n• Choice A calculates 6 + 9.\n\n• Choice B and Choice C result from miscalculating the proportion for b.\n\nCommon Mistake: Multiplying 14 by 2/3 instead of dividing 14 by 2/3 when solving for b."
  },
  {
    "id": "pt3-math-m2-q11",
    "section": "math",
    "module": 2,
    "number": 11,
    "domain": "Advanced Math",
    "skill": "Nonlinear systems of equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the horizontal line y = c intersects the parabola y = -4x^2 + 24x - 29 at exactly one point. What is the value of c?",
    "options": [
      {
        "letter": "A",
        "text": "7"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "-29"
      },
      {
        "letter": "D",
        "text": "19"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nA horizontal line y = c intersects a downward-opening parabola at a single point if and only if it passes through the parabola's vertex (maximum point).\n\nFind the x-coordinate of the vertex using x = -B / (2A):\n\nx = -24 / (2 * -4) = -24 / -8 = 3.\n\nSubstitute x = 3 into the quadratic equation to find the maximum y-value:\n\ny = -4(3)^2 + 24(3) - 29 = -4(9) + 72 - 29 = -36 + 72 - 29 = 7.\n\nTherefore, c = 7.\n\n• Choice B is the x-coordinate of the vertex (3) rather than the y-coordinate.\n\n• Choice C is the y-intercept (-29).\n\n• Choice D results from sign errors during evaluation.\n\nCommon Mistake: Selecting the vertex x-coordinate (3) instead of evaluating y at x = 3."
  },
  {
    "id": "pt3-math-m2-q12",
    "section": "math",
    "module": 2,
    "number": 12,
    "domain": "Geometry and Trigonometry",
    "skill": "Circles, arc length, and radians",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A circle has a radius of 24. A central angle theta intercepts an arc of length 20pi on the circle. What is the measure of angle theta, in radians?",
    "options": [
      {
        "letter": "A",
        "text": "(6/5)pi"
      },
      {
        "letter": "B",
        "text": "(5/6)pi"
      },
      {
        "letter": "C",
        "text": "(5/12)pi"
      },
      {
        "letter": "D",
        "text": "(10/3)pi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nUse the radian arc length formula s = r * theta:\n\n20pi = 24 * theta\n\ntheta = (20pi) / 24 = (5/6)pi radians.\n\n• Choice A inverts the ratio to 24 / 20 = 6/5.\n\n• Choice C divides by 48 instead of 24.\n\n• Choice D multiplies 20 by 4 instead of dividing by 4.\n\nCommon Mistake: Inverting the formula to theta = r / s = 24 / (20pi)."
  },
  {
    "id": "pt3-math-m2-q13",
    "section": "math",
    "module": 2,
    "number": 13,
    "domain": "Advanced Math",
    "skill": "Rational expressions and equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The rational function h is defined by h(x) = (x^2 - 16) / (x^2 - 7x + 12). Which of the following describes all vertical asymptotes of the graph of y = h(x) in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "x = 3 and x = 4"
      },
      {
        "letter": "B",
        "text": "x = 4 only"
      },
      {
        "letter": "C",
        "text": "x = 3 only"
      },
      {
        "letter": "D",
        "text": "x = -3 and x = -4"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nFactor both the numerator and denominator:\n\nNumerator: x^2 - 16 = (x - 4)(x + 4)\n\nDenominator: x^2 - 7x + 12 = (x - 4)(x - 3)\n\nThus, h(x) = [(x - 4)(x + 4)] / [(x - 4)(x - 3)].\n\nBecause the factor (x - 4) appears in both the numerator and denominator, x = 4 is a removable discontinuity (a hole), NOT a vertical asymptote. The remaining denominator factor (x - 3) produces a vertical asymptote at x = 3 only.\n\n• Choice A mistakenly includes the hole at x = 4 as a vertical asymptote.\n\n• Choice B selects the hole instead of the asymptote.\n\n• Choice D reverses the signs of the roots.\n\nCommon Mistake: Failing to cancel common factors before identifying vertical asymptotes."
  },
  {
    "id": "pt3-math-m2-q14",
    "section": "math",
    "module": 2,
    "number": 14,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Experimental design and statistical inference",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Agronomists recruited 400 volunteer tomato farmers from a local agricultural cooperative and randomly assigned 200 to use a new bio-organic fertilizer and 200 to use a standard synthetic fertilizer. At harvest, the bio-organic group achieved a statistically significant 14% higher mean fruit yield than the standard group. Which conclusion is best supported by this study?",
    "options": [
      {
        "letter": "A",
        "text": "The bio-organic fertilizer will increase fruit yields by 14% for all crop species nationwide."
      },
      {
        "letter": "B",
        "text": "Because the farmers were volunteers, no causal link can be inferred between fertilizer type and yield."
      },
      {
        "letter": "C",
        "text": "The bio-organic fertilizer is guaranteed to produce higher yields than any other fertilizer in the world."
      },
      {
        "letter": "D",
        "text": "The bio-organic fertilizer caused the increase in fruit yield for the farmers in the study, though results may not generalize to all farms."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nBecause participants were randomly assigned to treatment and control groups, this is a randomized controlled experiment, which justifies drawing a cause-and-effect conclusion for the subjects in the study. However, because the 400 participants were local volunteers rather than a random sample of all farms nationwide, the results cannot be automatically generalized to broader populations.\n\n• Choice A and Choice C overgeneralize beyond the volunteer sample and crop studied.\n\n• Choice B confuses random sampling (needed for generalization) with random assignment (which establishes causality).\n\nCommon Mistake: Confusing random assignment (which supports causal inference) with random sampling (which supports population generalization)."
  },
  {
    "id": "pt3-math-m2-q15",
    "section": "math",
    "module": 2,
    "number": 15,
    "domain": "Advanced Math",
    "skill": "Structure of quadratic expressions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the equation x^2 + kx + 48 = 0, k is a negative integer. If the equation has two distinct real integer solutions, what is the greatest possible value of k?",
    "options": [
      {
        "letter": "A",
        "text": "-14"
      },
      {
        "letter": "B",
        "text": "-49"
      },
      {
        "letter": "C",
        "text": "-16"
      },
      {
        "letter": "D",
        "text": "-19"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nLet the two distinct integer roots be r1 and r2. Factoring gives (x - r1)(x - r2) = x^2 - (r1 + r2)x + r1*r2 = 0.\n\nThus, r1 * r2 = 48 and k = -(r1 + r2). Since k is negative, (r1 + r2) is positive, so both r1 and r2 must be positive integer factors of 48. To make k as large as possible (closest to 0), we must minimize the sum (r1 + r2).\n\nList the factor pairs of 48:\n\n• 1 and 48: sum = 49 -> k = -49\n\n• 2 and 24: sum = 26 -> k = -26\n\n• 3 and 16: sum = 19 -> k = -19\n\n• 4 and 12: sum = 16 -> k = -16\n\n• 6 and 8: sum = 14 -> k = -14\n\nSince 6 and 8 are distinct integers, the minimum sum is 14, giving the greatest negative value k = -14.\n\n• Choice B (-49) is the least possible value of k.\n\n• Choice C (-16) and Choice D (-19) correspond to non-minimal factor sums.\n\nCommon Mistake: Selecting -49 because 49 has the largest absolute value, forgetting that -14 > -49."
  },
  {
    "id": "pt3-math-m2-q16",
    "section": "math",
    "module": 2,
    "number": 16,
    "domain": "Algebra",
    "skill": "Linear inequalities and absolute value",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Which of the following absolute value inequalities has the solution set -5 <= x <= 11?",
    "options": [
      {
        "letter": "A",
        "text": "|x + 3| <= 8"
      },
      {
        "letter": "B",
        "text": "|x - 3| <= 8"
      },
      {
        "letter": "C",
        "text": "|x - 8| <= 3"
      },
      {
        "letter": "D",
        "text": "|x + 8| <= 3"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nExpress the closed interval [-5, 11] in the form |x - midpoint| <= radius:\n\nMidpoint = (-5 + 11) / 2 = 6 / 2 = 3.\n\nRadius = (11 - (-5)) / 2 = 16 / 2 = 8.\n\nThus, the inequality is |x - 3| <= 8.\n\nVerification: -8 <= x - 3 <= 8 -> adding 3 gives -5 <= x <= 11.\n\n• Choice A gives -11 <= x <= 5.\n\n• Choice C gives 5 <= x <= 11.\n\n• Choice D gives -11 <= x <= -5.\n\nCommon Mistake: Interchanging the midpoint (3) and the radius (8), choosing Choice C."
  },
  {
    "id": "pt3-math-m2-q17",
    "section": "math",
    "module": 2,
    "number": 17,
    "domain": "Geometry and Trigonometry",
    "skill": "Area and volume of solids",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Right circular Cylinder X and right circular Cylinder Y have equal volumes. The radius of Cylinder X is 60% of the radius of Cylinder Y. By what percentage is the height of Cylinder Y less than the height of Cylinder X?",
    "options": [
      {
        "letter": "A",
        "text": "36%"
      },
      {
        "letter": "B",
        "text": "40%"
      },
      {
        "letter": "C",
        "text": "64%"
      },
      {
        "letter": "D",
        "text": "84%"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nLet r_X, h_X and r_Y, h_Y be the radii and heights of Cylinders X and Y.\n\nWe are given r_X = 0.60 * r_Y.\n\nEquating their volumes (V = pi * r^2 * h):\n\npi * (r_X)^2 * h_X = pi * (r_Y)^2 * h_Y\n\n(0.60 * r_Y)^2 * h_X = (r_Y)^2 * h_Y\n\n0.36 * (r_Y)^2 * h_X = (r_Y)^2 * h_Y\n\nh_Y = 0.36 * h_X.\n\nBecause h_Y is 36% of h_X, the height of Cylinder Y is 100% - 36% = 64% less than the height of Cylinder X.\n\n• Choice A (36%) is the ratio h_Y / h_X rather than the percentage decrease.\n\n• Choice B (40%) ignores the squaring of the radius.\n\n• Choice D calculates 1 - 0.16.\n\nCommon Mistake: Reporting 36% (the remaining percentage) instead of subtracting from 100% to find the 64% reduction."
  },
  {
    "id": "pt3-math-m2-q18",
    "section": "math",
    "module": 2,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the system of equations below, m is a constant:\n6x + 15y = 31\n4x + my = 19\nIf the system has no solution, what is the value of m?",
    "correctAnswer": "10",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A system of two linear equations has no solution when the lines have identical slopes and different y-intercepts.\n\nStep 2: Equate the slopes (-A/B):\n\n-6 / 15 = -4 / m\n\nSimplify -6/15 to -2/5:\n\n-2 / 5 = -4 / m\n\nStep 3: Cross-multiply:\n\n-2m = -20 -> m = 10.\n\nStep 4: Verify distinct intercepts: multiplying the second equation by 1.5 gives 6x + 15y = 28.5 != 31, confirming no solution.\n\nCommon Mistake: Multiplying 15 by 4/6 incorrectly or sign errors."
  },
  {
    "id": "pt3-math-m2-q19",
    "section": "math",
    "module": 2,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the quadratic equation 16x^2 - kx + 25 = 0, k is a positive constant. If the equation has exactly one real solution, what is the value of k?",
    "correctAnswer": "40",
    "explanation": "Step-by-Step Solution:\n\nStep 1: A quadratic equation Ax^2 + Bx + C = 0 has exactly one real solution when its discriminant equals zero:\n\nDelta = B^2 - 4AC = 0.\n\nStep 2: Substitute A = 16, B = -k, and C = 25:\n\n(-k)^2 - 4(16)(25) = 0\n\nk^2 - 1,600 = 0\n\nk^2 = 1,600\n\nStep 3: Take the positive square root: k = sqrt(1,600) = 40.\n\nShortcut: Recognize the perfect square trinomial (4x - 5)^2 = 16x^2 - 2(4x)(5) + 25 = 16x^2 - 40x + 25, so k = 40.\n\nCommon Mistake: Forgetting the factor of 2 in 2ab, calculating 4 * 5 = 20 instead of 40."
  },
  {
    "id": "pt3-math-m2-q20",
    "section": "math",
    "module": 2,
    "number": 20,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Measures of center and spread",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "Two sections of a chemistry course took the same midterm exam. Section 1 had 12 students with a mean score of 85. Section 2 had 18 students with a mean score of 75. What is the mean score of all 30 students combined?",
    "correctAnswer": "79",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Calculate the sum of scores in Section 1:\n\n12 * 85 = 1,020.\n\nStep 2: Calculate the sum of scores in Section 2:\n\n18 * 75 = 1,350.\n\nStep 3: Combine the total scores for all 30 students:\n\n1,020 + 1,350 = 2,370.\n\nStep 4: Divide by the total number of students (12 + 18 = 30):\n\nCombined Mean = 2,370 / 30 = 79.\n\nCommon Mistake: Taking the simple unweighted average (85 + 75) / 2 = 80 without weighting by section sizes."
  },
  {
    "id": "pt3-math-m2-q21",
    "section": "math",
    "module": 2,
    "number": 21,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations in the coordinate plane",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, a circle has diameter endpoints at (-5, 4) and (7, -2). When the equation of the circle is written in the form (x - h)^2 + (y - k)^2 = R, what is the value of R?",
    "correctAnswer": "45",
    "explanation": "Step-by-Step Solution:\n\nStep 1: R represents r^2, the square of the radius.\n\nStep 2: Calculate the diameter squared d^2 using the distance formula between (-5, 4) and (7, -2):\n\nd^2 = (7 - (-5))^2 + (-2 - 4)^2 = 12^2 + (-6)^2 = 144 + 36 = 180.\n\nStep 3: Since d = 2r, we have d^2 = 4r^2 -> 180 = 4r^2 -> r^2 = 45.\n\nThus, R = 45.\n\nAlternatively: Find the center midpoint ((-5+7)/2, (4-2)/2) = (1, 1). Then r^2 = (7 - 1)^2 + (-2 - 1)^2 = 6^2 + (-3)^2 = 36 + 9 = 45.\n\nCommon Mistake: Entering the diameter squared d^2 = 180 instead of dividing by 4 to get r^2 = 45."
  },
  {
    "id": "pt3-math-m2-q22",
    "section": "math",
    "module": 2,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = 6x + k intersects the parabola y = 2x^2 - 10x + 39 at exactly one point. What is the value of the constant k?",
    "correctAnswer": "7",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the linear equation equal to the quadratic equation:\n\n2x^2 - 10x + 39 = 6x + k\n\nStep 2: Move all terms to one side to form Ax^2 + Bx + C = 0:\n\n2x^2 - 16x + (39 - k) = 0\n\nStep 3: For a single point of intersection (tangency), the discriminant Delta = B^2 - 4AC must equal 0:\n\n(-16)^2 - 4(2)(39 - k) = 0\n\n256 - 8(39 - k) = 0\n\nDivide both sides by 8:\n\n32 - (39 - k) = 0\n\n32 - 39 + k = 0\n\n-7 + k = 0 -> k = 7.\n\nVerification: When k = 7, 2x^2 - 16x + 32 = 2(x - 4)^2 = 0, giving single tangency at x = 4.\n\nCommon Mistake: Sign errors when combining -10x - 6x = -16x or distributing -8 across (39 - k)."
  }
];
