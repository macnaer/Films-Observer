const http = require("http");
const Main = require("./routes/main");
const Home = require("./routes/home");
const Search = require("./routes/search");
const NotFound = require("./routes/notFound");

http
  .createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {
      Main(req, res);
    } else if (req.url === "/") {
      Home(req, res);
    } else if (req.url.startsWith("/search")) {
      Search(req, res);
    } else {
      NotFound(req, res);
    }
  })
  .listen(80, () => console.log("Running..."));
