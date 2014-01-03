/**
 * Module dependencies.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    Record = require('./record.js');

mongoose.connect('mongodb://localhost/pq');

// Path to our public directory
var pub = __dirname + '/public';

var app = express();

// config
// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __express method
// is simply a function that engines
// use to hook into the Express view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__express`.
app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

// middleware
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('shhhh, very secret'));
app.use(express.session());
app.use(express.static(pub));

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
console.log('Record started on port 3000');

