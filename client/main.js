var RandomArr = [];
var XArr = [];

function Main(){
	var socket = io('http://localhost:8888');

	socket.on('welcome', function (data) {
		console.log(data);
	});

	socket.on('online', function (data) {
		console.log(data);
	});

	socket.on('random-num', function (data) {
		console.log(data);
	});

}