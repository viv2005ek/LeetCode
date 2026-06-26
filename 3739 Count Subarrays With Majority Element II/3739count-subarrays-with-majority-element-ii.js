/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    const size = 2 * n + 5;
    const offset = n + 2;

    const bit = new Array(size + 1).fill(0);

    function update(idx, val) {
        while (idx <= size) {
            bit[idx] += val;
            idx += idx & -idx;
        }
    }

    function query(idx) {
        let res = 0;
        while (idx > 0) {
            res += bit[idx];
            idx -= idx & -idx;
        }
        return res;
    }

    let prefix = 0;
    let ans = 0;

    update(prefix + offset, 1);

    for (const x of nums) {
        if (x === target) {
            prefix++;
        } else {
            prefix--;
        }

        ans += query(prefix + offset - 1);
        update(prefix + offset, 1);
    }

    return ans;
};