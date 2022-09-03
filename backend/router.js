const user = require('./api/user');

const router = (app) => {
  app.use('/api/user', user);
};

module.exports = router;
