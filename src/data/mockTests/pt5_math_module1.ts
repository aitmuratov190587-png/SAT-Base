import type { MockTestQuestion } from './pt1_types.ts';

export const PT5_MATH_MODULE1_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt5-math-m1-q1",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 9x - 13 = 50, what is the value of 6x - 11?",
    "options": [
      {
        "letter": "A",
        "text": "31"
      },
      {
        "letter": "B",
        "text": "7"
      },
      {
        "letter": "C",
        "text": "42"
      },
      {
        "letter": "D",
        "text": "53"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nAdd 13 to both sides of 9x - 13 = 50 to get 9x = 63. Dividing both sides by 9 yields x = 7. Substitute x = 7 into 6x - 11: 6(7) - 11 = 42 - 11 = 31.\n\n• Choice B is the value of x (7), not 6x - 11.\n\n• Choice C is 6(7) = 42 without subtracting 11.\n\n• Choice D adds 11 instead of subtracting 11 (42 + 11 = 53).\n\nCommon Mistake: Solving for x = 7 and selecting 7 without evaluating 6x - 11."
  },
  {
    "id": "pt5-math-m1-q2",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 2,
    "domain": "Algebra",
    "skill": "Linear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A commercial photography studio charges a fixed $55 lighting setup fee plus $35 per hour of studio time. Which function C gives the total rental cost, in dollars, for reserving the studio for h hours?",
    "options": [
      {
        "letter": "A",
        "text": "C(h) = 55h + 35"
      },
      {
        "letter": "B",
        "text": "C(h) = 35h + 55"
      },
      {
        "letter": "C",
        "text": "C(h) = 90h"
      },
      {
        "letter": "D",
        "text": "C(h) = 35h - 55"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nThe fixed lighting setup fee of $55 is the constant initial value (y-intercept), and the hourly charge of $35 per hour is the rate of change (slope). Therefore, C(h) = 35h + 55.\n\n• Choice A interchanges the hourly rate with the flat setup fee.\n\n• Choice C adds 55 and 35 into a single combined rate.\n\n• Choice D subtracts the setup fee instead of adding it.\n\nCommon Mistake: Swapping the slope ($35) and y-intercept ($55) in the linear equation."
  },
  {
    "id": "pt5-math-m1-q3",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 3,
    "domain": "Advanced Math",
    "skill": "Equivalent expressions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (7x^2 + 8x - 15) - (4x^2 - 3x + 6)?",
    "options": [
      {
        "letter": "A",
        "text": "3x^2 + 5x - 9"
      },
      {
        "letter": "B",
        "text": "3x^2 + 5x - 21"
      },
      {
        "letter": "C",
        "text": "3x^2 + 11x - 21"
      },
      {
        "letter": "D",
        "text": "11x^2 + 11x - 9"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nDistribute the subtraction sign across every term inside the second set of parentheses:\n\n7x^2 + 8x - 15 - 4x^2 + 3x - 6\n\nCombine like terms:\n\n(7x^2 - 4x^2) + (8x + 3x) + (-15 - 6) = 3x^2 + 11x - 21.\n\n• Choice A fails to distribute the negative sign to -3x and +6.\n\n• Choice B computes 8x - 3x = 5x.\n\n• Choice D adds 7x^2 + 4x^2 = 11x^2 and calculates -15 + 6 = -9.\n\nCommon Mistake: Failing to distribute the negative sign to -3x, computing 8x - 3x = 5x."
  },
  {
    "id": "pt5-math-m1-q4",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 4,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A graphic designer increased her project rate by 28% from her previous rate of $450. What is her new project rate, in dollars?",
    "options": [
      {
        "letter": "A",
        "text": "126"
      },
      {
        "letter": "B",
        "text": "478"
      },
      {
        "letter": "C",
        "text": "562"
      },
      {
        "letter": "D",
        "text": "576"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nA 28% increase multiplies the original rate by 1 + 0.28 = 1.28: 450 * 1.28 = $576. Alternatively, 28% of 450 is 0.28 * 450 = $126, and 450 + 126 = $576.\n\n• Choice A is the dollar increase ($126), not the new total rate.\n\n• Choice B adds $28 directly to $450.\n\n• Choice C results from an arithmetic error.\n\nCommon Mistake: Calculating the 28% increase ($126) and forgetting to add it back to $450."
  },
  {
    "id": "pt5-math-m1-q5",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 5,
    "domain": "Geometry and Trigonometry",
    "skill": "Lines, angles, and triangles",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "What is the measure, in degrees, of each interior angle of a regular pentagon (a 5-sided polygon with all sides and angles congruent)?",
    "options": [
      {
        "letter": "A",
        "text": "108"
      },
      {
        "letter": "B",
        "text": "72"
      },
      {
        "letter": "C",
        "text": "120"
      },
      {
        "letter": "D",
        "text": "540"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nThe sum of the interior angles of an n-sided polygon is (n - 2) * 180 degrees. For a pentagon (n = 5), the sum is (5 - 2) * 180 = 3 * 180 = 540 degrees. Since all 5 angles are congruent, each interior angle measures 540 / 5 = 108 degrees.\n\n• Choice B is the measure of each exterior angle (360 / 5 = 72 degrees).\n\n• Choice C is the interior angle of a regular hexagon (720 / 6 = 120 degrees).\n\n• Choice D is the total sum of all interior angles (540 degrees) before dividing by 5.\n\nCommon Mistake: Reporting the total interior angle sum (540) or the exterior angle (72) instead of a single interior angle (108)."
  },
  {
    "id": "pt5-math-m1-q6",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 6,
    "domain": "Advanced Math",
    "skill": "Nonlinear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "The function m is defined by m(x) = 7 * 2^(x - 3). What is the value of m(6)?",
    "options": [
      {
        "letter": "A",
        "text": "42"
      },
      {
        "letter": "B",
        "text": "56"
      },
      {
        "letter": "C",
        "text": "112"
      },
      {
        "letter": "D",
        "text": "448"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSubstitute x = 6 into the function:\n\nm(6) = 7 * 2^(6 - 3) = 7 * 2^3 = 7 * 8 = 56.\n\n• Choice A multiplies 7 * 2 * 3 = 42.\n\n• Choice C evaluates 7 * 2^4 = 112.\n\n• Choice D evaluates 7 * 2^6 = 448 without subtracting 3 in the exponent.\n\nCommon Mistake: Forgetting to subtract 3 in the exponent, evaluating 7 * 2^6 = 448."
  },
  {
    "id": "pt5-math-m1-q7",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 7,
    "domain": "Algebra",
    "skill": "Linear equations in two variables",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A line in the xy-plane passes through the points (-4, 11) and (2, -7). What is the slope of the line?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "-1/3"
      },
      {
        "letter": "C",
        "text": "-3"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUse the slope formula m = (y2 - y1) / (x2 - x1):\n\nm = (-7 - 11) / (2 - (-4)) = -18 / (2 + 4) = -18 / 6 = -3.\n\n• Choice A drops the negative sign.\n\n• Choice B inverts the ratio to run over rise (6 / -18 = -1/3).\n\n• Choice D calculates (-7 + 11) / (2 - 4) = 4 / -2 or arithmetic error.\n\nCommon Mistake: Sign errors when subtracting negative coordinates, obtaining 3 or -1/3."
  },
  {
    "id": "pt5-math-m1-q8",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 8,
    "domain": "Algebra",
    "skill": "Linear inequalities in one or two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A school robotics team has a budget of at most $450 to buy spare components. A chassis kit costs $95, and ultrasonic distance sensors cost $26 each. If the team buys one chassis kit, what is the greatest number of ultrasonic sensors they can purchase within their budget?",
    "options": [
      {
        "letter": "A",
        "text": "12"
      },
      {
        "letter": "B",
        "text": "14"
      },
      {
        "letter": "C",
        "text": "17"
      },
      {
        "letter": "D",
        "text": "13"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nLet k be the number of ultrasonic sensors. Set up the inequality:\n\n95 + 26k <= 450\n\nSubtract 95 from both sides:\n\n26k <= 355\n\nDivide by 26:\n\nk <= 13.6538...\n\nSince only whole sensors can be purchased, the maximum number is 13.\n\n• Choice A is within budget ($407) but is not the maximum.\n\n• Choice B (14 sensors) costs 95 + 26(14) = $459, exceeding the $450 budget.\n\n• Choice C divides 450 by 26 without subtracting the $95 chassis kit.\n\nCommon Mistake: Rounding 13.65 up to 14, exceeding the $450 budget limit."
  },
  {
    "id": "pt5-math-m1-q9",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "What is the positive solution to the equation 6x^2 - 13x - 5 = 0?",
    "options": [
      {
        "letter": "A",
        "text": "5/2"
      },
      {
        "letter": "B",
        "text": "1/3"
      },
      {
        "letter": "C",
        "text": "5/3"
      },
      {
        "letter": "D",
        "text": "13/6"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFactor the quadratic equation 6x^2 - 13x - 5 = 0:\n\n(3x + 1)(2x - 5) = 0.\n\nSetting each factor to zero gives 3x + 1 = 0 -> x = -1/3, and 2x - 5 = 0 -> x = 5/2. The positive solution is 5/2.\n\n• Choice B is the magnitude of the negative root (-1/3).\n\n• Choice C and Choice D come from incorrect factorizations.\n\nCommon Mistake: Reversing the signs when factoring to get (3x - 1)(2x + 5) = 0, selecting 1/3."
  },
  {
    "id": "pt5-math-m1-q10",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 10,
    "domain": "Algebra",
    "skill": "Systems of two linear equations in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Consider the system of equations:\n5x + 2y = 34\n3x - 4y = 10\nIf (x, y) is the solution to the system, what is the value of 4x + 5y?",
    "options": [
      {
        "letter": "A",
        "text": "8"
      },
      {
        "letter": "B",
        "text": "34"
      },
      {
        "letter": "C",
        "text": "26"
      },
      {
        "letter": "D",
        "text": "28"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nMultiply the first equation by 2 to align the y-coefficients:\n\n10x + 4y = 68.\n\nAdd this to the second equation (3x - 4y = 10):\n\n13x = 78 -> x = 6.\n\nSubstitute x = 6 into the first equation: 5(6) + 2y = 34 -> 30 + 2y = 34 -> 2y = 4 -> y = 2.\n\nEvaluate 4x + 5y = 4(6) + 5(2) = 24 + 10 = 34.\n\n• Choice A is the sum x + y (6 + 2 = 8).\n\n• Choice C is 4x + y = 26.\n\n• Choice D is 3x + 5y = 28.\n\nCommon Mistake: Solving for x = 6 and y = 2, then computing x + y = 8 instead of 4x + 5y = 34."
  },
  {
    "id": "pt5-math-m1-q11",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 11,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Two-way tables and probability",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A university registrar categorized 200 enrolled students by course format and degree level:\n• Hybrid Format: 56 Undergraduate, 24 Graduate (Total: 80)\n• In-Person Format: 64 Undergraduate, 56 Graduate (Total: 120)\n• Total: 120 Undergraduate, 80 Graduate (Grand Total: 200)\nIf a Graduate student is selected at random from this group, what is the probability that the student is enrolled in the Hybrid Format?",
    "options": [
      {
        "letter": "A",
        "text": "24/200"
      },
      {
        "letter": "B",
        "text": "80/200"
      },
      {
        "letter": "C",
        "text": "3/10"
      },
      {
        "letter": "D",
        "text": "7/10"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nThis is a conditional probability: P(Hybrid | Graduate). Restricting the sample space to the 80 Graduate students, 24 are enrolled in the Hybrid Format. Thus, the probability is 24/80, which simplifies (dividing numerator and denominator by 8) to 3/10.\n\n• Choice A divides by the grand total (200) instead of the 80 Graduate students.\n\n• Choice B is the overall probability that a randomly selected student is a Graduate student (80/200).\n\n• Choice D (56/80 = 7/10) is the probability that a Graduate student is in the In-Person Format.\n\nCommon Mistake: Dividing 24 by the grand total (200) instead of the Graduate row/column total (80)."
  },
  {
    "id": "pt5-math-m1-q12",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 12,
    "domain": "Advanced Math",
    "skill": "Quadratic functions and their graphs",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the parabola y = -2(x + 3)^2 + 32 crosses the x-axis at two points, (p, 0) and (q, 0). What is the distance between these two x-intercepts?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "16"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nSet y = 0 to find the x-intercepts:\n\n-2(x + 3)^2 + 32 = 0\n\n2(x + 3)^2 = 32\n\n(x + 3)^2 = 16\n\nTake the square root of both sides:\n\nx + 3 = 4 or x + 3 = -4\n\nx = 1 or x = -7.\n\nThe distance between (-7, 0) and (1, 0) is |1 - (-7)| = 8.\n\n• Choice A is the half-distance (4) from the axis of symmetry (x = -3) to one intercept.\n\n• Choice B is the sum of the absolute values or 2 * 3.\n\n• Choice C is (x + 3)^2 = 16 before taking the square root.\n\nCommon Mistake: Reporting the half-distance (4) instead of the full distance between the two x-intercepts (8)."
  },
  {
    "id": "pt5-math-m1-q13",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 13,
    "domain": "Geometry and Trigonometry",
    "skill": "Right triangle trigonometry",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In right triangle ABC, angle B measures 90 degrees. If sin(A) = 12/37, what is the value of sin(C)?",
    "options": [
      {
        "letter": "A",
        "text": "35/37"
      },
      {
        "letter": "B",
        "text": "12/37"
      },
      {
        "letter": "C",
        "text": "35/12"
      },
      {
        "letter": "D",
        "text": "37/35"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nIn right triangle ABC with right angle B, the side opposite angle A is BC = 12 and the hypotenuse is AC = 37. Using the Pythagorean theorem, the side adjacent to angle A is AB = sqrt(37^2 - 12^2) = sqrt(1369 - 144) = sqrt(1225) = 35. For acute angle C, the side opposite angle C is AB = 35, so sin(C) = Opposite / Hypotenuse = 35/37.\n\n• Choice B is sin(A) or cos(C).\n\n• Choice C is tan(C) = 35/12.\n\n• Choice D is csc(C) = 37/35.\n\nCommon Mistake: Confusing sin(C) with cos(C) = 12/37."
  },
  {
    "id": "pt5-math-m1-q14",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 14,
    "domain": "Advanced Math",
    "skill": "Radical and rational exponents",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "For all positive values of x, which of the following is equivalent to (x^(4/5)) / (x^(1/3))?",
    "options": [
      {
        "letter": "A",
        "text": "x^(3/2)"
      },
      {
        "letter": "B",
        "text": "x^(7/15)"
      },
      {
        "letter": "C",
        "text": "x^(17/15)"
      },
      {
        "letter": "D",
        "text": "x^(4/15)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nWhen dividing powers with identical bases, subtract the exponents: 4/5 - 1/3. Find a common denominator of 15:\n\n12/15 - 5/15 = 7/15.\n\nThus, the expression simplifies to x^(7/15).\n\n• Choice A subtracts numerators and denominators separately ((4-1)/(5-3) = 3/2).\n\n• Choice C adds the exponents: 12/15 + 5/15 = 17/15.\n\n• Choice D multiplies the exponents: (4/5) * (1/3) = 4/15.\n\nCommon Mistake: Adding the fractional exponents (12/15 + 5/15 = 17/15) instead of subtracting them."
  },
  {
    "id": "pt5-math-m1-q15",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 15,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, k is a constant:\n14x - 21y = 37\n10x - ky = 19\nIf the system has no solution, what is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "-15"
      },
      {
        "letter": "B",
        "text": "14"
      },
      {
        "letter": "C",
        "text": "15"
      },
      {
        "letter": "D",
        "text": "17"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nA system of two linear equations has no solution when the lines have identical slopes and distinct y-intercepts. The slope of the first line is -14 / (-21) = 2/3. The slope of the second line is -10 / (-k) = 10/k. Equate the slopes:\n\n10 / k = 2 / 3\n\n2k = 30 -> k = 15.\n\nChecking intercepts: multiplying the first equation by 5/7 gives 10x - 15y = 185/7 ≈ 26.43 != 19, confirming the lines are parallel and distinct.\n\n• Choice A has a sign error (-15).\n\n• Choice B uses the x-coefficient directly.\n\n• Choice D subtracts 4 from 21.\n\nCommon Mistake: Sign errors with negative y-coefficients, yielding -15."
  },
  {
    "id": "pt5-math-m1-q16",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 16,
    "domain": "Advanced Math",
    "skill": "Polynomial factors and graphs",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The cubic polynomial p(x) = x^3 - 8x^2 + 11x + 20 has a known zero at x = 5. What is the sum of the other two zeros of p(x)?",
    "options": [
      {
        "letter": "A",
        "text": "-3"
      },
      {
        "letter": "B",
        "text": "-4"
      },
      {
        "letter": "C",
        "text": "8"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nBy Vieta's formulas, for a cubic polynomial ax^3 + bx^2 + cx + d = 0, the sum of all three roots is -b/a = -(-8)/1 = 8. Since one zero is 5, the sum of the remaining two zeros is 8 - 5 = 3. Alternatively, dividing p(x) by (x - 5) gives x^2 - 3x - 4 = (x - 4)(x + 1), whose zeros are 4 and -1; their sum is 4 + (-1) = 3.\n\n• Choice A has a sign error (-3).\n\n• Choice B is the product of the other two zeros (4 * -1 = -4).\n\n• Choice C is the sum of all three zeros (8).\n\nCommon Mistake: Reporting the sum of all three roots (8) rather than subtracting the known root (5)."
  },
  {
    "id": "pt5-math-m1-q17",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 17,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Data distributions and standard deviation",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Dataset R consists of 60 observations with a mean of 55 and a standard deviation of 7. Dataset S is created by multiplying each observation in Dataset R by 5 and then subtracting 15. Which statement accurately describes the mean and standard deviation of Dataset S?",
    "options": [
      {
        "letter": "A",
        "text": "Mean = 260, Standard Deviation = 35"
      },
      {
        "letter": "B",
        "text": "Mean = 260, Standard Deviation = 20"
      },
      {
        "letter": "C",
        "text": "Mean = 275, Standard Deviation = 35"
      },
      {
        "letter": "D",
        "text": "Mean = 260, Standard Deviation = 7"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFor the linear transformation Y = 5X - 15:\n\n1. The new mean is transformed by both operations: Mean_S = 5(55) - 15 = 275 - 15 = 260.\n\n2. The standard deviation is scaled ONLY by the multiplicative factor: SD_S = 5 * 7 = 35 (subtracting 15 shifts all observations equally without changing their spread).\n\n• Choice B incorrectly subtracts 15 from the standard deviation (35 - 15 = 20).\n\n• Choice C forgets to subtract 15 from the mean.\n\n• Choice D forgets to multiply the standard deviation by 5.\n\nCommon Mistake: Subtracting 15 from the standard deviation after multiplying by 5."
  },
  {
    "id": "pt5-math-m1-q18",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "If 7(3x - 2) - 4(5x - 6) = 24, what is the value of x?",
    "correctAnswer": "14",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Expand both sets of parentheses:\n\n21x - 14 - 20x + 24 = 24\n\nStep 2: Combine like terms:\n\n(21x - 20x) + (-14 + 24) = 24\n\nx + 10 = 24\n\nStep 3: Subtract 10 from both sides:\n\nx = 14.\n\nVerification: 7(42 - 2) - 4(70 - 6) = 7(40) - 4(64) = 280 - 256 = 24.\n\nCommon Mistake: Distributing -4 over (5x - 6) as -20x - 24 instead of -20x + 24."
  },
  {
    "id": "pt5-math-m1-q19",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "What is the positive solution to the equation (x - 9)^2 = 121?",
    "correctAnswer": "20",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Take the square root of both sides:\n\nx - 9 = 11 or x - 9 = -11\n\nStep 2: Solve each equation:\n\nx = 11 + 9 = 20, or x = -11 + 9 = -2.\n\nStep 3: The positive solution is 20.\n\nCommon Mistake: Subtracting 9 from 11 to get 2 instead of adding 9 to get 20."
  },
  {
    "id": "pt5-math-m1-q20",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 20,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the equation x^2 + y^2 - 16x + 12y = 21 defines a circle. What is the radius of this circle?",
    "correctAnswer": "11",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Group x and y terms and complete the square:\n\n(x^2 - 16x) + (y^2 + 12y) = 21\n\nStep 2: Add (-16/2)^2 = 64 and (12/2)^2 = 36 to both sides:\n\n(x^2 - 16x + 64) + (y^2 + 12y + 36) = 21 + 64 + 36\n\nStep 3: Write in center-radius form:\n\n(x - 8)^2 + (y + 6)^2 = 121\n\nStep 4: Since r^2 = 121, the radius is r = sqrt(121) = 11.\n\nCommon Mistake: Entering r^2 = 121 instead of taking the square root to get r = 11."
  },
  {
    "id": "pt5-math-m1-q21",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 21,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Exponential functions and models",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "A pharmaceutical compound has an initial concentration of 960 micrograms per liter and decreases by half every 5 days. The concentration C(t), in micrograms per liter, after t days is modeled by C(t) = 960(c)^(t/20). What is the value of the constant c? (Express your answer as a decimal or fraction.)",
    "correctAnswer": "0.0625",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Model the half-life decay every 5 days: C(t) = 960 * (0.5)^(t/5).\n\nStep 2: Equate the exponential bases: (0.5)^(t/5) = c^(t/20).\n\nStep 3: Rewrite t/5 with denominator 20: t/5 = 4t/20, so (0.5)^(4t/20) = ((0.5)^4)^(t/20) = (1/16)^(t/20) = (0.0625)^(t/20).\n\nStep 4: Comparing bases gives c = 1/16 = 0.0625.\n\nCommon Mistake: Dividing 0.5 by 4 to get 0.125 instead of raising 0.5 to the 4th power."
  },
  {
    "id": "pt5-math-m1-q22",
    "source": "original",
    "license_note": "SATBase 100% Original Full-Length Practice Examination designed to College Board specifications",
    "section": "math",
    "module": 1,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = 6x + b intersects the parabola y = x^2 - 4x + 33 at exactly one point. What is the value of b?",
    "correctAnswer": "8",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the linear equation equal to the parabola equation:\n\nx^2 - 4x + 33 = 6x + b\n\nStep 2: Rearrange into standard quadratic form Ax^2 + Bx + C = 0:\n\nx^2 - 10x + (33 - b) = 0\n\nStep 3: For a single point of intersection, set the discriminant Delta = B^2 - 4AC equal to zero:\n\n(-10)^2 - 4(1)(33 - b) = 0\n\n100 - 132 + 4b = 0\n\n-32 + 4b = 0\n\n4b = 32 -> b = 8.\n\nCommon Mistake: Sign errors when combining -4x - 6x = -10x or distributing -4 across (33 - b)."
  }
];
