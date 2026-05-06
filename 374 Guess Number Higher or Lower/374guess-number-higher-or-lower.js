/**
 * Forward declaration of guess API.
 * guess(num)
 * returns:
 *   -1 if num is higher than the picked number
 *    1 if num is lower than the picked number
 *    0 if num is correct
 */

var guessNumber = function(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let res = guess(mid);

        if (res === 0) {
            return mid;
        } else if (res === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
};