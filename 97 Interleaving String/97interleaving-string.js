/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;

    let m = s1.length, n = s2.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i > 0) {
                dp[i][j] = dp[i][j] || 
                    (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
            }
            if (j > 0) {
                dp[i][j] = dp[i][j] || 
                    (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
            }
        }
    }

    return dp[m][n];
};