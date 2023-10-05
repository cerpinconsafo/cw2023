
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

function paperwork(n, m) {
    return n < 0 || m < 0 ? 0 : n * m;
}

// solution page

// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/solutions/javascript