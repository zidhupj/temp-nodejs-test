const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        //res.write();
        res.end('Welcome to our home page.');
    }
    else if(req.url === '/about'){
        res.end('Here is our short history');
    }
    else{
        res.write(`<h1>Oop!!</h1>\n<a href="/">Back Home</a>`);
        res.end();
    }
    
});

server.listen(5000);