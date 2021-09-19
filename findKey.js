
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      // console.log(key);
      return key;
    }

  }

};


findKey();
console.log(findkey(['x']));

///TESTING

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(`actual value ${actual}`);
  console.log(`expected value ${expected}`);
  if (`${actual}` === `${expected}`) {
    console.log("🟢 Assertion Passed: " + `${actual}` + " === " + `${expected}`);

  } else if (`${actual}` !== `${expected}`) {
    console.log("🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};

// TEST CODE
console.log();
// console.log(assertEqual(findKey, 'noma'));