const fruits = ["apple", "banana", "kiwi", "grape", "orange"];
const arr = fruits.reduce((acc, curr) => {
  if (curr.length > acc.length) {
    acc = curr;
  }
  return acc
}, "");

console.log(arr);
