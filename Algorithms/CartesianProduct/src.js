"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartesian = function (numbers, chars) {
    var result = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        for (var _a = 0, chars_1 = chars; _a < chars_1.length; _a++) {
            var char = chars_1[_a];
            result.push(number + char);
        }
    }
    return result;
};
var strict_1 = __importDefault(require("assert/strict"));
describe("Test suite for cartesian algorithm", function () {
    var numList = [1, 2, 3];
    var charList = ["x", "y", "z"];
    var answer = ["1x", "1y", "1z", "2x", "2y", "2z", "3x", "3y", "3z"];
    it("Should return an array with all ordered pairs", function () {
        strict_1.default.deepStrictEqual(cartesian(numList, charList), answer);
    });
});
