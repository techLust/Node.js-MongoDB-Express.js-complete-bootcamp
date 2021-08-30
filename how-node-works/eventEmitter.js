// To use "Eventemitter" import "event" module
const EventEmitter = require("events");
const http = require("http");

// Create new "Emmiter"
const myEmitter = new EventEmitter();

// Observe event.
myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("New sale is going on");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} stock left`);
});
// Triggere event
myEmitter.emit("newSale", 9);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  res.end("Another request :)");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Waiting for request...");
});
