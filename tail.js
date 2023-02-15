const tail = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.shift();
  return newArray;//no first item
};


// TEST CODE
//call the function
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual([1, 2, 3], [1, 2, 3]) // => false
module.exports = tail;