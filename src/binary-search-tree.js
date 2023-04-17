const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.square = null;
  }

  root() {
    return this.square;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.square === null) {
      this.square = newNode;
    } else {
      this.addNode(this.square, newNode);
    }
  }

  addNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.findNode(this.square, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data > data) {
      return this.findNode(node.left, data);
    } else if (node.data < data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.square = this.deleteNode(this.square, data);
  }

  deleteNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data > data) {
      node.left = this.deleteNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.deleteNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let minNode = this.searchForMinValue(node.right);
      node.data = minNode.data;
      node.right = this.deleteNode(node.right, minNode.data);
      return node;
    }
  }

  min() {
    return this.searchForMinValue(this.square).data;
  }

  searchForMinValue(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.searchForMinValue(node.left);
    }
  }

  max() {
    return this.searchForMaxValue(this.square).data;
  }

  searchForMaxValue(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.searchForMaxValue(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};