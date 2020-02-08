
const http = require("http");

const server = http.createServer((req, res) => {
    let data = [];
    req.on('data', chunk => {
        data.push(chunk)

    });
    req.on('end', () => {
        JSON.parse(data)
    });
    res.end();
});
server.listen(3000);

// let Server=new http.Server();
// server.on('request', function (rew,res) {
// re.end('hello');
// })

// http.createServer(function(req, res){
//
//     let data = [];
//     req.on('data', chunk => {
//         data.push(chunk)
//     });
//     req.on('end', () => {
//         JSON.parse(data)
//     });
// // console.log(request.headers);
// //     response.write('<h2>hello world</h2>');
//     console.log(data);
//     res.end();
//
// }).listen(3000);

