/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    nums1.sort((a,b)=>a-b);
    nums2=nums1.map(num=>num%2);
   if(nums2[0]==1) return true;
   for(let num of nums2){
if(num==1)return false;
   }
   return true;
};