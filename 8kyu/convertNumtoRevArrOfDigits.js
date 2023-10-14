
// 8 kyu
// Convert number to reversed array of digits

//     JavaScript

// Instructions

// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

// Arrays
// Fundamentals

// **********************************//
//**********solution*************** *//

function digitize(n) {
    return (      
      n
      .toString() // turn the integer into a string to use array functions
      .split('') // split the string into an array
      .reverse() // reverse the order of the array
      .map(Number) // map to make new array from each string, running the Number function on each index
      )};
   

// solution page

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript