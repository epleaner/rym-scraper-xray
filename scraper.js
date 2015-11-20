var Xray = require('x-ray');
var x = Xray();

var scraper = {
    scrapeGenre: function(genre) {
        genre = genre.replace(' ', '+');
        var url = 'http://rateyourmusic.com/customchart?page=1&chart_type=top&type=album&year=alltime&genre_include=1&include_child_genres=1&genres=' + genre + '&include_child_genres_chk=1&include=both&origin_countries=&limit=none&countries='

        return x(url, 'table.mbgen tr', [{
                artist: '.artist',
                album: '.album',
                rank: '.ooookiig',
                year: '.mediumg',
                genres: '.genre',
                ratings: 'a:contains("Avg rating:")'
            }])
            .write();
    }
}

 module.exports = scraper;
