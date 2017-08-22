var fs = require("fs");
var data = "This is Vinayak";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF-8');

// mark the end of file
writeStream.end();

writeStream.on('finish',function(){
	console.log("write completed");
});

writeStream.on('error',function(err){
	console.log(err.stack);
});
console.log("program ended");

