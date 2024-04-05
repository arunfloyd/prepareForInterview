// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
//         fs.readFile('myFile.txt', (err, data) => {
//             if (err) throw err
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             console.log('Saved')
//             res.write(data)
//         })
//     }).listen(3000, () => {
//         console.log(`Server Running http://localhost:3000`)
//     })
// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     /*Use the url module to turn the querystring into an object:*/
//     var q = url.parse(req.url, true).query;
//     /*Return the year and month from the query object:*/
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);

// var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.writeFile('mynewfile1.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });



















// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Hello')
//     res.send()
// }).listen(3000)

// const express = require('express')
// const fs = require('fs')
// const app = express()


// app.get('/', (req, res) => {
//     const id = req.query.id
//     res.send(id)
// }).listen(8000)

// app.get('/', (req, res) => {
//     fs.appendFile('Hello.txt', 'Hello Gooyss', (err) => {
//         if (err) throw err
//     });
//     fs.readFile('Hello.txt', 'utf-8', (err, data) => {
//         if (err) throw err;
//         res.send(data)
//     })
// }).listen(8000)