/**
 * Is the given integer a prime number ?
 * 
 * Time Compexity: 0(sqrt(n))
 * 
 * @param {Number} num 
 * @returns {Boolean} Wheter it is a prime number or not.
 */
 const isPrime = (num: number): boolean => {
    const max = Math.sqrt(num);
    for (let current = 2; current <= max; current++) {
        if (!(num % current)) {
            return false;
        } 
    }
    
    return true;
  };
  
  import assert from 'assert/strict';
  describe("Test suite for the is prime algorithm", () => {
    it(`Should return true`, () => {
        assert.strictEqual(isPrime(2), true);
    })
    it(`Should return true`, () => {
        assert.strictEqual(isPrime(3), true);
    })
    it(`Should return true`, () => {
        assert.strictEqual(isPrime(5), true);
    })
    it(`Should return true`, () => {
        assert.strictEqual(isPrime(7), true);
    })
    it(`Should return true`, () => {
        assert.strictEqual(isPrime(11), true);
    })
    it(`Should return true`, () => {
        assert.strictEqual(isPrime(17), true);
    })
    it(`Should return false`, () => {
        assert.strictEqual(isPrime(4), false);
    })
    it(`Should return false`, () => {
        assert.strictEqual(isPrime(8), false);
    })
    it(`Should return false`, () => {
        assert.strictEqual(isPrime(9), false);
    })
    it(`Should return false`, () => {
        assert.strictEqual(isPrime(12), false);
    })
    it(`Should return false`, () => {
        assert.strictEqual(isPrime(15), false);
    })
  })
  
  