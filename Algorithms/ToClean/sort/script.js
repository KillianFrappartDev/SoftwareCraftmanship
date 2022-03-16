/*
==> Sort an array of integer.
Params: array of integers.
Output: Sorted array.
*/


function sort(arr) {
  const newArray = [...arr];

  for (let outer = 0; outer < newArray.length; outer++) {
    let outerEl = newArray[outer];

    for (let inner = outer + 1; inner < newArray.length; inner++) {
      let innerEl = newArray[inner];

      if (outerEl > innerEl) {
        newArray[inner] = outerEl;
        newArray[outer] = innerEl;

        outerEl = newArray[outer];
        innerEl = newArray[inner];

      }
    }
  }
  return newArray;
}

const unsortedOne = [5, 8, -9, 12, 2];
const unsortedTwo = [50, -8, -91, 212, -42];

console.log(sort(unsortedOne));
console.log(sort(unsortedTwo));

