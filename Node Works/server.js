// const http = require('http')
// const fs = require('fs')
// console.log("sdtart");
// http.createServer((req, res) => {
//     fs.writeFileSync('text.txt', 'Hellloooo')
//     fs.readFile('text.txt', 'utf-8', (err, data) => {
//         if (err) throw err
//         console.log("sdtart");
//         res.write(data)
//         console.log(data)
//         res.end()
//     })

// }).listen(3001)

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.writeFileSync('texut.txt', 'Who the hell are you')
//     fs.readFile('text.txt', 'utf-8', (err, data) => {
//         res.write(data)

//         console.log(data)
//         res.end()
//     })

// }).listen(3001)

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     const a = fs.readFile('html.html', 'utf8', (err, data) => {
//         if (err) throw err
//         return data
//     })
//     res.write(a)
//     res.end()
// })

// const express = require('express')
// const app = express()

// app.get('/name', (req, res) => {
//     const OE = req.query.name
//     if (OE % 2 == 0) {
//         res.send("Even")

//     } else {
//         res.send("Odd")
//     }

// }).listen(3000)

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     const n1 = parseInt(req.query.n1)
//     const n2 = parseInt(req.query.n2)
//     const sum = n1 + n2;
//     res.send(sum)

// }).listen(3000)

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     const n1 = parseInt(req.query.n1); // Default to 0 if not provided or not a number
//     const n2 = parseInt(req.query.n2);
//     const sum = n1 + n2;
//     res.send(`${sum}`); // Convert sum to a string before sending
// }).listen(3000)

// function a() {
//     var num = 12
//     this.num = num
//     console.log(num)
// }
// a()
// console.log(num)

// const arr = [1, 2, 3, 4, 5]
//     // const arr1 = arr.map((x) => x.toString(2))

// console.log(arr1)

// const arr = [1, 2, 3, 4, 5]
// const [x, y, ...z] = arr
// console.log(z)

// let arr = { name: "Arun", age: 21 };
// let { name, age } = arr;
// console.log(name); // Output: Arun
// console.log(age); // Output: 21

// const events = require('events')
// const eventEmitter = new events.EventEmitter()

// function first() {
//     console.log("Hello")
// }

// function second() {
//     console.log("Hello Gooys")
// }

// eventEmitter.on('hello', first)
// eventEmitter.on('second', second)

// eventEmitter.emit('hello')
// eventEmitter.emit('second')

// setImmediate(() => {
//     console.log("1st Immediate");
// });
// process.nextTick(() => {
//     console.log("2nd Process");
// });
// setImmediate(() => {
//     console.log("2nd Immediate");
// });

// process.nextTick(() => {
//     console.log("1st Process");
// });

/**
 * Callback Function
 */

// function message(name, Callback) {
//     console.log(name)
//     Callback()
// }

// function call() {
//     console.log("Hi ,How you do")
// }
// message('Kumaar', call)

// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//     fs.readFile('html.html', (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         res.end()
//     })

// }).listen(3000)

// const array = ['Arun', 'Rahul', 'Adrash']
// const out = array.reduce((acc, curr) => {
//     acc.push(curr.length)
//     return acc

// }, [])
// console.lof
// let arr = out[1]
// for (let i of out) {
//     if (i < arr) {
//         arr = i
//     }
// }
// console.log(arr)




const express = require('express')

const app = express()

app.get('/',(req,res)=>{

    res.send('<h1>Hello NodeJS</h1>')

})

app.listen(3000,()=>{

    console.log(`Server Started at Port 3000`)
    
})