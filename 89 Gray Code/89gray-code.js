/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
       let result = [];
    let size = 1 << n; // 2^n

    for (let i = 0; i < size; i++) {
        result.push(i ^ (i >> 1));
    }

    return result;
};