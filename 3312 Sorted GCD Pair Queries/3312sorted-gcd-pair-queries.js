/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const maxVal = Math.max(...nums);

    const freq = new Array(maxVal + 1).fill(0);
    for (const x of nums) freq[x]++;

    // exact[g] = number of pairs whose gcd is exactly g
    const exact = new Array(maxVal + 1).fill(0);

    for (let g = maxVal; g >= 1; g--) {
        let cnt = 0;

        for (let m = g; m <= maxVal; m += g) {
            cnt += freq[m];
        }

        let pairs = cnt * (cnt - 1) / 2;

        for (let m = g + g; m <= maxVal; m += g) {
            pairs -= exact[m];
        }

        exact[g] = pairs;
    }

    // Prefix counts of sorted gcdPairs
    const prefix = new Array(maxVal + 1).fill(0);
    for (let g = 1; g <= maxVal; g++) {
        prefix[g] = prefix[g - 1] + exact[g];
    }

    const ans = [];

    for (const q of queries) {
        let lo = 1, hi = maxVal;

        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (prefix[mid] > q) hi = mid;
            else lo = mid + 1;
        }

        ans.push(lo);
    }

    return ans;
};