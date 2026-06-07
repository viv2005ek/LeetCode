/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const m = new Map(), child = new Set();
    
    for (const [p, c, l] of descriptions) {
        if (!m.has(p)) m.set(p, new TreeNode(p));
        if (!m.has(c)) m.set(c, new TreeNode(c));
        
        l ? m.get(p).left = m.get(c) : m.get(p).right = m.get(c);
        child.add(c);
    }
    
    for (const [p] of descriptions)
        if (!child.has(p))
            return m.get(p);
};