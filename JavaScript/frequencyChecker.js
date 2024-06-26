const array = [1, 2, 3, 3, 5, 5, 6, 1, 1, 5, 7, 8, 8];

const count = {};
for (let i of array) {
  if (count[i]) {
    count[i] += 1;
  } else {
    count[i] = 1;
  }
}
// Find elements with count 1
const elementsWithCountOne = Object.keys(count).filter(
  (key) => count[key] === 1
);

console.log(elementsWithCountOne);
