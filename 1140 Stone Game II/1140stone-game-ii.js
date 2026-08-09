/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;

    // suffix[i] = sum of piles[i ... n-1]
    const suffix = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    // dp[i][M] = maximum stones current player can get
    // starting at i with current M
    const dp = Array.from(
        { length: n + 1 },
        () => new Array(n + 1).fill(0)
    );

    for (let i = n - 1; i >= 0; i--) {
        for (let M = 1; M <= n; M++) {

            // Can take all remaining piles
            if (2 * M >= n - i) {
                dp[i][M] = suffix[i];
                continue;
            }

            let best = 0;

            for (let X = 1; X <= 2 * M && i + X <= n; X++) {
                const opponent = dp[i + X][Math.max(M, X)];

                const currentPlayer =
                    suffix[i] - opponent;

                best = Math.max(best, currentPlayer);
            }

            dp[i][M] = best;
        }
    }

    return dp[0][1];
};