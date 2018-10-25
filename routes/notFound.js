const Render = require('../modules/render');

function NotFound(req, res) {
  Render('404.html', {error: "Not Found"}, (error, html) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end(error.message);
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html');
    res.end(html);
  });
}

module.exports = NotFound;
