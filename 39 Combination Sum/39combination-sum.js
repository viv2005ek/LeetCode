/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let result = [];
    let sum = 0;
    let temp = [];
    let solve = (i, temp, sum) => {
        if (sum == target) {
            result.push([...temp]);
            return
        }
        if (sum > target || i >= candidates.length) {
            return
        }

        solve(i + 1, temp, sum);
        temp.push(candidates[i]);
        solve(i , temp, sum + candidates[i]);
        temp.pop();



    }
    solve(0, temp, 0);
    return result;
};