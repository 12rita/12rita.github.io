
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
            font-family: 'courier', sans-serif;



        }

        body {
            text-align: center;
            background-position: center;
            background-size: cover;
            background: linear-gradient(rgba(17, 12, 73, 0.5), rgba(39, 12, 73, 0.5)), url("http://2d.by/wallpapers/g/gory_6.jpg") no-repeat;


        }

        .block {

            text-align: left;

            margin-left: 15%;


        }

        .text {
            margin-top: 20%;
            font-style: normal;
            font-weight: normal;
            font-size: 48px;
            line-height: 58px;
            color: #FFFFFF;
        }

        .text1 {
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 58px;
            color: #FFFFFF;
        }

        .button {
            background: #FFFFFF;
            border-radius: 16px;
            width: 360px;
            height: 80px;
            font-size: 30px;
            line-height: 58px;
            font-weight: bold;
            color: #111638;
            border: none;
        }

        .button1 {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 300px;
            height: 100px;
            background: transparent;
            border: none !important;
            font-size: 0;
        }
        .button2 {
            background: #FFFFFF;
            border-radius: 16px;
            width: 200px;
            height: 80px;
            font-size: 30px;
            line-height: 58px;
            font-weight: bold;
            color: #111638;
            border: none;
        }
        .input {
            font-size: 30px;
            border-radius: 10px;
            width: 100px;
            height: 60px;
            text-align: center;
            border: none;

        }
        .audio {
            position: absolute;
            bottom: 0;
        }

    </style>
    <meta charset="utf-8">
</head>
<body bgcolor="00AEAF">
<div class='block'>
    <p class='text'>
        Что ж, неплохо, но ты же не думал, что на этом всё закончится?
        <br>
        <br>
        8-7-13-20-29-11 <br> 5-10-3-1-15
    </p>
    <br>

</div>

</body>
</html>`;
let badResult =`<html>
<head>
<style>
     * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'courier', sans-serif;



}

body {
    text-align: center;
    background-position: center;
    background-size: cover;
    background: linear-gradient(rgba(17, 12, 73, 0.5), rgba(39, 12, 73, 0.5)), url("http://2d.by/wallpapers/g/gory_6.jpg") no-repeat;


}

.block {

    text-align: left;

    margin-left: 15%;


}

.text {
    margin-top: 20%;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 58px;
    color: #FFFFFF;
}

.text1 {
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 58px;
    color: #FFFFFF;
}

.button {
    background: #FFFFFF;
    border-radius: 16px;
    width: 360px;
    height: 80px;
    font-size: 30px;
    line-height: 58px;
    font-weight: bold;
    color: #111638;
    border: none;
}

.button1 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 100px;
    background: transparent;
    border: none !important;
    font-size: 0;
}
.button2 {
    background: #FFFFFF;
    border-radius: 16px;
    width: 200px;
    height: 80px;
    font-size: 30px;
    line-height: 58px;
    font-weight: bold;
    color: #111638;
    border: none;
}
.input {
    font-size: 30px;
    border-radius: 10px;
    width: 100px;
    height: 60px;
    text-align: center;
    border: none;

}
.audio {
    position: absolute;
    bottom: 0;
}

    </style>
    <meta charset="utf-8">
   
</head>
<body bgcolor="00AEAF">
<div class='block'>
    <p class='text'>
        Неа, попробуй ещё раз
    </p>
    <p class="text1">Введите пароль <br>
 </p>
    <form action="http://167.172.99.77:3000" method="post" id="myform">
        <input class ='input' type="password" id="login-pass" name="password">
        <button class = 'button2' type="submit" class="btn btn-default">А сейчас?</button>
    </form>

</div>
</body>
</html>`;

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

