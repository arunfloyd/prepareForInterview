// call: Invokes a function with a specified this value and arguments provided individually.
// apply: Invokes a function with a specified this value and arguments provided as an array.
// bind: Creates a new function with a specified this value and optional arguments, which can be called later.
// /// CALL METHOD
const obj = {
  name: "Arun",
};

function welcome() {
  return `Hello ${this.name}`;
}

console.log(welcome.call(obj));

/// APPLY
function sum() {
  return this.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum.apply([1, 4, 7, 4, 4]));

// BIND
const object = {
  name: "Siju",
};
function nasmaste(greeting) {
  return `${greeting} ${this.name}`;
}
const wel = nasmaste.bind(object);
console.log(wel("Good Mrng"));


