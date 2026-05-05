/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
    const rowMin = new Map();
    const rowMax = new Map();
    const colMin = new Map();
    const colMax = new Map();

    // Step 1: build min/max for rows and columns
    for (let [x, y] of buildings) {
        if (!rowMin.has(x)) {
            rowMin.set(x, y);
            rowMax.set(x, y);
        } else {
            rowMin.set(x, Math.min(rowMin.get(x), y));
            rowMax.set(x, Math.max(rowMax.get(x), y));
        }

        if (!colMin.has(y)) {
            colMin.set(y, x);
            colMax.set(y, x);
        } else {
            colMin.set(y, Math.min(colMin.get(y), x));
            colMax.set(y, Math.max(colMax.get(y), x));
        }
    }

    // Step 2: check each building
    let count = 0;

    for (let [x, y] of buildings) {
        if (
            colMin.get(y) < x && x < colMax.get(y) &&
            rowMin.get(x) < y && y < rowMax.get(x)
        ) {
            count++;
        }
    }

    return count;
};