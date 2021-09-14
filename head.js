// FUNCTION IMPLEMENTATION
const head = function(array1) {

  const firstElement = array1.shift();

  return firstElement;
}

const assertEqual = function(actual, expected) {

  if (`${actual}` === `${expected}`) {
    console.log("🟢 Assertion Passed: " + `${actual}` + " === " + `${expected}`);

  } else if (`${actual}` !== `${expected}`) {
    console.log("🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([27, 53, 29], 26));
assertEqual(head(["hat", "cat", "bath"]), "hat");