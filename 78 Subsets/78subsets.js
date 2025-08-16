/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    result=[];

    function solve(start,curr){
result.push([...curr]);
for(let i=start;i<nums.length;i++){
    curr.push(nums[i]);
    solve(i+1,curr);
    curr.pop()
}
    }
    solve(0,[]);
    return result;
};