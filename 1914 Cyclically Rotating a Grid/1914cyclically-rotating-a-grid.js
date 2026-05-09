/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;

    let layers = Math.min(m, n) / 2;

    for (let layer = 0; layer < layers; layer++) {

        let coords = [];
        let arr = [];

        let top = layer;
        let left = layer;
        let bottom = m - layer - 1;
        let right = n - layer - 1;

        // top row
        for (let j = left; j <= right; j++) {
            coords.push([top, j]);
            arr.push(grid[top][j]);
        }

        // right column
        for (let i = top + 1; i <= bottom - 1; i++) {
            coords.push([i, right]);
            arr.push(grid[i][right]);
        }

        // bottom row
        for (let j = right; j >= left; j--) {
            coords.push([bottom, j]);
            arr.push(grid[bottom][j]);
        }

        // left column
        for (let i = bottom - 1; i >= top + 1; i--) {
            coords.push([i, left]);
            arr.push(grid[i][left]);
        }

        let len = arr.length;
        let rot = k % len;

        let rotated = new Array(len);

        for (let i = 0; i < len; i++) {
            rotated[i] = arr[(i + rot) % len];
        }

        // put back
        for (let i = 0; i < len; i++) {
            let [r, c] = coords[i];
            grid[r][c] = rotated[i];
        }
    }

    return grid;
};