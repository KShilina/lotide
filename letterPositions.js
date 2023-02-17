
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

// // CHecking what inside of the arrays

// const assertArraysEqual = function(actual, expected) {
//   let result = eqArrays(actual, expected);
//   if (result) {
//     //`` makes string dynamic parameters and ${} dynamic values 
//       console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
//     }
// };


const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let i = 0;
  const convert = sentence.split(" ").join(""); //converting to an array then to the string to avoid white spaces
  for (const letter of convert) {
    if (results[letter]) {
      results[letter].push(i); //push to the an array [i]
    } else {
      results[letter] = [i];//an aaray of the numbers
      //console.log("l",[i])
    }
    i++;
  }

  return results;
};
module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions('results').r,[0])//compare if r in result have idex 0
// // OUTPUT
/*
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
