/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    const used = new Set();

    for (let num of nums) {

        // skip duplicates
        if (used.has(num)) continue;

        used.add(num);

        if (num > first) {

            third = second;
            second = first;
            first = num;

        } else if (num > second) {

            third = second;
            second = num;

        } else if (num > third) {

            third = num;
        }
    }

    // if third distinct max doesn't exist
    return used.size < 3 ? first : third;
};