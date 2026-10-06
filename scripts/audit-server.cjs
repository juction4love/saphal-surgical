const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.argv[2] || 'out');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpeg':'image/jpeg','.webp':'image/webp','.png':'image/png','.json':'application/json','.xml':'application/xml','.woff2':'font/woff2','.mjs':'text/javascript'};
http.createServer((req,res) => {
  const name = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file = path.resolve(root, '.' + name);
  if (!file.startsWith(root + path.sep) && file !== root) {res.writeHead(403).end();return;}
  if (name === '/') file = path.join(root,'index.html');
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file += '.html';
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {res.writeHead(404).end();return;}
  res.setHeader('Content-Type',types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(Number(process.argv[3] || 3100),'127.0.0.1',()=>console.log('Audit server ready'));
