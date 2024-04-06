function even(arr) {
  return arr.filter((curr) => {
    return curr % 2 != 0;
  });
}
console.log(even([2,5,6,1,4,3,7]))