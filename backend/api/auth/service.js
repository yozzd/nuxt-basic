const jwt = require('jsonwebtoken');
const { expressjwt } = require('express-jwt');
const { config: { secret, userRoles } } = require('../../config');
const Users = require('../users/model');

const verifyToken = expressjwt({
  secret: secret.session,
  algorithms: ['HS256'],
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring(req) {
    if (
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      return req.headers.authorization.split(' ')[1];
    } if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  },
});

const signToken = (id, username, role) => jwt.sign({ id, username, role }, secret.session, {
  expiresIn: 60 * 60 * 2,
});

const isAuthenticated = () => async (err, req, res, next) => {
  if (!req.auth) {
    throw new Error('Access Denied / Forbidden');
  } else {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({
        message: 'No authorization token was found',
      });
    } else {
      const user = await Users.findOne({
        attributes: [
          'id', 'username', 'role',
        ],
        where: { username: req.auth.username },
      });

      if (!user) {
        return res.status(401).json({
          message: 'Cannot find the user',
        });
      }

      next();
    }
    throw new Error('Access Denied / Forbidden');
  }
};

const hasRole = (role, fn) => async (req, res) => {
  if (!req.auth) {
    throw new Error('Access Denied / Forbidden');
  } else {
    if (userRoles.indexOf(req.auth.role) >= userRoles.indexOf(role)) {
      const user = await fn(...[req, res]);
      return user;
    }
    throw new Error('Access Denied / Forbidden');
  }
};

module.exports = {
  verifyToken, signToken, isAuthenticated, hasRole,
};
