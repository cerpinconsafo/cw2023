// 8 kyu
// Calculate average

//     JavaScript

// Instructions

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
// Fundamentals
// Arrays

// **********************************//
//**********solution*************** *//

function findAverage(array) {
    return array.length === 0 
        ? 0 : ((array.reduce((a,c) => a +c, 0)) / array.length);
  }
  
  // solution page

  // https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript
