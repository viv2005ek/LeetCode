/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    // find middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse second half
    let prev = null;

    while (slow) {
        let nextNode = slow.next;

        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    // compare both halves
    let first = head;
    let second = prev;

    while (second) {

        if (first.val !== second.val) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
};