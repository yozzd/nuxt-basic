const auth = require('./api/auth');
const books = require('./api/books');
const users = require('./api/users');

const router = (app) => {
  app.use('/api/auth', auth);
  app.use('/api/books', books);
  app.use('/api/users', users);
};

module.exports = router;
