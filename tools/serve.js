/* Server statis sederhana untuk pratinjau lokal: node tools/serve.js [port] */
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.argv[2]) || 8080;
const root = path.resolve(__dirname, '..');

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(root, urlPath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(root, '404.html'), (e2, notFound) => {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(notFound || 'Not found');
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, () => console.log(`KWU dev server: http://localhost:${port}`));
