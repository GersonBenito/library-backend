const { Router } = require('express');

const router = Router();

const user = require('../controllers/user.controller');

router.post('/', user.addUser);
router.post('/login', user.login);
router.get('/role', user.getRole);

module.exports = router;