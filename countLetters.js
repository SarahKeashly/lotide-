// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {

//   if (`${actual}` === `${expected}`) {
//     console.log("🟢 Assertion Passed: " + `${actual}` + " === " + `${expected}`);

//   } else if (`${actual}` !== `${expected}`) {
//     console.log("🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`);
//   }
// };

// // TEST CODE
// // assertEqual("Lighthouse Labs", "Bootcamp");
// // assertEqual(1, 1);





///////////////

const iterable = 'lighthouse in the house';

function countLetters(string) {
  // remove the spaces from the string so they aren't counted
  let a = string.split(' ');
  let b = a.join(''); //lighthouseinthehouse

  // create a variable to hold the counts of each letter
  let c = {};

  // loop through the new string 
  for (const item of b) {
    if (c[item]) {
      c[item] += 1;
    } else {
      c[item] = 1
    }
  }
  return c;
};


// check if the letter is already there, if not put it in the holding variable with the count of 1
// if the letter is there increment its count by 1
// return the variable that holds the counts


console.log(countLetters('lighthouse in the house'));

module.exports = countLetters;
