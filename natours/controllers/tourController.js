const fs = require('fs');

// Access file
const tours = JSON.parse(fs.readFileSync(`./dev-data/data/tours-simple.json`));

// PARAM MIDDLEWARE

exports.checkID = (req, res, next, val) => {
  console.log(`The tour id is ${val}`);
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid Details',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  console.log(req.body.name);
  if (!req.body.name || req.body.price) {
    return res.status(400).json({
      status: 'Fail',
      message: 'Missing name or price',
    });
  }
  next();
};

//API's (HANDLER's)
//get tour
exports.getTour = (req, res) => {
  console.log(req.params);
  console.log('This is get tour section');

  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    res.status(404).json({
      status: 'Fail',
      message: 'invalid id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: { tour },
  });
};
//GET(get all tours)
exports.getAllTour = (req, res) => {
  console.log('Entering into API');
  console.log(req.params);

  res.status(200).json({
    status: 'success',
    results: tours.lenth,
    requestAt: req.requestTime,
    data: {
      tours,
    },
  });
};

//POST(create tour)
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

// PATCH(update tour)
exports.updateTour = (req, res) => {
  /*   if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid Details",
    });
  } */
  res.status(200).json({
    status: 'Success',
    data: {
      tour: 'Updated tour here..',
    },
  });
};

//DELETE(delete tour)
exports.deleteTour = (req, res) => {
  // param milddleware created abouve.

  /*   if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid tour",
    });
  } */

  // "204" means No content.
  res.status(204).json({
    status: 'Success',
    data: {
      tour: 'null',
    },
  });
};
