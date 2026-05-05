/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n = n >>> 1; // unsigned shift
    }

    return result >> 0; // ensure unsigned
};