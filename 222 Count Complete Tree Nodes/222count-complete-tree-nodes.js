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
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) return 0;

    function getLeftHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.left;
        }
        return h;
    }

    function getRightHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.right;
        }
        return h;
    }

    let leftH = getLeftHeight(root);
    let rightH = getRightHeight(root);

    // perfect tree
    if (leftH === rightH) {
        return (1 << leftH) - 1;
    }

    // otherwise recurse
    return 1 + countNodes(root.left) + countNodes(root.right);
};