/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] <= n &&
            nums[i] !== nums[nums[i] - 1]
        ) {
            let correctIdx = nums[i] - 1;
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return n + 1;
};