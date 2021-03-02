import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const newElementNode = new LinkListNode(value);
    newElementNode.next = this.head;
    this.head = newElementNode;
    this.size += 1;
    return this.head;
  }

  append(value) {
    if (!value) { throw new Error('Null value'); }
    const newElementNode = new LinkListNode(value);
    this.size += 1;
    if (this.head === null) {
      this.head = newElementNode;
      return this.head;
    }
    let tailNode = this.head;
    while (tailNode.next !== null) {
      tailNode = tailNode.next;
    }
    tailNode.next = newElementNode;
    return this.head;
  }

  delete(value) {
    if (!this.head) { return false; }
    if (!this.head.next) {
      if (this.head.value === value) {
        this.head = null;
        this.size -= 1;
        return true;
      }
      return false;
    }
    let previous = this.head;
    let tail = this.head.next;
    while (tail.next !== null) {
      if (tail.value === value) {
        tail = tail.next;
        this.size -= 1;
        return true;
      }
      previous = tail;
      tail = tail.next;
    }
    if (previous.next.value === value) {
      previous.next = null;
      this.size -= 1;
      return true;
    }
    return false;
  }

  traverse() {
    let node = this.head;
    while (node !== null) {
      node = node.next;
    }
  }

  contains(value) {
    if (!this.head) { return false; }
    if (!this.head.next) {
      if (this.head.value === value) { return true; }
      return false;
    }
    let previous = this.head;
    let tail = this.head.next;
    while (tail.next !== null) {
      if (tail.value === value) { return true; }
      previous = tail;
      tail = tail.next;
    }
    if (previous.next.value === value) { return true; }
    return false;
  }

  length() {
    return this.size;
  }
}
