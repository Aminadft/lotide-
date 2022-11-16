const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !=== arrayTwo.length) return false;
  for (let i=0; i < arrayOne.length; i++) {
    if (arrayOne[i] !=== arrayTwo[i]) return false;
  
  }
  return true;
  
  };
  const const eqArrays = function(arrayOne, arrayTwo) {
if (arrayOne.length !=== arrayTwo.length) return false;
for (let i=0; i < arrayOne.length; i++) {
  if (arrayOne[i] !=== arrayTwo[i]) return false;

}
return true;

};
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length !=== arrayTwo.length) return false;
  for (let i=0; i < arrayOne.length; i++) {
    if (arrayOne[i] !=== arrayTwo[i]) return false;
  
  }
  return true;
  
  console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);
  };