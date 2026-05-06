/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let zeros = 0;

    // Count duplicatable zeros
    for (let num of arr) {
        if (num === 0) zeros++;
    }

    let i = n - 1;
    let j = n + zeros - 1;

    // Fill backwards
    while (i >= 0) {
        if (j < n) {
            arr[j] = arr[i];
        }

        if (arr[i] === 0) {
            j--;

            if (j < n) {
                arr[j] = 0;
            }
        }

        i--;
        j--;
    }
};