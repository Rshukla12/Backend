const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({
        "data": "Hello World!"
    }));
});

server.listen(3000, () => {
    console.log("Server is running on port 3000")
});