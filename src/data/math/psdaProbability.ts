// SAT Math Question Bank: Probability and conditional probability
import { MathQuestion } from './types';

export const PROBLEMSOLVINGPROBABILITY_QUESTIONS: MathQuestion[] = [
  {
    "id": "satqb-eccbf957",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 1,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Each face of a fair 14-sided die is labeled with a number from 1 through 14, with a different number appearing on each face. If the die is rolled\none time, what is the probability of rolling a 2?",
    "options": [
      {
        "letter": "A",
        "text": "1/14"
      },
      {
        "letter": "B",
        "text": "2/14"
      },
      {
        "letter": "C",
        "text": "12/14"
      },
      {
        "letter": "D",
        "text": "13/14"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "1/14",
    "explanation": "Choice A is correct. The total number of possible outcomes for rolling a fair -sided die is . The number of possible outcomes for rolling a\nis . The probability of rolling a is the number of possible outcomes for rolling a divided by the total number of possible outcomes, or .\nChoice B is incorrect. This is the probability of rolling a number no greater than .\nChoice C is incorrect. This is the probability of rolling a number greater than .\nChoice D is incorrect. This is the probability of rolling a number other than .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-b1b5300b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 2,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Prices of 14 Different Cars\nType of car Priced at no more\nthan $25,000\nPriced greater\nthan $25,000 Total\nNonhybrid 5 3 8\nHybrid 2 4 6\nTotal 7 7 14\nThe table above shows information about 14 cars listed for sale on an auto dealership’s website. If one of the cars listed for sale is selected at\nrandom, what is the probability that the car selected will be a hybrid car priced at no more than $25,000 ?",
    "options": [
      {
        "letter": "A",
        "text": "1/7"
      },
      {
        "letter": "B",
        "text": "2/7"
      },
      {
        "letter": "C",
        "text": "1/3"
      },
      {
        "letter": "D",
        "text": "4/7"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "1/7",
    "explanation": "Choice A is correct. It’s given that there are 2 hybrid cars priced at no more than $25,000. It’s also given that there are 14 cars total for sale.\nTherefore, the probability of selecting a hybrid priced at no more than $25,000 when one car is chosen at random is .\nChoice B is incorrect. This is the probability of selecting a hybrid car priced greater than $25,000 when choosing one car at random. Choice C is\nincorrect. This is the probability, when choosing randomly from only the hybrid cars, of selecting one priced at no more than $25,000. Choice D is\nincorrect. This is the probability of selecting a hybrid car when selecting at random from only the cars priced greater than $25,000.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1353b86e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 3,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Colors of\nMarbles in a Bag\nColor Number\nRed 8\nBlue 10\nGreen 22\nTotal 40\nThe table shows the number of different colors of marbles in a bag. If a marble is chosen at random from the bag, what is the probability that the\nmarble will be blue?",
    "options": [
      {
        "letter": "A",
        "text": "30/40"
      },
      {
        "letter": "B",
        "text": "22/40"
      },
      {
        "letter": "C",
        "text": "18/40"
      },
      {
        "letter": "D",
        "text": "10/40"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "10/40",
    "explanation": "Choice D is correct. If a marble is chosen at random from the bag, the probability of choosing a marble of a certain color is the number of\nmarbles of that color divided by the total number of marbles in the bag. Since there are 10 blue marbles in the bag, and there are 40 total marbles\nin the bag, the probability that the marble chosen will be blue is .\nChoices A, B, and C are incorrect. These represent the probability that the marble chosen won’t be blue (choice A), will be green (choice B), and\nwon’t be green (choice C).",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-d89c1513",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 4,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Customer Purchases at a Gas Station\nBeverage purchased Beverage not purchased Total\nGasoline purchased 60 25 85\nGasoline not purchased 35 15 50\nTotal 90 40 135\nOn Tuesday, a local gas station had 135 customers. The table above summarizes whether or not the customers on Tuesday purchased gasoline,\na beverage, both, or neither. Based on the data in the table, what is the probability that a gas station customer selected at random on that day did\nnot purchase gasoline?",
    "options": [
      {
        "letter": "A",
        "text": "15/50"
      },
      {
        "letter": "B",
        "text": "15/40"
      },
      {
        "letter": "C",
        "text": "35/50"
      },
      {
        "letter": "D",
        "text": "50/135"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "50/135",
    "explanation": "Choice D is correct. The total number of gas station customers on Tuesday was 135. The table shows that the number of customers who did not\npurchase gasoline was 50. Finding the ratio of the number of customers who did not purchase gasoline to the total number of customers gives\nthe probability that a customer selected at random on that day did not purchase gasoline, which is .\nChoice A is incorrect and may result from finding the probability that a customer did not purchase a beverage, given that the customer did not\npurchase gasoline. Choice B is incorrect and may result from finding the probability that a customer did not purchase gasoline, given that the\ncustomer did not purchase a beverage. Choice C is incorrect and may result from finding the probability that a customer did purchase a\nbeverage, given that the customer did not purchase gasoline.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-e1ad3d41",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 5,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Coat color\nEye color\nDeep blue Light brown Total\nCream-tortoiseshell 16 16 32\nChocolate 12 4 16\nTotal 28 20 48\nThe data on the coat color and eye color for 48 Himalayan kittens available for adoption were collected and summarized in the table above. What\nfraction of the chocolate-colored kittens has deep blue eyes?",
    "options": [
      {
        "letter": "A",
        "text": "12/48"
      },
      {
        "letter": "B",
        "text": "12/28"
      },
      {
        "letter": "C",
        "text": "16/32"
      },
      {
        "letter": "D",
        "text": "12/16"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "12/16",
    "explanation": "Choice D is correct. The table shows that there are a total of 16 kittens that have a chocolate-colored coat. Of the 16 with a chocolate-colored\ncoat, 12 have deep blue eyes. Therefore, the fraction of chocolate-colored kittens with deep blue eyes is simply the ratio of those two numbers,\nor .\nChoice A is incorrect; this is the fraction of all chocolate-colored kittens. Choice B is incorrect; this is the fraction of kittens with deep blue eyes\nthat have a chocolate-colored coat. Choice C is incorrect; this is the fraction of cream-tortoiseshell-colored kittens with deep blue eyes.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-46545dd6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 6,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Number of High School Students Who\nCompleted Summer Internships\nHigh\nschool\nYear\n2008 2009 2010 2011 2012\nFoothill 87 80 75 76 70\nValley 44 54 65 76 82\nTotal 131 134 140 152 152\nThe table above shows the number of students from two different high schools who completed summer internships in each of five years. No\nstudent attended both schools. Of the students who completed a summer internship in 2010, which of the following represents the fraction of\nstudents who were from Valley High School?",
    "options": [
      {
        "letter": "A",
        "text": "10/140"
      },
      {
        "letter": "B",
        "text": "65/140"
      },
      {
        "letter": "C",
        "text": "75/140"
      },
      {
        "letter": "D",
        "text": "65/75"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "65/140",
    "explanation": "Choice B is correct. According to the table, 140 students from the two high schools completed summer internships in 2010. Of these, 65 were\nfrom Valley High School. Therefore, of the students who completed summer internships in 2010, represents the fraction who were from\nValley High School.\nChoice A is incorrect. This is the difference between the numbers of students from the two high schools who completed internships in 2010\ndivided by the total number of students from the two schools who completed internships that year. Choice C is incorrect. This is the fraction of\nstudents from Foothill High School who completed internships out of all the students who completed internships in 2010. Choice D is incorrect.\nThis is the number of students from Valley High School who completed internships in 2010 divided by the number of students from Foothill High\nSchool who completed internships in 2010.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-16cea46c",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 7,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Voice type Number of singers\nCountertenor 4\nTenor 6\nBaritone 10\nBass 5\nA total of 25 men registered for singing lessons. The frequency table shows how many of these singers have certain voice types. If one of these\nsingers is selected at random, what is the probability he is a baritone?",
    "options": [
      {
        "letter": "A",
        "text": "0.10"
      },
      {
        "letter": "B",
        "text": "0.40"
      },
      {
        "letter": "C",
        "text": "0.60"
      },
      {
        "letter": "D",
        "text": "0.67"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "0.40",
    "explanation": "Choice B is correct. This probability is calculated by dividing the number of baritone singers by the total number of men registered for singing\nlessons. It’s given that a total of 25 men registered for singing lessons and that there are 10 baritones. Therefore, the probability of selecting a\nbaritone from this group at random is , which is equivalent to 0.40.\nChoice A is incorrect. This would be the probability of selecting a baritone at random if there were 100 total men who registered for singing\nlessons. Choice C is incorrect. This is the probability of selecting a singer at random who isn’t a baritone. Choice D is incorrect. This would be the\nprobability of selecting a baritone at random if there were 15 total men registered for singing lessons.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-b680e76d",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 8,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A survey taken by 1,000 students at a school asked whether they played school sports. The table below summarizes all 1,000 responses from\nthe students surveyed.\nHow many of the males surveyed responded that they do not play a school sport?",
    "options": [
      {
        "letter": "A",
        "text": "109"
      },
      {
        "letter": "B",
        "text": "252"
      },
      {
        "letter": "C",
        "text": "468"
      },
      {
        "letter": "D",
        "text": "688"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "252",
    "explanation": "Choice B is correct. The table summarizes all 1,000 responses from the students surveyed. If 312 are males who play a sport, 220 are females\nwho play a sport, and 216 are females who do not play a sport, then 1,000 – 312 – 220 – 216 = 252 males who do not play a sport.\nChoices A, C, and D are incorrect. If 109 males who do not play a sport responded, then the table summary would be 109 + 312 + 220 + 216 =\n857 total student responses rather than 1,000. If 468 males who do not play a sport responded, then the table summary would be 468 + 312 +\n220 + 216 = 1,216 total student responses rather than 1,000. If 688 males who do not play a sport responded, then the table summary would be\n688 + 312 + 220 + 216 = 1,436 total student responses rather than 1,000.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-0301c5dc",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 9,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The table below shows the number of state parks in a certain state that contain camping facilities and bicycle paths.\nHas bicycle paths Does not have bicycle paths\nHas camping facilities 20 5\nDoes not have camping facilities 8 4\nIf one of these state parks is selected at random, what is the probability that it has camping facilities but does not have bicycle paths?",
    "options": [
      {
        "letter": "A",
        "text": "5/37"
      },
      {
        "letter": "B",
        "text": "5/25"
      },
      {
        "letter": "C",
        "text": "8/28"
      },
      {
        "letter": "D",
        "text": "5/9"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "5/37",
    "explanation": "Choice A is correct. The total number of state parks in the state is . According to the table, 5 of these have camping\nfacilities but not bicycle paths. Therefore, if a state park is selected at random, the probability that it has camping facilities but not bicycle paths\nis .\nChoice B is incorrect. This is the probability that a state park selected at random from the state parks with camping facilities does not have\nbicycle paths. Choice C is incorrect. This is the probability that a state park selected at random from the state parks with bicycle paths does not\nhave camping facilities. Choice D is incorrect. This is the probability that a state park selected at random from the state parks without bicycle\npaths does have camping facilities.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-0ae37ff3",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 10,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "In a bag, there are 7 red, 4 white, 33 blue, and 33 yellow cubes. If one of these cubes is selected at random, what is the probability of selecting a\ncube that is neither blue nor yellow?",
    "options": [
      {
        "letter": "A",
        "text": "6/77"
      },
      {
        "letter": "B",
        "text": "7/11"
      },
      {
        "letter": "C",
        "text": "1/3"
      },
      {
        "letter": "D",
        "text": "1/7"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "1/7",
    "explanation": "Choice D is correct. It’s given that there are red, white, blue, and yellow cubes in the bag. Therefore, there are a total of\n, or , cubes in the bag. If the cube is neither blue nor yellow, then it must be either red or white. Therefore, the probability of selecting a\ncube that is neither blue nor yellow is equivalent to the probability of selecting a cube that is either red or white. If one of these cubes is selected\nat random, the probability of selecting a cube that is either red or white is equal to the sum of the number of red cubes and white cubes divided\nby the total number of cubes in the bag. There are red cubes, white cubes, and total cubes in the bag. Therefore, the probability of\nselecting a red or white cube is , which is equivalent to , or . Thus, if one cube is selected at random, the probability of selecting a cube\nthat is neither blue nor yellow is .\nChoice A is incorrect. This is the probability of selecting a cube that is either blue or yellow, rather than the probability of selecting a cube that is\nneither blue nor yellow.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-47624288",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 11,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "The table gives the distribution of votes for a new school mascot and grade level for students.\nMascot\nGrade level\nSixth Seventh Eighth Total\nBadger\nLion\nLonghorn\nTiger\nTotal\nIf one of these students is selected at random, what is the probability of selecting a student whose vote for new mascot was for a lion?",
    "options": [
      {
        "letter": "A",
        "text": "1 g"
      },
      {
        "letter": "B",
        "text": "1 5"
      },
      {
        "letter": "C",
        "text": "1 i"
      },
      {
        "letter": "D",
        "text": "2 2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "1 i",
    "explanation": "Choice C is correct. If one of these students is selected at random, the probability of selecting a student whose vote for the new mascot was for\na lion is given by the number of votes for a lion divided by the total number of votes. The given table indicates that the number of votes for a lion\nis votes, and the total number of votes is votes. The table gives the distribution of votes for students, and the table shows a total of 80\nvotes were counted. It follows that each of the students voted exactly once. Thus, the probability of selecting a student whose vote for the\nnew mascot was for a lion is , or .\nChoice A is incorrect and may result from conceptual or computational errors.\nChoice B is incorrect and may result from conceptual or computational errors.\nChoice D is incorrect and may result from conceptual or computational errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-e438ec3f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 12,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "A grove has 6 rows of birch trees and 5 rows of maple trees. Each row of birch trees has 8 trees 20 feet or taller and 6 trees shorter than 20 feet.\nEach row of maple trees has 9 trees 20 feet or taller and 7 trees shorter than 20 feet. A tree from one of these rows will be selected at random.\nWhat is the probability of selecting a maple tree, given that the tree is 20 feet or taller?",
    "options": [
      {
        "letter": "A",
        "text": "9 Tor"
      },
      {
        "letter": "B",
        "text": "3 5"
      },
      {
        "letter": "C",
        "text": "15 31"
      },
      {
        "letter": "D",
        "text": "9/14"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "15 31",
    "explanation": "Choice C is correct. If a tree from one of these rows is selected at random, the probability of selecting a maple tree, given that the tree is feet\nor taller, is equal to the number of maple trees that are feet or taller divided by the total number of trees that are feet or taller. It's given that\nthere are rows of birch trees, and each row of birch trees has trees that are feet or taller. This means that there are a total of , or ,\nbirch trees that are feet or taller. It's given that there are rows of maple trees, and each row of maple trees has trees that are feet or\ntaller. This means that there are a total of , or , maple trees that are feet or taller. It follows that there are a total of , or ,\ntrees that are feet or taller. Therefore, the probability of selecting a maple tree, given that the tree is feet or taller, is , or .\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-60caadfd",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 13,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Each rock in a collection of rocks was classified as either igneous, metamorphic, or sedimentary, as shown in the frequency table.\nClassification Frequency\nigneous\nmetamorphic\nsedimentary\nIf one of these rocks is selected at random, what is the probability of selecting a rock that is igneous?",
    "options": [
      {
        "letter": "A",
        "text": "10/27"
      },
      {
        "letter": "B",
        "text": "10/33"
      },
      {
        "letter": "C",
        "text": "10/60"
      },
      {
        "letter": "D",
        "text": "10/70"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "10/70",
    "explanation": "Choice D is correct. If one of the rocks in the collection is selected at random, the probability of selecting a rock that is igneous is equal to the\nnumber of igneous rocks in the collection divided by the total number of rocks in the collection. According to the table, there are igneous\nrocks in the collection, and it's given that there's a total of rocks in the collection. Therefore, if one of the rocks in the collection is selected at\nrandom, the probability of selecting a rock that is igneous is .\nChoice A is incorrect. This is the number of igneous rocks in the collection divided by the number of sedimentary rocks in the collection, not\ndivided by the total number of rocks in the collection.\nChoice B is incorrect. This is the number of igneous rocks in the collection divided by the number of metamorphic rocks in the collection, not\ndivided by the total number of rocks in the collection.\nChoice C is incorrect. This is the number of igneous rocks in the collection divided by the number of rocks in the collection that aren't igneous,\nnot divided by the total number of rocks in the collection.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-89ff6a0a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 14,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "For buttons, the table summarizes the distribution by group and diameter.\nGroup\nDiameter (millimeters)\nLess than to Greater\nthan\nGroup 1\nGroup 2\nGroup 3\nOne of these buttons will be selected at random. What is the probability of selecting a button with a diameter that is less than or equal to\nmillimeters, given that it is not in group 2? (Express your answer as a decimal or fraction, not as a percent.)",
    "options": [],
    "correctAnswer": ".9538",
    "correctValue": ".9538",
    "explanation": "The correct answer is . It’s given that one button will be selected at random out of a total of buttons and that the table shows the\ndistribution of buttons by group and diameter. The probability of selecting a button with a diameter less than or equal to millimeters, given\nthat it is not in group 2, is the number of buttons with a diameter less than or equal to millimeters that are not in group 2 divided by the total\nnumber of buttons not in group 2. Based on the table, the buttons not in group 2 are those in group 1 and group 3. In group 1, there are\nbuttons with a diameter less than millimeters and buttons with a diameter from to millimeters, which yields , or , buttons\nwith a diameter less than or equal to millimeters. In group 3, there are buttons with a diameter less than millimeters and buttons\nwith a diameter from to millimeters, which yields , or , buttons with a diameter less than or equal to millimeters. Therefore,\nthe total number of buttons with a diameter less than or equal to millimeters that are not in group 2 is , or . The total number of\nbuttons that are not in group 2 is the sum of all buttons in group 1 and group 3. There are , or , buttons in group 1 and\n, or , buttons in group 3. Therefore, the total number of buttons in groups 1 and 3 is , or . It follows that the probability of\nselecting a button with a diameter less than or equal to millimeters, given that it is not in group 2, is . Note that 62/65 or .9538 are\nexamples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-e5b5fbdd",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 15,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Of the 8 planets in our solar system, 4 are considered rocky. If a student randomly selects 1 of those 8 planets as a topic for a report, what is the\nprobability that the selected planet will be rocky?",
    "options": [
      {
        "letter": "A",
        "text": "1/8"
      },
      {
        "letter": "B",
        "text": "1/4"
      },
      {
        "letter": "C",
        "text": "1/2"
      },
      {
        "letter": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "1/2",
    "explanation": "Choice C is correct. If one of these planets is selected at random, the probability that the selected planet will be rocky is calculated by dividing\nthe number of planets that are considered rocky by the total number of planets. It’s given that 4 of the 8 total planets are considered rocky.\nTherefore, the probability that the selected planet will be rocky is , which is equivalent to .\nChoices A and B are incorrect. These represent the probability if 1 of the 8 planets was considered rocky (choice A) and if 2 of the 8 planets were\nconsidered rocky (choice B). Choice D is incorrect and may result from dividing the total number of planets by the number of planets that are\nconsidered rocky.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1fc4f47b",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 16,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "At a movie theater, there are a total of 350 customers. Each customer is located in either theater A, theater B, or theater C. If one of these\ncustomers is selected at random, the probability of selecting a customer who is located in theater A is 0.48, and the probability of selecting a\ncustomer who is located in theater B is 0.24. How many customers are located in theater C?",
    "options": [
      {
        "letter": "A",
        "text": "28"
      },
      {
        "letter": "B",
        "text": "40"
      },
      {
        "letter": "C",
        "text": "84"
      },
      {
        "letter": "D",
        "text": "98"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "98",
    "explanation": "Choice D is correct. It’s given that at a movie theater, there are a total of customers and that each customer is located in either theater A,\ntheater B, or theater C. If the probability of selecting a customer in theater A is , then , or , customers are located in theater\nA. If the probability of selecting a customer in theater B is , then , or , customers are located in theater B. It follows that there\nare , or , customers in theater A and theater B. Therefore, there are , or , customers in theater C.\nChoice A is incorrect. This is the percent, not the number, of the customers that are located in theater C.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the number of customers that are located in theater B, not theater C.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-2905ded0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 17,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Live east of the\nriver\nLive west of the\nriver Total\nLess than\nyears old\nAt least years\nold\nTotal\nThe table summarizes members of a local organization by age and whether they live east or west of the river. If a member of the organization is\nselected at random, what is the probability that the selected member is at least years old?",
    "options": [
      {
        "letter": "A",
        "text": "28 ds"
      },
      {
        "letter": "B",
        "text": "35 1"
      },
      {
        "letter": "C",
        "text": "100 - 135"
      },
      {
        "letter": "D",
        "text": "107 - 15°"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "107 - 15°",
    "explanation": "Choice D is correct. If a member of the organization is selected at random, the probability that the selected member is at least years old is\nequal to the number of members who are at least years old divided by the total number of members. According to the table, there are a total\nof members of the organization, and of these members are at least years old. Therefore, the probability that the selected member is\nat least years old is .\nChoice A is incorrect. This is the probability that the selected member is less than years old.\nChoice B is incorrect. This is the probability that the selected member lives east of the river.\nChoice C is incorrect. This is the probability that the selected member lives west of the river.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-2df8f293",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 18,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Each vertex of a 14-sided polygon is labeled with one of the 14 letters A through IN, with a different letter at each vertex. If one vertex is\nselected at random, what is the probability that the letter D will be at the selected vertex? (Express your answer as a decimal or fraction, not as a\npercent.)",
    "options": [],
    "correctAnswer": ".0714",
    "correctValue": ".0714",
    "explanation": "The correct answer is . If one vertex of the polygon is selected at random, the probability that the letter will be at the selected vertex is\nequal to the number of vertices labeled with the letter divided by the total number of vertices. It's given that each vertex is labeled with one of\nthe letters through , with a different letter at each vertex. It follows that there is vertex labeled with the letter . It's also given that the\npolygon is -sided. It follows that there are a total of vertices. Thus, the probability that the letter will be at the selected vertex is . Note\nthat 1/14, .0714, and 0.071 are examples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-ec7b0eb8",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 19,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Texting\nbehavior\nTalks on cell\nphone daily\nDoes not talk on\ncell phone daily Total\nLight 110 146 256\nMedium 139 164 303\nHeavy 166 74 240\nTotal 415 384 799\nIn a study of cell phone use, 799 randomly selected US teens were asked how often they talked on a cell phone and about their texting behavior.\nThe data are summarized in the table above. If one of the 799 teens surveyed is selected at random, what is the probability that the teen talks on\na cell phone daily?",
    "options": [
      {
        "letter": "A",
        "text": "1/799"
      },
      {
        "letter": "B",
        "text": "415/799"
      },
      {
        "letter": "C",
        "text": "384/415"
      },
      {
        "letter": "D",
        "text": "384/799"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "415/799",
    "explanation": "Choice B is correct. If one of the teens surveyed is selected at random, the probability that the teen talks on a cell phone daily is equal to the\nquotient of the total number of teens who reported that they talk on a cell phone daily, 415, and the total number of teens surveyed, 799.\nTherefore, this probability is equal to .\nChoice A is incorrect. This fraction represents the probability of selecting at random any one of the 799 teens surveyed. Choice C is incorrect and\nmay result from conceptual errors. Choice D is incorrect. This fraction represents the probability of selecting at random one of the 799 teens\nsurveyed who doesn’t talk on a cell phone daily.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-79201024",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 20,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A band with 45 members has 11 members who play saxophone. If one band member is selected at random, what is the probability of selecting a\nband member who plays saxophone?",
    "options": [
      {
        "letter": "A",
        "text": "1 br"
      },
      {
        "letter": "B",
        "text": "11 &"
      },
      {
        "letter": "C",
        "text": "34 bd"
      },
      {
        "letter": "D",
        "text": "4 n. £"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "11 &",
    "explanation": "Choice B is correct. The probability of an event occurring is the ratio of the number of favorable outcomes to the total number of possible\noutcomes. It’s given that there are band members, which is the total number of possible outcomes. It's also given that there are band\nmembers who play saxophone. Therefore, the number of favorable outcomes is . Thus, the probability of selecting a band member who plays\nsaxophone is .\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the probability of selecting a band member who does not play saxophone.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-585de39a",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 21,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "On May 10, 2015, there were 83 million Internet subscribers in Nigeria. The major Internet providers were MTN, Globacom, Airtel, Etisalat, and\nVisafone. By September 30, 2015, the number of Internet subscribers in Nigeria had increased to 97 million. If an Internet subscriber in Nigeria on\nSeptember 30, 2015, is selected at random, the probability that the person selected was an MTN subscriber is 0.43. There were p million MTN\nsubscribers in Nigeria on September 30, 2015. To the nearest integer, what is the value of p ?",
    "options": [],
    "correctAnswer": "42",
    "correctValue": "42",
    "explanation": "The correct answer is 42. It’s given that in Nigeria on September 30, 2015, the probability of selecting an MTN subscriber from all Internet\nsubscribers is 0.43, that there were p million, or , MTN subscribers, and that there were 97 million, or 97,000,000, Internet\nsubscribers. The probability of selecting an MTN subscriber from all Internet subscribers can be found by dividing the number of MTN\nsubscribers by the total number of Internet subscribers. Therefore, the equation can be used to solve for p. Dividing\n1,000,000 from the numerator and denominator of the expression on the left-hand side yields . Multiplying both sides of this\nequation by 97 yields , which, to the nearest integer, is 42.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-12dbe3de",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 22,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A store received a shipment of 1,000 MP3 players, 4 of which were defective. If an MP3 player is randomly selected from this shipment, what is\nthe probability that it is defective?",
    "options": [
      {
        "letter": "A",
        "text": "0.004"
      },
      {
        "letter": "B",
        "text": "0.04"
      },
      {
        "letter": "C",
        "text": "04"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "0.004",
    "explanation": "Choice A is correct. The probability of randomly selecting a defective MP3 player from the shipment is equal to the number of defective MP3\nplayers divided by the total number of MP3 players in the shipment. Therefore, the probability is , which is equivalent to 0.004.\nChoice B is incorrect because 0.04 represents 4 defective MP3 players out of 100 rather than out of 1,000. Choice C is incorrect because 0.4\nrepresents 4 defective MP3 players out of 10 rather than out of 1,000. Choice D is incorrect. This is the number of defective MP3 players in the\nshipment.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-912cd125",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 23,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "For a science project, Anka recorded whether it rained each weekday and weekend day for 12 weeks. Her results are summarized in the table\nbelow.\nWeekday and Weekend Day Rain for 12 Weeks\nRain No rain Total\nNumber of weekdays 12 48 60\nNumber of weekend days 8 16 24\nTotal 20 64 84\nIf one of the days on which there was no rain is selected at random, what is the probability the day was a weekend day?",
    "options": [
      {
        "letter": "A",
        "text": "4/21"
      },
      {
        "letter": "B",
        "text": "1/4"
      },
      {
        "letter": "C",
        "text": "2/3"
      },
      {
        "letter": "D",
        "text": "3/4"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1/4",
    "explanation": "Choice B is correct. There were 64 days with no rain. It was a weekend day for 16 of those 64 days. So 16 out of 64 of the days with no rain were\nweekend days. Because the day is selected at random, each day has an equal chance of being selected, so the probability is .\nChoice A is incorrect. It is the probability that a day selected at random from any one of the days during the 12 weeks is a weekend day with no\nrain. Choice C is incorrect. It is the probability that a day selected at random from the weekend days has no rain. Choice D is incorrect. It is the\nprobability that a day selected at random from the days with no rain is a weekday.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-6a715bed",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 24,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The table summarizes the distribution of age and assigned group for participants in a study.\n–\nyears\n–\nyears years\nTotal\nGroup A\nGroup B\nGroup C\nTotal\nOne of these participants will be selected at random. What is the probability of selecting a participant from group A, given that the participant is\nat least years of age? (Express your answer as a decimal or fraction, not as a percent.)",
    "options": [],
    "correctAnswer": ".3833",
    "correctValue": ".3833",
    "explanation": "The correct answer is . It's given that one of the participants will be selected at random. The probability of selecting a participant from group\nA given that the participant is at least years of age is the number of participants in group A who are at least years of age divided by the\ntotal number of participants who are at least years of age. The table shows that in group A, there are participants who are – years of\nage and participants who are years of age. Therefore, there are , or , participants in group A who are at least years of age.\nThe table also shows that there are a total of participants who are – years of age and participants who are years of age.\nTherefore, there are a total of , or , participants who are at least years of age. It follows that the probability of selecting a\nparticipant from group A given that the participant is at least years of age is . Note that 23/60, .3833, and 0.383 are examples of ways to\nenter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-589cd7a6",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 25,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A box holds 104 tokens, of which 13 are brown. If a token is selected at random from the box, what is the probability of selecting a token that is\nbrown?",
    "options": [
      {
        "letter": "A",
        "text": "1 i"
      },
      {
        "letter": "B",
        "text": "1 0"
      },
      {
        "letter": "C",
        "text": "1 H"
      },
      {
        "letter": "D",
        "text": "1 1"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "1 H",
    "explanation": "Choice C is correct. If a token is selected at random from the box, the probability of selecting a token that is brown is equal to the number of\ntokens that are brown divided by the total number of tokens in the box. Since there are brown tokens and total tokens in the box, the\nprobability of selecting a token that is brown is , or .\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-ed6b7e5f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 26,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The table gives the distribution of topping and type of crust for customer orders at a pizza place.\nTopping\nType of crust\nThin Thick\nExtra\ncheese\nPepperoni\nTomato\nIf one of these customer orders is selected at random, what is the probability of selecting an order with thin crust, given the topping is pepperoni?\n(Express your answer as a decimal or fraction, not as a percent.)",
    "options": [],
    "correctAnswer": "0.4",
    "correctValue": "0.4",
    "explanation": "The correct answer is . Since the order will be selected at random, the probability of selecting an order with thin crust, given the topping is\npepperoni, is equal to the number of orders with thin crust where the topping is pepperoni divided by the total number of orders where the\ntopping is pepperoni. According to the table, there are orders with thin crust where the topping is pepperoni. According to the table, there are\norders with thick crust where the topping is pepperoni. Therefore, there are a total of , or , orders where the topping is pepperoni.\nThus, the probability of selecting an order with thin crust, given the topping is pepperoni, is , or . Note that 2/5 and .4 are examples of ways\nto enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-9ce8cbbe",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 27,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Set K consists of all the positive integers that are less than or equal to 160, where none of the integers are repeated. If a number is selected at\nrandom from set K, what is the probability of selecting a number that is even and less than or equal to 50?",
    "options": [
      {
        "letter": "A",
        "text": "5 El"
      },
      {
        "letter": "B",
        "text": "3 6"
      },
      {
        "letter": "C",
        "text": "5 iI"
      },
      {
        "letter": "D",
        "text": "5 %"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "5 El",
    "explanation": "Choice A is correct. It's given that set K consists of all the positive integers that are less than or equal to , where none of the integers are\nrepeated. Therefore, set K consists of the integers through , which is numbers. Of these, the integers through are less than or\nequal to . Therefore, there are numbers that belong to set K that are less than or equal to . Of these, half are even. Therefore, , or ,\nnumbers that belong to set K are even and less than or equal to . The probability of selecting at random a number from set K that is even and\nless than or equal to is equal to the number of numbers that belong to set K that are even and less than or equal to , which is , divided by\nthe total number of numbers that belong to set K, which is . It follows that the probability of selecting at random from set K a number that is\neven and less than or equal to is , or .\nChoice B is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect. This is the probability of selecting at random a number from set K that is less than or equal to , not a number that is even\nand less than or equal to .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-30db8f77",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 28,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Ata conference, there are a total of 275 attendees. Each attendee is assigned to either group A, group B, or group C. If one of these attendees is\nselected at random, the probability of selecting an attendee who is assigned to group A is 0.44 and the probability of selecting an attendee who\nis assigned to group B is 0.24. How many attendees are assigned to group C?",
    "options": [],
    "correctAnswer": "88",
    "correctValue": "88",
    "explanation": "The correct answer is . It's given that there are a total of attendees and each attendee is assigned to either group A, group B, or group C.\nIt's also given that if one of these attendees is selected at random, the probability of selecting an attendee who is assigned to group A is\nand the probability of selecting an attendee who is assigned to group B is . It follows that there are , or , attendees who are\nassigned to group A and , or , attendees who are assigned to group B. The number of attendees who are assigned to group C is the\nnumber of attendees who are not assigned to group A or group B. In other words, the number of attendees who are assigned to group C is the\ntotal number of attendees minus the number of attendees who are assigned to group A and group B. Therefore, the number of attendees who are\nassigned to group C is , or .",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-2a08d878",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 29,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "There are n nonfiction books and 12 fiction books on a bookshelf. If one of these books is selected at random, what is the probability of\nselecting a nonfiction book, in terms of n ?",
    "options": [
      {
        "letter": "A",
        "text": "n/12"
      },
      {
        "letter": "B",
        "text": "n/(n + 12)"
      },
      {
        "letter": "C",
        "text": "12/n"
      },
      {
        "letter": "D",
        "text": "12/(n + 12)"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "n/(n + 12)",
    "explanation": "Choice B is correct. Since there are n nonfiction and 12 fiction books on the bookshelf, represents the total number of books. If one of\nthese books is selected at random, the probability of selecting a nonfiction book is equivalent to the number of nonfiction books divided by the\ntotal number of books. Therefore, the probability of selecting a nonfiction book, in terms of n, is .\nChoice A is incorrect. This expression represents the number of nonfiction books divided by the number of fiction books. Choice C is incorrect.\nThis expression represents the number of fiction books divided by the number of nonfiction books. Choice D is incorrect. This expression\nrepresents the probability of selecting a fiction book.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-38a9ac45",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 30,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "If 1,200 customers register for new accounts at a social media website every day, what fraction of the first 60,000 new accounts are registered in\nthe first 5 days?",
    "options": [
      {
        "letter": "A",
        "text": "1/5"
      },
      {
        "letter": "B",
        "text": "1/10"
      },
      {
        "letter": "C",
        "text": "1/12"
      },
      {
        "letter": "D",
        "text": "1/50"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1/10",
    "explanation": "Choice B is correct. If 1,200 customers register for new accounts every day, then (1,200)(5) = 6,000 customers registered for new accounts in the\nfirst 5 days. Therefore, of the first 60,000 new accounts that were registered, , or , were registered in the first 5 days.\nChoice A is incorrect. The fraction represents the fraction of accounts registered in 1 of the first 5 days. Choice C is incorrect and may result\nfrom conceptual or computation errors. Choice D is incorrect. The fraction represents the fraction of the first 60,000 accounts that were\nregistered in 1 day.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-a478f9f5",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 31,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "Each of gemstones can be classified as one of three classifications, as shown in the frequency table.\nClassification Frequency\ncolor X\ncolor Y\ncolor Z\nIf one of the gemstones is selected at random, what is the probability of selecting a gemstone of color Y?",
    "options": [
      {
        "letter": "A",
        "text": "3 157"
      },
      {
        "letter": "B",
        "text": "35 357"
      },
      {
        "letter": "C",
        "text": "19 357"
      },
      {
        "letter": "D",
        "text": "154 357"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "3 157",
    "explanation": "Choice A is correct. If one of the gemstones is selected at random, the probability of selecting a gemstone of color Y is equal to the number of\ngemstones of color Y divided by the total number of gemstones. According to the table, there are gemstones of color Y, and it's given that the\ntotal number of gemstones is . Therefore, if one of the gemstones is selected at random, the probability of selecting a gemstone of color Y is\n.\nChoice B is incorrect. This is the probability of selecting a gemstone of color Z.\nChoice C is incorrect. This is the probability of selecting a gemstone of color X.\nChoice D is incorrect. This is the probability of selecting a gemstone that's not of color Y.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-dae79de4",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 32,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "visit\nor more\nvisits Total\nLess than\nyears old\nAt least\nyears old\nTotal\nThe table summarizes customers who visited a car dealership in the last month by age and number of visits they made to the dealership. If a\ncustomer from the last month is selected at random, what is the probability that the selected customer is at least years old?",
    "options": [
      {
        "letter": "A",
        "text": "30 13"
      },
      {
        "letter": "B",
        "text": "35 1"
      },
      {
        "letter": "C",
        "text": "100 - 135"
      },
      {
        "letter": "D",
        "text": "105 - 335°"
      }
    ],
    "correctAnswer": "D",
    "correctValue": "105 - 335°",
    "explanation": "Choice D is correct. Based on the table, there are a total of customers who visited the car dealership in the last month, and of these\ncustomers are at least years old. If a customer from the last month is selected at random, the probability that the selected customer is at\nleast years old is equal to the number of customers who are at least years old divided by the total number of customers. Therefore, the\nprobability that the selected customer is at least years old is .\nChoice A is incorrect. This is the probability that the selected customer is less than years old.\nChoice B is incorrect. This is the probability that the selected customer visited the dealership time in the last month.\nChoice C is incorrect. This is the probability that the selected customer visited the dealership or more times in the last month.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-b6569d0e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 33,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "United States\nPresidents\nfrom 1789 to\n2015\nAges Number\n40–44 2\n45–49 7\n50–54 13\n55–59 11\n60–64 7\n65–69 3\nThe table above gives the number of United States presidents from 1789 to 2015 whose age at the time they first took office is within the interval\nlisted. Of those presidents who were at least 50 years old when they first took office, what fraction were at least 60 years old?",
    "options": [
      {
        "letter": "A",
        "text": "10/43"
      },
      {
        "letter": "B",
        "text": "10/34"
      },
      {
        "letter": "C",
        "text": "10/24"
      },
      {
        "letter": "D",
        "text": "25/34"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "10/34",
    "explanation": "Choice B is correct. The sample space is restricted to the presidents who were at least 50 years old when they first took office. Therefore, the\nsum of the values in the final four rows of the table, , is the total number of presidents in the sample space. The number\nof presidents who were at least 60 years old is the sum of the values in the final two rows of the table: . Thus, the fraction of the 34\npresidents who were at least 50 years old when they first took office who were at least 60 years old is .\nChoice A is incorrect. This is the fraction of all presidents in the table who were at least 60 years old when they first took office. Choice C is\nincorrect and may result from treating the number of presidents who were between 50 and 59 years old when they first took office, instead of the\nnumber of presidents who were at least 50 years old, as the sample space. Choice D is incorrect and may result from a calculation error.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-5dc386fb",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 34,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The table below shows the distribution of US states according to whether they have a state-level sales tax and a state-level income tax.\n2013 State-Level Taxes\nState sales tax No state sales tax\nState income tax 39 4\nNo state income tax 6 1\nTo the nearest tenth of a percent, what percent of states with a state-level sales tax do not have a state-level income tax?",
    "options": [
      {
        "letter": "A",
        "text": "6.0%"
      },
      {
        "letter": "B",
        "text": "12.0%"
      },
      {
        "letter": "C",
        "text": "13.3%"
      },
      {
        "letter": "D",
        "text": "14.0%"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "13.3%",
    "explanation": "Choice C is correct. The sum of the number of states with a state-level sales tax is . Of these states, 6 don’t have a state-level\nincome tax. Therefore, , or about 13.3%, of states with a state-level sales tax don’t have a state-level income tax.\nChoice A is incorrect. This is the number of states that have a state-level sales tax and no state-level income tax. Choice B is incorrect. This is the\npercent of states that have a state-level sales tax and no state-level income tax. Choice D is incorrect. This is the percent of states that have no\nstate-level income tax.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-014c47ab",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 35,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "Site A Site B Total\nTulip\nDaffodil\nTotal\nThe table shows the distribution of two types of flowers at two different sites. If a flower represented in the table is selected at random, what is\nthe probability of selecting a flower from site A, given that the flower is a tulip? (Express your answer as a decimal or fraction, not as a percent.)",
    "options": [],
    "correctAnswer": "0.7",
    "correctValue": "0.7",
    "explanation": "The correct answer is . Based on the table, there are a total of tulips, and of these tulips are from site A. The probability of selecting at\nrandom a flower from site A, given that the flower is a tulip, is equal to the number of tulips from site A divided by the total number of tulips,\nwhich can be written as , or . Note that 35/50, 7/10, and .7 are examples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1b8e412e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 36,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "—11,-9,26\nA data set of three numbers is shown. If a number from this data set is selected at random, what is the probability of selecting a positive\nnumber?",
    "options": [
      {
        "letter": "A",
        "text": "O"
      },
      {
        "letter": "B",
        "text": "1 3"
      },
      {
        "letter": "C",
        "text": "2 t"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1 3",
    "explanation": "Choice B is correct. The probability of selecting a positive number is the number of positive numbers in the data set divided by the total number\nof numbers in the data set. There is positive number in this data set. There are total numbers in this data set. Thus, if a number from this data\nset is selected at random, the probability of selecting a positive number is .\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect. This is the probability of selecting a negative number from this data set.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-f496d2c0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 37,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The table shows the distribution of rooms in a certain facility by seating capacity.\nSeating\ncapacity Proportion\nLess than\nseats\n– seats\n– seats\nGreater than\nseats\nIf a room in this facility is selected at random, which of the following is closest to the probability of selecting a room that has a seating capacity\ngreater than seats, given that the room has a seating capacity of at least seats?",
    "options": [
      {
        "letter": "A",
        "text": "0.24"
      },
      {
        "letter": "B",
        "text": "0.32"
      },
      {
        "letter": "C",
        "text": "0.50"
      },
      {
        "letter": "D",
        "text": "0.92"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "0.32",
    "explanation": "Choice B is correct. It’s given that the proportion of rooms with less than seats is , which is equivalent to . It’s also given that the\nproportion of rooms with – seats is , or ; that the proportion of rooms with – seats is , or ; and that the proportion\nof rooms with greater than seats is , or . The probability of selecting a room that has a seating capacity greater than seats given\nthat the room has a seating capacity of at least seats is equal to the proportion of rooms that have a seating capacity of greater than\nseats divided by the proportion of rooms that have a seating capacity of at least seats. Rooms with a seating capacity of at least seats\ninclude the categories – seats, – seats, and greater than seats, so the total proportion for this condition can be written as\n, or . Therefore, the probability of selecting a room that has a seating capacity greater than seats given that it has a\nseating capacity of at least seats is , or approximately . Of the given choices, is closest to .\nChoice A is incorrect. This is the probability of selecting a room that has a seating capacity greater than seats from all rooms in the facility,\nnot just rooms that meet the condition of having a seating capacity of at least seats.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-89f20d9e",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 38,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Hard",
    "difficultyTag": "Hard",
    "prompt": "The table shows the number of participants by age group and assigned group.\nAge 0-9: Group A 5, Group B 6, Group C 19 (total 30).\nAge 10-19: Group A 17, Group B 8, Group C 5 (total 30).\nAge 20+: Group A 8, Group B 16, Group C 6 (total 30).\nTotals: 30 in each group and 90 overall. One participant is selected at random. What is the probability that the participant is in Group A, given that the participant is at least 10 years old?",
    "options": [
      {
        "letter": "A",
        "text": "5/18"
      },
      {
        "letter": "B",
        "text": "5/12"
      },
      {
        "letter": "C",
        "text": "17/30"
      },
      {
        "letter": "D",
        "text": "5/6"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "5/12",
    "explanation": "Choice B is correct. Since the participant will be selected at random, the probability of selecting a participant from group A, given that the\nparticipant is at least years of age, is equal to the number of participants from group A who are at least years of age divided by the total\nnumber of participants who are at least years of age. Based on the table, in group A, there are participants who are – years of age\nand participants who are years of age. Therefore, there are a total of , or , participants in group A who are at least years of\nage. Based on the table, of the total number of participants, there are participants who are – years of age and participants who are\nyears of age. Therefore, a total of , or , of the participants are at least years of age. Thus, the probability of selecting a\nparticipant from group A, given that the participant is at least years of age, is , or .\nChoice A is incorrect. This is the number of participants from group A who are at least years of age divided by the total number of\nparticipants, rather than divided by the number of participants who are at least years of age.\nChoice C is incorrect. This is the probability of randomly selecting a participant from group A, given that the participant is – years of age,\nrather than given that the participant is at least years of age.\nChoice D is incorrect. This is the probability of randomly selecting a participant who is at least years of age, given that the participant is in\ngroup A.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-b8150b17",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 39,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "For a particular machine that produces beads, 29 out of every 100 beads it produces have a defect. A bead produced by the machine will be\nselected at random. What is the probability of selecting a bead that has a defect?",
    "options": [
      {
        "letter": "A",
        "text": "1 790"
      },
      {
        "letter": "B",
        "text": "1 bl"
      },
      {
        "letter": "C",
        "text": "29 00"
      },
      {
        "letter": "D",
        "text": "29 0"
      }
    ],
    "correctAnswer": "C",
    "correctValue": "29 00",
    "explanation": "Choice C is correct. It’s given that out of every beads that the machine produces have a defect. It follows that if the machine produces\nbeads, then the number of beads that have a defect is , for some constant . If a bead produced by the machine will be selected at random,\nthe probability of selecting a bead that has a defect is given by the number of beads with a defect, , divided by the number of beads\nproduced by the machine, . Therefore, the probability of selecting a bead that has a defect is , or .\nChoice A is incorrect and may result from conceptual or computational errors.\nChoice B is incorrect and may result from conceptual or computational errors.\nChoice D is incorrect and may result from conceptual or computational errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-1dcea480",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 40,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "AA bag contains a total of 60 marbles. A marble is to be chosen at random from the bag. If the probability that a blue marble will be chosen is\n0.35, how many marbles in the bag are blue?",
    "options": [
      {
        "letter": "A",
        "text": "221"
      },
      {
        "letter": "B",
        "text": "25"
      },
      {
        "letter": "C",
        "text": "35"
      },
      {
        "letter": "D",
        "text": "39"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "221",
    "explanation": "Choice A is correct. Multiplying the number of marbles in the bag by the probability of selecting a blue marble gives the number of blue marbles\nin the bag. Since the bag contains a total of 60 marbles and the probability that a blue marble will be selected from the bag is 0.35, there are a\ntotal of blue marbles in the bag.\nChoice B is incorrect and may result from subtracting 35 from 60. Choice C is incorrect. This would be the number of blue marbles in the bag if\nthere were a total of 100 marbles, not 60 marbles. Choice D is incorrect. This is the number of marbles in the bag that aren’t blue.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-c943acba",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 41,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "On a street with 7 houses, 2 houses are blue. If a house from this street is selected at random, what is the probability of selecting a house that is\nblue?",
    "options": [
      {
        "letter": "A",
        "text": "1 T"
      },
      {
        "letter": "B",
        "text": "2 7"
      },
      {
        "letter": "C",
        "text": "5 T id"
      },
      {
        "letter": "D",
        "text": "%"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "2 7",
    "explanation": "Choice B is correct. If a house from the street is selected at random, the probability of selecting a house that is blue is equal to the number of\nhouses on the street that are blue divided by the total number of houses on the street. Since there are blue houses on a street with total\nhouses, the probability of selecting a house that is blue from this street is .\nChoice A is incorrect. This is the probability of selecting a house that is blue from a street on which of the houses is blue.\nChoice C is incorrect. This is the probability of selecting a house that is not blue from this street.\nChoice D is incorrect. This is the probability of selecting a house that is blue from a street on which all the houses are blue.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-a3384df0",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 42,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Penguin Exhibit\nType of penguin Male Female Total\nChinstrap 41 59 100\nEmperor 8 27 35\nGentoo 49 54 103\nMacaroni 42 40 82\nTotal 140 180 320\nThe number of penguins in a zoo exhibit, sorted by gender and type of penguin, is shown in the table above. Which type of penguin has a female\npopulation that is the closest to being of the total female penguin population in the exhibit?",
    "options": [
      {
        "letter": "A",
        "text": "Chinstrap"
      },
      {
        "letter": "B",
        "text": "Emperor"
      },
      {
        "letter": "C",
        "text": "Gentoo"
      },
      {
        "letter": "D",
        "text": "Macaroni"
      }
    ],
    "correctAnswer": "A",
    "correctValue": "Chinstrap",
    "explanation": "Choice A is correct. It is given that there are 180 female penguins in the exhibit. Therefore, of the female penguins is\npenguins. According to the table, there are 59 female chinstrap penguins, 27 female emperor penguins, 54 female gentoo penguins, and 40\nfemale macaroni penguins. So the female chinstrap penguin population is the closest to 60, or of the total female population in the exhibit.\nChoices B, C, and D are incorrect and may result from reading data from the table incorrectly. Since the total female penguin population is 180,\nof the total female penguin population is 60. The numbers of female emperor (27), female gentoo (54), and female macaroni (40) penguins\nare not as close to 60 as the number of female chinstrap penguins (59).",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-0a99e5bb",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 43,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "—13.423\nA data set of three numbers is shown. If a number from this data set is selected at random, what is the probability of selecting a negative\nnumber?",
    "options": [
      {
        "letter": "A",
        "text": "O"
      },
      {
        "letter": "B",
        "text": "1 3"
      },
      {
        "letter": "C",
        "text": "2 t"
      },
      {
        "letter": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1 3",
    "explanation": "Choice B is correct. If a number from the data set is selected at random, the probability of selecting a negative number is the count of negative\nnumbers in the data set divided by the total count of numbers in the data set. It's given that a data set of three numbers is shown. It follows that\nthe total count of numbers in the data set is . In the data set shown, is the only negative number. It follows that the count of negative\nnumbers in the data set is . Therefore, if a number from the data set is selected at random, the probability of selecting a negative number is .\nChoice A is incorrect. This is the probability of selecting a negative number from a data set that doesn’t contain any negative numbers.\nChoice C is incorrect. This is the probability of selecting a positive number, not a negative number, from the data set.\nChoice D is incorrect. This is the probability of selecting a negative number from a data set that contains only negative numbers.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-4e527894",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 44,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "There are 20 buttons in a bag: 8 white buttons, 2 orange buttons, and 10 brown buttons. If one of these buttons is selected at random, what is\nthe probability of selecting a white button?",
    "options": [
      {
        "letter": "A",
        "text": "2/20"
      },
      {
        "letter": "B",
        "text": "8/20"
      },
      {
        "letter": "C",
        "text": "10/20"
      },
      {
        "letter": "D",
        "text": "12/20"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "8/20",
    "explanation": "Choice B is correct. It’s given that there are buttons in a bag and of the buttons are white. If one button from the bag is selected at random,\nthe probability of selecting a white button is the number of white buttons in the bag divided by the total number of buttons in the bag. Therefore,\nif one button from the bag is selected at random, the probability of selecting a white button is .\nChoice A is incorrect. This is the probability of selecting an orange button from the bag.\nChoice C is incorrect. This is the probability of selecting a brown button from the bag.\nChoice D is incorrect. This is the probability of selecting a button that isn't white from the bag.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-46b2e169",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 45,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "A box contains 13 red pens and 37 blue pens. If one of these pens is selected at random, what is the probability of selecting a red pen? (Express\nyour answer as a decimal or fraction, not as a percent.)",
    "options": [],
    "correctAnswer": ".26",
    "correctValue": ".26",
    "explanation": "The correct answer is . It's given that a box contains red pens and blue pens. If one of these pens is selected at random, the probability\nof selecting a red pen is the number of red pens in the box divided by the number of red and blue pens in the box. The number of red and blue\npens in the box is , or . Since there are red pens in the box, it follows that the probability of selecting a red pen is . Note that\n13/50 and .26 are examples of ways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-ecf8d15f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 46,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Easy",
    "difficultyTag": "Easy",
    "prompt": "A total of children attended a summer camp and were offered types of sandwiches. The table shows the number of children who chose\neach type of sandwich.\nType of sandwich Number of\nchildren\nTurkey\nChicken\nHam\nVegetarian\nTotal\nIf one of these children is selected at random, what is the probability of selecting a child who chose a vegetarian sandwich?",
    "options": [
      {
        "letter": "A",
        "text": "9 Too"
      },
      {
        "letter": "B",
        "text": "9 5%"
      },
      {
        "letter": "C",
        "text": "1 i"
      },
      {
        "letter": "D",
        "text": "9 15"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "9 5%",
    "explanation": "Choice B is correct. If one of these children is selected at random, the probability of selecting a child who chose a vegetarian sandwich is equal\nto the number of children who chose a vegetarian sandwich divided by the total number of children. According to the table, there are a total of\nchildren, and of these children chose a vegetarian sandwich. Therefore, the probability of selecting a child who chose a vegetarian sandwich is\n.\nChoice A is incorrect and may result from conceptual or calculation errors.\nChoice C is incorrect and may result from conceptual or calculation errors.\nChoice D is incorrect and may result from conceptual or calculation errors.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-f8696cd8",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 47,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "Human Resources Accounting\nBachelor’s degree 4 3\nMaster’s degree 2 6\nThe table above shows the number of people who work in the Human Resources and Accounting departments of a company and the highest\nlevel of education they have completed. A person from one of these departments is to be chosen at random. If the person chosen works in the\nHuman Resources department, what is the probability that the highest level of education the person completed is a master’s degree?",
    "options": [
      {
        "letter": "A",
        "text": "Z"
      },
      {
        "letter": "B",
        "text": "1 ="
      },
      {
        "letter": "C",
        "text": "1 —"
      },
      {
        "letter": "A",
        "text": "> 8 “15"
      }
    ],
    "correctAnswer": "B",
    "correctValue": "1 =",
    "explanation": "Choice B is correct. In total, there are 6 people in the Human Resources department. Of those 6, 2 have a master’s degree as their highest level of\neducation. Therefore, the probability of an employee selected at random from the Human Resources department having a master’s degree is\n, which simplifies to .\nChoice A is incorrect; it is the probability that an employee selected at random from either department will be in the Human Resources\ndepartment and have a master’s degree. Choice C is incorrect; it is the probability that an employee with a master’s degree selected at random\nwill be in the Human Resources department. Choice D is incorrect; it is the probability that an employee selected at random from either\ndepartment will have a master’s degree.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  },
  {
    "id": "satqb-e9ed719f",
    "source": "collegeboard",
    "license_note": "College Board SAT Suite Question Bank export; not licensed for redistribution",
    "num": 48,
    "topicId": "m-dat-5",
    "topic": "Probability and conditional probability",
    "domain": "Problem-Solving and Data Analysis",
    "section": "math",
    "difficulty": "Medium",
    "difficultyTag": "Medium",
    "prompt": "The table summarizes the distribution of color and shape for tiles of equal area.\nRed Blue Yellow Total\nSquare\nPentagon\nTotal\nIf one of these tiles is selected at random, what is the probability of selecting a red tile? (Express your answer as a decimal or fraction, not as a\npercent.)",
    "options": [],
    "correctAnswer": "0.3",
    "correctValue": "0.3",
    "explanation": "The correct answer is . It’s given that there are a total of tiles of equal area, which is the total number of possible outcomes. According to\nthe table, there are a total of red tiles. The probability of an event occurring is the ratio of the number of favorable outcomes to the total\nnumber of possible outcomes. By definition, the probability of selecting a red tile is given by , or . Note that 3/10 and .3 are examples of\nways to enter a correct answer.",
    "sourceFile": "questionbank-export-2026-11-4 (3).pdf"
  }
];
