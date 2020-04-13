var axios = require('axios');

var id = 0;

setInterval(function() {
    axios.post('http://05_receiver:3000', {
        id,
    })
    .then(function(response) {
        console.log('Response ID ' + response.data.id + ' received');
    });
    id++;
}, 1000);
