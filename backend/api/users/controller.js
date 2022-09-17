const Users = require('./model');

const index = async (req, res) => {
  try {
    const users = await Users.findAll();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

const me = async (req, res) => {
  try {
    const user = await Users.findOne({
      attributes: [
        'id', 'username', 'role',
      ],
      where: { username: req.auth.username },
    });

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new Users({
      username: req.body.username,
      password: req.body.password,
    });

    const user = await newUser.save();

    res.status(200).json(user);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send(err.errors[0].message);
    } else {
      res.status(500).send(err);
    }
  }
};

module.exports = { index, me, createUser };
