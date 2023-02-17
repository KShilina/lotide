/*The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: 
The item in the array.
*/

// //What the difference between the array are they equal or not
// const eqArrays = function (arr1, arr2) {
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

// CHecking what inside of the arrays
// const assertArraysEqual = function (actual, expected) {
//   let result = eqArrays(actual, expected);
//   if (result) {
//     //`` makes string dynamic parameters and ${} dynamic values
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const takeUntil = function (array, callback) {
  // ...
  let result = []; //empty array

  for (let element of array) {
    //The function will return a "slice of the array with elements taken from the beginning."
    //It should keep going until the callback/predicate returns a truthy value.
    if (!callback(element)) {
      //return result;
      result.push(element);
    } else {
      return result;
    }
  }
};
module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);
// //OUTPUT [ 1, 2, 5, 7, 2 ]
// assertArraysEqual(results1, [1, 2, 5, 7, 2]); //✅Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
// // OUTPUT [ "I've", 'been', 'to', 'Hollywood' ]
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //✅Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood
