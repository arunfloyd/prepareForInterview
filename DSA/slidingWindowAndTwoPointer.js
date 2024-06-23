function minimumSizeSubArray(arr, target) {
  let minWindowSize = 1000;
  let currentSum = 0;

  let low = 0;
  let high = 0;

  while (high < arr.length) {
    currentSum += arr[high];
    high++;

    while (currentSum >= target) {
      const currentWindowSize = high - low;

      minWindowSize = Math.min(minWindowSize, currentWindowSize);

      currentSum -= arr[low];
      low++;
    }
  }
  return minWindowSize === 1000 ? 0 : minWindowSize;
}


const result = minimumSizeSubArray([1,4,6,2,4],7)

console.log(result)