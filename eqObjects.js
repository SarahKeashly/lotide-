// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  const object1Length = object1Keys.length;
  const object2Length = object2Keys.length;

  // check key length of objects
  const sameLength = object1Length === object2Length;

  let allValuesEqual = true;

  for (key in object1) {
    if (object1[key] !== object2[key]) {
      allValuesEqual = false;
      break;
    }
  };

  return sameLength && allValuesEqual;
}

const ab = { a: "1", b: "2" };
const ab2 = { b: "3", a: "1" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log('Should be true:', eqObjects(ab, ba));
console.log('Should be false:', eqObjects(ab, abc));
console.log('Should be false:', eqObjects(ab, ab2));