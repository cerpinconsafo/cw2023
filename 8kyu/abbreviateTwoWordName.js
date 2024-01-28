// 8 kyu
// Abbreviate a Two Word Name


//     JavaScript

// Instructions

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Strings
// Fundamentals

// **********************************//
//**********solution*************** *//

function abbrevName(name){
    // convert full name into array, seperating index by space
     let nameArr = name.split(" ");  
    // convert first and last names into their own arrays
      const firstName = nameArr[0].split("");  
      const secName = nameArr[1].split("");
    //access first letter of each name array, concatenate into initials with period between
      return  (firstName[0] + "." + secName[0]).toUpperCase();
    }

 // solution page

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript



