/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let mn = Infinity, mx = -Infinity;
    for (const x of nums) {
        mn = Math.min(mn, x);
        mx = Math.max(mx, x);
    }
    return (mx - mn) * k;
};