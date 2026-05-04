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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];

    function dfs(node) {
        if (!node) return;

        res.push(node.val);   // root
        dfs(node.left);       // left
        dfs(node.right);      // right
    }

    dfs(root);
    return res;
};