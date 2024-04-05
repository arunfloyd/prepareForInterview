// Unique Element from the Array
const array = [1, 2, 3, 4, 2, 1, 5, 6, 5];

// Method One
const uni = new Set(array);
const uniq = [...uni];
console.log(`Using Set :${uniq}`);

// Method Two
const dupli = [];
const newArr = array.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  } else if (!dupli.includes(curr)) {
    dupli.push(curr);
  }
  return acc;
}, []);

console.log("Using Reduce :" + newArr);
console.log("Using Reduce the Duplicates :" + dupli);

// Method Three

const duplicatesArrayFilter = array.filter((element, index, arr) => {
  return arr.indexOf(element) !== index;
});
console.log("Using Filter the Duplicates :" + duplicatesArrayFilter);
