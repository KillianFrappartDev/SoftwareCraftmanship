/**
 * The Factorial of a number is the multiple of the number itself and all its
 * predecessors.
 * 
 * Time Compexity: 0(n)
 * 
 * @param {Number} number 
 * @returns {Number} Factorial of provided integer
 */
const factorial = (n: number): number => {
  if (n === 1) {
    return n;
  }

  return n * factorial(n-1);
};

import assert from 'assert/strict';
describe("Test suite for the Factorial algorithm", () => {
  it(`Should return the factorial of 3`, () => {
      assert.deepStrictEqual(factorial(3), 6);
  })
  it(`Should return the factorial of 4`, () => {
      assert.deepStrictEqual(factorial(4), 24);
  })
  it(`Should return the factorial of 5`, () => {
      assert.deepStrictEqual(factorial(5), 120);
  })
})

