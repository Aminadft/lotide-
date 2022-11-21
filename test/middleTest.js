const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
//middle([1, 2, 3]) // => [2]
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
};