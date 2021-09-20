const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


// TEST CODE
let result1 = assertArraysEqual([1, 2, 3], [1, 2, 3]);
// => true
let result2 = assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

assertEqual(result1, "Assertion Passed");
assertEqual(result2, "Assertion Failed");

//// to test the code type "console.log(functionName(resultvariablecalled, what it should look like)"

