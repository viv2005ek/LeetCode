/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Binary search
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the middle element is greater than the rightmost element,
        // it means the smallest value must be to the right of mid.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the middle element is less than or equal to the rightmost element.
        // This means the smallest value is either at mid or to the left of mid.
        else {
            right = mid;
        }
    }

    // When left and right converge, they point to the minimum element
    return nums[left];
};