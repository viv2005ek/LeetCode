/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if (n < 1000) return 0;

    if (n < 100000) {
        return n - 999;
    }

    // n = 100000
    return 99001 ;
};