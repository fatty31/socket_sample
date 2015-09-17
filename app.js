var http = require('http');
var server = http.createServer();
var io = require('socket.io')(server);

server.on('request', function(req, res){
	if(req.method == 'GET' && req.url == '/askData'){
		res.statusCode = 200;
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Content-Type", "application/json");
		var results = {data: dynamicData};
		res.write(JSON.stringify(results));
		res.end();
	}
});

io.on('connection', function (socket) {
	// console.log(socket.handshake);
	// emit to this connector
	socket.emit('welcome', 'socket connected..');
	// broadcast to all connectors include itself
	// io.emit('online', 'name');
	// join a room
	// socket.join('sharing-friday');
	// broadcast to room
	// socket.to('sharing-friday').emit('new-guy', 'name');
	socket.on('ask_stockdata', function(msg){
		console.log(msg);
		setInterval(function(){
			socket.emit('return_stockdata', dynamicData);
		}, 1000);
	});
	
	socket.on('new_guy_online', function(name){
		console.log(name + ' just came in @' + new Date());
		io.emit('new_guy_joined', name);
	});

	socket.on('send_msg', function(chatObj){
		console.log(chatObj);
		io.emit('receive_msg', chatObj);
		// socket.emit('receive_msg', chatObj);
	});
});

var port = 8888;
server.listen(port, function(){
	console.log('Server on listening at port: ' + port);
	dataCreator();
});

function dataCreator(){
	setInterval(function(){
		var x = Math.floor((Math.random() * 15000) + 1);
		dynamicData.push(x);
		dynamicData.shift();
	}, 1000);
}

var dynamicData = ['0','0','0','0','0','0','0','0','0','0'];
