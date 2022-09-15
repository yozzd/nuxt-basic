const { Router } = require('express');
const Users = require('../users/model');
const { setup } = require('./passport');
const { login } = require('./controller');

setup(Users);

const router = new Router();

router.post('/login', login);

module.exports = router;
