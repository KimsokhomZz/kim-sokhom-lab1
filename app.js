const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello18');
});

module.exports = app;
