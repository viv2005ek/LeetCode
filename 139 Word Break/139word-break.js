/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    const set = new Set(wordDict);
    const n = s.length;

    // dp[i] => can we form substring s[0...i-1]
    const dp = Array(n + 1).fill(false);

    dp[0] = true;

    for (let i = 1; i <= n; i++) {

        for (let j = 0; j < i; j++) {

            // if left part is valid
            // and current substring exists in dictionary
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};