const auth = require('./api/auth');
const book = require('./api/book');
const user = require('./api/user');

const router = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/book', book);
  app.use('/api/user', user);
};

module.exports = router;
