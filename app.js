//app.js
const ss = require('socket.io-stream');
const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');
// app.use(express.static('/index.html'));
const bodyParser = require('body-parser');
//start listening
const server = app.listen(process.env.PORT || 5678, () => {
  console.log('Example app listening on port 5678!');
});
// wrap socket around server
const io = socket(server);
// listen for sockets as they connect to the server
io.sockets.on('connection', (socket) => {
  // tell socket to listen for a 'radio' event
  socket.on('radio', function(stream) {
    console.log(stream);
    
    // emit voice stream data to all sockets
    socket.broadcast.emit('voice', stream);
  });
});

// io.sockets.on('audio',(audio) => {
//   console.log(audio);
// })
 


app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/',(req, res) =>{
  console.log(req.body);
  res.sendStatus(201);
})
app.post('/api',(req, res) =>{
  res.sendStatus(202);
})
app.get('/api', (req, res) => {
  res.status(200).send('gimme the light');
})

module.exports = app