const fs = require("fs");
const path = require("path");
const Request = require("../modules/request");
const Render = require("../modules/render");
const url = require("url");

function Search(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const title = parsedUrl.query.title;
  console.log(title);

  Request(title, (error, movie) => {
    Render("movie.html", movie, (error, html) => {
      console.log(movie);
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(res.message);
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    });
  });
}

module.exports = Search;
