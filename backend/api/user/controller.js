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

module.exports = { index };
