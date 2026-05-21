/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let prefixes = new Set();

    // Store all prefixes of arr1 numbers
    for (let num of arr1) {
        let str = num.toString();

        for (let i = 1; i <= str.length; i++) {
            prefixes.add(str.slice(0, i));
        }
    }

    let ans = 0;

    // Check prefixes of arr2 numbers
    for (let num of arr2) {
        let str = num.toString();

        for (let i = 1; i <= str.length; i++) {
            let prefix = str.slice(0, i);

            if (prefixes.has(prefix)) {
                ans = Math.max(ans, i);
            }
        }
    }

    return ans;
};