var http = require('http');
var server = http.createServer();
var io = require('socket.io')(server);

server.listen(8888);

io.on('connection', function (socket) {
	// console.log(socket.handshake);
	socket.emit('welcome', 'hello!'); // this connector
	io.emit('online', 'name'); // broadcast to all connectors except itself
	// socket.join('sharing-friday'); // join a room
	// socket.to('sharing-friday').emit('new-guy', 'name'); // broadcast to room
});