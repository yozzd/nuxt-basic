const User = require('./model');

const index = (req, res) => {
  try {
    const users = [
      { username: 'admin', role: 1 },
      { username: 'yossie', role: 2 },
      { username: 'guest', role: 3 },
    ];

    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
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

module.exports = { index, createUser };
