/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let r = 0;
    let c = cols - 1;

    while (r < rows && c >= 0) {
        let val = matrix[r][c];

        if (val === target) {
            return true;
        } else if (val > target) {
            c--;
        } else {
            r++;
        }
    }

    return false;
};