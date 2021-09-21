
//middle
const middle = function(array) {
  let arrLength = array.length;
  let mid = Math.floor((arrLength - 1) / 2); //calculation to start index at 0

  if (arrLength % 2 === 0) {
    return [array[mid], array[mid + 1]]
  } else {
    return [array[mid]];
  }
};


module.exports = middle;





