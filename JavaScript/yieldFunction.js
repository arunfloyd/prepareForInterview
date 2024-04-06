function* yielding() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      yield i;
    }
  }
}
let yieldin = yielding()
console.log(yieldin.next().value)
console.log(yieldin.next().value)
console.log(yieldin.next().value)
console.log(yieldin.next().value)

