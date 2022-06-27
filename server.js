const express = require('express');
const app = express();``
const http = require('http');
const { dirname } = require('path');
const server = http.createServer(app);

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});