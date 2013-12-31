/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    Record = require('./record.js');

mongoose.connect('mongodb://localhost/pq');

var app = express();

// config

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// middleware

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('shhhh, very secret'));
app.use(express.session());

app.get('/', function(req, res){
  res.render('index');
});

app.post('/record', function(req, res){
  var record = new Record({item: req.body.item});
  record.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.send(req.body.item);
    }
  });
});

app.get('/record', function(req, res){
  Record.find(function(err, records){
    if(err){
      console.log(err);
    }else{
      res.send(records);
    }
  });
});

app.listen(3000);
console.log('Express started on port 3000');

