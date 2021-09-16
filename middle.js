
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

// TEST CODE
console.log(middle([1, 2, 3, 4]));

// => true
// console.log(middle([1, 2, 3, 4, 5]));

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


//EQArrays
const eqArrays = function(array1, array2) {


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

// // TEST CODE
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]))
// // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// /////////////////////////////////////

const assertArraysEqual = function(array1, array2) {

  //see if arrays are equal in length
  if (array1.length !== array2.length) {
    // console.log("Assertion Failed");
    return "Assertion Failed";
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // console.log("Assertion Failed");
      return "Assertion Failed";
    }

  }
  return "Assertion Passed";
  // return true;
};

// TEST CODE
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]))
// => true
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false

///////////////////////////


