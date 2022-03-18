/**
 * Is the given integer is power of X.
 * 
 * Time Compexity: O(n)
 * 
 * @param {Number} num 
 * @param {Number} base 
 * @param {Number} pow Starts at 1 and increments recursively.
 * @returns {Boolean} Wheter it is or not power of two.
 */
const powerOf = (num: number, base: number, pow = 1): boolean => {
    if(base ** pow === num) return true;
    if(base ** pow > num) return false;
    return powerOf(num, base, pow + 1);
}

import assert from 'assert/strict';
describe("Test suite for power of X algorithm", () => {
    it("Should return true", () => {
        assert.strictEqual(powerOf(2, 2), true);
    })
    it("Should return true", () => {
        assert.strictEqual(powerOf(4, 2), true);
    })
    it("Should return true", () => {
        assert.strictEqual(powerOf(9, 3), true);
    })
    it("Should return true", () => {
        assert.strictEqual(powerOf(25, 5), true);
    })
    it("Should return true", () => {
        assert.strictEqual(powerOf(125, 5), true);
    })
    it("Should return true", () => {
        assert.strictEqual(powerOf(232630513987207, 7), true);
    })
    it("Should return false", () => {
        assert.strictEqual(powerOf(3404825448, 7), false);
    })
    it("Should return false", () => {
        assert.strictEqual(powerOf(21, 2), false);
    })
    it("Should return false", () => {
        assert.strictEqual(powerOf(77, 3), false);
    })
})
