/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const MOD = 1e9 + 7;
    let m = grid.length, n = grid[0].length;

    let maxDP = Array.from({ length: m }, () => Array(n).fill(0));
    let minDP = Array.from({ length: m }, () => Array(n).fill(0));

    maxDP[0][0] = minDP[0][0] = grid[0][0];

    // first row
    for (let j = 1; j < n; j++) {
        maxDP[0][j] = minDP[0][j] = maxDP[0][j - 1] * grid[0][j];
    }

    // first column
    for (let i = 1; i < m; i++) {
        maxDP[i][0] = minDP[i][0] = maxDP[i - 1][0] * grid[i][0];
    }

    // fill DP
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let val = grid[i][j];

            let candidates = [
                maxDP[i - 1][j] * val,
                minDP[i - 1][j] * val,
                maxDP[i][j - 1] * val,
                minDP[i][j - 1] * val
            ];

            maxDP[i][j] = Math.max(...candidates);
            minDP[i][j] = Math.min(...candidates);
        }
    }

    let result = maxDP[m - 1][n - 1];

    if (result < 0) return -1;
    return result % MOD;
};