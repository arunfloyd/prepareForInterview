const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
