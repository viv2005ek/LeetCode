/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;

    let sum = 0;
    let F = 0;

    // Compute total sum and F(0)
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        F += i * nums[i];
    }

    let ans = F;

    // Use recurrence
    for (let k = 1; k < n; k++) {
        F = F + sum - n * nums[n - k];
        ans = Math.max(ans, F);
    }

    return ans;
};