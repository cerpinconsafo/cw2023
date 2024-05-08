// 8 kyu
// Square(n) Sum

// Instructions
// Output

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9.
// Arrays
// Lists
// Fundamentals

// **********************************//
//**********solution*************** *//
function squareSum(numbers) {
  let sum = 0;

  //   const square = (e, i, arr) => {
  //     sum += e**2
  //   };

  numbers.forEach((e) => (sum += e ** 2));

  return sum;
}

// solution page

// https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
