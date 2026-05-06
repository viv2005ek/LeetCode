/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    const invalid = new Set(['3', '4', '7']);
    const changed = new Set(['2', '5', '6', '9']);

    let count = 0;

    for (let num = 1; num <= n; num++) {
        let s = String(num);

        let isValid = true;
        let isGood = false;

        for (let ch of s) {
            if (invalid.has(ch)) {
                isValid = false;
                break;
            }

            if (changed.has(ch)) {
                isGood = true;
            }
        }

        if (isValid && isGood) {
            count++;
        }
    }

    return count;
};