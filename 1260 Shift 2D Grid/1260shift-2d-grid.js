/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let total = m * n;

    k %= total;

    let ans = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let idx = i * n + j;
            let newIdx = (idx + k) % total;

            let r = Math.floor(newIdx / n);
            let c = newIdx % n;

            ans[r][c] = grid[i][j];
        }
    }

    return ans;
};