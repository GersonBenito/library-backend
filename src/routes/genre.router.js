const { Router } = require('express');

const router = Router();

const genre = require('../controllers/genre.controller');
router.get('/', genre.getAllGenres);

module.exports = router;
