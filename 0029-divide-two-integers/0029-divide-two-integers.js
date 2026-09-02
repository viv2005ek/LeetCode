/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    // Overflow case
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let negative = (dividend < 0) !== (divisor < 0);

    // Work with positive values
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let quotient = 0;

    while (a >= b) {

        let value = b;
        let count = 1;

        // Double the divisor while possible
        while (value + value <= a) {
            value += value;
            count += count;
        }

        a -= value;
        quotient += count;
    }

    return negative ? -quotient : quotient;
};