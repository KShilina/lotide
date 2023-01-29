const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// CHecking what inside of the arrays
const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    //`` makes string dynamic parameters and ${} dynamic values 
      console.log(`✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    }
};

// TEST CODE
//call the function
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);