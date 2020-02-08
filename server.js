
const http = require("http");

// let Server=new http.Server();
// server.on('request', function (rew,res) {
// re.end('hello');
// })

http.createServer(function(request, response){

console.log(request.headers);
    response.write("<h2>hello world</h2>");
    response.end();

}).listen(3000);