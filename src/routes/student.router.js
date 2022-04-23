const { Router } = require('express');

const router = Router();

const student = require('../controllers/student.controller');

router.post('/', student.addStudent);

module.exports = router;