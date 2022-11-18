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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
