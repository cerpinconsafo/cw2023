// 8 kyu
// Century From Year

// JavaScript

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
// Fundamentals
// Mathematics

// **********************************//
//**********solution*************** *//

function century(year) {
  //convert number to a string, then into an array seperated by digit, then pop off the last index
  let lastDigit = year.toString().split("").pop();
  // determine if year ends in 0 or
  return lastDigit > 0 ? Math.floor(year / 100) + 1 : Math.ceil(year / 100);
}

//   better solution which is because I am dimwitted and dont know enough

const century = (year) => Math.ceil(year / 100);

// solution page

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript
