// const http = require('http')

// http.createServer((req,res)=>{
//     res.write("Hello")
//     res.end()
// }).listen(3000)

// const express = require("express");
// const app = express();

// app
//   .get("/", (req, res) => {
//     res.send("Hellow");
//   })
//   .listen(3000);

const express = require("express");
const app = express();

app.get("/:id", (req, res) => {
  const params = req.params.id;
  const vowels = /[aeiou]/gi;
  const data = params.match(vowels);
  console.log(data)
  res.send(data);
}).listen(3000);
