/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const gcd = (a, b) => {
        while (b !== 0) {
            let t = a % b;
            a = b;
            b = t;
        }
        return a;
    };

    const prefixGcd = [];
    let mx = 0;

    for (const x of nums) {
        if (x > mx) mx = x;
        prefixGcd.push(gcd(x, mx));
    }

    prefixGcd.sort((a, b) => a - b);

    let ans = 0;
    let l = 0, r = prefixGcd.length - 1;

    while (l < r) {
        ans += gcd(prefixGcd[l], prefixGcd[r]);
        l++;
        r--;
    }

    return ans;
};