/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;

        result.push(node.val);

        for (let child of node.children) {
            dfs(child);
        }
    }

    dfs(root);
    return result;
};