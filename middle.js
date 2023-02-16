
const middle = function(arr) {
  result  = [];
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[Math.round((arr.length - 1) / 2)]){
    result.push(arr[i])
    //console.log(result)
  }
    }
    return result;
  }


module.exports = middle;
