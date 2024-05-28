class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let insertData = word[i];

      if (!(insertData in curr.children)) {
        curr.children[insertData] = new Node();
      }
      curr = curr.children[insertData];
    }
    curr.isWordEnd = true;
  }

  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let insertData = word[i];

      if (!(insertData in curr.children)) {
        return false;
      }
      curr = curr.children[insertData];
    }
    return curr.isWordEnd;
  }
}
