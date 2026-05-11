/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = [];

    for (let num of nums) {
        let digits = num.toString();

        for (let ch of digits) {
            ans.push(Number(ch));
        }
    }

    return ans;
};