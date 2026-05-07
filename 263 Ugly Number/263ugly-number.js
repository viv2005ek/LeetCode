/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {

    if (n <= 0) return false;

    // remove all factors of 2
    while (n % 2 === 0) {
        n /= 2;
    }

    // remove all factors of 3
    while (n % 3 === 0) {
        n /= 3;
    }

    // remove all factors of 5
    while (n % 5 === 0) {
        n /= 5;
    }

    return n === 1;
};