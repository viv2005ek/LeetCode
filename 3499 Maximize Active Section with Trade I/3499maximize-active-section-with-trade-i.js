/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let active = 0;
    for (const ch of s) {
        if (ch === '1') active++;
    }

    const t = "1" + s + "1";

    // Run-length encoding
    const runs = [];
    for (let i = 0; i < t.length; ) {
        let j = i;
        while (j < t.length && t[j] === t[i]) j++;
        runs.push([t[i], j - i]);
        i = j;
    }

    let ans = active;

    // Internal 1-runs surrounded by 0-runs
    for (let i = 1; i < runs.length - 1; i++) {
        if (
            runs[i][0] === '1' &&
            runs[i - 1][0] === '0' &&
            runs[i + 1][0] === '0'
        ) {
            ans = Math.max(ans, active + runs[i - 1][1] + runs[i + 1][1]);
        }
    }

    return ans;
};