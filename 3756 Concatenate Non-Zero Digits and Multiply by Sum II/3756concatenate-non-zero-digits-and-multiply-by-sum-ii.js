/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
    const MOD = 1000000007n;

    const pos = [];
    const digit = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '0') {
            pos.push(i);
            digit.push(BigInt(s.charCodeAt(i) - 48));
        }
    }

    const n = digit.length;

    const pow10 = new Array(n + 1).fill(0n);
    pow10[0] = 1n;
    for (let i = 1; i <= n; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }

    const prefNum = new Array(n + 1).fill(0n);
    const prefSum = new Array(n + 1).fill(0n);

    for (let i = 0; i < n; i++) {
        prefNum[i + 1] = (prefNum[i] * 10n + digit[i]) % MOD;
        prefSum[i + 1] = prefSum[i] + digit[i];
    }

    function lowerBound(x) {
        let l = 0, r = n;
        while (l < r) {
            const m = (l + r) >> 1;
            if (pos[m] < x) l = m + 1;
            else r = m;
        }
        return l;
    }

    function upperBound(x) {
        let l = 0, r = n;
        while (l < r) {
            const m = (l + r) >> 1;
            if (pos[m] <= x) l = m + 1;
            else r = m;
        }
        return l;
    }

    const ans = [];

    for (const [l, r] of queries) {
        const L = lowerBound(l);
        const R = upperBound(r) - 1;

        if (L > R) {
            ans.push(0);
            continue;
        }

        const len = R - L + 1;

        let x = (prefNum[R + 1] - (prefNum[L] * pow10[len]) % MOD + MOD) % MOD;
        let sum = prefSum[R + 1] - prefSum[L];

        ans.push(Number((x * sum) % MOD));
    }

    return ans;
};