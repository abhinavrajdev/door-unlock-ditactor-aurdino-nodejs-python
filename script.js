var http = require('http'); // Import Node.js core module

var stats= "unlock";
var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        res.setHeader('Content-Type', 'text/html'); 
        res.setHeader(
            "Access-Control-Allow-Origin",
            "https://app.abhraj.com"
          );
          res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
          );
          res.end(JSON.stringify({ stats: stats }))
        
    }
    else if (req.url == "/stats") {
        
        res.setHeader('Content-Type', 'text/html'); 
        res.setHeader(
            "Access-Control-Allow-Origin",
            "http://127.0.0.1:3000"
          );
          res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
          );
          res.end(JSON.stringify({ stats: stats }))
    }
    else if (req.url == "/setStatsUnlock") {
        stats= "unlock";
        res.setHeader('Content-Type', 'text/html'); 
        res.setHeader(
            "Access-Control-Allow-Origin",
            "http://127.0.0.1:3000"
          );
          res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
          );
          res.end(JSON.stringify({ stats: stats }))
    }
    else if (req.url == "/setStatsLock") {
        stats= "lock";
        res.setHeader('Content-Type', 'text/html'); 
        res.setHeader(
            "Access-Control-Allow-Origin",
            "https://app.abhraj.com.com"
          );
          res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
          );
        res.write(stats);
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')