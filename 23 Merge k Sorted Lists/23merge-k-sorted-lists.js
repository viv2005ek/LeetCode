/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(node) {
            this.heap.push(node);
            this._bubbleUp();
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._bubbleDown();
            return top;
        }

        _bubbleUp() {
            let i = this.heap.length - 1;
            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);
                if (this.heap[parent].val <= this.heap[i].val) break;
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            }
        }

        _bubbleDown() {
            let i = 0;
            const n = this.heap.length;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < n && this.heap[left].val < this.heap[smallest].val)
                    smallest = left;
                if (right < n && this.heap[right].val < this.heap[smallest].val)
                    smallest = right;

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MinHeap();

    // Initialize heap with first node of each list
    for (let list of lists) {
        if (list) heap.push(list);
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (heap.size() > 0) {
        let node = heap.pop();
        current.next = node;
        current = current.next;

        if (node.next) {
            heap.push(node.next);
        }
    }

    return dummy.next;
};