/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result=[];
    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length-2;i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
       let left=i+1;
       let right=nums.length-1;
        while(left<right){
            sum=nums[i]+nums[left]+nums[right];
            if(sum==0){
                tempRes=[nums[i],nums[left],nums[right]].sort((a,b)=>a-b);
                check=tempRes.join(",");
              
           
                    result.push(tempRes);
                    while(nums[left]==nums[left+1])left++;
                    while(nums[right]==nums[right-1])right--;
                    left++;
                    right--;
                }
            if (sum < 0) {
    left++;
} 
 if (sum > 0) {
    right--;
}
        }

    }
    return result;
};