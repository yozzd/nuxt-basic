const Books = require('./model');

const index = async (req, res) => {
  try {
    const books = await Books.findAll();

    res.status(200).json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = new Books(req.body);

    const book = await newBook.save();

    res.status(200).json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { index, createBook };
