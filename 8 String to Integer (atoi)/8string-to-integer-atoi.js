/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;

    // 1. skip whitespace
    while (i < n && s[i] === ' ') i++;

    // 2. sign
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. read digits
    let result = 0;

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - 48;

        // 4. overflow check BEFORE adding
        if (
            result > Math.floor(2147483647 / 10) ||
            (result === Math.floor(2147483647 / 10) && digit > 7)
        ) {
            return sign === 1 ? 2147483647 : -2147483648;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};