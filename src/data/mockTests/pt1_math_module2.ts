import type { MockTestQuestion } from './pt1_types.ts';

export const PT1_MATH_MODULE2_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt1-math-m2-q1",
    "section": "math",
    "module": 2,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 7(x - 2) + 5 = 40, what is the value of x - 2?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "5"
      },
      {
        "letter": "C",
        "text": "7"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSubtract 5 from both sides of 7(x - 2) + 5 = 40 to obtain 7(x - 2) = 35. Dividing both sides by 7 yields x - 2 = 5.\n\n• Choice A is incorrect because it divides 35 by 7 incorrectly or subtracts.\n\n• Choice C is incorrect because 7 is the value of x (since x - 2 = 5 -> x = 7), not x - 2.\n\n• Choice D is incorrect because it adds 2 to 7.\n\nCommon Mistake: Solving for x = 7 and selecting 7 instead of finding the value of x - 2."
  },
  {
    "id": "pt1-math-m2-q2",
    "section": "math",
    "module": 2,
    "number": 2,
    "domain": "Advanced Math",
    "skill": "Operations with polynomials",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following polynomials is equivalent to (3x - 4)(2x + 5)?",
    "options": [
      {
        "letter": "A",
        "text": "6x^2 - 20"
      },
      {
        "letter": "B",
        "text": "6x^2 - 7x - 20"
      },
      {
        "letter": "C",
        "text": "6x^2 + 7x - 20"
      },
      {
        "letter": "D",
        "text": "6x^2 + 23x - 20"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUse the FOIL method:\n\nFirst: (3x)(2x) = 6x^2\n\nOuter: (3x)(5) = 15x\n\nInner: (-4)(2x) = -8x\n\nLast: (-4)(5) = -20\n\nCombine like terms: 6x^2 + (15x - 8x) - 20 = 6x^2 + 7x - 20.\n\n• Choice A is incorrect because it omits the outer and inner cross-terms.\n\n• Choice B is incorrect because it calculates -15x + 8x = -7x.\n\n• Choice D is incorrect because it adds 15x + 8x = 23x.\n\nCommon Mistake: Multiplying only first and last terms to get 6x^2 - 20, or a sign error combining 15x and -8x."
  },
  {
    "id": "pt1-math-m2-q3",
    "section": "math",
    "module": 2,
    "number": 3,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios, rates, and proportions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A blueprint of a residential house uses a scale of 0.5 inches = 6 feet. If the length of the living room on the blueprint is 2.5 inches, what is the actual length, in feet, of the living room?",
    "options": [
      {
        "letter": "A",
        "text": "15"
      },
      {
        "letter": "B",
        "text": "24"
      },
      {
        "letter": "C",
        "text": "30"
      },
      {
        "letter": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nSet up a proportion: (0.5 inches) / (6 feet) = (2.5 inches) / (x feet). Cross-multiplying gives 0.5x = 6 * 2.5 -> 0.5x = 15 -> x = 30 feet. Alternatively, 2.5 inches is 5 times 0.5 inches, so the actual length is 5 * 6 = 30 feet.\n\n• Choice A is incorrect because 15 is 6 * 2.5 before dividing by 0.5.\n\n• Choice B is incorrect because it uses a scale factor of 4.\n\n• Choice D is incorrect because it calculates 6 * 6 = 36.\n\nCommon Mistake: Multiplying 6 by 2.5 directly without dividing by 0.5, yielding 15."
  },
  {
    "id": "pt1-math-m2-q4",
    "section": "math",
    "module": 2,
    "number": 4,
    "domain": "Algebra",
    "skill": "Linear functions in context",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A civil engineer models the water depth W, in feet, of a municipal reservoir t days after a floodgate was opened using the equation W = 64 - 1.6t. Which of the following is the best interpretation of the number 1.6 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The initial water depth, in feet, when the floodgate was opened"
      },
      {
        "letter": "B",
        "text": "The number of days required for the reservoir to drain completely"
      },
      {
        "letter": "C",
        "text": "The decrease in the reservoir's water depth, in feet, each day"
      },
      {
        "letter": "D",
        "text": "The total volume of water discharged from the reservoir"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nThe linear model is in the form y = b + mt (or y = mx + b), where b = 64 is the initial value at t = 0 and m = -1.6 is the rate of change. The coefficient 1.6 represents the rate at which the water depth decreases each day (1.6 feet per day).\n\n• Choice A is incorrect because 64 feet is the initial water depth.\n\n• Choice B is incorrect because the number of days to drain completely is 64 / 1.6 = 40 days.\n\n• Choice D is incorrect because W measures depth in feet, not total volumetric discharge.\n\nCommon Mistake: Confusing the rate of change (slope) with total elapsed time or initial depth."
  },
  {
    "id": "pt1-math-m2-q5",
    "section": "math",
    "module": 2,
    "number": 5,
    "domain": "Advanced Math",
    "skill": "Complex numbers and quadratic equations",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Which of the following is a solution to the equation x^2 - 6x + 25 = 0, where i = sqrt(-1)?",
    "options": [
      {
        "letter": "A",
        "text": "3 - 8i"
      },
      {
        "letter": "B",
        "text": "-3 + 4i"
      },
      {
        "letter": "C",
        "text": "3 + 4i"
      },
      {
        "letter": "D",
        "text": "6 + 8i"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUse the quadratic formula x = (-b +/- sqrt(b^2 - 4ac)) / (2a):\n\nx = (6 +/- sqrt((-6)^2 - 4(1)(25))) / 2\n\nx = (6 +/- sqrt(36 - 100)) / 2\n\nx = (6 +/- sqrt(-64)) / 2\n\nx = (6 +/- 8i) / 2 = 3 +/- 4i.\n\nThus, the solutions are 3 + 4i and 3 - 4i. Among the given choices, 3 + 4i is Choice C.\n\n• Choice A is incorrect because the imaginary part was not divided by 2.\n\n• Choice B is incorrect because it has the wrong sign on the real part (-3).\n\n• Choice D is incorrect because it failed to divide both terms by 2.\n\nCommon Mistake: Dividing only the real part or only the imaginary part by the denominator 2."
  },
  {
    "id": "pt1-math-m2-q6",
    "section": "math",
    "module": 2,
    "number": 6,
    "domain": "Algebra",
    "skill": "Systems of linear inequalities in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A point (x, y) satisfies the system of inequalities:\ny > 2x - 3\ny <= -x + 6\nWhich of the following ordered pairs could be (x, y)?",
    "options": [
      {
        "letter": "A",
        "text": "(4, 5)"
      },
      {
        "letter": "B",
        "text": "(1, 3)"
      },
      {
        "letter": "C",
        "text": "(0, -4)"
      },
      {
        "letter": "D",
        "text": "(2, 7)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nTest each candidate ordered pair:\n\nFor (1, 3):\n\n• Inequality 1: 3 > 2(1) - 3 -> 3 > -1 (True)\n\n• Inequality 2: 3 <= -(1) + 6 -> 3 <= 5 (True)\n\nBoth inequalities are satisfied, so (1, 3) is a solution.\n\n• Choice A (4, 5): 5 <= -4 + 6 -> 5 <= 2 (False).\n\n• Choice C (0, -4): -4 > 2(0) - 3 -> -4 > -3 (False).\n\n• Choice D (2, 7): 7 <= -2 + 6 -> 7 <= 4 (False).\n\nCommon Mistake: Neglecting the strict inequality or sign reversals when plugging in coordinates."
  },
  {
    "id": "pt1-math-m2-q7",
    "section": "math",
    "module": 2,
    "number": 7,
    "domain": "Geometry and Trigonometry",
    "skill": "Similar triangles and proportionality",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In triangles PQR and STU, angle P is congruent to angle S, and angle Q is congruent to angle T. The length of PQ is 14, the length of PR is 21, and the length of ST is 6. What is the length of SU?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "12"
      },
      {
        "letter": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nBecause two pairs of angles are congruent, triangle PQR is similar to triangle STU (AA similarity). Therefore, corresponding sides are proportional:\n\nST / PQ = SU / PR\n\n6 / 14 = SU / 21\n\nSimplify 6/14 to 3/7:\n\n3 / 7 = SU / 21\n\nCross-multiplying gives 7 * SU = 63 -> SU = 9.\n\n• Choice A is incorrect because 4 = (14 / 21) * 6.\n\n• Choice C is incorrect because 12 = 2 * 6.\n\n• Choice D is incorrect because 15 = 21 - 6.\n\nCommon Mistake: Setting up the ratio inverted as 14 / 6 = 21 / SU, leading to SU = 9, but miscalculating as 14 / 21 = SU / 6 -> SU = 4."
  },
  {
    "id": "pt1-math-m2-q8",
    "section": "math",
    "module": 2,
    "number": 8,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Linear regression and scatterplots",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A line of best fit for a set of data is given by y = -2.4x + 48.2, where x is the ambient outdoor temperature in degrees Celsius, and y is the daily heating energy consumption in kilowatt-hours. For an observed day with a temperature of 10 degrees Celsius, the actual energy consumption was 26.5 kilowatt-hours. What is the residual, in kilowatt-hours, for this data point (Residual = Actual y - Predicted y)?",
    "options": [
      {
        "letter": "A",
        "text": "-2.3"
      },
      {
        "letter": "B",
        "text": "2.3"
      },
      {
        "letter": "C",
        "text": "-4.1"
      },
      {
        "letter": "D",
        "text": "24.2"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Calculate the predicted value y_pred when x = 10:\n\ny_pred = -2.4(10) + 48.2 = -24 + 48.2 = 24.2.\n\nStep 2: Calculate the residual:\n\nResidual = Actual y - Predicted y = 26.5 - 24.2 = 2.3.\n\n• Choice A is incorrect because it reverses the subtraction: 24.2 - 26.5 = -2.3.\n\n• Choice C is incorrect because it subtracts 26.5 from 22.4.\n\n• Choice D is incorrect because 24.2 is the predicted value, not the residual.\n\nCommon Mistake: Reversing the residual formula (Predicted - Actual instead of Actual - Predicted), getting -2.3."
  },
  {
    "id": "pt1-math-m2-q9",
    "section": "math",
    "module": 2,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Exponential equations and functions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The mass M(t), in milligrams, of a radioactive isotope t days after initial observation is modeled by M(t) = 480(0.82)^(t/5). Which of the following expressions shows the daily percentage decrease of the isotope as an explicit constant in the base?",
    "options": [
      {
        "letter": "A",
        "text": "480(0.18)^(t/5)"
      },
      {
        "letter": "B",
        "text": "480(0.961)^t"
      },
      {
        "letter": "C",
        "text": "480(1 - 0.039)^t"
      },
      {
        "letter": "D",
        "text": "480(1 - 0.18)^t"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nTo rewrite M(t) in the form M(t) = 480(1 - r)^t where r represents the daily fractional decrease:\n\n(0.82)^(t/5) = ((0.82)^(1/5))^t.\n\nCalculate (0.82)^(0.2): ln(0.82) approx -0.19845. exp(-0.19845 / 5) = exp(-0.03969) approx 0.961.\n\nSince 0.961 = 1 - 0.039, the expression is 480(1 - 0.039)^t, which explicitly displays the daily decrease of approximately 3.9%.\n\n• Choice A is incorrect because 1 - 0.82 = 0.18 is the 5-day decrease, not the base.\n\n• Choice B displays the retention factor 0.961, but not the explicit decrease constant (1 - r).\n\n• Choice D incorrectly applies the 5-day rate directly to a daily time unit.\n\nCommon Mistake: Assuming the 5-day decay rate of 18% applies on a daily basis, choosing Choice D."
  },
  {
    "id": "pt1-math-m2-q10",
    "section": "math",
    "module": 2,
    "number": 10,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, a and b are constants:\nax - 9y = 15\n4x - 6y = b\nIf the system has infinitely many solutions (x, y), what is the value of a + b?",
    "options": [
      {
        "letter": "A",
        "text": "16"
      },
      {
        "letter": "B",
        "text": "18"
      },
      {
        "letter": "C",
        "text": "21"
      },
      {
        "letter": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, the two equations must be scalar multiples of each other.\n\nLook at the y-coefficients: the ratio of the first equation to the second equation is (-9) / (-6) = 1.5 (or 3/2).\n\nTherefore, the ratio of all corresponding coefficients and constants must be 1.5:\n\n1. a / 4 = 1.5 -> a = 4 * 1.5 = 6.\n\n2. 15 / b = 1.5 -> b = 15 / 1.5 = 10.\n\nNow calculate a + b: 6 + 10 = 16.\n\n• Choice B is incorrect because 18 = 6 * 3.\n\n• Choice C is incorrect because 21 = 15 + 6.\n\n• Choice D is incorrect because it adds 15 + 9.\n\nCommon Mistake: Inverting the ratio when solving for b (calculating b = 15 * 1.5 = 22.5) or arithmetic errors in adding a and b."
  },
  {
    "id": "pt1-math-m2-q11",
    "section": "math",
    "module": 2,
    "number": 11,
    "domain": "Advanced Math",
    "skill": "Nonlinear systems of equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The line y = c intersects the parabola y = -2x^2 + 12x - 7 at exactly one point in the xy-plane. What is the value of c?",
    "options": [
      {
        "letter": "A",
        "text": "7"
      },
      {
        "letter": "B",
        "text": "11"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nA horizontal line y = c intersects a downward-opening parabola at exactly one point if and only if the line passes through the parabola's vertex (the maximum point).\n\nFor the parabola y = -2x^2 + 12x - 7, the x-coordinate of the vertex is x_v = -B / (2A) = -12 / (2 * -2) = -12 / -4 = 3.\n\nSubstitute x = 3 into the quadratic equation to find the maximum y-value:\n\ny_max = -2(3)^2 + 12(3) - 7 = -2(9) + 36 - 7 = -18 + 36 - 7 = 11.\n\nTherefore, c = 11.\n\nAlternatively, set -2x^2 + 12x - 7 = c -> 2x^2 - 12x + (c + 7) = 0. Set discriminant Delta = 0: (-12)^2 - 4(2)(c + 7) = 0 -> 144 - 8(c + 7) = 0 -> 144 = 8(c + 7) -> 18 = c + 7 -> c = 11.\n\n• Choice A is incorrect because 7 is the absolute value of the constant term.\n\n• Choice C is incorrect because 14 = 25 - 11.\n\n• Choice D is incorrect because 25 is calculated without subtracting 18 + 7.\n\nCommon Mistake: Using x = -b/a instead of -b/(2a), getting x = 6, which yields a wildly inaccurate y-value."
  },
  {
    "id": "pt1-math-m2-q12",
    "section": "math",
    "module": 2,
    "number": 12,
    "domain": "Geometry and Trigonometry",
    "skill": "Circles, arc length, and radians",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A circle has its center at the origin and a radius of 18. A central angle theta intercepts an arc of length 15pi on the circle. What is the measure of angle theta, in radians?",
    "options": [
      {
        "letter": "A",
        "text": "(3/5)pi"
      },
      {
        "letter": "B",
        "text": "(5/6)pi"
      },
      {
        "letter": "C",
        "text": "(6/5)pi"
      },
      {
        "letter": "D",
        "text": "(5/3)pi"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nThe formula for arc length s in terms of radius r and central angle theta in radians is s = r * theta.\n\nSubstitute the known values:\n\n15pi = 18 * theta\n\ntheta = (15pi) / 18 = (5/6)pi radians.\n\n• Choice A is incorrect because it inverts the fraction to 18 / (15pi) -> 3/5.\n\n• Choice C is incorrect because it calculates 18 / 15 = 6/5.\n\n• Choice D is incorrect because it doubles 5/6.\n\nCommon Mistake: Inverting the ratio as theta = r / s instead of theta = s / r."
  },
  {
    "id": "pt1-math-m2-q13",
    "section": "math",
    "module": 2,
    "number": 13,
    "domain": "Advanced Math",
    "skill": "Rational expressions and equations",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "For what value of x is the rational function f(x) = (2x + 6) / (x^2 - 5x - 24) undefined?",
    "options": [
      {
        "letter": "A",
        "text": "x = -3 and x = 8"
      },
      {
        "letter": "B",
        "text": "x = 8 only"
      },
      {
        "letter": "C",
        "text": "x = -3 only"
      },
      {
        "letter": "D",
        "text": "x = 3 and x = -8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nA rational function is undefined wherever its denominator equals zero. Set the denominator equal to zero:\n\nx^2 - 5x - 24 = 0\n\nFactor the quadratic:\n\n(x - 8)(x + 3) = 0\n\nThis gives x = 8 and x = -3.\n\nEven though the numerator (2x + 6) = 2(x + 3) shares a common factor of (x + 3) creating a removable discontinuity (a hole) at x = -3, the function itself is still undefined at x = -3 as division by zero is mathematically undefined. Therefore, the function is undefined at both x = -3 and x = 8.\n\n• Choice B is incorrect because it forgets that a hole is also a point where the function is undefined.\n\n• Choice C is incorrect because 8 is the vertical asymptote where the function is also undefined.\n\n• Choice D has sign errors on the roots.\n\nCommon Mistake: Canceling the factor (x + 3) before determining the domain, incorrectly concluding that the function is defined at x = -3."
  },
  {
    "id": "pt1-math-m2-q14",
    "section": "math",
    "module": 2,
    "number": 14,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Statistical inference and margin of error",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "A political polling agency conducted a survey of 1,200 randomly selected registered voters in a state and found that 54% favored a proposed ballot initiative, with an associated margin of error of +/- 2.8% at a 95% confidence level. Which of the following modifications would be expected to produce a smaller margin of error at the same 95% confidence level?",
    "options": [
      {
        "letter": "A",
        "text": "Surveying a larger sample of 2,500 randomly selected registered voters from the same state"
      },
      {
        "letter": "B",
        "text": "Surveying a smaller sample of 600 randomly selected registered voters from the same state"
      },
      {
        "letter": "C",
        "text": "Increasing the confidence level from 95% to 99% while keeping the sample size at 1,200"
      },
      {
        "letter": "D",
        "text": "Selecting registered voters exclusively from the state's largest metropolitan county"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nThe margin of error for a sample proportion is inversely proportional to the square root of the sample size: Margin of Error = z* * sqrt(p(1 - p) / n). To decrease the margin of error (make it smaller and more precise) while holding the confidence level constant, the sample size n must be increased. Thus, surveying 2,500 voters will decrease the margin of error.\n\n• Choice B is incorrect because decreasing sample size increases the margin of error.\n\n• Choice C is incorrect because increasing confidence level increases the critical value z*, widening the margin of error.\n\n• Choice D is incorrect because restricting the sample introduces severe selection bias without guaranteeing a smaller margin of error.\n\nCommon Mistake: Confusing confidence level with sample size, or believing a smaller sample yields a smaller error."
  },
  {
    "id": "pt1-math-m2-q15",
    "section": "math",
    "module": 2,
    "number": 15,
    "domain": "Advanced Math",
    "skill": "Structure of quadratic expressions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the equation x^2 + kx + 40 = 0, k is a negative integer. If the equation has two distinct real integer solutions, what is the greatest possible value of k?",
    "options": [
      {
        "letter": "A",
        "text": "-41"
      },
      {
        "letter": "B",
        "text": "-22"
      },
      {
        "letter": "C",
        "text": "-14"
      },
      {
        "letter": "D",
        "text": "-13"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nLet the two integer solutions be r1 and r2. The equation is (x - r1)(x - r2) = x^2 - (r1 + r2)x + r1*r2 = 0.\n\nComparing with x^2 + kx + 40 = 0:\n\n1. r1 * r2 = 40\n\n2. -(r1 + r2) = k -> k = -(r1 + r2).\n\nSince k is negative, (r1 + r2) must be positive. Since r1 * r2 = 40 is positive and their sum is positive, both r1 and r2 must be positive integers.\n\nTo make k as large as possible (closest to 0), we want the sum (r1 + r2) to be as small as possible.\n\nListing the factor pairs of 40:\n\n• 1 and 40: sum = 41 -> k = -41\n\n• 2 and 20: sum = 22 -> k = -22\n\n• 4 and 10: sum = 14 -> k = -14\n\n• 5 and 8: sum = 13 -> k = -13\n\nSince 5 and 8 are distinct integers, the minimum sum is 13, which makes the greatest negative value k = -13.\n\n• Choice A (-41) is the smallest value of k.\n\n• Choice B (-22) corresponds to factors 2 and 20.\n\n• Choice C (-14) corresponds to factors 4 and 10.\n\nCommon Mistake: Selecting -41 because 41 is the largest magnitude, forgetting that for negative numbers, greater means closer to zero."
  },
  {
    "id": "pt1-math-m2-q16",
    "section": "math",
    "module": 2,
    "number": 16,
    "domain": "Algebra",
    "skill": "Linear inequalities and absolute value",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Which of the following absolute value inequalities has the solution set -2 <= x <= 10?",
    "options": [
      {
        "letter": "A",
        "text": "|x - 4| <= 6"
      },
      {
        "letter": "B",
        "text": "|x + 4| <= 6"
      },
      {
        "letter": "C",
        "text": "|x - 6| <= 4"
      },
      {
        "letter": "D",
        "text": "|x + 6| <= 4"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nAn interval [a, b] can be written in absolute value form |x - midpoint| <= radius.\n\nMidpoint = (a + b) / 2 = (-2 + 10) / 2 = 8 / 2 = 4.\n\nRadius (half-width) = (b - a) / 2 = (10 - (-2)) / 2 = 12 / 2 = 6.\n\nTherefore, the inequality is |x - 4| <= 6.\n\nVerification: -6 <= x - 4 <= 6 -> adding 4 gives -2 <= x <= 10.\n\n• Choice B (|x + 4| <= 6) has midpoint -4, giving -10 <= x <= 2.\n\n• Choice C (|x - 6| <= 4) gives 2 <= x <= 10.\n\n• Choice D (|x + 6| <= 4) gives -10 <= x <= -2.\n\nCommon Mistake: Confusing the midpoint with the half-width, selecting Choice C."
  },
  {
    "id": "pt1-math-m2-q17",
    "section": "math",
    "module": 2,
    "number": 17,
    "domain": "Geometry and Trigonometry",
    "skill": "Area and volume of solids",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Right circular Cylinder A and right circular Cylinder B have equal volumes. The radius of Cylinder B is 25% greater than the radius of Cylinder A. By what percentage is the height of Cylinder A greater than the height of Cylinder B?",
    "options": [
      {
        "letter": "A",
        "text": "25%"
      },
      {
        "letter": "B",
        "text": "36%"
      },
      {
        "letter": "C",
        "text": "56.25%"
      },
      {
        "letter": "D",
        "text": "64%"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nLet the radius and height of Cylinder A be r_A and h_A, and those of Cylinder B be r_B and h_B.\n\nVolume formula: V = pi * r^2 * h.\n\nSince r_B is 25% greater than r_A: r_B = 1.25 * r_A = (5/4) * r_A.\n\nEquating volumes: pi * (r_A)^2 * h_A = pi * (r_B)^2 * h_B\n\n(r_A)^2 * h_A = ((5/4) * r_A)^2 * h_B\n\n(r_A)^2 * h_A = (25/16) * (r_A)^2 * h_B\n\nh_A = (25/16) * h_B = 1.5625 * h_B.\n\nSince h_A = 1.5625 * h_B, h_A is 0.5625 = 56.25% greater than h_B.\n\n• Choice A is incorrect because it assumes a linear inverse relationship (25%).\n\n• Choice B is incorrect because 36% is (1 - 16/25) = 9/25, which is how much shorter B is than A, not how much taller A is than B.\n\n• Choice D is incorrect because 64% is 16/25 as a percentage.\n\nCommon Mistake: Calculating the percentage decrease from A to B (36%) rather than the percentage increase from B to A (56.25%)."
  },
  {
    "id": "pt1-math-m2-q18",
    "section": "math",
    "module": 2,
    "number": 18,
    "domain": "Algebra",
    "skill": "Systems of two linear equations in two variables",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the system of equations below, m is a constant:\n3x + 5y = 41\n6x + my = 82\nIf the system has infinitely many solutions, what is the value of m?",
    "correctAnswer": "10",
    "explanation": "Step-by-Step Solution:\n\nFor a system of linear equations to have infinitely many solutions, the two equations must represent the exact same line, meaning one equation is an exact scalar multiple of the other.\n\nNotice that multiplying the first equation by 2 gives:\n\n2(3x + 5y) = 2(41) -> 6x + 10y = 82.\n\nComparing this directly to the second equation 6x + my = 82, we see that the coefficients of x and the constants already match (6 and 82). Therefore, the coefficients of y must be identical:\n\nm = 10.\n\nCommon Mistake: Dividing 5 by 2 instead of multiplying by 2, yielding 2.5."
  },
  {
    "id": "pt1-math-m2-q19",
    "section": "math",
    "module": 2,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "For what positive value of c does the quadratic equation 4x^2 - 12x + c = 0 have exactly one real solution?",
    "correctAnswer": "9",
    "explanation": "Step-by-Step Solution:\n\nA quadratic equation Ax^2 + Bx + C = 0 has exactly one distinct real solution if and only if its discriminant equals zero:\n\nDelta = B^2 - 4AC = 0\n\nHere, A = 4, B = -12, and C = c.\n\n(-12)^2 - 4(4)(c) = 0\n\n144 - 16c = 0\n\n16c = 144\n\nc = 144 / 16 = 9.\n\nVerification: 4x^2 - 12x + 9 = (2x - 3)^2 = 0, which has the single repeated root x = 3/2.\n\nCommon Mistake: Squaring -12 as -144, leading to c = -9."
  },
  {
    "id": "pt1-math-m2-q20",
    "section": "math",
    "module": 2,
    "number": 20,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Measures of center and spread",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "Class A with 18 students had an average exam score of 78. Class B with 22 students had an average exam score of 88. When the scores of both classes are combined into a single group of 40 students, what is the mean score of the combined group?",
    "correctAnswer": "83.5",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Calculate the total sum of scores in Class A:\n\nSum_A = 18 * 78 = 1,404.\n\nStep 2: Calculate the total sum of scores in Class B:\n\nSum_B = 22 * 88 = 1,936.\n\nStep 3: Calculate the combined sum for all 40 students:\n\nTotal_Sum = 1,404 + 1,936 = 3,340.\n\nStep 4: Divide the total sum by the total number of students:\n\nCombined Mean = 3,340 / 40 = 83.5.\n\nCheck: Since Class B has slightly more students (22 vs 18), the mean should be slightly closer to 88 than to 78 (midpoint is 83, and 83.5 is correctly pulled toward 88).\n\nCommon Mistake: Simply averaging the two averages: (78 + 88) / 2 = 83, failing to weight by the class sizes."
  },
  {
    "id": "pt1-math-m2-q21",
    "section": "math",
    "module": 2,
    "number": 21,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations in the coordinate plane",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "A circle in the xy-plane has diameter endpoints at (-3, 2) and (5, 8). The equation of the circle is (x - h)^2 + (y - k)^2 = R. What is the value of R?",
    "correctAnswer": "25",
    "explanation": "Step-by-Step Solution:\n\nStep 1: The value R on the right side of the circle equation represents the square of the radius, R = r^2.\n\nStep 2: Find the length of the diameter using the distance formula between (-3, 2) and (5, 8):\n\nd^2 = (5 - (-3))^2 + (8 - 2)^2\n\nd^2 = (8)^2 + (6)^2 = 64 + 36 = 100.\n\nThus, diameter d = sqrt(100) = 10.\n\nStep 3: The radius r is half of the diameter: r = 10 / 2 = 5.\n\nStep 4: Therefore, R = r^2 = 5^2 = 25.\n\nAlternatively: The center is the midpoint (( -3 + 5)/2, (2 + 8)/2) = (1, 5). The distance squared from (1, 5) to (5, 8) is (5 - 1)^2 + (8 - 5)^2 = 4^2 + 3^2 = 16 + 9 = 25.\n\nCommon Mistake: Reporting the radius r = 5 or the diameter squared d^2 = 100 instead of r^2 = 25."
  },
  {
    "id": "pt1-math-m2-q22",
    "section": "math",
    "module": 2,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "The line y = 4x + k is tangent to the parabola y = 2x^2 - 8x + 23 at exactly one point in the xy-plane. What is the value of the constant k?",
    "correctAnswer": "5",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the line equation equal to the parabola equation:\n\n2x^2 - 8x + 23 = 4x + k\n\nStep 2: Rearrange into standard quadratic form Ax^2 + Bx + C = 0:\n\n2x^2 - 12x + (23 - k) = 0\n\nStep 3: For tangency (exactly one point of intersection), the discriminant Delta must equal zero:\n\nDelta = B^2 - 4AC = 0\n\n(-12)^2 - 4(2)(23 - k) = 0\n\n144 - 8(23 - k) = 0\n\n144 - 184 + 8k = 0\n\n-40 + 8k = 0\n\n8k = 40\n\nk = 5.\n\nVerification: With k = 5, 2x^2 - 12x + 18 = 2(x^2 - 6x + 9) = 2(x - 3)^2 = 0, giving single tangency at x = 3.\n\nCommon Mistake: Sign error when distributing -8 across (23 - k), writing -184 - 8k = 0 and obtaining k = -5."
  }
];
