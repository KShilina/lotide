const middle = function (array) {
  if (array.length < 3) {
    return [];
  }

  let middleVal = 0;

  //checks if array is even
  if (array.length % 2 === 0) {
    middleVal = array.length / 2;//even numbers
    return array.slice(middleVal - 1, middleVal + 1);

    //Checks if array is odd
  } else if (array.length % 2 === 1) {
    middleVal = (array.length - 1) / 2;// odd numbers
    return array.slice(middleVal, middleVal + 1);
  }
};

module.exports = middle;
