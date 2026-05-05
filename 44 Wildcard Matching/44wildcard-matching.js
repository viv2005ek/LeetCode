/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0; // pointer for s
    let j = 0; // pointer for p
    let starIdx = -1;
    let matchIdx =0;

    while (i < s.length) {
        // Case 1: exact match or '?'
        if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
            i++;
            j++;
        }
        // Case 2: '*' found
        else if (j < p.length && p[j] === '*') {
            starIdx = j;
            matchIdx = i;
            j++;
        }
        // Case 3: mismatch but we had a '*'
        else if (starIdx !== -1) {
            j = starIdx + 1;
            matchIdx++;
            i = matchIdx;
        }
        // Case 4: mismatch and no '*'
        else {
            return false;
        }
    }

    // remaining pattern must be all '*'
    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j == p.length;
};