const Book = require('./model');

const index = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);

    const book = await newBook.save();

    res.status(200).json(book);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { index, createBook };
