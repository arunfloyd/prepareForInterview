function secLarAndSmall(arr) {
    let largest = -Infinity;
    let secLar = -Infinity;
    let smallest = Infinity;
    let secSmall = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secLar = largest;
        largest = arr[i];
      } else if (arr[i] > secLar && arr[i] !== largest) {
        secLar = arr[i];
      }
  
      if (arr[i] < smallest) {
        secSmall = smallest;
        smallest = arr[i];
      } else if (arr[i] < secSmall && arr[i] !== smallest) {
        secSmall = arr[i];
      }
    }
  
    return {
      secondLargest: secLar,
      secondSmallest: secSmall
    };
  }
  
  console.log(secLarAndSmall([1, 3, 6, 8, 86]));
  