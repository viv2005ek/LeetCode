/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];

    function dfs(node, remaining, path) {
        if (!node) return;

        path.push(node.val);

        // leaf + valid sum
        if (!node.left && !node.right && remaining === node.val) {
            result.push([...path]); // snapshot (IMPORTANT)
        } else {
            dfs(node.left, remaining - node.val, path);
            dfs(node.right, remaining - node.val, path);
        }

        path.pop(); // backtrack
    }

    dfs(root, targetSum, []);
    return result;
};