export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    curr.nextNode = node;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let size = 0;
    let curr = this.head;

    while (curr !== null) {
      size++;
      curr = curr.nextNode;
    }
    return size;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
