// TEST CODE
const assertEqual = function(actual, expected) {

  if (`${actual}` === `${expected}`) {
    console.log("🟢 Assertion Passed: " + `${actual}` + " === " + `${expected}`);

  } else if (`${actual}` !== `${expected}`) {
    console.log("🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


// console.log(bestTVShowsByGenre['sci_fi'])


function findKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//////TEST
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



