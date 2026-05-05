/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;

    for (let char of columnTitle) {
        let value = char.charCodeAt(0) - 64; // 'A' = 65 → 1
        result = result * 26 + value;
    }

    return result;
};