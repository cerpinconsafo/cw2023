// 7 kyu
// Shortest Word

//     JavaScript
//     Node v18.x

// Instructions
// Output

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// Fundamentals

// **********************************//
//**********solution*************** *//

function findShort(string) {
  //seperate words into an array
  const stringArr = string.split(" ");

  // initiate array for holding Each word length
  const wordCounts = [];

  //forEach loop to push the length of each word into the wordCounts array
  stringArr.forEach((word) => {
    wordCounts.push(word.length);
  });

  // Math.min returns the smallest value in the given array
  console.log(wordCounts);
  return Math.min(...wordCounts);
}

//******
//*****
// super short solution, probably the best
// *****
// *****

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

// solution page

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript
