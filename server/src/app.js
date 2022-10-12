const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/root');

const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(morgan('dev'));
app.use(routes);

app.get('/', (req, res) => {
    res.send({ message: 'Server is listening' });
});

module.exports = app;
