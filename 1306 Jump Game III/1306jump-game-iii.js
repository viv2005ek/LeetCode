/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
     const visited = new Array(arr.length).fill(false);

    function dfs(idx) {

        // Out of bounds
        if (idx < 0 || idx >= arr.length) {
            return false;
        }

        // Already visited
        if (visited[idx]) {
            return false;
        }

        // Found zero
        if (arr[idx] === 0) {
            return true;
        }

        visited[idx] = true;

        return dfs(idx + arr[idx]) ||
               dfs(idx - arr[idx]);
    }

    return dfs(start);

};