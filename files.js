//***************** BLOCKING SYNCHRONOUS APPROACH **************************** */

// IMPORT "FILE SYSTEM MODULE"

/*"require" is a built-in function. It is the easiest way to include modules that exist
in seperate file. It reads and executes JS file and proced to return export object */

const fs = require("fs");



// READ FILE
/* "readFileSync()" takes two argument i.e path and character encoding type */
const textIn = fs.readFileSync("./node-farm/txt/input.txt", "utf-8");
console.log(textIn);

//WRITE FILE
/* "readFileSync()" takes two argument i.e path(where o/p file to be stored and output variable */
const textOut = `This is what we know about file: ${textIn}. \n Created on ${Date.now()}`;
fs.writeFileSync("./node-farm/txt/output.txt", textOut);

//**************** NON-BLOCKING ASYNCHRONOUS APPROACH ***************************** */
console.log(`------------------Asynchronous----------`);
fs.readFile("./node-farm/txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("File not found");
  fs.readFile(`./node-farm/txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./node-farm/txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(
        "./node-farm/txt/final.txt",
        `${data2}\n${data3}`,
        "utf-8",
        (err) => {
          console.log("Your file has been written");
        }
      );
    });
  });
});
console.log("File will read");