/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i =0;
    let j =0;
    let n = nums1.length;
    let m = nums2.length;
    while(i<n&&j<m){
        if(nums1[i]==nums2[j]){
            return nums1[i];
        }
        else if(nums1[i]>nums2[j]){
            j++;
        }else{
            i++
        }
    }
    return -1
};