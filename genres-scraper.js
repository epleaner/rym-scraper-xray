var Xray = require('x-ray');
var x = Xray();

var genres = 'http://rateyourmusic.com/rgenre/';

 x(genres, ['.genre']).write('genres.json');
