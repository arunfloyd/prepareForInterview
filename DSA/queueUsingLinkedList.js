class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  isEmpty() {
    return !this.size;
  }
  enqueue(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }
  denqueue() {
    if (this.isEmpty()) return null;

    const itemToBeRemoved = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
  }
  peek() {
    return this.first;
  }
  print(){
    
  }
}
