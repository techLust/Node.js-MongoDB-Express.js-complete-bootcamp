//********************CREATING WEB SERVER ******************* */

// import "fs" module
const fs = require("fs");
//built in module "http" allows networking capability such as building an http server.
const http = require("http");
//"url" module provides utilities for URL resolution and parsing
const url = require("url");

//CREATE SERVER
const data = fs.readFileSync(
  "./node-farm/dev-data/data.json",
   "utf-8");
const dataObj = JSON.parse(data);

const dataOverView = fs.readFileSync(
  "./node-farm/templates/overview.html",
  'utf-8') 
/*  "Create server " accept two parameter "req" and "res" which will fired off each time when new 
request hit our server */

const server = http.createServer((req, res) => {
  //"end()" is used to send back response to the client and signal to the server.
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200,{"content-type": "text/html"});
    res.end(dataOverView);


  } else if (pathName === "/product") {
    res.end("This is PRODUCT PAGE");
  } 
  /* "API" Besically a service from which we can request some data */
  else if (pathName === "/api") {
    res.writeHead(200, {"content-type": "application/json"})
      res.end(data);
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

//START SERVER

//"listen()" function accepts two parameter i.e "port number" and "host"
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port on 8000");
});

//************** API ************** */


