/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let ans = 0;

    for (let num = num1; num <= num2; num++) {
        const s = String(num);

        for (let i = 1; i < s.length - 1; i++) {
            if (
                (s[i] > s[i - 1] && s[i] > s[i + 1]) ||
                (s[i] < s[i - 1] && s[i] < s[i + 1])
            ) {
                ans++;
            }
        }
    }

    return ans;
};