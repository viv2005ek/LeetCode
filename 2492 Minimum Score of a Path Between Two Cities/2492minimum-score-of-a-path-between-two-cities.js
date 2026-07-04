/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, d] of roads) {
        graph[u].push([v, d]);
        graph[v].push([u, d]);
    }

    const visited = new Array(n + 1).fill(false);
    let ans = Infinity;

    const stack = [1];
    visited[1] = true;

    while (stack.length) {
        const node = stack.pop();

        for (const [next, dist] of graph[node]) {
            ans = Math.min(ans, dist);

            if (!visited[next]) {
                visited[next] = true;
                stack.push(next);
            }
        }
    }

    return ans;
};