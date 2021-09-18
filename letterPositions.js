const letterPositions = function(sentence) {

  const results = {};

  //loop through the string
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      continue; //we are done this current loop, go to next one
    };
    //if letter is not initialized, initialize it
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    };
    //push index numbers into the empty arrays

    results[sentence[i]].push(i);

  }

  // logic to update results here
  return results;
};
console.log(letterPositions("lighthouse in the house"));
//L: [0]
