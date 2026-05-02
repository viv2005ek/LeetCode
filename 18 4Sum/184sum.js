/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
      nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        // skip duplicates for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            // skip duplicates for j
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let l = j + 1;
            let r = n - 1;

            while (l < r) {
                let sum = nums[i] + nums[j] + nums[l] + nums[r];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);

                    // skip duplicates for l and r
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;

                    l++;
                    r--;
                } 
                else if (sum < target) {
                    l++;
                } 
                else {
                    r--;
                }
            }
        }
    }

    return res;
};