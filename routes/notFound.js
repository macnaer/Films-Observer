const fs = require("fs");
const path = require("path");
const Render = require("../modules/render");

function NotFound(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", 'text/html');
  const stream = fs.createReadStream(
    path.join(__dirname, "..", "views", '404.html')
  );
  stream.pipe(res);
}

module.exports = NotFound;
