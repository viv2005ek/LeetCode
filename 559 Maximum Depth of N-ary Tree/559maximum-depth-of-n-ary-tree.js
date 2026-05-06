/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    let depth = 0;

    for (let child of root.children) {
        depth = Math.max(depth, maxDepth(child));
    }

    return depth+1;
};