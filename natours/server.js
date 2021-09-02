const dotenv = require('dotenv');

// Read variable from the file and save them into node js environment variable
dotenv.config({ path: './config.env' });

// START SERVER
const app = require('./app');

/*  CHECK ENVIRONMENT(it is a global variable that are used to define in which a node
 app are running) */

console.log(app.get('env'));
// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}....`);
});
