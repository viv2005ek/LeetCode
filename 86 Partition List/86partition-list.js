/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessDummy = new ListNode(0);
    let greaterDummy = new ListNode(0);

    let less = lessDummy;
    let greater = greaterDummy;

    while (head) {
        if (head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }

    // Important: terminate second list
    greater.next = null;

    // Connect both lists
    less.next = greaterDummy.next;

    return lessDummy.next;
};