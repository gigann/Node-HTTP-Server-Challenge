import http from 'node:http';

const server = http.createServer((req, res) => {
    res.end('Hello, Galvanize!');
});

server.listen(3000, "localhost", () => {
    console.log(`Server running at http://localhost:3000/`);
});