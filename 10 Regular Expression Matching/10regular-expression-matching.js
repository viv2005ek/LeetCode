/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();

    function dfs(i, j) {
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        // pattern exhausted
        if (j === p.length) {
            return i === s.length;
        }

        // current char match?
        const firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === '.');

        let ans;

        // next char is '*'
        if (j + 1 < p.length && p[j + 1] === '*') {
            ans =
                dfs(i, j + 2) || // skip x*
                (firstMatch && dfs(i + 1, j)); // use x*
        } else {
            ans = firstMatch && dfs(i + 1, j + 1);
        }

        memo.set(key, ans);
        return ans;
    }

    return dfs(0, 0);
};