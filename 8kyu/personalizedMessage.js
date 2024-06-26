// 8 kyu
// Grasshopper - Personalized Message

//     JavaScript

// Instructions
// Output

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'
// Fundamentals
// Strings

// **********************************//
//**********solution*************** *//

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

// solution page

// https://www.codewars.com/kata/5772da22b89313a4d50012f7/solutions/javascript
