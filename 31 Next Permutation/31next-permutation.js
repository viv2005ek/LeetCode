/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
      let n = nums.length;

    // 1) find pivot
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    // 2) if pivot exists, find successor and swap
    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 3) reverse suffix
    reverse(nums, i + 1, n - 1);
};

function reverse(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
};