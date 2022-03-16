/*
==> Find the smallest number of an array;
Params: Array of integers.
Output: Smallest number.
*/


function minNum(numbers) {
    numbers.sort(function(a, b){
        return a - b;
    });
    return numbers[0];
}

console.log(minNum([1, 2, 4]));
console.log(minNum([400, 2, 10]));
console.log(minNum([9, 8, 7, 6, 5]));

