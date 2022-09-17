const { Router } = require('express');
const { index, createBook, updateBook, deleteBook } = require('./controller');
const { isAdmin, hasRole } = require('../auth/service');

const router = new Router();

router.get('/', hasRole('operator'), index);
router.post('/create', isAdmin(), createBook);
router.post('/update', hasRole('operator'), updateBook);
router.post('/delete', isAdmin(), deleteBook);

module.exports = router;
