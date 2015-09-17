var Main = function(){};

var main_proto_ = Main.prototype;

main_proto_.init = function() {
	var me = this;
	$('#btn_call').click(function(){
		me.clientCall();
	});
	$('#btn_push').click(function(){
		me.serverPush();
	});
	$('#btn_enter').click(function(){
		me.enterRoom();
	});
	$('#btn_send').click(function(){
		var text = $('#chat_text').val();
		me.sendChat(text);
	});
};

main_proto_.clientCall = function() {
	$.get('http://localhost:8888/askData', function(results){
		dataFromServer = results.data;
		hichart.series[0].setData(dataFromServer);
		// dataFromServer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 100];
	});
};

main_proto_.serverPush = function() {
	Socket.Init();
	Socket.Emit('ask_stockdata', 'give me data please.');
};

main_proto_.enterRoom = function() {
	var name = prompt("Hi, Enter your name to start.");
	if(name.match(/^\w+$/i)){
		this.user_name = name;
		Socket.Init();
		Socket.Emit('new_guy_online', name);
		$('#chat_text').removeAttr('disabled');
	}else{
		name = prompt("Hi, Enter your name to start.");
	}
};

main_proto_.sendChat = function(chat_text) {
	var chatObj = {
		user: this.user_name,
		say: chat_text,
	};
	Socket.Emit('send_msg', chatObj);	
};

$(function () {
	var main = new Main();
	main.init();
});