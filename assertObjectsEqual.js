// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function (object1, object2) {
//   //creating an array of the keys with an Objects keys using Object.keys.
//   let arr1 = Object.keys(object1);
//   let arr2 = Object.keys(object2);
//   //compare both the array lengths.
//   //If they are not equal, we return false
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // loop through the keys returned by Object.keys for one of the objects (not both)
//   //Using for..of since the keys are an array
//   for (const element of arr1) {
//     //checking if they are arrays
//     if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
//       //If both values are indeed arrays: pass them to eqArrays and ensure that it returns true.
//       if (!eqArrays(object1[element], object2[element])) {
//         return false;
//       }
//       //Use === to ensure that the types are the same!
//     } else if (object1[element] !== object2[element]) {
//       return false;
//     }
//   }
//   return true;
// };
const eqObjects = require("./eqObjects");
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect // <= add this line, import util library's inspect function
  
  // ...
  let result = eqObjects(actual, expected);
  if (result) {
    //`` makes  dynamic parameters and ${} dynamic values 
      console.log(`✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    }
    console.log(`Example label: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;

// const object1 = { name: "Kate", age:10} //ctreated object1
// const object2 = { name: "Sam", age:11}//created object2 in order to call the function assertObjectsEqual

// assertObjectsEqual(object1,object2) //call the assertObjectsEqual

