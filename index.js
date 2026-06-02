const http = require('http');
const port = process.env.PORT || 3000;
const tasks = [
  { id: 1, title: 'Setup DxP platform', done: true },
  { id: 2, title: 'Deploy task-api', done: false }
];
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (req.url === '/tasks') {
    res.end(JSON.stringify({ tasks, platform: 'DxP' }));
  } else {
    res.end(JSON.stringify({ service: 'task-api', status: 'ok', platform: 'DxP' }));
  }
}).listen(port, () => console.log(`task-api running on port ${port}`));
