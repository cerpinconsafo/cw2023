// 8 kyu
// Square(n) Sum
// 151838092% of 17,42592,370 of 256,299jhoffner1 Issue Reported

//     JavaScript
//     Node v18.x

//         VIM
//         EMACS

// Instructions
// Output

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.
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
