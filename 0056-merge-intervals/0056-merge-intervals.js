/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

        // Overlapping
        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
        } 
        // Not overlapping
        else {
            result.push(current);
            current = next;
        }
    }

    result.push(current);

    return result;
};