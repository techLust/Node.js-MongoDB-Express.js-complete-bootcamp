const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Read variable from the file and save them into node js environment variable
dotenv.config({ path: './config.env' });

const app = require('./app');

/*  CHECK ENVIRONMENT(it is a global variable that are used to define in which a node
 app are running) */

console.log(app.get('env'));
// console.log(process.env);

// DATABASE CONNECTION
//Fetch password
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true, // These are used in order to deal with some deprecation warning
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    //console.log(con.connection); // It shows full details of a connection;
    console.log('Database conncetion successful');
  });

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at port ${port}....`);
});
