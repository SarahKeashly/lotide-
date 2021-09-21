
// FUNCTION IMPLEMENTATION
const head = function(array1) {

  const firstElement = array1.shift();

  return firstElement;
}



module.exports = head;

// TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([27, 53, 29], 26));
// assertEqual(head(["hat", "cat", "bath"]), "hat");