const http = require("http");
const port = 3000;
http
  .createServer((req, res) => {
    res.write("Hello");
    res.end();
  })
  .listen(port, () => {
    console.log(`Server Started On : http://localhost:${port}`);
  });
