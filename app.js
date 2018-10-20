const http = require("http");

http
  .createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {
    } else if (req.url === "/") {
    } else if (req.url.startsWith("/search")) {
    } else {
    }
  })
  .listen(80, () => console.log("Running..."));
