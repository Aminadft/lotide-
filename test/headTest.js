const assert = require('chai').assert;
const head = require('../head');
//assertEqual(head([5,6,7]), 5);
describe("#head", () => {
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
});

//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(head([]), "Hello"); //undefined
//assertEqual(head(["Hello"]), "Hello");