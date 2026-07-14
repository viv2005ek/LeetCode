/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    const MAX = 200;

    // precompute gcd transitions
    const nxt = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));

    const gcd = (a, b) => {
        while (b !== 0) {
            let t = a % b;
            a = b;
            b = t;
        }
        return a;
    };

    for (let g = 0; g <= MAX; g++) {
        for (let v = 1; v <= MAX; v++) {
            nxt[g][v] = (g === 0) ? v : gcd(g, v);
        }
    }

    let dp = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));
    dp[0][0] = 1;

    for (const x of nums) {
        let ndp = Array.from({ length: MAX + 1 }, () => Array(MAX + 1).fill(0));

        for (let g1 = 0; g1 <= MAX; g1++) {
            for (let g2 = 0; g2 <= MAX; g2++) {
                const cur = dp[g1][g2];
                if (cur === 0) continue;

                // Skip
                ndp[g1][g2] = (ndp[g1][g2] + cur) % MOD;

                // Put into seq1
                const ng1 = nxt[g1][x];
                ndp[ng1][g2] = (ndp[ng1][g2] + cur) % MOD;

                // Put into seq2
                const ng2 = nxt[g2][x];
                ndp[g1][ng2] = (ndp[g1][ng2] + cur) % MOD;
            }
        }

        dp = ndp;
    }

    let ans = 0;
    for (let g = 1; g <= MAX; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }

    return ans;
};