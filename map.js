//Function Definition
//Our map function will take in two arguments:
//An array to map
///A callback function
//The map function will return a new array based on the results of the callback function.
//OUTPUT:
//[ 'g', 'c', 't', 'm', 't' ]
//[ 5, 10, 15, 20, 25 ]
//[ false, false, false, false, false ]
//❌Assertion Failed: ground,control,to,major,tom !== g,c,t,m,t
//❌Assertion Failed: 10,20,30,40,50 !== 5,10,15,20,25
//❌Assertion Failed: 11,21,31,41,51 !== false,false,false,false,false


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

const words = ["ground", "control", "to", "major", "tom"];
const evenNum = [10, 20, 30, 40, 50];
const oddNum = [11, 21, 31, 41, 51];

//  map (higher-order) function
const map = function (words, callback) {
  let results = [];
  for (let word of words) {
    results.push(callback(word));
  }
  //console.log(results);
  return results;
};

const result1 = map(words, (word) => word[0]);
console.log(result1);

const result2 = map(evenNum, (num) => num / 2);
console.log(result2);

const result3 = map(oddNum, (number) => number % 2 === 0);
console.log(result3); //[false,false, false, false, false ]

// TEST CODE
//call the function
assertArraysEqual(words, result1);
assertArraysEqual(evenNum, result2);
assertArraysEqual(oddNum, result3);

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
