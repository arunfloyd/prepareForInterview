let arr = [2, 5, 4, 5, 6, 7,4, 6];

let max = arr[0];

for (let i of arr) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("The maximum value is:", max);

