/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;

    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        // Build histogram
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }

        // Solve histogram
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    heights.push(0); // flush

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

    heights.pop(); // cleanup

    return maxArea;
}