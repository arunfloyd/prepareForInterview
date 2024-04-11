const express = require("express");
const app = express();

app
  .get("/:id", (req, res) => {
    const vowels = req.params.id;
    const voel = /[aeiou]/gi;
    const last = vowels.match(voel);
    res.send(last);
  })
  .listen(3000);
