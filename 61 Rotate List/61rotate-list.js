/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // 1) find length and tail
    let n = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        n++;
    }

    // 2) reduce k
    k = k % n;
    if (k === 0) return head;

    // 3) make circular
    tail.next = head;

    // 4) find new tail: (n - k - 1) steps from head
    let steps = n - k - 1;
    let newTail = head;
    for (let i = 0; i < steps; i++) {
        newTail = newTail.next;
    }

    // 5) break circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};