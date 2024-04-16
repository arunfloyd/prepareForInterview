const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    let data = Number(req.query.n1) + Number(req.query.n2);
    res.send("" + data);
  })
  .listen(3000);


