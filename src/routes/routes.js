const { Router } = require('express');

const router = Router();

const student = require('./student.router');
router.use('/student', student);

const book = require('./book.router');
router.use('/book', book);

module.exports = router;