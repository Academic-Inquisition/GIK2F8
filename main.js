const fs = require('fs');
const http = require('http');

const index = fs.readFileSync(`${__dirname}/html/index.html`)
const search = fs.readFileSync(`${__dirname}/html/search.html`)
const todo = fs.readFileSync(`${__dirname}/html/todo.html`)
const notFound = fs.readFileSync(`${__dirname}/html/404.html`)

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
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end(notFound)
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is listening on port 8000');
});