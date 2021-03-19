const http = require('http');
const fs = require('fs');
const path = require ('path');

const hostname = '127.0.0.1';
const port = 3000;
const pathNameHTML = path.join(__dirname, '..', 'client', 'index.html')
const pathNameCSS = path.join(__dirname, '..', 'client', 'style.css')
const pathNameJS = path.join(__dirname, '..', 'client', 'script.js')


const server = http.createServer((req, res) => {

  res.statusCode = 200;
  // fs.readFile(pathName, (err, data) => {
  //   if (err) throw err;
  //   console.log(data)
  // });
  const htmlString = fs.readFileSync(pathNameHTML, 'utf8');
  const jsString = fs.readFileSync(pathNameJS, 'utf8');
  const cssString = fs.readFileSync(pathNameCSS, 'utf8');

  res.setHeader('Content-Type', 'text/html');
  res.write(htmlString);
  res.write(cssString)
  res.write(jsString)
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});