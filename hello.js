// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(10, 20))


// function sums(a) {
//     return function sum(b) {
//         return a + b;
//     }
// }
// console.log(sums(32)(43))



// function sum(a) {
//     return function(b) {
//         var sum = a + b
//         return function(c) {
//             return sum * c;
//         }
//     }
// }
// console.log(sum(10)(2)(3))




// const array = [1, 2, 3, 4, 2, 1, 5, 6, 5];

// const uni = new Set(array)
// const uniq = [...uni]

// console.log(uniq)

// const array = [1, 2, 3, 4, 2, 1, 5, 5, 6, 5];
// const dupli = []
// const newArr = array.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//         acc.push(curr)
//     } else if (!dupli.includes(curr)) {
//         dupli.push(curr)
//     }
//     return acc;

// }, [])
// console.log(newArr)
// console.log(dupli)

// const array = [1, 2, 3, 4, 2, 1, 5, 6, 5];

// const duplicatesArrayFilter = array.filter((element, index, arr) => {
//     return arr.indexOf(element) !== index;
// });
// console.log(duplicatesArrayFilter);



// function sum() {
//     result = 10
//     try {
//         console.log(sums);
//     } catch {
//         console.log("i Can't Reach it...")
//     }

//     function sub() {
//         sums = 5
//         console.log(result)
//     }
//     sub()
// }
// sum()


// callback //


// Function that takes a callback
// function doSomethingAsync(vishnu) {
//     var data = 949889458
//     vishnu(data);
// }

// // Callback function
// function callbackFunction(value) {
//     console.log("Callback !" + value);
// }

// // Call the function with the callback
// doSomethingAsync(callbackFunction);

// async function sum(a, b) {
//     let sums = new Promise((resolve, reject) => {
//         if (a > b) {
//             resolve("Sucess")
//         } else {
//             reject("reject")

//         }
//     })
//     await sums.then((res) => {
//         console.log(res)
//     }).catch((res) => {
//         console.log(res)

//     })
// }
// sum(160, 30)

//promise
// function sum(a, b) {
//     let Car = new Promise((resolve, reject) => {
//         if (a > b) {
//             resolve("Sucess")
//         } else {
//             reject("UnSucess")
//         }
//     })
//     Car.then((res) => {
//         console.log(res)
//     }).catch((res) => {
//         console.log(res)
//     })

// }

// function sum(a, b) {
//     let pro = new Promise((resolve, reject) => {
//         if (a > b) {
//             resolve("Sucess")

//         } else {
//             reject("Rejected")
//         }

//     })
//     pro.then((res) => {
//             console.log(res);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// sum(16, 30)

// function vowels(str) {
//     let arr = []
//     const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'U', 'u']
//     for (let char of str)
//         if (vowel.includes(char) && !arr.includes(char)) {
//             arr.push(char)

//         }
//     return arr
// }
// let str = "Vishnu Priya"
// console.log(vowels(str))


// function vowels(str) {
//     const vowel = /[aeiou]/gi;
//     const arr = str.match(vowel) || [];
//     console.log(arr);
// }
// let str = "Arun Vinod K";
// vowels(str);

// let arr = [2, 5, 4, 5, 6, 4, 6];
// let max = arr[0];
// for (let i of arr) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("The maximum value is:", max);

// let arr = [1, 3, 2, 4, 8, 8, 3, 1, 2, 7, 5, 6];

// const arr2 = arr.sort((a, b) => a - b)
// let arr1 = new Set(arr2)
// let arr3 = [...arr1]
// console.log(arr3[arr3.length - 2])

// class Car {
//     constructor(brand) {
//         this.brand = brand
//     }
//     present() {
//         console.log("My Car Brand %s", this.brand)
//     }
// }

// class model extends Car {
//     constructor(brand, model) {
//         super(brand)
//         this.model = model
//     }
//     show() {
//         console.log("My Car Brand %s & Model is %s", this.brand, this.model)
//     }
// }
// let myCar = new model("Maruthi", "Swift")
// myCar.show()

// function Car(brand) {
//     this.brand = brand;
// }
// Car.prototype.present = function() {
//     console.log("My Car Brand is %s", this.brand)
// }

// function Model(brand, model) {
//     Car.call(this, brand)
//     this.model = model
// }
// Model.prototype = Object.create(Car.prototype);
// Model.prototype.constructor = Model

// Model.prototype.show = function() {
//     console.log("My Car Brand %s & Model is %s", this.brand, this.model);
// };

// let myCar = new Model("Maruti", "Swift");
// myCar.show();

// function sum() {
//     let intervalId = setInterval(() => {
//         console.log("Hello");

//         setTimeout(() => {
//             clearInterval(intervalId);
//         }, 2000);
//     }, 1000);
// }

// sum();

// const fs = require("fs");
// const event = require("events");
// const { nextTick } = require("process");

// console.log("synchronous priority");
// //microtask queue
// process.nextTick(() => {
//     console.log("nexttick...1");
//     process.nextTick(() => {
//         console.log("nexttick....2")
//         process.nextTick(() => console.log("inner nexttick"));
//     });
// })
// Promise.resolve().then(() => console.log("promise resolved"));
// Promise.resolve().then(() => {
//     process.nextTick(() => {
//         console.log("Promise nextTick");

//     });
// })

// // stored in third phase
// setImmediate(() => {
//     console.log("5");
// });
// // stored in first phase
// setTimeout(() => {
//     console.log("8");
// });
// // stored in second phase
// const data = fs.readFileSync('./views/output.txt', 'utf-8')
// console.log(data)
// const out = fs.writeFileSync('./views/output.txt', 'arunghosh')
// console.log(out);
// // stored in third phase
// process.nextTick(() => {
//         console.log("last nexttick");
//     })
//     // stored in fourth phase
//     // event.on(()=>{
//     //     console.log("closing phase");
//     // })


// ! function() {
//     console.log("Hello")
// }()

// const numbers = [767, 10, 5, 8, 20, 87, 15];
// // const largestNumber = numbers.reduce((max, current) => Math.max(max, current), )
// const high = numbers.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr
//     }
//     return acc
// })

// console.log(high);


// function sum(...args) {
//     return args.reduce((total, num) => total + num, 0);
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log(result); // Output: 15


// const words = ["apple", "banana", "orange", "kiwi", "pear", "grape"];

// const vowelWords = words.filter(word => /^[aeiou]/i.test(word));

// console.log(vowelWords);

// const result = [1, 2, 3, 4, 5];

// const res = result.map((x) => {
//     let y
//     if (x % 2 == 0) {
//         y = 1;
//     } else {
//         y = 0;
//     }
//     return y
// })
// console.log(res)


// const a = [1, 2, 3, 4]
// const b = a.map((x) => x)
// b[0] = 10
// console.log(a);
// console.log(b);
// const a = [1, 2, 3, 4]
// const b = a
// b[0] = 10
// console.log(a);
// console.log(b);





// class koko {
//     constructor(name) {
//         this.name = name
//     }
//     method() {
//         console.log(this.name)
//     }
// }
// class kuku extends koko {
//     constructor(name, name2) {
//         super(name)
//         this.name2 = name2
//     }
//     method() {
//         console.log(this.name, this.name2)
//     }
// }
// const h = new kuku('hei', 'hel')
// h.method()

// const a = 'hello'
// const b = /[aeiou]/gi
// const c = a.filter((x) => b.test(x))
// console.log(c)

// async function hello() {
//     let a = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Welcome")
//         }, 2000)
//     })
//     a.then((res) => console.log(res + " To Ooty")).catch((err) => console.log(err))
// }
// hello()

// let str = "8"
// let strs = 8

// console.log(str == strs)

// const arr = { he: 'he', 2: 'ki' }
// const {} = arr
// console.log(he)


const arr = [1, 2, 3, 3, 2, 1, 4, 9, 5, 5]

const obj = {}