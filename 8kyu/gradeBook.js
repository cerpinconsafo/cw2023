// 8 kyu
// Grasshopper - Grade book
// 61217392% of 7,19336,937 of 104,093danleavitt02 Issues Reported

//     JavaScript
//     Node v18.x

//         VIM
//         EMACS

// Instructions
// Output
// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
// Fundamentals

// **********************************//
//**********solution*************** *//

const getGrade = (s1, s2, s3) => {
  // Code here
  let average = (s1 + s2 + s3) / 3;

  return average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : average >= 60 ? "D" : "F";
};

// solution page

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript
