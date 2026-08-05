/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    // Find all suspicious methods (reachable from k)
    const suspicious = new Array(n).fill(false);
    const stack = [k];
    suspicious[k] = true;

    while (stack.length) {
        const node = stack.pop();
        for (const nei of graph[node]) {
            if (!suspicious[nei]) {
                suspicious[nei] = true;
                stack.push(nei);
            }
        }
    }

    // If any non-suspicious method invokes a suspicious one,
    // we cannot remove the suspicious group.
    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            const ans = [];
            for (let i = 0; i < n; i++) ans.push(i);
            return ans;
        }
    }

    // Return remaining methods
    const ans = [];
    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) ans.push(i);
    }
    return ans;
};