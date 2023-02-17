# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kshilina/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays` :  takes in two arrays and returns a boolean value indicating whether they are equal.[ click here for example](https://github.com/KShilina/lotide/blob/main/eqArrays.js)
* `assertEqual` : compares two values for equality and returns a message indicating whether the assertion passed or failed.[ click here for example](https://github.com/KShilina/lotide/blob/main/assertEqual.js)
* `assertArraysEqual` : compares two arrays for equality and returns a boolean value. [ click here for example](https://github.com/KShilina/lotide/blob/main/assertArraysEqual.js)
* `assertObjectsEqual` :  compares two objects for equality and returns a message indicating whether the assertion passed or failed.[ click here for example](https://github.com/KShilina/lotide/blob/main/assertObjectsEqual.js)
* `countLetters` : takes in a string and returns an object containing a count of each letter in the string (excluding spaces).[ click here for example]()
* `countOnly` : takes in an array of items and an object containing a set of items to count, and returns an object with counts of the items in the original array that are specified in the input object.[ click here for example](https://github.com/KShilina/lotide/blob/main/countLetters.js)
* `eqObjects` : takes in two objects and returns a boolean value indicating whether they are equal. [ click here for example](https://github.com/KShilina/lotide/blob/main/eqObjects.js)
* `findKey` : takes in an object and a callback function, and returns the first key for which the callback function returns a truthy value.[ click here for example](https://github.com/KShilina/lotide/blob/main/findKey.js)
* `findKeyByValue` : takes in an object and a value, and returns the first key in the object that has the specified value.[ click here for example](https://github.com/KShilina/lotide/blob/main/findKeyByValue.js)
* `flatten` : takes in an array and returns a new flattened array (an array with all subarrays flattened into a single level).[ click here for example](https://github.com/KShilina/lotide/blob/main/flatten.js)
* `head` : takes in an array and returns the first element.[ click here for example](https://github.com/KShilina/lotide/blob/main/head.js)
* `letterPositions` : takes in a string and returns an object that contains arrays of the positions of each letter in the string.[ click here for example](https://github.com/KShilina/lotide/blob/main/letterPositions.js)
* `map` : takes in an array and a callback function, and returns a new array with each element transformed by the callback function.[ click here for example](https://github.com/KShilina/lotide/blob/main/map.js)
* `middle` : takes in an array and returns the middle element(s) of the array.[ click here for example](https://github.com/KShilina/lotide/blob/main/middle.js)
* `tail` : takes in an array and returns a new array with all elements except for the first element of the input array.[ click here for example](https://github.com/KShilina/lotide/blob/main/tail.js)
* `takeUntil` : takes in an array and a callback function, and returns a new array that includes all elements of the input array up until the point where the callback function returns a truthy value.[ click here for example](https://github.com/KShilina/lotide/blob/main/takeUntil.js)
* `without` : filters elements from the source array and returns a new array that excludes any elements that are also in the itemsToRemove array.[ click here for example](https://github.com/KShilina/lotide/blob/main/without.js)

