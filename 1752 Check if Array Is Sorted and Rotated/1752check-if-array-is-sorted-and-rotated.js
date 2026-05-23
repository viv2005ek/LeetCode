/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let change =0;
    for (let i =0; i<nums.length;i++){
if(nums[i]>nums[(i+1)%(nums.length)]){
change++;
}
    }
    return change>1 ? false : true;
};