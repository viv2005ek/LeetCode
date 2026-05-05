/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] >= leftMax) {
                leftMax = height[l];
            } else {
                water += leftMax - height[l];
            }
            l++;
        } else {
            if (height[r] >= rightMax) {
                rightMax = height[r];
            } else {
                water += rightMax - height[r];
            }
            r--;
        }
    }

    return water;
};