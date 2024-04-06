const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send("Hello")
}).listen(3000,()=>{
    console.log('http://localhost:3000')
})