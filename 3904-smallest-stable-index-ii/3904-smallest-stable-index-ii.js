/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
   let n = nums.length;
  let max= nums[0];
  let minDP=[];
  let min=Infinity;
  for(let i =0;i<n;i++){
if(min>nums[n-i-1]){
min=nums[n-i-1];

}
  minDP[n-i-1]=min;
    }
 console.log(minDP);
    for(let i =0;i<n;i++){
if(max<nums[i]){
    max=nums[i];
}
if(max-minDP[i]<=k){
    return i;
}
  
    }
    return -1;   
};