var events	= require('events');
var eventEmitter	= events.EventEmitter();

var listner1	= function  listner1(){
	console.log("listner1 executed successfully");
}

var listner2	= function  listner2(){
	console.log("listner2 executed successfully");
}

eventEmitter.addListener('connection',listner1);

eventEmitter.on('connection',listner2);

var eventListnerCount	= require('events').EventEmitter.listnerCount(eventEmitter,'connection');
console.log(eventListnerCount+' Listner(s) listening to connection event');

eventEmitter.emit('connection');

eventEmitter.removeListner('connection',listner1);

eventEmitter.emit('connection');

var eventListnerCount	= require('events').EventEmitter.listnerCount(eventEmitter,'connection');
console.log(eventListnerCount+' Listner(s) listening to connection event');

console.log("Program Ended");