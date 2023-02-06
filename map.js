//Function Definition
//Our map function will take in two arguments:
//An array to map
///A callback function
//The map function will return a new array based on the results of the callback function.

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

// CHecking what inside of the arrays
const assertArraysEqual = function (actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    //`` makes string dynamic parameters and ${} dynamic values
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//  map (higher-order) function
const map = function (words, callback) {
  let results = [];
  for (let word of words) {
    results.push(callback(word));
  }
  //console.log(results);
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, (word) => word[0]);
console.log(result1); //[ 'g', 'c', 't', 'm', 't' ]
assertArraysEqual(result1, ["g", "c", "t", "m", "t"]); //✅Assertion Passed: g,c,t,m,t === g,c,t,m,t

const evenNum = [10, 20, 30, 40, 50];
const result2 = map(evenNum, (num) => num / 2);
console.log(result2); //[ 5, 10, 15, 20, 25 ]
assertArraysEqual(result2, [5, 10, 15, 20, 25]); //✅Assertion Passed: 5,10,15,20,25 === 5,10,15,20,25

const oddNum = [11, 21, 31, 41, 51];
const result3 = map(oddNum, (number) => number % 2 === 0);
console.log(result3); //[false,false, false, false, false ]
assertArraysEqual(result3, [false, false, false, false, false]); //✅Assertion Passed: false,false,false,false,false === false,false,false,false,false

//Test
/*
const map = function(words, callback) {
  const results = [];
  for (let item of words) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
*/
