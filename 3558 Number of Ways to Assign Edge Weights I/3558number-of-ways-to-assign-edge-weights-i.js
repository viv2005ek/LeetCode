var assignEdgeWeights = function(edges) {
    const n = edges.length + 1;
    const g = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    const vis = Array(n + 1).fill(false);
    vis[1] = true;

    let maxDepth = 0;
    const q = [[1, 0]];
    let head = 0;

    while (head < q.length) {
        const [u, d] = q[head++];
        maxDepth = d;

        for (const v of g[u]) {
            if (!vis[v]) {
                vis[v] = true;
                q.push([v, d + 1]);
            }
        }
    }

    const MOD = 1000000007n;
    let ans = 1n, base = 2n, e = BigInt(maxDepth - 1);

    while (e) {
        if (e & 1n) ans = ans * base % MOD;
        base = base * base % MOD;
        e >>= 1n;
    }

    return Number(ans);
};