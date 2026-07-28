/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let left = [];
    let mid = "";

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) {
            mid = String.fromCharCode(97 + i);
        }

        left.push(String.fromCharCode(97 + i).repeat(Math.floor(freq[i] / 2)));
    }

    left = left.join("");
    const right = left.split("").reverse().join("");

    return left + mid + right;
};