// function binarySearch(array, target) {
//   let start = 0;
//   let end = array.length - 1;
//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2);

//     if (array[middle] === target) {
//       return middle;
//     }
//     if (array[middle] > start) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return "Not Found";
// }

// console.log(binarySearch([1,2,4,6,5,2,6],1))

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return array[middle];
    }
    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};
console.log(binarySearch([1,2,4,6,5,2,6],0))