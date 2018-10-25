const fs = require("fs");
const path = require("path");

function Render(template, data, callback) {
  fs.readFile(path.resolve('views', template), 'utf-8', (error, template) => {
    if (error) return callback(error);
    if (!data) return template;

    const content = template.replace(/{{([^{}]*)}}/g, (place, props) =>{
      const math = data[props];
      return math || place;
    })
  })
}

module.exports = Render;
