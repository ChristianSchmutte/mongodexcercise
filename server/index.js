const http = require('http');
const fs = require('fs');
const path = require ('path');
// const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;

const db = {
  msg: ['Hello there', 'General Kenobi']
};

const routerObj = {
  messages: handleMessages,
  index: handleIndexRequest
};

function handleIndexRequest (url, req, res) {
  const withExt = url === '/' ? 'index.html' : url;
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
}



function handleMessages (req, res) {
  const { headers, method, url } = req;
 
  // Store in DB
  // Reqeust Type?// DO CHANGES
  if (method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    // res.write(JSON.stringify(db.messages));
    res.end(JSON.stringify(db.msg))
  } else if (method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
      // console.log(body);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      db.msg.push(JSON.parse(body));
      console.log(db);
    });
    // TODO Send back JSON req;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
    
  }

    // GET? -> serve DB content, 
    // POST? -> store message in DB
  // retrieve from DB
  // respond with JSON
}

function router(url, req, res) {

  if (url === '/' || url.includes('style.css') || url.includes('script.js')) {
    handleIndexRequest(url, req, res);
    return;
  }
  url = url.replace('/', '');
  if (routerObj.hasOwnProperty(url)) {
    routerObj[url](req, res)
  } else {
    // Serve 404;
    // TODO Create 404 response;
    res.writeHead(404);
    res.end('These are not the droids, you are looking for');
  }
}

const server = http.createServer((req, res) => {


    router(req.url, req, res);


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});