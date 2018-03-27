
var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname +'./../../dist/')); //serves the index.html
app.listen(8081); //listens on port 3000 -> http://localhost:3000/

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'dist', 'index.html'));
});

module.exports = app;