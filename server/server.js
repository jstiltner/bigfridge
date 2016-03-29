'use strict';
const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.use(express.static('./client'))

app.get('/', (req, res) => {
  res.render('index')
})

io.sockets.on('connection', (socket) => {
  //initialize interaction with database here


});


server.listen(PORT, function(err) {
    console.log(PORT)
    if(!err) { console.log("Listening on port " + PORT); }
});


