import type { MockTestQuestion } from './pt1_types.ts';

export const PT3_MATH_MODULE1_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt3-math-m1-q1",
    "section": "math",
    "module": 1,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 5x + 14 = 49, what is the value of 4x - 9?",
    "options": [
      {
        "letter": "A",
        "text": "7"
      },
      {
        "letter": "B",
        "text": "19"
      },
      {
        "letter": "C",
        "text": "28"
      },
      {
        "letter": "D",
        "text": "37"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSubtract 14 from both sides of 5x + 14 = 49 to get 5x = 35. Dividing by 5 gives x = 7. Substitute x = 7 into 4x - 9: 4(7) - 9 = 28 - 9 = 19.\n\n• Choice A is incorrect because 7 is the value of x, not 4x - 9.\n\n• Choice C is incorrect because it calculates 4(7) = 28 without subtracting 9.\n\n• Choice D is incorrect because it adds 9 instead of subtracting 9 (28 + 9 = 37).\n\nCommon Mistake: Solving for x = 7 and selecting 7 without evaluating 4x - 9."
  },
  {
    "id": "pt3-math-m1-q2",
    "section": "math",
    "module": 1,
    "number": 2,
    "domain": "Algebra",
    "skill": "Linear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A kayak rental shop charges a fixed $18 equipment deposit plus $6.50 per hour of rental. Which function R gives the total rental cost, in dollars, for renting a kayak for h hours?",
    "options": [
      {
        "letter": "A",
        "text": "R(h) = 18h + 6.50"
      },
      {
        "letter": "B",
        "text": "R(h) = 24.50h"
      },
      {
        "letter": "C",
        "text": "R(h) = 6.50h + 18"
      },
      {
        "letter": "D",
        "text": "R(h) = 6.50h - 18"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nThe fixed deposit of $18 is the constant initial amount (y-intercept), and the hourly rate of $6.50 per hour is the slope. Combining these yields R(h) = 6.50h + 18.\n\n• Choice A is incorrect because it swaps the hourly rate with the fixed deposit.\n\n• Choice B is incorrect because it adds 18 and 6.50 into a single hourly rate.\n\n• Choice D is incorrect because it subtracts the deposit instead of adding it.\n\nCommon Mistake: Reversing the slope and y-intercept in the linear cost model."
  },
  {
    "id": "pt3-math-m1-q3",
    "section": "math",
    "module": 1,
    "number": 3,
    "domain": "Advanced Math",
    "skill": "Equivalent expressions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (6x^2 - 4x + 7) + (3x^2 + 9x - 11)?",
    "options": [
      {
        "letter": "A",
        "text": "9x^2 + 13x - 4"
      },
      {
        "letter": "B",
        "text": "9x^2 + 5x + 18"
      },
      {
        "letter": "C",
        "text": "18x^2 + 5x - 4"
      },
      {
        "letter": "D",
        "text": "9x^2 + 5x - 4"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nGroup and combine like terms:\n\n(6x^2 + 3x^2) + (-4x + 9x) + (7 - 11) = 9x^2 + 5x - 4.\n\n• Choice A is incorrect because it combines -4x + 9x as 13x.\n\n• Choice B is incorrect because it adds 7 + 11 = 18 instead of subtracting 11.\n\n• Choice C is incorrect because it multiplies 6 * 3 = 18 instead of adding the quadratic coefficients.\n\nCommon Mistake: Sign errors when combining -4x + 9x or 7 - 11."
  },
  {
    "id": "pt3-math-m1-q4",
    "section": "math",
    "module": 1,
    "number": 4,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A tablet computer has a pre-tax price of $240. If a 7.5% sales tax is applied at checkout, what is the total price of the tablet, in dollars, including sales tax?",
    "options": [
      {
        "letter": "A",
        "text": "258"
      },
      {
        "letter": "B",
        "text": "247.50"
      },
      {
        "letter": "C",
        "text": "252"
      },
      {
        "letter": "D",
        "text": "264"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nA 7.5% sales tax increases the price by 0.075 * 240 = $18. Adding this tax to the pre-tax price gives 240 + 18 = $258 (or 240 * 1.075 = 258).\n\n• Choice B adds $7.50 directly rather than 7.5% of $240.\n\n• Choice C calculates a 5% tax ($12).\n\n• Choice D calculates a 10% tax ($24).\n\nCommon Mistake: Adding 7.5 directly to 240 instead of computing 7.5% of 240."
  },
  {
    "id": "pt3-math-m1-q5",
    "section": "math",
    "module": 1,
    "number": 5,
    "domain": "Geometry and Trigonometry",
    "skill": "Lines, angles, and triangles",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "In isosceles triangle ABC, side AB is congruent to side BC. If the measure of vertex angle B is 44 degrees, what is the measure, in degrees, of base angle A?",
    "options": [
      {
        "letter": "A",
        "text": "44"
      },
      {
        "letter": "B",
        "text": "68"
      },
      {
        "letter": "C",
        "text": "88"
      },
      {
        "letter": "D",
        "text": "136"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nBecause AB = BC, the base angles opposite those sides are congruent (angle A = angle C). The interior angles of a triangle sum to 180 degrees:\n\n44 + 2 * (angle A) = 180\n\n2 * (angle A) = 136\n\nangle A = 68 degrees.\n\n• Choice A sets base angle A equal to vertex angle B.\n\n• Choice C doubles 44.\n\n• Choice D is the sum of both base angles (180 - 44 = 136) before dividing by 2.\n\nCommon Mistake: Forgetting to divide 136 by 2 to find a single base angle."
  },
  {
    "id": "pt3-math-m1-q6",
    "section": "math",
    "module": 1,
    "number": 6,
    "domain": "Advanced Math",
    "skill": "Nonlinear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "The exponential function f is defined by f(x) = 4 * 2^(x + 1). What is the value of f(2)?",
    "options": [
      {
        "letter": "A",
        "text": "16"
      },
      {
        "letter": "B",
        "text": "24"
      },
      {
        "letter": "C",
        "text": "32"
      },
      {
        "letter": "D",
        "text": "64"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nSubstitute x = 2 into the function:\n\nf(2) = 4 * 2^(2 + 1) = 4 * 2^3 = 4 * 8 = 32.\n\n• Choice A evaluates 4 * 2^2 = 16 without adding 1 in the exponent.\n\n• Choice B multiplies 4 * 2 * 3 = 24.\n\n• Choice D evaluates 4 * 2^4 = 64.\n\nCommon Mistake: Evaluating 2^2 instead of 2^(2+1) = 2^3."
  },
  {
    "id": "pt3-math-m1-q7",
    "section": "math",
    "module": 1,
    "number": 7,
    "domain": "Algebra",
    "skill": "Linear equations in two variables",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A line in the xy-plane passes through the points (-3, 4) and (5, 20). What is the slope of the line?",
    "options": [
      {
        "letter": "A",
        "text": "1/2"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "16"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nUse the slope formula m = (y2 - y1) / (x2 - x1):\n\nm = (20 - 4) / (5 - (-3)) = 16 / (5 + 3) = 16 / 8 = 2.\n\n• Choice A inverts the ratio to run over rise (8 / 16 = 1/2).\n\n• Choice B calculates (20 - 4) / (5 - 3) = 16 / 2 = 8 due to a sign error in the denominator.\n\n• Choice C is the numerator (rise = 16) without dividing by the run.\n\nCommon Mistake: Calculating 5 - 3 = 2 in the denominator instead of 5 - (-3) = 8."
  },
  {
    "id": "pt3-math-m1-q8",
    "section": "math",
    "module": 1,
    "number": 8,
    "domain": "Algebra",
    "skill": "Linear inequalities in one or two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A community theater has a budget of at most $420 to purchase stage lighting fixtures. Mounting brackets cost $65 total, and each spotlight costs $28. What is the maximum number of spotlights the theater can purchase without exceeding its budget?",
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
        "text": "15"
      },
      {
        "letter": "D",
        "text": "17"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nLet t be the number of spotlights. Set up the inequality:\n\n65 + 28t <= 420\n\nSubtract 65 from both sides:\n\n28t <= 355\n\nDivide by 28:\n\nt <= 12.678...\n\nSince only whole spotlights can be purchased, the maximum number is 12.\n\n• Choice B (13 spotlights) costs 65 + 28(13) = $429, exceeding the $420 budget.\n\n• Choice C divides 420 by 28 without subtracting the $65 mounting brackets.\n\n• Choice D adds 65 to 420 before dividing by 28.\n\nCommon Mistake: Rounding 12.68 up to 13, which violates the maximum budget constraint."
  },
  {
    "id": "pt3-math-m1-q9",
    "section": "math",
    "module": 1,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "What is the positive solution to the equation 4x^2 - 11x - 3 = 0?",
    "options": [
      {
        "letter": "A",
        "text": "1/4"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "11/4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nFactor the quadratic equation 4x^2 - 11x - 3 = 0:\n\n(4x + 1)(x - 3) = 0.\n\nSetting each factor to zero gives 4x + 1 = 0 -> x = -1/4, and x - 3 = 0 -> x = 3. The positive solution is 3.\n\n• Choice A is the magnitude of the negative root (-1/4).\n\n• Choice C and Choice D come from incorrect factorizations.\n\nCommon Mistake: Reversing signs in the factors to write (4x - 1)(x + 3) = 0, obtaining 1/4 instead of 3."
  },
  {
    "id": "pt3-math-m1-q10",
    "section": "math",
    "module": 1,
    "number": 10,
    "domain": "Algebra",
    "skill": "Systems of two linear equations in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Consider the system of equations:\n3x - 2y = 16\n2x + 5y = 17\nIf (x, y) is the solution to the system, what is the value of 2x + 3y?",
    "options": [
      {
        "letter": "A",
        "text": "7"
      },
      {
        "letter": "B",
        "text": "12"
      },
      {
        "letter": "C",
        "text": "15"
      },
      {
        "letter": "D",
        "text": "19"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nMultiply the first equation by 5 and the second by 2 to eliminate y:\n\n15x - 10y = 80\n\n4x + 10y = 34\n\nAdd the two equations:\n\n19x = 114 -> x = 6.\n\nSubstitute x = 6 back into the first equation: 3(6) - 2y = 16 -> 18 - 2y = 16 -> 2y = 2 -> y = 1.\n\nFinally, evaluate 2x + 3y = 2(6) + 3(1) = 12 + 3 = 15.\n\n• Choice A is incorrect because 7 is the sum x + y (6 + 1).\n\n• Choice B is incorrect because 12 is 2x alone.\n\n• Choice D is incorrect because it calculates 3x + y = 19.\n\nCommon Mistake: Solving for x = 6 and y = 1, then computing x + y = 7 instead of 2x + 3y = 15."
  },
  {
    "id": "pt3-math-m1-q11",
    "section": "math",
    "module": 1,
    "number": 11,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Two-way tables and probability",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A technology firm surveyed 180 employees regarding their work arrangement and employment status:\n• Remote: 54 Full-Time, 18 Part-Time (Total: 72)\n• On-Site: 66 Full-Time, 42 Part-Time (Total: 108)\n• Total: 120 Full-Time, 60 Part-Time (Grand Total: 180)\nIf a Full-Time employee is selected at random, what is the probability that the employee works Remote?",
    "options": [
      {
        "letter": "A",
        "text": "54/180"
      },
      {
        "letter": "B",
        "text": "54/72"
      },
      {
        "letter": "C",
        "text": "120/180"
      },
      {
        "letter": "D",
        "text": "9/20"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nThis is a conditional probability: P(Remote | Full-Time). Restricting the sample space to the 120 Full-Time employees, 54 work Remote. Therefore, the probability is 54/120, which simplifies (dividing numerator and denominator by 6) to 9/20.\n\n• Choice A divides by the overall company size (180) instead of the 120 Full-Time employees.\n\n• Choice B calculates P(Full-Time | Remote) = 54/72 = 3/4, reversing the condition.\n\n• Choice C is the probability that a randomly selected employee is Full-Time.\n\nCommon Mistake: Reversing the conditional probability to compute 54/72 instead of 54/120."
  },
  {
    "id": "pt3-math-m1-q12",
    "section": "math",
    "module": 1,
    "number": 12,
    "domain": "Advanced Math",
    "skill": "Quadratic functions and their graphs",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the graph of y = -3(x - 5)^2 + 27 crosses the x-axis at two points, (p, 0) and (q, 0). What is the value of p + q?",
    "options": [
      {
        "letter": "A",
        "text": "10"
      },
      {
        "letter": "B",
        "text": "5"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "27"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nSet y = 0 to find the x-intercepts:\n\n-3(x - 5)^2 + 27 = 0\n\n3(x - 5)^2 = 27\n\n(x - 5)^2 = 9\n\nTake the square root: x - 5 = 3 or x - 5 = -3 -> x = 8 or x = 2.\n\nThus, p + q = 8 + 2 = 10.\n\nShortcut: Because a parabola is symmetric about its vertex axis x = h = 5, the sum of its two x-intercepts is always 2h = 2(5) = 10.\n\n• Choice B is the vertex x-coordinate h = 5.\n\n• Choice C is the distance between the intercepts (8 - 2 = 6).\n\n• Choice D is the vertex y-coordinate k = 27.\n\nCommon Mistake: Finding the difference (6) instead of the sum (10) of the x-intercepts."
  },
  {
    "id": "pt3-math-m1-q13",
    "section": "math",
    "module": 1,
    "number": 13,
    "domain": "Geometry and Trigonometry",
    "skill": "Right triangle trigonometry",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In right triangle MNP, angle N measures 90 degrees. If sin(M) = 7/25, what is the value of sin(P)?",
    "options": [
      {
        "letter": "A",
        "text": "7/25"
      },
      {
        "letter": "B",
        "text": "24/25"
      },
      {
        "letter": "C",
        "text": "24/7"
      },
      {
        "letter": "D",
        "text": "25/24"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nIn right triangle MNP with right angle N, the side opposite angle M is NP = 7 and the hypotenuse is MP = 25. Using the Pythagorean theorem, the adjacent side MN is sqrt(25^2 - 7^2) = sqrt(625 - 49) = sqrt(576) = 24. For acute angle P, the side opposite angle P is MN = 24, so sin(P) = Opposite / Hypotenuse = 24/25.\n\n• Choice A is sin(M) or cos(P).\n\n• Choice C is tan(P) = 24/7.\n\n• Choice D is csc(P) = 25/24.\n\nCommon Mistake: Confusing sin(P) with cos(P) = 7/25."
  },
  {
    "id": "pt3-math-m1-q14",
    "section": "math",
    "module": 1,
    "number": 14,
    "domain": "Advanced Math",
    "skill": "Radical and rational exponents",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "For all positive values of x, which of the following is equivalent to (x^(3/4)) / (x^(1/6))?",
    "options": [
      {
        "letter": "A",
        "text": "x^(2/2)"
      },
      {
        "letter": "B",
        "text": "x^(11/12)"
      },
      {
        "letter": "C",
        "text": "x^(7/12)"
      },
      {
        "letter": "D",
        "text": "x^(1/8)"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nWhen dividing exponential expressions with the same base, subtract the exponents: 3/4 - 1/6. Using a common denominator of 12:\n\n9/12 - 2/12 = 7/12.\n\nTherefore, the simplified expression is x^(7/12).\n\n• Choice A subtracts numerators and denominators separately ((3-1)/(4-6)).\n\n• Choice B adds the exponents: 9/12 + 2/12 = 11/12.\n\n• Choice D multiplies the exponents: (3/4) * (1/6) = 3/24 = 1/8.\n\nCommon Mistake: Adding the fractional exponents (9/12 + 2/12 = 11/12) instead of subtracting them."
  },
  {
    "id": "pt3-math-m1-q15",
    "section": "math",
    "module": 1,
    "number": 15,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, k is a constant:\n9x - 12y = 25\n6x - ky = 11\nIf the system has no solution, what is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "-8"
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
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nA system of two linear equations has no solution when the lines are parallel (equal slopes) and distinct (different y-intercepts). The slope of the first line is -9 / (-12) = 3/4. The slope of the second line is -6 / (-k) = 6/k. Set the slopes equal:\n\n6 / k = 3 / 4\n\n3k = 24 -> k = 8.\n\nChecking the constants: multiplying the second equation by 1.5 gives 9x - 12y = 16.5 != 25, verifying that the parallel lines never intersect.\n\n• Choice A has a sign error (-8).\n\n• Choice B and Choice C use the x-coefficients directly.\n\nCommon Mistake: Sign error with negative y-coefficients, yielding -8."
  },
  {
    "id": "pt3-math-m1-q16",
    "section": "math",
    "module": 1,
    "number": 16,
    "domain": "Advanced Math",
    "skill": "Polynomial factors and graphs",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The cubic polynomial p(x) = x^3 - 6x^2 + 5x + 12 has a known zero at x = 4. What is the sum of the other two zeros of p(x)?",
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
        "text": "6"
      },
      {
        "letter": "D",
        "text": "-6"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nBy Vieta's formulas, for a cubic polynomial ax^3 + bx^2 + cx + d = 0, the sum of all three roots is -b/a = -(-6)/1 = 6. Since one root is 4, the sum of the remaining two roots is 6 - 4 = 2. Alternatively, dividing p(x) by (x - 4) gives x^2 - 2x - 3 = (x - 3)(x + 1), whose zeros are 3 and -1; their sum is 3 + (-1) = 2.\n\n• Choice B has a sign error (-2).\n\n• Choice C is the sum of all three roots (6).\n\n• Choice D is the quadratic coefficient (-6).\n\nCommon Mistake: Reporting the sum of all three roots (6) rather than subtracting the known zero (4)."
  },
  {
    "id": "pt3-math-m1-q17",
    "section": "math",
    "module": 1,
    "number": 17,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Data distributions and standard deviation",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Dataset K consists of 30 measurements with a mean of 62 and a standard deviation of 9. Dataset L is formed by adding 15 to every measurement in Dataset K. Which of the following correctly describes the mean and standard deviation of Dataset L?",
    "options": [
      {
        "letter": "A",
        "text": "Mean = 62, Standard Deviation = 24"
      },
      {
        "letter": "B",
        "text": "Mean = 77, Standard Deviation = 9"
      },
      {
        "letter": "C",
        "text": "Mean = 77, Standard Deviation = 24"
      },
      {
        "letter": "D",
        "text": "Mean = 62, Standard Deviation = 9"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nAdding a constant c = 15 to every data point shifts the center of the distribution upward by 15, so the new mean is 62 + 15 = 77. However, shifting every point by the same constant does not change the spread or distances between points, so the standard deviation remains unchanged at 9.\n\n• Choice A fails to update the mean and incorrectly adds 15 to the standard deviation.\n\n• Choice C incorrectly adds 15 to the standard deviation.\n\n• Choice D fails to add 15 to the mean.\n\nCommon Mistake: Adding 15 to the standard deviation, confusing location shifts with scale multiplications."
  },
  {
    "id": "pt3-math-m1-q18",
    "section": "math",
    "module": 1,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "If 3(4x - 5) - 4(2x - 3) = 29, what is the value of x?",
    "correctAnswer": "8",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Distribute across both parentheses:\n\n12x - 15 - 8x + 12 = 29\n\nStep 2: Combine like terms:\n\n(12x - 8x) + (-15 + 12) = 29\n\n4x - 3 = 29\n\nStep 3: Add 3 to both sides:\n\n4x = 32\n\nStep 4: Divide by 4:\n\nx = 8.\n\nVerification: 3(32 - 5) - 4(16 - 3) = 3(27) - 4(13) = 81 - 52 = 29.\n\nCommon Mistake: Distributing -4 over (2x - 3) as -8x - 12 instead of -8x + 12."
  },
  {
    "id": "pt3-math-m1-q19",
    "section": "math",
    "module": 1,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "What is the positive solution to the equation (x - 4)^2 = 81?",
    "correctAnswer": "13",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Take the square root of both sides:\n\nx - 4 = 9 or x - 4 = -9\n\nStep 2: Solve for x:\n\nx = 9 + 4 = 13, or x = -9 + 4 = -5.\n\nStep 3: The positive solution is 13.\n\nCommon Mistake: Subtracting 4 from 9 to get 5 instead of adding 4 to get 13."
  },
  {
    "id": "pt3-math-m1-q20",
    "section": "math",
    "module": 1,
    "number": 20,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the equation x^2 + y^2 - 12x + 8y = 29 defines a circle. What is the radius of this circle?",
    "correctAnswer": "9",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Group x and y terms and complete the square:\n\n(x^2 - 12x) + (y^2 + 8y) = 29\n\nStep 2: Add (-12/2)^2 = 36 and (8/2)^2 = 16 to both sides:\n\n(x^2 - 12x + 36) + (y^2 + 8y + 16) = 29 + 36 + 16\n\nStep 3: Write in center-radius form:\n\n(x - 6)^2 + (y + 4)^2 = 81\n\nStep 4: Since r^2 = 81, the radius is r = sqrt(81) = 9.\n\nCommon Mistake: Entering r^2 = 81 instead of taking the square root to get r = 9."
  },
  {
    "id": "pt3-math-m1-q21",
    "section": "math",
    "module": 1,
    "number": 21,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Exponential functions and models",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "An invasive aquatic plant covers an initial area of 400 square meters and quadruples in area every 5 months. The area A(t), in square meters, after t months is modeled by A(t) = 400(c)^(t/15). What is the value of the constant c?",
    "correctAnswer": "64",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Model the quadrupling growth every 5 months: A(t) = 400 * 4^(t/5).\n\nStep 2: Equate the exponential expressions: 4^(t/5) = c^(t/15).\n\nStep 3: Rewrite t/5 with denominator 15: t/5 = 3t/15, so 4^(3t/15) = (4^3)^(t/15) = 64^(t/15).\n\nStep 4: Comparing bases gives c = 64.\n\nCommon Mistake: Multiplying 4 * 3 = 12 instead of raising 4 to the 3rd power (4^3 = 64)."
  },
  {
    "id": "pt3-math-m1-q22",
    "section": "math",
    "module": 1,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = 5x + b intersects the parabola y = x^2 - 3x + 21 at exactly one point. What is the value of b?",
    "correctAnswer": "5",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the line equation equal to the parabola equation:\n\nx^2 - 3x + 21 = 5x + b\n\nStep 2: Rearrange into standard quadratic form Ax^2 + Bx + C = 0:\n\nx^2 - 8x + (21 - b) = 0\n\nStep 3: For a single point of intersection, set the discriminant Delta = B^2 - 4AC equal to zero:\n\n(-8)^2 - 4(1)(21 - b) = 0\n\n64 - 84 + 4b = 0\n\n-20 + 4b = 0\n\n4b = 20 -> b = 5.\n\nCommon Mistake: Sign error when combining -3x - 5x = -8x or distributing -4 across (21 - b)."
  }
];
