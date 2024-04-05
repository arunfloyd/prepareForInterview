const express = require('express')
const app = express()
const fs = require('fs')
    // app.use(express.json)

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    fs.readFile('html.html', 'utf8', (err, data) => {
        if (err) throw err
        res.send(data)
    })


})
app.post('/check', (req, res) => {
    const a = (req.body.number)
    if (a % 2 == 0) {
        res.send("Even")
    } else
        res.send("Odd")
})
app.listen(3000)

// const express = require('express');
// const app = express();
// const fs = require('fs');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve HTML file on the root path
// app.get('/', (req, res) => {
//     fs.readFile('html.html', 'utf8', (err, data) => {
//         if (err) {
//             throw err;
//         }
//         res.send(data);
//     });
// });

// // Handle POST request to /check
// app.post('/check', (req, res) => {
//     console.log(parseInt(req.body.number));
//     res.send('Received a POST request to /check');
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });