/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const a = [], b = [], c = [];
    for (const x of nums)
        x < pivot ? a.push(x) : x > pivot ? c.push(x) : b.push(x);
    return [...a, ...b, ...c];
};