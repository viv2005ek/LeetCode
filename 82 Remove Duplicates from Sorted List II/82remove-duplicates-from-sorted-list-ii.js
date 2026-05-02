/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
      let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy; // last node before duplicate block

    while (head) {
        // detect duplicate block
        if (head.next && head.val === head.next.val) {
            let val = head.val;

            // skip entire block
            while (head && head.val === val) {
                head = head.next;
            }

            prev.next = head; // cut duplicates
        } else {
            prev = prev.next;
            head = head.next;
        }
    }

    return dummy.next;
};