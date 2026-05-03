/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    function build(l, r) {
        if (l > r) return null;

        let mid = Math.floor((l + r) / 2);
        let root = new TreeNode(arr[mid]);

        root.left = build(l, mid - 1);
        root.right = build(mid + 1, r);

        return root;
    }

    return build(0, arr.length - 1);
};