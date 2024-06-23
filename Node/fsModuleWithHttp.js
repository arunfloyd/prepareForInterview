const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.writeFileSync("fsModuleWithHttp.txt", " Hello" + Date.now());
      fs.readFile("fsModuleWithHttp.txt", (err, data) => {
        console.log(data);
        res.writeHead(200);
        res.end(data);
      });
    } else if (req.url === "/home") {
      res.end("Location is Home");
    } else {
      res.end("You are on Wrong Area");
    }
  })
  .listen(3000);
