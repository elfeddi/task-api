const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    service: 'task-api',
    status: 'ok',
    platform: 'DxP'
  }));
}).listen(port, () => {
  console.log(`task-api running on port ${port}`);
});
