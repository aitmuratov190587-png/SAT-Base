import type { MockTestQuestion } from './pt1_types.ts';

export const PT2_MATH_MODULE1_QUESTIONS: MockTestQuestion[] = [
  {
    "id": "pt2-math-m1-q1",
    "section": "math",
    "module": 1,
    "number": 1,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "If 6x - 11 = 37, what is the value of 3x - 4?",
    "options": [
      {
        "letter": "A",
        "text": "20"
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
        "text": "24"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nAdd 11 to both sides of 6x - 11 = 37 to get 6x = 48. Dividing both sides by 6 yields x = 8. Substitute x = 8 into 3x - 4: 3(8) - 4 = 24 - 4 = 20.\n\n• Choice B is incorrect because 8 is the value of x, not 3x - 4.\n\n• Choice C is incorrect because it calculates 2(8) = 16.\n\n• Choice D is incorrect because it calculates 3(8) without subtracting 4.\n\nCommon Mistake: Solving for x = 8 and selecting 8 immediately without substituting back into 3x - 4."
  },
  {
    "id": "pt2-math-m1-q2",
    "section": "math",
    "module": 1,
    "number": 2,
    "domain": "Algebra",
    "skill": "Linear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A cloud computing provider charges a fixed monthly subscription fee of $12 plus $0.08 per gigabyte of data transferred. Which function C gives the total monthly bill, in dollars, for transferring g gigabytes of data?",
    "options": [
      {
        "letter": "A",
        "text": "C(g) = 12g + 0.08"
      },
      {
        "letter": "B",
        "text": "C(g) = 0.08g + 12"
      },
      {
        "letter": "C",
        "text": "C(g) = 12.08g"
      },
      {
        "letter": "D",
        "text": "C(g) = 0.08g - 12"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nThe fixed monthly fee of $12 is the constant term (y-intercept), and the variable charge of $0.08 per gigabyte is the rate of change (slope). Thus, the total monthly cost is C(g) = 0.08g + 12.\n\n• Choice A is incorrect because it swaps the per-gigabyte rate with the fixed monthly fee.\n\n• Choice C is incorrect because it combines both numbers into a single variable rate.\n\n• Choice D is incorrect because it subtracts the fixed subscription fee.\n\nCommon Mistake: Interchanging the slope ($0.08) and the y-intercept ($12)."
  },
  {
    "id": "pt2-math-m1-q3",
    "section": "math",
    "module": 1,
    "number": 3,
    "domain": "Advanced Math",
    "skill": "Equivalent expressions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "Which of the following expressions is equivalent to (4x^2 + 6x - 9) - (2x^2 - 5x + 3)?",
    "options": [
      {
        "letter": "A",
        "text": "2x^2 + x - 6"
      },
      {
        "letter": "B",
        "text": "2x^2 + x - 12"
      },
      {
        "letter": "C",
        "text": "2x^2 + 11x - 12"
      },
      {
        "letter": "D",
        "text": "6x^2 + 11x - 6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nDistribute the negative sign across the second polynomial:\n\n4x^2 + 6x - 9 - 2x^2 + 5x - 3\n\nCombine like terms:\n\n(4x^2 - 2x^2) + (6x + 5x) + (-9 - 3) = 2x^2 + 11x - 12.\n\n• Choice A is incorrect because it fails to distribute the negative sign to -5x and +3.\n\n• Choice B is incorrect because it calculates 6x - 5x = x.\n\n• Choice D is incorrect because it adds 4x^2 + 2x^2 = 6x^2 and calculates -9 + 3 = -6.\n\nCommon Mistake: Forgetting to distribute the subtraction sign to all terms inside the second set of parentheses."
  },
  {
    "id": "pt2-math-m1-q4",
    "section": "math",
    "module": 1,
    "number": 4,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A water storage tank initially held 250 gallons of water. After 18% of the water was used for irrigation, how many gallons of water remained in the tank?",
    "options": [
      {
        "letter": "A",
        "text": "45"
      },
      {
        "letter": "B",
        "text": "195"
      },
      {
        "letter": "C",
        "text": "232"
      },
      {
        "letter": "D",
        "text": "205"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nIf 18% of the water was used, then 100% - 18% = 82% of the water remained. Multiply 0.82 * 250 = 205 gallons. Alternatively, 18% of 250 is 0.18 * 250 = 45 gallons used, and 250 - 45 = 205 gallons remaining.\n\n• Choice A is incorrect because 45 gallons is the amount used, not the amount remaining.\n\n• Choice B is incorrect due to an arithmetic error (250 - 55).\n\n• Choice C is incorrect because it subtracts 18 directly from 250 instead of 18% of 250.\n\nCommon Mistake: Finding 18% of 250 (45) and forgetting to subtract it from 250."
  },
  {
    "id": "pt2-math-m1-q5",
    "section": "math",
    "module": 1,
    "number": 5,
    "domain": "Geometry and Trigonometry",
    "skill": "Lines, angles, and triangles",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, two parallel lines are intersected by a transversal. If one of the interior angles on the same side of the transversal measures 114 degrees, what is the measure, in degrees, of the other interior angle on the same side of the transversal?",
    "options": [
      {
        "letter": "A",
        "text": "66"
      },
      {
        "letter": "B",
        "text": "76"
      },
      {
        "letter": "C",
        "text": "114"
      },
      {
        "letter": "D",
        "text": "246"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nWhen two parallel lines are cut by a transversal, consecutive (same-side) interior angles are supplementary, meaning their measures sum to 180 degrees. Therefore, 180 - 114 = 66 degrees.\n\n• Choice B is incorrect because it subtracts from 190.\n\n• Choice C is incorrect because 114 degrees is the measure of alternate interior or vertical angles, not same-side interior angles.\n\n• Choice D is incorrect because it subtracts 114 from 360.\n\nCommon Mistake: Assuming consecutive interior angles are congruent (114 degrees) rather than supplementary (180 - 114 = 66 degrees)."
  },
  {
    "id": "pt2-math-m1-q6",
    "section": "math",
    "module": 1,
    "number": 6,
    "domain": "Advanced Math",
    "skill": "Nonlinear functions",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "The function h is defined by h(x) = 5 * 3^(x - 1). What is the value of h(3)?",
    "options": [
      {
        "letter": "A",
        "text": "15"
      },
      {
        "letter": "B",
        "text": "45"
      },
      {
        "letter": "C",
        "text": "135"
      },
      {
        "letter": "D",
        "text": "225"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nSubstitute x = 3 into the function:\n\nh(3) = 5 * 3^(3 - 1) = 5 * 3^2 = 5 * 9 = 45.\n\n• Choice A is incorrect because it evaluates 5 * 3^1 = 15.\n\n• Choice C is incorrect because it evaluates 5 * 3^3 = 135 without subtracting 1 in the exponent.\n\n• Choice D is incorrect because it multiplies 5 * 3 = 15 first and then squares 15^2 = 225.\n\nCommon Mistake: Forgetting to subtract 1 in the exponent, evaluating 5 * 3^3 = 135."
  },
  {
    "id": "pt2-math-m1-q7",
    "section": "math",
    "module": 1,
    "number": 7,
    "domain": "Algebra",
    "skill": "Linear equations in two variables",
    "difficulty": "Easy",
    "type": "multiple_choice",
    "prompt": "A line in the xy-plane passes through the points (2, 7) and (6, -5). What is the slope of the line?",
    "options": [
      {
        "letter": "A",
        "text": "-1/3"
      },
      {
        "letter": "B",
        "text": "1/2"
      },
      {
        "letter": "C",
        "text": "-3"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nUse the slope formula m = (y2 - y1) / (x2 - x1):\n\nm = (-5 - 7) / (6 - 2) = -12 / 4 = -3.\n\n• Choice A is incorrect because it inverts the slope ratio (4 / -12 = -1/3).\n\n• Choice B is incorrect because it calculates (-5 + 7) / (6 - 2) = 2 / 4 = 1/2.\n\n• Choice D is incorrect because it drops the negative sign.\n\nCommon Mistake: Forgetting the negative sign in -12 / 4 = -3, or inverting run over rise."
  },
  {
    "id": "pt2-math-m1-q8",
    "section": "math",
    "module": 1,
    "number": 8,
    "domain": "Algebra",
    "skill": "Linear inequalities in one or two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "An event organizer has a maximum budget of $250 to print promotional posters. A printing shop charges a $40 setup fee plus $15 per poster. What is the greatest number of posters the organizer can have printed without exceeding the budget?",
    "options": [
      {
        "letter": "A",
        "text": "12"
      },
      {
        "letter": "B",
        "text": "16"
      },
      {
        "letter": "C",
        "text": "19"
      },
      {
        "letter": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nLet n represent the number of posters. The cost inequality is:\n\n40 + 15n <= 250\n\nSubtract 40 from both sides:\n\n15n <= 210\n\nDivide both sides by 15:\n\nn <= 14.\n\nThus, the greatest number of posters is 14.\n\n• Choice A is within budget ($220) but is not the maximum.\n\n• Choice B costs 40 + 15(16) = $280, exceeding the budget.\n\n• Choice C results from adding 40 to 250 before dividing by 15 (290 / 15 = 19.3).\n\nCommon Mistake: Adding the $40 setup fee to $250 instead of subtracting it."
  },
  {
    "id": "pt2-math-m1-q9",
    "section": "math",
    "module": 1,
    "number": 9,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "What is the negative solution to the equation 3x^2 + 10x - 8 = 0?",
    "options": [
      {
        "letter": "A",
        "text": "-4"
      },
      {
        "letter": "B",
        "text": "-2/3"
      },
      {
        "letter": "C",
        "text": "-2"
      },
      {
        "letter": "D",
        "text": "-8/3"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nFactor the quadratic expression 3x^2 + 10x - 8 = 0:\n\n(3x - 2)(x + 4) = 0.\n\nSetting each factor equal to zero gives 3x - 2 = 0 -> x = 2/3, and x + 4 = 0 -> x = -4. The negative solution is -4.\n\n• Choice B is incorrect because 2/3 is the positive root negated.\n\n• Choice C and Choice D result from incorrect factorizations.\n\nCommon Mistake: Reversing the signs when factoring to get (3x + 2)(x - 4) = 0, yielding -2/3 as the negative solution."
  },
  {
    "id": "pt2-math-m1-q10",
    "section": "math",
    "module": 1,
    "number": 10,
    "domain": "Algebra",
    "skill": "Systems of two linear equations in two variables",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "Consider the system of equations:\n2x + 3y = 23\n4x - y = 11\nIf (x, y) is the solution to the system, what is the value of xy?",
    "options": [
      {
        "letter": "A",
        "text": "9"
      },
      {
        "letter": "B",
        "text": "20"
      },
      {
        "letter": "C",
        "text": "24"
      },
      {
        "letter": "D",
        "text": "35"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nFrom the second equation, isolate y: y = 4x - 11. Substitute this expression into the first equation:\n\n2x + 3(4x - 11) = 23\n\n2x + 12x - 33 = 23\n\n14x = 56 -> x = 4.\n\nSubstitute x = 4 back into y = 4x - 11: y = 4(4) - 11 = 16 - 11 = 5.\n\nFinally, compute the product xy = 4 * 5 = 20.\n\n• Choice A is incorrect because 9 is the sum x + y (4 + 5).\n\n• Choice C is incorrect because it calculates 4 * 6.\n\n• Choice D is incorrect because it calculates 5 * 7.\n\nCommon Mistake: Computing the sum x + y = 9 instead of the product xy = 20."
  },
  {
    "id": "pt2-math-m1-q11",
    "section": "math",
    "module": 1,
    "number": 11,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Two-way tables and probability",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "An automotive dealership categorized 200 vehicles in its inventory by powertrain and body style:\n• All-Electric: 60 Sedans, 40 SUVs (Total: 100)\n• Plug-In Hybrid: 30 Sedans, 70 SUVs (Total: 100)\n• Total: 90 Sedans, 110 SUVs (Grand Total: 200)\nIf an SUV is selected at random from this inventory, what is the probability that it is a Plug-In Hybrid?",
    "options": [
      {
        "letter": "A",
        "text": "70/200"
      },
      {
        "letter": "B",
        "text": "70/100"
      },
      {
        "letter": "C",
        "text": "7/11"
      },
      {
        "letter": "D",
        "text": "11/20"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nThis is a conditional probability: P(Plug-In Hybrid | SUV). Restricting attention to the 110 SUVs in inventory, 70 of them are Plug-In Hybrids. Thus, the probability is 70/110, which simplifies to 7/11.\n\n• Choice A is incorrect because it divides by the grand total of all 200 vehicles.\n\n• Choice B is incorrect because it divides by the 100 Plug-In Hybrids rather than the 110 SUVs.\n\n• Choice D is incorrect because 110/200 = 11/20 is the probability that a randomly chosen vehicle is an SUV.\n\nCommon Mistake: Using the total inventory (200) or the row total (100) as the denominator instead of the column total for SUVs (110)."
  },
  {
    "id": "pt2-math-m1-q12",
    "section": "math",
    "module": 1,
    "number": 12,
    "domain": "Advanced Math",
    "skill": "Quadratic functions and their graphs",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In the xy-plane, the parabola y = 2(x + 4)^2 - 18 intersects the x-axis at two points, (a, 0) and (b, 0). What is the distance between these two x-intercepts?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "4"
      },
      {
        "letter": "C",
        "text": "9"
      },
      {
        "letter": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nTo find the x-intercepts, set y = 0:\n\n2(x + 4)^2 - 18 = 0\n\n2(x + 4)^2 = 18\n\n(x + 4)^2 = 9\n\nTake the square root of both sides:\n\nx + 4 = 3 or x + 4 = -3\n\nx = -1 or x = -7.\n\nThe distance between (-1, 0) and (-7, 0) is |-1 - (-7)| = |-1 + 7| = 6.\n\n• Choice A is incorrect because 3 is the distance from the vertex axis of symmetry (x = -4) to one intercept, not between both intercepts.\n\n• Choice B is incorrect because 4 is the magnitude of the vertex x-coordinate.\n\n• Choice C is incorrect because 9 = (x + 4)^2 before taking the square root.\n\nCommon Mistake: Finding the half-distance (3) from the axis of symmetry to one x-intercept instead of doubling it to get the full distance (6)."
  },
  {
    "id": "pt2-math-m1-q13",
    "section": "math",
    "module": 1,
    "number": 13,
    "domain": "Geometry and Trigonometry",
    "skill": "Right triangle trigonometry",
    "difficulty": "Medium",
    "type": "multiple_choice",
    "prompt": "In right triangle XYZ, angle Y is a right angle. If cos(X) = 5/13, what is the value of tan(Z)?",
    "options": [
      {
        "letter": "A",
        "text": "5/12"
      },
      {
        "letter": "B",
        "text": "12/5"
      },
      {
        "letter": "C",
        "text": "12/13"
      },
      {
        "letter": "D",
        "text": "5/13"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nIn right triangle XYZ with right angle Y, the hypotenuse is XZ = 13 and the side adjacent to angle X is XY = 5. By the Pythagorean theorem, the side opposite angle X is YZ = sqrt(13^2 - 5^2) = sqrt(169 - 25) = sqrt(144) = 12. Now consider angle Z: the side opposite angle Z is XY = 5, and the side adjacent to angle Z is YZ = 12. Therefore, tan(Z) = Opposite / Adjacent = XY / YZ = 5/12.\n\n• Choice B is incorrect because 12/5 is tan(X), the reciprocal of tan(Z).\n\n• Choice C is incorrect because 12/13 is sin(X) or cos(Z).\n\n• Choice D is incorrect because 5/13 is cos(X) or sin(Z).\n\nCommon Mistake: Computing tan(X) = 12/5 instead of switching reference angles to angle Z to find tan(Z) = 5/12."
  },
  {
    "id": "pt2-math-m1-q14",
    "section": "math",
    "module": 1,
    "number": 14,
    "domain": "Advanced Math",
    "skill": "Radical and rational exponents",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "For all positive values of x, which of the following is equivalent to sqrt(x^3) * x^(2/5)?",
    "options": [
      {
        "letter": "A",
        "text": "x^(6/10)"
      },
      {
        "letter": "B",
        "text": "x^(19/10)"
      },
      {
        "letter": "C",
        "text": "x^(5/7)"
      },
      {
        "letter": "D",
        "text": "x^(11/10)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Step-by-Step Solution:\n\nRewrite the square root as a rational exponent: sqrt(x^3) = x^(3/2). When multiplying powers with the same base, add the exponents:\n\n3/2 + 2/5.\n\nFind a common denominator of 10:\n\n15/10 + 4/10 = 19/10.\n\nThus, the simplified expression is x^(19/10).\n\n• Choice A multiplies the exponents (3/2 * 2/5 = 6/10) instead of adding them.\n\n• Choice C adds numerators and denominators separately ((3+2)/(2+5) = 5/7).\n\n• Choice D subtracts the exponents (15/10 - 4/10 = 11/10).\n\nCommon Mistake: Multiplying the exponents (3/2 * 2/5) instead of adding them."
  },
  {
    "id": "pt2-math-m1-q15",
    "section": "math",
    "module": 1,
    "number": 15,
    "domain": "Algebra",
    "skill": "Linear systems with infinitely many or no solutions",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "In the system of equations below, k is a constant:\n8x + 12y = 28\n6x + ky = 21\nIf the system has infinitely many solutions, what is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "8"
      },
      {
        "letter": "B",
        "text": "16"
      },
      {
        "letter": "C",
        "text": "9"
      },
      {
        "letter": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Step-by-Step Solution:\n\nFor a system of two linear equations to have infinitely many solutions, the two equations must be proportional (representing the same line). Compare the ratio of the x-coefficients and constants between the first and second equations:\n\n8 / 6 = 4/3, and 28 / 21 = 4/3.\n\nTherefore, the ratio of the y-coefficients must also be 4/3:\n\n12 / k = 4 / 3\n\n4k = 36 -> k = 9.\n\n• Choice A and Choice D result from adding/subtracting the difference between coefficients (12 - 2 = 10).\n\n• Choice B inverts the proportion: 12 * (4/3) = 16.\n\nCommon Mistake: Multiplying 12 by 4/3 instead of dividing by 4/3, yielding 16."
  },
  {
    "id": "pt2-math-m1-q16",
    "section": "math",
    "module": 1,
    "number": 16,
    "domain": "Advanced Math",
    "skill": "Polynomial factors and graphs",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "The cubic polynomial p(x) = x^3 + 3x^2 - 10x - 24 has a zero at x = 3. What is the product of the other two zeros of p(x)?",
    "options": [
      {
        "letter": "A",
        "text": "-8"
      },
      {
        "letter": "B",
        "text": "-6"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Step-by-Step Solution:\n\nBy Vieta's formulas, for a cubic polynomial ax^3 + bx^2 + cx + d = 0, the product of all three roots is -d/a = -(-24)/1 = 24. Given that one root is r1 = 3, the product of the remaining two roots r2 * r3 satisfies 3 * (r2 * r3) = 24, so r2 * r3 = 24 / 3 = 8. Alternatively, dividing p(x) by (x - 3) yields x^2 + 6x + 8 = (x + 2)(x + 4), whose roots are -2 and -4; their product is (-2)(-4) = 8.\n\n• Choice A is incorrect because it omits the negative sign in Vieta's product formula (-d/a).\n\n• Choice B is incorrect because -6 is the sum of the other two roots (-2 + -4 = -6).\n\n• Choice C is the positive sum of the other two roots.\n\nCommon Mistake: Forgetting the negative sign in Vieta's formula (-d/a), obtaining -24 / 3 = -8."
  },
  {
    "id": "pt2-math-m1-q17",
    "section": "math",
    "module": 1,
    "number": 17,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Measures of center and spread",
    "difficulty": "Hard",
    "type": "multiple_choice",
    "prompt": "Two sets of test scores, Set P and Set Q, each contain 40 scores. Set P has a first quartile (Q1) of 44, a median of 52, and a third quartile (Q3) of 60. Set Q has a first quartile (Q1) of 58, a median of 68, and a third quartile (Q3) of 74. Which statement accurately compares the interquartile range (IQR) and median of Set P and Set Q?",
    "options": [
      {
        "letter": "A",
        "text": "Set P and Set Q have the same interquartile range, while Set Q has a greater median."
      },
      {
        "letter": "B",
        "text": "Set Q has both a greater interquartile range and a greater median than Set P."
      },
      {
        "letter": "C",
        "text": "Set P has a greater interquartile range than Set Q, while Set Q has a greater median."
      },
      {
        "letter": "D",
        "text": "Set P and Set Q have the same median, while Set Q has a greater interquartile range."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Step-by-Step Solution:\n\nThe interquartile range (IQR) is defined as Q3 - Q1:\n\n• For Set P: IQR_P = 60 - 44 = 16. Median_P = 52.\n\n• For Set Q: IQR_Q = 74 - 58 = 16. Median_Q = 68.\n\nComparing the two: IQR_P = IQR_Q = 16 (identical interquartile ranges), and Median_Q (68) > Median_P (52).\n\n• Choice B and Choice C incorrectly assume the IQRs are different because the quartile values in Set Q are higher.\n\n• Choice D reverses the comparison of medians and IQRs.\n\nCommon Mistake: Assuming that higher quartile values automatically mean a larger interquartile range."
  },
  {
    "id": "pt2-math-m1-q18",
    "section": "math",
    "module": 1,
    "number": 18,
    "domain": "Algebra",
    "skill": "Linear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "If 4(3x + 2) - 2(5x - 7) = 36, what is the value of x?",
    "correctAnswer": "7",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Expand both sets of parentheses carefully:\n\n12x + 8 - 10x + 14 = 36\n\nStep 2: Combine like terms:\n\n(12x - 10x) + (8 + 14) = 36\n\n2x + 22 = 36\n\nStep 3: Subtract 22 from both sides:\n\n2x = 14\n\nStep 4: Divide by 2:\n\nx = 7.\n\nVerification: 4(21 + 2) - 2(35 - 7) = 4(23) - 2(28) = 92 - 56 = 36.\n\nCommon Mistake: Distributing -2 over (5x - 7) as -10x - 14 instead of -10x + 14."
  },
  {
    "id": "pt2-math-m1-q19",
    "section": "math",
    "module": 1,
    "number": 19,
    "domain": "Advanced Math",
    "skill": "Nonlinear equations in one variable",
    "difficulty": "Medium",
    "type": "student_produced_response",
    "prompt": "What is the positive solution to the equation (x + 5)^2 = 49?",
    "correctAnswer": "2",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Take the square root of both sides:\n\nx + 5 = 7 or x + 5 = -7\n\nStep 2: Solve both linear equations:\n\nx = 7 - 5 = 2, or x = -7 - 5 = -12.\n\nStep 3: The two solutions are 2 and -12; the positive solution is 2.\n\nVerification: (2 + 5)^2 = 7^2 = 49.\n\nCommon Mistake: Taking the square root of 49 as 7 and adding 5 instead of subtracting 5, getting 12."
  },
  {
    "id": "pt2-math-m1-q20",
    "section": "math",
    "module": 1,
    "number": 20,
    "domain": "Geometry and Trigonometry",
    "skill": "Circle equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the graph of x^2 + y^2 + 10x - 4y = 35 is a circle. What is the length of the radius of this circle?",
    "correctAnswer": "8",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Group the x and y terms and complete the square:\n\n(x^2 + 10x) + (y^2 - 4y) = 35\n\nStep 2: Add (10/2)^2 = 25 and (-4/2)^2 = 4 to both sides:\n\n(x^2 + 10x + 25) + (y^2 - 4y + 4) = 35 + 25 + 4\n\nStep 3: Factor into standard center-radius form:\n\n(x + 5)^2 + (y - 2)^2 = 64\n\nStep 4: Since r^2 = 64, the radius is r = sqrt(64) = 8.\n\nCommon Mistake: Entering r^2 = 64 instead of taking the square root to find r = 8."
  },
  {
    "id": "pt2-math-m1-q21",
    "section": "math",
    "module": 1,
    "number": 21,
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Exponential functions and models",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "A sample of a medical isotope has an initial mass of 640 grams and decays by half every 6 hours. The remaining mass M(t), in grams, after t hours is given by M(t) = 640(c)^(t/24). What is the value of the constant c? (Express your answer as a decimal or fraction.)",
    "correctAnswer": "0.0625",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Write the standard half-life decay model:\n\nM(t) = 640 * (0.5)^(t/6)\n\nStep 2: Equate the exponential bases:\n\n(0.5)^(t/6) = c^(t/24)\n\nStep 3: Rewrite t/6 with a denominator of 24: t/6 = 4t/24.\n\nThus, (0.5)^(4t/24) = ((0.5)^4)^(t/24) = (1/16)^(t/24) = (0.0625)^(t/24).\n\nStep 4: Therefore, c = 1/16 = 0.0625.\n\nCommon Mistake: Dividing 0.5 by 4 to get 0.125 instead of raising 0.5 to the 4th power."
  },
  {
    "id": "pt2-math-m1-q22",
    "section": "math",
    "module": 1,
    "number": 22,
    "domain": "Advanced Math",
    "skill": "Systems of nonlinear equations",
    "difficulty": "Hard",
    "type": "student_produced_response",
    "prompt": "In the xy-plane, the line y = -3x + k intersects the parabola y = x^2 - 7x + 14 at exactly one point. What is the value of k?",
    "correctAnswer": "10",
    "explanation": "Step-by-Step Solution:\n\nStep 1: Set the two expressions for y equal to each other:\n\nx^2 - 7x + 14 = -3x + k\n\nStep 2: Rearrange into standard quadratic form Ax^2 + Bx + C = 0:\n\nx^2 - 4x + (14 - k) = 0\n\nStep 3: For the system to have exactly one real intersection point, the discriminant Delta = B^2 - 4AC must equal 0:\n\n(-4)^2 - 4(1)(14 - k) = 0\n\n16 - 56 + 4k = 0\n\n-40 + 4k = 0\n\n4k = 40 -> k = 10.\n\nCommon Mistake: Sign errors when combining -7x + 3x = -4x or distributing -4 across (14 - k)."
  }
];
