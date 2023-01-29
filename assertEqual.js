/*
const sum = function(a, b) { 
  return a + b;
}
const sumBuggy = function(a, b) { 
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug!
// TEST CODE
// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3);
*/
// FUNCTION IMPLEMENTATION , checking only for Values and Strings
const assertEqual = function(actual, expected) {
  if (actual === expected) {
  //`` makes string dynamic parameters and ${} dynamic values 
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
//call the function
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual([1,2],[1,2])//false

