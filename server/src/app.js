const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/root');

const app = express();

app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

app.get('/*', (req, res) => {
    res.sendFile(path.join(path.join(__dirname, '..', 'public', 'index.html')));
});

module.exports = app;
