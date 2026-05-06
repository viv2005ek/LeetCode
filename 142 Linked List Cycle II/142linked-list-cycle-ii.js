/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    // detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // find cycle start
            let ptr = head;

            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }

            return ptr;
        }
    }

    return null;
};