/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const n = mat.length;

    function rotate(matrix) {
        // transpose
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }

        // reverse rows
        for (let i = 0; i < n; i++) {
            matrix[i].reverse();
        }
    }

    function isEqual(a, b) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (a[i][j] !== b[i][j]) return false;
            }
        }
        return true;
    }

    for (let k = 0; k < 4; k++) {
        if (isEqual(mat, target)) return true;
        rotate(mat);
    }

    return false;
};