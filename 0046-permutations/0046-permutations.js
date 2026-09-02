/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let current = [];
    let used = new Array(nums.length).fill(false);

    function backtrack() {
        // We have created one complete permutation
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            // Already used in this permutation
            if (used[i]) continue;

            // Choose
            current.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack();

            // Undo choice
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
};