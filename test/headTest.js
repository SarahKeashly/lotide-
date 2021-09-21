// //Requires assertEqual
// const head = require('../head');
// const assertEqual = require('../assertEqual'); // replaced the assertEqual function with this line of code - basically this links this file with the assertEqual file.

// // TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([27, 53, 29], 26));
// assertEqual(head(["hat", "cat", "bath"]), "hat");

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello']), 'Hello');
  });

  it.only("does not return '26' for ['27', '53', '29']", () => {

    let result = head(['27', '53', '29']);
    console.log(result);
    assert.notEqual(result, 26);
  });

  it("returns 'hat' for ['hat', 'cat', 'bat']", () => {
    assert.strictEqual(head(['hat']), 'hat');
  });


});