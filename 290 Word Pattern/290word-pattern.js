/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    const words = s.split(" ");

    // lengths must match
    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {

        const ch = pattern[i];
        const word = words[i];

        // existing mapping mismatch
        if (
            (charToWord.has(ch) && charToWord.get(ch) !== word) ||
            (wordToChar.has(word) && wordToChar.get(word) !== ch)
        ) {
            return false;
        }

        charToWord.set(ch, word);
        wordToChar.set(word, ch);
    }

    return true;
};