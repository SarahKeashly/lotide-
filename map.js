

///MAP code
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
//////////


// /////////////////Assert Arrays are equal code

const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    return "Assertion Failed";
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return "Assertion Failed";
    }

  }
  return "Assertion Passed";
  // return true;
};

// TEST CODE
console.log("TEST 1:", assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
// console.log("words:", words);
// console.log("results:", results1);
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]))





//////TEST 2
//eqArrays code
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

console.log("TEST 2", eqArrays(results1, ['g', 'c', 't', 'm', 't']));



////TEST 3


const assertEqual = function(actual, expected) {

  if (`${actual}` === `${expected}`) {
    console.log("🟢 Assertion Passed: " + `${actual}` + " === " + `${expected}`);

  } else if (`${actual}` !== `${expected}`) {
    console.log("🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};
assertEqual(results1, ['g', 'c', 't', 'm', 't']);
// console.log("TEST 3", assertEqual(results1, ['g', 'c', 't', 'm', 't']));

//////




