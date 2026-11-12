import type { MockTestQuestion } from './pt1_types.ts';

export const PT4_MATH_MODULE1_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt4-math-m1-q1",
    "section": "math",
    "module": 1,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 7x - 16 = 40, what is the value of 5x - 12?",
    "options": [
      {
        "letter": "A",
        "text": "8"
      },
      {
        "letter": "B",
        "text": "20"
      },
      {
        "letter": "C",
        "text": "28"
      },
      {
        "letter": "D",
        "text": "52"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nAdd 16 to both sides of 7x - 16 = 40 to obtain 7x = 56. Dividing by 7 gives x = 8. Substitute x = 8 into 5x - 12: 5(8) - 12 = 40 - 12 = 28.\n\n• Choice A is the value of x (8), not 5x - 12.\n\n• Choice B calculates 4(8) - 12 = 20.\n\n• Choice D adds 12 instead of subtracting 12 (40 + 12 = 52).\n\nCommon Mistake: Solving for x = 8 and selecting 8 without plugging it back into 5x - 12."
  },
  {
    "id": "pt4-math-m1-q2",
    "section": "math",
    "module": 1,
    "number": 2,
    "domain": "Algebra",
    "skill": "Linear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "An automated car wash club charges a one-time $22 membership activation fee plus $14 per month. Which function M gives the total cost, in dollars, for t months of membership?",
    "options": [
      {
        "letter": "A",
        "text": "M(t) = 22t + 14"
      },
      {
        "letter": "B",
        "text": "M(t) = 36t"
      },
      {
        "letter": "C",
        "text": "M(t) = 14t - 22"
      },
      {
        "letter": "D",
        "text": "M(t) = 14t + 22"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nThe fixed one-time activation fee of $22 is the constant term (y-intercept), and the recurring charge of $14 per month is the rate of change (slope). Thus, M(t) = 14t + 22.\n\n• Choice A swaps the monthly rate with the one-time fee.\n\n• Choice B adds 22 and 14 into a combined monthly rate.\n\n• Choice C subtracts the activation fee instead of adding it.\n\nCommon Mistake: Reversing the slope ($14) and y-intercept ($22)."
  },
  {
    "id": "pt4-math-m1-q3",
    "section": "math",
    "module": 1,
    "number": 3,
    "domain": "Advanced Math",
    "skill": "Equivalent expressions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (8x^2 - 5x + 12) - (3x^2 - 9x + 4)?",
    "options": [
      {
        "letter": "A",
        "text": "5x^2 + 4x + 8"
      },
      {
        "letter": "B",
        "text": "5x^2 - 14x + 8"
      },
      {
        "letter": "C",
        "text": "5x^2 - 14x + 16"
      },
      {
        "letter": "D",
        "text": "11x^2 + 4x + 8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nDistribute the subtraction sign across every term inside the second parentheses:\n\n8x^2 - 5x + 12 - 3x^2 + 9x - 4\n\nCombine like terms:\n\n(8x^2 - 3x^2) + (-5x + 9x) + (12 - 4) = 5x^2 + 4x + 8.\n\n• Choice B fails to distribute the negative sign to -9x, computing -5x - 9x = -14x.\n\n• Choice C fails to distribute the negative sign to both -9x and +4.\n\n• Choice D adds 8x^2 + 3x^2 = 11x^2.\n\nCommon Mistake: Failing to change -9x to +9x when subtracting the second polynomial."
  },
  {
    "id": "pt4-math-m1-q4",
    "section": "math",
    "module": 1,
    "number": 4,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "An electronics retailer discounted a computer monitor by 35% off its regular price of $320. What was the discounted price of the monitor, in dollars, before tax?",
    "options": [
      {
        "letter": "A",
        "text": "112"
      },
      {
        "letter": "B",
        "text": "208"
      },
      {
        "letter": "C",
        "text": "285"
      },
      {
        "letter": "D",
        "text": "218"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nA 35% discount leaves 100% - 35% = 65% of the regular price. Multiply 0.65 * 320 = $208. Alternatively, the discount is 0.35 * 320 = $112, and 320 - 112 = $208.\n\n• Choice A is the dollar discount ($112), not the sale price.\n\n• Choice C subtracts 35 directly from 320.\n\n• Choice D results from arithmetic error.\n\nCommon Mistake: Selecting the discount amount ($112) rather than subtracting it from $320."
  },
  {
    "id": "pt4-math-m1-q5",
    "section": "math",
    "module": 1,
    "number": 5,
    "domain": "Geometry and Trigonometry",
    "skill": "Lines, angles, and triangles",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "In triangle PQR, side PQ is extended through point Q to point S. If the measure of angle P is 47 degrees and the measure of angle R is 68 degrees, what is the measure, in degrees, of exterior angle RQS?",
    "options": [
      {
        "letter": "A",
        "text": "65"
      },
      {
        "letter": "B",
        "text": "133"
      },
      {
        "letter": "C",
        "text": "115"
      },
      {
        "letter": "D",
        "text": "112"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nBy the Exterior Angle Theorem, the measure of an exterior angle of a triangle is equal to the sum of the measures of the two non-adjacent (remote) interior angles:\n\nmeasure of angle RQS = 47 + 68 = 115 degrees.\n\n(Alternatively, interior angle PQR = 180 - (47 + 68) = 65 degrees, and exterior angle RQS = 180 - 65 = 115 degrees.)\n\n• Choice A is the adjacent interior angle PQR (65 degrees).\n\n• Choice B calculates 180 - 47 = 133.\n\n• Choice D calculates 180 - 68 = 112.\n\nCommon Mistake: Calculating the adjacent interior angle (65 degrees) instead of the exterior angle (115 degrees)."
  },
  {
    "id": "pt4-math-m1-q6",
    "section": "math",
    "module": 1,
    "number": 6,
    "domain": "Advanced Math",
    "skill": "Nonlinear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "The function k is defined by k(x) = 6 * 2^(x - 2). What is the value of k(5)?",
    "options": [
      {
        "letter": "A",
        "text": "24"
      },
      {
        "letter": "B",
        "text": "36"
      },
      {
        "letter": "C",
        "text": "192"
      },
      {
        "letter": "D",
        "text": "48"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nSubstitute x = 5 into the function:\n\nk(5) = 6 * 2^(5 - 2) = 6 * 2^3 = 6 * 8 = 48.\n\n• Choice A evaluates 6 * 2^2 = 24.\n\n• Choice B multiplies 6 * 2 * 3 = 36.\n\n• Choice C evaluates 6 * 2^5 = 192 without subtracting 2 in the exponent.\n\nCommon Mistake: Evaluating 2^5 = 32 without subtracting 2 in the exponent."
  },
  {
    "id": "pt4-math-m1-q7",
    "section": "math",
    "module": 1,
    "number": 7,
    "domain": "Algebra",
    "skill": "Linear equations in two variables",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A line in the xy-plane passes through the points (4, -9) and (-2, 9). What is the slope of the line?",
    "options": [
      {
        "letter": "A",
        "text": "-3"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "-1/3"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nUse the slope formula m = (y2 - y1) / (x2 - x1):\n\nm = (9 - (-9)) / (-2 - 4) = (9 + 9) / (-6) = 18 / (-6) = -3.\n\n• Choice B drops the negative sign.\n\n• Choice C inverts the ratio to run over rise (-6 / 18 = -1/3).\n\n• Choice D calculates (9 - 9) / (-2 - 4) = 0 due to a sign error in the numerator.\n\nCommon Mistake: Calculating 9 - 9 = 0 in the numerator instead of 9 - (-9) = 18."
  },
  {
    "id": "pt4-math-m1-q8",
    "section": "math",
    "module": 1,
    "number": 8,
    "domain": "Algebra",
    "skill": "Linear inequalities in one or two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A warehouse manager can spend at most $500 on shipping supplies. Heavy-duty tape dispensers cost $75 total, and boxes of bubble wrap cost $32 each. What is the greatest number of boxes of bubble wrap the manager can buy without exceeding the $500 budget?",
    "options": [
      {
        "letter": "A",
        "text": "12"
      },
      {
        "letter": "B",
        "text": "13"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nLet b be the number of boxes of bubble wrap. Set up the inequality:\n\n75 + 32b <= 500\n\nSubtract 75 from both sides:\n\n32b <= 425\n\nDivide by 32:\n\nb <= 13.28125.\n\nSince only whole boxes can be purchased, the greatest number is 13.\n\n• Choice A is within budget ($459) but is not the maximum.\n\n• Choice C (14 boxes) costs 75 + 32(14) = $523, exceeding the $500 limit.\n\n• Choice D divides 500 by 32 without subtracting $75.\n\nCommon Mistake: Rounding 13.28 up to 14, exceeding the $500 budget."
  },
  {
    "id": "pt4-math-m1-q9",
    "section": "math",
    "module": 1,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "What is the negative solution to the equation 5x^2 + 13x - 6 = 0?",
    "options": [
      {
        "letter": "A",
        "text": "-2/5"
      },
      {
        "letter": "B",
        "text": "-6/5"
      },
      {
        "letter": "C",
        "text": "-3"
      },
      {
        "letter": "D",
        "text": "-5"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nFactor the quadratic equation 5x^2 + 13x - 6 = 0:\n\n(5x - 2)(x + 3) = 0.\n\nSetting each factor to zero gives 5x - 2 = 0 -> x = 2/5, and x + 3 = 0 -> x = -3. The negative solution is -3.\n\n• Choice A is the negative of the positive root (2/5).\n\n• Choice B and Choice D result from incorrect factorizations.\n\nCommon Mistake: Sign reversal during factoring, writing (5x + 2)(x - 3) = 0 and selecting -2/5."
  },
  {
    "id": "pt4-math-m1-q10",
    "section": "math",
    "module": 1,
    "number": 10,
    "domain": "Algebra",
    "skill": "Systems of two linear equations in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Consider the system of equations:\n4x + 3y = 31\n2x - 5y = -17\nIf (x, y) is the solution to the system, what is the value of 3x + 2y?",
    "options": [
      {
        "letter": "A",
        "text": "9"
      },
      {
        "letter": "B",
        "text": "17"
      },
      {
        "letter": "C",
        "text": "19"
      },
      {
        "letter": "D",
        "text": "22"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nMultiply the second equation by 2 to align the x-coefficients:\n\n4x - 10y = -34.\n\nSubtract this from the first equation (4x + 3y = 31):\n\n(4x + 3y) - (4x - 10y) = 31 - (-34)\n\n13y = 65 -> y = 5.\n\nSubstitute y = 5 into the first equation: 4x + 3(5) = 31 -> 4x + 15 = 31 -> 4x = 16 -> x = 4.\n\nEvaluate 3x + 2y = 3(4) + 2(5) = 12 + 10 = 22.\n\n• Choice A is the sum x + y (4 + 5 = 9).\n\n• Choice B is 2x + y = 13 or arithmetic error.\n\n• Choice C is 2x + 3y = 8 + 15 = 23 (or 3x + y + 2).\n\nCommon Mistake: Sign error when subtracting -34 from 31 (computing 31 - 34 = -3 instead of 31 - (-34) = 65)."
  },
  {
    "id": "pt4-math-m1-q11",
    "section": "math",
    "module": 1,
    "number": 11,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Two-way tables and probability",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A manufacturing plant classified 160 technicians by shift assignment and experience level:\n• Morning Shift: 42 Experienced, 28 Novice (Total: 70)\n• Evening Shift: 38 Experienced, 52 Novice (Total: 90)\n• Total: 80 Experienced, 80 Novice (Grand Total: 160)\nIf a Novice technician is selected at random, what is the probability that the technician works the Evening Shift?",
    "options": [
      {
        "letter": "A",
        "text": "13/20"
      },
      {
        "letter": "B",
        "text": "52/160"
      },
      {
        "letter": "C",
        "text": "52/90"
      },
      {
        "letter": "D",
        "text": "90/160"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nThis is a conditional probability: P(Evening Shift | Novice). Restricting the sample space to the 80 Novice technicians, 52 work the Evening Shift. Thus, the probability is 52/80, which simplifies (dividing numerator and denominator by 4) to 13/20.\n\n• Choice B divides by the total workforce (160) instead of the 80 Novice technicians.\n\n• Choice C computes P(Novice | Evening Shift) = 52/90, reversing the condition.\n\n• Choice D is the overall probability that a technician works the Evening Shift.\n\nCommon Mistake: Reversing the conditional probability to compute 52/90 instead of 52/80."
  },
  {
    "id": "pt4-math-m1-q12",
    "section": "math",
    "module": 1,
    "number": 12,
    "domain": "Advanced Math",
    "skill": "Quadratic functions and their graphs",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the parabola y = 4(x - 6)^2 - 36 intersects the x-axis at two points, (a, 0) and (b, 0). What is the distance between these two x-intercepts?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "9"
      },
      {
        "letter": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSet y = 0 to find the x-intercepts:\n\n4(x - 6)^2 - 36 = 0\n\n4(x - 6)^2 = 36\n\n(x - 6)^2 = 9\n\nTake the square root of both sides:\n\nx - 6 = 3 or x - 6 = -3\n\nx = 9 or x = 3.\n\nThe distance between (3, 0) and (9, 0) is |9 - 3| = 6.\n\n• Choice A is the distance from the axis of symmetry (x = 6) to one x-intercept (3), rather than between both intercepts.\n\n• Choice C is the larger x-intercept (9).\n\n• Choice D is the sum of the two x-intercepts (9 + 3 = 12).\n\nCommon Mistake: Finding the sum of the intercepts (12) or half-distance (3) instead of the full distance (6)."
  },
  {
    "id": "pt4-math-m1-q13",
    "section": "math",
    "module": 1,
    "number": 13,
    "domain": "Geometry and Trigonometry",
    "skill": "Right triangle trigonometry",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In right triangle RST, angle S is a right angle. If cos(R) = 9/41, what is the value of cos(T)?",
    "options": [
      {
        "letter": "A",
        "text": "9/41"
      },
      {
        "letter": "B",
        "text": "9/40"
      },
      {
        "letter": "C",
        "text": "40/41"
      },
      {
        "letter": "D",
        "text": "41/40"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nIn right triangle RST with right angle S, the hypotenuse is RT = 41 and the side adjacent to angle R is RS = 9. By the Pythagorean theorem, the side opposite angle R is ST = sqrt(41^2 - 9^2) = sqrt(1681 - 81) = sqrt(1600) = 40. For acute angle T, the side adjacent to angle T is ST = 40, so cos(T) = Adjacent / Hypotenuse = 40/41.\n\n• Choice A is cos(R) or sin(T).\n\n• Choice B is cot(R) or tan(T) = 9/40.\n\n• Choice D is sec(T) = 41/40.\n\nCommon Mistake: Confusing cos(T) with sin(T) = 9/41."
  },
  {
    "id": "pt4-math-m1-q14",
    "section": "math",
    "module": 1,
    "number": 14,
    "domain": "Advanced Math",
    "skill": "Radical and rational exponents",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "For all positive values of x, which of the following is equivalent to x^(2/3) * x^(3/5)?",
    "options": [
      {
        "letter": "A",
        "text": "x^(6/15)"
      },
      {
        "letter": "B",
        "text": "x^(5/8)"
      },
      {
        "letter": "C",
        "text": "x^(1/15)"
      },
      {
        "letter": "D",
        "text": "x^(19/15)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nWhen multiplying powers with identical bases, add the exponents: 2/3 + 3/5. Find a common denominator of 15:\n\n10/15 + 9/15 = 19/15.\n\nThus, the product is x^(19/15).\n\n• Choice A multiplies the exponents: (2/3) * (3/5) = 6/15.\n\n• Choice B adds numerators and denominators separately: (2+3)/(3+5) = 5/8.\n\n• Choice C subtracts the exponents: 10/15 - 9/15 = 1/15.\n\nCommon Mistake: Multiplying fractional exponents instead of adding them."
  },
  {
    "id": "pt4-math-m1-q15",
    "section": "math",
    "module": 1,
    "number": 15,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, k is a constant:\n10x - 15y = 35\n6x - ky = 21\nIf the system has infinitely many solutions, what is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "9"
      },
      {
        "letter": "B",
        "text": "-9"
      },
      {
        "letter": "C",
        "text": "11"
      },
      {
        "letter": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, the two equations must be scalar multiples of each other. Compare the ratio of x-coefficients and constants between the first and second equations:\n\n10 / 6 = 5/3, and 35 / 21 = 5/3.\n\nTherefore, the ratio of the y-coefficients must also be 5/3:\n\n(-15) / (-k) = 5 / 3 -> 15 / k = 5 / 3\n\n5k = 45 -> k = 9.\n\n• Choice B has a sign error (-9).\n\n• Choice C subtracts 4 from 15 (15 - 4 = 11).\n\n• Choice D multiplies 15 by 5/3 instead of dividing by 5/3.\n\nCommon Mistake: Multiplying 15 by 5/3 to get 25 instead of solving 15 / k = 5 / 3."
  },
  {
    "id": "pt4-math-m1-q16",
    "section": "math",
    "module": 1,
    "number": 16,
    "domain": "Advanced Math",
    "skill": "Polynomial factors and graphs",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The cubic polynomial p(x) = x^3 - 7x^2 + 4x + 12 has a known zero at x = 6. What is the product of the other two zeros of p(x)?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "-2"
      },
      {
        "letter": "C",
        "text": "1"
      },
      {
        "letter": "D",
        "text": "-12"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nBy Vieta's formulas, for a cubic polynomial ax^3 + bx^2 + cx + d = 0, the product of all three roots is -d/a = -12/1 = -12. Since one zero is r1 = 6, the product of the other two zeros r2 * r3 satisfies 6 * (r2 * r3) = -12, giving r2 * r3 = -12 / 6 = -2. Alternatively, dividing p(x) by (x - 6) yields x^2 - x - 2 = (x - 2)(x + 1), whose zeros are 2 and -1; their product is (2)(-1) = -2.\n\n• Choice A omits the negative sign in Vieta's product formula (-d/a).\n\n• Choice C is the sum of the other two zeros (2 + (-1) = 1).\n\n• Choice D is the product of all three zeros (-12).\n\nCommon Mistake: Forgetting the minus sign in Vieta's formula (-d/a), obtaining +12 / 6 = +2."
  },
  {
    "id": "pt4-math-m1-q17",
    "section": "math",
    "module": 1,
    "number": 17,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Data distributions and standard deviation",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Dataset M consists of 45 integers with a mean of 40 and a standard deviation of 6. Dataset N is created by multiplying every integer in Dataset M by 4 and then adding 12. Which statement accurately gives the mean and standard deviation of Dataset N?",
    "options": [
      {
        "letter": "A",
        "text": "Mean = 160, Standard Deviation = 24"
      },
      {
        "letter": "B",
        "text": "Mean = 172, Standard Deviation = 36"
      },
      {
        "letter": "C",
        "text": "Mean = 172, Standard Deviation = 24"
      },
      {
        "letter": "D",
        "text": "Mean = 172, Standard Deviation = 6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUnder the linear transformation Y = 4X + 12:\n\n1. The new mean is affected by both multiplication and addition: Mean_N = 4(40) + 12 = 160 + 12 = 172.\n\n2. The standard deviation is scaled ONLY by the multiplicative factor: SD_N = 4 * 6 = 24 (adding 12 shifts all points equally without changing their spread).\n\n• Choice A forgets to add 12 to the mean.\n\n• Choice B incorrectly adds 12 to the standard deviation (24 + 12 = 36).\n\n• Choice D forgets to multiply the standard deviation by 4.\n\nCommon Mistake: Adding 12 to the standard deviation after multiplying by 4."
  },
  {
    "id": "pt4-math-m1-q18",
    "section": "math",
    "module": 1,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "If 6(2x + 3) - 5(3x - 4) = 14, what is the value of x?",
    "correctAnswer": "8",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Expand both sets of parentheses:\n\n12x + 18 - 15x + 20 = 14\n\nStep 2: Combine like terms:\n\n(12x - 15x) + (18 + 20) = 14\n\n-3x + 38 = 14\n\nStep 3: Subtract 38 from both sides:\n\n-3x = -24\n\nStep 4: Divide by -3:\n\nx = 8.\n\nVerification: 6(16 + 3) - 5(24 - 4) = 6(19) - 5(20) = 114 - 100 = 14.\n\nCommon Mistake: Distributing -5 over (3x - 4) as -15x - 20 instead of -15x + 20."
  },
  {
    "id": "pt4-math-m1-q19",
    "section": "math",
    "module": 1,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "What is the positive solution to the equation (x + 6)^2 = 100?",
    "correctAnswer": "4",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Take the square root of both sides:\n\nx + 6 = 10 or x + 6 = -10\n\nStep 2: Solve each equation:\n\nx = 10 - 6 = 4, or x = -10 - 6 = -16.\n\nStep 3: The positive solution is 4.\n\nCommon Mistake: Adding 6 to 10 to get 16 instead of subtracting 6 to get 4."
  },
  {
    "id": "pt4-math-m1-q20",
    "section": "math",
    "module": 1,
    "number": 20,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the graph of x^2 + y^2 + 14x - 10y = 7 is a circle. What is the radius of this circle?",
    "correctAnswer": "9",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Group x and y terms and complete the square:\n\n(x^2 + 14x) + (y^2 - 10y) = 7\n\nStep 2: Add (14/2)^2 = 49 and (-10/2)^2 = 25 to both sides:\n\n(x^2 + 14x + 49) + (y^2 - 10y + 25) = 7 + 49 + 25\n\nStep 3: Write in standard center-radius form:\n\n(x + 7)^2 + (y - 5)^2 = 81\n\nStep 4: Since r^2 = 81, the radius is r = sqrt(81) = 9.\n\nCommon Mistake: Reporting r^2 = 81 instead of taking the square root to obtain r = 9."
  },
  {
    "id": "pt4-math-m1-q21",
    "section": "math",
    "module": 1,
    "number": 21,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Exponential functions and models",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "A yeast culture starts with 150 cells and doubles in population every 3 hours. The population P(t) after t hours can be expressed as P(t) = 150(c)^(t/18). What is the value of the constant c?",
    "correctAnswer": "64",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Model the doubling growth every 3 hours: P(t) = 150 * 2^(t/3).\n\nStep 2: Equate the base expressions: 2^(t/3) = c^(t/18).\n\nStep 3: Rewrite t/3 with a denominator of 18: t/3 = 6t/18, so 2^(6t/18) = (2^6)^(t/18) = 64^(t/18).\n\nStep 4: Comparing bases gives c = 2^6 = 64.\n\nCommon Mistake: Multiplying 2 * 6 = 12 instead of raising 2 to the 6th power (2^6 = 64)."
  },
  {
    "id": "pt4-math-m1-q22",
    "section": "math",
    "module": 1,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = 4x + b intersects the parabola y = x^2 - 6x + 31 at exactly one point. What is the value of b?",
    "correctAnswer": "6",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the linear equation equal to the parabola equation:\n\nx^2 - 6x + 31 = 4x + b\n\nStep 2: Rearrange into standard quadratic form Ax^2 + Bx + C = 0:\n\nx^2 - 10x + (31 - b) = 0\n\nStep 3: For a single point of intersection, set the discriminant Delta = B^2 - 4AC equal to zero:\n\n(-10)^2 - 4(1)(31 - b) = 0\n\n100 - 124 + 4b = 0\n\n-24 + 4b = 0\n\n4b = 24 -> b = 6.\n\nCommon Mistake: Sign errors when combining -6x - 4x = -10x or distributing -4 across (31 - b)."
  }
];
