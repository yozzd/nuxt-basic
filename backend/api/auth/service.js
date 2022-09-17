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

const isAuthenticated = () => async (req, res, next) => {
  if (!req.auth) {
    res.status(401).json('Access Denied / Forbidden');
  } else {
    const user = await Users.findOne({
      attributes: [
        'id', 'username', 'role',
      ],
      where: { username: req.auth.username },
    });

    if (!user) {
      res.status(401).json('Access Denied / Forbidden');
    }

    next();
  }
};

const isAdmin = () => async (req, res, next) => {
  if (!req.auth) {
    res.status(401).json('Access Denied / Forbidden');
  } else {
    if (req.auth.role === 'admin') {
      next();
    } else {
      res.status(401).json('Access Denied / Forbidden');
    }
  }
};

const hasRole = (role) => async (req, res, next) => {
  if (!req.auth) {
    res.status(401).json('Access Denied / Forbidden');
  } else {
    if (userRoles.indexOf(role) <= userRoles.indexOf(req.auth.role)) {
      next();
    } else {
      res.status(401).json('Access Denied / Forbidden');
    }
  }
};

module.exports = {
  verifyToken, signToken, isAuthenticated, isAdmin, hasRole,
};
