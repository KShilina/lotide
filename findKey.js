//Task
//Implement the function findKey which takes in an object and a callback.
//It should scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.

//const { isObject } = require("util");

// FUNCTION IMPLEMENTATION , checking only for Values and Strings
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    //`` makes string dynamic parameters and ${} dynamic values
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callBack) {
  // use (for <key> in) loop to return list of keys
  for (let key in object) {
    if (callBack(object[key])) { //object[key] = { stars: 1 } = value and then passit to the callback function
      console.log(key)
      return key;
    }
  }
  return undefined;
};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
console.log(result)

assertEqual(result, "noma");// checkig assertion
