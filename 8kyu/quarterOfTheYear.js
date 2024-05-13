// 8 kyu
// Quarter of the year

//     JavaScript

// Instructions
// Output

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12

// Fundamentals
// Mathematics

// **********************************//
//**********solution*************** *//

const quarterOf = (month) => {
  if (month <= 12 && month >= 10) {
    return 4;
  } else if (month <= 9 && month >= 7) {
    return 3;
  } else if (month <= 6 && month >= 4) {
    return 2;
  } else if (month <= 3 && month >= 1) {
    return 1;
  } else {
    return "month must be 1-12";
  }
};

// solution page

// https://www.codewars.com/kata/5772da22b89313a4d50012f7/solutions/javascript
