const fs = require("fs");
const path = require("path");

function Search(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const stream = fs.createReadStream(
    path.join(__dirname, "..", "public", "movie.html")
  );
  stream.pipe(res);
}

module.exports = Search;
