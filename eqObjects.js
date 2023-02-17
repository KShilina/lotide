// const eqArrays = function (arr1, arr2) {
//   if (arr1?.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// // FUNCTION IMPLEMENTATION , checking only for Values and Strings
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     //`` makes string dynamic parameters and ${} dynamic values
//     console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //creating an array of the keys with an Objects keys using Object.keys.
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  //compare both the array lengths.
  //If they are not equal, we return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop through the keys returned by Object.keys for one of the objects (not both)
  //Using for..of since the keys are an array
  for (const element of arr1) {
    //checking if they are arrays
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      //If both values are indeed arrays: pass them to eqArrays and ensure that it returns true.
      if (!eqArrays(object1[element], object2[element])) {
        return false;
      }
      //Use === to ensure that the types are the same!
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;

// //TEST assertEqual-based tests using the code shown below, and ensure that they are failing.
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),false); // => false

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
