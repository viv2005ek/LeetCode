/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let ans = 0;
    for (let s of patterns)
        if (word.includes(s)) ans++;
    return ans;
};