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
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //`` makes string dynamic parameters and ${} dynamic values
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.shift();
  return newArray;//no first item
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// TEST CODE
//call the function
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual([1, 2, 3], [1, 2, 3]) // => false
