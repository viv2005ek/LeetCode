/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const sample = "123456789";
    const result = [];
    
    const minLen = low.toString().length;
    const maxLen = high.toString().length;
    
    // Iterate through all possible lengths of sequential digits
    for (let len = minLen; len <= maxLen; len++) {
        // Sliding window to extract substrings of current length
        for (let start = 0; start <= 9 - len; start++) {
            const num = parseInt(sample.substring(start, start + len));
            
            // Check if the generated number falls within the range
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }
    
    return result;
};
