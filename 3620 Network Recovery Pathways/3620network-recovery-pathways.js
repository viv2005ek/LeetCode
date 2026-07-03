/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    const n = online.length;
    const graph = Array.from({ length: n }, () => []);
    const indeg = new Array(n).fill(0);

    let maxCost = 0;

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        indeg[v]++;
        if (w > maxCost) maxCost = w;
    }

    // Topological order
    const q = [];
    const deg = indeg.slice();

    for (let i = 0; i < n; i++) {
        if (deg[i] === 0) q.push(i);
    }

    const topo = [];
    let head = 0;
    while (head < q.length) {
        const u = q[head++];
        topo.push(u);
        for (const [v] of graph[u]) {
            if (--deg[v] === 0) q.push(v);
        }
    }

    const check = (limit) => {
        const INF = Number.MAX_SAFE_INTEGER;
        const dist = new Array(n).fill(INF);
        dist[0] = 0;

        for (const u of topo) {
            if (dist[u] === INF) continue;

            if (u !== 0 && u !== n - 1 && !online[u]) continue;

            for (const [v, w] of graph[u]) {
                if (w < limit) continue;
                if (v !== n - 1 && !online[v]) continue;

                const nd = dist[u] + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                }
            }
        }

        return dist[n - 1] <= k;
    };

    let lo = 0, hi = maxCost;
    let ans = -1;

    while (lo <= hi) {
        const mid = lo + ((hi - lo) >> 1);

        if (check(mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return ans;
};