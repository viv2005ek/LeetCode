/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Step 2: The first element must always be 1
    arr[0] = 1;
    
    // Step 3: Ensure adjacent elements differ by at most 1
    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.min(arr[i], arr[i - 1] + 1);
    }
    
    // Step 4: The last element will be the maximum possible value
    return arr[arr.length - 1];
};
