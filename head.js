const assertEqual = require('./assertEqual');

const head = function(item1) {
  return item1[0];
};


// TEST CODE
//call the function
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");

module.exports = head;