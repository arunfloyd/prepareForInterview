// // 
// const words = ['apple', 'banana', 'orange'];

// // Using flatMap to split each word into its characters and flatten the result
// const characters = words.flatMap((x) => x.split(''))

// console.log(characters);
// // Output: ['a', 'p', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', 'o', 'r', 'a', 'n', 'g', 'e']

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     const htmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Using res.send</title>
//     </head>
//     <body>
//       <h1>Hello, World! (Using res.send)</h1>
//     </body>
//     </html>
//   `;

//     res.send(htmlContent);
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

// const obj1 = {
//     name: "Arun",
//     oruFun: function(age) {
//         console.log(`This is ${this.name} and my age is ${age}`)
//     }
// }
// const obj2 = {
//     name: "Sam",
// }
// obj1.oruFun.call(obj2, 23)
// const obj1 = {
//     name: "Arun",
//     Age: 23
// }
// const obj2 = {
//     name: "Adrash",
//     Age: 24
// }

// function name(a) {
//     console.log(`${a}  My Name is ${this.name} also my age is ${this.Age}`)
// }
// name.apply(obj1, ['Who are you ?'])

// const obj1 = {
//     name: "Arun",
//     Age: 23
// }
// const obj2 = {
//     name: "Adrash",
//     Age: 24
// }

// function say() {
//     console.log(this.name, this.Age)
// }
// var fun = say.bind(obj2)
// fun()

// let a = 9
// let b = 8
// console.log("A : %s & B: %s", a, b)

const os = require('os')
console.log(os.type())
console.log(os.platform())