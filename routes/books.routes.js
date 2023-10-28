const express = require('express'),
  router = express.Router(),
  BookController = require('../controllers/books.controllers'),
  BookServices = require('../services/books.services');

router.use(async (req, res, next) => {
  //let data = await UsersService.getUsers();

  next();
});

router.route('/').post(BookController.createBook).get(BookController.getBook);
// .get(UserController.getUsers)

// .put(UserController.updateUser)
// .delete(UserController.deleteUser);

module.exports = router;
