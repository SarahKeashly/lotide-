// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const object1Keys = Object.keys(actual);
  const object2Keys = Object.keys(expected);

  const object1Length = object1Keys.length;
  const object2Length = object2Keys.length;

  // check key length of objects
  const sameLength = object1Length === object2Length;

  let allValuesEqual = true;

  //for the keys in object1, check to see if they are the same as the object2's keys
  for (key in actual) {
    if (actual[key] !== expected[key]) {
      allValuesEqual = false;
      return `${inspect(actual)} does not equal to ${inspect(expected)}`;
    }

  };

  return `${inspect(actual)} does equal to ${inspect(expected)}`;

}
module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ab2 = { b: "3", a: "1" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log('Should be true:', assertObjectsEqual(ab, ba));
console.log('Should be false:', assertObjectsEqual(ab, abc));
console.log('Should be false:', assertObjectsEqual(ab, ab2));


// // FUNCTION IMPLEMENTATION
// const assertObjectsEqual = function(actual, expected) {
//   // Implement me!
// };

