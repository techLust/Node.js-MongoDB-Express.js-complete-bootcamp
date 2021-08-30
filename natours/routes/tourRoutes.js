const express = require("express");
const fs = require("fs");

const tours = JSON.parse(fs.readFileSync(`./dev-data/data/tours-simple.json`));
// console.log(tours);

// const tours = "";
// const tours = JSON.parse(fs.readFileSync("./tours-simple.json"));
// const tours = JSON.parse(fs.readFileSync("./tours-simple.json"));

const getAllTour = (req, res) => {
  console.log("Entering into API");
  console.log(req.params);

  res.status(200).json({
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

const router = express.Router();

router.route("/").get(getAllTour).post(createTour);

router.route("/:id").patch(updateTour).delete(deleteTour);

// EXPORT
module.exports = router;
