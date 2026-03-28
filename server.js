const http = require('http');

// ✅ Define PORT correctly
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end("Hello from Render Deployment!");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});