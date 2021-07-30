//********************CREATING WEB SERVER ******************* */

// CORE MODULES IMPORT

// "fs" module enables interacting with file system.
const fs = require("fs");
//built in module "http" allows networking capability such as building an http server.
const http = require("http");
//"url" module provides utilities for URL resolution and parsing
const url = require("url");

// OWN MODULES always import after core modules.
const replaceTemp = require("./modules/replaceTemplate");

//***************************CREATE SERVER********************* */

const tempOverView = fs.readFileSync("./templates/overview.html", "utf-8");
const cardView = fs.readFileSync("./templates/card.html", "utf-8");
const productView = fs.readFileSync("./templates/product.html", "utf-8");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
// "JSON.parse()" convert json data into JavaScript. if the text is valid json text.
const dataObj = JSON.parse(data);

/*  "Create server " accept two parameter "req" and "res" which will fired off each time when new 
request hit our server */
const server = http.createServer((req, res) => {
  //Parsing variables from URL's
  console.log(req.url);
  const pathName = req.url;

  //OVERVIEW PAGE
  if (pathName === "/" || pathName === "/overview") {
    /* writeHead() is an inbuilt http module property which sends a response header to the request  */
    res.writeHead(200, { "content-type": "text/html" });
    const cardHtml = dataObj.map((el) => replaceTemp(cardView, el));
    const output = tempOverView.replace("{%PRODUCT_CARDS%}", cardHtml);
    console.log(cardHtml);
    //"end()" is used to send back response to the client and signal to the server.
    res.end(output);

    // PRODUCT PAGE
  } else if (pathName === "/product") {
    res.end("This is PRODUCT PAGE");
  }

  //API PAGE
  /* "API" Besically a service from which we can request some data */
  else if (pathName === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);

    //NOT FOUND
  } else {
    // "writeHead" is used to write the header of a response.
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
  console.log(req.url);
  res.end("Hello from the server");
});

//************START SERVER*************** */
//"listen()" function accepts two parameter i.e "port number" and "host"
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port on 8000");
});
