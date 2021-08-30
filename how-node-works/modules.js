// "argumentes" is an array that contains all the values that are passed in a function.

/* 
console.log(arguments);
console.log(require("module").wrapper); 
*/

// EXPORT OWN MODULES
// module.export
const calculator = require("./test-module-1");

const calc_one = new calculator();
console.log(calc_one.add(2, 7));

// export
// const calculator_two = require("./test-module-2");
const { add, mul, div } = require("./test-module-2");
console.log(add(2, 5));
console.log(mul(6, 9));
console.log(div(2, 6));

// Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
