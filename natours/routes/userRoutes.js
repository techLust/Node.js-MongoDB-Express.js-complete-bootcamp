const express = require('express');

const userController = require('./../controllers/userController');

// we can use by destructuring
// const {getAllUsers,} = require("./../controllers/userController");

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

//EXPORT
module.exports = router;
