
var express = require('express');
var _ = require('underscore');
var app = express();
var placesController = require('./placesController');

const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  // send is for string
  let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

  var compliment = _.sample(compliments);
  var color = _.sample(colors);
  console.log (compliment);
  console.log (color);
  // var body = document.querySelector('body');
  // body.style.backgroundColor = color;
  res.send("Hello, " +  compliment);
});

app.get('/:name', function(req, res) {
  // send is for string
  let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

  var name = req.params.name;

  var compliment = _.sample(compliments);
  var color = _.sample(colors);
  console.log (compliment);
  console.log (color);
  // var body = document.querySelector('body');
  // body.style.backgroundColor = color;
  res.send("Hello " + name + ", " +  compliment);
});


app.listen(PORT, function() {
  console.log(`listening on port  ${PORT}`);
});
