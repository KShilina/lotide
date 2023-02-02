const assertEqual = function (actual, expected) {
  if (actual === expected) {
    //`` makes string dynamic parameters and ${} dynamic values
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
const convert = sentence.split(' ').join('') //combine the two lines below
//const convert = sentence.split(' ');//return array 
//const convertSentence = convert.join('');//return string
  for (const letters of convert) {
      if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
  }
}
  //console.log(countLetters);
  return result;
};

// console.log(countLetters('LHL'))
console.log(countLetters("lighthouse in the house"));

