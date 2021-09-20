//Requires assertEqual
const head = require('../head');
const assertEqual = require('../assertEqual'); // replaced the assertEqual function with this line of code - basically this links this file with the assertEqual file.

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([27, 53, 29], 26));
assertEqual(head(["hat", "cat", "bath"]), "hat");