const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//TEST CODE
const result1 = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
const result2 = eqArrays(["1", "2", "3"], ["1", "2", 3]);

assertEqual(result1, true) // => true
assertEqual(result2, false) // => false