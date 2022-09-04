const auth = require('./api/auth');
const user = require('./api/user');

const router = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/user', user);
};

module.exports = router;
