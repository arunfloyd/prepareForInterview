function primeOrNot(array) {
    let largestPrime = -1;
    for (let num of array) {
      if (num > 1 && isPrime(num)) {
        largestPrime = Math.max(largestPrime, num);
      }
    }
    return largestPrime;
  }
  
  function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }