class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.prepend(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  removePrepend() {
    if (!this.head) {
      return;
    }
    this.head = this.head.head;
  }
  removeAppend() {
    if (!this.head) {
      return;
    }
    let current= this.head
    while(current.next){
        current= current.next
    }
    current.next = null
  }
}
