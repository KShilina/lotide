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

//What the difference between the array are they equal or not
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

const middle = function(arr) {
  result  = [];
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[Math.round((arr.length - 1) / 2)]){
    result.push(arr[i])
    //console.log(result)
  }
    }
    return result;
  }


// middle([1]) // => []
// middle([1, 2]) // => []
//middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

//TEST
assertArraysEqual(middle([1, 2, 3]),[2,3]);
