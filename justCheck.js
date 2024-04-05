// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     if (req.url == '/') {
//         fs.writeFileSync('txt.txt', 'I Can See You...')
//         fs.readFile('txt.txt', (err, data) => {
//             console.log(err)
//             res.writeHead(200)
//             res.end(data)
//         })

//     } else if (req.url == '/home') {
//         res.end("Location at Home")
//     } else {
//         res.end("Your are on the wrong area")
//     }
// }).listen(3000)

// const express = require('express')
// const app = express()

// app.get('/:id', (req, res) => {
//     const value = req.params.id
//     if (value % 2 == 0) {
//         res.send("ODD")
//     } else {
//         res.send("EVEN")
//     }
// }).listen(3006)


// const express = require('express')
// const app = express()

// app.get('/:id', (req, res) => {
//     const vowels = req.params.id
//     const voel = /[aeiou]/ig;
//     const last = vowels.match(voel)
//     res.send(last)
// }).listen(3000)



// function* nNumber() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 == 0) {
//             yield i
//         }
//     }
// }

// let nNumbers = nNumber()
// console.log(nNumbers.next().value)
// console.log(nNumbers.next().value)
// console.log(nNumbers.next().value)
// console.log(nNumbers.next().value)

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     throw err
// })
// app.use((err, req, res, next) => {
//     console.error(err)
//     res.status(504).send("somehing fishhy")

// })
// app.listen(3000)

// const process = require('process')
// console.log(process.argv[1])

// arr = [1, 2, 3, 4, 5, 6]
// let i = 0
// let sum = 0
// do {
//     sum += arr[i]
//     i++
// }
// while (i < arr.length)
// console.log(sum)
// arr = [1, 2, 3, 4, 5, 6]
// let sum = 0
// arr.forEach((x) => {
//     sum += x
// })
// console.log(sum)

// async function sum() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Sucess2")
//         }, 6000)

//     })
//     let promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Sucess1")
//         }, 4000)
//     })

//     const re = await Promise.allSettled([promise, promise1])
//     console.log(re)
// }
// sum()

// let a = 'ad;d(8, 92)'

// // // Assuming there is a function named 'add' in the scope
// function add(x, y) {
//     return x + y;
// }

// console.log(eval(a));

// let arr = [1, 2, 3, 2, 3, 4, 5,
//     5, 6, 1, 1, 4, 5, 7, 8, 8
// ];

// function count(arr, element) {
//     return arr.filter(
//         (ele) => ele == element.length);
// };

// console.log(count(arr))

// const arr = [1, 2, 3, 3, 5,
//     5, 6, 1, 1, 5, 7, 8, 8
// ];

// const count = {};
// for (let i of arr) {
//     if (count[i]) {
//         count[i] += 1
//     } else {
//         count[i] = 1
//     }
// }
// console.log(count)


// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', function(req, res) {
//     res.download('Hello.txt');
// });

// app.listen(PORT, function(err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });


// const string = ['apple', 'banana', 'kiwi', 'grape', 'orange'];

// const arr = string.reduce((acc, curr) => {
//     if (curr.length > acc.length)
//         acc = curr
//     return acc
// }, '')

// console.log(arr)
// IIFC Using Arrow function
// ((a, b) => {
//     console.log(a + b)
// })(32, 54)


// const ong = { name: "arun", age: 54 }
// const { age } = ong
// console.log(age)

// const hj = [1, 54, 64, 3]
// const [...c] = hj
// console.log(c)

// val = 4
// switch (val) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     default:
//         console.log("Wrong Number")
// }



// let i = 0
// do {
//     console.log("Hello")
//     i++

// }
// while (i <= 4)

// let con = 'SijuSs'
// let obj = {}

// for (i = 0; i < con.length; i++) {
//     if (obj[con[i]] == undefined)
//         obj[con[i]] = 1
//     else
//         obj[con[i]] += 1

// }
// console.log(obj)



// const express = require('express')
// const app = express()
// app.get('/', (req, res) => {

//     let a = req.query.id
//     let c = a.match(/[aeiou]/gi)
//     res.send(c)
// }).listen(3000)

// const obj = { name: { first: "Arun" } }

// console.log(obj.name ? .first)

// const obj = { name: { first: "Arun" } };

// console.log(obj.name ? .first);

// function* sum(val) {
//     for (let i = 0; i < val; i++) {
//         yield i
//     }

// }
// let sums = sum(4)
// console.log(sums.next())
// console.log(sums.next())


// const http = require('http')
// http.createServer((req, res) => {
//     res.write(req.url)
//     res.end()
// }).listen(3000)


// let a = 5

// {
//     let a = 10
//     console.log(a)
// }

// console.log(a)

// const obj = {
//     name: "Arun",
//     ih: async function() {
//         await console.log(this.name)
//     }
// }
// obj.ih()


// //Recurisve Function
// function add(val) {
//     if (val < 10) {
//         console.log(val)
//         add(val + 1)
//     }

// }
// add(2)

// function Person(name) {
//     this.name = name;
// }

// const person = new Person('John Doe');
// console.log(person.name)

// const a = "W"
// console.log(isNaN(a))

// const obj = { name: "Arun" }
// console.log(obj.name)
// obj.name = "Siju"
// console.log(obj.name)

// const arr = "Arunf"
// const obj = {}

// for (i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] == undefined)
//         obj[arr[i]] = 1
//     else
//         obj[arr[i]] += 1
// }
// console.log(obj)


// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hai")
//     }, 2000)
// })


// async function sum() {
//     await pro.then((res) => {
//         console.log(res)
//     }).catch(() => {
//         console.log("Who Are you")
//     })
// }
// sum()

// function sum() {
//     setTimeout(() => {
//         throw new Error
//     }, 2000)
// }

// async function sums() {
//     try {
//         await sum()
//     } catch (e) {
//         console.log("wrong way")
//     }

// }
// sums()



// const obj1 = {
//     name: "Arun",
//     age: 12,
// }

// const obj2 = { name: "Kaun", age: 52 }

// function sum(s, y) {
//     console.log(this.name, this.age, s, y)
// }

// sum.call(obj1, 'hell', 'hrll');
// sum.apply(obj1, ["Hello", 'hel']);
// var fun = sum.bind(obj1, "Hello", 'hel');
// fun();


// for (i = 0; i < con.length; i++) {
//     if (obj[con[i]] == undefined)
//         obj[con[i]] = 1
//     else
//         obj[con[i]] += 1

// }
// console.log(obj)


// const a = ["Zulu", "Arun Vinod ", "Ar"]

// // const arr = a.reduce((acc, curr) => {
// //     if ((curr.length) > acc.length)
// //         return acc = curr

// // }, [])
// let vars = ''
// const arr = a.filter((x) => {
//     if (x.length > vars.length) {
//         vars = x
//     }
//     return vars

// })
// console.log(vars)

// reduce(): largest element in string array
// const a = "Arun Vinod K"
// const b = a.split('').reduce((acc, curr) => {
//     if (curr > acc)
//         acc = curr
//     return acc
// })
// console.log(b)

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello1")
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello")
//     }, 4000)

// })
// console.log("1")
// async function pro() {
//     await Promise.any([p1, p2]).then((res) => {
//         console.log(res)
//     })
//     console.log("2")
// }
// pro()
// console.log("3")



// function sum(...arr) {
//     let sums = 0
//     for (let i of arr) {
//         sums += i
//     }
//     console.log(sums)
// }
// sum(12, 2, 2, 3)
// let a = '43' - 2 + 5
// console.log(a)
// console.log(typeof a)

// console.log('hi\nhello')



// const arr = [4, 33, 5, 45, 4, 4]
// let ob = {}
// for (i = 0; i < arr.length; i++) {
//     if (ob[arr[i]] == undefined) {
//         ob[arr[i]] = 1
//     } else {
//         ob[arr[i]] += 1
//     }

// }
// console.log(ob)


// class sums {
//     constructor(name) {
//         this.name = name

//     }
// }
// class add extends sums {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//         console.log(`Name is ${name} and the age is ${this.age}`)
//     }
// }
// const obj = new add("Arun", 54)


// const arr = [1, 1, 2, 3, 2, 1, 5]
// const dupli = []
// const ar = arr.reduce((acc, curr) => {
//     if (!acc.includes(curr))
//         acc.push(curr)
//     else if (!dupli.includes(curr))
//         dupli.push(curr)
//     return acc
// }, [])
// console.log(ar)
// console.log(dupli)


// const arr = [1, 1, 2, 3, 2, 1, 5]
// let q = {}

// for (i = 0; i < arr.length; i++) {
//     if (q[arr[i]] == undefined)
//         q[arr[i]] = 1
//     else
//         q[arr[i]] += 1
// }
// console.log(q)

// let s = ["arun"]
// const a = s
// a[0] = "anas"
// console.log(a)
// ab = 122
// ad = 45
// let ac = (ab < ad) ? (0 < ab) ? console.log("1st") : console.log("2st") : console.log("3st")


// const arr = [3, 4535, 23, 4, 1, 2, 3]
// let q = {};

// function arrs(arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (q[arr[i]] == undefined)
//             q[arr[i]] = 1
//         else
//             q[arr[i]] += 1
//     }
//     return q
// }
// console.log(arrs([3, 4535, 23, 4, 1, 2, 3]))

// function sum() {
//     setTimeout(() => {
//         console.log("Hel")
//     }, 2000)
// }
// async function sums(a) {
//     await a()
// }
// sums(sum)



// class student {
//     constructor(name) {
//         this.name = name
//     }
// }
// class school extends student {
//     constructor(cls, name) {

//         super(name)
//         console.log(this.name, cls)
//     }
// }
// const stu = new school(2, "Arun")


// function sum(name, age) {
//     this.name = name
//     this.age = age
//     console.log(name, age)
// }

// const per = new sum("Arun", 5)

// const express = require('express')
// const app = express()

// app.get('/:id', (req, res) => {
//     // const val = req.query.val
//     const id = req.params.id
//     const reg = /[aeiou]/gi
//         // res.send(val)
//     let arr = id.split('').filter((x) => x.match(reg))
//     res.send(arr)
// }).listen(3000)

// const a = 10 - '2' + 1
// console.log(a)

// function sum(arr) {
//     return arr.filter((x) =>
//         x % 2 != 0
//     ).reduce((acc, curr) => acc + curr, 0)
// }
// const arr1 = [1, 2, 3, 5, 6, 7, ]
// console.log(sum(arr1))

// function sum(arr) {
//     let sum = 0
//     for (let i of arr) {
//         if (i % 2 != 0)
//             sum += i
//     }
//     return sum
// }
// const arr1 = [1, 2, 3, 5, 6, 7, ]function sum(arr) {
//     let sum = 0
//     for (let i of arr) {
//         if (i % 2 != 0)
//             sum += i
//     }
//     return sum
// }
// const arr1 = [1, 2, 3, 5, 6, 7, ]
// console.log(sum(arr1))

// console.log(sum(arr1))


// function sum(arr) {
//     return arr
//         .filter((x) => x % 2 === 0) // Keep only even numbers
//         .reduce((acc, curr) => acc + curr, 0); // Sum the remaining even numbers
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(sum(arr));

// function add(x) {
//     return function(y) {
//         return x + y
//     }
// }

// const su = add(3)

// console.log(su(10));

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send()
// })


// const event = require('events')
// const Em = new event.EventEmitter()

// function sum() {
//     console.log("Hello")
// }

// Em.on('Emit', sum)
// Em.emit('Emit')

// //Prime Or Not  
// const express = require('express')
// const app = express()

// app.post('/', (req, res) => {
//     const val = req.query.vals

//     function isPrime(val) {
//         if (val == 1) {
//             return false
//         }
//         for (i = 2; i < val; i++) {
//             if (val % i == 0) {
//                 return false
//             }
//         }
//         return true
//     }
//     res.send(isPrime(val))
// })
// app.listen(3000)

// const express = require('express')
// const app = express()

// function Sum(req, res, next) {
//     console.log("hello")
//     next()
// }

// function Sums(req, res, next) {
//     console.log("poda")
//     next()
// }


// app.get('/s', Sums, (req, res) => {

// })
// app.get('/', Sum, (req, res) => {


// }).listen(3000)

// const arr = 'Arun Vinod K'
// let obj = {}
// for (i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] == undefined)
//         obj[arr[i]] = 1
//     else
//         obj[arr[i]] += 1

// }
// console.log(obj)



// function* sum(val) {
//     let i = 0;
//     while (i <= val) {
//         i++
//         yield val * i
//     }


// }
// let su = sum(5)
// console.log(su.next().value)
// console.log(su.next().value)