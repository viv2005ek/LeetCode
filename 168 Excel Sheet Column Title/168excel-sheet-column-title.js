/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = "";

    while (columnNumber > 0) {
        columnNumber--; // adjust to 0-based

        let char = String.fromCharCode((columnNumber % 26) + 65);
        res = char + res;

        columnNumber = Math.floor(columnNumber / 26);
    }

    return res;
};