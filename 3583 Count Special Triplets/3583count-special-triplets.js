/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    const MOD = 1e9 + 7;

    let right = new Map();
    for (let num of nums) {
        right.set(num, (right.get(num) || 0) + 1);
    }

    let left = new Map();
    let result = 0;

    for (let j = 0; j < nums.length; j++) {
        // current j moves from right → left
        right.set(nums[j], right.get(nums[j]) - 1);

        let target = nums[j] * 2;

        let leftCount = left.get(target) || 0;
        let rightCount = right.get(target) || 0;

        result = (result + leftCount * rightCount) % MOD;

        // add current to left
        left.set(nums[j], (left.get(nums[j]) || 0) + 1);
    }

    return result;
};