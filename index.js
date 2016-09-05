// TODO: Get Layouts, for all the ejs files.

var express = require('express'),
partials = require('express-partials'),
app = express(),
http = require('http')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', function(req,res){
  res.render('landing');
});
app.get('/login', function(req,res){
  res.render('login');
});
app.get('/home', function(req, res){
  res.render('home');
});
app.listen(8080, function(){
  console.log("Server listening on port 8080!");
});
