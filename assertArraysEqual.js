// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  //try to make actual and expected into a string and then pass it into the if/else if

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
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);