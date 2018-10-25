const fs = require("fs");
const path = require("path");
const Request = require('../modules/request');
const url = require('url');

function Search(req, res) {
  const parsedUrl = url.parse(req.url, true);
  console.log(`req ${req}`);
  const title = parsedUrl.query.title;
  console.log(title);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  Request(title, (error, movie) => {
    if (error) throw error;
    // console.log(movie);
  })

  const stream = fs.createReadStream(
    path.join(__dirname, "..", "views", 'movie.html')
  );
  stream.pipe(res);
}

module.exports = Search;
