var Socket = {
	Init: function(){
		console.log('socket starts...');
		var socket = io('http://localhost:8888');
		this.socket = socket;
		this.Listen(socket);
	},
	Listen: function(socket){
		socket.on('welcome', function (data) {
			console.log(data);
		});

		socket.on('return_stockdata', function (data) {
			hichart.series[0].setData(data);
		});

		socket.on('new_guy_joined', function (data) {
			console.log(data);
			this.msg_area = $('#msg_area');
			var text_str = '<i>' + data + ' has joined...</i><br>';
			this.msg_area.append(text_str);
		});

		socket.on('receive_msg', function (data) {
			console.log(data);
			this.msg_area = $('#msg_area');
			var text_str = '<p><b>' + data.user + '</b>: ' + data.say + '</p><br>';
			this.msg_area.append(text_str);
		});

	},
	Emit: function(event, msg){
		this.socket.emit(event, msg);
	}
};

// function Main(){
// 	var socket = io('http://localhost:8888');

// 	socket.on('welcome', function (data) {
// 		console.log(data);
// 	});

// 	socket.on('online', function (data) {
// 		console.log(data);
// 	});

// 	socket.on('random-num', function (data) {
// 		console.log(data);
// 	});

// }
