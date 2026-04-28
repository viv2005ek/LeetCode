/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1, ...nums2];
    // console.log(nums3);
    nums3=nums3.sort((a,b)=>a-b);
    let n = nums3.length;
    // console.log(n);
    if(n%2!=0){
        
        return nums3[n/2 - 0.5];
    }else{
        return 1/2*(nums3[n/2]+nums3[n/2 -1]);
    }
};