const fs = require("fs");
const path = require("path");
const Render = require("../modules/render");

function NotFound(req, res) {
  Render(req, res, "404.html");
}

module.exports = NotFound;
