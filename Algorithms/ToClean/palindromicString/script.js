/*
==> Check if a string can be read the some from both side.
Params: String.
Output: Bool.
*/

const check = (str) => {
  const reversedStr = str.split('').reverse().join('');

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(check('hello'));
console.log(check('eye'));
