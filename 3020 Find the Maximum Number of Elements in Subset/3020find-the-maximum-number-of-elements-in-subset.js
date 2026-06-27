/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const freq = new Map();

    for (const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let ans = 1;

    if (freq.has(1)) {
        let c = freq.get(1);
        ans = c % 2 === 0 ? c - 1 : c;
    }

    for (const [start] of freq) {
        if (start === 1) continue;

        let cur = start;
        let len = 0;

        while (true) {
            let c = freq.get(cur) || 0;

            if (c >= 2) {
                len += 2;

                if (cur > 31622) {
                    len--;
                    break;
                }

                cur = cur * cur;
            } else if (c === 1) {
                len++;
                break;
            } else {
                len--;
                break;
            }
        }

        ans = Math.max(ans, len);
    }

    return ans;
};