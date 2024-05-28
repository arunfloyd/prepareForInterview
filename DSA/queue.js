class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(elements) {
    this.item.push(elements);
  }
  denque() {
    if (this.item.length === 0) {
      return console.log("Under Flow");
    }
    this.item.shift();
  }
  peek() {
    if (this.item.length === 0) {
      return console.log("Under Flow");
    }
    return this.item[this.item.length - 1];
  }
  front() {
    if (this.item.length === 0) {
      return console.log("Under Flow");
    }
    return this.item[0];
  }
  print() {
    let queue = "";
    for (let i of this.item) {
      queue += i + " ";
    }
    return queue;
  }
}

const Q = new Queue();
Q.enqueue(12);
Q.enqueue(7);
Q.enqueue(5);
console.log(Q.print());
Q.denque();
console.log(Q.peek());
console.log(Q.front());
console.log(Q.print());
