// const assertArraysEqual = function(actual, expected) {
//   let result = eqArrays(actual, expected);
//   if (result) {
//     //`` makes string dynamic parameters and ${} dynamic values
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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

const without = function(arrSource, arrRemove) {
  let result = [];
  for (let i = 0; i < arrSource.length; i++) {
    // console.log(arrSource[i])
    if (!arrRemove.includes(arrSource[i])) {
      result.push(arrSource[i]);
    }
    // console.log(result)
  }
  return result;
};
  
module.exports = without;

// // test out
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// // assertArraysEqual(without([1,2,3],[2,3,4]));// Out 1

