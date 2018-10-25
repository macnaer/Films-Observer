const http = require('http');
const api = require('./api');

function Request(title, callback) {
    const req = http.get(`http://www.omdbapi.com/?t=${title}&apikey=${api.apiKey}`, res => {
        if (res.statusCode !== 200) {
            callback(new Error(`Error: ${res.ststusMessage} (${res.statusCode})`))
            res.resume();
            return;
        }
        res.setEncoding('utf-8');
        let body = '';
        res.on('data', data => body += data);
        res.on('end', () => {
            let result = '';
            try {
                result = JSON.parse(body);
            }
            catch (error) {
                callback(error);
            }

            if (result.Response === "False") {
                return callback(new Error(`Film not found!`));
            }

            callback(null, result);
        })
    })
    req.on('error', error => callback(error));
}

module.exports = Request;