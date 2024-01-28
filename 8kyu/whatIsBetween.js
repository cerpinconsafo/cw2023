// 8 kyu
// What is between?
// JavaScript


// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Fundamentals
// Algorithms

function between(a, b) {
    let newArr = []
    for(let i = a; i<= b; i++){
      newArr.push(i)
    }
    console.log(newArr)
    return newArr
  }

  // solutions page

// https://www.codewars.com/kata/55ecd718f46fba02e5000029/solutions/javascript?filter=all&sort=best_practice&invalids=false