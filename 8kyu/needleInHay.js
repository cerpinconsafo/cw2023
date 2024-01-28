
// 8 kyu
// A Needle in the Haystack

//     JavaScript
//     Node v18.x

// Instructions

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// Note: In COBOL, it should return "found the needle at position 6"
// Arrays
// Fundamentals

// **********************************//
//**********solution*************** *//

function findNeedle(haystack) {
    for ( let i=0; i < haystack.length; i++ ){
      if ( haystack[i] === "needle" ) {
        return 'found the needle at position ' + i
      }
    }
   }
// best solution
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
  // solution page

  // https://www.codewars.com/kata/582cb0224e56e068d800003c/solutions/javascript


