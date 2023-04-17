const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  items = null;

  getUnderlyingList() {
    return this.items;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.items === null) {
      this.items = newNode;
    } else {
      this.insertNode(this.items, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.next === null) {
      node.next = newNode;
    } else {
      this.insertNode(node.next, newNode);
    }
  }

  dequeue() {
    let deletedNode = this.items;
    this.items = this.items.next;
    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
