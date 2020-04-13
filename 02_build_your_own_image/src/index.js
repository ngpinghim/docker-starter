var express = require('express');
var app = express();

var port = 3001;

app.all('*', function(request, response) {
    const timeNow = (new Date).toLocaleString();
    console.log('Request received ' + timeNow);
    response.type('text/plain');
    response.end('Response sent ' + timeNow);
});

app.listen(port, function() {
    console.log('Listening on port', port);
});
