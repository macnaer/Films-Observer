const fs = require("fs");
const path = require("path");

function Home(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", 'text/html');
  const stream = fs.createReadStream(
    path.join(__dirname, "..", "views", 'index.html')
  );
  stream.pipe(res);
}

module.exports = Home;
