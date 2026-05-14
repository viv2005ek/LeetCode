/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n = Math.max(...nums);

    // length must be n + 1
    if (nums.length !== n + 1) return false;

    let freq = new Array(n + 1).fill(0);

    for (let num of nums) {
        if (num < 1 || num > n) return false;
        freq[num]++;
    }

    // 1 to n-1 should appear once
    for (let i = 1; i < n; i++) {
        if (freq[i] !== 1) return false;
    }

    // n should appear twice
    return freq[n] === 2;
};