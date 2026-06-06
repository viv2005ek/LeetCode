/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }
    
    let leftSum = 0;
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        // rightSum for the current element is totalSum minus leftSum minus the element itself
        let rightSum = totalSum - leftSum - nums[i];
        
        // Push the absolute difference into the result array
        result.push(Math.abs(leftSum - rightSum));
        
        // Update leftSum for the next element
        leftSum += nums[i];
    }
    
    return result;
};
