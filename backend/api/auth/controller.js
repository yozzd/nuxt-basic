const passport = require('passport');
const { signToken } = require('./service');

const authLocal = (req, res) => new Promise((resolve, reject) => {
  passport.authenticate('local', async (err, user, info) => {
    const error = err || info;
    if (error) {
      reject(new Error(error.message));
    }
    if (!user) {
      reject(new Error('Something went wrong, please try again'));
    }

    const { id, username, role } = user;
    const token = await signToken(id, username, role);

    resolve({ token });
  })(req, res);
});

const login = async (req, res) => {
  try {
    const token = await authLocal(req, res);
    res.status(200).json(token);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { login };
