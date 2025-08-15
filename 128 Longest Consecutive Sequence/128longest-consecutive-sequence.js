/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0)return 0;
    
    let max=1;
      let local=1;
    nums.sort((a,b)=>a-b);
    for(i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]) continue;
      
if(nums[i]==nums[i+1]-1){
local++;
}else{
    max=Math.max(max,local);
    local=1;
}
    }
    return max;
};