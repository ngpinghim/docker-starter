var express = require('express');
var app = express();
app.use(express.json());

app.all('*', function(request, response) {
    console.log('Request ID ' + request.body.id + ' received');
    response.json({
        id: request.body.id
    });
});

app.listen(3000, function() {
    console.log('Receiver listening on port 3000');
});
