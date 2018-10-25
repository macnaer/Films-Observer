const Render = require('../modules/render');

function Home(req, res) {
  Render('index.html', null, (error, html) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end(error.message);
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/html');
    res.end(html);
  });
}

module.exports = Home;
