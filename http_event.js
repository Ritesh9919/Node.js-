const http = require('http');


const server = http.createServer((req, res) => {
    if(req.method == 'POST') {
        console.log(req.body);
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log(body);
            res.end('Data is recieved');
        })
        
    } else {
        res.end('Welcome to node.js');
    }
    
});

server.listen(8000, ()=> {
    console.log(`Server is running on port: ${8000}`);
})