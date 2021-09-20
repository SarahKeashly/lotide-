// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {

  //see if arrays are equal in length
  if (array1.length !== array2.length) {
    return "Assertion Failed";
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return "Assertion Failed";
    }

  }
  return "Assertion Passed";
};


module.exports = assertArraysEqual;


