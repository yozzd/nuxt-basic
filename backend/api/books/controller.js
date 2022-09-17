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

const updateBook = async (req, res) => {
  try {
    const book = await Books.findOne({
      attributes: [
        'id', 'title', 'description', 'author', 'publisher',
        'publicationDate', 'pages', 'language', 'isbn',
      ],
      where: { id: req.body.id },
    });

    Object.assign(book, req.body);

    const save = await book.save();

    res.status(200).json(save);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { index, createBook, updateBook };
