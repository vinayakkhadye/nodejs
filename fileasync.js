var fs	= require('fs');

fs.readFile('input.txt',function(err,data){
	if(err){return console.error(err);}
	console.log("Asynchronus Read : " + data.toString());
});

var data	= fs.readFileSync('input.txt');
console.log("Synchronus Read : " + data.toString());

console.log("Program Ended");
