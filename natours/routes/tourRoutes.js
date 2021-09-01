const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

router.param(
  "id",
  tourController.checkID
  /*  (req, res, next, val) => {
  // console.log(`The tour id is ${val}`);
  next();
} */
);

router
  .route("/")

  .get(tourController.getAllTour)
  // chaining multiple middleware.
  .post(tourController.checkBody, tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

// EXPORT
module.exports = router;
