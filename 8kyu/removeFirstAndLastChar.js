
// 8 kyu
// Remove First and Last Character
// 128544091% of 16,610109,212 of 237,561Steadyx3 Issues Reported

//     JavaScript
//     Node v18.x

//         VIM
//         EMACS

// Instructions
// Output

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// Strings
// Fundamentals

// **********************************//
//**********solution*************** *//

const removeChar = str => {

    let arr = str.split('');
    
    return arr.slice(1, -1).join('');
      
    }  
// *** //

// apparently, you dont need to turn the string into an array, you can use slice right on the string.

function removeChar(str) {
    return str.slice(1, -1);
  }

// solution page

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript
