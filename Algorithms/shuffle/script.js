/*
The Fisher–Yates shuffle is an algorithm for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence. The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The algorithm produces an unbiased permutation: every permutation is equally likely. 
The modern version of the algorithm is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place.
Params: Array of values.
Output: Array shuffled.
*/

const shuffle = (arr) => {
    const remaining = [...arr];
    const result= [];

    for (let i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * remaining.length);
        result.push(remaining[random]);
        remaining.splice(random, 1);
    }


    return result;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(shuffle(sortedArray));