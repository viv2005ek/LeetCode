/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    const ans = [];
    const n = nums.length;

    let i = 0;

    while (i < n) {

        let start = nums[i];

        // extend range while consecutive
        while (i + 1 < n && nums[i + 1] === nums[i] + 1) {
            i++;
        }

        let end = nums[i];

        // single number
        if (start === end) {
            ans.push(start.toString());
        } 
        // range
        else {
            ans.push(start + "->" + end);
        }

        i++;
    }

    return ans;
};