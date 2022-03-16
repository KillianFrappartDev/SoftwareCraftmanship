/*
==> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
Params: Target Integer && multiples array
Output: Sum of all multiples.
*/

function sumMultiples(target, ...div) {
  const multiples = [];
  let sum = 0;

  for (let i = 1; i < target; i++) {
    for (const num of div) {
      if (i % num === 0) {
        multiples.push(i);
        break;
      }
    }
  }

  for (const num of multiples) {
    sum += num;
  }
  return sum;
}

const result = sumMultiples(1000, 3, 5);
console.log(result);
