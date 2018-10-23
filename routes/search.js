const fs = require("fs");
const path = require("path");
const Render = require("../modules/render");
const axios = require("axios");
const api = require("../modules/api");

function Search(req, res) {
  axios
    .get("http://www.omdbapi.com/?t=terminator" + `&apikey=${api.apiKey}`)
    .then(data => {
      Render(req, res, "movie.html", data);
    })
    .catch(e => console.log(e));
}

module.exports = Search;
