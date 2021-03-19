const http = require('http');
const fs = require('fs');
const path = require ('path');

const hostname = '127.0.0.1';
const port = 3000;
const baseClientPath = path.join(__dirname, '..' , 'client');
const pathNameHTML = path.join(__dirname, '..', 'client', 'index.html')
const pathNameCSS = path.join(__dirname, '..', 'client', 'style.css')
const pathNameJS = path.join(__dirname, '..', 'client', 'script.js')

const extensions = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg"
};

const server = http.createServer((req, res) => {
    const withExt = req.url === '/' ? 'index.html' : req.url;
    // if(req.url === '/') {
    //   withExt = 'index.html';
    // } else {
    //   withExt = req.url;
    // }
    fs.readFile(path.join(__dirname, '..', 'client', withExt), (err,data) => {
      if (err) {
        console.log(err)
        res.writeHead(404);
        res.end();
        return;
      }
        
      res.writeHead(200);
      res.end(data);
    });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});