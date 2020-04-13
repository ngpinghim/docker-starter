var fs = require('fs');
var path = require('path');

var timeNow = new Date;
var fileName = timeNow.getFullYear() + '-'
    + (timeNow.getMonth() + 1) + '-'
    + timeNow.getDate() + '-'
    + timeNow.getHours() + '-'
    + timeNow.getMinutes() + '-'
    + timeNow.getSeconds() + '.txt';

fs.writeFile(path.resolve('./data/' + fileName), 'File written at ' + timeNow.toLocaleTimeString(), 'utf8', function(err) {
    console.log('File written at ' + timeNow.toLocaleTimeString());
});
