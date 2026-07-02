/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({length: m}, () => Array(n).fill(Infinity));
    dist[0][0] = grid[0][0];

    const pq = [[dist[0][0], 0, 0]];
    const dir = [[1,0],[-1,0],[0,1],[0,-1]];

    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);

        const [cost, x, y] = pq.shift();

        if (cost > dist[x][y]) continue;

        for (const [dx, dy] of dir) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

            const newCost = cost + grid[nx][ny];

            if (newCost < dist[nx][ny]) {
                dist[nx][ny] = newCost;
                pq.push([newCost, nx, ny]);
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};