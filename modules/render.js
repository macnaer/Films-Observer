const fs = require("fs");
const path = require("path");

function Render(req, res, template, data) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const stream = fs.createReadStream(
    path.join(__dirname, "..", "public", template)
  );
  stream.pipe(res);
}

module.exports = Render;
