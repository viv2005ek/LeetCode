/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    // largest power of 3 within 32-bit signed integer
    const MAX_POWER_OF_3 = Math.pow(3,19); // 3^19

    return n > 0 && MAX_POWER_OF_3 % n === 0;
};