
// CHecking what inside of the arrays
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) {
    //`` makes string dynamic parameters and ${} dynamic values 
      console.log(`✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    }
};



module.exports = assertArraysEqual;