const http = require("http");
const ProductsController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controllers");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/api/products" && req.method == "GET") {
    ProductsController.get(req, res);
  } 
  else if (req.url == "/api/products" &&
   req.method == "POST") {
    ProductsController.create(req, res);
  }
  else if (req.url.match(/\/api\/products\/[0-9]+/) &&
   req.method == "PUT" || req.method == "PATCH") {
    ProductsController.update(req, res);
  } 
  else if (req.url.match(/\/api\/products\/[0-9]+/) &&
   req.method == "GET") {
    ProductsController.getById(req, res);
  }else if (req.url.match(/\/api\/products\/[0-9]+/) &&
   req.method == "DELETE") {
    ProductsController.remove(req, res);
  } else {
    ErrorHandler.notFound(req, res);
  }
});

server.listen(PORT);
console.log(`the server is running on port ${PORT} \
http://localhost:${PORT}`);
