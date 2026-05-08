/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {

    if (!root) return 0;

    let sum = 0;

    // check if left child is a leaf
    if (
        root.left &&
        !root.left.left &&
        !root.left.right
    ) {
        sum += root.left.val;
    }

    // recurse on both sides
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
};