const { Router } = require('express');
const { index, me, createUser } = require('./controller');
const { isAuthenticated } = require('../auth/service');

const router = new Router();

router.get('/', index);
router.post('/', createUser);
router.get('/me', isAuthenticated(), me);

module.exports = router;
