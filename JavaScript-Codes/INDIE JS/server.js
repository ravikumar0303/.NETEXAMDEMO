var http=require('http');
var fs=require('fs');
var count=0;
var onReceive=function(_req,res){
    var data=fs.readFileSync("bouncingball.html","utf-8");
    res.write(data);
    count++;
    console.log("Launching bouncingball app "+count);
    res.end();
}
var server = http.createServer(onReceive);

server.listen(9000);