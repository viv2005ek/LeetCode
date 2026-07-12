/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    // Get unique elements and sort them
    const sorted = [...new Set(arr)].sort((a, b) => a - b);

    // Map each value to its rank
    const rank = new Map();
    for (let i = 0; i < sorted.length; i++) {
        rank.set(sorted[i], i + 1);
    }

    // Replace each element with its rank
    return arr.map(num => rank.get(num));
};