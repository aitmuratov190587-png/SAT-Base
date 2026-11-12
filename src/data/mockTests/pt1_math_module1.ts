import type { MockTestQuestion } from './pt1_types.ts';

export const PT1_MATH_MODULE1_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt1-math-m1-q1",
    "section": "math",
    "module": 1,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 4x + 9 = 33, what is the value of 2x + 1?",
    "options": [
      {
        "letter": "A",
        "text": "13"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "11"
      },
      {
        "letter": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nSubtract 9 from both sides of 4x + 9 = 33 to get 4x = 24. Dividing both sides by 4 gives x = 6. Substituting x = 6 into the expression 2x + 1 yields 2(6) + 1 = 12 + 1 = 13.\n\n• Choice B is incorrect because 6 is the value of x, not 2x + 1.\n\n• Choice C is incorrect because it results from calculating 2(6) - 1.\n\n• Choice D is incorrect because it results from adding 3 to 12 instead of 1.\n\nCommon Mistake: Solving for x = 6 and selecting 6 directly without evaluating the requested expression 2x + 1."
  },
  {
    "id": "pt1-math-m1-q2",
    "section": "math",
    "module": 1,
    "number": 2,
    "domain": "Algebra",
    "skill": "Linear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A catering service charges a flat equipment setup fee of $85 plus $24 per guest. Which function C gives the total cost, in dollars, for an event with g guests?",
    "options": [
      {
        "letter": "A",
        "text": "C(g) = 85g + 24"
      },
      {
        "letter": "B",
        "text": "C(g) = 24g + 85"
      },
      {
        "letter": "C",
        "text": "C(g) = 109g"
      },
      {
        "letter": "D",
        "text": "C(g) = 24g - 85"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nThe fixed equipment setup fee is a constant $85 (the y-intercept), and the variable rate is $24 per guest (the slope). Therefore, the total cost function is C(g) = 24g + 85.\n\n• Choice A is incorrect because it interchanges the per-guest rate with the flat fee.\n\n• Choice C is incorrect because it adds 85 and 24 together as a combined rate per guest.\n\n• Choice D is incorrect because it subtracts the setup fee instead of adding it.\n\nCommon Mistake: Swapping the slope and y-intercept in the linear equation."
  },
  {
    "id": "pt1-math-m1-q3",
    "section": "math",
    "module": 1,
    "number": 3,
    "domain": "Advanced Math",
    "skill": "Equivalent expressions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (5x^2 - 3x + 8) + (2x^2 + 7x - 5)?",
    "options": [
      {
        "letter": "A",
        "text": "7x^2 + 10x + 3"
      },
      {
        "letter": "B",
        "text": "10x^2 + 4x + 3"
      },
      {
        "letter": "C",
        "text": "7x^2 + 4x + 3"
      },
      {
        "letter": "D",
        "text": "7x^2 + 4x + 13"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nCombine like terms:\n\n(5x^2 + 2x^2) + (-3x + 7x) + (8 - 5) = 7x^2 + 4x + 3.\n\n• Choice A is incorrect because -3x + 7x was evaluated as 10x.\n\n• Choice B is incorrect because the leading coefficients were multiplied (5 * 2 = 10) instead of added.\n\n• Choice D is incorrect because 8 and 5 were added (8 + 5 = 13) instead of subtracted.\n\nCommon Mistake: Sign errors when combining the linear coefficients (-3 + 7)."
  },
  {
    "id": "pt1-math-m1-q4",
    "section": "math",
    "module": 1,
    "number": 4,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A retail store discounted a jacket by 25% from its original price of $160. What was the sale price of the jacket, in dollars, before sales tax?",
    "options": [
      {
        "letter": "A",
        "text": "40"
      },
      {
        "letter": "B",
        "text": "115"
      },
      {
        "letter": "C",
        "text": "135"
      },
      {
        "letter": "D",
        "text": "120"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nA 25% discount means the customer pays 100% - 25% = 75% of the original price. 0.75 * 160 = $120. Alternatively, the discount amount is 0.25 * 160 = $40, and subtracting this from the original price yields 160 - 40 = $120.\n\n• Choice A is incorrect because $40 is the discount amount, not the sale price.\n\n• Choice B is incorrect because it subtracts $45.\n\n• Choice C is incorrect because it represents a 15% discount.\n\nCommon Mistake: Selecting the discount amount ($40) rather than subtracting it from the original price."
  },
  {
    "id": "pt1-math-m1-q5",
    "section": "math",
    "module": 1,
    "number": 5,
    "domain": "Geometry and Trigonometry",
    "skill": "Lines, angles, and triangles",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "In right triangle ABC, the measure of angle B is 90 degrees. If the measure of angle A is 38 degrees, what is the measure, in degrees, of angle C?",
    "options": [
      {
        "letter": "A",
        "text": "52"
      },
      {
        "letter": "B",
        "text": "42"
      },
      {
        "letter": "C",
        "text": "62"
      },
      {
        "letter": "D",
        "text": "142"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nThe two acute angles in a right triangle are complementary (their sum is 90 degrees). Thus, measure of angle C = 90 - 38 = 52 degrees.\n\n• Choice B is incorrect because it calculates 80 - 38.\n\n• Choice C is incorrect because it calculates 100 - 38.\n\n• Choice D is incorrect because it subtracts 38 from 180 without subtracting the 90-degree right angle.\n\nCommon Mistake: Subtracting 38 directly from 180 instead of 90."
  },
  {
    "id": "pt1-math-m1-q6",
    "section": "math",
    "module": 1,
    "number": 6,
    "domain": "Advanced Math",
    "skill": "Nonlinear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "The function g is defined by g(x) = 3(2)^x. What is the value of g(4)?",
    "options": [
      {
        "letter": "A",
        "text": "24"
      },
      {
        "letter": "B",
        "text": "48"
      },
      {
        "letter": "C",
        "text": "64"
      },
      {
        "letter": "D",
        "text": "96"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nFollowing the standard order of operations, evaluate the exponent first: 2^4 = 16. Then multiply by the coefficient: 3 * 16 = 48.\n\n• Choice A is incorrect because it multiplies 3 * 2 first to get 6, and then multiplies 6 * 4 = 24.\n\n• Choice C is incorrect because it evaluates 4^3.\n\n• Choice D is incorrect because it calculates 3 * 32.\n\nCommon Mistake: Multiplying 3 by 2 before evaluating the exponent."
  },
  {
    "id": "pt1-math-m1-q7",
    "section": "math",
    "module": 1,
    "number": 7,
    "domain": "Algebra",
    "skill": "Linear equations in two variables",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A line in the xy-plane passes through the points (0, -4) and (3, 5). What is the slope of the line?",
    "options": [
      {
        "letter": "A",
        "text": "1/3"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nThe slope formula is m = (y2 - y1) / (x2 - x1). Substituting the given coordinates: m = (5 - (-4)) / (3 - 0) = (5 + 4) / 3 = 9 / 3 = 3.\n\n• Choice A is incorrect because it inverts the formula to run over rise (3/9 = 1/3).\n\n• Choice B is incorrect because it fails to distribute the negative sign: (5 - 4) / 3 = 1/3, or arithmetic error.\n\n• Choice D is incorrect because it calculates the vertical change (9) without dividing by the horizontal change (3).\n\nCommon Mistake: Calculating run over rise or making a sign error with the negative y-intercept."
  },
  {
    "id": "pt1-math-m1-q8",
    "section": "math",
    "module": 1,
    "number": 8,
    "domain": "Algebra",
    "skill": "Linear inequalities in one or two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A landscaper has a budget of at most $650 for plants. Fruit trees cost $45 each and flowering shrubs cost $20 each. If the landscaper purchases 8 fruit trees, what is the maximum number of flowering shrubs the landscaper can purchase within budget?",
    "options": [
      {
        "letter": "A",
        "text": "13"
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
        "text": "14"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nLet s be the number of shrubs. The budget constraint is 45(8) + 20s <= 650. Calculating 45 * 8 gives 360, so 360 + 20s <= 650. Subtracting 360 gives 20s <= 290. Dividing by 20 yields s <= 14.5. Since the landscaper cannot purchase a fraction of a shrub, the maximum whole number of shrubs is 14.\n\n• Choice A is incorrect because 13 shrubs is within budget but not the maximum.\n\n• Choice B is incorrect because 15 shrubs would cost 360 + 300 = $660, exceeding the $650 budget.\n\n• Choice C is incorrect because 16 shrubs costs $680.\n\nCommon Mistake: Rounding 14.5 up to 15, violating the budget limit."
  },
  {
    "id": "pt1-math-m1-q9",
    "section": "math",
    "module": 1,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "What is the positive solution to the equation 2x^2 - 7x - 15 = 0?",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "3/2"
      },
      {
        "letter": "C",
        "text": "5/2"
      },
      {
        "letter": "D",
        "text": "15/2"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFactor the quadratic equation 2x^2 - 7x - 15 = 0 into (2x + 3)(x - 5) = 0. Setting each factor to zero gives 2x + 3 = 0 -> x = -3/2, and x - 5 = 0 -> x = 5. The problem asks for the positive solution, which is 5.\n\n• Choice B is incorrect because it is the absolute value of the negative root (-3/2).\n\n• Choice C is incorrect because of an error in the factoring coefficients.\n\n• Choice D is incorrect because it takes 15 / 2 from the constant term.\n\nCommon Mistake: Factoring incorrectly as (2x - 3)(x + 5) = 0, leading to x = 3/2 as the presumed positive root."
  },
  {
    "id": "pt1-math-m1-q10",
    "section": "math",
    "module": 1,
    "number": 10,
    "domain": "Algebra",
    "skill": "Systems of two linear equations in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Consider the system of equations:\n3x + 2y = 19\n5x - 4y = 17\nWhat is the value of x + y?",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "7"
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
    "explanation": "Step-by-Step Solution:\n\nMultiply the first equation by 2 to align the y-coefficients:\n\n6x + 4y = 38\n\nAdd this to the second equation:\n\n(6x + 4y) + (5x - 4y) = 38 + 17\n\n11x = 55 -> x = 5.\n\nSubstitute x = 5 back into the first equation: 3(5) + 2y = 19 -> 15 + 2y = 19 -> 2y = 4 -> y = 2. Thus, x + y = 5 + 2 = 7.\n\n• Choice A is incorrect because 5 is only the value of x.\n\n• Choice C is incorrect because it represents 2x - 1.\n\n• Choice D is incorrect because it represents 2x + y = 12.\n\nCommon Mistake: Solving for x = 5 and forgetting to add y."
  },
  {
    "id": "pt1-math-m1-q11",
    "section": "math",
    "module": 1,
    "number": 11,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Two-way tables and probability",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "A survey asked 200 college students about their primary study location:\n• Library: 45 STEM majors, 35 Humanities majors (Total: 80)\n• Student Center: 30 STEM majors, 50 Humanities majors (Total: 80)\n• Dorm Room: 25 STEM majors, 15 Humanities majors (Total: 40)\n• Total: 100 STEM majors, 100 Humanities majors (Grand Total: 200)\nIf a student who prefers the Library is selected at random, what is the probability that the student is a STEM major?",
    "options": [
      {
        "letter": "A",
        "text": "45/200"
      },
      {
        "letter": "B",
        "text": "45/100"
      },
      {
        "letter": "C",
        "text": "45/80"
      },
      {
        "letter": "D",
        "text": "80/200"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nThis question requires calculating a conditional probability: P(STEM | Library). The condition restricts our sample space to the 80 students who prefer the Library. Among these 80 students, 45 are STEM majors. Therefore, the probability is 45/80 (or 9/16).\n\n• Choice A is incorrect because it divides by the total student body (200) rather than the library subpopulation.\n\n• Choice B is incorrect because it divides by the total number of STEM majors (100).\n\n• Choice D is incorrect because it represents the probability that any student prefers the library.\n\nCommon Mistake: Using the overall sample size (200) instead of the restricted condition (80)."
  },
  {
    "id": "pt1-math-m1-q12",
    "section": "math",
    "module": 1,
    "number": 12,
    "domain": "Advanced Math",
    "skill": "Quadratic functions and their graphs",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "The graph of the quadratic function f(x) = -(x - 3)^2 + 16 has vertex (h, k). What is the value of h + k?",
    "options": [
      {
        "letter": "A",
        "text": "13"
      },
      {
        "letter": "B",
        "text": "16"
      },
      {
        "letter": "C",
        "text": "25"
      },
      {
        "letter": "D",
        "text": "19"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nIn vertex form, f(x) = a(x - h)^2 + k, the vertex is located at (h, k). Here, f(x) = -(x - 3)^2 + 16, so h = 3 and k = 16. Therefore, h + k = 3 + 16 = 19.\n\n• Choice A is incorrect because it misidentifies h as -3, calculating -3 + 16 = 13.\n\n• Choice B is incorrect because 16 is only the value of k.\n\n• Choice C is incorrect because it calculates 3^2 + 16 = 25.\n\nCommon Mistake: Sign error on the horizontal shift, taking h = -3 instead of h = 3."
  },
  {
    "id": "pt1-math-m1-q13",
    "section": "math",
    "module": 1,
    "number": 13,
    "domain": "Geometry and Trigonometry",
    "skill": "Right triangle trigonometry",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In right triangle DEF, angle E is a right angle. If sin(D) = 8/17, what is the value of cos(F)?",
    "options": [
      {
        "letter": "A",
        "text": "8/17"
      },
      {
        "letter": "B",
        "text": "15/17"
      },
      {
        "letter": "C",
        "text": "17/15"
      },
      {
        "letter": "D",
        "text": "15/8"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nIn right triangle DEF with right angle E, the acute angles D and F are complementary (D + F = 90 degrees). By the cofunction identity, cos(F) = sin(90 - F) = sin(D) = 8/17.\n\n• Choice B is incorrect because 15/17 is the value of cos(D) or sin(F).\n\n• Choice C is incorrect because it is the secant ratio (hypotenuse / adjacent).\n\n• Choice D is incorrect because it is the cotangent ratio.\n\nCommon Mistake: Computing cos(D) using the Pythagorean theorem rather than recognizing the cofunction identity cos(F) = sin(D)."
  },
  {
    "id": "pt1-math-m1-q14",
    "section": "math",
    "module": 1,
    "number": 14,
    "domain": "Advanced Math",
    "skill": "Radical and rational exponents",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "For all positive values of x, which of the following is equivalent to (x^(5/6)) / (x^(1/4))?",
    "options": [
      {
        "letter": "A",
        "text": "x^(1/12)"
      },
      {
        "letter": "B",
        "text": "x^(7/12)"
      },
      {
        "letter": "C",
        "text": "x^(10/12)"
      },
      {
        "letter": "D",
        "text": "x^(13/12)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nUsing exponent laws for division with identical bases, subtract the exponents: 5/6 - 1/4. Finding a common denominator of 12 gives 10/12 - 3/12 = 7/12. Therefore, the expression is x^(7/12).\n\n• Choice A is incorrect because it subtracts numerators and denominators independently ((5-1)/(6-4) = 4/2 = 2 or 1/12).\n\n• Choice C is incorrect because it forgets to subtract 3/12.\n\n• Choice D is incorrect because it adds the exponents: 10/12 + 3/12 = 13/12.\n\nCommon Mistake: Adding the exponents instead of subtracting them when dividing terms with the same base."
  },
  {
    "id": "pt1-math-m1-q15",
    "section": "math",
    "module": 1,
    "number": 15,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, k is a constant:\n6x - 15y = 22\n4x - ky = 9\nIf the system has no solution, what is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "-10"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nA system of two linear equations has no solution if the lines are parallel (identical slopes) and distinct (different y-intercepts). In standard form Ax + By = C, the slope is -A/B. The slope of the first line is -6 / (-15) = 2/5. The slope of the second line is -4 / (-k) = 4/k. Equating slopes: 4/k = 2/5 -> 2k = 20 -> k = 10. Checking intercepts: multiplying the second equation by 1.5 gives 6x - 15y = 13.5, which is inconsistent with 6x - 15y = 22, confirming no solution.\n\n• Choice A is incorrect due to a sign error (-10).\n\n• Choice B is incorrect because it takes the coefficient of x from the first equation.\n\n• Choice D is incorrect because it takes the y-coefficient from the first equation.\n\nCommon Mistake: Sign errors with negative signs in standard form slope formulas, yielding -10."
  },
  {
    "id": "pt1-math-m1-q16",
    "section": "math",
    "module": 1,
    "number": 16,
    "domain": "Advanced Math",
    "skill": "Polynomial factors and graphs",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The polynomial function p(x) = x^3 - 4x^2 - 11x + 30 has a known zero at x = 2. What is the sum of the other two zeros of p(x)?",
    "options": [
      {
        "letter": "A",
        "text": "-4"
      },
      {
        "letter": "B",
        "text": "4"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nAccording to Vieta's formulas, for a cubic polynomial ax^3 + bx^2 + cx + d = 0, the sum of all three roots is -b/a = -(-4)/1 = 4. Let the roots be r1, r2, and r3. Since r1 = 2, we have 2 + r2 + r3 = 4, which means r2 + r3 = 4 - 2 = 2. Alternatively, dividing p(x) by (x - 2) using synthetic division yields x^2 - 2x - 15 = (x - 5)(x + 3), whose zeros are 5 and -3. Their sum is 5 + (-3) = 2.\n\n• Choice A is incorrect because it is the coefficient of x^2.\n\n• Choice B is incorrect because 4 is the sum of all three zeros.\n\n• Choice C is incorrect because it adds 4 + 2 = 6.\n\nCommon Mistake: Reporting the sum of all three roots (4) rather than the sum of the remaining two roots (2)."
  },
  {
    "id": "pt1-math-m1-q17",
    "section": "math",
    "module": 1,
    "number": 17,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Data distributions and standard deviation",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Dataset A consists of 50 integers with a mean of 75 and a standard deviation of 8. Dataset B is created by multiplying each value in Dataset A by 3 and then subtracting 10. Which statement correctly compares the mean and standard deviation of Dataset B to Dataset A?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of B is 215, and the standard deviation of B is 24."
      },
      {
        "letter": "B",
        "text": "The mean of B is 215, and the standard deviation of B is 14."
      },
      {
        "letter": "C",
        "text": "The mean of B is 225, and the standard deviation of B is 24."
      },
      {
        "letter": "D",
        "text": "The mean of B is 215, and the standard deviation of B is 8."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFor any linear transformation of data Y = aX + b:\n\n1. The new mean is transformed by both operations: Mean_Y = a(Mean_X) + b = 3(75) - 10 = 225 - 10 = 215.\n\n2. The standard deviation is affected ONLY by the multiplicative factor: SD_Y = |a| * SD_X = 3 * 8 = 24. Adding or subtracting a constant does not change the spread of the data.\n\nTherefore, the mean is 215 and the standard deviation is 24.\n\n• Choice B is incorrect because it incorrectly subtracts 10 from the standard deviation (3 * 8 - 10 = 14).\n\n• Choice C is incorrect because it fails to subtract 10 from the mean.\n\n• Choice D is incorrect because it assumes standard deviation is unchanged by multiplication.\n\nCommon Mistake: Subtracting 10 from the standard deviation, failing to realize that constant shifts leave spread invariant."
  },
  {
    "id": "pt1-math-m1-q18",
    "section": "math",
    "module": 1,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "If 5(2x - 3) - 3(x + 4) = 43, what is the value of x?",
    "correctAnswer": "10",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Expand the parentheses using the distributive property:\n\n10x - 15 - 3x - 12 = 43\n\nStep 2: Combine like terms:\n\n7x - 27 = 43\n\nStep 3: Add 27 to both sides:\n\n7x = 70\n\nStep 4: Divide by 7:\n\nx = 10.\n\nVerification: 5(2(10) - 3) - 3(10 + 4) = 5(17) - 3(14) = 85 - 42 = 43.\n\nCommon Mistake: Distributing -3 across (x + 4) as -3x + 12 instead of -3x - 12."
  },
  {
    "id": "pt1-math-m1-q19",
    "section": "math",
    "module": 1,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "The equation (x - 7)^2 = 64 has two solutions, m and n, where m > n. What is the value of m - n?",
    "correctAnswer": "16",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Take the square root of both sides:\n\nx - 7 = 8 or x - 7 = -8\n\nStep 2: Solve each equation:\n\nx = 15 or x = -1\n\nStep 3: Since m > n, assign m = 15 and n = -1.\n\nStep 4: Compute m - n = 15 - (-1) = 15 + 1 = 16.\n\nNote: For any quadratic of the form (x - a)^2 = d^2, the distance between the two roots is always 2d = 2(8) = 16.\n\nCommon Mistake: Subtracting 15 - 1 = 14 by neglecting the negative sign on n = -1."
  },
  {
    "id": "pt1-math-m1-q20",
    "section": "math",
    "module": 1,
    "number": 20,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, a circle has the equation x^2 + y^2 - 8x + 6y = 56. What is the radius of the circle?",
    "correctAnswer": "9",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Group the x and y terms and complete the square for each variable:\n\n(x^2 - 8x) + (y^2 + 6y) = 56\n\nStep 2: Add (8/2)^2 = 16 and (6/2)^2 = 9 to both sides:\n\n(x^2 - 8x + 16) + (y^2 + 6y + 9) = 56 + 16 + 9\n\nStep 3: Write in standard form (x - h)^2 + (y - k)^2 = r^2:\n\n(x - 4)^2 + (y + 3)^2 = 81\n\nStep 4: The radius r is sqrt(81) = 9.\n\nCommon Mistake: Reporting r^2 = 81 instead of taking the square root to find r = 9."
  },
  {
    "id": "pt1-math-m1-q21",
    "section": "math",
    "module": 1,
    "number": 21,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Exponential functions and models",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "A culture of bacteria begins with an initial population of 250 cells and triples every 4 hours. The population P(t) after t hours can be modeled by P(t) = 250(c)^(t/12). What is the value of the constant c?",
    "correctAnswer": "27",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Model the tripling behavior: P(t) = 250 * 3^(t/4).\n\nStep 2: Equate the base expressions: 3^(t/4) = c^(t/12).\n\nStep 3: Rewrite 3^(t/4) with denominator 12 in the exponent: t/4 = 3t/12, so 3^(3t/12) = (3^3)^(t/12) = 27^(t/12).\n\nStep 4: Comparing with c^(t/12), we have c = 27.\n\nCommon Mistake: Setting c = 3 or multiplying 3 * 3 = 9 instead of cubing 3^3 = 27."
  },
  {
    "id": "pt1-math-m1-q22",
    "section": "math",
    "module": 1,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "The system of equations consists of y = 2x + b and y = x^2 - 6x + 25. If the system has exactly one real solution (x, y), what is the value of b?",
    "correctAnswer": "9",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the two equations equal to each other:\n\nx^2 - 6x + 25 = 2x + b\n\nStep 2: Rearrange into standard quadratic form Ax^2 + Bx + C = 0:\n\nx^2 - 8x + (25 - b) = 0\n\nStep 3: For the system to have exactly one real solution, the discriminant Delta = B^2 - 4AC must equal 0:\n\n(-8)^2 - 4(1)(25 - b) = 0\n\n64 - 100 + 4b = 0\n\n-36 + 4b = 0\n\n4b = 36 -> b = 9.\n\nCommon Mistake: Confusing the coefficient 'B' of the quadratic equation with the parameter 'b' from the linear line."
  }
];
