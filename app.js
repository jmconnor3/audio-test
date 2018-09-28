//app.js
const express = require('express')
const app = express()
const path = require('path');
const socket = require('socket.io');
// app.use(express.static('/index.html'));
const bodyParser = require('body-parser');
//server.js
const server = app.listen(5678, () => {
    console.log('Example app listening on port 5678!');
})
const io = socket(server);
io.sockets.on('connection', (socket) => {
  console.log(socket.conn.server.clientsCount);
  socket.on('radio', function(blob) {
    console.log('some dame sound');
    socket.emit('voice', blob);
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