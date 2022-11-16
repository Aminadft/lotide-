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
    const middle = function(array) {
      let middleIndex = Math.floor(array.length/2);
      if (array.length < 3) return []; // One or two items, return empty
      if (array.length % 2 !== 0 return [array[middleIndex - 1], array[middleIndex]];
        return [array[middleIndex]];
};



    }

// assertArraysEqual = middle([1], []) ; // returns empty array as its a single item, has no middle
    //middle([1, 2, 3]) // => [2]
//middle([1, 2, 3, 4, 5]) // => [3] 
//middle([1, 2, 3, 4]) // => [2, 3]
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4] // returns value 3, 4 as middle as 1,2 are head and 5,6 tail as array length is even but multiple numbers so returns the two items as middle items