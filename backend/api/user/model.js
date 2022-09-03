const { DataTypes } = require('sequelize');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sequelize } = require('../../config');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'This username is already taken',
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const salt = genSaltSync(10);
      this.setDataValue('password', hashSync(value, salt));
    },
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'tbl_user',
  underscored: true,
});

User.prototype.authenticate = function compare(password) {
  const pwgen = compareSync(password, this.password);

  if (pwgen) {
    return true;
  }
  return false;
};

module.exports = User;
