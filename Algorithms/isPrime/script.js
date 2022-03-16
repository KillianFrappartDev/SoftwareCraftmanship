/*
==> Is it a prime number ? Only divisible by itself.
Params: Integer.
Output: True/False.
*/


function isPrime(n) {

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    };
  };
  return true;
};

console.log(Math.sqrt(15));


console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(15));
console.log(isPrime(23));

