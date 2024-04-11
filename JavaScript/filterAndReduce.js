function sum(arr) {
  return arr.filter((x) => x % 2 !== 0).reduce((acc, curr) => (acc+curr), 0);
}
console.log(sum([1,5,3,7,2,6]));


const sum = (arr)=>
{
    const array = new Set(arr)
    return [...array]
}

console.log(sum([1,65,1]))