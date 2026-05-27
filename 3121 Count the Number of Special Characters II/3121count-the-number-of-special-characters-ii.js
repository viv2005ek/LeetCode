/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lastLower = new Array(26).fill(-1);
    let firstUpper = new Array(26).fill(Infinity);

    for (let i = 0; i < word.length; i++) {
        let ch = word[i];

        if (ch >= 'a' && ch <= 'z') {
            let idx = ch.charCodeAt(0) - 97;
            lastLower[idx] = i;
        } else {
            let idx = ch.charCodeAt(0) - 65;
            firstUpper[idx] = Math.min(firstUpper[idx], i);
        }
    }

    let count = 0;

    for (let i = 0; i < 26; i++) {
        // character exists in both lowercase and uppercase
        // and all lowercase letters appear before first uppercase
        if (
            lastLower[i] !== -1 &&
            firstUpper[i] !== Infinity &&
            lastLower[i] < firstUpper[i]
        ) {
            count++;
        }
    }

    return count;
};