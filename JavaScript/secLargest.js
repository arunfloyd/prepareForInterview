function secLargest(arr) {
  let largest = -1000;
  let secLargest = -1000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] >= secLargest) {
      secLargest = arr[i];
    }
  }
  return secLargest;
}

console.log(secLargest([1, 4, 2, 0, 6, 9, 8]));
