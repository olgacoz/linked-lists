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

  at(index) {
    if (index < 0) {
      return undefined;
    }
    let curr = this.headNode;
    let i = 0;

    while (curr !== null) {
      if (i === index) {
        return curr.value;
      }
      curr = curr.nextNode;
      i++;
    }
    return undefined;
  }

  pop() {
    if (this.headNode === null) {
      return undefined;
    }
    const value = this.headNode.value;
    this.headNode = this.headNode.nextNode;
    return value;
  }

  contains(value) {
    let curr = this.headNode;
    while (curr !== null) {
      if (curr.value === value) {
        return true;
      }
      curr = curr.nextNode;
    }
    return false;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();
console.log(list.append(1));
console.log(list.at(-1));
