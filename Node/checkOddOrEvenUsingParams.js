const express = require("express");

const app = express();

app
  .get("/:id", (req, res) => {
    const val = req.params.id;

    if (val % 2 == 0) {
      res.send("Its Even");
    } else {
      res.send("Its Odd");
    }
  })
  .listen(3000);
