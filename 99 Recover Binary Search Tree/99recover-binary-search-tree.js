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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let nodes = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        nodes.push(node);
        inorder(node.right);
    }

    inorder(root);

    let x = null, y = null;

    for (let i = 0; i < nodes.length - 1; i++) {
        if (nodes[i].val > nodes[i + 1].val) {
            y = nodes[i + 1];
            if (!x) x = nodes[i];
            else break;
        }
    }

    // swap values
    let temp = x.val;
    x.val = y.val;
    y.val = temp;
};