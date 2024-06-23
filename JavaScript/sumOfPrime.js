function sumPrime(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }
  return sum
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <=n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(sumPrime([3,4,5,6,7]))