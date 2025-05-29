const http = require('http');
const fs = require('fs');
const url = require('url');

function main(request, response) {
    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;

    if (request.url === '/') {
        fs.readFile('./public/index.html', function(err, data) {
            response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
            response.write(data);
            response.end();
        })
    } else if (request.url === '/viewProd.js') {
        fs.readFile('./src/viewProd.js', function(err, data) {
            response.writeHead(200, {'content-type': 'text/javascript'});
            response.write(data);
            response.end();
        })
    } else if (pathname === '/product.html') {
        fs.readFile('./public/product.html', function(err, data) {
            response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
            response.write(data);
            response.end();
        })
    } else if (pathname === '/searchPage.html') {
        fs.readFile('./public/searchPage.html', function(err, data) {
            response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
            response.write(data);
            response.end();
        })
    } else if (request.url === '/oneProd.js') {
        fs.readFile('./src/oneProd.js', function(err, data) {
            response.writeHead(200, {'content-type': 'text/javascript'});
            response.write(data);
            response.end();
        })
    } else if (request.url === '/search.js') {
        fs.readFile('./src/search.js', function(err, data) {
            response.writeHead(200, {'content-type': 'text/javascript'});
            response.write(data);
            response.end();
        })
    } else if (request.url === '/style.css') {
        fs.readFile('src/style.css', function(err, data) {
            response.writeHead(200, {'content-type': 'text/css'});
            response.write(data);
            response.end();
        })
    } else if (request.url === '/image/icons8-right-100.png') {
        fs.readFile('./public/image/icons8-right-100.png', function(err, data) {
            response.writeHead(200, {'content-type': 'image/png'});
            response.write(data);
            response.end();
        })
    } else {
        fs.readFile('./public/errorPage.html', function(err, data) {
            response.writeHead(400, {'contant-type': 'text/html; charset=utf-8'});
            response.write(data);
            response.end();
        });
    }
}

const server = http.createServer((main));
server.listen(3000, '0.0.0.0');
console.log(`Сервер активен по адресу: http://localhost:3000`);