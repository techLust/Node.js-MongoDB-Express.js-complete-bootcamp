// Import Modules

const fs = require("fs");
const server = require("http").createServer();

// Listen events

server.on("request", (req, res) => {
  //solution 1
  /*   
  fs.readFile("test-file.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
   */

  // Solution 2: Streams
  /*   
  const readable = fs.createReadStream("test-file.txtt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });
  readable.on("end", () => {
    res.end();
  });
  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  }); 
  */

  // Solution 3: Back pressure handling
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

// Start server
server.listen(4000, "127.0.0.1", () => {
  console.log(`Server runnig at port: 4000`);
});
