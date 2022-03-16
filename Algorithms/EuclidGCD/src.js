"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var findGCD = function (numA, numB) {
    for (var current = Math.min(numA, numB); current >= 1; current--) {
        if (!(numA % current || numB % current)) {
            return current;
        }
    }
};
var strict_1 = __importDefault(require("assert/strict"));
describe("Test suite for Euclid greatest common divisor algorithm", function () {
    it("Should return the greatest commin divisor for 150 and 100", function () {
        strict_1.default.deepStrictEqual(findGCD(150, 100), 50);
    });
    it("Should return the greatest commin divisor for 100 and 300", function () {
        strict_1.default.deepStrictEqual(findGCD(100, 300), 100);
    });
    it("Should return the greatest commin divisor for 49 and 21", function () {
        strict_1.default.deepStrictEqual(findGCD(49, 21), 7);
    });
    it("Should return the greatest commin divisor for 49 and 21", function () {
        strict_1.default.deepStrictEqual(findGCD(1071, 462), 21);
    });
});
