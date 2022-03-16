/*
Create an algorithm: that counts the maximum number of sweets you can buy, depending on how much money you have and the price of the sweets.

As inputs, you have a real number; money, which represents your budget, and another real number price which represents the unit price of the candy.

The expected output is an integer that represents the maximum number of sweets, that the price, and your money allows you to buy!

For example, if money is equal to 12.47 and price is equal to 1.14, the expected result will be 10 (because you can't buy 10.938596491 sweets!).

Use a loop to achieve this result. You are not allowed to use a method to round up for you.

If the money or price is less than or equal to zero, return 0.
*/

const count = (money, price) => {
  // Inputs validation
  if (money === 0 || price === 0) {
    return 0;
  }

  // Result variable
  let result = 0;

  // Money left variable
  let remaining = money;

  // Loop
  while (remaining >= price) {
    // For every iteration, we decrease remaining by the price once and we increase result by one
    remaining -= price;
    result++;
  }

  // Return the result
  return result;
};

console.log(count(10, 1.3));
console.log(count(12.4, 3.6));
