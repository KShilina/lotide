// test/head.js

const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
//call the function
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");