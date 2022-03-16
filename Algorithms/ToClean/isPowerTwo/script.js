/*
==> Is a number power of two ?
Params: Integer.
Output: True/False.
*/

function isPowerTwo(n) {
    if (n < 1) {
        return false;
    }

    let num = n;
  while(num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        return false;
      }
  }  
  return true;
};

console.log(isPowerTwo(8));

function improved(n) {
    if (n < 1) {
        return false;
    };

    return (n & (n - 1)) === 0;
}
console.log(improved(8));
