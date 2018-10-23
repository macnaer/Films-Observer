const http = require("http");
const Main = require("./routes/main");

http
  .createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {
      Main(req, res);
    } else if (req.url === "/") {
      console.log(req.url);
    } else if (req.url.startsWith("/search")) {
    } else {
    }
  })
  .listen(80, () => console.log("Running..."));
