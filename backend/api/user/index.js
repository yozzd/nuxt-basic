const { Router } = require('express');
const { index, createUser } = require('./controller');

const router = new Router();

router.get('/', index);
router.post('/', createUser);

module.exports = router;
