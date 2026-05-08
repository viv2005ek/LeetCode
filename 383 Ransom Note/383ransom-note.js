/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    const freq = new Map();

    // count magazine characters
    for (let ch of magazine) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    // use characters for ransomNote
    for (let ch of ransomNote) {

        if (!freq.has(ch) || freq.get(ch) === 0) {
            return false;
        }

        freq.set(ch, freq.get(ch) - 1);
    }

    return true;
};