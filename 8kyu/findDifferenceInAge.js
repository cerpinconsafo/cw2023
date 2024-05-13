// 8 kyu
// Find the Difference in Age between Oldest and Youngest Family Members
// 1245393% of 2,1579,076 of 16,260KaraM

//     JavaScript
//     Node v18.x

//         VIM
//         EMACS

// Instructions
// Output

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
// Algorithms
// Arrays

// **********************************//
//**********solution*************** *//

function differenceInAges(ages) {
  //find min max?
  let min = Math.min(...ages);
  let max = Math.max(...ages);

  //creat array for desired return values
  let ageArr = [];

  //push values to array
  ageArr.push(min, max, max - min);

  return ageArr;
}

// solution page

// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/solutions/javascript
