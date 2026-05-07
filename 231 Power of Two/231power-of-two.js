/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    // power of 2 has exactly one set bit
    return n > 0 && (n & (n - 1)) === 0;
};