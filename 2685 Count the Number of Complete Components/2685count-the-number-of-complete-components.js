/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let ans = 0;

    function dfs(node) {
        visited[node] = true;

        let vertices = 1;
        let degreeSum = graph[node].length;

        for (const nei of graph[node]) {
            if (!visited[nei]) {
                const [v, d] = dfs(nei);
                vertices += v;
                degreeSum += d;
            }
        }

        return [vertices, degreeSum];
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const [vertices, degreeSum] = dfs(i);

            if (degreeSum === vertices * (vertices - 1)) {
                ans++;
            }
        }
    }

    return ans;
};