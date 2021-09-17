

const takeUntil = function(array, callback) {
  // ...
  let pushedVar = [];

  for (let i = 0; i < array.length; i++) {
    let arr = array[i];

    if (callback(arr)) {
      break;
    }
    pushedVar.push(arr);


  }
  return pushedVar;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output 
//[1, 2, 5, 7, 2]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

///TEST
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

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']));