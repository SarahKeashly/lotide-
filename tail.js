// FUNCTION IMPLEMENTATION

const tail = function(array1, array2) {

  array1.shift();
  array2 = array1;

  return array2;

};

const assertEqual = function(actual, expected) {

  if (`${actual}` === `${expected}`) {
    console.log("🟢 Assertion Passed: " + `${actual}` + " === " + `${expected}`);

  } else if (`${actual}` !== `${expected}`) {
    console.log("🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"