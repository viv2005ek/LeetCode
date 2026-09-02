/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {

        // Farthest position reachable from the current range
        farthest = Math.max(farthest, i + nums[i]);

        // We have reached the end of the current jump's range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};