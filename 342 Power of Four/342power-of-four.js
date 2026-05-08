/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {

    // must be:
    // 1. positive
    // 2. power of 2
    // 3. set bit at even position

    return (
        n > 0 &&
        (n & (n - 1)) === 0 &&
        (n & 0x55555555) !== 0
    );
};