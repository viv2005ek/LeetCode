/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
      let stack = [];
    let maxArea = 0;

    heights.push(0); // force flush

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let width = stack.length === 0 
                ? i 
                : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, h * width);
        }
        stack.push(i);
    }

    return maxArea;
};