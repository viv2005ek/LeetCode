/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];

    function backtrack(start, path) {
        // If we have 4 segments
        if (path.length === 4) {
            if (start === s.length) {
                res.push(path.join('.'));
            }
            return;
        }

        // Prune: remaining chars must fit
        let remaining = s.length - start;
        let segmentsLeft = 4 - path.length;
        if (remaining < segmentsLeft || remaining > segmentsLeft * 3) return;

        // Try segments of length 1 to 3
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            let segment = s.substring(start, start + len);

            // Leading zero check
            if (segment.length > 1 && segment[0] === '0') continue;

            // Value check
            if (parseInt(segment) > 255) continue;

            path.push(segment);
            backtrack(start + len, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return res;
};