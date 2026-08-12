/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let max=0;
    let left=0;
    let right=1;
    let local=1;
    let map=new Map();
    map.set(nums[0],1);
   while(right<nums.length){
    while(map.has(nums[right])&&map.get(nums[right])>=k){
       
        map.set(nums[left],map.get(nums[left])-1);
         left++;
        local--;
    }
map.set(nums[right],(map.get(nums[right])||0)+1);
local=right-left+1;
max=Math.max(max,local);
right++;
   }
   return Math.max(max,local);
};