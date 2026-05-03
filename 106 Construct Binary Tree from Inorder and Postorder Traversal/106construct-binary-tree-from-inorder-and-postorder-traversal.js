/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = new Map();

    // store inorder indices
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function build(left, right) {
        if (left > right) return null;

        // root from postorder
        let rootVal = postorder[postIndex--];
        let root = new TreeNode(rootVal);

        let mid = map.get(rootVal);

        // IMPORTANT: build right first
        root.right = build(mid + 1, right);
        root.left = build(left, mid - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};