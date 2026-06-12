/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {
    const MOD = 1000000007;
    const n = edges.length + 1;

    const g = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    const LOG = 17 + 1; // since 2^17 > 1e5

    const depth = Array(n + 1).fill(0);
    const up = Array.from({ length: LOG }, () =>
        Array(n + 1).fill(0)
    );

    const q = [1];
    let head = 0;
    const vis = Array(n + 1).fill(false);
    vis[1] = true;

    while (head < q.length) {
        const u = q[head++];

        for (const v of g[u]) {
            if (vis[v]) continue;

            vis[v] = true;
            depth[v] = depth[u] + 1;
            up[0][v] = u;
            q.push(v);
        }
    }

    for (let k = 1; k < LOG; k++) {
        for (let v = 1; v <= n; v++) {
            up[k][v] = up[k - 1][ up[k - 1][v] ];
        }
    }

    function lca(a, b) {
        if (depth[a] < depth[b]) {
            [a, b] = [b, a];
        }

        let diff = depth[a] - depth[b];

        for (let k = 0; k < LOG; k++) {
            if (diff & (1 << k)) {
                a = up[k][a];
            }
        }

        if (a === b) return a;

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][a] !== up[k][b]) {
                a = up[k][a];
                b = up[k][b];
            }
        }

        return up[0][a];
    }

    const maxDist = n - 1;
    const pow2 = Array(maxDist + 1).fill(1);

    for (let i = 1; i <= maxDist; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    const ans = [];

    for (const [u, v] of queries) {
        const w = lca(u, v);

        const dist =
            depth[u] +
            depth[v] -
            2 * depth[w];

        if (dist === 0) {
            ans.push(0);
        } else {
            ans.push(pow2[dist - 1]);
        }
    }

    return ans;
};