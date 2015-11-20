var express = require('express');
var scraper = require('./scraper');
var genres = require('./genres.json');

var app = express();

app.get('/', function(req, res) {
    res.send(':)');
});

app.get('/genres/random', function(req, res) {
    var genre = genres[Math.floor(Math.random() * genres.length)];
    res.send(genre);
});

app.get('/genres/:genre', function(req, res) {
    var genre = req.params.genre;
    if (genres.indexOf(genre) > -1) {
        console.log(scraper);
        res.send(scraper.scrapeGenre(genre));
    } else res.send("Genre not found");
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
