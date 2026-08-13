/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res;
    let count=0;
    let map = new Map();
    for(let num of nums){
       map.set(num,(map.get(num)||0)+1);
    }
    for(let [key,value] of map){
        if(value>=nums.length/2){
            return key;
        }
    }

};