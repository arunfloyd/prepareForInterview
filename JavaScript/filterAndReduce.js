function sum(arr) {
  return arr.filter((x) => x % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}
console.log(sum([1, 5, 2])); //6
