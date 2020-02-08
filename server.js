
const http = require("http");
fs = require('fs');

// language=HTML
let goodResult = `<html>
<head>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Lato', sans-serif;
            text-align: center;
        }

        .text {
            margin-top: 20%;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 58px;
            color: #FFFFFF;
        }

        .button {
            background: #FFFFFF;
            border-radius: 6px;
            width: 300px;
            height: 100px;
            font-size: 30px;
            line-height: 58px;
        }

    </style>
    <meta charset="utf-8">
</head>
<body bgcolor="00AEAF">
<div class='block'>
    <p class='text'>
        Что ж, неплохо, но ты же не думал, что на этом всё закончится?
    </p>
    <br>

</div>
<br>
<br>
<a href="./step1.html">
    <input class='button' type="button" value="Начать страдать">
</a>

</body>
</html>`;
let badResult ='';
const server = http.createServer((req, res) => {
    let data = [];
    req.on('data', chunk => {
        data.push(chunk)

    });
    req.on('end', () => {

        data = Buffer.concat(data).toString();
        let pass=data.split('=');
        let password=pass[1];
        if (password==='374'){

            res.writeHead(200,{"Content-Type" : "text/html"});
            res.write(goodResult);

            res.end();
        }
        else{
            res.writeHead(200,{"Content-Type" : "text/html"});
            res.write(badResult);
            res.end();
        }


    });


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

