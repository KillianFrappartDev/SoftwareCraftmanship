"""
In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers.
Two sums that differ only in the order of their sum and are considered the same partition. 
For example, 4 can be partitioned in five distinct ways:
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

@param {Number} number
@returns {Array} Partition with all combination possible
"""
def partition(number):
    parts = set()
    parts.add((number, ))

    for index in range(1, number):
        for part in partition(number - index):
            new_part = sorted((index, ) + part)
            parts.add(tuple(new_part))

    return parts
