/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    const n = nums.length;

    const prefixMax = Array(n);
    const suffixMin = Array(n);

    prefixMax[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    }

    suffixMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
    }

    const ans = Array(n);

    let start = 0;

    for (let i = 0; i < n - 1; i++) {

        // If:
        // max(left) <= min(right)
        // then NO inversion crosses this boundary
        // => split component here
        if (prefixMax[i] <= suffixMin[i + 1]) {

            let mx = -Infinity;

            for (let j = start; j <= i; j++) {
                mx = Math.max(mx, nums[j]);
            }

            for (let j = start; j <= i; j++) {
                ans[j] = mx;
            }

            start = i + 1;
        }
    }

    // last component
    let mx = -Infinity;

    for (let j = start; j < n; j++) {
        mx = Math.max(mx, nums[j]);
    }

    for (let j = start; j < n; j++) {
        ans[j] = mx;
    }

    return ans;
};