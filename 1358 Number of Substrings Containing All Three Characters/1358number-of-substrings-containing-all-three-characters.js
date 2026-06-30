/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    // Track the last seen index of 'a', 'b', and 'c'
    let lastSeen = { 'a': -1, 'b': -1, 'c': -1 };
    let count = 0;
    
    for (let right = 0; right < s.length; right++) {
        // Update the position of the current character
        lastSeen[s[right]] = right;
        
        // If we have seen all three characters at least once
        if (lastSeen['a'] !== -1 && lastSeen['b'] !== -1 && lastSeen['c'] !== -1) {
            // The number of valid substrings ending at 'right' is equal to 
            // 1 + the minimum index among the three characters
            let minIndex = Math.min(lastSeen['a'], lastSeen['b'], lastSeen['c']);
            count += minIndex + 1;
        }
    }
    
    return count;
};