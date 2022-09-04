require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: process.env.DB_DIALECT,
    timezone: process.env.DB_TIMEZONE,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    define: {
      underscored: true,
    },
  },
);

const config = {
  host: process.env.BACKEND_HOST,
  port: process.env.BACKEND_PORT,
  secret: { session: process.env.SESSION_KEY },
  userRoles: process.env.USER_ROLES,
};

module.exports = { sequelize, config };
