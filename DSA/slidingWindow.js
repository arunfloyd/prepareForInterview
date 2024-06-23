function maxSum(arr, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    let maxSum = sum;
    let startIndex = 0;
    let endIndex = k;

    while (endIndex < arr.length) {
        sum -= arr[startIndex];
        startIndex++;
        sum += arr[endIndex];
        endIndex++;
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

// Test Case 1
console.log(maxSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // Output should be 27

// Test Case 2
console.log(maxSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2)); // Output should be 19

// Test Case 3
console.log(maxSum([5, 5, 5, 5, 5, 5, 5], 4)); // Output should be 20

// Test Case 4
console.log(maxSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5)); // Output should be 5

// Test Case 5
console.log(maxSum([4, 3, 2, 1, 5, 6, 7, 8, 9, 10], 6)); // Output should be 45

// Test Case 6
console.log(maxSum([3, 8, 2, 7, 4, 1, 9, 5, 6, 3], 4)); // Output should be 25

// Test Case 7
console.log(maxSum([1, 12, 15, 17, 23, 4, 6, 8, 9], 2)); // Output should be 40

// Test Case 8
console.log(maxSum([1, 2, 3, 4, 5], 1)); // Output should be 5

// Test Case 9
console.log(maxSum([100, 200, 300, 400], 2)); // Output should be 700

// Test Case 10
console.log(maxSum([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3], 3)); // Output should be 7
