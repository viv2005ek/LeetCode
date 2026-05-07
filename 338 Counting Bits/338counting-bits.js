/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

    const ans = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {

        // right shift removes last bit
        // (i & 1) checks if last bit is 1
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
};