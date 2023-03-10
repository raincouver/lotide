// test/assertEqualTest.js
// const expect = require('chai').expect;
const assert = require('chai').assert;
const middle = require('../middle');


// TEST CODE
describe("#middle", () => {
  it("returns [] for [1]", () => {
    let actual = middle([1]);
    let expected = middle([]);
    assert.deepEqual(actual, expected);
  });

  it("returns [] for [1, 2]", () => {
    let actual = middle([1,2]);
    let expected = [];
    assert.deepEqual(actual, expected);
  });

  it("returns [2] for [1,2,3]", () => {
    let actual = middle([1,2,3]);
    let expected = [2];
    assert.deepEqual(actual, expected);
  });

  it("returns [2, 3] for [1,2,3]", () => {
    let actual = middle([1,2,3,4]);
    let expected = [2,3];
    assert.deepEqual(actual, expected);
  });

  it("returns [3] for [1,2,3,4,5]", () => {
    let actual = middle([1,2,3,4,5]);
    let expected = [3];
    assert.deepEqual(actual, expected);
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    let actual = middle([1,2,3,4,5,6]);
    let expected = [3,4];
    assert.deepEqual(actual, expected);
  });
});