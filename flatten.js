// CHecking what inside of the arrays
// const assertArraysEqual = function(actual, expected) {
//   let result = eqArrays(actual, expected);
//   if (result) {
//     //`` makes string dynamic parameters and ${} dynamic values
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// //What the difference between the array are they equal or not
// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
module.exports = flatten;
  
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]