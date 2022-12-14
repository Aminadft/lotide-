const takeUntil = function(array, callback) {
  const newArray = [];
  for (const element of array) {
    if (callback(element)) return newArray;
    newArray.push(element);
  }
  return newArray;
};
