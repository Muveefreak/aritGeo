const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('Arithmetic or Geometric sequence', function () {
    describe('handle valid input', function () {
        it('should return 1,2,3,4 as an arithmetic sequence', function () {
            assert.equal(myApp.aritGeo([1, 2, 3, 4]), 'arithmetic')
        });
        it('should return 10,8,6,4 as an arithmetic sequence', function () {
            assert.equal(myApp.aritGeo([10,8,6,4]), 'arithmetic')
        });
        it('should return -1,-2,-3,-4 as an arithmetic sequence', function () {
            assert.equal(myApp.aritGeo([-1, -2, -3, -4]), 'arithmetic')
        });
        it('should return 2,6,18,54 as a geometric sequence', function () {
            assert.equal(myApp.aritGeo([2, 6, 18, 54]), 'geometric')
        });
        it('should return 2,6,18,54 as a geometric sequence', function () {
            assert.equal(myApp.aritGeo([54, 18, 6, 2]), 'geometric')
        });
        it('should return 1,1,1,1 as an arithmetic sequence', function () {
            assert.equal(myApp.aritGeo([1, 1, 1, 1, 1]), "arithmetic")
        });
    });

    describe('handle invalid input', function () {
        it('should return demo as not an array', function () {
            assert.equal(myApp.aritGeo('demo'), '-1')
        });
        it('should return array as empty', function () {
            assert.equal(myApp.aritGeo([]), '0')
        });
        it("should return One value in array", function () {
            assert.equal(myApp.aritGeo([2]), "-1")
        });
        it('should return neither arith nor geo progression', function () {
            assert.equal(myApp.aritGeo([1, 2, 3, 9, 10]), "-1")
        });
    });

});