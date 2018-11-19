var fs = require('fs');
var rawdata = fs.readFileSync('./assets/dataset.json');
var dataset = JSON.parse(rawdata);

module.exports = function(app){
    app.get('/index', function(req,res){
        res.render('index',{ex : dataset});
    });
};