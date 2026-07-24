/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const MAX = 2048;

    let dp = Array.from({ length: 4 }, () => new Uint8Array(MAX));
    dp[0][0] = 1;

    for (const v of nums) {
        let next = dp.map(arr => Uint8Array.from(arr));

        for (let used = 0; used <= 3; used++) {
            for (let x = 0; x < MAX; x++) {
                if (!dp[used][x]) continue;

                // Take current index once
                if (used + 1 <= 3)
                    next[used + 1][x ^ v] = 1;

                // Take current index twice
                if (used + 2 <= 3)
                    next[used + 2][x] = 1;

                // Take current index three times
                if (used + 3 <= 3)
                    next[used + 3][x ^ v] = 1;
            }
        }

        dp = next;
    }

    let ans = 0;
    for (let x = 0; x < MAX; x++) {
        if (dp[3][x]) ans++;
    }

    return ans;
};