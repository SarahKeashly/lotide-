// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🛑 Assertion Failed: " + actual + " !== " + expected);

  } else if (actual === expected) {
    console.log("🟢 Assertion Passed: " + actual + " === " + expected);

  }
  // } else {

  // }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1) !== Object.keys(object2)) {
    return "Failed";
  };

  // for (const key of object1) {
  //   console.log(key + ":" + object1[key]);

  // }

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(ab, abc)); // => false

console.log(eqObjects(ab, abc));

// TEST CODE
// assertEqual(eqObjects("Lighthouse Labs", "Bootcamp"));
// assertEqual(1, 2);