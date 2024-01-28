// 8 kyu
// Are You Playing Banjo?

//     JavaScript

// Instructions

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.
// Strings
// Fundamentals

// **********************************//
//**********solution*************** *//

function areYouPlayingBanjo(name) {
    // Implement me
    let nameArr = name.split('');
    return nameArr[0].toUpperCase() === 'R'? name + " plays banjo" : name + " does not play banjo"
    
  }
// you can use array notation on a string

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }
  
  // solution page

  // https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript