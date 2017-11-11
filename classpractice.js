const http = require('http');
const PORT = 1337;
const PORT2 = 8080;

function handleRequest(req, res) {
    res.end("ever think you can't do something? WRONG, you CAN" + req.url);
}

function handleRequest2(req, res) {
    res.end("git gud plz" + req.url);
}

const server = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest2);


server.listen(PORT, function () {
    console.log("Listening on port 1337");
});

server2.listen(PORT2, function () {
    console.log("Listen on port 8080");
});