"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Factorial of a number is the multiple of the number itself and all its
 * predecessors.
 *
 * Time Compexity: 0(n)
 *
 * @param {Number} number
 * @returns {Number} Factorial of provided integer
 */
var factorial = function (n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1);
};
var strict_1 = __importDefault(require("assert/strict"));
describe("Test suite for the Factorial algorithm", function () {
    it("Should return the factorial of 3", function () {
        strict_1.default.deepStrictEqual(factorial(3), 6);
    });
    it("Should return the factorial of 4", function () {
        strict_1.default.deepStrictEqual(factorial(4), 24);
    });
    it("Should return the factorial of 5", function () {
        strict_1.default.deepStrictEqual(factorial(5), 120);
    });
});
