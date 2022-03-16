/**
 * In set theory a Cartesian product is a mathematical operation that returns a set (or product set or simply product) from multiple sets.
 * That is, for sets A and B, the Cartesian product A × B is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.
 * 
 * Time Compexity: O(n²)
 * 
 * @param {Array} numbers 
 * @param {Array} chars 
 * @returns {Array} Product list of ordered pairs.
 */

const cartesian = (numbers: number[], chars: string[]) => {
    const result = [];
   
    for (const number of numbers) {
        for (const char of chars) {
            result.push(number + char);
        }
    }
   
    return result;
   }

import assert from 'assert/strict';
describe("Test suite for cartesian algorithm", () => {
    const numList = [1, 2, 3];
    const charList = ["x", "y", "z"];
    const answer = ["1x", "1y", "1z", "2x", "2y", "2z", "3x", "3y", "3z"];

    it("Should return an array with all ordered pairs", () => {
        assert.deepStrictEqual(cartesian(numList, charList), answer);
    })
})
   