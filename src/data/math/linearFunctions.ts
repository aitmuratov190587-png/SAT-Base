// SAT Math Question Bank: Linear functions
import { MathQuestion } from './types';

export const LINEAR_FUNCTIONS_QUESTIONS: MathQuestion[] = [
  {
    "id": "m-alg-3-001",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 1,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = 7x + 10?",
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
        "text": "7"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "7",
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is 7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-002",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 2,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line 3x - y = -9 and passes through the point (5, 4). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = -3x - 11"
      },
      {
        "letter": "B",
        "text": "y = 3x + 11"
      },
      {
        "letter": "C",
        "text": "y = 4x - 11"
      },
      {
        "letter": "D",
        "text": "y = 3x - 11"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y = 3x - 11",
    "explanation": "1) Find the slope of the given line: -y = -3x + -9 => y = 3x - -9. The slope is 3.\n2) Parallel lines have the same slope, so line K also has slope 3.\n3) Use the point (5, 4) to find b: 4 = 3(5) + b => 4 = 15 + b => b = -11.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-003",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 3,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (-4, 10) and (-1, 14)?",
    "options": [
      {
        "letter": "A",
        "text": "4/3"
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
    "correctValue": "4/3",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (14 - 10) / (-1 - -4) = 4 / 3. Simplified, m = 4/3.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-004",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 4,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 3x + 4. Line P is perpendicular to line L and passes through the point (6, -9). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -7)"
      },
      {
        "letter": "B",
        "text": "(-7, 0)"
      },
      {
        "letter": "C",
        "text": "(0, 7)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, -7)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 3, P has slope -1/3.\n2) Use y = mx + b for Line P: -9 = (-1/3)(6) + b => -9 = -2 + b => b = -7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-005",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 5,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 46x + 252. If the company wants to keep its total daily cost exactly at $942, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "17 items"
      },
      {
        "letter": "B",
        "text": "15 items"
      },
      {
        "letter": "C",
        "text": "13 items"
      },
      {
        "letter": "D",
        "text": "19 items"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "15 items",
    "explanation": "Set the cost function equal to the target cost: 46x + 252 = 942.\nSubtract 252 from both sides: 46x = 690.\nDivide by 46: x = 15.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-006",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 6,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 4x + 3. Line P is perpendicular to line L and passes through the point (-4, 10). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(9, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -9)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 9)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 9)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 4, P has slope -1/4.\n2) Use y = mx + b for Line P: 10 = (-1/4)(-4) + b => 10 = 1 + b => b = 9.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-007",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 7,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -8x - 4, what is the value of f(2)?",
    "options": [
      {
        "letter": "A",
        "text": "20"
      },
      {
        "letter": "B",
        "text": "-22"
      },
      {
        "letter": "C",
        "text": "-17"
      },
      {
        "letter": "D",
        "text": "-20"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-20",
    "explanation": "Substitute x = 2 into the function: f(2) = -8(2) - 4 = -16 - 4 = -20.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-008",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 8,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -2x + 10. Line P is perpendicular to line L and passes through the point (-6, 0). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(3, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -3)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 3)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 3)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -2, P has slope -1/-2.\n2) Use y = mx + b for Line P: 0 = (-1/-2)(-6) + b => 0 = -3 + b => b = 3.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-009",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 9,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 4x + 4y = 24?",
    "options": [
      {
        "letter": "A",
        "text": "(6, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 6)"
      },
      {
        "letter": "C",
        "text": "(-6, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(6, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 4x + 4(0) = 24 => 4x = 24 => x = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-010",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 10,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 4x + 9. Line P is perpendicular to line L and passes through the point (-4, 4). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(3, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -3)"
      },
      {
        "letter": "C",
        "text": "(0, 3)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, 3)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 4, P has slope -1/4.\n2) Use y = mx + b for Line P: 4 = (-1/4)(-4) + b => 4 = 1 + b => b = 3.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-011",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 11,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -3x + 1. Line P is perpendicular to line L and passes through the point (-9, -9). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(-6, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -6)"
      },
      {
        "letter": "C",
        "text": "(0, 6)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, -6)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -3, P has slope -1/-3.\n2) Use y = mx + b for Line P: -9 = (-1/-3)(-9) + b => -9 = -3 + b => b = -6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-012",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 12,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 4x + 5. Line P is perpendicular to line L and passes through the point (-12, -10). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(-13, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -13)"
      },
      {
        "letter": "C",
        "text": "(0, 13)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, -13)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 4, P has slope -1/4.\n2) Use y = mx + b for Line P: -10 = (-1/4)(-12) + b => -10 = 3 + b => b = -13.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-013",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 13,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 5x + 5, what is the value of f(-1)?",
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
    "explanation": "Substitute x = -1 into the function: f(-1) = 5(-1) + 5 = -5 + 5 = 0.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-014",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 14,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 3x + 8. Line P is perpendicular to line L and passes through the point (9, -4). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -1)"
      },
      {
        "letter": "B",
        "text": "(-1, 0)"
      },
      {
        "letter": "C",
        "text": "(0, 1)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, -1)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 3, P has slope -1/3.\n2) Use y = mx + b for Line P: -4 = (-1/3)(9) + b => -4 = -3 + b => b = -1.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-015",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 15,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 5x - 4y = -30?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -6)"
      },
      {
        "letter": "B",
        "text": "(6, 0)"
      },
      {
        "letter": "C",
        "text": "(-6, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(-6, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 5x - 4(0) = -30 => 5x = -30 => x = -6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-016",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 16,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -4x - 8. Line P is perpendicular to line L and passes through the point (12, -2). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -5)"
      },
      {
        "letter": "B",
        "text": "(-5, 0)"
      },
      {
        "letter": "C",
        "text": "(0, 5)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, -5)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -4, P has slope -1/-4.\n2) Use y = mx + b for Line P: -2 = (-1/-4)(12) + b => -2 = 3 + b => b = -5.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-017",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 17,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 29x + 205. If the company wants to keep its total daily cost exactly at $350, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "5 items"
      },
      {
        "letter": "B",
        "text": "7 items"
      },
      {
        "letter": "C",
        "text": "3 items"
      },
      {
        "letter": "D",
        "text": "9 items"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "5 items",
    "explanation": "Set the cost function equal to the target cost: 29x + 205 = 350.\nSubtract 205 from both sides: 29x = 145.\nDivide by 29: x = 5.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-018",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 18,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -3x + 6. Line P is perpendicular to line L and passes through the point (3, 6). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(5, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 5)"
      },
      {
        "letter": "C",
        "text": "(0, -5)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 5)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -3, P has slope -1/-3.\n2) Use y = mx + b for Line P: 6 = (-1/-3)(3) + b => 6 = 1 + b => b = 5.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-019",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 19,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 3x + 3y = -6?",
    "options": [
      {
        "letter": "A",
        "text": "(-2, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 2)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, -2)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, -2)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 3(0) + 3y = -6 => 3y = -6 => y = -2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-020",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 20,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 4x - 4. Line P is perpendicular to line L and passes through the point (12, 10). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(13, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -13)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 13)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 13)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 4, P has slope -1/4.\n2) Use y = mx + b for Line P: 10 = (-1/4)(12) + b => 10 = -3 + b => b = 13.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-021",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 21,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (3, 4) and (7, 2)?",
    "options": [
      {
        "letter": "A",
        "text": "-1/2"
      },
      {
        "letter": "B",
        "text": "1"
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
    "correctAnswer": "A",
    "correctValue": "-1/2",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (2 - 4) / (7 - 3) = -2 / 4. Simplified, m = -1/2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-022",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 22,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 2x + 0. Line P is perpendicular to line L and passes through the point (-2, 5). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(4, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -4)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 4)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 4)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 2, P has slope -1/2.\n2) Use y = mx + b for Line P: 5 = (-1/2)(-2) + b => 5 = 1 + b => b = 4.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-023",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 23,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line 5x - y = -8 and passes through the point (-4, 0). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = 5x + 20"
      },
      {
        "letter": "B",
        "text": "y = -5x + 20"
      },
      {
        "letter": "C",
        "text": "y = 5x - 20"
      },
      {
        "letter": "D",
        "text": "y = 6x + 20"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "y = 5x + 20",
    "explanation": "1) Find the slope of the given line: -y = -5x + -8 => y = 5x - -8. The slope is 5.\n2) Parallel lines have the same slope, so line K also has slope 5.\n3) Use the point (-4, 0) to find b: 0 = 5(-4) + b => 0 = -20 + b => b = 20.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-024",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 24,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 50x + 222. If the company wants to keep its total daily cost exactly at $972, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "15 items"
      },
      {
        "letter": "B",
        "text": "17 items"
      },
      {
        "letter": "C",
        "text": "13 items"
      },
      {
        "letter": "D",
        "text": "19 items"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "15 items",
    "explanation": "Set the cost function equal to the target cost: 50x + 222 = 972.\nSubtract 222 from both sides: 50x = 750.\nDivide by 50: x = 15.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-025",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 25,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = 7x - 1?",
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
        "text": "9"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "7",
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is 7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-026",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 26,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 3x + 4. Line P is perpendicular to line L and passes through the point (6, 1). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(3, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -3)"
      },
      {
        "letter": "C",
        "text": "(0, 3)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, 3)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 3, P has slope -1/3.\n2) Use y = mx + b for Line P: 1 = (-1/3)(6) + b => 1 = -2 + b => b = 3.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-027",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 27,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 5x + 5y = -45?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -9)"
      },
      {
        "letter": "B",
        "text": "(9, 0)"
      },
      {
        "letter": "C",
        "text": "(-9, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(-9, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 5x + 5(0) = -45 => 5x = -45 => x = -9.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-028",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 28,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 19x + 185. If the company wants to keep its total daily cost exactly at $318, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "7 items"
      },
      {
        "letter": "B",
        "text": "9 items"
      },
      {
        "letter": "C",
        "text": "5 items"
      },
      {
        "letter": "D",
        "text": "11 items"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "7 items",
    "explanation": "Set the cost function equal to the target cost: 19x + 185 = 318.\nSubtract 185 from both sides: 19x = 133.\nDivide by 19: x = 7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-029",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 29,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 1x - 6. Line P is perpendicular to line L and passes through the point (2, -8). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -6)"
      },
      {
        "letter": "B",
        "text": "(-6, 0)"
      },
      {
        "letter": "C",
        "text": "(0, 6)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, -6)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 1, P has slope -1.\n2) Use y = mx + b for Line P: -8 = (-1)(2) + b => -8 = -2 + b => b = -6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-030",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 30,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 16x + 103. If the company wants to keep its total daily cost exactly at $247, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "11 items"
      },
      {
        "letter": "B",
        "text": "7 items"
      },
      {
        "letter": "C",
        "text": "9 items"
      },
      {
        "letter": "D",
        "text": "13 items"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "9 items",
    "explanation": "Set the cost function equal to the target cost: 16x + 103 = 247.\nSubtract 103 from both sides: 16x = 144.\nDivide by 16: x = 9.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-031",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 31,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 2x + 5y = 15?",
    "options": [
      {
        "letter": "A",
        "text": "(3, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -3)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 3)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 3)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 2(0) + 5y = 15 => 5y = 15 => y = 3.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-032",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 32,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -1x + 6. Line P is perpendicular to line L and passes through the point (2, -8). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(-10, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 10)"
      },
      {
        "letter": "C",
        "text": "(0, -10)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, -10)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -1, P has slope 1.\n2) Use y = mx + b for Line P: -8 = (1)(2) + b => -8 = 2 + b => b = -10.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-033",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 33,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (0, -4) and (2, -3)?",
    "options": [
      {
        "letter": "A",
        "text": "-1"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "1/2"
      },
      {
        "letter": "D",
        "text": "-2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "1/2",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (-3 - -4) / (2 - 0) = 1 / 2. Simplified, m = 1/2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-034",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 34,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -4x - 4. Line P is perpendicular to line L and passes through the point (-12, 10). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(13, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 13)"
      },
      {
        "letter": "C",
        "text": "(0, -13)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 13)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -4, P has slope -1/-4.\n2) Use y = mx + b for Line P: 10 = (-1/-4)(-12) + b => 10 = -3 + b => b = 13.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-035",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 35,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = 3x + 5. Line P is perpendicular to line L and passes through the point (-3, -6). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -7)"
      },
      {
        "letter": "B",
        "text": "(-7, 0)"
      },
      {
        "letter": "C",
        "text": "(0, 7)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, -7)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope 3, P has slope -1/3.\n2) Use y = mx + b for Line P: -6 = (-1/3)(-3) + b => -6 = 1 + b => b = -7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-036",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 36,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line -3x - y = 2 and passes through the point (-1, -2). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = -3x - 5"
      },
      {
        "letter": "B",
        "text": "y = 3x - 5"
      },
      {
        "letter": "C",
        "text": "y = -3x + 5"
      },
      {
        "letter": "D",
        "text": "y = -2x - 5"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "y = -3x - 5",
    "explanation": "1) Find the slope of the given line: -y = --3x + 2 => y = -3x - 2. The slope is -3.\n2) Parallel lines have the same slope, so line K also has slope -3.\n3) Use the point (-1, -2) to find b: -2 = -3(-1) + b => -2 = 3 + b => b = -5.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-037",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 37,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -3x - 10, what is the value of f(4)?",
    "options": [
      {
        "letter": "A",
        "text": "22"
      },
      {
        "letter": "B",
        "text": "-24"
      },
      {
        "letter": "C",
        "text": "-19"
      },
      {
        "letter": "D",
        "text": "-22"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-22",
    "explanation": "Substitute x = 4 into the function: f(4) = -3(4) - 10 = -12 - 10 = -22.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-038",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 38,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line L is defined by y = -4x - 5. Line P is perpendicular to line L and passes through the point (4, -6). What is the y-intercept of Line P?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -7)"
      },
      {
        "letter": "B",
        "text": "(-7, 0)"
      },
      {
        "letter": "C",
        "text": "(0, 7)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, -7)",
    "explanation": "1) Perpendicular lines have negative reciprocal slopes. Since L has slope -4, P has slope -1/-4.\n2) Use y = mx + b for Line P: -6 = (-1/-4)(4) + b => -6 = 1 + b => b = -7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-039",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 39,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of -2 and passes through the point (5, -2). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(8, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 8)"
      },
      {
        "letter": "C",
        "text": "(0, -8)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 8)",
    "explanation": "Use the equation y = mx + b. Substitute m = -2, x = 5, and y = -2: -2 = -2(5) + b => -2 = -10 + b => 8 = b => b = 8.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-040",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 40,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line -5x - y = 7 and passes through the point (5, -2). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = 5x + 23"
      },
      {
        "letter": "B",
        "text": "y = -5x - 23"
      },
      {
        "letter": "C",
        "text": "y = -5x + 23"
      },
      {
        "letter": "D",
        "text": "y = -4x + 23"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "y = -5x + 23",
    "explanation": "1) Find the slope of the given line: -y = --5x + 7 => y = -5x - 7. The slope is -5.\n2) Parallel lines have the same slope, so line K also has slope -5.\n3) Use the point (5, -2) to find b: -2 = -5(5) + b => -2 = -25 + b => b = 23.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-041",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 41,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line -4x - y = -2 and passes through the point (3, 4). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = 4x + 16"
      },
      {
        "letter": "B",
        "text": "y = -4x + 16"
      },
      {
        "letter": "C",
        "text": "y = -4x - 16"
      },
      {
        "letter": "D",
        "text": "y = -3x + 16"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "y = -4x + 16",
    "explanation": "1) Find the slope of the given line: -y = --4x + -2 => y = -4x - -2. The slope is -4.\n2) Parallel lines have the same slope, so line K also has slope -4.\n3) Use the point (3, 4) to find b: 4 = -4(3) + b => 4 = -12 + b => b = 16.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-042",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 42,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 10x + 361. If the company wants to keep its total daily cost exactly at $431, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "9 items"
      },
      {
        "letter": "B",
        "text": "5 items"
      },
      {
        "letter": "C",
        "text": "11 items"
      },
      {
        "letter": "D",
        "text": "7 items"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "7 items",
    "explanation": "Set the cost function equal to the target cost: 10x + 361 = 431.\nSubtract 361 from both sides: 10x = 70.\nDivide by 10: x = 7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-043",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 43,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 8x + 16, what is the value of f(1)?",
    "options": [
      {
        "letter": "A",
        "text": "-24"
      },
      {
        "letter": "B",
        "text": "24"
      },
      {
        "letter": "C",
        "text": "26"
      },
      {
        "letter": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "24",
    "explanation": "Substitute x = 1 into the function: f(1) = 8(1) + 16 = 8 + 16 = 24.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-044",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 44,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line 2x - y = -3 and passes through the point (5, 10). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = 2x + 0"
      },
      {
        "letter": "B",
        "text": "y = -2x + 0"
      },
      {
        "letter": "C",
        "text": "y = 2x - 0"
      },
      {
        "letter": "D",
        "text": "y = 3x + 0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "y = 2x + 0",
    "explanation": "1) Find the slope of the given line: -y = -2x + -3 => y = 2x - -3. The slope is 2.\n2) Parallel lines have the same slope, so line K also has slope 2.\n3) Use the point (5, 10) to find b: 10 = 2(5) + b => 10 = 10 + b => b = 0.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-045",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 45,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 5x - 5y = 50?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 10)"
      },
      {
        "letter": "B",
        "text": "(-10, 0)"
      },
      {
        "letter": "C",
        "text": "(10, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(10, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 5x - 5(0) = 50 => 5x = 50 => x = 10.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-046",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 46,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 35x + 313. If the company wants to keep its total daily cost exactly at $978, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "21 items"
      },
      {
        "letter": "B",
        "text": "17 items"
      },
      {
        "letter": "C",
        "text": "19 items"
      },
      {
        "letter": "D",
        "text": "23 items"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "19 items",
    "explanation": "Set the cost function equal to the target cost: 35x + 313 = 978.\nSubtract 313 from both sides: 35x = 665.\nDivide by 35: x = 19.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-047",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 47,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line -4x - y = -10 and passes through the point (-4, -3). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = 4x - 19"
      },
      {
        "letter": "B",
        "text": "y = -4x + 19"
      },
      {
        "letter": "C",
        "text": "y = -3x - 19"
      },
      {
        "letter": "D",
        "text": "y = -4x - 19"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y = -4x - 19",
    "explanation": "1) Find the slope of the given line: -y = --4x + -10 => y = -4x - -10. The slope is -4.\n2) Parallel lines have the same slope, so line K also has slope -4.\n3) Use the point (-4, -3) to find b: -3 = -4(-4) + b => -3 = 16 + b => b = -19.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-048",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 48,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 35x + 220. If the company wants to keep its total daily cost exactly at $745, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "17 items"
      },
      {
        "letter": "B",
        "text": "13 items"
      },
      {
        "letter": "C",
        "text": "19 items"
      },
      {
        "letter": "D",
        "text": "15 items"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "15 items",
    "explanation": "Set the cost function equal to the target cost: 35x + 220 = 745.\nSubtract 220 from both sides: 35x = 525.\nDivide by 35: x = 15.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-049",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 49,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = -14x - 15?",
    "options": [
      {
        "letter": "A",
        "text": "14"
      },
      {
        "letter": "B",
        "text": "-16"
      },
      {
        "letter": "C",
        "text": "-11"
      },
      {
        "letter": "D",
        "text": "-14"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-14",
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is -14.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-050",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 50,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 36x + 265. If the company wants to keep its total daily cost exactly at $949, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "21 items"
      },
      {
        "letter": "B",
        "text": "17 items"
      },
      {
        "letter": "C",
        "text": "23 items"
      },
      {
        "letter": "D",
        "text": "19 items"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "19 items",
    "explanation": "Set the cost function equal to the target cost: 36x + 265 = 949.\nSubtract 265 from both sides: 36x = 684.\nDivide by 36: x = 19.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-051",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 51,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of -1 and passes through the point (3, 8). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(11, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 11)"
      },
      {
        "letter": "C",
        "text": "(0, -11)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 11)",
    "explanation": "Use the equation y = mx + b. Substitute m = -1, x = 3, and y = 8: 8 = -1(3) + b => 8 = -3 + b => 11 = b => b = 11.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-052",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 52,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Line K is parallel to the line -4x - y = -5 and passes through the point (-5, -4). What is the equation of line K in y = mx + b form?",
    "options": [
      {
        "letter": "A",
        "text": "y = 4x - 24"
      },
      {
        "letter": "B",
        "text": "y = -4x - 24"
      },
      {
        "letter": "C",
        "text": "y = -4x + 24"
      },
      {
        "letter": "D",
        "text": "y = -3x - 24"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "y = -4x - 24",
    "explanation": "1) Find the slope of the given line: -y = --4x + -5 => y = -4x - -5. The slope is -4.\n2) Parallel lines have the same slope, so line K also has slope -4.\n3) Use the point (-5, -4) to find b: -4 = -4(-5) + b => -4 = 20 + b => b = -24.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-053",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 53,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard Word Problem",
    "prompt": "A company's total daily cost, C(x), in dollars, for producing x items is modeled by the linear function C(x) = 49x + 301. If the company wants to keep its total daily cost exactly at $693, how many items can it produce?",
    "options": [
      {
        "letter": "A",
        "text": "8 items"
      },
      {
        "letter": "B",
        "text": "10 items"
      },
      {
        "letter": "C",
        "text": "6 items"
      },
      {
        "letter": "D",
        "text": "12 items"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "8 items",
    "explanation": "Set the cost function equal to the target cost: 49x + 301 = 693.\nSubtract 301 from both sides: 49x = 392.\nDivide by 49: x = 8.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-054",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 54,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 5x - 9 and g(x) = -4x - 7. For what value of x does f(g(x)) = -4?",
    "options": [
      {
        "letter": "A",
        "text": "x = 2"
      },
      {
        "letter": "B",
        "text": "x = -2"
      },
      {
        "letter": "C",
        "text": "x = -4"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -2",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 5(-4x - 7) - 9\n2) Distribute and simplify:\n   f(g(x)) = -20x - 35 - 9 = -20x - 44\n3) Set the expression equal to -4 and solve for x:\n   -20x - 44 = -4\n   -20x = 40\n   x = -2.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-055",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 55,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = -11x - 10?",
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
        "text": "-13"
      },
      {
        "letter": "D",
        "text": "-8"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-11",
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is -11.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-056",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 56,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -3x - 15 and g(x) = 4x - 7. For what value of x does f(g(x)) = -6?",
    "options": [
      {
        "letter": "A",
        "text": "x = 1"
      },
      {
        "letter": "B",
        "text": "x = -1"
      },
      {
        "letter": "C",
        "text": "x = 3"
      },
      {
        "letter": "D",
        "text": "x = -3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = 1",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -3(4x - 7) - 15\n2) Distribute and simplify:\n   f(g(x)) = -12x + 21 - 15 = -12x + 6\n3) Set the expression equal to -6 and solve for x:\n   -12x + 6 = -6\n   -12x = -12\n   x = 1.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-057",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 57,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 4x + 5y = 8?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 2)"
      },
      {
        "letter": "B",
        "text": "(-2, 0)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(2, 0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(2, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 4x + 5(0) = 8 => 4x = 8 => x = 2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-058",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 58,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 2x + 6 and g(x) = 2x - 4. For what value of x does f(g(x)) = -6?",
    "options": [
      {
        "letter": "A",
        "text": "x = -1"
      },
      {
        "letter": "B",
        "text": "x = 1"
      },
      {
        "letter": "C",
        "text": "x = -3"
      },
      {
        "letter": "D",
        "text": "x = 3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -1",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 2(2x - 4) + 6\n2) Distribute and simplify:\n   f(g(x)) = 4x - 8 + 6 = 4x - 2\n3) Set the expression equal to -6 and solve for x:\n   4x - 2 = -6\n   4x = -4\n   x = -1.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-059",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 59,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 4x - 6 and g(x) = 2x - 10. For what value of x does f(g(x)) = 2?",
    "options": [
      {
        "letter": "A",
        "text": "x = 6"
      },
      {
        "letter": "B",
        "text": "x = -6"
      },
      {
        "letter": "C",
        "text": "x = 8"
      },
      {
        "letter": "D",
        "text": "x = 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = 6",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 4(2x - 10) - 6\n2) Distribute and simplify:\n   f(g(x)) = 8x - 40 - 6 = 8x - 46\n3) Set the expression equal to 2 and solve for x:\n   8x - 46 = 2\n   8x = 48\n   x = 6.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-060",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 60,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -5x - 4 and g(x) = 3x + 1. For what value of x does f(g(x)) = -54?",
    "options": [
      {
        "letter": "A",
        "text": "x = 3"
      },
      {
        "letter": "B",
        "text": "x = -3"
      },
      {
        "letter": "C",
        "text": "x = 5"
      },
      {
        "letter": "D",
        "text": "x = -1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = 3",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -5(3x + 1) - 4\n2) Distribute and simplify:\n   f(g(x)) = -15x - 5 - 4 = -15x - 9\n3) Set the expression equal to -54 and solve for x:\n   -15x - 9 = -54\n   -15x = -45\n   x = 3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-061",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 61,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 3x + 4y = -16?",
    "options": [
      {
        "letter": "A",
        "text": "(-4, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 4)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, -4)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, -4)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 3(0) + 4y = -16 => 4y = -16 => y = -4.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-062",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 62,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 3x + 13 and g(x) = -4x + 4. For what value of x does f(g(x)) = 97?",
    "options": [
      {
        "letter": "A",
        "text": "x = 6"
      },
      {
        "letter": "B",
        "text": "x = -8"
      },
      {
        "letter": "C",
        "text": "x = -6"
      },
      {
        "letter": "D",
        "text": "x = -2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x = -6",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 3(-4x + 4) + 13\n2) Distribute and simplify:\n   f(g(x)) = -12x + 12 + 13 = -12x + 25\n3) Set the expression equal to 97 and solve for x:\n   -12x + 25 = 97\n   -12x = 72\n   x = -6.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-063",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 63,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of 4 and passes through the point (0, 0). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "None of the above 0"
      },
      {
        "letter": "B",
        "text": "None of the above 1"
      },
      {
        "letter": "C",
        "text": "(0, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, 0)",
    "explanation": "Use the equation y = mx + b. Substitute m = 4, x = 0, and y = 0: 0 = 4(0) + b => 0 = 0 + b => 0 = b => b = 0.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-064",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 64,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -2x + 11 and g(x) = -2x - 5. For what value of x does f(g(x)) = 53?",
    "options": [
      {
        "letter": "A",
        "text": "x = -8"
      },
      {
        "letter": "B",
        "text": "x = 10"
      },
      {
        "letter": "C",
        "text": "x = 8"
      },
      {
        "letter": "D",
        "text": "x = 4"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x = 8",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -2(-2x - 5) + 11\n2) Distribute and simplify:\n   f(g(x)) = 4x + 10 + 11 = 4x + 21\n3) Set the expression equal to 53 and solve for x:\n   4x + 21 = 53\n   4x = 32\n   x = 8.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-065",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 65,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 3x + 11 and g(x) = 3x - 6. For what value of x does f(g(x)) = -25?",
    "options": [
      {
        "letter": "A",
        "text": "x = 2"
      },
      {
        "letter": "B",
        "text": "x = -4"
      },
      {
        "letter": "C",
        "text": "x = -2"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x = -2",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 3(3x - 6) + 11\n2) Distribute and simplify:\n   f(g(x)) = 9x - 18 + 11 = 9x - 7\n3) Set the expression equal to -25 and solve for x:\n   9x - 7 = -25\n   9x = -18\n   x = -2.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-066",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 66,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 3x + 9 and g(x) = -3x - 3. For what value of x does f(g(x)) = 27?",
    "options": [
      {
        "letter": "A",
        "text": "x = 3"
      },
      {
        "letter": "B",
        "text": "x = -3"
      },
      {
        "letter": "C",
        "text": "x = -5"
      },
      {
        "letter": "D",
        "text": "x = 1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -3",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 3(-3x - 3) + 9\n2) Distribute and simplify:\n   f(g(x)) = -9x - 9 + 9 = -9x + 0\n3) Set the expression equal to 27 and solve for x:\n   -9x + 0 = 27\n   -9x = 27\n   x = -3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-067",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 67,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = -15x - 6?",
    "options": [
      {
        "letter": "A",
        "text": "15"
      },
      {
        "letter": "B",
        "text": "-15"
      },
      {
        "letter": "C",
        "text": "-17"
      },
      {
        "letter": "D",
        "text": "-12"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-15",
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is -15.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-068",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 68,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -2x - 4 and g(x) = 3x + 3. For what value of x does f(g(x)) = 14?",
    "options": [
      {
        "letter": "A",
        "text": "x = -4"
      },
      {
        "letter": "B",
        "text": "x = 4"
      },
      {
        "letter": "C",
        "text": "x = -6"
      },
      {
        "letter": "D",
        "text": "x = 0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -4",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -2(3x + 3) - 4\n2) Distribute and simplify:\n   f(g(x)) = -6x - 6 - 4 = -6x - 10\n3) Set the expression equal to 14 and solve for x:\n   -6x - 10 = 14\n   -6x = 24\n   x = -4.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-069",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 69,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 6x + 3y = -12?",
    "options": [
      {
        "letter": "A",
        "text": "(-2, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -2)"
      },
      {
        "letter": "C",
        "text": "(2, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(-2, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 6x + 3(0) = -12 => 6x = -12 => x = -2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-070",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 70,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 3x + 14 and g(x) = 3x + 4. For what value of x does f(g(x)) = -19?",
    "options": [
      {
        "letter": "A",
        "text": "x = 5"
      },
      {
        "letter": "B",
        "text": "x = -7"
      },
      {
        "letter": "C",
        "text": "x = -1"
      },
      {
        "letter": "D",
        "text": "x = -5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = -5",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 3(3x + 4) + 14\n2) Distribute and simplify:\n   f(g(x)) = 9x + 12 + 14 = 9x + 26\n3) Set the expression equal to -19 and solve for x:\n   9x + 26 = -19\n   9x = -45\n   x = -5.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-071",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 71,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -2x + 3 and g(x) = 3x + 0. For what value of x does f(g(x)) = 21?",
    "options": [
      {
        "letter": "A",
        "text": "x = 3"
      },
      {
        "letter": "B",
        "text": "x = -5"
      },
      {
        "letter": "C",
        "text": "x = 1"
      },
      {
        "letter": "D",
        "text": "x = -3"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = -3",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -2(3x + 0) + 3\n2) Distribute and simplify:\n   f(g(x)) = -6x + 0 + 3 = -6x + 3\n3) Set the expression equal to 21 and solve for x:\n   -6x + 3 = 21\n   -6x = 18\n   x = -3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-072",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 72,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 5x + 14 and g(x) = -2x + 6. For what value of x does f(g(x)) = 144?",
    "options": [
      {
        "letter": "A",
        "text": "x = 10"
      },
      {
        "letter": "B",
        "text": "x = -10"
      },
      {
        "letter": "C",
        "text": "x = -12"
      },
      {
        "letter": "D",
        "text": "x = -6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -10",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 5(-2x + 6) + 14\n2) Distribute and simplify:\n   f(g(x)) = -10x + 30 + 14 = -10x + 44\n3) Set the expression equal to 144 and solve for x:\n   -10x + 44 = 144\n   -10x = 100\n   x = -10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-073",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 73,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 4x - 10, what is the value of f(0)?",
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
    "explanation": "Substitute x = 0 into the function: f(0) = 4(0) - 10 = 0 - 10 = -10.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-074",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 74,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -5x + 12 and g(x) = -3x + 9. For what value of x does f(g(x)) = -3?",
    "options": [
      {
        "letter": "A",
        "text": "x = -2"
      },
      {
        "letter": "B",
        "text": "x = 4"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "x = 2"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = 2",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -5(-3x + 9) + 12\n2) Distribute and simplify:\n   f(g(x)) = 15x - 45 + 12 = 15x - 33\n3) Set the expression equal to -3 and solve for x:\n   15x - 33 = -3\n   15x = 30\n   x = 2.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-075",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 75,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 5x + 3y = -35?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -7)"
      },
      {
        "letter": "B",
        "text": "(-7, 0)"
      },
      {
        "letter": "C",
        "text": "(7, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(-7, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 5x + 3(0) = -35 => 5x = -35 => x = -7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-076",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 76,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -4x + 7 and g(x) = 2x + 4. For what value of x does f(g(x)) = 55?",
    "options": [
      {
        "letter": "A",
        "text": "x = -8"
      },
      {
        "letter": "B",
        "text": "x = 8"
      },
      {
        "letter": "C",
        "text": "x = -10"
      },
      {
        "letter": "D",
        "text": "x = -4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -8",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -4(2x + 4) + 7\n2) Distribute and simplify:\n   f(g(x)) = -8x - 16 + 7 = -8x - 9\n3) Set the expression equal to 55 and solve for x:\n   -8x - 9 = 55\n   -8x = 64\n   x = -8.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-077",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 77,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -5x - 12 and g(x) = 4x + 2. For what value of x does f(g(x)) = -22?",
    "options": [
      {
        "letter": "A",
        "text": "x = -2"
      },
      {
        "letter": "B",
        "text": "x = 0"
      },
      {
        "letter": "C",
        "text": "x = 4"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = 0",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -5(4x + 2) - 12\n2) Distribute and simplify:\n   f(g(x)) = -20x - 10 - 12 = -20x - 22\n3) Set the expression equal to -22 and solve for x:\n   -20x - 22 = -22\n   -20x = 0\n   x = 0.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-078",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 78,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 2x - 13 and g(x) = -2x - 4. For what value of x does f(g(x)) = -33?",
    "options": [
      {
        "letter": "A",
        "text": "x = -3"
      },
      {
        "letter": "B",
        "text": "x = 5"
      },
      {
        "letter": "C",
        "text": "x = 3"
      },
      {
        "letter": "D",
        "text": "x = -1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x = 3",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 2(-2x - 4) - 13\n2) Distribute and simplify:\n   f(g(x)) = -4x - 8 - 13 = -4x - 21\n3) Set the expression equal to -33 and solve for x:\n   -4x - 21 = -33\n   -4x = -12\n   x = 3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-079",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 79,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 9x + 8, what is the value of f(4)?",
    "options": [
      {
        "letter": "A",
        "text": "44"
      },
      {
        "letter": "B",
        "text": "-44"
      },
      {
        "letter": "C",
        "text": "46"
      },
      {
        "letter": "D",
        "text": "41"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "44",
    "explanation": "Substitute x = 4 into the function: f(4) = 9(4) + 8 = 36 + 8 = 44.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-080",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 80,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 5x - 6 and g(x) = -4x - 1. For what value of x does f(g(x)) = -11?",
    "options": [
      {
        "letter": "A",
        "text": "x = -2"
      },
      {
        "letter": "B",
        "text": "x = 4"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "x = 0"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = 0",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 5(-4x - 1) - 6\n2) Distribute and simplify:\n   f(g(x)) = -20x - 5 - 6 = -20x - 11\n3) Set the expression equal to -11 and solve for x:\n   -20x - 11 = -11\n   -20x = 0\n   x = 0.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-081",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 81,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of -4 and passes through the point (3, 4). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(16, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 16)"
      },
      {
        "letter": "C",
        "text": "(0, -16)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 16)",
    "explanation": "Use the equation y = mx + b. Substitute m = -4, x = 3, and y = 4: 4 = -4(3) + b => 4 = -12 + b => 16 = b => b = 16.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-082",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 82,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -5x - 10 and g(x) = 3x - 8. For what value of x does f(g(x)) = 150?",
    "options": [
      {
        "letter": "A",
        "text": "x = -8"
      },
      {
        "letter": "B",
        "text": "x = 8"
      },
      {
        "letter": "C",
        "text": "x = -10"
      },
      {
        "letter": "D",
        "text": "x = -4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -8",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -5(3x - 8) - 10\n2) Distribute and simplify:\n   f(g(x)) = -15x + 40 - 10 = -15x + 30\n3) Set the expression equal to 150 and solve for x:\n   -15x + 30 = 150\n   -15x = 120\n   x = -8.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-083",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 83,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 4x + 8 and g(x) = -3x - 3. For what value of x does f(g(x)) = 56?",
    "options": [
      {
        "letter": "A",
        "text": "x = 5"
      },
      {
        "letter": "B",
        "text": "x = -5"
      },
      {
        "letter": "C",
        "text": "x = -7"
      },
      {
        "letter": "D",
        "text": "x = -1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -5",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 4(-3x - 3) + 8\n2) Distribute and simplify:\n   f(g(x)) = -12x - 12 + 8 = -12x - 4\n3) Set the expression equal to 56 and solve for x:\n   -12x - 4 = 56\n   -12x = 60\n   x = -5.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-084",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 84,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -2x - 7 and g(x) = -3x - 3. For what value of x does f(g(x)) = -43?",
    "options": [
      {
        "letter": "A",
        "text": "x = -7"
      },
      {
        "letter": "B",
        "text": "x = 7"
      },
      {
        "letter": "C",
        "text": "x = -9"
      },
      {
        "letter": "D",
        "text": "x = -3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -7",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -2(-3x - 3) - 7\n2) Distribute and simplify:\n   f(g(x)) = 6x + 6 - 7 = 6x - 1\n3) Set the expression equal to -43 and solve for x:\n   6x - 1 = -43\n   6x = -42\n   x = -7.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-085",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 85,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -4x - 9, what is the value of f(5)?",
    "options": [
      {
        "letter": "A",
        "text": "-29"
      },
      {
        "letter": "B",
        "text": "29"
      },
      {
        "letter": "C",
        "text": "-31"
      },
      {
        "letter": "D",
        "text": "-26"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-29",
    "explanation": "Substitute x = 5 into the function: f(5) = -4(5) - 9 = -20 - 9 = -29.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-086",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 86,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 4x - 7 and g(x) = -3x - 6. For what value of x does f(g(x)) = 89?",
    "options": [
      {
        "letter": "A",
        "text": "x = 10"
      },
      {
        "letter": "B",
        "text": "x = -12"
      },
      {
        "letter": "C",
        "text": "x = -6"
      },
      {
        "letter": "D",
        "text": "x = -10"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = -10",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 4(-3x - 6) - 7\n2) Distribute and simplify:\n   f(g(x)) = -12x - 24 - 7 = -12x - 31\n3) Set the expression equal to 89 and solve for x:\n   -12x - 31 = 89\n   -12x = 120\n   x = -10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-087",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 87,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of -2 and passes through the point (4, 6). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 14)"
      },
      {
        "letter": "B",
        "text": "(14, 0)"
      },
      {
        "letter": "C",
        "text": "(0, -14)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, 14)",
    "explanation": "Use the equation y = mx + b. Substitute m = -2, x = 4, and y = 6: 6 = -2(4) + b => 6 = -8 + b => 14 = b => b = 14.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-088",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 88,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 2x - 13 and g(x) = -2x + 3. For what value of x does f(g(x)) = 13?",
    "options": [
      {
        "letter": "A",
        "text": "x = 5"
      },
      {
        "letter": "B",
        "text": "x = -7"
      },
      {
        "letter": "C",
        "text": "x = -1"
      },
      {
        "letter": "D",
        "text": "x = -5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = -5",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 2(-2x + 3) - 13\n2) Distribute and simplify:\n   f(g(x)) = -4x + 6 - 13 = -4x - 7\n3) Set the expression equal to 13 and solve for x:\n   -4x - 7 = 13\n   -4x = 20\n   x = -5.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-089",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 89,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -2x - 15 and g(x) = 4x - 7. For what value of x does f(g(x)) = 71?",
    "options": [
      {
        "letter": "A",
        "text": "x = 9"
      },
      {
        "letter": "B",
        "text": "x = -9"
      },
      {
        "letter": "C",
        "text": "x = -11"
      },
      {
        "letter": "D",
        "text": "x = -5"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -9",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -2(4x - 7) - 15\n2) Distribute and simplify:\n   f(g(x)) = -8x + 14 - 15 = -8x - 1\n3) Set the expression equal to 71 and solve for x:\n   -8x - 1 = 71\n   -8x = 72\n   x = -9.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-090",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 90,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -3x + 0 and g(x) = -2x - 1. For what value of x does f(g(x)) = -3?",
    "options": [
      {
        "letter": "A",
        "text": "x = 1"
      },
      {
        "letter": "B",
        "text": "x = -3"
      },
      {
        "letter": "C",
        "text": "x = 3"
      },
      {
        "letter": "D",
        "text": "x = -1"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = -1",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -3(-2x - 1) + 0\n2) Distribute and simplify:\n   f(g(x)) = 6x + 3 + 0 = 6x + 3\n3) Set the expression equal to -3 and solve for x:\n   6x + 3 = -3\n   6x = -6\n   x = -1.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-091",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 91,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -5x - 11, what is the value of f(-3)?",
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
    "explanation": "Substitute x = -3 into the function: f(-3) = -5(-3) - 11 = 15 - 11 = 4.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-092",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 92,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -2x + 2 and g(x) = 4x + 0. For what value of x does f(g(x)) = -78?",
    "options": [
      {
        "letter": "A",
        "text": "x = -10"
      },
      {
        "letter": "B",
        "text": "x = 10"
      },
      {
        "letter": "C",
        "text": "x = 12"
      },
      {
        "letter": "D",
        "text": "x = 6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = 10",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -2(4x + 0) + 2\n2) Distribute and simplify:\n   f(g(x)) = -8x + 0 + 2 = -8x + 2\n3) Set the expression equal to -78 and solve for x:\n   -8x + 2 = -78\n   -8x = -80\n   x = 10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-093",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 93,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of 4 and passes through the point (-1, -6). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(-2, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 2)"
      },
      {
        "letter": "C",
        "text": "(0, -2)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, -2)",
    "explanation": "Use the equation y = mx + b. Substitute m = 4, x = -1, and y = -6: -6 = 4(-1) + b => -6 = -4 + b => -2 = b => b = -2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-094",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 94,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 4x + 7 and g(x) = -2x - 9. For what value of x does f(g(x)) = -109?",
    "options": [
      {
        "letter": "A",
        "text": "x = 10"
      },
      {
        "letter": "B",
        "text": "x = -10"
      },
      {
        "letter": "C",
        "text": "x = 12"
      },
      {
        "letter": "D",
        "text": "x = 6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = 10",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 4(-2x - 9) + 7\n2) Distribute and simplify:\n   f(g(x)) = -8x - 36 + 7 = -8x - 29\n3) Set the expression equal to -109 and solve for x:\n   -8x - 29 = -109\n   -8x = -80\n   x = 10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-095",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 95,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -5x - 5 and g(x) = 2x - 4. For what value of x does f(g(x)) = -15?",
    "options": [
      {
        "letter": "A",
        "text": "x = -3"
      },
      {
        "letter": "B",
        "text": "x = 5"
      },
      {
        "letter": "C",
        "text": "x = 3"
      },
      {
        "letter": "D",
        "text": "x = -1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x = 3",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -5(2x - 4) - 5\n2) Distribute and simplify:\n   f(g(x)) = -10x + 20 - 5 = -10x + 15\n3) Set the expression equal to -15 and solve for x:\n   -10x + 15 = -15\n   -10x = -30\n   x = 3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-096",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 96,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = -5x + 6 and g(x) = 3x - 8. For what value of x does f(g(x)) = 106?",
    "options": [
      {
        "letter": "A",
        "text": "x = -4"
      },
      {
        "letter": "B",
        "text": "x = 4"
      },
      {
        "letter": "C",
        "text": "x = -6"
      },
      {
        "letter": "D",
        "text": "x = 0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -4",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = -5(3x - 8) + 6\n2) Distribute and simplify:\n   f(g(x)) = -15x + 40 + 6 = -15x + 46\n3) Set the expression equal to 106 and solve for x:\n   -15x + 46 = 106\n   -15x = 60\n   x = -4.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-097",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 97,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 1x + 15, what is the value of f(4)?",
    "options": [
      {
        "letter": "A",
        "text": "19"
      },
      {
        "letter": "B",
        "text": "-19"
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
    "correctAnswer": "A",
    "correctValue": "19",
    "explanation": "Substitute x = 4 into the function: f(4) = 1(4) + 15 = 4 + 15 = 19.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-098",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 98,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 2x + 7 and g(x) = -3x - 6. For what value of x does f(g(x)) = 37?",
    "options": [
      {
        "letter": "A",
        "text": "x = 7"
      },
      {
        "letter": "B",
        "text": "x = -9"
      },
      {
        "letter": "C",
        "text": "x = -7"
      },
      {
        "letter": "D",
        "text": "x = -3"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "x = -7",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 2(-3x - 6) + 7\n2) Distribute and simplify:\n   f(g(x)) = -6x - 12 + 7 = -6x - 5\n3) Set the expression equal to 37 and solve for x:\n   -6x - 5 = 37\n   -6x = 42\n   x = -7.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-099",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 99,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (-3, 9) and (2, 11)?",
    "options": [
      {
        "letter": "A",
        "text": "2/5"
      },
      {
        "letter": "B",
        "text": "-2"
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
    "correctAnswer": "A",
    "correctValue": "2/5",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (11 - 9) / (2 - -3) = 2 / 5. Simplified, m = 2/5.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-100",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 100,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 4x + 13 and g(x) = 3x - 9. For what value of x does f(g(x)) = -143?",
    "options": [
      {
        "letter": "A",
        "text": "x = -10"
      },
      {
        "letter": "B",
        "text": "x = 10"
      },
      {
        "letter": "C",
        "text": "x = -12"
      },
      {
        "letter": "D",
        "text": "x = -6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "x = -10",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 4(3x - 9) + 13\n2) Distribute and simplify:\n   f(g(x)) = 12x - 36 + 13 = 12x - 23\n3) Set the expression equal to -143 and solve for x:\n   12x - 23 = -143\n   12x = -120\n   x = -10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-101",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 101,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 3x - 2 and g(x) = 4x + 3. For what value of x does f(g(x)) = 31?",
    "options": [
      {
        "letter": "A",
        "text": "x = -2"
      },
      {
        "letter": "B",
        "text": "x = 4"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "x = 2"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "x = 2",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 3(4x + 3) - 2\n2) Distribute and simplify:\n   f(g(x)) = 12x + 9 - 2 = 12x + 7\n3) Set the expression equal to 31 and solve for x:\n   12x + 7 = 31\n   12x = 24\n   x = 2.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-102",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 102,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 2x + 12 and g(x) = 3x + 4. For what value of x does f(g(x)) = -4?",
    "options": [
      {
        "letter": "A",
        "text": "x = 4"
      },
      {
        "letter": "B",
        "text": "x = -4"
      },
      {
        "letter": "C",
        "text": "x = -6"
      },
      {
        "letter": "D",
        "text": "x = 0"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -4",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 2(3x + 4) + 12\n2) Distribute and simplify:\n   f(g(x)) = 6x + 8 + 12 = 6x + 20\n3) Set the expression equal to -4 and solve for x:\n   6x + 20 = -4\n   6x = -24\n   x = -4.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-103",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 103,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 3x + 3y = 12?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 4)"
      },
      {
        "letter": "B",
        "text": "(4, 0)"
      },
      {
        "letter": "C",
        "text": "(0, -4)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, 4)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 3(0) + 3y = 12 => 3y = 12 => y = 4.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-104",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 104,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 5x + 6 and g(x) = -4x - 9. For what value of x does f(g(x)) = 21?",
    "options": [
      {
        "letter": "A",
        "text": "x = 3"
      },
      {
        "letter": "B",
        "text": "x = -3"
      },
      {
        "letter": "C",
        "text": "x = -5"
      },
      {
        "letter": "D",
        "text": "x = 1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = -3",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 5(-4x - 9) + 6\n2) Distribute and simplify:\n   f(g(x)) = -20x - 45 + 6 = -20x - 39\n3) Set the expression equal to 21 and solve for x:\n   -20x - 39 = 21\n   -20x = 60\n   x = -3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-105",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 105,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of -2 and passes through the point (2, -4). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 0)"
      },
      {
        "letter": "B",
        "text": "None of the above 0"
      },
      {
        "letter": "C",
        "text": "None of the above 1"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, 0)",
    "explanation": "Use the equation y = mx + b. Substitute m = -2, x = 2, and y = -4: -4 = -2(2) + b => -4 = -4 + b => 0 = b => b = 0.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-106",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 106,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Composite Functions",
    "prompt": "Let functions f and g be defined by f(x) = 3x + 13 and g(x) = 4x - 9. For what value of x does f(g(x)) = 106?",
    "options": [
      {
        "letter": "A",
        "text": "x = -10"
      },
      {
        "letter": "B",
        "text": "x = 10"
      },
      {
        "letter": "C",
        "text": "x = 12"
      },
      {
        "letter": "D",
        "text": "x = 6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "x = 10",
    "explanation": "1) Find the expression for f(g(x)) by substituting g(x) into f(x):\n   f(g(x)) = 3(4x - 9) + 13\n2) Distribute and simplify:\n   f(g(x)) = 12x - 27 + 13 = 12x - 14\n3) Set the expression equal to 106 and solve for x:\n   12x - 14 = 106\n   12x = 120\n   x = 10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-107",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 107,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-3) = 14 and f(1) = -10. What is the value of f(11)?",
    "options": [
      {
        "letter": "A",
        "text": "70"
      },
      {
        "letter": "B",
        "text": "-72"
      },
      {
        "letter": "C",
        "text": "-70"
      },
      {
        "letter": "D",
        "text": "-67"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-70",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-10 - 14) / (1 - -3) = -24 / 4 = -6.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-3, 14):\n   14 = -6(-3) + b  =>  14 = 18 + b  =>  b = -4.\n3) The function is f(x) = -6x - 4.\n4) Evaluate f(11): f(11) = -6(11) - 4 = -66 - 4 = -70.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-108",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 108,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(6) = 7 and f(12) = -23. What is the value of f(37)?",
    "options": [
      {
        "letter": "A",
        "text": "148"
      },
      {
        "letter": "B",
        "text": "-150"
      },
      {
        "letter": "C",
        "text": "-148"
      },
      {
        "letter": "D",
        "text": "-145"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-148",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-23 - 7) / (12 - 6) = -30 / 6 = -5.\n2) Find the y-intercept (b) using the equation y = mx + b with point (6, 7):\n   7 = -5(6) + b  =>  7 = -30 + b  =>  b = 37.\n3) The function is f(x) = -5x + 37.\n4) Evaluate f(37): f(37) = -5(37) + 37 = -185 + 37 = -148.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-109",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 109,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = 8x - 6?",
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
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is 8.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-110",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 110,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(2) = -17 and f(4) = -11. What is the value of f(14)?",
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
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-11 - -17) / (4 - 2) = 6 / 2 = 3.\n2) Find the y-intercept (b) using the equation y = mx + b with point (2, -17):\n   -17 = 3(2) + b  =>  -17 = 6 + b  =>  b = -23.\n3) The function is f(x) = 3x - 23.\n4) Evaluate f(14): f(14) = 3(14) - 23 = 42 - 23 = 19.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-111",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 111,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 3x + 3y = 18?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 6)"
      },
      {
        "letter": "B",
        "text": "(6, 0)"
      },
      {
        "letter": "C",
        "text": "(-6, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(6, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 3x + 3(0) = 18 => 3x = 18 => x = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-112",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 112,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-1) = 11 and f(5) = -1. What is the value of f(30)?",
    "options": [
      {
        "letter": "A",
        "text": "51"
      },
      {
        "letter": "B",
        "text": "-51"
      },
      {
        "letter": "C",
        "text": "-53"
      },
      {
        "letter": "D",
        "text": "-48"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-51",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-1 - 11) / (5 - -1) = -12 / 6 = -2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-1, 11):\n   11 = -2(-1) + b  =>  11 = 2 + b  =>  b = 9.\n3) The function is f(x) = -2x + 9.\n4) Evaluate f(30): f(30) = -2(30) + 9 = -60 + 9 = -51.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-113",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 113,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(9) = 0 and f(15) = -12. What is the value of f(40)?",
    "options": [
      {
        "letter": "A",
        "text": "-62"
      },
      {
        "letter": "B",
        "text": "62"
      },
      {
        "letter": "C",
        "text": "-64"
      },
      {
        "letter": "D",
        "text": "-59"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-62",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-12 - 0) / (15 - 9) = -12 / 6 = -2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (9, 0):\n   0 = -2(9) + b  =>  0 = -18 + b  =>  b = 18.\n3) The function is f(x) = -2x + 18.\n4) Evaluate f(40): f(40) = -2(40) + 18 = -80 + 18 = -62.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-114",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 114,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-10) = 19 and f(-6) = 35. What is the value of f(19)?",
    "options": [
      {
        "letter": "A",
        "text": "-135"
      },
      {
        "letter": "B",
        "text": "137"
      },
      {
        "letter": "C",
        "text": "135"
      },
      {
        "letter": "D",
        "text": "132"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "135",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (35 - 19) / (-6 - -10) = 16 / 4 = 4.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-10, 19):\n   19 = 4(-10) + b  =>  19 = -40 + b  =>  b = 59.\n3) The function is f(x) = 4x + 59.\n4) Evaluate f(19): f(19) = 4(19) + 59 = 76 + 59 = 135.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-115",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 115,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the linear function y = -14x - 19?",
    "options": [
      {
        "letter": "A",
        "text": "(-19, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 19)"
      },
      {
        "letter": "C",
        "text": "(0, -19)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, -19)",
    "explanation": "The equation is in the form y = mx + b, where 'b' is the y-intercept. Therefore, the y-intercept is -19, or the point (0, -19).",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-116",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 116,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-9) = 0 and f(-4) = -20. What is the value of f(11)?",
    "options": [
      {
        "letter": "A",
        "text": "80"
      },
      {
        "letter": "B",
        "text": "-80"
      },
      {
        "letter": "C",
        "text": "-82"
      },
      {
        "letter": "D",
        "text": "-77"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-80",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-20 - 0) / (-4 - -9) = -20 / 5 = -4.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-9, 0):\n   0 = -4(-9) + b  =>  0 = 36 + b  =>  b = -36.\n3) The function is f(x) = -4x - 36.\n4) Evaluate f(11): f(11) = -4(11) - 36 = -44 - 36 = -80.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-117",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 117,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of 1 and passes through the point (4, 4). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "None of the above 0"
      },
      {
        "letter": "B",
        "text": "None of the above 1"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 0)",
    "explanation": "Use the equation y = mx + b. Substitute m = 1, x = 4, and y = 4: 4 = 1(4) + b => 4 = 4 + b => 0 = b => b = 0.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-118",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 118,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-1) = 0 and f(1) = 14. What is the value of f(26)?",
    "options": [
      {
        "letter": "A",
        "text": "-189"
      },
      {
        "letter": "B",
        "text": "191"
      },
      {
        "letter": "C",
        "text": "189"
      },
      {
        "letter": "D",
        "text": "186"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "189",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (14 - 0) / (1 - -1) = 14 / 2 = 7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-1, 0):\n   0 = 7(-1) + b  =>  0 = -7 + b  =>  b = 7.\n3) The function is f(x) = 7x + 7.\n4) Evaluate f(26): f(26) = 7(26) + 7 = 182 + 7 = 189.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-119",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 119,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-10) = -2 and f(-7) = -23. What is the value of f(8)?",
    "options": [
      {
        "letter": "A",
        "text": "128"
      },
      {
        "letter": "B",
        "text": "-130"
      },
      {
        "letter": "C",
        "text": "-125"
      },
      {
        "letter": "D",
        "text": "-128"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-128",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-23 - -2) / (-7 - -10) = -21 / 3 = -7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-10, -2):\n   -2 = -7(-10) + b  =>  -2 = 70 + b  =>  b = -72.\n3) The function is f(x) = -7x - 72.\n4) Evaluate f(8): f(8) = -7(8) - 72 = -56 - 72 = -128.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-120",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 120,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-5) = -3 and f(0) = 32. What is the value of f(20)?",
    "options": [
      {
        "letter": "A",
        "text": "-172"
      },
      {
        "letter": "B",
        "text": "174"
      },
      {
        "letter": "C",
        "text": "169"
      },
      {
        "letter": "D",
        "text": "172"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "172",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (32 - -3) / (0 - -5) = 35 / 5 = 7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-5, -3):\n   -3 = 7(-5) + b  =>  -3 = -35 + b  =>  b = 32.\n3) The function is f(x) = 7x + 32.\n4) Evaluate f(20): f(20) = 7(20) + 32 = 140 + 32 = 172.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-121",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 121,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -8x - 11, what is the value of f(2)?",
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
        "text": "-29"
      },
      {
        "letter": "D",
        "text": "-24"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-27",
    "explanation": "Substitute x = 2 into the function: f(2) = -8(2) - 11 = -16 - 11 = -27.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-122",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 122,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-2) = 6 and f(3) = -4. What is the value of f(18)?",
    "options": [
      {
        "letter": "A",
        "text": "34"
      },
      {
        "letter": "B",
        "text": "-36"
      },
      {
        "letter": "C",
        "text": "-34"
      },
      {
        "letter": "D",
        "text": "-31"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-34",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-4 - 6) / (3 - -2) = -10 / 5 = -2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-2, 6):\n   6 = -2(-2) + b  =>  6 = 4 + b  =>  b = 2.\n3) The function is f(x) = -2x + 2.\n4) Evaluate f(18): f(18) = -2(18) + 2 = -36 + 2 = -34.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-123",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 123,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 4x - 5y = -8?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -2)"
      },
      {
        "letter": "B",
        "text": "(2, 0)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(-2, 0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(-2, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 4x - 5(0) = -8 => 4x = -8 => x = -2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-124",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 124,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(1) = 6 and f(5) = -14. What is the value of f(30)?",
    "options": [
      {
        "letter": "A",
        "text": "139"
      },
      {
        "letter": "B",
        "text": "-141"
      },
      {
        "letter": "C",
        "text": "-136"
      },
      {
        "letter": "D",
        "text": "-139"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-139",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-14 - 6) / (5 - 1) = -20 / 4 = -5.\n2) Find the y-intercept (b) using the equation y = mx + b with point (1, 6):\n   6 = -5(1) + b  =>  6 = -5 + b  =>  b = 11.\n3) The function is f(x) = -5x + 11.\n4) Evaluate f(30): f(30) = -5(30) + 11 = -150 + 11 = -139.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-125",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 125,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(3) = -9 and f(9) = -45. What is the value of f(19)?",
    "options": [
      {
        "letter": "A",
        "text": "105"
      },
      {
        "letter": "B",
        "text": "-105"
      },
      {
        "letter": "C",
        "text": "-107"
      },
      {
        "letter": "D",
        "text": "-102"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-105",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-45 - -9) / (9 - 3) = -36 / 6 = -6.\n2) Find the y-intercept (b) using the equation y = mx + b with point (3, -9):\n   -9 = -6(3) + b  =>  -9 = -18 + b  =>  b = 9.\n3) The function is f(x) = -6x + 9.\n4) Evaluate f(19): f(19) = -6(19) + 9 = -114 + 9 = -105.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-126",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 126,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-3) = -5 and f(1) = 3. What is the value of f(16)?",
    "options": [
      {
        "letter": "A",
        "text": "-33"
      },
      {
        "letter": "B",
        "text": "35"
      },
      {
        "letter": "C",
        "text": "30"
      },
      {
        "letter": "D",
        "text": "33"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "33",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (3 - -5) / (1 - -3) = 8 / 4 = 2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-3, -5):\n   -5 = 2(-3) + b  =>  -5 = -6 + b  =>  b = 1.\n3) The function is f(x) = 2x + 1.\n4) Evaluate f(16): f(16) = 2(16) + 1 = 32 + 1 = 33.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-127",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 127,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -1x - 11, what is the value of f(-1)?",
    "options": [
      {
        "letter": "A",
        "text": "10"
      },
      {
        "letter": "B",
        "text": "-10"
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
    "correctAnswer": "B",
    "correctValue": "-10",
    "explanation": "Substitute x = -1 into the function: f(-1) = -1(-1) - 11 = 1 - 11 = -10.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-128",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 128,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(1) = 10 and f(4) = 31. What is the value of f(24)?",
    "options": [
      {
        "letter": "A",
        "text": "-171"
      },
      {
        "letter": "B",
        "text": "171"
      },
      {
        "letter": "C",
        "text": "173"
      },
      {
        "letter": "D",
        "text": "168"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "171",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (31 - 10) / (4 - 1) = 21 / 3 = 7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (1, 10):\n   10 = 7(1) + b  =>  10 = 7 + b  =>  b = 3.\n3) The function is f(x) = 7x + 3.\n4) Evaluate f(24): f(24) = 7(24) + 3 = 168 + 3 = 171.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-129",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 129,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (-3, 3) and (-1, 0)?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "-5"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "-3/2"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-3/2",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (0 - 3) / (-1 - -3) = -3 / 2. Simplified, m = -3/2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-130",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 130,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(8) = 7 and f(10) = 11. What is the value of f(35)?",
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
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (11 - 7) / (10 - 8) = 4 / 2 = 2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (8, 7):\n   7 = 2(8) + b  =>  7 = 16 + b  =>  b = -9.\n3) The function is f(x) = 2x - 9.\n4) Evaluate f(35): f(35) = 2(35) - 9 = 70 - 9 = 61.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-131",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 131,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(0) = 7 and f(3) = -5. What is the value of f(23)?",
    "options": [
      {
        "letter": "A",
        "text": "85"
      },
      {
        "letter": "B",
        "text": "-87"
      },
      {
        "letter": "C",
        "text": "-82"
      },
      {
        "letter": "D",
        "text": "-85"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-85",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-5 - 7) / (3 - 0) = -12 / 3 = -4.\n2) Find the y-intercept (b) using the equation y = mx + b with point (0, 7):\n   7 = -4(0) + b  =>  7 = 0 + b  =>  b = 7.\n3) The function is f(x) = -4x + 7.\n4) Evaluate f(23): f(23) = -4(23) + 7 = -92 + 7 = -85.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-132",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 132,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(7) = -14 and f(12) = -29. What is the value of f(32)?",
    "options": [
      {
        "letter": "A",
        "text": "89"
      },
      {
        "letter": "B",
        "text": "-91"
      },
      {
        "letter": "C",
        "text": "-86"
      },
      {
        "letter": "D",
        "text": "-89"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-89",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-29 - -14) / (12 - 7) = -15 / 5 = -3.\n2) Find the y-intercept (b) using the equation y = mx + b with point (7, -14):\n   -14 = -3(7) + b  =>  -14 = -21 + b  =>  b = 7.\n3) The function is f(x) = -3x + 7.\n4) Evaluate f(32): f(32) = -3(32) + 7 = -96 + 7 = -89.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-133",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 133,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the slope of the linear function y = -6x + 8?",
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
        "text": "-8"
      },
      {
        "letter": "D",
        "text": "-3"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-6",
    "explanation": "The equation is in the slope-intercept form y = mx + b, where 'm' is the slope. Therefore, the slope is -6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-134",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 134,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(5) = 4 and f(11) = 22. What is the value of f(26)?",
    "options": [
      {
        "letter": "A",
        "text": "67"
      },
      {
        "letter": "B",
        "text": "-67"
      },
      {
        "letter": "C",
        "text": "69"
      },
      {
        "letter": "D",
        "text": "64"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "67",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (22 - 4) / (11 - 5) = 18 / 6 = 3.\n2) Find the y-intercept (b) using the equation y = mx + b with point (5, 4):\n   4 = 3(5) + b  =>  4 = 15 + b  =>  b = -11.\n3) The function is f(x) = 3x - 11.\n4) Evaluate f(26): f(26) = 3(26) - 11 = 78 - 11 = 67.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-135",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 135,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of 2 and passes through the point (-5, -4). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(6, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 6)"
      },
      {
        "letter": "C",
        "text": "(0, -6)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 6)",
    "explanation": "Use the equation y = mx + b. Substitute m = 2, x = -5, and y = -4: -4 = 2(-5) + b => -4 = -10 + b => 6 = b => b = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-136",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 136,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(6) = -7 and f(10) = -31. What is the value of f(35)?",
    "options": [
      {
        "letter": "A",
        "text": "181"
      },
      {
        "letter": "B",
        "text": "-183"
      },
      {
        "letter": "C",
        "text": "-178"
      },
      {
        "letter": "D",
        "text": "-181"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-181",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-31 - -7) / (10 - 6) = -24 / 4 = -6.\n2) Find the y-intercept (b) using the equation y = mx + b with point (6, -7):\n   -7 = -6(6) + b  =>  -7 = -36 + b  =>  b = 29.\n3) The function is f(x) = -6x + 29.\n4) Evaluate f(35): f(35) = -6(35) + 29 = -210 + 29 = -181.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-137",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 137,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-1) = -8 and f(1) = -4. What is the value of f(21)?",
    "options": [
      {
        "letter": "A",
        "text": "-36"
      },
      {
        "letter": "B",
        "text": "36"
      },
      {
        "letter": "C",
        "text": "38"
      },
      {
        "letter": "D",
        "text": "33"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "36",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-4 - -8) / (1 - -1) = 4 / 2 = 2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-1, -8):\n   -8 = 2(-1) + b  =>  -8 = -2 + b  =>  b = -6.\n3) The function is f(x) = 2x - 6.\n4) Evaluate f(21): f(21) = 2(21) - 6 = 42 - 6 = 36.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-138",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 138,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(10) = 7 and f(12) = 13. What is the value of f(27)?",
    "options": [
      {
        "letter": "A",
        "text": "-58"
      },
      {
        "letter": "B",
        "text": "58"
      },
      {
        "letter": "C",
        "text": "60"
      },
      {
        "letter": "D",
        "text": "55"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "58",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (13 - 7) / (12 - 10) = 6 / 2 = 3.\n2) Find the y-intercept (b) using the equation y = mx + b with point (10, 7):\n   7 = 3(10) + b  =>  7 = 30 + b  =>  b = -23.\n3) The function is f(x) = 3x - 23.\n4) Evaluate f(27): f(27) = 3(27) - 23 = 81 - 23 = 58.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-139",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 139,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 1x - 12, what is the value of f(1)?",
    "options": [
      {
        "letter": "A",
        "text": "11"
      },
      {
        "letter": "B",
        "text": "-11"
      },
      {
        "letter": "C",
        "text": "-13"
      },
      {
        "letter": "D",
        "text": "-8"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-11",
    "explanation": "Substitute x = 1 into the function: f(1) = 1(1) - 12 = 1 - 12 = -11.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-140",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 140,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(0) = 15 and f(6) = 27. What is the value of f(21)?",
    "options": [
      {
        "letter": "A",
        "text": "57"
      },
      {
        "letter": "B",
        "text": "-57"
      },
      {
        "letter": "C",
        "text": "59"
      },
      {
        "letter": "D",
        "text": "54"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "57",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (27 - 15) / (6 - 0) = 12 / 6 = 2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (0, 15):\n   15 = 2(0) + b  =>  15 = 0 + b  =>  b = 15.\n3) The function is f(x) = 2x + 15.\n4) Evaluate f(21): f(21) = 2(21) + 15 = 42 + 15 = 57.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-141",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 141,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 4x + 2y = 8?",
    "options": [
      {
        "letter": "A",
        "text": "(2, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 2)"
      },
      {
        "letter": "C",
        "text": "(-2, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(2, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 4x + 2(0) = 8 => 4x = 8 => x = 2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-142",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 142,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(2) = -6 and f(8) = 30. What is the value of f(18)?",
    "options": [
      {
        "letter": "A",
        "text": "-90"
      },
      {
        "letter": "B",
        "text": "92"
      },
      {
        "letter": "C",
        "text": "90"
      },
      {
        "letter": "D",
        "text": "87"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "90",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (30 - -6) / (8 - 2) = 36 / 6 = 6.\n2) Find the y-intercept (b) using the equation y = mx + b with point (2, -6):\n   -6 = 6(2) + b  =>  -6 = 12 + b  =>  b = -18.\n3) The function is f(x) = 6x - 18.\n4) Evaluate f(18): f(18) = 6(18) - 18 = 108 - 18 = 90.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-143",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 143,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-4) = 13 and f(1) = -7. What is the value of f(16)?",
    "options": [
      {
        "letter": "A",
        "text": "67"
      },
      {
        "letter": "B",
        "text": "-69"
      },
      {
        "letter": "C",
        "text": "-64"
      },
      {
        "letter": "D",
        "text": "-67"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-67",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-7 - 13) / (1 - -4) = -20 / 5 = -4.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-4, 13):\n   13 = -4(-4) + b  =>  13 = 16 + b  =>  b = -3.\n3) The function is f(x) = -4x - 3.\n4) Evaluate f(16): f(16) = -4(16) - 3 = -64 - 3 = -67.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-144",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 144,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(5) = 15 and f(8) = 3. What is the value of f(33)?",
    "options": [
      {
        "letter": "A",
        "text": "97"
      },
      {
        "letter": "B",
        "text": "-97"
      },
      {
        "letter": "C",
        "text": "-99"
      },
      {
        "letter": "D",
        "text": "-94"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-97",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (3 - 15) / (8 - 5) = -12 / 3 = -4.\n2) Find the y-intercept (b) using the equation y = mx + b with point (5, 15):\n   15 = -4(5) + b  =>  15 = -20 + b  =>  b = 35.\n3) The function is f(x) = -4x + 35.\n4) Evaluate f(33): f(33) = -4(33) + 35 = -132 + 35 = -97.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-145",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 145,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 2x + 5y = -5?",
    "options": [
      {
        "letter": "A",
        "text": "(-1, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 1)"
      },
      {
        "letter": "C",
        "text": "(0, -1)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, -1)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 2(0) + 5y = -5 => 5y = -5 => y = -1.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-146",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 146,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(4) = 3 and f(9) = -32. What is the value of f(19)?",
    "options": [
      {
        "letter": "A",
        "text": "-102"
      },
      {
        "letter": "B",
        "text": "102"
      },
      {
        "letter": "C",
        "text": "-104"
      },
      {
        "letter": "D",
        "text": "-99"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-102",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-32 - 3) / (9 - 4) = -35 / 5 = -7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (4, 3):\n   3 = -7(4) + b  =>  3 = -28 + b  =>  b = 31.\n3) The function is f(x) = -7x + 31.\n4) Evaluate f(19): f(19) = -7(19) + 31 = -133 + 31 = -102.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-147",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 147,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 5x + 5y = 30?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 6)"
      },
      {
        "letter": "B",
        "text": "(-6, 0)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(6, 0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(6, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 5x + 5(0) = 30 => 5x = 30 => x = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-148",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 148,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-9) = 9 and f(-5) = -19. What is the value of f(5)?",
    "options": [
      {
        "letter": "A",
        "text": "89"
      },
      {
        "letter": "B",
        "text": "-91"
      },
      {
        "letter": "C",
        "text": "-86"
      },
      {
        "letter": "D",
        "text": "-89"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-89",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-19 - 9) / (-5 - -9) = -28 / 4 = -7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-9, 9):\n   9 = -7(-9) + b  =>  9 = 63 + b  =>  b = -54.\n3) The function is f(x) = -7x - 54.\n4) Evaluate f(5): f(5) = -7(5) - 54 = -35 - 54 = -89.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-149",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 149,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-2) = -16 and f(3) = -31. What is the value of f(18)?",
    "options": [
      {
        "letter": "A",
        "text": "76"
      },
      {
        "letter": "B",
        "text": "-78"
      },
      {
        "letter": "C",
        "text": "-76"
      },
      {
        "letter": "D",
        "text": "-73"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "-76",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-31 - -16) / (3 - -2) = -15 / 5 = -3.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-2, -16):\n   -16 = -3(-2) + b  =>  -16 = 6 + b  =>  b = -22.\n3) The function is f(x) = -3x - 22.\n4) Evaluate f(18): f(18) = -3(18) - 22 = -54 - 22 = -76.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-150",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 150,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(5) = -11 and f(7) = -15. What is the value of f(22)?",
    "options": [
      {
        "letter": "A",
        "text": "-45"
      },
      {
        "letter": "B",
        "text": "45"
      },
      {
        "letter": "C",
        "text": "-47"
      },
      {
        "letter": "D",
        "text": "-42"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-45",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-15 - -11) / (7 - 5) = -4 / 2 = -2.\n2) Find the y-intercept (b) using the equation y = mx + b with point (5, -11):\n   -11 = -2(5) + b  =>  -11 = -10 + b  =>  b = -1.\n3) The function is f(x) = -2x - 1.\n4) Evaluate f(22): f(22) = -2(22) - 1 = -44 - 1 = -45.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-151",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 151,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 5x + 5y = -45?",
    "options": [
      {
        "letter": "A",
        "text": "(-9, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -9)"
      },
      {
        "letter": "C",
        "text": "(0, 9)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, -9)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 5(0) + 5y = -45 => 5y = -45 => y = -9.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-152",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 152,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(0) = -1 and f(5) = 34. What is the value of f(25)?",
    "options": [
      {
        "letter": "A",
        "text": "-174"
      },
      {
        "letter": "B",
        "text": "174"
      },
      {
        "letter": "C",
        "text": "176"
      },
      {
        "letter": "D",
        "text": "171"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "174",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (34 - -1) / (5 - 0) = 35 / 5 = 7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (0, -1):\n   -1 = 7(0) + b  =>  -1 = 0 + b  =>  b = -1.\n3) The function is f(x) = 7x - 1.\n4) Evaluate f(25): f(25) = 7(25) - 1 = 175 - 1 = 174.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-153",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 153,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (8, 8) and (10, 4)?",
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
        "text": "-4"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "-2",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (4 - 8) / (10 - 8) = -4 / 2. Simplified, m = -2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-154",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 154,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(10) = 18 and f(15) = 53. What is the value of f(30)?",
    "options": [
      {
        "letter": "A",
        "text": "-158"
      },
      {
        "letter": "B",
        "text": "158"
      },
      {
        "letter": "C",
        "text": "160"
      },
      {
        "letter": "D",
        "text": "155"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "158",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (53 - 18) / (15 - 10) = 35 / 5 = 7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (10, 18):\n   18 = 7(10) + b  =>  18 = 70 + b  =>  b = -52.\n3) The function is f(x) = 7x - 52.\n4) Evaluate f(30): f(30) = 7(30) - 52 = 210 - 52 = 158.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-155",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 155,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(-7) = -16 and f(-5) = -2. What is the value of f(15)?",
    "options": [
      {
        "letter": "A",
        "text": "-138"
      },
      {
        "letter": "B",
        "text": "140"
      },
      {
        "letter": "C",
        "text": "135"
      },
      {
        "letter": "D",
        "text": "138"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "138",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-2 - -16) / (-5 - -7) = 14 / 2 = 7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (-7, -16):\n   -16 = 7(-7) + b  =>  -16 = -49 + b  =>  b = 33.\n3) The function is f(x) = 7x + 33.\n4) Evaluate f(15): f(15) = 7(15) + 33 = 105 + 33 = 138.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-156",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 156,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(1) = -8 and f(6) = 22. What is the value of f(21)?",
    "options": [
      {
        "letter": "A",
        "text": "-112"
      },
      {
        "letter": "B",
        "text": "114"
      },
      {
        "letter": "C",
        "text": "109"
      },
      {
        "letter": "D",
        "text": "112"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "112",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (22 - -8) / (6 - 1) = 30 / 5 = 6.\n2) Find the y-intercept (b) using the equation y = mx + b with point (1, -8):\n   -8 = 6(1) + b  =>  -8 = 6 + b  =>  b = -14.\n3) The function is f(x) = 6x - 14.\n4) Evaluate f(21): f(21) = 6(21) - 14 = 126 - 14 = 112.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-157",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 157,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 2x + 5y = 30?",
    "options": [
      {
        "letter": "A",
        "text": "(6, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -6)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 6)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 6)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 2(0) + 5y = 30 => 5y = 30 => y = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-158",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 158,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Extrapolation",
    "prompt": "For a linear function f, it is given that f(5) = -20 and f(8) = -41. What is the value of f(18)?",
    "options": [
      {
        "letter": "A",
        "text": "111"
      },
      {
        "letter": "B",
        "text": "-113"
      },
      {
        "letter": "C",
        "text": "-108"
      },
      {
        "letter": "D",
        "text": "-111"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "-111",
    "explanation": "1) First, find the slope (m) of the linear function using the formula m = (y2 - y1) / (x2 - x1):\n   m = (-41 - -20) / (8 - 5) = -21 / 3 = -7.\n2) Find the y-intercept (b) using the equation y = mx + b with point (5, -20):\n   -20 = -7(5) + b  =>  -20 = -35 + b  =>  b = 15.\n3) The function is f(x) = -7x + 15.\n4) Evaluate f(18): f(18) = -7(18) + 15 = -126 + 15 = -111.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-159",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 159,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 2x + 5y = -4?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -2)"
      },
      {
        "letter": "B",
        "text": "(2, 0)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(-2, 0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(-2, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 2x + 5(0) = -4 => 2x = -4 => x = -2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-160",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 160,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 4/5 and passes through the points (7, 12) and (22, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 24"
      },
      {
        "letter": "B",
        "text": "k = -24"
      },
      {
        "letter": "C",
        "text": "k = 26"
      },
      {
        "letter": "D",
        "text": "k = 20"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 24",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 4/5 = (k - 12) / (22 - 7).\n3) Simplify the denominator: 4/5 = (k - 12) / 15.\n4) Multiply both sides by 15:\n   (4/5) * 15 = k - 12\n   12 = k - 12\n5) Add 12 to both sides: k = 12 + 12 = 24.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-161",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 161,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/3 and passes through the points (-10, 10) and (-22, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -18"
      },
      {
        "letter": "B",
        "text": "k = 20"
      },
      {
        "letter": "C",
        "text": "k = 18"
      },
      {
        "letter": "D",
        "text": "k = 14"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 18",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/3 = (k - 10) / (-22 - -10).\n3) Simplify the denominator: -2/3 = (k - 10) / -12.\n4) Multiply both sides by -12:\n   (-2/3) * -12 = k - 10\n   8 = k - 10\n5) Add 10 to both sides: k = 8 + 10 = 18.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-162",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 162,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 3/7 and passes through the points (-11, -3) and (17, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -9"
      },
      {
        "letter": "B",
        "text": "k = 9"
      },
      {
        "letter": "C",
        "text": "k = 11"
      },
      {
        "letter": "D",
        "text": "k = 5"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = 9",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 3/7 = (k - -3) / (17 - -11).\n3) Simplify the denominator: 3/7 = (k - -3) / 28.\n4) Multiply both sides by 28:\n   (3/7) * 28 = k - -3\n   12 = k - -3\n5) Add -3 to both sides: k = 12 + -3 = 9.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-163",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 163,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the linear function y = 4x - 12?",
    "options": [
      {
        "letter": "A",
        "text": "(-12, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 12)"
      },
      {
        "letter": "C",
        "text": "(0, -12)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, -12)",
    "explanation": "The equation is in the form y = mx + b, where 'b' is the y-intercept. Therefore, the y-intercept is -12, or the point (0, -12).",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-164",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 164,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 4/7 and passes through the points (13, -7) and (27, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 1"
      },
      {
        "letter": "B",
        "text": "k = -1"
      },
      {
        "letter": "C",
        "text": "k = 3"
      },
      {
        "letter": "D",
        "text": "k = -3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 1",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 4/7 = (k - -7) / (27 - 13).\n3) Simplify the denominator: 4/7 = (k - -7) / 14.\n4) Multiply both sides by 14:\n   (4/7) * 14 = k - -7\n   8 = k - -7\n5) Add -7 to both sides: k = 8 + -7 = 1.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-165",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 165,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 5x + 2y = -15?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -3)"
      },
      {
        "letter": "B",
        "text": "(3, 0)"
      },
      {
        "letter": "C",
        "text": "(-3, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(-3, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 5x + 2(0) = -15 => 5x = -15 => x = -3.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-166",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 166,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/7 and passes through the points (-6, -6) and (8, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 10"
      },
      {
        "letter": "B",
        "text": "k = -10"
      },
      {
        "letter": "C",
        "text": "k = -12"
      },
      {
        "letter": "D",
        "text": "k = -6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = -10",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/7 = (k - -6) / (8 - -6).\n3) Simplify the denominator: -2/7 = (k - -6) / 14.\n4) Multiply both sides by 14:\n   (-2/7) * 14 = k - -6\n   -4 = k - -6\n5) Add -6 to both sides: k = -4 + -6 = -10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-167",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 167,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 5/2 and passes through the points (0, 6) and (4, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -16"
      },
      {
        "letter": "B",
        "text": "k = 18"
      },
      {
        "letter": "C",
        "text": "k = 12"
      },
      {
        "letter": "D",
        "text": "k = 16"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "k = 16",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 5/2 = (k - 6) / (4 - 0).\n3) Simplify the denominator: 5/2 = (k - 6) / 4.\n4) Multiply both sides by 4:\n   (5/2) * 4 = k - 6\n   10 = k - 6\n5) Add 6 to both sides: k = 10 + 6 = 16.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-168",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 168,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -4/7 and passes through the points (0, -14) and (-14, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 6"
      },
      {
        "letter": "B",
        "text": "k = -8"
      },
      {
        "letter": "C",
        "text": "k = -6"
      },
      {
        "letter": "D",
        "text": "k = -2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = -6",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -4/7 = (k - -14) / (-14 - 0).\n3) Simplify the denominator: -4/7 = (k - -14) / -14.\n4) Multiply both sides by -14:\n   (-4/7) * -14 = k - -14\n   8 = k - -14\n5) Add -14 to both sides: k = 8 + -14 = -6.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-169",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 169,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the linear function y = -9x + 1?",
    "options": [
      {
        "letter": "A",
        "text": "(1, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 1)"
      },
      {
        "letter": "C",
        "text": "(0, -1)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(0, 1)",
    "explanation": "The equation is in the form y = mx + b, where 'b' is the y-intercept. Therefore, the y-intercept is 1, or the point (0, 1).",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-170",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 170,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -5/7 and passes through the points (10, 6) and (-18, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -26"
      },
      {
        "letter": "B",
        "text": "k = 26"
      },
      {
        "letter": "C",
        "text": "k = 28"
      },
      {
        "letter": "D",
        "text": "k = 22"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = 26",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -5/7 = (k - 6) / (-18 - 10).\n3) Simplify the denominator: -5/7 = (k - 6) / -28.\n4) Multiply both sides by -28:\n   (-5/7) * -28 = k - 6\n   20 = k - 6\n5) Add 6 to both sides: k = 20 + 6 = 26.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-171",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 171,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 4x + 4y = 24?",
    "options": [
      {
        "letter": "A",
        "text": "(6, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 6)"
      },
      {
        "letter": "C",
        "text": "(-6, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(6, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 4x + 4(0) = 24 => 4x = 24 => x = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-172",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 172,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 3/4 and passes through the points (10, 4) and (26, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -16"
      },
      {
        "letter": "B",
        "text": "k = 18"
      },
      {
        "letter": "C",
        "text": "k = 16"
      },
      {
        "letter": "D",
        "text": "k = 12"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 16",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 3/4 = (k - 4) / (26 - 10).\n3) Simplify the denominator: 3/4 = (k - 4) / 16.\n4) Multiply both sides by 16:\n   (3/4) * 16 = k - 4\n   12 = k - 4\n5) Add 4 to both sides: k = 12 + 4 = 16.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-173",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 173,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 2/5 and passes through the points (1, 13) and (16, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 19"
      },
      {
        "letter": "B",
        "text": "k = -19"
      },
      {
        "letter": "C",
        "text": "k = 21"
      },
      {
        "letter": "D",
        "text": "k = 15"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 19",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 2/5 = (k - 13) / (16 - 1).\n3) Simplify the denominator: 2/5 = (k - 13) / 15.\n4) Multiply both sides by 15:\n   (2/5) * 15 = k - 13\n   6 = k - 13\n5) Add 13 to both sides: k = 6 + 13 = 19.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-174",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 174,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -5/4 and passes through the points (3, 9) and (15, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 6"
      },
      {
        "letter": "B",
        "text": "k = -8"
      },
      {
        "letter": "C",
        "text": "k = -6"
      },
      {
        "letter": "D",
        "text": "k = -2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = -6",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -5/4 = (k - 9) / (15 - 3).\n3) Simplify the denominator: -5/4 = (k - 9) / 12.\n4) Multiply both sides by 12:\n   (-5/4) * 12 = k - 9\n   -15 = k - 9\n5) Add 9 to both sides: k = -15 + 9 = -6.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-175",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 175,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 5x + 3y = 30?",
    "options": [
      {
        "letter": "A",
        "text": "(10, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -10)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 10)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 10)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 5(0) + 3y = 30 => 3y = 30 => y = 10.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-176",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 176,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 3/7 and passes through the points (5, -2) and (26, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 7"
      },
      {
        "letter": "B",
        "text": "k = -7"
      },
      {
        "letter": "C",
        "text": "k = 9"
      },
      {
        "letter": "D",
        "text": "k = 3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 7",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 3/7 = (k - -2) / (26 - 5).\n3) Simplify the denominator: 3/7 = (k - -2) / 21.\n4) Multiply both sides by 21:\n   (3/7) * 21 = k - -2\n   9 = k - -2\n5) Add -2 to both sides: k = 9 + -2 = 7.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-177",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 177,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (-3, 9) and (1, 7)?",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "-1/2"
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
    "correctValue": "-1/2",
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (7 - 9) / (1 - -3) = -2 / 4. Simplified, m = -1/2.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-178",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 178,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -1/3 and passes through the points (7, 14) and (13, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -12"
      },
      {
        "letter": "B",
        "text": "k = 14"
      },
      {
        "letter": "C",
        "text": "k = 8"
      },
      {
        "letter": "D",
        "text": "k = 12"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "k = 12",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -1/3 = (k - 14) / (13 - 7).\n3) Simplify the denominator: -1/3 = (k - 14) / 6.\n4) Multiply both sides by 6:\n   (-1/3) * 6 = k - 14\n   -2 = k - 14\n5) Add 14 to both sides: k = -2 + 14 = 12.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-179",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 179,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/7 and passes through the points (2, 12) and (-19, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -18"
      },
      {
        "letter": "B",
        "text": "k = 20"
      },
      {
        "letter": "C",
        "text": "k = 18"
      },
      {
        "letter": "D",
        "text": "k = 14"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 18",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/7 = (k - 12) / (-19 - 2).\n3) Simplify the denominator: -2/7 = (k - 12) / -21.\n4) Multiply both sides by -21:\n   (-2/7) * -21 = k - 12\n   6 = k - 12\n5) Add 12 to both sides: k = 6 + 12 = 18.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-180",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 180,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 2/3 and passes through the points (-14, -12) and (-2, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 4"
      },
      {
        "letter": "B",
        "text": "k = -6"
      },
      {
        "letter": "C",
        "text": "k = -4"
      },
      {
        "letter": "D",
        "text": "k = 0"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = -4",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 2/3 = (k - -12) / (-2 - -14).\n3) Simplify the denominator: 2/3 = (k - -12) / 12.\n4) Multiply both sides by 12:\n   (2/3) * 12 = k - -12\n   8 = k - -12\n5) Add -12 to both sides: k = 8 + -12 = -4.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-181",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 181,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the linear function y = -5x + 13?",
    "options": [
      {
        "letter": "A",
        "text": "(13, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -13)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(0, 13)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0, 13)",
    "explanation": "The equation is in the form y = mx + b, where 'b' is the y-intercept. Therefore, the y-intercept is 13, or the point (0, 13).",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-182",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 182,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 1/4 and passes through the points (5, 10) and (21, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -14"
      },
      {
        "letter": "B",
        "text": "k = 16"
      },
      {
        "letter": "C",
        "text": "k = 14"
      },
      {
        "letter": "D",
        "text": "k = 10"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 14",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 1/4 = (k - 10) / (21 - 5).\n3) Simplify the denominator: 1/4 = (k - 10) / 16.\n4) Multiply both sides by 16:\n   (1/4) * 16 = k - 10\n   4 = k - 10\n5) Add 10 to both sides: k = 4 + 10 = 14.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-183",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 183,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 6x - 2y = -6?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -1)"
      },
      {
        "letter": "B",
        "text": "(1, 0)"
      },
      {
        "letter": "C",
        "text": "None of the above 2"
      },
      {
        "letter": "D",
        "text": "(-1, 0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(-1, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 6x - 2(0) = -6 => 6x = -6 => x = -1.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-184",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 184,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 1/3 and passes through the points (-14, 4) and (-5, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -7"
      },
      {
        "letter": "B",
        "text": "k = 9"
      },
      {
        "letter": "C",
        "text": "k = 7"
      },
      {
        "letter": "D",
        "text": "k = 3"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 7",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 1/3 = (k - 4) / (-5 - -14).\n3) Simplify the denominator: 1/3 = (k - 4) / 9.\n4) Multiply both sides by 9:\n   (1/3) * 9 = k - 4\n   3 = k - 4\n5) Add 4 to both sides: k = 3 + 4 = 7.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-185",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 185,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 2/3 and passes through the points (4, 6) and (10, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 10"
      },
      {
        "letter": "B",
        "text": "k = -10"
      },
      {
        "letter": "C",
        "text": "k = 12"
      },
      {
        "letter": "D",
        "text": "k = 6"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 10",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 2/3 = (k - 6) / (10 - 4).\n3) Simplify the denominator: 2/3 = (k - 6) / 6.\n4) Multiply both sides by 6:\n   (2/3) * 6 = k - 6\n   4 = k - 6\n5) Add 6 to both sides: k = 4 + 6 = 10.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-186",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 186,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/7 and passes through the points (-7, 7) and (7, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -3"
      },
      {
        "letter": "B",
        "text": "k = 5"
      },
      {
        "letter": "C",
        "text": "k = 3"
      },
      {
        "letter": "D",
        "text": "k = -1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 3",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/7 = (k - 7) / (7 - -7).\n3) Simplify the denominator: -2/7 = (k - 7) / 14.\n4) Multiply both sides by 14:\n   (-2/7) * 14 = k - 7\n   -4 = k - 7\n5) Add 7 to both sides: k = -4 + 7 = 3.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-187",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 187,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = -2x + 15, what is the value of f(2)?",
    "options": [
      {
        "letter": "A",
        "text": "11"
      },
      {
        "letter": "B",
        "text": "-11"
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
    "correctAnswer": "A",
    "correctValue": "11",
    "explanation": "Substitute x = 2 into the function: f(2) = -2(2) + 15 = -4 + 15 = 11.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-188",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 188,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/5 and passes through the points (-12, -10) and (-22, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 6"
      },
      {
        "letter": "B",
        "text": "k = -6"
      },
      {
        "letter": "C",
        "text": "k = -8"
      },
      {
        "letter": "D",
        "text": "k = -2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = -6",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/5 = (k - -10) / (-22 - -12).\n3) Simplify the denominator: -2/5 = (k - -10) / -10.\n4) Multiply both sides by -10:\n   (-2/5) * -10 = k - -10\n   4 = k - -10\n5) Add -10 to both sides: k = 4 + -10 = -6.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-189",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 189,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 2x + 3y = -16?",
    "options": [
      {
        "letter": "A",
        "text": "(0, -8)"
      },
      {
        "letter": "B",
        "text": "(8, 0)"
      },
      {
        "letter": "C",
        "text": "(-8, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(-8, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 2x + 3(0) = -16 => 2x = -16 => x = -8.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-190",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 190,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 2/5 and passes through the points (7, -15) and (27, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 7"
      },
      {
        "letter": "B",
        "text": "k = -7"
      },
      {
        "letter": "C",
        "text": "k = -9"
      },
      {
        "letter": "D",
        "text": "k = -3"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = -7",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 2/5 = (k - -15) / (27 - 7).\n3) Simplify the denominator: 2/5 = (k - -15) / 20.\n4) Multiply both sides by 20:\n   (2/5) * 20 = k - -15\n   8 = k - -15\n5) Add -15 to both sides: k = 8 + -15 = -7.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-191",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 191,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/3 and passes through the points (-2, -11) and (4, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 15"
      },
      {
        "letter": "B",
        "text": "k = -17"
      },
      {
        "letter": "C",
        "text": "k = -15"
      },
      {
        "letter": "D",
        "text": "k = -11"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = -15",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/3 = (k - -11) / (4 - -2).\n3) Simplify the denominator: -2/3 = (k - -11) / 6.\n4) Multiply both sides by 6:\n   (-2/3) * 6 = k - -11\n   -4 = k - -11\n5) Add -11 to both sides: k = -4 + -11 = -15.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-192",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 192,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 2/5 and passes through the points (-14, 10) and (6, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 18"
      },
      {
        "letter": "B",
        "text": "k = -18"
      },
      {
        "letter": "C",
        "text": "k = 20"
      },
      {
        "letter": "D",
        "text": "k = 14"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 18",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 2/5 = (k - 10) / (6 - -14).\n3) Simplify the denominator: 2/5 = (k - 10) / 20.\n4) Multiply both sides by 20:\n   (2/5) * 20 = k - 10\n   8 = k - 10\n5) Add 10 to both sides: k = 8 + 10 = 18.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-193",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 193,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 2x + 4y = 32?",
    "options": [
      {
        "letter": "A",
        "text": "(8, 0)"
      },
      {
        "letter": "B",
        "text": "(0, -8)"
      },
      {
        "letter": "C",
        "text": "(0, 8)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, 8)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 2(0) + 4y = 32 => 4y = 32 => y = 8.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-194",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 194,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -4/3 and passes through the points (4, 2) and (16, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 14"
      },
      {
        "letter": "B",
        "text": "k = -16"
      },
      {
        "letter": "C",
        "text": "k = -14"
      },
      {
        "letter": "D",
        "text": "k = -10"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = -14",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -4/3 = (k - 2) / (16 - 4).\n3) Simplify the denominator: -4/3 = (k - 2) / 12.\n4) Multiply both sides by 12:\n   (-4/3) * 12 = k - 2\n   -16 = k - 2\n5) Add 2 to both sides: k = -16 + 2 = -14.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-195",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 195,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A line has a slope of -3 and passes through the point (0, -7). What is the y-intercept of the line?",
    "options": [
      {
        "letter": "A",
        "text": "(-7, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 7)"
      },
      {
        "letter": "C",
        "text": "(0, -7)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "(0, -7)",
    "explanation": "Use the equation y = mx + b. Substitute m = -3, x = 0, and y = -7: -7 = -3(0) + b => -7 = 0 + b => -7 = b => b = -7.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-196",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 196,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 5/7 and passes through the points (-11, 1) and (3, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 11"
      },
      {
        "letter": "B",
        "text": "k = -11"
      },
      {
        "letter": "C",
        "text": "k = 13"
      },
      {
        "letter": "D",
        "text": "k = 7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = 11",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 5/7 = (k - 1) / (3 - -11).\n3) Simplify the denominator: 5/7 = (k - 1) / 14.\n4) Multiply both sides by 14:\n   (5/7) * 14 = k - 1\n   10 = k - 1\n5) Add 1 to both sides: k = 10 + 1 = 11.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-197",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 197,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -2/5 and passes through the points (6, 0) and (26, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 8"
      },
      {
        "letter": "B",
        "text": "k = -10"
      },
      {
        "letter": "C",
        "text": "k = -8"
      },
      {
        "letter": "D",
        "text": "k = -4"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = -8",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -2/5 = (k - 0) / (26 - 6).\n3) Simplify the denominator: -2/5 = (k - 0) / 20.\n4) Multiply both sides by 20:\n   (-2/5) * 20 = k - 0\n   -8 = k - 0\n5) Add 0 to both sides: k = -8 + 0 = -8.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-198",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 198,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 5/2 and passes through the points (5, 7) and (9, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -17"
      },
      {
        "letter": "B",
        "text": "k = 19"
      },
      {
        "letter": "C",
        "text": "k = 13"
      },
      {
        "letter": "D",
        "text": "k = 17"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "k = 17",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 5/2 = (k - 7) / (9 - 5).\n3) Simplify the denominator: 5/2 = (k - 7) / 4.\n4) Multiply both sides by 4:\n   (5/2) * 4 = k - 7\n   10 = k - 7\n5) Add 7 to both sides: k = 10 + 7 = 17.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-199",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 199,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "If f(x) = 3x + 5, what is the value of f(-2)?",
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
        "text": "-3"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "-1",
    "explanation": "Substitute x = -2 into the function: f(-2) = 3(-2) + 5 = -6 + 5 = -1.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-200",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 200,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -1/4 and passes through the points (10, -14) and (22, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 17"
      },
      {
        "letter": "B",
        "text": "k = -17"
      },
      {
        "letter": "C",
        "text": "k = -19"
      },
      {
        "letter": "D",
        "text": "k = -13"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = -17",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -1/4 = (k - -14) / (22 - 10).\n3) Simplify the denominator: -1/4 = (k - -14) / 12.\n4) Multiply both sides by 12:\n   (-1/4) * 12 = k - -14\n   -3 = k - -14\n5) Add -14 to both sides: k = -3 + -14 = -17.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-201",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 201,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the slope of the line that passes through the points (1, -2) and (2, -3)?",
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
    "explanation": "The slope formula is m = (y2 - y1) / (x2 - x1). Substituting the points: m = (-3 - -2) / (2 - 1) = -1 / 1. Simplified, m = -1.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-202",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 202,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 3/4 and passes through the points (-2, -6) and (-18, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -18"
      },
      {
        "letter": "B",
        "text": "k = 18"
      },
      {
        "letter": "C",
        "text": "k = -20"
      },
      {
        "letter": "D",
        "text": "k = -14"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = -18",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 3/4 = (k - -6) / (-18 - -2).\n3) Simplify the denominator: 3/4 = (k - -6) / -16.\n4) Multiply both sides by -16:\n   (3/4) * -16 = k - -6\n   -12 = k - -6\n5) Add -6 to both sides: k = -12 + -6 = -18.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-203",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 203,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 4/3 and passes through the points (2, -3) and (8, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -5"
      },
      {
        "letter": "B",
        "text": "k = 5"
      },
      {
        "letter": "C",
        "text": "k = 7"
      },
      {
        "letter": "D",
        "text": "k = 1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = 5",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 4/3 = (k - -3) / (8 - 2).\n3) Simplify the denominator: 4/3 = (k - -3) / 6.\n4) Multiply both sides by 6:\n   (4/3) * 6 = k - -3\n   8 = k - -3\n5) Add -3 to both sides: k = 8 + -3 = 5.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-204",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 204,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 1/4 and passes through the points (7, 13) and (-1, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -11"
      },
      {
        "letter": "B",
        "text": "k = 13"
      },
      {
        "letter": "C",
        "text": "k = 7"
      },
      {
        "letter": "D",
        "text": "k = 11"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "k = 11",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 1/4 = (k - 13) / (-1 - 7).\n3) Simplify the denominator: 1/4 = (k - 13) / -8.\n4) Multiply both sides by -8:\n   (1/4) * -8 = k - 13\n   -2 = k - 13\n5) Add 13 to both sides: k = -2 + 13 = 11.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-205",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 205,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "What is the y-intercept of the line given by the equation 5x + 4y = 24?",
    "options": [
      {
        "letter": "A",
        "text": "(0, 6)"
      },
      {
        "letter": "B",
        "text": "(6, 0)"
      },
      {
        "letter": "C",
        "text": "(0, -6)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(0, 6)",
    "explanation": "To find the y-intercept, set x = 0 and solve for y: 5(0) + 4y = 24 => 4y = 24 => y = 6.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-206",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 206,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of -3/7 and passes through the points (-6, -7) and (-34, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -5"
      },
      {
        "letter": "B",
        "text": "k = 7"
      },
      {
        "letter": "C",
        "text": "k = 5"
      },
      {
        "letter": "D",
        "text": "k = 1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "k = 5",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: -3/7 = (k - -7) / (-34 - -6).\n3) Simplify the denominator: -3/7 = (k - -7) / -28.\n4) Multiply both sides by -28:\n   (-3/7) * -28 = k - -7\n   12 = k - -7\n5) Add -7 to both sides: k = 12 + -7 = 5.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-207",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 207,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "What is the x-intercept of the linear function 3x + 5y = 3?",
    "options": [
      {
        "letter": "A",
        "text": "(1, 0)"
      },
      {
        "letter": "B",
        "text": "(0, 1)"
      },
      {
        "letter": "C",
        "text": "(-1, 0)"
      },
      {
        "letter": "D",
        "text": "None of the above 2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "(1, 0)",
    "explanation": "To find the x-intercept, set y = 0 and solve for x: 3x + 5(0) = 3 => 3x = 3 => x = 1.",
    "sourceFile": "Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-208",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 208,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 1/2 and passes through the points (2, -3) and (-4, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -6"
      },
      {
        "letter": "B",
        "text": "k = 6"
      },
      {
        "letter": "C",
        "text": "k = -8"
      },
      {
        "letter": "D",
        "text": "k = -2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "k = -6",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 1/2 = (k - -3) / (-4 - 2).\n3) Simplify the denominator: 1/2 = (k - -3) / -6.\n4) Multiply both sides by -6:\n   (1/2) * -6 = k - -3\n   -3 = k - -3\n5) Add -3 to both sides: k = -3 + -3 = -6.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-209",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 209,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 3/7 and passes through the points (-2, 13) and (-16, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = -7"
      },
      {
        "letter": "B",
        "text": "k = 9"
      },
      {
        "letter": "C",
        "text": "k = 3"
      },
      {
        "letter": "D",
        "text": "k = 7"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "k = 7",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 3/7 = (k - 13) / (-16 - -2).\n3) Simplify the denominator: 3/7 = (k - 13) / -14.\n4) Multiply both sides by -14:\n   (3/7) * -14 = k - 13\n   -6 = k - 13\n5) Add 13 to both sides: k = -6 + 13 = 7.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "m-alg-3-210",
    "source": "unknown",
    "license_note": "Unverified source origin (DOCX import); pending license review",
    "num": 210,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Advanced Coordinate Geometry",
    "prompt": "A line in the xy-plane has a slope of 3/2 and passes through the points (3, -14) and (7, k). What is the value of k?",
    "options": [
      {
        "letter": "A",
        "text": "k = 8"
      },
      {
        "letter": "B",
        "text": "k = -8"
      },
      {
        "letter": "C",
        "text": "k = -10"
      },
      {
        "letter": "D",
        "text": "k = -4"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k = -8",
    "explanation": "1) Use the slope formula: m = (y2 - y1) / (x2 - x1).\n2) Substitute the known values: 3/2 = (k - -14) / (7 - 3).\n3) Simplify the denominator: 3/2 = (k - -14) / 4.\n4) Multiply both sides by 4:\n   (3/2) * 4 = k - -14\n   6 = k - -14\n5) Add -14 to both sides: k = 6 + -14 = -8.",
    "sourceFile": "Advanced_Linear_Functions_SAT_Questions.docx"
  },
  {
    "id": "satqb-3d1070c9",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 211,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function fis defined by f(z) = 252 + 30. What is the value of f(x) when z = 2?",
    "options": [
      {
        "letter": "A",
        "text": "50"
      },
      {
        "letter": "B",
        "text": "57"
      },
      {
        "letter": "C",
        "text": "80"
      },
      {
        "letter": "D",
        "text": "110"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "80",
    "explanation": "Choice C is correct. It's given that the function f is defined by f(z) = 25 + 30. Substituting 2 for z in this equation yields £(2) = 25(2)\n+ 30, which is equivalent to £(2) = 50 + 30, or £(2) = 80. Therefore, the value of f(z) is 80 when z = 2.\nChoice A is incorrect. This is the value of 25(2), not 25(2) + 30.\nChoice B is incorrect. This is the value of 25 + 2 + 30, not 25(2) + 30.\nChoice D is incorrect. This is the value of (25 + 30)(2), not 25(2) + 30.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-bd9eb2b5",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 212,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 8z. For what value of z does f(z) = 72?",
    "options": [
      {
        "letter": "A",
        "text": "8"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "64"
      },
      {
        "letter": "D",
        "text": "80"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "9",
    "explanation": "Choice B is correct. Substituting 72 for f (z) in the given function yields 72 = 8g. Dividing each side of this equation by 8 yields 9 = z.\nTherefore, f (z) = 72 when the value of zis 9.\nChoice A is incorrect. This is the value of for which f (z) = 64, not f (z) = 72.\nChoice C is incorrect. This is the value of z for which f () = 512, not f (z) = 72.\nChoice D is incorrect. This is the value of for which f (z) = 640, not f (z) = 72.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1480dd5c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 213,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "fz)=4z +b\nFor the linear function £, bis a constant and (7) = 28. What is the value of b?",
    "options": [
      {
        "letter": "A",
        "text": "Q"
      },
      {
        "letter": "B",
        "text": "1"
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
    "correctAnswer": "A",
    "correctValue": "Q",
    "explanation": "Choice A is correct. For the linear function f, it's given that f (7) = 28. Substituting 7 for and 28 for f () in the given function yields 28\n= 4(7) +b, or 28 = 28 + b. Subtracting 28 from each side of this equation yields 0 = b. Therefore, the value of bis 0.\nChoice B is incorrect. Substituting 1 for bin the given function yields f (z) = 4x + 1. For this function, when the value of z is 7, the value of\nf(z) is 29,not 28.\nChoice C is incorrect. Substituting 4 for bin the given function yields f (z) = 4z + 4. For this function, when the value of is 7, the value of\nf(x) is 32, not 28.\nChoice D is incorrect. Substituting 7 for bin the given function yields f (z) = 4z + 7. For this function, when the value of is 7, the value of\nf(z) is 35, not 28.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0d6ab461",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 214,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Gabriella deposits $35 in a savings account at the end of each week. At the beginning of the 18t week of a year there was $600 in that savings\naccount. How much money, in dollars, will be in the account at the end of the 4th week of that year?",
    "options": [
      {
        "letter": "A",
        "text": "460"
      },
      {
        "letter": "B",
        "text": "635"
      },
      {
        "letter": "C",
        "text": "639"
      },
      {
        "letter": "D",
        "text": "740"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "740",
    "explanation": "Choice D is correct. It's given that at the beginning of the 1st week of the year there was $600 in a savings account and Gabriella deposits $35 in\nthat savings account at the end of each week. Therefore, the amount of money, in dollars, in the savings account at the end of the 4th week of\nthat year is 600 + 4(35), or 740.\nChoice A is incorrect. This is the amount of money, in dollars, that will be in the account at the end of the 4th week if Gabriella withdraws, rather\nthan deposits, $35 at the end of each week.\nChoice B is incorrect. This is the amount of money, in dollars, that will be in the account at the end of the 1st week, not the 4th week.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-520c8177",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 215,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A veterinarian recommends that each day a certain rabbit should eat 25 calories per pound of the rabbit's weight, plus an additional 11 calories.\nWhich equation represents this situation, where ¢is the total number of calories the veterinarian recommends the rabbit should eat each day if\nthe rabbit's weight is z pounds?",
    "options": [
      {
        "letter": "A",
        "text": "c=25z"
      },
      {
        "letter": "B",
        "text": "c = 36z"
      },
      {
        "letter": "C",
        "text": "e=1lx +25"
      },
      {
        "letter": "D",
        "text": "c=25z +11"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "c=25z +11",
    "explanation": "Choice D is correct. It's given that a veterinarian recommends that each day the rabbit should eat 25 calories per pound of the rabbit's weight,\nplus an additional 11 calories. If the rabbit's weight is £ pounds, then multiplying 25 calories per pound by the rabbit's weight, Z pounds, yields\n252 calories. Adding the additional 11 calories that the rabbit should eat each day yields 252 + 11 calories. It's given that c is the total number\nof calories the veterinarian recommends the rabbit should eat each day if the rabbit's weight is & pounds. Therefore, this situation can be\nrepresented by the equation ¢ = 25x + 11.\nChoice A is incorrect. This equation represents a situation where a veterinarian recommends that each day the rabbit should eat 25 calories per\npound of the rabbit's weight.\nChoice B is incorrect. This equation represents a situation where a veterinarian recommends that each day the rabbit should eat 25 + 11, or 36,\ncalories per pound of the rabbit's weight.\nChoice C is incorrect. This equation represents a situation where a veterinarian recommends that each day the rabbit should eat 11 calories per\npound of the rabbit's weight, plus an additional 25 calories.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-88e13c8c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 216,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The total cost f(z), in dollars, to lease a car for 36 months from a particular car dealership is given by f(z) = 36z + 1,000, where z is the\nmonthly payment, in dollars. What is the total cost to lease a car when the monthly payment is $400?",
    "options": [
      {
        "letter": "A",
        "text": "$13,400"
      },
      {
        "letter": "B",
        "text": "$13,000"
      },
      {
        "letter": "C",
        "text": "$15,400"
      },
      {
        "letter": "D",
        "text": "$37,400"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "$15,400",
    "explanation": "Choice C is correct. It's given that f(z) is the total cost, in dollars, to lease a car from this dealership with a monthly payment of z dollars.\nTherefore, the total cost, in dollars, to lease the car when the monthly payment is $400 is represented by the value of f(z) when z = 400.\nSubstituting 400 for Z in the equation f(x) = 36x + 1,000 yields f(400) = 36(400) + 1,000, or £(400) = 15,400. Thus, when the\nmonthly payment is $400, the total cost to lease a car is $15,400\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-8c5e6702",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 217,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A window repair specialist charges $220 for the first two hours of repair plus an hourly fee for each additional hour. The total cost for 5 hours of\nrepair is $400. Which function f gives the total cost, in dollars, for hours of repair, where z > 2?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) = 60z + 100"
      },
      {
        "letter": "B",
        "text": "f(z) = 60z + 220"
      },
      {
        "letter": "C",
        "text": "f(x) = 80z"
      },
      {
        "letter": "D",
        "text": "f(z) = 80x + 220"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "f(z) = 60z + 100",
    "explanation": "Choice A is correct. It's given that the window repair specialist charges $220 for the first two hours of repair plus an hourly fee for each\nadditional hour. Let 1 represent the hourly fee for each additional hour after the first two hours. Since it's given that & is the number of hours of\nrepair, it follows that the charge generated by the hourly fee after the first two hours can be represented by the expression n(z — 2). Therefore,\nthe total cost, in dollars, for & hours of repair is f(x) = 220 + n(z — 2). It's given that the total cost for 5 hours of repair is $400. Substituting\n5 for and 400 for f(z) into the equation f(z) = 220 + n(z — 2) yields 400 = 220 + n(5 — 2), or 400 = 220 + 3n. Subtracting 220\nfrom both sides of this equation yields 180 = 3n. Dividing both sides of this equation by 3 yields 7 = 60. Substituting 60 for 72 in the equation\n\nf(z) = 220 + n(z — 2) yields f(x) = 220+ 60(x — 2), which is equivalent to f(z) = 220 + 60z — 120, or f(z) = 60x + 100.\nTherefore, the total cost, in dollars, for z hours of repairis f(z) = 60z + 100.\nChoice B is incorrect. This function represents the total cost, in dollars, for z hours of repair where the specialist charges $340, rather than $220,\nfor the first two hours of repair.\nChoice C is incorrect. This function represents the total cost, in dollars, for Z hours of repair where the specialist charges $160, rather than $220,\nfor the first two hours of repair, and an hourly fee of $80, rather than $60, after the first two hours.\nChoice D is incorrect. This function represents the total cost, in dollars, for hours of repair where the specialist charges $380, rather than $220,\nfor the first two hours of repair, and an hourly fee of $80, rather than $60, after the first two hours.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-548a4929",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 218,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function his defined by h(z) = 4z + 28. The graph of y = A(z) in the xy-plane has an x-intercept at (a, 0) and a y-intercept at (0, b),\n\nwhere a and b are constants. What is the value of a + b?",
    "options": [
      {
        "letter": "A",
        "text": "21"
      },
      {
        "letter": "B",
        "text": "28"
      },
      {
        "letter": "C",
        "text": "32"
      },
      {
        "letter": "D",
        "text": "35"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "21",
    "explanation": "Choice Ais correct. The x-intercept of a graph in the xy-plane is the point on the graph where y = 0. It's given that function h is defined by h(z)\n\n= 4x + 28. Therefore, the equation representing the graph of y = h(z) is y = 4x + 28. Substituting 0 for in the equation y = 4x + 28\n\nyields 0 = 4 + 28. Subtracting 28 from both sides of this equation yields —28 = 4z. Dividing both sides of this equation by 4 yields —7 = =.\n\nTherefore, the x-intercept of the graph of y = h(x) in the xy-plane is (—7, 0). It's given that the x-intercept of the graph of y = h(z) is (a, 0).\n\nTherefore, @ = —7. The y-intercept of a graph in the xy-plane is the point on the graph where & = 0. Substituting 0 for & in the equation\n\ny = 4x + 28 yields y = 4(0) + 28, or y = 28. Therefore, the y-intercept of the graph of y = h(x) in the xy-plane is (0, 28). It's given that the\n\ny-intercept of the graph of y = h(z) is (0, b). Therefore, b = 28. If a = —7 and b = 28, then the value of a + bis —7 + 28, or 21.\n\nChoice B is incorrect. This is the value of b, not a + b.\n\nChoice C is incorrect and may result from conceptual or calculation errors.\n\nChoice D is incorrect. This is the value of —a + b, not a + b.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-2b15d65f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 219,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "An economist modeled the demand Q for a certain product as a linear function of the selling price P. The demand was 20,000 units when the\nselling price was $40 per unit, and the demand was 15,000 units when the selling price was $60 per unit. Based on the model, what is the\ndemand, in units, when the selling price is $55 per unit?",
    "options": [
      {
        "letter": "A",
        "text": "16,250"
      },
      {
        "letter": "B",
        "text": "16,500"
      },
      {
        "letter": "C",
        "text": "16,750"
      },
      {
        "letter": "D",
        "text": "17,500"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "16,250",
    "explanation": "Choice A is correct. Let the economist’s model be the linear function @Q = m/P + b, where Q is the demand, P is the selling price, m is the slope\nof the line, and b is the y-coordinate of the y-intercept of the line in the xy-plane, where y = Q. Two pairs of the selling price P and the demand Q\nare given. Using the coordinate pairs (P,Q), two points that satisfy the function are (40, 20,000) and (60, 15,000). The slope m of the\n) : Q—Qq _ ) ! 15,000—20,000\nfunction can be found using the formula /17 = ——————. Substituting the given values into this formula yields m = —————,\nPy—P, 60-40\nor m= —250. Therefore, Q = —250P + b. The value of b can be found by substituting one of the points into the function. Substituting\nthe values of P and Q from the point (40,220,000) yields 20,000 = —250(40) + b, or 20,000 = — 10,000 + b. Adding 10,000 to\nboth sides of this equation yields H = 30,000. Therefore, the linear function the economist used as the model is Q = —250P + 30,000.\nSubstituting 55 for P yields Q = —250(55) + 30,000 = 16,250. it follows that when the selling price is $55 per unit, the demand is\n16,250 units.\nChoices B, C, and D are incorrect and may result from calculation or conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3a3b95df",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 220,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "= z\nd=16—%\nThe equation shown gives the estimated amount of diesel d, in gallons, that remains in the gas tank of a truck after being driven miles, where 0\n< x < 480. What is the estimated amount of diesel, in gallons, that remains in the gas tank of the truck when z = 300?",
    "options": [
      {
        "letter": "A",
        "text": "O"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "Choice B is correct. It's given that the equation d= 16 — El gives the estimated amount of diesel d, in gallons, that remains in the gas tank of\nthe truck after being driven miles. Substituting 300 for z in the given equation yields d = 16 — i, which is equivalent to d = 16 — 10, or\nd = 6. Therefore, the estimated amount of diesel that remains in the gas tank of the truck when z = 300 is 6 gallons.\nChoice A is incorrect. This is the estimated amount of diesel, in gallons, that will remain in the gas tank of the truck when & = 480, not when\nz = 300.\nChoice C is incorrect. This is the estimated amount of diesel, in gallons, that will remain in the gas tank of the truck when z = 60, not when\nz = 300.\nChoice D is incorrect. This is the estimated amount of diesel, in gallons, that will remain in the gas tank of the truck when & = 0, not when\nz = 300.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-be9cb6a2",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 221,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The cost of renting a backhoe for up to 10 days is $270 for the first day and $135 for each additional day. Which of the following equations\ngives the cost g, in dollars, of renting the backhoe for z days, where z is a positive integer and  < 10?",
    "options": [
      {
        "letter": "A",
        "text": "y=270z—135"
      },
      {
        "letter": "B",
        "text": "y = 270z +135"
      },
      {
        "letter": "C",
        "text": "y = 135z +270"
      },
      {
        "letter": "D",
        "text": "y = 135z + 135"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y = 135z + 135",
    "explanation": "Choice D is correct. It's given that the cost of renting a backhoe for up to 10 days is $270 for the first day and $185 for each additional day.\nTherefore, the cost g, in dollars, for z days, where z < 10, is the sum of the cost for the first day, $270, and the cost for the additional z — 1\ndays, $135(z — 1). It follows that y = 270 + 135(z — 1), which is equivalent to y = 270 + 1352 — 135, or y = 135z + 135.\nChoice A is incorrect. This equation represents a situation where the cost of renting a backhoe is $135 for the first day and $270 for each\nadditional day.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-84664a7c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 222,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The front of a roller-coaster car is at the bottom of a hill and is 15 feet above the ground. If the front of the roller-coaster car rises at a constant\nrate of 8 feet per second, which of the following equations gives the height h, in feet, of the front of the roller-coaster car s seconds after it starts\nup the hill?",
    "options": [
      {
        "letter": "A",
        "text": "h=8s+15 335"
      },
      {
        "letter": "B",
        "text": "h=15s+—— 335"
      },
      {
        "letter": "C",
        "text": "h=8s+—— 15"
      },
      {
        "letter": "D",
        "text": "h=15s+8"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "h=8s+15 335",
    "explanation": "Choice A is correct. It's given that the front of the roller-coaster car starts rising when it's 15 feet above the ground. This initial height of 15 feet\ncan be represented by a constant term, 15, in an equation. Each second, the front of the roller-coaster car rises 8 feet, which can be represented\nby 8s. Thus, the equation i = 8S + 15 gives the height, in feet, of the front of the roller-coaster car s seconds after it starts up the hill.\nChoices B and C are incorrect and may result from conceptual errors in creating a linear equation. Choice D is incorrect and may result from\nswitching the rate at which the roller-coaster car rises with its initial height.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e62cfe5f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 223,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "According to a model, the head width, in millimeters, of a worker bumblebee can be estimated by adding 0.6 to four times the body weight of the\nbee, in grams. According to the model, what would be the head width, in millimeters, of a worker bumblebee that has a body weight of 0.5\ngrams?",
    "options": [],
    "correctAnswer": "2.6",
    "correctValue": "2.6",
    "explanation": "The correct answer is 2.6. According to the model, the head width, in millimeters, of a worker bumblebee can be estimated by adding 0.6 to 4\ntimes the body weight, in grams, of the bee. Let x represent the body weight, in grams, of a worker bumblebee and let y represent the head width,\nin millimeters. Translating the verbal description of the model into an equation yields y = 0.6 + 4x. Substituting 0.5 grams for x in this\nequation yields y = 0.6 +4(0.5), or y = 2.6. Therefore, a worker bumblebee with a body weight of 0.5 grams has an estimated head width\nof 2.6 millimeters. Note that 2.6 and 13/5 are examples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-7fac16fb",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 224,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = Lz+ 55. What is the value of £(20)?",
    "options": [],
    "correctAnswer": "69",
    "correctValue": "69",
    "explanation": "The correct answer is 69. The value of (20) can be found by evaluating the function f(z) = Le+ 55 for z = 20. Substituting 20 for z in\nthis function yields £(20) = 5 (20) + 55, or £(20) = 69. Therefore, the value of £(20) is 69.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-06fc1726",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 225,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": ". ) ) 2x—1\n\nIf f is the function defined by f(x) = 3 what is the value of £(5)?",
    "options": [
      {
        "letter": "A",
        "text": "4 \"3"
      },
      {
        "letter": "B",
        "text": "L 3"
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
    "correctValue": "3",
    "explanation": "2x—1 25-1 _ 10-1 _ 9\nChoice Cis correct. If f(x) = ———,then f(5)= ——— = ————=—=3.\nfl 3 fl 3 3 3\n\nChoice A is incorrect and may result from not multiplying x by 2 in the numerator. Choice B is incorrect and may result from dividing 2x by 3 and\nthen subtracting 1. Choice D is incorrect and may result from evaluating only the numerator 2x — 1.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-d4572f55",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 226,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "+23\n[ 0 [t+46\nFor a linear relationship between x and g, the table gives three values of 2 and their corresponding values of y, where is a constant. Which\nequation represents this relationship?",
    "options": [
      {
        "letter": "A",
        "text": "y=-—2z+t+23"
      },
      {
        "letter": "B",
        "text": "y=2r+t+23"
      },
      {
        "letter": "C",
        "text": "y=—Zz+t+46"
      },
      {
        "letter": "D",
        "text": "y=2z+t+46"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y=2z+t+46",
    "explanation": "Choice D is correct. It's given that for a linear relationship between Z and g, the table gives three values of Z and their corresponding values of y.\nA linear equation can be written in the form y = ma + b, where m is the slope and (o, b) is the y-intercept of the graph of the equation in the xy-\nplane. The slope of a line that passes through the points (1, %1) and (2, ¥2) can be calculated using the formula m = = Substituting (\n—34,t) and (—17, + 23) for (21, y1) and (3, y2), respectively, in the formula m = en yieldsm = EY which is equivalent to\nm= Het orm= 5 Based on the table, the graph of this relationship passes through the point (0, ¢ + 46). It follows that b= ¢ + 46.\nSubstituting z for mand t + 46 for bin the equationyy = mz + b yields y = By + t + 46. Therefore, the equation y = By +1t+46\nrepresents this relationship.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e3cf671f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 227,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f is defined by f(z) = 4z + k(z — 1), where k is a constant, and f(5) = 32. What is the value of f(10)?",
    "options": [],
    "correctAnswer": "67",
    "correctValue": "67",
    "explanation": "The correct answer is 67. It's given that (5) = 32. Therefore, for the given function f, when & = 5, f(z) = 32. Substituting 5 for z and 32 for\nf(z) in the given function f(z) = 4x + k(z — 1) yields 32 = 4(5) + k(5 — 1), or 32 = 20 + 4k. Subtracting 20 from each side of this\nequation yields 12 = 4k. Dividing each side of this equation by 4 yields k = 3. Substituting 8 for k in the given function f(z) = 4z\n+ k(x — 1) yields f(z) = 4x + 3(z — 1), which is equivalent to f(x) = 4& + 3z — 3, or f(z) = 7x — 3. Substituting 10 for z into this\nequation yields f(10) = 7(10) — 3, or f(10) = 67. Therefore, the value of f(10) is 67.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-6863c7ce",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 228,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "d=16t\nThe given equation represents the distance d, in inches, where # represents the number of seconds since an object started moving. Which of the\nfollowing is the best interpretation of 16 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The object moved a total of 16 inches."
      },
      {
        "letter": "B",
        "text": "The object moved a total of 16¢ inches."
      },
      {
        "letter": "C",
        "text": "The object is moving at a rate of 16 inches per second."
      },
      {
        "letter": "D",
        "text": "The object is moving at a rate of = inches per second."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The object is moving at a rate of 16 inches per second.",
    "explanation": "Choice C is correct. It's given that in the equation d = 16, d represents the distance, in inches, and represents the number of seconds since an\nobject started moving. In this equation, £ is being multiplied by 16. This means that the object's distance increases by 16 inches each second.\nTherefore, the best interpretation of 16 in this context is that the object is moving at a rate of 16 inches per second.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect. This is the best interpretation of 16¢, rather than 16, in this context.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0b332f00",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 229,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function g is defined by g() = 6z. For what value of z is g(x) = 54?",
    "options": [],
    "correctAnswer": "9",
    "correctValue": "9",
    "explanation": "The correct answer is 9. It's given that g(z) = 62. Substituting 54 for g() in the given function yields 54 = 6z. Dividing both sides of this\nequation by 6 yields £ = 9. Therefore, the value of z when g(z) = 54 is 9.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-8b9960b2",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 230,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The owner of a bakery is giving away free muffins every hour. The equation f (z) = 108 — 9z gives the number of free muffins, f (z), that\nremain to be given away after z hours. Which of the following is the best interpretation of f (12) = 0 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The owner of the bakery has 12 free muffins to give away."
      },
      {
        "letter": "B",
        "text": "The owner of the bakery will give away 12 free muffins in 9 hours."
      },
      {
        "letter": "C",
        "text": "It will take 12 hours to give away all the free muffins."
      },
      {
        "letter": "D",
        "text": "It will take 108 hours to give away 12 free muffins."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "It will take 12 hours to give away all the free muffins.",
    "explanation": "Choice C is correct. It's given that the equation f(z) = 108 — 9z represents the number of free muffins that remain to be given away after\nhours. For the given equation £(12) = 0, when the value of zis 12, the value of f(z) is 0. It follows that after 12 hours there are 0 free muffins\nremaining to be given away. Therefore, based on this context, it will take 12 hours to give away all the free muffins.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This represents giving away 12 muffins over 108 hours rather than giving away all 108 muffins in 12 hours.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-7e3f8363",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 231,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the xy-plane, the graph of the linear function f contains the points (0, 3) and (7, 31). Which equation defines f, where y = f(z)?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) = 28x +34"
      },
      {
        "letter": "B",
        "text": "f(x) =3z +38"
      },
      {
        "letter": "C",
        "text": "f(z)=4z+3"
      },
      {
        "letter": "D",
        "text": "f(z)=Tz+3"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "f(z)=4z+3",
    "explanation": "Choice C is correct. In the xy-plane, an equation of the graph of a linear function can be written in the form f(z) = mx + b, where m represents\nthe slope and (0, b) represents the y-intercept of the graph of y = f(z). It's given that the graph of the linear function f, where y= f(z), in\nthe xy-plane contains the point o, 3). Thus, b = 3. The slope of the graph of a line containing any two points (z1, v1) and (22,92) can be\nfound using the slope formula, m = = Since it's given that the graph of the linear function f contains the points (0, 3) and (7, 31), it\nfollows that the slope of the graph of the line containing these points is m = a3 orm = 4. Substituting 4 for m and 8 for bin f(z) =mz\n+ byields f(z) =4z +3.\nChoice A is incorrect. This function represents a graph with a slope of 28 and a y-intercept of (0, 34).\nChoice B is incorrect. This function represents a graph with a slope of 3 and a y-intercept of (0, 38).\nChoice D is incorrect. This function represents a graph with a slope of 7 and a y-intercept of (0, 3).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0eae6be1",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 232,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The number y is 84 less than the number z. Which equation represents the relationship between z and gy?",
    "options": [
      {
        "letter": "A",
        "text": "y=z+84 =L"
      },
      {
        "letter": "B",
        "text": "y=Fz"
      },
      {
        "letter": "C",
        "text": "y=84zx"
      },
      {
        "letter": "D",
        "text": "y=z—84"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y=z—84",
    "explanation": "Choice D is correct. It's given that the number y is 84 less than the number z. A number that's 84 less than the number z is equivalent to 84\nsubtracted from the number z, or z — 84. Therefore, the equation y = x — 84 represents the relationship between z and y.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-361f97c7",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 233,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 4z — 3. What is the value of f(10)?",
    "options": [
      {
        "letter": "A",
        "text": "—30"
      },
      {
        "letter": "B",
        "text": "37"
      },
      {
        "letter": "C",
        "text": "40"
      },
      {
        "letter": "D",
        "text": "43"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "37",
    "explanation": "Choice B is correct. It's given that the function f is defined by f(z) = 4z — 3. Substituting 10 for z in the given function yields f(10) = 4(10)\n— 3, which is equivalent to £(10) = 40 — 3, or f(10) = 37. Therefore, the value of £(10) is 37.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the value of f(10) for the function f(z) = 4, not f(z) = 4z — 3.\nChoice D is incorrect. This is the value of f(10) for the function f(z) = 4z + 3, not f(z) = 4z — 3.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-447fa970",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 234,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by the equation f(z) = 7z + 2. What is the value of f(z) when z = 4?",
    "options": [],
    "correctAnswer": "30",
    "correctValue": "30",
    "explanation": "The correct answer is 30. The value of f(z) when Z = 4 can be found by substituting 4 for z in the given equation f(z) = Tz + 2. This yields\nF(4) =7(4) + 2, or f(4) = 30. Therefore, when = 4, the value of f(z) is 30.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3dffe9d2",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 235,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Josie purchased a pass that cost $19.50 to tour a nature preserve. She also purchased 10 identical stickers to give to her nieces and nephews.\nThe pass and the stickers cost $62.00 total. What was the cost of one sticker?",
    "options": [
      {
        "letter": "A",
        "text": "$1.95"
      },
      {
        "letter": "B",
        "text": "$4.25"
      },
      {
        "letter": "C",
        "text": "$6.20"
      },
      {
        "letter": "D",
        "text": "$8.15"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "$4.25",
    "explanation": "Choice B is correct. It's given that Josie purchased a pass to tour a nature preserve and 10 identical stickers for $62.00 total. It's also given that\nthe pass cost $19.50. Let & represent the cost, in dollars, of one sticker. This relationship can be represented by the equation 19.50 + 10z\n= 62. Subtracting 19.50 from both sides of this equation yields 102 = 42.50. Dividing both sides of this equation by 10 yields z = 4.25.\nTherefore, the cost of one sticker was $4.25.\nChoice A is incorrect. This is the cost of one sticker if Josie purchased 10 identical stickers for $19.50, not a pass and 10 identical stickers for\n$62.00.\nChoice C is incorrect. This is the cost of one sticker if Josie purchased 10 identical stickers for $62.00, not a pass and 10 identical stickers for\n$62.00.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c039b198",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 236,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A computer company pays customers for trading in old computers. The payment p, in dollars, is the original retail price of a computer minus\n$150 for each year since the computer was released. Which equation represents this situation for a computer with an original retail price of\n$690 when it was released ¢ years ago, where ¢ is a whole number and 1 < t < 4?",
    "options": [
      {
        "letter": "A",
        "text": "p= 150 — 690t"
      },
      {
        "letter": "B",
        "text": "p= 690 — 150¢"
      },
      {
        "letter": "C",
        "text": "t=150 — 690p"
      },
      {
        "letter": "D",
        "text": "t= 690 — 150p"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "p= 690 — 150¢",
    "explanation": "Choice B is correct. It's given that the payment p, in dollars, for trading in an old computer is the original retail price of the computer minus $150\nfor each year since the computer was released ¢ years ago. It's also given that the original retail price of a computer was $690. Thus, the\nequation that represents this situation is p = 690 — 150¢.\nChoice A is incorrect. This equation represents a situation for a computer with an original retail price of $150 minus $690 for each year since the\ncomputer was released.\nChoice C is incorrect and may result from conceptual errors.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-27198699",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 237,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "As part of a science project on evaporation, Amaya measured the height of a liquid in a container over a period of time. The function f(z) = 33\n— 0.18z gives the estimated height, in centimeters (cm), of the liquid in the container z days after the start of the project. Which of the following\nis the best interpretation of 33 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The estimated height, in cm, of the liquid at the start of the project"
      },
      {
        "letter": "B",
        "text": "The estimated height, in cm, of the liquid at the end of the project"
      },
      {
        "letter": "C",
        "text": "The estimated change in the height, in cm, of the liquid each day"
      },
      {
        "letter": "D",
        "text": "The estimated number of days for all of the liquid to evaporate"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The estimated height, in cm, of the liquid at the start of the project",
    "explanation": "Choice A is correct. It's given that the function f(z) = 33 — 0.18 gives the estimated height, in centimeters (cm), of the liquid in the container\nx days after the start of the project. For a linear function in the form f(z) = a + ba, where a and b are constants, a represents the value of\n£(0) and b represents the rate of change of the function. It follows that in the given function, 33 represents the value of £(0). Therefore, the best\ninterpretation of 33 in this context is the estimated height, in cm, of the liquid at the start of the project.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. The estimated change in the height, in cm, of the liquid each day is 0.18, not 33.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c1bd5301",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 238,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Amodel predicts that a certain animal weighed 241 pounds when it was born and that the animal gained 3 pounds per day in its first year of life.\nThis model is defined by an equation in the form f(z) = a + bz, where f(z) is the predicted weight, in pounds, of the animal z days after it\nwas born, and a and bare constants. What is the value of a?",
    "options": [],
    "correctAnswer": "241",
    "correctValue": "241",
    "explanation": "The correct answer is 241. For a certain animal, it's given that a model predicts the animal weighed 241 pounds when it was born and gained 3\npounds per day in its first year of life. It's also given that this model is defined by an equation in the form f(z) = a+ bx, where f(z) is the\npredicted weight, in pounds, of the animal & days after it was born, and @ and b are constants. It follows that @ represents the predicted weight,\nin pounds, of the animal when it was born and b represents the predicted rate of weight gain, in pounds per day, in its first year of life. Thus, the\nvalue of g is 241.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-bf36c815",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 239,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function g is defined by glx) = —X +8. Whatis the value of glo)",
    "options": [
      {
        "letter": "A",
        "text": "—8"
      },
      {
        "letter": "B",
        "text": "0O"
      },
      {
        "letter": "C",
        "text": "4"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "8",
    "explanation": "Choice D is correct. The value of g(0) is found by substituting 0 for x in the function g. This yields g(0) = —0 +8, which can be rewritten as\ng(0)=8.\nChoice A is incorrect and may result from misinterpreting the equation as glx) =X+ (-8) instead of glx) = — Xx +8. Choice B is incorrect.\nThis is the value of x, not g(x). Choice C is incorrect and may result from calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0d391910",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 240,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 4z. For what value of z does f(z) = 8?",
    "options": [],
    "correctAnswer": "2",
    "correctValue": "2",
    "explanation": "The correct answer is 2. Substituting 8 for f(z) in the given equation yields 8 = 4. Dividing the left- and right-hand sides of this equation by 4\nyields © = 2. Therefore, the value of z is 2 when f(z) = 8.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-620fe971",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 241,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A team of workers has been moving cargo off of a ship. The equation below models the approximate number of tons of cargo, y, that remains to\n\nbe moved x hours after the team started working.\n\ny=120—-25x\n\nThe graph of this equation in the xy-plane is a line. What is the best interpretation of the x-intercept in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The team will have moved all the cargo in about 4.8 hours."
      },
      {
        "letter": "B",
        "text": "The team has been moving about 4.8 tons of cargo per hour."
      },
      {
        "letter": "C",
        "text": "The team has been moving about 25 tons of cargo per hour."
      },
      {
        "letter": "D",
        "text": "The team started with 120 tons of cargo to move."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The team will have moved all the cargo in about 4.8 hours.",
    "explanation": "Choice A is correct. The x-intercept of the line with equation y = 120 — 25x can be found by substituting 0 for y and finding the value of x. When y\n\n=0, x = 4.8, so the x-intercept is at (4.8, 0). Since y represents the number of tons of cargo remaining to be moved x hours after the team started\n\nworking, it follows that the x-intercept refers to the team having no cargo remaining to be moved after 4.8 hours. In other words, the team will\n\nhave moved all of the cargo after about 4.8 hours.\n\nChoice B is incorrect and may result from incorrectly interpreting the value 4.8. Choices C and D are incorrect and may result from\n\nmisunderstanding the x-intercept. These statements are accurate but not directly relevant to the x-intercept.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-58c7daed",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 242,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "For the linear function h, h (0) = 0 and k (11) = 10. Which equation defines h?",
    "options": [
      {
        "letter": "A",
        "text": "h(z)= qT"
      },
      {
        "letter": "B",
        "text": "h(z)= Lz+10 =1"
      },
      {
        "letter": "C",
        "text": "h(z)= 35"
      },
      {
        "letter": "D",
        "text": "h(z)= Lz +11"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "h(z)= qT",
    "explanation": "Choice A is correct. Since his a linear function, it can be defined by an equation of the form h (z) = mx + b, where m and b are constants. It's\n\ngiven that h (0) = 0. Substituting 0 for z and 0 for h (z) in the equation k (z) = mz + byields 0 = Om + b, or 0 = b. Substituting 0 for in\n\nthe equation h (z) = mz + byields h (z) = ma. It's also given that h (11) = 10. Substituting 11 for & and 10 for k (x) in the equation k (z)\n\n= maz yields 10 = 11m. Dividing both sides of this equation by 11 yields m = » Substituting 2 for m in the equation k (z) = ma yields\n\nh(x) = =. Therefore, an equation that defines his b (z) = 1.\n\nChoice Bis incorrect and may result from conceptual or calculation errors.\n\nChoice C is incorrect and may result from conceptual or calculation errors.\n\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-17d80dc3",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 243,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the xy-plane, line k has a slope of 5 and a y-intercept of (0, —35). What is the x-coordinate of the x-intercept of line k?",
    "options": [],
    "correctAnswer": "7",
    "correctValue": "7",
    "explanation": "The correct answer is 7. An equation of a line in the xy-plane can be written in the form y = ma + b, where m is the slope of the line and (o, b)\nis the y-intercept of the line. It's given that line k has a slope of 5 and a y-intercept of (0, —35). Therefore, m = 5 and b= —35. Substituting 5\nform and —385 for bin the equation y = mz + byields y = 5 — 35. The x-intercept of a line in the xy-plane is the point where the line\nintersects the x-axis, which is a point with a y-coordinate of 0. Substituting 0 for yin the equation y = 5 — 35 yields 0 = 5z — 35. Adding 35\nto both sides of this equation yields 35 = 5z. Dividing both sides of this equation by 5 yields 7 = =. Therefore, the x-coordinate of the x-\nintercept of line kis 7.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1d18794b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 244,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A contract for a certain service requires a onetime activation cost of $35 and a monthly cost of $23. Which equation represents this situation,\nwhere ¢ is the total cost, in dollars, of this service contract for ¢ months?",
    "options": [
      {
        "letter": "A",
        "text": "c=55+35 —t"
      },
      {
        "letter": "B",
        "text": "c= 5 +23"
      },
      {
        "letter": "C",
        "text": "c=23t+35"
      },
      {
        "letter": "D",
        "text": "c=35t+23"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "c=23t+35",
    "explanation": "Choice C is correct. It's given that this service contract requires a monthly cost of $23. A monthly cost of $23 for ¢ months results in a cost of\n$23¢. It's also given that this service contract requires a onetime activation cost of $35. Adding the onetime activation cost to the monthly cost\nof the service contract for £ months yields the total cost ¢, in dollars, of this service contract for ¢ months. Therefore, this situation can be\nrepresented by the equation ¢ = 23¢ + 35.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b3abf40f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 245,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "F(z) = (x —273.15) + 32\nThe function F' gives the temperature, in degrees Fahrenheit, that corresponds to a temperature of Z kelvins. If a temperature increased by 9.10\nkelvins, by how much did the temperature increase, in degrees Fahrenheit?",
    "options": [
      {
        "letter": "A",
        "text": "16.38"
      },
      {
        "letter": "B",
        "text": "48.38"
      },
      {
        "letter": "C",
        "text": "475.29"
      },
      {
        "letter": "D",
        "text": "507.29"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "16.38",
    "explanation": "Choice A is correct. It's given that the function F(z) = i= — 273.15) + 32 gives the temperature, in degrees Fahrenheit, that corresponds to\na temperature of z kelvins. A temperature that increased by 9.10 kelvins means that the value of x increased by 9.10 kelvins. It follows that an\nincrease in & by 9.10 increases F(z) by £(9.10), or 16.38. Therefore, if a temperature increased by 9.10 kelvins, the temperature increased by\n16.38 degrees Fahrenheit.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1c29bfd1",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 246,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The pressure exerted on a scuba diver at sea level is 14.70 pounds per square inch (psi). For each foot the scuba diver descends below\nsea level, the pressure exerted on the scuba diver increases by 0.44 psi. What is the total pressure, in psi, exerted on the scuba diver at 105 feet\nbelow sea level?",
    "options": [
      {
        "letter": "A",
        "text": "60.90"
      },
      {
        "letter": "B",
        "text": "31.50"
      },
      {
        "letter": "C",
        "text": "14.70"
      },
      {
        "letter": "D",
        "text": "0.44"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "60.90",
    "explanation": "Choice Ais correct. It's given that the pressure exerted on a scuba diver at sea level is 14.70 pounds per square inch (psi). It's also given\nthat for each foot the scuba diver descends below sea level, the pressure exerted on the scuba diver increases by 0.44 psi. The total pressure, in\npsi, exerted on the scuba diver at z feet below sea level can be represented by the expression 0.44z + 14.70. Substituting 105 for in this\nexpression yields 0.44(105) + 14.70, or 60.90. Therefore, the total pressure exerted on the scuba diver at 105 feet below sea level is\n60.90 psi.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the pressure, in Psi, exerted on the scuba diver at sea level, not at 105 feet below sea level.\nChoice D is incorrect. This is the rate by which the pressure, in psi, exerted on the scuba diver increases for each foot the scuba diver descends\nbelow sea level.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e470e19d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 247,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f is defined by f(z) = 7z — 84. What is the x-intercept of the graph of y = f(z) in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "(-12,0)"
      },
      {
        "letter": "B",
        "text": "(—7,0)"
      },
      {
        "letter": "C",
        "text": "(7,0)"
      },
      {
        "letter": "D",
        "text": "(12,0)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(12,0)",
    "explanation": "Choice D is correct. The given function f is a linear function. Therefore, the graph of = f(z) in the xy-plane has one x-intercept at the point\n(k, 0), where kis a constant. Substituting 0 for f(z) and k for z in the given function yields 0 = 7k — 84. Adding 84 to both sides of this\nequation yields 84 = 7k. Dividing both sides of this equation by 7 yields 12 = k. Therefore, the x-intercept of the graph of y = f(x) in the xy-\nplaneis (12,0).\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-af711d1b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 248,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "\" \" Average time\nDistance (kilometers) (minutes)\n\nThe table gives the average time £, in minutes, it takes Carly to travel a certain distance d, in kilometers. Which equation could represent this\nlinear relationship?",
    "options": [
      {
        "letter": "A",
        "text": "t=4d =1"
      },
      {
        "letter": "B",
        "text": "t= xd"
      },
      {
        "letter": "C",
        "text": "t=25d =1"
      },
      {
        "letter": "D",
        "text": "t= zd"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "t=25d =1",
    "explanation": "Choice C is correct. The average time ¢, in minutes, it takes Carly to travel a certain distance d, in kilometers, is given in the table. This linear\nrelationship can be represented by an equation in the form ¢ = ad + b, where @ and b are constants. The table shows that it takes Carly an\naverage time of 8 minutes to travel 0.32 kilometers. Substituting 8 for £ and 0.32 for d in the equation t = ad + byields 8 = 0.32a + b.\nSubtracting 0.32a from both sides of this equation yields 8 — 0.32a = b. The table also shows that it takes Carly an average time of 14 minutes\nto travel 0.56 kilometers. Substituting 14 for ¢ and 0.56 for d in the equation t = ad + b yields 14 = 0.56a + b. Subtracting 0.564 from both\nsides of this equation yields 14 — 0.56a = b. Substituting 8 — 0.32a for bin this equation yields 14 — 0.56a = 8 — 0.32a. Subtracting 8 from\nboth sides of this equation yields 6 — 0.56a = —0.32a. Adding 0.56a to both sides of this equation yields 6 = 0.24a. Dividing both sides of\nthis equation by 0.24 yields 25 = a. Substituting 25 for a in the equation 8 = 0.32a + b yields 8 = 0.32(25) + b, or 8 = 8 + b. Subtracting 8\nfrom both sides of this equation yields 0 = b. Substituting 25 for a and 0 for bin the equation t = ad + byields t = 25d + 0, or t = 25d.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-f7e39fe9",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 249,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "[| = [10 [ 15 | 20 | 25 |\nFa [sa 17 | 103 | our |\nThe table shows four values of z and their corresponding values of f(z). There is a linear relationship between x and f(z) that is defined by the\nequation f(z) = ma — 28, where m is a constant. What is the value of m?",
    "options": [],
    "correctAnswer": "11",
    "correctValue": "11",
    "explanation": "The correct answer is 11. It's given that f(z) is defined by the equation f(z) = mz — 28, where m is a constant. It's also given in the table that\nwhen z = 10, f(x) = 82. Substituting 10 for and 82 for f(z) in the equation f(z) = mx — 28 yields, 82 = m(10) — 28. Adding 28 to\nboth sides of this equation yields 110 = 10m. Dividing both sides of this equation by 10 yields 11 = m. Therefore, the value of m is 11.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-415ab1d2",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 250,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "y\n\n— [ [ [][]\n\n— [ [ [] []\n\nrh [ [| []]\n\nmm NTT\n\n\\\nHT [ [T[[]\nIE. NH\noO \\ x\n\n| 4 2 [ON 2 | 4 |\nThe graph of the linear functiony = f(x) + 19 is shown. If ¢ and d are positive constants, which equation could define f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z)=—d—cz"
      },
      {
        "letter": "B",
        "text": "f(z)=d—cz"
      },
      {
        "letter": "C",
        "text": "f(z) =—d+cx"
      },
      {
        "letter": "D",
        "text": "f(z) =d+cx"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "f(z)=—d—cz",
    "explanation": "Choice Ais correct. It's given that the graph of the linear function y = f(z) + 19 is shown. This means that the graph of yy = f(z) + 19 can be\ntranslated down 19 units to create the graph of y = f() and the y-coordinate of every point on the graph of y = f(&) + 19 can be decreased\nby 19 to find the resulting point on the graph of y = f(z). The y-intercept of the graph of y = f(z) + 19 is (0, 3). Translating the graph of y\n= f(x) + 19 down 19 units results in a y-intercept of the graph of y = f(z) at the point (0, 3 — 19), or (0, —16). The graph of y = f(z)\n+ 19 slants down from left to right, so the slope of the graph is negative. The translation of a linear graph changes its position, but does not\nchange its slope. It follows that the slope of the graph of y = f(z) is also negative. The equation of a linear function f can be written in the\nform f(z) = b+ ma, where bis the y-coordinate of the y-intercept and m is the slope of the graph of y = f(). It's given that cand d are\npositive constants. Since the y-coordinate of the y-intercept and the slope of the graph of y = f(z) are both negative, it follows that f(z) = —d\n— cz could define f.\nChoice Bis incorrect. This could define a linear function where its graph has a positive, not negative, y-intercept.\n\nChoice C is incorrect. This could define a linear function where its graph has a positive, not negative, slope.\nChoice D is incorrect. This could define a linear function where its graph has a positive, not negative, y-intercept and a positive, not negative,\nslope.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1a2a0f59",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 251,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A yoga studio is offering a deal where the first session is free, the second session is half off the regular price, and the remaining sessions are at\nthe regular price. If the regular price of a session is $25.40, which function £ gives the total cost, in dollars, of purchasing & sessions using this\ndeal, where z > 2?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) = 25.40(z— 1) + 12.70"
      },
      {
        "letter": "B",
        "text": "f(z) = 25.40(z — 2) + 12.70"
      },
      {
        "letter": "C",
        "text": "f(z)=25.40(x—1)+12.70(z — 2)"
      },
      {
        "letter": "D",
        "text": "f(z) =25.40 (x —2) + 12.70 (z — 1)"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "f(z) = 25.40(z — 2) + 12.70",
    "explanation": "Choice B is correct. It's given that the regular price of a session at a yoga studio is $25.40. It's also given that the yoga studio is offering a deal\nwhere the first session is free, or $0; that the second session is half off the regular price, or $25.40 — 3) ($25.40), which is equal to $12.70;\nand that the remaining sessions are at the regular price, $25.40. Since & represents the total number of sessions and two sessions have already\nbeen accounted for, the number of remaining sessions can be represented by zz — 2. The total cost, in dollars, of purchasing z sessions using\nthis deal can be represented by the function f(z) = 0+ 12.70 + 25.40(z — 2), or f(z) = 25.40(z — 2) + 12.70.\nChoice A is incorrect. The function represents the total cost of purchasing Z sessions when the first session is half off the regular price and the\nremaining sessions are at the regular price.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e9908930",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 252,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "= |f@\n_1\nL\n_18\n5\n\nFor the linear function £, the table shows three values of & and their corresponding values of f(z). If h(z) = f(z) — 13, which equation\ndefines h?",
    "options": [
      {
        "letter": "A",
        "text": "h(z)=5x—4"
      },
      {
        "letter": "B",
        "text": "h(z)=5z+7"
      },
      {
        "letter": "C",
        "text": "h(z)=5z+9"
      },
      {
        "letter": "D",
        "text": "h(z) = 5x +20"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "h(z)=5z+7",
    "explanation": "Choice B is correct. An equation that defines a linear function f can be written in the form f(z) = ma + b, where m and b are constants. It's\ngiven in the table that when z = —4, f(z) = 0. Substituting —4 for z and 0 for f(z) in the equation f(z) = mz + b yields 0 = m(—4) + b,\nor 0 = —4m + b. Adding 4m to both sides of this equation yields 4m = b. Substituting 4m for b in the equation f(z) = mz + byields f(z)\n= ma + 4m. Its also given in the table that when © = —22, f(x) = 1. Substituting — 4 for z and 1 for f(z) in the equation f(z) = mz\n+ 4myields 1 = m(—%) +4m,orl= im. Multiplying both sides of this equation by 5 yields m = 5. Substituting 5 for m in the equation\nf(z) = mz + 4m yields f(z) = 5x + 4(5), or f(x) = 52 + 20.1f h(z) = f(x) — 13, substituting 5z + 20 for f(z) in this equation yields\nh(z) = (5z +20) — 13, or h(z) =5z + 7.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is an equation that defines the linear function f, not h.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-ee1f63c0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 253,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f () = 6.2. What is the value of f () when z = 10?",
    "options": [
      {
        "letter": "A",
        "text": "T2"
      },
      {
        "letter": "B",
        "text": "62"
      },
      {
        "letter": "C",
        "text": "17.2"
      },
      {
        "letter": "D",
        "text": "16.2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "62",
    "explanation": "Choice B is correct. It's given that the function f is defined by f(z) = 6.2z. The value of f(z) when = 10 can be found by substituting 10 for\nin f(z) = 6.2z, which yields £(10) = 6.2(10), or £(10) = 62. Therefore, when &; = 10, the value of f(z) is 62.\nChoice A is incorrect. This is the value of f(10) + 10, not the value of f(z) when z = 10.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the value of 6.2 + 10, not the value of f(z) when z = 10.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-114ae8a9",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 254,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Atrain traveled 173 miles in the first 3 hours of a trip and traveled at an average speed of 53 miles per hour for the remainder of the trip. Which\nequation gives the total number of miles, , the train traveled if the trip was z hours long and & > 3?",
    "options": [
      {
        "letter": "A",
        "text": "y=53z+173"
      },
      {
        "letter": "B",
        "text": "y=53z +14"
      },
      {
        "letter": "C",
        "text": "y= 14x +226"
      },
      {
        "letter": "D",
        "text": "y=14z +53"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "y=53z +14",
    "explanation": "Choice B is correct. It's given that a train traveled 173 miles in the first 3 hours of a trip. It's also given that the train traveled at an average speed\nof 53 miles per hour for the remainder of the trip. Since the trip was & hours long, it follows that the remainder of the trip was & — 3 hours.\nTherefore, 53(z — 3) represents the distance, in miles, the train traveled for the remainder of the trip. Adding 173 to 53(z — 3) gives the total\nnumber of miles, , the train traveled if the trip was hours long and 2 > 3. It follows thaty = 173 + 53( — 3), which is equivalent toy\n= 1734 53z — 159, or y = 53z + 14.\nChoice A is incorrect. This equation gives the total number of miles, y, the train traveled if the trip was + 3, not Z, hours long.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b51c173d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 255,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the linear function f, the graph of y= f(z) in the xy-plane has a slope of 2 and has a y-intercept at (0, —5). Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z)=1z—5 1"
      },
      {
        "letter": "B",
        "text": "f(z) =—3%z-5"
      },
      {
        "letter": "C",
        "text": "flx)=—2x—5"
      },
      {
        "letter": "D",
        "text": "f(z) =2z—5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "f(z) =2z—5",
    "explanation": "Choice D is correct. An equation defining the linear function f can be written in the form f(x) = ma + b, where mis the slope and (0, b) is the\ny-intercept of the graph of y = f(z) in the xy-plane. It's given that the graph of y = f(z) has a slope of 2. Therefore, m = 2. It's also given that\nthe graph of y = f(z) has a y-intercept at (0, —5). Therefore, b= —5. Substituting 2 for 7 and —5 for b in the equation f(z) = mz +b\nyields f(z) = 2z — 5. Thus, the equation that defines f is f(z) = 2z — 5.\nChoice A is incorrect. For this function, the graph of y = f(z) in the xy-plane has a slope of 3 not 2.\nChoice Bis incorrect. For this function, the graph of y = f(z) in the xy-plane has a slope of —%, not2.\nChoice C is incorrect. For this function, the graph of y = f(z) in the xy-plane has a slope of —2, not 2.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c81f1c2f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 256,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "f(z) = 45z + 600\n\nThe function f gives the monthly fee f(z). in dollars, a facility charges to keep crates in storage. What is the monthly fee, in dollars, the facility\ncharges to keep 50 crates in storage?",
    "options": [],
    "correctAnswer": "2850",
    "correctValue": "2850",
    "explanation": "The correct answer is 2,850. It's given that the function f(z) = 452 + 600 gives the monthly fee, in dollars, a facility charges to keep z crates\nin storage. Substituting 50 for & in this function yields f(50) = 45(50) + 600, or f(50) = 2,850. Therefore, the monthly fee, in dollars, the\nfacility charges to keep 50 crates in storage is 2,850.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4702da8f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 257,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 80 — 6z. What is the value of f(7)?",
    "options": [
      {
        "letter": "A",
        "text": "13"
      },
      {
        "letter": "B",
        "text": "38"
      },
      {
        "letter": "C",
        "text": "74"
      },
      {
        "letter": "D",
        "text": "81"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "38",
    "explanation": "Choice B is correct. It's given that function f is defined by f(z) = 80 — 6z. The value of £(7) can be found by substituting 7 for in the given\nfunction, which yields (7) = 80 — 6(7), or f(7) = 80 — 42, which is equivalent to f(7) = 38. Therefore, the value of f(7) is 38.\nChoice A is incorrect. This is the value of 80 — 67, not 80 — 6(7).\nChoice C is incorrect. This is the value of 80 — 6(1), not 80 — 6(7).\nChoice D is incorrect. This is the value of 80 — 6 + 7, not 80 — 6(7).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b988eeec",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 258,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The functions f and g are defined as f(z) = +z — 9 and g(x) = $x + 21. If the function h is defined as h(z) = f(z) + g(x), what is the\nx-coordinate of the x-intercept of the graph of y = h(z) in the xy-plane?",
    "options": [],
    "correctAnswer": "-12",
    "correctValue": "-12",
    "explanation": "The correct answer is —12. It's given that the functions f and g are defined as f(z) = lz— 9and g(z) = z+ 21. If the function h is\ndefined as h(z) = f(x) + g(%), then substituting +z — 9 for f(z) and $x + 21 for g(z) in this function yields A(z) = tz — 9+ $=\n+ 21. This can be rewritten as h(z) = iz + 12, or h(x) = x + 12. The x-intercept of a graph in the xy-plane is the point on the graph where\ny = 0. The equation representing the graph of y = h(z) is y = z + 12. Substituting 0 for in this equation yields 0 = z + 12. Subtracting 12\nfrom both sides of this equation yields —12 = , or £ = —12. Therefore, the x-coordinate of the x-intercept of the graph of y = h(x) in the xy-\nplane is —12.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0d5495a6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 259,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "h(z)=z+b\nFor the linear function h, b is a constant and (0) = 45. What is the value of b?",
    "options": [],
    "correctAnswer": "45",
    "correctValue": "45",
    "explanation": "The correct answer is 45. It's given that h(0) = 45. Therefore, for the given function k, when z = 0, h(z) = 45. Substituting 0 for z and 45 for\nh(z) in the given function, h(z) = x + b, yields 45 = 0 + b, or 45 = b. Therefore, the value of bis 45.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-fc4a0d2a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 260,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "g9(z) =3(14z — 15)\nWhat is the y-coordinate of the y-intercept of the graph of y = g (z) — 2 in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "—4T"
      },
      {
        "letter": "B",
        "text": "—45"
      },
      {
        "letter": "C",
        "text": "—-17"
      },
      {
        "letter": "D",
        "text": "—15"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "—4T",
    "explanation": "Choice Ais correct. It's given that g(x) = 3(14z — 15). Substituting 3 (14z — 15) for g(x) in the equation y = g(x) — 2 yields y = 3(14z\n—- 15) — 2. The y-intercept of the graph of a function in the xy-plane is the point where the function crosses the y-axis, which occurs when z\n= 0. Substituting 0 for Z in the equation y = 3(14z — 15) — 2 yields y = 3(14(0) — 15) — 2. It follows that y = —45 — 2, ory = —47.\nTherefore, the y-intercept of the graph of y = g(z) — 2 in the xy-plane is (0,—47), and the y-coordinate of the y-intercept of the graph is —47.\nChoice B is incorrect. This is the y-coordinate of the y-intercept of the graph of y = g(z) in the xy-plane, not y = g(z) — 2.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3e9eaffc",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 261,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Caleb used juice to make popsicles. The function f(z) = —5z + 30 approximates the volume, in fluid ounces, of juice Caleb had remaining\nafter making & popsicles. Which statement is the best interpretation of the y-intercept of the graph of y = f(z) in the xy-plane in this context?",
    "options": [
      {
        "letter": "A",
        "text": "Caleb used approximately 5 fluid ounces of juice for each popsicle."
      },
      {
        "letter": "B",
        "text": "Caleb had approximately 5 fluid ounces of juice when he began to make the popsicles."
      },
      {
        "letter": "C",
        "text": "Caleb had approximately 30 fluid ounces of juice when he began to make the popsicles."
      },
      {
        "letter": "D",
        "text": "Caleb used approximately 30 fluid ounces of juice for each popsicle."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "Caleb had approximately 30 fluid ounces of juice when he began to make the popsicles.",
    "explanation": "Choice C is correct. An equation that defines a linear function f can be written in the form f(z) = ma + b, where m represents the slope and b\nrepresents the y-intercept, (0, b), of the line of y = f(z) in the xy-plane. The function f(z) = —5z + 30 is linear. Therefore, the graph of the\ngiven function = f(z) in the xy-plane has a y-intercept of (0, 30). It's given that f(z) gives the approximate volume, in fluid ounces, of juice\nCaleb had remaining after making  popsicles. It follows that the y-intercept of (0, 30) means that Caleb had approximately 30 fluid ounces of\njuice remaining after making O popsicles. In other words, Caleb had approximately 30 fluid ounces of juice when he began to make the\npopsicles.\nChoice A is incorrect. This is an interpretation of the slope, rather than the y-intercept, of the graph of y = f(z) in the xy-plane.\nChoice B is incorrect and may result from conceptual errors.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-af2ba762",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 262,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "According to data provided by the US Department of Energy, the average price per gallon of regular gasoline in the United States from September\n1,2014, to December 1, 2014, is modeled by the function F defined below, where F(x) is the average price per gallon x months after September\n1.\nF(x)=274-0.19(x—3)\nThe constant 2.74 in this function estimates which of the following?",
    "options": [
      {
        "letter": "A",
        "text": "The average monthly decrease in the price per gallon"
      },
      {
        "letter": "B",
        "text": "The difference in the average price per gallon from September 1, 2014, to December 1,2014"
      },
      {
        "letter": "C",
        "text": "The average price per gallon on September 1,2014"
      },
      {
        "letter": "D",
        "text": "The average price per gallon on December 1,2014"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "The average price per gallon on December 1,2014",
    "explanation": "Choice D is correct. Since 2.74 is a constant term, it represents an actual price of gas rather than a measure of change in gas price. To determine\nwhat gas price it represents, find x such that F(x) = 2.74, or 2.74 = 2.74 - 0.19(x — 3). Subtracting 2.74 from both sides gives 0 = -0.19(x - 3).\nDividing both sides by =0.19 results in 0 = x — 3, or x = 3. Therefore, the average price of gas is $2.74 per gallon 3 months after September 1,\n2074, which is December 1, 2014.\nChoice A is incorrect. Since 2.74 is a constant, not a multiple of x, it cannot represent a rate of change in price. Choice B is incorrect. The\ndifference in the average price from September 1, 2014, to December 1, 2014, is F(3) = F(0) = 2.74 - 0.19(3 — 3) — (2.74 - 0.19(0 - 3)) = 2.74 —\n(2.74 + 0.57) = -0.57, which is not 2.74. Choice C is incorrect. The average price per gallon on September 1, 2014, is F(0) = 2.74 - 0.19(0 - 3) =\n2.74 + 0.57 = 3.31, which is not 2.74.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a775af14",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 263,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the xy-plane, the graph of the linear function f contains the points (0, 2) and (8, 34). Which equation defines f, where y = f(z)?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) = 2x +42"
      },
      {
        "letter": "B",
        "text": "f(x) = 32z +36"
      },
      {
        "letter": "C",
        "text": "flz)=4c+2"
      },
      {
        "letter": "D",
        "text": "f(z) =8z+2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "flz)=4c+2",
    "explanation": "Choice C is correct. In the xy-plane, the graph of a linear function can be written in the form f(z) = mx + b, where m represents the slope and\n(0, b) represents the y-intercept of the graph of y = f(z). It's given that the graph of the linear function f, where y = f(z), in the xy-plane\ncontains the point (o, 2). Thus, b = 2. The slope of the graph of a line containing any two points (z1, v1) and (22,92) can be found using the\nslope formula, m = = Since it's given that the graph of the linear function f contains the points (0, 2) and (8, 34), it follows that the slope\nof the graph of the line containing these points is m = = or 1m = 4. Substituting 4 for rn and 2 for bin f(z) = ma + byields f(z) = 4z\n+2\nChoice A is incorrect. This function represents a graph with a slope of 2 and a y-intercept of (0, 42).\nChoice B is incorrect. This function represents a graph with a slope of 32 and a y-intercept of (0, 36).\nChoice D is incorrect. This function represents a graph with a slope of 8 and a y-intercept of (0, 2).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-9551cd91",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 264,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Number of cars Maximum number of\npassengers and crew\n3 | m4 |\n| 5 | 284 |\nThe table shows the linear relationship between the number of cars, ¢, on a commuter train and the maximum number of passengers and crew,\np, that the train can carry. Which equation represents the linear relationship between ¢ and p?",
    "options": [
      {
        "letter": "A",
        "text": "55¢c—p=—9"
      },
      {
        "letter": "B",
        "text": "55¢c—p=9"
      },
      {
        "letter": "C",
        "text": "55p—c=—9"
      },
      {
        "letter": "D",
        "text": "55p—c=9"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "55¢c—p=—9",
    "explanation": "Choice A is correct. It's given that there is a linear relationship between the number of cars, ¢, on a commuter train and the maximum number of\npassengers and crew, p, that the train can carry. It follows that this relationship can be represented by an equation of the form p = mec +b,\nwhere m is the rate of change of p in this relationship and b is a constant. The rate of change of p in this relationship can be calculated by\ndividing the difference in any two values of p by the difference in the corresponding values of ¢. Using two pairs of values given in the table, the\nrate of change of pin this relationship is Bom, or 55. Substituting 55 for m in the equation p = me + byields p= 55¢ + b. The value of b\ncan be found by substituting any value of cand its corresponding value of p for ¢ and p, respectively, in this equation. Substituting 10 for ¢ and\n559 for pyields 559 = 55(10) + b, or 559 = 550 + b. Subtracting 550 from both sides of this equation yields 9 = b. Substituting 9 for bin the\nequation p = 55¢ + b yields p = 55¢ + 9. Subtracting 9 from both sides of this equation yields p — 9 = 5c. Subtracting p from both sides of\nthis equation yields —9 = 55¢ — p, or 55¢ — p = —9.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-7b17f86a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 265,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "f@)=2+4\n\nThe function f is defined by the given equation. What is the value of f(z) when z = +",
    "options": [],
    "correctAnswer": "1",
    "correctValue": "1",
    "explanation": "The correct answer is 1. It's given that the function f is defined by f(z) = z + £ Substituting for in the given function yields f(£)\n=F + & which gives f(&)= 4 or f(£) = 1. Therefore, when z = £, the value of f(z) is 1.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-ebd457f4",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 266,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Brian saves 1 of the $215 he earns each week from his job. If Brian continues to save at this rate, how much money, in dollars, will Brian save in\n9 weeks?",
    "options": [],
    "correctAnswer": "774",
    "correctValue": "774",
    "explanation": "The correct answer is 774. It's given that Brian saves z of the $215 he earns each week from his job. Therefore, Brian saves (2)(8215), or\n$86, per week. If Brian continues to save at this rate of $86 per week for 9 weeks, then he will save a total of (9) (86), or 774, dollars.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-d1f50dbe",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 267,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "One gallon of stain will cover 170 square feet of a surface. A yard has a total fence area of w square feet. Which equation represents the total\namount of stain S, in gallons, needed to stain the fence in this yard twice?",
    "options": [
      {
        "letter": "A",
        "text": "S= 5"
      },
      {
        "letter": "B",
        "text": "S = 170w"
      },
      {
        "letter": "C",
        "text": "§ = 340w ="
      },
      {
        "letter": "D",
        "text": "S=g"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "S=g",
    "explanation": "Choice D is correct. It's given that w represents the total fence area, in square feet. Since the fence will be stained twice, the amount of stain, in\ngallons, will need to cover 2w square feet. It's also given that one gallon of stain will cover 170 square feet. Dividing the total area, in square feet,\nof the surface to be stained by the number of square feet covered by one gallon of stain gives the number of gallons of stain that will be needed.\nDividing 2w by 170 yields 2, or *- Therefore, the equation that represents the total amount of stain S, in gallons, needed to stain the fence\nof the yard twice is § = 4¢.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-6c5c2a81",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 268,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "For the linear function k, the graph of y = h(x) in the xy-plane passes through the points (7, 21) and (9, 25). Which equation defines h?",
    "options": [
      {
        "letter": "A",
        "text": "hz)=3z—F"
      },
      {
        "letter": "B",
        "text": "h(z) =2x+7"
      },
      {
        "letter": "C",
        "text": "h(z)=\"Tz+21"
      },
      {
        "letter": "D",
        "text": "h(z)=9z +25"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "h(z) =2x+7",
    "explanation": "Choice B is correct. It's given that the graph of the linear function h, where y = h(z), passes through the points (7,21) and (9, 25) in the xy-\nplane. An equation defining k can be written in the form y = ma + b, wherey = h(z), 'm represents the slope of the graph in the xy-plane, and\nb represents the y-coordinate of the y-intercept of the graph. The slope can be found using any two points, (1, 1) and (z2,%2), and the\nformula m = =g Substituting (7,21) and (9, 25) for (1,31) and (z2, ya). respectively, in the slope formula yields m = f= which is\nequivalent tom = 4, orm = 2. Substituting 2 form and (7, 21) for (z,) in the equation y = maz + byields 21 = (2)(7) + bor 21 = 14\n+ b. Subtracting 14 from each side of this equation yields 7 = b. Substituting 2 for m and 7 for b in the equation y = ma + byields y = 2z\n+ 17. Since y = h(z), it follows that the equation that defines h is h(z) = 2z + 7.\nChoice A is incorrect. For this function, the graph of § = h(z) in the xy-plane would pass through (7, 0), not (7, 21), and (9, 1), not (9, 25).\nChoice C is incorrect. For this function, the graph of y = h(z) in the xy-plane would pass through (7, 70), not (7, 21), and (9, 84), not (9, 25).\nChoice D is incorrect. For this function, the graph of y = h(z) in the xy-plane would pass through (7, 88), not (7, 21), and (9, 106), not (9, 25).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-adf60b28",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 269,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "f(z) =8z+4\nThe function f gives the estimated height, in feet, of a willow tree z years after its height was first measured. Which statement is the best\ninterpretation of 4 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The tree will be measured each year for 4 years."
      },
      {
        "letter": "B",
        "text": "The tree is estimated to grow to a maximum height of 4 feet."
      },
      {
        "letter": "C",
        "text": "The estimated height of the tree increased by 4 feet each year."
      },
      {
        "letter": "D",
        "text": "The estimated height of the tree was 4 feet when it was first measured."
      }
    ],
    "correctAnswer": "D",
    "correctValue": "The estimated height of the tree was 4 feet when it was first measured.",
    "explanation": "Choice D is correct. It's given that the function f(z) = 8x + 4 gives the estimated height, in feet, of a willow tree x years after its height was\nfirst measured. For a function defined by an equation of the form f(x) = mz + b, where m and b are constants, b represents the value of f(z)\nwhen = 0. It follows that in the given function, 4 represents the value of f(z) when z = 0. Therefore, the best interpretation of 4 in this\ncontext is that the estimated height of the tree was 4 feet when it was first measured.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b8cbe394",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 270,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Sean rents a tent at a cost of $11 per day plus a onetime insurance fee of $10. Which equation represents the total cost ¢, in dollars, to rent the\ntent with insurance for d days?",
    "options": [
      {
        "letter": "A",
        "text": "c=11(d +10)"
      },
      {
        "letter": "B",
        "text": "c=10(d +11)"
      },
      {
        "letter": "C",
        "text": "e=11d+10"
      },
      {
        "letter": "D",
        "text": "c=10d+11"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "e=11d+10",
    "explanation": "Choice C is correct. It's given that the cost of renting a tent is $11 per day for d days. Multiplying the rental cost by the number of days yields\n$11d, which represents the cost of renting the tent for d days before the insurance is added. Adding the onetime insurance fee of $10 to the\nrental cost of $11d gives the total cost ¢, in dollars, which can be represented by the equation ¢ = 11d + 10.\nChoice A is incorrect. This equation represents the total cost to rent the tent if the insurance fee was charged every day.\nChoice B is incorrect. This equation represents the total cost to rent the tent if the daily fee was $(d + 11) for 10 days.\nChoice D is incorrect. This equation represents the total cost to rent the tent if the daily fee was $10 and the onetime fee was $11.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-dae126d7",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 271,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The boiling point of water at sea level is 212 degrees Fahrenheit (°F). For every 550 feet above sea level, the boiling point of water is lowered by\nabout 1 °F. Which of the following equations can be used to find the boiling point B of water, in °F, x feet above sea level?",
    "options": [
      {
        "letter": "A",
        "text": "B=550+> ’ 212 X"
      },
      {
        "letter": "B",
        "text": "B=550—-— 212 X"
      },
      {
        "letter": "C",
        "text": "B=212+—~ 550 X"
      },
      {
        "letter": "D",
        "text": "B=212——— 550"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "B=212——— 550",
    "explanation": "Choice D is correct. It's given that the boiling point of water at sea level is 212°F and that for every 550 feet above sea level, the boiling point of\nwater is lowered by about 1°F. Therefore, the change in the boiling point of water x feet above sea level is represented by the expression\nX\n—- 550° Adding this expression to the boiling point of water at sea level gives the equation for the boiling point B of water, in °F, x feet above\nX X\nsealeve: B= ———+21200B=212— —~.\n550 550\nChoices A and B are incorrect and may result from using the boiling point of water at sea level as the rate of change and the rate of change as\nthe initial boiling point of water at sea level. Choice C is incorrect and may result from representing the change in the boiling point of water as an\nincrease rather than a decrease.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-12983c1e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 272,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "ft)\n[1]\n5 | a1\nSome values of the linear function f are shown in the table above. Which of the following defines f ?",
    "options": [
      {
        "letter": "A",
        "text": "flx)=2x+3"
      },
      {
        "letter": "B",
        "text": "f(x)=3x+2"
      },
      {
        "letter": "C",
        "text": "fx) =4x+1"
      },
      {
        "letter": "D",
        "text": "f(x)=5x"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "fx) =4x+1",
    "explanation": "Choice C is correct. Because f is a linear function of x, the equation fx) = mx + b, where m and b are constants, can be used to define the\nrelationship between x and f (x). In this equation, m represents the increase in the value of f (x) for every increase in the value of x by 1. From the\ntable, it can be determined that the value of f (x) increases by 8 for every increase in the value of x by 2. In other words, for the function f the\n8\nvalue of mis Px or 4. The value of b can be found by substituting the values of x and f (x) from any row of the table and the value of m into the\nequation f(x) = mx + b and solving for b. For example, using X = 1, f(x) =5,and m = 4 yields 5 = 4(1) +b. Solving for b yields\nb = 1. Therefore, the equation defining the function f can be written in the form F(x) = 4x +1.\nChoices A, B, and D are incorrect. Any equation defining the linear function f must give values of f (x) for corresponding values of x, as shown in\neach row of the table. According to the table, if X = 3, F(x) = 13. However, substituting X = 3 into the equation given in choice A gives\n£(3)=2(3)+3, or £(3) =9, not 13. Similarly, substituting X = 3 into the equation given in choice B gives (3) =3(3) +2, or\nf(3)=11,not 13.\nLastly, substituting X = 3 into the equation given in choice D gives £(3) =5(3), or £(3) = 15, not 13. Therefore, the equations in choices A,\nB, and D cannot define f.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-aeaba0b6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 273,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "fz)=14+4z\n\nThe function f represents the total cost, in dollars, of attending an arcade when x games are played. How many games can be played for a total\ncost of $58?",
    "options": [],
    "correctAnswer": "11",
    "correctValue": "11",
    "explanation": "The correct answer is 11. It's given that the function f(z) = 14 + 4x represents the total cost, in dollars, of attending an arcade when games\nare played. Substituting 58 for f(z) in the given equation yields 58 = 14 + 4z. Subtracting 14 from each side of this equation yields 44 = 4z.\nDividing each side of this equation by 4 yields 11 = . Therefore, 11 games can be played for a total cost of $58.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-70d9516e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 274,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Abus is traveling at a constant speed along a straight portion of road. The equation d = 30¢ gives the distance d, in feet from a road marker,\nthat the bus will be t seconds after passing the marker. How many feet from the marker will the bus be 2 seconds after passing the marker?",
    "options": [
      {
        "letter": "A",
        "text": "30"
      },
      {
        "letter": "B",
        "text": "32"
      },
      {
        "letter": "C",
        "text": "60"
      },
      {
        "letter": "D",
        "text": "90"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "60",
    "explanation": "Choice C is correct. It's given that ¢ represents the number of seconds after the bus passes the marker. Substituting 2 for ¢ in the given equation\nd = 30t yields d = 30(2), or d = 60. Therefore, the bus will be 60 feet from the marker 2 seconds after passing it.\nChoice A is incorrect. This is the distance, in feet, the bus will be from the marker 1 second, not 2 seconds, after passing it.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the distance, in feet, the bus will be from the marker 3 seconds, not 2 seconds, after passing it.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4e97f862",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 275,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 3z — 8. What is the value of £(7)?",
    "options": [
      {
        "letter": "A",
        "text": "29"
      },
      {
        "letter": "B",
        "text": "13"
      },
      {
        "letter": "C",
        "text": "—5"
      },
      {
        "letter": "D",
        "text": "—29"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "13",
    "explanation": "Choice B is correct. It's given that the function f is defined by f(x) = 3z — 8. The value of f(7) is the value of f(z) when z = 7. Substituting\n7 for z in the given equation yields £(7) = 3(7) — 8, which is equivalent to f(7) = 21 — 8, or f(7) =13.\nChoice A is incorrect. This is the value of f(7) when f(z) = 3z + 8, rather than f(z) = 3z — 8.\nChoice C is incorrect. This is the value of f(1), rather than f(T).\nChoice D is incorrect. This is the value of f(—7), rather than £(7).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3174f07d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 276,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "y\n3\nNLT\nPN\nN\nGIN\n6 \\\nCNT]\n5\nINLET\nIN\n3 \\\nNTT\n2\nWEN\nTNT\n0 ? x\nglk EEAEIN REA EAA\n31\nThe graph of the linear function f is shown, where yy = f(z). What is the y-intercept of the graph of f?",
    "options": [
      {
        "letter": "A",
        "text": "(0,0) 16"
      },
      {
        "letter": "B",
        "text": "(0,—%8)"
      },
      {
        "letter": "C",
        "text": "(0,-8)"
      },
      {
        "letter": "D",
        "text": "(0,8)"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "(0,8)",
    "explanation": "Choice D is correct. The y-intercept of a graph is the point where the graph intersects the y-axis. The graph of function f shown intersects the y-\naxis at the point (0, 8). Therefore, the y-intercept of the graph of f is (0, 8).\nChoice A is incorrect. This is the point where the x-axis, not the graph of f, intersects the y-axis.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-271f7e3f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 277,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "(x+7)\nfl) =\"—F—=\n4\n\nFor the function f defined above, what is the value of £(9)— £(1) 2",
    "options": [
      {
        "letter": "A",
        "text": "l"
      },
      {
        "letter": "B",
        "text": "2 1"
      },
      {
        "letter": "C",
        "text": "— 4 9"
      },
      {
        "letter": "D",
        "text": "— 4"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "2 1",
    "explanation": "Choice Bs correct. The value of £(3)— £(1) can be calculated by finding the values of (9) and £(1). The value of £(9) can be found by\n\nwu } ) ©+7) } 16\nsubstituting 9 for x in the given function: £(9) = 7 This equation can be rewritten as £(9) = re or 4. Then, the value of £(1) can\ni } . +7) } 8\n\nbe found by substituting 1 for x in the given function: £1) = 7 This equation can be rewritten as fQ ) = 7 or 2. Therefore,\n£(9)— (1) =4—2, which is equivalent to 2.\nChoices A, C, and D are incorrect and may result from incorrectly substituting values of x in the given function or making computational errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-f79fffba",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 278,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function his defined by h (€) = 3z — 7. What is the value of h (—2)?",
    "options": [
      {
        "letter": "A",
        "text": "—13"
      },
      {
        "letter": "B",
        "text": "—10"
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
    "correctAnswer": "A",
    "correctValue": "—13",
    "explanation": "Choice A is correct. The value of h (—2) can be found by substituting —2 for & in the equation defining A. Substituting —2 for z in h (z) = 3z\n— Tyields h (—2) = 3(—2) — 7, or h (—2) = —13. Therefore, the value of h (—2) is —13.\nChoice B is incorrect. This is the value of k (—1), not h (—2).\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a9039591",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 279,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "= |f@\n| 1 | 32 |\n\nFor the linear function f, the table shows three values of & and their corresponding values of f(z). Which equation defines f(z)?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) =3z+29"
      },
      {
        "letter": "B",
        "text": "f(x) = 29z + 32"
      },
      {
        "letter": "C",
        "text": "f(z) =35z +29"
      },
      {
        "letter": "D",
        "text": "f(z) =32z +35"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "f(z) =3z+29",
    "explanation": "Choice A is correct. An equation that defines a linear function f can be written in the form f(z) = mz + b, where m and b are constants. It's\ngiven in the table that when = 0, f(z) = 29. Substituting 0 for and 29 for f(z) in the equation f(z) = mz + b yields 29 = m(0) + b, or\n29 = b. Substituting 29 for b in the equation f(z) = ma + byields f(z) = ma + 29. It's also given in the table that when z = 1, f(z) = 32.\nSubstituting 1 for and 32 for f(z) in the equation f(z) = ma + 29 yields 32 = m(1) + 29, or 32 = m + 29. Subtracting 29 from both\nsides of this equation yields 3 = m. Substituting 3 for m in the equation f(z) = ma + 29 yields f(z) = 3z + 29.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a396ed75",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 280,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a training program, Juan rides his bike at an average rate of 5.7 minutes per mile. Which function m models the number of minutes it will\ntake Juan to ride z miles at this rate?",
    "options": [
      {
        "letter": "A",
        "text": "m(z)=&"
      },
      {
        "letter": "B",
        "text": "m(z)=z+5.7"
      },
      {
        "letter": "C",
        "text": "m(z)=x—5.7"
      },
      {
        "letter": "D",
        "text": "m(z) =5.7z"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "m(z) =5.7z",
    "explanation": "Choice D is correct. It's given that Juan rides his bike at an average rate of 5.7 minutes per mile. The number of minutes it will take Juan to ride &\nmiles can be determined by multiplying his average rate by the number of miles, , which yields 5.7z. Therefore, the function m(z) = 5.7%\nmodels the number of minutes it will take Juan to ride & miles.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-50f4cb9c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 281,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "= |f@\n\n| 1 [64]\n\n[ 3 | 64 |\nFor the linear function f, the table shows three values of 2 and their corresponding values of f(z). Function f is defined by f(z) = az +b,\nwhere @ and bare constants. What is the value of a — b?",
    "options": [
      {
        "letter": "A",
        "text": "—64"
      },
      {
        "letter": "B",
        "text": "62"
      },
      {
        "letter": "C",
        "text": "128"
      },
      {
        "letter": "D",
        "text": "192"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "192",
    "explanation": "Choice D is correct. The table gives that f(z) = 0 when z = 2. Substituting 0 for f(z) and 2 for z into the equation f(z) = az + b yields 0\n= 2a + b. Subtracting 2a from both sides of this equation yields b= —2a. The table gives that f(z) = —64 when z = 1. Substituting —2a for\nb,—64 for f(x), and 1 for z into the equation f(x) = az + b yields —64 = a(1) + (—2a). Combining like terms yields —64 = —a, or a\n= 64. Since b= —2a, substituting 64 for a into this equation gives b = (—2)(64), which yields b = —128. Thus, the value of a — b can be\nwritten as 64 — (—128), which is 192.\nChoice A is incorrect. This is the value of @ + b, not a — b.\nChoice B is incorrect. This is the value of a — 2, nota — b.\nChoice C is incorrect. This is the value of 2a, not a — b.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c651cc56",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 282,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "0 -2\n2 kl\n6 16\nSome values of the linear function f are shown in the table above. What is the value of fa)",
    "options": [
      {
        "letter": "A",
        "text": "6"
      },
      {
        "letter": "B",
        "text": "7"
      },
      {
        "letter": "C",
        "text": "8"
      },
      {
        "letter": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "7",
    "explanation": "Choice B is correct. A linear function has a constant rate of change, and any two rows of the table shown can be used to calculate this rate. From\nthe first row to the second, the value of x is increased by 2 and the value of fx) is increased by 6 = 4 — (-2). So the values of f(x) increase\nby 3 for every increase by 1 in the value of x. Since £(2) = 4, it follows that £(2 +1) =4 +3 =7. Therefore, £(3) =7.\nChoice A is incorrect. This is the third x-value in the table, not £3). Choices C and D are incorrect and may result from errors when calculating\nthe function's rate of change.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c22b5f25",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 283,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the xy-plane, the points (-23) and (4, - 5) lie on the graph of which of the following linear functions?",
    "options": [
      {
        "letter": "A",
        "text": "flx)=x+5 1"
      },
      {
        "letter": "B",
        "text": "flx)=—x+4 2 4 1"
      },
      {
        "letter": "C",
        "text": "c fl)=——x+— fl 3 3 3"
      },
      {
        "letter": "D",
        "text": "f(x)=——=x+1 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "c fl)=——x+— fl 3 3 3",
    "explanation": "Choice C is correct. A linear function can be written in the form Fx) = mx + b, where mis the slope and b is the y-coordinate of the y-\n} } Y2™n FE\nintercept of the line. The slope of the graph can be found using the formula Im = oxi Substituting the values of the given points into\n27X1\n) —5-3 8 o 4 } _—\nthis formula yields /m = ———— or nN = ——, which simplifies to /77 = — —. Only choice C shows an equation with this slope.\n4-(-2) 6 3\nChoices A, B, and D are incorrect and may result from computation errors or misinterpreting the given information.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e4a588ca",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 284,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = i@ + 6). What is the value of f(4)?",
    "options": [
      {
        "letter": "A",
        "text": "20"
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
        "text": "5"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "5",
    "explanation": "Choice D is correct. It's given that the function f is defined by f(z) = 1 + 6). Substituting 4 for 2 in the given function yields f(4)\n= 2(4+6), or f(4) = 5. Therefore, the value of f(4) is 5.\nChoice A is incorrect. This is the value of 2(4 + 6), not + (4 + 6).\nChoice Bis incorrect. This is the value of 2 + (4 + 6), not 3 (4 +6).\nChoice C is incorrect. This is the value of 4 + 6, not 14 +6).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-11e1ab81",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 285,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "d\n= 74 7 LU\nd 64 ANNE\n3s\nE 4 IE\ngs] LTT\n| 1\nAmn A A\n01234567\n‘Time (minutes)\nThe graph above shows the distance traveled d, in feet, by a product on a conveyor belt m minutes after the product is placed on the belt. Which\nof the following equations correctly relates d and m ?",
    "options": [
      {
        "letter": "A",
        "text": "d=2m 1"
      },
      {
        "letter": "B",
        "text": "d=—-m 2"
      },
      {
        "letter": "C",
        "text": "d=m+2"
      },
      {
        "letter": "D",
        "text": "d=2m+2"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "d=2m 1",
    "explanation": "Choice A is correct. The line passes through the origin. Therefore, this is a relationship of the form df = km, where k is a constant representing\nthe slope of the graph. To find the value of k, choose a point (md) on the graph of the line other than the origin and substitute the values of m\nand d into the equation. For example, if the point (2,4) is chosen, then 4 = k(2), and k = 2. Therefore, the equation of the line is d = 21m.\nChoice B is incorrect and may result from calculating the slope of the line as the change in time over the change in distance traveled instead of\nthe change in distance traveled over the change in time. Choices C and D are incorrect because each of these equations represents a line with a\nd-intercept of 2. However, the graph shows a line with a d-intercept of 0.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4fe4fd7c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 286,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "c(x)=mx+500\nA company’s total cost c(x). in dollars, to produce x shirts is given by the function above, where m is a constant and X > 0. The total cost to\nproduce 100 shirts is $800. What is the total cost, in dollars, to produce 1000 shirts? (Disregard the $ sign when gridding your answer.)",
    "options": [],
    "correctAnswer": "3500.",
    "correctValue": "3500.",
    "explanation": "The correct answer is 3500. The given information includes a cost, $800, to produce 100 shirts. Substituting cx) =800 and x = 100 into\nthe given equation yields 800 = m+ 100 + 500. Subtracting 500 from both sides of the equation yields 300 = m+ 100. Dividing both sides\nof this equation by 100 yields 3 = /m. Substituting the value of m into the given equation yields c(x) = 3x +500. Substituting 1000 for x in\nthis equation and solving for C(X) gives the cost of 1000 shirts: 3(1000) +500, or 3500.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-979b0b8d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 287,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the linear function f, the graph of y = f(z) in the xy-plane has a slope of 39 and passes through the point (0, 0). Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) =—39z"
      },
      {
        "letter": "B",
        "text": "f(z) = 4%"
      },
      {
        "letter": "C",
        "text": "flx)=2—39"
      },
      {
        "letter": "D",
        "text": "f(z) = 39z"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "f(z) = 39z",
    "explanation": "Choice D is correct. An equation defining a linear function can be written in the form f(z) = mz + b, where m is the slope and (0, b) is the y-\nintercept of the graph of y = f(z) in the xy-plane. It's given that the graph of y = f(x) has a slope of 39, so m = 39. It's also given that the\ngraph of y = f(z) passes through the point (0, 0), so = 0. Substituting 39 for m and 0 for bin f(z) = ma + byields f(x) = 39z + 0, or\nf(z) = 39z. Thus, the equation that defines fis f(z) = 39z.\nChoice A is incorrect. This equation defines a function whose graph has a slope of —39, not 39.\nChoice B is incorrect. This equation defines a function whose graph has a slope of EN not 39.\nChoice C is incorrect. This equation defines a function whose graph has a slope of 1, not 39, and passes through the point o, —39), not (0,0).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a309803e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 288,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "One gallon of paint will cover 220 square feet of a surface. A room has a total wall area of w square feet. Which equation represents the total\namount of paint P, in gallons, needed to paint the walls of the room twice?",
    "options": [
      {
        "letter": "A",
        "text": "P="
      },
      {
        "letter": "B",
        "text": "P = 440w =u"
      },
      {
        "letter": "C",
        "text": "P=5"
      },
      {
        "letter": "D",
        "text": "P = 220w"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "P=",
    "explanation": "Choice A is correct. It's given that w represents the total wall area, in square feet. Since the walls of the room will be painted twice, the amount of\npaint, in gallons, needs to cover 2w square feet. It's also given that one gallon of paint will cover 220 square feet. Dividing the total area, in\nsquare feet, of the surface to be painted by the number of square feet covered by one gallon of paint gives the number of gallons of paint that\nwill be needed. Dividing 2w by 220 yields 2, or Ti Therefore, the equation that represents the total amount of paint P, in gallons, needed to\npaint the walls of the room twice is P = fg.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from finding the amount of paint needed to paint the walls once rather than twice.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-bf883fde",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 289,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the function £, the graph of y = f(z) in the xy-plane has a slope of 3 and passes through the point (0, —8). Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) =3z"
      },
      {
        "letter": "B",
        "text": "f(z) =3z—8"
      },
      {
        "letter": "C",
        "text": "f(z)=3z+5"
      },
      {
        "letter": "D",
        "text": "f(z) =3z +11"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "f(z) =3z—8",
    "explanation": "Choice B is correct. An equation defining a linear function can be written in the form f(z) = mz + b, where m and b are constants, m is the\nslope of the graph of y= f(z) in the xy-plane, and (0, b) is the y-intercept of the graph. It's given that for the function f, the graph of y = f(z)\nin the xy-plane has a slope of 3. Therefore, m = 3. It's also given that this graph passes through the point (o, —8). Therefore, the y-intercept of\nthe graph is (0, —8), and it follows that b= —8. Substituting 3 for m and —8 for b in the equation f(z) = mz + byields f(z) = 3z — 8.\nThus, the equation that defines f is f(x) = 3z — 8.\nChoice A is incorrect. For this function, the graph of y = f(z) in the xy-plane passes through the point (0, 0), not (0, —8).\nChoice C is incorrect. For this function, the graph of y = f(z) in the xy-plane passes through the point (0, 5), not (0, —8).\nChoice D is incorrect. For this function, the graph of = f(z) in the xy-plane passes through the point (0, 11), not (0, —8).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-2f34cd1c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 290,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f(z) = 55.20 — 0.162 gives the estimated surface water temperature f(z), in degrees Celsius, of a body of water on the zth day\n\nof the year, where 220 < x < 360. Based on the model, what is the estimated surface water temperature, in degrees Celsius, of this body of\n\nwater on the 326th day of the year?",
    "options": [
      {
        "letter": "A",
        "text": "55.20"
      },
      {
        "letter": "B",
        "text": "3.04"
      },
      {
        "letter": "C",
        "text": "—0.16"
      },
      {
        "letter": "D",
        "text": "—52.16"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "3.04",
    "explanation": "Choice B is correct. It's given that the function f(z) = 55.20 — 0.162 gives the estimated surface water temperature, in degrees Celsius, of a\n\nbody of water on the zth day of the year. Substituting 326 for z in the given function yields f(326) = 55.20 — 0.16(326), which is equivalent\n\nto f(326) = 55.20 — 52.16, or f(326) = 3.04. Therefore, the estimated surface water temperature, in degrees Celsius, of this body of water\n\non the 326th day of the year is 3.04.\n\nChoice A is incorrect and may result from conceptual or calculation errors.\n\nChoice C is incorrect. This is the rate of change, in degrees Celsius per day, of the estimated surface water temperature.\n\nChoice D is incorrect. This is the change, in degrees Celsius, in the estimated surface water temperature over 326 days.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3462d850",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 291,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Marisol drove 3 hours from City A to City B. The equation below estimates the distance d, in miles, Marisol traveled after driving for t hours.\nd=45t\nWhich of the following does 45 represent in the equation?",
    "options": [
      {
        "letter": "A",
        "text": "A. Marisol took 45 trips from City A to City B."
      },
      {
        "letter": "B",
        "text": "The distance between City A and City B is 45 miles."
      },
      {
        "letter": "C",
        "text": "Marisol drove at an average speed of about 45 miles per hour."
      },
      {
        "letter": "D",
        "text": "It took Marisol 45 hours to drive from City A to City B."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "Marisol drove at an average speed of about 45 miles per hour.",
    "explanation": "Choice C is correct. It's given that d is the distance, in miles, Marisol traveled after driving for t hours. Therefore, 45 represents the distance in\nmiles traveled per hour, which is the speed she drove in miles per hour.\nChoice A is incorrect and may result from misidentifying speed as the number of trips. Choice B is incorrect and may result from misidentifying\nspeed as the total distance. Choice D is incorrect and may result from misidentifying the speed as the time, in hours.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-fe6f9678",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 292,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the linear function f, (0) = 17 and f(1) = 17. Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f@)=1"
      },
      {
        "letter": "B",
        "text": "f(z)=1"
      },
      {
        "letter": "C",
        "text": "flz)=17"
      },
      {
        "letter": "D",
        "text": "f(z) = 34"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "flz)=17",
    "explanation": "Choice C is correct. An equation defining the linear function f can be written in the form f(z) = mz + b, where m is the slope and (0, b) is the\ny-intercept of the graph of y = f(z) in the xy-plane. The slope of the graph of yy = f() can be found using the formula m = P= where\n(1,1) and (22, y2) are any two points that the graph passes through. If £(0) = 17, it follows that the graph of y = f(z) passes through the\npoint (0,17). If f(1) = 17, it follows that the graph of y = f(z) passes through the point (1, 17). Substituting (0,17) and (1, 17) for (z1,%1)\nand (x3, y2), respectively, in the formula m = —_ yields m = b= which is equivalent tom = 2, orm = 0. Since the graph of y = f(z)\npasses through (0, 17), it follows that = 17. Substituting 0 for m and 17 for b in the equation f(z) = ma + b yields f(z) = 0z + 17, or\nf(z) = 17. Thus, the equation that defines f is f(z) = 17.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3122fc7b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 293,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A linear model estimates the population of a city from 1991 to 2015. The model estimates the population was 57 thousand in 1991, 224\nthousand in 2011, and & thousand in 2015. To the nearest whole number, what is the value of 2?",
    "options": [],
    "correctAnswer": "257",
    "correctValue": "257",
    "explanation": "The correct answer is 257. It's given that a linear model estimates the population of a city from 1991 to 2015. Since the population can be\nestimated using a linear model, it follows that there is a constant rate of change for the model. It's also given that the model estimates the\npopulation was 57 thousand in 1991, 224 thousand in 2011, and z thousand in 2015. The change in the population between 2011 and 1991 is\n224 — 57, or 167, thousand. The change in the number of years between 2011 and 1991 is 2011 — 1991, or 20, years. Dividing 167 by 20 gives\n167/20, or 8.35, thousand per year. Thus, the change in population per year from 1991 to 2015 estimated by the model is 8.35 thousand. The\nchange in the number of years between 2015 and 2011 is 2015 — 2011, or 4, years. Multiplying the change in population per year by the change\nin number of years yields the increase in population from 2011 to 2015 estimated by the model: (8.35) (4), or 33.4, thousand. Adding the\nchange in population from 2011 to 2015 estimated by the model to the estimated population in 2011 yields the estimated population in 2015.\nThus, the estimated population in 2015 is 33.4 + 224, or 257.4, thousand. Therefore to the nearest whole number, the value of & is 257.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-23dedddd",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 294,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the linear function f, (0) = 8 and f(1) = 12. Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) =12z+8"
      },
      {
        "letter": "B",
        "text": "f(x) = 4x"
      },
      {
        "letter": "C",
        "text": "f(z) =4z +12"
      },
      {
        "letter": "D",
        "text": "f(z) =4z +8"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "f(z) =4z +8",
    "explanation": "Choice D is correct. Since f is a linear function, it can be defined by an equation of the form f(z) = az + b, where a and bare constants. It's\ngiven that (0) = 8. Substituting 0 for and 8 for f(z) in the equation f(z) = az + b yields 8 = a(0) + b, or 8 = b. Substituting 8 for b in\nthe equation f(x) = ax + byields f(z) = az + 8. It's given that f(1) = 12. Substituting 1 for & and 12 for f(z) in the equation f(z) = ax\n+ 8 yields 12 = a(1) + 8, or 12 = a+ 8. Subtracting 8 from both sides of this equation yields a = 4. Substituting 4 for a in the equation f(z)\n= az + 8yields f(z) = 4x + 8. Therefore, an equation that defines fis f(x) = 4x + 8.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c8fb6bcb",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 295,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "f(z) =2z +244\nThe given function f represents the perimeter, in centimeters (cm), of a rectangle with a length of £ cm and a fixed width. What is the width,\nin cm, of the rectangle?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "122"
      },
      {
        "letter": "C",
        "text": "244"
      },
      {
        "letter": "D",
        "text": "488"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "122",
    "explanation": "Choice B is correct. It's given that f(z) = 2 + 244 represents the perimeter, in centimeters (cm), of a rectangle with a length of z cm and a\nfixed width. If w represents a fixed width, in cm, then the perimeter, in cm, of a rectangle with a length of cm and a fixed width of w cm can be\ngiven by the function f(z) = 2z + 2w. Therefore, 22 + 2w = 2x + 244. Subtracting 2 from both sides of this equation yields 2w = 244.\nDividing both sides of this equation by 2 yields w = 122. Therefore, the width, in cm, of the rectangle is 122.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a91a2b75",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 296,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f is defined by f(z) = —9z + 9. What is the g-coordinate of the g-intercept of the graph of y = f(z) in the zy-plane?",
    "options": [],
    "correctAnswer": "9",
    "correctValue": "9",
    "explanation": "The correct answer is 9. The y-intercept of the graph of y = f(z) in the xy-plane is the point where the graph of y = f(z) crosses the y-axis,\nwhich occurs at = 0. It's given that the function is defined by f(z) = —9z + 9. Substituting 0 for and y for f(z) in this equation yields y\n=—9(0) +9, 0ry=19. It follows that y = 9 when & = 0 and that the y-intercept of the graph of y = f(z) in the xy-plane is (0, 9). Therefore,\nthe y-coordinate of the y-intercept of the graph of y = f(z) in the xy-plane is 9.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-56dc8045",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 297,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "w(t) = 300—4¢\nThe function w models the volume of liquid, in milliliters, in a container ¢ seconds after it begins draining from a hole at the bottom. According to\nthe model, what is the predicted volume, in milliliters, draining from the container each second?",
    "options": [
      {
        "letter": "A",
        "text": "300"
      },
      {
        "letter": "B",
        "text": "296"
      },
      {
        "letter": "C",
        "text": "75"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "4",
    "explanation": "Choice D is correct. It's given that the function w models the volume of liquid, in milliliters, in a container t seconds after it begins draining from a\nhole at the bottom. The given function w(t) = 300 — 4¢ can be rewritten as w(t) = —4t + 300. Thus, for each increase of ¢ by 1, the value of\nw(t) decreases by 4(1), or 4. Therefore, the predicted volume, in milliliters, draining from the container each second is 4 milliliters.\nChoice A is incorrect. This is the amount of liquid, in milliliters, in the container before the liquid begins draining.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0b0fa68b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 298,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For the function f, f(cz) =  — 8 for all values of z, where cis a positive constant. If f(2) = 35, what is the value of ¢?",
    "options": [],
    "correctAnswer": "0.0465",
    "correctValue": "0.0465",
    "explanation": "The correct answer is Zz. It's given that f(cx) = x — 8 for all values of &, where cis a positive constant, and f(2) = 35. Therefore, for the\ngiven function f, ex = 2. Dividing both sides of this equation by ¢ yields £ = z Substituting z for in the equation f(cz) = z — 8 yields\n(%) = 2 —8,0r £(2) = 2 — 8. Since it's given that f(2) = 35, substituting 35 for £(2) yields 35 = 2 — 8. Adding 8 to both sides of this\nequation yields 43 = z Multiplying both sides of this equation by ¢ yields 43¢ = 2. Dividing both sides of this equation by 43 yields ¢ = 2.\nNote that 2/43, .0465, 0.046, and 0.047 are examples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-6989c80a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 299,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "F(z)= i= —273.15) + 32\nThe function F' gives the temperature, in degrees Fahrenheit, that corresponds to a temperature of Z kelvins. If a temperature increased by 2.10\nkelvins, by how much did the temperature increase, in degrees Fahrenheit?",
    "options": [
      {
        "letter": "A",
        "text": "3.78"
      },
      {
        "letter": "B",
        "text": "35.78"
      },
      {
        "letter": "C",
        "text": "487.89"
      },
      {
        "letter": "D",
        "text": "519.89"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "3.78",
    "explanation": "Choice A is correct. It's given that the function F(z) = i= — 273.15) + 32 gives the temperature, in degrees Fahrenheit, that corresponds to\na temperature of z kelvins. A temperature that increased by 2.10 kelvins means that the value of x increased by 2.10 kelvins. It follows that an\nincrease in & by 2.10 increases F(z) by £(2.10), or 3.78. Therefore, if a temperature increased by 2.10 kelvins, the temperature increased by\n3.78 degrees Fahrenheit.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-bc638f2d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 300,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f defined by f(£) = 14¢ + 9 gives the estimated length, in inches, of a vine plant months after Tavon purchased it. Which of the\nfollowing is the best interpretation of 9 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "Tavon will keep the vine plant for 9 months."
      },
      {
        "letter": "B",
        "text": "The vine plant is expected to grow 9 inches each month."
      },
      {
        "letter": "C",
        "text": "The vine plant is expected to grow to a maximum length of 9 inches."
      },
      {
        "letter": "D",
        "text": "The estimated length of the vine plant was 9 inches when Tavon purchased it."
      }
    ],
    "correctAnswer": "D",
    "correctValue": "The estimated length of the vine plant was 9 inches when Tavon purchased it.",
    "explanation": "Choice D is correct. It's given that the function f defined by f(t) = 14¢ + 9 gives the estimated length, in inches, of a vine plant £ months after\nTavon purchased it. For a function defined by an equation of the form f@) = mit + b, where m and b are constants, b represents the value of\n£(0), or the value of f(t) when the value of ¢ is 0. Therefore, for the function defined by f(t) = 14¢ + 9, 9 represents the value of f(t) when\nthe value of ¢ is 0. This means that 0 months after the vine plant was purchased, the estimated length of the vine plant was 9 inches. Therefore,\nthe best interpretation of 9in this context is the estimated length of the vine plant was 9 inches when Tavon purchased it.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect. The vine plant is expected to grow 14 inches, not 9 inches, each month.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-9d9fe1e6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 301,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "In science class, Diego conducted an experiment to learn about evaporation. Diego measured the height of fluid in a beaker over a period of time.\nThe function f(z) = 39 — 0.18 gives the estimated height, in centimeters (cm), of the fluid in the beaker z days after the start of the\nexperiment. Which of the following is the best interpretation of 39 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "The estimated height, in cm, of the fluid at the start of the experiment"
      },
      {
        "letter": "B",
        "text": "The estimated height, in cm, of the fluid at the end of the experiment"
      },
      {
        "letter": "C",
        "text": "The estimated change in the height, in cm, of the fluid each day"
      },
      {
        "letter": "D",
        "text": "The estimated number of days for all the fluid to evaporate"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The estimated height, in cm, of the fluid at the start of the experiment",
    "explanation": "Choice A is correct. It's given that the function f(z) = 39 — 0.18 gives the estimated height, in centimeters (cm), of the fluid in the beaker z\ndays after the start of the experiment. For a function defined by an equation of the form f(z) = b+ ma, where m and b are constants,\nrepresents the value of f(z) when = 0. It follows that in the given function, 39 represents the value of f(z) when z = 0. Since z= 0\nrepresents the start of the experiment, then the best interpretation of 39 in this context is that the estimated height, in cm, of the fluid was 39 at\nthe start of the experiment.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect. The estimated change in the height, in cm, of the fluid each day is 0.18, not 39.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-255996a6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 302,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "T=1,000+18h\nIn the equation above, T represents Brittany's total take-home pay, in dollars, for her first week of work, where h represents the number of hours\nshe worked that week and 1,000 represents a sign-on bonus. If Brittany's total take-home pay was $1,576, for how many hours was Brittany paid\nfor her first week of work?",
    "options": [
      {
        "letter": "A",
        "text": "16"
      },
      {
        "letter": "B",
        "text": "32"
      },
      {
        "letter": "C",
        "text": "55"
      },
      {
        "letter": "D",
        "text": "88"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "32",
    "explanation": "Choice B is correct. Since Brittany's total take-home pay was $1,576, the value 1,576 can be substituted for T in the given equation\nT=1,000+18htogive 1,576 = 1,000 + 18h. subtracting 1,000 from both sides of this equation gives 576 = 18h. Dividing both\nsides of this equation by 18 gives 32 = h1. Therefore, Brittany was paid for 32 hours for her first week of work.\nChoice A is incorrect. This is half the number of hours Brittany was paid for. Choice C is incorrect and may result from dividing 1,000 by 18.\nChoice D is incorrect and may result from dividing 1,576 by 18.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a1696f3e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 303,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function (J is defined as glx) = 5X + @, where a is a constant. If g(4) = 31, what is the value of a ?",
    "options": [
      {
        "letter": "A",
        "text": "30"
      },
      {
        "letter": "B",
        "text": "22"
      },
      {
        "letter": "C",
        "text": "ll"
      },
      {
        "letter": "D",
        "text": "—23"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "ll",
    "explanation": "Choice C is correct. Substituting 4 for x in g(x) = 5x + a gives g(4) = 5(4) + a. Since g(4) = 31, the equation g(4) = 5(4) + a simplifies to 31 =20 + a.\nIt follows thata = 11.\nChoices A, B, and D are incorrect and may result from arithmetic errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4b0c156b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 304,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the linear function k, h(28) = 15 and h(26) = 22. Which equation defines A?",
    "options": [
      {
        "letter": "A",
        "text": "h(z)=—2z+23"
      },
      {
        "letter": "B",
        "text": "h(z) =—%z+113"
      },
      {
        "letter": "C",
        "text": "h(z)=—%z+23"
      },
      {
        "letter": "D",
        "text": "h(z) = —fz+113"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "h(z) = —fz+113",
    "explanation": "Choice D is correct. An equation defining k can be written in the form y = mx + b, where y = h(x), m represents the slope of the graph of y\n= h() in the xy-plane, and b represents the y-coordinate of the y-intercept of the graph. It's given that h(28) = 15 and h(26) = 22. It follows\nthat the points (28, 15) and (26, 22) are on the graph of y = h(z) in the xy-plane. The slope can be found by using any two points, (Z1,%1)\nand (22, y2), and the formula m = £72 substituting (28, 15) and (26, 22) for (21,31) and (2, 2), respectively, in the slope formula\nyields m = 258. orm = —%. Substituting — for m and (28, 15) for (z, y) in the equation y = mz + byields 15 = (—3)(28) + b, or\n15 = —98 + b. Adding 98 to both sides of this equation yields 113 = b. Substituting -1 for mand 113 for b in the equation y = mz + b\nyields y = — Zz + 113. Since y = h(x), t follows that the equation that defines his h(z) = — Fz + 113.\nChoice A is incorrect. For this function, h(26) = 4%, not h(26) = 22.\nChoice B is incorrect. For this function, h(28) = 105, not h(28) = 15, and h(26) = , not h(26) = 22.\nChoice C is incorrect. For this function, h(28) = —75, not h(28) = 15, and h(26) = —68, not h(26) = 22.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-868fc236",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 305,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Energy per Gram of Typical Macronutrients\n\nMacronutrient | Food calories | Kilojoules\n\nProtein [40 167\n\nFat 90 37.7\n\nCarbohydrate 10 167\nThe table above gives the typical amounts of energy per gram, expressed in both food calories and kilojoules, of the three macronutrients in\nfood. If x food calories is equivalent to k kilojoules, of the following, which best represents the relationship between x and k ?",
    "options": [
      {
        "letter": "A",
        "text": "k=024x"
      },
      {
        "letter": "B",
        "text": "k=4.2x"
      },
      {
        "letter": "C",
        "text": "x=42k"
      },
      {
        "letter": "D",
        "text": "xk=4.2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "k=4.2x",
    "explanation": "Choice Bis correct. The relationship between x food calories and k kilojoules can be modeled as a proportional relationship. Let (x1.k1) and\n\nA (ka—k1)\n(x2,k2) represent the values in the first two rows in the table: (4.0,16.7) and (9.0,37.7). The rate of change, or Taxa)’ is\nX2—X1\n\n21 ) } }\n\n5 = 4.2; therefore, the equation that best represents the relationship between x and k is kK = 4.2X.\nCg=x1)\nChoice A is incorrect and may be the result of calculating the rate of change using Tha—ky) Choice C is incorrect because the number of\n271\n\nkilojoules is greater than the number of food calories. Choice D is incorrect and may be the result of an error when setting up the equation.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-7e1bff94",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 306,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The table gives the number of hours, k, of labor and a plumber’s total charge f(k), in dollars, for two different jobs.\n0)\nThere is a linear relationship between h and fh). Which equation represents this relationship?",
    "options": [
      {
        "letter": "A",
        "text": "f(h) = 25h +130"
      },
      {
        "letter": "B",
        "text": "f(h) = 130h +25"
      },
      {
        "letter": "C",
        "text": "f(h) = 65h + 90"
      },
      {
        "letter": "D",
        "text": "f(h) = 90h + 65"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "f(h) = 65h + 90",
    "explanation": "Choice C is correct. It's given that there is a linear relationship between a plumber's hours of labor, h, and the plumber's total charge fh), in\ndollars. It follows that the relationship can be represented by an equation of the form f(k) = mh + b, where mi is the rate of change of the\nfunction f and bis a constant. The rate of change of f can be calculated by dividing the difference in two values of f(h) by the difference in the\ncorresponding values of h. Based on the values given in the table, the rate of change of f is B15 or 65. Substituting 65 for mm in the equation\nf(h) = mh + byields f(h) = 65h + b. The value of b can be found by substituting any value of h and its corresponding value of f() for h\nand f(h), respectively, in this equation. Substituting 1 for hand 155 for f(h) yields 155 = 65(1) + b, or 155 = 65 + b. Subtracting 65 from\nboth sides of this equation yields 90 = b. Substituting 90 for b in the equation f(h) = 65h + b yields f(h) = 65h + 90.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-946ab892",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 307,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "For the linear function g, the graph of y = g(z) in the xy-plane has a slope of 2 and passes through the point (1, 14). Which equation defines g?",
    "options": [
      {
        "letter": "A",
        "text": "g(a) =22"
      },
      {
        "letter": "B",
        "text": "g(z) =2z+2"
      },
      {
        "letter": "C",
        "text": "g(z) =2z+12"
      },
      {
        "letter": "D",
        "text": "g(z) =2z+14"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "g(z) =2z+12",
    "explanation": "Choice C is correct. An equation defining a linear function can be written in the form g(x) = ma + b, where mn is the slope and (0, b) is the y-\nintercept of the graph of y = g() in the xy-plane. It's given that the graph of y = g(z) has a slope of 2. Therefore, m = 2. It's also given that\nthe graph of y = g(x) passes through the point (1, 14). It follows that when & = 1, g(z) = 14. Substituting 1 for &, 14 for g(), and 2 for m in\nthe equation g(x) = mz + byields 14 = 2(1) + b, or 14 = 2 + b. Subtracting 2 from each side of this equation yields 12 = b. Therefore,\nb= 12. Substituting 2 for rn and 12 for b in the equation g(x) = ma + byields g(x) = 2z + 12. Therefore, the equation that defines gis\ng(x) =2z +12.\nChoice A is incorrect. For this function, the graph of y = g() in the xy-plane passes through the point (1, 2), not (1, 14).\nChoice B is incorrect. For this function, the graph of y= g(z) in the xy-plane passes through the point (1,4), not (1,14).\nChoice D is incorrect. For this function, the graph of y = g(z) in the xy-plane passes through the point (1, 16), not (1, 14).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a7e2859a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 308,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The cost of renting a large canopy tent for up to 10 days is $430 for the first day and $215 for each additional day. Which of the following\nequations gives the cost y, in dollars, of renting the tent for z days, where z is a positive integer and z < 10?",
    "options": [
      {
        "letter": "A",
        "text": "y=216z +215"
      },
      {
        "letter": "B",
        "text": "y = 430z — 215"
      },
      {
        "letter": "C",
        "text": "y = 430z +215"
      },
      {
        "letter": "D",
        "text": "y = 215z + 430"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "y=216z +215",
    "explanation": "Choice A is correct. It's given that the cost of renting a large canopy tent is $430 for the first day and $215 for each additional day for up to 10\ndays. For z days of renting the tent, the cost includes $430 for the first day and $215 for each of the (z — 1) additional days. It follows that the\ncost g, in dollars, of renting the tent can be expressed as y = 430 + 215(z — 1), which is equivalent to y = 430 + 215 — 215, or y = 2152\n+ 215. Therefore, the equation yy = 2152 + 215 gives the cost of renting the tent for Z days, where & is a positive integer and  < 10.\nChoice B is incorrect. This equation represents a situation where the cost of renting the tent for the first day is $215, not $430, and the cost for\neach additional day is $430, not $215.\nChoice C is incorrect. This equation represents a situation where the cost of renting the tent for the first day is $645, not $430, and the cost for\neach additional day is $430, not $215.\nChoice D is incorrect. This equation represents a situation where the cost of renting the tent for the first day is $645, not $430.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-343aaff6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 309,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the linear function f, the graph of y = f(z) in the xy-plane has a slope of 7 and passes through the point (0, 5). Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f@) = 5x"
      },
      {
        "letter": "B",
        "text": "f(z) = 35x"
      },
      {
        "letter": "C",
        "text": "f(z)=Tz+5"
      },
      {
        "letter": "D",
        "text": "f(z) =12z+5"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "f(z)=Tz+5",
    "explanation": "Choice C is correct. An equation that defines a linear function f can be written in the form f(z) = ma + b, where m is the slope of the graph of\ny= f(z) in the xy-plane and (0, b) is the y-intercept of the graph. It's given that for the linear function f, the graph of y = f(z) in the xy-plane\nhas a slope of 7. Therefore, m = 7. It's also given that the graph of y = f(z) in the xy-plane passes through the point (o, 5). Therefore, the y-\nintercept of the graph is (0, 5), and it follows that b= 5. Substituting 7 for m and 5 for bin the equation f(z) = ma + byields f(z) = Tz\n+5.\nChoice A is incorrect. This equation defines a function whose graph has a slope of 5, not 7, and passes through the point (0, 0), not (o, 5).\nChoice B is incorrect. This equation defines a function whose graph has a slope of 35, not 7, and passes through the point (0, 0), not (0, 5).\nChoice D is incorrect. This equation defines a function whose graph has a slope of 12, not 7.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0cadb20e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 310,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f is defined by f(z) = zs, and f(a) = 10, where a is a constant. What is the value of a?",
    "options": [
      {
        "letter": "A",
        "text": "B"
      },
      {
        "letter": "B",
        "text": "10"
      },
      {
        "letter": "C",
        "text": "35"
      },
      {
        "letter": "D",
        "text": "65"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "35",
    "explanation": "Choice C is correct. It's given that f(z) = zs and f(a) = 10, where a is a constant. Therefore, for the given function f, when & = a, f(z)\n= 10. Substituting a for z and 10 for f(z) in the given function f yields 10 = ols Multiplying both sides of this equation by 5 yields 50 = a\n+ 15. Subtracting 15 from both sides of this equation yields 35 = a. Therefore, the value of @ is 35.\nChoice A is incorrect. This is the value of a if f(a) = 4.\nChoice B is incorrect. This is the value of a if f(a) = 5.\nChoice D is incorrect. This is the value of a if f(a) = 16.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-346d5c2e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 311,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 9(2z + 3). For what value of z does f(z) = 63?",
    "options": [
      {
        "letter": "A",
        "text": "2"
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
        "text": "30"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "2",
    "explanation": "Choice A is correct. Substituting 63 for f(z) in the given function yields 63 = 9(2z + 3). Dividing both sides of this equation by 9 yields 7\n= 2z + 3. Subtracting 3 from both sides of this equation yields 4 = 2z. Dividing both sides of this equation by 2 yields 2 = =. Therefore, f(z)\n= 63 when the value of is 2.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-13909d78",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 312,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by the equation f (z) = 100z + 2. What is the value of f (z) when z = 9?",
    "options": [
      {
        "letter": "A",
        "text": "111"
      },
      {
        "letter": "B",
        "text": "118"
      },
      {
        "letter": "C",
        "text": "900"
      },
      {
        "letter": "D",
        "text": "902"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "902",
    "explanation": "Choice D is correct. Substituting 9 for zz in the given equation yields f (9) = 100 (9) + 2, or f (9) = 902. Therefore, the value of f (x) when z\n=9is902.\nChoice A is incorrect. This is the value of f (z) when z = 1.09.\nChoice B is incorrect. This is the value of f(z) when z = 1.16.\nChoice C is incorrect. This is the value of f (z) when z = 8.98.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-68f343c9",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 313,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "If f(z) = z+ 6 and g(z) = 62, what is the value of 7f(2) — g(2)?",
    "options": [
      {
        "letter": "A",
        "text": "—4"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "42"
      },
      {
        "letter": "D",
        "text": "44"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "44",
    "explanation": "Choice D is correct. It's given that f(z) = @ + 6. Substituting 2 for & in the function f yields f(2) = 2+ 6, or f(2) = 8. It's also given that\ng(x) = 6. Substituting 2 for Z in the function g yields g(2) = (6)(2), or g(2) = 12. Substituting 8 for £(2) and 12 for g(2) in the expression\nT£(2) — g(2) yields 7(8) — 12, or 44. Therefore, the value of 7f(2) — g(2) is 44.\nChoice A is incorrect. This is the value of f(2) — g(2), not 7£(2) — g(2).\nChoice B is incorrect. This is the value of f(2), not 7£(2) — g(2)-\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-042aa429",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 314,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "If f(z) = z+ 7 and g(x) = T=, what is the value of 4f (2) — g (2)?",
    "options": [
      {
        "letter": "A",
        "text": "—5"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "22"
      },
      {
        "letter": "D",
        "text": "28"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "22",
    "explanation": "Choice C is correct. The value of f(2) can be found by substituting 2 for Z in the given equation f(z) = z + 7, which yields f(2) = 2+ 7, or\n£(2) = 9. The value of g(2) can be found by substituting 2 for Z in the given equation g(z) = Tz, which yields g(2) = 7(2), or g(2) = 14. The\nvalue of the expression 4(2) — g(2) can be found by substituting the corresponding values into the expression, which gives 4(9) — 14. This\nexpression is equivalent to 36 — 14, or 22.\nChoice Ais incorrect. This is the value of f(2) — g(2), not4f(2) — g(2)-\nChoice B is incorrect and may result from calculating 4f(2) as 4(2) + 7, rather than\n4247).\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-de6fe450",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 315,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "On January 1, 2015, a city's minimum hourly wage was $9.25. It will increase by $0.50 on the first day of the year for the next 5 years. Which of\nthe following functions best models the minimum hourly wage, in dollars, x years after January 1,2015, where x =1,2 3 4 5?",
    "options": [
      {
        "letter": "A",
        "text": "f(x)=9.25-050x"
      },
      {
        "letter": "B",
        "text": "f(x) =9.25x—0.50"
      },
      {
        "letter": "C",
        "text": "f(x)=9.25+0.50x"
      },
      {
        "letter": "D",
        "text": "f(x)=9.25x +0.50"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "f(x)=9.25+0.50x",
    "explanation": "Choice C is correct. It's given that the city’s minimum hourly wage will increase by $0.50 on the first day of the year for the 5 years after January\n1, 2015. Therefore, the total increase, in dollars, in the minimum hourly wage x years after January 1, 2015, is represented by 0.50Xx. Since the\nminimum hourly wage on January 1, 2015, was $9.25, it follows that the minimum hourly wage, in dollars, x years after January 1, 2015, is\nrepresented by 9.25 + 0.50. Therefore, the function f(x) = 9.25 +0.50X best models this situation.\nChoices A, B, and D are incorrect. In choice A, the function models a situation where the minimum hourly wage is $9.25 on January 1, 2015, but\ndecreases by $0.50 on the first day of the year for the next 5 years. The functions in choices B and D both model a situation where the minimum\nhourly wage is increasing by $9.25 on the first day of the year for the 5 years after January 1, 2015.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-63d03c0b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 316,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For a particular car, the linear function f gives the predicted power, in brake horsepower (bhp), for engine speeds between\n1,000 revolutions per minute (rpm) and 6,000 rpm. According to this function, the car's predicted power is 433 bhp at an engine speed\nof 3,331 rpm and 600 bhp at an engine speed of 4,500 rpm. The equation f(z) = 4 (z — a) + 433 defines f, where zis the engine speed,\nin rpm, and a is a constant. What is the value of a?",
    "options": [],
    "correctAnswer": "3331",
    "correctValue": "3331",
    "explanation": "The correct answer is 3,331. For engine speeds between 1,000 revolutions per minute (rpm) and 6,000 rpm, it's given that the equation\nf(z) = (= —- a) + 433 defines the linear function f and gives the predicted power, in brake horsepower (bhp), at an engine speed of\npm, where a is a constant. It's also given that the car's predicted power is 433 bhp at an engine speed of 3,331 rpm. Substituting 3,331\nfor z and 433 for f(z) in the equation yields 433 = +(3,331 — a) + 433. Subtracting 433 from both sides of this equation yields 0\n= 1(3,331 —- a). Multiplying both sides of this equation by 7 yields 0 = 3,331 — a. Adding a to both sides of this equation yields a = 3,331.\nThus, the value of a is 3,331.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-4f89e4d4",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 317,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A student council group is selling school posters for a fundraiser. They use the function p(z) = 5z — 220 to determine their profit p(z), in\ndollars, for selling & school posters. In order to earn a profit of $900, how many school posters must they sell?",
    "options": [],
    "correctAnswer": "224",
    "correctValue": "224",
    "explanation": "The correct answer is 224. It's given that a student council group uses the function p(z) = 5& — 220 to determine their profit p(z), in dollars,\nfor selling 2 school posters. Substituting 900 for p(z) in the given function yields 900 = 5z — 220. Adding 220 to each side of this equation\nyields 1,120 = 5z. Dividing each side of this equation by 5 yields 224 = g. Therefore, in order to earn a profit of $900, they must sell 224\nschool posters.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-cee5b352",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 318,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The length, , of a white whale was 162 centimeters (cm) when it was born and increased an average of 4.8 cm per month for the first 12\nmonths after it was born. Which equation best represents this situation, where & is the number of months after the whale was born and y is the\nlength, in cm, of the whale?",
    "options": [
      {
        "letter": "A",
        "text": "y=162z"
      },
      {
        "letter": "B",
        "text": "y = 162 + 162"
      },
      {
        "letter": "C",
        "text": "y=48r+48"
      },
      {
        "letter": "D",
        "text": "y =4.8z +162"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y =4.8z +162",
    "explanation": "Choice D is correct. It's given that the length of the whale was 162 cm when it was born and that its length increased an average of 4.8 cm per\nmonth for the first 12 months after it was born. Since z represents the number of months after the whale was born, the total increase in the\nwhale's length, in cm, is 4.8 times &, or 4.8%. The length of the whale , in cm, can be found by adding the whale's length at birth, 162 cm, to the\ntotal increase in length, 4.82 cm. Therefore, the equation that best represents this situation is y = 4.8% + 162.\nChoice A is incorrect and may result from conceptual errors.\nChoice B is incorrect and may result from conceptual errors.\nChoice C is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-78391fcc",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 319,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "ENE\n0\nThe table above shows some values of x and their corresponding values Fl) for the linear function f. What is the x-intercept of the graph of\ny = f(x) inthe xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "(=30)"
      },
      {
        "letter": "B",
        "text": "(—4,0)"
      },
      {
        "letter": "C",
        "text": "(-9,0)"
      },
      {
        "letter": "D",
        "text": "(-12,0)"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "(—4,0)",
    "explanation": "Choice B is correct. The equation of a linear function can be written in the form ¥ = MX + b, where y = f(x), m is the slope of the graph of\nYa™n\ny =f(x). and b is the y-coordinate of the y-intercept of the graph. The value of m can be found using the slope formula, Mm = ox\n27X1\nAccording to the table, the points (—11 21) and (—1 01 8) lie on the graph of y = f(x). Using these two points in the slope formula yields\n18-21 Co\nm= 0x11\" or—3. Substituting —3 for min the slope-intercept form of the equation yields y = —3x +b. The value of b can be\nfound by substituting values from the table and solving; for example, substituting the coordinates of the point (1 1 21) into the equation\ny= —3x+bgives21 = —3(—11) +b, which yields bh = — 12. This means the function given by the table can be represented by the\nequation yy = — 3x — 12. The value of the x-intercept of the graph of = f(x) can be determined by finding the value of x when y = 0.\nSubstituting ¥ = O into yy = — 3x — 12 yields 0 = — 3x — 12, or X = — 4. This corresponds to the point (—4 0).\nChoice A is incorrect and may result from substituting the value of the slope for the x-coordinate of the x-intercept. Choice C is incorrect and may\nresult from a calculation error. Choice D is incorrect and may result from substituting the y-coordinate of the y-intercept for the x-coordinate of\nthe x-intercept.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-b2fe7ab6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 320,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "EERE)\n| 2 [51]\n\nFor the linear function g, the table shows four values of and their corresponding values of g(z). The function can be written as g(z) = mx\n+ b, where m and b are constants. What is the value of b?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "27"
      },
      {
        "letter": "C",
        "text": "54"
      },
      {
        "letter": "D",
        "text": "57"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "57",
    "explanation": "Choice D is correct. It's given that for the linear function g, the table shows four values of Z and their corresponding values of g(). It's also given\nthat the function can be written as g() = Tz + b, where m and b are constants. The table shows that when the value of z is 1, the\ncorresponding value of g() is 54. Substituting 1 for and 54 for g(x) in g(x) = mz + byields 54 = m(1) + bor, 54 =m + b. Subtracting\nb from both sides of this equation yields 54 — b= mm. The table also shows that when the value of is 2, the corresponding value of g(z) is\n51. Substituting 2 for and 51 for g(x) in g(z) = mz + byields 51 = m(2) + b, or 51 = 2m + b. Substituting 54 — b for m in this equation\nyields 51 = 2(54 — b) + b. Applying the distributive property to the right-hand side of this equation yields 51 = 108 — 2b + b, or 51 = 108\n— b. Subtracting 108 from both sides of this equation yields —57 = —b. Dividing both sides of this equation by —1 yields 57 = b.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1bc11c4e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 321,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "g(m) = —0.05m + 12.1\nThe given function g models the number of gallons of gasoline that remains from a full gas tank in a car after driving m miles. According to the\nmodel, about how many gallons of gasoline are used to drive each mile?",
    "options": [
      {
        "letter": "A",
        "text": "0.05"
      },
      {
        "letter": "B",
        "text": "12.1"
      },
      {
        "letter": "C",
        "text": "20"
      },
      {
        "letter": "D",
        "text": "242.0"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "0.05",
    "explanation": "Choice A is correct. It's given that the function g models the number of gallons that remain from a full gas tank in a car after driving m miles. In\nthe given function g(m) = —0.05m + 12.1, the coefficient of m is —0.05. This means that for every increase in the value of m by 1, the value\nof g(m) decreases by 0.05. It follows that for each mile driven, there is a decrease of 0.05 gallons of gasoline. Therefore, 0.05 gallons of\ngasoline are used to drive each mile.\nChoice B is incorrect and represents the number of gallons of gasoline in a full gas tank.\nChoice C is incorrect and may result from conceptual errors.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-23c5d458",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 322,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "EERE)\n| 1 | 32 |\n| 38 | 24 |\nFor the linear function g, the table shows four values of & and their corresponding values of g(z). The function can be written as g(z) = mz\n+ b, where m and b are constants. What is the value of b?",
    "options": [
      {
        "letter": "A",
        "text": "d"
      },
      {
        "letter": "B",
        "text": "16"
      },
      {
        "letter": "C",
        "text": "32"
      },
      {
        "letter": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "36",
    "explanation": "Choice D is correct. It's given that for the linear function g, the table shows four values of z and their corresponding values of g(z). It's also given\nthat the function can be written as g() = ma + b, where m and b are constants. The table shows that when the value of z is 1, the\ncorresponding value of g(z) is 32. Substituting 1 for z and 32 for g(z) in g(x) = mz + byields 32 = m(1) + b, or 32 = m+ b. Subtracting\nb from both sides of this equation yields 32 — b = m. The table also shows that when the value of z is 2, the corresponding value of 9(z) is 28.\nSubstituting 2 for € and 28 for g(x) in g(x) = maz + b yields 28 = m(2) + b, or 28 = 2m + b. Substituting 32 — b for m in this equation\nyields 28 = 2(32 — b) + b. Applying the distributive property to the right-hand side of this equation yields 28 = 64 — 2b + b, or 28 = 64 — b.\nSubtracting 64 from both sides of this equation yields —36 = —b. Dividing both sides of this equation by —1 yields 36 = b.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-113b938e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 323,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "y=18-5x\n\nThe equation above represents the speed y, in feet per second, of Sheila's bicycle x seconds after she applied the brakes at the end of a ride. If\n\nthe equation is graphed in the xy-plane, which of the following is the best interpretation of the x-coordinate of the line's x-intercept in the context\n\nof the problem?",
    "options": [
      {
        "letter": "A",
        "text": "The speed of Sheila's bicycle, in feet per second, before Sheila applied the brakes"
      },
      {
        "letter": "B",
        "text": "The number of feet per second the speed of Sheila's bicycle decreased each second after Sheila applied the brakes"
      },
      {
        "letter": "C",
        "text": "The number of seconds it took from the time Sheila began applying the brakes until the bicycle came to a complete stop"
      },
      {
        "letter": "D",
        "text": "The number of feet Sheila's bicycle traveled from the time she began applying the brakes until the bicycle came to a complete stop"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The number of seconds it took from the time Sheila began applying the brakes until the bicycle came to a complete stop",
    "explanation": "Choice C is correct. It's given that for each point (x, y) on the graph of the given equation, the x-coordinate represents the number of seconds\n\nafter Sheila applied the brakes, and the y-coordinate represents the speed of Sheila's bicycle at that moment in time. For the graph of the\n\nequation, the y-coordinate of the x-intercept is 0. Therefore, the x-coordinate of the x-intercept of the graph of the given equation represents the\n\nnumber of seconds it took from the time Sheila began applying the brakes until the bicycle came to a complete stop.\n\nChoice A is incorrect. The speed of Sheila's bicycle before she applied the brakes is represented by the y-coordinate of the y-intercept of the\n\ngraph of the given equation, not the x-coordinate of the x-intercept. Choice B is incorrect. The number of feet per second the speed of Sheila's\n\nbicycle decreased each second after Sheila applied the brakes is represented by the slope of the graph of the given equation, not the x-\n\ncoordinate of the x-intercept. Choice D is incorrect and may result from misinterpreting x as the distance, in feet, traveled after applying the\n\nbrakes, rather than the time, in seconds, after applying the brakes.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-fe287f7e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 324,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "To repair a refrigerator, a technician charges $60 per hour for labor plus $120 for parts. Which function f represents the total amount, in dollars,\nthe technician will charge for this job if it takes & hours?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) =z +120"
      },
      {
        "letter": "B",
        "text": "f(z) = 60z"
      },
      {
        "letter": "C",
        "text": "f(z) = 60z + 120"
      },
      {
        "letter": "D",
        "text": "f(z) = 60z — 120"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "f(z) = 60z + 120",
    "explanation": "Choice C is correct. It's given that the technician charges $60 per hour for labor. Therefore, if the job takes Z hours, the technician will charge\n(32) (z hours), or $60z, for labor. It's also given that the technician charges $120 for parts. Therefore, f(z) = 60z + 120 represents the\ntotal amount, in dollars, the technician will charge for this job if it takes z hours.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect. This function represents the total amount, in dollars, the technician charges for labor only, not the total amount charged for\nlabor and parts.\nChoice D is incorrect. This function represents the total amount, in dollars, the technician would charge if the charge for parts were subtracted\nfrom, rather than added to, the charge for labor.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-6efcc0a3",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 325,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "In the linear function k, h(0) = 41 and h(1) = 40. Which equation defines A?",
    "options": [
      {
        "letter": "A",
        "text": "h(z)=—z+41"
      },
      {
        "letter": "B",
        "text": "h(z)=—2"
      },
      {
        "letter": "C",
        "text": "h(z) =—41z"
      },
      {
        "letter": "D",
        "text": "h(z) =—41"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "h(z)=—z+41",
    "explanation": "Choice A is correct. An equation defining a linear function can be written in the form h(x) = ax + b, where a and bare constants. It's given that\nh(0) = 41. Substituting 0 for & and 41 for h(x) in the equation h(z) = az + b yields 41 = a(0) + b, orb = 41. Substituting 41 for b in the\nequation h(x) = ax + yields h(x) = az + 41. It's also given that h(1) = 40. Substituting 1 for and 40 for h(z) in the equation h(z)\n= az + 41yields 40 = a(1) + 41, or 40 = a+ 41. Subtracting 41 from the left- and right-hand sides of this equation yields —1 = a.\nSubstituting —1 for a in the equation h(x) = az + 41 yields h(z) = —1z +41, or h(z) = —z + 41.\nChoice B is incorrect. Substituting 0 for and 41 for h(z) in this equation yields 41 = —0, which isn't a true statement.\nChoice C is incorrect. Substituting 0 for & and 41 for h(x) in this equation yields 41 = —41(0), or 41 = 0, which isn't a true statement.\nChoice D is incorrect. Substituting 41 for h(x) in this equation yields 41 = —41, which isn't a true statement.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-776cfa7c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 326,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Hana deposited a fixed amount into her bank account each month. The function f(£) = 100 + 25¢ gives the amount, in dollars, in Hana's bank\naccount after £ monthly deposits. What is the best interpretation of 25 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "With each monthly deposit, the amount in Hana's bank account increased by $25."
      },
      {
        "letter": "B",
        "text": "Before Hana made any monthly deposits, the amount in her bank account was $25."
      },
      {
        "letter": "C",
        "text": "After 1 monthly deposit, the amount in Hana's bank account was $25."
      },
      {
        "letter": "D",
        "text": "Hana made a total of 25 monthly deposits."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "With each monthly deposit, the amount in Hana's bank account increased by $25.",
    "explanation": "Choice Ais correct. It's given that ¢ represents the number of monthly deposits. In the given function f(t) = 100 + 25, the coefficient of ¢ is\n25. This means that for every increase in the value of ¢ by 1, the value of f(t) increases by 25. It follows that with each monthly deposit, the\namount in Hana's bank account increased by $25.\nChoice B is incorrect. Before Hana made any monthly deposits, the amount in her bank account was $100.\nChoice C is incorrect. After 1 monthly deposit, the amount in Hana's bank account was $125.\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-73b5f330",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 327,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = 5 + 8. For what value of z does f(z) = 58?",
    "options": [
      {
        "letter": "A",
        "text": "10"
      },
      {
        "letter": "B",
        "text": "13"
      },
      {
        "letter": "C",
        "text": "50"
      },
      {
        "letter": "D",
        "text": "298"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "10",
    "explanation": "Choice Ais correct. It's given that the function f is defined by f(z) = 5z + 8. Substituting 58 for f(z) in this equation yields 58 = 5z + 8.\nSubtracting 8 from both sides of this equation yields 50 = 5. Dividing both sides of this equation by 5 yields 10 = z. Therefore, the value of z\nwhen f(z) = 58s 10.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the value of (58), not the value of z when f(z) = 58.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-295a41f0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 328,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The graph of y = f(z) — 11 is shown.\nJy\n6\n\nI 4 I\n\nI 4 I\n\nNT\n\nINS\n\nNE\n\nNN A\n\n4 -3 at 1 2 3 4\n\nEN]\n\nNL]\n\nTe ENC]\nWhich equation defines the linear function f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z)=-13z—11"
      },
      {
        "letter": "B",
        "text": "f(z)=—2z+7"
      },
      {
        "letter": "C",
        "text": "f(z)=—-13z+7"
      },
      {
        "letter": "D",
        "text": "f(zx)=—2z—11"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "f(z)=—2z+7",
    "explanation": "Choice B is correct. The graph of a line in the xy-plane can be represented by the equation y = ma + b, where m is the slope of the line and\n(0, b) is the y-intercept. The slope of a line that passes through the points (Z1,%1) and (2, y2) can be calculated using the formula m\n= $4 The line shown passes through the points (—1,—2) and (0, —4). Substituting (—1,—2) and (0, 4) for (z1, 31) and (2, ¥2),\nrespectively, in the formula m = =n yieldsm = = which is equivalent tom = 2 or m = —2. Since the line shown passes\nthrough the point (0, —4), it follows that b= —4. Substituting —2 for m and —4 for b in the equation y = ma + b yields y = —2z — 4. It's\ngiven that the graph shown is the graph of y = f(z) — 11. Substituting —2z — 4 for in the equation y = f (x) — 11 yields —2z — 4\n= f(z) — 11. Adding 11 to both sides of this equation yields —2z + 7 = f (z). Therefore, the equation f (z) = —2& + 7 defines the linear\nfunction f.\n\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-e103300e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 329,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The function f(z) is defined as 19 more than 4 times a number z. If y = f(z) is graphed in the zy-plane, what is the best interpretation of the\n-intercept?",
    "options": [
      {
        "letter": "A",
        "text": "When f(z) = 0, the number is — 3."
      },
      {
        "letter": "B",
        "text": "When the number is 0, f(z) = 19."
      },
      {
        "letter": "C",
        "text": "The value of f(z) increases by 1 for each increase of 4 in the value of the number."
      },
      {
        "letter": "D",
        "text": "For each increase of 1 in the value of the number, f(z) increases by 4."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "When f(z) = 0, the number is — 3.",
    "explanation": "Choice A is correct. It's given that the function f(z) is defined as 19 more than 4 times a number z. This can be represented by the equation\nf(z) = 4z + 19. The x-intercept of the graph of y= f(z) in the xy-plane is the point where the graph intersects the x-axis, or the point on the\ngraph where the value of f(z) is equal to 0. Substituting 0 for f(z) in the equation f(z) = 4x + 19 yields 0 = 4z + 19. Subtracting 19 from\neach side of this equation yields —19 = 4z. Dividing each side of this equation by 4 yields £ = -2 Therefore, when f(z) = 0, the number is\n19\n—1,\nChoice Bis incorrect. This is the best interpretation of the y-intercept, not the x-intercept, of the graph of the function.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the best interpretation of the slope, not the x-intercept, of the graph of the function.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-97eab129",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 330,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Area (square\n\nfeet) Water (gallons)\n\n250 | 48\n\n3,780 6,304\n\nsol | eon\n\nThe buildings of a shopping center are designed to allow water to drain from the roof into gutters on the sides of the buildings. The table shows\nthe relationship between the area g, in square feet, of a roof and the amount of water f(z), in gallons, drained from the roof into the gutters over\na certain period of time. Which equation could define f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) =0.6z"
      },
      {
        "letter": "B",
        "text": "f(z) = 1.82"
      },
      {
        "letter": "C",
        "text": "f(z) = 2,268"
      },
      {
        "letter": "D",
        "text": "f(z) = 4,536"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "f(z) = 1.82",
    "explanation": "Choice B is correct. It's given that the table represents the relationship between the area &, in square feet, of the roof of a shopping center and\nthe amount of water f(z) in gallons, drained from the roof into the gutters. Every choice represents this relationship with an equation defining f\ninthe form f(z) = ma, where m is a constant rate of change. The value of m can be determined by dividing both sides of the equation by .\nEach of three pairs of z and f(z) in the table yield m = 1.8, since Fo =18, be =1.8,and wo = 1.8. Therefore, the equation f(z)\n= 1.8 could define f.\nChoice A is incorrect. For the roof with an area of 2,520 square feet, this equation would yield 0.6(2,520), or 1,512, gallons, not the 4,536\ngallons shown in the table.\nChoice C is incorrect. For the roof with an area of 2,520 square feet, this equation would yield 2,268(2,520), or 5,715,360, gallons, not the\n4,536 gallons shown in the table.\nChoice D is incorrect. For the roof with an area of 2,520 square feet, this equation would yield 4,536(2,520), or 11,430,720, gallons, not the\n4,536 gallons shown in the table.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-daad7c32",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 331,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "An object hangs from a spring. The formula # = 30 + 2W relates the length #, in centimeters, of the spring to the weight w, in newtons, of the\nobject. Which of the following describes the meaning of the 2 in this context?",
    "options": [
      {
        "letter": "A",
        "text": "A. The length, in centimeters, of the spring with no weight attached"
      },
      {
        "letter": "B",
        "text": "The weight, in newtons, of an object that will stretch the spring 30 centimeters"
      },
      {
        "letter": "C",
        "text": "The increase in the weight, in newtons, of the object for each one-centimeter increase in the length of the spring"
      },
      {
        "letter": "D",
        "text": "The increase in the length, in centimeters, of the spring for each one-newton increase in the weight of the object"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "The increase in the length, in centimeters, of the spring for each one-newton increase in the weight of the object",
    "explanation": "Choice D is correct. The value 2 is multiplied by w, the weight of the object. When the weight is 0, the length is 30 + 2(0) = 30 centimeters. If the\nweight increases by w newtons, the length increases by 2w centimeters, or 2 centimeters for each one-newton increase in weight.\nChoice A is incorrect because this describes the value 30. Choice B is incorrect because 30 represents the length of the spring before it has been\nstretched. Choice C is incorrect because this describes the value w.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-023c0a8d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 332,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For the function f, if £(3X) = x —6 for all values of x, what is the value of £(6)?",
    "options": [
      {
        "letter": "A",
        "text": "—B"
      },
      {
        "letter": "B",
        "text": "—4"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "—4",
    "explanation": "Choice Bis correct. It's given that £(3x) = x — 6 for all values of x. If 3x = 6, then (3x) will equal £(6). Dividing both sides of 3x = 6 by\n3 gives X = 2. Therefore, substituting 2 for x in the given equation yields (32) = 2 — 6, which can be rewritten as £(6) = —4.\nChoice A is incorrect. This is the value of the constant in the given equation for f. Choice C is incorrect and may result from substituting X = 6,\nrather than X = 2, into the given equation. Choice D is incorrect. This is the value of x that yields £(6) for the left-hand side of the given\nequation; it's not the value of £(6).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a5882327",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 333,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The linear function g is defined by g(z) = b— 15a, where b is a constant. If g(c + 7) = 5 where ¢is a constant, which of the following\nexpressions represents the value of b?",
    "options": [
      {
        "letter": "A",
        "text": "T 19¢"
      },
      {
        "letter": "B",
        "text": "S +7"
      },
      {
        "letter": "C",
        "text": "&¢ +105"
      },
      {
        "letter": "D",
        "text": "15¢ +105"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "&¢ +105",
    "explanation": "Choice C is correct. It's given that gc + 7) = 5 Therefore, for the given linear function g, whenz = ¢ +7, 9(z) = $ . Substituting ¢ + 7 for\nand § for g(x) in g(x) = b— 15 yields § = b— 15(c + 7). Applying the distributive property to the right-hand side of this equation yields §\n= b—15¢ — 105. Adding 15¢ to both sides of this equation yields § + 15¢ = b— 105. Adding 105 to both sides of this equation yields §\n+ 15¢ + 105 = b, or fe + 105 = b. Therefore, the expression that represents the value of b is fe + 105.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1f0966db",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 334,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f is defined by f(z) = z+ [3 For what value of z does f(z) = 5?",
    "options": [],
    "correctAnswer": "3",
    "correctValue": "3",
    "explanation": "The correct answer is 3. Substituting 5 for f(z) in the given function yields 5 = iz + [3 Multiplying each side of this equation by 7 yields 7(5)\n= (32 + 8), or 35 = 9z + 8. Subtracting 8 from each side of this equation yields 27 = 9z. Dividing each side of this equation by 9 yields 3\n= x. Therefore, f(z) = 5 when the value of zis 3.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-c387583f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 335,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In the xy-plane, line k passes through the points (8,6) and (9, 12) and is defined by the equation y = ma + b. What is the value of b?",
    "options": [],
    "correctAnswer": "-42",
    "correctValue": "-42",
    "explanation": "The correct answer is —42. For a linear equation in the form y = ma + b, m represents the slope and b represents the y-coordinate of the y-\nintercept of the graph in the xy-plane. The slope of the graph of a line containing any two points, (1, %1) and (2, 2), can be found using the\nslope formula m= — It's given that in the xy-plane, line k passes through the points (8, 6) and (9, 12). Substituting (8, 6) and (9, 12) for\n(%1,%1) and (22, y2), respectively, in the slope formula yields m = zs orm = 6. Since line k passes through the point (9, 12) and the\nslope of the line is 6, substituting 9 for &, 12 for , and 6 for m in the equation y = ma + b yields 12 = (6)(9) +b, or 12 = 54 +b.\nSubtracting 54 from both sides of this equation yields —42 = b. Therefore, the value of bis —42.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-441558e7",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 336,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Scientists collected fallen acorns that each housed a colony of the ant species P. ohioensis and analyzed each colony's structure. For any of\nthese colonies, if the colony has z worker ants, the equation y = 0.67z + 2.6, where 20 < 2 < 110, gives the predicted number of larvae, g, in\nthe colony. If one of these colonies has 58 worker ants, which of the following is closest to the predicted number of larvae in the colony?",
    "options": [
      {
        "letter": "A",
        "text": "41"
      },
      {
        "letter": "B",
        "text": "61"
      },
      {
        "letter": "C",
        "text": "83"
      },
      {
        "letter": "D",
        "text": "190"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "41",
    "explanation": "Choice A is correct. It's given that the equation y = 0.67z + 2.6, where 20 < z < 110, gives the predicted number of larvae, , in a colony of\nants if the colony has & worker ants. If one of these colonies has 58 worker ants, the predicted number of larvae in that colony can be found by\nsubstituting 58 for & in the given equation. Substituting 58 for & in the given equation yields y = 0.67 (58) + 2.6, or y = 41.46. Of the given\nchoices, 41 is closest to the predicted number of larvae in the colony.\nChoice Bis incorrect. This is closest to the predicted number of larvae in a colony with 87 worker ants.\nChoice C is incorrect. This is closest to the number of worker ants for which the predicted number of larvae in a colony is 58.\nChoice D is incorrect. This is closest to the predicted number of larvae in a colony with 280 worker ants.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-2eef7e61",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 337,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "3\n\nThe graph of the function f is a line in the xy-plane. If the line has slope a and £0) = 3, which of the following defines f?",
    "options": [
      {
        "letter": "A",
        "text": "flx)=—x-3 4 3"
      },
      {
        "letter": "B",
        "text": "flx)=—x+3 4"
      },
      {
        "letter": "C",
        "text": "flx)=4x-3"
      },
      {
        "letter": "D",
        "text": "fx)=4x+3"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "flx)=—x+3 4",
    "explanation": "Choice B is correct. The equation for the function f in the xy-plane can be represented by fx) = mx + b, where m is the slope and b is the y-\n\n3 3\ncoordinate of the y-intercept. Since it's given that the line has a slope of 7 it follows that /m = 7 in fx) = mx + b, which yields\n3 . }\ny= rad +b. Its given that £(0) = 3. This implies that the graph of the function f in the xy-plane passes through the point (0,3). Thus, the y-\n} } } 3 i, 3 )\ncoordinate of the y-intercept of the graph is 3,s0 bh = 3 in f(x) = red +b, whichyields f(x) = red + 3. Therefore, the equation\n3 ) }\n\nflx)= red + 3 defines the function f.\nChoice A is incorrect and may result from a sign error for the y-intercept. Choice C is incorrect and may result from using the denominator of the\ngiven slope as min fx) = mx + b, in addition to a sign error for the y-intercept. Choice D is incorrect and may result from using the\ndenominator of the given slope as min f(x) = mx +b.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-f0773a55",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 338,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Jy\n/ x\no\nThe graph represents the total charge, in dollars, by an electrician for z hours of work. The electrician charges a onetime fee plus an hourly rate.\nWhat is the best interpretation of the slope of the graph?",
    "options": [
      {
        "letter": "A",
        "text": "The electrician’s hourly rate"
      },
      {
        "letter": "B",
        "text": "The electrician’s onetime fee"
      },
      {
        "letter": "C",
        "text": "The maximum amount that the electrician charges"
      },
      {
        "letter": "D",
        "text": "The total amount that the electrician charges"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The electrician’s hourly rate",
    "explanation": "Choice A is correct. It's given that the electrician charges a onetime fee plus an hourly rate. It's also given that the graph represents the total\ncharge, in dollars, for & hours of work. This graph shows a linear relationship in the xy-plane. Thus, the total charge y, in dollars, for & hours of\nwork can be represented as yy = mz + b, where mis the slope and (0, b) is the y-intercept of the graph of the equation in the xy-plane. Since\nthe given graph represents the total charge, in dollars, by an electrician for Z hours of work, it follows that its slope is m, or the electricians\nhourly rate.\nChoice Bis incorrect. The electricians onetime fee is represented by the y-coordinate of the y-intercept, not the slope, of the graph.\nChoice C is incorrect and may result from conceptual errors.\n\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-0c490cd5",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 339,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Sam has a flag with an area of 110 square inches (in?). Sam plans to enlarge the flag by sewing on pieces of colored nylon, where each\npiece would increase the flag's area by 64 in2. Which equation gives the flag's total area g, in square inches, after Sam sews on x pieces of\nnylon?",
    "options": [
      {
        "letter": "A",
        "text": "y=64z"
      },
      {
        "letter": "B",
        "text": "y=64+110z"
      },
      {
        "letter": "C",
        "text": "y=110 + 64x"
      },
      {
        "letter": "D",
        "text": "y=174x"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "y=110 + 64x",
    "explanation": "Choice C is correct. It's given that Sam has a flag with an area of 110 square inches (in?) and that each piece of colored nylon Sam sews on\nincreases the flag's area by 64 in?. If Sam sews on pieces of nylon and each piece increases the area by 64 in, it follows that the expression\n642 represents the total increase in area, in square inches, from sewing on z pieces of nylon. Adding this increase in area, 64 in? to the\noriginal area of the flag, 110 in?, gives the total area of the flag. Therefore, the equation that gives the flag's total area y, in square inches, after\nSam sews on Z pieces of nylon is y = 110 + 64z.\nChoice A is incorrect. This equation represents the total area, in square inches, of Z pieces of colored nylon.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a232aa96",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 340,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function f is defined by f(z) = —3z + 60. What is the value of f(z) when £ = —8?",
    "options": [
      {
        "letter": "A",
        "text": "49"
      },
      {
        "letter": "B",
        "text": "52"
      },
      {
        "letter": "C",
        "text": "57"
      },
      {
        "letter": "D",
        "text": "84"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "84",
    "explanation": "Choice D is correct. The value of f(z) when 2 = —8 can be found by substituting —8 for & in the given function. This yields f(—8) =—3(—8)\n+ 60, or f(—8) = 84. Therefore, when z = —8, the value of f(z) is 84.\nChoice A is incorrect. This is the value of (—3 + (—8)) + 60, not —3(—8) + 60.\nChoice B is incorrect. This is the value of —8 + 60, not —3(—8) + 60.\nChoice C is incorrect. This is the value of —3 + 60, not —3(—8) + 60.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-53487897",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 341,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The relationship between two variables, z and y, is linear. For every increase in the value of z by 1, the value of y increases by 8. When the value\nof zis 2, the value of gis 18. Which equation represents this relationship?",
    "options": [
      {
        "letter": "A",
        "text": "y=2z+18"
      },
      {
        "letter": "B",
        "text": "y=2zx+8"
      },
      {
        "letter": "C",
        "text": "y=8z+2"
      },
      {
        "letter": "D",
        "text": "y=3z+26"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "y=8z+2",
    "explanation": "Choice C is correct. It's given that the relationship between x and y is linear. An equation representing a linear relationship can be written in the\nform y = ma + b, where mi is the slope and b is the y-coordinate of the y-intercept of the graph of the relationship in the xy-plane. It's given that\nfor every increase in the value of z by 1, the value of y increases by 8. The slope of a line can be expressed as the change in y over the change in\nZ. Thus, the slope, m, of the line representing this relationship can be expressed as $ or 8. Substituting 8 for m in the equation y = mz +b\nyields y = 8x + b. It's also given that when the value of & is 2, the value of y is 18. Substituting 2 for & and 18 for in the equation y = 8z + b\nyields 18 = 8(2) + b, or 18 = 16 + b. Subtracting 16 from each side of this equation yields 2 = b. Substituting 2 for b in the equation\ny = 8x + byields y = 8x + 2. Therefore, the equation y = 8z + 2 represents this relationship.\nChoice A is incorrect. This equation represents a relationship where for every increase in the value of z by 1, the value of y increases by 2, not 8,\nand when the value of Z is 2, the value of y is 22, not 18.\nChoice B is incorrect. This equation represents a relationship where for every increase in the value of Z by 1, the value of y increases by 2, not 8,\nand when the value of z is 2, the value of gis 12, not 18.\nChoice D is incorrect. This equation represents a relationship where for every increase in the value of z by 1, the value of y increases by 3, not 8,\nand when the value of g is 2, the value of gis 32, not 18.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1ecaa9c0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 342,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Robert rented a truck to transport materials he purchased from a hardware store. He was charged an initial fee of $20.00 plus an additional\n$0.70 per mile driven. If the truck was driven 38 miles, what was the total amount Robert was charged?",
    "options": [
      {
        "letter": "A",
        "text": "$46.60"
      },
      {
        "letter": "B",
        "text": "$52.90"
      },
      {
        "letter": "C",
        "text": "$66.90"
      },
      {
        "letter": "D",
        "text": "$86.50"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "$46.60",
    "explanation": "Choice A is correct. It's given that Robert was charged an initial fee of $20.00 to rent the truck plus an additional $0.70 per mile driven. Let m\nrepresent the number of miles the truck was driven. Since the rental charge is $0.70 per mile driven, 0.707 represents the amount Robert was\ncharged for m miles driven. Let c equal the total amount, in dollars, Robert was charged to rent the truck. The total amount can be represented by\nthe equation ¢ = 20.00 + 0.70m. It's given that the truck was driven 38 miles, thus 17 = 38. Substituting 38 into the equation gives\n©=20.00+0.70(38). Multiplying 0.70(38) gives ¢ = 20.00 + 26.60. Adding these values gives ¢ = 46.60, so the total amount\nRobert was charged is $46.60.\nChoices B, C, and D are incorrect and may result from setting up the equation incorrectly or from making calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-3ce92ce8",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 343,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "fl)=2z+3\n\nFor the given function f, the graph of y = f(z) in the xy-plane is parallel to line j. What is the slope of line 5?",
    "options": [],
    "correctAnswer": "2",
    "correctValue": "2",
    "explanation": "The correct answer is 2. It's given that function f is defined by f(z) = 2 + 3. Therefore, the equation representing the graph of y = f(z) in\nthe xy-plane is y = 2z + 3, and the graph is a line. For a linear equation in the form gy = ma + b, m represents the slope of the line. Since the\nvalue of m in the equation y = 22 + 3 is 2, the slope of the line defined by function f is 2. It's given that line j is parallel to the line defined by\nfunction f. The slopes of parallel lines are equal. Therefore, the slope of line j is also 2.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-8a6de407",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 344,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The function f is defined by £(X) = mx + b, where m and b are constants. If £(0) = 18 and £(1) = 20, what is the value of m ?",
    "options": [],
    "correctAnswer": "2.",
    "correctValue": "2.",
    "explanation": "The correct answer is 2. The slope-intercept form of an equation for a line is ¥ = mx + b, where mis the slope and b is the y-coordinate of\nYan\nthe y-intercept. Two ordered pairs, (x4 ya) and (x2,y2) can be used to compute the slope using the formula /m = oxi It's given that\n27X1\n£(0)=184and (1) = 20; therefore, the two ordered pairs for this line are (0,18) and (1,20). Substituting these values for (x 1,1) and\n(aya) 20-18 _ 2 N\nYa) gives ———— = —,or2.\n2Y2 1-0 1",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-8643d906",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 345,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "P(f)=250+10t\nThe population of snow leopards in a certain area can be modeled by the function P defined above, where P(t) is the population t years after\n1990. Of the following, which is the best interpretation of the equation P(30) = 550?",
    "options": [
      {
        "letter": "A",
        "text": "The snow leopard population in this area is predicted to be 30 in the year 2020."
      },
      {
        "letter": "B",
        "text": "The snow leopard population in this area is predicted to be 30 in the year 2030."
      },
      {
        "letter": "C",
        "text": "The snow leopard population in this area is predicted to be 550 in the year 2020."
      },
      {
        "letter": "D",
        "text": "The snow leopard population in this area is predicted to be 550 in the year 2030."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The snow leopard population in this area is predicted to be 550 in the year 2020.",
    "explanation": "Choice C is correct. It's given that P(t) represents the population of snow leopards t years after 1990. P(30) = 550 corresponds to = 30\nand P(f) = 550. It follows that { = 30 corresponds to 30 years after 1990, or 2020. Thus, the best interpretation of (30) = 550 is that the\nsnow leopard population in this area is predicted to be 550 in the year 2020.\nChoices A and B are incorrect and may result from reversing the interpretations of t and P(1). Choice D is incorrect and may result from\ndetermining that 30 years after 1990 is 2030, not 2020.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-bbf9e5ce",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 346,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For groups of 25 or more people, a museum charges $21 per person for the first 25 people and $14 for each additional person. Which function f\ngives the total charge, in dollars, for a tour group with nn people, where nn > 25?",
    "options": [
      {
        "letter": "A",
        "text": "f(n)=14n +175"
      },
      {
        "letter": "B",
        "text": "f(n) = 14n + 525"
      },
      {
        "letter": "C",
        "text": "f(n) = 35n — 350"
      },
      {
        "letter": "D",
        "text": "f(n)=14n+21"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "f(n)=14n +175",
    "explanation": "Choice A is correct. A tour group with 7 people, where 7 > 25, can be split into two subgroups: the first 25 people and the additional n — 25\npeople. Since the museum charges $21 per person for the first 25 people and $14 for each additional person, the charge for the first 25 people\nis $21(25) and the charge for the additional 7 — 25 people is $14(n — 25). Therefore, the total charge, in dollars, is given by the function f(n)\n= 21(25) + 14(n— 25), or f(n) = 14n+ 175.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a4d6fbec",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 347,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Ify = 52 + 10, what is the value of yy when = 8?",
    "options": [],
    "correctAnswer": "50",
    "correctValue": "50",
    "explanation": "The correct answer is 50. Substituting 8 for z in the given equation yields y = 5 (8) + 10, or y = 50. Therefore, the value of y/ is 50 when z\n=8.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-67d63e19",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 348,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The cost of renting a carpet cleaner is $52 for the first day and $26 for each additional day. Which of the following functions gives the cost\nC(d), in dollars, of renting the carpet cleaner for d days, where dis a positive integer?",
    "options": [
      {
        "letter": "A",
        "text": "C(d) = 26d + 26"
      },
      {
        "letter": "B",
        "text": "C(d) = 26d + 52"
      },
      {
        "letter": "C",
        "text": "C(d) =52d— 26"
      },
      {
        "letter": "D",
        "text": "C(d) = 52d+ 78"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "C(d) = 26d + 26",
    "explanation": "Choice A is correct. It's given that the cost of renting a carpet cleaner is $52 for the first day and $26 for each additional day. Therefore, the cost\nC(d), in dollars, of renting the carpet cleaner for d days is the sum of the cost for the first day, $52, and the cost for the additional d — 1 days,\n$26(d — 1). It follows that C(d) = 52 + 26(d — 1), which is equivalent to C(d) = 52 + 26d — 26, or C(d) = 26d + 26.\nChoice B is incorrect. This function gives the cost of renting a carpet cleaner for d days if the cost is $78, not $52, for the first day and $26 for\neach additional day.\nChoice C is incorrect. This function gives the cost of renting a carpet cleaner for d days if the cost is $26, not $52, for the first day and $52, not\n$26, for each additional day.\nChoice D is incorrect. This function gives the cost of renting a carpet cleaner for d days if the cost is $130, not $52, for the first day and $52, not\n$26, for each additional day.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-41fdc0b8",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 349,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Population of Greenleaf, Idaho\n\nYear Population\n\n2000 862\n\n2010 846\nThe table above shows the population of Greenleaf, Idaho, for the years 2000 and 2010. If the relationship between population and year is linear,\nwhich of the following functions P models the population of Greenleaf t years after 2000?",
    "options": [
      {
        "letter": "A",
        "text": "P(f)=862—1.6t"
      },
      {
        "letter": "B",
        "text": "P(t) =862—16t"
      },
      {
        "letter": "C",
        "text": "P(f)=862+16(t—2,000)"
      },
      {
        "letter": "D",
        "text": "P(f) =862—1.6(t—2,000)"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "P(f)=862—1.6t",
    "explanation": "Choice Ais correct. It is given that the relationship between population and year is linear; therefore, the function that models the population t\nyears after 2000 is of the form P(f) = mi + b, where m is the slope and b is the population when t = 0. In the year 2000, t = 0. Therefore,\n\nP(10)-P(0 846-862 _ —16\nb =862. The slope is given by m = P(0)-PO) =———— =—— = —1.6. Therefore, P(f) = — 1.6 + 862, which is\n10-0 10-0 10\n\nequivalent to the equation in choice A.\nChoice B is incorrect and may be the result of incorrectly calculating the slope as just the change in the value of P. Choice C is incorrect and may\nbe the result of the same error as in choice B, in addition to incorrectly using t to represent the year, instead of the number of years after 2000.\nChoice D is incorrect and may be the result of incorrectly using t to represent the year instead of the number of years after 2000.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-8ad64841",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 350,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Alinear function f gives a company’s profit, in dollars, for selling items. The company’s profit is $220 when it sells 8 items, and its profit is\n\n$320 when it sells 10 items. Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z) = 150z — 320"
      },
      {
        "letter": "B",
        "text": "f(z) = 32z"
      },
      {
        "letter": "C",
        "text": "f(x) = 50z — 10z"
      },
      {
        "letter": "D",
        "text": "f(z) = 50z — 180"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "f(z) = 50z — 180",
    "explanation": "Choice D is correct. It's given that the relationship between Z and f(z) is linear. A linear function can be written in the form f(z) = mz +b,\n\nwhere Tm is the slope and bis the y-coordinate of the y-intercept of the graph of y = f(z) in the xy-plane. Given two points on a line, (%1,¥1)\n\nand (x3, Y2), the slope of the line can be found using the slope formula m= P= It's given that the company’s profit is $220 when it sells 8\n\nitems and the profit is $320 when it sells 10 items. Since f(z) represents the company's profit, in dollars, for selling z items, the graph of\n\n= f(x) in the xy-plane passes through the points (8, 220) and (10, 320). Substituting (8, 220) and (10, 320) for (1,1) and (2, 2),\n\nrespectively, in the slope formula yields m = 2m which gives m = i, or m = 50. Substituting 50 for m, 8 for , and 220 for f(z) in\n\nf(x) = mx + byields 220 = (50)(8) + b, or 220 = 400 + b. Subtracting 400 from each side of this equation yields —180 = b. Substituting\n\n50 form and —180 for b in f(z) = mz + b yields f(z) = 50z — 180. Therefore, the equation that defines fis f(z) = 50x — 180.\n\nChoice A is incorrect and may result from conceptual or calculation errors.\n\nChoice B is incorrect and may result from conceptual or calculation errors.\n\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-5907e072",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 351,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "fz)=z+b\nFor the linear function £, bis a constant. When z = 0, f(x) = 30. What is the value of b?",
    "options": [
      {
        "letter": "A",
        "text": "—30 1"
      },
      {
        "letter": "B",
        "text": "—3 1"
      },
      {
        "letter": "C",
        "text": "c."
      },
      {
        "letter": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "30",
    "explanation": "Choice D is correct. It's given that when z = 0, f (z) = 30. Substituting 0 for z and 30 for f () in the given function yields 30 = 0+ b, or\n30 = b. Therefore, the value of b is 30.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice Bis incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a73a5c22",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 352,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The function gis defined by g() = 10z + 8. What is the value of g(z) when = 8?",
    "options": [
      {
        "letter": "A",
        "text": "0"
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
        "text": "88"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "88",
    "explanation": "Choice D is correct. The value of g(z) when = 8 can be found by substituting 8 for & in the given equation g(z) = 10z + 8. This yields g(8)\n=10(8) + 8, or g(8) = 88. Therefore, when z = 8, the value of g(x) is 88.\nChoice A is incorrect. This is the value of & when g(z) = 8, rather than the value of g(z) when z = 8.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-1993561d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 353,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the linear function f, the graph of y = f(z) in the xy-plane has a slope of i and passes through the point (0, 5). Which equation defines f?",
    "options": [
      {
        "letter": "A",
        "text": "f(z)=tz+5"
      },
      {
        "letter": "B",
        "text": "f(z) =%z+% =1 5"
      },
      {
        "letter": "C",
        "text": "f@)=12—%"
      },
      {
        "letter": "D",
        "text": "f(z) = {z—5"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "f(z)=tz+5",
    "explanation": "Choice A is correct. An equation that defines a linear function f can be written in the form f(z) = mz + b, where m is the slope of the graph of\ny= f(z) inthe xy-plane and (0, b) is the y-intercept of the graph. It's given that for the linear function f, the graph of y = f(z) in the xy-plane\nhas a slope of i Therefore, m = 1 It's also given that the graph of y = f(z) passes through the point (0, 5). Therefore, the y-intercept of the\ngraphs (0, 5), and it follows that b= 5. Substituting 4 form and 5 for bin the equation f(z) = ma + b yields f(z) = tz+5.\nChoice B is incorrect. This equation defines a function whose graph has a y-intercept of (0, 1). not (o, 5).\nChoice C is incorrect. This equation defines a function whose graph has a y-intercept of (0, -£) not (0, 5).\nChoice D is incorrect. This equation defines a function whose graph has a y-intercept of (o, —5), not (o, 5).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-5ad6bc97",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 354,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "fz) =Tz+1\n\nThe function gives the total number of people on a company retreat with & managers. What is the total number of people on a company retreat\nwith 7 managers?",
    "options": [],
    "correctAnswer": "50",
    "correctValue": "50",
    "explanation": "The correct answer is 50. It's given that the function f gives the total number of people on a company retreat with managers. It's also given\nthat 7 managers are on the company retreat. Substituting 7 for in the given function yields £(7) = 7(7) + 1, or £(7) = 50. Therefore, there\nare a total of 50 people on a company retreat with 7 managers.",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  },
  {
    "id": "satqb-a8e6bd75",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 355,
    "topicId": "m-alg-3",
    "topic": "Linear functions",
    "domain": "Algebra",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Which of the following is the graph of the equation yy = 2X — 5 in the xy-plane?",
    "options": [
      {
        "letter": "A",
        "text": "H+ 4 gasdccas ] HH EEE RY"
      },
      {
        "letter": "B",
        "text": "Nam 4 : HH ] HTH NTT TNT"
      },
      {
        "letter": "C",
        "text": "5 H+ : : HAH Si ] AHH TT TTT PY"
      },
      {
        "letter": "D",
        "text": "y Ports ' 1H / I HH a HA Sra HAH PA"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "y Ports ' 1H / I HH a HA Sra HAH PA",
    "explanation": "Choice D is correct. In the xy-plane, the graph of the equation ¥ = mx + b, where m and b are constants, is a line with slope m and y-intercept\n(0,b). Therefore, the graph of yy = 2X —5 in the xy-plane is a line with slope 2 and a y-intercept (0, — 5). Having a slope of 2 means that for\neach increase in x by 1, the value of y increases by 2. Only the graph in choice D has a slope of 2 and crosses the y-axis at (0, —5). Therefore,\nthe graph shown in choice D must be the correct answer.\nChoices A, B, and C are incorrect. The graph of yy = 2x —5in the xy-plane is a line with slope 2 and a y-intercept at (0, - 5). The graph in\n1\nchoice A crosses the y-axis at the point 0,2.5), not (0, - 5), and it has a slope of 2 not 2. The graph in choice B crosses the y-axis at\n(0, - 5); however, the slope of this line is —2, not 2. The graph in choice C has a slope of 2; however, the graph crosses the y-axis at (0,5), not\n(0,-5).",
    "sourceFile": "questionbank-export-2026-11-4 (1).pdf"
  }
];
