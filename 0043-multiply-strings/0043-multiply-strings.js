/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let res = new Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {

            let a = num1.charCodeAt(i) - 48;
            let b = num2.charCodeAt(j) - 48;

            let product = a * b;

            let pos1 = i + j;
            let pos2 = i + j + 1;

            let sum = product + res[pos2];

            res[pos2] = sum % 10;
            res[pos1] += Math.floor(sum / 10);
        }
    }

    return res.join("").replace(/^0+/, "");
};