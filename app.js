var express = require('express');
var cnt = require('./cnt/cnt.js');
var app = express();

app.set('view engine','ejs');
console.log(__dirname);
app.use(express.static('/assets'));
cnt(app);
app.listen(3000, '127.0.0.1');