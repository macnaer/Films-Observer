const fs = require("fs");
const path = require("path");
const Render = require("../modules/render");

function Home(req, res) {
  Render(req, res, "index.html");
}

module.exports = Home;
