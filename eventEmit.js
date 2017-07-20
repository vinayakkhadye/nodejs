var events	= require('events');

var eventEmitter	= new events.EventEmitter();

eventEmitter.on('connection', function() {
	console.log("Connection Successfull");
	eventEmitter.emit('data_received');
});

eventEmitter.on('data_received',function(){
	console.log('date received successfully');
});

eventEmitter.emit('connection');

console.log('Program Ended');