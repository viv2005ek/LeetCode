/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let res = [];

    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            res.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicate values at the same level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Because array is sorted
            if (candidates[i] > remaining) {
                break;
            }

            path.push(candidates[i]);

            // i + 1 => this element cannot be reused
            backtrack(i + 1, remaining - candidates[i], path);

            path.pop();
        }
    }

    backtrack(0, target, []);

    return res;
};