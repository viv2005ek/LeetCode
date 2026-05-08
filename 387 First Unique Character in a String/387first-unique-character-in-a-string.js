/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    const freq = new Map();

    // count frequencies
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    // find first unique character
    for (let i = 0; i < s.length; i++) {

        if (freq.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};