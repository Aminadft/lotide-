const eqObjects = function(obj1, obj2) {
  ///if length isn't the same, return false
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
    for (let key in obj1){
      //compare both objects' values for that key. Use === to ensure that the types are the same!
      if(Array.isArray(obj1[key])) {
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else {
        if(obj1[key] !== obj2[key]) {
        return false;
        }
      }
    }
    return true;
  };

  const assertObjectsEqual = function(obj1, obj2) {
    const inspect = require('util').inspect;
    if(eqObjects(obj1, obj2)) {
      console.log(`✅Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
     }
     else { console.log(`🚩Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
    }
  };