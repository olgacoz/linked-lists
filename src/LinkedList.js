export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.headNode === null) {
      this.headNode = node;
      return;
    }
    let curr = this.headNode;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    curr.nextNode = node;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let size = 0;
    let curr = this.headNode;

    while (curr !== null) {
      size++;
      curr = curr.nextNode;
    }
    return size;
  }

  head() {
    return this.headNode?.value;
  }

  tail() {
    if (this.headNode === null) {
      return undefined;
    }

    let curr = this.headNode;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
    }
    return curr.value;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
