// SAT Math Question Bank: One-variable data: Distributions and measures of center and spread
import { MathQuestion } from './types';

export const PROBLEMSOLVINGONEVARIABLEDATA_QUESTIONS: MathQuestion[] = [
  {
    "id": "satqb-a5b069b4",
    "num": 1,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "410,18 4,45,6,5\nWhat is the median of the data set shown?",
    "options": [
      {
        "letter": "A",
        "text": "d"
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
        "text": "14"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "5",
    "explanation": "Choice B is correct. If a data set contains an even number of data values, when the data values are listed in ascending or descending order, the\nmedian is between the two middle values. The given data set contains values. When listed in ascending order, the data set is , , , , , , ,\nand the two middle values are and . Since the two middle values are the same, the median must be .\nChoice A is incorrect. This value is between the two middle values in the list shown, not the two middle values when the data values are listed in\nascending or descending order.\nChoice C is incorrect. This is the mean, not the median, of the data set.\nChoice D is incorrect. This is the range, not the median, of the data set.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-f890dc20",
    "num": 2,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "2,223,441\nWhat is the median of the seven data values shown?",
    "options": [
      {
        "letter": "A",
        "text": "2"
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
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "3",
    "explanation": "Choice B is correct. When a data set has an odd number of values, the median can be found by ordering the values from least to greatest and\ndetermining the value in the middle. Since the values are already presented in order from least to greatest and there are 7 values, the median is\nthe fourth value in the list. Therefore, the median is 3.\nChoice A is incorrect. This is the mode. Choice C is incorrect. This is the mean. Choice D is incorrect. This is the range.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d3b9c8d8",
    "num": 3,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Groupl +H T+\nGroup 2 H ——-\n+\n20 22 24 26 28 30 32\nMass (kilograms)\nThe box plots summarize the masses, in kilograms, of two groups of gazelles. Based on the box plots, which of the following statements must\nbe true?",
    "options": [
      {
        "letter": "A",
        "text": "The mean mass of group 1 is greater than the mean mass of group 2."
      },
      {
        "letter": "B",
        "text": "The mean mass of group 1 is less than the mean mass of group 2."
      },
      {
        "letter": "C",
        "text": "The median mass of group 1 is greater than the median mass of group 2."
      },
      {
        "letter": "D",
        "text": "The median mass of group 1 is less than the median mass of group 2."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The median mass of group 1 is greater than the median mass of group 2.",
    "explanation": "Choice C is correct. The median of a data set represented in a box plot is represented by the vertical line within the box. It follows that the\nmedian mass of the gazelles in group is kilograms, and the median mass of the gazelles in group is kilograms. Since kilograms is\ngreater than kilograms, the median mass of group is greater than the median mass of group .\nChoice A is incorrect. The mean mass of each of the two groups cannot be determined from the box plots.\nChoice B is incorrect. The mean mass of each of the two groups cannot be determined from the box plots.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-608cf8e2",
    "num": 4,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The histogram summarizes data set A, which represents the number of points per player earned by players of a game. A new player earns\npoints playing the game, and this number of points is added to data set A to create data set B with values. Which of the following must be\ntrue?\nI. The median number of points per player for data set B is less than the median number of points per player for data set A.\nII. The mean number of points per player for data set B is less than the mean number of points per player for data set A.",
    "options": [
      {
        "letter": "A",
        "text": "lonly"
      },
      {
        "letter": "B",
        "text": "Il only"
      },
      {
        "letter": "C",
        "text": "land ll"
      },
      {
        "letter": "D",
        "text": "Neither  nor Il"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "Il only",
    "explanation": "Choice B is correct. The mean of a data set is the sum of the values divided by the number of values. It's given that a new player earns points\nplaying the game, and this number of points is added to data set A to create data set B with values. The histogram shows that all the values in\ndata set A are greater than . Since the additional number of points, , is less than any of the values in the original data set, the mean number\nof points per player for data set B is less than the mean number of points per player for data set A. The median of a data set with values is\nbetween the and values when the values are listed in ascending order. The median of a data set with values is the value\nwhen the values are listed in ascending order. Therefore, the median of data set B is the value in data set B, which is the value in data\nset A. The histogram shows that the and values in data set A are both between and points. Therefore, the and\nvalues in data set A could be equal, in which case the median of data set A would be equal to both the and values in data set A. Then,\nthe median number of points per player for data set A would be equal to the median number of points per player for data set B. Therefore, only\nstatement II must be true.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-4c774b00",
    "num": 5,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Ages of 20 Students Enrolled in a College Class\nAge Frequency\n18 6\n19 5\n20 4\n21 2\n22 1\n23 1\n30 1\nThe table above shows the distribution of ages of the 20 students enrolled in a college class. Which of the following gives the correct order of\nthe mean, median, and mode of the ages?",
    "options": [
      {
        "letter": "A",
        "text": "mode < median < mean"
      },
      {
        "letter": "B",
        "text": "mode < mean < median"
      },
      {
        "letter": "C",
        "text": "median < mode < mean"
      },
      {
        "letter": "D",
        "text": "mean < mode < median"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "mode < median < mean",
    "explanation": "Choice A is correct. The mode is the data value with the highest frequency. So for the data shown, the mode is 18. The median is the middle data\nvalue when the data values are sorted from least to greatest. Since there are 20 ages ordered, the median is the average of the two middle\nvalues, the 10th and 11th, which for these data are both 19. Therefore, the median is 19. The mean is the sum of the data values divided by the\nnumber of the data values. So for these data, the mean is\n.\nSince the mode is 18, the median is 19, and the mean is 20, .\nChoices B and D are incorrect because the mean is greater than the median. Choice C is incorrect because the median is greater than the mode.\nAlternate approach: After determining the mode, 18, and the median, 19, it remains to determine whether the mean is less than 19 or more than\n19. Because the mean is a balancing point, there is as much deviation below the mean as above the mean. It is possible to compare the data to\n19 to determine the balance of deviation above and below the mean. There is a total deviation of only 6 below 19 (the 6 values of 18); however,\nthe data value 30 alone deviates by 11 above 19. Thus the mean must be greater than 19.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-29fa7970",
    "num": 6,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph summarizes the charge, in kilowatt-hours , a battery received each day for days.\n7\n6\n5\n4\n3\n2\n1\n0\nNumber of days\n0 8 9 11 16 23\nCharge (kWh)\nFor how many of these days did the battery receive a charge of ?",
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
        "text": "6"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "6",
    "explanation": "Choice D is correct. It's given that the bar graph summarizes the charge, in kilowatt-hours , a battery received each day for days. The\nheight of each bar in the bar graph shown represents the number of days the battery received the charge, in , specified at the bottom of the\nbar. The bar for a charge of reaches a height of . Therefore, the battery received a charge of for of these days.\nChoice A is incorrect. This is the charge, in , that the battery received, not the number of days the battery received this charge.\nChoice B is incorrect. This is the number of days the battery received a charge of either , , or .\nChoice C is incorrect. This is the number of days the battery received a charge of .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-52f9a246",
    "num": 7,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": ", , , , , , , ,\nWhich frequency table correctly represents the data listed?",
    "options": [
      {
        "letter": "A",
        "text": "Number Frequency"
      },
      {
        "letter": "B",
        "text": "Number Frequency"
      },
      {
        "letter": "C",
        "text": "Number Frequency"
      },
      {
        "letter": "D",
        "text": "Number Frequency"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "Number Frequency",
    "explanation": "Choice A is correct. A frequency table is a table that lists the data value and shows the number of times the data value occurs. In the data listed,\nthe number occurs four times, the number occurs three times, and the number occurs two times. This corresponds to the table in choice\nA.\nChoice B is incorrect. This table has the values for number and frequency reversed.\nChoice C is incorrect because the frequency values don't represent the data listed.\nChoice D is incorrect. This table represents the listed number values as the frequency values.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-a456cfd2",
    "num": 8,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Data\nvalue Frequency\nThe frequency table summarizes the data values in a data set. What is the maximum data value in the data set?",
    "options": [],
    "correctAnswer": "14",
    "correctValue": "14",
    "explanation": "The correct answer is . The maximum value is the largest value in the data set. The frequency refers to the number of times a data value\noccurs. The given frequency table shows that for this data set, the data value occurs three times, the data value occurs three times, the data\nvalue occurs eight times, the data value occurs eight times, the data value occurs nine times, the data value occurs eleven times, the\ndata value occurs nine times, the data value occurs zero times, and the data value occurs six times. Therefore, the maximum data\nvalue in the data set is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-15d87c0f",
    "num": 9,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the distribution of the number of students in each of four extracurricular activities at a high school.\n60\n50\n40\n30\n20\n10\n0\nNumber of students\nchess\ndrama\nrobotics\nyearbook\nActivity\nHow many more students are in drama than in chess?",
    "options": [
      {
        "letter": "A",
        "text": "10"
      },
      {
        "letter": "B",
        "text": "30"
      },
      {
        "letter": "C",
        "text": "40"
      },
      {
        "letter": "D",
        "text": "70"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "10",
    "explanation": "Choice A is correct. It's given that the bar graph shows the distribution of the number of students in each of four extracurricular activities at a\nhigh school. The bar representing drama has a height of ; therefore, there are students in drama. The bar representing chess has a height\nof ; therefore, there are students in chess. Thus, there are , or more students in drama than in chess.\nChoice B is incorrect. This is the number of students in chess.\nChoice C is incorrect. This is the number of students in drama.\nChoice D is incorrect. This is the sum of the number of students in drama and in chess.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-8736334b",
    "num": 10,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Dataset A: 72,73,73,76,76\nData set B: 61,64,74,85,x\nData set A and data set B each contain 5 numbers. If the mean of data set A is equal to the mean of data set B, what is the value of x ?",
    "options": [
      {
        "letter": "A",
        "text": "77"
      },
      {
        "letter": "B",
        "text": "85"
      },
      {
        "letter": "C",
        "text": "86"
      },
      {
        "letter": "D",
        "text": "95"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "86",
    "explanation": "Choice C is correct. The mean of a data set is found by dividing the sum of the values in the data set by the number of values in the data set.\nTherefore, the mean of data set A is , which simplifies to 74. The mean of data set B is represented by the equation\n, or . It’s given that the mean of data set A is equal to the mean of data set B. Therefore, the equation\ncan be used to solve for x. Multiplying both sides of this equation by 5 yields . Subtracting 284 from both\nsides of this equation yields .\nChoices A, B, and D are incorrect and may result from calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-c88e0663",
    "num": 11,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a school fund-raiser, 10 students sold a total of 90 boxes of cookies. Which of the following can be calculated from this information?",
    "options": [
      {
        "letter": "A",
        "text": "The average number of boxes sold per student"
      },
      {
        "letter": "B",
        "text": "The median number of boxes sold per student"
      },
      {
        "letter": "C",
        "text": "The greatest number of boxes sold by one student"
      },
      {
        "letter": "D",
        "text": "The least number of boxes sold by one student"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The average number of boxes sold per student",
    "explanation": "Choice A is correct. The average can be found by dividing the total number of boxes sold by the number of students, which is .\nChoices B, C, and D are incorrect. Each results from choosing measures that require the results of individual students, which are not given.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-3f2ee20a",
    "num": 12,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The results of two independent surveys are shown in the table below.\nMen's Height\nGroup Sample size Mean (centimeters) Standard deviation (centimeters)\nA 2,500 186 12.5\nB 2,500 186 19.1\nWhich statement is true based on the table?",
    "options": [
      {
        "letter": "A",
        "text": "The Group A data set was identical to the Group B data set."
      },
      {
        "letter": "B",
        "text": "Group B contained the tallest participant."
      },
      {
        "letter": "C",
        "text": "The heights of the men in Group B had a larger spread than the heights of the men in Group A."
      },
      {
        "letter": "D",
        "text": "The median height of Group B is larger than the median height of Group A."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The heights of the men in Group B had a larger spread than the heights of the men in Group A.",
    "explanation": "Choice C is correct. Standard deviation is a measure of spread, so data sets with larger standard deviations tend to have larger spread. The\nstandard deviation of the heights of the men in Group B is larger than the standard deviation of the heights of the men in Group A. Therefore, the\nheights of the men in Group B had a larger spread than the heights of the men in Group A.\nChoice A is incorrect. If two data sets are identical, they will have equivalent means and equivalent standard deviations. Since the two data sets\nhave different standard deviations, they cannot be identical. Choice B is incorrect. Without knowing the maximum value for each data set, it’s\nimpossible to know which group contained the tallest participant. Choice D is incorrect. Since the means of the two groups are equivalent, the\nmedians could also be the same or could be different, but it's impossible to tell from the given information.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-f6c18a66",
    "num": 13,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For data set A, the table summarizes the distribution of the number of deliveries received by an office each day during a period of days.\nDeliveries Days\nThe data value was recorded in error and is removed from data set A to create data set B, which consists of the remaining data values.\nWhich statement best compares the median of data set A and the median of data set B?",
    "options": [
      {
        "letter": "A",
        "text": "The median of data set B is less than the median of data set A."
      },
      {
        "letter": "B",
        "text": "The median of data set B is greater than the median of data set A."
      },
      {
        "letter": "C",
        "text": "The median of data set B is equal to the median of data set A."
      },
      {
        "letter": "D",
        "text": "There is not enough information to compare the medians of the two data sets."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The median of data set B is equal to the median of data set A.",
    "explanation": "Choice C is correct. It’s given that for data set A, the table summarizes the number of deliveries received by an office each day over a period of\ndays. If a data set contains an odd number of data values, the median is represented by the middle data value in the list when the data values\nare listed in ascending or descending order. Since data set A contains data values in ascending order, the median of data set A is the\nvalue. Based on the number of days for each value shown in the table, the value is , so the median of data set A is . It’s also given that the\ndata value was recorded in error and is removed from data set A to create data set B. It follows that data set B contains data values in\nascending order. If a data set contains an even number of data values, the median is between the two middle data values when the values are\nlisted in ascending or descending order. It follows that the median of data set B is between the and values. Based on the number of\ndays for each value shown in the table, the and values are both , so the median of data set B is . Therefore, the median of data set B is\nequal to the median of data set A.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-fe6a49d6",
    "num": 14,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the distribution of the number of walnuts per container for containers at a grocery store.\n8\n7\n6\n5\n4\n3\n2\n1\n0\nFrequency\n75 76 77 78\nNumber of walnuts per container\nHow many of these containers of walnuts contain exactly walnuts?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "7"
      },
      {
        "letter": "C",
        "text": "20"
      },
      {
        "letter": "D",
        "text": "78"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "7",
    "explanation": "Choice B is correct. The height of each bar in the graph shown represents the number of containers that contain the number of walnuts specified\nat the bottom of the bar. The bar for walnuts has a height of . Therefore, of these containers of walnuts contain exactly walnuts.\nChoice A is incorrect. This is the number of containers that contain exactly walnuts, not walnuts.\nChoice C is incorrect. This is the total number of containers of walnuts represented in the bar graph, not the number that contain exactly\nwalnuts.\nChoice D is incorrect. This is the number of walnuts in a container that contains exactly walnuts, not the number of containers that contain\nexactly walnuts.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d0efc1dd",
    "num": 15,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "15,14,18,17,x\nThe mean and the median of the five numbers above are equal. Which of the following is NOT a possible value of x ?",
    "options": [
      {
        "letter": "A",
        "text": "6"
      },
      {
        "letter": "B",
        "text": "11"
      },
      {
        "letter": "C",
        "text": "16"
      },
      {
        "letter": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "6",
    "explanation": "Choice A is correct. If x is 6, then the five numbers in the given list are 15, 14, 18, 17, 6. The mean of these five numbers is the sum of all the\nvalues divided by the number of values, or . The median of these five numbers can be found by\nordering the numbers from least to greatest and determining the middle value. When ordered from least to greatest, the numbers in the given list\nare 6, 14, 15, 17, 18, and the middle value is 15. Since the mean is 14 and the median is 15, the mean and median aren’t equal when x is 6.\nChoices B, C, and D are incorrect. If any of these values is substituted for x, the mean and median of the data set would be equal.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-80f1f3a9",
    "num": 16,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A data set consists of colors. The bar graph shows the number of times each color appears in the data set. Which color appears times?",
    "options": [
      {
        "letter": "A",
        "text": "Blue"
      },
      {
        "letter": "B",
        "text": "Green"
      },
      {
        "letter": "C",
        "text": "Red"
      },
      {
        "letter": "D",
        "text": "Yellow"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "Green",
    "explanation": "Choice B is correct. It's given that a data set consists of colors and the bar graph shows the number of times each color appears in the data\nset. Therefore, for each color specified at the bottom of the bar, the frequency corresponds to the number of times that color appears in the data\nset. The color that appears times in the data set has a frequency of on the bar graph. Since the bar with a frequency of corresponds to\ngreen, green is the color that appears times.\nChoice A is incorrect. The color blue appears about times, not times.\nChoice C is incorrect. The color red appears about times, not times.\nChoice D is incorrect. The color yellow appears about times, not times.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-190be2fc",
    "num": 17,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Data set A consists of 10 positive integers less than 60. The list shown gives 9 of the integers from data set A.\n43,45, 44.43, 38,39, 40, 46,40\nThe mean of these 9 integers is 42. If the mean of data set A is an integer that is greater than 42, what is the value of the largest integer from\ndata set A?",
    "options": [],
    "correctAnswer": "52",
    "correctValue": "52",
    "explanation": "The correct answer is . The mean of a data set is calculated by dividing the sum of the data values by the number of values. It’s given that data\nset A consists of values, of which are shown. Let represent the data value in data set A, which isn’t shown. The mean of data set A\ncan be found using the expression , or . It’s given that the mean of the values shown is and that the\nmean of all numbers is greater than . Consequently, the data value, , is larger than . It’s also given that the data values in data set\nA are positive integers less than . Thus, . Finally, it’s given that the mean of data set A is an integer. This means that the sum of\nthe data values, , is divisible by . Thus, must have a ones digit of . It follows that must have a ones digit of . Since\nand has a ones digit of , the only possible value of is . Since is larger than any of the integers shown, the largest integer\nfrom data set A is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-db88a933",
    "num": 18,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Data Set Q\nValue Frequency\nData Set R\nValue Frequency\nData sets Q and R are summarized in the tables shown, where , , and are positive, consecutive integers and . Which statement\ncomparing the means of the data sets is true?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of data set Ris un less than the mean of data set Q. - 2011)"
      },
      {
        "letter": "B",
        "text": "The mean of data set Ris =~ greater than the mean of data set Q."
      },
      {
        "letter": "C",
        "text": "The mean of data set Q is 10 times the mean of data set R."
      },
      {
        "letter": "D",
        "text": "The means of the two data sets are equal."
      }
    ],
    "correctAnswer": "B",
    "correctValue": "The mean of data set Ris =~ greater than the mean of data set Q.",
    "explanation": "Choice B is correct. The mean of a data set is the sum of the values of the data set divided by the total number of values in the data set. When a\ndata set is represented in a frequency table, the sum of the values in the data set is the sum of the products of each value and its frequency. For\ndata set Q, the sum of the products of each value and its frequency is , or , and the number of values is\n, or . Therefore, the mean of data set Q is . For data set R, the sum of the products of each value and its frequency is\n, or , and the number of values is , or . Therefore, the mean of data set R is . Since , , and are positive,\nconsecutive integers and , it follows that and . Substituting for in the mean of data set Q yields\n, or , which is equivalent to , or . Substituting for and for in the mean of data set R\nyields , or , which is equivalent to , or . Subtracting the mean of data set Q from the\nmean of data set R yields , or . Therefore, the mean of data set R is greater than the mean of data\nset Q.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-c178d4da",
    "num": 19,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Value Data set A\nfrequency\nData set B\nfrequency\nData set A and data set B each consist of values. The table shows the frequencies of the values for each data set. Which of the following\nstatements best compares the means of the two data sets?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of data set A is greater than the mean of data set B."
      },
      {
        "letter": "B",
        "text": "The mean of data set A is less than the mean of data set B."
      },
      {
        "letter": "C",
        "text": "The mean of data set A is equal to the mean of data set B."
      },
      {
        "letter": "D",
        "text": "There is not enough information to compare the means of the data sets."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The mean of data set A is greater than the mean of data set B.",
    "explanation": "Choice A is correct. The mean value of a data set is the sum of the values of the data set divided by the number of values in the data set. When a\ndata set is represented in a frequency table, the sum of the values in the data set is the sum of the products of each value and its frequency. For\ndata set A, the sum of products of each value and its frequency is , or . It's given that there are\nvalues in data set A. Therefore, the mean of data set A is , or approximately . Similarly, the mean of data B is , or approximately\n. Therefore, the mean of data set A is greater than the mean of data set B.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-457d2f2c",
    "num": 20,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A data set of 27 different numbers has a mean of 33 and a median of 33. A new data set is created by adding 7 to each number in the original\ndata set that is greater than the median and subtracting 7 from each number in the original data set that is less than the median. Which of the\nfollowing measures does NOT have the same value in both the original and new data sets?",
    "options": [
      {
        "letter": "A",
        "text": "Median"
      },
      {
        "letter": "B",
        "text": "Mean"
      },
      {
        "letter": "C",
        "text": "Sum of the numbers"
      },
      {
        "letter": "D",
        "text": "Standard deviation"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "Standard deviation",
    "explanation": "Choice D is correct. When a data set has an odd number of elements, the median can be found by ordering the values from least to greatest and\ndetermining the middle value. Out of the 27 different numbers in this data set, 13 numbers are below the median, one number is exactly 33, and\n13 numbers are above the median. When 7 is subtracted from each number below the median and added to each number above the median, the\ndata spread out from the median. Since the median of this data set, 33, is equivalent to the mean of the data set, the data also spread out from\nthe mean. Since standard deviation is a measure of how spread out the data are from the mean, a greater spread from the mean indicates an\nincreased standard deviation.\nChoice A is incorrect. All the numbers less than the median decrease and all the numbers greater than the median increase, but the median itself\ndoesn’t change. Choices B and C are incorrect. The mean of a data set is found by dividing the sum of the values by the number of values. The\nnet change from subtracting 7 from 13 numbers and adding 7 to 13 numbers is zero. Therefore, neither the mean nor the sum of the numbers\nchanges.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-c3d65f93",
    "num": 21,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Five Eretmochelys imbricata, a type of sea turtle, each have a nest. The table shows an original data set of the number of eggs that each turtle\nlaid in its nest.\nNest Number of eggs\nA\nB\nC\nD\nE\nA sixth nest with eggs is added to create a new data set. Which of the following correctly compares the means of the two data sets?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of the original data set is greater than the mean of the new data set."
      },
      {
        "letter": "B",
        "text": "The mean of the original data set is less than the mean of the new data set."
      },
      {
        "letter": "C",
        "text": "The means of both data sets are equal."
      },
      {
        "letter": "D",
        "text": "There is not enough information to compare the means."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The mean of the original data set is greater than the mean of the new data set.",
    "explanation": "Choice A is correct. It's given that the table shows an original data set of values. It's also given that a sixth value is added to create a new data\nset. The new data set consists of the values in the original data set and one additional value, . Since the additional value, , is less than\nany value in the original data set, the mean of the original data set is greater than the mean of the new data set.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d73a67d7",
    "num": 22,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Which of the following lists represents a data set with the smallest standard deviation?",
    "options": [
      {
        "letter": "A",
        "text": "51, 52,54, 56, 57"
      },
      {
        "letter": "B",
        "text": "52, 52,54, 56, 56"
      },
      {
        "letter": "C",
        "text": "52, 53,54, 55, 56"
      },
      {
        "letter": "D",
        "text": "53, 54,54, 54, 55"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "53, 54,54, 54, 55",
    "explanation": "Choice D is correct. Standard deviation is a measure of the spread of the values in a data set from the mean of the data set, and the smaller the\nspread, the smaller the standard deviation. Each of the four choices represents a data set that is symmetric with respect to the value .\nTherefore, is the mean of each of these data sets. All the values in the data set in choice D differ from by either or . In each of the other\nthree data sets, the values in the data set, other than the value of , differ from by at least . Therefore, the data set in choice D has the\nsmallest spread and thus the smallest standard deviation.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-35bec412",
    "num": 23,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "73,74,75,77, 79,82, 84, 85,91\nWhat is the median of the data shown?",
    "options": [],
    "correctAnswer": "79",
    "correctValue": "79",
    "explanation": "The correct answer is . The median of a data set with an odd number of values is the middle value of the set when the values are ordered from\nleast to greatest. Because the given data set consists of nine values that are ordered from least to greatest, the median is the fifth value in the\ndata set. Therefore, the median of the data shown is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-6c9444cd",
    "num": 24,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "ClassA HT 1H\nClass B THA\n+\n0 2 4 6 8 10 12\nNumber of books\nThe two box plots show the distribution of number of books read over the summer by the students in two different English classes. What is the\npositive difference between the ranges of number of books read over the summer for the two classes?",
    "options": [],
    "correctAnswer": "4",
    "correctValue": "4",
    "explanation": "The correct answer is . It's given that the two boxplots show the distribution of number of books read over the summer by the students in two\ndifferent English classes. In a boxplot, the first vertical line represents the minimum value of the data set and the last vertical line represents the\nmaximum value of the data set. The range of a data set is the difference between its maximum value and its minimum value. In class A, the\nmaximum number of books read is and the minimum number of books read is . The difference between those values is , or . Therefore,\nthe range of the number of books read in class A is . In class B, the maximum number of books read is and the minimum number of books\nread is . The difference between those values is , or . Therefore, the range of the number of books read in class B is . To find the\npositive difference between the ranges of the number of books read for the two classes, the smaller range must be subtracted from the larger\nrange. Therefore, the positive difference between the ranges of number of books read over the summer for the two classes is , or .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-07f2829b",
    "num": 25,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "International Tourist\nArrivals, in millions\nCountry 2012 2013\nFrance 83.0 84.7\nUnited\nStates 66.7 69.8\nSpain 57.5 60.7\nChina 57.7 55.7\nItaly 46.4 47.7\nTurkey 35.7 37.8\nGermany 30.4 31.5\nUnited\nKingdom 26.3 32.2\nRussia 24.7 28.4\nThe table above shows the number of international tourist arrivals, rounded to the nearest tenth of a million, to the top nine tourist destinations in\nboth 2012 and 2013. Based on the information given in the table, how much greater, in millions, was the median number of international tourist\narrivals to the top nine tourist destinations in 2013 than the median number in 2012, to the nearest tenth of a million?",
    "options": [],
    "correctAnswer": "1.3",
    "correctValue": "1.3",
    "explanation": "The correct answer is 1.3. The median number of tourists is found by ordering the number of tourists from least to greatest and determining the\nmiddle value from this list. When the number of tourists in 2012 is ordered from least to greatest, the middle value, or the fifth number, is 46.4\nmillion. When the number of tourists in 2013 is ordered from least to greatest, the middle value, or the fifth number, is 47.7 million. The difference\nbetween these two medians is . Note that 1.3 and 13/10 are examples of ways to enter a\ncorrect answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d65b9a87",
    "num": 26,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The dot plots represent the distributions of values in data sets A and B.\nData Set A Data Set B\n° ° ° °\n° ° ° ° °\ne oo oo oo o oe oo o oe oo o\neo eo oo oo oo oo oo e © oo oo oo oo oo\n+t Att\n10 11 12 13 14 15 16 10 11 12 13 14 15 16\nValue Value\nWhich of the following statements must be true?\nI. The median of data set A is equal to the median of data set B.\nII. The standard deviation of data set A is equal to the standard deviation of data set B.",
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
        "text": "land ll"
      },
      {
        "letter": "D",
        "text": "Neither I nor Il"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "lonly",
    "explanation": "Choice A is correct. The median of a data set with an odd number of values that are in ascending or descending order is the middle value of the\ndata set. Since the distribution of the values of both data set A and data set B form symmetric dot plots, and each data set has an odd number of\nvalues, it follows that the median is given by the middle value in each of the dot plots. Thus, the median of data set A is , and the median of\ndata set B is . Therefore, statement I is true. Data set A and data set B have the same frequency for each of the values , , , and . Data\nset A has a frequency of for values and , whereas data set B has a frequency of for values and . Standard deviation is a measure\nof the spread of a data set; it is larger when there are more values further from the mean, and smaller when there are more values closer to the\nmean. Since both distributions are symmetric with an odd number of values, the mean of each data set is equal to its median. Thus, each data\nset has a mean of . Since more of the values in data set A are closer to than data set B, it follows that data set A has a smaller standard\ndeviation than data set B. Thus, statement II is false. Therefore, only statement I must be true.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-241f1db7",
    "num": 27,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Weight\n(pounds) Frequency\nThe frequency table summarizes a data set of the weights, rounded to the nearest pound, of tortoises. A weight of pounds is added to the\noriginal data set, creating a new data set of the weights, rounded to the nearest pound, of tortoises. Which statement best compares the\nmean and median of the new data set to the mean and median of the original data set?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of the new data set is greater than the mean of the original data set, and the median of the new data set is greater than the median of the original data set."
      },
      {
        "letter": "B",
        "text": "The mean of the new data set is greater than the mean of the original data set, and the medians of the two data sets are equal."
      },
      {
        "letter": "C",
        "text": "The mean of the new data set is less than the mean of the original data set, and the median of the new data set is less than the median of the original data set."
      },
      {
        "letter": "D",
        "text": "The mean of the new data set is less than the mean of the original data set, and the medians of the two data sets are equal."
      }
    ],
    "correctAnswer": "B",
    "correctValue": "The mean of the new data set is greater than the mean of the original data set, and the medians of the two data sets are equal.",
    "explanation": "Choice B is correct. The mean of a data set is the sum of the values in the data set divided by the number of values in the data set. The new data\nset consists of the weights of the tortoises in the original data set and one additional weight, . Since the additional weight, , is greater\nthan any of the values in the original data set, the mean of the new data set is greater than the mean of the original data set. If a data set\ncontains an odd number of data values, the median is represented by the middle data value in the list when the data values are listed in\nascending or descending order. Since the original data set consists of the weights of tortoises and is in ascending order, the median of the\noriginal data set is represented by the middle value, or the value. Based on the frequencies shown in the table, the value in this data\nset is . If a data set contains an even number of data values, the median is between the two middle data values when the values are listed in\nascending or descending order. Since the new data set consists of the weights of tortoises, the median of the new data set is between the\nand data values when the values are arranged in ascending order. To keep the data in ascending order, the additional value of\nwould be placed at the bottom of the frequency table with a frequency of . Therefore, based on the frequencies in the table, the and\nvalues in the new data set are both . It follows that the median of the new data set is , which is the same as the median of the original data\nset. Therefore, the mean of the new data set is greater than the mean of the original data set, and the medians of the two data sets are equal.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-578e26ae",
    "num": 28,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Data Set A\nLJ\n. LJ\n. LJ .\noe eo oo oo\noe eo oo oo oo\nBE\n22 23 24 25 26\nData set A has 15 values and is represented by the dot plot shown. Data set B is created by adding 46 to each of the values in data set A. Which\nof the following correctly compares the medians and the ranges of data sets A and B?",
    "options": [
      {
        "letter": "A",
        "text": "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
      },
      {
        "letter": "B",
        "text": "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A."
      },
      {
        "letter": "C",
        "text": "The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A."
      },
      {
        "letter": "D",
        "text": "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
    "explanation": "Choice A is correct. The median is the middle value in a data set when the data are arranged in order from least to greatest. Since there are\nvalues in data set A, the median is the value. The value is , so the median of data set A is . The range is found by subtracting the\nminimum value in a data set from the maximum value. The minimum value in data set A is and the maximum value is . Therefore, the range\nof data set A is , or . It’s given that data set B is created by adding to each of the values in data set A. Therefore, the value in\ndata set B is , or , so the median of data set B is . The minimum value in data set B is , or , and the maximum value is\n, or . Therefore, the range of data set B is , or . Since the median of data set A is , and the median of data set B is , the\nmedian of data set B is greater than the median of data set A. Since the ranges of data sets A and B are both , the range of data set B is equal\nto the range of data set A.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-ecbdbe84",
    "num": 29,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The table shown summarizes the number of employees at each of the restaurants in a town.\nNumber of employees Number of\nrestaurants\nto\nto\nto\nto\nto\nWhich of the following could be the median number of employees for the restaurants in this town?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "9"
      },
      {
        "letter": "C",
        "text": "15"
      },
      {
        "letter": "D",
        "text": "21"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "21",
    "explanation": "Choice D is correct. If a data set contains an odd number of data values, the median is represented by the middle data value in the list when the\ndata values are listed in ascending or descending order. Since the numbers of employees are given as ranges of values rather than specific\nvalues, it's only possible to determine the range in which the median falls, rather than the exact median. Since there are restaurants included\nin the data set and the numbers of employees are listed in ascending order, it follows that the median number of employees will be represented\nby the ninth restaurant in the list. Since the first restaurants each have to employees, numbers of employees in the to range would be\nrepresented by the first and second restaurants in the list. The next restaurants each have to employees. Therefore, numbers of\nemployees in the to range will be represented by the third through sixth restaurants in the list. The next restaurants each have to\nemployees. Therefore, numbers of employees in the to range will be represented by the seventh and eighth restaurants in the list. Since the\nnext restaurants each have to employees, numbers of employees in the to range will be represented by the ninth through fifteenth\nrestaurants in the list. This means that the ninth restaurant in the list, which has the median number of employees for the restaurants in this\ntown, has a number of employees in the to range. Of the given choices, the only number of employees in the to range is .\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect. This is the position of the median in the list, not the value of the median.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-f8a322d9",
    "num": 30,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Two data sets of integers each are summarized in the histograms shown. For each of the histograms, the first interval represents the\nfrequency of integers greater than or equal to , but less than . The second interval represents the frequency of integers greater than or equal\nto , but less than , and so on. What is the smallest possible difference between the mean of data set A and the mean of data set B?",
    "options": [
      {
        "letter": "A",
        "text": "0"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "23"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1",
    "explanation": "Choice B is correct. The histograms shown have the same shape, but data set A contains values between and and data set B contains\nvalues between and . Thus, the mean of data set A is greater than the mean of data set B. Therefore, the smallest possible difference\nbetween the mean of data set A and the mean of data set B is the difference between the smallest possible mean of data set A and the greatest\npossible mean of data set B. In data set A, since there are integers in the interval greater than or equal to but less than , integers greater\nthan or equal to but less than , integers greater than or equal to but less than , and integers greater than or equal to but less\nthan , the smallest possible mean for data set A is . In data set B, since there are integers greater than or equal to\nbut less than , integers greater than or equal to but less than , integers greater than or equal to but less than , and integers\ngreater than or equal to but less than , the largest possible mean for data set B is . Therefore, the smallest\npossible difference between the mean of data set A and the mean of data set B is , which is\nequivalent to . This expression can be rewritten as , or\n, which is equal to . Therefore, the smallest possible difference between the mean of data set A and the mean of data set B is .\nChoice A is incorrect. This is the smallest possible difference between the ranges, not the means, of the data sets.\nChoice C is incorrect. This is the difference between the greatest possible mean, not the smallest possible mean, of data set A and the greatest\npossible mean of data set B.\nChoice D is incorrect. This is the smallest possible difference between the sum of the values in data set A and the sum of the values in data set\nB, not the smallest possible difference between the means.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-12dae628",
    "num": 31,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "2,9,14.23, 32\nWhat is the mean of the data shown?",
    "options": [
      {
        "letter": "A",
        "text": "14"
      },
      {
        "letter": "B",
        "text": "16"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "16",
    "explanation": "Choice B is correct. The mean of a set of data values is the sum of all the data values divided by the number of data values in the set. The sum of\nthe data values shown is , or . Since there are data values in the set, the mean of the data shown is , or .\nChoice A is incorrect. This is the median, not the mean, of the data shown.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the maximum, not the mean, of the data shown.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1142af44",
    "num": 32,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Value Frequency\n1 a\n2 2a\n3 3a\n4 2a\n5 a\nThe frequency distribution above summarizes a set of data, where a is a positive integer. How much greater is the mean of the set of data than\nthe median?",
    "options": [
      {
        "letter": "A",
        "text": "0"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "0",
    "explanation": "Choice A is correct. Since the frequencies of values less than the middle value, 3, are the same as the frequencies of the values greater than 3,\nthe set of data has a symmetric distribution. When a set of data has a symmetric distribution, the mean and median values are equal. Therefore,\nthe mean is 0 greater than the median.\nChoices B, C, and D are incorrect and may result from misinterpreting the set of data.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1e8ccffd",
    "num": 33,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The mean score of 8 players in a basketball game was 14.5 points. If the highest individual score is removed, the mean score of the remaining 7\nplayers becomes 12 points. What was the highest score?",
    "options": [
      {
        "letter": "A",
        "text": "20"
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
        "text": "36"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "32",
    "explanation": "Choice C is correct. If the mean score of 8 players is 14.5, then the total of all 8 scores is . If the mean of 7 scores is 12, then\nthe total of all 7 scores is . Since the set of 7 scores was made by removing the highest score of the set of 8 scores, then the\ndifference between the total of all 8 scores and the total of all 7 scores is equal to the removed score: .\nChoice A is incorrect because if 20 is removed from the group of 8 scores, then the mean score of the remaining 7 players is\nis approximately 13.71, not 12. Choice B is incorrect because if 24 is removed from the group of 8 scores, then the mean\nscore of the remaining 7 players is is approximately 13.14, not 12. Choice D is incorrect because if 36 is removed from the\ngroup of 8 scores, then the mean score of the remaining 7 players is or approximately 11.43, not 12.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-a29e89fc",
    "num": 34,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The list gives the mass, in grams, of 5 alpine marmots.\n4,010; 4,010; 3,030; 4,050; 3,050\nWhat is the mean mass, in grams, of these 5 alpine marmots?",
    "options": [],
    "correctAnswer": "3630",
    "correctValue": "3630",
    "explanation": "The correct answer is . The mean of a data set is the sum of the values in the data set divided by the number of values in the data set. The\nsum of the masses, in grams, of these alpine marmots is , or grams. The number of alpine\nmarmots in the data set is . Therefore, the mean mass, in grams, of these alpine marmots is , or .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-ea95087d",
    "num": 35,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Type of store Average number of\nemployees\nWarehouse store\nDepartment store\nSupermarket\nFor a certain region, the table shows the average number of store employees in by type of store. Based on the table, how much greater was\nthe average number of store employees in warehouse stores than in supermarkets?",
    "options": [
      {
        "letter": "A",
        "text": "83"
      },
      {
        "letter": "B",
        "text": "152"
      },
      {
        "letter": "C",
        "text": "235"
      },
      {
        "letter": "D",
        "text": "495"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "235",
    "explanation": "Choice C is correct. The table shows that for a certain region in , the average number of store employees in warehouse stores was and\nthe average number of store employees in supermarkets was . Subtracting from yields , or . Therefore, the average\nnumber of store employees was greater in warehouse stores than in supermarkets.\nChoice A is incorrect. For this region in , this is how much greater the average number of store employees was in department stores than in\nsupermarkets.\nChoice B is incorrect. For this region in , this is how much greater the average number of store employees was in warehouse stores than in\ndepartment stores.\nChoice D is incorrect. For this region in , this is the sum of the average number of store employees in warehouse stores and in\nsupermarkets.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-e7d48c8a",
    "num": 36,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The dot plot represents a data set of the number of bursts for eruptions of a steam vent. If an additional eruption with bursts is added to\nthis data set to create a new data set of eruptions, which of the following measures will be greater for the new data set than for the original\ndata set?\nI. The median number of bursts\nII. The mean number of bursts",
    "options": [
      {
        "letter": "A",
        "text": "land ll"
      },
      {
        "letter": "B",
        "text": "1only"
      },
      {
        "letter": "C",
        "text": "Il only"
      },
      {
        "letter": "D",
        "text": "Neither  nor Il"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "Il only",
    "explanation": "Choice C is correct. It’s given that the dot plot represents a data set of the number of bursts for eruptions of a steam vent. The median of a\ndata set with an odd number of elements is the middle element when the elements are in numerical order. For elements in numerical order,\nthis is the element. For this data set, the first elements have a value of , and the next elements have a value of . Thus, the element\nin the ordered data set is and the median number of bursts for the original data set is . If an additional eruption with bursts is added to this\ndata set to create a new data set of eruptions, the median of the new data set will be between the and elements in the ordered set,\nwhich will also be . Therefore, the median number of bursts for the new data set will be the same as the median number of bursts for the\noriginal data set. The mean number of bursts for the original data set is found by adding the values of all elements and dividing that sum by\nthe number of elements, . Since the data is shown in a dot plot, the sum of the values of the elements can be found by multiplying each\nelement's value by its frequency: , or . Therefore, the mean number of bursts for the original data set is\n. If an additional eruption with bursts is added to this data set to create a new data set of bursts, the mean number of bursts for the\nnew data set is , or . Since , the mean number of bursts for the new data set is greater than the mean number of bursts for the\noriginal data set. Therefore, of the median number of bursts and the mean number of bursts, only the mean number of bursts is greater for the\nnew data set than for the original data set.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-7b65bb28",
    "num": 37,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Station 1 Station 2 Station 3 Station 4 Station 5\n$3.699 $3.609 $3.729 $3.679 $3.729\nIn the table above, Melissa recorded the price of one gallon of regular gas from five different local gas stations on the same day. What is the\nmedian of the gas prices Melissa recorded?",
    "options": [
      {
        "letter": "A",
        "text": "$3.679"
      },
      {
        "letter": "B",
        "text": "$3.689"
      },
      {
        "letter": "C",
        "text": "$3.699"
      },
      {
        "letter": "D",
        "text": "$3.729"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "$3.699",
    "explanation": "Choice C is correct. The median of a data set is the middle value when the data is in ascending or descending order. In ascending order, the gas\nprices are $3.609, $3.679, $3.699, $3.729, and $3.729. The middle number of this list is 3.699, so it follows that $3.699 is the median gas price.\nChoice A is incorrect. When the gas prices are listed in ascending order, this value isn’t the middle number. Choice B is incorrect. This value\nrepresents the mean gas price. Choice D is incorrect. This value represents both the mode and the maximum gas price.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-be00d896",
    "num": 38,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "For which of the following data sets is the mean greater than the median?",
    "options": [
      {
        "letter": "A",
        "text": "5,5,5,5,5,5,5,55"
      },
      {
        "letter": "B",
        "text": "0,10, 20, 30, 40, 50, 60, 70, 80"
      },
      {
        "letter": "C",
        "text": "2,4,8,16,32, 64,128, 256, 512"
      },
      {
        "letter": "D",
        "text": "7,107,107, 207, 207, 207, 307, 307, 307"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "2,4,8,16,32, 64,128, 256, 512",
    "explanation": "Choice C is correct. If the values in a data set are ordered from least to greatest, the median of the data set will be the middle value. Since each\ndata set in the choices is ordered and contains exactly 9 data values, the 5th value in each is the median. It follows that the median of the data\nset in choice C is 32. The sum of the positive differences between 32 and each of the values that are less than 32 is significantly smaller than the\nsum of the positive differences between 32 and each of the values that are greater than 32. If 32 were the mean, these sums would have been\nequal to each other. Therefore, the mean of this data set must be greater than 32. This can also be confirmed by calculating the mean as the sum\nof the values divided by the number of values in the data set: .\nChoices A and B are incorrect. Each of the data sets in these choices is symmetric with respect to its median, so the mean and the median for\neach of these choices are equivalent. Choice D is incorrect. The median of this data set is 207. Since the sum of the positive differences between\n207 and each of the values less than 207 is greater than the sum of the positive differences between 207 and each value greater than 207 in this\ndata set, the mean must be less than the median.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-560fab82",
    "num": 39,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The table shows the frequency of values in a data set.\nValue Frequency\nWhat is the minimum value of the data set?",
    "options": [],
    "correctAnswer": "19",
    "correctValue": "19",
    "explanation": "The correct answer is . The minimum value of a data set is the least value in the data set. The frequency refers to the number of times a value\noccurs. The given table shows that for this data set, the value occurs times, the value occurs time, the value occurs times, and\nthe value occurs times. Therefore, of the values , , , and given in the data set, the minimum value of the data set is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d94018fd",
    "num": 40,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Class A Class B\nLd .\noo oo\noe oo oo oe o o\noe oo oo o eo eo oo o\noe oo oo oo oo eo eo oo oo oo\neo oo oo oo oo eo © oo oo oo\ne oo 0 0 0 oo o © oe 0 0 0 oo o\nBe ee Ee EE Ee\n123 4567 14 15 16 17 18 19 20\nEach of the dot plots shown represents the number of glue sticks brought in by each student for two classes, class A and class B. Which\nstatement best compares the standard deviations of the numbers of glue sticks brought in by each student for these two classes?",
    "options": [
      {
        "letter": "A",
        "text": "The standard deviation of the number of glue sticks brought in by each student for class A is less than the standard deviation of the number of glue sticks brought in by each student for class B."
      },
      {
        "letter": "B",
        "text": "The standard deviation of the number of glue sticks brought in by each student for class A is equal to the standard deviation of the number of glue sticks brought in by each student for class B."
      },
      {
        "letter": "C",
        "text": "The standard deviation of the number of glue sticks brought in by each student for class A is greater than the standard deviation of the number of glue sticks brought in by each student for class B."
      },
      {
        "letter": "D",
        "text": "There is not enough information to compare these standard deviations."
      }
    ],
    "correctAnswer": "B",
    "correctValue": "The standard deviation of the number of glue sticks brought in by each student for class A is equal to the standard deviation of the number of glue sticks brought in by each student for class B.",
    "explanation": "Choice B is correct. Standard deviation is a measure of the spread of a data set from its mean. The dot plot for class A and the dot plot for class\nB have the same shape. Thus, the frequency distributions for both class A and class B are the same. Since both class A and class B have the\nsame frequency distribution of glue sticks brought in by each student, it follows that both class A and class B have the same spread of the\nnumber of glue sticks brought in by each student from their respective means. Therefore, the standard deviation of the number of glue sticks\nbrought in by each student for class A is equal to the standard deviation of the number of glue sticks brought in by each student for class B.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1f4c57d7",
    "num": 41,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For the last three years, a pig at a farm gave birth to one litter per year. The table shows the number of piglets in each of these three litters.\nLitter number Number of\npiglets\nWhat is the mean number of piglets per litter for these three litters?",
    "options": [
      {
        "letter": "A",
        "text": "2"
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
    "correctAnswer": "C",
    "correctValue": "8",
    "explanation": "Choice C is correct. It's given that the numbers of piglets in litters , , and are , , and , respectively. The mean number of piglets per litter\nfor these three litters is , which is equivalent to , or .\nChoice A is incorrect. This is the range of the number of piglets per litter for these three litters.\nChoice B is incorrect. This is the minimum number of piglets per litter for these three litters.\nChoice D is incorrect. This is the maximum number of piglets per litter for these three litters.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-4b09f783",
    "num": 42,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Alist of 10 data values is shown.\n6.8,16,4,17,26,8,5,5.5\nWhat is the mean of these data?",
    "options": [],
    "correctAnswer": "10",
    "correctValue": "10",
    "explanation": "The correct answer is . The mean of a data set is calculated by dividing the sum of the data values by the number of data values in the data\nset. For this data set, the mean can be calculated as , which is equivalent to , or .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-3aa0642c",
    "num": 43,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Shape Number of\ncards\nSquare\nCircle\nTriangle\nStar\nThe table summarizes the distribution of shape printed on one side for cards in a deck of cards. How many cards in the deck have a triangle\nprinted on one side?",
    "options": [],
    "correctAnswer": "14",
    "correctValue": "14",
    "explanation": "The correct answer is . The table summarizes the distribution of shape printed on one side for cards in a deck of cards. The table shows that\nthe number of cards when the shape is a triangle is . Therefore, there are cards in the deck that have a triangle printed on one side.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-bfa8a85c",
    "num": 44,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "66,88, 810,21\nWhich of the following lists represents a data set that has the same median as the data set shown?",
    "options": [
      {
        "letter": "A",
        "text": "46,66,838"
      },
      {
        "letter": "B",
        "text": "6,6.8,8,10,10"
      },
      {
        "letter": "C",
        "text": "6,8,10,10,10,12"
      },
      {
        "letter": "D",
        "text": "8,8,10,10,21,21"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6,6.8,8,10,10",
    "explanation": "Choice B is correct. If a data set contains an odd number of data values, the median is represented by the middle data value in the list when the\ndata values are listed in ascending or descending order. Since the data set shown has data values and is in ascending order, it follows that the\nmedian is the fourth data value in the list, or . If a data set contains an even number of data values, the median is between the two middle data\nvalues when the values are listed in ascending or descending order. Since each of the choices consists of a data set with data values in\nascending order, it follows that the median is between the third and fourth data value. The third and fourth data values in choice B are and .\nThus, choice B represents a data set with a median of . Since the median of the data set shown is and choice B represents a data set with a\nmedian of , it follows that choice B represents a data set that has the same median as the data set shown.\nChoice A is incorrect. This list represents a data set with a median of , not .\nChoice C is incorrect. This list represents a data set with a median of , not .\nChoice D is incorrect. This list represents a data set with a median of , not .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-fa7a0164",
    "num": 45,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The table below shows the high and low temperatures in Houston, Texas, during a five-day period.\nWhat was the mean low temperature, in degrees Fahrenheit, during the five-day period?",
    "options": [
      {
        "letter": "A",
        "text": "48.8"
      },
      {
        "letter": "B",
        "text": "49"
      },
      {
        "letter": "C",
        "text": "59"
      },
      {
        "letter": "D",
        "text": "59.1"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "48.8",
    "explanation": "Choice A is correct. The mean low temperature can be calculated by finding the sum of the low temperatures for all the days shown in the table,\n49 + 37 + 41 + 54 + 63 = 244, and then dividing the sum by the number of days the temperature was recorded, .\nChoice B is incorrect. This may be the result of choosing the median rather than calculating the mean. Choices C and D are incorrect and may be\nthe result of calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-708590d7",
    "num": 46,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "DatasetA:1,2,3,4,56,7\nDatasetB:1,1,2,2,3,3,4\nWhich of the following statements correctly compares the means of data set A and data set B?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of each data set is 2."
      },
      {
        "letter": "B",
        "text": "The mean of each data set is 4."
      },
      {
        "letter": "C",
        "text": "The mean of data set A is less than the mean of data set B."
      },
      {
        "letter": "D",
        "text": "The mean of data set A is greater than the mean of data set B."
      }
    ],
    "correctAnswer": "D",
    "correctValue": "The mean of data set A is greater than the mean of data set B.",
    "explanation": "Choice D is correct. The mean of a data set is found by dividing the sum of the values in the data set by the number of values in the data set.\nTherefore, the mean of data set A is , or 4. The mean of data set B is\n, or approximately 2.2857. Therefore, the mean of data set A is greater than the mean of data set B.\nAlternate approach: Data set A and data set B are both ordered from least to greatest value. Besides the first value in each data set, which is 1,\neach value in ordered data set B is less than the respective value in ordered data set A. Therefore, conceptually, the mean of data set A must be\ngreater than the mean of data set B.\nChoices A, B, and C are incorrect and may result from various misconceptions or miscalculations.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-bf47ad54",
    "num": 47,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Each of the following frequency tables represents a data set. Which data set has the greatest mean?",
    "options": [
      {
        "letter": "A",
        "text": "70:4, 80:5, 90:6, 100:7"
      },
      {
        "letter": "B",
        "text": "70:6, 80:6, 90:6, 100:6"
      },
      {
        "letter": "C",
        "text": "70:7, 80:6, 90:6, 100:7"
      },
      {
        "letter": "D",
        "text": "70:8, 80:5, 90:5, 100:8"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "70:4, 80:5, 90:6, 100:7",
    "explanation": "Choice A is correct. The tables in choices B, C, and D each represent a data set where the values and have the same frequency and the\nvalues and have the same frequency. It follows that each of these data sets is symmetric around the value halfway between and ,\nor . When a data set is symmetric around a value, that value is the mean of the data set. Therefore, the data sets represented by the tables in\nchoices B, C, and D each have a mean of . The table in choice A represents a data set where the value has a greater frequency than the\nvalue and the value has a greater frequency than the value . It follows that this data set has a mean greater than . Therefore, of the\ngiven choices, choice A represents the data set with the greatest mean.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-f52123e0",
    "num": 48,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "23, 27,27, 32,35, 36, 52\nWhat is the range of the 7 scores shown?",
    "options": [],
    "correctAnswer": "29",
    "correctValue": "29",
    "explanation": "The correct answer is . The range of a data set is the difference between its maximum value and its minimum value. For the data set shown,\nthe maximum score is and the minimum score is . The difference between those scores is , or . Therefore, the range of the\nscores shown is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-7760c516",
    "num": 49,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Each value in the data set shown represents the height, in centimeters, of a plant.\n6.10,13,2.15,22,10,4 4.4\nWhat is the mean height, in centimeters, of these plants?",
    "options": [],
    "correctAnswer": "9",
    "correctValue": "9",
    "explanation": "The correct answer is . The mean of a data set is the sum of the values in the data set divided by the number of values in the data set. It follows\nthat the mean height, in centimeters, of these plants is the sum of the heights, in centimeters, of each plant,\n, or , divided by the number of plants in the data set, . Therefore, the mean height, in centimeters, of these plants is , or .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-40f0ee70",
    "num": 50,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Task Time\n(minutes)\nI\nII\nIII\nIV\nV\nThe table shows the amount of time it took Robert to complete each of the tasks in a project. What was the mean time, in minutes, for Robert\nto complete a task for this project?",
    "options": [],
    "correctAnswer": "8",
    "correctValue": "8",
    "explanation": "The correct answer is . The mean of a data set is the sum of the values in the data set divided by the number of values in the data set. It's given\nin the table that the times, in minutes, it took Robert to complete each of the tasks are , , , , and . The sum of these times is\n, or , minutes. There are tasks in the project. Therefore, the mean time, in minutes, for Robert to complete a task for this project is\n, or .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-374b18f9",
    "num": 51,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The number of acres of useful timberland in 13 counties in California is summarized in the box plot above. Which of the following is closest to\nthe median number of acres?",
    "options": [
      {
        "letter": "A",
        "text": "4399"
      },
      {
        "letter": "B",
        "text": "7,067"
      },
      {
        "letter": "C",
        "text": "8831"
      },
      {
        "letter": "D",
        "text": "10,595"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "7,067",
    "explanation": "Choice B is correct. The median of the data summarized by a box plot is the value associated with the vertical line segment within the box.\nAccording to the box plot shown, this value is slightly greater than 7,000. Therefore, the closest value for the median number of acres is 7,067.\nChoice A is incorrect. This is the value associated with the vertical line segment forming the left-hand side of the box. Choice C is incorrect. This\nvalue is greater than the value associated with the vertical line segment within the box. Choice D is incorrect. This is the value associated with\nthe vertical line segment forming the right-hand side of the box.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-4ff597db",
    "num": 52,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The mean amount of time that the 20 employees of a construction company have worked for the company is 6.7 years. After one of the\nemployees leaves the company, the mean amount of time that the remaining employees have worked for the company is reduced to 6.25 years.\nHow many years did the employee who left the company work for the company?",
    "options": [
      {
        "letter": "A",
        "text": "0.45"
      },
      {
        "letter": "B",
        "text": "2.30"
      },
      {
        "letter": "C",
        "text": "9.00"
      },
      {
        "letter": "D",
        "text": "15.25"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "15.25",
    "explanation": "Choice D is correct. The mean amount of time that the 20 employees worked for the company is 6.7 years. This means that the total number of\nyears all 20 employees worked for the company is (6.7)(20) = 134 years. After the employee left, the mean amount of time that the remaining 19\nemployees worked for the company is 6.25 years. Therefore, the total number of years all 19 employees worked for the company is (6.25)(19) =\n118.75 years. It follows that the number of years that the employee who left had worked for the company is 134 – 118.75 = 15.25 years.\nChoice A is incorrect; this is the change in the mean, which isn’t the same as the amount of time worked by the employee who left. Choice B is\nincorrect and likely results from making the assumption that there were still 20 employees, rather than 19, at the company after the employee left\nand then subtracting the original mean of 6.7 from that result. Choice C is incorrect and likely results from making the assumption that there\nwere still 20 employees, rather than 19, at the company after the employee left.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-c54b92a2",
    "num": 53,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A study was conducted on the production rates for a company that produces tractor wheels. The table below shows the number of wheels made\nduring 11 consecutive one-hour production periods.\nOne￾hour\nperiod\nNumber\nof\nwheels\nmade\nA 24\nB 24\nC 21\nD 21\nE 21\nF 19\nG 24\nH 24\nI 19\nJ 22\nK 23\nWhat is the range of the number of wheels made for the 11 one-hour periods?",
    "options": [
      {
        "letter": "A",
        "text": "55"
      },
      {
        "letter": "B",
        "text": "5.0"
      },
      {
        "letter": "C",
        "text": "45"
      },
      {
        "letter": "D",
        "text": "4.0"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "5.0",
    "explanation": "Choice B is correct. Range is defined as the difference between the greatest and least values from a set of data. The greatest number of wheels\nmade during a one-hour period was 24 wheels. The least number of wheels was 19. Hence, the range is , or 5.0.\nChoices A, C, and D are incorrect and may be the result of arithmetic errors or incorrectly identifying the greatest or least number of wheels made\nduring a one-hour period.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-5c3c2e3c",
    "num": 54,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The weights, in pounds, for 15 horses in a stable were reported, and the mean, median, range, and standard deviation for the data were found.\nThe horse with the lowest reported weight was found to actually weigh 10 pounds less than its reported weight. What value remains unchanged\nif the four values are reported using the corrected weight?",
    "options": [
      {
        "letter": "A",
        "text": "Mean"
      },
      {
        "letter": "B",
        "text": "Median"
      },
      {
        "letter": "C",
        "text": "Range"
      },
      {
        "letter": "D",
        "text": "Standard deviation"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "Median",
    "explanation": "Choice B is correct. The median weight is found by ordering the horses’ weights from least to greatest and then determining the middle value\nfrom this list of weights. Decreasing the value for the horse with the lowest weight doesn’t affect the median since it’s still the lowest value.\nChoice A is incorrect. The mean is calculated by finding the sum of all the weights of the horses and then dividing by the number of horses.\nDecreasing one of the weights would decrease the sum and therefore decrease the mean. Choice C is incorrect. Range is the difference between\nthe highest and lowest weights, so decreasing the lowest weight would increase the range. Choice D is incorrect. Standard deviation is\ncalculated based on the mean weight of the horses. Decreasing one of the weights decreases the mean and therefore would affect the standard\ndeviation.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-66f03086",
    "num": 55,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "71,72,73,76, 77,79, 83,87,93\nWhat is the median of the data shown?",
    "options": [
      {
        "letter": "A",
        "text": "TL"
      },
      {
        "letter": "B",
        "text": "77"
      },
      {
        "letter": "C",
        "text": "78"
      },
      {
        "letter": "D",
        "text": "79"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "77",
    "explanation": "Choice B is correct. The median of a data set with an odd number of data values is defined as the middle value of the ordered list of values. The\ndata set shown has nine values, so the median is the fifth value in the ordered list, which is .\nChoice A is incorrect. This is the minimum value of the data set, not the median.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the mean of the data set, not the median.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-9110c120",
    "num": 56,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "DatasetA:5,5,5,5,5,5,5,5,5\nDatasetB:5,5,55,5,5,5,5,5, 100\nWhich of the following statements about the means and medians of data set A and data set B is true?",
    "options": [
      {
        "letter": "A",
        "text": "Only the means are different."
      },
      {
        "letter": "B",
        "text": "Only the medians are different."
      },
      {
        "letter": "C",
        "text": "Both the means and the medians are different."
      },
      {
        "letter": "D",
        "text": "Neither the means nor the medians are different."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "Only the means are different.",
    "explanation": "Choice A is correct. The mean of a data set is the sum of the values divided by the number of values. The mean of data set A is , or 5. The\nmean of data set B is , or 14.5. Thus, the means are different. The median of a data set is the middle value when the values are ordered\nfrom least to greatest. The medians of data sets A and B are both 5. Therefore, the medians are the same, so only the means are different.\nChoices B, C, and D are incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d1db8def",
    "num": 57,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Response Frequency\nOnce a week or\nmore\nTwo or three times\na month\nAbout once a\nmonth\nA few times a year\nAlmost never\nNever\nTotal\nThe table gives the results of a survey of people who were asked how often they see a movie in a theater. How many people responded\neither “never” or “almost never”?",
    "options": [
      {
        "letter": "A",
        "text": "24"
      },
      {
        "letter": "B",
        "text": "53"
      },
      {
        "letter": "C",
        "text": "82"
      },
      {
        "letter": "D",
        "text": "118"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "82",
    "explanation": "Choice C is correct. The table gives the results of people who were asked how often they see a movie in a theater. The table shows that\npeople responded “never” and people responded “almost never.” Therefore, , or , people responded either “never” or “almost never.”\nChoice A is incorrect. This is the difference between the number of people who responded “almost never” and the number of people who\nresponded “never.”\nChoice B is incorrect. This is the number of people who responded “almost never” but doesn't include those who responded “never.”\nChoice D is incorrect. This is the number of people who responded something other than “never” or “almost never,” rather than the number of\npeople who responded either “never” or “almost never.”",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-4626102e",
    "num": 58,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Data Set A\nLJ\n. LJ\n. LJ .\noe eo oo oo\noe eo oo oo oo\nBE\n22 23 24 25 26\nThe dot plot represents the 15 values in data set A. Data set B is created by adding 56 to each of the values in data set A. Which of the following\ncorrectly compares the medians and the ranges of data sets A and B?",
    "options": [
      {
        "letter": "A",
        "text": "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A."
      },
      {
        "letter": "B",
        "text": "The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A."
      },
      {
        "letter": "C",
        "text": "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
      },
      {
        "letter": "D",
        "text": "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A."
      }
    ],
    "correctAnswer": "C",
    "correctValue": "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
    "explanation": "Choice C is correct. The median of a data set with an odd number of values, in ascending or descending order, is the middle value of the data set,\nand the range of a data set is the positive difference between the maximum and minimum values in the data set. Since the dot plot shown gives\nthe values in data set A in ascending order and there are values in the data set, the eighth value in data set A, , is the median. The\nmaximum value in data set A is and the minimum value is , so the range of data set A is , or . It’s given that data set B is created\nby adding to each of the values in data set A. Increasing each of the values in data set A by will also increase its median value by\nmaking the median of data set B . Increasing each value of data set A by does not change the range, since the maximum value of data set\nB is , or , and the minimum value is , or , making the range of data set B , or . Therefore, the median of data set B\nis greater than the median of data set A, and the range of data set B is equal to the range of data set A.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-55cfaf22",
    "num": 59,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Data setX:5,9,9,13\nDatasetY:5,9,9,13,27\nThe lists give the values in data sets X and Y. Which statement correctly compares the mean of data set X and the mean of data set Y?",
    "options": [
      {
        "letter": "A",
        "text": "The mean of data set X is greater than the mean of data set Y."
      },
      {
        "letter": "B",
        "text": "The mean of data set X is less than the mean of data set Y."
      },
      {
        "letter": "C",
        "text": "The means of data set X and data set Y are equal."
      },
      {
        "letter": "D",
        "text": "There is not enough information to compare the means."
      }
    ],
    "correctAnswer": "B",
    "correctValue": "The mean of data set X is less than the mean of data set Y.",
    "explanation": "Choice B is correct. The mean of a data set is the sum of the values in the data set divided by the number of values in the data set. It follows that\nthe mean of data set X is , or , and the mean of data set Y is , or . Since is less than , the mean of data set X\nis less than the mean of data set Y.\nAlternate approach: Data set Y consists of the values in data set X and one additional value, . Since the additional value, , is larger than\nany value in data set X, the mean of data set X is less than the mean of data set Y.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-820d7a73",
    "num": 60,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the distribution of cans collected by different groups for a food drive. How many cans were collected by group ?",
    "options": [],
    "correctAnswer": "40",
    "correctValue": "40",
    "explanation": "The correct answer is . The height of each bar in the bar graph shown represents the number of cans collected by the group specified at the\nbottom of the bar. The bar for group reaches a height of . Therefore, group collected cans.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-6e3ab4bf",
    "num": 61,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "20\n18\n16\n14\n12\n10\n8\n6\n4\n2\n0\nNumber of volunteers\nA B C D\nGift\nIn April, there were volunteers in a cleanup project. Each volunteer was asked to choose a small gift labeled A, B, C, or D. The bar graph shows\nthe number of volunteers who chose each gift. How many volunteers chose gift C?",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "18"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "18",
    "explanation": "Choice D is correct. The height of each bar in the graph shown represents the number of volunteers who chose the gift labeled with the letter\nspecified at the bottom of the bar. The bar for gift C has a height of . Therefore, volunteers chose gift C.\nChoice A is incorrect. This is the number of volunteers who chose gift D, not gift C.\nChoice B is incorrect. This is the number of volunteers who chose gift B, not gift C.\nChoice C is incorrect. This is the number of volunteers who chose gift A, not gift C.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-881ef5f5",
    "num": 62,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "If a is the mean and b is the median of nine consecutive integers, what is the value of ?",
    "options": [],
    "correctAnswer": "0",
    "correctValue": "0",
    "explanation": "The correct answer is 0. Any nine consecutive integers can be written as , , , , , , , , . The mean\nof the integers is their sum divided by 9: , which simplifies to . So . Since\nthere is an odd number of integers (nine), the median is the integer in the middle when all the integers are ordered from least to greatest: .\nSo . Therefore, , which is 0.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-4bb25495",
    "num": 63,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Five Smallest Countries in 2016\nCountry Land area\n(square kilometers)\nMonaco 2.0\nNauru 21\nSan Marino 61\nTuvalu 26\nVatican City 0.44\nThe table above shows the land area, in square kilometers, of the five smallest countries of the world in 2016. Based on the table, what is the\nmean land area of the 5 smallest countries in 2016, to the nearest square kilometer?",
    "options": [
      {
        "letter": "A",
        "text": "20"
      },
      {
        "letter": "B",
        "text": "22"
      },
      {
        "letter": "C",
        "text": "61"
      },
      {
        "letter": "D",
        "text": "110"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "22",
    "explanation": "Choice B is correct. The mean land area of these 5 countries is equal to the sum of the land areas of these countries, or\n, divided by the number of countries in the table, 5, or . Combining like terms in\nthe numerator yields , which simplifies to 22.088 square kilometers. This value, when rounded to the nearest square kilometer, is 22.\nChoice A is incorrect and may result from a calculation error. Choice C is incorrect. This is the greatest land area of the 5 countries in the table.\nChoice D is incorrect. This is the sum of the land areas of the 5 countries in the table, rounded to the nearest square kilometer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-57481175",
    "num": 64,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the number of each type of monkey in a sanctuary.\n12\n11\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n0\nNumber of monkeys\nmandrill\nbaboon\npygmy marmoset\nbonnet macaque\nvervet\nType of monkey\nHow many more vervets are in this sanctuary than mandrills?",
    "options": [
      {
        "letter": "A",
        "text": "ll"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "5"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "Choice B is correct. It's given that the bar graph shows the number of each type of monkey in a sanctuary. The bar representing the number of\nmandrills has a height of ; therefore, there are mandrills in the sanctuary. The bar representing vervets has a height of ; therefore, there are\nvervets in the sanctuary. Therefore, there are , or , more vervets in this sanctuary than mandrills.\nChoice A is incorrect. This is the number of vervets in the sanctuary.\nChoice C is incorrect. This is the number of mandrills in the sanctuary.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-98958ae8",
    "num": 65,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Data set A consists of the heights of 75 objects and has a mean of 25 meters. Data set B consists of the heights of 50 objects and has a mean\nof 65 meters. Data set C consists of the heights of the 125 objects from data sets A and B. What is the mean, in meters, of data set C?",
    "options": [],
    "correctAnswer": "41",
    "correctValue": "41",
    "explanation": "The correct answer is . The mean of a data set is computed by dividing the sum of the values in the data set by the number of values in the\ndata set. It’s given that data set A consists of the heights of objects and has a mean of meters. This can be represented by the equation\n, where represents the sum of the heights of the objects, in meters, in data set A. Multiplying both sides of this equation by yields\n, or meters. Therefore, the sum of the heights of the objects in data set A is meters. It’s also given that data set B\nconsists of the heights of objects and has a mean of meters. This can be represented by the equation , where represents the\nsum of the heights of the objects, in meters, in data set B. Multiplying both sides of this equation by yields , or meters.\nTherefore, the sum of the heights of the objects in data set B is meters. Since it’s given that data set C consists of the heights of the\nobjects from data sets A and B, it follows that the mean of data set C is the sum of the heights of the objects, in meters, in data sets A and B\ndivided by the number of objects represented in data sets A and B, or , which is equivalent to meters. Therefore, the mean, in\nmeters, of data set C is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-391ae4b2",
    "num": 66,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Data set F consists of 55 integers between 170 and 290. Data set G consists of all the integers in data set F as well as the integer 10. Which of\nthe following must be less for data set F than for data set G?\nI. The mean\nIl. The median",
    "options": [
      {
        "letter": "A",
        "text": "lonly"
      },
      {
        "letter": "B",
        "text": "Il only"
      },
      {
        "letter": "C",
        "text": "land ll"
      },
      {
        "letter": "D",
        "text": "Neither I nor Il"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "Neither I nor Il",
    "explanation": "Choice D is correct. It's given that data set F consists of integers between and and data set G consists of all the integers in data set\nF as well as the integer . Since the integer is less than all the integers in data set F, the mean of data set G must be less than the mean of\ndata set F. Thus, the mean of data set F isn't less than the mean of data set G. When a data set is in ascending order, the median is between the\ntwo middle values when there is an even number of values and the median is the middle value when there is an odd number of values. It follows\nthat the median of data set F is either greater than or equal to the median of data set G. Therefore, the median of data set F isn't less than the\nmedian of data set G. Thus, neither the mean nor the median must be less for data set F than for data set G.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-57f45509",
    "num": 67,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The box plot summarizes data values. What is the median of this data set?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "3"
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
    "correctAnswer": "C",
    "correctValue": "5",
    "explanation": "Choice C is correct. The median of a data set represented in a box plot is given by the vertical line within the box. In the given box plot, the\nvertical line within the box occurs at . Therefore, the median of this data set is .\nChoice A is incorrect. This is the minimum value of the data set.\nChoice B is incorrect and may result from conceptual errors.\nChoice D is incorrect. This is the maximum value of the data set.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-2a59eb45",
    "num": 68,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Data set A consists of the heights of 75 buildings and has a mean of 32 meters. Data set B consists of the heights of 50 buildings and has a\nmean of 62 meters. Data set C consists of the heights of the 125 buildings from data sets A and B. What is the mean, in meters, of data set C?",
    "options": [],
    "correctAnswer": "44",
    "correctValue": "44",
    "explanation": "The correct answer is . The mean of a data set is computed by dividing the sum of the values in the data set by the number of values in the\ndata set. It's given that data set A consists of the heights of buildings and has a mean of meters. This can be represented by the equation\n, where represents the sum of the heights of the buildings, in meters, in data set A. Multiplying both sides of this equation by yields\n, or meters. Therefore, the sum of the heights of the buildings in data set A is meters. It's also given that data set\nB consists of the heights of buildings and has a mean of meters. This can be represented by the equation , where represents\nthe sum of the heights of the buildings, in meters, in data set B. Multiplying both sides of this equation by yields , or\nmeters. Therefore, the sum of the heights of the buildings in data set B is meters. Since it's given that data set C consists of the heights of\nthe buildings from data sets A and B, it follows that the mean of data set C is the sum of the heights of the buildings, in meters, in data sets\nA and B divided by the number of buildings represented in data sets A and B, or , which is equivalent to meters. Therefore, the\nmean, in meters, of data set C is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-79340403",
    "num": 69,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the distribution of books collected by different groups for a book drive. How many books were collected by group\n?",
    "options": [],
    "correctAnswer": "30",
    "correctValue": "30",
    "explanation": "The correct answer is . The height of each bar in the bar graph shown represents the number of books collected by the group specified at the\nbottom of the bar. The bar for group reaches a height of . Therefore, group collected books.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-93779b53",
    "num": 70,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A group of students voted on five after-school activities. The bar graph shows the number of students who voted for each of the five activities.\nHow many students chose activity ?",
    "options": [
      {
        "letter": "A",
        "text": "25"
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
        "text": "50"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "39",
    "explanation": "Choice B is correct. The height of each bar in the bar graph given represents the number of students that voted for the activity specified at the\nbottom of the bar. The bar for activity has a height that is between and . In other words, the number of students that chose activity is\nbetween students and students. Of the given choices, is the only value between and . Therefore, students chose activity .\nChoice A is incorrect and may result from conceptual errors.\nChoice C is incorrect. This is the number of students that chose activity , not activity .\nChoice D is incorrect and may result from conceptual errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-9d935bd8",
    "num": 71,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A survey was given to residents of all 50 states asking if they had earned a bachelor’s degree or higher. The results from 7 of the states are given\nin the table above. The median percent of residents who earned a bachelor’s degree or higher for all 50 states was 26.95%. What is the difference\nbetween the median percent of residents who earned a bachelor’s degree or higher for these 7 states and the median for all 50 states?",
    "options": [
      {
        "letter": "A",
        "text": "0.05%"
      },
      {
        "letter": "B",
        "text": "0.95%"
      },
      {
        "letter": "C",
        "text": "1.22%"
      },
      {
        "letter": "D",
        "text": "7.45%"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "0.95%",
    "explanation": "Choice B is correct. The median of a set of numbers is the middle value of the set values when ordered from least to greatest. If the percents in\nthe table are ordered from least to greatest, the middle value is 27.9%. The difference between 27.9% and 26.95% is 0.95%.\nChoice A is incorrect and may be the result of calculation errors or not finding the median of the data in the table correctly. Choice C is incorrect\nand may be the result of finding the mean instead of the median. Choice D is incorrect and may be the result of using the middle value of the\nunordered list.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-a067c926",
    "num": 72,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the distribution of the number of students from one school who were born in one of four months.\n70\n60\n50\n40\n30\n20\n10\n0\nNumber of students\nJuly\nAugust\nSeptember\nOctober\nMonth\nHow many more students were born in August than were born in July?",
    "options": [
      {
        "letter": "A",
        "text": "90"
      },
      {
        "letter": "B",
        "text": "50"
      },
      {
        "letter": "C",
        "text": "40"
      },
      {
        "letter": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "10",
    "explanation": "Choice D is correct. It's given that the bar graph shows the number of students from one school who were born in either July, August, September,\nor October. The bar representing the number of students born in August has a height of ; therefore, students were born in August. The bar\nrepresenting the number of students born in July has a height of ; therefore, students were born in July. Thus, there were , or\nmore students born in August than in July.\nChoice A is incorrect. This is the total number of students born in July and August.\nChoice B is incorrect. This is the number of students born in August.\nChoice C is incorrect. This is the number of students born in July.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-9e2bf782",
    "num": 73,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A fish hatchery has three tanks for holding fish before they are introduced into the wild. Ten fish weighing less than 5 ounces are placed in tank\nA. Eleven fish weighing at least 5 ounces but no more than 13 ounces are placed in tank B. Twelve fish weighing more than 13 ounces are placed\nin tank C. Which of the following could be the median of the weights, in ounces, of these 33 fish?",
    "options": [
      {
        "letter": "A",
        "text": "45"
      },
      {
        "letter": "B",
        "text": "8"
      },
      {
        "letter": "C",
        "text": "135"
      },
      {
        "letter": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "8",
    "explanation": "Choice B is correct. The median of a set of numbers is the middle number when the values in the set are ordered from least to greatest. There\nare 33 fish, so in an ordered list of the weights, the 17th value would be the median weight. The 10 fish in tank A weigh the least, and these 10\nweights would be the first 10 values on the ordered list. The 11 fish in tank B have the next set of higher weights, and so would be the 11th\nthrough 21st weights in the ordered list, which includes the median weight as the 17th value. The fish in tank B weigh at least 5 ounces but no\nmore than 13 ounces; of the given choices, only 8 ounces falls within this range of values.\nChoice A is incorrect. It’s given that tank A has ten fish weighing less than 5 ounces. Since there are more than ten fish in tanks B and C\ncombined, the median weight cannot be less than 5 ounces. Choice C and D are incorrect. It’s given that tank C has twelve fish weighing more\nthan 13 ounces. There are more than twelve fish in tanks A and B combined, so the median weight can’t be more than 13 ounces.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-a9647302",
    "num": 74,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For quality control, a company that manufactures lightbulbs conducted five different trials. In each trial, 500 different lightbulbs were tested. The\nbar graph above shows the number of defective lightbulbs found in each trial. What is the mean number of defective lightbulbs for the five trials?",
    "options": [
      {
        "letter": "A",
        "text": "4.0"
      },
      {
        "letter": "B",
        "text": "4.2"
      },
      {
        "letter": "C",
        "text": "46"
      },
      {
        "letter": "D",
        "text": "5.0"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "4.2",
    "explanation": "Choice B is correct. The numbers of defective lightbulbs found for the five trials are 4, 7, 1, 3, and 6, respectively. The mean is therefore\n.\nChoice A is incorrect. This is the median number of defective lightbulbs for the five trials. Choice C is incorrect and may result from an arithmetic\nerror. Choice D is incorrect and may result from mistaking the number of trials for the number of defective lightbulbs.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-8193e8cd",
    "num": 75,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "2,10,3,7.6\nThe mean of the list of numbers above is what fraction of the sum of the five numbers?",
    "options": [],
    "correctAnswer": "5",
    "correctValue": "5",
    "explanation": "The correct answer is . The mean of the list of numbers is found by dividing the sum of the numbers by the number of values in the list. Since\nthere are 5 numbers in the list, the mean is of the sum of the numbers. Note that 1/5 and .2 are examples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-7b1a3200",
    "num": 76,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "To study the characteristics of sea stars in a group of tide pools, researchers measured the diameter of the sea stars within the tide pools. The\ndot plot gives the diameter, to the nearest inch, of each of the sea stars in these tide pools.\nLJ\n[J\nLJ\nLJ [J\nLJ LJ\noo 0 0 0\n++\n16 17 18 19 20\nDiameter (inches)\nBased on the dot plot, how many sea stars had a diameter, to the nearest inch, of 16 inches?",
    "options": [
      {
        "letter": "A",
        "text": "16"
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
    "correctAnswer": "B",
    "correctValue": "6",
    "explanation": "Choice B is correct. The dot plot gives the diameter, to the nearest inch, of each sea star in a group of tide pools. The number of dots above a\ngiven diameter represents the number of sea stars with that diameter, to the nearest inch. There are dots above inches. Therefore, sea\nstars had a diameter, to the nearest inch, of inches.\nChoice A is incorrect and may result from calculation or conceptual errors.\nChoice C is incorrect. This is the number of sea stars with a diameter, to the nearest inch, of inches, not inches.\nChoice D is incorrect. This is the number of sea stars with a diameter, to the nearest inch, of inches, not inches.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-54d93874",
    "num": 77,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Masses (kilograms)\nAndrew 2.4 2.5 3.6 3.1 2.5 2.7\nMaria x 3.1 2.7 2.9 3.3 2.8\nAndrew and Maria each collected six rocks, and the masses of the rocks are shown in the table above. The mean of the masses of the rocks\nMaria collected is 0.1 kilogram greater than the mean of the masses of the rocks Andrew collected. What is the value of x ?",
    "options": [],
    "correctAnswer": "2.6",
    "correctValue": "2.6",
    "explanation": "The correct answer is 2.6. Since the mean of a set of numbers can be found by adding the numbers together and dividing by how many numbers\nthere are in the set, the mean mass, in kilograms, of the rocks Andrew collected is , or 2.8.\nSince the mean mass of the rocks Maria collected is 0.1 kilogram greater than the mean mass of rocks Andrew collected, the mean mass of the\nrocks Maria collected is kilograms. The value of x can be found by writing an equation for finding the mean:\n. Solving this equation gives . Note that 2.6 and 13/5 are examples of ways to enter a\ncorrect answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-869a32f1",
    "num": 78,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The high temperature, in degrees Fahrenheit (°F), in a certain city was recorded for each of 5 days. The data are shown below.\nDay 1 2 3 4 5\nHigh temperature (°F) 81 80 81 81 82\nOver this 5-day period, which of the following is NOT equal to 81°F?",
    "options": [
      {
        "letter": "A",
        "text": "Median of the high temperatures"
      },
      {
        "letter": "B",
        "text": "Mean of the high temperatures"
      },
      {
        "letter": "C",
        "text": "Mode of the high temperatures"
      },
      {
        "letter": "D",
        "text": "Range of the high temperatures"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "Range of the high temperatures",
    "explanation": "Choice D is correct. The range of a data set is the difference between the maximum and the minimum values in the set. The maximum value\namong the high temperatures in the table is 82°F and the minimum value is 80°F. Therefore, the range is 82°F – 80°F = 2°F.\nChoice A is incorrect. The median of a data set is the middle value when the values in the set are ordered from least to greatest. Ordering the\nhigh temperatures this way gives the list 80, 81, 81, 81, 82. Therefore, the median high temperature is 81°F. Choice B is incorrect. The mean high\ntemperature is . Choice C is incorrect. The mode is the value that occurs the greatest number of\ntimes. For the set of high temperatures shown, 81 is the value that occurs 3 times, and therefore, 81°F is the mode of the high temperatures.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-559476f4",
    "num": 79,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The bar graph shows the frequency of each data value in a data set.\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n0\nFrequency\n1 2 3 4 5 6\nData value\nWhat is the frequency of data value in this data set?",
    "options": [],
    "correctAnswer": "6",
    "correctValue": "6",
    "explanation": "The correct answer is . It’s given that the bar graph shows the frequency of each data value in a data set. The bar corresponding to the data\nvalue has a height of . Therefore, the frequency of the data value in this data set is .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-6670e407",
    "num": 80,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Number of High School Students Who\nCompleted Summer Internships\nHigh\nschool\nYear\n2008 2009 2010 2011 2012\nFoothill 87 80 75 76 70\nValley 44 54 65 76 82\nTotal 131 134 140 152 152\nThe table above shows the number of students from two different high schools who completed summer internships in each of five years. No\nstudent attended both schools. Which of the following statements are true about the number of students who completed summer internships for\nthe 5 years shown?\n1. The mean number from Foothill High School is greater than the mean number from Valley High School.\n2. The median number from Foothill High School is greater than the median number from Valley High School.",
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
        "text": "land ll"
      },
      {
        "letter": "D",
        "text": "Neither I nor Il"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "land ll",
    "explanation": "Choice C is correct. The mean of a data set is found by dividing the sum of the values by the number of values. Therefore, the mean number of\nstudents who completed summer internships from Foothill High School is , or 77.6. Similarly, the mean\nnumber from Valley High School is , or 64.2. Thus, the mean number from Foothill High School is greater\nthan the mean number from Valley High School. When a data set has an odd number of elements, the median can be found by ordering the\nvalues from least to greatest and determining the value in the middle. Since there are five values in each data set, the third value in each ordered\nlist is the median. Therefore, the median number from Foothill High School is 76 and the median number from Valley High School is 65. Thus, the\nmedian number from Foothill High School is greater than the median number from Valley High School.\nChoices A, B, and D are incorrect and may result from various misconceptions or miscalculations.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-c78bb2b8",
    "num": 81,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A scientist measured the lengths of 240 gray seals from Muskeget Island and 120 gray seals from Sable Island. The scientist determined that\nthe mean length of the 240 gray seals from Muskeget Island was 88 inches and the mean length of the 120 gray seals from Sable Island was 94\ninches. What was the mean length of all 360 gray seals the scientist measured for this study?",
    "options": [
      {
        "letter": "A",
        "text": "89"
      },
      {
        "letter": "B",
        "text": "90"
      },
      {
        "letter": "C",
        "text": "91"
      },
      {
        "letter": "D",
        "text": "92"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "90",
    "explanation": "Choice B is correct. The mean of a data set is calculated by dividing the sum of the values in the data set by the number of values in the data set.\nIt’s given that the mean length of the gray seals from Muskeget Island was inches. This can be represented by the equation ,\nwhere represents the sum of the lengths, in inches, of the gray seals from Muskeget Island. Multiplying both sides of this equation by\nyields , or inches. It’s also given that the mean length of the gray seals from Sable Island was inches. This\ncan be represented by the equation , where represents the sum of the lengths, in inches, of the gray seals from Sable Island.\nMultiplying both sides of this equation by yields , or inches. Therefore, the sum of the lengths, in inches, of all\ngray seals is , or . Dividing this sum by yields , or inches. Therefore, the mean length of all gray\nseals the scientist measured for this study is inches.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the mean length of inches and inches, not the mean length of all gray seals the scientist measured for\nthis study.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-94237701",
    "num": 82,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For a certain computer game, individuals receive an integer score that ranges from 2 through 10. The table below shows the frequency\ndistribution of the scores of the 9 players in group A and the 11 players in group B.\nScore\nScore\nFrequencies\nGroup A Group B\n2 1 0\n3 1 0\n4 2 0\n5 1 4\n6 3 2\n7 0 0\n8 0 2\n9 1 1\n10 0 2\nTotal 9 11\nThe median of the scores for group B is how much greater than the median of the scores for group A?",
    "options": [],
    "correctAnswer": "1",
    "correctValue": "1",
    "explanation": "The correct answer is 1. When there are an odd number of values in a data set, the median of the data set is the middle number when the data\nvalues are ordered from least to greatest. The scores for group A, ordered from least to greatest, are 2, 3, 4, 4, 5, 6, 6, 6, and 9. The median of the\nscores for group A is therefore 5. The scores for group B, ordered from least to greatest, are 5, 5, 5, 5, 6, 6, 8, 8, 9, 10, and 10. The median of the\nscores for group B is therefore 6. The median score for group B is more than the median score for group A.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-cf2be18d",
    "num": 83,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "a,26,29,5,31,47.¢\nFor the given data set, the data values are listed in ascending order, where a, b, and ¢ are constants. For this data set, the mean is 36, the median\nis 29, and the range is 72. What is the value of ¢?",
    "options": [
      {
        "letter": "A",
        "text": "54"
      },
      {
        "letter": "B",
        "text": "72"
      },
      {
        "letter": "C",
        "text": "81"
      },
      {
        "letter": "D",
        "text": "98"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "81",
    "explanation": "Choice C is correct. It’s given that the data set containing , , , , , , and is listed in ascending order and has a mean of , a median\nof , and a range of . Since there are values in the given data set, it follows that the median is the value in the fourth position. It's given that\nis in the fourth position in the given data set, so it follows that . Since the mean of the data set is , it follows that\n. Multiplying both sides of this equation by yields , which is equivalent\nto . Subtracting from both sides of this equation yields . The range is the difference between the greatest\nand least values in a data set. Since is the greatest value and is the least value in the given data set, it follows that , or\n. Adding the equations and yields . Dividing both sides of this equation by yields .\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-25fc031a",
    "num": 84,
    "topicId": "m-dat-3",
    "topic": "One-variable data: Distributions and measures of center and spread",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Company A\n50\n40\nFrequency 30\nquency oo\n10\n0\n15 20 25 30 35 40 45 50\nNumber of units sold (in thousands)\nCompany B\n50\n40\nFrequency 30\nquency oo\n10\n0\n15 20 25 30 35 40 45 50\nNumber of units sold (in thousands)\nThe histograms summarize the distributions of number of units sold, in thousands, for company A and company B. Which statement best\ncompares the standard deviations of number of units sold for these companies?",
    "options": [
      {
        "letter": "A",
        "text": "The standard deviation of number of units sold for company A is less than the standard deviation of number of units sold for company B."
      },
      {
        "letter": "B",
        "text": "The standard deviation of number of units sold for company A is greater than the standard deviation of number of units sold for company B."
      },
      {
        "letter": "C",
        "text": "The standard deviation of number of units sold for company A is equal to the standard deviation of number of units sold for company B."
      },
      {
        "letter": "D",
        "text": "There is not enough information to compare the standard deviations."
      }
    ],
    "correctAnswer": "A",
    "correctValue": "The standard deviation of number of units sold for company A is less than the standard deviation of number of units sold for company B.",
    "explanation": "Choice A is correct. Standard deviation measures the spread of a given data set from its mean. In a data set with a smaller standard deviation,\nthere are more values close to the mean. In a data set with a greater standard deviation, there are more values farther from the mean. The two\nhistograms shown have the same scale on the horizontal axis. Therefore, their standard deviations can be compared by visually comparing the\nspreads of their histograms. The distribution summarized by each histogram is symmetric. Therefore, the mean of the data set for each\nhistogram is a value in the middle bar of that histogram. The middle bar of each histogram has a value of at least thousand units sold but less\nthan thousand units sold. Therefore, the mean of the data set for each histogram is at least thousand and less than thousand. The\nhistogram for company A shows all the values in that data set are close to the mean. For company B, the histogram shows there are fewer values\nclose to the mean and more values farther from the mean. Therefore, the standard deviation of number of units sold for company A is less than\nthe standard deviation of number of units sold for company B.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  }
];
