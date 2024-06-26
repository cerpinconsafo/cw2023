// 7 kyu
// Highest and Lowest
//     JavaScript

// Instructions

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

// Fundamentals
// Strings

// **********************************//
//**********solution*************** *//

function highAndLow(numbers) {
  // ...
  //turn string into array of nums seperated by each space
  let splitNums = numbers.split(" ");

  console.log(splitNums);
  // use Math method to find highest and lowest nums in the array
  //initiate variable for easier readability, can simplfiy without though
  let highNum = Math.max(...splitNums);
  let lowNum = Math.min(...splitNums);

  //return statement
  return `${highNum} ${lowNum}`;
}

/*****
 * best JS solution
 *****/
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

/*****
 * best low level solution
 *****/

function highAndLow(numbers) {
  var numArray = numbers.split(" ");
  var max = Number(numArray[0]);
  var min = Number(numArray[0]);
  var num;

  for (var i = 1; i < numArray.length; i++) {
    num = Number(numArray[i]);

    if (num > max) max = num;
    if (num < min) min = num;
  }

  return max + " " + min;
}

// solution page

// https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript
