const { name } = require("ejs");

/// CALL METHOD
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




