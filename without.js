const without = function(array, itemsToremove) {

  let removedItems = [];
  //for loop to go over array
  for (let i = 0; i < array.length; i++) {

    //for loop to go over itemsToremove
    //if array loop indexes are equal to itemsToremove array indexes, push indexes to removed Items variable above 

    if (itemsToremove.includes(array[i])) {
      removedItems.push(array[i]);
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (removedItems.includes(array[i])) {
      const index = array.indexOf(array[i]);
      if (index > -1) {
        array.splice(index, 1);

      }
    }
  }
  return array;
};

// console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]



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
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]))
// => true
console.log(assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']))


