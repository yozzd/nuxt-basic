const { Router } = require('express');
const { index, createBook } = require('./controller');

const router = new Router();

router.get('/', index);
router.post('/', createBook);

module.exports = router;
