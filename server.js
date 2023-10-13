const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
    res.write("Hello from server");
    if(req.url == '/first') {
        return res.end('First');
    }
    res.end('Second');
});

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})