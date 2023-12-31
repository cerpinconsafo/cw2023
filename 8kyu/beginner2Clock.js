
// 8 kyu
// Beginner Series #2 Clock

//     JavaScript


// Instructions

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

// Fundamentals


// **********************************//
//**********solution*************** *//

function past(h, m, s){
    return (h * 3.6e+6) + (m * 60000) + (s * 1000)
  }

// solution page

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript