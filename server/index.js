const http = require('http');
const fs = require('fs');
const path = require ('path');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;


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
  const { method } = req;
 
  // Store in DB
  // Reqeust Type?// DO CHANGES
  if (method === 'GET') {
    res.end('Thanks for the GET')
  } else if (method === 'POST') {
    res.end('Ah... I see you are a man of culture');
  }

    // GET? -> serve DB content, 
    // POST? -> store message in DB
  // retrieve from DB
  // respond with JSON
}

function router(url, req, res) {
  console.log(url);
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
  }
}

const server = http.createServer((req, res) => {


    router(req.url, req, res);


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});