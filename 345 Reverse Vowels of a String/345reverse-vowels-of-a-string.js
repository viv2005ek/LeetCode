/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    const vowels = new Set([
        'a','e','i','o','u',
        'A','E','I','O','U'
    ]);

    let arr = s.split('');

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        // move left until vowel
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }

        // move right until vowel
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }

        // swap vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join('');
};