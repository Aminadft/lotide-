const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i=0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  
  }
  return true;
  
  console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  };
  const eqArrays = function(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i=0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) return false;
    
    }
    return true;
    
    };
    const without = function(source, itemsToRemove) {
      let newArray = [];
      for (let i = 0; i < source.length; i++) {
        if (itemsToRemove.includes(source[i])) continue;
        newArray.push(source[i]);
      }
      return newArray;
    };
    
    // assertArraysEqual(without([1, 2, 3], [1]),[2, 3])
    // assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])
    //without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
    //const words = ["hello", "world", "lighthouse"];without(words, ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function



