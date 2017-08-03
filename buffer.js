var buf1 = new Buffer(100);
var buf2 = new Buffer([10,0,0]);
var buf3 = new Buffer("Simple Easy Learning","utf-8");

buf2.write("vinayakkhadye");
for (var i=0; i<97; i++){
	buf1[i]	= i+34;
}
var json = buf1.toJSON(buf1);
console.log(buf1);
console.log("buf2 "+ buf2.toString());
console.log("buf3 "+ buf3.toString());

