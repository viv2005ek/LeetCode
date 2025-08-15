/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    if(sum==0)return true;
    if(sum%2!=0) return false;
    total=sum/2;
    let dp= new Array(total+1).fill(false);
    dp[0] = true;

for(num of nums){
    for(i=total;i>=num;i--){
        dp[i]=dp[i]||dp[i-num];
    }
}
return dp[total]
    };