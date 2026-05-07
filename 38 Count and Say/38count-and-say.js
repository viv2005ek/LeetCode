/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = "1";

    for (let i = 2; i <= n; i++) {

        let temp = "";
        let count = 1;

        for (let j = 1; j <= s.length; j++) {

            if (s[j] === s[j - 1]) {
                count++;
            } else {
                temp += count.toString() + s[j - 1];
                count = 1;
            }
        }

        s = temp;
    }

    return s;
};