var express = require('express');
var jsonServer = require('json-server');

const port =5000;

// Returns an Express server
var server = express();

server.use('/api', jsonServer.defaults()); 
server.use('/api', jsonServer.router('db.json'));

server.use(express.static("./build"));
server.use(function (req, res) {
    res.sendFile("./build/index.html", { root: __dirname });
    console.log(__dirname);
});

server.listen(port,()=>{
    console.log(`listening on port ${port}`);
});