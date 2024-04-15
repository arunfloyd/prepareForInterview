function sums(a) {
  return function sum(b) {
    return a + b;
  };
}
function sum(a) {
  return function (b) {
    var sum = a + b;
    return function (c) {
      return sum * c;
    };
  };
}

console.log(sum(10)(2)(3));
console.log(sums(32)(43));
