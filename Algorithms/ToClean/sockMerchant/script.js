/*
==> John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
Params: Number of socks && array of integers
Output: Number of pairs
*/

const sockMerchant = (total, arr) => {
    const pairs = [];
    const indexes = [];
    let current = 0;

    while (current < arr.length - 1) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`current: ${arr[current]} & i: ${arr[i]}`);
        if (arr[current] === arr[i]) {
            if (current !== i && !indexes.includes(current) && !indexes.includes(i)) {
                pairs.push(arr[current]);
                console.log(`push: ${arr[current]}`);
                indexes.push(current);
                indexes.push(i);
                current++;
            }
        }
    }
    current++;
}

    return pairs.length;
}

const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(9, array));