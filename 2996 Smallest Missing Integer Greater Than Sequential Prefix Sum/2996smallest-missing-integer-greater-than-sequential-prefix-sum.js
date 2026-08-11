/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    // 1. Find sum of longest sequential prefix
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }

    // 2. Put all numbers in a Set
    let set = new Set(nums);

    // 3. Find smallest missing number >= sum
    while (set.has(sum)) {
        sum++;
    }

    return sum;
};