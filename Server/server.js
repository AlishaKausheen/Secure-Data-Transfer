var server = require('express');
var http = require('http').Server(server);
http.listen(3000, function () {
    console.log('server ready on 3000')
})