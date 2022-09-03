const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());
router(app);
app.listen(port, () => console.log(`Server running on port ${port}`));
