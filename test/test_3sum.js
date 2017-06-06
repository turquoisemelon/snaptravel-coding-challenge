var assert = require("chai").assert;
var threeSum = require("../lib/3sum");


describe("Array", function() {
  it("should start empty", function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });
});

describe("threeSum()", function() {
  it("should give a result array containing all unique triplets in the given array which gives the sum of zero", function() {
    var S = [-1, 0, 1, 2, -1, -4];
    var result = [ [ -1, -1, 2 ], [ -1, 0, 1 ] ];
    assert.equal(threeSum(S).join(), result.join());
  });
  it("should give a result array containing all unique triplets in the given array which gives the sum of zero", function() {
    var S = [-1, 0, -2, 2, -1, -5, 5];
    var result = [ [ -5, 0, 5 ], [ -2, 0, 2 ], [ -1, -1, 2 ] ];
    assert.equal(threeSum(S).join(), result.join());
  });
  it("should give a result array containing all unique triplets in the given array which gives the sum of zero", function() {
    var S = [-1, 0, -2, 2, -1, -5, 10, -10];
    var result = [ [ -10, 0, 10 ], [ -2, 0, 2 ], [ -1, -1, 2 ] ];
    assert.equal(threeSum(S).join(), result.join());
  });
  it("should give a result array containing all unique triplets in the given array which gives the sum of zero", function() {
    var S = [-1, 0, -2, 2, -1, -5, 10, -10, 3, -4];
    var result = [ [ -10, 0, 10 ], [ -5, 2, 3 ], [ -2, -1, 3 ], [ -2, 0, 2 ], [ -1, -1, 2 ] ]
    assert.equal(threeSum(S).join(), result.join());
  });
});