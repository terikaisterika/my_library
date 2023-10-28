const express = require('express'),
  router = express.Router(),
  usersRoutes = require('./books.routes');

router.use('/books', usersRoutes);

module.exports = router;
