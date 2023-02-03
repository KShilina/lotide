// FUNCTION IMPLEMENTATION , checking only for Values and Strings
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    //`` makes string dynamic parameters and ${} dynamic values
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function scans the object and returns the first key which contains the given value, if no key with that value it should return undefined
const findKeyByValue = function (object, value) {
  // breaking object into keys and value
  let keyResult = Object.keys(object);

  for (const element of keyResult) {
    if (object[element] === value) {
      return element;
    }
  }
  return undefined;
};
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")

const bestTVShowsByGenre = {
  drama: "The Wire",
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

 assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
