/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const present = new Set(nums);
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const missing = [];
    
    for (let num = min; num <= max; num++) {
        if (!present.has(num)) {
            missing.push(num);
        }
    }
    
    return missing;
};