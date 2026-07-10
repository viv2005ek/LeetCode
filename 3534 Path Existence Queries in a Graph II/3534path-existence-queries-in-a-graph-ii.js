/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
    const arr = [];
    for (let i = 0; i < n; i++) arr.push([nums[i], i]);
    arr.sort((a, b) => a[0] - b[0]);

    const pos = new Array(n);
    const comp = new Array(n);

    // Sorted position of every original node + connected components
    let cid = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && arr[i][0] - arr[i - 1][0] > maxDiff) cid++;
        pos[arr[i][1]] = i;
        comp[i] = cid;
    }

    // next[i] = farthest sorted index reachable in one step
    const next = new Array(n);
    let r = 0;
    for (let i = 0; i < n; i++) {
        while (r + 1 < n && arr[r + 1][0] - arr[i][0] <= maxDiff) r++;
        next[i] = r;
    }

    const LOG = 17; // 2^17 > 1e5
    const up = Array.from({ length: LOG }, () => new Array(n));

    for (let i = 0; i < n; i++) up[0][i] = next[i];
    for (let k = 1; k < LOG; k++) {
        for (let i = 0; i < n; i++) {
            up[k][i] = up[k - 1][up[k - 1][i]];
        }
    }

    const ans = [];

    for (const [u, v] of queries) {
        let a = pos[u], b = pos[v];

        if (a === b) {
            ans.push(0);
            continue;
        }

        if (comp[a] !== comp[b]) {
            ans.push(-1);
            continue;
        }

        if (a > b) [a, b] = [b, a];

        let cur = a;
        let steps = 0;

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][cur] < b) {
                cur = up[k][cur];
                steps += 1 << k;
            }
        }

        ans.push(steps + 1);
    }

    return ans;
};