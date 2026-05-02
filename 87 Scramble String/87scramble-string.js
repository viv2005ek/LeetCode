/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    const memo = new Map();

    function dfs(a, b) {
        let key = a + "#" + b;
        if (memo.has(key)) return memo.get(key);

        // Base case
        if (a === b) {
            memo.set(key, true);
            return true;
        }

        // Prune: frequency check
        let count = new Array(26).fill(0);
        for (let i = 0; i < a.length; i++) {
            count[a.charCodeAt(i) - 97]++;
            count[b.charCodeAt(i) - 97]--;
        }
        if (count.some(c => c !== 0)) {
            memo.set(key, false);
            return false;
        }

        let n = a.length;

        // Try all splits
        for (let k = 1; k < n; k++) {
            // No swap
            if (dfs(a.slice(0, k), b.slice(0, k)) &&
                dfs(a.slice(k), b.slice(k))) {
                memo.set(key, true);
                return true;
            }

            // Swap
            if (dfs(a.slice(0, k), b.slice(n - k)) &&
                dfs(a.slice(k), b.slice(0, n - k))) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return dfs(s1, s2);
};