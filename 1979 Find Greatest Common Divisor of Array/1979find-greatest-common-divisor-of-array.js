/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let mn = Math.min(...nums);
    let mx = Math.max(...nums);

    while (mx !== 0) {
        let temp = mx;
        mx = mn % mx;
        mn = temp;
    }

    return mn;
};