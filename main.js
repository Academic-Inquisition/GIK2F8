const fs = require('fs');
const http = require('http');

const index = fs.readFileSync(`${__dirname}/html/index.html`)
const search = fs.readFileSync(`${__dirname}/html/search.html`)
const todo = fs.readFileSync(`${__dirname}/html/todo.html`)
const notFound = fs.readFileSync(`${__dirname}/html/404.html`)

const search_js = fs.readFileSync(`${__dirname}/js/search.js`)

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/index') {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(index)
  } else if (pathName === '/search') {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(search)
  } else if (pathName === '/todo') {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(todo)
  } else if (pathName === '/js/search.js') {
    res.writeHead(200, {'Content-type': 'text/javascript'})
    res.end(search_js)
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end(notFound)
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is listening on port 8000');
});