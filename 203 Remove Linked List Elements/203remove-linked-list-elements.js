/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next; // remove node
        } else {
            curr = curr.next; // move forward
        }
    }

    return dummy.next;
};