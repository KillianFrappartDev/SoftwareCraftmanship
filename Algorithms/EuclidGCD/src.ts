/**
 * In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the greatest common divisor (GCD)
 * of two numbers, the largest number that divides both of them without leaving a remainder.
 * 
 * Time Compexity: O(log n)
 * 
 * @param {Number} numA 
 * @param {Number} numB 
 * @returns {Number} Greatest common divisor
 */
const findGCD = (numA: number, numB: number) => {
  for (let current = Math.min(numA, numB); current >= 1; current--) {
    if (!(numA % current || numB % current)) {
      return current;
    }
  }
}

import assert from 'assert/strict';
describe("Test suite for Euclid greatest common divisor algorithm", () => {
  it(`Should return the greatest commin divisor for 150 and 100`, () => {
      assert.deepStrictEqual(findGCD(150, 100), 50);
  })
  it(`Should return the greatest commin divisor for 100 and 300`, () => {
      assert.deepStrictEqual(findGCD(100, 300), 100);
  })
  it(`Should return the greatest commin divisor for 49 and 21`, () => {
      assert.deepStrictEqual(findGCD(49, 21), 7);
  })
  it(`Should return the greatest commin divisor for 49 and 21`, () => {
      assert.deepStrictEqual(findGCD(1071, 462), 21);
  })
})
