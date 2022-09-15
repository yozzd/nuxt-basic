const { Router } = require('express');
const { index, createBook } = require('./controller');
const { isAdmin, hasRole } = require('../auth/service');

const router = new Router();

router.get('/', hasRole('operator'), index);
router.post('/', isAdmin(), createBook);

module.exports = router;
