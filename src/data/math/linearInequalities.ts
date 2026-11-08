// SAT Math Question Bank: Linear inequalities in one or two variables
import { MathQuestion } from './types';

export const LINEAR_INEQUALITIES_QUESTIONS: MathQuestion[] = [
  {
    "id": "m-alg-5-001",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 1,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-2x + 5 >= 1x + 23",
    "options": [
      {
        "letter": "A",
        "text": "x >= -6"
      },
      {
        "letter": "B",
        "text": "x <= -6"
      },
      {
        "letter": "C",
        "text": "x <= 6"
      },
      {
        "letter": "D",
        "text": "x >= 6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x <= -6",
    "explanation": "1) Subtract 1x from both sides: -3x + 5 >= 23.\n2) Subtract 5 from both sides: -3x >= 18.\n3) Divide by -3. Since we are dividing by a negative number, flip the inequality sign: x <= -6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-002",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 2,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-24 < 5x - 13 <= -8",
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
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "4",
    "explanation": "1) Subtract -13 from all parts of the inequality:\n   -11 < 5x <= 5\n2) Divide all parts by 5:\n   -2.20 < x <= 1.00\n3) The integers that fall strictly after -2.20 and up to 1.00 are: -2, -1, 0, 1.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-003",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 3,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -10) is in the solution set of the inequality y <= 4x - 8. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "0"
      },
      {
        "letter": "B",
        "text": "-2"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "0",
    "explanation": "1) Substitute y = -10 into the inequality: -10 <= 4x - 8.\n2) Subtract -8 from both sides: -2 <= 4x.\n3) Divide by 4. This yields: x >= -0.50.\n4) The minimum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-004",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 4,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-7 < 2x - 4 <= 6",
    "options": [
      {
        "letter": "A",
        "text": "-7"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "7",
    "explanation": "1) Subtract -4 from all parts of the inequality:\n   -3 < 2x <= 10\n2) Divide all parts by 2:\n   -1.50 < x <= 5.00\n3) The integers that fall strictly after -1.50 and up to 5.00 are: -1, 0, 1, 2, 3, 4, 5.\n4) There are exactly 7 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-005",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 5,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-8 < 5x - 2 <= 8",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "-4"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "4",
    "explanation": "1) Subtract -2 from all parts of the inequality:\n   -6 < 5x <= 10\n2) Divide all parts by 5:\n   -1.20 < x <= 2.00\n3) The integers that fall strictly after -1.20 and up to 2.00 are: -1, 0, 1, 2.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-006",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 6,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-1 < 4x - 4 <= 32",
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
        "text": "6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "9",
    "explanation": "1) Subtract -4 from all parts of the inequality:\n   3 < 4x <= 36\n2) Divide all parts by 4:\n   0.75 < x <= 9.00\n3) The integers that fall strictly after 0.75 and up to 9.00 are: 1, 2, 3, 4, 5, 6, 7, 8, 9.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-007",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 7,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n4x + 7 > -1x + 17",
    "options": [
      {
        "letter": "A",
        "text": "x < 2"
      },
      {
        "letter": "B",
        "text": "x > -2"
      },
      {
        "letter": "C",
        "text": "x < -2"
      },
      {
        "letter": "D",
        "text": "x > 2"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x > 2",
    "explanation": "1) Subtract -1x from both sides: 5x + 7 > 17.\n2) Subtract 7 from both sides: 5x > 10.\n3) Divide by 5. x > 2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-008",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 8,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-8 < 5x + 8 <= 13",
    "options": [
      {
        "letter": "A",
        "text": "-5"
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
        "text": "2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "5",
    "explanation": "1) Subtract 8 from all parts of the inequality:\n   -16 < 5x <= 5\n2) Divide all parts by 5:\n   -3.20 < x <= 1.00\n3) The integers that fall strictly after -3.20 and up to 1.00 are: -3, -2, -1, 0, 1.\n4) There are exactly 5 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-009",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 9,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 5) is in the solution set of the inequality y <= -4x + 5. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "0"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "0",
    "explanation": "1) Substitute y = 5 into the inequality: 5 <= -4x + 5.\n2) Subtract 5 from both sides: 0 <= -4x.\n3) Divide by -4. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= -0.00.\n4) The maximum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-010",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 10,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-4 < 4x + 9 <= 29",
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
        "text": "6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "9",
    "explanation": "1) Subtract 9 from all parts of the inequality:\n   -13 < 4x <= 20\n2) Divide all parts by 4:\n   -3.25 < x <= 5.00\n3) The integers that fall strictly after -3.25 and up to 5.00 are: -3, -2, -1, 0, 1, 2, 3, 4, 5.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-011",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 11,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n2 < 3x + 9 <= 15",
    "options": [
      {
        "letter": "A",
        "text": "-5"
      },
      {
        "letter": "B",
        "text": "7"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "5",
    "explanation": "1) Subtract 9 from all parts of the inequality:\n   -7 < 3x <= 6\n2) Divide all parts by 3:\n   -2.33 < x <= 2.00\n3) The integers that fall strictly after -2.33 and up to 2.00 are: -2, -1, 0, 1, 2.\n4) There are exactly 5 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-012",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 12,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n1 < 3x + 2 <= 20",
    "options": [
      {
        "letter": "A",
        "text": "-7"
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
        "text": "4"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "7",
    "explanation": "1) Subtract 2 from all parts of the inequality:\n   -1 < 3x <= 18\n2) Divide all parts by 3:\n   -0.33 < x <= 6.00\n3) The integers that fall strictly after -0.33 and up to 6.00 are: 0, 1, 2, 3, 4, 5, 6.\n4) There are exactly 7 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-013",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 13,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-3x + 10 <= -8x + 55",
    "options": [
      {
        "letter": "A",
        "text": "x >= 9"
      },
      {
        "letter": "B",
        "text": "x <= -9"
      },
      {
        "letter": "C",
        "text": "x >= -9"
      },
      {
        "letter": "D",
        "text": "x <= 9"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x <= 9",
    "explanation": "1) Subtract -8x from both sides: 5x + 10 <= 55.\n2) Subtract 10 from both sides: 5x <= 45.\n3) Divide by 5. x <= 9.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-014",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 14,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-21 < 5x - 10 <= 15",
    "options": [
      {
        "letter": "A",
        "text": "8"
      },
      {
        "letter": "B",
        "text": "-8"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "8",
    "explanation": "1) Subtract -10 from all parts of the inequality:\n   -11 < 5x <= 25\n2) Divide all parts by 5:\n   -2.20 < x <= 5.00\n3) The integers that fall strictly after -2.20 and up to 5.00 are: -2, -1, 0, 1, 2, 3, 4, 5.\n4) There are exactly 8 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-015",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 15,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 14) is in the solution set of the inequality y <= -5x - 3. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "-6"
      },
      {
        "letter": "C",
        "text": "-1"
      },
      {
        "letter": "D",
        "text": "-4"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-4",
    "explanation": "1) Substitute y = 14 into the inequality: 14 <= -5x - 3.\n2) Subtract -3 from both sides: 17 <= -5x.\n3) Divide by -5. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= -3.40.\n4) The maximum integer satisfying this condition is -4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-016",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 16,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-32 < 5x - 6 <= 9",
    "options": [
      {
        "letter": "A",
        "text": "-9"
      },
      {
        "letter": "B",
        "text": "11"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "9",
    "explanation": "1) Subtract -6 from all parts of the inequality:\n   -26 < 5x <= 15\n2) Divide all parts by 5:\n   -5.20 < x <= 3.00\n3) The integers that fall strictly after -5.20 and up to 3.00 are: -5, -4, -3, -2, -1, 0, 1, 2, 3.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-017",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 17,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-9 < 2x - 10 <= 6",
    "options": [
      {
        "letter": "A",
        "text": "-8"
      },
      {
        "letter": "B",
        "text": "10"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8",
    "explanation": "1) Subtract -10 from all parts of the inequality:\n   1 < 2x <= 16\n2) Divide all parts by 2:\n   0.50 < x <= 8.00\n3) The integers that fall strictly after 0.50 and up to 8.00 are: 1, 2, 3, 4, 5, 6, 7, 8.\n4) There are exactly 8 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-018",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 18,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-39 < 5x - 13 <= 2",
    "options": [
      {
        "letter": "A",
        "text": "-9"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "11"
      },
      {
        "letter": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "9",
    "explanation": "1) Subtract -13 from all parts of the inequality:\n   -26 < 5x <= 15\n2) Divide all parts by 5:\n   -5.20 < x <= 3.00\n3) The integers that fall strictly after -5.20 and up to 3.00 are: -5, -4, -3, -2, -1, 0, 1, 2, 3.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-019",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 19,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-5x - 3 < -2x + 9",
    "options": [
      {
        "letter": "A",
        "text": "x < -4"
      },
      {
        "letter": "B",
        "text": "x > 4"
      },
      {
        "letter": "C",
        "text": "x > -4"
      },
      {
        "letter": "D",
        "text": "x < 4"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x > -4",
    "explanation": "1) Subtract -2x from both sides: -3x - 3 < 9.\n2) Subtract -3 from both sides: -3x < 12.\n3) Divide by -3. Since we are dividing by a negative number, flip the inequality sign: x > -4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-020",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 20,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-11 < 5x - 5 <= 15",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "6"
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
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "1) Subtract -5 from all parts of the inequality:\n   -6 < 5x <= 20\n2) Divide all parts by 5:\n   -1.20 < x <= 4.00\n3) The integers that fall strictly after -1.20 and up to 4.00 are: -1, 0, 1, 2, 3, 4.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-021",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 21,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -2) is in the solution set of the inequality y <= 2x + 8. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "-7"
      },
      {
        "letter": "C",
        "text": "-2"
      },
      {
        "letter": "D",
        "text": "-5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-5",
    "explanation": "1) Substitute y = -2 into the inequality: -2 <= 2x + 8.\n2) Subtract 8 from both sides: -10 <= 2x.\n3) Divide by 2. This yields: x >= -5.00.\n4) The minimum integer satisfying this condition is -5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-022",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 22,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-21 < 5x + 0 <= 5",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "6",
    "explanation": "1) Subtract 0 from all parts of the inequality:\n   -21 < 5x <= 5\n2) Divide all parts by 5:\n   -4.20 < x <= 1.00\n3) The integers that fall strictly after -4.20 and up to 1.00 are: -4, -3, -2, -1, 0, 1.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-023",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 23,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-5 < 3x + 8 <= 5",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "-4"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "4",
    "explanation": "1) Subtract 8 from all parts of the inequality:\n   -13 < 3x <= -3\n2) Divide all parts by 3:\n   -4.33 < x <= -1.00\n3) The integers that fall strictly after -4.33 and up to -1.00 are: -4, -3, -2, -1.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-024",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 24,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-17 < 3x - 10 <= -4",
    "options": [
      {
        "letter": "A",
        "text": "-5"
      },
      {
        "letter": "B",
        "text": "7"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "5",
    "explanation": "1) Subtract -10 from all parts of the inequality:\n   -7 < 3x <= 6\n2) Divide all parts by 3:\n   -2.33 < x <= 2.00\n3) The integers that fall strictly after -2.33 and up to 2.00 are: -2, -1, 0, 1, 2.\n4) There are exactly 5 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-025",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 25,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n0x + 2 <= -4x + 34",
    "options": [
      {
        "letter": "A",
        "text": "x <= 8"
      },
      {
        "letter": "B",
        "text": "x >= 8"
      },
      {
        "letter": "C",
        "text": "x <= -8"
      },
      {
        "letter": "D",
        "text": "x >= -8"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x <= 8",
    "explanation": "1) Subtract -4x from both sides: 4x + 2 <= 34.\n2) Subtract 2 from both sides: 4x <= 32.\n3) Divide by 4. x <= 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-026",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 26,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-15 < 5x - 9 <= 6",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "-5"
      },
      {
        "letter": "C",
        "text": "7"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "5",
    "explanation": "1) Subtract -9 from all parts of the inequality:\n   -6 < 5x <= 15\n2) Divide all parts by 5:\n   -1.20 < x <= 3.00\n3) The integers that fall strictly after -1.20 and up to 3.00 are: -1, 0, 1, 2, 3.\n4) There are exactly 5 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-027",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 27,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 9) is in the solution set of the inequality y < -5x - 2. What is the maximum possible integer value of x?",
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
        "text": "-5"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-3",
    "explanation": "1) Substitute y = 9 into the inequality: 9 < -5x - 2.\n2) Subtract -2 from both sides: 11 < -5x.\n3) Divide by -5. Remember to flip the inequality sign when dividing by a negative number. This yields: x < -2.20.\n4) The maximum integer satisfying this condition is -3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-028",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 28,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-10 < 4x - 13 <= 23",
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
        "text": "6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "9",
    "explanation": "1) Subtract -13 from all parts of the inequality:\n   3 < 4x <= 36\n2) Divide all parts by 4:\n   0.75 < x <= 9.00\n3) The integers that fall strictly after 0.75 and up to 9.00 are: 1, 2, 3, 4, 5, 6, 7, 8, 9.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-029",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 29,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-1 < 3x + 15 <= 9",
    "options": [
      {
        "letter": "A",
        "text": "-4"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "4",
    "explanation": "1) Subtract 15 from all parts of the inequality:\n   -16 < 3x <= -6\n2) Divide all parts by 3:\n   -5.33 < x <= -2.00\n3) The integers that fall strictly after -5.33 and up to -2.00 are: -5, -4, -3, -2.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-030",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 30,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-5 < 4x + 0 <= 16",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "6"
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
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "1) Subtract 0 from all parts of the inequality:\n   -5 < 4x <= 16\n2) Divide all parts by 4:\n   -1.25 < x <= 4.00\n3) The integers that fall strictly after -1.25 and up to 4.00 are: -1, 0, 1, 2, 3, 4.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-031",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 31,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-2x + 7 > -7x + 52",
    "options": [
      {
        "letter": "A",
        "text": "x < 9"
      },
      {
        "letter": "B",
        "text": "x > -9"
      },
      {
        "letter": "C",
        "text": "x > 9"
      },
      {
        "letter": "D",
        "text": "x < -9"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x > 9",
    "explanation": "1) Subtract -7x from both sides: 5x + 7 > 52.\n2) Subtract 7 from both sides: 5x > 45.\n3) Divide by 5. x > 9.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-032",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 32,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n8 < 4x + 5 <= 29",
    "options": [
      {
        "letter": "A",
        "text": "6"
      },
      {
        "letter": "B",
        "text": "-6"
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
    "correctAnswer": "A",
    "correctValue": "6",
    "explanation": "1) Subtract 5 from all parts of the inequality:\n   3 < 4x <= 24\n2) Divide all parts by 4:\n   0.75 < x <= 6.00\n3) The integers that fall strictly after 0.75 and up to 6.00 are: 1, 2, 3, 4, 5, 6.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-033",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 33,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 13) is in the solution set of the inequality y <= 4x + 7. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "-1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "2",
    "explanation": "1) Substitute y = 13 into the inequality: 13 <= 4x + 7.\n2) Subtract 7 from both sides: 6 <= 4x.\n3) Divide by 4. This yields: x >= 1.50.\n4) The minimum integer satisfying this condition is 2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-034",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 34,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-16 < 5x - 5 <= 15",
    "options": [
      {
        "letter": "A",
        "text": "-7"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "7",
    "explanation": "1) Subtract -5 from all parts of the inequality:\n   -11 < 5x <= 20\n2) Divide all parts by 5:\n   -2.20 < x <= 4.00\n3) The integers that fall strictly after -2.20 and up to 4.00 are: -2, -1, 0, 1, 2, 3, 4.\n4) There are exactly 7 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-035",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 35,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n7 < 2x + 12 <= 18",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "6"
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
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "1) Subtract 12 from all parts of the inequality:\n   -5 < 2x <= 6\n2) Divide all parts by 2:\n   -2.50 < x <= 3.00\n3) The integers that fall strictly after -2.50 and up to 3.00 are: -2, -1, 0, 1, 2, 3.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-036",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 36,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-25 < 5x + 1 <= -9",
    "options": [
      {
        "letter": "A",
        "text": "-4"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "4",
    "explanation": "1) Subtract 1 from all parts of the inequality:\n   -26 < 5x <= -10\n2) Divide all parts by 5:\n   -5.20 < x <= -2.00\n3) The integers that fall strictly after -5.20 and up to -2.00 are: -5, -4, -3, -2.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-037",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 37,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-2x + 9 <= 1x + 15",
    "options": [
      {
        "letter": "A",
        "text": "x <= -2"
      },
      {
        "letter": "B",
        "text": "x >= 2"
      },
      {
        "letter": "C",
        "text": "x >= -2"
      },
      {
        "letter": "D",
        "text": "x <= 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x >= -2",
    "explanation": "1) Subtract 1x from both sides: -3x + 9 <= 15.\n2) Subtract 9 from both sides: -3x <= 6.\n3) Divide by -3. Since we are dividing by a negative number, flip the inequality sign: x >= -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-038",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 38,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n18 < 4x + 15 <= 43",
    "options": [
      {
        "letter": "A",
        "text": "-7"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "7",
    "explanation": "1) Subtract 15 from all parts of the inequality:\n   3 < 4x <= 28\n2) Divide all parts by 4:\n   0.75 < x <= 7.00\n3) The integers that fall strictly after 0.75 and up to 7.00 are: 1, 2, 3, 4, 5, 6, 7.\n4) There are exactly 7 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-039",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 39,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 8) is in the solution set of the inequality y <= -4x + 10. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "0"
      },
      {
        "letter": "B",
        "text": "-2"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "0",
    "explanation": "1) Substitute y = 8 into the inequality: 8 <= -4x + 10.\n2) Subtract 10 from both sides: -2 <= -4x.\n3) Divide by -4. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= 0.50.\n4) The maximum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-040",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 40,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n0 < 5x - 9 <= 16",
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
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "4",
    "explanation": "1) Subtract -9 from all parts of the inequality:\n   9 < 5x <= 25\n2) Divide all parts by 5:\n   1.80 < x <= 5.00\n3) The integers that fall strictly after 1.80 and up to 5.00 are: 2, 3, 4, 5.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-041",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 41,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-16 < 4x + 5 <= 17",
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
        "text": "6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "9",
    "explanation": "1) Subtract 5 from all parts of the inequality:\n   -21 < 4x <= 12\n2) Divide all parts by 4:\n   -5.25 < x <= 3.00\n3) The integers that fall strictly after -5.25 and up to 3.00 are: -5, -4, -3, -2, -1, 0, 1, 2, 3.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-042",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 42,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n8 < 2x + 15 <= 25",
    "options": [
      {
        "letter": "A",
        "text": "-9"
      },
      {
        "letter": "B",
        "text": "11"
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
    "correctAnswer": "C",
    "correctValue": "9",
    "explanation": "1) Subtract 15 from all parts of the inequality:\n   -7 < 2x <= 10\n2) Divide all parts by 2:\n   -3.50 < x <= 5.00\n3) The integers that fall strictly after -3.50 and up to 5.00 are: -3, -2, -1, 0, 1, 2, 3, 4, 5.\n4) There are exactly 9 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-043",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 43,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-1x + 0 <= -6x - 50",
    "options": [
      {
        "letter": "A",
        "text": "x <= -10"
      },
      {
        "letter": "B",
        "text": "x >= -10"
      },
      {
        "letter": "C",
        "text": "x <= 10"
      },
      {
        "letter": "D",
        "text": "x >= 10"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x <= -10",
    "explanation": "1) Subtract -6x from both sides: 5x + 0 <= -50.\n2) Subtract 0 from both sides: 5x <= -50.\n3) Divide by 5. x <= -10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-044",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 44,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n4 < 5x + 0 <= 20",
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
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "4",
    "explanation": "1) Subtract 0 from all parts of the inequality:\n   4 < 5x <= 20\n2) Divide all parts by 5:\n   0.80 < x <= 4.00\n3) The integers that fall strictly after 0.80 and up to 4.00 are: 1, 2, 3, 4.\n4) There are exactly 4 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-045",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 45,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -15) is in the solution set of the inequality y < -4x - 9. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-1"
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
        "text": "-2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1",
    "explanation": "1) Substitute y = -15 into the inequality: -15 < -4x - 9.\n2) Subtract -9 from both sides: -6 < -4x.\n3) Divide by -4. Remember to flip the inequality sign when dividing by a negative number. This yields: x < 1.50.\n4) The maximum integer satisfying this condition is 1.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-046",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 46,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n16 < 4x + 9 <= 45",
    "options": [
      {
        "letter": "A",
        "text": "-8"
      },
      {
        "letter": "B",
        "text": "10"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8",
    "explanation": "1) Subtract 9 from all parts of the inequality:\n   7 < 4x <= 36\n2) Divide all parts by 4:\n   1.75 < x <= 9.00\n3) The integers that fall strictly after 1.75 and up to 9.00 are: 2, 3, 4, 5, 6, 7, 8, 9.\n4) There are exactly 8 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-047",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 47,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n12 < 4x + 9 <= 41",
    "options": [
      {
        "letter": "A",
        "text": "-8"
      },
      {
        "letter": "B",
        "text": "10"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8",
    "explanation": "1) Subtract 9 from all parts of the inequality:\n   3 < 4x <= 32\n2) Divide all parts by 4:\n   0.75 < x <= 8.00\n3) The integers that fall strictly after 0.75 and up to 8.00 are: 1, 2, 3, 4, 5, 6, 7, 8.\n4) There are exactly 8 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-048",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 48,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n1 < 2x + 4 <= 14",
    "options": [
      {
        "letter": "A",
        "text": "-7"
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
        "text": "4"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "7",
    "explanation": "1) Subtract 4 from all parts of the inequality:\n   -3 < 2x <= 10\n2) Divide all parts by 2:\n   -1.50 < x <= 5.00\n3) The integers that fall strictly after -1.50 and up to 5.00 are: -1, 0, 1, 2, 3, 4, 5.\n4) There are exactly 7 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-049",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 49,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-3x - 7 > -1x + 7",
    "options": [
      {
        "letter": "A",
        "text": "x < -7"
      },
      {
        "letter": "B",
        "text": "x > -7"
      },
      {
        "letter": "C",
        "text": "x < 7"
      },
      {
        "letter": "D",
        "text": "x > 7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x < -7",
    "explanation": "1) Subtract -1x from both sides: -2x - 7 > 7.\n2) Subtract -7 from both sides: -2x > 14.\n3) Divide by -2. Since we are dividing by a negative number, flip the inequality sign: x < -7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-050",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 50,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n3 < 3x + 7 <= 19",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "6",
    "explanation": "1) Subtract 7 from all parts of the inequality:\n   -4 < 3x <= 12\n2) Divide all parts by 3:\n   -1.33 < x <= 4.00\n3) The integers that fall strictly after -1.33 and up to 4.00 are: -1, 0, 1, 2, 3, 4.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-051",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 51,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 2) is in the solution set of the inequality y <= -5x - 5. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "-4"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-2",
    "explanation": "1) Substitute y = 2 into the inequality: 2 <= -5x - 5.\n2) Subtract -5 from both sides: 7 <= -5x.\n3) Divide by -5. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= -1.40.\n4) The maximum integer satisfying this condition is -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-052",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 52,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n8 < 2x + 11 <= 17",
    "options": [
      {
        "letter": "A",
        "text": "-5"
      },
      {
        "letter": "B",
        "text": "7"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "5",
    "explanation": "1) Subtract 11 from all parts of the inequality:\n   -3 < 2x <= 6\n2) Divide all parts by 2:\n   -1.50 < x <= 3.00\n3) The integers that fall strictly after -1.50 and up to 3.00 are: -1, 0, 1, 2, 3.\n4) There are exactly 5 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-053",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 53,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Compound Inequality",
    "prompt": "How many integer values of x satisfy the following compound inequality?\n-2 < 3x - 7 <= 14",
    "options": [
      {
        "letter": "A",
        "text": "6"
      },
      {
        "letter": "B",
        "text": "-6"
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
    "correctAnswer": "A",
    "correctValue": "6",
    "explanation": "1) Subtract -7 from all parts of the inequality:\n   5 < 3x <= 21\n2) Divide all parts by 3:\n   1.67 < x <= 7.00\n3) The integers that fall strictly after 1.67 and up to 7.00 are: 2, 3, 4, 5, 6, 7.\n4) There are exactly 6 such integers.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-054",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 54,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 15\ny >= 3x - 2\nIf the point (2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "6"
      },
      {
        "letter": "B",
        "text": "-6"
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
    "correctAnswer": "A",
    "correctValue": "6",
    "explanation": "1) Substitute x = 2 into the first inequality: y <= -3(2) + 15  =>  y <= 9.\n2) Substitute x = 2 into the second inequality: y >= 3(2) - 2  =>  y >= 4.\n3) Combine the bounds: 4 <= y <= 9.\n4) Since y must be an integer, we count the integers from 4 to 9 inclusive. There are 9 - 4 + 1 = 6 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-055",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 55,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-1x - 6 <= 4x + 29",
    "options": [
      {
        "letter": "A",
        "text": "x <= -7"
      },
      {
        "letter": "B",
        "text": "x >= -7"
      },
      {
        "letter": "C",
        "text": "x >= 7"
      },
      {
        "letter": "D",
        "text": "x <= 7"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x >= -7",
    "explanation": "1) Subtract 4x from both sides: -5x - 6 <= 29.\n2) Subtract -6 from both sides: -5x <= 35.\n3) Divide by -5. Since we are dividing by a negative number, flip the inequality sign: x >= -7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-056",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 56,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 13\ny >= 4x - 10\nIf the point (0, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-24"
      },
      {
        "letter": "B",
        "text": "26"
      },
      {
        "letter": "C",
        "text": "24"
      },
      {
        "letter": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "24",
    "explanation": "1) Substitute x = 0 into the first inequality: y <= -1(0) + 13  =>  y <= 13.\n2) Substitute x = 0 into the second inequality: y >= 4(0) - 10  =>  y >= -10.\n3) Combine the bounds: -10 <= y <= 13.\n4) Since y must be an integer, we count the integers from -10 to 13 inclusive. There are 13 - -10 + 1 = 24 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-057",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 57,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -3) is in the solution set of the inequality y <= 3x + 9. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "-4"
      },
      {
        "letter": "C",
        "text": "-6"
      },
      {
        "letter": "D",
        "text": "-1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-4",
    "explanation": "1) Substitute y = -3 into the inequality: -3 <= 3x + 9.\n2) Subtract 9 from both sides: -12 <= 3x.\n3) Divide by 3. This yields: x >= -4.00.\n4) The minimum integer satisfying this condition is -4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-058",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 58,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -4x + 23\ny >= 2x - 8\nIf the point (4, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-8"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "8",
    "explanation": "1) Substitute x = 4 into the first inequality: y <= -4(4) + 23  =>  y <= 7.\n2) Substitute x = 4 into the second inequality: y >= 2(4) - 8  =>  y >= 0.\n3) Combine the bounds: 0 <= y <= 7.\n4) Since y must be an integer, we count the integers from 0 to 7 inclusive. There are 7 - 0 + 1 = 8 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-059",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 59,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 21\ny >= 4x - 8\nIf the point (-1, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "37"
      },
      {
        "letter": "B",
        "text": "-37"
      },
      {
        "letter": "C",
        "text": "39"
      },
      {
        "letter": "D",
        "text": "34"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "37",
    "explanation": "1) Substitute x = -1 into the first inequality: y <= -3(-1) + 21  =>  y <= 24.\n2) Substitute x = -1 into the second inequality: y >= 4(-1) - 8  =>  y >= -12.\n3) Combine the bounds: -12 <= y <= 24.\n4) Since y must be an integer, we count the integers from -12 to 24 inclusive. There are 24 - -12 + 1 = 37 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-060",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 60,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 23\ny >= 1x - 2\nIf the point (0, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-26"
      },
      {
        "letter": "B",
        "text": "28"
      },
      {
        "letter": "C",
        "text": "23"
      },
      {
        "letter": "D",
        "text": "26"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "26",
    "explanation": "1) Substitute x = 0 into the first inequality: y <= -1(0) + 23  =>  y <= 23.\n2) Substitute x = 0 into the second inequality: y >= 1(0) - 2  =>  y >= -2.\n3) Combine the bounds: -2 <= y <= 23.\n4) Since y must be an integer, we count the integers from -2 to 23 inclusive. There are 23 - -2 + 1 = 26 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-061",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 61,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n1x + 8 < -2x + 14",
    "options": [
      {
        "letter": "A",
        "text": "x > 2"
      },
      {
        "letter": "B",
        "text": "x < -2"
      },
      {
        "letter": "C",
        "text": "x > -2"
      },
      {
        "letter": "D",
        "text": "x < 2"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x < 2",
    "explanation": "1) Subtract -2x from both sides: 3x + 8 < 14.\n2) Subtract 8 from both sides: 3x < 6.\n3) Divide by 3. x < 2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-062",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 62,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -2x + 23\ny >= 2x - 4\nIf the point (-2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-36"
      },
      {
        "letter": "B",
        "text": "38"
      },
      {
        "letter": "C",
        "text": "33"
      },
      {
        "letter": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "36",
    "explanation": "1) Substitute x = -2 into the first inequality: y <= -2(-2) + 23  =>  y <= 27.\n2) Substitute x = -2 into the second inequality: y >= 2(-2) - 4  =>  y >= -8.\n3) Combine the bounds: -8 <= y <= 27.\n4) Since y must be an integer, we count the integers from -8 to 27 inclusive. There are 27 - -8 + 1 = 36 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-063",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 63,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 6) is in the solution set of the inequality y < -5x + 8. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "0"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "0",
    "explanation": "1) Substitute y = 6 into the inequality: 6 < -5x + 8.\n2) Subtract 8 from both sides: -2 < -5x.\n3) Divide by -5. Remember to flip the inequality sign when dividing by a negative number. This yields: x < 0.40.\n4) The maximum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-064",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 64,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -4x + 23\ny >= 3x + 0\nIf the point (-1, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-31"
      },
      {
        "letter": "B",
        "text": "33"
      },
      {
        "letter": "C",
        "text": "31"
      },
      {
        "letter": "D",
        "text": "28"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "31",
    "explanation": "1) Substitute x = -1 into the first inequality: y <= -4(-1) + 23  =>  y <= 27.\n2) Substitute x = -1 into the second inequality: y >= 3(-1) + 0  =>  y >= -3.\n3) Combine the bounds: -3 <= y <= 27.\n4) Since y must be an integer, we count the integers from -3 to 27 inclusive. There are 27 - -3 + 1 = 31 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-065",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 65,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 14\ny >= 1x - 9\nIf the point (2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-20"
      },
      {
        "letter": "B",
        "text": "22"
      },
      {
        "letter": "C",
        "text": "20"
      },
      {
        "letter": "D",
        "text": "17"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "20",
    "explanation": "1) Substitute x = 2 into the first inequality: y <= -1(2) + 14  =>  y <= 12.\n2) Substitute x = 2 into the second inequality: y >= 1(2) - 9  =>  y >= -7.\n3) Combine the bounds: -7 <= y <= 12.\n4) Since y must be an integer, we count the integers from -7 to 12 inclusive. There are 12 - -7 + 1 = 20 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-066",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 66,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 22\ny >= 3x - 9\nIf the point (0, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "32"
      },
      {
        "letter": "B",
        "text": "-32"
      },
      {
        "letter": "C",
        "text": "34"
      },
      {
        "letter": "D",
        "text": "29"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "32",
    "explanation": "1) Substitute x = 0 into the first inequality: y <= -1(0) + 22  =>  y <= 22.\n2) Substitute x = 0 into the second inequality: y >= 3(0) - 9  =>  y >= -9.\n3) Combine the bounds: -9 <= y <= 22.\n4) Since y must be an integer, we count the integers from -9 to 22 inclusive. There are 22 - -9 + 1 = 32 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-067",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 67,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-5x - 5 <= 1x + 43",
    "options": [
      {
        "letter": "A",
        "text": "x <= -8"
      },
      {
        "letter": "B",
        "text": "x >= 8"
      },
      {
        "letter": "C",
        "text": "x >= -8"
      },
      {
        "letter": "D",
        "text": "x <= 8"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x >= -8",
    "explanation": "1) Subtract 1x from both sides: -6x - 5 <= 43.\n2) Subtract -5 from both sides: -6x <= 48.\n3) Divide by -6. Since we are dividing by a negative number, flip the inequality sign: x >= -8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-068",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 68,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -2x + 24\ny >= 4x - 12\nIf the point (-4, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-61"
      },
      {
        "letter": "B",
        "text": "61"
      },
      {
        "letter": "C",
        "text": "63"
      },
      {
        "letter": "D",
        "text": "58"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "61",
    "explanation": "1) Substitute x = -4 into the first inequality: y <= -2(-4) + 24  =>  y <= 32.\n2) Substitute x = -4 into the second inequality: y >= 4(-4) - 12  =>  y >= -28.\n3) Combine the bounds: -28 <= y <= 32.\n4) Since y must be an integer, we count the integers from -28 to 32 inclusive. There are 32 - -28 + 1 = 61 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-069",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 69,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -13) is in the solution set of the inequality y <= 2x + 2. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "7"
      },
      {
        "letter": "B",
        "text": "-7"
      },
      {
        "letter": "C",
        "text": "-9"
      },
      {
        "letter": "D",
        "text": "-4"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-7",
    "explanation": "1) Substitute y = -13 into the inequality: -13 <= 2x + 2.\n2) Subtract 2 from both sides: -15 <= 2x.\n3) Divide by 2. This yields: x >= -7.50.\n4) The minimum integer satisfying this condition is -7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-070",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 70,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 23\ny >= 3x - 9\nIf the point (4, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-9"
      },
      {
        "letter": "B",
        "text": "11"
      },
      {
        "letter": "C",
        "text": "6"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "9",
    "explanation": "1) Substitute x = 4 into the first inequality: y <= -3(4) + 23  =>  y <= 11.\n2) Substitute x = 4 into the second inequality: y >= 3(4) - 9  =>  y >= 3.\n3) Combine the bounds: 3 <= y <= 11.\n4) Since y must be an integer, we count the integers from 3 to 11 inclusive. There are 11 - 3 + 1 = 9 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-071",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 71,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 17\ny >= 1x - 8\nIf the point (5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "16"
      },
      {
        "letter": "B",
        "text": "-16"
      },
      {
        "letter": "C",
        "text": "18"
      },
      {
        "letter": "D",
        "text": "13"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "16",
    "explanation": "1) Substitute x = 5 into the first inequality: y <= -1(5) + 17  =>  y <= 12.\n2) Substitute x = 5 into the second inequality: y >= 1(5) - 8  =>  y >= -3.\n3) Combine the bounds: -3 <= y <= 12.\n4) Since y must be an integer, we count the integers from -3 to 12 inclusive. There are 12 - -3 + 1 = 16 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-072",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 72,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 16\ny >= 2x + 0\nIf the point (-2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-23"
      },
      {
        "letter": "B",
        "text": "25"
      },
      {
        "letter": "C",
        "text": "23"
      },
      {
        "letter": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "23",
    "explanation": "1) Substitute x = -2 into the first inequality: y <= -1(-2) + 16  =>  y <= 18.\n2) Substitute x = -2 into the second inequality: y >= 2(-2) + 0  =>  y >= -4.\n3) Combine the bounds: -4 <= y <= 18.\n4) Since y must be an integer, we count the integers from -4 to 18 inclusive. There are 18 - -4 + 1 = 23 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-073",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 73,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n3x - 6 <= 0x - 9",
    "options": [
      {
        "letter": "A",
        "text": "x >= -1"
      },
      {
        "letter": "B",
        "text": "x <= 1"
      },
      {
        "letter": "C",
        "text": "x <= -1"
      },
      {
        "letter": "D",
        "text": "x >= 1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x <= -1",
    "explanation": "1) Subtract 0x from both sides: 3x - 6 <= -9.\n2) Subtract -6 from both sides: 3x <= -3.\n3) Divide by 3. x <= -1.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-074",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 74,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 22\ny >= 1x - 1\nIf the point (3, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-12"
      },
      {
        "letter": "B",
        "text": "12"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "12",
    "explanation": "1) Substitute x = 3 into the first inequality: y <= -3(3) + 22  =>  y <= 13.\n2) Substitute x = 3 into the second inequality: y >= 1(3) - 1  =>  y >= 2.\n3) Combine the bounds: 2 <= y <= 13.\n4) Since y must be an integer, we count the integers from 2 to 13 inclusive. There are 13 - 2 + 1 = 12 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-075",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 75,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -5) is in the solution set of the inequality y < -4x - 4. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "0",
    "explanation": "1) Substitute y = -5 into the inequality: -5 < -4x - 4.\n2) Subtract -4 from both sides: -1 < -4x.\n3) Divide by -4. Remember to flip the inequality sign when dividing by a negative number. This yields: x < 0.25.\n4) The maximum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-076",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 76,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 12\ny >= 1x - 14\nIf the point (0, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-27"
      },
      {
        "letter": "B",
        "text": "27"
      },
      {
        "letter": "C",
        "text": "29"
      },
      {
        "letter": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "27",
    "explanation": "1) Substitute x = 0 into the first inequality: y <= -1(0) + 12  =>  y <= 12.\n2) Substitute x = 0 into the second inequality: y >= 1(0) - 14  =>  y >= -14.\n3) Combine the bounds: -14 <= y <= 12.\n4) Since y must be an integer, we count the integers from -14 to 12 inclusive. There are 12 - -14 + 1 = 27 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-077",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 77,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 21\ny >= 1x - 7\nIf the point (5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-19"
      },
      {
        "letter": "B",
        "text": "19"
      },
      {
        "letter": "C",
        "text": "21"
      },
      {
        "letter": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "19",
    "explanation": "1) Substitute x = 5 into the first inequality: y <= -1(5) + 21  =>  y <= 16.\n2) Substitute x = 5 into the second inequality: y >= 1(5) - 7  =>  y >= -2.\n3) Combine the bounds: -2 <= y <= 16.\n4) Since y must be an integer, we count the integers from -2 to 16 inclusive. There are 16 - -2 + 1 = 19 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-078",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 78,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -4x + 24\ny >= 2x - 4\nIf the point (-1, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "35"
      },
      {
        "letter": "B",
        "text": "-35"
      },
      {
        "letter": "C",
        "text": "37"
      },
      {
        "letter": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "35",
    "explanation": "1) Substitute x = -1 into the first inequality: y <= -4(-1) + 24  =>  y <= 28.\n2) Substitute x = -1 into the second inequality: y >= 2(-1) - 4  =>  y >= -6.\n3) Combine the bounds: -6 <= y <= 28.\n4) Since y must be an integer, we count the integers from -6 to 28 inclusive. There are 28 - -6 + 1 = 35 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-079",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 79,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-2x + 10 < -8x - 2",
    "options": [
      {
        "letter": "A",
        "text": "x < -2"
      },
      {
        "letter": "B",
        "text": "x > -2"
      },
      {
        "letter": "C",
        "text": "x < 2"
      },
      {
        "letter": "D",
        "text": "x > 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x < -2",
    "explanation": "1) Subtract -8x from both sides: 6x + 10 < -2.\n2) Subtract 10 from both sides: 6x < -12.\n3) Divide by 6. x < -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-080",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 80,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 12\ny >= 2x - 5\nIf the point (2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-8"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "8",
    "explanation": "1) Substitute x = 2 into the first inequality: y <= -3(2) + 12  =>  y <= 6.\n2) Substitute x = 2 into the second inequality: y >= 2(2) - 5  =>  y >= -1.\n3) Combine the bounds: -1 <= y <= 6.\n4) Since y must be an integer, we count the integers from -1 to 6 inclusive. There are 6 - -1 + 1 = 8 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-081",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 81,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -5) is in the solution set of the inequality y < 2x - 2. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "-1"
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
    "correctAnswer": "B",
    "correctValue": "-1",
    "explanation": "1) Substitute y = -5 into the inequality: -5 < 2x - 2.\n2) Subtract -2 from both sides: -3 < 2x.\n3) Divide by 2. This yields: x > -1.50.\n4) The minimum integer satisfying this condition is -1.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-082",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 82,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -2x + 24\ny >= 3x - 3\nIf the point (5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "-3"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "3",
    "explanation": "1) Substitute x = 5 into the first inequality: y <= -2(5) + 24  =>  y <= 14.\n2) Substitute x = 5 into the second inequality: y >= 3(5) - 3  =>  y >= 12.\n3) Combine the bounds: 12 <= y <= 14.\n4) Since y must be an integer, we count the integers from 12 to 14 inclusive. There are 14 - 12 + 1 = 3 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-083",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 83,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -4x + 12\ny >= 1x - 5\nIf the point (-3, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-33"
      },
      {
        "letter": "B",
        "text": "33"
      },
      {
        "letter": "C",
        "text": "35"
      },
      {
        "letter": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "33",
    "explanation": "1) Substitute x = -3 into the first inequality: y <= -4(-3) + 12  =>  y <= 24.\n2) Substitute x = -3 into the second inequality: y >= 1(-3) - 5  =>  y >= -8.\n3) Combine the bounds: -8 <= y <= 24.\n4) Since y must be an integer, we count the integers from -8 to 24 inclusive. There are 24 - -8 + 1 = 33 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-084",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 84,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= 4x - 11\ny >= -2x + 16\nIf the point (5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-4"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "4",
    "explanation": "1) Substitute x = 5 into the first inequality: y <= 4(5) - 11  =>  y <= 9.\n2) Substitute x = 5 into the second inequality: y >= -2(5) + 16  =>  y >= 6.\n3) Combine the bounds: 6 <= y <= 9.\n4) Since y must be an integer, we count the integers from 6 to 9 inclusive. There are 9 - 6 + 1 = 4 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-085",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 85,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n3x - 10 <= 1x - 16",
    "options": [
      {
        "letter": "A",
        "text": "x >= -3"
      },
      {
        "letter": "B",
        "text": "x <= 3"
      },
      {
        "letter": "C",
        "text": "x <= -3"
      },
      {
        "letter": "D",
        "text": "x >= 3"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x <= -3",
    "explanation": "1) Subtract 1x from both sides: 2x - 10 <= -16.\n2) Subtract -10 from both sides: 2x <= -6.\n3) Divide by 2. x <= -3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-086",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 86,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 10\ny >= 2x - 13\nIf the point (-5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "39"
      },
      {
        "letter": "B",
        "text": "-39"
      },
      {
        "letter": "C",
        "text": "41"
      },
      {
        "letter": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "39",
    "explanation": "1) Substitute x = -5 into the first inequality: y <= -1(-5) + 10  =>  y <= 15.\n2) Substitute x = -5 into the second inequality: y >= 2(-5) - 13  =>  y >= -23.\n3) Combine the bounds: -23 <= y <= 15.\n4) Since y must be an integer, we count the integers from -23 to 15 inclusive. There are 15 - -23 + 1 = 39 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-087",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 87,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -6) is in the solution set of the inequality y <= 4x - 5. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "0",
    "explanation": "1) Substitute y = -6 into the inequality: -6 <= 4x - 5.\n2) Subtract -5 from both sides: -1 <= 4x.\n3) Divide by 4. This yields: x >= -0.25.\n4) The minimum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-088",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 88,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 16\ny >= 2x - 10\nIf the point (3, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-18"
      },
      {
        "letter": "B",
        "text": "18"
      },
      {
        "letter": "C",
        "text": "20"
      },
      {
        "letter": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "18",
    "explanation": "1) Substitute x = 3 into the first inequality: y <= -1(3) + 16  =>  y <= 13.\n2) Substitute x = 3 into the second inequality: y >= 2(3) - 10  =>  y >= -4.\n3) Combine the bounds: -4 <= y <= 13.\n4) Since y must be an integer, we count the integers from -4 to 13 inclusive. There are 13 - -4 + 1 = 18 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-089",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 89,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 14\ny >= 4x - 7\nIf the point (-5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "47"
      },
      {
        "letter": "B",
        "text": "-47"
      },
      {
        "letter": "C",
        "text": "49"
      },
      {
        "letter": "D",
        "text": "44"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "47",
    "explanation": "1) Substitute x = -5 into the first inequality: y <= -1(-5) + 14  =>  y <= 19.\n2) Substitute x = -5 into the second inequality: y >= 4(-5) - 7  =>  y >= -27.\n3) Combine the bounds: -27 <= y <= 19.\n4) Since y must be an integer, we count the integers from -27 to 19 inclusive. There are 19 - -27 + 1 = 47 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-090",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 90,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 20\ny >= 3x - 6\nIf the point (1, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "21"
      },
      {
        "letter": "B",
        "text": "-21"
      },
      {
        "letter": "C",
        "text": "23"
      },
      {
        "letter": "D",
        "text": "18"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "21",
    "explanation": "1) Substitute x = 1 into the first inequality: y <= -3(1) + 20  =>  y <= 17.\n2) Substitute x = 1 into the second inequality: y >= 3(1) - 6  =>  y >= -3.\n3) Combine the bounds: -3 <= y <= 17.\n4) Since y must be an integer, we count the integers from -3 to 17 inclusive. There are 17 - -3 + 1 = 21 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-091",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 91,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-5x - 3 <= 0x - 28",
    "options": [
      {
        "letter": "A",
        "text": "x >= 5"
      },
      {
        "letter": "B",
        "text": "x <= 5"
      },
      {
        "letter": "C",
        "text": "x >= -5"
      },
      {
        "letter": "D",
        "text": "x <= -5"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x >= 5",
    "explanation": "1) Subtract 0x from both sides: -5x - 3 <= -28.\n2) Subtract -3 from both sides: -5x <= -25.\n3) Divide by -5. Since we are dividing by a negative number, flip the inequality sign: x >= 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-092",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 92,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -4x + 25\ny >= 4x - 13\nIf the point (1, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-31"
      },
      {
        "letter": "B",
        "text": "33"
      },
      {
        "letter": "C",
        "text": "31"
      },
      {
        "letter": "D",
        "text": "28"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "31",
    "explanation": "1) Substitute x = 1 into the first inequality: y <= -4(1) + 25  =>  y <= 21.\n2) Substitute x = 1 into the second inequality: y >= 4(1) - 13  =>  y >= -9.\n3) Combine the bounds: -9 <= y <= 21.\n4) Since y must be an integer, we count the integers from -9 to 21 inclusive. There are 21 - -9 + 1 = 31 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-093",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 93,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 6) is in the solution set of the inequality y <= 3x - 6. What is the minimum possible integer value of x?",
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
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "4",
    "explanation": "1) Substitute y = 6 into the inequality: 6 <= 3x - 6.\n2) Subtract -6 from both sides: 12 <= 3x.\n3) Divide by 3. This yields: x >= 4.00.\n4) The minimum integer satisfying this condition is 4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-094",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 94,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 11\ny >= 3x - 14\nIf the point (4, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-10"
      },
      {
        "letter": "B",
        "text": "12"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "10",
    "explanation": "1) Substitute x = 4 into the first inequality: y <= -1(4) + 11  =>  y <= 7.\n2) Substitute x = 4 into the second inequality: y >= 3(4) - 14  =>  y >= -2.\n3) Combine the bounds: -2 <= y <= 7.\n4) Since y must be an integer, we count the integers from -2 to 7 inclusive. There are 7 - -2 + 1 = 10 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-095",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 95,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -4x + 25\ny >= 2x - 5\nIf the point (3, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-13"
      },
      {
        "letter": "B",
        "text": "15"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "13"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "13",
    "explanation": "1) Substitute x = 3 into the first inequality: y <= -4(3) + 25  =>  y <= 13.\n2) Substitute x = 3 into the second inequality: y >= 2(3) - 5  =>  y >= 1.\n3) Combine the bounds: 1 <= y <= 13.\n4) Since y must be an integer, we count the integers from 1 to 13 inclusive. There are 13 - 1 + 1 = 13 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-096",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 96,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 25\ny >= 1x - 5\nIf the point (4, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-23"
      },
      {
        "letter": "B",
        "text": "23"
      },
      {
        "letter": "C",
        "text": "25"
      },
      {
        "letter": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "23",
    "explanation": "1) Substitute x = 4 into the first inequality: y <= -1(4) + 25  =>  y <= 21.\n2) Substitute x = 4 into the second inequality: y >= 1(4) - 5  =>  y >= -1.\n3) Combine the bounds: -1 <= y <= 21.\n4) Since y must be an integer, we count the integers from -1 to 21 inclusive. There are 21 - -1 + 1 = 23 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-097",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 97,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n2x - 6 > -2x - 2",
    "options": [
      {
        "letter": "A",
        "text": "x < 1"
      },
      {
        "letter": "B",
        "text": "x > -1"
      },
      {
        "letter": "C",
        "text": "x > 1"
      },
      {
        "letter": "D",
        "text": "x < -1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x > 1",
    "explanation": "1) Subtract -2x from both sides: 4x - 6 > -2.\n2) Subtract -6 from both sides: 4x > 4.\n3) Divide by 4. x > 1.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-098",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 98,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 23\ny >= 3x - 8\nIf the point (4, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-16"
      },
      {
        "letter": "B",
        "text": "18"
      },
      {
        "letter": "C",
        "text": "16"
      },
      {
        "letter": "D",
        "text": "13"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "16",
    "explanation": "1) Substitute x = 4 into the first inequality: y <= -1(4) + 23  =>  y <= 19.\n2) Substitute x = 4 into the second inequality: y >= 3(4) - 8  =>  y >= 4.\n3) Combine the bounds: 4 <= y <= 19.\n4) Since y must be an integer, we count the integers from 4 to 19 inclusive. There are 19 - 4 + 1 = 16 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-099",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 99,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -7) is in the solution set of the inequality y <= 2x + 1. What is the minimum possible integer value of x?",
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
        "text": "-6"
      },
      {
        "letter": "D",
        "text": "-1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-4",
    "explanation": "1) Substitute y = -7 into the inequality: -7 <= 2x + 1.\n2) Subtract 1 from both sides: -8 <= 2x.\n3) Divide by 2. This yields: x >= -4.00.\n4) The minimum integer satisfying this condition is -4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-100",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 100,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -3x + 13\ny >= 2x - 2\nIf the point (2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "6"
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
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "1) Substitute x = 2 into the first inequality: y <= -3(2) + 13  =>  y <= 7.\n2) Substitute x = 2 into the second inequality: y >= 2(2) - 2  =>  y >= 2.\n3) Combine the bounds: 2 <= y <= 7.\n4) Since y must be an integer, we count the integers from 2 to 7 inclusive. There are 7 - 2 + 1 = 6 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-101",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 101,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= 1x - 4\ny >= -3x + 11\nIf the point (5, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "6",
    "explanation": "1) Substitute x = 5 into the first inequality: y <= 1(5) - 4  =>  y <= 1.\n2) Substitute x = 5 into the second inequality: y >= -3(5) + 11  =>  y >= -4.\n3) Combine the bounds: -4 <= y <= 1.\n4) Since y must be an integer, we count the integers from -4 to 1 inclusive. There are 1 - -4 + 1 = 6 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-102",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 102,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -2x + 16\ny >= 1x - 2\nIf the point (-1, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "22"
      },
      {
        "letter": "B",
        "text": "-22"
      },
      {
        "letter": "C",
        "text": "24"
      },
      {
        "letter": "D",
        "text": "19"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "22",
    "explanation": "1) Substitute x = -1 into the first inequality: y <= -2(-1) + 16  =>  y <= 18.\n2) Substitute x = -1 into the second inequality: y >= 1(-1) - 2  =>  y >= -3.\n3) Combine the bounds: -3 <= y <= 18.\n4) Since y must be an integer, we count the integers from -3 to 18 inclusive. There are 18 - -3 + 1 = 22 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-103",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 103,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-1x + 8 <= -5x + 32",
    "options": [
      {
        "letter": "A",
        "text": "x >= 6"
      },
      {
        "letter": "B",
        "text": "x <= 6"
      },
      {
        "letter": "C",
        "text": "x <= -6"
      },
      {
        "letter": "D",
        "text": "x >= -6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x <= 6",
    "explanation": "1) Subtract -5x from both sides: 4x + 8 <= 32.\n2) Subtract 8 from both sides: 4x <= 24.\n3) Divide by 4. x <= 6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-104",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 104,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 17\ny >= 3x + 0\nIf the point (-3, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "-30"
      },
      {
        "letter": "B",
        "text": "32"
      },
      {
        "letter": "C",
        "text": "27"
      },
      {
        "letter": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "30",
    "explanation": "1) Substitute x = -3 into the first inequality: y <= -1(-3) + 17  =>  y <= 20.\n2) Substitute x = -3 into the second inequality: y >= 3(-3) + 0  =>  y >= -9.\n3) Combine the bounds: -9 <= y <= 20.\n4) Since y must be an integer, we count the integers from -9 to 20 inclusive. There are 20 - -9 + 1 = 30 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-105",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 105,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -15) is in the solution set of the inequality y <= 2x - 5. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "-7"
      },
      {
        "letter": "C",
        "text": "-5"
      },
      {
        "letter": "D",
        "text": "-2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-5",
    "explanation": "1) Substitute y = -15 into the inequality: -15 <= 2x - 5.\n2) Subtract -5 from both sides: -10 <= 2x.\n3) Divide by 2. This yields: x >= -5.00.\n4) The minimum integer satisfying this condition is -5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-106",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 106,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Systems of Inequalities",
    "prompt": "A system of inequalities is given by:\ny <= -1x + 13\ny >= 2x - 7\nIf the point (-2, y) is a solution to the system, how many possible integer values can y have?",
    "options": [
      {
        "letter": "A",
        "text": "27"
      },
      {
        "letter": "B",
        "text": "-27"
      },
      {
        "letter": "C",
        "text": "29"
      },
      {
        "letter": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "27",
    "explanation": "1) Substitute x = -2 into the first inequality: y <= -1(-2) + 13  =>  y <= 15.\n2) Substitute x = -2 into the second inequality: y >= 2(-2) - 7  =>  y >= -11.\n3) Combine the bounds: -11 <= y <= 15.\n4) Since y must be an integer, we count the integers from -11 to 15 inclusive. There are 15 - -11 + 1 = 27 possible integer values.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-107",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 107,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 859 pounds. The truck is loaded with Box A types weighing 42 pounds each and Box B types weighing 25 pounds each. If the truck must carry at least 10 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "19 boxes"
      },
      {
        "letter": "B",
        "text": "15 boxes"
      },
      {
        "letter": "C",
        "text": "21 boxes"
      },
      {
        "letter": "D",
        "text": "17 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "17 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 42A + 25B <= 859.\n2) The constraint is A >= 10.\n3) To maximize B, we must minimize A. So, set A = 10.\n4) Substitute A = 10: 42(10) + 25B <= 859  =>  420 + 25B <= 859.\n5) Subtract 420: 25B <= 439.\n6) Divide by 25: B <= 17.56.\n7) Since B must be a whole number, the maximum number of Box B is 17.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-108",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 108,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 887 pounds. The truck is loaded with Box A types weighing 37 pounds each and Box B types weighing 12 pounds each. If the truck must carry at least 17 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "23 boxes"
      },
      {
        "letter": "B",
        "text": "19 boxes"
      },
      {
        "letter": "C",
        "text": "21 boxes"
      },
      {
        "letter": "D",
        "text": "25 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "21 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 37A + 12B <= 887.\n2) The constraint is A >= 17.\n3) To maximize B, we must minimize A. So, set A = 17.\n4) Substitute A = 17: 37(17) + 12B <= 887  =>  629 + 12B <= 887.\n5) Subtract 629: 12B <= 258.\n6) Divide by 12: B <= 21.50.\n7) Since B must be a whole number, the maximum number of Box B is 21.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-109",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 109,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n2x + 7 >= 4x + 21",
    "options": [
      {
        "letter": "A",
        "text": "x <= -7"
      },
      {
        "letter": "B",
        "text": "x >= -7"
      },
      {
        "letter": "C",
        "text": "x <= 7"
      },
      {
        "letter": "D",
        "text": "x >= 7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x <= -7",
    "explanation": "1) Subtract 4x from both sides: -2x + 7 >= 21.\n2) Subtract 7 from both sides: -2x >= 14.\n3) Divide by -2. Since we are dividing by a negative number, flip the inequality sign: x <= -7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-110",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 110,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 858 pounds. The truck is loaded with Box A types weighing 19 pounds each and Box B types weighing 27 pounds each. If the truck must carry at least 22 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "18 boxes"
      },
      {
        "letter": "B",
        "text": "14 boxes"
      },
      {
        "letter": "C",
        "text": "16 boxes"
      },
      {
        "letter": "D",
        "text": "20 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "16 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 19A + 27B <= 858.\n2) The constraint is A >= 22.\n3) To maximize B, we must minimize A. So, set A = 22.\n4) Substitute A = 22: 19(22) + 27B <= 858  =>  418 + 27B <= 858.\n5) Subtract 418: 27B <= 440.\n6) Divide by 27: B <= 16.30.\n7) Since B must be a whole number, the maximum number of Box B is 16.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-111",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 111,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -5) is in the solution set of the inequality y < -2x - 3. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "0",
    "explanation": "1) Substitute y = -5 into the inequality: -5 < -2x - 3.\n2) Subtract -3 from both sides: -2 < -2x.\n3) Divide by -2. Remember to flip the inequality sign when dividing by a negative number. This yields: x < 1.00.\n4) The maximum integer satisfying this condition is 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-112",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 112,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 679 pounds. The truck is loaded with Box A types weighing 29 pounds each and Box B types weighing 13 pounds each. If the truck must carry at least 13 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "25 boxes"
      },
      {
        "letter": "B",
        "text": "23 boxes"
      },
      {
        "letter": "C",
        "text": "21 boxes"
      },
      {
        "letter": "D",
        "text": "27 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "23 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 29A + 13B <= 679.\n2) The constraint is A >= 13.\n3) To maximize B, we must minimize A. So, set A = 13.\n4) Substitute A = 13: 29(13) + 13B <= 679  =>  377 + 13B <= 679.\n5) Subtract 377: 13B <= 302.\n6) Divide by 13: B <= 23.23.\n7) Since B must be a whole number, the maximum number of Box B is 23.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-113",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 113,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1389 pounds. The truck is loaded with Box A types weighing 34 pounds each and Box B types weighing 29 pounds each. If the truck must carry at least 14 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "33 boxes"
      },
      {
        "letter": "B",
        "text": "29 boxes"
      },
      {
        "letter": "C",
        "text": "35 boxes"
      },
      {
        "letter": "D",
        "text": "31 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "31 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 34A + 29B <= 1389.\n2) The constraint is A >= 14.\n3) To maximize B, we must minimize A. So, set A = 14.\n4) Substitute A = 14: 34(14) + 29B <= 1389  =>  476 + 29B <= 1389.\n5) Subtract 476: 29B <= 913.\n6) Divide by 29: B <= 31.48.\n7) Since B must be a whole number, the maximum number of Box B is 31.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-114",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 114,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1539 pounds. The truck is loaded with Box A types weighing 35 pounds each and Box B types weighing 19 pounds each. If the truck must carry at least 24 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "38 boxes"
      },
      {
        "letter": "B",
        "text": "34 boxes"
      },
      {
        "letter": "C",
        "text": "36 boxes"
      },
      {
        "letter": "D",
        "text": "40 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "36 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 35A + 19B <= 1539.\n2) The constraint is A >= 24.\n3) To maximize B, we must minimize A. So, set A = 24.\n4) Substitute A = 24: 35(24) + 19B <= 1539  =>  840 + 19B <= 1539.\n5) Subtract 840: 19B <= 699.\n6) Divide by 19: B <= 36.79.\n7) Since B must be a whole number, the maximum number of Box B is 36.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-115",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 115,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n5x + 2 <= 7x + 10",
    "options": [
      {
        "letter": "A",
        "text": "x >= -4"
      },
      {
        "letter": "B",
        "text": "x <= -4"
      },
      {
        "letter": "C",
        "text": "x >= 4"
      },
      {
        "letter": "D",
        "text": "x <= 4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x >= -4",
    "explanation": "1) Subtract 7x from both sides: -2x + 2 <= 10.\n2) Subtract 2 from both sides: -2x <= 8.\n3) Divide by -2. Since we are dividing by a negative number, flip the inequality sign: x >= -4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-116",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 116,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1621 pounds. The truck is loaded with Box A types weighing 37 pounds each and Box B types weighing 34 pounds each. If the truck must carry at least 11 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "35 boxes"
      },
      {
        "letter": "B",
        "text": "37 boxes"
      },
      {
        "letter": "C",
        "text": "33 boxes"
      },
      {
        "letter": "D",
        "text": "39 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "35 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 37A + 34B <= 1621.\n2) The constraint is A >= 11.\n3) To maximize B, we must minimize A. So, set A = 11.\n4) Substitute A = 11: 37(11) + 34B <= 1621  =>  407 + 34B <= 1621.\n5) Subtract 407: 34B <= 1214.\n6) Divide by 34: B <= 35.71.\n7) Since B must be a whole number, the maximum number of Box B is 35.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-117",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 117,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -9) is in the solution set of the inequality y < -3x + 8. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "-5"
      },
      {
        "letter": "C",
        "text": "7"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "5",
    "explanation": "1) Substitute y = -9 into the inequality: -9 < -3x + 8.\n2) Subtract 8 from both sides: -17 < -3x.\n3) Divide by -3. Remember to flip the inequality sign when dividing by a negative number. This yields: x < 5.67.\n4) The maximum integer satisfying this condition is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-118",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 118,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1738 pounds. The truck is loaded with Box A types weighing 24 pounds each and Box B types weighing 32 pounds each. If the truck must carry at least 19 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "42 boxes"
      },
      {
        "letter": "B",
        "text": "38 boxes"
      },
      {
        "letter": "C",
        "text": "44 boxes"
      },
      {
        "letter": "D",
        "text": "40 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "40 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 24A + 32B <= 1738.\n2) The constraint is A >= 19.\n3) To maximize B, we must minimize A. So, set A = 19.\n4) Substitute A = 19: 24(19) + 32B <= 1738  =>  456 + 32B <= 1738.\n5) Subtract 456: 32B <= 1282.\n6) Divide by 32: B <= 40.06.\n7) Since B must be a whole number, the maximum number of Box B is 40.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-119",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 119,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1726 pounds. The truck is loaded with Box A types weighing 40 pounds each and Box B types weighing 31 pounds each. If the truck must carry at least 25 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "25 boxes"
      },
      {
        "letter": "B",
        "text": "21 boxes"
      },
      {
        "letter": "C",
        "text": "27 boxes"
      },
      {
        "letter": "D",
        "text": "23 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "23 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 40A + 31B <= 1726.\n2) The constraint is A >= 25.\n3) To maximize B, we must minimize A. So, set A = 25.\n4) Substitute A = 25: 40(25) + 31B <= 1726  =>  1000 + 31B <= 1726.\n5) Subtract 1000: 31B <= 726.\n6) Divide by 31: B <= 23.42.\n7) Since B must be a whole number, the maximum number of Box B is 23.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-120",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 120,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 838 pounds. The truck is loaded with Box A types weighing 24 pounds each and Box B types weighing 14 pounds each. If the truck must carry at least 16 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "34 boxes"
      },
      {
        "letter": "B",
        "text": "32 boxes"
      },
      {
        "letter": "C",
        "text": "30 boxes"
      },
      {
        "letter": "D",
        "text": "36 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "32 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 24A + 14B <= 838.\n2) The constraint is A >= 16.\n3) To maximize B, we must minimize A. So, set A = 16.\n4) Substitute A = 16: 24(16) + 14B <= 838  =>  384 + 14B <= 838.\n5) Subtract 384: 14B <= 454.\n6) Divide by 14: B <= 32.43.\n7) Since B must be a whole number, the maximum number of Box B is 32.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-121",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 121,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-3x + 5 > -7x + 21",
    "options": [
      {
        "letter": "A",
        "text": "x > 4"
      },
      {
        "letter": "B",
        "text": "x < 4"
      },
      {
        "letter": "C",
        "text": "x > -4"
      },
      {
        "letter": "D",
        "text": "x < -4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x > 4",
    "explanation": "1) Subtract -7x from both sides: 4x + 5 > 21.\n2) Subtract 5 from both sides: 4x > 16.\n3) Divide by 4. x > 4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-122",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 122,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1437 pounds. The truck is loaded with Box A types weighing 42 pounds each and Box B types weighing 25 pounds each. If the truck must carry at least 20 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "25 boxes"
      },
      {
        "letter": "B",
        "text": "21 boxes"
      },
      {
        "letter": "C",
        "text": "23 boxes"
      },
      {
        "letter": "D",
        "text": "27 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "23 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 42A + 25B <= 1437.\n2) The constraint is A >= 20.\n3) To maximize B, we must minimize A. So, set A = 20.\n4) Substitute A = 20: 42(20) + 25B <= 1437  =>  840 + 25B <= 1437.\n5) Subtract 840: 25B <= 597.\n6) Divide by 25: B <= 23.88.\n7) Since B must be a whole number, the maximum number of Box B is 23.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-123",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 123,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -13) is in the solution set of the inequality y <= -2x + 10. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-11"
      },
      {
        "letter": "B",
        "text": "11"
      },
      {
        "letter": "C",
        "text": "13"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "11",
    "explanation": "1) Substitute y = -13 into the inequality: -13 <= -2x + 10.\n2) Subtract 10 from both sides: -23 <= -2x.\n3) Divide by -2. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= 11.50.\n4) The maximum integer satisfying this condition is 11.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-124",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 124,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1315 pounds. The truck is loaded with Box A types weighing 43 pounds each and Box B types weighing 22 pounds each. If the truck must carry at least 14 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "34 boxes"
      },
      {
        "letter": "B",
        "text": "30 boxes"
      },
      {
        "letter": "C",
        "text": "32 boxes"
      },
      {
        "letter": "D",
        "text": "36 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "32 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 43A + 22B <= 1315.\n2) The constraint is A >= 14.\n3) To maximize B, we must minimize A. So, set A = 14.\n4) Substitute A = 14: 43(14) + 22B <= 1315  =>  602 + 22B <= 1315.\n5) Subtract 602: 22B <= 713.\n6) Divide by 22: B <= 32.41.\n7) Since B must be a whole number, the maximum number of Box B is 32.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-125",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 125,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 660 pounds. The truck is loaded with Box A types weighing 23 pounds each and Box B types weighing 12 pounds each. If the truck must carry at least 20 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "16 boxes"
      },
      {
        "letter": "B",
        "text": "18 boxes"
      },
      {
        "letter": "C",
        "text": "14 boxes"
      },
      {
        "letter": "D",
        "text": "20 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "16 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 23A + 12B <= 660.\n2) The constraint is A >= 20.\n3) To maximize B, we must minimize A. So, set A = 20.\n4) Substitute A = 20: 23(20) + 12B <= 660  =>  460 + 12B <= 660.\n5) Subtract 460: 12B <= 200.\n6) Divide by 12: B <= 16.67.\n7) Since B must be a whole number, the maximum number of Box B is 16.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-126",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 126,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 984 pounds. The truck is loaded with Box A types weighing 27 pounds each and Box B types weighing 17 pounds each. If the truck must carry at least 24 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "21 boxes"
      },
      {
        "letter": "B",
        "text": "19 boxes"
      },
      {
        "letter": "C",
        "text": "17 boxes"
      },
      {
        "letter": "D",
        "text": "23 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "19 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 27A + 17B <= 984.\n2) The constraint is A >= 24.\n3) To maximize B, we must minimize A. So, set A = 24.\n4) Substitute A = 24: 27(24) + 17B <= 984  =>  648 + 17B <= 984.\n5) Subtract 648: 17B <= 336.\n6) Divide by 17: B <= 19.76.\n7) Since B must be a whole number, the maximum number of Box B is 19.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-127",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 127,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n2x - 8 > 7x + 2",
    "options": [
      {
        "letter": "A",
        "text": "x > -2"
      },
      {
        "letter": "B",
        "text": "x < 2"
      },
      {
        "letter": "C",
        "text": "x < -2"
      },
      {
        "letter": "D",
        "text": "x > 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x < -2",
    "explanation": "1) Subtract 7x from both sides: -5x - 8 > 2.\n2) Subtract -8 from both sides: -5x > 10.\n3) Divide by -5. Since we are dividing by a negative number, flip the inequality sign: x < -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-128",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 128,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1875 pounds. The truck is loaded with Box A types weighing 43 pounds each and Box B types weighing 20 pounds each. If the truck must carry at least 25 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "40 boxes"
      },
      {
        "letter": "B",
        "text": "42 boxes"
      },
      {
        "letter": "C",
        "text": "38 boxes"
      },
      {
        "letter": "D",
        "text": "44 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "40 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 43A + 20B <= 1875.\n2) The constraint is A >= 25.\n3) To maximize B, we must minimize A. So, set A = 25.\n4) Substitute A = 25: 43(25) + 20B <= 1875  =>  1075 + 20B <= 1875.\n5) Subtract 1075: 20B <= 800.\n6) Divide by 20: B <= 40.00.\n7) Since B must be a whole number, the maximum number of Box B is 40.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-129",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 129,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -13) is in the solution set of the inequality y < 2x + 8. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-10"
      },
      {
        "letter": "B",
        "text": "10"
      },
      {
        "letter": "C",
        "text": "-12"
      },
      {
        "letter": "D",
        "text": "-7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-10",
    "explanation": "1) Substitute y = -13 into the inequality: -13 < 2x + 8.\n2) Subtract 8 from both sides: -21 < 2x.\n3) Divide by 2. This yields: x > -10.50.\n4) The minimum integer satisfying this condition is -10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-130",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 130,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1199 pounds. The truck is loaded with Box A types weighing 33 pounds each and Box B types weighing 13 pounds each. If the truck must carry at least 23 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "33 boxes"
      },
      {
        "letter": "B",
        "text": "35 boxes"
      },
      {
        "letter": "C",
        "text": "31 boxes"
      },
      {
        "letter": "D",
        "text": "37 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "33 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 33A + 13B <= 1199.\n2) The constraint is A >= 23.\n3) To maximize B, we must minimize A. So, set A = 23.\n4) Substitute A = 23: 33(23) + 13B <= 1199  =>  759 + 13B <= 1199.\n5) Subtract 759: 13B <= 440.\n6) Divide by 13: B <= 33.85.\n7) Since B must be a whole number, the maximum number of Box B is 33.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-131",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 131,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1423 pounds. The truck is loaded with Box A types weighing 37 pounds each and Box B types weighing 18 pounds each. If the truck must carry at least 22 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "35 boxes"
      },
      {
        "letter": "B",
        "text": "31 boxes"
      },
      {
        "letter": "C",
        "text": "33 boxes"
      },
      {
        "letter": "D",
        "text": "37 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "33 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 37A + 18B <= 1423.\n2) The constraint is A >= 22.\n3) To maximize B, we must minimize A. So, set A = 22.\n4) Substitute A = 22: 37(22) + 18B <= 1423  =>  814 + 18B <= 1423.\n5) Subtract 814: 18B <= 609.\n6) Divide by 18: B <= 33.83.\n7) Since B must be a whole number, the maximum number of Box B is 33.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-132",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 132,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1323 pounds. The truck is loaded with Box A types weighing 40 pounds each and Box B types weighing 22 pounds each. If the truck must carry at least 14 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "34 boxes"
      },
      {
        "letter": "B",
        "text": "36 boxes"
      },
      {
        "letter": "C",
        "text": "32 boxes"
      },
      {
        "letter": "D",
        "text": "38 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "34 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 40A + 22B <= 1323.\n2) The constraint is A >= 14.\n3) To maximize B, we must minimize A. So, set A = 14.\n4) Substitute A = 14: 40(14) + 22B <= 1323  =>  560 + 22B <= 1323.\n5) Subtract 560: 22B <= 763.\n6) Divide by 22: B <= 34.68.\n7) Since B must be a whole number, the maximum number of Box B is 34.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-133",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 133,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-4x + 0 >= -7x - 3",
    "options": [
      {
        "letter": "A",
        "text": "x <= -1"
      },
      {
        "letter": "B",
        "text": "x >= 1"
      },
      {
        "letter": "C",
        "text": "x >= -1"
      },
      {
        "letter": "D",
        "text": "x <= 1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x >= -1",
    "explanation": "1) Subtract -7x from both sides: 3x + 0 >= -3.\n2) Subtract 0 from both sides: 3x >= -3.\n3) Divide by 3. x >= -1.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-134",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 134,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 702 pounds. The truck is loaded with Box A types weighing 17 pounds each and Box B types weighing 18 pounds each. If the truck must carry at least 17 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "24 boxes"
      },
      {
        "letter": "B",
        "text": "22 boxes"
      },
      {
        "letter": "C",
        "text": "20 boxes"
      },
      {
        "letter": "D",
        "text": "26 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "22 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 17A + 18B <= 702.\n2) The constraint is A >= 17.\n3) To maximize B, we must minimize A. So, set A = 17.\n4) Substitute A = 17: 17(17) + 18B <= 702  =>  289 + 18B <= 702.\n5) Subtract 289: 18B <= 413.\n6) Divide by 18: B <= 22.94.\n7) Since B must be a whole number, the maximum number of Box B is 22.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-135",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 135,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 13) is in the solution set of the inequality y <= 4x + 3. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-3"
      },
      {
        "letter": "B",
        "text": "5"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "3",
    "explanation": "1) Substitute y = 13 into the inequality: 13 <= 4x + 3.\n2) Subtract 3 from both sides: 10 <= 4x.\n3) Divide by 4. This yields: x >= 2.50.\n4) The minimum integer satisfying this condition is 3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-136",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 136,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 996 pounds. The truck is loaded with Box A types weighing 30 pounds each and Box B types weighing 34 pounds each. If the truck must carry at least 14 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "18 boxes"
      },
      {
        "letter": "B",
        "text": "16 boxes"
      },
      {
        "letter": "C",
        "text": "14 boxes"
      },
      {
        "letter": "D",
        "text": "20 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "16 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 30A + 34B <= 996.\n2) The constraint is A >= 14.\n3) To maximize B, we must minimize A. So, set A = 14.\n4) Substitute A = 14: 30(14) + 34B <= 996  =>  420 + 34B <= 996.\n5) Subtract 420: 34B <= 576.\n6) Divide by 34: B <= 16.94.\n7) Since B must be a whole number, the maximum number of Box B is 16.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-137",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 137,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1629 pounds. The truck is loaded with Box A types weighing 44 pounds each and Box B types weighing 22 pounds each. If the truck must carry at least 22 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "30 boxes"
      },
      {
        "letter": "B",
        "text": "32 boxes"
      },
      {
        "letter": "C",
        "text": "28 boxes"
      },
      {
        "letter": "D",
        "text": "34 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "30 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 44A + 22B <= 1629.\n2) The constraint is A >= 22.\n3) To maximize B, we must minimize A. So, set A = 22.\n4) Substitute A = 22: 44(22) + 22B <= 1629  =>  968 + 22B <= 1629.\n5) Subtract 968: 22B <= 661.\n6) Divide by 22: B <= 30.05.\n7) Since B must be a whole number, the maximum number of Box B is 30.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-138",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 138,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1029 pounds. The truck is loaded with Box A types weighing 24 pounds each and Box B types weighing 31 pounds each. If the truck must carry at least 20 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "19 boxes"
      },
      {
        "letter": "B",
        "text": "15 boxes"
      },
      {
        "letter": "C",
        "text": "21 boxes"
      },
      {
        "letter": "D",
        "text": "17 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "17 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 24A + 31B <= 1029.\n2) The constraint is A >= 20.\n3) To maximize B, we must minimize A. So, set A = 20.\n4) Substitute A = 20: 24(20) + 31B <= 1029  =>  480 + 31B <= 1029.\n5) Subtract 480: 31B <= 549.\n6) Divide by 31: B <= 17.71.\n7) Since B must be a whole number, the maximum number of Box B is 17.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-139",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 139,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n1x - 6 >= -3x + 6",
    "options": [
      {
        "letter": "A",
        "text": "x >= 3"
      },
      {
        "letter": "B",
        "text": "x <= 3"
      },
      {
        "letter": "C",
        "text": "x >= -3"
      },
      {
        "letter": "D",
        "text": "x <= -3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x >= 3",
    "explanation": "1) Subtract -3x from both sides: 4x - 6 >= 6.\n2) Subtract -6 from both sides: 4x >= 12.\n3) Divide by 4. x >= 3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-140",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 140,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 656 pounds. The truck is loaded with Box A types weighing 18 pounds each and Box B types weighing 12 pounds each. If the truck must carry at least 21 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "23 boxes"
      },
      {
        "letter": "B",
        "text": "25 boxes"
      },
      {
        "letter": "C",
        "text": "21 boxes"
      },
      {
        "letter": "D",
        "text": "27 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "23 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 18A + 12B <= 656.\n2) The constraint is A >= 21.\n3) To maximize B, we must minimize A. So, set A = 21.\n4) Substitute A = 21: 18(21) + 12B <= 656  =>  378 + 12B <= 656.\n5) Subtract 378: 12B <= 278.\n6) Divide by 12: B <= 23.17.\n7) Since B must be a whole number, the maximum number of Box B is 23.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-141",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 141,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 4) is in the solution set of the inequality y < -4x - 1. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "-4"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-2",
    "explanation": "1) Substitute y = 4 into the inequality: 4 < -4x - 1.\n2) Subtract -1 from both sides: 5 < -4x.\n3) Divide by -4. Remember to flip the inequality sign when dividing by a negative number. This yields: x < -1.25.\n4) The maximum integer satisfying this condition is -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-142",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 142,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 601 pounds. The truck is loaded with Box A types weighing 15 pounds each and Box B types weighing 13 pounds each. If the truck must carry at least 25 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "19 boxes"
      },
      {
        "letter": "B",
        "text": "15 boxes"
      },
      {
        "letter": "C",
        "text": "21 boxes"
      },
      {
        "letter": "D",
        "text": "17 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "17 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 15A + 13B <= 601.\n2) The constraint is A >= 25.\n3) To maximize B, we must minimize A. So, set A = 25.\n4) Substitute A = 25: 15(25) + 13B <= 601  =>  375 + 13B <= 601.\n5) Subtract 375: 13B <= 226.\n6) Divide by 13: B <= 17.38.\n7) Since B must be a whole number, the maximum number of Box B is 17.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-143",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 143,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 729 pounds. The truck is loaded with Box A types weighing 27 pounds each and Box B types weighing 15 pounds each. If the truck must carry at least 13 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "27 boxes"
      },
      {
        "letter": "B",
        "text": "23 boxes"
      },
      {
        "letter": "C",
        "text": "29 boxes"
      },
      {
        "letter": "D",
        "text": "25 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "25 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 27A + 15B <= 729.\n2) The constraint is A >= 13.\n3) To maximize B, we must minimize A. So, set A = 13.\n4) Substitute A = 13: 27(13) + 15B <= 729  =>  351 + 15B <= 729.\n5) Subtract 351: 15B <= 378.\n6) Divide by 15: B <= 25.20.\n7) Since B must be a whole number, the maximum number of Box B is 25.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-144",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 144,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1256 pounds. The truck is loaded with Box A types weighing 39 pounds each and Box B types weighing 20 pounds each. If the truck must carry at least 22 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "21 boxes"
      },
      {
        "letter": "B",
        "text": "19 boxes"
      },
      {
        "letter": "C",
        "text": "17 boxes"
      },
      {
        "letter": "D",
        "text": "23 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "19 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 39A + 20B <= 1256.\n2) The constraint is A >= 22.\n3) To maximize B, we must minimize A. So, set A = 22.\n4) Substitute A = 22: 39(22) + 20B <= 1256  =>  858 + 20B <= 1256.\n5) Subtract 858: 20B <= 398.\n6) Divide by 20: B <= 19.90.\n7) Since B must be a whole number, the maximum number of Box B is 19.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-145",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 145,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n5x + 10 >= 10x + 60",
    "options": [
      {
        "letter": "A",
        "text": "x >= -10"
      },
      {
        "letter": "B",
        "text": "x <= 10"
      },
      {
        "letter": "C",
        "text": "x >= 10"
      },
      {
        "letter": "D",
        "text": "x <= -10"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x <= -10",
    "explanation": "1) Subtract 10x from both sides: -5x + 10 >= 60.\n2) Subtract 10 from both sides: -5x >= 50.\n3) Divide by -5. Since we are dividing by a negative number, flip the inequality sign: x <= -10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-146",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 146,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1296 pounds. The truck is loaded with Box A types weighing 33 pounds each and Box B types weighing 25 pounds each. If the truck must carry at least 19 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "26 boxes"
      },
      {
        "letter": "B",
        "text": "28 boxes"
      },
      {
        "letter": "C",
        "text": "24 boxes"
      },
      {
        "letter": "D",
        "text": "30 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "26 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 33A + 25B <= 1296.\n2) The constraint is A >= 19.\n3) To maximize B, we must minimize A. So, set A = 19.\n4) Substitute A = 19: 33(19) + 25B <= 1296  =>  627 + 25B <= 1296.\n5) Subtract 627: 25B <= 669.\n6) Divide by 25: B <= 26.76.\n7) Since B must be a whole number, the maximum number of Box B is 26.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-147",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 147,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 1) is in the solution set of the inequality y <= 3x - 5. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "-1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "2",
    "explanation": "1) Substitute y = 1 into the inequality: 1 <= 3x - 5.\n2) Subtract -5 from both sides: 6 <= 3x.\n3) Divide by 3. This yields: x >= 2.00.\n4) The minimum integer satisfying this condition is 2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-148",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 148,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 973 pounds. The truck is loaded with Box A types weighing 28 pounds each and Box B types weighing 13 pounds each. If the truck must carry at least 23 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "25 boxes"
      },
      {
        "letter": "B",
        "text": "27 boxes"
      },
      {
        "letter": "C",
        "text": "23 boxes"
      },
      {
        "letter": "D",
        "text": "29 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "25 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 28A + 13B <= 973.\n2) The constraint is A >= 23.\n3) To maximize B, we must minimize A. So, set A = 23.\n4) Substitute A = 23: 28(23) + 13B <= 973  =>  644 + 13B <= 973.\n5) Subtract 644: 13B <= 329.\n6) Divide by 13: B <= 25.31.\n7) Since B must be a whole number, the maximum number of Box B is 25.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-149",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 149,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1194 pounds. The truck is loaded with Box A types weighing 31 pounds each and Box B types weighing 25 pounds each. If the truck must carry at least 18 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "27 boxes"
      },
      {
        "letter": "B",
        "text": "25 boxes"
      },
      {
        "letter": "C",
        "text": "23 boxes"
      },
      {
        "letter": "D",
        "text": "29 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "25 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 31A + 25B <= 1194.\n2) The constraint is A >= 18.\n3) To maximize B, we must minimize A. So, set A = 18.\n4) Substitute A = 18: 31(18) + 25B <= 1194  =>  558 + 25B <= 1194.\n5) Subtract 558: 25B <= 636.\n6) Divide by 25: B <= 25.44.\n7) Since B must be a whole number, the maximum number of Box B is 25.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-150",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 150,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1083 pounds. The truck is loaded with Box A types weighing 45 pounds each and Box B types weighing 12 pounds each. If the truck must carry at least 19 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "21 boxes"
      },
      {
        "letter": "B",
        "text": "17 boxes"
      },
      {
        "letter": "C",
        "text": "23 boxes"
      },
      {
        "letter": "D",
        "text": "19 boxes"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "19 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 45A + 12B <= 1083.\n2) The constraint is A >= 19.\n3) To maximize B, we must minimize A. So, set A = 19.\n4) Substitute A = 19: 45(19) + 12B <= 1083  =>  855 + 12B <= 1083.\n5) Subtract 855: 12B <= 228.\n6) Divide by 12: B <= 19.00.\n7) Since B must be a whole number, the maximum number of Box B is 19.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-151",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 151,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n5x + 4 > 3x + 18",
    "options": [
      {
        "letter": "A",
        "text": "x > 7"
      },
      {
        "letter": "B",
        "text": "x < 7"
      },
      {
        "letter": "C",
        "text": "x > -7"
      },
      {
        "letter": "D",
        "text": "x < -7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x > 7",
    "explanation": "1) Subtract 3x from both sides: 2x + 4 > 18.\n2) Subtract 4 from both sides: 2x > 14.\n3) Divide by 2. x > 7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-152",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 152,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 656 pounds. The truck is loaded with Box A types weighing 24 pounds each and Box B types weighing 15 pounds each. If the truck must carry at least 11 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "28 boxes"
      },
      {
        "letter": "B",
        "text": "24 boxes"
      },
      {
        "letter": "C",
        "text": "26 boxes"
      },
      {
        "letter": "D",
        "text": "30 boxes"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "26 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 24A + 15B <= 656.\n2) The constraint is A >= 11.\n3) To maximize B, we must minimize A. So, set A = 11.\n4) Substitute A = 11: 24(11) + 15B <= 656  =>  264 + 15B <= 656.\n5) Subtract 264: 15B <= 392.\n6) Divide by 15: B <= 26.13.\n7) Since B must be a whole number, the maximum number of Box B is 26.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-153",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 153,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 2) is in the solution set of the inequality y <= 4x + 10. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "-4"
      },
      {
        "letter": "C",
        "text": "-2"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-2",
    "explanation": "1) Substitute y = 2 into the inequality: 2 <= 4x + 10.\n2) Subtract 10 from both sides: -8 <= 4x.\n3) Divide by 4. This yields: x >= -2.00.\n4) The minimum integer satisfying this condition is -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-154",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 154,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1346 pounds. The truck is loaded with Box A types weighing 35 pounds each and Box B types weighing 31 pounds each. If the truck must carry at least 20 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "22 boxes"
      },
      {
        "letter": "B",
        "text": "20 boxes"
      },
      {
        "letter": "C",
        "text": "18 boxes"
      },
      {
        "letter": "D",
        "text": "24 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "20 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 35A + 31B <= 1346.\n2) The constraint is A >= 20.\n3) To maximize B, we must minimize A. So, set A = 20.\n4) Substitute A = 20: 35(20) + 31B <= 1346  =>  700 + 31B <= 1346.\n5) Subtract 700: 31B <= 646.\n6) Divide by 31: B <= 20.84.\n7) Since B must be a whole number, the maximum number of Box B is 20.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-155",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 155,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1204 pounds. The truck is loaded with Box A types weighing 28 pounds each and Box B types weighing 25 pounds each. If the truck must carry at least 12 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "36 boxes"
      },
      {
        "letter": "B",
        "text": "34 boxes"
      },
      {
        "letter": "C",
        "text": "32 boxes"
      },
      {
        "letter": "D",
        "text": "38 boxes"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "34 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 28A + 25B <= 1204.\n2) The constraint is A >= 12.\n3) To maximize B, we must minimize A. So, set A = 12.\n4) Substitute A = 12: 28(12) + 25B <= 1204  =>  336 + 25B <= 1204.\n5) Subtract 336: 25B <= 868.\n6) Divide by 25: B <= 34.72.\n7) Since B must be a whole number, the maximum number of Box B is 34.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-156",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 156,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1305 pounds. The truck is loaded with Box A types weighing 39 pounds each and Box B types weighing 23 pounds each. If the truck must carry at least 13 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "34 boxes"
      },
      {
        "letter": "B",
        "text": "36 boxes"
      },
      {
        "letter": "C",
        "text": "32 boxes"
      },
      {
        "letter": "D",
        "text": "38 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "34 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 39A + 23B <= 1305.\n2) The constraint is A >= 13.\n3) To maximize B, we must minimize A. So, set A = 13.\n4) Substitute A = 13: 39(13) + 23B <= 1305  =>  507 + 23B <= 1305.\n5) Subtract 507: 23B <= 798.\n6) Divide by 23: B <= 34.70.\n7) Since B must be a whole number, the maximum number of Box B is 34.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-157",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 157,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n1x - 10 < -3x - 30",
    "options": [
      {
        "letter": "A",
        "text": "x > -5"
      },
      {
        "letter": "B",
        "text": "x < 5"
      },
      {
        "letter": "C",
        "text": "x > 5"
      },
      {
        "letter": "D",
        "text": "x < -5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x < -5",
    "explanation": "1) Subtract -3x from both sides: 4x - 10 < -30.\n2) Subtract -10 from both sides: 4x < -20.\n3) Divide by 4. x < -5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-158",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 158,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Constraint Word Problem",
    "prompt": "A delivery truck can carry a maximum cargo weight of 1421 pounds. The truck is loaded with Box A types weighing 18 pounds each and Box B types weighing 25 pounds each. If the truck must carry at least 23 of Box A, what is the maximum number of Box B it can carry?",
    "options": [
      {
        "letter": "A",
        "text": "40 boxes"
      },
      {
        "letter": "B",
        "text": "42 boxes"
      },
      {
        "letter": "C",
        "text": "38 boxes"
      },
      {
        "letter": "D",
        "text": "44 boxes"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "40 boxes",
    "explanation": "Let A be the number of Box A and B be the number of Box B.\n1) The weight inequality is 18A + 25B <= 1421.\n2) The constraint is A >= 23.\n3) To maximize B, we must minimize A. So, set A = 23.\n4) Substitute A = 23: 18(23) + 25B <= 1421  =>  414 + 25B <= 1421.\n5) Subtract 414: 25B <= 1007.\n6) Divide by 25: B <= 40.28.\n7) Since B must be a whole number, the maximum number of Box B is 40.",
    "sourceFile": "Advanced_Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-159",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 159,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -5) is in the solution set of the inequality y <= 4x + 2. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "-3"
      },
      {
        "letter": "C",
        "text": "-1"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-1",
    "explanation": "1) Substitute y = -5 into the inequality: -5 <= 4x + 2.\n2) Subtract 2 from both sides: -7 <= 4x.\n3) Divide by 4. This yields: x >= -1.75.\n4) The minimum integer satisfying this condition is -1.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-160",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 160,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $127 to buy notebooks and pens. Notebooks cost $12 each and pens cost $7 each. If the student needs to buy at least 6 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "9 pens"
      },
      {
        "letter": "B",
        "text": "5 pens"
      },
      {
        "letter": "C",
        "text": "7 pens"
      },
      {
        "letter": "D",
        "text": "11 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "7 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 12N + 7P <= 127.\n2) We are given N >= 6. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 6.\n3) Substitute N = 6: 12(6) + 7P <= 127  =>  72 + 7P <= 127.\n4) Subtract 72: 7P <= 55.\n5) Divide by 7: P <= 7.86.\n6) Since P must be an integer, the maximum number of pens is 7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-161",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 161,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $149 to buy notebooks and pens. Notebooks cost $9 each and pens cost $14 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "3 pens"
      },
      {
        "letter": "C",
        "text": "5 pens"
      },
      {
        "letter": "D",
        "text": "9 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "5 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 9N + 14P <= 149.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 9(8) + 14P <= 149  =>  72 + 14P <= 149.\n4) Subtract 72: 14P <= 77.\n5) Divide by 14: P <= 5.50.\n6) Since P must be an integer, the maximum number of pens is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-162",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 162,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $96 to buy notebooks and pens. Notebooks cost $12 each and pens cost $4 each. If the student needs to buy at least 4 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "14 pens"
      },
      {
        "letter": "B",
        "text": "10 pens"
      },
      {
        "letter": "C",
        "text": "12 pens"
      },
      {
        "letter": "D",
        "text": "16 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "12 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 12N + 4P <= 96.\n2) We are given N >= 4. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 4.\n3) Substitute N = 4: 12(4) + 4P <= 96  =>  48 + 4P <= 96.\n4) Subtract 48: 4P <= 48.\n5) Divide by 4: P <= 12.00.\n6) Since P must be an integer, the maximum number of pens is 12.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-163",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 163,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n1x - 3 <= -1x - 17",
    "options": [
      {
        "letter": "A",
        "text": "x <= -7"
      },
      {
        "letter": "B",
        "text": "x >= -7"
      },
      {
        "letter": "C",
        "text": "x <= 7"
      },
      {
        "letter": "D",
        "text": "x >= 7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x <= -7",
    "explanation": "1) Subtract -1x from both sides: 2x - 3 <= -17.\n2) Subtract -3 from both sides: 2x <= -14.\n3) Divide by 2. x <= -7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-164",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 164,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $152 to buy notebooks and pens. Notebooks cost $9 each and pens cost $8 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "12 pens"
      },
      {
        "letter": "B",
        "text": "8 pens"
      },
      {
        "letter": "C",
        "text": "14 pens"
      },
      {
        "letter": "D",
        "text": "10 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 9N + 8P <= 152.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 9(8) + 8P <= 152  =>  72 + 8P <= 152.\n4) Subtract 72: 8P <= 80.\n5) Divide by 8: P <= 10.00.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-165",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 165,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 1) is in the solution set of the inequality y <= 4x - 10. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-3"
      },
      {
        "letter": "B",
        "text": "5"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "3",
    "explanation": "1) Substitute y = 1 into the inequality: 1 <= 4x - 10.\n2) Subtract -10 from both sides: 11 <= 4x.\n3) Divide by 4. This yields: x >= 2.75.\n4) The minimum integer satisfying this condition is 3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-166",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 166,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $99 to buy notebooks and pens. Notebooks cost $7 each and pens cost $8 each. If the student needs to buy at least 3 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "11 pens"
      },
      {
        "letter": "B",
        "text": "7 pens"
      },
      {
        "letter": "C",
        "text": "9 pens"
      },
      {
        "letter": "D",
        "text": "13 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "9 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 7N + 8P <= 99.\n2) We are given N >= 3. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 3.\n3) Substitute N = 3: 7(3) + 8P <= 99  =>  21 + 8P <= 99.\n4) Subtract 21: 8P <= 78.\n5) Divide by 8: P <= 9.75.\n6) Since P must be an integer, the maximum number of pens is 9.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-167",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 167,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $154 to buy notebooks and pens. Notebooks cost $4 each and pens cost $12 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "12 pens"
      },
      {
        "letter": "B",
        "text": "8 pens"
      },
      {
        "letter": "C",
        "text": "14 pens"
      },
      {
        "letter": "D",
        "text": "10 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 4N + 12P <= 154.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 4(8) + 12P <= 154  =>  32 + 12P <= 154.\n4) Subtract 32: 12P <= 122.\n5) Divide by 12: P <= 10.17.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-168",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 168,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $106 to buy notebooks and pens. Notebooks cost $9 each and pens cost $11 each. If the student needs to buy at least 4 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "8 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "4 pens"
      },
      {
        "letter": "D",
        "text": "10 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 9N + 11P <= 106.\n2) We are given N >= 4. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 4.\n3) Substitute N = 4: 9(4) + 11P <= 106  =>  36 + 11P <= 106.\n4) Subtract 36: 11P <= 70.\n5) Divide by 11: P <= 6.36.\n6) Since P must be an integer, the maximum number of pens is 6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-169",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 169,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-2x + 10 > 4x - 38",
    "options": [
      {
        "letter": "A",
        "text": "x > 8"
      },
      {
        "letter": "B",
        "text": "x < -8"
      },
      {
        "letter": "C",
        "text": "x > -8"
      },
      {
        "letter": "D",
        "text": "x < 8"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x < 8",
    "explanation": "1) Subtract 4x from both sides: -6x + 10 > -38.\n2) Subtract 10 from both sides: -6x > -48.\n3) Divide by -6. Since we are dividing by a negative number, flip the inequality sign: x < 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-170",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 170,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $105 to buy notebooks and pens. Notebooks cost $6 each and pens cost $11 each. If the student needs to buy at least 7 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "3 pens"
      },
      {
        "letter": "C",
        "text": "9 pens"
      },
      {
        "letter": "D",
        "text": "5 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "5 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 6N + 11P <= 105.\n2) We are given N >= 7. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 7.\n3) Substitute N = 7: 6(7) + 11P <= 105  =>  42 + 11P <= 105.\n4) Subtract 42: 11P <= 63.\n5) Divide by 11: P <= 5.73.\n6) Since P must be an integer, the maximum number of pens is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-171",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 171,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 12) is in the solution set of the inequality y < 4x + 7. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-2"
      },
      {
        "letter": "B",
        "text": "4"
      },
      {
        "letter": "C",
        "text": "-1"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "2",
    "explanation": "1) Substitute y = 12 into the inequality: 12 < 4x + 7.\n2) Subtract 7 from both sides: 5 < 4x.\n3) Divide by 4. This yields: x > 1.25.\n4) The minimum integer satisfying this condition is 2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-172",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 172,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $124 to buy notebooks and pens. Notebooks cost $5 each and pens cost $11 each. If the student needs to buy at least 7 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "12 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 5N + 11P <= 124.\n2) We are given N >= 7. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 7.\n3) Substitute N = 7: 5(7) + 11P <= 124  =>  35 + 11P <= 124.\n4) Subtract 35: 11P <= 89.\n5) Divide by 11: P <= 8.09.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-173",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 173,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $87 to buy notebooks and pens. Notebooks cost $12 each and pens cost $6 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "12 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "14 pens"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 12N + 6P <= 87.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 12(2) + 6P <= 87  =>  24 + 6P <= 87.\n4) Subtract 24: 6P <= 63.\n5) Divide by 6: P <= 10.50.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-174",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 174,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $85 to buy notebooks and pens. Notebooks cost $6 each and pens cost $11 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "8 pens"
      },
      {
        "letter": "B",
        "text": "4 pens"
      },
      {
        "letter": "C",
        "text": "6 pens"
      },
      {
        "letter": "D",
        "text": "10 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "6 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 6N + 11P <= 85.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 6(2) + 11P <= 85  =>  12 + 11P <= 85.\n4) Subtract 12: 11P <= 73.\n5) Divide by 11: P <= 6.64.\n6) Since P must be an integer, the maximum number of pens is 6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-175",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 175,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n3x - 10 <= 7x + 10",
    "options": [
      {
        "letter": "A",
        "text": "x >= -5"
      },
      {
        "letter": "B",
        "text": "x <= -5"
      },
      {
        "letter": "C",
        "text": "x >= 5"
      },
      {
        "letter": "D",
        "text": "x <= 5"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x >= -5",
    "explanation": "1) Subtract 7x from both sides: -4x - 10 <= 10.\n2) Subtract -10 from both sides: -4x <= 20.\n3) Divide by -4. Since we are dividing by a negative number, flip the inequality sign: x >= -5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-176",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 176,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $144 to buy notebooks and pens. Notebooks cost $7 each and pens cost $11 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "12 pens"
      },
      {
        "letter": "D",
        "text": "8 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 7N + 11P <= 144.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 7(8) + 11P <= 144  =>  56 + 11P <= 144.\n4) Subtract 56: 11P <= 88.\n5) Divide by 11: P <= 8.00.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-177",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 177,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 11) is in the solution set of the inequality y <= 3x - 6. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-6"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "6",
    "explanation": "1) Substitute y = 11 into the inequality: 11 <= 3x - 6.\n2) Subtract -6 from both sides: 17 <= 3x.\n3) Divide by 3. This yields: x >= 5.67.\n4) The minimum integer satisfying this condition is 6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-178",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 178,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $144 to buy notebooks and pens. Notebooks cost $5 each and pens cost $14 each. If the student needs to buy at least 6 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "12 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 5N + 14P <= 144.\n2) We are given N >= 6. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 6.\n3) Substitute N = 6: 5(6) + 14P <= 144  =>  30 + 14P <= 144.\n4) Subtract 30: 14P <= 114.\n5) Divide by 14: P <= 8.14.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-179",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 179,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $186 to buy notebooks and pens. Notebooks cost $7 each and pens cost $13 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "13 pens"
      },
      {
        "letter": "B",
        "text": "9 pens"
      },
      {
        "letter": "C",
        "text": "11 pens"
      },
      {
        "letter": "D",
        "text": "15 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "11 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 7N + 13P <= 186.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 7(5) + 13P <= 186  =>  35 + 13P <= 186.\n4) Subtract 35: 13P <= 151.\n5) Divide by 13: P <= 11.62.\n6) Since P must be an integer, the maximum number of pens is 11.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-180",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 180,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $201 to buy notebooks and pens. Notebooks cost $6 each and pens cost $15 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "12 pens"
      },
      {
        "letter": "B",
        "text": "10 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "14 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 6N + 15P <= 201.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 6(8) + 15P <= 201  =>  48 + 15P <= 201.\n4) Subtract 48: 15P <= 153.\n5) Divide by 15: P <= 10.20.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-181",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 181,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n1x - 7 < 4x - 16",
    "options": [
      {
        "letter": "A",
        "text": "x > 3"
      },
      {
        "letter": "B",
        "text": "x < 3"
      },
      {
        "letter": "C",
        "text": "x > -3"
      },
      {
        "letter": "D",
        "text": "x < -3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x > 3",
    "explanation": "1) Subtract 4x from both sides: -3x - 7 < -16.\n2) Subtract -7 from both sides: -3x < -9.\n3) Divide by -3. Since we are dividing by a negative number, flip the inequality sign: x > 3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-182",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 182,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $128 to buy notebooks and pens. Notebooks cost $10 each and pens cost $13 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "12 pens"
      },
      {
        "letter": "D",
        "text": "8 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 10N + 13P <= 128.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 10(2) + 13P <= 128  =>  20 + 13P <= 128.\n4) Subtract 20: 13P <= 108.\n5) Divide by 13: P <= 8.31.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-183",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 183,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -3) is in the solution set of the inequality y <= 2x + 9. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "6"
      },
      {
        "letter": "B",
        "text": "-8"
      },
      {
        "letter": "C",
        "text": "-6"
      },
      {
        "letter": "D",
        "text": "-3"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-6",
    "explanation": "1) Substitute y = -3 into the inequality: -3 <= 2x + 9.\n2) Subtract 9 from both sides: -12 <= 2x.\n3) Divide by 2. This yields: x >= -6.00.\n4) The minimum integer satisfying this condition is -6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-184",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 184,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $118 to buy notebooks and pens. Notebooks cost $6 each and pens cost $9 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "13 pens"
      },
      {
        "letter": "B",
        "text": "9 pens"
      },
      {
        "letter": "C",
        "text": "11 pens"
      },
      {
        "letter": "D",
        "text": "15 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "11 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 6N + 9P <= 118.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 6(2) + 9P <= 118  =>  12 + 9P <= 118.\n4) Subtract 12: 9P <= 106.\n5) Divide by 9: P <= 11.78.\n6) Since P must be an integer, the maximum number of pens is 11.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-185",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 185,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $251 to buy notebooks and pens. Notebooks cost $10 each and pens cost $14 each. If the student needs to buy at least 7 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "14 pens"
      },
      {
        "letter": "B",
        "text": "12 pens"
      },
      {
        "letter": "C",
        "text": "10 pens"
      },
      {
        "letter": "D",
        "text": "16 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "12 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 10N + 14P <= 251.\n2) We are given N >= 7. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 7.\n3) Substitute N = 7: 10(7) + 14P <= 251  =>  70 + 14P <= 251.\n4) Subtract 70: 14P <= 181.\n5) Divide by 14: P <= 12.93.\n6) Since P must be an integer, the maximum number of pens is 12.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-186",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 186,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $78 to buy notebooks and pens. Notebooks cost $4 each and pens cost $8 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "12 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 4N + 8P <= 78.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 4(2) + 8P <= 78  =>  8 + 8P <= 78.\n4) Subtract 8: 8P <= 70.\n5) Divide by 8: P <= 8.75.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-187",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 187,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-3x + 2 > -5x + 2",
    "options": [
      {
        "letter": "A",
        "text": "x < 0"
      },
      {
        "letter": "B",
        "text": "None of the above 1"
      },
      {
        "letter": "C",
        "text": "x > 0"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x > 0",
    "explanation": "1) Subtract -5x from both sides: 2x + 2 > 2.\n2) Subtract 2 from both sides: 2x > 0.\n3) Divide by 2. x > 0.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-188",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 188,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $123 to buy notebooks and pens. Notebooks cost $8 each and pens cost $10 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "8 pens"
      },
      {
        "letter": "C",
        "text": "6 pens"
      },
      {
        "letter": "D",
        "text": "12 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 8N + 10P <= 123.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 8(5) + 10P <= 123  =>  40 + 10P <= 123.\n4) Subtract 40: 10P <= 83.\n5) Divide by 10: P <= 8.30.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-189",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 189,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 4) is in the solution set of the inequality y < 3x - 3. What is the minimum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "-3"
      },
      {
        "letter": "B",
        "text": "5"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "3",
    "explanation": "1) Substitute y = 4 into the inequality: 4 < 3x - 3.\n2) Subtract -3 from both sides: 7 < 3x.\n3) Divide by 3. This yields: x > 2.33.\n4) The minimum integer satisfying this condition is 3.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-190",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 190,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $153 to buy notebooks and pens. Notebooks cost $9 each and pens cost $14 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "9 pens"
      },
      {
        "letter": "C",
        "text": "5 pens"
      },
      {
        "letter": "D",
        "text": "11 pens"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "7 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 9N + 14P <= 153.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 9(5) + 14P <= 153  =>  45 + 14P <= 153.\n4) Subtract 45: 14P <= 108.\n5) Divide by 14: P <= 7.71.\n6) Since P must be an integer, the maximum number of pens is 7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-191",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 191,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $135 to buy notebooks and pens. Notebooks cost $12 each and pens cost $7 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "12 pens"
      },
      {
        "letter": "B",
        "text": "8 pens"
      },
      {
        "letter": "C",
        "text": "10 pens"
      },
      {
        "letter": "D",
        "text": "14 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 12N + 7P <= 135.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 12(5) + 7P <= 135  =>  60 + 7P <= 135.\n4) Subtract 60: 7P <= 75.\n5) Divide by 7: P <= 10.71.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-192",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 192,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $78 to buy notebooks and pens. Notebooks cost $9 each and pens cost $6 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "5 pens"
      },
      {
        "letter": "C",
        "text": "3 pens"
      },
      {
        "letter": "D",
        "text": "9 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "5 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 9N + 6P <= 78.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 9(5) + 6P <= 78  =>  45 + 6P <= 78.\n4) Subtract 45: 6P <= 33.\n5) Divide by 6: P <= 5.50.\n6) Since P must be an integer, the maximum number of pens is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-193",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 193,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-5x - 7 > -2x - 19",
    "options": [
      {
        "letter": "A",
        "text": "x < 4"
      },
      {
        "letter": "B",
        "text": "x > 4"
      },
      {
        "letter": "C",
        "text": "x < -4"
      },
      {
        "letter": "D",
        "text": "x > -4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x < 4",
    "explanation": "1) Subtract -2x from both sides: -3x - 7 > -19.\n2) Subtract -7 from both sides: -3x > -12.\n3) Divide by -3. Since we are dividing by a negative number, flip the inequality sign: x < 4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-194",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 194,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $91 to buy notebooks and pens. Notebooks cost $8 each and pens cost $10 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "3 pens"
      },
      {
        "letter": "C",
        "text": "5 pens"
      },
      {
        "letter": "D",
        "text": "9 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "5 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 8N + 10P <= 91.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 8(5) + 10P <= 91  =>  40 + 10P <= 91.\n4) Subtract 40: 10P <= 51.\n5) Divide by 10: P <= 5.10.\n6) Since P must be an integer, the maximum number of pens is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-195",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 195,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, -1) is in the solution set of the inequality y <= -2x - 9. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "4"
      },
      {
        "letter": "B",
        "text": "-6"
      },
      {
        "letter": "C",
        "text": "-1"
      },
      {
        "letter": "D",
        "text": "-4"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-4",
    "explanation": "1) Substitute y = -1 into the inequality: -1 <= -2x - 9.\n2) Subtract -9 from both sides: 8 <= -2x.\n3) Divide by -2. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= -4.00.\n4) The maximum integer satisfying this condition is -4.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-196",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 196,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $167 to buy notebooks and pens. Notebooks cost $6 each and pens cost $11 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "12 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "14 pens"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 6N + 11P <= 167.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 6(8) + 11P <= 167  =>  48 + 11P <= 167.\n4) Subtract 48: 11P <= 119.\n5) Divide by 11: P <= 10.82.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-197",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 197,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $140 to buy notebooks and pens. Notebooks cost $8 each and pens cost $10 each. If the student needs to buy at least 4 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "12 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "14 pens"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "10 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 8N + 10P <= 140.\n2) We are given N >= 4. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 4.\n3) Substitute N = 4: 8(4) + 10P <= 140  =>  32 + 10P <= 140.\n4) Subtract 32: 10P <= 108.\n5) Divide by 10: P <= 10.80.\n6) Since P must be an integer, the maximum number of pens is 10.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-198",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 198,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $112 to buy notebooks and pens. Notebooks cost $12 each and pens cost $6 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "12 pens"
      },
      {
        "letter": "D",
        "text": "8 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 12N + 6P <= 112.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 12(5) + 6P <= 112  =>  60 + 6P <= 112.\n4) Subtract 60: 6P <= 52.\n5) Divide by 6: P <= 8.67.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-199",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 199,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n5x - 4 <= 3x - 8",
    "options": [
      {
        "letter": "A",
        "text": "x >= -2"
      },
      {
        "letter": "B",
        "text": "x <= -2"
      },
      {
        "letter": "C",
        "text": "x <= 2"
      },
      {
        "letter": "D",
        "text": "x >= 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x <= -2",
    "explanation": "1) Subtract 3x from both sides: 2x - 4 <= -8.\n2) Subtract -4 from both sides: 2x <= -4.\n3) Divide by 2. x <= -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-200",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 200,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $115 to buy notebooks and pens. Notebooks cost $8 each and pens cost $11 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "8 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "4 pens"
      },
      {
        "letter": "D",
        "text": "10 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 8N + 11P <= 115.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 8(5) + 11P <= 115  =>  40 + 11P <= 115.\n4) Subtract 40: 11P <= 75.\n5) Divide by 11: P <= 6.82.\n6) Since P must be an integer, the maximum number of pens is 6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-201",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 201,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 13) is in the solution set of the inequality y <= -4x - 6. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "-5"
      },
      {
        "letter": "C",
        "text": "-7"
      },
      {
        "letter": "D",
        "text": "-2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-5",
    "explanation": "1) Substitute y = 13 into the inequality: 13 <= -4x - 6.\n2) Subtract -6 from both sides: 19 <= -4x.\n3) Divide by -4. Remember to flip the inequality sign when dividing by a negative number. This yields: x <= -4.75.\n4) The maximum integer satisfying this condition is -5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-202",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 202,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $76 to buy notebooks and pens. Notebooks cost $4 each and pens cost $7 each. If the student needs to buy at least 5 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "10 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "8 pens"
      },
      {
        "letter": "D",
        "text": "12 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "8 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 4N + 7P <= 76.\n2) We are given N >= 5. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 5.\n3) Substitute N = 5: 4(5) + 7P <= 76  =>  20 + 7P <= 76.\n4) Subtract 20: 7P <= 56.\n5) Divide by 7: P <= 8.00.\n6) Since P must be an integer, the maximum number of pens is 8.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-203",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 203,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $146 to buy notebooks and pens. Notebooks cost $12 each and pens cost $10 each. If the student needs to buy at least 7 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "8 pens"
      },
      {
        "letter": "B",
        "text": "6 pens"
      },
      {
        "letter": "C",
        "text": "4 pens"
      },
      {
        "letter": "D",
        "text": "10 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 12N + 10P <= 146.\n2) We are given N >= 7. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 7.\n3) Substitute N = 7: 12(7) + 10P <= 146  =>  84 + 10P <= 146.\n4) Subtract 84: 10P <= 62.\n5) Divide by 10: P <= 6.20.\n6) Since P must be an integer, the maximum number of pens is 6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-204",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 204,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $71 to buy notebooks and pens. Notebooks cost $9 each and pens cost $4 each. If the student needs to buy at least 3 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "13 pens"
      },
      {
        "letter": "B",
        "text": "9 pens"
      },
      {
        "letter": "C",
        "text": "15 pens"
      },
      {
        "letter": "D",
        "text": "11 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "11 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 9N + 4P <= 71.\n2) We are given N >= 3. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 3.\n3) Substitute N = 3: 9(3) + 4P <= 71  =>  27 + 4P <= 71.\n4) Subtract 27: 4P <= 44.\n5) Divide by 4: P <= 11.00.\n6) Since P must be an integer, the maximum number of pens is 11.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-205",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 205,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Solve the inequality for x:\n-1x + 7 > -5x - 17",
    "options": [
      {
        "letter": "A",
        "text": "x > -6"
      },
      {
        "letter": "B",
        "text": "x < -6"
      },
      {
        "letter": "C",
        "text": "x > 6"
      },
      {
        "letter": "D",
        "text": "x < 6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x > -6",
    "explanation": "1) Subtract -5x from both sides: 4x + 7 > -17.\n2) Subtract 7 from both sides: 4x > -24.\n3) Divide by 4. x > -6.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-206",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 206,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $107 to buy notebooks and pens. Notebooks cost $8 each and pens cost $15 each. If the student needs to buy at least 3 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "3 pens"
      },
      {
        "letter": "C",
        "text": "9 pens"
      },
      {
        "letter": "D",
        "text": "5 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "5 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 8N + 15P <= 107.\n2) We are given N >= 3. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 3.\n3) Substitute N = 3: 8(3) + 15P <= 107  =>  24 + 15P <= 107.\n4) Subtract 24: 15P <= 83.\n5) Divide by 15: P <= 5.53.\n6) Since P must be an integer, the maximum number of pens is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-207",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 207,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The point (x, 3) is in the solution set of the inequality y < -3x - 1. What is the maximum possible integer value of x?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "-4"
      },
      {
        "letter": "C",
        "text": "-2"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-2",
    "explanation": "1) Substitute y = 3 into the inequality: 3 < -3x - 1.\n2) Subtract -1 from both sides: 4 < -3x.\n3) Divide by -3. Remember to flip the inequality sign when dividing by a negative number. This yields: x < -1.33.\n4) The maximum integer satisfying this condition is -2.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-208",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 208,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $148 to buy notebooks and pens. Notebooks cost $6 each and pens cost $9 each. If the student needs to buy at least 8 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "13 pens"
      },
      {
        "letter": "B",
        "text": "9 pens"
      },
      {
        "letter": "C",
        "text": "15 pens"
      },
      {
        "letter": "D",
        "text": "11 pens"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "11 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 6N + 9P <= 148.\n2) We are given N >= 8. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 8.\n3) Substitute N = 8: 6(8) + 9P <= 148  =>  48 + 9P <= 148.\n4) Subtract 48: 9P <= 100.\n5) Divide by 9: P <= 11.11.\n6) Since P must be an integer, the maximum number of pens is 11.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-209",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 209,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $100 to buy notebooks and pens. Notebooks cost $7 each and pens cost $12 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "9 pens"
      },
      {
        "letter": "B",
        "text": "7 pens"
      },
      {
        "letter": "C",
        "text": "5 pens"
      },
      {
        "letter": "D",
        "text": "11 pens"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "7 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 7N + 12P <= 100.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 7(2) + 12P <= 100  =>  14 + 12P <= 100.\n4) Subtract 14: 12P <= 86.\n5) Divide by 12: P <= 7.17.\n6) Since P must be an integer, the maximum number of pens is 7.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "m-alg-5-210",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 210,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A student has a budget of $101 to buy notebooks and pens. Notebooks cost $11 each and pens cost $15 each. If the student needs to buy at least 2 notebooks, what is the maximum number of pens they can buy?",
    "options": [
      {
        "letter": "A",
        "text": "7 pens"
      },
      {
        "letter": "B",
        "text": "3 pens"
      },
      {
        "letter": "C",
        "text": "5 pens"
      },
      {
        "letter": "D",
        "text": "9 pens"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "5 pens",
    "explanation": "Let N be the number of notebooks and P be the number of pens.\n1) The budget inequality is 11N + 15P <= 101.\n2) We are given N >= 2. To maximize P, we should buy the minimum allowed number of notebooks to save money for pens. So, set N = 2.\n3) Substitute N = 2: 11(2) + 15P <= 101  =>  22 + 15P <= 101.\n4) Subtract 22: 15P <= 79.\n5) Divide by 15: P <= 5.27.\n6) Since P must be an integer, the maximum number of pens is 5.",
    "sourceFile": "Linear_Inequalities_SAT.docx"
  },
  {
    "id": "satqb-f224df07",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 211,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A cargo helicopter delivers only 100-pound packages and 120-pound packages. For each delivery trip, the helicopter must carry at least 10\npackages, and the total weight of the packages can be at most 1,100 pounds. What is the maximum number of 120-pound packages that the\nhelicopter can carry per trip?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "4"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "5",
    "explanation": "Choice C is correct. Let a equal the number of 120-pound packages, and let b equal the number of 100-pound packages. It's given that the total\nweight of the packages can be at most 1,100 pounds: the inequality 120@ + 1005 < 1,100 represents this situation. It's also given that the\nhelicopter must carry at least 10 packages: the inequality @ + b = 10 represents this situation. Values of a and b that satisfy these two\ninequalities represent the allowable numbers of 120-pound packages and 100-pound packages the helicopter can transport. To maximize the\nnumber of 120-pound packages, a, in the helicopter, the number of 100-pound packages, b, in the helicopter needs to be minimized. Expressing b\nin terms of a in the second inequality yields b > 10 — @, so the minimum value of b is equal to 10 — @. Substituting 10 — @ for b in the first\ninequality results in 120+ 100(10 — a) < 1,100. Using the distributive property to rewrite this inequality yields\n120a+1,000—100a <1,100,0r20a+ 1,000 < 1,100. Subtracting 1,000 from both sides of this inequality yields 20a < 100.\nDividing both sides of this inequality by 20 results in @ < 5. This means that the maximum number of 120-pound packages that the helicopter\ncan carry per trip is 5.\nChoices A, B, and D are incorrect and may result from incorrectly creating or solving the system of inequalities.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-744ee7d7",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 212,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "y\n60:\n\nI I IO\n\nHN He) A\n\nI I A\n\nI A\n\nNe) I I\n\nlI A\n\nI I I\n\nel I\n\nI I I\n\nI\n\nx\n15 10 5 0 5 10 15\n\nThe shaded region shown in the graph represents all the solutions to which inequality?",
    "options": [
      {
        "letter": "A",
        "text": "z <36"
      },
      {
        "letter": "B",
        "text": "z > 36"
      },
      {
        "letter": "C",
        "text": "y<36"
      },
      {
        "letter": "D",
        "text": "y>36"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y>36",
    "explanation": "Choice D is correct. The equation for the line representing the boundary of the shaded region can be written in the form yy = b, where (0, b) is the\ny-intercept of the line in the xy-plane. For the graph shown in the xy-plane, the boundary line passes through the points (—15, 36) and (0, 36).\nThus, the equation of the boundary line is y = 36. Since the shaded region represents all the points on and above this boundary line, it follows\nthat the graph represents all the solutions to the inequalityy > 36.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-187f74bc",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 213,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "y\n2\nCEE]\nILL,\nslelalzo[ [2046s\nHH pH\nCTE]\nHH\nCEE ee\nBER EIRE\nEe EE]\nCET\nEe ]]\nHNRRREESNRNNNNNN\nThe shaded region shown represents the solutions to the inequality 7 < 60, where Tis a constant. What is the value of r?",
    "options": [
      {
        "letter": "A",
        "text": "15"
      },
      {
        "letter": "B",
        "text": "4"
      },
      {
        "letter": "C",
        "text": "—4"
      },
      {
        "letter": "D",
        "text": "—15"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "—15",
    "explanation": "Choice D is correct. The line representing the boundary of the shaded region shown is a horizontal line; therefore, the equation of the line can be\nwritten as = —4. Since the shaded region represents all of the points above this boundary line, it follows that the shaded region represents the\nsolutions to the inequality gy > —4. It's given that the shaded region shown represents the solutions to the inequality ry < 60, where ris a\nconstant. The inequality 3 > —4 can be rewritten in the form ry < 60 by multiplying both sides of the inequality by —15, which yields (—15)y\n< 60. Therefore, the value of ris —15.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-cfe67646",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 214,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The point 8, 2) in the xy-plane is a solution to which of the following systems of inequalities?",
    "options": [
      {
        "letter": "A",
        "text": "z>0 y>0"
      },
      {
        "letter": "B",
        "text": "x>0 y<0"
      },
      {
        "letter": "C",
        "text": "z<0 y>0"
      },
      {
        "letter": "D",
        "text": "x <0 y<0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "z>0 y>0",
    "explanation": "Choice A is correct. The given point, (8,2), is located in the first quadrant in the xy-plane. The system of inequalities in choice A represents all\nthe points in the first quadrant in the xy-plane. Therefore, (8, 2) is a solution to the system of inequalities in choice A.\nAlternate approach: Substituting 8 for z in the first inequality in choice A, & > 0, yields 8 > 0, which is true. Substituting 2 for gin the second\ninequality in choice A, > 0, yields 2 > 0, which is true. Since the coordinates of the point (8, 2) make the inequalities £ > 0 and y > 0 true,\nthe point (8, 2) is a solution to the system of inequalities consisting of # > 0 and y > 0.\nChoice Bis incorrect. This system of inequalities represents all the points in the fourth quadrant, not the first quadrant, in the xy-plane.\nChoice C is incorrect. This system of inequalities represents all the points in the second quadrant, not the first quadrant, in the xy-plane.\nChoice D is incorrect. This system of inequalities represents all the points in the third quadrant, not the first quadrant, in the xy-plane.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-45cfb9de",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 215,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "‘Adam's school is a 20-minute walk or a 5-minute bus ride away from his house. The bus runs once every 30 minutes, and the number of minutes,\nw, that Adam waits for the bus varies between 0 and 30. Which of the following inequalities gives the values of w for which it would be faster for\nAdam to walk to school?",
    "options": [
      {
        "letter": "A",
        "text": "wW—=5<20"
      },
      {
        "letter": "B",
        "text": "w—5>20"
      },
      {
        "letter": "C",
        "text": "w+5<20"
      },
      {
        "letter": "D",
        "text": "w+5>20"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "w+5>20",
    "explanation": "Choice D is correct. It is given that w is the number of minutes that Adam waits for the bus. The total time it takes Adam to get to school on a\nday he takes the bus is the sum of the minutes, w, he waits for the bus and the 5 minutes the bus ride takes; thus, this time, in minutes, is w + 5. It\nis also given that the total amount of time it takes Adam to get to school on a day that he walks is 20 minutes. Therefore, w + 5 > 20 gives the\nvalues of w for which it would be faster for Adam to walk to school.\nChoices A and B are incorrect because w - 5 is not the total length of time for Adam to wait for and then take the bus to school. Choice C is\nincorrect because the inequality should be true when walking 20 minutes is faster than the time it takes Adam to wait for and ride the bus, not\nless.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-9e5863bd",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 216,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a snowstorm in a certain town, the minimum rate of snowfall recorded was 0.6 inches per hour, and the maximum rate of snowfall recorded\nwas 1.8 inches per hour. Which inequality is true for all values of 8, where 8 represents a rate of snowfall, in inches per hour, recorded for this\nsnowstorm?",
    "options": [
      {
        "letter": "A",
        "text": "s>24"
      },
      {
        "letter": "B",
        "text": "s>18"
      },
      {
        "letter": "C",
        "text": "0<s<06"
      },
      {
        "letter": "D",
        "text": "06<s<18"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "06<s<18",
    "explanation": "Choice D is correct. It's given that for a snowstorm in a certain town, the minimum rate of snowfall recorded was 0.6 inches per hour, the\nmaximum rate of snowfall recorded was 1.8 inches per hour, and 8 represents a rate of snowfall, in inches per hour, recorded for this snowstorm.\nIt follows that the inequality 0.6 < 8 < 1.8 is true for all values of 8.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-842cec4d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 217,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "During a portion of a flight, a small airplane's cruising speed varied between 150 miles per hour and 170 miles per hour. Which inequality best\nrepresents this situation, where 8 is the cruising speed, in miles per hour, during this portion of the flight?",
    "options": [
      {
        "letter": "A",
        "text": "8<20"
      },
      {
        "letter": "B",
        "text": "s < 150"
      },
      {
        "letter": "C",
        "text": "s<170"
      },
      {
        "letter": "D",
        "text": "150 < 5 < 170"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "150 < 5 < 170",
    "explanation": "Choice D is correct. It's given that during a portion of a flight, a small airplane's cruising speed varied between 150 miles per hour and 170 miles\nper hour. It's also given that 8 represents the cruising speed, in miles per hour, during this portion of the flight. It follows that the airplane's\ncruising speed, in miles per hour, was at least 150, which means g > 150, and was at most 170, which means 8 < 170. Therefore, the inequality\nthat best represents this situation is 150 < 8 < 170.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-2c121b25",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 218,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Valentina bought two containers of beads. In the first container 30% of the beads are red, and in the second container 70% of the beads are red.\nTogether, the containers have at least 400 red beads. Which inequality shows this relationship, where x is the total number of beads in the first\ncontainer and y is the total number of beads in the second container?",
    "options": [
      {
        "letter": "A",
        "text": "03x+0.7y 2400"
      },
      {
        "letter": "B",
        "text": "0.7x+0.3y <400 X"
      },
      {
        "letter": "C",
        "text": "X+L <400 37"
      },
      {
        "letter": "D",
        "text": "30x +70y > 400"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "03x+0.7y 2400",
    "explanation": "Choice A is correct. It is given that x is the total number of beads in the first container and that 30% of those beads are red; therefore, the\nexpression 0.3x represents the number of red beads in the first container. It is given that y is the total number of beads in the second container\nand that 70% of those beads are red; therefore, the expression 0.7y represents the number of red beads in the second container. It is also given\nthat, together, the containers have at least 400 red beads, so the inequality that shows this relationship is 0.3x + 0.7y = 400.\nChoice B is incorrect because it represents the containers having a total of at most, rather than at least, 400 red beads. Choice C is incorrect and\nmay be the result of misunderstanding how to represent a percentage of beads in each container. Also, the inequality shows the containers\nhaving a combined total of at most, rather than at least, 400 red beads. Choice D is incorrect because the percentages were not converted to\ndecimals.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-00ec9102",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 219,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Leo goes to a packing store to buy containers and tape. Leo has $15. Each container costs $1.87 and each roll of tape costs $2.40. Which\ninequality represents the relationship between the number of containers, ¢, and the number of rolls of tape, £, Leo can buy?",
    "options": [
      {
        "letter": "A",
        "text": "1.87c+240t < 15"
      },
      {
        "letter": "B",
        "text": "1.87c+2.40t > 15"
      },
      {
        "letter": "C",
        "text": "2.40c+1.87t < 15"
      },
      {
        "letter": "D",
        "text": "2.40c+ 1.87t > 15"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "1.87c+240t < 15",
    "explanation": "Choice A is correct. It's given that each container costs $1.87 and c represents the number of containers. It follows that 1.87¢ represents the\ncost, in dollars, of ¢ containers. It's also given that each roll of tape costs $2.40 and ¢ represents the number of rolls of tape. It follows that 2.40%\nrepresents the cost, in dollars, of £ rolls of tape. Therefore, the total cost, in dollars, for ¢ containers and # rolls of tape is 1.87¢ + 2.40. It's given\nthat Leo has $15. It follows that the total cost, in dollars, must be less than or equal to 15. Therefore, the inequality 1.87c + 2.40t < 15\nrepresents this relationship.\nChoice B is incorrect. This inequality represents a relationship where Leo has at least $15, not at most $15.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c50ede6d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 220,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The total cost, in dollars, to rent a surfboard consists of a $25 service fee and a $10 per hour rental fee. A person rents a surfboard for ¢ hours\nand intends to spend a maximum of $75 to rent the surfboard. Which inequality represents this situation?",
    "options": [
      {
        "letter": "A",
        "text": "10t< 75"
      },
      {
        "letter": "B",
        "text": "10+25¢t< 75"
      },
      {
        "letter": "C",
        "text": "25¢< 75"
      },
      {
        "letter": "D",
        "text": "25+10t < 75"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "25+10t < 75",
    "explanation": "Choice D is correct. The cost of the rental fee depends on the number of hours the surfboard is rented. Multiplying £ hours by 10 dollars per hour\nyields a rental fee of 10¢ dollars. The total cost of the rental consists of the rental fee plus the 25 dollar service fee, which yields a total cost of\n25 + 10¢ dollars. Since the person intends to spend a maximum of 75 dollars to rent the surfboard, the total cost must be at most 75 dollars.\nTherefore, the inequality 25 + 10 < 75 represents this situation.\nChoice A is incorrect. This represents a situation where the rental fee, not the total cost, is at most 75 dollars.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-64c85440",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 221,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In North America, the standard width of a parking space is at least 7.5 feet and no more than 9.0 feet. A restaurant owner recently resurfaced the\nrestaurant's parking lot and wants to determine the number of parking spaces, n, in the parking lot that could be placed perpendicular to a curb\nthat is 135 feet long, based on the standard width of a parking space. Which of the following describes all the possible values of n ?",
    "options": [
      {
        "letter": "A",
        "text": "18<n<135"
      },
      {
        "letter": "B",
        "text": "75<n<9"
      },
      {
        "letter": "C",
        "text": "15<n<135"
      },
      {
        "letter": "D",
        "text": "15<n<18"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "15<n<18",
    "explanation": "Choice D is correct. Placing the parking spaces with the minimum width of 7.5 feet gives the maximum possible number of parking spaces.\n135\nThus, the maximum number that can be placed perpendicular to a 135-foot-long curb is 75 = 18. Placing the parking spaces with the\nmaximum width of 9 feet gives the minimum number of parking spaces. Thus, the minimum number that can be placed perpendicular to a 135-\n135 oo ) } } }\nfoot-long curb is 9 = 15. Therefore, if n is the number of parking spaces in the lot, the range of possible values fornis 15 <n < 18.\nChoices A and C are incorrect. These choices equate the length of the curb with the maximum possible number of parking spaces. Choice B is\nincorrect. This is the range of possible values for the width of a parking space instead of the range of possible values for the number of parking\nspaces.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-968e9e51",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 222,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "y<x\nys—x\nWhich of the following ordered pairs (x.y) is a solution to the system of inequalities above?",
    "options": [
      {
        "letter": "A",
        "text": "(10)"
      },
      {
        "letter": "B",
        "text": "(-1,0)"
      },
      {
        "letter": "C",
        "text": "(0,1)"
      },
      {
        "letter": "D",
        "text": "(0,—1)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0,—1)",
    "explanation": "Choice D is correct. The solutions to the given system of inequalities is the set of all ordered pairs (x,y) that satisfy both inequalities in the\nsystem. For an ordered pair to satisfy the inequality J < X, the value of the ordered pair's y-coordinate must be less than or equal to the value of\nthe ordered pair's x-coordinate. This is true of the ordered pair (0, - 1), because —1 < 0. To satisfy the inequality ¥ £ —X, the value of the\nordered pair's y-coordinate must be less than or equal to the value of the additive inverse of the ordered pair's x-coordinate. This is also true of\nthe ordered pair (0, —1). Because 0 is its own additive inverse, —1 < — (0) is the same as —1 < 0. Therefore, the ordered pair (0, —1)isa\nsolution to the given system of inequalities.\nChoice A is incorrect. This ordered pair satisfies only the inequality J < X in the given system, not both inequalities. Choice B incorrect. This\nordered pair satisfies only the inequality J < — X in the system, but not both inequalities. Choice C is incorrect. This ordered pair satisfies\nneither inequality.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-ee439cff",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 223,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "On a car trip, Rhett and Jessica each drove for part of the trip, and the total distance they drove was under 220 miles. Rhett drove at an average\nspeed of 35 miles per hour (mph), and Jessica drove at an average speed of 40 mph. Which of the following inequalities represents this\nsituation, where ris the number of hours Rhett drove and j is the number of hours Jessica drove?",
    "options": [
      {
        "letter": "A",
        "text": "35r + 405 > 220"
      },
      {
        "letter": "B",
        "text": "35r +405 < 220"
      },
      {
        "letter": "C",
        "text": "40r + 355 > 220"
      },
      {
        "letter": "D",
        "text": "40r + 355 < 220"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "35r +405 < 220",
    "explanation": "Choice B is correct. It's given that Rhett drove at an average speed of 35 miles per hour and that he drove for # hours. Multiplying 35 miles per\nhour by r hours yields 35 miles, or the distance that Rhett drove. It's also given that Jessica drove at an average speed of 40 miles per hour and\nthat she drove for J hours. Multiplying 40 miles per hour by j hours yields 403 miles, or the distance that Jessica drove. The total distance, in\nmiles, that Rhett and Jessica drove can be represented by the expression 35r + 403. It's given that the total distance they drove was under 220\nmiles. Therefore, the inequality 35r + 405 < 220 represents this situation.\nChoice A is incorrect. This inequality represents a situation in which the total distance Rhett and Jessica drove was over, rather than under, 220\nmiles.\nChoice C is incorrect. This inequality represents a situation in which Rhett drove at an average speed of 40, rather than 35, miles per hour,\nJessica drove at an average speed of 35, rather than 40, miles per hour, and the total distance they drove was over, rather than under, 220 miles.\nChoice D is incorrect. This inequality represents a situation in which Rhett drove at an average speed of 40, rather than 35, miles per hour, and\nJessica drove at an average speed of 35, rather than 40, miles per hour.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-ee2f611f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 224,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Alocal transit company sells a monthly pass for $95 that allows an unlimited number of trips of any length. Tickets for individual trips cost\n$1.50, $2.50, or $3.50, depending on the length of the trip. What is the minimum number of trips per month for which a monthly pass could cost\nless than purchasing individual tickets for trips?",
    "options": [],
    "correctAnswer": "28.",
    "correctValue": "28.",
    "explanation": "The correct answer is 28. The minimum number of individual trips for which the cost of the monthly pass is less than the cost of individual\ntickets can be found by assuming the maximum cost of the individual tickets, $3.50. If n tickets costing $3.50 each are purchased in one month,\nthe inequality 95 < 3.50n represents this situation. Dividing both sides of the inequality by 3.50 yields 27.14 < n, which is equivalent to n > 27.14.\nSince only a whole number of tickets can be purchased, it follows that 28 is the minimum number of trips.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-563407e5",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 225,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A bakery sells trays of cookies. Each tray contains at least 50 cookies but no more than 60. Which of the following could be the total number of\ncookies on 4 trays of cookies?",
    "options": [
      {
        "letter": "A",
        "text": "165"
      },
      {
        "letter": "B",
        "text": "205"
      },
      {
        "letter": "C",
        "text": "245"
      },
      {
        "letter": "D",
        "text": "285"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "205",
    "explanation": "Choice Bis correct. If each tray contains the least number of cookies possible, 50 cookies, then the least number of cookies possible on 4 trays\nis 50 x 4 = 200 cookies. If each tray contains the greatest number of cookies possible, 60 cookies, then the greatest number of cookies possible\non 4 trays is 60 x 4 = 240 cookies. If the least number of cookies on 4 trays is 200 and the greatest number of cookies is 240, then 205 could be\nthe total number of cookies on these 4 trays of cookies because 200 < 205 < 240.\nChoices A, C, and D are incorrect. The least number of cookies on 4 trays is 200 cookies, and the greatest number of cookies on 4 trays is 240\ncookies. The choices 165, 245, and 285 are each either less than 200 or greater than 240; therefore, they cannot represent the total number of\ncookies on 4 trays.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-541bef2f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 226,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "y<z+7\ny>—-2z—1\n\nWhich point (z,9) is a solution to the given system of inequalities in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "(—14,0)"
      },
      {
        "letter": "B",
        "text": "(0,—14)"
      },
      {
        "letter": "C",
        "text": "(0,14)"
      },
      {
        "letter": "D",
        "text": "(14,0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(14,0)",
    "explanation": "Choice D is correct. A point (=z, y) is a solution to a system of inequalities in the xy-plane if substituting the x-coordinate and the y-coordinate of\nthe point for and y, respectively, in each inequality makes both of the inequalities true. Substituting the x-coordinate and the y-coordinate of\nchoice D, 14 and 0, for & and g, respectively, in the first inequality in the given system, y < + 7, yields 0 < 14+ 7, or 0 < 21, which is true.\nSubstituting 14 for z and 0 for yin the second inequality in the given system, y > —2z — 1, yields 0 > —2(14) — 1, or 0 > —29, which is true.\nTherefore, the point (14, 0) is a solution to the given system of inequalities in the xy-plane.\nChoice A is incorrect. Substituting —14 for & and 0 for yin the inequality y < z + 7 yields 0 < —14 + 7, or 0 < —7, which is not true.\nChoice B is incorrect. Substituting O for & and —14 for in the inequality y > —2& — 1 yields —14 > —2(0) — 1, or —14 > —1, which is not\ntrue.\nChoice C is incorrect. Substituting 0 for z and 14 for g in the inequality y < & + 7 yields 14 < 04 7, or 14 < 7, which is not true.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-dd875c97",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 227,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A truck can haul a maximum weight of 5,630 pounds. During one trip, the truck will be used to haul 20 small crates and some large crates. The small crates have a mean weight of 45 pounds, and the large crates have a mean weight of 120 pounds. What is the maximum number of large crates that can be hauled on this trip?",
    "options": [
      {
        "letter": "A",
        "text": "25z + 62y < 5,440"
      },
      {
        "letter": "B",
        "text": "25z + 62y > 5,440"
      },
      {
        "letter": "C",
        "text": "62z + 25y < 5,630"
      },
      {
        "letter": "D",
        "text": "62z + 25y > 5,630"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "25z + 62y < 5,440",
    "explanation": "Choice Ais correct. It's given that a truck can haul a maximum of 5,630 pounds. It's also given that during one trip, the truck will be used to haul\na190-pound piece of equipment as well as several crates. It follows that the truck can haul at most 5,630 — 190, or 5,440, pounds of crates.\nSince represents the number of 25-pound crates, the expression 252 represents the weight of the 25-pound crates. Since represents the\nnumber of 62-pound crates, 62 represents the weight of the 62-pound crates. Therefore, 252 + 62y represents the total weight of the crates\nthe truck can haul. Since the truck can haul at most 5,440 pounds of crates, the total weight of the crates must be less than or equal to 5,440\npounds, or 25x + 62y < 5,440.\nChoice B is incorrect. This represents the possible combinations of the number of 25-pound crates, &, and the number of 62-pound crates, ¥, the\ntruck can haul during one trip if it can haul a minimum, not a maximum, of 5,630 pounds.\nChoice C is incorrect. This represents the possible combinations of the number of 62-pound crates, «, and the number of 25-pound crates, , the\ntruck can haul during one trip if only crates are being hauled.\nChoice D is incorrect. This represents the possible combinations of the number of 62-pound crates, z, and the number of 25-pound crates, , the\ntruck can haul during one trip if it can haul a minimum, not a maximum, weight of 5,630 pounds and only crates are being hauled.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-30b1e186",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 228,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the xy-plane, which of the following does NOT contain any points that are part of the solution set to 5 — 7y > 35?",
    "options": [
      {
        "letter": "A",
        "text": "The x-axis"
      },
      {
        "letter": "B",
        "text": "The region where £ > 0 andy > 0"
      },
      {
        "letter": "C",
        "text": "The region where z < 0 andy < 0"
      },
      {
        "letter": "D",
        "text": "The region where z < 0 andy > 0"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "The region where z < 0 andy > 0",
    "explanation": "Choice D is correct. It's given that the solution set consists of points in the xy-plane where 5z — 7y > 35, which can also be written as 5z + (\n—Ty) > 35. If (z,9) is a point in the region where z < 0 and > 0, then x is a negative number and y is a positive number. If z is a negative\nnumber, then the value of 52 is a negative number. If y is a positive number, then the value of —7y is a negative number. It follows that the\nexpression 5z + (Ty) is the sum of two negative numbers and is therefore negative. If the value of 5 + (Ty) is negative, then the value of\n5z + (—Ty) cannot be greater than 35. Thus, the region where z < 0 and > 0 does not contain any points that are part of the solution set to\nb5z — Ty > 35.\nChoice A is incorrect. The x-axis contains the point (10, 0), which is part of the solution set to 5z — Ty > 35, since 5(10) — 7(0) > 35, or 50\n> 35, is true.\nChoice B is incorrect. The region where z > 0 and g > 0 contains the point (10, 1), which is part of the solution set to 5z — Ty > 35, since\n5(10) — 7(1) > 35, or 43 > 35, is true.\nChoice C is incorrect. The region where z < 0 and ¢ < 0 contains the point (—1,—10), which is part of the solution set to 5z — Ty > 35, since\n5(—1)— 7(—10) > 35, or 65 > 35, is true.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4a090a46",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 229,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Julissa needs at least 100 hours of flight time to get her private pilot certification. If Julissa already has 86 hours of flight time, what is the\nminimum number of additional hours of flight time Julissa needs to get her private pilot certification?",
    "options": [
      {
        "letter": "A",
        "text": "14"
      },
      {
        "letter": "B",
        "text": "76"
      },
      {
        "letter": "C",
        "text": "86"
      },
      {
        "letter": "D",
        "text": "186"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "14",
    "explanation": "Choice A is correct. It's given that Julissa already has 86 hours of flight time. Let Z represent the number of additional hours of flight time\nJulissa needs to get her private pilot certification. After completing & hours of flight time, Julissa will have completed a total of 86 + & hours of\nflight time. It's given that Julissa needs at least 100 hours of flight time to get her private pilot certification. Therefore, 86 + z > 100.\nSubtracting 86 from both sides of this inequality yields & > 14. Thus, 14 is the minimum number of additional hours of flight time Julissa needs\nto get her private pilot certification.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the number of hours of flight time Julissa already has, rather than the minimum number of additional hours of flight\ntime Julissa needs.\nChoice D is incorrect. This is the number of hours of flight time Julissa will have if she completes 100 more hours of flight time, rather than the\nminimum number of additional hours of flight time Julissa needs.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-6c71f3ec",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 230,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A salesperson's total earnings consist of a base salary of z dollars per year, plus commission earnings of 11% of the total sales the salesperson\nmakes during the year. This year, the salesperson has a goal for the total earnings to be at least 3 times and at most 4 times the base salary.\nWhich of the following inequalities represents all possible values of total sales 8, in dollars, the salesperson can make this year in order to meet\nthat goal?",
    "options": [
      {
        "letter": "A",
        "text": "22<s<3z 2 3"
      },
      {
        "letter": "B",
        "text": "o? <8< gi?"
      },
      {
        "letter": "C",
        "text": "3z<s<dz 3 4"
      },
      {
        "letter": "D",
        "text": "g <s< aa"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "o? <8< gi?",
    "explanation": "Choice B is correct. It's given that a salespersons total earnings consist of a base salary of Z dollars per year plus commission earnings of 11%\nof the total sales the salesperson makes during the year. If the salesperson makes 8 dollars in total sales this year, the salesperson'’s total\nearnings can be represented by the expression + 0.118. It's also given that the salesperson has a goal for the total earnings to be at least 3\ntimes and at most 4 times the base salary, which can be represented by the expressions 3x and 4z, respectively. Therefore, this situation can be\nrepresented by the inequality 3z < + 0.118 < 4g. Subtracting z from each part of this inequality yields 22 < 0.11s < 3z. Dividing each\npart of this inequality by 0.11 yields Ped <s< oir Therefore, the inequality aT <s< oT represents all possible values of total\nsales 8, in dollars, the salesperson can make this year in order to meet their goal.\nChoice A is incorrect. This inequality represents a situation in which the total sales, rather than the total earnings, are at least 2 times and at\nmost 3 times, rather than at least 3 times and at most 4 times, the base salary.\nChoice C is incorrect. This inequality represents a situation in which the total sales, rather than the total earnings, are at least 3 times and at\nmost 4 times the base salary.\nChoice D is incorrect. This inequality represents a situation in which the total earnings are at least 4 times and at most 5 times, rather than at\nleast 3 times and at most 4 times, the base salary.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-d914abec",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 231,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "To complete a landscaping project, Adam charges a fee of $20.00 for his equipment and $9.50 per hour spent working on the project. To\ncomplete this same landscaping project, Caroline charges a fee of $17.00 for her equipment and $10.00 per hour spent working on the project.\nIf represents the number of hours spent working on the landscaping project, what are all the values of & for which Caroline's total charge is\ngreater than Adam's total charge?",
    "options": [
      {
        "letter": "A",
        "text": "5<z<6"
      },
      {
        "letter": "B",
        "text": "6<z<7"
      },
      {
        "letter": "C",
        "text": "z<b"
      },
      {
        "letter": "D",
        "text": "z>6"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "z>6",
    "explanation": "Choice D is correct. It's given that Adam charges a fee of $20.00 for his equipment and $9.50 per hour spent working on the project. For z hours\nspent working on the project, it follows that Adam's total charge, in dollars, is 20.00 + 9.50. It's also given that Caroline charges a fee of\n$17.00 for her equipment and $10.00 per hour spent working on the project. For & hours spent working on the project, it follows that Caroline's\ntotal charge, in dollars, is 17.00 + 10.00z. Therefore, if represents the number of hours spent working on the landscaping project, then\nCaroline's total charge is greater than Adam's total charge if 17.00 + 10.00z > 20.00 + 9.50z, or 17 + 10 > 20 + 9.52. Subtracting 9.52\nfrom both sides of this inequality yields 17 + 0.52 > 20. Subtracting 17 from both sides of this inequality yields 0.52 > 3. Dividing both sides\nof this inequality by 0.5 yields z > 6.\nChoice A is incorrect. For example, if = 5, then Caroline's total charge, in dollars, would be 17.00 + 10.00(5), or 67, and Adam's total charge,\nin dollars, would be 20.00 + 9.50(5), or 67.50. Since Caroline's total charge would be less than Adam's total charge, 5 can't be a possible value\nof x.\nChoice B is incorrect. For example, if z = 6, then Caroline's total charge, in dollars, would be 17.00 + 10.00(6), or 77, and Adam's total charge,\nin dollars, would be 20.00 + 9.50(6), or 77. Since Caroline's total charge would be equal to Adam's total charge, 6 can't be a possible value of z.\nChoice C is incorrect. For example, if = 4, then Caroline's total charge, in dollars, would be 17.00 + 10.00(4), or 57, and Adam's total charge,\nin dollars, would be 20.00 + 9.50(4), or 58. Since Caroline's total charge would be less than Adam's total charge, 4 can't be a possible value of\nEA",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-68f2cbaf",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 232,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Ty set a goal to walk at least 24 kilometers every day to prepare for a multiday hike. On a certain day, Ty plans to walk at an average speed of 4\nkilometers per hour. What is the minimum number of hours Ty must walk on that day to fulfill the daily goal?",
    "options": [
      {
        "letter": "A",
        "text": "d"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "20"
      },
      {
        "letter": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "Choice B is correct. It's given that Ty plans to walk at an average speed of 4 kilometers per hour. The number of kilometers Ty will walk is\ndetermined by the expression 4s, where g is the number of hours Ty walks. The given goal of at least 24 kilometers means that the inequality 4s\n> 24 represents the situation. Dividing both sides of this inequality by 4 gives 8 > 6 , which corresponds to a minimum of 6 hours Ty must\nwalk.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4047cfa7",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 233,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a literature class, a student's essay needs to have no more than 5,000 words. If a student's essay already has 3,026 words, what is the\nmaximum number of additional words the student can include in the essay?",
    "options": [
      {
        "letter": "A",
        "text": "1,974"
      },
      {
        "letter": "B",
        "text": "3,026"
      },
      {
        "letter": "C",
        "text": "5,000"
      },
      {
        "letter": "D",
        "text": "8,026"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "1,974",
    "explanation": "Choice A is correct. It's given that a student's essay needs to have no more than 5,000 words. It's also given that the student's essay already has\n3,026 words. Let z represent the number of additional words the student includes in the essay. After including z additional words, the essay will\nhave a total of 3,026 + & words. Since the essay needs to have no more than 5,000 words, it follows that 3,026 + z < 5,000. Subtracting\n3,026 from both sides of this inequality yields z < 1,974. Thus, the maximum number of additional words the student can include in the essay\nis1,974.\nChoice B is incorrect. This is the number of words already in the student's essay, rather than the maximum number of additional words the\nstudent can include.\nChoice C is incorrect. This is the total number of words the essay can contain, rather than the maximum number of additional words the student\ncan include.\nChoice D is incorrect. This is the number of words the essay would contain if the student added 5,000 more words, rather than the maximum\nnumber of additional words the student can include.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1a621af4",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 234,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A number z is at most 2 less than 3 times the value of y. If the value of y is —4, what is the greatest possible value of ?",
    "options": [],
    "correctAnswer": "-14",
    "correctValue": "-14",
    "explanation": "The correct answer is —14. It's given that a number is at most 2 less than 3 times the value of y. Therefore, z is less than or equal to 2 less\nthan 3 times the value of y. The expression 3y represents 3 times the value of 7. The expression 3y — 2 represents 2 less than 3 times the value\nof y. Therefore, & is less than or equal to 3y — 2. This can be shown by the inequality  < 3y — 2. Substituting —4 for in this inequality yields\n < 3(—4) — 2 or, z < —14. Therefore, if the value of y is —4, the greatest possible value of & is —14.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-df32b09c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 235,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Tom scored 85, 78, and 98 on his first three exams in history class. Solving which inequality gives the score, G, on Tom's fourth exam that will\nresult in a mean score on all four exams of at least 90 ?",
    "options": [
      {
        "letter": "A",
        "text": "90—(85+78+98)<4G"
      },
      {
        "letter": "B",
        "text": "4G+85+78+98>360 G+85+78+98"
      },
      {
        "letter": "C",
        "text": "(6+85+78+98) >90 4 5+78+98"
      },
      {
        "letter": "D",
        "text": "85+78+98) >90-4G 4"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(6+85+78+98) >90 4 5+78+98",
    "explanation": "Co G+85+78+98 . §\nChoice C is correct. The mean of the four scores (G, 85, 78, and 98) can be expressed as 2 The inequality that expresses\n\ni» . G+85+78+98\n\nthe condition that the mean score is at least 90 can therefore be written as EE >90.\nChoice A is incorrect. The sum of the scores (G, 85, 78, and 98) isn't divided by 4 to express the mean. Choice B is incorrect and may be the result\nof an algebraic error when multiplying both sides of the inequality by 4. Choice D is incorrect because it doesn't include G in the mean with the\nother three scores.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-86f7483f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 236,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "During spring migration, a dragonfly traveled a minimum of 1,510 miles and a maximum of 4,130 miles between stopover locations. Which\ninequality represents this situation, where d is a possible distance, in miles, this dragonfly traveled between stopover locations during spring\nmigration?",
    "options": [
      {
        "letter": "A",
        "text": "d<1,510"
      },
      {
        "letter": "B",
        "text": "1,510 <d < 4,130"
      },
      {
        "letter": "C",
        "text": "d>4,130"
      },
      {
        "letter": "D",
        "text": "4,130 < d < 5,640"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1,510 <d < 4,130",
    "explanation": "Choice B is correct. It's given that during spring migration, a dragonfly traveled a minimum of 1,510 miles and a maximum of 4,130 miles\nbetween stopover locations. It's also given that d represents a possible distance, in miles, this dragonfly traveled between stopover locations. It\nfollows that the inequality 1,510 < d < 4,130 represents this situation.\nChoice A is incorrect. This inequality represents a situation in which a dragonfly traveled a maximum of 1,510 miles between stopover locations.\nChoice C is incorrect. This inequality represents a situation in which a dragonfly traveled a minimum of 4,130 miles between stopover locations.\nChoice D is incorrect. This inequality represents a situation in which a dragonfly traveled a minimum of 4,310 miles and a maximum of 5,640\nmiles between stopover locations.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-bf5f80c6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 237,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "y<—4z+4\n\nWhich point (z, g) is a solution to the given inequality in the zy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "(—4.0)"
      },
      {
        "letter": "B",
        "text": "(0,5)"
      },
      {
        "letter": "C",
        "text": "c.)"
      },
      {
        "letter": "D",
        "text": "(2-1)"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(—4.0)",
    "explanation": "Choice D is correct. For a point (, ) to be a solution to the given inequality in the xy-plane, the value of the points y-coordinate must be less\nthan the value of —4z + 4, where & is the value of the x-coordinate of the point. This is true of the point (—4, 0) because 0 < —4(—4) + 4, or\n0 < 20. Therefore, the point (—4, 0) is a solution to the given inequality.\nChoices A, B, and C are incorrect. None of these points are a solution to the given inequality because each point's y-coordinate is greater than the\nvalue of —4z + 4 for the point's x-coordinate.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-80da233d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 238,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A certain elephant weighs 200 pounds at birth and gains more than 2 but less than 3 pounds per day during its first year. Which of the following\ninequalities represents all possible weights w, in pounds, for the elephant 365 days after birth?",
    "options": [
      {
        "letter": "A",
        "text": "400 <w <600"
      },
      {
        "letter": "B",
        "text": "565 <w <930"
      },
      {
        "letter": "C",
        "text": "730<w<1,095"
      },
      {
        "letter": "D",
        "text": "930 <w<1295"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "930 <w<1295",
    "explanation": "Choice D is correct. It's given that the elephant weighs 200 pounds at birth and gains more than 2 pounds but less than 3 pounds per day during\nits first year. The inequality 200 + 2d < w < 200 + 3d represents this situation, where d is the number of days after birth. Substituting 365\nfor d in the inequality gives 200 +2(365) < w < 200 +3(365),0r 930 < w < 1,295.\nChoice A is incorrect and may result from solving the inequality 200(2) < w < 200(3). Choice B is incorrect and may result from solving the\ninequality for a weight range of more than 1 pound but less than 2 pounds: 200 + 1(365) < w < 200 + 2(365). Choice C is incorrect and\nmay result from calculating the possible weight gained by the elephant during the first year without adding the 200 pounds the elephant weighed\nat birth.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b78cd5df",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 239,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "An event planner is planning a party. It costs the event planner a onetime fee of $35 to rent the venue and $10.25 per attendee. The event\nplanner has a budget of $300. What is the greatest number of attendees possible without exceeding the budget?",
    "options": [],
    "correctAnswer": "25",
    "correctValue": "25",
    "explanation": "The correct answer is 25. The total cost of the party is found by adding the onetime fee of the venue to the cost per attendee times the number\nof attendees. Let Z be the number of attendees. The expression 35 + 10.25 thus represents the total cost of the party. It's given that the\nbudget is $300, so this situation can be represented by the inequality 35 + 10.25 < 300. Subtracting 35 from both sides of this inequality\ngives 10.252 < 265. Dividing both sides of this inequality by 10.25 results in approximately  < 25.854. Since the question is stated in terms\nof attendees, rounding 25.854 down to the greatest whole number gives the greatest number of attendees possible, which is 25.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-72a5fd28",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 240,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a party, 50 dinner rolls are needed. Dinner rolls are sold in packages of 12. What is the minimum number of packages that should be bought\nfor the party?",
    "options": [],
    "correctAnswer": "5",
    "correctValue": "5",
    "explanation": "The correct answer is 5. Let p represent the number of packages of dinner rolls that should be bought for the party. It's given that dinner rolls are\nsold in packages of 12. Therefore, 12p represents the number of dinner rolls that should be bought for the party. It's also given that 50 dinner\nrolls are needed; therefore, 12p > 50. Dividing both sides of this inequality by 12 yields p > , or approximately p > 4.17. Since the number\nof packages of dinner rolls must be a whole number, the minimum number of packages that should be bought for the party is 5.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b31c3117",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 241,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "H=120p +60\nThe Karvonen formula above shows the relationship between Alice's target heart rate H, in beats per minute (bpm), and the intensity level p of\ndifferent activities. When p = 0, Alice has a resting heart rate. When p = 1, Alice has her maximum heart rate. It is recommended that p be\nbetween 0.5 and 0.85 for Alice when she trains. Which of the following inequalities describes Alice's target training heart rate?",
    "options": [
      {
        "letter": "A",
        "text": "120<H<162"
      },
      {
        "letter": "B",
        "text": "102<H<120"
      },
      {
        "letter": "C",
        "text": "60<H<162"
      },
      {
        "letter": "D",
        "text": "60<H<102"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "120<H<162",
    "explanation": "Choice A is correct. When Alice trains, it's recommended that p be between 0.5 and 0.85. Therefore, her target training heart rate is represented\nby the values of H corresponding to 0.5 < p < 0.85. when p = 0.5, H = 120(0.5) +60, or H = 120. when p = 0.85,\nH =120(0.85) +60, or H = 162. Therefore, the inequality that describes Alice's target training heart rate is 120 < H < 162.\nChoice B is incorrect. This inequality describes Alice's target heart rate for 0.35 < p< 0.5. Choice Cis incorrect. This inequality describes her\ntarget heart rate for 0 < p < 0.85. Choice D is incorrect. This inequality describes her target heart rate for 0 < p < 0.35.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-ee7b1de1",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 242,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A small business owner budgets $2,200 to purchase candles. The owner must purchase a minimum of 200 candles to maintain the discounted\npricing. If the owner pays $4.90 per candle to purchase small candles and $11.60 per candle to purchase large candles, what is the maximum\nnumber of large candles the owner can purchase to stay within the budget and maintain the discounted pricing?",
    "options": [],
    "correctAnswer": "182",
    "correctValue": "182",
    "explanation": "The correct answer is 182. Let 8 represent the number of small candles the owner can purchase, and let £ represent the number of large candles\nthe owner can purchase. It's given that the owner pays $4.90 per candle to purchase small candles and $11.60 per candle to purchase large\ncandles. Therefore, the owner pays 4.908 dollars for g small candles and 11.60 dollars for £ large candles, which means the owner pays a\ntotal of 4.90s + 11.60¢ dollars to purchase candles. It's given that the owner budgets $2,200 to purchase candles. Therefore, 4.90s + 11.607\n< 2,200. It's also given that the owner must purchase a minimum of 200 candles. Therefore, 8 + # > 200. The inequalities 4.90s + 11.60¢\n< 2,200 and 8+ # > 200 can be combined into one compound inequality by rewriting the second inequality so that its left-hand side is\nequivalent to the left-hand side of the first inequality. Subtracting # from both sides of the inequality 8 + # > 200 yields 8 > 200 — #.\nMultiplying both sides of this inequality by 4.90 yields 4.903 > 4.90(200 — #), or 4.90s > 980 — 4.907. Adding 11.607 to both sides of this\ninequality yields 4.908 + 11.60¢ > 980 — 4.907 + 11.607, or 4.90s + 11.60# > 980 + 6.70¢. This inequality can be combined with the\ninequality 4.90s + 11.60¢ < 2,200, which yields the compound inequality 980 + 6.70¢ < 4.90s + 11.60¢ < 2,200. It follows that 980\n+ 6.707 < 2,200. Subtracting 980 from both sides of this inequality yields 6.70¢ < 2,200. Dividing both sides of this inequality by 6.70 yields\napproximately # < 182.09. Since the number of large candles the owner purchases must be a whole number, the maximum number of large\ncandles the owner can purchase is the largest whole number less than 182.09, which is 182.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c17d9ba9",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 243,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A number z is at most 17 less than 5 times the value of g. If the value of y is 3, what is the greatest possible value of z?",
    "options": [],
    "correctAnswer": "-2",
    "correctValue": "-2",
    "explanation": "The correct answer is —2. It's given that a number z is at most 17 less than 5 times the value of y, or & < 5y — 17. Substituting 3 for yin this\ninequality yields  < 5(3) — 17, or z < —2. Thus, if the value of y is 3, the greatest possible value of z is —2.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-55ea82f3",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 244,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A team hosting an event to raise money for new uniforms plans to sell at least 140 tickets before this event and at least 220 tickets during this\nevent to raise a total of at least $5,820 from all tickets sold. The price of a ticket during this event is $3 less than the price of a ticket before this\nevent. Which inequality represents this situation, where & is the price, in dollars, of a ticket sold during this event?",
    "options": [
      {
        "letter": "A",
        "text": "140(z + 3) + 220 < 5,820"
      },
      {
        "letter": "B",
        "text": "140(z + 3) + 220z > 5,820"
      },
      {
        "letter": "C",
        "text": "140(z — 3) + 220z < 5,820"
      },
      {
        "letter": "D",
        "text": "140(z — 3) + 220z > 5,820"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "140(z + 3) + 220z > 5,820",
    "explanation": "Choice B is correct. It's given that a team plans to sell at least 140 tickets before an event and at least 220 tickets during the event to raise a\ntotal of at least $5,820 from all tickets sold. It's also given that the price of a ticket during the event is $3 less than the price of a ticket before\nthe event and that & represents the price, in dollars, of a ticket sold during the event. It follows that z + 3 represents the price, in dollars, of a\nticket sold before the event. The expression 140(z + 3) represents the planned revenue, in dollars, from the tickets sold before the event, and\nthe expression 220% represents the planned revenue, in dollars, from the tickets sold during the event. Thus, the expression 140(z + 3) + 220z\nrepresents the planned revenue, in dollars, from all tickets sold. Since the team plans to raise a total of at least $5,820 from all tickets sold, the\ntotal revenue must be at least $5,820. Therefore, the inequality 140(z + 3) + 220z > 5,820 represents this situation.\nChoice A is incorrect. This inequality represents a situation in which the team raises a total of at most $5,820 from all tickets sold.\nChoice C is incorrect. This inequality represents a situation in which the price of a ticket before the event is $3 less, rather than $3 more, than the\nprice of a ticket during the event and the team raises a total of at most $5,820 from all tickets sold.\nChoice D is incorrect. This inequality represents a situation in which the price of a ticket before the event is $3 less, rather than $3 more, than the\nprice of a ticket during the event.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e006209c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 245,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A geologist needs to collect at least 67 samples of lava from a volcano. If the geologist has already collected 63 samples from the volcano, what\nis the minimum number of additional samples the geologist needs to collect?",
    "options": [
      {
        "letter": "A",
        "text": "130"
      },
      {
        "letter": "B",
        "text": "63"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "0"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "4",
    "explanation": "Choice C is correct. It's given that the geologist has already collected 63 samples from the volcano. Let & represent the number of additional\nsamples the geologist needs to collect. After collecting Z additional samples, the geologist will have collected a total of 63 + = samples. It's\ngiven that the geologist needs to collect at least 67 samples. Therefore, 63 + & > 67. Subtracting 63 from each side of this inequality yields the\ninequality Z > 4. Thus, the geologist needs to collect a minimum of 4 additional samples.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect. This is the number of samples the geologist has already collected, rather than the minimum number of additional samples\nthe geologist needs to collect.\nChoice D is incorrect. If the geologist collects 0 additional samples, the geologist will have collected a total of 63 samples, which is less than 67\nsamples.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-5bf5136d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 246,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. If a triangle\nhas side lengths of 6 and 12, which inequality represents the possible lengths, Z, of the third side of the triangle?",
    "options": [
      {
        "letter": "A",
        "text": "z<18"
      },
      {
        "letter": "B",
        "text": "z>18"
      },
      {
        "letter": "C",
        "text": "6<z<18"
      },
      {
        "letter": "D",
        "text": "x <6orz>18"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "6<z<18",
    "explanation": "Choice C is correct. It's given that a triangle has side lengths of 6 and 12, and & represents the length of the third side of the triangle. It's also\ngiven that the triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side.\nTherefore, the inequalities 6 + 2 > 12,6 + 12 > x, and 12 + z > 6 represent all possible values of z. Subtracting 6 from both sides of the\ninequality 6 + = > 12 yields £ > 12 — 6, or > 6. Adding 6 and 12 in the inequality 6 + 12 > x yields 18 > z, or z < 18. Subtracting 12\nfrom both sides of the inequality 12 + z > 6 yields z > 6 — 12, or z > —6. Since all x-values that satisfy the inequality > 6 also satisfy the\ninequality & > —8, it follows that the inequalities > 6 and  < 18 represent the possible values of Z. Therefore, the inequality 6 < z < 18\nrepresents the possible lengths, &, of the third side of the triangle.\nChoice A is incorrect. This inequality gives the upper bound for z but does not include its lower bound.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-f2bbd43d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 247,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "y>14\n4r+y<18\n\nThe point (=, 53) is a solution to the system of inequalities in the xy-plane. Which of the following could be the value of £?",
    "options": [
      {
        "letter": "A",
        "text": "—9"
      },
      {
        "letter": "B",
        "text": "—5"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "—9",
    "explanation": "Choice A is correct. It's given that the point (, 53) is a solution to the given system of inequalities in the xy-plane. This means that the\ncoordinates of the point, when substituted for the variables 2 and g, make both of the inequalities in the system true. Substituting 53 for gin the\ninequality y > 14 yields 53 > 14, which is true. Substituting 53 for in the inequality 42 + y < 18 yields 4z + 53 < 18. Subtracting 53 from\nboth sides of this inequality yields 4 < —35. Dividing both sides of this inequality by 4 yields £ < —8.75. Therefore, & must be a value less\nthan —8.75. Of the given choices, only —9 is less than —8.75.\nChoice B is incorrect. Substituting —5 for z and 53 for y in the inequality 4 + y < 18 yields 4(—5) + 53 < 18, or 33 < 18, which is not true.\nChoice C is incorrect. Substituting 5 for z and 53 for y in the inequality 4z + y < 18 yields 4(5) + 53 < 18, or 73 < 18, which is not true.\nChoice D is incorrect. Substituting 9 for & and 53 for yin the inequality 4% + y < 18 yields 4(9) + 53 < 18, or 89 < 18, which is not true.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e8f9e117",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 248,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "I= Vv\nR\nThe formula above is Ohm's law for an electric circuit with current |, in amperes, potential difference V, in volts, and resistance R, in ohms. A\ncircuit has a resistance of 500 ohms, and its potential difference will be generated by n six-volt batteries that produce a total potential difference\nof 677 volts. If the circuit is to have a current of no more than 0.25 ampere, what is the greatest number, n, of six-volt batteries that can be used?",
    "options": [],
    "correctAnswer": "20.",
    "correctValue": "20.",
    "explanation": "The correct answer is 20. For the given circuit, the resistance R is 500 ohms, and the total potential difference V generated by n batteries is 617\nvolts. It's also given that the circuit is to have a current of no more than 0.25 ampere, which can be expressed as | < (0.25. Since Ohm's law\nvo. FE 6n } }\nsays that | = r the given values for V and R can be substituted for | in this inequality, which yields 500 < 0.25. Multiplying both sides of\nthis inequality by 500 yields 672 < 125, and dividing both sides of this inequality by 6 yields 77 < 20.833. Since the number of batteries must\nbe a whole number less than 20.833, the greatest number of batteries that can be used in this circuit is 20.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-915463e0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 249,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Normal body temperature for an adult is between 97.8 °F and 99°F, inclusive. If Kevin, an adult male, has a body temperature that is\nconsidered to be normal, which of the following could be his body temperature?",
    "options": [
      {
        "letter": "A",
        "text": "96.7°F"
      },
      {
        "letter": "B",
        "text": "97.6°F"
      },
      {
        "letter": "C",
        "text": "97.9°F"
      },
      {
        "letter": "D",
        "text": "99.7°F"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "97.9°F",
    "explanation": "Choice C is correct. Normal body temperature must be greater than or equal to 97.8°F but less than or equal to 99°F. Of the given choices, 97.9°F\nis the only temperature that fits these restrictions.\nChoices A and B are incorrect. These temperatures are less than 97.8°F, so they don't fit the given restrictions. Choice D is incorrect. This\ntemperature is greater than 99°F, so it doesn't fit the given restrictions.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-89541f9b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 250,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Which of the following ordered pairs (x, y) satisfies the inequality 5x —3y <4 ?\n\n1,1)\n\n22,5)\n\n3.(3,2)",
    "options": [
      {
        "letter": "A",
        "text": "lonly"
      },
      {
        "letter": "B",
        "text": "ll only"
      },
      {
        "letter": "C",
        "text": "land Il only"
      },
      {
        "letter": "D",
        "text": "land Ill only"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "land Il only",
    "explanation": "Choice C is correct. Substituting (1,1) into the inequality gives 5(1) —3(1) < 4, or 2 < 4, which is a true statement. Substituting (2,5) into\nthe inequality gives 5(2) — 3(5) < 4, or —5 < 4, which is a true statement. Substituting (3,2) into the inequality gives 5(3) —3(2) < 4, or\n9 < 4, which is not a true statement. Therefore, [¢] 1)and (2,5) are the only ordered pairs shown that satisfy the given inequality.\nChoice A is incorrect because the ordered pair (2,5) also satisfies the inequality. Choice B is incorrect because the ordered pair [¢ 1) also\nsatisfies the inequality. Choice D is incorrect because the ordered pair (32) does not satisfy the inequality.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0ef4a7b6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 251,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A particular botanist classifies a species of plant as tall if its typical height when fully grown is more than 100 centimeters. Each of the following\ninequalities represents the possible heights h, in centimeters, for a specific plant species when fully grown. Which inequality represents the\npossible heights h, in centimeters, for a tall plant species?",
    "options": [
      {
        "letter": "A",
        "text": "106 < h < 158"
      },
      {
        "letter": "B",
        "text": "80 < h< 100"
      },
      {
        "letter": "C",
        "text": "42<h<87"
      },
      {
        "letter": "D",
        "text": "17<h<85"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "106 < h < 158",
    "explanation": "Choice A is correct. It's given that a particular botanist classifies a species of plant as tall if its typical height when fully grown is more than 100\ncentimeters. The inequality 106 < h < 158 represents possible heights h, in centimeters, for a plant species when fully grown where h is\nbetween 106 and 158 centimeters. Since all values of hk in this inequality are greater than 100 centimeters, this inequality represents the\npossible heights for a tall plant species.\nChoice B is incorrect. This inequality represents possible heights A, in centimeters, for a plant species when fully grown where h is between 80\nand 100 centimeters, not more than 100 centimeters.\nChoice C is incorrect. This inequality represents possible heights h, in centimeters, for a plant species when fully grown where h is between 42\nand 87 centimeters, not more than 100 centimeters.\nChoice D is incorrect. This inequality represents possible heights hk, in centimeters, for a plant species when fully grown where h is between 17\nand 85 centimeters, not more than 100 centimeters.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-6daf8d70",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 252,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A city employee will plant two types of bushes, azaleas and boxwoods, in a park. There will be no more than 164 total bushes planted, and the\nnumber of azaleas planted will be at most three times the number of boxwoods planted. Which of the following systems of inequalities best\nrepresents this situation, where @ is the number of azaleas that will be planted, and bis the number of boxwoods that will be planted?",
    "options": [
      {
        "letter": "A",
        "text": "a+b>164 3a>b"
      },
      {
        "letter": "B",
        "text": "a+b> 164 <3b"
      },
      {
        "letter": "C",
        "text": "a+b<164 3a>b"
      },
      {
        "letter": "D",
        "text": "a+b< 164 <3b"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "a+b< 164 <3b",
    "explanation": "Choice D is correct. It's given that a city employee will plant azaleas and boxwoods in a park, where a is the number of azaleas that will be\nplanted and b is the number of boxwoods that will be planted. It's also given that there will be no more than 164 total bushes planted, which can\nbe represented by the inequality a + b < 164. It's also given that the number of azaleas planted will be at most three times the number of\nboxwoods planted, which can be represented by the inequality @ < 3b. Therefore, the system of inequalities containinga + b< 164 and a\n< 3b best represents this situation.\nChoice A is incorrect. The inequality @ + b > 164 represents a situation where at least 164 total bushes will be planted, not that there will be no\nmore than 164 total bushes planted. Also, the inequality 3a > b represents a situation where the number of boxwoods that will be planted is at\nmost three times the number of azaleas that will be planted, not that the number of azaleas planted will be at most three times the number of\nboxwoods planted.\nChoice B is incorrect. The inequality a + b > 164 represents a situation where at least 164 total bushes will be planted, not that there will be no\nmore than 164 total bushes planted.\nChoice C is incorrect. The inequality 3a > b represents a situation where the number of boxwoods that will be planted is at most three times the\nnumber of azaleas that will be planted, not that the number of azaleas planted will be at most three times the number of boxwoods planted.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-84d0d07e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 253,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A clothing store is having a sale on shirts and pants. During the sale, the cost of each shirt is $15 and the cost of each pair of pants is $25. Geoff\ncan spend at most $120 at the store. If Geoff buys s shirts and p pairs of pants, which of the following must be true?",
    "options": [
      {
        "letter": "A",
        "text": "155 +25p <120"
      },
      {
        "letter": "B",
        "text": "155+25p > 120"
      },
      {
        "letter": "C",
        "text": "25s+15p <120"
      },
      {
        "letter": "D",
        "text": "255+15p = 120"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "155 +25p <120",
    "explanation": "Choice A is correct. Since the cost of each shirt is $15 and Geoff buys s shirts, the expression 158 represents the amount Geoff spends on\nshirts. Since the cost of each pair of pants is $25 and Geoff buys p pairs of pants, the expression 25p represents the amount Geoff spends on\npants. Therefore, the sum 158 +25p represents the total amount Geoff spends at the store. Since Geoff can spend at most $120 at the store,\nthe total amount he spends must be less than or equal to 120. Thus, 158 +25p < 120.\nChoice B is incorrect. This represents the situation in which Geoff spends at least, rather than at most, $120 at the store. Choice C is incorrect\nand may result from reversing the cost of a shirt and that of a pair of paints. Choice D is incorrect and may result from both reversing the cost of\na shirt and that of a pair of pants and from representing a situation in which Geoff spends at least, rather than at most, $120 at the store.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-34aca984",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 254,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The length of a rectangle is 50 inches and the width is z inches. The perimeter is at most 210 inches. Which inequality represents this situation?",
    "options": [
      {
        "letter": "A",
        "text": "22 +100 < 210"
      },
      {
        "letter": "B",
        "text": "2z +100 > 210"
      },
      {
        "letter": "C",
        "text": "2z +50 < 210"
      },
      {
        "letter": "D",
        "text": "2z + 50 > 210"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "22 +100 < 210",
    "explanation": "Choice A is correct. The perimeter of a rectangle is equal to the sum of 2 times its length and 2 times its width. It's given that the rectangles\nlength is 50 inches and the width is z inches. Therefore, the perimeter, in inches, is 2(50) + 2z, or 100 + 2z, which is equivalent to 2z + 100.\nIt's given that the perimeter is at most 210 inches; therefore, 2 + 100 < 210 represents this situation.\nChoice Bis incorrect. This inequality represents a situation where the perimeter is at least, rather than at most, 210 inches.\nChoice C is incorrect. This inequality represents a situation where 2 times the length, rather than the length, is 50 inches.\nChoice D is incorrect. This inequality represents a situation where 2 times the length, rather than the length, is 50 inches, and the perimeter is at\nleast, rather than at most, 210 inches.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-963da34c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 255,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A shipping service restricts the dimensions of the boxes it will ship for a certain type of service. The restriction states that for boxes shaped like\nrectangular prisms, the sum of the perimeter of the base of the box and the height of the box cannot exceed 130 inches. The perimeter of the\nbase is determined using the width and length of the box. If a box has a height of 60 inches and its length is 2.5 times the width, which inequality\nshows the allowable width x, in inches, of the box?",
    "options": [
      {
        "letter": "A",
        "text": "D<x<10 2"
      },
      {
        "letter": "B",
        "text": "O<x<11 3 1"
      },
      {
        "letter": "C",
        "text": "0<x<17 2"
      },
      {
        "letter": "D",
        "text": "0<x<20"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "D<x<10 2",
    "explanation": "Choice A is correct. If x is the width, in inches, of the box, then the length of the box is 2.5x inches. It follows that the perimeter of the base is\n2(2.5x +X), or 7x inches. The height of the box is given to be 60 inches. According to the restriction, the sum of the perimeter of the base and\nthe height of the box should not exceed 130 inches. Algebraically, this can be represented by 7x +60 < 130, or 7x < 70. Dividing both sides\nof the inequality by 7 gives X < 10. Since x represents the width of the box, x must also be a positive number. Therefore, the inequality\n0 < x < 10 represents all the allowable values of x that satisfy the given conditions.\nChoices B, C, and D are incorrect and may result from calculation errors or misreading the given information.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e8fd6d99",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 256,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Terry has a goal to collect at least 16 items per week for a donation drive. This week, Terry has collected 4 items. If z represents the additional\nnumber of items Terry needs to collect this week to meet the goal, which inequality represents this situation?",
    "options": [
      {
        "letter": "A",
        "text": "4—x<16"
      },
      {
        "letter": "B",
        "text": "4+z<16"
      },
      {
        "letter": "C",
        "text": "4—2>16"
      },
      {
        "letter": "D",
        "text": "4+z>16"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "4+z>16",
    "explanation": "Choice D is correct. It's given that this week, Terry has collected 4 items. It follows that the expression 4+ & represents the total number of\nitems Terry will have collected after collecting z additional items. It's also given that Terry's goal is to collect at least 16 items per week.\nTherefore, the inequality 4 4+ > 16 represents this situation.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect. This inequality represents a situation where the goal is to collect at most, not at least, 16 items per week.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-03503d49",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 257,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A business owner plans to purchase the same model of chair for each of the 81 employees. The total budget to spend on these chairs is\n$14,000, which includes a 7% sales tax. Which of the following is closest to the maximum possible price per chair, before sales tax, the\nbusiness owner could pay based on this budget?",
    "options": [
      {
        "letter": "A",
        "text": "$148.15"
      },
      {
        "letter": "B",
        "text": "$161.53"
      },
      {
        "letter": "C",
        "text": "c. $172.84"
      },
      {
        "letter": "D",
        "text": "$184.94"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "$161.53",
    "explanation": "Choice B is correct. It's given that a business owner plans to purchase 81 chairs. If p is the price per chair, the total price of purchasing 81 chairs\nis 81p. It's also given that 7% sales tax is included, which is equivalent to 81p multiplied by 1.07, or 81(1.07)p. Since the total budget is\n$14,000, the inequality representing the situation is given by 81(1.07)p < 14,000. Dividing both sides of this inequality by 81(1.07) and\nrounding the result to two decimal places gives p < 161.53. To not exceed the budget, the maximum possible price per chair is $161.53.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the maximum possible price per chair including sales tax, not the maximum possible price per chair before sales\ntax.\nChoice D is incorrect. This is the maximum possible price if the sales tax is added to the total budget, not the maximum possible price per chair\nbefore sales tax.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-fbd5483f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 258,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "In a set of four consecutive odd integers, where the integers are ordered from least to greatest, the first integer is represented by z. The product\nof 12 and the fourth odd integer is at most 26 less than the sum of the first and third odd integers. Which inequality represents this situation?",
    "options": [
      {
        "letter": "A",
        "text": "l12(z+6)<z+(z+4)—26"
      },
      {
        "letter": "B",
        "text": "12(x +6) > 26 — (zx + (z + 4))"
      },
      {
        "letter": "C",
        "text": "12(z+4)<z+ (x +3)—26"
      },
      {
        "letter": "D",
        "text": "12(z +4) > 26— (z+ (z + 3))"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "l12(z+6)<z+(z+4)—26",
    "explanation": "Choice A is correct. It's given that the four odd integers are consecutive, ordered from least to greatest, and that the first odd integer is\nrepresented by z. It follows that the second odd integer is represented by & + 2, the third odd integer is represented by + 4, and the fourth\nodd integer is represented by z + 6. Therefore, the product of 12 and the fourth odd integer is represented by 12(z + 6), and 26 less than the\nsum of the first and third odd integers is represented by & + (2 + 4) — 26. Since the product of 12 and the fourth odd integer is at most 26 less\nthan the sum of the first and third odd integers, it follows that 12(z + 6) < z + (z + 4) — 26.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-68c5c81a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 259,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "1llz+14y < 115\nAnthony will spend at most $115 to purchase Z small cheese pizzas and y large cheese pizzas for a team dinner. The given inequality represents\nthis situation. Which of the following is the best interpretation of 14y in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The amount, in dollars, Anthony will spend on each large cheese pizza"
      },
      {
        "letter": "B",
        "text": "The amount, in dollars, Anthony will spend on each small cheese pizza"
      },
      {
        "letter": "C",
        "text": "The total amount, in dollars, Anthony will spend on large cheese pizzas"
      },
      {
        "letter": "D",
        "text": "The total amount, in dollars, Anthony will spend on small cheese pizzas"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The total amount, in dollars, Anthony will spend on large cheese pizzas",
    "explanation": "Choice C is correct. It's given that Anthony will spend at most $115 to purchase & small cheese pizzas and y large cheese pizzas. In the\ninequality 112 + 14y < 115, y represents the number of large cheese pizzas that Anthony will purchase. This means the coefficient 14\nrepresents the amount, in dollars, Anthony will spend on each large cheese pizza. Therefore, the best interpretation of 14y in this context is the\ntotal amount, in dollars, Anthony will spend on large cheese pizzas.\nChoice A is incorrect. This is the best interpretation of 14, not 14y.\nChoice B is incorrect. This is the best interpretation of 11, not 14y.\nChoice D is incorrect. This is the best interpretation of 11z, not 14y.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b8e73b5b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 260,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Ken is working this summer as part of a crew on a farm. He earned $8 per hour for the first 10 hours he worked this week. Because of his\nperformance, his crew leader raised his salary to $10 per hour for the rest of the week. Ken saves 90% of his earnings from each week. What is\nthe least number of hours he must work the rest of the week to save at least $270 for the week?",
    "options": [
      {
        "letter": "A",
        "text": "38"
      },
      {
        "letter": "B",
        "text": "33"
      },
      {
        "letter": "C",
        "text": "22"
      },
      {
        "letter": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "22",
    "explanation": "Choice C is correct. Ken earned $8 per hour for the first 10 hours he worked, so he earned a total of $80 for the first 10 hours he worked. For the\nrest of the week, Ken was paid at the rate of $10 per hour. Let x be the number of hours he will work for the rest of the week. The total of Ken's\nearnings, in dollars, for the week will be 10x + 80. He saves 90% of his earnings each week, so this week he will save 0.9(10x + 80) dollars.\nThe inequality 0.9(1 Ox + 80) > 270 represents the condition that he will save at least $270 for the week. Factoring 10 out of the expression\n10x +80 gives 10(x +8). The product of 10 and 0.9 is 9, so the inequality can be rewritten as 9(x +8) > 270. Dividing both sides of this\ninequality by 9 yields X +8 > 30, so X = 22. Therefore, the least number of hours Ken must work the rest of the week to save at least $270 for\nthe week is 22.\nChoices A and B are incorrect because Ken can save $270 by working fewer hours than 38 or 33 for the rest of the week. Choice D is incorrect. If\nKen worked 16 hours for the rest of the week, his total earnings for the week will be $80+ $160 = $240, which is less than $270. Since he\nsaves only 90% of his earnings each week, he would save even less than $240 for the week.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-830120b0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 261,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "y>2x—1\n2x>5\nWhich of the following consists of the y-coordinates of all the points that satisfy the system of inequalities above?",
    "options": [
      {
        "letter": "A",
        "text": "y>6"
      },
      {
        "letter": "B",
        "text": "y>4"
      },
      {
        "letter": "C",
        "text": "y> 5 ’ 2"
      },
      {
        "letter": "D",
        "text": "y> 3 ) 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "y>4",
    "explanation": "Choice B is correct. Subtracting the same number from each side of an inequality gives an equivalent inequality. Hence, subtracting 1 from each\nside of the inequality 2X > 5 gives 2X — 1 > 4. So the given system of inequalities is equivalent to the system of inequalities > 2x — 1 and\n2x —1 > 4, which can be rewritten as yy > 2X — 1 > 4. Using the transitive property of inequalities, it follows that y > 4.\nChoice A is incorrect because there are points with a y-coordinate less than 6 that satisfy the given system of inequalities. For example, (35.5)\nsatisfies both inequalities. Choice C is incorrect. This may result from solving the inequality 2X > 5 for x, then replacing x with y. Choice D is\nincorrect because this inequality allows y-values that are not the y-coordinate of any point that satisfies both inequalities. For example, y = 2is\n\n3 3\ncontained in the set y > 7 however, if 2 is substituted into the first inequality for y, the result is X < 7 This cannot be true because the\nA 5\n\nsecond inequality gives X > 7",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-2869fe95",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 262,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a 3-week period in a town in Illinois, the lowest recorded temperature was 31 degrees Fahrenheit (°F) and the highest recorded temperature\nwas 67°F. Which inequality is true for any recorded temperature £, in °F, in this town for this 3-week period?",
    "options": [
      {
        "letter": "A",
        "text": "t>98"
      },
      {
        "letter": "B",
        "text": "t> 67"
      },
      {
        "letter": "C",
        "text": "31<t<67"
      },
      {
        "letter": "D",
        "text": "t<31"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "31<t<67",
    "explanation": "Choice C is correct. It's given that for a 3-week period in a town in Illinois, the lowest recorded temperature was 31°F and the highest recorded\ntemperature was 67°F. It follows that the inequality 31 < ¢ < 67 is true for any recorded temperature t, in °F, in this town for this 3-week\nperiod.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect and may result from conceptual errors.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e744499e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 263,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "An elementary school teacher is ordering x workbooks and y sets of flash cards for a math class. The teacher must order at least 20 items, but\nthe total cost of the order must not be over $80. If the workbooks cost $3 each and the flash cards cost $4 per set, which of the following\nsystems of inequalities models this situation?",
    "options": [
      {
        "letter": "A",
        "text": "x+y=20 3x+4y<80"
      },
      {
        "letter": "B",
        "text": "x+y=20 3x+4y>80"
      },
      {
        "letter": "C",
        "text": "c. 3x+4y<20 x+y =80"
      },
      {
        "letter": "D",
        "text": "x+y<20 3x+4y>80"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x+y=20 3x+4y<80",
    "explanation": "Choice A is correct. The total number of workbooks and sets of flash cards ordered is represented by x + y. Since the teacher must order at least\n20 items, it must be true that x + y > 20. Each workbook costs $3; therefore, 3x represents the cost, in dollars, of x workbooks. Each set of\nflashcards costs $4; therefore, 4y represents the cost, in dollars, of y sets of flashcards. It follows that the total cost for x workbooks and y sets\nof flashcards is 3x + 4y. Since the total cost of the order must not be over $80, it must also be true that 3x + 4y = 80. Of the choices given, these\ninequalities are shown only in choice A.\nChoice B is incorrect. The second inequality says that the total cost must be greater, not less than or equal to $80. Choice C incorrectly limits the\ncost by the minimum number of items and the number of items with the maximum cost. Choice D is incorrect. The first inequality incorrectly\nsays that at most 20 items must be ordered, and the second inequality says that the total cost of the order must be at least, not at most, $80.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-f01ef454",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 264,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A geologist estimates that the volume of a slab of granite is greater than 12.7 cubic feet but less than 15.7 cubic feet. The geologist also\nestimates that the slab of granite weighs 165 pounds per cubic foot of volume. Which inequality represents this situation, where Z represents\nthe estimated total weight, in pounds, of the slab of granite?",
    "options": [
      {
        "letter": "A",
        "text": "165 —15.7< x < 165—12.7"
      },
      {
        "letter": "B",
        "text": "165+ 12.7 < £ < 165+ 15.7"
      },
      {
        "letter": "C",
        "text": "165(12.7) < z < 165(15.7) 165 165"
      },
      {
        "letter": "D",
        "text": "157 <Z< fo7"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "165(12.7) < z < 165(15.7) 165 165",
    "explanation": "Choice C is correct. It's given that the estimated volume of the slab of granite is greater than 12.7 cubic feet but less than 15.7 cubic feet. It's\nalso given that the estimated weight per cubic foot of volume of that slab is 165 pounds. The estimated total weight of the slab of granite, in\npounds, can be calculated by multiplying the estimated volume by the estimated weight per cubic foot. Therefore, if the estimated volume of the\nslab of granite is 12.7 cubic feet, its estimated total weight is 165(12.7) pounds, and if the estimated volume of the slab of granite is 15.7 cubic\nfeet, its estimated total weight is 165(15.7) pounds. Since the estimated volume of the slab of granite is greater than 12.7 cubic feet but less\nthan 15.7 cubic feet, the estimated total weight Z, in pounds, must be greater than 165(12.7) pounds and less than 165(15.7) pounds. This\nsituation can be represented by the inequality 165(12.7) < z < 165(15.7).\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-74c98c82",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 265,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "An event planner is planning a party. It costs the event planner a onetime fee of $35 to rent the venue and $10.25 per attendee. The event\nplanner has a budget of $200. What is the greatest number of attendees possible without exceeding the budget?",
    "options": [],
    "correctAnswer": "16",
    "correctValue": "16",
    "explanation": "The correct answer is 16. The total cost of the party is found by adding the onetime fee of the venue to the cost per attendee times the number\nof attendees. Let Z be the number of attendees. The expression 35 + 10.25 thus represents the total cost of the party. It's given that the\nbudget is $200, so this situation can be represented by the inequality 85 + 10.252 < 200. The greatest number of attendees can be found by\nsolving this inequality for z. Subtracting 35 from both sides of this inequality gives 10.252 < 165. Dividing both sides of this inequality by\n10.25 results in approximately z < 16.098. Since the question is stated in terms of attendees, rounding z down to the nearest whole number,\n16, gives the greatest number of attendees possible.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e9ef0e6b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 266,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A model estimates that whales from the genus Eschrichtius travel 72 to 77 miles in the ocean each day during their migration. Based on this\nmodel, which inequality represents the estimated total number of miles, &, a whale from the genus Eschrichtius could travel in 16 days of its\nmigration?",
    "options": [
      {
        "letter": "A",
        "text": "T2+16<z<T77+16"
      },
      {
        "letter": "B",
        "text": "(72)(16) < z < (77)(16)"
      },
      {
        "letter": "C",
        "text": "72<164+2< 77"
      },
      {
        "letter": "D",
        "text": "72< 16x < 77"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(72)(16) < z < (77)(16)",
    "explanation": "Choice B is correct. It's given that the model estimates that whales from the genus Eschrichtius travel 72 to 77 miles in the ocean each day\nduring their migration. If one of these whales travels 72 miles each day for 16 days, then the whale travels 72(16) miles total. If one of these\nwhales travels 77 miles each day for 16 days, then the whale travels 77(16) miles total. Therefore, the model estimates that in 16 days of its\nmigration, a whale from the genus Eschrichtius could travel at least 72(16) and at most 77(16) miles total. Thus, the inequality (72)(16) <\n< (77)(16) represents the estimated total number of miles, z, a whale from the genus Eschrichtius could travel in 16 days of its migration\nChoice A is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-f02b4509",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 267,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "AA moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,600 pounds. What is the\nmaximum number of boxes this truck can tow in a trailer with a weight of 500 pounds if each box weighs 120 pounds?",
    "options": [
      {
        "letter": "A",
        "text": "34"
      },
      {
        "letter": "B",
        "text": "35"
      },
      {
        "letter": "C",
        "text": "38"
      },
      {
        "letter": "D",
        "text": "39"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "34",
    "explanation": "Choice A is correct. It's given that the truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,600\npounds. If the trailer has a weight of 500 pounds and each box weighs 120 pounds, the expression 500 + 120b, where b is the number of boxes,\ngives the combined weight of the trailer and the boxes. Since the combined weight must be no more than 4,600 pounds, the possible numbers\nof boxes the truck can tow are given by the inequality 500 + 1205 < 4,600. Subtracting 500 from both sides of this inequality yields 120b\n< 4,100. Dividing both sides of this inequality by 120 yields b < x5 or bis less than or equal to approximately 34.17. Since the number of\nboxes, b, must be a whole number, the maximum number of boxes the truck can tow is the greatest whole number less than 34.17, which is 34.\nChoice B is incorrect. Towing the trailer and 35 boxes would yield a combined weight of 4,700 pounds, which is greater than 4,600 pounds.\nChoice C is incorrect. Towing the trailer and 38 boxes would yield a combined weight of 5,060 pounds, which is greater than 4,600 pounds.\nChoice D is incorrect. Towing the trailer and 39 boxes would yield a combined weight of 5,180 pounds, which is greater than 4,600 pounds.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-74d0906a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 268,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A tow truck travels at a speed of at least 25 miles per hour but no more than 45 miles per hour for a section of a road. Which inequality\nrepresents this situation, where & is the speed of the tow truck, in miles per hour, on this section of the road?",
    "options": [
      {
        "letter": "A",
        "text": "z>25"
      },
      {
        "letter": "B",
        "text": "x>45"
      },
      {
        "letter": "C",
        "text": "25<z<45"
      },
      {
        "letter": "D",
        "text": "z<T70"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "25<z<45",
    "explanation": "Choice C is correct. It's given that a tow truck travels at a speed of at least 25 miles per hour but no more than 45 miles per hour. It's also given\nthat x represents the speed of the tow truck, in miles per hour. At least 25 miles per hour means z > 25, and no more than 45 miles per hour\nmeans ¢ < 45. Therefore, the inequality that represents this situation is 25 < & < 45.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-8f0c82e2",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 269,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The minimum value of z is 12 less than 6 times another number nn. Which inequality shows the possible values of z?",
    "options": [
      {
        "letter": "A",
        "text": "z<6n—12"
      },
      {
        "letter": "B",
        "text": "x > 6n—12"
      },
      {
        "letter": "C",
        "text": "z<12—6n"
      },
      {
        "letter": "D",
        "text": "z>12—6n"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x > 6n—12",
    "explanation": "Choice B is correct. It's given that the minimum value of Z is 12 less than 6 times another number ni. Therefore, the possible values of Z are all\ngreater than or equal to the value of 12 less than 6 times n. The value of 6 times mn is given by the expression 6n. The value of 12 less than 6n is\ngiven by the expression 6m — 12. Therefore, the possible values of z are all greater than or equal to 6n — 12. This can be shown by the\ninequality z > 6n— 12.\nChoice A is incorrect. This inequality shows the possible values of & if the maximum, not the minimum, value of & is 12 less than 6 times n.\nChoice C is incorrect. This inequality shows the possible values of Z if the maximum, not the minimum, value of Z is 6 times 7 less than 12, not\n12 less than 6 times n.\nChoice D is incorrect. This inequality shows the possible values of z if the minimum value of z is 6 times n less than 12, not 12 less than 6\ntimes n.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-208626df",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 270,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "20+ 2w< 27\n\nA rectangle has length # and width w. The inequality gives the possible values of £ and w for which the perimeter of this rectangle is less than\nor equal to 27. Which statement is the best interpretation of (#, w) = (8, 3) in this context?",
    "options": [
      {
        "letter": "A",
        "text": "If the rectangle has length 3 and width 8, its perimeter is less than or equal to 27."
      },
      {
        "letter": "B",
        "text": "If the rectangle has length 8 and width 3, its perimeter is less than or equal to 27."
      },
      {
        "letter": "C",
        "text": "If the rectangle has length 3 and width 8, its perimeter is greater than or equal to 27."
      },
      {
        "letter": "D",
        "text": "If the rectangle has length 8 and width 3, its perimeter is greater than or equal to 27."
      }
    ],
    "correctAnswer": "B",
    "correctValue": "If the rectangle has length 8 and width 3, its perimeter is less than or equal to 27.",
    "explanation": "Choice B is correct. It's given that a rectangle has length # and width w, and the inequality 2¢ + 2w < 27 gives the possible values of # and w\nfor which the perimeter of this rectangle is less than or equal to 27. To determine the best interpretation of (#, w) = (8, 3) in this context, the\nvalues can be substituted in the given inequality. Substituting 8 for # and 3 for w in this inequality yields 2(8) + 2(3) < 27, which is equivalent\n1016 + 6 < 27, or 22 < 27. Since this inequality is true, if the rectangle has length 8 and width 3, its perimeter is less than or equal to 27.\nChoice A is incorrect. The interpretation of (£, w) = (8, 3) implies that the rectangle has length 8 and width 3, not length 3 and width 8.\nChoice C is incorrect. The interpretation of (#, w) = (8, 3) implies that the rectangle has length 8 and width 3, not length 3 and width 8.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b75f7812",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 271,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Maria plans to rent a boat. The boat rental costs $60 per hour, and she will also have to pay for a water safety course that costs $10. Maria wants\nto spend no more than $280 for the rental and the course. If the boat rental is available only for a whole number of hours, what is the maximum\nnumber of hours for which Maria can rent the boat?",
    "options": [],
    "correctAnswer": "4.",
    "correctValue": "4.",
    "explanation": "The correct answer is 4. The equation 60h + 10 < 280, where h is the number of hours the boat has been rented, can be written to represent\nthe situation. Subtracting 10 from both sides and then dividing by 60 yields / < 4.5. Since the boat can be rented only for whole numbers of\nhours, the maximum number of hours for which Maria can rent the boat is 4.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b64e2c7f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 272,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Monarch butterflies can fly only with a body temperature of at least 55.0 degrees Fahrenheit (°F). If a monarch butterfly's body temperature\nis 51.3°F, what is the minimum increase needed in its body temperature, in °F, so that it can fly?",
    "options": [
      {
        "letter": "A",
        "text": "l3"
      },
      {
        "letter": "B",
        "text": "3.7"
      },
      {
        "letter": "C",
        "text": "5.0"
      },
      {
        "letter": "D",
        "text": "6.3"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "3.7",
    "explanation": "Choice B is correct. It's given that monarch butterflies can fly only with a body temperature of at least 55.0 degrees Fahrenheit (°F). Let\nrepresent the minimum increase needed in the monarch butterfly's body temperature to fly. If the monarch butterfly's body temperature is 51.3\n°F, the inequality 51.3 + = > 55.0 represents this situation. Subtracting 51.3 from both sides of this inequality yields z > 3.7. Therefore, if the\nmonarch butterfly's body temperature is 51.3°F, the minimum increase needed in its body temperature, in °F, so that it can fly is 3.7.\nChoice A is incorrect. This is the minimum increase needed in body temperature if the monarch butterfly's body temperature is 53.7°F, not 51.3\n°F.\nChoice C is incorrect. This is the minimum increase needed in body temperature if the monarch butterfly's body temperature is 50.0°F, not 51.3\n°F.\nChoice D is incorrect. This is the minimum increase needed in body temperature if the monarch butterfly's body temperature is 48.7°F, not 51.3\n°F.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-7d6928bd",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 273,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A cleaning service that cleans both offices and homes can clean at most 14 places per day. Which inequality represents this situation, where f is\nthe number of offices and k is the number of homes?",
    "options": [
      {
        "letter": "A",
        "text": "f+h<14"
      },
      {
        "letter": "B",
        "text": "f+h2>14"
      },
      {
        "letter": "C",
        "text": "f-h<14"
      },
      {
        "letter": "D",
        "text": "f—h2>14"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "f+h<14",
    "explanation": "Choice A is correct. It's given that the cleaning service cleans both offices and homes, where f is the number of offices and k is the number of\nhomes the cleaning service can clean per day. Therefore, the expression f + h represents the number of places the cleaning service can clean\nper day. It's also given that the cleaning service can clean at most 14 places per day. Since f + h represents the number of places the cleaning\nservice can clean per day and the service can clean at most 14 places per day, it follows that the inequality f+ h < 14 represents this situation.\nChoice B is incorrect. This inequality represents a cleaning service that cleans at least 14 places per day.\nChoice C is incorrect. This inequality represents a cleaning service that cleans at most 14 more offices than homes per day.\nChoice D is incorrect. This inequality represents a cleaning service that cleans at least 14 more offices than homes per day.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-948087f2",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 274,
    "topicId": "m-alg-5",
    "topic": "Linear inequalities in one or two variables",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "y<3x+1\n\nx—=y>1\n\nWhich of the following ordered pairs (x, y) satisfies the system of inequalities above?",
    "options": [
      {
        "letter": "A",
        "text": "(=2,-1)"
      },
      {
        "letter": "B",
        "text": "(-13)"
      },
      {
        "letter": "C",
        "text": "(15)"
      },
      {
        "letter": "D",
        "text": "2,-1)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "2,-1)",
    "explanation": "Choice D is correct. Any point (x, y) that is a solution to the given system of inequalities must satisfy both inequalities in the system. The second\ninequality in the system can be rewritten as X > y + 1. Of the given answer choices, only choice D satisfies this inequality, because inequality\n2 > —1+1isatrue statement. The point 2, - 1) also satisfies the first inequality.\nAlternate approach: Substituting (2, — 1) into the first inequality gives —1 < 3(2) +1, or —1 < 7, which is a true statement. Substituting\n2, - 1) into the second inequality gives 2 —(=1 ) >1,0r3 > 1, which is a true statement. Therefore, since 2, - 1) satisfies both\ninequalities, it is a solution to the system.\nChoice A is incorrect because substituting -2 for x and ~1 for y in the first inequality gives —1 < 3(—2) +1, or —1 < —5, which is false.\nChoice B is incorrect because substituting ~1 for x and 3 for y in the first inequality gives 3 < 3(—1) +1, or 3 < — 2, which is false. Choice C\nis incorrect because substituting 1 for x and 5 for y in the first inequality gives 5 < 3(1) +1, or 5 < 4, which is false.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  }
];
