
// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  //try to make actual and expected into a string and then pass it into the if/else if

  //see if arrays are equal in length
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }

  }
  return true;
};

module.exports = eqArrays;



