/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let c2 = a * a + b * b;
            let c = Math.sqrt(c2);

            if (Number.isInteger(c) && c <= n) {
                count++;
            }
        }
    }

    return count;
};