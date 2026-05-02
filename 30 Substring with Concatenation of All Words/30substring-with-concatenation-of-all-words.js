/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    
    if (!s.length || !words.length) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;

    const freq = new Map();
    for (let w of words) {
        freq.set(w, (freq.get(w) || 0) + 1);
    }

    const result = [];

    // Try all offsets
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let window = new Map();
        let count = 0;

        while (right + wordLen <= s.length) {
            let word = s.substring(right, right + wordLen);
            right += wordLen;

            if (freq.has(word)) {
                window.set(word, (window.get(word) || 0) + 1);
                count++;

                // Too many of a word → shrink
                while (window.get(word) > freq.get(word)) {
                    let leftWord = s.substring(left, left + wordLen);
                    window.set(leftWord, window.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // Valid window
                if (count === wordCount) {
                    result.push(left);
                }
            } else {
                // Reset window
                window.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
};