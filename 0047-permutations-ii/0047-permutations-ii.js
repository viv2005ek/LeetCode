/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);

    let result = [];
    let current = [];
    let used = new Array(nums.length).fill(false);

    function backtrack() {

        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            // Already used
            if (used[i]) continue;

            // Skip duplicate choices at the same level
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue;
            }

            // Choose
            current.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack();

            // Undo
            current.pop();
            used[i] = false;
        }
    }

    backtrack();

    return result;
};