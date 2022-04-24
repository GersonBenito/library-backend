const { Router } = require('express');

const router = Router();

const user = require('./user.router');
router.use('/user', user);

const book = require('./book.router');
router.use('/book', book);

const genre = require('./genre.router');
router.use('/genre', genre);

module.exports = router;