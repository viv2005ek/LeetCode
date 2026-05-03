/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0;

    let next = 1;     // dp[i+1]
    let nextNext = 1; // dp[i+2]

    for (let i = s.length - 1; i >= 0; i--) {
        let curr = 0;

        // single digit
        if (s[i] !== '0') {
            curr = next;
        }

        // two digits
        if (
            i + 1 < s.length &&
            (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6'))
        ) {
            curr += nextNext;
        }

        nextNext = next;
        next = curr;
    }

    return next;
};