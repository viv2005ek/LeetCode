/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    const n = nums.length;

    // sum of numbers from 0 to n
    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;

    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};