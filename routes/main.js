const fs = require("fs");
const path = require("path");

function Main(request, response) {
  const ex = path.extname(request.url);
  let contentType = "";
  switch (ex) {
    case ".css":
      contentType = "text/css";
      break;
    case ".png":
      contentType = "image/png ";
      break;
    case ".js":
      contentType = "application/javascript";
      break;
    case ".eot":
      contentType = "application/vnd.ms-fontobject";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    case ".ttf":
      contentType = "font/ttf";
      break;
    case ".woff":
      contentType = "font/woff";
      break;
    case ".woff2":
      contentType = "font/woff2";
      break;
    default:
      contentType = "text/plain";
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", contentType);
  const stream = fs.createReadStream(
    path.join(__dirname, "..", "public", request.url)
  );
  stream.pipe(response);
  stream.on("error", error => {
    if (error.code === "ENOENT") {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Not Found!");
    } else {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end(error.message);
    }
  });
}

module.exports = Main;
