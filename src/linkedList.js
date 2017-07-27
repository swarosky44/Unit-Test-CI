class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  setNextNode(node) {
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;
    while(current.getNextNode()) {
      current = current.getNextNode();
    }
    current.setNextNode(node);
    this.length++;
  }

  insert(position, value) {
    if (position < 0 || position > this.length) {
      return console.error('position error');
    }

    const node = new Node(value);
    let index = 0;
    let current = this.head;
    let previous = null;

    if (position === 0) {
      this.head = node;
      this.head.setNextNode(current);
    } else {
      while(index < position) {
        previous = current;
        current = current.getNextNode();
        index++;
      }
      previous.setNextNode(node);
      node.setNextNode(current);
    }
    this.length++;
  }

  removeAt(position) {
    if (position < 0 || position > this.length) {
      return console.log('position error');
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.head = current.getNextNode();
    } else {
      while(index < position) {
        previous = current;
        current = current.getNextNode();
        index++;
      }
      previous.setNextNode(current.getNextNode());
    }
    this.length--;
    return current;
  }

  size() {
    return this.length;
  }

  valueOf() {
    const values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.getNextNode();
    }
    return values;
  }
}

export default LinkedList;
