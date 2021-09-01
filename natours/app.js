const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//THIRD PARTY MIDDLEWARE
app.use(morgan("dev"));

//MIDDLEWARE
// "use()" is used to add middleware.
app.use(express.json());

app.use(express.static(`${__dirname}/public`));
// CREATE OWN MIDDLEWARE
// Each middleware we access request and response and "next" function.
app.use((req, res, next) => {
  console.log("Entering into middleware");
  // if (req.method == "POST") return res.send("Post request under maintainence");
  // console.log("completed middleware opration");
  next();
});

//INSERT "ISO" DATE FORMAT MIDDLEWARE
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// *************** KILL NODE PROCESS ***********
// killall -9 node

// const tours = JSON.parse(fs.readFileSync(`./dev-data/data/tours-simple.json`));
// console.log(tours);

//************ REFACTORING API BY SEPERATING HANDLER FUNCTION ****************
// GET
// We can pass multiple id(parameter) into URL and specify optional parameter  with "?"
/* const getAllTour = (req, res) => {
  console.log("Entering into API");
  console.log(req.params); */
//----------------Responding to URL parameter--------------------

// CONVERT INTO STRING (TRICK);
/*   const id = req.params.id * 1;
  // console.log(id);
  const tour = tours.find((el) => el.id === id); */
/*   const id = req.params.id * 1;
    if (id > tours.length) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    } */

/*   if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  } */

/* res.status(200).json({
    status: "success",
    results: tours.lenth,
    requestAt: req.requestTime,
    data: {
      tours,
    },
  });
};

//POST
const createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    "./dev-data/data/tours-simple.json",
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

// PATCH
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid Details",
    });
  }
  res.status(200).json({
    status: "Success",
    data: {
      tour: "Updated tour here..",
    },
  });
};

//DELETE
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid tour",
    });
  }
  // "204" means No content.
  res.status(204).json({
    status: "Success",
    data: {
      tour: "null",
    },
  });
};
 */
//******************** USER **************** */
/* const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined",
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined",
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "Error",
    message: "This route is not yet defined",
  });
}; */
//****************************** ROexpressr("/api/v1/user");
// We can pass multiple id(parameter) into URL and specify optional parameter  with "?"
// app.get("/api/v1/tours", getAllTour);
// tourRouter.route("/").get(getAllTour).post(createTour);

// tourRouter.patch(updateTour).delete(deleteTour);

// CHAINING ROUTES
/* userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser); */

//CREATING AND MOUNTING MULTIPLE ROUTERS(middleware)

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/user", userRouter);

// ************************** RUNNING SERVER **********************
/* const port = 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}....`);
});
 */
module.exports = app;
