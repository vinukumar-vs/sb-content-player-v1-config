const http = require('http')
const fs = require('fs')
var express = require('express');
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
    res.send('Hello World!')
   });


app.use(express.static("./app"));

app.get("/load", (req, response, next) => { 
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./app/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
   });